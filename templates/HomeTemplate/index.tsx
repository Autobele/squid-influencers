import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import logo from '/public/assets/logo.svg'
import styles from './Home.module.scss'
import Card from '../../components/Card'
import PostService from '../../services/post.service'
import { Post } from '../../interfaces'
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

export default function HomeTemplate() {
  const [post, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    PostService.get().then(({ data }) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  {post.length === 0 && <></>}

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={`${styles.logoWrapper}`}>
        <Image
          src={logo}
          alt="Logo Squidit"
        />
      </div>
      {/* LIST CARD */}
      <div className={`${styles.wrapperGrid}`}>
        <div className={`${styles.grid}`}>
          {loading && (
            Array.from({length: 18}).map((_, index) => (
              <Skeleton
                key={index}
                height="200px"
                width="200px"
                containerClassName="avatar-skeleton"
              />
            ))
          )}
          {!loading && post?.map((card, index) => {
            return (
              <Link key={index} href={card.link} target='_blank'>
                <Card card={card}/>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
