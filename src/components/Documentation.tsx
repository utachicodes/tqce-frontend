import { Book, PlayCircle } from 'lucide-react';
import { DocumentationGrid } from './DocumentationGrid';

export function Documentation() {
    const codeSnippet = `import numpy as np
from tqce import CausalNode, TQCEOrchestrator
from tqce.viz import plot_convergence, plot_ctn_graph

np.random.seed(42)

# Build a causal loop: A -> B -> C with retrocausal C -> A
engine = TQCEOrchestrator("My Problem")
net = engine.build_network()

net.add_node(CausalNode("A", time_coordinate=0.0, state_dim=4))
net.add_node(CausalNode("B", time_coordinate=1.0, state_dim=4))
net.add_node(CausalNode("C", time_coordinate=2.0, state_dim=4))

net.add_causal_edge("A", "B", weight=0.8)
net.add_causal_edge("B", "C", weight=0.6)
net.add_retrocausal_edge("C", "A", weight=0.4)  # backward in time

# Solve for a self-consistent timeline
results = engine.solve(verbose=True)

# Visualize
plot_ctn_graph(net)
plot_convergence(results["fixed_point"]["iteration_history"])`;

    return (
        <section id="docs" className="docs-section">
            <div className="section-header">
                <h2 className="section-title">Documentation & Examples</h2>
                <p className="section-subtitle">
                    Comprehensive guides for integrating temporal logic into your processing pipelines.
                </p>
            </div>

            <div id="quickstart" className="docs-grid mb-12">
                <div className="docs-content glass-panel">
                    <Book className="docs-icon" size={32} />
                    <h2>Quick Start Setup</h2>
                    <p>Initialize your first Temporal Quantum Causal Engine with just a few lines of code.</p>
                    <ul className="docs-list">
                        <li><strong>Nodes:</strong> Define <code>CausalNode</code>s across different time coordinates.</li>
                        <li><strong>Edges:</strong> Use <code>add_causal_edge</code> for standard flow, and <code>add_retrocausal_edge</code> to close loops backward in time.</li>
                        <li><strong>Solve:</strong> Invoke the orchestrator's solver.</li>
                    </ul>

                    <div className="action-row mt-6">
                        <a href="https://github.com/utachicodes/tqce/blob/main/docs/examples.md" className="button-secondary">View Full Docs</a>
                    </div>
                </div>

                <div className="docs-code glass-panel no-padding syntax-wrapper">
                    <div className="code-header">
                        <div className="mac-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span className="filename">examples/quick_start.py</span>
                        <PlayCircle size={16} className="play-icon" />
                    </div>
                    <pre>
                        <code className="language-python">{codeSnippet}</code>
                    </pre>
                </div>
            </div>

            <DocumentationGrid />
        </section>
    );
}
