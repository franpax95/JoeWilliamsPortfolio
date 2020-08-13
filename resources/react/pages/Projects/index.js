import React, { useEffect } from 'react';
import './Projects.css';

import { connect } from 'react-redux';
import * as ProjectsActions from '../../actions/projectsActions';

import ProjectCard from '../../components/ProjectCard';
import { Fatal, ProjectsLayout } from '../../components/util';


const Projects = props => {
    /** componentDidMount() */
    useEffect(() => {
        const fetchData = async () => {
            const { projects, loading } = props;
            if(!projects.length && !loading) await props.get();
        }
        fetchData();
    }, []);


    return (
        <ProjectsLayout className="Projects">
            {props.error
                ? <Fatal message={props.error} />
                : props.projects.map(project => <ProjectCard key={project.id} {...project} />)
            }
        </ProjectsLayout>
    );
}

const mapStateToProps = ({ projectsReducer }) => projectsReducer;
export default connect(mapStateToProps, ProjectsActions)(Projects);