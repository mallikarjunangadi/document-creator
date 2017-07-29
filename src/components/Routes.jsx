import React from 'react-dom';
import { Route, Switch } from 'react-router-dom';
//import UserFormComponent from './UserFormComponent.jsx'
//import OrgFormComponent from './OrgFormComponent.jsx'

const UserFormComponent = () => (
  <div>
    <p>UserFormComponent</p>   
  </div>
)

const OrgFormComponent = () => (
  <div>
    <p>OrgFormComponent</p>   
  </div>
)

class MainRoutes extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={OrgFormComponent} />
                    <Route path="/user" component={UserFormComponent} />
                </Switch>
            </main>
        )
    }
}

export default MainRoutes