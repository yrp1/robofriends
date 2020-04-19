import React from 'react'

const Searchbox = ({searchfield,onsearch}) =>{
	return(
			<div className='pa0'>
				<input 
				className = 'pa3 ma2 ba b--green bg-lightest-blue'
				type= 'search' placeholder='search robot.....'
				onChange={onsearch}/>
			</div>
		)
}

export default Searchbox