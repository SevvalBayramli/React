import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class JIRALIST extends Component {

    state = {
        tools: [
            { toolId: 1, toolName: "AddFile" }
        ],
        currentTool:""
    };
    render() {
        return (

            <ListGroup>
                {this.state.tools.map(tool => (
                    <ListGroupItem 
                        onClick={()=>this.props.changeTool(tool)}
                        key={tool.toolId}>
                        {tool.toolName}
                        
                    </ListGroupItem>

                ))}
                
            </ListGroup>

        )
    }
}
