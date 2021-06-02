import React from 'react';
import HomeHeader from '../components/home/home-header';
import HomeMain from '../components/home/home-main';
import HomeFooter from '../components/home/home-footer';

export default function Home(props) {
  return (
    <>
      <HomeHeader />

      <HomeMain />

      <HomeFooter />
    </>
  );
}
