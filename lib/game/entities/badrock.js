ig.module(
    'game.entities.badrock'
)
.requires(
    'plusplus.abstractities.creature'
)
.defines(function(){

    ig.EntityBadrock = ig.global.EntityBadrock = ig.Creature.extend({

        // Set some of the properties
        type: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        checkAgainst: ig.Entity.TYPE.A,

        size: {x: 10, y: 10},

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'static/media/badrock.png', 10, 10 ),
        animInit: 'idle',
        animSettings: {
            idle    : { sequence: [1, 0, 1, 0], frameTime: 0.2 },
            move    : { sequence: [0], frameTime: 1 },
        },

        animsExpected: [
            'idle',
            'move'
        ],

        canWanderX: true,

        wanderSwitchChance: 0.005,
        wanderSwitchChanceStopped: 0.015,

        canJump: false,
        canClimb: false,

        speed: {
            x: 10,
            y: 0
        },

        init: function( x, y, settings ) {

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

            //this.blink();
        },
        draw : function () {

            this.parent();
        }
    });
});






