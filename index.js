const defaultCompare = (currentAction, lastLockedAction) => true

export const makeReduxDebouncer = ({
  type,
  interval = 500,
  compare = defaultCompare } = {}
) => {
  let navLocked = false
  let lastLockedAction = {}
  let timerId = null

  return () => (next) => (action) => {
    if (type === action.type) {
      if (navLocked && compare(action, lastLockedAction)) {
        return
      }
  
      if (timerId) {
        clearTimeout(timerId)
        timerId = null
      }
  
      timerId = setTimeout(() => {
        navLocked = false
        timerId = null
        lastLockedAction = {}
      }, interval)
  
      navLocked = true
      lastLockedAction = action
    }
  
    next(action)
  }
}
