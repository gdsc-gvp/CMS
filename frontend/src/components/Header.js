function Header() {
    return (
        <header className="flex justify-between p-6 border-b-2">
            <div>
                <h1 className="text-4xl font-bold cursor-pointer">CMS</h1>
            </div>
            <div>
                <nav>
                    <ul className="text-2xl flex pr-6">
                        <li className="pr-4 cursor-pointer">home</li>
                        <li className="pr-4 cursor-pointer">login</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;