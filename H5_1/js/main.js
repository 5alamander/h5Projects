/**
 * Created by Berserk on 2015/4/9.
 */
window.onload = function(){
    cc.game.onStart = function(){
        //load resources
        cc.LoaderScene.preload(g_resources, function () {

            cc.director.runScene(new StartScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};