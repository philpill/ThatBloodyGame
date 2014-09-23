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

            ig.game.success();

            this.parent();
        },
        update: function() {

            this.parent();
        },
        draw : function () {

            this.parent();
        }
    });
});






