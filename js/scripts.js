$(document).ready(function(){
  $('superslider').slick({
    infinite: true,
    dots: true,
    arrows: true
  })

  var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGEyMzI5YWQxM2U2YmQ4NzJlZjZkZjQiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikhqw7ZyZMOtcyBFc3RlciBHdcOwasOzbnNkw7N0dGlyIiwiZW1haWwiOiJoam9yZGlzLmVzdGVyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaGpvcmRpc2VzdGVyIiwicGFzc3dvcmQiOiIkMmEkMDgkTVptODJMSEh2SkJvZy5KRkwwU3oyLjl3cHlDSFRIWURna0tVNUhZS0dCRVBWejJ2WHlQQnEiLCJkb21haW4iOiJ2ZWZza8OzbGlubiIsIm1lc3NhZ2UiOiJTa8OzbGF2ZXJrZWZuaSIsImlhdCI6MTQ4NzAyNjQxMiwiZXhwIjoxNDg3MTEyODEyfQ.m2KZblJ24Ja3_rx7XlwvWEsX2ysxxrUD57wAVDwNQPg"
  
  $.ajax({
    url : 'http://api.kvikmyndir.is/movies?',
    type : 'GET',
    headers: { 
        "x-access-token" : token
    },
    dataType : 'json',
    success : function (response) {
        console.log(response);
    }
});

  //$('.video').coverVid(1280,720);

  /*$.ajax({
    url : 'http://api.kvikmyndir.is/authenticate',
    type : 'POST', 
    data : {
        username : "oli",
        password : "123456"
    },
    dataType : 'json',
    success : function (response) {
        console.log(response);
    }
  }); */

  var r = new XMLHttpRequest();
r.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=93e810199af17af2ed9f9b206f27bffe", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  const response = JSON.parse(r.responseText)
  const container = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h1");
  image.src = "http://image.tmdb.org/t/p/original" + response.backdrop_path
  title.innerHTML = response.original_title;
  container.append(image);
  container.append(title);
  document.body.append(container);

};
r.send("banana=yellow");
});

/*----------------------------------------slickslider------------------------*/

$(document).on('ready', function() {
$('.center').slick({
  initialSlide: 1,
 arrows: false,
 centerMode: true,
 dots: false,
 infinite: false,
 speed: 300,
 slidesToShow: 3,
 
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       infinite: false,
       dots: false
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 1,
       infinite: false,
      
     }
   }
 
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});
});
    






