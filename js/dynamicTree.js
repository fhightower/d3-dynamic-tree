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
