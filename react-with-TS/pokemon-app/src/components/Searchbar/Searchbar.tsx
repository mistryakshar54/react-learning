import React , { useState } from "react";

const SearchBar = () => {
    const [ searchKey, setSearchKey ] = useState('');
    const handleSearch = ( searchValue ) => {
        if (searchValue === ""){
            console.log("Searched for nothing!!");
            setSearchKey("");
        }else{
            console.log("Searched for ", searchValue);
            setSearchKey( searchValue );
        }
    }
    return (
    <div>
        <input  type="text" 
        placeholder="Search by Pokemon Name"
        value = {searchKey}
        onChange={ e=> handleSearch(e.target.value) }
         />
    </div>);
};

export default SearchBar;
