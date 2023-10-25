import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubEventPost from "./ClubEventPost";
import { getPostsByClubIdApi } from "../../services/apis/public/clubApis.public";

function ClubEventList() {
  const { clubId } = useParams();
  const [eventList, setEventList] = useState();

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const response = await getPostsByClubIdApi({ id: clubId });

    if (response.data) setEventList(response.data);
  }

  if (!eventList) {
    return <div>loading.....</div>;
  }

  return (
    <div className="m-1 w-9/12">
      {eventList.map((post) => {
        return (
          <ClubEventPost 
            key={post._id} 
            description={post.postMessage} 
            date={post.createdAt.slice(0, 10)} 
            title={post.postTitle} 
            id={post._id} 
            postImage={post.postImage}
          />
        );
      })}
    </div>
  );
}

export default ClubEventList;
