import React from 'react';
import Photocol from './picturecol'
class Pictureframe extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <div className='container-fluid'>
                <h4>Your search results will appear here:</h4>
                <div className='row'>
                    <Photocol photolist={this.props.col1}/>
                    <Photocol photolist={this.props.col2}/>
                    <Photocol photolist={this.props.col3}/>
                </div>
            </div>
        )
    }
}

export  default Pictureframe;
