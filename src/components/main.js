import React from 'react'
import home from './home'
import receitas from './receitas'
import cookie from './cookie'
import banoffee from './banoffee'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/receitas' component={receitas} />
        <Route exact path='/cookie' component={cookie} />
        <Route exact path='/banoffee' component={banoffee} />
    </Switch>
)

export default Main