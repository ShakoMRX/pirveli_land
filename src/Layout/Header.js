import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react'
import styles from '../../styles/components/Header.module.scss';
import ImageComponent from '../Components/ImageComponent';
import {ArrowIcon, Flag_GE} from '../Icons';
import Button from '../Shared/Button';
import {useScrollValue} from '../store';
import {AnimatePresence, motion, useMotionValue, useScroll} from 'framer-motion';
import variables, {useOutsideClick, useWindow} from '..';
import MobileMenu from '../Components/MobileMenu';
import {isServer} from '../utils';
import axios from "axios";
import {useRouter} from 'next/router'

const LanguageSwitchButton = ({className, close, variant = 'outline', animate, initial, exit, languages, reset}) => {
  const [scroll] = useScrollValue();
  const {ref, isOpen, setIsOpen} = useOutsideClick();

  // axios.interceptors.request.use((config) => {
  //   config.headers = {
  //     ...config.headers,
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzM0OTk1ODUsImlhdCI6MTY3MzQ2MzU5NywiYXV0aF90aW1lIjoxNjczNDYzNTg1LCJqdGkiOiJhYWJjNjk3Zi0zOWNjLTQ4MWItYTgxNS0zY2YzYzQyMDViNTUiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkZDc2ZDFmZC00Y2M2LTRlMjQtODZkOS02ZDllOGMzZjI5ZmYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6ImRhMDdkMTgwLTU5YTEtNDQ1Ny1hYjAyLTdkM2VmMmZiZmYxZSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUFJPVklERVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJkYTA3ZDE4MC01OWExLTQ0NTctYWIwMi03ZDNlZjJmYmZmMWUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJkZDc2ZDFmZC00Y2M2LTRlMjQtODZkOS02ZDllOGMzZjI5ZmYiLCJuYW1lIjoic2hha28gZGF2aXRhc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTk3MDI0NDg1IiwiZ2l2ZW5fbmFtZSI6InNoYWtvIiwiZmFtaWx5X25hbWUiOiJkYXZpdGFzaHZpbGkifQ.Qh5ziTIO5Ne4GCD2QWrmM_O5YBhPdLIk9oJ-980woZqz_ME2LbXNqqZmpkWk0-Twkz2R6I39EjFJb8oWJ1su4sqHGTJP_Icx987laedJ-BhLTFkKqXOlrELF1UukRNCOySMy4U5F65PjNUk7eF0Kl19szLF359Yl3006JnWwxZBOJIiZO3z7Ny5mrPcv3rSfclAQJAUdyrqCKuvgDIHhsoZKYHNBUqVF2k5V9a60k5efrRaoQ9jTETL_6wmbxJOtrnmAmT0Edzo_SI5C9izCrPOIiyQWOJOCN4lbR7lEdEaOjzbxsrW6EJeHtR3Lh5aVNfw8-WOuk-jitbAIKw0ZsA`
  //   };
  //   return config;
  // });

  const motionValues = {animate, initial, exit};
  const buttonProps = {reset, variant};

  useEffect(() => {

    if (close) {
      setIsOpen(false);
    }
  }, [close, setIsOpen])

  return <motion.div
    {...motionValues}
    className={classNames('langBtn', className)}>
    <Button
      onClick={() => setIsOpen(!isOpen)}
      variant={'outline'}
      {...buttonProps}

      className="flx align-items-center gap-12 p-inline-16 p-block-10">
      <Flag_GE/>
      <div className='dropIcon'>
        <ArrowIcon/>
      </div>
      {isOpen ? <motion.div
        ref={ref}

        // ref={dropRef}
        initial={{opacity: 0}}
        animate={isOpen ? {opacity: 1, display: 'block'} : {opacity: 0}}
        exit={{display: 'none'}}
        className='drop drop-outline '>
        <ul className='lang-area flx flx-col align-items-center p-block-10'>
          {languages.map((l) => {
            return <li className={'w-44 h-44 flx flx-all'}
                       key={l.slug}>
              <span className={`${l.slug == 'gb' ? ' bordered b-radius-4' : null}`}>
                <ImageComponent alt={l.name} width={24} height={18} src={'/assets/img/flag-' + l.slug + '.svg'}/>
              </span>
            </li>
          })}
        </ul>
      </motion.div> : null}
    </Button>
  </motion.div>;
}

export default function Header({navigation: _navigation, languages}) {
  const Router = useRouter()
  // const [user,] = useUser();
  const [userId, setUserId] = useState();
  const [points, setPoints] = useState(null);
  const [avatar, setAvatar] = useState({});
  const [scroll,] = useScrollValue();
  const [width,] = useWindow();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [landDrop, openLangDrop] = useState(false);
  useEffect(() => {
    axios.get('https://pirveli.com/api/racoon-transactions/user').then((res) => {
      setUserId(res.data)
    })
    axios.get('https://pirveli.com/api/racoon-transactions/vouchers/get-user-points').then((res) => {
      setPoints(res.data)
    })
    axios.get('https://pirveli.com/api/user/user/get-auth-user-avatar').then((res) => {
      setAvatar(res.data)
    })

  }, [])

  const navigation = ([{
    name: 'მთავარი', url: '/', slug: 'main'
  }]).concat(_navigation)

  const handle = (e) => {
    if (landDrop) {
      if (!dropRef.current.contains(e.target)) {
        openLangDrop(false);
      }
    }
  }

  // const dropRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handle);
    return document.removeEventListener('click', handle)
  }, [])

  const _useScroll = scroll ? scroll.scroll : 0;

  const motionStyle = {};

  if (mobileMenu && userId) {
    Object.assign(motionStyle, {y: 20, opacity: 0})
  }

  const indicatorRef = useRef(0);

  if (typeof document !== 'undefined' && !indicatorRef.current && document.getElementById('appNavigation')) {
    indicatorRef.current = document.getElementById('appNavigation').getBoundingClientRect().top;
  }
  useEffect(() => {
  }, [scroll])

  // console.log('_useScroll && _useScroll > 0', _useScroll > 0)

  const auth = () => {
    // https://pirveli.com/api
    // axios.get(`${process.env.API_URL}/main/page`).then((res)=>{
    //   console.log("Res",res)
    // }).catch((e)=>{
    //   console.log("cathc",e)
    // })

    Router.push('/main/page')

  }

  return (
    <div className={classNames(styles.header, 'absolute top-0 w-full', {
      [styles.scrolling]: _useScroll > 0,
      [styles.hidden]: _useScroll > indicatorRef.current
    })}>
      <motion.div
        className='small-header'
        initial={width < 968
          ? _useScroll > indicatorRef.current && userId || _useScroll > indicatorRef.current
            ? {marginTop: 0}
            : {marginTop: -variables['smallHeader']}
          : _useScroll > indicatorRef.current
            ? {marginTop: 0} : {marginTop: -variables['smallHeader']}}
        animate={width < 968
          ? _useScroll > indicatorRef.current && userId || mobileMenu || _useScroll > indicatorRef.current
            ? {marginTop: 0}
            : _useScroll == 0 && mobileMenu && userId ? {marginTop: 0} : {marginTop: -variables['smallHeader']}
          : _useScroll > indicatorRef.current
            ? {marginTop: 0} : {marginTop: -variables['smallHeader']}}
      >
        <div className='layout-wrap h-full'>
          <div className='flx h-full'>
            {width > 968 ? <ul>
              {navigation.map((nav) => {
                return <li key={nav.slug} className={nav.slug +
                  `${nav.slug == 'main' ? ' active' : ''}`}>
                  <Link href={nav.url}>{nav.name}</Link>
                </li>
              })}
            </ul> : null}
            {!userId
              ? <div style={{width: 90}} className='m-left-auto p-block-8'>
                {/* <Button reset className={'h-full w-full auth-btn'} size='small' variant='text' text="შესვლა" /> */}
              </div>
              : _useScroll > 0 && userId || mobileMenu && userId
                ? <div className='flx align-items-center gap-12 m-left-auto  b-radius-100'>
                  <div className='p-left-16'>
                    <ImageComponent width={20} height={20} src={'/assets/img/coin.png'}/>
                  </div>
                  <div>{points.amountOfPoints}</div>
                  {/* <div className='w-34 h-34 b-radius-inherit bg-color-yellow flx flx-all'
                    style={user?.avatar && user?.avatar?.code ? {
                      backgroundColor: `#${user?.avatar?.code}`
                    } : {}}
                  >
                    <Image alt='' width={15} height={20} src={`/assets/img/avatars/avatar${userObj.avatar.path}.png`} />
                  </div> */}
                </div>
                : null}
            <motion.div
              // animate={_useScroll >= indicatorRef.current ? { y: -100 } : { y: 0 }}
              className='langBtn flx align-items-center gap-12 m-left-14'>
              {userId ? <div className='line-h'></div> : null}
              <LanguageSwitchButton
                reset
                close={_useScroll <= indicatorRef.current}
                variant='none'
                languages={languages}
                className={'-'}
                initial={_useScroll && _useScroll >= indicatorRef.current ? {y: -200} : {y: 0}}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>


      <motion.div
        // initial={_useScroll > 0
        //   ? { marginTop: 46, ...motionStyle }
        //   : { marginTop: 0, ...motionStyle }}
        // animate={_useScroll > 0
        //   ? width > 768 ? { marginTop: 46, ...motionStyle } : user && !user.id ? { marginTop: 0, ...motionStyle } : { marginTop: 46, ...motionStyle }
        //   : { marginTop: 0, ...motionStyle }}
        // style={{
        //   marginTop: 500,
        // }}
        className={'header--wrap flx align-items-center' + (mobileMenu && userId ? ' bitmoere' : '')}>
        <div className='logo-area'>
          <Link href={'/'}>
            <ImageComponent src={'/assets/img/pirveli-logo.png'} width={174} height={50}/>
          </Link>
        </div>
        <div className='user-area m-left-auto flx align-items-center gap-12'>

          {
            !avatar?.code
              ?
              <a href={"/main/page"}>
                <Button variant={'primary'} size={'normal'} text={'შესვლა'}/>
              </a>
              : width >= 768 ? <motion.div
                // initial={{ x: 0 }}
                // animate={(_useScroll > indicatorRef.current) ? { y: -63 } : { y: 0 }}
              >
                <Link key="userInfo" href={process.env.PROFILE_LINK}>
                  <Button reset variant={'outline'} className="flx align-items-center gap-12">
                    <AnimatePresence>
                      {_useScroll < indicatorRef.current
                        ? <motion.div
                          animate={(_useScroll > indicatorRef.current) ? {x: 63} : {x: 0}}
                          className='p-left-16'>
                          <ImageComponent width={20} height={20} src={'/assets/img/coin.png'}/>
                        </motion.div>
                        : null}
                    </AnimatePresence>
                    <AnimatePresence>
                      {_useScroll < indicatorRef.current
                        ? <motion.div
                          animate={(_useScroll > indicatorRef.current) ? {x: 63} : {x: 0}}
                        >{points.amountOfPoints}</motion.div>
                        : null}
                    </AnimatePresence>
                    <div className='w-40 h-40 b-radius-inherit bg-color-yellow flx flx-all'
                         style={avatar && avatar?.code ? {
                           backgroundColor: `#${avatar?.code}`
                         } : {}}
                    >
                      <Image alt='' width={15} height={20} src={`/assets/img/avatars/avatar${avatar?.path}.png`}/>
                    </div>
                  </Button>
                </Link>
              </motion.div> : null}

          <LanguageSwitchButton
            close={_useScroll >= indicatorRef.current}

            languages={languages}
            className={'langBtnmain'}
            initial={_useScroll && _useScroll >= indicatorRef.current ? {y: -200} : {y: 0}}
          />

          {/* <motion.div
            // initial={_useScroll && _useScroll >= indicatorRef.current ? { y: -200 } : { y: 0 }}
            exit={{ y: -200 }}
            // animate={_useScroll >= indicatorRef.current ? { y: -100 } : { y: 0 }}
            className='langBtn langBtnmain'>
            <Button
              onClick={() => openLangDrop(!landDrop)}
              variant={'outline'}
              className="flx align-items-center gap-12 p-inline-16 p-block-10">
              <Flag_GE />
              <ArrowIcon />
              {landDrop ? <motion.div
                ref={dropRef}
                initial={{ opacity: 0 }}
                animate={landDrop ? { opacity: 1, display: 'block' } : { opacity: 0 }}
                exit={{ display: 'none' }}
                className='drop drop-outline '>
                <ul className='lang-area flx flx-col align-items-center'>
                  {languages.map((l) => {
                    return <li className={'w-44 h-44 flx flx-all'}
                      key={l.slug}>
                      <span className={`${l.slug == 'gb' ? ' bordered b-radius-4' : null}`}>
                        <ImageComponent alt={l.name} width={24} height={18} src={'/assets/img/flag-' + l.slug + '.svg'} />
                      </span>
                    </li>
                  })}
                </ul>
              </motion.div> : null}
            </Button>
          </motion.div> */}
          <Button onClick={() => setMobileMenu(true)} variant='none' reset className={'flx flx-all md-hidden'}
                  style={{width: 34, height: 34}}>
            <ImageComponent width={20} height={20} src={'/assets/img/burger.svg'}/>
          </Button>
        </div>
      </motion.div>

      <MobileMenu languages={languages} onAction={(e) => setMobileMenu(e)} mobileMenu={mobileMenu}
                  navigation={_navigation}/>
    </div>
  )
}
