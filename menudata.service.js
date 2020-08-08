(function()
{
  'use strict'
  angular.module('data')
  .service('MenuDataService' ,MenuDataService)
  .controller('slc',slc)
  .controller('slc1',slc1)


  function slc(categories)
  {
    var menu = this;
    menu.categories = categories['data']
  }

  function slc1($stateParams,categories,MenuDataService)
  {
   var me = this;
  // var me = this;
  var cat = categories['data']
  // console.log(cat[$stateParams.id]['short_name'])
  var promise = MenuDataService.getItemsForCategories(cat[$stateParams.id]['short_name'])
  promise.then(function(response)
  {
    me.item=response.data['menu_items']
    console.log(me.item)
  })
    // console.log(MenuDataService.getItemsForCategories('L'))
     // var items = MenuDataService.getItemsForCategories(cat[$stateParams.id]['short_name'])
     // console.log(categories)
    // me.item = items['value']
    // console.log(me.item)
  }

  function MenuDataService($http)
  {
    var service = this;
    service.getAllCategories = function()
    {
      var response = $http({
        method: 'GET',
        url:('https://davids-restaurant.herokuapp.com/categories.json')
      })
      return response
    }

    service.getItemsForCategories = function(categoryShortname)
    {
      var response = $http({
        method: 'GET',
        url:('https://davids-restaurant.herokuapp.com/menu_items.json'),
        // params:{categories: categoryShortname}
        params:{category:categoryShortname}
      })
        return response
    }
  }
})();
