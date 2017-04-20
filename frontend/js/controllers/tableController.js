(function() {
    'use strict';

    angular
        .module('people')
        .controller('tableController', function (api) {


           

            const vm = this;

            let ajaxGetData = api.getData();
            ajaxGetData.then(res=>{
                vm.data = res.data;
                
            })


            vm.createData = function() {
                

                vm.user.id= Date.now();
                    let postData = api.createData(vm.user);
                    postData.then(res=>{
                        vm.data = res.data;
                        console.log(res);
                    })

                }
            vm.delete = function(id) {
                    let removeData = api.deleteData(id);
                    removeData.then(response =>{
                        vm.data = response.data;
                    })
                }
            

});
})();

