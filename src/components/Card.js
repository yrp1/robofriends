import React from 'react'



const Card = (props) =>{
	return(
		<div className="tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
			<img style={{width:200}} alt='robot' src={`https://robohash.org/test${props.name}?200x200`}/>
			<div>
				<h2 className='f4'>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;