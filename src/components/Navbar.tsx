import { Activity, Github, BookOpen } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Activity className="logo-icon" size={28} />
                    <span className="logo-text">TQCE</span>
                </div>
                <div className="nav-links">
                    <a href="#components" className="nav-link">Components</a>
                    <a href="#docs" className="nav-link">Docs</a>
                    <a href="#examples" className="nav-link">Examples</a>
                </div>
                <div className="nav-actions">
                    <a href="https://github.com/utachicodes/tqce" target="_blank" rel="noopener noreferrer" className="button-secondary">
                        <Github size={20} />
                        GitHub
                    </a>
                    <a href="#quickstart" className="button-primary">
                        <BookOpen size={20} />
                        Quick Start
                    </a>
                </div>
            </div>
        </nav>
    );
}
