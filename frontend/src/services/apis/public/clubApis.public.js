import fetcher from "../../../utils/fetcherApi";

const getClubByIdApi = async ({ id }) => await fetcher({ path: `/getClub/${id}` });
const getPostsByClubIdApi = async ({ id }) => await fetcher({ path: `/getPosts/${id}` });
const getTeamByClubIdApi = async ({ id }) => await fetcher({ path: `/getTeam/${id}` });

export { getClubByIdApi, getPostsByClubIdApi, getTeamByClubIdApi };
