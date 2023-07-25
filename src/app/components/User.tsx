'use client'
import { formatDate } from '@/utils/convertDate'
import jsonData from '../../../data.json'
import { LuMapPin, LuLink, LuBuilding2, LuTwitter } from 'react-icons/lu'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

export const User = () => {
  const { data } = useContext(UserContext)

  const {
    avatar_url,
    name,
    login,
    bio,
    created_at,
    html_url,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
    message,
  } = data || jsonData

  return (
    <>
      {message && (
        <h1 className="font-bold text-2xl text-red-600">
          Error 404. We can&apos;t find this user
        </h1>
      )}

      <div className="flex flex-col bg-slate-800 rounded p-10">
        {name ? (
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {avatar_url && (
              <img
                className="w-32 h-32 rounded-full"
                src={avatar_url}
                alt="Avatar"
              />
            )}

            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex justify-between items-center w-full">
                <h2 className="font-bold text-xl">{name}</h2>
                <span className="text-slate-300">{formatDate(created_at)}</span>
              </div>
              <a
                className="font-bold text-cyan-700"
                href={html_url}
                target="__blank"
              >
                @{login}
              </a>
              <p className="text-slate-300 text-sm">{bio || 'No bio yet'}</p>

              <div className="flex mt-4 justify-around w-full p-4 bg-slate-900 rounded-md">
                <div className="flex flex-col gap-2">
                  <h3>Repos</h3>
                  <span className="font-bold text-lg">{public_repos}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>Followers</h3>
                  <span className="font-bold text-lg">{followers}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>Following</h3>
                  <span className="font-bold text-lg">{following}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 w-full gap-4">
                <div className="flex items-center gap-4">
                  <LuMapPin className="w-6 h-6" />
                  <span className="text-base">
                    {location || 'Not available'}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <LuTwitter className="w-6 h-6" />
                  <span className="text-base">
                    {twitter_username === null
                      ? 'Not available'
                      : `@${twitter_username}`}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <LuLink className="w-6 h-6" />
                  <span className="text-base">{blog || 'Not available'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <LuBuilding2 className="w-6 h-6" />
                  <span className="text-base">
                    {company || 'Not available'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="font-bold text-center text-xl">Search for a user</p>
        )}
      </div>
    </>
  )
}
