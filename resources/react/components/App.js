import React from 'react';
import './App.css';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

import Navbar from './Navbar';

import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';



const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1,},
        // update: { opacity: 1 },
        leave: { opacity: 0, },
        config: { duration: 700 }
    });

    return (<>
        <Navbar />

        {transitions.map(({item, props, key}) => (
            <animated.div key={key} style={{ ...props, width: '100%', height: '100%' }}>
                <div className="App">
                    <Switch location={item}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects/:id" component={Project} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </animated.div>
        ))}
    </>);
}



export default App;