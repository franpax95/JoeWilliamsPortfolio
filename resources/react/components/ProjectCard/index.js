import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const loadImage = url => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener('load', e => resolve(img));
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load image's URL: ${url}`))
        });
        img.src = url;
    })
}


const ProjectCard = ({ id, title, img = {} }) => {
    const [display, setDisplay] = useState(false);
    const { cover } = img;

    useEffect(() => {
        const fetchImage = async () => {
            await loadImage(cover).then(img => {}).catch(error => {});
            setDisplay(true);
        }
        fetchImage();
    }, []);

    const spring = useSpring({ opacity: display ? 1 : 0 });

    const _class = title.replace(/\s/g, '');
    return (
        <animated.div style={{ ...spring }}>
            <Link to={`/projects/${id}`} className={`ProjectCard ${_class}`}>
                {display && <img src={cover} alt={title} />}
            </Link>
        </animated.div>
    );
}

export default ProjectCard;