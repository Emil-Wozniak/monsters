import React from "react";
import {IMonster} from "./monster.model";
import {CARD, CARD_BODY, CELL} from "../../../config/StyleConstants";

const alive = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2";
const dead = "inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2";

interface IMonsterWrapper {
    monsters: IMonster[]
}

const MonsterStatus = (props: any) =>
    <div className={CARD_BODY}>
        <span className={props.address.geo.lat > 0 ? alive : dead}>
            {props.address.geo.lat}
        </span>
        <span className={props.address.geo.lng > 0 ? alive : dead}>
            {props.address.geo.lng}
        </span>
    </div>;

const MonsterName = (props: any) =>
    <div className={CARD_BODY}>
        <p className="text-gray-700 text-base">{props.name}</p>
    </div>;

const MonsterImage = (props: any) =>
    <div className={CARD_BODY}>
        <img className="w-full"
             src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
             alt="Sunset in the mountains"/>
    </div>;

const Monster = (props: IMonster) =>
    <div className={CELL}>
        <button
            className={CARD}
            style={{height: '24rem'}}>
            <MonsterImage id={props.id}/>
            <MonsterName name={props.name}/>
            <MonsterStatus address={props.address}/>
        </button>
    </div>;

export const MonsterWrapper = (props: IMonsterWrapper) =>
    <div className="flex flex-wrap m-4 content-center">
        {props.monsters
            .map((monster, i) =>
                <Monster
                    key={`monster-${monster.name}-${i}`}
                    id={monster.id}
                    address={monster.address}
                    name={monster.name}/>)}
    </div>;

