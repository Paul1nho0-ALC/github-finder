'use client'

import { ReactNode, createContext, useState } from 'react'

interface IUserData {
  user: string
  handleSetUser: (user: string) => void
  data: any
}

export const UserContext = createContext({} as IUserData)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('')
  const [data, setData] = useState({})

  const handleSetUser = (user: string) => {
    setUser(user)
    handleLoadUser(user)
  }

  const handleLoadUser = async (user: string) => {
    const response = await fetch(`https://api.github.com/users/${user}`)

    const data = await response.json()

    console.log(data)

    setData(data)
  }

  return (
    <UserContext.Provider value={{ user, handleSetUser, data }}>
      {children}
    </UserContext.Provider>
  )
}
