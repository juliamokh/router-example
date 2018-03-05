import Component from '../blackbox';
import { bindAll } from '../utils/';

class Login extends Component {
  constructor() {
    super();
    this.host = document.createElement('form');
    this.host.classList.add('container');

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
      <input type="text" id="username" name="username">
      <div class="hint">Type "admin" to enter</div>
      <button type="submit" class="btn">Go</button>
    `;
  }
};

export default Login;
