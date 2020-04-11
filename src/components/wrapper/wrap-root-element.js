import React from 'react';
import Header from '../header/header';
import "../../styles/global.scss";

export const wrapRootElement = ({element}) => (
  <>
    <Header/>
    {element}
  </>
)