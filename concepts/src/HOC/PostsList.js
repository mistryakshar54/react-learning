import React from 'react';
export const PostsList = ( props ) => {
    if(props.dataToPass && props.dataToPass.length > 0)
    {
        return(
            props.dataToPass.map( (post , index) => {
                return (
                  <li key={index} className="list-group-item text-left">
                    <h2 className="header-label">
                      {index + 1}. {post.title}
                    </h2>
                    <h3 className="description">{post.body}</h3>
                  </li>
                );
            })
        );
    }
    else
    {
        return <h1>{props.errorMessage}</h1>
    }
}