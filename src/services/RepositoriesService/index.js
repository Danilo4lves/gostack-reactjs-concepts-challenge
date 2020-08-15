// Api
import { RepositoriesApi } from "../../modules";

function RepositoriesService() {
  let instance = null;

  function init() {
    async function getAll() {
      const apiResponse = await RepositoriesApi?.getAll();

      return apiResponse;
    }

    async function create(title, url, techs) {
      const apiResponse = await RepositoriesApi?.create(title, url, techs);

      return apiResponse;
    }

    return {
      getAll,
      create,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesService();
