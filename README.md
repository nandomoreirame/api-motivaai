# MotivaAi API

MotivaAi API using [Zeroserver](https://github.com/remoteinterview/zero) and [Wedeploy](https://wedeploy.com/)

demo ~> https://api-motivaai.wedeploy.io/

## Installation

1. Clone this repo `git clone https://github.com/nandomoreirame/motivaai-api.git`
2. `cd motivaai-api/ && yarn install`
3. `yarn dev` or `yarn serve`

Open http://localhost:3000 for all motivatioal quotes

`or`

http://localhost:3000/1 for single motivational quote

## Usage

### Resources

```
GET /
```

**Example:**

```sh
curl -X GET https://api-motivaai.wedeploy.io/
```

**Return data with all motivatioal quotes**

```json
{
  "data": [
    {
      "quote": "Sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      "author": "Winston Churchill"
    },
    ...
  ]
}
```


```
GET /quoteID
```

**Example:**

```sh
curl -X GET https://api-motivaai.wedeploy.io/10
```

**Return data with single motivatioal quote**

```json
{
  "data": {
    "quote": "Há dois tipos de pessoas que dirão que você não pode fazer diferença nesse mundo: aquelas que tem medo de tentar e aquelas que temem que você consiga.",
    "author": "Ray Goforth"
  }
}
```

## Support

Please [open an issue](https://github.com/nandomoreirame/motivaai-api/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/nandomoreirame/motivaai-api/compare?expand=1).
Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Author

| [![twitter/oseunando](https://avatars6.githubusercontent.com/u/1318271?v=4&s=120)](http://twitter.com/oseunando "Follow @oseunando on Twitter") |
|---|
| [Fernando Moreira](http://nandomoreira.me) |

## License

Code is under [MIT License](/LICENSE) - © Fernando Moreira
