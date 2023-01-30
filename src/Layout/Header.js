import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useRef,useState} from 'react'
import styles from '../../styles/components/Header.module.scss';
import ImageComponent from '../Components/ImageComponent';
import {ArrowIcon,ArrowIconBlack,Flag_GE} from '../Icons';
import Button from '../Shared/Button';
import {useScrollValue} from '../store';
import {AnimatePresence,motion,useMotionValue,useScroll} from 'framer-motion';
import variables,{useOutsideClick,useWindow} from '..';
import MobileMenu from '../Components/MobileMenu';
import {isServer} from '../utils';
import axios from "axios";
import {useRouter} from 'next/router'

const LanguageSwitchButton = ({className,bottom,close,variant = 'outline',animate,initial,exit,languages,reset}) => {
	const [scroll] = useScrollValue();
	const {ref,isOpen,setIsOpen} = useOutsideClick();

	// axios.interceptors.request.use((config) => {
	// 	config.headers = {
	// 		...config.headers,
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzUxMDg3NTEsImlhdCI6MTY3NTA3Mjc1MSwianRpIjoiOWQyZTExYmYtMzYxYS00ZTExLTljZGEtNDYwMDViNzVjNzQzIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiIxZGUwYTJhOC1kNWQ0LTQ5ZDItODdjNy02NGQyMWFkMDI5Y2EiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNjUxZDMwYjUtNTg2Zi00MzcwLTk1MzMtODQzZjYwMzYwODM5IiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjY1MWQzMGI1LTU4NmYtNDM3MC05NTMzLTg0M2Y2MDM2MDgzOSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6IjFkZTBhMmE4LWQ1ZDQtNDlkMi04N2M3LTY0ZDIxYWQwMjljYSIsIm5hbWUiOiJUYXpvIER2YWxpc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTkyMjUzMjUzIiwiZ2l2ZW5fbmFtZSI6IlRhem8iLCJmYW1pbHlfbmFtZSI6IkR2YWxpc2h2aWxpIn0.Sq4k3bWbIqFHL7ouVR-HJupSMudkNvA9beqlAbZuJ80NsifUv6P2Vzhayk9xDklbfnk-Ph643c1C5FDRBKlgoy6z64EoKLyYe-g-lyy4xoBZ6zImxoPrmMv2YTWXoo2W57Xc7AIF3LGUPXnmVWruKc4pa_GsIi0Zwi26m5Jo8vJeQLPpGFV8SvUd3QgJFvrPeuZ7ATaAiU-cISlKswf-P3evUZnWJFtyR50nbVjngd18ddxcBoTz_Ck721ahLW-_8uxFKYI6HYhoewevQIG_0PosuakIBaRD-I5gTgOuJ9e1RJvNUtfm3N7fCyEfLdNoJW7BP0veqBvI3Sww7hseew`
	// 	};
	// 	return config;
	// });

	const motionValues = {animate,initial,exit};
	const buttonProps = {reset,variant};

	useEffect(() => {

		if (close) {
			setIsOpen(false);
		}
	},[close,setIsOpen])

	return <motion.div
			{...motionValues}
			className={classNames('langBtn',className)}>
		<div
				onClick={() => setIsOpen( !isOpen)}
				className={`flx align-items-center gap-12 p-block-10 relative ${bottom && 'flag-wrap'}`}
		>
			<Flag_GE/>
			<div className='dropIcon' style={{
				display:"flex",
				alignItems:"center"
			}}>
				{bottom ? <ArrowIconBlack/> : <ArrowIcon/>}
			</div>
			{isOpen ? <motion.div
					ref={ref}

					// ref={dropRef}
					initial={{opacity:0}}
					animate={isOpen ? {opacity:1,display:'block'} : {opacity:0}}
					exit={{display:'none'}}
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
		</div>
	</motion.div>;
}

export default function Header({navigation:_navigation,languages}){
	const Router = useRouter()
	// const [user,] = useUser();
	const [userId,setUserId] = useState();
	const [points,setPoints] = useState(null);
	const [avatar,setAvatar] = useState({});
	const [scroll,] = useScrollValue();
	const [width,] = useWindow();
	const [mobileMenu,setMobileMenu] = useState(false);
	const [landDrop,openLangDrop] = useState(false);
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

	},[])

	const navigation = ([{
		name:'მთავარი',url:'/',slug:'main'
	}]).concat(_navigation)

	const handle = (e) => {
		if (landDrop) {
			if ( !dropRef.current.contains(e.target)) {
				openLangDrop(false);
			}
		}
	}

	// const dropRef = useRef();

	useEffect(() => {
		document.addEventListener('click',handle);
		return document.removeEventListener('click',handle)
	},[])

	const _useScroll = scroll ? scroll.scroll : 0;

	const motionStyle = {};

	if (mobileMenu && userId) {
		Object.assign(motionStyle,{y:20,opacity:0})
	}

	const indicatorRef = useRef(0);

	if (typeof document !== 'undefined' && !indicatorRef.current && document.getElementById('appNavigation')) {
		indicatorRef.current = document.getElementById('appNavigation').getBoundingClientRect().top;
	}
	useEffect(() => {
	},[scroll])

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
			<div className={classNames(styles.header,'absolute top-0 w-full',{
				[styles.scrolling]:_useScroll > 0,
				[styles.hidden]:_useScroll > indicatorRef.current
			})}>
				<motion.div
						className='small-header'
						initial={width < 968
								? _useScroll > indicatorRef.current && userId || _useScroll > indicatorRef.current
										? {marginTop:0}
										: {marginTop:-variables['smallHeader']}
								: _useScroll > indicatorRef.current
										? {marginTop:0} : {marginTop:-variables['smallHeader']}}
						animate={width < 968
								? _useScroll > indicatorRef.current && userId || mobileMenu || _useScroll > indicatorRef.current
										? {marginTop:0}
										: _useScroll == 0 && mobileMenu && userId ? {marginTop:0} : {marginTop:-variables['smallHeader']}
								: _useScroll > indicatorRef.current
										? {marginTop:0} : {marginTop:-variables['smallHeader']}}
				>
					<div className='layout-wrap h-full '>
						<div className='flx h-full'>
							{width > 968 ? <ul>
								{navigation.map((nav) => {
									return <li key={nav.slug} className={nav.slug + ' aveSofRegular' +
											`${nav.slug == 'main' ? ' active' : ''}`}>
										<Link href={nav.url}>{nav.name}</Link>
									</li>
								})}
							</ul> : null}
							{!userId
									? <div style={{width:90}} className='m-left-auto p-block-8'>
										{/* <Button reset className={'h-full w-full auth-btn'} size='small' variant='text' text="შესვლა" /> */}
									</div>
									: _useScroll > 0 && userId || mobileMenu && userId
											? <div className='flx align-items-center m-left-auto b-radius-100'
											       style={{
												       gap:"7px"
											       }}
											>
												<div className='p-left-16'>
													<ImageComponent width={20} height={20} src={'/assets/img/coin.png'}/>
												</div>
												<p className={"point aveSofRegular"} style={{
													color:"white",
													fontSize:"14px",
												}}>{points?.amountOfPoints}</p>
												{/* <div className='w-34 h-34 b-radius-inherit bg-color-yellow flx flx-all'
                    style={user?.avatar && user?.avatar?.code ? {
                      backgroundColor: `#${user?.avatar?.code}`
                    } : {}}
                  >
                    <Image alt='' width={15} height={20} src={`/assets/img/avatars/avatar${userObj.avatar.path}.png`} />
                  </div> */}
											</div>
											: null}
							{/*<motion.div*/}
							{/*		// animate={_useScroll >= indicatorRef.current ? { y: -100 } : { y: 0 }}*/}
							{/*		className='langBtn flx align-items-center gap-12 m-left-14'>*/}
							{/*	{userId ? <div className='line-h' style={{marginRight:"4px"}}></div> : null}*/}
							{/*	<LanguageSwitchButton*/}
							{/*			reset*/}
							{/*			close={_useScroll <= indicatorRef.current}*/}
							{/*			variant='none'*/}
							{/*			languages={languages}*/}
							{/*			className={'-'}*/}
							{/*			initial={_useScroll && _useScroll >= indicatorRef.current ? {y:-200} : {y:0}}*/}
							{/*	/>*/}
							{/*</motion.div>*/}
						</div>
					</div>
				</motion.div>


				<motion.div
						// initial={_useScroll > 0
						//   ? { marginTop: 46, ...motionStyle }
						//   : { marginTop: 0, ...motionStyle }}
						// animate={_useScroll > 0
						//   ? width > 768 ? { marginTop: 46, ...motionStyle } : user && !user.id ? { marginTop: 0, ...motionStyle
						// } : { marginTop: 46, ...motionStyle } : { marginTop: 0, ...motionStyle }} style={{ marginTop: 500, }}
						className={'layout-wrap HEADER flx align-items-center' + (mobileMenu && userId ? ' bitmoere' : '')}>
					<div className='logo-area'>
						<Link href={'/'}>
							<ImageComponent src={'/assets/img/logo.png'} quality={100} width={175} height={50}/>
						</Link>
					</div>
					<div className='user-area m-left-auto flx align-items-center gap-12'>

						{
							!avatar?.code
									?
									<a href={"/main/page"}>
										<Button variant={'primary'} size={'normal'} text={'შესვლა'}/>
									</a>
									: width >= 768 ? <div
											style={{
												display:'flex',
												alignItems:'center',
											}}
											// initial={{ x: 0 }}
											// animate={(_useScroll > indicatorRef.current) ? { y: -63 } : { y: 0 }}
									>
										<Link key="userInfo" href={process.env.PROFILE_LINK}>
											<div className="flx align-items-center gap-12"
											     style={{
												     backgroundColor:"rgba(255, 255, 255, 0.5019607843)",
												     border:"1px solid rgba(56, 56, 56, 0.1019607843)",
												     borderRadius:"12px",
											     }}
											>
												<AnimatePresence>
													{_useScroll < indicatorRef.current
															? <motion.div
																	animate={(_useScroll > indicatorRef.current) ? {x:63} : {x:0}}
																	className='p-left-16'>
																<ImageComponent width={20} height={20} src={'/assets/img/coin.png'}/>
															</motion.div>
															: null}
												</AnimatePresence>
												<AnimatePresence>
													{_useScroll < indicatorRef.current
															? <motion.div
																	animate={(_useScroll > indicatorRef.current) ? {x:63} : {x:0}}
															>
																<p className={"point aveSofRegular"} style={{
																	color:"black",
																	fontWeight:"600 !important",
																	fontSize:"14px"
																}}>{points?.amountOfPoints}</p>
															</motion.div>
															: null}
												</AnimatePresence>
												<div className='b-radius-[50%] relative bg-color-yellow flx flx-all'
												     style={avatar && avatar?.code ? {
													     width:"46px",
													     height:"46px",
													     borderRadius:"12px",
													     paddingBottom:"5px",
													     paddingTop:"5px",
													     backgroundColor:`#${avatar?.code}`
												     } : {}}
												>
													<img
															src={`/assets/img/avatars/avatar${avatar?.path}.png`}
															alt={"avatar"}
															style={{objectFit:"cover",height:"100%",width:"auto"}}/>

												</div>
											</div>
										</Link>
										<div className={"arrowDown"}
										     style={{
											     height:"100%",
											     alignItems:"center",
											     position:"relative",
											     marginLeft:"12px"
										     }}
										>
											<svg style={{
												transition:'0.5s',
												transform:'rotate(180deg)'
											}}
											     width="8" height="5" viewBox="0 0 8 5" fill="none"
											     xmlns="http://www.w3.org/2000/svg">
												<path opacity="0.7" d="M0.75 4.25L4 0.75L7.25 4.25" stroke="#383838" strokeWidth="1.5"
												      strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>

									</div> : null}

						{/*<LanguageSwitchButton*/}
						{/*		close={_useScroll >= indicatorRef.current}*/}
						{/*		bottom={true}*/}
						{/*		languages={languages}*/}
						{/*		className={'langBtnmain'}*/}
						{/*		initial={_useScroll && _useScroll >= indicatorRef.current ? {y:-200} : {y:0}}*/}
						{/*/>*/}

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
						        style={{width:34,height:34}}>
							<ImageComponent width={20} height={20} src={'/assets/img/burger.svg'}/>

						</Button>
					</div>
				</motion.div>

				<MobileMenu languages={languages} onAction={(e) => setMobileMenu(e)} mobileMenu={mobileMenu}
				            navigation={_navigation}/>
			</div>
	)
}
