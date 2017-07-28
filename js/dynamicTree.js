// D3 Collapsible Tree with ability to dynamically add content.
// Copyright (C) 2017  Floyd Hightower

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

var DYNAMICTREE = DYNAMICTREE || {};

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

// initialize the json for the tree
DYNAMICTREE.treeJson = initialJson;

DYNAMICTREE.getNewData = function(node) {
    /* Return a list of things that will be added as children to the json. */
    return [{
        name: "E",
    }, {
        name: "F",
    }];
};

DYNAMICTREE.updateJson = function(node) {
    /* Update the JSON to show new children nodes. */
    console.log("node id", node.id);

    // Here is handy guide to how d3 works and how this code operates:
    // `._children`: this represents the *invisible* children of a node
    // `.children`: this represents the *visible* children of a node

    // if the child has children that are not currently visible, add children to each of the currently invisible nodes
    if (node._children) {
        node._children.forEach(function(childNode) {
            var associatedItems = DYNAMICTREE.getNewData(childNode);
            childNode._children = associatedItems;
        });
    }

    // if the node has visible children, make them invisible 
    if (node.children) {
        node._children = node.children;
        node.children = null;
    }
    // if the node has invisible children, make them visible
    else {
        node.children = node._children;
        node._children = null;
    }

    // update the view to reflect the new changes
    D3UTILITY.update(node);
};
