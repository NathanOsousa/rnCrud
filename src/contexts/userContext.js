import React, { createContext, useReducer } from 'react';
import users from '../data/users'

const UserContexts = createContext({})
const initialState = { users }
const actions = {
  deleteUser(state, action) {
    if (action.type === 'deleteUser') {
      const user = action.payload
      return {
        //...state,
        users: state.users.filter((u) => u.id !== user.id)
      }
    }
  }
}
export const UsersProvider = (props) => {

  const reducer = (state, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContexts.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContexts.Provider>
  )
}



export default UserContexts;