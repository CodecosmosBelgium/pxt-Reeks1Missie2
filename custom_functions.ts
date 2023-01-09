//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    function placeAndCheck() {
        const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))

        if (correctPositions.indexOf(detectPostion.toString()) === -1 && (blocks.testForBlock(Block.LightGrayConcrete, detectPostion) || blocks.testForBlock(Block.WhiteConcrete, detectPostion) || blocks.testForBlock(Block.RedstoneBlock, detectPostion))) {
            agent.place(DOWN)
            correctPositions.push(detectPostion.toString());
            player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)

        } else {
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        player.say(`cp: ${correctPositions.length}`)
        player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
    }

    //% block="zetKlaar"
    export function startingPosition() {
        correctPositions = []
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