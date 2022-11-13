main.floors.MT16=
{
    "floorId": "MT16",
    "title": "山顶",
    "name": "16",
    "width": 25,
    "height": 25,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T331",
    "bgm": null,
    "color": null,
    "weather": [
        "cloud",
        2
    ],
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "loadBgm",
            "name": "escape.mp3"
        },
        "\t[野蛮人]\b[up,hero]这里就是山顶了",
        "\t[野蛮人]\b[up,hero]砍一些柴火就赶快回去吧",
        "\t[野蛮人]\b[up,hero]不要待太久",
        "下面是一场追逐战，建议把音乐打开",
        "追逐战很简单，跑就完事了"
    ],
    "eachArrive": [
        {
            "type": "pauseBgm"
        }
    ],
    "parallelDo": "if (flags.chase) {\n\tcore.changeChaseView(true);\n}",
    "events": {
        "23,19": [
            {
                "type": "confirm",
                "text": "是否跳过追逐战",
                "yes": [
                    {
                        "type": "setValue",
                        "name": "flag:finishChase",
                        "value": "true"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT14",
                        "loc": [
                            21,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "T336",
                        "loc": [
                            [
                                25,
                                7
                            ]
                        ],
                        "floorId": "MT14"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.status.maps.MT14.canFlyFrom = false\n}"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ],
                        "floorId": "MT14"
                    },
                    {
                        "type": "exit"
                    }
                ],
                "no": [
                    "追逐战后录像会进行自动修复，不用担心录像问题",
                    {
                        "type": "function",
                        "function": "function(){\ncore.status.maps.MT15.canFlyFrom = false\n}"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.autoFixRouteBoss(true);\n}"
                    }
                ]
            },
            {
                "type": "forbidSave",
                "forbid": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "floorId": "MT14"
            },
            {
                "type": "playBgm",
                "name": "escape.mp3",
                "keep": true
            },
            {
                "type": "animate",
                "name": "amazed",
                "async": true
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "time": 1000,
                "steps": [
                    "backward:3"
                ]
            },
            {
                "type": "setViewport",
                "dxy": [
                    0,
                    -2
                ],
                "time": 500
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]狼！",
                "time": 2000
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]在睡觉",
                "time": 2000
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]悄悄过去把它打死",
                "time": 3000
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]千万不能惊动它",
                "time": 2600
            },
            {
                "type": "setViewport",
                "dxy": [
                    0,
                    2
                ],
                "time": 500
            },
            {
                "type": "moveHero",
                "time": 600,
                "steps": [
                    "up:10"
                ]
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 75,
                "moveMode": "easeIn"
            },
            {
                "type": "setBlock",
                "number": "A506",
                "loc": [
                    [
                        23,
                        8
                    ]
                ]
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    0
                ],
                "time": 300,
                "moveMode": "easeOut"
            },
            {
                "type": "setCurtain",
                "time": 0
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]！！！！！",
                "time": 2000
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]它醒了",
                "time": 2000
            },
            {
                "type": "move",
                "loc": [
                    23,
                    8
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "sleep",
                "time": 200,
                "noSkip": true
            },
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "backward:1"
                ]
            },
            {
                "type": "sleep",
                "time": 200,
                "noSkip": true
            },
            {
                "type": "move",
                "loc": [
                    23,
                    9
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "sleep",
                "time": 200,
                "noSkip": true
            },
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "backward:1"
                ]
            },
            {
                "type": "sleep",
                "time": 200,
                "noSkip": true
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]糟了，我可打不过它",
                "time": 3000
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]跑，只能跑了！",
                "time": 3000
            },
            {
                "type": "moveHero",
                "time": 200,
                "steps": [
                    "backward:9"
                ]
            },
            {
                "type": "jump",
                "from": [
                    23,
                    10
                ],
                "dxy": [
                    0,
                    2
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            {
                "type": "jump",
                "from": [
                    23,
                    12
                ],
                "dxy": [
                    0,
                    2
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            {
                "type": "jump",
                "from": [
                    23,
                    14
                ],
                "dxy": [
                    0,
                    3
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            {
                "type": "autoText",
                "text": "\t[野蛮人]\b[up,hero]跑，快跑！！！！！！！！！",
                "time": 3000
            },
            {
                "type": "autoSave"
            },
            {
                "type": "function",
                "function": "function(){\ncore.startChase();\n}"
            }
        ],
        "2,23": [
            "这里是漏怪检测，将会检测\r[gold]洞穴、山路、山脚、平原\r[white]地区的怪物是否清完",
            {
                "type": "function",
                "function": "function(){\ncore.checkEnemy([0, \"MT0\", \"MT1\", \"MT2\", \"MT3\", \"MT4\", \"MT5\", \"MT6\", \"MT7\", \"MT8\", \"MT9\", \"MT10\", \"MT11\", \"MT12\", \"MT13\", \"MT14\", \"MT15\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:enemyNumber===0)",
                "true": [
                    "请搜刮地上物资，之后此区域无法返回"
                ]
            }
        ],
        "3,23": [
            "即将开始追逐战，最好打开背景音乐，有耳机尽量佩戴耳机，这样游戏体验更佳",
            "为了防止你撞上不该开的门，现在会将所有门打开，并删除所有物品",
            "追逐的时候不能用2技能，不能用楼传，逃跑后要原路返回山洞",
            "逃跑方式：哪里爆炸走哪里",
            "注意，如果失败了必须要刷新页面才能重新开始，否则会出问题",
            "请认真跑，虽然开始追逐的时候有一个自动存档，但不能保证该存档不会出问题",
            "逃跑时的路线基本固定，但可能有一定难度，过不去就直接跳就行了",
            "注意！！！再说一遍！！！重新跑需要刷新页面！！！",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "function",
                "function": "function(){\ncore.initChase();\n}"
            }
        ]
    },
    "changeFloor": {
        "0,23": {
            "floorId": "MT15",
            "loc": [
                63,
                4
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [20076,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20075],
    [20047,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20045],
    [20047,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20045],
    [20047,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30174,30175,  0,20045],
    [20047,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30182,30183,  0,20045],
    [20047,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30190,30191,  0,20045],
    [20047,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30198,30199,  0,20045],
    [20047,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30206,30207,  0,20045],
    [20047,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30174,30175,507,20045],
    [20047,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30182,30183,  0,20045],
    [20047,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30190,30191,  0,20045],
    [20047,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30198,30199,  0,20045],
    [20047,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30206,30207,  0,20045],
    [20047,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30174,30175,  0,20045],
    [20047,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30182,30183,  0,20045],
    [20047,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30190,30191,  0,20045],
    [20047,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30198,30199,  0,20045],
    [20047,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30206,30207,  0,20045],
    [20047,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30128,30129,30130,30131,30174,30175,  0,20045],
    [20047,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30136,30137,30138,30139,30182,30183,  0,20045],
    [20055,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30144,30145,30146,30147,30190,30191,  0,20045],
    [20058,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30152,30153,30154,30155,30198,30199,  0,20045],
    [20074,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30160,30161,30162,30163,30206,30166,  0,20045],
    [ 92,  0,516,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045],
    [20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20067]
],
    "bgmap": [

],
    "fgmap": [

],
    "beforeBattle": {},
    "bg2map": [

],
    "fg2map": [

],
    "cannotMoveIn": {}
}