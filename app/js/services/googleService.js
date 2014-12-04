/*
---
name: Facebook Angularjs

description: Provides an easier way to make use of Facebook API with Angularjs

license: MIT-style license

authors:
  - Ciul

requires: [angular]
provides: [facebook]

...
*/
(function(window, angular, undefined) {
    /*global gapi */
    'use strict';

    var clientId = '335394801683-p18s56v2q0ghp25m1tbk2s3iagicog84.apps.googleusercontent.com';
    //var clientId = '335394801683-tnb7f91o5mv6puetisr9fimvppo24l2u.apps.googleusercontent.com';
    var scopes = 'profile';

    // Module global loadDeferred
    var loadDeferred;

    angular.module('tjGoog', []).

    factory('goog', ['$q',

        function($q) {
            var userProfile = {};
            var isSigndIn = false;

           

            function signIn() {
                var gapi;

                if (isSigndIn) {

                    var deferred = $q.defer();
                    deferred.resolve(true);
                    return deferred.promise;
                }

                return loadDeferred.promise.then(function(_api) {
                    gapi = _api;
                    var deferred = $q.defer();

                    gapi.auth.authorize({
                        client_id: clientId,
                        scope: scopes,
                        immediate: false
                    }, function(authResult) {
                        isSigndIn = true;
                        deferred.resolve(authResult);
                    });


                    return deferred.promise;
                }).then(function(authResult) {


                    var deferred = $q.defer();

                    gapi.client.load('plus', 'v1', function() {
                        if (authResult.access_token) {
                            deferred.resolve(authResult);
                        } else if (authResult.error) {
                            deferred.reject(authResult.error);
                        }
                    });

                    return deferred.promise;

                }).then(function() {
                    var deferred = $q.defer();

                    var request = gapi.client.plus.people.get({
                        'userId': 'me'
                    });

                    request.execute(function(profile) {

                        if (profile.error) {
                            deferred.reject(profile.error);
                        }

                        userProfile = profile;

                        deferred.resolve(userProfile);

                    });

                    return deferred.promise;
                }).then(function() {
                    var deferred = $q.defer();

                    gapi.client.load('drive', 'v2', function() {
                        deferred.resolve();

                    });
                    return deferred.promise;

                });
            }

          

            return {
                signIn: signIn,
                ready: loadDeferred.promise,
                isSigndIn: isSigndIn,
                getUserProfile: function() {
                    return userProfile;
                }
            };
        }
    ]).

    run([
        '$q',
        function($q) {
            // Define global loadDeffered to notify when Service callbacks are safe to use
            loadDeferred = $q.defer();


            /**
             * SDK script injecting
             */
            (function() {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = 'https://apis.google.com/js/client:plusone.js';
                var s = document.getElementsByTagName('script')[0];
                po.onload = function() {
                    loadDeferred.resolve(gapi);
                };

                s.parentNode.insertBefore(po, s);
            })();


        }
    ]);

})(window, angular);