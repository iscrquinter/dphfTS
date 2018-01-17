var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DucksBehaviors;
(function (DucksBehaviors) {
    var Quack = (function () {
        function Quack() {
        }
        Quack.prototype.quack = function () {
            console.log("Quack!");
        };
        return Quack;
    }());
    DucksBehaviors.Quack = Quack;
    var MuteQuack = (function () {
        function MuteQuack() {
        }
        MuteQuack.prototype.quack = function () {
            console.log("<< Silence >>");
        };
        return MuteQuack;
    }());
    DucksBehaviors.MuteQuack = MuteQuack;
    var Squeak = (function () {
        function Squeak() {
        }
        Squeak.prototype.quack = function () {
            console.log("Squeak");
        };
        return Squeak;
    }());
    DucksBehaviors.Squeak = Squeak;
})(DucksBehaviors || (DucksBehaviors = {}));
var FlyBehaviors;
(function (FlyBehaviors) {
    var FlyWithWings = (function () {
        function FlyWithWings() {
        }
        FlyWithWings.prototype.fly = function () {
            console.log("I'm flying!");
        };
        return FlyWithWings;
    }());
    FlyBehaviors.FlyWithWings = FlyWithWings;
    var FlyNoWay = (function () {
        function FlyNoWay() {
        }
        FlyNoWay.prototype.fly = function () {
            console.log("I can't fly!");
        };
        return FlyNoWay;
    }());
    FlyBehaviors.FlyNoWay = FlyNoWay;
})(FlyBehaviors || (FlyBehaviors = {}));
/// <reference path="ducksbehaviors.ts" />
/// <reference path="flybehaviors.ts" />
var Ducks;
/// <reference path="ducksbehaviors.ts" />
/// <reference path="flybehaviors.ts" />
(function (Ducks) {
    var Duck = (function () {
        function Duck() {
        }
        Duck.prototype.display = function () {
        };
        Duck.prototype.performFly = function () {
            this.flyBehavior.fly();
        };
        Duck.prototype.performQuack = function () {
            this.quackBehavior.quack();
        };
        Duck.prototype.swim = function () {
            console.log("All ducks float, even decoys!");
        };
        return Duck;
    }());
    Ducks.Duck = Duck;
    var MallarDuck = (function (_super) {
        __extends(MallarDuck, _super);
        function MallarDuck() {
            var _this = _super.call(this) || this;
            _this.quackBehavior = new DucksBehaviors.Quack();
            _this.flyBehavior = new FlyBehaviors.FlyWithWings();
            return _this;
        }
        MallarDuck.prototype.display = function () {
            console.log("I'm a real Mallard duck");
        };
        return MallarDuck;
    }(Duck));
    Ducks.MallarDuck = MallarDuck;
})(Ducks || (Ducks = {}));
/// <reference path="ducks.ts" />
var MiniDuckSimulator;
/// <reference path="ducks.ts" />
(function (MiniDuckSimulator) {
    function main() {
        var mallard = new Ducks.MallarDuck();
        mallard.performQuack();
        mallard.performFly();
    }
    MiniDuckSimulator.main = main;
})(MiniDuckSimulator || (MiniDuckSimulator = {}));
/// <reference path="miniducksimulator.ts" />
MiniDuckSimulator.main();
