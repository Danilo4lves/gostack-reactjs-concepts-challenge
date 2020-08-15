// Api
import { api } from "../../config";

function RepositoriesApi() {
  let instance = null;

  function init() {
    const GET_ALL_ENDPOINT = "/repositories";

    async function getAll() {
      const apiResponse = await api?.get(GET_ALL_ENDPOINT);

      return apiResponse;
    }

    return {
      GET_ALL_ENDPOINT,
      getAll,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesApi();
