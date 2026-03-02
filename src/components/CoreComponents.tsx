import { Network, Activity, Waves, Gauge, Zap } from 'lucide-react';

const components = [
    {
        title: 'Causal Tensor Networks (CTN)',
        icon: <Network size={32} />,
        description: 'Extends directed acyclic graphs by adding retrocausal edges, computing state by fixed-point iteration until the global state converges to a self-consistent solution.',
        color: 'var(--primary-color)',
        glow: 'var(--primary-glow)'
    },
    {
        title: 'Paradox Pressure Gradient Descent (PPGD)',
        icon: <Activity size={32} />,
        description: 'A gradient-based optimizer where the loss function is causal inconsistency itself. Descends toward self-consistent basins using momentum and adaptive learning rates.',
        color: 'var(--accent-color)',
        glow: 'var(--accent-glow)'
    },
    {
        title: 'Temporal Eigenstate Collapse (TEC)',
        icon: <Waves size={32} />,
        description: 'Causal interference between timelines amplifies consistent resolutions and cancels paradoxical ones, collapsing to the most self-consistent solution.',
        color: '#60a5fa',
        glow: 'rgba(96, 165, 250, 0.3)'
    },
    {
        title: 'Chrono-Entropic Regularization (CER)',
        icon: <Gauge size={32} />,
        description: 'Inspired by thermodynamics, it penalizes states where a past node has higher approximate entropy than its future retrocausal parents, preventing unbounded information growth.',
        color: '#fb923c',
        glow: 'rgba(251, 146, 60, 0.3)'
    },
    {
        title: 'Bootstrap Amplification (BA)',
        icon: <Zap size={32} />,
        description: 'Exploits bootstrap paradoxes computationally by injecting a weak signal into a causal loop, amplifying it to a stable fixed point larger than the input.',
        color: '#facc15',
        glow: 'rgba(250, 204, 21, 0.3)'
    }
];

export function CoreComponents() {
    return (
        <section id="components" className="components-section">
            <div className="section-header">
                <h2 className="section-title">Five Core Components</h2>
                <p className="section-subtitle">
                    The building blocks of temporal computation, enabling previously impossible optimization paradigms.
                </p>
            </div>

            <div className="grid-cards">
                {components.map((comp, idx) => (
                    <div
                        key={idx}
                        className="glass-panel card-hover flex-col-start"
                        style={{ '--hover-glow': comp.glow, '--icon-color': comp.color } as React.CSSProperties}
                    >
                        <div className="icon-wrapper glass-icon" style={{ color: comp.color }}>
                            {comp.icon}
                        </div>
                        <h3 className="card-title">{comp.title}</h3>
                        <p className="card-desc">{comp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
