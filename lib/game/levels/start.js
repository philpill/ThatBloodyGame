ig.module( 'game.levels.start' )
.requires( 'impact.image' )
.defines(function(){
LevelStart=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "start",
			"width": 20,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "static/media/bg.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,2,3,4,1,2,1,3,2,1,2,4,4,3,1,2,2,3,1],
				[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
				[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
				[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[4,1,1,2,3,3,4,1,2,1,1,2,3,4,1,2,2,2,4,1]
			]
		}
	]
}/*]JSON*/;
LevelStartResources=[new ig.Image('static/media/bg.png')];
});