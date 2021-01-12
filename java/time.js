function dateUpdated(){
    var output = new Date(document.lastModified);
  
document.getElementById("outputData").innerHTML = output;
}