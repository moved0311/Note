baseUrl='https://news.cnyes.com/news/id'
data=`curl https://api.cnyes.com/media/api/v1/newslist/category/tw_stock?limit=100 -H "Accept: applcation/json;charset=UTF-8" | jq '.items.data'`
# data='[
#   {
#     "newsId": 5072217,
#     "title": "韓媒：台積電、蘋果、Sony緊密合作 南韓在半導體價值鏈角色不明"
#   },
#   {
#     "newsId": 5072278,
#     "title": "台積電摜壓 台股跌228點收15265點失守年線 1月仍漲1127點"
#   }
# ]'

echo $data

# for row in $(echo "${data}" | jq -r '.[] | @base64'); do
#   title=`echo ${row} | base64 --decode | jq -r '.title'`;
#   newsId=`echo ${row} | base64 --decode | jq -r '.newsId'`;
#   echo "* [$title]($baseUrl/$newsId)";
# done
