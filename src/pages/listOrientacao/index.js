import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import {Link} from 'react-router-dom';

export default class ListOrientacao extends Component {
	state = {
		orientation: [],
		orientationInfo: {},
		page: 1
	};

	componentDidMount() {
		this.loadOrientation();
	};

	loadOrientation = async(page = 1) => {
		const responseOrientation = await api.get('/orientacao?page=${page}');
		const {docs, ...orientationInfo} = responseOrientation.data;
		
		this.setState({orientation: docs, orientationInfo, page});
	};

	prevPage = () => {
		const {page, orientationInfo} = this.state;

		if(page === 1) return;

		const pageNumber = page - 1;

		this.loadOrientation(pageNumber);
	};

	nextPage = () => {
		const {page, orientationInfo} = this.state;

		if(page === orientationInfo.pages) return;

		const pageNumber = page + 1;

		this.loadOrientation(pageNumber);
	};

	render() {
		const {orientation, page, orientationInfo} = this.state;

		return (
			<div className="list">
				<header id="main-headera">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Listar Orientações</h1>
					<Link className="createOrientation" to='/'>Voltar</Link>
					{orientation.map(orientation => (
						<article key={orientation._id}>
							<p><strong>Nome Orientador: </strong>{orientation.nome_orientador}</p>
							<p><strong>Nome Orientado: </strong>{orientation.nome_orientado}</p>
							<p><strong>Tema: </strong>{orientation.tema}</p>
							<p><strong>Descriçaõ: </strong>{orientation.descricao}</p>
						</article>
					))}
					<div className="orientation-actions">
						<button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
						<button disabled={page === orientationInfo.pages} onClick={this.nextPage}>Próximo</button>
					</div>
				</div>
			</div>
		);
	}
}