var key = "gp9ZIIUpPzaatGjPYFCTwNtzwrpAOyAB";
var searchTerm = "election";
var url =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm +
  "&api-key=" +
  key;

$.ajax({
  url: url,
  method: "GET",
}).then(function (response) {
  var result = response.data;
  console.log(resonse);
  console.log(result);
});
