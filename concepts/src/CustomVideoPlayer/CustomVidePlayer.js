import React , {Component} from 'react';

class CustomVidePlayerComponent extends Component{

    
    render(){
        return(
            <div>
                <h1>Custom Vide Player</h1>
                <video src="./video.mp4" autoPlay/>
            </div>
        );
    }
}

export default CustomVidePlayerComponent;