import React, { createContext, useContext, useEffect, useRef, useState } from 'react'


const ScrollContext = createContext(null);

export const useScrollValue = () => useContext(ScrollContext);

export function ScrollProvider({ children }) {
  const [scrollState, setScroll] = useState(typeof window !== 'undefined' ? window.scrollY : null);
  const isLocked = useRef(false);
  const prevValue = useRef(scrollState);

  
  const setLock = (e) => {
    isLocked.current = e;
  }

  useEffect(() => {
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

      setScroll({
        scroll: window.pageYOffset || document.documentElement.scrollTop
      })
    }

    window.addEventListener('scroll', onScrollEvent, { passive: false });
    return () => {
      window.removeEventListener('scroll', onScrollEvent)
    }
  }, [])

  return (
    <ScrollContext.Provider value={[scrollState, setScroll, setLock]}>
      {children}
    </ScrollContext.Provider>
  )
}

// maybe add reducer 

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children, initialValue }) {
  const [user, setUser] = useState(initialValue);

  return (
    <UserContext.Provider value={[initialValue, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
