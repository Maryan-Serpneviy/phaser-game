export default {
    SCALE: {
        LOGO: 1.45,
        DONUT: 1.1,
        PLAY: 1.25,
        SCORE: 1.25,
        SFX: 0.8,
        GEM: 2
    },
    BOARD: {
        ROWS: 6,
        COLS: 5,
        TYPES: 6,
        SIZE_X: 190,
        SIZE_Y: 100,
        PAD_Y: 1.6
    },
    GAME: {
        GEMH: 100,
        GEMW: 100,
        SWAP: 200,
        FALL: 100,
        DESTROY: 200
    },
    COEF: {
        DONUT: 0.001,
        PLAY: 0.00125,
        POINTER: 1.075
    },
    SIZE: {
        GOTO: 70,
        TITLE: 120,
        CONTENT: 50,
        SCORE: 90
    },
    TIMER_VAL: 90,
    FONT: 'Fredoka One',
    TUT_CONTENT:
    `
    in this match 3 game you have to
    replace donuts by pointing at them
    and make matches of 3 or more that
    are located in one row.
    Your goal is to score as much points
    as you can within given time.
    When estimated time is up, game ends. 
    Except colored donuts you can also
    find special ones which can give you
    bonuses like extra time 
    or score multipliers.
                            Have fun!`
};