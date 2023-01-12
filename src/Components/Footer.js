import Link from 'next/link'
import React from 'react'
import ImageComponent from './ImageComponent'

export default function Footer() {
  return (
    <div className='bg-color-dark-gray footerContainer'>
      <div className='layout-wrap'>
        <div className='row-container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>პირველი</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li><Link href={'/'}>ჩვენს შესახებ</Link></li>
                <li><Link href={'/'}>გახდი ჩვენი პარტნიორი</Link></li>
                <li><Link href={'/'}>მიმდინარე ვაკანსიები</Link></li>
                <li><Link href={'/'}>ბლოგი</Link></li>
              </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>წესები და პირობები</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li><Link href={'https://s3.pirveli.com/v1/api/getFile?id=6574'} target='_blank'>ზოგადი წესები</Link>
                </li>
                <li><Link href={'/'}>ხშირად დასმული კითხვები</Link></li>
                <li><Link href={'http://s3.pirveli.com/v1/api/getFile?id=7300'} target='_blank'>კონფიდენციალურობის პოლიტიკა</Link></li>
              </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>შემოგვირთდი</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li>
                  <Link
                    target={'_blank'}
                    className='flx gap-4 items-center'
                    href="tel:+9950322185577">
                    <span><ImageComponent width={24} height={24} src={'/assets/img/phone.svg'}/></span>
                    <span className={"navItem"}>+995 032 2 18 55 77</span>
                  </Link></li>
                <li>
                  <Link
                    className='flx gap-4 items-center'
                    href="mailto:Info@pirveli.com">
                    <span><ImageComponent width={24} height={24} src={'/assets/img/mail.svg'}/></span>
                    <span className={"navItem"}>Info@pirveli.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='flx gap-4 items-center'
                    target={'_blank'}
                    href={'https://www.google.com/maps/place/1+%E1%83%96%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%97%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+T\'bilisi/@41.7329351,44.7618329,17z/data=!3m1!4b1!4m5!3m4!1s0x404472e433073823:0x980df233b8e06c33!8m2!3d41.7329351!4d44.7640216?coh=164777&entry=tt&shorturl=1'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/location.svg'}/></span>
                    <span className={"navItem"} style={{
                      textDecoration: "underline",
                    }}>თბილისი, ზოვრეთის ქ. #1</span>
                  </Link>
                </li>
              </ul>
            </div>


            <div className='col-12 col-sm-12 col-md-3 p-top-50 md-p-top-auto'>
              <h4 className='text-s-16 text-color-gray-2 opacity-40 p-bottom-24'>შემოგვირთდი</h4>
              <ul className='nav-list flx flx-col gap-24 text-color-white'>
                <li>
                  <Link
                    target={'_blank'}
                    className='flx gap-4 items-center'
                    href={'https://www.facebook.com/profile.php?id=100088325187616'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/fb.svg'}/></span>
                    <span className={"navItem"}>Facebook</span>
                  </Link></li>
                <li>
                  <Link
                    className='flx gap-4 items-center'
                    href={'/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/tk.svg'}/></span>
                    <span className={"navItem"}>TikTok</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='flx gap-4 items-center'
                    target={'_blank'}
                    href={'https://www.instagram.com/pirveli_pirveli/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/in.svg'}/></span>
                    <span className={"navItem"}>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='flx gap-4 items-center'
                    href={'/'}>
                    <span><ImageComponent width={24} height={24} src={'/assets/img/yt.svg'}/></span>
                    <span className={"navItem"}>Youtube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"copyrightWrap"}>
            <p>Copyright © 2022 our website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
