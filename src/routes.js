import Login from './components/Login';
import App from './components/App';
import Item from './components/Item';

import { users } from './store';

export default [
  {
    href: '',
    redirectTo: 'login',
  },
  {
    component: Login,
    href: 'login',
  },
  {
    component: App,
    href: 'example',
    onEnter: (navigateTo, { login }) => {
      if (!users.some((el) => el === login)) {
        navigateTo('login');
        return false;
      }
      else return;
    }
  },
  {
    component: Item,
    href: 'example/:id',
    onEnter: (navigateTo, { login }) => {
      if (!users.some((el) => el === login)) {
        navigateTo('login');
        return false;
      }
      else return;
    }
  }
];
