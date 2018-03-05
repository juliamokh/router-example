import Component from '../blackbox';
import '../styles/index.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('render');
    return `<div>Router example</div>`;
  }
};

export default App;
