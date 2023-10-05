function ClubCard() {
    return (
        <div className="flex rounded-lg shadow-lg m-4 cursor-pointer">
            <img src={require("../images/gdsc-logo.png")} alt="club-logo" className="w-[80px] h-[80px]"></img>
            <h3 className="font-bold pt-[25px] ml-2">club name</h3>
        </div>
    );
}

export default ClubCard;