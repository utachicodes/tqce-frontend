import { Share2, Zap, Shield, Database, Layout, Repeat } from 'lucide-react';

const components = [
    {
        id: 'CTN',
        name: 'Causal Transfer Network',
        desc: 'Orchestrates high-fidelity nodal communication across temporal dimensions with near-zero latency.',
        icon: <Share2 size={24} />,
        tag: 'CORE',
        featured: true
    },
    {
        id: 'PPGD',
        name: 'Probabilistic Path Geodesics',
        desc: 'Calculates the most probable causal trajectory through high-dimensional entanglement space.',
        icon: <Zap size={24} />,
        tag: 'ALGO'
    },
    {
        id: 'TEC',
        name: 'Temporal Entropy Controller',
        desc: 'Manages heat dissipation and state stability during retrocausal event simulation.',
        icon: <Shield size={24} />,
        tag: 'SYSTEM'
    },
    {
        id: 'TEC2',
        name: 'TEC Controller',
        desc: 'Secondary stabilization layer for TEC units.',
        icon: <Shield size={24} />,
        tag: 'SYSTEM'
    },
    {
        id: 'CER',
        name: 'Causal Event Resolver',
        desc: 'Finalizes quantum states by resolving overlapping timelines into a singular linear outcome.',
        icon: <Database size={24} />,
        tag: 'RESOLVER',
        featured: true
    },
    {
        id: 'BA',
        name: 'Bifurcation Analyzer',
        desc: 'Detects and analyzes critical points where timelines split, ensuring predictive accuracy.',
        icon: <Repeat size={24} />,
        tag: 'ANALYSIS'
    },
    {
        id: 'UIX',
        name: 'Unified Interface Core',
        desc: 'Seamless integration layer for distributed quantum clusters.',
        icon: <Layout size={24} />,
        tag: 'INTERFACE'
    }
];

export function CoreComponents() {
    return (
        <section id="features" className="section-padding container">
            <div className="reveal">
                <span className="section-label">Capabilities</span>
                <h2 className="section-title">Core Engine Modules</h2>
            </div>

            <div className="bento-grid">
                {components.map((c, i) => (
                    <div
                        key={c.id}
                        className={`bento-item reveal delay-${(i % 4) + 1} ${c.featured ? 'featured' : ''}`}
                    >
                        <div className="feature-tag">{c.tag}</div>
                        <div style={{ marginTop: 'auto' }}>
                            <div className="icon-box">
                                {c.icon}
                            </div>
                            <h3>{c.name}</h3>
                            <p>{c.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
