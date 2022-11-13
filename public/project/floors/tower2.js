main.floors.tower2=
{
    "floorId": "tower2",
    "title": "智慧之塔",
    "name": "2",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "T526",
    "bgm": "tower.mp3",
    "firstArrive": null,
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,6": [
            "\t[智慧精灵,N532]\b[down,13,6]这个区域是第一章的最后一个区域了，也是该版本的最后一个区域"
        ]
    },
    "afterBattle": {},
    "afterGetItem": {
        "2,8": [
            "你需要按Q或双击道具栏打开装备栏后装备上该装备才行"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [527,527,527,527,527,527,527,527,527,527,527,527,527,527,527],
    [527, 32,  0,528, 27, 33,537, 88,403,482,528, 33, 28, 33,527],
    [527,528,537,528,528,528, 33,528,482,548,528,549,528,528,527],
    [527, 27, 32,528,482,528, 29,528,528,381,492,  0,381,  0,527],
    [527, 32, 28,492,378,  0,550,  0,528,482,536, 27,482, 28,527],
    [527,546,528,528,528,528,528,  0,528,492,528,548,528,528,527],
    [527,  0,  0, 28,  0, 34,  0,544,528,  0, 27, 21,  0,533,527],
    [527,528,528,528,536,528,528,  0,482,  0,528,537,528,528,527],
    [527,390, 36,494,376, 32,528,528,528,528,528,  0,548, 31,527],
    [527,403,484,528, 32,381,492,  0, 31,544,528, 32,528,528,527],
    [527,547,528,528,528,528,528,492,528,  0,  0,537, 32,  0,527],
    [527,376, 31,  0,381,528, 27, 32,528, 32,528,528,492,528,527],
    [527,492,528,528,546,528, 32, 28,550,  0,528,378, 32,  0,527],
    [527,  0, 22, 31,  0,544, 21,549,528,  0,546, 32,381, 87,527],
    [527,527,527,527,527,527,527,540,527,527,527,527,527,527,527]
],
    "beforeBattle": {},
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "cannotMoveIn": {},
    "changeFloor": {
        "7,1": {
            "floorId": "tower1",
            "loc": [
                1,
                1
            ]
        },
        "7,14": {
            "floorId": "tower6",
            "loc": [
                12,
                42
            ]
        },
        "13,13": {
            "floorId": "tower3",
            "loc": [
                13,
                13
            ]
        }
    }
}