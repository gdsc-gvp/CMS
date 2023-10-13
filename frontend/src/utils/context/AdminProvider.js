import { useEffect, useState } from "react";
import AdminContext from "./AdminContext";

function AdminProvider({children}) {
    const [admin, setAdmin] = useState(null);
    
    useEffect(() => {
        const localData = window.localStorage.getItem("IS_ADMIN");
        setAdmin(JSON.parse(localData));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("IS_ADMIN", JSON.stringify(admin));
    }, [admin]);

    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminProvider;