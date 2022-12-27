import React from 'react'
import ImageComponent from './ImageComponent'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Langs = [
  { name: 'gb', slug: 'gb' },
  { name: 'KA', slug: 'ge' },
  { name: 'RU', slug: 'ru' },
]

export default function MobileMenu({ navigation, mobileMenu, onAction }) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={mobileMenu ? { x: 0 } : { x: '100%' }}
      className='mobile-menu layout-wrap'>
      <div className='flx align-items-center gap-6'>
        <ul className='lang-area flx align-items-center'>
          {Langs.map((l) => {
            return <li className={'w-44 h-44 flx flx-all'}
              key={l.slug}>
              <span className={`${l.slug == 'gb' ? ' bordered b-radius-4' : null}`}>
                <ImageComponent alt={l.name} width={24} height={18} src={'/assets/img/flag-' + l.slug + '.svg'} />
              </span>
            </li>
          })}
        </ul>
        <div className='m-left-auto'>
          <div onClick={() => onAction && onAction(false)} className={'w-44 h-44 flx flx-all'}>
            <ImageComponent alt={'close action'} width={24} height={24} src={'/assets/img/close.svg'} />
          </div>
        </div>
      </div>
      <ul className='nav-list p-top-56'>
        {navigation.map((n) => {
          return <li key={n.slug} className={n.slug}>
            <Link href={n.slug}>
              <div className='icon-area'>
                <ImageComponent alt={n.slug} width={24} height={24} src={'/assets/img/' + n.slug + '.svg'} />
              </div>
              <div className='title'>{n.name}</div>
            </Link>
          </li>
        })}
      </ul>
    </motion.div>
  )
}
