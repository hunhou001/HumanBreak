main.floors.MT47=
{
    "floorId": "MT47",
    "title": "冰封高原",
    "name": "47",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "T580",
    "bgm": "winter.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT42",
            "loc": [
                2,
                0
            ]
        },
        "7,0": {
            "floorId": "MT48",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT47_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT47_7_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,3": {
            "0": {
                "condition": "flag:door_MT47_7_3==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT47_7_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,70030,  0,  0,  0,604, 91,604,70029,70029,70029,70029,  0,  0],
    [  0,  0,70030,  0,70031,  0,604,468,604,  0,  0,  0,70028,70030,70030],
    [70030,70030,70030,70031,70031,70031,604,608,604,70028,70028,70028,70028,  0,  0],
    [  0,  0,  0,70031,  0,  0,611, 85,611,  0,  0,  0,70029,70029,70029],
    [70031,  0,  0,  0,  0,613,  0,  0,  0,  0,604,643,  0,  0,604],
    [70031,586,586,586,586,586,602,604,608,604,604,  0,604,  0,604],
    [70031,  0,  0,494, 32,586,  0,604,  0,602,  0,  0,604,  0,604],
    [70031,  0,  0,585,592,  0,  0,604,  0,587,587,587,587,587,587],
    [  0,617,585,585,492,586,586,586,378,587,587,  0,492,482,587],
    [  0,  0,611,  0,376,  0,  0,492,  0,  0,602,  0,587,482,587],
    [  0,643,584,584,584,614,584,584,584,600,584,608,585,585,585],
    [70029,  0,  0,  0,584,376,  0,584,  0,378,584,  0,  0,  0,585],
    [70029,  0,  0,  0,584, 34,381,643,381, 34,584,  0,  0,  0,585],
    [70029,584,584,584,584,584,584,  0,584,584,584,584,584,584,584],
    [70029,  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,70056,  0,70058,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70056,  0,70058,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70056,  0,70058,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70056,  0,70058,  0,  0,  0,  0,  0,  0],
    [  0,70048,70049,70049,70049,70049,70051,  0,70052,70049,70049,70049,70049,70049,70049],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70064,70065,70065,70065,70065,  0,  0,  0,70065,70065,70065,70065,70065,70065],
    [  0,70072,70073,70073,70073,70073,70073,  0,70073,70073,70073,70073,70073,70073,70073]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70112,70113,70114,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70120,70121,70122,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}