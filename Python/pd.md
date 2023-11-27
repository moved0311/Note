```py
(df_financial_statement['date'].str.contains('q4'))

```


``` 刪除重複資料
# delete duplicates
pd.read_sql_query(f"delete from monthlyRevenue where rowid not in \
                  (SELECT min(rowid) from monthlyRevenue GROUP BY id, date)" \
                  , db)
```

## Print

```python
print("、".join([f"{row['id']}{row['name']}" for index, row in df_bias.iterrows()]))
# 1475業旺、2704國賓、4977眾達-KY、6230尼得科超眾、6715嘉基、2739寒舍、1722台肥、4536拓凱、1104環泥、6670復盛應用
```