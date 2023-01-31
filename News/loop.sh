baseUrl='https://news.cnyes.com/news/id'

for row in $(cat './data.json' | jq -r '.[] | @base64'); do
  title=`echo ${row} | base64 --decode | jq -r '.title'`;
  newsId=`echo ${row} | base64 --decode | jq -r '.newsId'`;
  echo "* [$title]($baseUrl/$newsId)";
done