 var token;

 $(document).ready(function(){

  // $.ajax({
  //   url : 'http://api.kvikmyndir.is/movies?',
  //   type : 'GET',
  //   headers: { 
  //       "x-access-token" : token
  //   },
  //   dataType : 'json',
  //   success : function (response) {
  //       console.log(response);
  //   }
  // });
  //$('.video').coverVid(1280,720);

  // var getToken = $.ajax({
  //   url : 'http://api.kvikmyndir.is/authenticate',
  //   type : 'POST', 
  //   data : {
  //       username : "oli",
  //       password : "123456"
  //   },
  //   dataType : 'json',
  //   success : function (response) {
  //       console.log(response)
  //   }
  // }); 

  class apiTheMoviedb {
    constructor() {
      this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGEyMzI5YWQxM2U2YmQ4NzJlZjZkZjQiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikhqw7ZyZMOtcyBFc3RlciBHdcOwasOzbnNkw7N0dGlyIiwiZW1haWwiOiJoam9yZGlzLmVzdGVyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaGpvcmRpc2VzdGVyIiwicGFzc3dvcmQiOiIkMmEkMDgkTVptODJMSEh2SkJvZy5KRkwwU3oyLjl3cHlDSFRIWURna0tVNUhZS0dCRVBWejJ2WHlQQnEiLCJkb21haW4iOiJ2ZWZza8OzbGlubiIsIm1lc3NhZ2UiOiJTa8OzbGF2ZXJrZWZuaSIsImlhdCI6MTQ4NzE4Nzg4MiwiZXhwIjoxNDg3Mjc0MjgyfQ.CsZ3ZFjAlP-k6yMZD_LDUSoHg_zGswk3cRyEVVXNX7A"
    }

    apik(url) {
      const request = new XMLHttpRequest();
      request.open('GET',"https://api.themoviedb.org/3/movie/550?api_key=93e810199af17af2ed9f9b206f27bffe", true);
      request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) return;
        const response = JSON.parse(request.responseText)    
      }
    }

    getAllMovies(responseCallBack) {
      return $.ajax({
        url : 'http://api.kvikmyndir.is/movies',
        type : 'GET',
        headers: { 
          'x-access-token' : this.token
        },
        dataType : 'json',
        success : responseCallBack,
        error: function (error) {
          console.log(error);
        }  
      });
    }

    getMovie(title, responseCallBack) {    
      var apiCall = $.ajax({
        url : 'http://api.kvikmyndir.is/movies?title=' + title,
        type : 'GET',
        headers: { 
          'x-access-token' : this.token
      },
      dataType : 'json',
      success : responseCallBack,
      error: function (error) {
        console.log(error);
      }  
      });
    }
  }


var apiClient = new apiTheMoviedb();

// get all movies
apiClient.getAllMovies(function(response) {
  // bua til einhverja breytu og vista response i theirri breytu
  console.log(response)
});

apiClient.getMovie("xxx", function(response) {
  // store in movie
  console.log(response)
})


//request.send("banana=yellow");

  /* const banner = document.getElementByID("banner")
        const moviepic = document.getElementByID("moviepic")





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
r.send("banana=yellow");*/
});





