ig.module(
    'game.ui.ui-toggle-pause'
)
.requires(
    'plusplus.ui.ui-toggle-pause'
)
.defines(function(){

    ig.UITogglePause = ig.global.UITogglePause = ig.UITogglePause.extend({
        size: {
            x: 16,
            y: 16
        },
        animSheet: new ig.AnimationSheet('static/media/ui_pause.png', 16, 16),
        animSettings: {
            idleX: {
                frameTime: 1,
                sequence: [0]
            },
            onX: {
                frameTime: 1,
                sequence: [1]
            }
        },
        activateComplete: function(entity) {
            this.parent(entity);
        },
        deactivateComplete: function(entity) {
            this.parent(entity);
        }
    });
});



