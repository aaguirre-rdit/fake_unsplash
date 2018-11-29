import React from 'react';

class Photo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var url = this.props.photodata ? "http://picsum.photos/"+ this.props.photodata.filename: ''
        var style= {
            width:'100%',
        height:'auto',
        marginBottom:'20px',
        objectFit: 'cover',

        }
        return (
            <div>
                {/*<p>{url}</p>*/}
                <img style={style} src={url}/>

            </div>
    )
    }


}
export default Photo;
