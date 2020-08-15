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

      if (apiResponse?.status === 200) {
        const { data = [] } = apiResponse;

        setRepositories(data);
      } else {
        console.error("Error trying to obtain data...");
      }
    }

    fetchRepositories();
  }, []);

  const handleAddRepository = React.useCallback(async () => {
    const currentTime = Date.now();
    const title = `Repository ${currentTime}`;
    const url =
      "https://github.com/Danilo4lves/gostack-reactjs-concepts-challenge";
    const techs = ["React JS", "Node JS", "Redux", "React Native"];

    const apiResponse = await RepositoriesService?.create(title, url, techs);

    if (apiResponse?.status === 200) {
      const { data = {} } = apiResponse;

      setRepositories((prevState) => [...prevState, data]);
    } else {
      console.error("Error trying to obtain data...");
    }
  }, []);

  const handleRemoveRepository = React.useCallback(
    async (id) => {
      const apiResponse = await RepositoriesService?.remove(id);

      if (apiResponse?.status === 204) {
        const newRepositories = repositories?.filter((repository) => {
          return repository?.id !== id;
        });

        setRepositories(newRepositories);
      } else {
        console.error("Error trying to obtain data...");
      }
    },
    [repositories]
  );

  return React.createElement(AppPresentational, {
    repositories,

    handleAddRepository,
    handleRemoveRepository,
  });
}

export default App;
