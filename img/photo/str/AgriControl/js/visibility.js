
$(document).ready(function(){
  $('.anim-text').viewportChecker({
    classToAdd: 'target animated tdFadeInDown delay',
    classToRemove : 'invisible',
    offset: 10,
    repeat: false,
    callbackFunction: function(elem, action){}
  });
});

$(document).ready(function(){
  $('.amin-button').viewportChecker({
    classToAdd: 'target animated tdPlopIn delay',
    offset: 10,
    repeat: false,
    callbackFunction: function(elem, action){}
  });
});

$(document).ready(function(){
  $('.anim-cards').viewportChecker({
    classToAdd: 'target animated tdStampIn delay',
    offset: 10,
    repeat: false,
    callbackFunction: function(elem, action){}
  });
});

$(document).ready(function(){
  $('.anim-img').viewportChecker({
    classToAdd: 'target animated tdExpandInBounce delay',
    offset: 10,
    repeat: false,
    callbackFunction: function(elem, action){}
  });
});
