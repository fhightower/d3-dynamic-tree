var DYNAMICTREE = DYNAMICTREE || {};

DYNAMICTREE.treeJson = {};

DYNAMICTREE.getInitialJson = function() {
    /* . */
    var initialJson = {
        "name": "A",
        "children": [{
            "name": "B",
        },
        {
            "name": "C",
        },
        {
            "name": "D",
        }],
        "type": "Incident"
    };

    DYNAMICTREE.treeJson = initialJson;
};

DYNAMICTREE.getAssociatedItems = function(node) {
    // for each child of the node that was clicked, get associations and add them appropriately to the JSON
    return [{
        name: "E",
    }, {
        name: "F",
    }];
};

DYNAMICTREE.updateJson = function(node) {
    /* Update the JSON to show new children nodes. */
    console.log("node id", node.id);

    if (node._children) {
        node._children.forEach(function(childNode) {
            var associatedItems = DYNAMICTREE.getAssociatedItems(childNode);
            childNode._children = associatedItems;
        });
    } else {}

    if (node.children) {
        node._children = node.children;
        node.children = null;
    } else {
        node.children = node._children;
        node._children = null;
    }

    D3UTILITY.update(node);
};
