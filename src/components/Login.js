import Component from '../blackbox';
import { bindAll } from '../utils/';

class Login extends Component {
  constructor() {
    super();
    this.host = document.createElement('form');

    bindAll(this, 'handleSubmit');
    this.host.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const login = ev.target.username.value;
    this.props.callback(login);
    window.location.hash = '#example';
  }

  render() {
    return `
      <label for="username">Username: </label>
      <input type="text" id="username" name="username" placeholder="admin">
      <label for="psw">Password:</label>
      <input type="password" id="psw">
      <button type="submit">Go</button>
    `;
  }
};

export default Login;
