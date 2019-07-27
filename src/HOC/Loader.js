import React from 'react';
export const Loader = ( WrappedComponent ) => {
    return () => {
        if( this.props.isDataLoaded === true )
        {
            return "Loading";
        }
        else
        {
           return <WrappedComponent />; 
        }
    }
}