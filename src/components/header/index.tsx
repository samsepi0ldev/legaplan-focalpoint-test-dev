import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import ptBr from 'dayjs/locale/pt-br'

import logo from '@/assets/logo.svg'

import './index.scss'

dayjs.locale(ptBr)

export function Header() {
  const formattedDate = dayjs().format('dddd[, ]DD[ de ]MMMM[ de ]YYYY')
  return (
    <div className='header-task'>
      <Image src={logo} alt="Focal Point" className='flex-shrink-0'/>
      <h3 className='text-black text-2xl font-medium'>Bem-vindo de volta, Marcus</h3>
      <span className='text-base text-black-alpha'>
        {formattedDate}
      </span>
    </div>
  )
}
