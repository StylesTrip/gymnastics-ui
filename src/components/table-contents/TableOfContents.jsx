'use client';

import { useHeadsObserver } from '@/hooks/Observer';
import { useEffect, useState } from 'react';

export function TableOfContents() {
    const [headings, setHeadings] = useState([]);
    const { activeId } = useHeadsObserver();

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll('h2, h3, h4')
        ).map((elem) => ({
            id: elem.id,
            text: elem.innerText,
            level: Number(elem.nodeName.charAt(1)),
        }));
        setHeadings(elements);
    }, []);

    function getStylings(heading) {
        let classNames = '';

        if (activeId === heading.id) {
            if (heading.level >= 3) {
                classNames += 'border-l-4 border-pink-500';
            } else {
                classNames += 'font-bold';
            }
        }

        return classNames;
    }

    return (
        <nav className="sticky top-0">
            <ul>
                {headings.map((heading) => (
                    <li className={heading.level >= 3 ? 'm-2' : ''}>
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(`#${heading.id}`)
                                    .scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={getStylings(heading)}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
