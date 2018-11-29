import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getPics from './searchPics';
import Navigation from './components/navigation';
import Pictureframe from './components/pictureframe';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results : [],
      col1 : [],
      col2 : [],
      col3 : [],
    }
    this.onSearchButton = this.onSearchButton.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  onSearchButton(e){

    getPics((data)=>{
      data = data.splice(331)
      data = data.sort(Math.random);

      var length = data.length;
      var third = Math.floor(data.length / 3);
      this.setState({
          results : data,
          col1 : data.slice(0,third),
          col2 : data.slice(third,2 * third),
          col3 : data.slice(2*third)

      })
    })
  }
  componentDidMount(){
    this.onSearchButton()
  }
  render() {
    return (
      <div className="App">
        <Navigation onClick={this.onSearchButton}/>
        <Pictureframe col1={this.state.col1} col2={this.state.col2} col3={this.state.col3}/>
        <button href='.nav' className='arrow-up glyphicon glyphicon-arrow-up'></button>
      </div>
    );
  }
}

export default App;
