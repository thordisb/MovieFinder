/*var sliderA = new Slider("#ex12a", { id: "slider12a", min: 0, max: 10, value: 5 });
var sliderB = new Slider("#ex12b", { id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] });
var sliderC = new Slider("#ex12c", { id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });*/
$(document).ready(function(){

  $(document).foundation({
     start: 0
    end: 100
    step:  1
    initial: 1
    vertical:  true
    display_selector:  '#sliderOutput'
  });
});

 

/* var apiClient = new apiTheMoviedb()
apiClient.getMovie("The Revenant")
apiClient.getAllMovies()*/

/*til að fá element með id = 'mittId' myndiru gera:

var myElement = $("mittId")
til að fá element með class = 'minnClass' myndiru gera:

var myElement = $(".minnClass")*/