import React, { Component } from 'react';
import ItemComponent  from './ItemComponent';
import '../styles/ItemListComponent.scss';

class ItemListComponent extends Component{

    state = {
        itemList : [
            {
                name : "Eggs" , value : 2
            },
            {
                name : "Bread" , value : 3
            }
        ],
        cartItems : []
    }

    addItemToCartHandler = ( itemToAdd ) => {
        let cartItemArr = Object.assign([] , this.state.cartItems);
        let matchIndex = -1;
        if(cartItemArr.length > 0)
        {
            cartItemArr.forEach( (item , index) => {
                if( item.name === itemToAdd.name )
                {
                    matchIndex = index;
                }
            })
            
            if(matchIndex >= 0)
            {
                cartItemArr[matchIndex].value += itemToAdd.value;
                cartItemArr[matchIndex].qty = cartItemArr[matchIndex].qty + 1;
            }
            else
            {
                cartItemArr.push({
                    name : itemToAdd.name,
                    value : itemToAdd.value,
                    qty : 1
                })
            }

        }
        else
        {
            cartItemArr.push({
                name : itemToAdd.name,
                value : itemToAdd.value,
                qty : 1
            })
        }
        
        this.setState({ cartItems : cartItemArr });
    }

    removeItemFromCartHandler = ( itemToRemove ) => {
        let cartItemArr = Object.assign([] , this.state.cartItems);
        let matchIndex = -1;
        if(cartItemArr.length > 0)
        {
            cartItemArr.forEach( (item , index) => {
                if( item.name === itemToRemove.name )
                {
                    matchIndex = index;
                }
            })
            if(matchIndex >= 0)
            {
                let item = cartItemArr[matchIndex];
                if( item.qty > 1 )
                {
                    item.value -= itemToRemove.value;
                    item.qty = item.qty - 1;
                }
                else
                {
                    cartItemArr.splice(matchIndex , 1);
                }
                this.setState({ cartItems : cartItemArr });
            }
        }
    }

    render(){
        if(this.state.itemList.length > 0)
        {
            let itemListArr = this.state.itemList;
            return (
              <div className="container main-container">
                <div className="col-lg-6 item-list-container">
                  <h2 className="header-label">
                    Items:
                    <br />
                  </h2>
                  <ul className="list-group list-group-flush">
                    {itemListArr.map((item, index) => {
                      return (
                        <ItemComponent
                          key={"child_" + index}
                          addToCart={() =>
                            this.addItemToCartHandler(item)
                          }
                          removeFromCart={() =>
                            this.removeItemFromCartHandler(item)
                          }
                          itemData={item}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-5 summary-container">
                  {this.props.render(this.state.cartItems)}
                </div>
              </div>
            );
        }
        else
        {
            return(
                <h1>Nothing in the list as of now!!</h1>
            );
        }
    };
}

export default ItemListComponent;