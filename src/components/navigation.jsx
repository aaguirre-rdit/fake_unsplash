import React from 'react';
import Search from './search';
class Navigation extends React.Component {
    constructor (props){
        super(props);

    }
    render(){

        return(
            <nav>
                <div className="jumbotron jumbotron-fluid" >
                    <div className="container">
                        <h1 className="display-4">Fake Unsplash</h1>
                        <Search onClick={this.props.onClick}/>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Navigation;
