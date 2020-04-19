import React from 'react'
import Card from './Card'


const CardComponents=({robots})=>{
	const yash = robots.map((item,i)=>{
		return(
		<Card id={robots[i].id} key= {robots[i].id} name={robots[i].name} email={robots[i].email}/>
	)
	})

	return(
		<div>
			{yash}
		</div>
	);
}
	
export default CardComponents