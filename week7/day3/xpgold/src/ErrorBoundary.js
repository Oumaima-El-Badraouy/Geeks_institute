import React from "react";
import Modal from "./Modal";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorInfo: info });
  }
  occurError = () => {
    throw new Error("Something went wrong!");
  };
  handleClose = () => {
    this.setState({ hasError: false, errorInfo: null });
  };
  render() {
    if (this.state.hasError) {
      return (
        <Modal
          message={this.state.errorInfo?.componentStack || "An unexpected error occurred."}
          onClose={this.handleClose}
        />
      );
    }

    return (
      <div>
        <button onClick={this.occurError}>Click to cause an Error</button>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
