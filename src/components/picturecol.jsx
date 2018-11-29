import React from 'react';
import Photo from './photo';
class Photocol extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.photolist)
        return (
            <div className='col-xs-12 col-sm-4 photocol'>

                {this.props.photolist.map((data)=>{
                    return <Photo photodata={data}/>
                })}

            </div>
        )
    }
}
export default Photocol;
