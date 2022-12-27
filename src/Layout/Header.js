import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/Header.module.scss';
import ImageComponent from '../Components/ImageComponent';
import { ArrowIcon, Flag_GE } from '../Icons';
import Button from '../Shared/Button';
import { useScrollValue, useUser } from '../store';
import { motion } from 'framer-motion';
import variables, { useWindow } from '..';
import MobileMenu from '../Components/MobileMenu';

export default function Header({ navigation }) {
  const [user,] = useUser();
  const [scroll,] = useScrollValue();
  const [width,] = useWindow();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // console.log('scroll', scroll.scroll)
  }, [scroll])

  const useScroll = scroll && scroll.scroll;

  const motionStyle = {};

  if (mobileMenu && user && user.id) {
    Object.assign(motionStyle, { y: 20, opacity: 0 })
  }

  return (
    <div>
      <div className={classNames(styles.header, 'absolute top-0 w-full')}>
        <motion.div
          className='small-header'
          initial={useScroll > 0 && user && user.id || useScroll > 0 && width > 768 || mobileMenu && user && user.id ? { marginTop: 0 } : { marginTop: -variables['smallHeader'] }}
          animate={useScroll > 0 && user && user.id || useScroll > 0 && width > 768 || mobileMenu && user && user.id ? { marginTop: 0 } : { marginTop: -variables['smallHeader'] }}
        >
          {width > 968 ? <div className='layout-wrap h-full'>
            <div className='flx h-full'>
              <ul>
                {navigation.map((nav) => {
                  return <li key={nav.slug} className={nav.slug}>
                    <Link href={nav.url}>{nav.name}</Link>
                  </li>
                })}
              </ul>
              {user && !user.id ? <div style={{ width: 90 }} className='m-left-auto p-block-8'>
                <Button reset className={'h-full w-full auth-btn'} size='small' variant='text' text="შესვლა" />
              </div> : <div className='flx align-items-center gap-12 m-left-auto  b-radius-12'>
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
              </div>}
            </div>
          </div> : <div className='flx align-items-center h-full layout-wrap'>
            <div>
              <Image alt='' width={15} height={20} src={`/assets/img/avatars/avatar${user.avatar ? user.avatar.path : '1'}.png`} />
            </div>
            <div className='flx m-left-auto gap-12'>
              <div>{user?.points ? user?.points?.amountOfPoints : '0'}</div>
              <ImageComponent width={20} height={20} src={'/assets/img/coin.png'} />
            </div>
          </div>}
        </motion.div>

        <motion.div
          animate={useScroll > 0
            ? width > 768 ? { marginTop: 46, ...motionStyle } : user && !user.id ? { marginTop: 0, ...motionStyle } : { marginTop: 46, ...motionStyle }
            : { marginTop: 0, ...motionStyle }}
          className={'header--wrap flx align-items-center' + (mobileMenu && user && user.id ? ' bitmoere' : '')}>
          <div className='logo-area'>
            <Link href={'/'}>
              <ImageComponent src={'/assets/img/pirveli-logo.png'} width={174} height={50} />
            </Link>
          </div>
          <div className='user-area m-left-auto flx align-items-center gap-12'>

            {user && user.isLoading ?
              <div key="loader" className='shimer w-90 h-40 b-radius-12'> </div>
              :
              !user.id
                ?
                <Link key="auth" href={process.env.AUTH_LINK || ''} target='_self'>
                  <Button variant={'primary'} size={'normal'} text={'შესვლა'} />
                </Link>
                : width > 968 ? <motion.div
                initial={{x: 0}}
                animate={(useScroll > 0) ? {y: -63} : {y: 0}}
                >
                <Link key="userInfo" href={process.env.PROFILE_LINK}>
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
                </Link>
                </motion.div> : null}
            <Button onClick={() => setMobileMenu(true)} variant='none' reset className={'flx flx-all md-hidden'} style={{ width: 34, height: 34 }}>
              <ImageComponent width={20} height={20} src={'/assets/img/burger.svg'} />
            </Button>
            {/* <Button variant={'outline'} className="flx align-items-center gap-12 p-inline-16 p-block-10">
            <Flag_GE />
            <ArrowIcon />
          </Button> */}
          </div>
        </motion.div>

        <MobileMenu onAction={(e) => setMobileMenu(e)} mobileMenu={mobileMenu} navigation={navigation} />
      </div>
    </div>
  )
}
