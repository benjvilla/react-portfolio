// About page imports
import React from "react";
import "./About.css"
import Chair from "../assets/insta/chairpic.jpg"

export default function About() {

    // contents of About page
    return(
        <main>
            <h2>This is the page about Ben!</h2>
            <div className="aboutDiv">
                <p id="aboutPara">This is Ben</p>
                <img id="chair" src={Chair} alt="Ben in Big Chair" />
                <p id="aboutPara2">Ben is a web developer who enjoys overcoming the most difficult challenges.
<br/>Ben also likes Star Wars and referring to himself in the third-person.
<br/>Ben is funny sometimes.</p>
            </div>

        </main>
    )
}