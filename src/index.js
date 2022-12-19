import variables from '../styles/root.module.scss'

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function getRGBdiff(obj1, obj2) {
  const diff = Math.abs(obj1.r - obj2.r);
  const perc = obj1.r ;
  
  return {
    r: Math.abs(obj1.r - obj2.r),
    g: Math.abs(obj1.g - obj2.g),
    b: Math.abs(obj1.b - obj2.b),
  }
}

export default variables;