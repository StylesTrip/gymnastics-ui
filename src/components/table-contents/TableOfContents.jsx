'use client';

import { useHeadsObserver } from '@/hooks/Observer';
import Link from 'next/link';
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
                    <li
                        key={heading.id}
                        className={heading.level >= 3 ? 'm-2' : ''}
                    >
                        <Link
                            href={`#${heading.id}`}
                            // scroll={false}
                            className={getStylings(heading)}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
