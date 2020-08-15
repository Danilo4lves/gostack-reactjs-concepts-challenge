// Api
import { RepositoriesApi } from "../../modules";

function RepositoriesService() {
  let instance = null;

  function init() {
    async function getAll() {
      const apiResponse = await RepositoriesApi?.getAll();

      return apiResponse;
    }

    return {
      getAll,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesService();
