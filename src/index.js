import './styles/index.css';

import Router from './blackbox/Router';
import routes from './routes';

const router = new Router({ host: document.getElementById('root'), routes });
