import React from 'react'
import classes from  './App.module.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Posts from './pages/posts/posts'
import CreatePost from './pages/create-post/create-post'
import Events from './pages/events/events'
import PrePaidCards from './pages/prepaid-cards/prepaid-cards'
import Loans from './pages/loans/loans'
import SheduleEvent from './pages/shedule-event/shedule-event'

class App extends React.Component{
 render(){
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          <Route path='/loans' component={Loans}/>
          <Route path='/prepaid-cards' component={PrePaidCards}/>
          <Route path='/shedule-event' component={SheduleEvent}/>
          <Route path='/events' component={Events}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/create-post' component={CreatePost}/>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
 }
}

export default App;
