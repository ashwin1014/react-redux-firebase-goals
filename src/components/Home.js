import React  from 'react';
import { connect } from 'react-redux';


const Home = () => {
    return (
       <div className="container">
       <br/>
       <fieldset>
           <div>Add Goal</div>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Goals</legend>
            <div>Goal List</div>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Completed Goals</legend>
            <div>Complete Goal List</div>
        </fieldset>
        <br/>
        <button className="btn">Sign Out</button>
       </div>
    )
}

export default Home;