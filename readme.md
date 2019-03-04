# Redux debouncer

### Install

```yarn add redux-debouncer```

### How to use

```js
import { makeReduxDebouncer } from 'redux-react-navigation-debouncer'


/**
 * @params { userTypes: [string], interval: number }
 */
const incrementDebounce = makeReduxDebouncer({ type: 'increment' })

const middleware = [
  /* your middleware */
  incrementDebounce
]
```
## Example
```js
  // debouncer for react navigator
  export const reactNavigationDebounce = makeReduxDebouncer({
    type: 'Navigation/NAVIGATE',
    compare: (current, prev) => current.routeName === prev.routeName,
  })
```
