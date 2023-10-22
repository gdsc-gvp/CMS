import EventPost from "./EventPost";

function EventPostList({list}) {
    return (
        <div className="">
            {list.map((event) => {
                return <EventPost 
                            key={event._id}
                            clubName={event.clubName} 
                            likes={event.likeCount} 
                            description={event.postMessage} 
                            postDate={event.createdAt.slice(0, 10)}
                            postImage={event.postImage}
                            clubImage={event.clubImage}
                        />
            })}
        </div>
    );
}

export default EventPostList;