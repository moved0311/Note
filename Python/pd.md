```py
(df_financial_statement['date'].str.contains('q4'))

```


``` 刪除重複資料
# delete duplicates
pd.read_sql_query(f"delete from monthlyRevenue where rowid not in \
                  (SELECT min(rowid) from monthlyRevenue GROUP BY id, date)" \
                  , db)
```