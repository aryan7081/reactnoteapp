import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search flex items-center bg-slate-500 rounded-md p-1 mb-6 mt-4">
            <MdSearch className="search-icons" size="1.3em"/>
            <input onChange={(event) => 
            handleSearchNote(event.target.value)}
            type="text" placeholder="Type to search" 
            className="border-none focus:outline-none bg-slate-500"
            />
        </div>
    )
};

export default Search;