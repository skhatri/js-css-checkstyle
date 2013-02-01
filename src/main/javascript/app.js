/*global jQuery*/
function App($) {
    "use strict";
    var app = {
        init : function (baseurl) {
            this.context = baseurl;
        },
        ajax : function (urlToLoad, successFn, errorFn) {
            $.ajax({
                url : urlToLoad,
                cache : false
            }).done(function (data) {
                if (typeof successFn === 'function') {
                    successFn(data);
                }
            }).error(function (data) {
                if (typeof errorFn === 'function') {
                    errorFn(data);
                }
            });
        }
    };
    return app;
}
