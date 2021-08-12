document.querySelectorAll("a")[5].addEventListener("click", increaseCount);
var click_count = 0;

function increaseCount(){
    click_count += 1;
    var download_string = "Downloads: " + click_count;
   document.getElementById("download-count").innerHTML = download_string;
}

