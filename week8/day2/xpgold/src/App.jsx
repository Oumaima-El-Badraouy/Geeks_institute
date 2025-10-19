import React from "react";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import Category from "./components/Category";

function App({ categories }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📝 Todo List with Categories</h1>
      {Object.keys(categories).map((cat) => (
        <Category key={cat} category={cat} todos={categories[cat]} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ categories: state.categories });
const ConnectedApp = connect(mapStateToProps)(App);

export default function RootApp() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
