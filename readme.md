# RN navigation debouncer

### Install

```yarn add redux-react-navigation-debouncer```

### How to use

```js
import { debouncerCreator } from 'redux-react-navigation-debouncer'


/**
 * @params { userTypes: [string], interval: number }
 */
const debouncer = debouncerCreator()

const middleware = [
    /* your middleware */
    debouncer
]
```
