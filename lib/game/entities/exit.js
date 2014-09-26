ig.module(
    'game.entities.exit'
)
.requires(
    'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function(){

    ig.EntityExit = ig.global.EntityExit = ig.EntityExtended.extend({

        // Set some of the properties
        type: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.NEVER,
        checkAgainst: ig.Entity.TYPE.A,

        size: {x: 18, y: 32},

        // Load an animation sheet
        animSheet: new ig.AnimationSheet('static/media/exit.png', 18, 32),
        animInit: 'idleX',
        animSettings: {
            idleX : { sequence: [0], frameTime: 1 }
        }
    });
});






