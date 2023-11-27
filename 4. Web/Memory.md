## log current memory setting
```bash
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```

```bash
export NODE_OPTIONS="--max-old-space-size=5120" # Increase to 5 GB
```

