import React from "react";
class PostFormFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const { user, email } = this.state;

    const data = {
      user,
      email,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(" Data posted with fetch:", result);
    } catch (error) {
      console.error(" Error:", error);
    }
  };
  render() {
    const { user, email } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Exercise 1: POST JSON Data (Fetch)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="Enter your username"
            value={user}
            onChange={this.handleChange}
            style={{ margin: "5px", padding: "8px" }}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
            style={{ margin: "5px", padding: "8px" }}
          />
          <br />
          <button type="submit" style={{ marginTop: "10px", padding: "8px 15px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default PostFormFetch;
