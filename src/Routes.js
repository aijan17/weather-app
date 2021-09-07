import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { App } from "./components/HomePage/App.jsx"
import {Timezone} from "./components/HomePage/Timezone";
import {Testing} from "./components/HomePage/test";


const Routes = () => {
    return (
        <>
        
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={"/today"} component={App} />
                <Route exact path={"/timezone"} component={Timezone}/>
                <Route exact path={"/test"} component={Testing}/>
            </Switch>
        </BrowserRouter>
       
        </>
    );
};

export default Routes;