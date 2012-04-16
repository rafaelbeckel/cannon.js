/**
 * ContactPoint class
 * @brief A representation of a contact point between two bodies. Should be generated by the Narrowphase
 * @param CANNON.Vec3 r The vector from the center of mass to the contact.
 * @param CANNON.Vec3 n Normal vector, pointing out of the "from" body.
 * @param CANNON.RigidBody from
 * @param CANNON.RigidBody to
 */
CANNON.ContactPoint = function(from,to){
  this.r = new CANNON.Vec3();
  this.n = new CANNON.Vec3();
  this.fromBody = null;
  this.toBody = null;
};