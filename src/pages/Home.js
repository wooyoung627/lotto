import { useState } from "react";
import useUser from "../hooks/useUser";

function Home () {
    const [user, actions] = useUser();
    const [name, setName] = useState("");

    const inputChange = (e) => {
        setName(e.target.value);
    }

    const onClick = () => {
        actions.changeUserName(name);
    }

    const logUser = () => {
        console.log('user: ', user);
    }

    return (
        <div>
            <input type="text" onChange={inputChange}></input>
            <button onClick={onClick}>버튼</button>
            <button onClick={logUser}>버튼</button>
        </div>
    )
}

export default Home;