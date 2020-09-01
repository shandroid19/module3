(function () {
"use strict";

angular.module('public')
.controller('signcontroller',signcontroller);

signcontroller.$inject = ['MenuService'];
function signcontroller(MenuService) {
  var $ctrl = this;

  $ctrl.submit = function(){

  MenuService.getMenuItemByShortName($ctrl.no)
  .then(()=>{
    $ctrl.saved=true;
    console.log('yess')
    $ctrl.invalidish=false;
    MenuService.submit($ctrl.firstname,$ctrl.lastname,$ctrl.email,$ctrl.phone,$ctrl.no)
  })
  .catch(function(err)
  {
    console.log('yikes');
    $ctrl.saved=false;
    $ctrl.invalidish=true;
  })

}
}


})();
