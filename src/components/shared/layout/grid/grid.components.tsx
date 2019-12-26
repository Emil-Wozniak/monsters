import React from "react";

interface IColumnSection {
    children: any;
    name: string;
    nameClass: string;
}

export const ColumnSection = (props: IColumnSection) =>
    <div className="w-1/4 h-auto">
        <div className={props.nameClass}>
            {props.name}
        </div>
        <ul className="list-reset leading-normal">
            {props.children}
        </ul>
    </div>;

interface IColumnElement {
    children: any;
    listClass: string;
}

export const ColumnElement = (props: IColumnElement) =>
    <li className={props.listClass}>
        {props.children}
    </li>;