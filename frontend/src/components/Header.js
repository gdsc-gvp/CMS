function Header() {
    return (
        <header className="flex justify-between px-[50px] py-6 border-b-2 bg-white">
            <div>
                <h1 className="text-4xl font-bold cursor-pointer">CMS</h1>
            </div>
            <div>
                <nav>
                    <ul className="text-2xl flex">
                        <li className="pr-4 cursor-pointer">home</li>
                        <li className="pr-4 cursor-pointer">clubs</li>
                        <li className="pr-4 cursor-pointer">login</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;