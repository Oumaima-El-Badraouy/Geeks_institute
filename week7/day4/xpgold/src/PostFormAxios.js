import React from "react";
import axios from "axios";
class PostFormAxios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { userId, title, body } = this.state;

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        userId,
        title,
        body,
      });

      console.log(" Data posted with Axios:", response.data);
    } catch (error) {
      console.error(" Error:", error);
    }
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Exercise 2: POST JSON Data (Axios)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={userId}
            onChange={this.handleChange}
            style={{ margin: "5px", padding: "8px" }}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            style={{ margin: "5px", padding: "8px" }}
          />
          <br />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={body}
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
export default PostFormAxios;
