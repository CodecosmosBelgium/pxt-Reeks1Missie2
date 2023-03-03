### @hideIteration true
### @flyoutOnly true
# Missie 2
```blocks
player.onChat("jump", function () {
    CodeCosmosEN.startingPosition()
    for (let index = 0; index < 4; index++) {
        CodeCosmosEN.moveAndPlace(FourDirection.Left, 0)
        CodeCosmosEN.place()
        CodeCosmosEN.checkLevel()
        agent.move(FORWARD, 1)
    }
})
```

```template
player.onChat("lanceer", function () {
CodeCosmosEN.startingPosition();
})
```
## Launch the rocket!
Use the learning platform to solve the exercise.