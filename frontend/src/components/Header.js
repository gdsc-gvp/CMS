import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between px-[50px] py-6 border-b-2 bg-white w-[100vw] fixed top-0">
            <div>
                <h1 className="text-4xl font-bold cursor-pointer">CMS</h1>
            </div>
            <div>
                <nav>
                    <ul className="text-2xl flex">
                        <Link to={"/"}><li className="pr-4 cursor-pointer">home</li></Link>
                        <Link to={"/login"}><li className="pr-4 cursor-pointer">login</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;