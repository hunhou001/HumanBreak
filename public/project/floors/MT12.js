main.floors.MT12=
{
    "floorId": "MT12",
    "title": "草原",
    "name": "12",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "grass.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,1": [
            "\t[原始人]\b[down,hero]欸，杰克兄弟，你怎么在这啊",
            "\t[杰克,thief]\b[down,7,1]啊，是你呀",
            "\t[杰克,thief]\b[down,7,1]我刚刚被一群怪物追杀，就逃到这里了",
            "\t[杰克,thief]\b[down,7,1]很奇怪，为什么这几天有这么多凶猛的怪物啊",
            "\t[原始人]\b[down,hero]不知道，我记得上一次这样，还是在老虎们在山间找不到食物，下山觅食的时候吧",
            "\t[原始人]\b[down,hero]难道说山上发生了什么灾害吗",
            "\t[杰克,thief]\b[down,7,1]好像有吧",
            "\t[杰克,thief]\b[down,7,1]我前几天还看见一道雷准准地劈在了山顶上",
            "\t[原始人]\b[down,hero]难道是山火吗",
            "\t[原始人]\b[down,hero]不对呀，山火的话我怎么没看见烟啊",
            "\t[杰克,thief]\b[down,7,1]不清楚，反正上面发生了我们不知道的事",
            "\t[原始人]\b[down,hero]（这山上肯定发生了什么不得了的好事，我去了说不定还能找到不少好东西呢）",
            "\t[原始人]\b[down,hero]我要去山上走一遭",
            "\t[杰克,thief]\b[down,7,1]哈？",
            "\t[杰克,thief]\b[down,7,1]兄弟，你不是在骗我吧",
            "\t[杰克,thief]\b[down,7,1]山上这么危险，去了难道不是死路一条？",
            "\t[原始人]\b[down,hero]我最近力量提升很快，所以你不用担心我",
            "\t[杰克,thief]\b[down,7,1]但山上的怪物的强大你也知道，我们十来个人一起去打一个都被打得落荒而逃",
            "\t[原始人]\b[down,hero]（我要不要把绿宝石的事告诉他呢？这一路上有很多绿宝石，他却没有提到，难道他看不见吗？）",
            "\t[原始人]\b[down,hero]（感觉事情很奇怪，还是别告诉他了吧）",
            "\t[原始人]\b[down,hero]我有特殊的方法保命，你不需要操心太多",
            "\t[杰克,thief]\b[down,7,1]那看来我也拦不住你了",
            "\t[杰克,thief]\b[down,7,1]山地那边有一个地方被突然凸起来的高地挡着",
            "\t[杰克,thief]\b[down,7,1]我就把我新学的技能教给你吧",
            "获得技能：跳跃\n快捷键2，消耗200点生命值，困难消耗400点，一个地图只能使用3次\n如果前方为可通行的地面，则不能使用该技能\n如果前方为怪物，则将怪物移至勇士视线上第一个不能通行的方块后\n如果前方为障碍物，则直接跳到该障碍物的后方",
            "\t[原始人]\b[down,hero]多谢兄弟了！",
            "去南方那个之前过不去的地方推进游戏剧情",
            "手机端可以点击右下角的难度来切换下方工具栏至数字键",
            {
                "type": "setValue",
                "name": "flag:skill2",
                "value": "true"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,9": [
            "把四个骷髅卫兵杀死开启机关门"
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT11",
            "loc": [
                7,
                0
            ]
        }
    },
    "afterBattle": {
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT12_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT12_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT12_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT12_7_3",
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
                "condition": "flag:door_MT12_7_3==4",
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
                        "name": "flag:door_MT12_7_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,210,  0, 29, 33, 20,381,123,381, 20, 33, 29,  0,210, 20],
    [ 20,  0, 20, 20,210, 20, 33,381, 33, 20,210, 20, 20,  0, 20],
    [ 20, 33, 20, 20, 20, 20, 20, 85, 20, 20, 20, 20, 20, 33, 20],
    [ 20, 27, 29,  0,369, 20,  0,373,  0, 20,369,  0, 29, 27, 20],
    [ 20, 20, 20, 20,  0, 20, 34, 20, 34, 20,  0, 20, 20, 20, 20],
    [ 20, 29,  0, 34,209,  0, 28, 20, 28,  0,209, 34,  0, 29, 20],
    [ 20, 20, 20,368, 20, 20, 20, 20, 20, 20, 20,368, 20, 20, 20],
    [ 20,  0,372,  0,  0, 20, 29, 20, 29, 20,  0,  0,372,  0, 20],
    [ 20,  0, 20,  0, 20, 20,  0,129,  0, 20, 20,  0, 20,  0, 20],
    [ 20, 34, 20, 27, 34,  0,248,  0,248,  0, 34, 27, 20, 34, 20],
    [ 20, 28, 20, 20, 20, 20, 20,248, 20, 20, 20, 20, 20, 28, 20],
    [ 20,  0, 20,  0, 34,  0,224,  0,224,  0, 34,  0, 20,  0, 20],
    [ 20,  0,276,  0, 29,  0, 20,  0, 20,  0, 29,  0,276,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "beforeBattle": {},
    "weather": [
        "sun",
        8
    ],
    "cannotMoveIn": {},
    "bg2map": [

],
    "fg2map": [

]
}