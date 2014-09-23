ig.module(
    'game.entities.badrock'
)
.requires(
    'impact.entity'
)
.defines(function(){

    EntityBadrock = ig.Entity.extend({

        // Set some of the properties
        type: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        checkAgainst: ig.Entity.TYPE.A,

        size: {x: 10, y: 10},

        blinkTimeout : null,

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'static/media/badrock.png', 10, 10 ),

        init: function( x, y, settings ) {

            // Add animations for the animation sheet
            this.addAnim( 'idle', 1, [0] );

            this.addAnim( 'blink', 0.2, [1, 0, 1, 0], true );

            this.vel.x = 20;

            // Call the parent constructor
            this.parent( x, y, settings );

        },
        handleMovementTrace: function (res){

            if (res.collision.x) {

                this.vel.x *= -1;

            } else {

                this.parent(res);
            }
        },
        check : function (other) {

            this.parent();

            if (other.name === 'player') {

                // end game

                ig.game.end();
            }
        },
        update: function() {

            this.parent();

            this.blink();
        },
        blink : function () {

            if (this.blinkTimeout) { return; }

            this.blinkTimeout = setTimeout((function () {

                this.currentAnim = this.anims.blink.rewind();

                clearTimeout(this.blinkTimeout);

                this.blinkTimeout = null;

            }).bind(this), 3000);
        },
        draw : function () {

            this.parent();
        }
    });
});






