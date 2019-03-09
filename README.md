# MotivaAi API [![Badge](https://img.shields.io/badge/built%20with-wedeploy-00d46a.svg?style=flat)](http://wedeploy.com)

> MotivaAi API - usando [Zeroserver](https://github.com/remoteinterview/zero) e [Wedeploy](https://wedeploy.com/)

**Demostração ~> https://api-motivaai.wedeploy.io/**

## Instalação

1. Clone o repositório `git clone https://github.com/nandomoreirame/motivaai-api.git`
2. `cd motivaai-api/ && yarn install`
3. `yarn dev` ou `yarn serve`

Abra http://localhost:3000 para todas as citações motivacionais

`ou`

http://localhost:3000/1 para apenas uma citação motivacional

## Uso

### Resources

**Requisição**

```
GET /
```

**Exemplo:**

```sh
curl -X GET https://api-motivaai.wedeploy.io/
```

**Retornar dados com todas as citações motivacionais**

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

---

**Requisição**

```
GET /quoteID
```

**Exemplo:**

```sh
curl -X GET https://api-motivaai.wedeploy.io/10
```

**Retorna dados com uma única citação motivacional**

```json
{
  "data": {
    "quote": "Há dois tipos de pessoas que dirão que você não pode fazer diferença nesse mundo: aquelas que tem medo de tentar e aquelas que temem que você consiga.",
    "author": "Ray Goforth"
  }
}
```

## Suporte

Por favor [abrir uma issue](https://github.com/nandomoreirame/motivaai-api/issues/new) para solicitar suporte.

## Contribuindo

Por favor use o [Github Flow](https://guides.github.com/introduction/flow/). Crie uma branch, Adicione seus commits, e [abra um pull request](https://github.com/nandomoreirame/motivaai-api/compare?expand=1).

1. Fork este repositório!
2. Crie sua branch de melhoria: git checkout -b my-new-feature
3. Commit suas alterações: git commit -m 'Add some feature'
4. De o Push para a sua branch: git push origin my-new-feature
5. Envie o seu pull request :D

## Autor

| [![twitter/oseunando](https://avatars6.githubusercontent.com/u/1318271?v=4&s=120)](http://twitter.com/oseunando "Siga @oseunando no Twitter") |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Fernando Moreira](http://twitter.com/oseunando)                                                                                              |

## Licença

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Código está sob a [licença MIT](/LICENSE) - © Fernando Moreira
