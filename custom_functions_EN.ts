//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {
    function placeAndCheck() {
        const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))

        if (correctPositions.indexOf(detectPostion.toString()) === -1 && !blocks.testForBlock(Block.GreenConcrete, detectPostion) && !blocks.testForBlock(Block.GrayConcrete, detectPostion) && (blocks.testForBlock(Block.LightGrayConcrete, detectPostion) || blocks.testForBlock(Block.WhiteConcrete, detectPostion) || blocks.testForBlock(Block.RedstoneBlock, detectPostion))) {
            agent.place(DOWN)
            correctPositions.push(detectPostion.toString());
            player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)

        } else {
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
    }

    //% block="startingPosition"
    export function startingPosition() {
        correctPositions = []
        agent.setSlot(1);
        player.execute("function levels/startingPosition");
        place();
    }

    //% block="check level"
    export function checkLevel() {
        const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        const detectPostion2 = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 2, agent.getPosition().getValue(Axis.Z))
        const endPositionLevel1 = world(78, 70, 0).toString()
        const endPositionFinalLevel = world(68, 77, -9).toString()
        const agenPosition = agent.getPosition().toString()

        if (blocks.testForBlock(Block.RedstoneBlock, detectPostion) || blocks.testForBlock(Block.GreenWool, detectPostion2) || agenPosition === endPositionLevel1 || agenPosition === endPositionFinalLevel) {
            player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
        }
    }

    //% block="place"
    export function place() {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        placeAndCheck();
    }

    //% block="agent move $direction with $amount and place"
    export function moveAndPlace(direction: FourDirection, amount: number) {
        agent.setItem(REDSTONE_WIRE, 64, 1);
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1);
            placeAndCheck();
        }
    }
}