import React from 'react';
// import AutoScale from 'react-auto-scale';
class Photo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var url = this.props.photodata ? "http://picsum.photos/"+ this.props.photodata.filename: ''
        var style= {
            width:'100%',
        height:'100%',
        marginBottom:'20px',
        }
        return (
            <div>
                {/*<p>{url}</p>*/}
                {/*<AutoScale>*/}
                <img style={style} src={url}/>
                {/*</AutoScale>*/}
            </div>
    )
    }


}
export default Photo;
