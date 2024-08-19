```css
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

*::-webkit-scrollbar {
  display: none;
}
```


```
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
```