
import React from 'react'
import style from '@/components/user/user.module.css'


import { UserProps } from '@/types/types'




const User = ({
       login,
       avatar_url,
       location, 
       followers,
       following,
    }: UserProps) => {
  return (
    <>
    <div>
       
        <img src={avatar_url} alt={login} className={style.im} />
        <div>
            <h2>{login}</h2>
            <p>{location}</p>
            <p>{followers} seguidores</p>
            <p>{following} seguidos</p>
        </div>
        </div>
    </>
    
  )
}

export default User