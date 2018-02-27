var rootNode = document.getElementById("root");

// Your code goes here
var tree = document.createElement("ul");
var item_type = "folder";

/**
 * Generate tree functions
 *
 * @param structure
 * @param _element
 */
function generate_tree(structure, _element = null) {

    /**
     * Start each element of structure
     */
    for(var item in structure) {

        /**
         * We check whether the array element is there obj
         */
        if (structure.hasOwnProperty(item) && typeof structure[item] === "object") {

            /**
             * Create a new html element for append to
             */
            var el_li = document.createElement("li"),
                el_div = document.createElement("div"),
                el_i = document.createElement("i");

            el_div.setAttribute("class", "list_item");
            el_i.setAttribute("class", "material-icons");

            if (structure[item].hasOwnProperty("folder")) {
                item_type = "folder";
            } else {
                item_type = "insert_drive_file";
                el_i.className += " is_file";
                el_li.setAttribute("class", "is_file");
            }

            /**
             * Set the type element and title
             */
            el_i.appendChild(document.createTextNode(item_type));
            el_div.appendChild(el_i);
            el_div.appendChild(document.createTextNode(structure[item].title));
            el_li.appendChild(el_div);

            /**
             * If there are subfolders
             */
            if (structure[item].hasOwnProperty("children") && structure[item].children) {
                generate_tree(structure[item].children, el_li);
            } else {
                el_li.appendChild(el_div);
            }

            if (_element) {
                var ul = document.createElement("ul");
                ul.appendChild(el_li);
                _element.appendChild(ul);
            } else {
                tree.appendChild(el_li);
            }
        }
    }
}

/**
 * Start generate tree
 */
generate_tree(structure);

/**
 * Passage through all parent elements
 *
 * @type {NodeListOf<ElementTagNameMap["li"]>}
 * @private
 */
var _el = tree.querySelectorAll("li");

for(var i=0; i<_el.length; i++) {

    /**
     * Add an event to each item
     */
    _el[i].addEventListener("click", function (event) {

        /**
         * Spot props
         */
        event.stopPropagation();

        if(this.className === "is_file" || event.target.className === "empty_data") return false;

        /**
         * If is is not file
         * @type {Element}
         */
        var el = this.getElementsByClassName("material-icons")[0];
        if(el.className.indexOf("is_file") < 0) {
          if(el.innerHTML === "folder_open") {
            el.innerHTML = "folder"
          } else {
            el.innerHTML = "folder_open";
          }
        }

        /**
         * If is a child element
         */
        if(this.getElementsByTagName("ul").length) {

            if(!new RegExp('(\\s|^)is_open(\\s|$)').test(this.className)) {
                this.className += "is_open ";
            } else {
                this.className = this.className.replace(/is_open/gi, "").trim();
            }
        } else {

            /**
             * If the director is empty then
             */
            if(!this.getElementsByClassName("empty_data")[0]) {

                var empty = document.createElement("span");

                empty.innerHTML = "Folder is empty";
                empty.className = "empty_data";
                this.appendChild(empty);

            } else {

                var empty = this.getElementsByTagName("span")[0];

                if(empty.style.display === "none") {
                    empty.style.display = "block";
                } else {
                    empty.style.display = "none";
                }
            }
        }
    });
}

rootNode.appendChild(tree);
