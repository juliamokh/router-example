import Component from '../blackbox';

class Item extends Component {
  constructor(props) {
    super();

    this.host.classList.add('container');
  }

  render() {
    const { params: {id} } = this.props;

    return `
      <div>This is <b>item ${id}</b></div>
      <button type="button" class="btn"><a href="#example">Back</a></button>
    `;
  }
};

export default Item;
