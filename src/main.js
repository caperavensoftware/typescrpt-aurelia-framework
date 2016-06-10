"use strict";
function configure(aurelia) {
    return new Promise(function (resolve) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start().then(function () {
            aurelia.setRoot();
            resolve();
        });
    });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map