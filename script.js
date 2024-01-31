let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) => {
    $scope.title = "Stay Safe Stay Home";

    const URI = 'https://covid-19.dataflowkit.com/v1'; //covid-19 api

    $http.get(`${URI}/world`).then(
        (response) => {
            console.log(response.data);
            $scope.alldata = response.data;
        },
        (error) => {
            console.log(error);
        })

    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == '') {
            $scope.c_data = undefined;
            return;
        }
        
        $http.get(`${URI}/${country}`).then(
            (response) => {
                console.log(response.data);
                $scope.c_data = response.data;
            }, (error) => {
                console.log(error);
            })


    }


})