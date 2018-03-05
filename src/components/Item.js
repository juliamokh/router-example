import Component from '../blackbox';

class Item extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { params: {id} } = this.props;

    return `
      <div>This is item ${id}</div>
      <button type="button"><a href="#example">Back</a></button>
    `;
  }
};

export default Item;
