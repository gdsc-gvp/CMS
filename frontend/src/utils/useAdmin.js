import { useContext } from "react";
import AdminContext from "./context/AdminContext";

function useAdmin() {
    return useContext(AdminContext);
}

export default useAdmin;