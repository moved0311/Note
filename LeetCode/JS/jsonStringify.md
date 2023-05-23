```ts
function jsonStringify(object: any): string {
  if (object === null) {
    return 'null';
  }

  if (Array.isArray(object)) {
    const elements = object.map((element: any) => jsonStringify(element));
    return `[${elements.join(',')}]`;
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map((key: string) => `"${key}":${jsonStringify(object[key])}`);
    return `{${keyValuePairs.join(',')}}`;
  }

  if (typeof object === 'string') {
    return `"${object}"`;
  }

  return String(object);
}
```

* [2633. Convert Object to JSON String](https://leetcode.com/problems/convert-object-to-json-string/description/)