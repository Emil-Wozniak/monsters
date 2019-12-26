import React from "react";
import {SEARCH_INPUT} from "../../config/StyleConstants";

interface ISearchBox {
    placeholder: string;
    handleChange: any;
}

export const SearchBox = (props: ISearchBox) =>
    <input
        className={SEARCH_INPUT}
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}/>;