import { Terminal, Info } from 'lucide-react';

const docItems = [
    {
        id: 'ctn-docs',
        title: 'Causal Tensor Networks',
        description: 'CTNs are the bedrock of TQCE. They allow for the definition of computation as a network of nodes where edges can represent standard causal flow or retrocausal feedback.',
        code: `from tqce import CausalNode, CTN
net = CTN()
net.add_node(CausalNode("Input", time=0))
net.add_node(CausalNode("Loop", time=1))
net.add_edge("Input", "Loop")
net.add_retrocausal_edge("Loop", "Input", weight=0.5)`
    },
    {
        id: 'ppgd-docs',
        title: 'Paradox Pressure Optimizer',
        description: 'PPGD treats causal inconsistency as a "pressure" that needs to be minimized. It is particularly effective for systems with high circular complexity.',
        code: `orchestrator.set_optimizer("ppgd")
orchestrator.solve(
    max_iterations=100, 
    convergence_threshold=1e-6
)`
    }
];

export function DocumentationGrid() {
    return (
        <div className="documentation-grid-container">
            {docItems.map((item) => (
                <div key={item.id} className="doc-item-row mt-12 grid-docs">
                    <div className="doc-info glass-panel">
                        <div className="flex-row-center mb-4">
                            <Info size={24} className="text-primary-color mr-2" />
                            <h3 className="card-title m-0">{item.title}</h3>
                        </div>
                        <p className="card-desc">{item.description}</p>
                        <div className="doc-tags mt-4">
                            <span className="tag">API Reference</span>
                            <span className="tag">Stable</span>
                        </div>
                    </div>
                    <div className="doc-code-preview glass-panel no-padding">
                        <div className="code-header">
                            <Terminal size={14} />
                            <span className="filename">examples/{item.id}.py</span>
                        </div>
                        <pre className="m-0">
                            <code className="language-python">{item.code}</code>
                        </pre>
                    </div>
                </div>
            ))}
        </div>
    );
}
