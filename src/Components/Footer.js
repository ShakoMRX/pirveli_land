import Link from 'next/link'
import React,{useState} from 'react'
import ImageComponent from './ImageComponent'

export default function Footer(){
	const [activeCollapse,setActiveCollapse] = useState(null);

	console.log("activeCollapse",activeCollapse)

	const toggle = (item) => {
		if (item === activeCollapse) {
			setActiveCollapse(null)
		}
		else {
			setActiveCollapse(item)

		}
	}

	const arrowDown = () => {
		return
	}


	return (
			<>
				<div className={"fullfooter"}>
					<div className={"footerContainer layout-wrap"}>
						<div className={"footerContainerInner"}>
							<div className={"leftSideContainer"}>
								<div className={"headerIcon"}>
									{/* <img
							src='/footerIcon.png'
							alt='headerIcon'
							className={classes.iconsStyle}
						/> */}
									<p className={"textTitle aveSofBold"}>პირველი</p>
									<Link href={'/aboutUsPage'}>
										<p className={"textStyle"}>ჩვენს შესახებ</p>
									</Link>
									{/* <Link href={''}>
								<Text style={classes.textStyle}>ხშირად დასმული კითხვები</Text>
							</Link> */}
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
									{/*<p className={"allRightTextStyle aveSofRegular"}>*/}
									{/*  2022 © ყველა უფლება დაცულია. Pirveli.com*/}
									{/*</p>*/}
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
									{/*<Link href=''>*/}
									{/*  <p className={"textStyle"}>შეუკვეთე ჯანდაცვის ბარათი</p>*/}
									{/*</Link>*/}
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
						</div>

						<div className={"thirdRow"}>
							<img
									src='assets/footerIcon/footer.webp'
									alt='footer'
									height='506'
									className={"iconsStyle"}
							/>
						</div>

						<div>
						</div>
					</div>

					<div>
						<p className={"allRightTextStyle layout-wrap aveSofRegular"}>
							2022 © ყველა უფლება დაცულია. Pirveli.com
						</p>
					</div>
				</div>
				<div className={"footer2 "}>
					<div className={"layout-wrap"}>
						<div className={"accordion"}
						     onClick={() => toggle(1)}
						     style={{
							     height:activeCollapse === 1 ? "152px" : "19px"
						     }}
						>
							<div className={"head"}>
								<h4>პირველი</h4>
								<div
										style={{
											transition:".2s linear all",
											transform:activeCollapse === 1 ? "rotate(0deg)" : "rotate(180deg)"
										}}
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
										      d="M12.3351 7.99998L11.772 8.5574L5.66846 14.5032L6.79471 16L12.3351 10.6013L17.8755 16L19.0018 14.5032L12.8982 8.5574L12.3351 7.99998Z"
										      fill="#383838"/>
									</svg>
								</div>
							</div>

							<div className={"accordion-inner"}>
								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										ჩვენ შესახებ
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										გახდი ჩვენი პარტნიორი
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										მიმდინარე ვაკანსიები
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										ბლოგი
									</a>
								</Link>

							</div>
						</div>

						<div className={"line"}/>
						<div className={"accordion"}
						     onClick={() => toggle(2)}
						     style={{
							     height:activeCollapse === 2 ? "122px" : "19px"
						     }}
						>
							<div className={"head"}>
								<h4>წესები და პირობები</h4>
								<div
										style={{
											transition:".2s linear all",
											transform:activeCollapse === 2 ? "rotate(0deg)" : "rotate(180deg)"
										}}
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
										      d="M12.3351 7.99998L11.772 8.5574L5.66846 14.5032L6.79471 16L12.3351 10.6013L17.8755 16L19.0018 14.5032L12.8982 8.5574L12.3351 7.99998Z"
										      fill="#383838"/>
									</svg>
								</div>
							</div>

							<div className={"accordion-inner"}>
								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										ზოგადი წესები
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										კონფიდენციალურობის პოლიტიკა
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										ხშირად დასმული კითხვები
									</a>
								</Link>

							</div>
						</div>
						<div className={"line"}/>
						<div className={"accordion"}
						     onClick={() => toggle(3)}
						     style={{
							     height:activeCollapse === 3 ? "146px" : "19px"
						     }}
						>
							<div className={"head"}>
								<h4>კონტაქტი</h4>
								<div
										style={{
											transition:".2s linear all",
											transform:activeCollapse === 3 ? "rotate(0deg)" : "rotate(180deg)"
										}}
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
										      d="M12.3351 7.99998L11.772 8.5574L5.66846 14.5032L6.79471 16L12.3351 10.6013L17.8755 16L19.0018 14.5032L12.8982 8.5574L12.3351 7.99998Z"
										      fill="#383838"/>
									</svg>
								</div>


							</div>
							<div className={"accordion-inner"}>
								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										<img
												src='assets/footerIcon/P-Phone.svg'
												alt='headerIcon'
										/>
										+995 032 2 18 55 77
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										<img
												src='assets/footerIcon/E-mail.svg'
												alt='headerIcon'
										/>
										info@pirveli.com
									</a>
								</Link>

								<Link href={"/"} passHref={true} legacyBehavior>
									<a>
										<img
												src='assets/footerIcon/F-Location.svg'
												alt='headerIcon'
										/>
										თბილისი, ზოვრეთის ქ.#1
									</a>
								</Link>
							</div>
						</div>

						<div
								style={{
									marginTop:"40px",
									display:"flex",
									justifyContent:"center"
								}}
								className={"iconContainer"}>
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

						<p className={"allRightTextStyle2 aveSofRegular"}>
							2022 © ყველა უფლება დაცულია. Pirveli.com
						</p>

					</div>
				</div>
				<div className={"line"} style={{
					marginBottom:"0px"
				}}/>

			</>

	)
}
