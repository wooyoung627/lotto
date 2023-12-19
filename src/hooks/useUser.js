import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

function useUser() {
    const value = useContext(UserContext);
    return value;
}

export default useUser;