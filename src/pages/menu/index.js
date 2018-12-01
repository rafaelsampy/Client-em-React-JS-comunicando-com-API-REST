import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import {Link} from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<div className="list">
				<header id="main-header">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Menu</h1>
					<Link className="createOrientacao" to='/orientacao'>Cadastrar Orientação</Link>
					<Link className="createOrientacao" to='/listOrientacao'>Listar Orientações</Link>
					<Link className="createOrientador" to='/orientador'>Cadastrar Orientador</Link>
					<Link className="createOrientador" to='/listOrientador'>Listar Orientadores</Link>
					<Link className="createOrientado" to='/orientado'>Cadastrar Orientado</Link>
					<Link className="createOrientado" to='/listOrientado'>Listar Orientados</Link>
				</div>
			</div>
		);
	}
}