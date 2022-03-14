//Projects page imports
import React from "react";
import "./Projects.css"
import Jeopardy from "./assets/jeopardypic.JPG"

export default function Projects() {

    //content for Projects page text, image, and link
    return(
        <main>
            <h2>Projects by Ben!</h2>
            <div className="projectDiv">
                <img id="jeopardyPic" src={Jeopardy} alt="Jeopardy Board Game"/>
                <a id="jeopardyLink" href="https://github.com/burlingtoncodeacademy-students/jeopardy-board-benjvilla.git">
            <button class="button">Jeopardy Project</button></a>

            </div>

        </main>
    )
}