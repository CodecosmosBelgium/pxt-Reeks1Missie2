### @hideIteration true
### @flyoutOnly true
# Missie 2
```blocks
player.onChat("jump", function () {
    CodeCosmos.startingPosition()
    for (let index = 0; index < 4; index++) {
        CodeCosmos.moveAndPlace(FourDirection.Left, 0)
        CodeCosmos.checkLevel()
    }
})
```

```template
player.onChat("start", function () {
CodeCosmos.startingPosition();
})
```
## Herstel het moederbord (v1.0)
Volg de instructies op het leerplatform om de opdracht op te lossen.