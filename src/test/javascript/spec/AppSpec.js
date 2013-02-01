describe("App", function() {
  var app;
  beforeEach(function() {
      app = new App($);
  });

  it("context can be initialized with context path", function () {
      
      expect(app.context).not.toBeDefined();
      expect(app.context).toBeUndefined();
      expect(app.context).toBeNothing();
      expect(app.context).not.toBeSomething();
      
      app.init('/jsstyle/');
      expect(app.context).toEqual('/jsstyle/');

      expect(app.context).toBeDefined();
      expect(app.context).not.toBeUndefined();
      
      expect(app.context).toBeSomething();
      expect(app.context).not.toBeNothing();
      expect(app.context).toBeSomething();
      
      expect(app.context).not.toBeFunction();
  });
  
  it("context can be set many times", function () {
      app.init('/jsstyle/');
      expect(app.context).toEqual('/jsstyle/');
      app.init('/jsstyle-css/');
      expect(app.context).toEqual('/jsstyle-css/');
  });
  
  describe("ajax calls returns", function() {
     var successFn, errorFn, ajax;
     beforeEach(function () {
        successFn = jasmine.createSpy("successFn");
        errorFn = jasmine.createSpy("errorFn");
        jQuery.ajax = spyOn(jQuery, "ajax").andCallFake(
          function (options) {
              if(/.*success.*/.test(options.url)) {
                  options.success();
              } else {
                  options.error();
              }
          }
        );
     });
     
     it("success", function () {
         app.ajax("success/url", successFn, errorFn);
         expect(successFn).toHaveBeenCalled();
     });
     
     it("error response", function () {
         app.ajax("error/url", successFn, errorFn);
         expect(errorFn).toHaveBeenCalled();
     });
  });
  
  afterEach(function () {
     app = null;
  });
  
});
