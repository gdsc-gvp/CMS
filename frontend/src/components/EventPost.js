function EventPost() {
    return (
        <div className="flex justify-center my-10">
            <div className="p-4 w-6/12 bg-white rounded-lg">
                <div className="flex py-4">
                    <img src={require("../../gdsc-logo.png")} alt="club-logo" className="w-10"></img>
                    <h3 className="font-bold ml-2 pt-[7px]">GDSC</h3>
                </div>
                <div className="py-2">
                    <p>
                        Hello to the architects of the digital realm! 👋🏻

                        GDSC GVP is here with an Info session on one of the most anticipated events of the year - Hacktoberfest 2023!
                        Hacktoberfest 2023 🧑🏻‍💻 is a chance for each and everyone of us to make an impact on the open source world, 
                        connect with like-minded🤝 individuals and prepare ourselves for a successful career in tech📈.
                    </p>
                </div>
                <div>
                    <img src={require("../../event-image.jpg")} alt="event-image"></img>
                </div>
                <div className="mt-3">
                    <button className="px-4 py-2 bg-yellow-300 rounded-lg">like</button>
                </div>
            </div>
        </div>
    );
}

export default EventPost;