import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const HighlightCard = ({ imageUrl, altText, pageUrl, pageText }) => {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white max-w-[400px]">
            <div className="relative w-[400px] h-[400px] aspect-[4/3]">
                <Image
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 400px, (max-width: 1200px) 400px, 400px"
                    alt={altText}
                    className="grayscale hover:grayscale-0"
                />
            </div>

            <div className="p-6 flex justify-center">
                <Link
                    href={pageUrl}
                    className="underline text-lg hover:decoration-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    {pageText}
                </Link>
            </div>
        </div>
    );
};

HighlightCard.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
    pageText: PropTypes.string.isRequired,
};
