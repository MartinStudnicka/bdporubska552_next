import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { ChevronUpIcon, ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
//import logo from '../images/logo-bd552.png'

function Navbar() {
  const [changeIcon, setChangeIcon] = useState(false)

  return (
    <Disclosure as='nav' className='bg-sand-navbar'>
      
    </Disclosure>    
    )    
}

export default Navbar