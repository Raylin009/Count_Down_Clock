import React from 'react';
import TimeDisplay from './TimeDisplay.jsx'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            end: new Date('Jun 2, 19 23:50:00'),
        };
        this.tick = this.tick.bind(this);
    };

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000)
    };

    tick() {
        this.setState({
            date: new Date()
        })
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    render() {
        return(
            <div>
                <TimeDisplay stopTime ={this.state.end} />
            </div>
        )
    };
}
export default App;