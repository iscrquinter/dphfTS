/// <reference path="ducksbehaviors.ts" />
/// <reference path="flybehaviors.ts" />

namespace Ducks {
    export class Duck {
        protected flyBehavior : FlyBehaviors.FlyBehavior;
        protected quackBehavior : DucksBehaviors.QuackBehavior;

        public display() : void {
        }

        public setFlyBehavior( fb : FlyBehaviors.FlyBehavior ) : void {
            this.flyBehavior = fb;
        }

        public setQuackBehavior ( qb : DucksBehaviors.QuackBehavior ) : void {
            this.quackBehavior = qb;
        }

        public performFly() : void {
            this.flyBehavior.fly();
        }

        public performQuack() : void {
            this.quackBehavior.quack();
        }

        public swim() : void {
            console.log("All ducks float, even decoys!");
        }
    }

    export class MallarDuck extends Duck {
        constructor() {
            super();

            this.quackBehavior = new DucksBehaviors.Quack();
            this.flyBehavior = new FlyBehaviors.FlyWithWings();
            
        }

        public display() : void {
            console.log("I'm a real Mallard duck");
        }
    }

    export class ModelDuck extends Duck {
        constructor() {
            super();

            this.quackBehavior = new DucksBehaviors.Quack();
            this.flyBehavior = new FlyBehaviors.FlyNoWay();
        }

        public display() : void {
            console.log("I'm a model Duck...");
        }
    }
}