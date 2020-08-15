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
        console.error("Error trying to obtain data...");
      }
    }

    fetchRepositories();
  }, []);

  const handleAddRepository = React.useCallback(async () => {
    const counter = repositories?.length + 1;
    const title = `Repository ${counter}`;
    const url =
      "https://github.com/Danilo4lves/gostack-reactjs-concepts-challenge";
    const techs = ["React JS", "Node JS", "Redux", "React Native"];

    const apiResponse = await RepositoriesService?.create(title, url, techs);

    if (apiResponse?.statusText === "OK") {
      const { data = {} } = apiResponse;

      setRepositories((prevState) => [...prevState, data]);
    } else {
      console.error("Error trying to obtain data...");
    }
  }, [repositories]);

  const handleRemoveRepository = React.useCallback(async () => {
    // TODO
  }, []);

  return React.createElement(AppPresentational, {
    repositories,

    handleAddRepository,
    handleRemoveRepository,
  });
}

export default App;
