var app = angular.module("TestProject", ["ngRoute"]);

app.controller('index', function($scope) {
    function GetProjects($scope){
        var requestUrl = "siteURL/_api/web/lists/getbytitle('ListName')/items";
        $.ajax({
            url: requestUrl,
            method: "GET",
            async: false,
            headers: { "Accept": "application/json;odata=verbose"
            },
        
            success: function(data){
                $scope.projects = data.d.results;
            },
        
            error: function(error){
                console.log("Error message in GetProjects: " + JSON.stringify(error));
            }
        });
    }

    GetProjects($scope);
});
