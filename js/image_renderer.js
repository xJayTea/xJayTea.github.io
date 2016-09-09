
(function(){
  var showFullScreenImage = function(imgSrc) {
    $("#appOverlay").removeClass("hide")
    $("#imageLightbox").removeClass("hide")

    $("#imageLightbox #fullsizeImage")[0].src = imgSrc
  }

  var hideFullScreenImage = function() {
    $("#appOverlay").addClass("hide")
    $("#imageLightbox").addClass("hide")
  }

  _.each(imagesList, function(imagePath, index){
    $("#appContent").append("<img id=\"image"+index+"\""+"src=\""+imagePath+"\"/>")

    $('body').on('click', "#image"+index, function(){
      showFullScreenImage(imagePath)
    })
  })

  $("#appOverlay, #imageLightbox").click(function(){
    console.log("fuck")
  })

})();