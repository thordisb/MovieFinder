var sliderA = new Slider("#ex12a", { id: "slider12a", min: 0, max: 10, value: 5 });
var sliderB = new Slider("#ex12b", { id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] });
var sliderC = new Slider("#ex12c", { id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });


var apiClient = new apiTheMoviedb()
apiClient.getMovie("The Revenant")
apiClient.getAllMovies()