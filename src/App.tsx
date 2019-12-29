import React from "react";
import "./App.css";
import MonsterContainer from "./components/entities/monster.container";
import Header from "./components/shared/layout/header/header";
import Footer from "./components/shared/layout/footer/footer";
import {APP_CONTAINER, BODY_CONTENT} from "./components/shared/layout/style/StyleConstants";

const App: React.FC = () => {
    return (
        <div className={APP_CONTAINER}>
           <Header title={'Monster Cards'}/>
            <div className={BODY_CONTENT}>
                <MonsterContainer/>
            </div>
            <Footer title={"Here you can put your footer info"}/>
        </div>
    )
};

export default App;
