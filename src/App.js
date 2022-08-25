import React from 'react';
import {Container, Row, Col } from 'reactstrap'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ADD from './components/ADD';
import JIRALIST from './components/jiralist';


class App extends React.Component {

	state={currentTool:undefined}

	changeTool=tool=>{
		this.setState({currentTool:tool.toolName});
		console.log(this.state.currentTool)
	};
	

	render() {

		return (
			<div>
				<Container>
					<Row>
						<h3 color='#e42929'>
							Jira Tool
						</h3>
					</Row>
					
					
					<Row>
						<Col  color='#e42929'>
							<br></br>
						<JIRALIST
						changeTool={this.changeTool}
						currentTool={this.state.currentTool}>
						

						</JIRALIST>
						</Col>
						<Col >
						{this.state.currentTool==="AddFile" ?<ADD></ADD>:undefined}
							
						</Col>

					</Row>
					</Container>
					
			</div>
		);
	}

}

export default App;