import React, { Component, useEffect } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>An error has occurred. Sorry.</h1>;
        </div>
      );
    }

    /* Render the children otheriwse */
    return this.props.children;
  }
}

export default ErrorBoundary;
