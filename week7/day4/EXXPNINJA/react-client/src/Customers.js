import React from "react";
class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((data) => this.setState({ customers: data }))
      .catch((err) => console.error("Error fetching customers:", err));
  }

  render() {
    const { customers } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>💼 Customers List (from Express Backend)</h2>
        {customers.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {customers.map((cust) => (
              <li
                key={cust.id}
                style={{
                  background: "#e8f0fe",
                  margin: "10px auto",
                  width: "300px",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {cust.firstName} {cust.lastName}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading customers...</p>
        )}
      </div>
    );
  }
}

export default Customers;
