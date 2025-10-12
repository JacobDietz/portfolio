import { NavBar } from "./Home";
import React from "react";

function Profile(){
    return(
        <>
        <NavBar />
        <section id="profile" className="opacity-20 bg-lime-300 width-full h-screen">
        <div>
            <p>profile section</p>
    </div>
    </section>
    </>
    );
}

export default Profile 