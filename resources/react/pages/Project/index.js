import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

import { animated, useSpring } from 'react-spring';
import { ProjectsLayout, nl2br } from '../../components/util';


/** Description + type component */
const Description = ({ description, type, springOp, springPos }) => {
    return (
        <animated.div className="Description" style={springOp}>
            <animated.div className="desc" style={springPos}>{nl2br(description)}</animated.div>
            <animated.div className="type" style={springPos}>{nl2br(type)}</animated.div>
        </animated.div>
    );
}

/** Img component */
const Img = ({ src, alt, size = 'big', style = {} }) => <div className={`Img ${size}`} style={style}><img src={src} alt={alt} /></div>;

/** Details compoennt */
const Details = ({ details }) => <div className="Details"><p>{nl2br(details)}</p></div>;



const Project = props => {
    /** project id */
    const { id } = props.match.params;

    /** fetch data effect */
    const [project, setProject] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/projects/${id}`);
            setProject(response.data);
        }
        fetchData();
    }, []);

    /** className effect */
    const [className, setClassName] = useState('background-none');
    useEffect(() => {
        if(Object.values(project).length){
            switch(project.id){
                case 1: setClassName('c-word'); break;
                case 4: setClassName('fluttering-flamingo'); break;
                case 6: setClassName('lara-logan'); break;
                case 7: setClassName('dark-elf'); break;
                case 8: setClassName('human-herd'); break;
                default: setClassName('background-none'); 
            }
        }
    }, [project]);




    /** render specific project */
    const renderProject = () => {
        switch(project.id){
            /** c-word */
            case 1:
                return <>
                    <Img src={project.img.img1} alt={project.title} size="big" />
                    <Img src={project.img.img2} alt={project.title} size="big" />
                    <Details details={project.details} />
                    <Img src={project.img.img3} alt={project.title} size="medium" />
                    <Img src={project.img.img4} alt={project.title} size="medium" />
                    <Img src={project.img.img5} alt={project.title} size="medium" />
                    <Img src={project.img.img6} alt={project.title} size="medium" />
                    <Img src={project.img.img7} alt={project.title} size="medium" />
                    <Img src={project.img.img8} alt={project.title} size="medium" />
                    <Img src={project.img.img9} alt={project.title} size="medium" />
                </>;
            /** Velvet */
            case 2:
                return <>
                    <Img src={project.img.img1} alt={project.title} size="big" />
                    <Img src={project.img.img2} alt={project.title} size="big" />
                    <Img src={project.img.img3} alt={project.title} size="big" />
                    <Img src={project.img.img4} alt={project.title} size="big" />
                    <Img src={project.img.img5} alt={project.title} size="big" />
                    <Img src={project.img.img6} alt={project.title} size="big" />
                    <Img src={project.img.img7} alt={project.title} size="big" />
                    <Img src={project.img.img8} alt={project.title} size="big" />
                    <Img src={project.img.img9} alt={project.title} size="big" />
                </>;
            /** Sync */
            case 3:
                return <>
                    <Img src={project.img.img1} alt={project.title} />
                </>;
            /** fluttering flamingo */
            case 4:
                return <>
                    <Img src={project.img.img1} alt={project.title} size="medium" style={{ padding: '0 15vw' }} />
                    <Img src={project.img.img2} alt={project.title} size="medium" />
                    <Img src={project.img.img3} alt={project.title} size="medium" />
                    <Img src={project.img.img4} alt={project.title} size="medium" />
                    <Details details={project.details} />
                    <Img src={project.img.img5} alt={project.title} size="medium" />
                    <Img src={project.img.img6} alt={project.title} size="medium" />
                </>;
            /** Synchronicity */
            case 5:
                return <>
                    <iframe src="https://player.vimeo.com/video/300053745" className="Frame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </>;
            /** lara logan case */
            case 6:
                return <>
                    <Img src={project.img.img1} alt={project.title} size="medium" style={{ padding: '0 15vw' }} />
                    <Img src={project.img.img2} alt={project.title} size="medium" />
                    <Img src={project.img.img3} alt={project.title} size="medium" />
                    <Img src={project.img.img4} alt={project.title} size="medium" />
                    <Img src={project.img.img5} alt={project.title} size="medium" />
                </>;
            /** Dark Elf */
            case 7:
                return <>
                    <Img src={project.img.img1} alt={project.title} />
                </>;
            /** Human Herd*/
            case 8:
                return <>
                    <Img src={project.img.img1} alt={project.title} />
                    <Img src={project.img.img2} alt={project.title} size="small" />
                    <Img src={project.img.img3} alt={project.title} />
                    <Img src={project.img.img4} alt={project.title} size="small" />
                    <Img src={project.img.img5} alt={project.title} size="small" />
                    <Img src={project.img.img6} alt={project.title} />
                    <Img src={project.img.img7} alt={project.title} />
                </>;
        }
    }

    const ref = useRef();
    const [display, setDisplay] = useState(true);
    const springOp = useSpring({ opacity: display ? 1 : 0 });
    const springPos = useSpring({ transform: display ? 'translateX(0px)' : 'translateX(-150px)' });

    const onWheel = e => {
        const largeContainerScrollPosition = ref.current.scrollLeft;
        ref.current.scrollTo({
            top: 0,
            left: largeContainerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    }

    const handleScroll = e => {
        let limit = (window.innerWidth > 1200) ? window.innerWidth*0.15 : window.innerWidth*0.25;
        if(ref.current.scrollLeft > limit) setDisplay(false);
        else setDisplay(true);
    }

    useEffect(() => {
        ref.current.addEventListener('scroll', handleScroll, true);
        return (() => { ref.current.removeEventListener('scroll', handleScroll); })
    }, []);

    return (
        <div className={`Project ProyectsLayout ${className}`} onWheel={onWheel} ref={ref}>
            <div className="title">{project.title || ''}</div>
            {/* <Link className="back" to="/projects"><AiOutlineArrowLeft /></Link> */}

            {Object.values(project).length && <Description {...project} springOp={springOp} springPos={springPos} />}
            {Object.values(project).length && renderProject()}
            <div style={{ display: 'flex' }}></div>
        </div>
    );
}

export default Project;