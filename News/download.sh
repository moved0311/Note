now=$(date +"%Y-%m-%d")
baseUrl='https://news.cnyes.com/news/id'
from=$(date -jf "%Y-%m-%d %T" "$now 00:00:00" "+%s")
to=$(($from+60*60*24))

for page in {1}
do
  curl "https://api.cnyes.com/media/api/v1/newslist/category/tw_stock?limit=100&page=${page}&from=${from}&to=${to}" -H "Accept: applcation/json;charset=UTF-8" | jq '.items.data' > data.json

  for row in $(cat './data.json' | jq -r '.[] | @base64'); do
    title=`echo ${row} | base64 --decode | jq -r '.title'`;
    newsId=`echo ${row} | base64 --decode | jq -r '.newsId'`;
    publishAt=`echo ${row} | base64 --decode | jq -r '.publishAt'`;
    echo "* [$(date -r ${publishAt} +"%Y-%m-%d %T") $title]($baseUrl/$newsId)";
  done >> "${now}.md"
done