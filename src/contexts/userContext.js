import React, { createContext } from 'react';
import users from '../data/users'

const UserContexts = createContext({})

export const UsersProvider = (props) => {
  return (
    <UserContexts.Provider value={{
      state: {
        users
      }
    }}>
      {props.children}
    </UserContexts.Provider>
  )
}



export default UserContexts;