import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }){
    const [user, setUser] = useState({name: ''});
    const actions = useMemo(
        () => ({
            changeUserName(name) {
                console.log('change name : '+ name);
                setUser({name: name});
            }
        }), []
    );

    const value = useMemo(()=>[user, actions], [user, actions]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;