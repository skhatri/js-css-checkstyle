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
  
  afterEach(function () {
     app = null;
  });
  
});
