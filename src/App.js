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
      loading : false,
      col1 : [],
      col2 : [],
      col3 : [],
    }
    this.onSearchButton = this.onSearchButton.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  onSearchButton(e){
    this.setState({
        loading:true
    })
    getPics((data)=>{
      data = data.splice(331)
      data = data.sort(Math.random);

      var length = data.length;
      var third = Math.floor(data.length / 3);
      this.setState({
          loading : false,
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
        <Pictureframe loading={this.state.loading} col1={this.state.col1} col2={this.state.col2} col3={this.state.col3}/>

      </div>
    );
  }
}

export default App;
