


// api key azbw39njDanGnu9XLkrLJhkECsczTJsdwFTWMAFQ
const url = "https://api.nasa.gov/planetary/apod?api_key=azbw39njDanGnu9XLkrLJhkECsczTJsdwFTWMAFQ";


fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let theTitle = "";
    theTitle += '<h3>' + json.title + '</h3>'
    let apod = "";
    apod += '<img src="' + json.url + '"/>'
    let description = "";
    description += '<p>' + json.explanation + '</p>'
    document.getElementById("APODtitle").innerHTML = theTitle;
    document.getElementById("APOD").innerHTML = apod;
    document.getElementById("APODdescription").innerHTML = description;


  });
