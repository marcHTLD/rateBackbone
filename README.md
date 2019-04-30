# rateBackbone

Modular aufgebaut --> views

In das HTML Dokument des Projekts --> JS-Files einbinden
Ein JS-File bei mehreren View unübersichtlich --> mehrere JS-Files

<script src="./jquery.js"></script>
    <script src="./json2.js"></script>
    <script src="./underscore.js"></script>
    <script src="./backbone.js"></script>
    <script src="./backbone.localStorage.js"></script>
    <script src="./eigen.js"></script>

View-Aufbau:

var AppView = Backbone.View.extend({
    // el - stands for element. Every view has a element associate in with HTML
    //      content will be rendered.
    el: '#comment',
    // It's the first function called when this view it's instantiated.
    initialize: function() {
      this.render();
    },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions
    //       to push content. Like the Hello World in this case.
    render: function(){
      var html = '<p></p>';
      this.$el.html(html);
    }
  });

  var appView = new AppView();

events:

events: {
      'click button#submit' : 'saveComment'
    },


•	On
•	Off
•	Trigger
•	Once
•	listenTo …

Schnell eingebunden ohne Framework zu erlernen --> nicht geeignet für Dashboards
