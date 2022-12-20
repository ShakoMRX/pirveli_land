import React, { createContext, useContext, useEffect, useRef, useState } from 'react'


const ScrollContext = createContext(null);

export const useScrollValue = () => useContext(ScrollContext);

export function ScrollProvider({ children }) {
  const [scrollState, setScroll] = useState(typeof window !== 'undefined' ? document.documentElement.scrollTop : null);
  const isLocked = useRef(false);
  const prevValue = useRef(scrollState);

  const setLock = (e) => {
    isLocked.current = e;
  }

  useEffect(() => {
    console.log('object', document.documentElement.scrollTop)
    // var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    var wheelEvent = 'scroll';

    const onScrollEvent = (e) => {
      // console.log('onScroll', document.documentElement.scrollTop, prevValue.current, );

      prevValue.current = document.documentElement.scrollTop;
      if (isLocked.current) {
        // e.preventDefault();
        // return;
      }
      // console.log('onScroll', e.screenY, e.layerY);
      // console.log('onScroll', window.pageYOffset || document.documentElement.scrollTop);

      // setScroll({
      //   scroll: window.pageYOffset || document.documentElement.scrollTop
      // })
    }

    window.addEventListener('DOMMouseScroll', onScrollEvent, { passive: false });
    return () => {
      window.removeEventListener(wheelEvent, onScrollEvent)
    }
  }, [])

  return (
    <ScrollContext.Provider value={[scrollState, setScroll, setLock]}>
      {children}
    </ScrollContext.Provider>
  )
}

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children, initialValue }) {
  const [user, setUser] = useState(initialValue);


  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}