import React from "react";
import {HEADER_CONTAINER, HEADER_TEXT} from "../style/StyleConstants";

interface IHeader {
    title: string;
}
const Header = (props: IHeader) =>
            <header className={HEADER_CONTAINER}>
                <h1 className={HEADER_TEXT}>
                    {props.title}
                </h1>
            </header>;


export default Header;