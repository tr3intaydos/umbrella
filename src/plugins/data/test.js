// Testing the main file
describe(".data(name, value)", function() {
  
  beforeEach(function(){
    expect(u('.bla').nodes.length).to.equal(0);
  });
  
  afterEach(function(){
    u('.bla').remove();
  });
  
  it("should be a function", function() {
    expect(typeof base.after).to.equal('function');
  });
  
  it("can add an attribute with two params", function() {
    base.data('title', 'Hello');
    expect(base.data('title')).to.equal('Hello');
    base.first().removeAttribute('data-title');
    expect(!base.data('title')).to.equal(true);
  });
  
  it("can add an attribute with an object", function() {
    base.data({title: 'Hello'});
    expect(base.data('title')).to.equal('Hello');
  });
  
  it("can read the first element attribute", function() {
    base.first().setAttribute('data-title', 'Hello');
    expect(base.data('title')).to.equal('Hello');
  });
  
  it("can be called with no nodes", function() {
    expect(u('dfsdf').data('title')).to.equal('');
  });
  
  it("can nullify (remove) an attribute with two params", function() {
    base.first().setAttribute('data-title', 'Hello');
    expect(base.data('title')).to.equal('Hello');
    base.data('title', null);
    expect(!base.data('title')).to.equal(true);
  });
  
  it("can nullify (remove) an attribute with an object", function() {
    base.first().setAttribute('data-title', 'Hello');
    expect(base.data('title')).to.equal('Hello');
    base.data({'title': null});
    expect(!base.data('title')).to.equal(true);
  });
});