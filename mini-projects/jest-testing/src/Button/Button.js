import React from 'react';

const PostBtn = ( { label, testId , clickHandler } ) => {
return <button data-testid={testId} onClick={ clickHandler }>{label}</button>;
}

export default PostBtn;