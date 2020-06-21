import React from 'react';

const PostBtn = ({ label, isDisabled,testId, clickHandler }) => {
  return (
    <button
      className={ isDisabled ? "btn-disabled" : "btn"}
      disabled={isDisabled}
      data-testid={testId}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};

export default PostBtn;