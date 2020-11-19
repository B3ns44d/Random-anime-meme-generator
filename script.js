
// url Async requesting function
function httpGetAsync(theUrl, callback)
{
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}

// callback for the random search
function tenorCallback_randomsearch(responsetext)
{
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

    var img = document.createElement('img'); // create an img element 
    var div = document.getElementById('memes'); // get the "mems" elment from HTML div tag
    img.alt = ''; // add img alt
    img.id = 'bIMG'
    img.src = top_10_gifs[0]["media"][0]["tinygif"]["url"]; // add img src 
    div.appendChild(img); // append the img to the div HTML
    
    // find img center 
    // var rect1 = img.getBoundingClientRect();
    // var cx = rect1.left + rect1.width * 0.5;    // find center of first image
    // var cy = rect1.top + rect1.height * 0.5;
    // var x = cx - rect1.width * 0.5;            // use center of first, subtract second
    // var y = cy - rect1.height * 0.5;

    // create download link
    // var getleft = document.getElementById('bIMG').offsetLeft;
    // var gettop = document.getElementById('bIMG').offsetTop;
    // console.log(getleft, gettop);
    // console.log("left:" + x, "top:" + y)
    // var p = document.createElement('div');
    // p.className = 'text'
    // // p.style.cssText = "position:fixed;left:" + x + "px; top:" + y + "px";
    // p.href = top_10_gifs[0]["media"][0]["tinygif"]["url"];
    // p.textContent = 'Download';
    // p.style.cssText = "position: element(#bIMG);";
    // div.appendChild(p);
    return;

}


function grab_data() // function to request random gifs for a given search term
{
    // set the apikey and limit
    var apikey = "GOGLGNV96Y1S"; // this is my apikey you can work with it if you want :)
    var lmt = 8;

    var search_term = "anime meme"; // search term

    var search_url = "https://api.tenor.com/v1/random?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;  // using default locale of en_US

    httpGetAsync(search_url,tenorCallback_randomsearch);
   
    return;  // data will be loaded by each call's callback
}
// Add more code to develop this website 