import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { pink, yellow } from '@mui/material/colors';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export const SidebarData = [
  {
    title: 'Aws Service',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'MicroSoft Service',
    path: '/Products',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'MicroSoft Service',
    path: '/Reports',
    icon: <FiberManualRecordIcon  color="success" />,
    cName: 'nav-text'
  }
];

export const TabsData =[
  {
    title: 'All',
    path: '/',
    icon: <GroupWorkIcon  color="success" />
  },
  {
    title: 'Approved',
    path: '/',
    icon: <FiberManualRecordIcon  color="success" />
  },
  {
    title: 'Not Approved',
    path: '/',
    icon: <FiberManualRecordIcon  sx={{ color: pink[500] }}/>
  },
  {
    title: 'Evaluating',
    path: '/',
    icon: <FiberManualRecordIcon sx={{ color: yellow[500] }} />
  },
  {
    title: 'Not Evaluting',
    path: '/',
    icon: <FiberManualRecordIcon  color="disabled" />
  },
]
