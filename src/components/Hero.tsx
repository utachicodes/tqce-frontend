import { ChevronRight, Terminal } from 'lucide-react';

export function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="badge">
                    <span className="badge-dot"></span>
                    v0.1.0 Released
                </div>

                <h1 className="hero-title">
                    Temporal Quantum <br />
                    <span className="text-gradient">Causal Engine</span>
                </h1>

                <p className="hero-subtitle">
                    A novel computational paradigm based on causal loop mechanics.
                    Solve problems standard approaches cannot handle — circular dependencies, self-referential optimization, and causal reasoning with feedback loops.
                </p>

                <div className="hero-actions">
                    <a href="#quickstart" className="button-primary">
                        Quick Start
                        <ChevronRight size={20} />
                    </a>

                    <div className="install-box">
                        <Terminal size={18} className="install-icon" />
                        <code>pip install tqce</code>
                        <button
                            className="copy-button"
                            onClick={(e) => {
                                navigator.clipboard.writeText('pip install tqce');
                                const btn = e.currentTarget;
                                const originalText = btn.innerText;
                                btn.innerText = 'Copied!';
                                btn.classList.add('copied');
                                setTimeout(() => {
                                    btn.innerText = originalText;
                                    btn.classList.remove('copied');
                                }, 2000);
                            }}
                        >
                            Copy
                        </button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">5+</span>
                        <span className="stat-label">Core Components</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">~O(1)</span>
                        <span className="stat-label">Convergence Time</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Paradox Free</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
