import React from 'react';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <h2>Front-end web development</h2>
            <p>Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.</p>
            <HTML/>
            <CSS/>
            <JS/>
        </div>
    )
}

export default Home;