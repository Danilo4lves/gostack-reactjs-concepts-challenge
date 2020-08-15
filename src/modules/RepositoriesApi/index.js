// Api
import { api } from "../../config";

function RepositoriesApi() {
  let instance = null;

  function init() {
    const GET_ALL_ENDPOINT = "/repositories";

    const CREATE_ENDPOINT = "/repositories";

    async function getAll() {
      const apiResponse = await api?.get(GET_ALL_ENDPOINT);

      return apiResponse;
    }

    async function create(title, url, techs) {
      const payload = {
        title,
        url,
        techs,
      };

      const apiResponse = await api?.post(CREATE_ENDPOINT, payload);

      return apiResponse;
    }

    return {
      GET_ALL_ENDPOINT,
      CREATE_ENDPOINT,
      getAll,
      create,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesApi();
