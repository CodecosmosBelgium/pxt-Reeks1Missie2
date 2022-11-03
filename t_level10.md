# Missie 2
### @hideIteration true
### @flyoutOnly true
```blocks
player.onChat("level", function () {
CodeCosmos.startingPosition();
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 2; index++) {
                agent.turn(RIGHT_TURN)
                for (let index = 0; index < 2; index++) {
                    agent.move(FORWARD, 1)
                    agent.place(DOWN)
                }
            }
            for (let index = 0; index < 2; index++) {
                agent.turn(LEFT_TURN)
                for (let index = 0; index < 2; index++) {
                    agent.move(FORWARD, 1)
                    agent.place(DOWN)
                }
            }
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 12; index++) {
            agent.move(LEFT, 1)
            agent.place(DOWN)
        }
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})
player.onChat("level2", function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(RIGHT, 1)
        agent.place(DOWN)
    }
})
player.onChat("level6", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 7; index++) {
            agent.move(RIGHT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 9; index++) {
            agent.move(LEFT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(BACK, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 4; index++) {
            agent.move(RIGHT, 1)
            agent.place(DOWN)
        }
        agent.move(RIGHT, 1)
        agent.place(DOWN)
    }
})
player.onChat("level1", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})
player.onChat("level3", function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(LEFT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(RIGHT, 1)
            agent.place(DOWN)
        }
    }
})
player.onChat("level4", function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 6; index++) {
            agent.move(RIGHT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(RIGHT, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        for (let index = 0; index < 8; index++) {
            agent.move(LEFT, 1)
            agent.place(DOWN)
        }
    }
})
```
```template
player.onChat("level", function () {
CodeCosmos.startingPosition();
})
```
## Lanceer de raket!
Volg de instructies op het leerplatform om de opdracht op te lossen.