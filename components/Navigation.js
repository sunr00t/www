import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch'
const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">Bruno Nascimento</Link>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </div>
  );
};

export default Navigation;
