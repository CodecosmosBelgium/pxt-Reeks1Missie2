//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //%block="startingPosition"
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.setItem(REDSTONE_WIRE, 64, 1)
        agent.setSlot(1)
        player.execute("function levels/startingPosition");
    }
}