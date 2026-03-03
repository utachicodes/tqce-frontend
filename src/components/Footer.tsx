import { Github, Twitter, Linkedin, Command } from 'lucide-react';

export function Footer() {
    return (
        <footer className="footer container">
            <div className="footer-grid">
                <div>
                    <div className="logo" style={{ marginBottom: '1.5rem' }}>
                        <div className="logo-icon">
                            <Command size={20} />
                        </div>
                        <span>TQCE</span>
                    </div>
                    <p>
                        Building the foundation for deterministic causal modeling in high-dimensional state spaces.
                    </p>
                </div>

                <div className="links-group">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="#">Engine</a></li>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Benchmarks</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>

                <div className="links-group">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div>© 2026 TQCE Open Source Project. Under MIT License.</div>
                <div className="social-links">
                    <a href="https://github.com"><Github size={20} /></a>
                    <a href="#"><Twitter size={20} /></a>
                    <a href="#"><Linkedin size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
