/**
 * Created by Administrator on 2017/1/15.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
                imports: [ ng.platformBrowser.BrowserModule ],
                declarations: [ app.AppComponent ],
                bootstrap: [ app.AppComponent ]
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}))