ig.module(
    'game.entities.exit'
)
.requires(
    'impact.entity'
)
.defines(function(){

    EntityExit = ig.Entity.extend({

        // Set some of the properties
        type: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.FIXED,
        checkAgainst: ig.Entity.TYPE.A,

        maxVel: {x: 0, y: 0},

        size: {x: 18, y: 32},

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'static/media/exit.png', 18, 32 ),

        init: function( x, y, settings ) {

            // Add animations for the animation sheet
            this.addAnim( 'idle', 1, [0], true );

            // Call the parent constructor
            this.parent( x, y, settings );

        },

        handleMovementTrace: function ( res ){

            this.parent( res );
        },

        check : function (other) {

            console.log('check()');

            console.log(other);

            ig.game.success();

            this.parent();
        },

        update: function() {
            // This method is called for every frame on each entity.
            // React to input, or compute the entity's AI here.


            // Call the parent update() method to move the entity
            // according to its physics
            this.parent();
        },

        draw : function () {

            this.parent();

        }
    });
});






