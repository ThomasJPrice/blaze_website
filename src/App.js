import React from "react";

import { Landing, Companies, Features, Purpose, Insights, Dashboard, Clients, Integrations, FAQs, Blog, CTA, Footer } from './container';
import { Navbar, Divider } from './components'
import './App.css'

const App = () => (
    <div>
        <div className="bg__gradient">
            <Navbar /> {/*COMPONENT*/}
            <Landing />
        </div>
        <Companies />
        <Features />
        <Purpose />
        <Insights />
        <Dashboard />
        <Clients />
        <Divider /> {/*COMPONENT*/}
        <Integrations />
        <Divider /> {/*COMPONENT*/}
        <FAQs />
        <CTA />
        <Footer />
    </div>
);

export default App;