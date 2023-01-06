//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition"
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.setSlot(1);
        player.execute("function levels/startingPosition");
    }

    //% block="agent place and move $direction by $amount"
    //% block.loc.nl="agent plaats en beweeg $direction met $amount"
    export function moveAndPlace(direction:FourDirection, amount:number) {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        for(let i = 0; i < amount; i++){
            agent.move(direction, 1);
            placeAndCheck();
        }
    }
}