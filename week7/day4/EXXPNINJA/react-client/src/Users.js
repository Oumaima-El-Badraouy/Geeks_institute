import React from "react";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.error("Error fetching users:", err));
  }
  render() {
    const { users } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>👥 Users List (from Express Backend)</h2>
        {users.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
              <li
                key={user.id}
                style={{
                  background: "#f9f9f9",
                  margin: "10px auto",
                  width: "200px",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                {user.username}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    );
  }
}

export default Users;
