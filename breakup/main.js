(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { \n    padding: 0; margin: 0; \n}\ncanvas { \n    background: #eee; display: block; margin: 0 auto; \n    width: 480px;\n    height: 320px;\n}\n.convas-container{\n    position: relative;\n}\n@media(min:450px){\n\n}\n.paddle-button{\nposition: absolute;\nbottom: 20px;\nheight: 60px;\nwidth: 60px;\nbackground-color: #a9a9a9;\nz-index: 10;\nborder-radius: 50%;\n}\n.paddle-button:hover{\n    opacity: 0.7;\n}\n.left-paddle{\nleft: 0px;\n}\n.right-paddle{\n    right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLENBQUMsVUFBVTtDQUN6QjtBQUNEO0lBQ0ksaUJBQWlCLENBQUMsZUFBZSxDQUFDLGVBQWU7SUFDakQsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEOztDQUVDO0FBRUQ7QUFDQSxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLGFBQWE7QUFDYixZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixtQkFBbUI7Q0FDbEI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtBQUNBLFVBQVU7Q0FDVDtBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHsgXG4gICAgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBcbn1cbmNhbnZhcyB7IFxuICAgIGJhY2tncm91bmQ6ICNlZWU7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDAgYXV0bzsgXG4gICAgd2lkdGg6IDQ4MHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG59XG5cbi5jb252YXMtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYShtaW46NDUwcHgpe1xuXG59XG5cbi5wYWRkbGUtYnV0dG9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOiAyMHB4O1xuaGVpZ2h0OiA2MHB4O1xud2lkdGg6IDYwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xuei1pbmRleDogMTA7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG59IFxuXG4ucGFkZGxlLWJ1dHRvbjpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5sZWZ0LXBhZGRsZXtcbmxlZnQ6IDBweDtcbn1cblxuLnJpZ2h0LXBhZGRsZXtcbiAgICByaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"convas-container\">\n<canvas id=\"myCanvas\" width=\"480\" height=\"320\" (click)=\"canvasClickHandler()\"></canvas>\n<a class=\"paddle-button left-paddle\" id=\"left-paddle\" (mousedown)=\"tapDownHandler('L')\" (mouseup)=\"tapUpHandler('L')\" href=\"#\"></a>\n<a class=\"paddle-button right-paddle\" id=\"right-paddle\" (mousedown)=\"tapDownHandler('R')\" (mouseup)=\"tapUpHandler('R')\" href=\"#\"></a>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_paddle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/model/paddle.model */ "./src/app/shared/model/paddle.model.ts");
/* harmony import */ var _shared_model_ball_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/model/ball.model */ "./src/app/shared/model/ball.model.ts");
/* harmony import */ var _shared_model_brick_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/model/brick.model */ "./src/app/shared/model/brick.model.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //ball
        this.ball = new _shared_model_ball_model__WEBPACK_IMPORTED_MODULE_3__["Ball"]();
        //paddle
        this.paddle = new _shared_model_paddle_model__WEBPACK_IMPORTED_MODULE_2__["Paddle"]();
        //bricks
        this.brick = new _shared_model_brick_model__WEBPACK_IMPORTED_MODULE_4__["Brick"]();
        this.bricks = [];
        //score
        this.score = 0;
        //lives
        this.lives = 3;
        this.title = 'breakup';
        this.animating = false;
    }
    AppComponent.prototype.resetGame = function () {
        this.ball = new _shared_model_ball_model__WEBPACK_IMPORTED_MODULE_3__["Ball"]();
        this.paddle = new _shared_model_paddle_model__WEBPACK_IMPORTED_MODULE_2__["Paddle"]();
        this.brick = new _shared_model_brick_model__WEBPACK_IMPORTED_MODULE_4__["Brick"]();
        this.score = 0;
        this.lives = 3;
        var bricks = [];
        for (var c = 0; c < this.brick.columnCount; c++) {
            bricks[c] = [];
            for (var r = 0; r < this.brick.rowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
        this.bricks = bricks;
    };
    AppComponent.prototype.prepareGameViewPort = function () {
        this.canvas = document.getElementById("myCanvas");
        this.canvasCtx = this.canvas.getContext("2d");
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height - 30;
        this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
    };
    AppComponent.prototype.registerDocEvents = function () {
        // document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        // this.keyDownHandler;
        // document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        //document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
    };
    AppComponent.prototype.renderGame = function () {
        this.resetGame();
        this.prepareGameViewPort();
        this.draw();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.registerDocEvents();
        this.renderGame();
    };
    AppComponent.prototype.mouseMoveHandler = function (e) {
        var relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddle.x = relativeX - this.paddle.width / 2;
        }
    };
    AppComponent.prototype.canvasClickHandler = function () {
        if (this.animating) {
            this.stopAnnimation();
        }
        else {
            this.playAnimation();
        }
        this.animating = !this.animating;
    };
    AppComponent.prototype.canvasDoubleClkHandler = function () {
        this.playAnimation();
    };
    AppComponent.prototype.playAnimation = function () {
        this.interVal = setInterval(this.draw.bind(this), 10);
    };
    AppComponent.prototype.stopAnnimation = function () {
        if (this.interVal)
            clearInterval(this.interVal);
    };
    AppComponent.prototype.draw = function () {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        this.drawBall();
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
            this.ball.dx = -this.ball.dx;
        }
        if (this.ball.y + this.ball.dy < this.ball.radius) {
            this.ball.dy = -this.ball.dy;
        }
        else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
            if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
                this.ball.dy = -this.ball.dy;
            }
            else {
                this.lives--;
                if (!this.lives) {
                    this.stopAnnimation();
                    this.renderGame();
                }
                else {
                    this.ball.dx = this.canvas.width / 2;
                    this.ball.y = this.canvas.height - 30;
                    this.ball.dx = 2;
                    this.ball.dy = -2;
                    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
                }
            }
        }
        this.drawPaddle();
        this.drawScore();
        this.drawLives();
        this.drawInstruction();
        this.collisionDetection();
        if (this.paddle.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
            this.paddle.x += 7;
        }
        else if (this.paddle.leftPressed && this.paddle.x > 0) {
            this.paddle.x -= 7;
        }
        this;
    };
    AppComponent.prototype.drawBall = function () {
        this.canvasCtx.beginPath();
        console.count("drawing");
        this.canvasCtx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        this.canvasCtx.fillStyle = "#0095DD";
        this.canvasCtx.fill();
        this.canvasCtx.closePath();
    };
    AppComponent.prototype.drawPaddle = function () {
        this.canvasCtx.beginPath();
        this.canvasCtx.rect(this.paddle.x, this.canvas.height - this.paddle.height, this.paddle.width, this.paddle.height);
        this.canvasCtx.fillStyle = "#0095DD";
        this.canvasCtx.fill();
        this.canvasCtx.closePath();
    };
    AppComponent.prototype.drawBricks = function () {
        var bricks = this.bricks;
        var ctx = this.canvasCtx;
        for (var c = 0; c < this.brick.columnCount; c++) {
            for (var r = 0; r < this.brick.rowCount; r++) {
                if (bricks[c][r].status == 1) {
                    var brickX = (c * (this.brick.width + this.brick.padding)) + this.brick.offsetLeft;
                    var brickY = (r * (this.brick.height + this.brick.padding)) + this.brick.offsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.brick.width, this.brick.height);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    };
    AppComponent.prototype.collisionDetection = function () {
        for (var c = 0; c < this.brick.columnCount; c++) {
            for (var r = 0; r < this.brick.rowCount; r++) {
                var b = this.bricks[c][r];
                if (b.status == 1) {
                    if (this.ball.x > b.x && this.ball.x < b.x + this.brick.width && this.ball.y > b.y && this.ball.y < b.y + this.brick.height) {
                        this.ball.dy = -this.ball.dy;
                        b.status = 0;
                        this.score++;
                        if (this.score == this.brick.rowCount * this.brick.columnCount) {
                            alert("YOU WIN, CONGRATULATIONS!");
                            document.location.reload();
                            this.stopAnnimation();
                        }
                    }
                }
            }
        }
    };
    AppComponent.prototype.drawScore = function () {
        var ctx = this.canvasCtx;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + this.score, 8, 20);
    };
    AppComponent.prototype.drawInstruction = function () {
        var ctx = this.canvasCtx;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#291111";
        ctx.fillText("tap to start or pause.", 100, 20);
    };
    AppComponent.prototype.drawLives = function () {
        var ctx = this.canvasCtx;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    };
    AppComponent.prototype.tapDownHandler = function (key) {
        console.count('tapdown');
        if (key === 'R') {
            this.paddle.rightPressed = true;
            this.paddle.x += this.paddle.width;
        }
        else if (key == 'L') {
            this.paddle.leftPressed = true;
            this.paddle.x -= this.paddle.width;
        }
    };
    AppComponent.prototype.tapUpHandler = function (key) {
        console.count('tapup');
        if (key === 'R') {
            this.paddle.rightPressed = false;
        }
        else if (key == 'L') {
            this.paddle.leftPressed = false;
        }
    };
    AppComponent.prototype.keyDownHandler = function (e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.paddle.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.leftPressed = true;
        }
    };
    AppComponent.prototype.keyUpHandler = function (e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.paddle.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.leftPressed = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "keyDownHandler", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "keyUpHandler", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/model/ball.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/ball.model.ts ***!
  \********************************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
var Ball = /** @class */ (function () {
    function Ball() {
        this.dx = 2;
        this.dy = -2;
        this.radius = 10;
    }
    return Ball;
}());



/***/ }),

/***/ "./src/app/shared/model/brick.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/brick.model.ts ***!
  \*********************************************/
/*! exports provided: Brick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brick", function() { return Brick; });
var Brick = /** @class */ (function () {
    function Brick() {
        this.rowCount = 3;
        this.columnCount = 5;
        this.width = 75;
        this.height = 20;
        this.padding = 10;
        this.offsetTop = 30;
        this.offsetLeft = 30;
    }
    return Brick;
}());



/***/ }),

/***/ "./src/app/shared/model/paddle.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/paddle.model.ts ***!
  \**********************************************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paddle", function() { return Paddle; });
var Paddle = /** @class */ (function () {
    function Paddle() {
        this.height = 10;
        this.width = 75;
        this.rightPressed = false;
        this.leftPressed = false;
    }
    Paddle.prototype.resetPress = function () {
        this.rightPressed = false;
        this.leftPressed = false;
    };
    return Paddle;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/SriniK/github-srinivask048/games/breakup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map