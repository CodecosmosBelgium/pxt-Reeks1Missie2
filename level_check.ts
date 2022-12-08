let correctPositions: Position[] = [];


function placeCheck() {
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))


    if (correctPositions.indexOf(detectPostion) === -1 && (blocks.testForBlock(Block.LightGrayConcrete, detectPostion) || blocks.testForBlock(Block.RedstoneBlock, detectPostion))) {
        agent.place(DOWN)
        correctPositions.push(detectPostion);
        player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)

    } else {
        player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        blocks.place(RED_CONCRETE, detectPostion);
    }

    player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
}