# POKEMON APP
This project is solution for [POKEMON APP task](https://docs.google.com/document/d/1tc3BgOHgEiVTRXIyBujZZObWk9v4b-4FsrScX5Uk0-I/edit?usp=sharing). 

App is  bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## About
App doesn't use Redux, but [Context API](https://reactjs.org/docs/context.html#dynamic-context) instead. 

App uses [ant design](https://ant.design) for UI components and [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for router.

## Context API
I built wrapper for Context API so I can use it similar to Redux. You can find code in `/src/context-store` folder. Wrapper has 2 components `Provider` and `connect`.

### Provider
Provider is React component that renders Context's Provider component with `actions`, `store` and `App component`.
```js
ReactDOM.render(
  <Provider actions={actions} state={initState}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

#### Actions 
Actions are function or Promises and they return part of state.
```js
export const getTypes = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${config.API_URL}types`
  })

  return data
}

export const toggleFavouritePokemons = (id, { favouritePokemons }) => {
  if (favouritePokemons.indexOf(id) !== -1) {
    return {
      favouritePokemons: favouritePokemons.filter(i => i !== id)
    }
  }
  return {
    favouritePokemons: [...favouritePokemons, id]
  }
}
```

#### Store
Store is object with application data, like Redux store.
```js
export const initState = {
  count: 0,
  types: [],
  pokemons: [],
  favouritePokemons: [],
  allPokemons: []
}
```

### Connect
Connect is function that returns React component wrapped into Context's Consumer component. 
Functions adds all actions in single object and part of store component is subscribed to. 
Connect is written like `react-redux connect` but it recieves 1 parameter which can be function like `react-redux connect` or array of strings with keys from store object.

```js
const mapStore = state => ({
  types: state.types,
  pokemons: state.pokemons.map(i => ({
    ...i,
    favourited: state.favouritePokemons.indexOf(i.id) !== -1
  })),
  count: state.count
})

export default connect(mapStore)(Home)

export default connect(['allPokemons'])(Details)
```