(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                    }
                ])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form role=\"form\" #loginform=\"ngForm\" (ngSubmit)=\"loginform.form.valid && login()\">\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]+\" #email=\"ngModel\" required\n            name=\"email\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && (email.touched)\">\n          <p class=\"input-info error-message\" *ngIf=\"email.errors.required\">Email is\n            required\n          </p>\n          <p class=\"input-info error-message\" *ngIf=\"email.errors.pattern\">Enter valid email\n          </p>\n        </div>\n      </div>\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"Password\" [(ngModel)]=\"user.password\" minlength=\"6\" #password=\"ngModel\" required\n            name=\"password\">\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"password.invalid && (password.touched)\">\n          <p class=\"input-info error-message\" *ngIf=\"password.errors.required\">Password is\n            required\n          </p>\n          <p class=\"input-info error-message\" *ngIf=\"password.errors.minlength\">Password must be\n            atleast 6 characters.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"login-btn\">\n        <ion-button color=\"primary\" type=\"submit\">Login</ion-button>\n      </div>\n    </form>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n    </ion-item>\n    <div class=\"login-btn\">\n      <ion-button color=\"primary\" (click)=\"login()\">Login</ion-button>\n    </div> -->\n\n    <p class=\"no-account\" [routerLink]=\"['/signup']\">You don't have account? <span>Signup</span></p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-btn {\n  text-align: center;\n  padding-top: 20px; }\n  .login-btn ion-button {\n    --border-radius: 3px;\n    width: 150px; }\n  .no-account {\n  outline: none;\n  text-align: center; }\n  .no-account span {\n    font-weight: 500; }\n  .error-message {\n  color: red;\n  font-size: 13px;\n  padding-left: 15px;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYmxpbmZvdGVjaC9EZXNrdG9wL2ZpcmViYXNlYXV0aC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUZuQjtJQUlJLG9CQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFHaEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7RUFGcEI7SUFJSSxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbi5uby1hY2NvdW50IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(angularFireAuth, router, toastController, loadingController) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.user = {};
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.presentLoading();
        this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(function (res) {
            _this.router.navigate(['home']);
            _this.user = {};
            _this.hideloading();
        }, function (err) {
            _this.hideloading();
            _this.presentToast(err.message);
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait',
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.hideloading = function () {
        this.loader.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], LoginPage.prototype, "loginform", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map