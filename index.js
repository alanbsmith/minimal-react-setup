
const Hello = React.createClass({
  render() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
});

// tell ReactDOM to render components
ReactDOM.render(
  <Hello name="World" />, document.getElementById('content')
);
