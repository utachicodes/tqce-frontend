import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreComponents } from './components/CoreComponents';
import { Documentation } from './components/Documentation';
import { Footer } from './components/Footer';

function App() {
    useEffect(() => {
        // Scroll reveal observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        // Bento mouse effect
        const handleMouseMove = (e: MouseEvent) => {
            const items = document.querySelectorAll('.bento-item');
            items.forEach(item => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (item as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (item as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="app">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

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
