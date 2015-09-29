angular.module "rubyKafiClient"
  .run ($log, $http) ->
    $http.get('/api/foos.json').success (result) ->
      console.log 'Look what the server told us:', result
