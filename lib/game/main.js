ig.module(
	'game.main'
)
.requires(
    'game.levels.test',
    'game.entities.player',
	'impact.game',
    'impact.font',
	'impact.input',
    'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( '/static/media/04b03.font.png' ),

    gravity: 500,

	init: function() {
		// Initialize your game here; bind keys etc.

        this.loadLevel( LevelTest );

        var settings = { health: 100 };
        // this.player = new EntityPlayer( 16, 112, settings );

        // this.player = this.spawnEntity( EntityPlayer, 16, 112, settings );

        ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'move-right' );
        ig.input.bind( ig.KEY.LEFT_ARROW, 'move-left' );
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// Add your own drawing code here
		// var x = ig.system.width/2,
		// 	y = ig.system.height/2;

		// this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
