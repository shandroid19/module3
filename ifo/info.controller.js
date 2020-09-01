(function () {
"use strict";

angular.module('public')
.controller('infocontroller',infocontroller);

infocontroller.$inject = ['item','MenuService','ApiPath'];
function infocontroller(item,MenuService,ApiPath) {
  var $ctrl = this;
  $ctrl.valid = false
  // $ctrl.favdish = MenuService.getdish($ctrl.no)
  $ctrl.user = MenuService.getinfo();
  $ctrl.dish = item;
if(item!==undefined)
{
    console.log(item)
    $ctrl.source = ApiPath + "/images/"+ item.short_name+".jpg"
}
else {
  $ctrl.source=false
}

  if($ctrl.user!==undefined)
  {
    $ctrl.valid = true;
  }
}

})();
