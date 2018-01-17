/// <reference path="ducks.ts" />

namespace MiniDuckSimulator {
    export function main() : void {
        var mallard : Ducks.Duck = new Ducks.MallarDuck();

        mallard.performQuack();
        mallard.performFly();

        var model : Ducks.Duck = new Ducks.ModelDuck();

        model.performFly();

        model.setFlyBehavior(new FlyBehaviors.FlyRocketPowered());
        model.performFly();
    }
}