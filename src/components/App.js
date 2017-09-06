import React , { Component} from 'react';

import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats.js'

class App extends Component{

    constructor(){
        super();

        this.state = {
            newDate : '',
            myBirthday : '1989-02-21',
            stats : false
        }
    }

    changeBirthday()
    {
        this.setState({
            myBirthday : this.state.newDate,
            stats: true
        })
    }

    render(){
        return(
            <div className="App"> 
                <Form inline>
                    <h2>Input your Birthday!</h2>
                    <FormControl type="date" onChange = {
                        event => this.setState({ newDate: event.target.value})
                    }>                   
                    </FormControl>
                    {' '}
                    <Button onClick={()=> this.changeBirthday()}>
                      Submit
                    </Button>
                    {
                        this.state.stats ? 
                        <div className="fade age-stats">
                        <AgeStats date= {this.state.myBirthday}/>
                        </div>
                         : <div></div> 
                    }
                </Form>
            </div>
        )
    }
}

export default App;