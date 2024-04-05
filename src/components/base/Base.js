import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Links from "./links/Links";
import './Base.css';

function Base(){
    return(
        <div className="base" id="base">
                <Home />
                <Links />
        </div>
    )
}

export default Base;