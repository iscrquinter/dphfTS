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
    var FlyRocketPowered = (function () {
        function FlyRocketPowered() {
        }
        FlyRocketPowered.prototype.fly = function () {
            console.log("I'm flying with a rocket !");
        };
        return FlyRocketPowered;
    }());
    FlyBehaviors.FlyRocketPowered = FlyRocketPowered;
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
        Duck.prototype.setFlyBehavior = function (fb) {
            this.flyBehavior = fb;
        };
        Duck.prototype.setQuackBehavior = function (qb) {
            this.quackBehavior = qb;
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
    var ModelDuck = (function (_super) {
        __extends(ModelDuck, _super);
        function ModelDuck() {
            var _this = _super.call(this) || this;
            _this.quackBehavior = new DucksBehaviors.Quack();
            _this.flyBehavior = new FlyBehaviors.FlyNoWay();
            return _this;
        }
        ModelDuck.prototype.display = function () {
            console.log("I'm a model Duck...");
        };
        return ModelDuck;
    }(Duck));
    Ducks.ModelDuck = ModelDuck;
})(Ducks || (Ducks = {}));
/// <reference path="ducks.ts" />
var MiniDuckSimulator;
/// <reference path="ducks.ts" />
(function (MiniDuckSimulator) {
    function main() {
        var mallard = new Ducks.MallarDuck();
        mallard.performQuack();
        mallard.performFly();
        var model = new Ducks.ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyBehaviors.FlyRocketPowered());
        model.performFly();
    }
    MiniDuckSimulator.main = main;
})(MiniDuckSimulator || (MiniDuckSimulator = {}));
/// <reference path="miniducksimulator.ts" />
MiniDuckSimulator.main();
