# curl-to-json-cli

## Install 
```
npm install -g curl-to-json-cli
```
## Usage
```
c2j-cli -c "<your-curl>"
```
## Example 
```
c2j-cli -c "curl -X --request GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
--header 'xapi-key: 21432139847290402402190' \
--header 'Content-Type: text/html' \
--data-raw '{
    "name": "string",
    "name2": "string"
}'"
```

Output 
```
{
  method: 'GET',
  header: {
    'xapi-key': '21432139847290402402190',
    'Content-Type': 'text/html'
  },
  url: 'http://localhost:3001/search?search=react&asdfa=asfdaf',
  origin: 'http://localhost:3001',
  pathmane: "/search",
  params: { search: 'react', asdfa: 'asfdaf' },
  body: { name: 'string', name2: 'string' }
}
```


## Contributing

If you want to colaborate check the project's issues.

1. Fork the repository
2. Create a new branch
3. Implement your solution
4. Commit
5. Open a Pull Request

Thanks!
