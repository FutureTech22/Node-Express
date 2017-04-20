(function() {
    'use strict';

    angular
        .module('people')
        .factory('api', function($http) {

            return {

                getData:()=>{
                  return $http({
                    method: 'GET',
                    url: 'http://localhost:8080/people',
                })
                },
                 createData:(user)=>{
                  return $http({
                    method: 'POST',
                    data:user,
                    url: 'http://localhost:8080/people',
                      
                     })
                },
                 getUserData:()=>{
                  return $http({
                    method: 'GET',
                    data:data,
                    url: 'http://localhost:8080/people',
                      
                     })
                },
                deleteData:(id)=>{
                  console.log(id)
                  return $http({
                    method: 'DELETE',
                    url: `http://localhost:8080/people/${id}`,
                      
                     })
                },
                


            }

        });

})();
