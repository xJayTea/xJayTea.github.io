
(function(){

  _.each(imagesList, function(imagePath, index){
    $("#appContent").append("<img id=\"image"+index+"\""+"src=\""+imagePath+"\"/>")
    debugger

    $('body').on('click', "#image"+index, function(){
      console.log("fuck")
    })
  })

})();