angular.module('QuizApp')
  .factory('Auth', function($http, LocalService, api) {
    function checkTokenStatus(token) {
      $http.get('/auth/token_status?token=' + token);
    }

    var token = LocalService.get('auth_token');

    if (token) {
      token = angular.fromJson(LocalService.get('auth_token')).token;
      checkTokenStatus(token);
    }

    return {

      isAuthenticated: function() {
        return LocalService.get('auth_token');
      },
      login: function(credentials) {
        var login = $http.post('/auth/login', credentials);
        login.success(function(result) {
          LocalService.set('auth_token', JSON.stringify(result));
        });
        return login;
      },
      logout: function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
        LocalService.unset('auth_token');
      },
      register: function(formData) {
        LocalService.unset('auth_token');
        var register = $http.post(api + '/auth/register', formData);
        register.success(function(result) {
          LocalService.set('auth_token', JSON.stringify(result));
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
        if (LocalService.get('auth_token')) {
          token = angular.fromJson(LocalService.get('auth_token')).token;
        }
      
        return config;
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          LocalService.unset('auth_token');
          //$injector.get('$state').go('home');
        }
        return $q.reject(response);
      }
    };
  })
  .config(function($httpProvider) {
    console.log('AuthInterceptor');

    $httpProvider.interceptors.push('AuthInterceptor');

  });