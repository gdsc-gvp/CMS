import ClubCard from "./ClubCard";
function ClubList() {
    return (
        <div className="w-3/12 bg-white my-4 mx-4 rounded-lg h-[500px]">
            <h2 className="font-bold text-2xl py-2 text-center">Clubs</h2>
            <ClubCard/>
            <ClubCard/>
            <ClubCard/>
        </div>
    );
}

export default ClubList;