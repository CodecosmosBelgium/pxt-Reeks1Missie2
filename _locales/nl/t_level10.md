### @hideIteration true
### @flyoutOnly true
# Missie 2
```blocks
player.onChat("jump", function () {
    CodeCosmos.startingPosition()
    for (let index = 0; index < 4; index++) {
        CodeCosmos.moveAndPlace(FourDirection.Left, 0)
        CodeCosmos.place()
        CodeCosmos.checkLevel()
        agent.move(FORWARD, 1)
    }
})
```

```template
player.onChat("lanceer", function () {
CodeCosmos.startingPosition();
})
```
## Lanceer de raket!
Volg de instructies op het leerplatform om de opdracht op te lossen.