import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ImageComponent from '../src/Components/ImageComponent'
import Button from '../src/Shared/Button'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import variables, { hexToRgb } from '../src'
import FullPage from '../src/Components/FullPage'
import { useScrollValue, useUser } from '../src/store'
import Footer from '../src/Components/Footer'
import { faqBirdMovement, isServer, options, textContainerTemplate, textContainerTemplate2, videoContainerTemplate, _birdBottomTemplate, _birdTopTemplate, _intoTextTemplate } from '../src/utils'
import { BirdTop } from '../src/Icons'
import { BirdBottom } from '../src/Icons/Birds'

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
  };

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
    const birdTop = document.getElementById('birdTop');
    const birdBottom = document.getElementById('birdBottom');
    if (show) {

      
      bgRef.current.classList.add('active');
      bgRef.current.parentNode.classList.add('active');
      e.currentTarget.classList.add('active');
      if (e.currentTarget.dataset.name !== lastActiveEl.current) {
        lastActiveEl.current = e.currentTarget.dataset.name;
      }

      // console.log('bird2', e.currentTarget.parentNode.dataset.name);

      birdTop.firstChild.style.fill = variables[`brand_${e.currentTarget.parentNode.dataset.name}`];
      birdBottom.firstChild.style.fill = variables[`brand_${e.currentTarget.parentNode.dataset.name}`];

      bgRef.current.style.backgroundColor = variables[`brand_${lastActiveEl.current}`]

    } else {
      bgRef.current.classList.remove('active')
      bgRef.current.parentNode.classList.remove('active')
      bgRef.current.style.backgroundColor = 'transparent';
      lastActiveEl.current = null;
      
      birdTop.firstChild.style.fill = '';
      birdBottom.firstChild.style.fill = '';

    }

  }

  return (
    <div className='app-navigation relative' id={'appNavigation'}>
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
      <div className='layout-wrap-out h-full'>
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
                    className='title text-s-16 md-text-s-28 text-weight-600'>
                    {nav.name}
                  </div>
                  <div className='image-area '>
                    <ImageComponent width={299} height={299} src={`/assets/img/${nav.slug}.png`} />
                  </div>
                </Link>
              </li>
            })}
            <div ref={bgRef} className='simple-bg'></div>
          </ul>
        </div>
      </div>
    </div>
  )
}

const MainSection = ({ active: section, navigation = [] }) => {
  const ref = useRef();
  const [user,] = useUser();
  const isActive = section.activeSection == 0;
  const inView = useScroll({
    container: !isServer ? document.body : null
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start start"]
  });

  const birdTransform = {
    x: useTransform(scrollYProgress, [0.5, 1], [0, 0]),
    y: useTransform(scrollYProgress, [0.5, 1], [-0, 0])
  };

  const textTransform = {
    scale: useTransform(scrollYProgress, [0, 1], [1, 1]),
    y: useTransform(scrollYProgress, [0, 1], [0, 0]),
    opacity: useTransform(scrollYProgress, [0.5, 1], [1, 1]),
  }
  // const birdTransform = {
  //   x: useTransform(scrollYProgress, [0.5, 1], [2700, 0]),
  //   y: useTransform(scrollYProgress, [0.5, 1], [-2700, 0])
  // };

  // const textTransform = {
  //   scale: useTransform(scrollYProgress, [0, 1], [0.7, 1]),
  //   y: useTransform(scrollYProgress, [0, 1], [-500, 0]),
  //   opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]),
  // }


  // console.log('inView', inView);

  birdTransform.x.on('change', (e) => {
    // console.log('e', e);

  })

  // console.log('isActive', section)

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['end start', 'start start']
  // })

  // const _springOpt = {
  //   damping: 100,
  //   duration: 3,
  // }

  // // const isInView = useInView(ref);
  // const bird_top_x = useSpring(0, _springOpt)
  // const bird_top_y = useSpring(0, _springOpt)
  // const zValue = useMotionValue(section && section.activeSection.toString().length ? 1 : 0)

  // const z = useTransform(zValue, [1, 0], [2500, 0], {
  //   clamp: false
  // })


  // const bird_bottom_x = useSpring(0, _springOpt)
  // const bird_bottom_y = useSpring(0, _springOpt)

  // useEffect(() => {
  //   if (section && section.activeSection.toString().length) {
  //     bird_top_x.set(section.activeSection.toString() !== '0' ? 2500 : 0)
  //     bird_top_y.set(section.activeSection.toString() !== '0' ? -2500 : 0)

  //     bird_bottom_x.set(section.activeSection.toString() !== '0' ? 2500 : 0)
  //     bird_bottom_y.set(section.activeSection.toString() !== '0' ? -2500 : 0)

  //     z.set(section.activeSection.toString() !== '0' ? 1 : 0)
  //   }
  // }, [bird_top_x, bird_top_y, section])

  // const x = useTransform(isInView ? 1 : 0, [0, 1], [2500, 0])

  // const y = useTransform(isInView ? 1 : 0, [0, 1], [-2500, 0])
  // const z = useTransform(isInView ? 1 : 0, [0, 1], [2500, 0])


  // console.log('object', process.env.AUTH_LINK)

  return <FullPage
    ref={ref}
    className={'section-auto section-md-full flx flx-col md-flx-all md-justify-content-evenly'} >
    <div
      className='p-top-180 md-p-top-auto section-md-auto divide-h flx flx-all flx-col relative'>
      <div className='page-bg'>
        <motion.div
          // variants={_birdTopTemplate}
          // initial={'show'}
          // animate={isActive ? 'show' : 'hidden'}
          id="birdTop"
          style={birdTransform}
          className='bird bird-top'>
          <BirdTop />
        </motion.div>
        <motion.div
          // variants={_birdBottomTemplate}
          // initial={'show'}
          style={birdTransform}
          id="birdBottom"
          className='bird bird-bottom'>
          <BirdBottom />

          {/* <svg id={'bird'}>
            <use href="#svg_bird_bottom" />
          </svg> */}
        </motion.div>
      </div>
      <motion.div
        // variants={_intoTextTemplate}
        // initial={'show'}
        // animate={isActive ? 'show' : 'hidden'}
        style={textTransform}
        className='top intro-section text-center relative md-p-top-auto'>
        <div className='intro-header w-max-747 text-s-26 md-text-s-40 md-l-text-s-55 text-weight-700'>
          <p><span>დააგროვე და გადაცვალე</span> <span className='text-color-primary'>მონეტები</span></p>
        </div>
        <div className='intro-description p-top-28 md-p-top-50 text-s-16 md-text-s-20'>
          <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
        </div>
        <div className='intro-action p-top-28 md-p-top-30'>
          <Link
            target={'_self'}
            href={
              user && !user.id ? process.env.REGISTER_LINK : process.env.PROFILE_LINK
            }>
            <Button
              text={'დაწყება'} pulse variant={'primary'} size={'large'} />
          </Link>
        </div>
      </motion.div>
    </div>
    <motion.div
      style={textTransform}
      className='p-top-auto md-p-top-140 section-md-auto divide-h flx flx-all flx-col w-wide relative z-2s'>
      <div className='w-wide'>
        <AppNavigation navigation={navigation} />
      </div>
    </motion.div>
  </FullPage>
}


const FaqSection = ({ active }) => {
  const isActive = active.activeSection == 1;
  const ref = useRef();

  useEffect(() => {

    if (ref.current) {
      ref.current.parentNode.scrollTop = 0;
      // console.log('-------------', ref.current.parentNode.scrollTop)
    }

  }, [active, isActive])

  return <div ref={ref}
    className='section-auto section-md-full md-flx md-flx-all size-full layout-wrap'>
    <div className='some-cntnr md-flx md-flx-row gap-30 w-wide relative'>
      <div className='section-auto section-md-auto divide-h p-top-80 relative z-3'>
        <div className='info-section w-full l-sm-w-490 lg-w-619'>
          <h4 className='title-area flx flx-col text-weight-700 text-s-16 md-text-s-20 l-sm-text-s-28'>
            <motion.p

              variants={textContainerTemplate}
              initial={'show'}
              animate={isActive ? 'show' : 'hidden'}
            >ლოიალურობაზე დაფუძნებული</motion.p>
            <motion.p

              variants={textContainerTemplate2}
              initial={'show'}
              animate={isActive ? 'show' : 'hidden'}
              className='text-color-primary m-left-auto transformleft'>ციფრული ეკოსისტემა</motion.p>
          </h4>
          <ul className='flx flx-col gap-20'>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>01</p>
              <span className='text-line-height-24'>
                ადგილი სადაც ყოველ შენს აქტივობას მოაქვს მონეტები. ერთვები გასართობ თამაშებში და ზრდი დაგროვებული მონეტების რაოდენობას.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>02</p>
              <span className='text-line-height-24'>
                დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>03</p>
              <span className='text-line-height-24'>
                ყოველ 100 მონეტაზე იღებ ფულადი პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი საპრიზო ფონდით - 300 000ლ.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='section-auto section-md-auto divide-h flx flx-all md-block flex-g-1 p-top-80 p-bottom-56'>

      <motion.div
      
            variants={videoContainerTemplate}
            initial={'show'}
            animate={isActive ? 'show' : 'hidden'}
            style={{ zIndex: 2 }}
            className='video-container'>
          <div className={"videoWrap"}>
            <img src='/assets/img/video.png'/>
          </div>
          <div className='element'>
            <ImageComponent alt="Meet our Pirveli" width={227} height={137} src='/assets/img/meet-first.svg' />
          </div>
        </motion.div>

      </div>
    </div>
  </div>
}

const FaqSectionSimple = ({ active }) => {
  const isActive = active.activeSection == 1;
  const ref = useRef();

  useEffect(() => {

    if (ref.current) {
      ref.current.parentNode.scrollTop = 0;
      // console.log('-------------', ref.current.parentNode.scrollTop)
    }

  }, [active, isActive])

  return <div ref={ref}
    className='row-container'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='info-section w-full l-sm-w-490 lg-w-619'>
          <h4 className='title-area flx flx-col text-weight-700 text-s-16 md-text-s-20 l-sm-text-s-28'>
            <motion.p

              variants={textContainerTemplate}
              initial={'show'}
              animate={isActive ? 'show' : 'hidden'}
            >ლოიალურობაზე დაფუძნებული</motion.p>
            <motion.p

              variants={textContainerTemplate2}
              initial={'show'}
              animate={isActive ? 'show' : 'hidden'}
              className='text-color-primary m-left-auto transformleft'>ციფრული ეკოსისტემა</motion.p>
          </h4>
          <ul className='flx flx-col gap-20'>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>01</p>
              <span className='text-line-height-24'>
                ადგილი სადაც ყოველ შენს აქტივობას მოაქვს მონეტები. ერთვები გასართობ თამაშებში და ზრდი დაგროვებული მონეტების რაოდენობას.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>02</p>
              <span className='text-line-height-24'>
                დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
              </span>
            </li>
            <li className='flx flx-col gap-8'>
              <p className='text-s-16 md-text-s-24 text-weight-700 text-color-primary'>03</p>
              <span className='text-line-height-24'>
                ყოველ 100 მონეტაზე იღებ ფულადი პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი საპრიზო ფონდით - 300 000ლ.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-md-6'>
        <motion.div
          variants={videoContainerTemplate}
          initial={'show'}
          animate={isActive ? 'show' : 'hidden'}
          style={{ zIndex: 2 }}
          className='video-container'>
          <div className='playBtn'>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="#DB0060" />
              <g clipPath="url(#clip0_3249_11327)">
                <path d="M45 42V58L58 50L45 42Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_3249_11327">
                  <rect width="24" height="24" fill="white" transform="translate(38 38)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className='video-area'>

          </div>

          <motion.div
            className='faqBird-bg'
            variants={faqBirdMovement}
            initial={'show'}
            animate={isActive ? 'show' : active.activeSection > 1 ? 'hidden1' : 'hidden'}
          >
            <svg id={'bird'}>
              <use href="#bird_3" />
            </svg>
          </motion.div>

          <div className='element'>
            <ImageComponent alt="Meet our Pirveli" width={227} height={137} src='/assets/img/meet-first.svg' />
          </div>

        </motion.div>
      </div>
    </div>
  </div>
}

// const MainSectionMemo = memo(MainSection, (p, n) => p.active.activeSection == n.active.activeSection)
// const FaqSectionMemo = memo(FaqSection, (p, n) => p.active.activeSection == n.active.activeSection)


const ScrollContainerElement = ({ children, scrollCallback }) => {
  const { scrollYProgress } = useScroll();
  const [scroll,] = useScrollValue();
  const containerRef = useRef(null);
  const activeSection = useRef(0);
  const [scrollingTimer, setTimer] = useState(0);
  const isScrolling = useRef(false);
  const [active, setActive] = useState(0);
  const [prevActive, setPrev] = useState(0);
  const [scrolling, setScrolling] = useState(false);


  const onMouseWheel = (e) => {
    console.log('e', e)
  }

  useEffect(() => {
    return scrollYProgress.on('change', (e) => {
      // console.log('-----------', e)
    })
  }, [])

  useEffect(() => {
    // if (!scrolling && prevActive != active) {
    //   // console.log(active);
    //   setPrev(active);
    // }
    if (!scrolling) {
      // console.log('object', active)
    }
    // console.log('-----------------activeSection', scrolling);
    // document.querySelectorAll(`div[data-name='section']`)[active].scrollIntoView({ behavior: 'smooth' })

  }, [scrolling, active])

  useEffect(() => {

    if (!isServer) {
      // document.body.style.overflow = 'hidden';
    }
    const _targetPositions = document.querySelectorAll(`div[data-name='section']`)

    let deltay = 0;
    let scale = 1;
    let scrollSize = 0;
    // console.log('scrollSize', document.documentElement.scrollTop, )

    // activeSection.current = document.documentElement.scrollTop > 
    scrollCallback({ activeSection: activeSection.current })

    let timer;
    function debounce(func, timeout = 300) {
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    function onScroll(e) {
      return;
      setScrolling(true);
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      const _activeSection = activeSection.current - delta;
      // setActive(_activeSection)

      if (!scrolling) {
        console.log('_activeSection', activeSection.current)
      }

      return debounce(() => {
        setScrolling(false)
        console.log('---------------')
        return;
        e.preventDefault();
        const scroll = document.documentElement.scrollTop;
        var rolled = 'wheelDelta' in event ? event.wheelDelta : -1 * event.detail;
        const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        const _activeSection = activeSection.current - delta;
        const targetPositions = document.querySelectorAll(`div[data-name='section']`)

        scale += e.deltaY * -0.1;
        scale = Math.min(Math.max(0, scale), 1894);

        // const scrollSize = delta > 0
        //   ? prevEl ? 

        // console.log('-----', { scale })

        // console.log('-------', activeSection.current, delta)

        if (isScrolling.current || _activeSection < 0 || _activeSection == targetPositions.length) {
          return false;
        }


        const currentEl = targetPositions[_activeSection];
        const prevEl = targetPositions[_activeSection - 1];
        const nextEl = targetPositions[_activeSection + 1];

        const _prev = activeSection.current;

        const prevSize = prevEl || 0;

        isScrolling.current = true;
        setActive(_activeSection);
        setScrolling(true);
        activeSection.current = _activeSection;

        // console.log('----', { prevEl, currentEl, nextEl })

        if (scrollingTimer) {
          clearTimeout(scrollingTimer);
        }

        setTimer(setTimeout(() => {
          console.log('-------------------------');
          isScrolling.current = false;
          setScrolling(false);

        }, 5300));

        // console.log('scrolling', isScrolling.current)

        // if (delta > 0) {
        //   scrollSize += currentEl.getBoundingClientRect().height
        //   if (prevEl) {
        //     if (prevEl.getBoundingClientRect().height < currentEl.getBoundingClientRect().height) {
        //     } else {
        //     }
        //   } else {
        //   }
        // } else {

        //   scrollSize -= currentEl.getBoundingClientRect().height
        //   if (nextEl) {
        //     if (nextEl.getBoundingClientRect().height < currentEl.getBoundingClientRect().height) {
        //     } else {
        //     }
        //     // console.log('nextEl', currentEl, targetPositions[_activeSection + 1].getBoundingClientRect())
        //   } else {
        //     console.log('-----')
        //   }
        // }

        // scrollSize = scrollSize += 

        // scale += e.deltaY * -0.01;

        // // Restrict scale
        // scale = Math.min(Math.max(0, scale), containerRef.current.getBoundingClientRect().height);

        // console.log('-----', scale - document.body.scrollHeight)

        // console.log('scrollSize', e.deltaY * -1)


        // containerRef.current.style.transform = `translate3d(0, ${scrollSize}px, 0)`
        // containerRef.current.style.transition = `all 2s ease-in-out`
        // scrollCallback({ activeSection: activeSection.current })


        // prevEl.scrollIntoView({behavior: 'smooth'})

        // containerRef.current.style.transform = `translate3d(0, ${scrollSize}px, 0)`
        // containerRef.current.style.transition = `all 2s ease-in-out`
        scrollCallback({ activeSection: activeSection.current })

      })()
    }

    window.addEventListener('wheel', onScroll)

    return () => {
      window.removeEventListener('wheel', onScroll)
    }
  }, [])

  return <motion.div
    ref={containerRef}
    className="sections"
    style={{}}
  >
    {children}
  </motion.div>
}

const CustomSection = ({ children, className }) => {
  const { scrollYProgress } = useScroll();


  return <div data-name='section' className={`${className}`} >
    {children}
  </div>
}

export default function Home(props) {
  const introSection = useRef(null);
  const faqSection = useRef(null);
  const footerSection = useRef(null);
  const [activeSection, setActiveIndex] = useState({ activeSection: options.activeSection });
  const anchors = ["firstPage", "secondPage", "thirdPage"];

  return (
    <ScrollContainerElement className="container"  {...options}
      scrollCallback={(e) => {
        // console.log('beforeLeave', e);
        setActiveIndex(e);
      }}>
      <CustomSection className="section-auto section-md-full relative z-3">
        <MainSection active={activeSection} navigation={props.appData.navigation} />
      </CustomSection>
      <CustomSection className="section-auto section-md-full faqSection">
        <FaqSection active={activeSection} />
      </CustomSection>
      {/* <CustomSection className="footer">
        <Footer />
      </CustomSection> */}
      {/* <CustomSection className="section-auto section-md-full">
        <div style={{ height: 2500, backgroundColor: 'gray' }}>
          <h4>Section</h4>
        </div>
      </CustomSection> */}
      <CustomSection className="footer">
        <Footer />
      </CustomSection>

      {/* <Section className="fp-auto-height">Page 3</Section> */}
    </ScrollContainerElement>
  )
}
