// Hobbies page imports
import React from "react";
import "./Hobbies.css"
import Cube from "./assets/rubiks.jpg"
import Theatre from "./assets/insta/theatrepic.jpg"

export default function Hobbies() {

    //Hobbies page text and images
    return(
        <main>
            <h2>Ben's Hobbies and Interests!</h2>
            <p id="hobbyPara">
            Ben has lots of interests!<br/>
            Such as Puzzles, Legos, and Xbox<br/>
            But also Theatre and Movies<br/>
            Oh, and Web Development!
            </p>
            
            <div className="hobbyPage">
                <img id="cube" src={Cube} alt="Rubik's Cube" />
                
                <img id="theatre" src={Theatre} alt="Theatre Pic"/>
            </div>

        </main>
    )
}