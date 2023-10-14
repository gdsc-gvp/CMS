function ClubEventPost(props) {
    const {description, date, title} = props;

    return (
        <div className="flex m-4 p-2 bg-white rounded-lg cursor-pointer w-full">
            <div className="">
                <img src={require("../images/event-image.jpg")} className="w-[250px]"></img>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mb-4">posted on {date}</p>
                <p>{description.slice(0, 125) + "....."}</p>
            </div>
        </div>
    );
}

export default ClubEventPost;