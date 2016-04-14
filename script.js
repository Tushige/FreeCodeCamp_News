$(document).ready(function() {
  $.getJSON("https://www.freecodecamp.com/news/hot", function(json) {
    //json is array of 100 objects
    var entries = document.querySelector(".entries");
    var html = "";
    json.forEach(function(obj) {
      html='<div class="col-xs-3">';
      html+="<div class='entry'>";
      //user image
      html+='<img class="img-responsive" src="'+ obj.author.picture + 'alt="">';
      //entry description
      html+="<a class='entry_description'" + "href='" + obj.link +"'>"+ obj.headline +"</a>";
      //username display
      html+="<a class='user' href='http://www.freecodecamp.com/" + obj.author.username +  "'>" + "-by "+ obj.author.username +"</a>";
      //upVote display
      html+="<h4 class='rank'><i class='fa fa-thumbs-o-up'></i> "+obj.rank +"</h4>"
      //date posted
      var posted = new Date(obj.timePosted);
      html+="<h4 class='date'>On: " + posted.toDateString() + "</h4>";
      html+="</div>";
      html+="</div>";
      entries.innerHTML+=html;
    });
  });
});
