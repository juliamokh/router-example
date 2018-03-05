import Component from '../blackbox';

class App extends Component {
  constructor() {
    super();

    this.host.classList.add('container');
  }

  render() {
    return `
      <h1>Router example</h1>
      <ul>
        <li><a href="#example/1">Item 1</a></li>
        <li><a href="#example/2">Item 2</a></li>
        <li><a href="#example/3">Item 3</a></li>
        <li><a href="#example/4">Item 4</a></li>
      </ul>
    `;
  }
};

export default App;
