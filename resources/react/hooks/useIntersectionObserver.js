import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = options => {
    /** elements -> elementos a observar mediante el método 'observe' */
    const [elements, setElements] = useState([]);
    /** entries -> procedente del callback de IntersectionObserver, lo devolvemos para la posterior carga lazy de, por ejemplo, imágenes */
    const [entries, setEntries] = useState([]);


    /** observe -> declarado mediante useRef para pòder acceder al valor actual en todo momento del objecto observer. */
    const observer = useRef(null);
    const observerOptions = options || {};


    /** se encarga de crear una nueva instancia de IntersectionObserver y observar los elementos cada vez que se produzca un cambio en elements (mediante setElements) */
    useEffect(() => {
        if(elements.length){
            observer.current = new IntersectionObserver(observedEntries => { 
                setEntries(observedEntries); 
            }, observerOptions);

            elements.forEach(element => observer.current.observe(element));
        }

        return () => { 
            if(observer.current) 
                observer.current.disconnect(); 
        }
    }, [elements, observerOptions]);

    return [observer.current, setElements, entries];
}

export default useIntersectionObserver;