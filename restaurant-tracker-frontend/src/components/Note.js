import React from 'react'

const Note = (props) => {
	const created_at = new Date(props.rest.created_at)
	return(
		<div className="column is-one-quarter">
			<div className="card">
			  <div className="card-image">
			    <figure className="image is-4by3">
			      <img src="http://lorempixel.com/400/300/food/" alt=""/>
			    </figure>
			  </div>
			  <div className="card-content">
			    <div className="media">
			      <div className="media-content">
			        <p className="title is-4">{props.rest.name}: <em className="title is-5">{props.rest.neighborhood}</em></p>
			        <p className="subtitle is-6"><a>{props.rest.address}</a> || Rating: {props.rest.rating}</p>
			      </div>
			    </div>
			    <div className="content">
			      <strong>{props.title}:</strong> {props.body}
			      <br/>
			      <time><strong>Added:</strong> {created_at.getMonth()}.{created_at.getDate()}.{created_at.getFullYear()}</time><br/>
			      <button onClick={props.handleDelete} id={props.id} className="delete"></button>
			    </div>
			  </div>
			  </div>
			</div>

	)
}
export default Note

		// <tbody>
		// 	<tr>
		// 		<td>{props.rest.name}</td>
		// 		<td>{props.rest.address}</td>
		// 		<td>{props.rest.neighborhood}</td>
		// 		<td>{props.rest.rating}</td>
		// 		<td><strong>{props.title}:</strong> {props.body}</td>
		// 		<td><button onClick={props.handleDelete} id={props.id}>X</button></td>
		// 	</tr>
		// </tbody>