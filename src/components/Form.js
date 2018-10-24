import React,{Component} from 'react';

class Form extends Component {
    handleSendMsg = (e) => {
        e.preventDefault();
        this.props.sendMsg(e.target.msg.value);
        e.target.msg.value="";
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSendMsg}>
                    <input type="text" name="msg"/>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Form;