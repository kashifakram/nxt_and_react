#!/bin/bash

TARGET_DIR="."

counter=1

for f in "$TARGET_DIR"/*; do
	if [[ -f "$f" ]]; then
		ext="${f##*.}"
		mv "$f" "${counter}.${ext}"
		((counter++))
	fi
done

echo "all files renamed"

