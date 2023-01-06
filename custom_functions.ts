//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition"
    //% block.loc.nl="zetKlaar"
    export function startingPosition() {
        agent.setSlot(1);
        agent.setAssist(PLACE_ON_MOVE, true);
        agent.setItem(REDSTONE_WIRE, 64, 1);
        player.execute("function levels/startingPosition");
    }

    //% block="giveRedstone"
    //% block.loc.nl="geefRedstone"
    export function giveRedstone() {
        if (agent.getItemCount(1) < 10) {
            agent.setItem(REDSTONE_WIRE, 64, 1)
        }
    }
}