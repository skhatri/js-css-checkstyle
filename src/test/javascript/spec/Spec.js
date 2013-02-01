beforeEach(function () {
   this.addMatchers({
       toBeSomething: function(val) {
           return this.actual !== undefined;
       },
       toBeFunction: function() {
           return (typeof this.actual === 'function');
       },
       toBeNothing: function() {
           return (this.actual === undefined || this.actual === null);
       }
   }); 
});