/**
 * Created by guest on 2023/9/26 08:27:07.
 */
(function(app) {
    app.state("main", {
        title: "main",
        url: "/main",
        templateUrl: "views/main.atom",
        deps:['ctrls/mainCtrl.js']
    });
    app.regLoadingJobs(new Promise(function (resolve, reject) {
        ld('ic-monaco').then(resolve, reject);
    }));
})(Atom.app("help"));