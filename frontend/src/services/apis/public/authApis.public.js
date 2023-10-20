import fetcher from "../../../utils/fetcherApi";

const getAccessTokenApi = async ({ body }) => await fetcher({ path: "/signin", options: { method: "POST", body } });
const getAccessTokenAsAdminApi = async ({ body }) => await fetcher({ path: "/signInASAdmin", options: { method: "POST", body } });

export { getAccessTokenApi, getAccessTokenAsAdminApi };
