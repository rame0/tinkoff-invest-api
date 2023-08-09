#!/bin/bash
# Update proto files from https://github.com/Tinkoff/investAPI
# Usage: ./scripts/pull-proto.sh

set -euo pipefail

wget "https://github.com/Tinkoff/investAPI/archive/master.zip" -O proto.zip

if command -v unzip &>/dev/null; then
  unzip -o proto.zip
elif command -v 7z &>/dev/null; then
  7z x proto.zip
else
  echo "unzip or 7z required"
  exit 1
fi

rm -f proto.zip
