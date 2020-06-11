import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {

const [value, setValue] = useLocalStorage(key, initialValues);

const toggleMode = e => {
  e.preventDefault();
  setValue(!value)
}

useEffect(() => {
  const body = document.getElementsByTagName('body')[0];

  if(value) {
console.log('darkmode activated');
document.body.classList.toggle('dark-mode')

  } else {
    document.body.classList.remove('dark-mode')
  }

}, [value])

return [value, toggleMode]

}

export default useDarkMode; 