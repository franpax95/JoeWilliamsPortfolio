import React, { useRef } from 'react';
import './styles.css';

/** to insert some space between components */
export const SpaceBetween = ({ height = '100px'}) => <div style={{ height: height, minHeight: height}}></div>;

/** loader/spinner */
export const Loading = ({ size = '64px' }) => {
    const divSize = `${parseInt(size)}px`;
    return (
        <div className="Loading">
            <div className="spinner" style={{ width: size, height: size }}>
                <div style={{ width: divSize, height: divSize }}></div>
                <div style={{ width: divSize, height: divSize }}></div>
                <div style={{ width: divSize, height: divSize }}></div>
                <div style={{ width: divSize, height: divSize }}></div>
            </div>
        </div>
    );
};



/** error messages */
const defaultMsg = 'Oops! An unexpected error... Please, try again later.';
export const Fatal = ({ message = defaultMsg }) => <div className="Fatal">{message}</div>;



/** return a text with <br /> instead of \n */
export const nl2br = (str) => str.split("\n").map((item, key) => <React.Fragment key={key}>{item}<br/></React.Fragment>);



/** project & projects pages layout */
export const ProjectsLayout = ({ className = '', children }) => {
    const ref = useRef();

    /** add scroll effect */
    const onWheel = (e) => {
        const largeContainerScrollPosition = ref.current.scrollLeft;
        ref.current.scrollTo({
            top: 0,
            left: largeContainerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    }

    return <div className={`ProjectsLayout ${className}`} onWheel={onWheel} ref={ref}>{children}</div>;
}