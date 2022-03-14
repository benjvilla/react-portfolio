//Home page imports
import React from "react";
import "./Home.css"
import Nice from "./assets/insta/nicepic.jpg"

export default function Home() {

    //Home page text and images
    return(
        <main>
            <h2>Welcome to Ben's Home Page!</h2>
            <div className="homeDiv">
                <p id="homePara">This is Ben! <br/>Thank you for visiting his website! <br/>You can read more about him in the About page!</p>
                <img id="nice" src={Nice} alt="Nice Picture of Ben" />
                <p id="homePara2">Navigate to other pages by clicking the purple links up top!<br/>Contact Ben by clicking any of the buttons at the bottom!<br/>Or stay here and look at this fella^ <br/>All good choices!</p>
            </div>

        </main>
    )
}