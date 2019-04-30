$(function(){

  var name;
  var location;
  var comment;
  var rating;

  var comments = [];

  var InputView = Backbone.View.extend({
    el: '#value',


    events: {
      'click button#submit' : 'saveComment'
    },

    saveComment : function(){
      name = $(this.el).find('input#name').val();
      location = $(this.el).find('input#location').val();
      comment = $(this.el).find('textarea#comment-text').val();
      if(document.getElementById('radio1').checked){
        rating = 5;
      }
      else if(document.getElementById('radio2').checked){
        rating = 4;
      }
      else if(document.getElementById('radio3').checked){
        rating = 3;
      }
      else if(document.getElementById('radio4').checked){
        rating = 2;
      }
      else if(document.getElementById('radio5').checked){
        rating = 1;
      }
      comments.push({Name: name, Location: location, Rating: rating, Comment: comment});
      appView.render();
      $("input").val('');
      $("textarea").val('');
      $( "#radio1" ).prop( "checked", false );
      $( "#radio2" ).prop( "checked", false );
      $( "#radio3" ).prop( "checked", false );
      $( "#radio4" ).prop( "checked", false );
      $( "#radio5" ).prop( "checked", false );
    },
  });  
  var inputView = new InputView();

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
      for(var i=0; i <comments.length; i++){
        if(comments[i].Rating == 5){
          var ratings = 'star star star star star';
        }
        else if(comments[i].Rating == 4){
          var ratings = 'star star star star star_border';
        }
        else if(comments[i].Rating == 3){
          var ratings = 'star star star star_border star_border';
        }
        else if(comments[i].Rating == 2){
          var ratings = 'star star star_border star_border star_border';
        }
        else if(comments[i].Rating == 1){
          var ratings = 'star star_border star_border star_border star_border';
        }
        html = html + '<div><h4>' + comments[i].Name + '</h4>' +
              '<h5>' + comments[i].Location + '</h5>' +
              '<span class="material-icons align-middle">' + ratings + '</span>' +
              '<p>' + comments[i].Comment + '</p>';
      }
      this.$el.html(html);
    }
  });

  var appView = new AppView();
  

});