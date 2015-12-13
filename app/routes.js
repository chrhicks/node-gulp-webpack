import AppComponent from './components/app';
import IndexComponent from './components/index';
import TechComponent from './components/tech';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/tech',
      component: TechComponent
    }
  ]
};

export { routes };
