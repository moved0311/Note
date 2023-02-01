now=$(date +"%Y-%m-%d")

sh ./get.sh
sh ./loop.sh >> "${now}.md"
