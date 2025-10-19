import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // Updates state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Logs the error details
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error);
    console.error("Component Stack:", errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="card my-5 p-3" style={{ backgroundColor: "#f8d7da", color: "#721c24" }}>
          <h3>Something went wrong.</h3>
          <p>{this.state.error && this.state.error.toString()}</p>
          {this.state.errorInfo && (
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.errorInfo.componentStack}
            </details>
          )}
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
