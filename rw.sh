#!/bin/bash
while true
do
    dd if=/dev/zero of=file count=8 bs=128M
    rm -f file
done
