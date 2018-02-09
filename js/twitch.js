$.ajax({
url: "https://api.twitch.tv/kraken/videos/top?period=month",
headers: {"client-id": "nly7mmdkcrxs6idrs5icadrnpmqsw2"}
// context: document.body
}).done(function(games) {
// $( this ).addClass( "done" );
console.log(games);



$(document).ready(function() {
  var videos= games['videos'];
  console.log(videos);
  for (var i = 0; i < videos.length; i++) {
  var title = videos[i].title;
  var url = videos[i].url;
  var img= videos[i].preview;
  console.log(img);

  var $row = $("<div />").addClass("row");
  var $namev = $("<h5 />").addClass("center-align flow-text col s12 m4 l4");
  var $urlVideo = $("<a />");
  var $image = $("<img />").addClass("col s12 m4 l4 center-align responsive-img");

  $urlVideo.prop("href",url);
  $image.prop("src",img)
  $namev.text(title);

  $row.append($namev);
  $row.append($urlVideo);
  $urlVideo.append($image);

  $("#videos").append($row);


}
  });

});
