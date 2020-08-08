(function(){
  'use strict'
  angular.module('MenuApp')
  .component('myCategories',{
    templateUrl:'categories.template.html',
    bindings:{
      categories:'<'
    },
    controller:sl
  })

  function sl()
  {
    var list = this;
    list.$onInit = function()
    {
      console.log('we re here')
    }
  }
})();
