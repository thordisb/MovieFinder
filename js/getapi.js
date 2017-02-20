 var token;

 $(document).ready(function(){

class apikvik{
  constructor(){
    this.token= "93e810199af17af2ed9f9b206f27bffe"
  }

    getAllMovies(responseCallBack) {

      var request = new XMLHttpRequest();
      request.open('GET',"https://api.themoviedb.org/3/movie/550?api_key=93e810199af17af2ed9f9b206f27bffe", true);
      request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) return;
        const response = JSON.parse(request.responseText)    
      }
    }
  }
  //$('.video').coverVid(1280,720);

    /* var getToken = $.ajax({
     url : 'http://api.kvikmyndir.is/authenticate',
     type : 'POST', 
     data : {
         username : "oli",
         password : "123456"
     },
     dataType : 'json',
     success : function (response) {
         console.log(response)
     }
   }); */

  class apiTheMoviedb {
    constructor() {
      this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGE0YjhiN2QxM2U2YmQ4NzJlZjZlNDAiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IsOTbGFmdXIgRGHDsGkgSsOzbnNzb24iLCJlbWFpbCI6Im9sYWZ1cjEyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoib2xpIiwicGFzc3dvcmQiOiIkMmEkMDgkRkhRZGJCcTk4ZjJGMXhSRlZQdEw0TzJjdGZmeklyL3hGSkFsTXFoV05HLm5YVFlBdXRWWGUiLCJkb21haW4iOiJIb21lIiwibWVzc2FnZSI6InNjaG9vbCBwcm9qZWN0IiwiaWF0IjoxNDg3MzMwNzczLCJleHAiOjE0ODc0MTcxNzN9.sSk9_6rmGwfGQk2-YohgtX-kb1oECQSd_Rp1Z19ZBWU"
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

       getAllGenres(responseCallBack) {
      return $.ajax({
        url : 'http://api.kvikmyndir.is/genres',
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

   getImage(title, responseCallBack) {    
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
apiClient.getAllGenres(function(response){
  console.log(response)
});

apiClient.getMovie("xxx", function(response) {
  // store in movie
  this.mynd = $("moviepic");
  this.mynd.src = movies.omdb.poster;
  console.log(response)
});


//request.send("banana=yellow");

 





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




