// History imports
import React from "react";
import "./History.css"
import ResumeJPEG from "./assets/ResumeJPEG.JPG"


export default function History() {

    // History content image and text
    return(
        <main>
            <h2>Ben's Work History!</h2>
                
            <div className="historyDiv">
                <p id="historyPara">Here is a resume of Ben's previous work!<br/> Download below!</p>
                <a id="aHistory" href="/assets/Resume March 2022.pdf" download>
                <img id="resumeJPEG" src={ResumeJPEG} alt="Pic of Resume" /></a>
            </div>

        </main>
    )
}