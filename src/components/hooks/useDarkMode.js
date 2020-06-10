import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {

const [value, setValue] = useLocalStorage(key, initialValues);

useEffect(() => {
  const body = document.getElementsByTagName('body')[0];

  if(value) {
console.log('darkmode acitvated');

  } else {

  }

}, [value])

}