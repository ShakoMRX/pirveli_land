
export const slideTimeSpeed = 3000;
export const pagerSpeed = slideTimeSpeed - 300;
export const framerSpeed = slideTimeSpeed / 1000;

export const sectionMap = {
  intro: 0,
  faq: 1,
  some: ''
}
export const isServer = typeof window == 'undefined';

export const checkActive = (key) => {
  return !isServer ? sectionMap[window.location.hash.replace('#', '')] == key : false
}

export let options = {
  activeSection: !isServer ? sectionMap[window.location.hash.replace('#', '')] : 0,
  delay: slideTimeSpeed - 300,
  sectionClassName: 'section',
  anchors: ['intro', 'faq', 'sectionThree'],
  scrollBar: false,
  navigation: false,
  verticalAlign: false,
  sectionPaddingTop: '0',
  // arrowNavigation: true
};

export const _birdTopTemplate = {
  hidden: {
    opacity: 0, x: 1200, y: -1200,
    transition: {
      duration: framerSpeed
    }
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: framerSpeed,
      ease: [0.3, 1.05, 0.5, 1.05]
    }
  }
}
export const birdTopTemplate = {};
export const _birdBottomTemplate = {
  hidden: {
    opacity: 0, x: 1200, y: -1200,
    transition: {
      duration: framerSpeed
    }
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: framerSpeed,
      ease: [0.3, 1.05, 0.5, 1.04]
    }
  }
}
export const birdBottomTemplate = {};
export const _intoTextTemplate = {
  hidden: {
    opacity: 0,
    y: -200,
    scale: 0.7,
    transition: {
      duration: framerSpeed / 3
    }
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: framerSpeed / 1.5,
      ease: [0.3, 1, 0.5, 1]
    }
  }
}
export const intoTextTemplate = {};


export const _videoContainerTemplate = {
  hidden: {
    opacity: 0,
    y: 200,
    scale: 0.4,
    transition: {
      duration: framerSpeed / 3
    }
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: .3,
      duration: framerSpeed,
      ease: [0.3, 1, 0.5, 1]
    }
  }
}
export const videoContainerTemplate = {};
export const _textContainerTemplate = {
  hidden: {
    opacity: 0,
    x: -5000,
    transition: {
      duration: framerSpeed / 3
    }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .3,
      duration: framerSpeed,
      ease: [0.3, 1, 0.5, 1]
    }
  }
}
export const textContainerTemplate = {};
export const _textContainerTemplate2 = {
  hidden: {
    opacity: 0,
    x: -5000,
    transition: {
      duration: framerSpeed / 1.5
    }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: .3,
      duration: framerSpeed,
      ease: [0.3, 1, 0.5, 1]
    }
  }
}
export const textContainerTemplate2 = {};
export const _faqBirdMovement = {
  hidden: {
    // opacity: 0,
    x: -1200,
    y: 700,
    transition: {
      duration: framerSpeed / 1.5
    }
  },
  hidden1: {
    // opacity: 0,
    x: 2400,
    y: -700,
    transition: {
      duration: framerSpeed / 1.5
    }
  },
  show: {
    // opacity: 1,
    x: 0,
    y: 0,
    transition: {
      // delay: .3,
      duration: framerSpeed,
      ease: [0.3, 1.05, 0.5, 1.05]
    }
  }
}
export const faqBirdMovement = {};
