function LoginPage() {

    async function handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        const response = await fetch('http://localhost:3000/api/signin', {method: form.method, body: formData});
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="flex justify-center h-[100vh] items-center">
            <div className="flex flex-col p-6 bg-white rounded-lg w-4/12">
                <h1 className="text-3xl font-bold text-center m-4">Login</h1>
                <form method="post" className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
                    <input className="p-4 m-2 border-yellow-200 border-2" type="email" placeholder="Enter your email" name="email"></input>
                    <input className="p-4 m-2 border-yellow-200 border-2" type="password" placeholder="Enter your password" name="password"></input>
                    <button className="px-4 py-2 bg-yellow-300 rounded-lg m-4 w-fit text-xl" type="submit">login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;