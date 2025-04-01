// import React from "react";
import contact from "./contact.js"


// function Home() {
//     console.log("sfds");
//     return (
//         <h1 className="bg-red-500">HOME PAGE</h1>
//     );
// }

function Home() {
    return (

        <NavBar>

        </NavBar>
    )
}


function NavBar() {
    return (
        <nav className="">

            <h1 className="text-9xl font-sans font-medium ml-10 mt-5 tracking-tighter text-white ">Jacob</h1>
            <div className="flex flex-row">
                <h2 className="text-5xl font-sans font-medium ml-20 tracking-tighter text-white ">Dietz</h2>
                <button onClick={contact} className="hover:bg-blue-100 hover:border-red-300 transition-all duration-300 
                ease-in rounded-xl border-3 font-medium ml-100 p-2 text-red-300-">Contact</button>
            </div>

            <ul className="flex row ">
                <li className="pl-10 pr-10 hover:bg-red-100">Projects</li>
            </ul>

        </nav>
    )

}



export default Home;