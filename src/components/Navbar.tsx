import { Github, Command, ChevronRight } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <Command size={20} />
                    </div>
                    <span>TQCE</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#features" className="nav-link">Features</a></li>
                    <li><a href="#docs" className="nav-link">Documentation</a></li>
                    <li><a href="#api" className="nav-link">API Reference</a></li>
                    <li><a href="#examples" className="nav-link">Examples</a></li>
                </ul>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a href="https://github.com" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                    <a href="#docs" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
                        <span>Get Started</span>
                        <ChevronRight size={18} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
