import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css";
import {Link} from 'react-router-dom';

export default class listOrientador extends Component {
	state = {
		orientation: [],
		orientationInfo: {},
		page: 1
	};

	componentDidMount() {
		this.loadOrientation();
	};

	loadOrientation = async(page = 1) => {
		const responseOrientation = await api.get('/orientador?page=${page}');
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
				<header id="main-headerd">Rafael & Henrique</header>
				<div className="orientation-list">
					<h1 align="center" >Listar Orientadores</h1>
					<Link className="createOrientation" to='/'>Voltar</Link>
					{orientation.map(orientation => (
						<article key={orientation._id}>
							<p><strong>Nome Orientador: </strong>{orientation.nome_orientador}</p>
							<p><strong>Sala Orientador: </strong>{orientation.sala_orientador}</p>
							<p><strong>E-mail Orientador: </strong>{orientation.email_orientador}</p>
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