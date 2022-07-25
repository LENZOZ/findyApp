import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import "./Navbar.css";

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reservas',
    path: '/admin/reservas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  /*{
    title: 'Productos',
    path: '/admin/productos',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },*/
  {
    title: 'Personal',
    path: '/admin/personal',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  /*{
    title: 'Menu',
    path: '/admin/menus',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },*/
  {
    title: 'Mesas',
    path: '/admin/Mesas',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Local',
    path: '/admin/local',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Promos',
    path: '/admin/promociones',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
