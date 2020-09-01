(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItemByShortName = function (shortName) {
    if (shortName) {
      return $http.get(ApiPath + "/menu_items/" + shortName.toUpperCase() + ".json").then(function (response) {
        return response.data;
      })
      // .catch(function(){console.log(false);return false;});
    }
  }

  // service.getdish = function(shortName)
  // {
  //
  //     var promise  = $http({
  //       method: 'GET',
  //       url:(ApiPath+"/menu_items/"+ shortName.toUpperCase()+".json")
  //     }).then((response)=>{
  //       return response.data
  //       console.log(response.data)
  //     })
  //
  //     return res;
  //
  //   };

  service.submit = function(firstname,lastname,email,phone,short_name){
    service.var = short_name;
  user = {
    firstname:firstname,
    lastname:lastname,
    email:email,
    phone:phone
  };
}
service.getinfo = function()
{
  return user;
}


}

}



)();
