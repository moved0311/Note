now=$(date +"%Y-%m-%d")
baseUrl='https://news.cnyes.com/news/id'

for page in {1..3}
do
  curl "https://api.cnyes.com/media/api/v1/newslist/category/tw_stock?limit=100&page=${page}" -H "Accept: applcation/json;charset=UTF-8" | jq '.items.data' > data.json

  for row in $(cat './data.json' | jq -r '.[] | @base64'); do
    title=`echo ${row} | base64 --decode | jq -r '.title'`;
    newsId=`echo ${row} | base64 --decode | jq -r '.newsId'`;
    echo "* [$title]($baseUrl/$newsId)";
  done >> "${now}.md"
done