function loadPage(){
  $('.option').click(changePage);
}

function changePage() {
  var $option = event.target.id;
  console.log($option);
  if($option === "articles"){
    window.location = "../views/article.html";
  } else if ($option === "reviews") {
    window.location = "../views/reviews.html";
  } else if ($option === "logo") {
    window.location = "../index.html";
  }
}

$(document).ready(loadPage);
