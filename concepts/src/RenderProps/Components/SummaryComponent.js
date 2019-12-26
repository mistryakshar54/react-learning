import React from 'react';

const SummaryComponent = ( props ) => {
    let totalAmount = 0;
    return(
        <div>
            <h2 className="header-label">Bag Items({props.cartItems.length}):<br/></h2>
            <ul className="list-group list-group-flush">
            {
                props.cartItems.length === 0 ? <label >Nothing to show</label>  :    props.cartItems.map( (item , index) => {
                    totalAmount += item.value;
                    return(
                        <label  key={index}>
                        {item.name} x {item.qty } = ${item.value}
                    </label>
                    );
                })
                
            }
                <label>Total Amount : ${totalAmount}</label>
            </ul>
        </div>
        
    );
}

export default SummaryComponent;