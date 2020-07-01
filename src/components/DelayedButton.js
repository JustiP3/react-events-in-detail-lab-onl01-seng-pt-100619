import React, {Component} from 'react'

export default class DelayedButton extends Component {
    handleClick = (event) => {
        const timeout = this.props.delay 
        event.persist()
        setTimeout(() => { this.props.onDelayedClick(event); }, timeout);
    }

    render(){        
        return(
            <button onClick={this.handleClick}>Delayed Button</button>
        )
    }
}