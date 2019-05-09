import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {
    state = {
        deadline: "March, 14, 2019",
        eventPassed: false,
        days:"0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    }
    untilTime = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) return(
            this.setState({
                eventPassed: true,
            })
        );
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor((time/(1000*60*60*24)));
        this.setState({ days, hours, minutes, seconds})
    }

    componentDidMount() {
        setInterval(() => this.untilTime(this.state.deadline),1000);
    }

    render() {
        const { eventPassed ,days, hours, minutes, seconds } = this.state;

        if(eventPassed) return(
            <Slide left delay={1}>
                <div className="countdown_wrapper">
                    <div className="countdown_bottom" style={{backgroundColor: 'red'}}>
                        <h2>
                            Event Passed!
                        </h2>
                    </div>
                </div>
            </Slide>
        );

        return (
            <Slide left delay={1}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">Event Starts in</div>
                    <div className="countdown_bottom">

                        <div className="countdown_item">
                            <div className="countdown_time">{days}</div>
                            <div className="countdown_tag">Days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{hours}</div>
                            <div className="countdown_tag">Hours</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{minutes}</div>
                            <div className="countdown_tag">Minutes</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{seconds}</div>
                            <div className="countdown_tag">Seconds</div>
                        </div>
                    
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil;