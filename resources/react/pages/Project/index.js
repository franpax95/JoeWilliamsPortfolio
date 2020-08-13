import React, { useState, useEffect } from 'react';
import './Project.css';

import { Link } from 'react-router-dom';

import { ProjectsLayout, nl2br } from '../../components/util';

import { AiOutlineArrowLeft } from 'react-icons/ai';


/** Description + type component */
const Description = ({ description, type }) => (
    <div className="Description">
        <div className="desc">{nl2br(description)}</div>
        <div className="type">{nl2br(type)}</div>
    </div>
);

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
                </>;
            /** Sync */
            case 3:
                return <>
                    <iframe src="https://player.vimeo.com/video/300053745" className="Frame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
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
                    <Img src={project.img.img1} alt={project.title} />
                </>;
            /** lara logan case */
            case 6:
                return <>
                    <Img src={project.img.img1} alt={project.title} size="medium" />
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

    return (
        <ProjectsLayout className={`Project ${className}`}>
            <div className="title">{project.title || ''}</div>
            <Link className="back" to="/projects"><AiOutlineArrowLeft /></Link>

            {Object.values(project).length && <Description description={project.description} type={project.type} />}
            {Object.values(project).length && renderProject()}
            <div style={{ display: 'flex' }}></div>
        </ProjectsLayout>
    );
}

export default Project;