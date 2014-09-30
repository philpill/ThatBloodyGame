ig.module(
	'game.main'
)
.requires(
    'plugins.touch-button',
    'plusplus.core.plusplus',
    'game.managers.level',
    'game.entities.player',
    'game.entities.exit',
    'game.entities.badrock',
    'game.entities.trigger',
    'game.ui.ui-toggle-pause',
    'impact.game',
    'impact.font',
    'impact.input',
    'impact.debug.debug'
)
.defines(function(){

    var _c = ig.CONFIG;

    MyGame = ig.GameExtended.extend({


    	// Load a font
    	font: new ig.Font( 'static/media/04b03.font.png' ),

        gravity: 500,

        success : function () {

            if (this.levelManager.next() === 0) {
                this.end();
            }
        },

        start : function () {

            this.levelManager = new ig.levelManager();
            this.hasStarted = false;
            ig.input.bind( ig.KEY.SPACE, 'start' );
        },

        end : function () {

            this.levelManager.reset();
            this.gameOver = true;
            this.hasStarted = false;
        },

        init: function() {
            // Initialize your game here; bind keys etc.

            var togglePause = this.spawnEntity(ig.UITogglePause, 0, 0, {
                posAsPct: false,
                pos: {
                    x: 300,
                    y: 5
                }
            });

            this.start();
        },

            inputStart: function() {

                this.parent();

                ig.input.bind(ig.KEY.UP_ARROW, 'jump');

            },

            inputEnd: function() {

                this.parent();

                ig.input.unbind(ig.KEY.UP_ARROW, 'jump');


            },

        update: function() {
            // Update all entities and backgroundMaps
            this.parent();

            // Add your own, additional update code here
            if (ig.input.pressed('start')) {

                this.levelManager.next();

                ig.input.unbind(ig.KEY.SPACE);
                this.hasStarted = true;
            }

            var player = this.getEntitiesByType( EntityPlayer )[0];

            if (player) {

                var width = ig.system.width;

                var half = width/2;

                if ((player.pos.x > this.screen.x + half) && (player.pos.x < this.collisionMap.width * this.collisionMap.tilesize - half)) {

                    this.screen.x = player.pos.x - half;
                }
            }
        },

        draw: function() {

            // Draw all entities and backgroundMaps
            this.parent();

            if (!this.hasStarted) {


                // Add your own drawing code here
                var x = ig.system.width/2,
                    y = ig.system.height/2;

                if (this.gameOver) {

                    var player = this.getPlayer();

                    if (player) {
                        this.removeEntity(player);
                    }

                    this.font.draw( 'Game Over!', x, y, ig.Font.ALIGN.CENTER );
                    this.font.draw( 'hit space to begin', x, y + 20, ig.Font.ALIGN.CENTER );

                    ig.input.bind( ig.KEY.SPACE, 'start' );

                } else {

                    this.font.draw( '-- That Bloody Game --', x, y, ig.Font.ALIGN.CENTER );
                    this.font.draw( 'hit space to begin', x, y + 20, ig.Font.ALIGN.CENTER );
                }
            }
    	},

        shapesPasses: [
            // for climbing
            // we ignore solids and one ways
            // to only retrieve climbable areas
            {
                ignoreSolids: false,
                ignoreOneWays: false
            },
            // for lighting and shadows
            // we ignore climbables and the edge boundary
            {
                ignoreClimbable: false,
                // throw away the inner loop of the edge of the map
                discardBoundaryInner: true,
                // throw away the outer loop of the edge of the map
                retainBoundaryOuter: false
            }
        ],
    });

    ig.main('#canvas', MyGame, 60, _c.GAME_WIDTH, _c.GAME_HEIGHT, _c.SCALE, ig.LoaderExtended);
});
