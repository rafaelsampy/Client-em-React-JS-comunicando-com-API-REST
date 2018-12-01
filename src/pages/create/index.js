import React, {Component} from 'react';
import 'whatwg-fetch';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Orientation extends Component{
	constructor(props) {
		super(props);

	  	this.onChange_nome_orientador = this.onChange_nome_orientador.bind(this);
		this.onChange_sala_orientador = this.onChange_sala_orientador.bind(this);
		this.onChange_email_orientador = this.onChange_email_orientador.bind(this);
		this.onChange_nome_orientado = this.onChange_nome_orientado.bind(this);
		this.onChange_ra_orientado = this.onChange_ra_orientado.bind(this);
		this.onChange_email_orientado = this.onChange_email_orientado.bind(this);
		this.onChange_curso_orientado = this.onChange_curso_orientado.bind(this);
		this.onChange_tema = this.onChange_tema.bind(this);
		this.onChange_descricao = this.onChange_descricao.bind(this);

		this.state = {
	    	nome_orientador: '',
			sala_orientador: '',
			email_orientador: '',
			nome_orientado: '',
			ra_orientado: '',
			email_orientado: '',
			curso_orientado: '',
			tema: '',
			descricao: '',
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
  	onChange_tema(e) {
    	this.setState({
     		tema: e.target.value,
     		success: ''
    	});
  	}
  	onChange_descricao(e) {
    	this.setState({
     		descricao: e.target.value,
     		success: ''
    	});
  	}

  	add = (e) => {
  		e.preventDefault();

  		if(this.state.nome_orientador == '' || this.state.sala_orientador == '' || this.state.email_orientador == '' || this.state.nome_orientado == '' || this.state.ra_orientado == '' || this.state.email_orientado == '' || this.state.curso_orientado == '' || this.state.tema == '' || this.state.descricao == ''){
      		this.setState({
	     		success: 'Por favor preencher todos os campos!'
	    	});

      	}else {
      		fetch(('http://localhost:4000/api/orientation'), { 
		      	method: 'POST',
		      	headers : {
			         'Accept': 'application/json',
			         'Content-Type': 'application/json'
		      	},
		      	body: JSON.stringify({
		        	nome_orientador: this.state.nome_orientador,
					sala_orientador: this.state.sala_orientador,
					email_orientador: this.state.email_orientador,
					nome_orientado: this.state.nome_orientado,
					ra_orientado: this.state.ra_orientado,
					email_orientado: this.state.email_orientado,
					curso_orientado: this.state.curso_orientado,
					tema: this.state.tema,
					descricao: this.state.descricao
		      	})
			}).then(json => { 
			  	this.setState({
		     		success: 'Orientação cadastrado com sucesso!'
		    	});

		    	this.setState({
		     		nome_orientador: '',
					sala_orientador: '',
					email_orientador: '',
					nome_orientado: '',
					ra_orientado: '',
					email_orientado: '',
					curso_orientado: '',
					tema: '',
					descricao: ''
		    	});
			});
		}
  	}
 
  render() {
  		var {success} = this.state;
      	return (
      		<div className="list">
				<div className="orientation-list">
					<h1 align="center" >Cadastrar Orientação</h1>
					<Link className="listOrientation" to='/list'>Listar Orientação</Link>
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
						
						<h2 align="center" style={{marginTop: 40}}>Dados do Orientado</h2>
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
						
						<h2 align="center" style={{marginTop: 40}}>Projeto</h2>
						<div style={{marginTop: 10}}>
							<label  htmlFor="tema">Tema: </label>
							<input id="tema" name="tema" type="text" placeholder="" require="" autoFocus="" value={this.state.tema} onChange={this.onChange_tema}/>
						</div>
						<div style={{marginTop: 10}}>
							<textarea  id="descricao" name="descricao" rows="5" placeholder="Descrição" require="" autoFocus="" value={this.state.descricao} onChange={this.onChange_descricao}></textarea>
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