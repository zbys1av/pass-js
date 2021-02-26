import React, { Component } from 'react';
import './input.css';

export default class Input extends Component{
    constructor(props){
        super(props)
        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.thirdRef = React.createRef();
        this.state = {
            link: '',
            seven: '',
            uname: '',
            result: '',
        }
    }

    createPass = () => {
        const site = this.state.link === '' ? "Site" : this.state.link;
        const sevenDigits = this.state.seven === '' ? "7dig" : this.state.seven;
        const login = this.state.uname === '' ? "Name" : this.state.uname;
        const createDomain = site.split("").slice(0,4).join("")
        const username = [login.split("").slice(0,2).join(""), login.split("").splice(login.length-2,login.length).join("")]
        const digits = [sevenDigits.split("").slice(0,3).join(""), sevenDigits.split("").slice(3,sevenDigits.length).join("")]
        const together = username[0] + digits[0] + site.length + createDomain + digits[1] + username[1]
        this.setState({result: together.split("").map(c => c === "a" ? "4" : c === "i" ? "1" : c === "e" ? "3" : c === "o" ? "0" : c).join("")})
    }
    
    render(){
        return (
            <div>
                <input name="link"
                        value={this.state.link} 
                        placeholder="http://"
                        tupe = "text"
                        className="link-input"
                        onChange={event => this.setState({link: event.target.value})}
                        ref={this.firstRef}/>
                <br/>
                 <input name="seven"
                        value={this.state.seven} 
                        placeholder="7 digits"
                        tupe = "text"
                        maxLength = "7"
                        className="seven-input"
                        onChange={event => this.setState({seven: event.target.value})}
                        ref={this.secondRef}/>
                <br/>
                <input name="uname"
                        value={this.state.uname} 
                        placeholder="username"
                        tupe = "text"
                        className="uname-input"
                        onChange={event => this.setState({uname: event.target.value})}
                        ref={this.thirdRef}/>
                <br/>
                <button onClick={this.createPass}>Create!</button>
                <br/>
                <span className="passResult">{this.state.result}</span>
            </div>
        );
    }
}