import React, {Component} from 'react';
import {IMonster} from "./monsters/monster.model"
import {MonsterWrapper} from "./monsters/monster.components";
import {SearchBox} from "../functions/search-box.component";

interface IUsersProps {
}

interface IUsersState {
    monsters: IMonster[],
    searchField: string
}

class MonsterContainer extends Component<IUsersProps, IUsersState> {
    constructor(props: any) {
        super(props);
        this.state = {monsters: [], searchField: ''}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters
            .filter(monster =>
                monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="container">
                <SearchBox
                    placeholder={"find a monster"}
                    handleChange={(event: { target: { value: any; }; }) =>
                        this.setState({searchField: event.target.value})}/>
                <MonsterWrapper
                    monsters={filteredMonsters}/>
            </div>);
    }
}

export default MonsterContainer;