const initialState = []

// Actions
const SAVE_DATA = 'saveData'

// ActionCreators
export const saveData = data => ({
  type: SAVE_DATA,
  data
})

// Reducers
const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return action.data
    }
    default:
      return state
  }
}

export default driversReducer
