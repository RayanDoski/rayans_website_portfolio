'use client';
import React, { useState, useEffect } from 'react';

import Header from '@/app/components/Header/header'
import Hero from '@/app/components/Hero/hero'
import About from '@/app/components/About/about'
import Projects from '@/app/components/Projects/projects'
import Divider from '@/app/components/Divider/divider'
import Contact from '@/app/components/Contact/contact'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header isVisible={isVisible} />
      <Hero isVisible={isVisible} />
      <Divider />
      <About isVisible={isVisible} />
      <Divider />
      <Projects isVisible={isVisible} />
      <Divider />
      <Contact isVisible={isVisible} />
    </>
  );
}
