#!/usr/bin/env python3

import os
import subprocess
import sys
from os import path
import re

verbose = True

def sh(cmd):
  if verbose:
    print("sh:", cmd)
  subprocess.run([ "bash", "-c", cmd ])

out_dir = "./src/generated"

def generate_ts_files():
  sh(f"mkdir -p {out_dir}")
  sh(f"rm -rf {out_dir}/**")

  gen_cmd = f"""protoc \\
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \\
  --ts_proto_out="{out_dir}" \\
  --ts_proto_opt="outputServices=nice-grpc" \\
  --ts_proto_opt="outputServices=generic-definitions" \\
  --ts_proto_opt="useExactTypes=false" \\
  --ts_proto_opt="env=node" \\
  --ts_proto_opt="esModuleInterop=true" \\
  --ts_proto_opt="outputPartialMethods=false" \\
  --ts_proto_opt="useOptionals=messages" \\
  --proto_path=./investAPI-main/src/docs/contracts \\
    ./investAPI-main/src/docs/contracts/*.proto
  """

  sh(gen_cmd)

def process_generated_file_lines(ls):
  result = []
  for l in ls:
    l: str
    regex = r"from\s+\"(\.[^\"]*)\";"
    if 'import * as _m0 from "protobufjs/minimal";' in l:
      result.append('import _m0 from "protobufjs/minimal.js";\n')
    elif re.search(regex, l):
      result.append(l.replace('";', '.js";'))
    else:
      result.append(l)
  return result


def process_all_generated_files():
  for root, dirs, files in os.walk(out_dir):
    for fn in files:
      fp = path.join(root, fn)
      if verbose:
        print("... processing file", fp)
      with open(fp, "r", encoding="utf-8") as f:
        ls = f.readlines()
      ls = process_generated_file_lines(ls)
      with open(fp, "w", encoding="utf-8") as f:
        f.writelines(ls)

generate_ts_files()
process_all_generated_files()
