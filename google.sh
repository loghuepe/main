while true
do
	curl -s --output /dev/null  "https://www.google.com?$(date +%s)" &
	curl -s --output /dev/null "https://www.youtube.com?$(date +%s)" &
	for i in {1..200}
	do
	   curl  --output /dev/null  "https://gitlab.com/explore/projects?page=$i"
	done
done
