import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd:23
    }

    percentage = () => {
        const { discountStart, discountEnd } = this.state;
        if(discountStart < discountEnd){
            this.setState({
                discountStart: discountStart+1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 50);

    }

    render(){
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
    
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before 20th June</h3>
                            <p>lorem ipsum doller emit lorem ipsum doller emit lorem ipsum doller emit lorem ipsum doller emit lorem ipsum doller emit lorem ipsum doller emit</p>
    
                            <div>
                                <MyButton 
                                    text="Purchase Tickets"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link="http://www.google.com"
                                />
                            </div>
    
                        </div>
                    </Slide>
    
                </div>
            </div>
        );
    }
}


export default Discount;