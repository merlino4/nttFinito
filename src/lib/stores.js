import http from './http'

const STORES =
      "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json";

      
      const load = () => {
        return http
        .get(STORES)
        .then(response => {
          return response.data;
        });
      };

export default {load};