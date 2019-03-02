import test from 'ava'
import sinon from 'sinon'
import { debouncerCreator } from './index'


function callMiddleware(fn, next, action) {
  fn()(next)(action)
}

test('Call next', (t) => {
  const next = sinon.spy()
  const action = { type: 'Navigation/NAVIGATE', routeName: 'screen1' }
  const navigationDebouncer = debouncerCreator()

  callMiddleware(navigationDebouncer, next, action)

  t.true(next.callCount === 1)
})

test('Dont call second next', (t) => {
  const next = sinon.spy()
  const action = { type: 'Navigation/NAVIGATE', routeName: 'screen1' }
  const navigationDebouncer = debouncerCreator()

  callMiddleware(navigationDebouncer, next, action)

  t.true(next.callCount === 1)
})

test('Call second action immediately with another action', (t) => {
  const next = sinon.spy()
  const action = { type: 'Navigation/NAVIGATE', routeName: 'screen1' }
  const someAction = { type: 'action', routeName: 'screen2' }
  const navigationDebouncer = debouncerCreator()

  callMiddleware(navigationDebouncer, next, action)
  callMiddleware(navigationDebouncer, next, someAction)

  t.true(next.callCount === 2)
})
