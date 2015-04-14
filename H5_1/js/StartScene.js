/**
 * Created by Berserk on 2015/4/9.
 */
var StartScene = cc.Scene.extend({

    onEnter:function() {
        this._super();

        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create("res/HelloWorld.jpg");
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(1);
        this.addChild(sprite);
    }
});