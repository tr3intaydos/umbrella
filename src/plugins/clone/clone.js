/**
 * .clone()
 * 
 * Travel the matched elements one node up
 * @return this Umbrella object
 */
 u.prototype.clone = function() {
  return this.join(function(node){
    return node.cloneNode(true);
  })
};