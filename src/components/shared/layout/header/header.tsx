import React from 'react';
import {HEADER_CONTAINER, HEADER_TEXT} from "../../../../config/StyleConstants";

interface IHeader {
    title: string;
}
const Header = (props: IHeader) =>
            <header className={HEADER_CONTAINER}>
                <p className={HEADER_TEXT}>
                    {props.title}
                </p>
            </header>;


export default Header;