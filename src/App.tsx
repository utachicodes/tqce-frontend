import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { CoreComponents } from './components/CoreComponents';
import { Documentation } from './components/Documentation';
import { Footer } from './components/Footer';

function App() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor && anchor.hash && anchor.origin === window.location.origin) {
                const targetElement = document.querySelector(anchor.hash);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="app-container">
            <div className="bg-glow primary"></div>
            <div className="bg-glow accent"></div>

            <Navbar />

            <main>
                <Hero />
                <CoreComponents />
                <Documentation />
            </main>

            <Footer />
        </div>
    );
}

export default App;
