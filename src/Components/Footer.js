import Link from 'next/link'
import React from 'react'
import ImageComponent from './ImageComponent'

export default function Footer() {
  return (
      <div className={"fullfooter"}>
        <div className={"footerContainer layout-wrap"}>
          <div className={"leftSideContainer"}>
            <div className={"headerIcon"}>
              {/* <img
							src='/footerIcon.png'
							alt='headerIcon'
							className={classes.iconsStyle}
						/> */}
              <p className={"textTitle aveSofBold"}>პირველი</p>
              <Link href={'/aboutUsPage'}>
                <p className={"textStyle"}>ჩვენ შესახებ</p>
              </Link>
              {/* <Link href={''}>
								<Text style={classes.textStyle}>ხშირად დასმული კითხვები</Text>
							</Link> */}
              <Link href={''}>
								<span
                    className={"textStyle"}
                >
									გახდი ჩვენი პარტნიორი
								</span>
              </Link>
              <Link href={''}>
                <p className={"textStyle"}>მიმდინარე ვაკანსიები</p>
              </Link>
              <Link href={''}>
								<span
                    // onClick={() => [setOpen(true), setBecomePartner(false)]}
                    className={"textStyle"}
                >
									ბლოგი
								</span>
              </Link>


              {/* <div className={classes.allRightsText}> */}
              <p className={"allRightTextStyle"}>
                2022 © ყველა უფლება დაცულია. Pirveli.com
              </p>
              {/* </div> */}
            </div>
          </div>
          <div className={"firstRow"}>
            <div className={"companyConatiner"}>
              <Link href={'/'}>
                <p className={"textTitle aveSofBold"}>წესები და პირობები</p>
              </Link>

              <Link href='https://s3.pirveli.com/v1/api/getFile?id=6574'>
                <p className={"textStyle"}>ზოგადი წესები</p>
              </Link>
              <Link href='https://s3.pirveli.com/v1/api/getFile?id=7300'>
                  <p className={"textStyle"}>
                    კონფიდენციალურობის პოლიტიკა
                  </p>
              </Link>
              <Link href='/'>
                <p className={"textStyle"}>ხშირად დასმული კითხვები </p>
              </Link>
              <Link href=''>
                <p className={"textStyle"}>შეუკვეთე ჯანდაცვის ბარათი</p>
              </Link>
            </div>
          </div>
          <div className={"secondRow"}>

            <p className={"textTitle aveSofBold"}>კონტაქტი</p>

            <p className={"textStyle"}>
              <img
                  src='assets/footerIcon/P-Phone.svg'
                  alt='headerIcon'
              />
              +995 032 2 18 55 77
            </p>
            <p className={"textStyle"}>
              {' '}
              <img
                  src='assets/footerIcon/E-mail.svg'
                  alt='headerIcon'
              />
              info@pirveli.com
            </p>
            <a
                target={'_blank'}
                rel='noopener noreferrer'
                href={'https://goo.gl/maps/FJr1txtq9jTJhKQQA'}
            >
              <p className={"textStyle"}>
                <img
                    src='assets/footerIcon/F-Location.svg'
                    alt='headerIcon'
                />
                <p className={"textStyle"}>თბილისი, ზოვრეთის ქ.#1</p>
              </p>
            </a>

            <div className={"iconContainer"}>
              <a
                  className={"tooltipContainer"}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  href={
                    'https://www.facebook.com/profile.php?id=100088325187616'
                  }
              >
                <img
                    src='assets/footerIcon/facebook.svg'
                    alt='headerIcon'
                    className={"tooltip"}
                />
                <img
                    src='assets/footerIcon/FacebookActive.svg'
                    alt='headerIcon'
                    className={"tooltipActive"}
                />
              </a>

              <a
                  className={"tooltipContainer"}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  href={'https://www.instagram.com/pirveli_pirveli/'}
              >
                <img
                    src='assets/footerIcon/Instagram.svg'
                    alt='headerIcon'
                    className={"tooltip"}
                />
                <img
                    src='assets/footerIcon/InstagramActive.svg'
                    alt='headerIcon'
                    className={"tooltipActive"}
                />
              </a>

              <a
                  className={"tooltipContainer"}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  href={''}
              >
                <img
                    src='assets/footerIcon/Youtube.svg'
                    alt='headerIcon'
                    className={"tooltip"}
                />
                <img
                    src='assets/footerIcon/YoutubeActive.svg'
                    alt='headerIcon'
                    className={"tooltipActive"}
                />
              </a>
              <a
                  className={"tooltipContainer"}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  href={'https://www.linkedin.com/company/88047011'}
              >
                <img
                    src='assets/footerIcon/Linkdin.svg'
                    alt='headerIcon'
                    className={"tooltip"}
                />
                <img
                    src='assets/footerIcon/LinkdinActive.svg'
                    alt='headerIcon'
                    className={"tooltipActive"}
                />
              </a>
            </div>

            {/* </div> */}

            {/* <div className={classes.companyConatiner}>
								<Text style={classes.textTitle}>Social networks</Text>
								<div className={classes.iconContainer}>
									<img
										src='/facebook.svg'
										alt='facebook'
										className={classes.iconsStyle}
									/>
									<img
										src='/Instagram.svg'
										alt='instagram'
										className={classes.iconsStyle}
									/>
								</div>
							</div> */}
          </div>
          <div className={"thirdRow"}>
            <img
                src='assets/footerIcon/footer.png'
                alt='footer'
                width='591px'
                height='380px'
                className={"iconsStyle"}
            />
          </div>

          <div>
          </div>
        </div>

        <p className={"allRightStyle"}>
          2022 © ყველა უფლება დაცულია. Pirveli.com
        </p>
      </div>
  )
}
