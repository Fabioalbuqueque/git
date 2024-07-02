"use client"

type  SearchProps ={
    loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from 'react'

import React from 'react'
import style from './Search.module.css'
import { BsSearch } from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
   const [userName, setUserName] = useState('');

   const handleOnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter') {
         loadUser(userName)
      }
   }

  return (
    <>
    <h2 className={style.h2}> Busque por usuarios </h2>
         
    <div className={style.di}>
        <input type="text" placeholder="Digite o nome do usuário"
         className={style.inp} onChange={(e) => setUserName(e.target.value)} />
        <button type='submit' onClick={() => loadUser(userName)}
         className={style.btn} onKeyDown={handleOnKeyDown}><BsSearch className={style.bs} /></button>
    </div>
 </>
)
}

export default Search