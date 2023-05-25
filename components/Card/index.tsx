import React from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'
import { AiFillHeart } from 'react-icons/ai'
import { BsChatFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { Post } from '../../interfaces'

type CardProps = {
  card: Post
}

export default function Card({card}: CardProps) {

  const user_in_photo = card?.metadados?.users_in_photo[0]?.user?.username;

  return (
    <div className={styles.wrapper}>
      <Image
        src={card.imagens.resolucaoPadrao.url}
        alt="Logo Squidit"
        width={200}
        height={200}
      />
      <div className={styles.overlay}>
        <p>{user_in_photo ? `@${user_in_photo}` : '@squidinfluencers'}</p>
        <p><AiFillHeart/>{`${card.upvotes}`}</p>
        <p><BsChatFill/> {`${card.comentarios}`}</p>
        <p><FaCalendarAlt/>{`${new Date(card.criadoEm).toLocaleDateString()}`}</p>
      </div>
    </div>
  )
}
