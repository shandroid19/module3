(function()
{
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',nidc)
  .service('MenuSearchService',mss)
  .directive('foundItems',foundItems);

  function foundItems()
  {
    var ddo={
      templateUrl:'foundItems.html',
      scope:{items:'<',onRemove:'&'}
    }
    return(ddo)
  }


  nidc.$inject = ['MenuSearchService']
  function nidc(MenuSearchService)
  {
    var list = this;
    list.text= ''
    list.items=''
    list.narrow = function()
    {
      list.items = MenuSearchService.getItems();
      MenuSearchService.getMatchedMenuItems(list.text);
      if(list.text == [])
      {
        list.text='Nothing to show';
      }
    }

  list.remove = function(index)
  {
   MenuSearchService.remove(index)
  }
  }

  mss.$inject = ['$http'];
  function mss($http)
  {
    var service = this;
    var list=[]
    service.getMatchedMenuItems= function(searchTerm)
    {
      list.splice(list.length)
      var promise = $http({
        method: 'GET',
        url:('https://davids-restaurant.herokuapp.com/menu_items.json')
      })

      promise.then(function(result){
        for(var i =0;i<result.data['menu_items'].length;i++)
        {
          var obj = result.data['menu_items']
          var des = obj[i]['description']
          if(des.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
          {
            list.push(obj[i]);
          }
        }
      })
    }
    service.remove= function(index){
      list.splice(index,1);
    }
    service.getItems = function(){
    return list;

  }

}
})();
