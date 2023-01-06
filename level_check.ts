let correctPositions: Position[] = [];


function placeAndCheck() {
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    player.say(`cp: ${correctPositions.length}`);

    if (correctPositions.indexOf(detectPostion) === -1 && (blocks.testForBlock(Block.LightGrayConcrete, detectPostion) || blocks.testForBlock(Block.WhiteConcrete, detectPostion) || blocks.testForBlock(Block.RedstoneBlock, detectPostion))) {
        agent.place(DOWN)
        correctPositions.push(detectPostion);
        player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)

    } else {
        player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
    }

    player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
}