import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  return (
    <nav 
      className={'${styles.paddindX} w-full flex items-center py-5 fiixed top-0 z-20 bg-primary'}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to= "/"
          className = 'flex items-center gap-2'
          onClick = {() => {
            SetActive("");
            window.scrollTo(0, 0);   
          }}
        >
          <img src = {logo} alt = "logo" className = "w-9 h-9 object-contain" />
          <p className="text-white text-[18px] front-bold cursor-pointer">Mohammed Alam <span
          className="sm:block hidden"> Portfolio</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar