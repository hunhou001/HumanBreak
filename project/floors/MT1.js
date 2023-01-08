main.floors.MT1=
{
    "floorId": "MT1",
    "title": "洞穴",
    "name": "1",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T331",
    "bgm": "cave.mp3",
    "firstArrive": [
        "\t[原始人]\b[up,hero]呼，今天也有这些黏糊糊的东西啊。",
        "\t[原始人]\b[up,hero]真是奇怪，自从那次山火之后这里就出现了这些东西。",
        "\t[原始人]\b[up,hero]真是搞不清他们的来历。",
        "\t[原始人]\b[up,hero]不过好在他们反抗能力很弱，随便打打就能打过去了。",
        {
            "type": "if",
            "condition": "(flag:hard===1)",
            "true": [
                "游戏的基础玩法可以在百科全书中查看，你可以按H或者在道具栏打开。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT0",
            "loc": [
                7,
                0
            ]
        },
        "0,4": {
            "floorId": "MT2",
            "loc": [
                14,
                4
            ]
        },
        "11,0": {
            "floorId": "MT3",
            "loc": [
                10,
                14
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [20044,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050, 91,20048,20049,20043],
    [20050,20057,20057,20057,20057,20057,20057,20057,20057,20057,20058,  0,20056,20057,20040],
    [20058,20065,20065,20065,20065,20065,20065,20065,20065,20065,20074,  0,20064,20065,20040],
    [20074,  0,141, 27,  0, 28,  0,  0,206,141,141, 32,  0,  0,20040],
    [ 92, 27,141,141,141,141,141,141,  0, 31,  0,202,141,203,20040],
    [20034,  0, 31,  0,  0,141,  0,141,141,141,141,141,141,  0,20040],
    [20042,205,141,141,201,141, 32,  0,141, 28,  0,141,  0,  0,20040],
    [20042,  0,  0,141,  0,141,141,202,141,  0, 31,202,  0, 31,20040],
    [20042,  0, 31,141,  0,  0,  0,  0,  0,205, 17, 17, 17, 17,20040],
    [20042,141,141,141,205,141,141,141,141,  0,203, 32,  0, 27,20040],
    [20042,  0,  0,201,  0,  0,141,  0,141,202, 17,  0,  0,  0,20040],
    [20042,202, 17, 17,  0,  0,205, 31,  0, 28, 17, 28,  0, 32,20040],
    [20042,  0, 27, 17, 31,141,141,141,141,201, 17, 17, 17, 17,20040],
    [20042, 32,  0, 17,  0,201,  0,  0,201, 31,202,  0, 32,  0,20040],
    [20036,20033,20033,20033,20033,20033,20034, 93,20032,20033,20033,20033,20033,20033,20035]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,141,141,141,141,141],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,141,  0,  0,  0,  0],
    [  0,  0,141,141,  0,  0,  0,  0,  0,  0,141,  0,  0,  0,  0],
    [  0,  0,  0,141,  0,  0,  0,  0,  0,  0,141,141,141,141,141],
    [  0,  0,  0,141,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,141,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "bg2map": [

],
    "fg2map": [

]
}