import classNames from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ImageComponent from '../src/Components/ImageComponent'
import { BirdTop } from '../src/Icons'
import Button from '../src/Shared/Button'
import { animate, motion, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity, useViewportScroll } from 'framer-motion'
import styles from '../styles/components/Home.module.scss'
import variables, { getRGBdiff, hexToRgb } from '../src'
import FullPage from '../src/Components/FullPage'
import { useScrollValue, useUser } from '../src/store'
import { SectionsContainer, Section } from 'react-fullpage';

export function AppNavigation({ navigation }) {
  const [hoverNav, setHoverNav] = useState(null);
  const [isAnimation, setAnimation] = useState(false);
  const bgRef = useRef();
  const lastActiveEl = useRef(null)

  const onMouseEnter = (e, slug) => {
    // bgRef.current
    // console.log('e', e.currentTarget.nextSibling);

    setHoverNav({
      id: slug,
      bg: variables[`brand_${slug}`]
    });
  }

  const onMouseMove = (e) => {
    const rgb = {};

    return;

    if (e.target.nodeName != 'LI') {
      return;
    }

    const target = e.target;
    const targetTitle = e.target.firstChild.firstChild;
    const targetSize = e.clientX - target.getBoundingClientRect().left;

    const currentColor = hexToRgb(variables[`brand_${e.target.dataset.name}`]);
    const nextSiblingColor = e.target.nextSibling && e.target.nextSibling.nodeName == 'LI' ? hexToRgb(variables[`brand_${e.target.nextSibling.dataset.name}`]) : hexToRgb('#ffffff');
    const prevSiblingColor = e.target.previousSibling && e.target.previousSibling.nodeName == 'LI' ? hexToRgb(variables[`brand_${e.target.previousSibling.dataset.name}`]) : hexToRgb('#ffffff');

    // const targetColorDiff = targetSize <= (target.getBoundingClientRect().width / 2)
    //   ? getRGBdiff(currentColor, prevSiblingColor)
    //   : getRGBdiff(currentColor, nextSiblingColor)

    // console.log('left', targetColorDiff)

    // const distanceRange = !e.target.previousSibling
    //   ? null
    //   : e.clientX - ((e.target.previousSibling.getElementsByClassName('title')[0].getBoundingClientRect().left + (e.target.previousSibling.getElementsByClassName('title')[0].getBoundingClientRect().width)))

    const prevTitle = e.target.previousSibling ? e.target.previousSibling.getElementsByClassName('title')[0].getBoundingClientRect() : null;
    const nextTitle = e.target.nextSibling && e.target.nextSibling.nodeName == 'LI' ? e.target.nextSibling.getElementsByClassName('title')[0].getBoundingClientRect() : null;
    const currentTitlerect = e.target.getElementsByClassName('title')[0].getBoundingClientRect();

    const range = e.clientX
      - (targetTitle.getBoundingClientRect().left
        + (!!e.target.previousSibling
          ? prevTitle.left
          : e.currentTarget.getBoundingClientRect().left));

    const _range = prevTitle && nextTitle
      ? (nextTitle.left + (nextTitle.width / 2)) - (prevTitle.left + (prevTitle.width / 2))
      : !prevTitle && nextTitle
        ? (nextTitle.left + (nextTitle.width / 2)) - (currentTitlerect.left + (currentTitlerect.width / 2))
        : 'no next';

    console.log('_range', _range)

    // if (!prevTitle && nextTitle) {
    //   const distance = (nextTitle.left + (nextTitle.width / 2)) - (prevTitle.left + (prevTitle.width / 2));

    //   console.log('left', e.clientX, e.clientX - (prevTitle.left + (prevTitle.width / 2) + distance))

    //   if (e.clientX <= prevTitle.left + (prevTitle.width / 2)) {
    //   }
    // }

    // console.log('onMouseMove', (_range - (e.currentTarget.getBoundingClientRect().left)), e.clientX, (_range - (e.currentTarget.getBoundingClientRect().left)) - e.clientX)
    // console.log('onMouseMove', e.clientX, targetTitle.getBoundingClientRect().left, e.target.previousSibling.getElementsByClassName('title')[0].getBoundingClientRect().left)
    // console.log('onMouseMove', e.clientX, e.clientY)
    // console.log('onMouseMove', e.clientX - target.getBoundingClientRect().left)
    // console.log('bgRef.current', getComputedStyle(bgRef.current).backgroundColor)
    // console.log('onMouseMove', hexToRgb(variables[`brand_${slug}`]));
    // console.log('onMouseMove', e.target);
    // console.log('onMouseMove', getRGBdiff(currentColor, prevSiblingColor));
  }

  const showBg = (e, show) => {
    if (show) {
      bgRef.current.classList.add('active');
      if (e.currentTarget.dataset.name !== lastActiveEl.current) {
        lastActiveEl.current = e.currentTarget.dataset.name;
      }

      bgRef.current.style.backgroundColor = variables[`brand_${lastActiveEl.current}`]

    } else {
      bgRef.current.classList.remove('active')
      bgRef.current.style.backgroundColor = 'transparent';
      lastActiveEl.current = null;
    }

  }

  return (
    <div className='app-navigation relative'>
      {/* <motion.div
        // initial={{backgroundColor: '#FFF'}}
        // animate={{backgroundColor: hoverNav ? hoverNav.bg : 'transparent'}}
        ref={bgRef}
        className={
          classNames('navigation-bg transition absolute absolute-center size-0 w-wide', {
            [`brand-bg-${hoverNav ? hoverNav.slug : 'none'}`]: hoverNav,
            [`size-h-full`]: hoverNav
          })}>
      </motion.div> */}
      <div className='layout-wrap flx h-full'>

        <ul
          // onMouseMove={(e) => onMouseMove(e)}
          // onMouseLeave={() => showBg(null, false)}
          className='navigation-list flx m-block-auto gap-10 md-gap-0'>
          {navigation.map((nav) => {
            return <li key={nav.slug}
              data-name={nav.slug}
              className={classNames('navigation--item text-center size-full flx flx-all', `bg-${nav.slug}`)}>
              <Link
                onMouseEnter={(e) => showBg(e, true)}
                onMouseLeave={() => showBg(null, false)}
                href={nav.url || '/'}
                target={'_self'}
                className='navigation--target flx'>
                <div
                  onMouseEnter={(e) => onMouseEnter(e, nav.slug)}
                  onMouseLeave={() => setHoverNav(null)}
                  className='title text-s-24 md-text-s-28 text-weight-600'>
                  {nav.name}
                </div>
                <div className='image-area '>
                  <ImageComponent width={180} height={180} src={`/assets/img/${nav.slug}.png`} />
                </div>
              </Link>
            </li>
          })}
          <div ref={bgRef} className='simple-bg'></div>
        </ul>
      </div>
    </div>
  )
}


let options = {
  delay: 2000,
  sectionClassName: 'section',
  anchors: ['intro', 'faq', 'sectionThree'],
  scrollBar: false,
  navigation: false,
  verticalAlign: false,
  sectionPaddingTop: '0',
  // sectionPaddingBottom: '80px',
  // arrowNavigation: true,
  onLeave: function () {
    console.log('-------------------')
  }
};

export function Home2(props) {
  const ref = useRef();
  const { scrollYProgress: scroll } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start start']
  })
  // const isInView = useInView(ref);

  // const opacity = useMotionValue(0);
  // const velocity = useVelocity(scrollYProgress);

  // const baseX = useMotionValue(0);
  // const { scrollY } = useScroll();
  // const scrollVelocity = useVelocity(scrollYProgress);
  // const smoothVelocity = useSpring(scrollYProgress);

  const x = useTransform(scrollYProgress, [0, 1], [2500, 0])

  const y = useTransform(scrollYProgress, [0, 1], [-2500, 0])
  const z = useTransform(scrollYProgress, [0, 1], [2500, 0])


  const videContainerRef = useRef();
  const containerViewRef = useRef();

  const { scrollYProgress: scrollEl } = useScroll({
    target: videContainerRef,
    offset: ['start center', 'start end']
  });
  const smoothVelocity = useSpring(scrollEl);


  const vScale = useTransform(smoothVelocity, [0, 1], [1, 0])
  const vTransform = useTransform(smoothVelocity, [0, 1], [0, 1000])



  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // console.log("Page scroll: ", latest)
    })
  }, [])

  useEffect(() => {
    return scroll.onChange((latest) => {
      if (latest > 0) {
        // containerViewRef.current.scrollIntoView({behavior: 'smooth'})
      } else {

      }
    })
  }, [])

  return (
    <div className={''}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='full-page-md relative'>
        {/* {rotate } */}
        <motion.div
          ref={ref}
          className='section-md-full md-flx md-flx-col md-flx-all justify-content-evenly'>
          <div

            className='section section-md-auto divide-h flx flx-all flx-col relative'>
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>

            <div className='page-bg'>
              <motion.div
                style={{ x, z, y }}
                className='bird bird-top svg-clipped'>
                {/* <svg>
                  <use href="#svg_bird_top" />
                </svg> */}
              </motion.div>
              <motion.div style={{ x, z, y }} className='bird bird-bottom svg-clipped'>
                {/* <svg id={'bird'}>
                  <use href="#svg_bird_bottom" />
                </svg> */}
              </motion.div>
            </div>
            <motion.div
              className='top intro-section text-center relative'>
              <div className='intro-header w-max-747 text-s-26 md-text-s-40 md-l-text-s-55 text-weight-700'>
                <p><span>დააგროვე და გადაცვალე</span> <spam className='text-color-primary'>მონეტები</spam></p>
              </div>
              <div className='intro-description p-top-50 text-s-16 md-text-s-20'>
                <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
              </div>
              <div className='intro-action p-top-40'>
                <Button
                  onClick={() => {
                    // containerViewRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                  }}
                  text={'დაწყება'} variant={'primary'} size={'large'} />
              </div>
            </motion.div>
          </div>

          <div className='section section-md-auto divide-h flx flx-all flx-col w-wide'>
            <div className='w-wide'>
              <AppNavigation navigation={props.appData.platforms} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className='full-page-md relative'>

        <div
          // ref={containerViewRef}
          className='section-md-full md-flx md-flx-all size-full p-top-80 layout-wrap'>
          <div className='md-flx md-flx-row gap-30 w-wide'>
            <div ref={videContainerRef} className='section section-md-auto divide-h p-top-80'>
              <div className='info-section w-full l-sm-w-490 lg-w-619'>
                <h4 className='title-area flx flx-col text-weight-700 text-s-16 md-text-s-20 l-sm-text-s-28'>
                  <p>ლოიალურობაზე დაფუძნებული</p>
                  <p className='text-color-primary m-left-auto'>ციფრული ეკოსისტემა</p>
                </h4>
                <ul className='flx flx-col gap-20'>
                  <li className='flx flx-col gap-8'>
                    <p className='text-s-16 md-text-s-24 text-color-primary'>01</p>
                    <span className='text-line-height-24'>
                      ადგილი სადაც ყოველ შენს აქტივობას მოაქვს მონეტები. ერთვები გასართობ თამაშებში და ზრდი დაგროვებული მონეტების რაოდენობას.
                    </span>
                  </li>
                  <li className='flx flx-col gap-8'>
                    <p className='text-s-16 md-text-s-24 text-color-primary'>02</p>
                    <span className='text-line-height-24'>
                      დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
                    </span>
                  </li>
                  <li className='flx flx-col gap-8'>
                    <p className='text-s-16 md-text-s-24 text-color-primary'>03</p>
                    <span className='text-line-height-24'>
                      ყოველ 100 მონეტაზე იღებ ფულადი პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი საპრიზო ფონდით - 300 000ლ.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='section section-md-auto divide-h flx flx-all md-block flex-g-1'>

              <motion.div style={{
                opacity: vScale,
                scale: vScale,
                y: vTransform
              }} className='video-container'>

              </motion.div>

            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

const MainSection = ({ active: section, navigation = [] }) => {
  const ref = useRef();
  const [user,] = useUser();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start start']
  })

  const isInView = useInView(ref);
  const bird_top_x = useSpring(0)
  const bird_top_y = useSpring(0)

  const bird_bottom_x = useSpring(0, {
    damping: 100,
    stiffness: 20
  })
  const bird_bottom_y = useSpring(0, {
    damping: 100,
    stiffness: 20
  })

  useEffect(() => {
    if (section && section.activeSection.toString().length) {
      bird_top_x.set(section.activeSection.toString() !== '0' ? 2500 : 0)
      bird_top_y.set(section.activeSection.toString() !== '0' ? -2500 : 0)

      bird_bottom_x.set(section.activeSection.toString() !== '0' ? 2500 : 0)
      bird_bottom_y.set(section.activeSection.toString() !== '0' ? -2500 : 0)
    }
  }, [bird_top_x, bird_top_y, section])

  // const x = useTransform(isInView ? 1 : 0, [0, 1], [2500, 0])

  // const y = useTransform(isInView ? 1 : 0, [0, 1], [-2500, 0])
  // const z = useTransform(isInView ? 1 : 0, [0, 1], [2500, 0])


  // console.log('object', process.env.AUTH_LINK)

  return <FullPage ref={ref} className={'size-full overflow-hidden md-flx md-flx-col md-flx-all justify-content-evenly'} >
    <div className='divide-h flx flx-all flx-col relative'>
      <div className='page-bg'>
        <motion.div
          style={{ x: bird_top_x, y: bird_top_y }}
          className='bird bird-top svg-clipped'>
          {/* <svg>
          <use href="#svg_bird_top" />
        </svg> */}
        </motion.div>
        <motion.div style={{ x: bird_top_x, y: bird_top_y }} transition={{}} className='bird bird-bottom svg-clipped'>
          {/* <svg id={'bird'}>
          <use href="#svg_bird_bottom" />
        </svg> */}
        </motion.div>
      </div>
      <div
        className='top intro-section text-center relative'>
        <div className='intro-header w-max-747 text-s-26 md-text-s-40 md-l-text-s-55 text-weight-700'>
          <p><span>დააგროვე და გადაცვალე</span> <spam className='text-color-primary'>მონეტები</spam></p>
        </div>
        <div className='intro-description p-top-50 text-s-16 md-text-s-20'>
          <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
        </div>
        <div className='intro-action p-top-40'>
          <Link
            target={'_self'}
            href={
              !user ? process.env.REGISTER_LINK : process.env.PROFILE_LINK
            }>
            <Button
              text={'დაწყება'} variant={'primary'} size={'large'} />
          </Link>
        </div>
      </div>
    </div>
    <div className='section section-md-auto divide-h flx flx-all flx-col w-wide'>
      <div className='w-wide'>
        <AppNavigation navigation={navigation} />
      </div>
    </div>
  </FullPage>
}

const FaqSection = () => {
  return <div
    className='size-full md-flx md-flx-all size-full layout-wrap'>
    <div className='md-flx md-flx-row gap-30 w-wide'>
      <div className='section section-md-auto divide-h p-top-80'>
        <div className='info-section w-full l-sm-w-490 lg-w-619'>
          <h4 className='title-area flx flx-col text-weight-700 text-s-16 md-text-s-20 l-sm-text-s-28'>
            <p>ლოიალურობაზე დაფუძნებული</p>
            <p className='text-color-primary m-left-auto'>ციფრული ეკოსისტემა</p>
          </h4>
          <ul className='flx flx-col gap-20'>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-color-primary'>01</p>
              <span className='text-line-height-24'>
                ადგილი სადაც ყოველ შენს აქტივობას მოაქვს მონეტები. ერთვები გასართობ თამაშებში და ზრდი დაგროვებული მონეტების რაოდენობას.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-color-primary'>02</p>
              <span className='text-line-height-24'>
                დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-color-primary'>03</p>
              <span className='text-line-height-24'>
                ყოველ 100 მონეტაზე იღებ ფულადი პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი საპრიზო ფონდით - 300 000ლ.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='section section-md-auto divide-h flx flx-all md-block flex-g-1'>

        <motion.div className='video-container'>

        </motion.div>

      </div>
    </div>
  </div>
}


export default function Home(props) {
  const introSection = useRef(null);
  const faqSection = useRef(null);
  const footerSection = useRef(null);
  const [activeSection, setActiveIndex] = useState(null);


  return (
    <SectionsContainer {...options} scrollCallback={(e) => {
      console.log('beforeLeave', e);
      setActiveIndex(e);
    }}>
      <Section>
        <MainSection active={activeSection} navigation={props.appData.navigation} />
      </Section>
      <Section>
        <FaqSection />
      </Section>
      {/* <Section className="fp-auto-height">Page 3</Section> */}
    </SectionsContainer>
    // <div className={''}>
    //   <FullPage className={'section-md-full md-flx md-flx-col md-flx-all justify-content-evenly'} >
    //     <div className='section section-md-auto divide-h flx flx-all flx-col relative'>
    //       <div className='page-bg'>
    //         <div
    //           className='bird bird-top svg-clipped'>
    //           {/* <svg>
    //               <use href="#svg_bird_top" />
    //             </svg> */}
    //         </div>
    //         <div className='bird bird-bottom svg-clipped'>
    //           {/* <svg id={'bird'}>
    //               <use href="#svg_bird_bottom" />
    //             </svg> */}
    //         </div>
    //       </div>
    //       <div
    //         className='top intro-section text-center relative'>
    //         <div className='intro-header w-max-747 text-s-26 md-text-s-40 md-l-text-s-55 text-weight-700'>
    //           <p><span>დააგროვე და გადაცვალე</span> <spam className='text-color-primary'>მონეტები</spam></p>
    //         </div>
    //         <div className='intro-description p-top-50 text-s-16 md-text-s-20'>
    //           <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
    //         </div>
    //         <div className='intro-action p-top-40'>
    //           <Link href={
    //             'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?client_id=demo-client&response_type=code&scope=email&redirect_uri=http://localhost:3000'
    //           }>
    //             <Button
    //               onClick={() => {
    //                 containerViewRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //               }}
    //               text={'დაწყება'} variant={'primary'} size={'large'} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>


    //     <div className='section section-md-auto divide-h flx flx-all flx-col w-wide'>
    //       <div className='w-wide'>
    //         <AppNavigation navigation={props.appData.platforms} />
    //       </div>
    //     </div>
    //   </FullPage>
    //   <FullPage className={'section-md-full md-flx md-flx-col md-flx-all justify-content-evenly'} >
    //     <div className='section section-md-auto divide-h flx flx-all flx-col relative'>
    //       <div className='page-bg'>
    //         <div
    //           className='bird bird-top svg-clipped'>
    //           {/* <svg>
    //               <use href="#svg_bird_top" />
    //             </svg> */}
    //         </div>
    //         <div className='bird bird-bottom svg-clipped'>
    //           {/* <svg id={'bird'}>
    //               <use href="#svg_bird_bottom" />
    //             </svg> */}
    //         </div>
    //       </div>
    //       <div
    //         className='top intro-section text-center relative'>
    //         <div className='intro-header w-max-747 text-s-26 md-text-s-40 md-l-text-s-55 text-weight-700'>
    //           <p><span>დააგროვე და გადაცვალე</span> <spam className='text-color-primary'>მონეტები</spam></p>
    //         </div>
    //         <div className='intro-description p-top-50 text-s-16 md-text-s-20'>
    //           <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
    //         </div>
    //         <div className='intro-action p-top-40'>
    //           <Link href={
    //             'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?client_id=demo-client&response_type=code&scope=email&redirect_uri=http://localhost:3000'
    //           }>
    //             <Button
    //               onClick={() => {
    //                 containerViewRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //               }}
    //               text={'დაწყება'} variant={'primary'} size={'large'} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>


    //     <div className='section section-md-auto divide-h flx flx-all flx-col w-wide'>
    //       <div className='w-wide'>
    //         <AppNavigation navigation={props.appData.platforms} />
    //       </div>
    //     </div>
    //   </FullPage>
    //   <FullPage ref={faqSection} style={{ backgroundColor: 'lightgray' }}>
    //     screen 2
    //   </FullPage>
    // </div>
  )
}
