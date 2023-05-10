import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();


    const loginUser = async () => {
        const res = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "GET"
        });
        if (res.ok) {
            const data = res.json();
            localStorage.setItem("token", data.token);
            navigate("/single")
        }

    }
    return (
        <div className="text-center mt-5 container d-flex justify-content-center">
            <div className="col-3 ">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" onChange={(e) => {
                        setPass(e.target.value)
                    }} />
                </div>
                <button className="btn btn-primary" onClick={() => loginUser()}>Login</button>
            </div>
        </div>
    );
};
