import { useState } from 'react';
import { Terminal, Copy, Check, Play, Cpu, Globe } from 'lucide-react';

export function Hero() {
    const [copied, setCopied] = useState(false);
    const command = "pip install tqce";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="hero-section">
            <div className="reveal delay-1">
                <div className="badge">
                    <span className="badge-dot"></span>
                    <span>v0.4.2 — Temporal Engine Active</span>
                </div>
            </div>

            <h1 className="hero-title reveal delay-2">
                <span className="text-gradient">Temporal Quantum</span><br />
                Causal Engine
            </h1>

            <p className="hero-subtitle reveal delay-3">
                The next-generation framework for modeling complex causal structures with retrocausal consistency. High-performance, distributed, and quantum-ready.
            </p>

            <div className="hero-actions reveal delay-4">
                <div className="install-block">
                    <Terminal size={18} className="text-brand" style={{ color: 'var(--brand)' }} />
                    <span className="mono">{command}</span>
                    <button
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        onClick={handleCopy}
                    >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                </div>

                <a href="#docs" className="btn btn-primary">
                    <Play size={18} />
                    Get Started
                </a>
            </div>

            <div className="feature-small-grid reveal delay-4" style={{ marginTop: '2rem', gap: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Cpu size={20} style={{ color: 'var(--brand)' }} />
                    <div style={{ textAlign: 'left' }}>
                        <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>ENGINE STATUS</div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>HYPER-FLUID</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Globe size={20} style={{ color: 'var(--brand)' }} />
                    <div style={{ textAlign: 'left' }}>
                        <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>NODES ACTIVE</div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>1.2M+ CLUSTERED</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
