import React from 'react';
import {
  MainPage,
  ContactPage,
} from '../pages';
import { RouteProps } from 'react-router-dom';


export const routes: RouteProps[] = [
  {
    path: '/',
    children: <MainPage />,
  },
  {
    path: '/main',
    children: <MainPage />,
  },
  {
    path: '/contact',
    children: <ContactPage />,
  },
  {
    path: '*',
    children: null,  //@ todo: error page
  },
];

export default routes;