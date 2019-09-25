# Lifecycle dos Componentes

## Mounting / Unmounting (Montagem e Desmontagem)

- ### componentWillMount
  - O momento antes do componente ser montado

- ### componentWillUnmount
  - O momento antes do componente ser removido

- ### componentDidMount
  - O momento depois do componente ser montado
- - - -
## Updating (Atualização)

- ### componentWillReceiveProps (nextProps)
  - O momento em que o componente vai receber novas propriedades
  - Para ler as propriedades novas, basta ler a variável nextProps

- ### shouldComponentUpdate (nextProps, nextState) => bool
  - O componente deve ou não ser atualizado?
  - nextProps: Próximas Propriedades
  - nextState: Próximo Estado
  - retorna um boolean para saber se o componente será atualizado

- ### componentWillUpdate (nextProps, nextState)
  - O momento antes do componente ser atualizado
  - nextProps: Próximas Propriedades
  - nextState: Próximo Estado

- ### componentDidUpdate (prevProps, prevState)
  - O momento depois do componente ser atualizado
  - nextProps: Próximas Propriedades
  - nextState: Próximo Estado