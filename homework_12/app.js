// Your code goes here
var nodeRoot = document.getElementById("root");
var content = false;

function generateContent(hash) {

  var h1 = document.createElement("h1");

  content = document.createElement("div");
  content.appendChild(h1);

  hash = hash.replace(/^#/, '');

  if(!hash) {

    content.className += " thumbnails";
    h1.className += " title";
    h1.appendChild(document.createTextNode("Most popular tanks"));

    for(var obj in tanks) {

      var thumbnail = document.createElement("div");
      var tank_image = document.createElement("IMG");
      var country_image = document.createElement("IMG");
      var tank_title = document.createElement("div");
      var level = document.createElement("span");
      var tank_name = document.createElement("span");

      thumbnail.className += " thumbnail";
      thumbnail.title = "Click to details";

      tank_image.src = tanks[obj].preview;
      tank_image.className = " preview";

      thumbnail.appendChild(tank_image);
      content.appendChild(thumbnail);

      tank_title.className += " tank-title";

      country_image.src = tanks[obj].country_image;
      country_image.className = " country_image";
      country_image.title = tanks[obj].country;

      tank_title.appendChild(country_image);
      thumbnail.appendChild(tank_title);

      level.className += " level";
      level.appendChild(document.createTextNode(tanks[obj].level))
      tank_title.appendChild(level);

      tank_name.className += " tank_name";
      tank_name.appendChild(document.createTextNode(tanks[obj].model))
      tank_title.appendChild(tank_name);

      thumbnail.onclick = (function(n) {
          return function() {
              window.location.hash = n.toLowerCase();
          }
      })(tanks[obj].model);
    }

  } else {

    var country_image = document.createElement("IMG");
    var detail_preview = document.createElement("div");
    var title = document.createElement("div");
    var img_preview = document.createElement("IMG");
    var back = document.createElement("a");
    var detail_statistic = document.createElement("div");
    var table_title = document.createElement("div");
    var table = document.createElement("table");

    content.className += " tank-details";
    detail_preview.className += " detail-preview";

    title.className += "title";
    title.appendChild(document.createTextNode("Preview"));

    img_preview.className += "preview";

    back.id += "back";
    back.appendChild(document.createTextNode("Back to list view"));
    back.href = "#";
    back.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.hash = "";
    });

    for(var obj in tanks) {
      if(tanks[obj].model.toLowerCase() === hash) {
          country_image.src = tanks[obj].country_image;
          country_image.title = tanks[obj].country;

          h1.appendChild(country_image);
          h1.appendChild(document.createTextNode(tanks[obj].model.toUpperCase() + ' (level ' + tanks[obj].level + ')'));

          img_preview.src = tanks[obj].preview;
          img_preview.title = tanks[obj].country;

          detail_preview.appendChild(title);

          detail_preview.appendChild(img_preview);
          detail_preview.appendChild(back);

          content.appendChild(detail_preview);

          detail_statistic.className += " detail-statistic";
          table_title.appendChild(document.createTextNode('Characteristic'));
          table_title.className += "title";
          detail_statistic.appendChild(table_title);

          for(var j in tanks[obj].details) {

              var tr = document.createElement('tr');
              var td1 = document.createElement('td');
              var td2 = document.createElement('td');

              td1.appendChild(document.createTextNode(j));
              td2.appendChild(document.createTextNode(tanks[obj].details[j]));

              tr.appendChild(td1);
              tr.appendChild(td2);

              table.appendChild(tr);
          }

          detail_statistic.appendChild(table);
          content.appendChild(detail_statistic);

          //End loop
          break;
      }
    }
  }

  //Clear last data in root child
  while (nodeRoot.firstChild) {
    nodeRoot.removeChild(nodeRoot.firstChild);
  }

  //Add render content
  nodeRoot.appendChild(content);

};

//Init the content
generateContent(window.location.hash);

//Tracking changes a tank
window.onhashchange = function() {
   generateContent(window.location.hash);
};
