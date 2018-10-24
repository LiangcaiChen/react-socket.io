import React, { Component } from 'react';
import Form from './components/Form';
import openSocket from 'socket.io-client';
const uuidv4 = require('uuid/v4');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            messages:[]
        }
    }

    componentWillMount() {
        this.initSocket();
    }

    componentDidMount() {
        this.state.socket.on("messages", data => {
            this.setState((prevState)=>({messages:prevState.messages.concat(data)}));
        });
    };

    initSocket = () => {
        const socket = openSocket('http://10.213.201.96:8000');
        socket.on('connect', ()=> {
            console.log('connected');
        });
        this.setState({socket});
    };

    handleSendMsg = (msg) => {
        this.setState((prevState)=>({messages:prevState.messages.concat(msg)}));
        this.state.socket.emit("messages", msg);
    };

    render() {
        return (
            <div>
                {this.state.messages.map(msg=>(<li key={uuidv4()}>{msg}</li>))}

                <Form sendMsg={this.handleSendMsg}/>
            </div>
        );
    }
}

export default App;
