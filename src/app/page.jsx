import './globals.css';
import bgPicture from '../../public/emma2.jpeg';

export default function Home() {
    return (
        <section>
            <div
                className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                    backgroundPosition: '70%',
                    backgroundImage: `url(${bgPicture.src})`,
                    height: '650px;',
                }}
            >
                <h1 className="mt-14 text-center text-primary-app-bar text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                    Emma Turinsky
                </h1>
            </div>
        </section>
    );
}
