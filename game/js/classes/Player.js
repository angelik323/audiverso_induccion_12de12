class Player extends Sprite {
    constructor({
      collisionBlocks = [],
      imageSrc,
      frameRate,
      animations,
      loop,
      velocity,
    }) {
      super({
        imageSrc,
        frameRate,
        animations,
        loop,
      });
      this.position = {
        x: 200,
        y: 200,
      };
      const horizontalVelocity = 8;
  
      this.velocity = {
        x: 0,
        y: 0,
      };
  
      this.sides = {
        bottom: this.position.y + this.height,
      };
      this.gravity = 1;
      this.horizontalVelocity = velocity;
  
      this.collisionBlocks = collisionBlocks;
    }
  
    update() {
      /*
       * This is de blue box
       * c.fillStyle = 'rgba(0, 0, 255, 0.5)';
       * c.fillRect(this.position.x, this.position.y, this.width, this.height)
       */
  
      this.position.x += this.velocity.x * porcX;
  
      this.updateHitbox();
  
      this.checkForHorizontalCollisions();
      this.applyGravity();
  
      this.updateHitbox();
  
      /*
          c.fillRect(
              this.hitbox.position.x,
              this.hitbox.position.y,
              this.hitbox.width,
              this.hitbox.height
          )
          */
      this.checkForVerticalCollisions();
    }
  
    handleInput(keys) {
      if (this.preventInput) return;
      this.velocity.x = 0;
  
      if (keys.d.pressed) {
        this.move(this.horizontalVelocity, "runRight");
      } else if (keys.a.pressed) {
        this.move(this.horizontalVelocity * -1, "runLeft");
      } else {
        if (this.lastDirection === "left") {
          this.switchSprite("idleLeft");
        } else {
          this.switchSprite("idleRight");
        }
      }
    }
  
    move(velocity, sprite) {
      this.switchSprite(sprite);
      this.velocity.x = velocity;
      this.lastDirection = sprite === "runLeft" ? "left" : "right";
    }
  
    switchSprite(name) {
      if (this.image === this.animations[name].image) return;
      this.currentFrame = 0;
      this.image = this.animations[name].image;
      this.frameRate = this.animations[name].frameRate;
      this.frameBuffer = this.animations[name].frameBuffer;
      this.loop = this.animations[name].loop;
      this.currentAnimation = this.animations[name];
    }
  
    updateHitbox() {
      this.hitbox = {
        position: {
          x: this.position.x + 18 * porcX,
          y: this.position.y + 34 * porcX,
        },
        width: 50 * porcX,
        height: 53 * porcX,
      };
    }
  
    checkForHorizontalCollisions() {
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i];
  
        // if a collision exists
        if (
          this.hitbox.position.x <=
            collisionBlock.position.x + collisionBlock.width &&
          this.hitbox.position.x + this.hitbox.width >=
            collisionBlock.position.x &&
          this.hitbox.position.y + this.hitbox.height >=
            collisionBlock.position.y &&
          this.hitbox.position.y <=
            collisionBlock.position.y + collisionBlock.height
        ) {
          // collision on x axis going to the left
          if (this.velocity.x < -0) {
            const offset = this.hitbox.position.x - this.position.x;
            this.position.x =
              collisionBlock.position.x + collisionBlock.width - offset + 0.01;
            break;
          }
  
          if (this.velocity.x > 0) {
            const offset =
              this.hitbox.position.x - this.position.x + this.hitbox.width;
            this.position.x = collisionBlock.position.x - offset - 0.01;
            break;
          }
        }
      }
    }
  
    applyGravity() {
      this.velocity.y += this.gravity;
      this.position.y += this.velocity.y;
    }
  
    checkForVerticalCollisions() {
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i];
  
        // if a collision exists
        if (
          this.hitbox.position.x <=
            collisionBlock.position.x + collisionBlock.width &&
          this.hitbox.position.x + this.hitbox.width >=
            collisionBlock.position.x &&
          this.hitbox.position.y + this.hitbox.height >=
            collisionBlock.position.y &&
          this.hitbox.position.y <=
            collisionBlock.position.y + collisionBlock.height
        ) {
          if (this.velocity.y < 0) {
            this.velocity.y = 0;
            const offset = this.hitbox.position.y - this.position.y;
            this.position.y =
              collisionBlock.position.y + collisionBlock.height - offset + 0.01;
            break;
          }
  
          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            const offset =
              this.hitbox.position.y - this.position.y + this.hitbox.height;
            this.position.y = collisionBlock.position.y - offset - 0.01;
            break;
          }
        }
      }
    }
  }