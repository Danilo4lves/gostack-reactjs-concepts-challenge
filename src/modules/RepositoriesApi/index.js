// Api
import { api } from "../../config";

function RepositoriesApi() {
  let instance = null;

  function init() {
    const MAIN_ENDPOINT = "/repositories";

    async function getAll() {
      const apiResponse = await api?.get(MAIN_ENDPOINT);

      return apiResponse;
    }

    async function create(title, url, techs) {
      const payload = {
        title,
        url,
        techs,
      };

      const apiResponse = await api?.post(MAIN_ENDPOINT, payload);

      return apiResponse;
    }

    async function remove(id) {
      const endpoint = `${MAIN_ENDPOINT}/${id}`;

      const apiResponse = await api?.delete(endpoint);

      return apiResponse;
    }

    return {
      MAIN_ENDPOINT,
      getAll,
      create,
      remove,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesApi();
