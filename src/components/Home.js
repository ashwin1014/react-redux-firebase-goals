import React  from 'react';
import { connect } from 'react-redux';
import AddGoal from '../components/goals/AddGoal';


const Home = () => {
    return (
       <div className="container">
       <br/>
           <AddGoal/>
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