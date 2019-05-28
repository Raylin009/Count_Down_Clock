import React from 'react';
import TimeDisplay from './TimeDisplay.jsx'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            end: new Date('Jun 2, 19 23:50:00'),
            test: "this is a test string",
        };
        this.tick = this.tick.bind(this);
        this.timeLeft = this.timeLeft.bind(this);
    };

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000)
    };

    timeLeft(now, deadline) {

        let timeRemain = deadline.getTime() - now.getTime();
        let days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((timeRemain % (1000 * 60)) / 1000);

        // return {days,hours,mins,secs}

        return `${days} Days ${hours} Hours ${mins} Minutes ${secs} Seconds left...`
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
                <h2>{this.timeLeft(this.state.date,this.state.end)}</h2>
                <TimeDisplay test={this.state.test} />
            </div>
        )
    };
}
export default App;