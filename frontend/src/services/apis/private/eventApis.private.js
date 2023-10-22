import fetcher from "../../../utils/fetcherApi";

const createEventApi = async ({ body, token }) => await fetcher({ path: "/postEvent", options: { method: "POST", body }, token });
const deleteEventApi = async ({ body, token }) => await fetcher({ path: "/deletePost", options: { method: "POST", body }, token });
const updateEventApi = async ({ body, token }) => await fetcher({ path: "/updatePost", options: { method: 'POST', body }, token });

export { createEventApi, deleteEventApi, updateEventApi };
