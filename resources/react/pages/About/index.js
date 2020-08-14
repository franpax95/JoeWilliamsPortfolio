import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { SpaceBetween } from '../../components/util';

const Br = () => <div className="Br"></div>;

const About = () => (
    <div className="About">
        <SpaceBetween height="40vh" />

        <span>A little about me</span>

        {/* <SpaceBetween height="20vh" /> */}
        <Br />

        <span>My name is Joe Williams.</span>
        <span>I am a creative designer and</span>
        <span>maker of interesting things.</span>

        {/* <SpaceBetween height="20vh" /> */}
        <Br />

        <span>I have created this space as a</span>
        <span>platform to showcase a range</span>
        <span>of my work and collaborations.</span>

        {/* <SpaceBetween height="20vh" /> */}
        <Br />

        <span>If you have any questions or</span>
        <span>would like to work together</span>
        <span>on your next project please</span>
        <span>feel free to <Link to="/contact" className="hello">say hello!</Link></span>
    </div>
);

export default About;