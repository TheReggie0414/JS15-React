import React from "react";

export class Button extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    this.state < prevState;
    console.log("componentDidMount", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { title } = this.props;
    const { count } = this.state;
    console.log("render");
    return (
      <button onClick={this.onClick}>
        {title} {count}
      </button>
    );
  }
}
