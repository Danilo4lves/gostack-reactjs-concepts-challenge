// Dependencies
import React from "react";

// Presentational
import AppPresentational from "./presentational";

// Services
import { RepositoriesService } from "../services";

function App() {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    async function fetchRepositories() {
      const apiResponse = await RepositoriesService?.getAll();

      if (apiResponse?.statusText === "OK") {
        const { data = [] } = apiResponse;

        setRepositories(data);
      } else {
        console.log("Error trying to obtain data...");
      }
    }

    fetchRepositories();
  }, []);

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return React.createElement(AppPresentational, {
    repositories,

    handleAddRepository,
    handleRemoveRepository,
  });
}

export default App;
