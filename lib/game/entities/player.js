ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity',
    'impact.input'
)
.defines(function(){

    EntityPlayer = ig.Entity.extend({

        name: 'player',

        // Set some of the properties
        type: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.ACTIVE,
        checkAgainst: ig.Entity.TYPE.BOTH,

        maxVel: {x: 50, y: 140},
        friction: {x: 5000, y: 0},
        accelGround: 5000,
        accelAir: 50,
        jump: 5000,


        size: {x: 10, y: 16},
        health: 50,

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'static/media/player.png', 10, 16 ),

        init: function( x, y, settings ) {


            // Add animations for the animation sheet

            this.addAnim( 'idle', 1, [0] );

            this.addAnim( 'blink', 0.2, [1, 0], true );

            this.addAnim( 'jump', 0.2, [4], true );

            this.addAnim( 'move-left', 0.2, [2, 3] );
            this.addAnim( 'move-right', 0.2, [2, 3] );
            this.anims['move-left'].flip.x = true;



            // Call the parent constructor
            this.parent( x, y, settings );

        },

        handleMovementTrace: function ( res ){

            this.parent( res );
        },

        update: function() {
            // This method is called for every frame on each entity.
            // React to input, or compute the entity's AI here.

            var accel = this.standing ? this.accelGround : this.accelAir;
            if( ig.input.state('move-left') ) {
                this.accel.x = -accel;
                this.currentAnim = this.anims['move-left'];
                this.anims.jump.flip.x = true;
            }
            else if( ig.input.state('move-right') ) {
                this.accel.x = accel;
                this.currentAnim = this.anims['move-right'];
                this.anims.jump.flip.x = false;
            }
            else {
                this.accel.x = 0;
                this.currentAnim = this.anims.idle;
            }

            if ( this.standing && ig.input.pressed('jump') ) {

                this.vel.y = -this.jump;

            } else {

                this.accel.y = 0;
            }

            if ( ig.input.state('jump') && !this.standing ) {

                this.currentAnim = this.anims.jump;
            }

            // Call the parent update() method to move the entity
            // according to its physics
            this.parent();
        },

        draw : function () {

            this.parent();

        }
    });
});






