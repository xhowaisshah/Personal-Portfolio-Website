import React, { useState } from 'react';
import './Header.css'

export default function Header() {
  //Header Logo Prop 
  const logo = {
    name: 'OS'
  }
  //Header Itmes Props Data
  const menu_left = [
    {
      title: 'Home',
      link: '#'
    },
    {
      title: 'About me',
      link: '#'
    },
    {
      title: 'Services',
      link: '#'
    },
  ]
  const menu_right = [
    {
      title: 'Resume',
      link: '#'
    },
    {
      title: 'Portfolio',
      link: '#'
    },
    {
      title: 'Contact me',
      link: '#'
    },
  ] 
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = ()=> {
    setNavOpen(!isNavOpen);
  }
  return (
    <>
      <div className={`header rounded-xl bg-first flex justify-between items-center px-60 smallheader:px-25
       header:flex header:overflow-y-visible header:flex-col
      `}>
        <div className={`menu-left  header:order-3 header:${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className=' flex
          header:block'>
            {menu_left.map((menu_left, index) => (
              <li className='menu_left font-heading text-white pl-16'><a href={menu_left.link} className=' hover:text-hover'>{menu_left.title}</a></li>
            ))}
          </ul>
        </div>
        <div className=' flex header:justify-between header:h-90 header:items-center header:w-full'> 
        <div className=' w-120 h-120 bg-second rounded-full font-heading text-white text-4xl flex justify-center items-center 
        header:w-60 header:h-60 header:text-xl header:order-1'>
          {logo.name}
        </div>
        <div onClick={toggleNav} className=' w-60 h-23 bg-second Pc:hidden Desktop:hidden order-2'>
          <div className=' w-60 h-4 bg-white'></div>
          <div className=' w-60 h-4 bg-white'></div>
          <div className=' w-60 h-4 bg-white'></div>
        </div>
        </div>
        <div className={`menu-right
         header:order-4 header:${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className=' flex
          header:block'>
            {menu_right.map((menu_right, index) => (
              <li className='menu_right font-heading text-white pr-16'><a href={menu_right.link} className=' hover:text-hover'>{menu_right.title}</a></li>
            ))}
          </ul>
        </div>
        </div>
    </>
  );
}