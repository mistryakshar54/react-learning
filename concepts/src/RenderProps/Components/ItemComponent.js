import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemComponent = ( props ) => {
   
    return(
        <li className="list-group-item text-left">
        <label>{props.itemData.name} - ${ props.itemData.value }</label>
        <FontAwesomeIcon onClick={props.addToCart} style={{"float":"right","cursor":"pointer","marginTop":"10px","padding":"0.5%"}} icon={faPlus} />
        <FontAwesomeIcon onClick={props.removeFromCart} style={{"float":"right","cursor":"pointer","marginTop":"10px","padding":"0.5%"}} icon={faMinus} />
        </li>
    );
}
export default ItemComponent;