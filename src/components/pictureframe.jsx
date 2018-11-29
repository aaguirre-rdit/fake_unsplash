import React from 'react';
import Photocol from './picturecol'
class Pictureframe extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let data;
        if (this.props.loading){
            data = (<img id = 'spinner' src='https://i.redd.it/o6m7b0l6h6pz.gif' />)
        } else {
            data =  (<div className='container-fluid' id='pictureframe'>
                <div className='row'>
                    <Photocol photolist={this.props.col1}/>
                    <Photocol photolist={this.props.col2}/>
                    <Photocol photolist={this.props.col3}/>
                    {/*
                    <button href='#pictureframe' className='arrow-up glyphicon glyphicon-arrow-up'></button>
*/}
                </div>
            </div>)
        }
        return (
            data
        )
    }
}

export  default Pictureframe;
