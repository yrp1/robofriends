import React from 'react'
import CardComponent from '../components/CardComponent' 
import Searchbox from '../components/Searchbox'
import '../containers/App.css'
import Scroll from'../components/Scroll'


class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return	response.json();
		})
		.then(users=>{
			this.setState({robots : users})
		});
	}

	OnSearchChange=(event)=>{
		this.setState({
			searchfield : event.target.value
		})
	}

	render(){
		const {robots , searchfield} = this.state
		const filteredRobot = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())

		})

		return (robots.length === 0) ? <h1>Loading.....</h1> :
		(		
			<div className = 'tc'>
				<h1 className="f1 ">Robo Friends</h1>
				<Searchbox onsearch={this.OnSearchChange}/>
				<Scroll>
					<CardComponent robots={filteredRobot}/>
				</Scroll>
			</div>
		)
				
	}
}

export default App