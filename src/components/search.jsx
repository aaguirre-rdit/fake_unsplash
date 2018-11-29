import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <form className='form form-inline md-form form-sm active-cyan-2 mt-2'>
                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                           aria-label="Search"></input>

                <button  className='fa fa-search search btn ' onClick={(e)=>{
                    e && e.preventDefault()
                    this.props.onClick()
                }}></button>
            </form>
            </div>
        )
    }
}
export default Search;
