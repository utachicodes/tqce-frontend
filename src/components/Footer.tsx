import { Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>TQCE</h3>
                    <p>Temporal Quantum Causal Engine</p>
                </div>
                <div className="footer-links">
                    <h4>Resources</h4>
                    <a href="https://github.com/utachicodes/tqce" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <a href="https://pypi.org/project/tqce/" target="_blank" rel="noopener noreferrer">PyPI Package</a>
                    <a href="https://github.com/utachicodes/tqce/blob/main/docs/examples.md" target="_blank" rel="noopener noreferrer">Documentation</a>
                </div>
                <div className="footer-socials">
                    <a href="https://github.com/utachicodes" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={24} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TQCE Contributors. MIT License.</p>
            </div>
        </footer>
    );
}
