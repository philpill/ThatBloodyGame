ig.module(
    'game.entities.player'
)
.requires(
    'plusplus.abstractities.player'
)
.defines(function(){

    ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

        name: 'player',

        // Set some of the properties
        type: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.ACTIVE,
        checkAgainst: ig.Entity.TYPE.BOTH,

        size: {x: 10, y: 16},

        opaque: true,

        performance: 'dynamic',

        // Load an animation sheet
        animSheet: new ig.AnimationSheet('static/media/player.png', 10, 16),
        animInit: 'idleX',
        animSettings: {
            idleX    : { sequence: [0], frameTime: 1 },
            jumpX    : { sequence: [4], frameTime: 0.2 },
            moveX    : { sequence: [3, 5, 6, 2], frameTime: 0.05 },
        },

        init: function( x, y, settings ) {

            this.parent( x, y, settings );
        },

        handleMovementTrace: function ( res ){

            this.parent( res );
        },

        update: function() {

            if (ig.input.state('jump')) {

                this.jump();
            }

            this.parent();
        },

        draw : function () {

            this.parent();
        }
    });
});






