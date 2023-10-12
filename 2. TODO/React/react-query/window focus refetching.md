https://tanstack.com/query/v4/docs/react/guides/window-focus-refetching

react-query 在focus window時會去refetch data, 例如從別的分頁切回來時,會去重打資料。

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}
```

在Provider的地方給 refetchOnWindowFocus: false 可以關閉