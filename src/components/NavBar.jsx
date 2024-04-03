// import React, {useState} from 'react';
// import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

// const NavBar = () => {
//   const [nav, setNav] =useState(false)

//   const handleNav = () => 
//   {
//     setNav[!nav]
//   }
//   return (
//    <nav className='text-white lg:px-24 '>
//     <ul className='flex float-left pl-40 mt-9'>
//       <li>
//      <img src=".././public/logo.png" alt="" />
//       </li>
//     </ul>
//     <ul className='flex hidden float-right space-x-4 pr-40 mt-9'>
//      <li>
//         <a href="#" className='hover:text-blue-700'>countries</a>
//       </li>
//       <li>
//         <a href="#" className='hover:text-blue-700'>continents</a>
//       </li>
//       <li>
//         <a href="#" className='hover:text-blue-700'>regions</a>
//       </li>
//     </ul>
//     <div onClick={handleNav}>
//        <AiOutlineMenu size={20} />
//     </div>
//     <div className={!nav ?'fixed left-0 top-0 ' : 'fixed left-[-100%]' }>
//      <ul>
//      <li>
//         <a href="#" className='hover:text-blue-700 '>countries</a>
//       </li>
//       <li>
//         <a href="#" className='hover:text-blue-700'>continents</a>
//       </li>
//       <li>
//         <a href="#" className='hover:text-blue-700'>regions</a>
//       </li> </ul>
//     </div>
//    </nav>
//   )
// }

// export default NavBar













import React from 'react';


const NavBar = () => {

  return (
   <nav className='text-white lg:px-20  md:px-20 sm:px-5'>
    <ul className='flex float-left pl-40 mt-9'>
      <li>
     <img src=".././public/logo.png" alt="" />
      </li>
    </ul>
    <ul className='flex float-right space-x-4 pr-40 mt-9'>
     <li>
        <a href="#" className='hover:text-blue-700'>countries</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>continents</a>
      </li>
      <li>
        <a href="#" className='hover:text-blue-700'>regions</a>
      </li>
    </ul>
   
   </nav>
  )
}

export default NavBar