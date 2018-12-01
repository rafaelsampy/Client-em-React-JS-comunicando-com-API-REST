import React, {Component} from 'react';
import 'whatwg-fetch';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Orientacao extends Component{
	constructor(props) {
		super(props);

	  	this.onChange_nome_orientador = this.onChange_nome_orientador.bind(this);
		this.onChange_nome_orientado = this.onChange_nome_orientado.bind(this);
		this.onChange_tema = this.onChange_tema.bind(this);
		this.onChange_descricao = this.onChange_descricao.bind(this);

		this.state = {
	    	nome_orientador: '',
			nome_orientado: '',
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
  	onChange_nome_orientado(e) {
    	this.setState({
     		nome_orientado: e.target.value,
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

  		if(this.state.nome_orientador == '' || this.state.nome_orientado == '' || this.state.tema == '' || this.state.descricao == ''){
      		this.setState({
	     		success: 'Por favor preencher todos os campos!'
	    	});

      	}else {
      		fetch(('http://localhost:4000/api/orientacao'), { 
		      	method: 'POST',
		      	headers : {
			         'Accept': 'application/json',
			         'Content-Type': 'application/json'
		      	},
		      	body: JSON.stringify({
		        	nome_orientador: this.state.nome_orientador,
					nome_orientado: this.state.nome_orientado,
					tema: this.state.tema,
					descricao: this.state.descricao
		      	})
			}).then(json => { 
			  	this.setState({
		     		success: 'Orientação cadastrado com sucesso!'
		    	});

		    	this.setState({
		     		nome_orientador: '',
					nome_orientado: '',
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
      			<header id="main-headerf">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Cadastrar Orientação</h1>
					<Link className="createOrientation" to='/'>Voltar</Link>
					<form onSubmit={this.add}>
						<h2 align="center" style={{marginTop: 20}}>Dados do Orientador</h2>
						<div style={{marginTop: 10}}>
							<label htmlFor="nome_orientador">Nome: </label>
							<input id="nome_orientador" name="nome_orientador" type="text" placeholder="" require="" autoFocus="" value={this.state.nome_orientador} onChange={this.onChange_nome_orientador}/>
						</div>
						
						<h2 align="center" style={{marginTop: 40}}>Dados do Orientado</h2>
						<div style={{marginTop: 10}}>
							<label htmlFor="nome_orientado">Nome: </label>
							<input id="nome_orientado" name="nome_orientado" type="text" placeholder="" require="" autoFocus="" value={this.state.nome_orientado} onChange={this.onChange_nome_orientado}/>
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