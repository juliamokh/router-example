import Component from './Component';

class Router extends Component {
  constructor(props) {
    super(props);

    const { host, routes } = props;

    this.state = {
      routes: routes,
      currentComponent: null,
      currentRoute: null,
    };

    this.host = host;

    window.addEventListener('hashchange', this.hadleHashChange());
  }

  get path() {
    return window.location.hash.slice(1);
  }

  hadleHashChange() {
    const { routes, currentRoute } = this.state;
    const nextRoute = routes.find( ({ href }) => href === this.path );

    if(nextRoute && nextRoute !== currentRoute) {
      
      if(nextRoute.onEnter) {
        nextRoute.onEnter(this.navigateTo);
        return;
      };

      this.updateState({
        currentComponent: new nextRoute.component(),
        currentRoute: nextRoute
      });
      console.log(this.state);
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  render() {
    const { currentComponent } = this.state;
    return currentComponent.update();
  }

};

export default Router;
