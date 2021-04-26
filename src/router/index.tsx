import React, { ReactNode, lazy } from 'react';

const Login = lazy(() => import('../pages/Login'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Dashboard = lazy(() => import('../pages/index/Dashboard'));
export interface Irouter {
  title: string;
  path: string;
  exact?: boolean;
  component?: ReactNode;
  children?: Irouter[];
}

const router: Irouter[] = [
  {
    title: '首页',
    path: '/dashboard',
    exact: true,
    component: <Dashboard />
  },
  {
    title: '登录',
    path: '/login',
    component: <Login />,
  },
  {
    title: '404',
    path: '/404',
    component: <PageNotFound />
  }
];

export default router;