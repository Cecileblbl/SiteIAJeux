class SeekBehaviour {
  constructor(target) {
    this.target = target;
  }

  update(entity) {
    // Calculate the desired velocity towards the target
    const desiredVelocity = Vector2D.subtract(
      this.target.position,
      entity.position
    );

    // Normalize the desired velocity
    desiredVelocity.normalize();

    // Scale the desired velocity by the maximum speed of the entity
    desiredVelocity.multiply(entity.maxSpeed);

    // Calculate the steering force required to reach the target
    const steeringForce = Vector2D.subtract(desiredVelocity, entity.velocity);

    // Apply the steering force to the entity's acceleration
    entity.acceleration.add(steeringForce);
  }
}
const entity = {
  position: new Vector2D(0, 0), // Replace with the actual entity position
  velocity: new Vector2D(0, 0), // Replace with the actual entity velocity
  acceleration: new Vector2D(0, 0), // Replace with the actual entity acceleration
  maxSpeed: 5, // Replace with the actual maximum speed of the entity
};

const seekBehaviour = new SeekBehaviour(target);
seekBehaviour.update(entity);

function show(x, y) {
  const title = "Seek Behaviour";
  text(title, x, y);
  if (this.target) {
    const targetPosition = `Target Position: (${this.target.position.x}, ${this.target.position.y})`;
    text(targetPosition, x, y + 20);
  } else {
    text("Target Position: None", x, y + 20);
  }
}
