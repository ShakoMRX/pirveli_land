import Link from 'next/link'
import React from 'react'
import ImageComponent from './ImageComponent'

export default function Footer() {
  return (
    <div className='bg-color-dark-gray p-block-50'>
      <div className='layout-wrap'>
        <div className='row-container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-3'>
              <div className='row-container'>
                <div className='row'>

                  <div className='col-md-12'>
                    <div className='text-head-main text-s-24 text-color-gray-2'>
                      <Link href={'mailto:info@pirveli.com'}>
                        info@pirveli.com
                      </Link>
                    </div>
                    <div className='text-head-main text-s-20 text-color-gray-2 opacity-50 p-top-24'>
                      <Link href={'/'}>
                        ქ.თბილისი, ზოვრეთის ქ #1
                      </Link>
                    </div>
                    <div className='text-head-main text-s-24 text-color-gray-2 p-top-20'>
                      <Link href={'call:032 2 18 55 77'}>
                        032 2 18 55 77
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>პირველი</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li><Link href={'/'}>ჩვენს შესახებ</Link></li>
                <li><Link href={'/'}>მიმდინარე ვაკანსიები</Link></li>
                <li><Link href={'/'}>ბლოგი</Link></li>
              </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>წესები და პირობები</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li><Link href={'https://s3.pirveli.com/v1/api/getFile?id=6574'} target='_blank'>ზოგადი წესები</Link></li>
                <li><Link href={'/'}>ხშირად დასმული კითხვები</Link></li>
              </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>შემოგვირთდი</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li>
                  <Link
                  target={'_blank'}
                    className='flx gap-4'
                    href={'https://www.facebook.com/profile.php?id=100088325187616'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/fb.svg'} /></span>
                    <span>Facebook</span>
                  </Link></li>
                <li>
                  <Link
                    className='flx gap-4'
                    href={'/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/tk.svg'} /></span>
                    <span>TikTok</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='flx gap-4'
                    target={'_blank'}
                    href={'https://www.instagram.com/pirveli_pirveli/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/in.svg'} /></span>
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='flx gap-4'
                    href={'/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/yt.svg'} /></span>
                    <span>Youtube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
