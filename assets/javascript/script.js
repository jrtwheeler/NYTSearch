var key = "gp9ZIIUpPzaatGjPYFCTwNtzwrpAOyAB";
var searchTerm = $("#searchTerm");
var recordTerm = $("#recordTerm");
var startYear = $("#startYear");
var endYear = $("#endYear");
var searchReturn = $("#search-results");
var searchTermOutput;

//Gather the values of the user input
//return them so they are part of the url query
//on click, run the search using the term's we gathered
$(".search").on("click", function () {
  saveLocal("mySearch", searchTerm.val());
  var searchTermOutput = getLocal("mySearch");

  saveLocal("myrecord", recordTerm.val());
  var recordTermOutput = getLocal("myrecord");

  saveLocal("startYear", startYear.val());
  var startYearOutput = getLocal("startYear");

  saveLocal("endYear", endYear.val());
  var endYearOutput = getLocal("endYear");

  var url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTermOutput +
    "&begin_date-" +
    startYearOutput +
    "&api-key=" +
    key;

  $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    //Return the results in an object
    var result = response.response;
    //traverse the object
    
    //searchTerm
    searchTerm.val();
    //create containers for the returned search results
    for (var i = 0; i < result.docs.length; i++) {
      console.log(result.docs[i].headline.main);
      var searchResultDiv = $("<div>");
      searchResultDiv.addClass("col-12 card mt-3 mb-5");
      searchResultDiv.text(JSON.stringify(result.docs[i].headline.main));
      searchReturn.append(searchResultDiv);
    }
  });
  // }

  function saveLocal(key, search) {
    localStorage.setItem(key, JSON.stringify(search));
  }

  function getLocal(key) {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
});
