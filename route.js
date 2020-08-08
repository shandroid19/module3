(function()
{
  angular.module('MenuApp').config(RoutesConfig);

  function RoutesConfig($stateProvider,$urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home',{
      url:'/',
      templateUrl:'home.html',

    })
    $stateProvider.state('categories',{
      url:'/categories',
      templateUrl:'categories.html',
      controller:'slc as menu',
      resolve:
      {
        categories: ['MenuDataService',function(MenuDataService)
      {
        return MenuDataService.getAllCategories();
      }]
      }
    })
    .state('categories.items',{
      url:'/items/{id}',
      templateUrl:'items.html',
      controller:'slc1 as me',

      // resolve:
      //  {
      //    items: ['MenuDataService',$stateParams,function(MenuDataService,$stateParams)
      //  {
      //    return MenuDataService.getItemsForCategories(MenuDataService.getAllCategories().then(function(response){return response.data[$stateParams.id]['short_name']})).then(function(result){return result.data});
      //  }]
      //  }
    })
  }
})();
