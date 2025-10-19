import React from "react";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import LoginForm from "./components/LoginForm";
import Category from "./components/Category";

function App({ auth, categories }) {
  if (!auth.isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📝 Todo List (Authenticated)</h1>
      {Object.keys(categories).map((cat) => (
        <Category key={cat} category={cat} todos={categories[cat]} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  categories: state.todos.categories,
});

const ConnectedApp = connect(mapStateToProps)(App);

export default function RootApp() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
