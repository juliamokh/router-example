import Component from './Component';
import { bindAll, isEqualPaths, extractUrlParams } from '../utils/';

class Router extends Component {
  constructor(props) {
    super(props);

    const { host, routes } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null
    };

    this.host = host;

    bindAll(this, 'hadleHashChange', 'handleLogin');

    window.addEventListener('hashchange', () => this.hadleHashChange(this.path));
    this.hadleHashChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  hadleHashChange(path) {
    const { routes, currentRoute } = this.state;
    const nextRoute = routes.find( ({ href }) => isEqualPaths(href, path));

    if(nextRoute && nextRoute !== currentRoute) {
      
      if(nextRoute.onEnter) {
        nextRoute.onEnter(this.navigateTo, this.state);
      };

      if(nextRoute.redirectTo) {
        return this.navigateTo(nextRoute.redirectTo);
      };

      this.updateState({
        currentRoute: nextRoute,
        currentComponent: new nextRoute.component(),
      });
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  handleLogin(login) {
    this.updateState({ login });
  }

  render() {
    const { currentRoute, currentComponent } = this.state;

    return currentComponent.update({ 
      callback: this.handleLogin,
      params: extractUrlParams(currentRoute.href, this.path),
    });
  }

};

export default Router;
