import React from 'react';
import { Input, Button, Alert } from 'reactstrap'
import post from './API/post'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

	state = {
		path: "",
		key: "",
		isSuccess: undefined
	};


	submit = async (e) => {
		e.preventDefault();
		const result = await post({ key: this.state.key, path: this.state.path })
		console.log(result)
		this.setState({ isSuccess: result })
	}


	onKeyChange = event => {
		// Update the state 
		this.setState({ key: event.target.value });

	};
	onPathChange = event => {
		// Update the state 
		this.setState({ path: event.target.value });

	};


	render() {

		return (
			<div>

				<h3 color='#e42929'>
					Upload File Jira
				</h3>
				<div>
					<h3>File</h3>
					<form onSubmit={this.submit}>
						<br></br>

						File Path:<Input
							id="path"
							type="txt"
							onChange={this.onPathChange}
						/>
						JiraKey:<Input
							id="key"
							type="txt"
							onChange={this.onKeyChange}
						/>
						<Button
							variant="light"
							outline
							type='submit'

						>Connect to Jira</Button>

					</form>


					{this.state.isSuccess === 'success' ? <Alert>Connected</Alert> :
						this.state.isSuccess === 'error' ? <Alert color='danger'>Error</Alert> : undefined}



				</div>

			</div>
		);
	}

}

export default App;