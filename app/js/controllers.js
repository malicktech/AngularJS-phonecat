'use strict';

/* Controllers */



phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function($scope, Phone) {

        $scope.currentPage = 1;
        $scope.usersPerPage = 3;
        $scope.totalUsers = 0;
        $scope.maxSize = 5;
        $scope.pageSizeList = [2, 3, 4, 5, 10];

        $scope.phones = Phone.query(function() {
            $scope.totalUsers = $scope.phones.length;
        });
        $scope.orderProp = 'age';





    }
]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',

    function($scope, $routeParams, Phone) {
        console.log('fdghfdgfdsf');
        console.log($routeParams.phoneId);
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
            console.log(phone);
        });
        console.log($scope.phone);


        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
]);
