import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import {Link} from 'react-router-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);

	  	this.onChange_email = this.onChange_email.bind(this);
	  	this.onChange_password = this.onChange_password.bind(this);

		this.state = {
	    	email: '',
			password: ''
	  	}
	}

	onChange_email(e) {
    	this.setState({
     		email: e.target.value
    	});
  	}
  	onChange_password(e) {
    	this.setState({
     		password: e.target.value
    	});
  	}

	login = (e) => {
  		e.preventDefault();
		fetch(('http://localhost:4000/api/user'), { 
	      	method: 'GET',
	      	headers : {
		         'Accept': 'application/json',
		         'Content-Type': 'application/json'
	      	},
	      	body: JSON.stringify({
	        	email: this.state.email,
				password: this.state.password
	      	}).then(function(response) { 
			  	res.render('http://localhost:3000/list', {message: null});
			})
		});

    	this.setState({
     		email: '',
			password: ''
    	});
  	}

	render() {
      return (
      		<div className="login">
				<div className="orientation-login">
					<h1 align="center" >Faça lgin para entrar no sistema:</h1>
					<form onSubmit={this.login}>
						<div style={{marginTop: 10}}>
							<label htmlFor="email">E-mail: </label>
							<input id="email" name="email" type="email" placeholder="" require="" autoFocus=""  value={this.state.email} onChange={this.onChange_email}/>
						</div>
						<div  style={{marginTop: 10}}>
							<label htmlFor="password">Senha: </label>
							<input id="password" name="password" type="password" placeholder="" require="" autoFocus=""  value={this.state.login} onChange={this.onChange_login}/>
						</div>

						<button style={{marginTop: 10}} className="loginOrientation" type="submit">Entrar</button>
						<div style={{marginTop: 30}}></div> 	
					</form>	
				</div>
            </div>
      	)
 	}
}