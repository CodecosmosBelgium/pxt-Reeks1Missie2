//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition"
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.setSlot(1);
        player.execute("function levels/startingPosition");
    }

    //% block="agent move $direction by $amount and place"
    //% block.loc.nl="agent beweeg $direction met $amount en plaats"
    export function moveAndPlace(direction:FourDirection, amount:number) {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        agent.move(direction, amount);
        placeAndCheck();
    }
}