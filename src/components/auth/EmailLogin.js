import React, { Component } from 'react';
import { firebaseApp } from '../../config';
import M from "materialize-css";


class EmailLogin extends Component {
    
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        },
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleForm = e => {
        e.preventDefault();
    };

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    };

    handleSignIn = () => {
        console.log('state', this.state);
    }

   
    render() {
        return (
            <div className="container">                
                <div className="conatainer center">           
                        <form className="col s6" onSubmit={this.handleForm}>
                            <div className="row">
                                <div className="input-field col s12">
                                <input type="email" name="email" id="userEmail" className="validate" onChange={this.handleChange} required/>
                                <label htmlFor="userEmail">Email</label>
                                </div>
                            </div>     
                            <div className="row">
                                <div className="input-field col s12">
                                <input type="password" name="password" id="userPassword" className="validate" onChange={this.handleChange} required/>
                                <label htmlFor="userPassword">Password</label>
                                </div>
                            </div>  
                            <div className="row">
                            <div className="input-field">
                                <button className="btn blue darken-1 z-depth-0 waves-effect waves-light" onClick={this.handleSignIn}>Login</button>
                            </div>
                            </div>   
                            <div className="row">
                            <p className="red">{this.state.error.message}</p>
                            
                            </div>          
                        </form>
                    
                </div>
            </div>
        )
    }
}

export default EmailLogin;