### @hideIteration true
### @flyoutOnly true
# Missie 2 NL
```blocks
player.onChat("level5", function () {
CodeCosmos.startingPosition();
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 2; index++) {
                agent.turn(RIGHT_TURN)
                for (let index = 0; index < 2; index++) {
                    agent.move(FORWARD, 1)
                    CodeCosmos.placeRedstone()
                }
            }
            for (let index = 0; index < 2; index++) {
                agent.turn(LEFT_TURN)
                for (let index = 0; index < 2; index++) {
                    agent.move(FORWARD, 1)
                    CodeCosmos.placeRedstone()
                }
            }
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 12; index++) {
            agent.move(LEFT, 1)
            CodeCosmos.placeRedstone()
        }
        agent.move(FORWARD, 1)
        CodeCosmos.placeRedstone()
    }
})
player.onChat("level2", function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        agent.move(RIGHT, 1)
        CodeCosmos.placeRedstone()
    }
})
player.onChat("level6", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 7; index++) {
            agent.move(RIGHT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 9; index++) {
            agent.move(LEFT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(BACK, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 4; index++) {
            agent.move(RIGHT, 1)
            CodeCosmos.placeRedstone()
        }
        agent.move(RIGHT, 1)
        CodeCosmos.placeRedstone()
    }
})
player.onChat("level1", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        CodeCosmos.placeRedstone()
    }
})
player.onChat("level3", function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(RIGHT, 1)
            CodeCosmos.placeRedstone()
        }
    }
})
player.onChat("level4", function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 6; index++) {
            agent.move(RIGHT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(RIGHT, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            CodeCosmos.placeRedstone()
        }
        for (let index = 0; index < 8; index++) {
            agent.move(LEFT, 1)
            CodeCosmos.placeRedstone()
        }
    }
})
```
```template
player.onChat("level1", function () {
CodeCosmos.startingPosition();
})
```
## Herstel het moederbord
Volg de instructies op het leerplatform om de opdracht op te lossen.