import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { ChevronUpIcon, ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
//import logo from '../images/logo-bd552.png'

function Navbar() {
    const [changeIcon, setChangeIcon] = useState(false)

    return (
    <Disclosure as='nav' className='bg-sand-navbar'>
    {({open}) => (
    <>
        <div className='max-w-5xl mx-auto px-2 sm:px-6 md:px-8'>
            <div className='flex justify-between my-3'>
                <div className="flex items-center">
                    <div className='flex-shrink-0'>
                        <img 
                            className='h-8' 
                            src=''
                            alt="bd 522"
                        />
                    </div>        
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-center space-x-4 text-lg '>
                            {/*Hlavní menu - velké monitory*/}
                            <Link href='/'><a  className='nav-link'></a>Domů</Link>

                            {/* Dropdown menu 'O nás' */}
                            <Menu as='div'>
                                <Menu.Button className='nav-link flex items-center' onClick={() => setChangeIcon(prevChangeIcon => !prevChangeIcon)}>
                                    <span className='pr-2'>O nás</span>
                                    {changeIcon ?
                                        <ChevronDownIcon className='h-5 w-5' /> :
                                        <ChevronUpIcon className='h-5 w-5' />
                                    }
                                </Menu.Button>

                                <Transition
                                   as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                > 
                                    <Menu.Items className='absolute w-auto flex flex-col mt-2 p-3 bg-sand-navbar'>
                                        <Menu.Item >
                                            <Link href='/historie'><a className='hover:bg-sand-font hover:text-white'></a>Historie</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link href='/sprava'><a className='hover:bg-sand-font hover:text-white'></a>Správa domu</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link href='/predstavenstvo'><a className='hover:bg-sand-font hover:text-white'></a>Představenstvo</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <Link href='/documenty' className='nav-link'>Dokumenty</Link>
                            <Link href='/formulare' className='nav-link'>Formuláře</Link>
                            <Link href='/fotogalerie' className='nav-link'>Fotogalerie</Link>
                            <Link href='/kontakt' className='nav-link'>Kontakt</Link>
                        </div>
                    </div>
                </div>
                
                <div>
                        {/* Tady by mohlo být tlačítko pro vstup do administrace - ???? */}
                </div>

                <div className='mr-4 flex md:hidden'>
                   {/* Menu pro mobilní telefony*/}
                  <Disclosure.Button>
                    {open ? (
                        <XIcon className='h-8 w-8' />
                    ):(
                        <MenuIcon className='h-8 w-8' />
                    )}
                  </Disclosure.Button> 
                </div>

            </div>
        </div>
        
        <Disclosure.Panel className='md:hidden '>
            <div className='flex flex-col text-xl text-center'>
                <Link href='#' className='hover:bg-sand-font hover:text-white'>Domů</Link>
                <Link href='/historie' className='hover:bg-sand-font hover:text-white' >Historie</Link>
                <Link href='/sprava' className='hover:bg-sand-font hover:text-white' >Správa domu</Link>
                <Link href='/predstavenstvo' className='hover:bg-sand-font hover:text-white' >Představenstvo</Link>
                <Link href='/documenty' className='hover:bg-sand-font hover:text-white'>Dokumenty</Link>
                <Link href='/formulare' className='hover:bg-sand-font hover:text-white'>Formuláře</Link>
                <Link href='/fotogalerie' className='hover:bg-sand-font hover:text-white'>Fotogalerie</Link>
                <Link href='/kontakt' className='hover:bg-sand-font hover:text-white'>Kontakt</Link>
            </div>
        </Disclosure.Panel>
    </>    
    )}
    </Disclosure>
    )    
}

export default Navbar