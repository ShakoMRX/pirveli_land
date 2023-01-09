import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-color-dark-gray p-block-50'>
      <div className='layout-wrap'>
        <div className='row-container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6'>
              <div className='row-container'>
                <div className='row'>

                  <div className='col-md-6'>
                    <div className='text-head-main text-s-24 text-color-gray-2'>
                      <Link href={'/'}>
                        v.tvauri@optimogroup.io
                      </Link>
                    </div>
                    <div className='text-head-main text-s-20 text-color-gray-2 opacity-50 p-top-24'>
                      <Link href={'/'}>
                        ქ. თბილისი წერეთლის გამზირი 60
                      </Link>
                    </div>
                    <div className='text-head-main text-s-24 text-color-gray-2 p-top-20'>
                      <Link href={'/'}>
                        +995 598 23 08 23
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
                <li><Link href={'/'}>ზოგადი წესები</Link></li>
                <li><Link href={'/'}>ხშირად დასმული კითხვები</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
