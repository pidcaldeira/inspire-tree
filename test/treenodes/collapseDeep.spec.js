'use strict';

describe('TreeNodes.prototype.collapseDeep', function() {
    var tree;

    before(function() {
        helpers.createTreeContainer();

        // Create tree
        tree = new InspireTree({
            target: $('.tree'),
            data: [{
                text: 'A',
                children: [{
                    text: 'B',
                    id: 2,
                    children: [{
                        text: 'C'
                    }]
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().collapseDeep).to.be.a('function');
        expect(tree.collapseDeep).to.be.a('function');
    });

    it('collapses all nodes', function() {
        var node = tree.node(2);
        node.expand();
        expect(node.expanded()).to.be.true;

        tree.collapseDeep();
        expect(node.expanded()).to.be.false;
    });

    after(helpers.clearDOM);
});
