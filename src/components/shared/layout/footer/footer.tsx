import React from "react";
import {ColumnElement, ColumnSection} from "../grid/grid.components";
import {BLUE_LIST, DARK_GREEN_LIST, LIGHT_GREEN_LIST, ORANGE_LIST} from "../../../../config/StyleConstants";

interface IFooter {
    title: string;
}

const Footer = (props: IFooter) =>
    <footer>
        <div className="container p-6">
            <div className="flex mb-4">
                <ColumnSection
                    name={"Orange"}
                    nameClass={"text-orange mb-2"}>
                    <ColumnElement
                        listClass={ORANGE_LIST}>
                        One
                    </ColumnElement>
                </ColumnSection>
                <ColumnSection
                    name={"Blue"}
                    nameClass={"text-blue mb-2"}>
                    <ColumnElement listClass={BLUE_LIST}>
                        One
                    </ColumnElement>
                    <ColumnElement listClass={BLUE_LIST}>
                        Two
                    </ColumnElement>
                    <ColumnElement listClass={BLUE_LIST}>
                        Three
                    </ColumnElement>
                </ColumnSection>
                <ColumnSection
                    name={'Green-dark'}
                    nameClass={"text-green-dark mb-2"}>
                    <ColumnElement listClass={DARK_GREEN_LIST}>
                        One
                    </ColumnElement>
                    <ColumnElement listClass={DARK_GREEN_LIST}>
                        Two
                    </ColumnElement>
                    <ColumnElement listClass={DARK_GREEN_LIST}>
                        Three
                    </ColumnElement>
                    <ColumnSection name={'Green-light'} nameClass={"text-green-light mb-2 mt-4"}>
                        <ColumnElement listClass={LIGHT_GREEN_LIST}>
                            One
                        </ColumnElement>
                        <ColumnElement listClass={LIGHT_GREEN_LIST}>
                            Two
                        </ColumnElement>
                        <ColumnElement listClass={LIGHT_GREEN_LIST}>
                            Three
                        </ColumnElement>
                    </ColumnSection>
                </ColumnSection>
                <ColumnSection
                    name={"Newsletter"}
                    nameClass={"text-yellow-700 mb-2"}>
                    <p className="text-gray-500 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Commodi, consectetur.
                    </p>
                </ColumnSection>
            </div>
            {props.title}
        </div>
    </footer>;


export default Footer;