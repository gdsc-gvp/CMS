import { useState } from "react";

function EventPost(props) {
    const {likes, clubName, description, postDate, postImage, clubImage} = props
    const [like, setLike] = useState(false);

    function handleLike() {
        setLike(!like);
    }

    return (
        <div className="p-4 w-[50vw] bg-white rounded-lg my-4">
            <div className="flex py-4">
                <img src={clubImage} alt="club-logo" className="w-10"></img>
                <div className="flex flex-col justify-center ml-3">
                    <h3 className="font-bold">{clubName}</h3>
                    <p className="text-xs">posted on {postDate}</p>
                </div>
            </div>
            <div className="py-2">
                <p className="whitespace-pre-wrap">{description}</p>
            </div>
            <div>
                <img src={postImage} alt="event-image"></img>
            </div>
            <div className="mt-3">
                <button className="px-4 py-2 bg-yellow-300 rounded-lg" onClick={handleLike}>like {like ? likes + 1 : likes}</button>
            </div>
        </div>
    );
}

export default EventPost;