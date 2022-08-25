import React, { Component } from 'react'
import { Input, Button, Alert } from 'reactstrap'
import post from '../API/post'

export default class ADD extends Component {
    state = {
        path: "",
        key: "",
        email: "",
        password: "",
        atlassian:"",
        isSuccess: undefined
    };

    submit = async (e) => {
        e.preventDefault();
        const result = await post({
            key: this.state.key, path: this.state.path
            ,  email: this.state.email, password: this.state.password,atlassian:this.state.atlassian
        })

        console.log("result: "+result)
        this.setState({ isSuccess: result })
        
    }

    onKeyChange = event => {
        // Update the state 
        this.setState({ key: event.target.value });

    };
     onAtlassianChange = event => {
         // Update the state 
         this.setState({ atlassian: event.target.value });

     };
    onEmailChange = event => {
        // Update the state 
        this.setState({ email: event.target.value });

    };
    onPasswordChange = event => {
        // Update the state 
        this.setState({ password: event.target.value });

    };
    onPathChange = event => {
        // Update the state 
        this.setState({ path: event.target.value });

    };



    render() {
        return (
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
                Atlassian.net:<Input
                    id="atlassian"
                    type="txt"
                    onChange={this.onAtlassianChange}
                /> 
                Email:<Input
                    id="email"
                    type="txt"
                    onChange={this.onEmailChange}
                />
                Password:<Input
                    id="password"
                    type="txt"
                    onChange={this.onPasswordChange}
                />
                <Button
                    variant="light"
                    outline
                    type='submit'

                >Connect to Jira</Button>

                {this.state.isSuccess === 'success' ? <Alert>Connected</Alert> :undefined}
                {this.state.isSuccess === 'error' ? <Alert color='danger'>Error</Alert> : undefined}


            </form>

        )
    }
}
