//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="zetKlaar"
    export function startingPosition() {
        agent.setSlot(1);
        player.execute("function levels/startingPosition");
    }

    //% block="plaats"
    export function place() {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        placeAndCheck();
    }

    //% block="agent beweeg $direction met $amount en plaats"
    export function moveAndPlace(direction:FourDirection, amount:number) {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        for(let i = 0; i < amount; i++) {
            agent.move(direction, 1);
            placeAndCheck();
        }
    }
}