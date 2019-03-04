import test from 'ava'
import sinon from 'sinon'
import { makeReduxDebouncer } from './index'


test('Call next', (t) => {
  const next = sinon.spy()
  const debouncer = makeReduxDebouncer({ type: 'foo' })

  debouncer()(next)({ type: 'foo' })

  t.true(next.callCount === 1)
})

test('Custom type with compare', (t) => {
  const next = sinon.spy()
  const debouncer = makeReduxDebouncer({
    type: 'foo',
    compare: (current, prev) => current.param === prev.param,
  })

  debouncer()(next)({ type: 'foo', param: 1 })
  debouncer()(next)({ type: 'foo', param: 2 })

  t.true(next.callCount === 2)
})

test('Custom type with compare & equals params', (t) => {
  const next = sinon.spy()
  const debouncer = makeReduxDebouncer({
    type: 'foo',
    compare: (current, prev) => current.param === prev.param,
  })

  debouncer()(next)({ type: 'foo', param: 1 })
  debouncer()(next)({ type: 'foo', param: 1 })

  t.true(next.callCount === 1)
})
