app.factory('taskApi', ['$http', function($http) { 
    var service = {}

    var urlBase = "http://localhost:8080/api/tasks/";

    service.getTasks = function() {
        return $http.get(urlBase).then(function (response) {
            // this will ensure that we get clear data in our service response
            return response.data;
        });
    };

    service.addNew = function(body) {
        return $http.post(urlBase + 'add',body)
        .then(function (response) {
            return response.data;
        })
        // .catch()
    }

    service.update = function(body) {
        return $http.put(urlBase + 'update/' + body.id, body)
        .then(function (response){
            return response.data
        })
    }

    service.delete = function(id) {
        return $http.delete(urlBase + 'delete/' + id)
        .then(function(response){
            return `Successfully deleted task + ${response.status}`
        })
    }

    return service;
}]); 