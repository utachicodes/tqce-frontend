import { Settings, Layers, Code } from 'lucide-react';

export function Documentation() {
    return (
        <section id="docs" className="section-padding container">
            <div className="reveal">
                <span className="section-label">Developer Guide</span>
                <h2 className="section-title">Get Started in Seconds</h2>
            </div>

            <div className="docs-layout" style={{ marginTop: '4rem' }}>
                <div className="reveal delay-1">
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Simple by Design</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        TQCE is built to integrate seamlessly into existing Python workflows. Whether you're modeling simple causal chains or complex quantum networks, the API remains intuitive and high-performance.
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--brand-glow)', color: 'var(--brand)', padding: '0.4rem', borderRadius: '8px' }}>
                                <Settings size={18} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Zero Configuration</h4>
                                <p style={{ color: 'var(--text-3)', fontSize: '0.9rem' }}>Sensible defaults for instant causal modeling.</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(124, 77, 255, 0.2)', color: '#7c4dff', padding: '0.4rem', borderRadius: '8px' }}>
                                <Layers size={18} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Distributed Ready</h4>
                                <p style={{ color: 'var(--text-3)', fontSize: '0.9rem' }}>Scale to clusters with simple orchestrator flags.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="code-window reveal delay-2">
                    <div className="code-header">
                        <div className="dots">
                            <span style={{ background: '#ff5f56' }}></span>
                            <span style={{ background: '#ffbd2e' }}></span>
                            <span style={{ background: '#27c93f' }}></span>
                        </div>
                        <div className="filename">main.py</div>
                        <Code size={16} style={{ color: 'var(--text-3)' }} />
                    </div>
                    <pre>
                        <span style={{ color: '#7c4dff' }}>from</span> tqce <span style={{ color: '#7c4dff' }}>import</span> Orchestrator, Node<br /><br />
                        <span style={{ color: 'var(--text-3)' }}># Initialize engine</span><br />
                        engine = Orchestrator(mode=<span style={{ color: 'var(--brand)' }}>"quantum"</span>)<br /><br />
                        <span style={{ color: 'var(--text-3)' }}># Define causal nodes</span><br />
                        node_a = Node(<span style={{ color: 'var(--brand)' }}>"Event_A"</span>)<br />
                        node_b = Node(<span style={{ color: 'var(--brand)' }}>"Event_B"</span>)<br /><br />
                        <span style={{ color: 'var(--text-3)' }}># Create temporal bridge</span><br />
                        engine.bridge(node_a, node_b, latency=<span style={{ color: '#ffbd2e' }}>0.042</span>)<br /><br />
                        <span style={{ color: 'var(--text-3)' }}># Run simulation</span><br />
                        engine.simulate()
                    </pre>
                </div>
            </div>

            <div id="api" className="reveal" style={{ marginTop: '10rem' }}>
                <span className="section-label">Reference</span>
                <h2 className="section-title">Core Interfaces</h2>

                <div className="bento-grid" style={{ marginTop: '3rem' }}>
                    {[
                        { title: 'Orchestrator', desc: 'Central engine manager for causal clusters.', tag: 'CORE' },
                        { title: 'CausalNode', desc: 'Base unit for representing temporal events.', tag: 'API' },
                        { title: 'Bridge', desc: 'Connects nodes with specific temporal properties.', tag: 'API' },
                        { title: 'Resolver', desc: 'Resolves timeline conflicts in real-time.', tag: 'RESOLVER' }
                    ].map((item, i) => (
                        <div key={i} className={`bento-item reveal delay-${(i % 4) + 1}`}>
                            <div className="feature-tag">{item.tag}</div>
                            <div style={{ marginTop: 'auto' }}>
                                <h4 className="mono" style={{ color: 'var(--brand)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
