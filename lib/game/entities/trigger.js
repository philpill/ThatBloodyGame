ig.module(
    'game.entities.trigger'
)
.requires(
    'plusplus.entities.trigger'
)
.defines(function(){

    ig.EntityTrigger = ig.global.EntityTrigger = ig.EntityTrigger.extend({

        check: function( other ) {
            // Iterate over all targets
            for( var t in this.target ) {
                var ent = ig.game.getEntityByName( this.target[t] );

                // Check if we got a "door" entity with the given name
                if( ent && ent instanceof EntityLevelchange ) {
                    ig.game.success();
                }
            }
        }
    });
});






