import React from 'react';

export default function Term(props){
	return(
			<tr>
				<td>{props.term}</td>
				<td>{props.def}</td>
			</tr>
	)
}