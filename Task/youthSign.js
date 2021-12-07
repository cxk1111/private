
let s = 200 //各数据接口延迟
const $ = new Env("中青看点")
let notifyInterval = $.getdata("notifytimes") || 50 //通知间隔，默认抽奖每50次通知一次，如需关闭全部通知请设为0
const YOUTH_HOST = "https://kd.youth.cn/WebApi/";
const notify = $.isNode() ? require('./sendNotify') : '';
let signheaderVal = '',
    articlebodyVal = '',
    timebodyVal = '',
    redpbodyVal = '',
    detail = ``, subTitle = ``;


const firstcheck = $.getdata('signt');
const runtimes = $.getdata('times');
const opboxtime = $.getdata('opbox');


/*ck存放区*/
let cookiearr = ["MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWOwzZuwhaKCm664qmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooKars-2rIOJdbKEY2Ft","MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWOxp59thLJ-mK6oqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooLert-qZoOJiW6EY2Ft"]
let cookieidarr = ["7bfe95c28eaa7bfe4bb04a0fce665958","761b3a4e920fe431bb753db0d00aabf5"]
let url = "https://script.baertt.com/count2/callback?si=dc4f108a00226febb43297a80f623412&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DRpqGjEWYvLyBl2g1l2dVMAIzY0XdTvKlpQE7D56Pd3OMonkQx9%2526uid%253D52806391%2526phone_code%253Dd84c65e2a2b03897b46fc69116f4cee4%2526scid%253D41101016%2526time%253D1638611370%2526app_version%253D2.0.2%2526sign%253De8a6d7c88a15a232d82e335edd2febf9&_=1638611392396&jsonpcallback=jsonp5"




!(async () => {
    
    newtaskarr = ["taskbox_watch", "taskbox_ad", "taskbox_game", "taskbox_video", "taskbox_read"]
    taskarr = ["read_time_sixty_minutes", "watch_article_reward", "watch_video_reward", "read_time_two_minutes", "first_share_article", "new_fresh_five_video_reward"]

    console.log(`-------------------------\n\n开始【中青看点】`)
    await getShareInfo();

    for (let i = 0; i < cookiearr.length; i++) {
        cookie=cookiearr[i];
        cookieid=cookieidarr[i];
        signheaderVal = { "Referer": `https://kd.youth.cn/h5/20190301taskcenter/ios/index.html?access=WIfI&app_version=2.0.2&device_platform=iphone&cookie_id=${cookieid}&device_type=1&device_brand=iphone&cookie=${cookie}` }
        
        await sign();
        await signInfo();
        await punchCard()
        await endCard();
        await SevCont();
        await TimePaceket();

        //   for (let i = 0; i < 4; i++)
        //  await boxfinish(i+1);

        for (let i = 0; i < taskarr.length; i++)
            await finishtask(taskarr[i]);

        for (let i = 0; i < newtaskarr.length; i++)
            await newfinishtask(newtaskarr[i]);
        await openbox();
        for (let i = 0; i < 5; i++) {
            await rotary();
            await $.wait(3000);
        }
        await rotaryCheck();
        await earningsInfo();
        await showmsg();
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())




//分享数据获取
async function getShareInfo() {
    try {
        var s_si = url.match(/si=(.*?)&/)[1];
        // console.log("url:" + url);
        // console.log("s_si:" + s_si);
        //$.msg("中青分享", "", "数据获取成功");
        for (let i = 1; i < 5; i++) {
            await postShareInfoa(url, s_si, i)
        }
    } catch (error) {
        $.msg("中青数据获取失败", "", "️中青数据获取失败");
    }
}
async function postShareInfoa(o_url, o_si, num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var n_si = randomsi();
            var iosV = parseInt(Math.random() * (14 - 11 + 1) + 11, 1);
            var n_url = o_url.replace(o_si, n_si);
            var header = {
                'Accept-Encoding': `gzip, deflate, br`,
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `https://focus.youth.cn/`,
                'Host': `script.baertt.com`,
                'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS ${iosV}_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000730) NetType/WIFI Language/zh_CN`,
                'Accept-Language': `zh-cn`
            };

            let url = {
                url: n_url,
                headers: header,
            };
            $.get(url, async (err, resp, data) => {
                try {
                    console.log(data)
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            });

            return 0;
        }, 3000)
    })
}

//随机udid 小写
function randomsi() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}


function boxfinish(id) {
    return new Promise((resolve, reject) => {
        const url = `https://kd.youth.cn/WebApi/RecommendTask/getBoxReward?id=${id}&video=0`;
        const request = {
            url: url,
            headers: signheaderVal
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.status == 1)
                        $.log(`【任务奖励】奖励成功，共+${result.data.score}青豆`);
                    else if (result.status == 0)
                        $.log(`【任务奖励】奖励失败，${result.msg}`);
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function newfinishtask(task) {
    return new Promise((resolve, reject) => {
        const url = `https://kd.youth.cn/WebApi/Task/getTaskBoxReward?task=${task}`;

        const request = {
            url: url,
            headers: signheaderVal
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.status == 1)
                        $.log(`【任务奖励】奖励成功，共+${result.data.score}青豆`);
                    else if (result.status == 0)
                        $.log(`【任务奖励】奖励失败，${result.msg}`);
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function finishtask(task) {
    return new Promise((resolve, reject) => {
        const url = `https://kd.youth.cn/WebApi/NewTaskIos/sendTwentyScore?action=${task}&uid=52806391&cookie_id=${cookieid}&cookie=${cookie}`;
        const request = {
            url: url,
            headers: {}
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`【任务奖励】共+${result.score}青豆`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
























function sign() {
    return new Promise((resolve, reject) => {
        const signurl = {
            url: 'https://kd.youth.cn/TaskCenter/sign',
            headers: signheaderVal,
        }
        $.post(signurl, (error, response, data) => {
            signres = JSON.parse(data)
            const date = $.time(`MMdd`)
            if (signres.status == 2) {
                signresult = `签到失败，Cookie已失效‼️`;
                $.msg($.name, signresult, "");
                return;
            } else if (signres.status == 1) {
                signresult = `【签到结果】成功 🎉 明日+${signres.nextScore} `
                //detail = `【签到结果】成功 🎉 青豆: +${signres.score}，明日青豆: +${signres.nextScore}\n`
                $.setdata(1, 'times')
                if (firstcheck == undefined || firstcheck != date) {
                    $.setdata(date, 'signt');
                }
            } else if (signres.status == 0) {
                signresult = `【签到结果】重复`;
                detail = "";
                if (runtimes !== undefined) {
                    $.setdata(`${parseInt(runtimes) + 1}`, 'times')
                }
            }
            resolve()
        })
    })
}

function signInfo() {
    return new Promise((resolve, reject) => {
        const infourl = {
            url: 'https://kd.youth.cn/TaskCenter/getSign',
            headers: signheaderVal,
        }
        $.post(infourl, (error, response, data) => {
            signinfo = JSON.parse(data);
            if (signinfo.status == 1) {
                cash = signinfo.data.user.money
                subTitle = `【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元`;
                nick = `账号: ${signinfo.data.user.nickname}`;
                detail = `${signresult}(今天+${signinfo.data.sign_score}青豆) 已连签${signinfo.data.sign_day}天`;
                detail += '\n<本次收益>：\n'
            } else {
                subTitle = `${signinfo.msg}`;
                detail = ``;
            }
            resolve()
        })
    })
}

//开启打卡
function punchCard() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `${YOUTH_HOST}PunchCard/signUp?`,
            headers: signheaderVal,
        }
        $.post(url, (error, response, data) => {
            punchcardstart = JSON.parse(data);
            if (punchcardstart.code == 1) {
                detail += `【打卡报名】打卡报名${punchcardstart.msg} ✅ \n`;
                $.log("每日报名打卡成功，报名时间:" + `${$.time('MM-dd HH:mm')}`)
                resolve();
            }
            else {
                //detail += `【打卡报名】${punchcardstart.msg}\n`
                // $.log(punchcardstart.msg)
                resolve()
            }
        })
    })
}

//结束打卡
function endCard() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${YOUTH_HOST}PunchCard/doCard?`, headers: signheaderVal,
            }
            $.post(url, async (error, response, data) => {
                punchcardend = JSON.parse(data)
                if (punchcardend.code == 1) {
                    detail += `【早起打卡】${punchcardend.data.card_time}${punchcardend.msg}✅\n`
                    $.log("早起打卡成功，打卡时间:" + `${punchcardend.data.card_time}`)
                    await Cardshare();
                } else if (punchcardend.code == 0) {
                    // TODO .不在打卡时间范围内
                    detail += `【早起打卡】${punchcardend.msg}\n`
                    $.log("不在打卡时间范围内")
                }
                resolve()
            })
        }, s)
    })
}
//打卡分享
function Cardshare() {
    return new Promise((resolve, reject) => {
        const starturl = {
            url: `${YOUTH_HOST}PunchCard/shareStart?`,
            headers: signheaderVal,
        }
        $.post(starturl, (error, response, data) => {
            sharestart = JSON.parse(data)
            //detail += `【打卡分享】${sharestart.msg}\n`
            if (sharestart.code == 1) {
                setTimeout(() => {
                    let endurl = {
                        url: `${YOUTH_HOST}PunchCard/shareEnd?`,
                        headers: signheaderVal
                    }
                    $.post(endurl, (error, response, data) => {
                        shareres = JSON.parse(data)
                        if (shareres.code == 1) {
                            detail += `+${shareres.data.score}青豆\n`
                        } else {
                            //detail += `【打卡分享】${shareres.msg}\n`
                            //$.log(`${shareres.msg}`)
                        }
                        resolve()
                    })
                }, s * 2);
            }
        })
    })
}

function SevCont() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.post({
                url: `${YOUTH_HOST}PunchCard/luckdraw?`,
                headers: signheaderVal,
            }, async (error, response, data) => {
                sevres = JSON.parse(data)
                if (sevres.code == 1) {

                    detail += `【七日签到】+${sevres.data.score}青豆 \n`

                } else if (sevres.code == 0) {
                    //detail += `【七日签到】${sevres.msg}\n`
                    // $.log(`${boxres.msg}`)
                }
                resolve()
            })
        }, s)
    })
}
function TimePaceket() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const url = "https://kd.youth.cn/WebApi/TimePacket/getReward";
            const request = {
                url: url,
                headers: signheaderVal,
            };

            $.post(request, async (error, response, data) => {
                try {
                    //$.log(data);
                    timePaceket = JSON.parse(data);
                    if (timePaceket.code == 1) {
                        $.log(`【定时红包】领取定时红包成功，共+${timePaceket.data.score}青豆`)
                    }
                    if (timePaceket.code == 0) {
                        $.log(`【定时红包】${timePaceket.msg}`)
                    }
                } catch (e) {
                    $.log(e)
                }
                resolve();
            })
        }, s * 2);
    })
}

//开启时段宝箱
function openbox() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${YOUTH_HOST}invite/openHourRed`,
                headers: signheaderVal,
            }
            $.post(url, async (error, response, data) => {
                boxres = JSON.parse(data)
                if (boxres.code == 1) {
                    boxretime = boxres.data.time
                    $.setdata(boxretime, 'opbox')
                    detail += `【开启宝箱】+${boxres.data.score}青豆 下次奖励${boxres.data.time / 60}分钟\n`
                    await boxshare();
                } else {
                    //detail += `【开启宝箱】${boxres.msg}\n`
                    // $.log(`${boxres.msg}`)
                }
                resolve()
            })
        }, s)
    })
}

//宝箱分享
function boxshare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${YOUTH_HOST}invite/shareEnd`,
                headers: signheaderVal,
            }
            $.post(url, (error, response, data) => {

                shareres = JSON.parse(data)
                if (shareres.code == 1) {
                    detail += `【宝箱分享】+${shareres.data.score}青豆\n`
                } else {
                    //detail += `【宝箱分享】${shareres.msg}\n`
                    //$.log(`${shareres.msg}`)
                }
                resolve()
            })
        }, s * 2);
    })
}


function friendsign(uid) {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://kd.youth.cn/WebApi/ShareSignNew/getFriendActiveList`,
            headers: signheaderVal
        }
        $.get(url, async (error, response, data) => {
            let addsign = JSON.parse(data)
            if (addsign.error_code == "0" && addsign.data.active_list.length > 0) {
                friendsitem = addsign.data.active_list
                for (friends of friendsitem) {
                    if (friends.button == 1) {
                        await friendSign(friends.uid)
                    }
                }
            }
            resolve()
        })
    })
}


function friendSign(uid) {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://kd.youth.cn/WebApi/ShareSignNew/sendScoreV2?friend_uid=${uid}`,
            headers: signheaderVal
        }
        $.get(url, (error, response, data) => {
            friendres = JSON.parse(data)
            if (friendres.error_code == "0") {
                //detail += `【好友红包】+${friendres.score}个青豆\n`
                console.log(`好友签到，我得红包 +${friendres.score}个青豆`)
            }
            resolve()
        })
    })
}




function readTime() {
    return new Promise((resolve, reject) => {
        const url = {
            url: `https://ios.baertt.com/v5/user/stay.json`,
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
            },
            body: timebodyVal,
            timeout: 60000,
        }
        $.post(url, (error, response, data) => {
            let timeres = JSON.parse(data)
            if (timeres.error_code == 0) {
                readtimes = timeres.time / 60
                detail += `【阅读时长】共计` + Math.floor(readtimes) + `分钟\n`
            } else {
                if (timeres.error_code == 200001) {
                    detail += `【阅读时长】❎ 未获取阅读时长Cookie\n`
                } else {
                    detail += `【阅读时长】❎ ${timeres.msg}\n`
                    $.log(`阅读时长统计失败，原因:${timeres.msg}`)
                }
            }
            resolve()
        })
    })
}

//转盘任务
function rotary() {
    const rotarbody = JSON.stringify(signheaderVal).split("&")[15] + '&' + JSON.stringify(signheaderVal).split("&")[8]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = new Date().getTime()
            const url = {
                url: `${YOUTH_HOST}RotaryTable/turnRotary?_=${time}`,
                headers: signheaderVal,
                body: rotarbody,
                timeout: 60000,
            }
            $.post(url, async (error, response, data) => {
                rotaryres = JSON.parse(data)
                if (rotaryres.status == 1) {
                    rotarytimes = rotaryres.data.remainTurn
                    if (rotaryres.data.score == 0) {
                        await $.wait(3000);
                        rotary();
                    }
                    else
                        detail += `【转盘抽奖】+${rotaryres.data.score}个青豆 剩余${rotaryres.data.remainTurn}次\n`
                    if (rotaryres.data.doubleNum != 0) {
                        await TurnDouble();
                    }
                }
                if (rotaryres.code == 10010) {
                    rotarynum = ` 转盘${rotaryres.msg}🎉`
                }
                resolve();
            })
        }, s);
    })
}

//转盘宝箱判断
function rotaryCheck() {
    return new Promise(async (resolve) => {
        if (rotaryres.code == 10010) {
            return resolve();
        }
        let i = 0;
        while (i <= 3) {
            if (100 - rotaryres.data.remainTurn == rotaryres.data.chestOpen[i].times) {
                await runRotary(i + 1)
            }
            i++;
        }
        resolve();
    })
}

//开启宝箱
function runRotary(index) {
    return new Promise((resolve, reject) => {
        const rotarbody = signheaderVal.split("&")[15] + '&' + signheaderVal.split("&")[8] + '&num=' + index;
        const time = new Date().getTime();
        const url = {
            url: `${YOUTH_HOST}RotaryTable/chestReward?_=${time}`,
            headers: signheaderVal,
            body: rotarbody,
            timeout: 60000,
        }
        $.post(url, (error, response, data) => {
            const rotaryresp = JSON.parse(data);
            if (rotaryresp.status == 1) {
                detail += `【转盘宝箱${index}】+${rotaryresp.data.score}个青豆\n`;
            } else {
                if (rotaryresp.code == "10010") {
                    detail += `【转盘宝箱${index}】+今日抽奖完成\n`;
                }
            }
            resolve();
        })
    })
}

//转盘双倍奖励
function TurnDouble() {
    const rotarbody = JSON.stringify(signheaderVal).split("&")[15] + '&' + JSON.stringify(signheaderVal).split("&")[8]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let time = (new Date()).getTime()
            const url = {
                url: `${YOUTH_HOST}RotaryTable/toTurnDouble?_=${time}`, headers: signheaderVal, body: rotarbody
            }
            $.post(url, (error, response, data) => {
                Doubleres = JSON.parse(data)
                if (Doubleres.status == 1) {
                    detail += `【转盘双倍】+${Doubleres.data.score1}青豆 剩余${rotaryres.data.doubleNum}次\n`
                } else {
                    //detail += `【转盘双倍】失败 ${Doubleres.msg}\n`

                }
            })
            resolve()
        }, s)
    })
}
function earningsInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `https://kd.youth.cn/wap/user/balance?${signheaderVal['Referer'].split("?")[1]}`,
                headers: signheaderVal,
            }
            $.get(url, (error, response, data) => {
                infores = JSON.parse(data)
                if (infores.status == 0) {
                    detail += `<收益统计>：\n`
                    for (i = 0; i < infores.history[0].group.length; i++) {
                        detail += '【' + infores.history[0].group[i].name + '】' + infores.history[0].group[i].money + '个青豆\n'
                    }
                    detail += '<今日合计>： ' + infores.history[0].score + " 青豆"
                }
                resolve()
            })
        }, s)
    })
}
async function showmsg() {
    $.msg($.name + "  " + nick + " ", subTitle, detail)
}

// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
