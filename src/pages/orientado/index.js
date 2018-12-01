import React, {Component} from 'react';
import 'whatwg-fetch';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Orientado extends Component{
	constructor(props) {
		super(props);

		this.onChange_nome_orientado = this.onChange_nome_orientado.bind(this);
		this.onChange_ra_orientado = this.onChange_ra_orientado.bind(this);
		this.onChange_email_orientado = this.onChange_email_orientado.bind(this);
		this.onChange_curso_orientado = this.onChange_curso_orientado.bind(this);

		this.state = {
			nome_orientado: '',
			ra_orientado: '',
			email_orientado: '',
			curso_orientado: '',
			response: '',
			success: ''
	  	}
	}

  	onChange_nome_orientado(e) {
    	this.setState({
     		nome_orientado: e.target.value,
     		success: ''
    	});
  	}
  	onChange_ra_orientado(e) {
    	this.setState({
     		ra_orientado: e.target.value,
     		success: ''
    	});
  	}
  	onChange_email_orientado(e) {
    	this.setState({
     		email_orientado: e.target.value,
     		success: ''
    	});
  	}
  	onChange_curso_orientado(e) {
    	this.setState({
     		curso_orientado: e.target.value,
     		success: ''
    	});
  	}

  	add = (e) => {
  		e.preventDefault();

  		if(this.state.nome_orientado == '' || this.state.ra_orientado == '' || this.state.email_orientado == '' || this.state.curso_orientado == ''){
      		this.setState({
	     		success: 'Por favor preencher todos os campos!'
	    	});

      	}else {
      		fetch(('http://localhost:4000/api/orientado'), { 
		      	method: 'POST',
		      	headers : {
			         'Accept': 'application/json',
			         'Content-Type': 'application/json'
		      	},
		      	body: JSON.stringify({
					nome_orientado: this.state.nome_orientado,
					ra_orientado: this.state.ra_orientado,
					email_orientado: this.state.email_orientado,
					curso_orientado: this.state.curso_orientado
		      	})
			}).then(json => { 
			  	this.setState({
		     		success: 'Orientação cadastrado com sucesso!'
		    	});

		    	this.setState({
					nome_orientado: '',
					ra_orientado: '',
					email_orientado: '',
					curso_orientado: ''
		    	});
			});
		}
  	}
 
  render() {
  		var {success} = this.state;
      	return (
      		<div className="list">
      			<header id="main-headerg">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Cadastrar Orientado</h1>
					<Link className="createOrientation" to='/'>Voltar</Link>
					<form onSubmit={this.add}>
						<h2 align="center" style={{marginTop: 20}}>Dados do Orientado</h2>
						<div style={{marginTop: 10}}>
							<label htmlFor="nome_orientado">Nome: </label>
							<input id="nome_orientado" name="nome_orientado" type="text" placeholder="" require="" autoFocus="" value={this.state.nome_orientado} onChange={this.onChange_nome_orientado}/>
						</div>
						<div style={{marginTop: 10}}>
							<label htmlFor="ra_orientado">RA: </label>
							<input id="ra_orientado" name="ra_orientado" type="text" placeholder="" require="" autoFocus="" value={this.state.ra_orientado} onChange={this.onChange_ra_orientado}/>
						</div>
						<div style={{marginTop: 10}}>
							<label htmlFor="email_orientado">E-mail: </label>
							<input id="email_orientado" name="email_orientado" type="email" placeholder="" require="" autoFocus="" value={this.state.email_orientado} onChange={this.onChange_email_orientado}/>
						</div>
						<div style={{marginTop: 10}}>
							<label htmlFor="curso_orientado">Curso: </label>
							<input id="curso_orientado" name="curso_orientado" type="text" placeholder="" require="" autoFocus="" value={this.state.curso_orientado} onChange={this.onChange_curso_orientado}/>
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