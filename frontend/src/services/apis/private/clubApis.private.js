import fetcher from "../../../utils/fetcherApi";

const updateClubApi = async ({ body, token }) => await fetcher({ path: "/updateClub", options: { method: "POST", body }, token });

export { updateClubApi };
