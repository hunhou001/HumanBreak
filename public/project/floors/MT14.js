main.floors.MT14=
{
    "floorId": "MT14",
    "title": "山路",
    "name": "14",
    "width": 128,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T331",
    "bgm": "mount.mp3",
    "firstArrive": null,
    "eachArrive": [
        {
            "type": "loadBgm",
            "name": "plot1.mp3"
        }
    ],
    "parallelDo": "",
    "events": {
        "24,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(switch:A===true)",
                    "true": [
                        "\t[原始人]\b[up,hero]看来是有什么机关"
                    ],
                    "false": [
                        "\t[原始人]\b[up,hero]这里有个门？",
                        "\t[原始人]\b[up,hero]奇怪，之前都没有的",
                        "\t[原始人]\b[up,hero]暴力破坏试试",
                        {
                            "type": "animate",
                            "name": "hand",
                            "loc": [
                                24,
                                7
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "hand",
                            "loc": [
                                24,
                                7
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "hand",
                            "loc": [
                                24,
                                7
                            ]
                        },
                        "\t[原始人]\b[up,hero]不行，连一点痕迹都没有",
                        "\t[原始人]\b[up,hero]看来是有什么机关",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        }
                    ]
                }
            ]
        },
        "78,5": [
            "别给我说这个地方不知道怎么过，用2技能就好了",
            {
                "type": "setText",
                "position": "down"
            },
            "注意，2技能的要求是前方是不可通行的图块，由于这里的左面是可以通行的地面，所以只能在这里使用",
            {
                "type": "setText",
                "position": "center"
            }
        ],
        "7,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "if",
                    "condition": "flag:finishChase1",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ndelete flags.__bgm__;\ndelete flags.MT14Jump;\ndelete flags['MT14@24@7@A'];\ndelete flags.finishChase1;\ndelete flags.cave;\n}"
                        },
                        {
                            "type": "confirm",
                            "text": "是否跳过剧情",
                            "yes": [
                                {
                                    "type": "changeFloor",
                                    "floorId": "MT17",
                                    "loc": [
                                        0,
                                        7
                                    ],
                                    "direction": "right"
                                }
                            ],
                            "no": [
                                {
                                    "type": "pauseBgm"
                                },
                                "\t[野蛮人,hero]\b[down,hero]呼！",
                                "\t[野蛮人,hero]\b[down,hero]总算逃出来了。",
                                "\t[野蛮人,hero]\b[down,hero]没想到柴火没砍成，还碰到了狼。",
                                "\t[野蛮人,hero]\b[down,hero]真是倒了血霉了。",
                                "\t[野蛮人,hero]\b[down,hero]算了，明天再砍柴吧。",
                                {
                                    "type": "setCurtain",
                                    "color": [
                                        0,
                                        0,
                                        0,
                                        1
                                    ],
                                    "time": 1500,
                                    "keep": true
                                },
                                {
                                    "type": "setText",
                                    "text": [
                                        0,
                                        0,
                                        0,
                                        1
                                    ],
                                    "background": "winskin3.png"
                                },
                                "人类简史——起源篇",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                "但他已经抑制不了自己的好奇心。",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                "人类嘛，总会在好奇心的驱使下前进。",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                "但是，他们却用好奇心给自己带来了灾难，",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                "只得利用历史中的野蛮人的好奇心来拯救自己。",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                "不出所料，这个野蛮人走上了勇气之路。",
                                {
                                    "type": "playSound",
                                    "name": "paper.mp3"
                                },
                                {
                                    "type": "setText",
                                    "text": [
                                        255,
                                        255,
                                        255,
                                        1
                                    ],
                                    "background": "winskin2.png"
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "MT17",
                                    "loc": [
                                        0,
                                        7
                                    ],
                                    "direction": "right"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "21,7": [
            {
                "type": "forbidSave"
            }
        ],
        "127,1": [
            "你是怎么办到的？！",
            {
                "type": "function",
                "function": "function(){\nif (!core.isReplaying()) {\n\tcore.addMountSign(2);\n}\n}"
            }
        ],
        "26,14": [
            "不作死就不会死",
            {
                "type": "function",
                "function": "function(){\nif (!core.isReplaying()) {\n\tcore.addMountSign(1);\n}\n}"
            }
        ],
        "8,2": [
            "这一层有一个必须使用跳跃的地方，需要1个跳跃次数，你一共有3个跳跃次数，请规划好",
            "不要吐槽为什么天气变化这么大（"
        ],
        "80,3": [
            "你可以使用楼传传出去"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT13",
            "loc": [
                7,
                14
            ]
        },
        "127,7": {
            "floorId": "MT15",
            "loc": [
                0,
                7
            ]
        }
    },
    "afterBattle": {
        "21,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_24_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "21,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_24_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "22,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_24_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "22,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_24_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "91,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_95_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "93,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_95_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "93,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_95_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "91,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT14_95_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "26,7": [
            "\t[原始人]\b[up,hero]下面是一段很长的山路，要集中精力，不要被埋伏了",
            "游戏特性：使用跳跃技能时，悬崖视为不可通行但不可对着它使用跳跃"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "24,7": {
            "0": {
                "condition": "flag:door_MT14_24_7==4",
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
                        "name": "flag:door_MT14_24_7",
                        "value": "null"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[原始人]\b[up,hero]原来是这样吗"
                ]
            },
            "1": null
        },
        "95,3": {
            "0": {
                "condition": "flag:door_MT14_95_3==4",
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
                        "name": "flag:door_MT14_95_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,1": {
            "0": null,
            "1": null,
            "2": null
        }
    },
    "cannotMove": {},
    "map": [
    [152,152,152,152,152,152,152, 91,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,20053,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20075],
    [152,376,482,152,482, 27,152,  0,  0,236,  0,  0, 33,152,482,378, 21,381,  0, 27,152, 34, 29,152,152,20056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,129],
    [152,  0, 28,152,381,  0,235, 21,129,152,502,152,381,492,494,152,152,152,152,482,152, 29, 34,152,152,20064,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,  0],
    [152,152,  0,152,492,152,152,  0,152, 29, 33,152,  0,152,376,482, 21,378,152,  0,498, 34, 29,152,152, 27,336, 33,  0, 28,  0,345, 33,381,  0,235,141, 27,492,376,378,403,484,  0, 22,141, 21,336, 27, 28,381,  0, 34,502, 34,141,141,141,376,403,403,  0,254,333,  0,  0, 32,336, 32,333,376,  0,482,403,482,503,  0, 34,378,  0,129, 34,376,  0,336, 28,492,376,378, 21,403,503, 33,503,482, 85,  0,378,375,20007,482,  0,375,494,  0,207,  0,141,  0,499,  0,141, 22, 27,345,492,  0,376,345,403, 21, 34,378,336,376,381,376,20053],
    [152,482,498,  0, 27,  0,152,482,152,  0,152,152,  0,152,482,152,371,403,152,152,152,492,254,152,152,482,498,  0,345,345,  0,345,  0,336,336,  0,381, 32,141,141,492,141,141,141,371,141, 27,336,141,141,498,141,502,333,502,  0,403,492, 34,141,333,333,  0, 32, 32, 27, 21,502,  0,333,141,141,492,141,503,141,141,141, 34,  0,336, 33,378,  0,336, 28,345,222,141,141,141, 33,336, 33,390,396,  0,482,  0,492,  0,20007, 33,20007, 34,20007, 27,141,482,141,  0,141, 28, 33,345,  0,336, 34,345,  0,340,376,  0,336, 32,378, 32,20056],
    [152,492,152,482,  0,152,152,152,152,152,152,  0,502,152,152,152,  0,152,152,  0,482, 29,  0,152,152,381,336, 27,492, 27,272, 28,498, 33,336,502,141,141,141,235,  0, 34,403,492,  0,254, 33,336,  0, 27,  0,492, 34,502, 34,141,  0,371,  0,141,  0,378,211,333,  0,503,336,336,502,  0, 28, 32,498,141,  0,376,482,498,129,  0,375, 34,403,  0,336, 28,345,  0, 33,141,141,503, 33,503,403,403,  0,336,378,482,499,20007,378,20007,381,20007,381,378,  0,141, 34,141,345,381,  0,499,336,  0,345, 32,340,492,222,336,492,336,222,  0],
    [152,482,152,152,235,152, 29, 34,152, 33,  0, 21,152,152,272,  0,502,482,502, 28,  0,235,152,152,152,336,336,  0,345,345, 33,345,336, 28,336,  0,  0,502,  0, 32,141,141,  0,141, 33,141,  0,381,211, 33,141,141,502,333,502,141,141,141,141,141,336,482,336,336,371,482,376,492, 33,333,502,141,381,141,375,141,141,  0,345,  0,  0,  0,  0,  0,  0,375,  0,381,371,141,141,141,141, 21,336,403,371,  0,20007,492,20007,20007, 33,20007,378,20007,141,141,141,141,378,141,345,345,492,  0, 27,503,345,345,340,  0,  0,336,  0,336, 34,336],
    [152,  0, 28, 21,  0,492, 34,502,  0,  0, 27,212,  0,  0, 33, 29,152,152,152,492,152,  0, 33,  0, 85,  0,487,254,  0,340,381,340,502,  0,  0,381,333,141,141,503,141,141,498,  0, 28,141,498,492,336,  0, 28,381, 34,502, 34,141,381, 28,376,  0,503,381,492,403,403,381,482,336, 27,333,  0, 32,  0,141,  0, 32,141, 27, 33,371,345,  0,333,336,336,482,336,336, 33, 27,378,381, 33,207,403,482,340,351, 34,381,378, 34,503,20007,381,20007,  0,  0, 34,376,272,381, 33,  0,  0,371,492, 34,403,  0,  0,492,  0,381, 32,336,403, 94],
    [152,152,152,  0,152,152,152,152,502,492,152,152,152,152,  0,  0,152,  0, 29, 33,152,152,152,152,152,336,336,340,  0,340,502,  0, 27,336,336,492,333,376,  0,403,336,141, 27,345,235,  0, 33, 27,336,141,141,141,494,492, 21,492,  0,141,141,141,482,336,336,403,403,  0,  0,  0,  0,  0,  0,  0,272,  0,381, 32,141,336,336,403,345,  0,333,381,  0,503, 34,403,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,371,20007,20007,20007,20007,20007, 34,20007,141,141,141,141,345,345,503,345,345,  0, 28,503,336,336, 34,  0,375,336,  0,207, 34,336],
    [152,381,  0,221,152,  0,  0, 33,  0,212,152,381, 34,492,236,492,152,  0,152,  0,152,498,498,152,152,381,336,  0,502, 33, 29,340,502,  0,333,378,403,503,141, 34,336,381,  0,336,141,141,141,  0,336,482,482,141, 33,336,403,  0,371,  0,366,366,381,498,  0,492,345,  0,  0,498,336,  0,  0,  0,  0,141,141,141,141, 27, 28,484,345,498,  0, 33, 27,345,371, 34,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21, 33,381,378,381,  0,503,492, 34,376,  0,141, 33,492,376,  0,503, 33,336,378, 34,499,  0,336,  0,336,371,336,492,20037],
    [152,152,152,  0,152,152,152,152,152,  0,152, 34,381,152,  0,482,  0,212,152, 27,152,498,498,152,152,482,211,  0,340,340,340,340,  0,333,333, 33, 17, 28,141,378,492,492,336,336, 34, 28,211,  0,336,492,141,141,403,333,141,141,366,  0,378,494,376,336,  0, 32,345,  0,211,  0,  0,340,376,403, 27,336, 33,403,336,336,336,336,336,  0,336,336,345,345,482,492,376,378,336,  0,482,376,  0,207,333,333,494,336,336,336,336,336,336,336,  0,141,141,141,  0,375, 21, 33,492,  0,336,336,336,494,336,  0, 27,336, 28,381, 28,20045],
    [152,  0,482, 27,492,381, 27,482,152, 33,492,492,152,152,152,152,152, 21,152,  0,152,152,492,152,152, 27,336,371,403, 33,376,492,381, 28,  0,371, 17, 34, 27,375,376,378,403, 33,336,  0,336,254, 32, 28,207,376,378,333,482,482,492,482,  0,375,  0,336, 32,  0,235,  0,336,  0, 34,371,482,378,  0,  0,211,  0,492,376,378,403, 33,207, 33,  0,  0,345,403,403,403,403, 33,222,336,403,333,482,376,376,376,503,503,503,  0,403,403, 34,503, 34,  0,381,376,345,378,  0,333,511,390,396,403,484,336, 28, 32,336, 32, 27, 32,20045],
    [152,152,211,152,152,152,152,254,152,  0,152,482, 27,152,  0,482,502,  0,152,  0,152,482,  0,152,152,20037,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20067],
    [152,  0,  0,  0, 29, 33,  0,  0,  0,374,152, 29,482,211,  0, 28,152,272,  0,211,  0, 22, 27,152,152,20045,  0,336, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,20045,129,336, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,20053,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20075],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,20056,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20057,20045],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,20064,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20065,20073,20045],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20037,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20039,  0,  0,  0,  0,20037,20038,20038,20038,20038,20038,20038,20038,20038,20038,20039,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20053],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,  0,  0,20045,20047,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20056],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,  0,  0,20045,20047,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20064],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20068,20038,20038,20038,20038,20067,  0,  0,  0,  0,  0,  0,  0,  0,  0,20068,20038,20038,20067,20047,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20053,20054,  0,  0,20054,20054,20054,20075,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20076,20054,20054,20054,20054,20054,20054,20054,20054,20054,20055,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20056,20057,20152,20153,20057,20057,20057,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,20057,20057,20057,20057,20057,20057,20057,20057,20057,20058,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20064,20065,20152,20153,20065,20065,20065,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,20065,20065,20065,20065,20065,20065,20065,20065,20065,20074,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20037],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20047,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20053,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20054,20055,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20045],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,20037,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20038,20067],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,  0,20045,  0,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,305,  0,  0,20045,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,20000,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "color": [
        0,
        0,
        0,
        0.3
    ],
    "weather": [
        "cloud",
        1
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "bg2map": [

],
    "fg2map": [

]
}