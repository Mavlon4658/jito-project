import { useEffect, useState } from "react";
import IMG from "../assets";
import ButtonBlue from "../components/ButtonBlue";

export default function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('false');

    function handleInput (val) {
        setPassword(val)

        if (val.length < 4) {
            setError(true)
        } else {
            setError(false)
        }
    }

    useEffect(() => {
        setError(false)
    }, [])

    return(<>
        <div className="w-full font-jost h-[100svh] flex items-center justify-center">
            <div className="w-[345px] px-7 py-[30px] bg-dark-blue-900">
                <h2 className="flex items-center justify-center gap-3 h-[46px] mb-5">
                    <span className="text-[32px] font-bold">Amsterdam</span>
                    <img src={IMG.globe} alt="" />
                </h2>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => handleInput(e.target.value)}
                    autoComplete="off"
                    className={`w-full bg-dark-blue-1000 outline-none font-raleway text-[28px] font-semibold text-center ${error ? 'bg-danger-500' : ''}`}
                />
                {
                    error ? <p className="text-danger-400">Error info text.</p> : ''
                }
                <ButtonBlue className="mt-3 text-base w-full">Login</ButtonBlue>
            </div>
        </div>
    </>)
}