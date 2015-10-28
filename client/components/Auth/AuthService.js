angular.module('QuizApp')
  .factory('Auth', function($http, LocalService, api) {
    function checkTokenStatus(token) {
      $http.get('/auth/token_status?token=' + token);
    }

    var token = LocalService.get();

    if (token) {
      token = angular.fromJson(LocalService.get()).token;
      checkTokenStatus(token);
    }

    return {

      isAuthenticated: function() {
        return LocalService.get();
      },
      login: function(credentials) {
        var login = $http.post(api + '/auth/login', credentials);
        login.success(function(result) {
          LocalService.unset();
          LocalService.set(JSON.stringify(result));
        });
        return login;
      },
      logout: function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
        LocalService.unset();
      },
      register: function(formData) {
        LocalService.unset();
      
        var register = $http.post(api + '/auth/register', formData);
        register.success(function(result) {
          LocalService.set(JSON.stringify(result));

        });
        return register;
      }
    };
  })
  .factory('AuthInterceptor', function($q, $injector) {
    var LocalService = $injector.get('LocalService');

    return {
      
      request: function(config) {
        var token;
        //console.log(LocalService.get());
        if (LocalService.get()) {
          token = angular.fromJson(LocalService.get()).token;
        }
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
          console.log(config.headers.Authorization)
        }
        return config;
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          LocalService.unset();
          $injector.get('$state').go('anon.login');
        }
        return $q.reject(response);
      }
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });