import React, {Component} from 'react';
import 'whatwg-fetch';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Orientador extends Component{
	constructor(props) {
		super(props);

	  	this.onChange_nome_orientador = this.onChange_nome_orientador.bind(this);
		this.onChange_sala_orientador = this.onChange_sala_orientador.bind(this);
		this.onChange_email_orientador = this.onChange_email_orientador.bind(this);

		this.state = {
	    	nome_orientador: '',
			sala_orientador: '',
			email_orientador: '',
			response: '',
			success: ''
	  	}
	}

  	onChange_nome_orientador(e) {
    	this.setState({
     		nome_orientador: e.target.value,
     		success: ''
    	});
  	}
  	onChange_sala_orientador(e) {
    	this.setState({
     		sala_orientador: e.target.value,
     		success: ''
    	});
  	}
  	onChange_email_orientador(e) {
    	this.setState({
     		email_orientador: e.target.value,
     		success: ''
    	});
  	}

  	add = (e) => {
  		e.preventDefault();

  		if(this.state.nome_orientador == '' || this.state.sala_orientador == '' || this.state.email_orientador == ''){
      		this.setState({
	     		success: 'Por favor preencher todos os campos!'
	    	});

      	}else {
      		fetch(('http://localhost:4000/api/orientador'), { 
		      	method: 'POST',
		      	headers : {
			         'Accept': 'application/json',
			         'Content-Type': 'application/json'
		      	},
		      	body: JSON.stringify({
		        	nome_orientador: this.state.nome_orientador,
					sala_orientador: this.state.sala_orientador,
					email_orientador: this.state.email_orientador
		      	})
			}).then(json => { 
			  	this.setState({
		     		success: 'Orientação cadastrado com sucesso!'
		    	});

		    	this.setState({
		     		nome_orientador: '',
					sala_orientador: '',
					email_orientador: ''
		    	});
			});
		}
  	}
 
  render() {
  		var {success} = this.state;
      	return (
      		<div className="list">
      			<header id="main-headerh">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Cadastrar Orientador</h1>
					<Link className="createOrientation" to='/'>Voltar</Link>
					<form onSubmit={this.add}>
						<h2 align="center" style={{marginTop: 20}}>Dados do Orientador</h2>
						<div style={{marginTop: 10}}>
							<label htmlFor="nome_orientador">Nome: </label>
							<input id="nome_orientador" name="nome_orientador" type="text" placeholder="" require="" autoFocus="" value={this.state.nome_orientador} onChange={this.onChange_nome_orientador}/>
						</div>
						<div  style={{marginTop: 10}}>
							<label htmlFor="sala_orientador">Sala: </label>
							<input id="sala_orientador" name="sala_orientador" type="text" placeholder="" require="" autoFocus="" value={this.state.sala_orientador} onChange={this.onChange_sala_orientador}/>
						</div>
						<div style={{marginTop: 10}}>
							<label htmlFor="email_orientador">E-mail: </label>
							<input id="email_orientador" name="email_orientador" type="email" placeholder="" require="" autoFocus="" value={this.state.email_orientador} onChange={this.onChange_email_orientador}/>
						</div>
						<button style={{marginTop: 10}} className="listOrientation" type="submit">Cadastrar</button>
						<h2 style={{marginTop: 20}} align="center" >{success}</h2>
						<div style={{marginTop: 30}}></div> 	
					</form>	
				</div>
            </div>
      	)
 	}
}