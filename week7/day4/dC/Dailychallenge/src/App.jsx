import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getMessage: "",
      postMessage: "",
      inputValue: "",
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      this.setState({ getMessage: data.message });
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: this.state.inputValue }),
      });

      const data = await response.json();
      this.setState({ postMessage: data.message });
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{this.state.getMessage}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.inputValue}
            onChange={this.handleChange}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button type="submit">Send to Express</button>
        </form>
        <p style={{ marginTop: "20px", color: "blue" }}>
          {this.state.postMessage}
        </p>
      </div>
    );
  }
}

export default App;
