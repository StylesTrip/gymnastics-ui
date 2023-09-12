import { useEffect, useRef, useState } from 'react';

export function useHeadsObserver() {
    const observer = useRef();
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleObserver = (entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: '-5% 0% -35% 0px',
        });

        const elements = document.querySelectorAll('h2, h3', 'h4');
        elements.forEach((elem) => observer.current.observe(elem));

        return () => observer.current?.disconnect();
    }, []);

    return { activeId };
}
