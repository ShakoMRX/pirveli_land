import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'
import styles from '../../styles/components/Header.module.scss';
import ImageComponent from '../Components/ImageComponent';
import { ArrowIcon, Flag_GE } from '../Icons';
import Button from '../Shared/Button';
import { useUser } from '../store';

export default function Header() {
  const [user,] = useUser();

  return (
    <div className={classNames(styles.header, 'absolute top-0 w-full')}>
      <div className='header--wrap flx align-items-center'>
        <div className='logo-area'>
          <Link href={'/'}>
            <ImageComponent src={'/assets/img/pirveli-logo.png'} width={174} height={50} />
          </Link>
        </div>
        <div className='user-area m-left-auto flx gap-12'>
          {!user ? <Button variant={'primary'} size={'normal'} text={'შესვლა'} /> : null}
          {user
            ? <Link href={process.env.PROFILE_LINK}>
              <Button reset variant={'outline'} className="flx align-items-center gap-12">
                <div className='p-left-16'>
                  <ImageComponent width={20} height={20} src={'/assets/img/coin.png'} />
                </div>
                <div>40,076</div>
                <div className='w-40 h-40 b-radius-inherit bg-color-yellow flx flx-all'>
                  <ImageComponent width={20} height={20} src={'/assets/img/avatar.png'} />
                </div>
              </Button>
            </Link>
            : null}
          {/* <Button variant={'outline'} className="flx align-items-center gap-12 p-inline-16 p-block-10">
            <Flag_GE />
            <ArrowIcon />
          </Button> */}
        </div>
      </div>
    </div>
  )
}
