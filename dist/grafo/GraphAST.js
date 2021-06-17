"use strict";
class GraphAST {
    constructor(tree) {
        this.tree = tree;
    }
    getGrafo() {
        let graph = "digraph {\n";
        graph += "nodo0[label=\"CST\"];\n";
        var g = new GraphValue(1, graph);
        this.tree.generarGrafo(g, "nodo0");
        let gph = g.getGraph() + "\n}";
        return gph;
    }
}
