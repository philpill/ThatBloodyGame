ig.module(
	'game.main'
)
.requires(
    'game.levels.start',
    'game.levels.one',
    'game.levels.two',
    'game.entities.player',
    'game.entities.exit',
    'impact.game',
    'impact.font',
    'impact.input',
    'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'static/media/04b03.font.png' ),

    gravity: 500,

    level : 0,

    success : function () {

        switch (this.level) {

            case 1:
                this.successOne();
                break;
            case 2:
                this.successTwo();
                break;
        }
    },

    successOne : function () {

        this.level = 2;

        this.loadLevel( LevelTwo );
    },

    successTwo : function () {

        this.level = 0;

        this.loadLevel( LevelStart );
        this.hasStarted = false;
        ig.input.bind( ig.KEY.SPACE, 'start' );
    },

	init: function() {
		// Initialize your game here; bind keys etc.

        this.loadLevel( LevelStart );


        // this.loadLevel( LevelTest );

        var settings = { health: 100 };
        // this.player = new EntityPlayer( 16, 112, settings );

        // this.player = this.spawnEntity( EntityPlayer, 16, 112, settings );

        ig.input.bind( ig.KEY.SPACE, 'start' );

        ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'move-right' );
        ig.input.bind( ig.KEY.LEFT_ARROW, 'move-left' );
    },

    update: function() {
        // Update all entities and backgroundMaps
        this.parent();

        // Add your own, additional update code here
        if (ig.input.pressed('start')) {

            this.level = 1;

            this.loadLevel(LevelOne);
            ig.input.unbind(ig.KEY.SPACE);
            this.hasStarted = true;
        }
    },

    draw: function() {

        // Draw all entities and backgroundMaps
        this.parent();

        if (!this.hasStarted) {

            // Add your own drawing code here
            var x = ig.system.width/2,
                y = ig.system.height/2;

            this.font.draw( '-- That Bloody Game --', x, y, ig.Font.ALIGN.CENTER );
            this.font.draw( 'hit space to begin', x, y + 20, ig.Font.ALIGN.CENTER );
        }
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
