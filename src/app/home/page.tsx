"use client"
import style from '@/app/home/page.module.css'
import { UserProps } from '@/types/types'
import User from '@/components/user/User'
import Error from '@/components/err/Error'

import Search from '@/components/serach/Search'
import React, { use }  from 'react'
import { useState } from'react'





const Home = () => {
    const [user, setUser] = useState <UserProps | null>(null)
    const [error, setError] = useState(false)

    const loadUser = async (userName: string) => {
      setError(false)
      setUser(null)


        const response = await fetch('https://api.github.com/users/' + userName)
        const data = await response.json()
   
        if (response.status === 404 ) {
          setError(true)
          return;
        }
       console.log(data)
        

      const {avatar_url, login, location, followers,following} = data;

      const userData: UserProps = {
        
         avatar_url,
         login,
         location,
         followers,
        following,
  

    };
    setUser(userData)
  };
  return (
    <>
    <div className={style.im}>
    <Search loadUser = {loadUser}  />
    {
      user &&  <User {...user}/>
    }
    {
      error && <Error />
    }
    
    </div>
    </>
  )
}

export default Home