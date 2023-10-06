function ClubCard() {
    return (
        <div className="flex rounded-lg shadow-lg m-4 cursor-pointer">
            <img src={require("../images/gdsc-logo.png")} alt="club-logo" className="w-[80px] h-[80px] p-4"></img>
            <div className="flex ml-2 items-center">
                <h3 className="font-bold">club name</h3>
            </div>
        </div>
    );
}

export default ClubCard;