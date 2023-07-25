'use client'
import { UserContext } from '@/contexts/UserContext'
import { ChangeEvent, useContext, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

export const Header = () => {
  const { handleSetUser, user } = useContext(UserContext)
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value
    setValue(val)
  }

  const handleClick = () => {
    value && handleSetUser(value)
  }

  return (
    <div className="p-8 md:p-0">
      <h1 className="font-black tracking-widest uppercase text-3xl">
        Github Finder
      </h1>

      <div className="relative mt-4">
        <LuSearch className="absolute left-3 top-4 text-cyan-700 w-6 h-6" />
        <input
          type="text"
          placeholder="Search Github username ..."
          className="w-full h-14 px-12 outline-none rounded-md bg-slate-800 placeholder:text-slate-50"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={() => handleClick()}
          className="absolute font-bold bg-cyan-700 p-2 right-2 top-2 rounded-md transition ease-out duration-300 hover:bg-cyan-600 shadow-sm"
        >
          Search
        </button>
      </div>
    </div>
  )
}
