export const debouncerCreator = ({ userTypes = [], interval = 500 } = {}) => {
  let navLocked = false
  let lastRouteName = null
  let timerId = null
  const targetTypes = ['Navigation/NAVIGATE'].concat(userTypes)

  return () => (next) => (action) => {
    if (targetTypes.includes(action.type)) {
      if (navLocked && lastRouteName === action.routeName) {
        return
      }
  
      if (timerId) {
        clearTimeout(timerId)
        timerId = null
      }
  
      timerId = setTimeout(() => {
        navLocked = false
        timerId = null
      }, interval)
  
      navLocked = true
      lastRouteName = action.routeName
    }
  
    next(action)
  }
}
