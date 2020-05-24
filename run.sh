#!/bin/bash
while true
do
	echo "e" >> README.md && git add -u && git commit -m "aa" && git push
	#sleep $(( ( RANDOM % 50 )  + 50 ))
done
