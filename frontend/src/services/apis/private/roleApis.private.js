import fetcher from "../../../utils/fetcherApi";

const addRoleApi = async ({ body, token }) => await fetcher({ path: "/addRole", options: { method: "POST", body }, token });
const deleteRoleApi = async ({ body, token }) => await fetcher({ path: "/deleteRole", options: { method: "POST", body }, token });

export { addRoleApi, deleteRoleApi };
