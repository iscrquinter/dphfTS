/// <reference path="ducks.ts" />

namespace MiniDuckSimulator {
    export function main() : void {
        var mallard : Ducks.Duck = new Ducks.MallarDuck();

        mallard.performQuack();
        mallard.performFly();
    }
}