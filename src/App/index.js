// Dependencies
import React from "react";

// Presentational
import AppPresentational from "./presentational";

function App() {
  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return React.createElement(AppPresentational, {
    handleAddRepository,
    handleRemoveRepository,
  });
}

export default App;
