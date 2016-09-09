var imagesList = ["images/I1gRYgQ.jpg", "images/K16oWD5.jpg", "images/NZcVB3d.jpg", "images/RD7tkqD.jpg", "images/RMtiYl3.jpg", "images/S4tq4h0.jpg", "images/U5NDeJY.jpg", "images/do8VZNW.jpg", "images/sTKuKPi.jpg", "images/umgUuOV.jpg", "images/vUfj2kC.jpg"];
(function(){
  var showFullScreenImage = function(imgSrc) {
    $("#appOverlay").addClass("show")
    $("#imageLightbox").removeClass("hide")

    $("#imageLightbox #fullsizeImage")[0].src = imgSrc
  }

  var hideFullScreenImage = function() {
    $("#appOverlay").removeClass("show")
    $("#imageLightbox").addClass("hide")
  }

  _.each(imagesList, function(imagePath, index){
    $("#appContent").append("<img id=\"image"+index+"\""+"src=\""+imagePath+"\"/>")

    $('body').on('click', "#image"+index, function(){
      showFullScreenImage(imagePath)
    })
  })

  $("#appOverlay, #imageLightbox").click(function(){
    hideFullScreenImage()
  })

})();