import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from './router.config'
import Pack from './pack'


let list = [];
function getRoutes(conf) {
  conf.forEach(item => {
      const {children, title = "", component, name = "", path} = item;
      if(children&&children.length) {
          getRoutes(children)
      };
      const RouteComp = props => {
          if(title){
              document.title = title
          }
          return (<Pack load={component}>{(Route) => <Route { ...props }/>}</Pack>)
      }
      list.push(<Route key={name} exact path={path} component={RouteComp}/>)
  })
  return list
}

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            {getRoutes(config)}
        </Switch>
    </BrowserRouter>
)


export default BasicRoute;
