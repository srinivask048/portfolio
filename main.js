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

module.exports = "* { \n    padding: 0; margin: 0; \n}\ncanvas { \n    background: #eee; display: block; margin: 0 auto; \n    width: 480px;\n    height: 320px;\n}\n.convas-container{\n    position: relative;\n}\n@media(min:450px){\n\n}\n.paddle-button{\nposition: absolute;\nbottom: 30%;\nheight: 60px;\nwidth: 60px;\nbackground-color: #a9a9a9;\nz-index: 10;\nborder-radius: 50%;\n}\n.paddle-button:hover{\n    opacity: 0.7;\n}\n.left-paddle{\nleft: 0px;\n}\n.right-paddle{\n    right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLENBQUMsVUFBVTtDQUN6QjtBQUNEO0lBQ0ksaUJBQWlCLENBQUMsZUFBZSxDQUFDLGVBQWU7SUFDakQsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEOztDQUVDO0FBRUQ7QUFDQSxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGFBQWE7QUFDYixZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixtQkFBbUI7Q0FDbEI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtBQUNBLFVBQVU7Q0FDVDtBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHsgXG4gICAgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBcbn1cbmNhbnZhcyB7IFxuICAgIGJhY2tncm91bmQ6ICNlZWU7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDAgYXV0bzsgXG4gICAgd2lkdGg6IDQ4MHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG59XG5cbi5jb252YXMtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYShtaW46NDUwcHgpe1xuXG59XG5cbi5wYWRkbGUtYnV0dG9ue1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOiAzMCU7XG5oZWlnaHQ6IDYwcHg7XG53aWR0aDogNjBweDtcbmJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XG56LWluZGV4OiAxMDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbn0gXG5cbi5wYWRkbGUtYnV0dG9uOmhvdmVye1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmxlZnQtcGFkZGxle1xubGVmdDogMHB4O1xufVxuXG4ucmlnaHQtcGFkZGxle1xuICAgIHJpZ2h0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"convas-container\">\n<canvas id=\"myCanvas\" width=\"480\" height=\"320\" (click)=\"canvasClickHandler()\" (dblclick)=\"canvasDoubleClkHandler()\"></canvas>\n<a class=\"paddle-button left-paddle\" id=\"left-paddle\" (click)=\"tapHandler('L')\" href=\"#\"></a>\n<a class=\"paddle-button right-paddle\" id=\"right-paddle\" (click)=\"tapHandler('R')\" href=\"#\"></a>\n<router-outlet></router-outlet>\n</div>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.ballDX = 2;
        this.ballDY = -2;
        this.ballRadius = 10;
        //paddle
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.rightPressed = false;
        this.leftPressed = false;
        //bricks
        this.brickRowCount = 3;
        this.brickColumnCount = 5;
        this.brickWidth = 75;
        this.brickHeight = 20;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
        this.bricks = [];
        //score
        this.score = 0;
        //lives
        this.lives = 3;
        this.title = 'breakup';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.canvas = document.getElementById("myCanvas");
        this.canvasCtx = this.canvas.getContext("2d");
        this.ballX = this.canvas.width / 2;
        this.ballY = this.canvas.height - 30;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
        var bricks = [];
        for (var c = 0; c < this.brickColumnCount; c++) {
            bricks[c] = [];
            for (var r = 0; r < this.brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
        this.bricks = bricks;
        this.draw();
    };
    AppComponent.prototype.mouseMoveHandler = function (e) {
        var relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    };
    AppComponent.prototype.canvasClickHandler = function () {
        this.stopAnnimation();
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
        this.ballX += this.ballDX;
        this.ballY += this.ballDY;
        if (this.ballX + this.ballDX > this.canvas.width - this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
            this.ballDX = -this.ballDX;
        }
        if (this.ballY + this.ballDY < this.ballRadius) {
            this.ballDY = -this.ballDY;
        }
        else if (this.ballY + this.ballDY > this.canvas.height - this.ballRadius) {
            if (this.ballX > this.paddleX && this.ballX < this.paddleX + this.paddleWidth) {
                this.ballDY = -this.ballDY;
            }
            else {
                this.lives--;
                if (!this.lives) {
                    alert("GAME OVER");
                    document.location.reload();
                    this.stopAnnimation();
                }
                else {
                    this.ballDX = this.canvas.width / 2;
                    this.ballY = this.canvas.height - 30;
                    this.ballDX = 2;
                    this.ballDY = -2;
                    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
                }
            }
        }
        this.drawPaddle();
        this.drawScore();
        this.drawLives();
        this.drawInstruction();
        this.collisionDetection();
        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
            this.paddleX += 7;
        }
        else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
    };
    AppComponent.prototype.drawBall = function () {
        this.canvasCtx.beginPath();
        console.count("drawing");
        this.canvasCtx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
        this.canvasCtx.fillStyle = "#0095DD";
        this.canvasCtx.fill();
        this.canvasCtx.closePath();
    };
    AppComponent.prototype.drawPaddle = function () {
        this.canvasCtx.beginPath();
        this.canvasCtx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.canvasCtx.fillStyle = "#0095DD";
        this.canvasCtx.fill();
        this.canvasCtx.closePath();
    };
    AppComponent.prototype.drawBricks = function () {
        var bricks = this.bricks;
        var ctx = this.canvasCtx;
        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                if (bricks[c][r].status == 1) {
                    var brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
                    var brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    };
    AppComponent.prototype.collisionDetection = function () {
        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                var b = this.bricks[c][r];
                if (b.status == 1) {
                    if (this.ballX > b.x && this.ballX < b.x + this.brickWidth && this.ballY > b.y && this.ballY < b.y + this.brickHeight) {
                        this.ballDY = -this.ballDY;
                        b.status = 0;
                        this.score++;
                        if (this.score == this.brickRowCount * this.brickColumnCount) {
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
        ctx.fillText("Double tap to start! Tap to pause.", 100, 20);
    };
    AppComponent.prototype.drawLives = function () {
        var ctx = this.canvasCtx;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    };
    AppComponent.prototype.tapHandler = function (key) {
        if (key === 'R') {
            this.rightPressed = true;
        }
        else if (key == 'L') {
            this.leftPressed = true;
        }
    };
    AppComponent.prototype.keyDownHandler = function (e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
    };
    AppComponent.prototype.keyUpHandler = function (e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
    };
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