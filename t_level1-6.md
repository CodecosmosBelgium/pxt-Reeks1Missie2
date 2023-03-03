### @hideIteration true
### @flyoutOnly true
# Missie 2
```blocks
player.onChat("jump", function () {
    CodeCosmosEN.startingPosition()
    for (let index = 0; index < 4; index++) {
        CodeCosmosEN.moveAndPlace(FourDirection.Left, 0)
        CodeCosmosEN.checkLevel()
    }
})
```

```template
player.onChat("start", function () {
CodeCosmosEN.startingPosition();
})
```
## Repare motherboard (v1.0)
Use the learning platform to solve the exercise.