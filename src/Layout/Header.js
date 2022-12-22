import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import styles from '../../styles/components/Header.module.scss';
import ImageComponent from '../Components/ImageComponent';
import { ArrowIcon, Flag_GE } from '../Icons';
import Button from '../Shared/Button';
import { useScrollValue, useUser } from '../store';
import { motion } from 'framer-motion';

export default function Header() {
  const [user,] = useUser();
  const [scroll,] = useScrollValue();

  useEffect(() => {
    console.log('scroll', scroll)
  }, [scroll])

  return (
    <div>
      <motion.div
        initial={scroll > { y: 0 }}
      ></motion.div>
      <div className={classNames(styles.header, 'absolute top-0 w-full')}>
        <div className='header--wrap flx align-items-center'>
          <div className='logo-area'>
            <Link href={'/'}>
              <ImageComponent src={'/assets/img/pirveli-logo.png'} width={174} height={50} />
            </Link>
          </div>
          <div className='user-area m-left-auto flx gap-12'>

            {user && user.isLoading ?
              <div key="loader" className='shimer w-90 h-40 b-radius-12'> </div>
              :
              !user.id
                ?
                <Link key="auth" href={process.env.REGISTER_LINK || ''} target='_self'>
                  <Button variant={'primary'} size={'normal'} text={'შესვლა'} />
                </Link>
                : <Link key="userInfo" href={process.env.PROFILE_LINK}>
                  <Button reset variant={'outline'} className="flx align-items-center gap-12">
                    <div className='p-left-16'>
                      <ImageComponent width={20} height={20} src={'/assets/img/coin.png'} />
                    </div>
                    <div>{user?.points ? user?.points?.amountOfPoints : '0'}</div>
                    <div className='w-40 h-40 b-radius-inherit bg-color-yellow flx flx-all'
                      style={user?.avatar && user?.avatar?.code ? {
                        backgroundColor: `#${user?.avatar?.code}`
                      } : {}}
                    >
                      <Image alt='' width={15} height={20} src={`/assets/img/avatars/avatar${user.avatar ? user.avatar.path : '1'}.png`} />
                    </div>
                  </Button>
                </Link>}

            {/* <Button variant={'outline'} className="flx align-items-center gap-12 p-inline-16 p-block-10">
            <Flag_GE />
            <ArrowIcon />
          </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
