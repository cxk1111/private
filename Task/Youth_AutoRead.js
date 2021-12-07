

const jobname = 'youthread'
const $ = Env(jobname)
var sd = require('silly-datetime');
let articlebody = require("../JSON/Youth_common.json");


/*ck存放区*/
let theoldbodyarr =
    [
        "p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kqrLpJGAkdwV8gOpPHTnSb0teFjo1jrcifqoNj3_RemNb3TiFovY-1PfWLcpI0sDSuCNyWZD6DyadQrpIAGITuGeoq63KU26pJWRzQ4yj3z0pwrkGEcnvDVekaRauiCZ1MTiQw5a0737mNmvj2DFacERFVnfr77Rw8uKocxTWGdWfcZTJ6mJVUjDevRSjaeFpWj4cUCHs_mzHH53oiCa9oRm4kIaUmVTiwA8aPBgW7AyDqrSnB1tzLEECmrgdA_LC44GrTijTWWf-CnaT-UnDnJNrQRxbKshLbHdfVfiW31M36QJZm7mLE7F3eDkeqzgj0W9dUS6xbmquvTYJB2OjAzBrYiBuaTbrU_CT6djGwtFe1s4KqoxmjT0wPoBW8w5m1R4GI4gcGJhcNvQjt7srXyBOixMnxIKfxcIkq_R5_7dlsMWkyk89vlCBs99JPmBGEYygysYHcBGjm1bLubfCvIWLUNftdaDq_7XVepaT06YJk6nZNQ5fcGdijz985pwLaw9Hkfh9gmd3hkKzxo2zToh72v7ar-OsQl_V5QEm8u3IINvFA0HdcCLXbCIj2WidORlgWTkDUb1UKVjvzQ2yL1gD2Zm16xWsdS17XJDJY7GbxJ8fmKmpxuWhKSVUCk95hEixmJYyxBEutSXrg0Xbi4c16q37X2hey8GFtFJU-iueJZFdwmecwkneX8wY0qgX63Vzy8PvaYB4zEXKzlDP0yO6O_hbc0Y7VRNl_YFBYazF2qkj0mav-Y-5nJ8belOv6rhBnn97a8T_aZ8mMZWn-O639oub53QjWADl01HhTBJq7nyAECuqWKlu2aJ0K1m3SKOXmyt484F7THBHT8i9VoEmMzH2lJaG",
        "p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZPwAF2APbf1s0ag2abr93KOIAhj4XIgOdiGaPccsoszmfU6_aRpyyT3BnBSwUQq_Vm5kPmhva2_3OR6XxNsyYRifjsh_-MoiAC9X3dph4OQfdDvIf6IGepwJwewplGHK3zJ1SyG0Iu-XxpZxPnqMRCIK_8wkaRCU1eqtTJTMwLXjt4lzXISDr0Byii0NnsBLBbPEvypVZKScnOXvibtxXd5h4HCJSelm8_AzLv-i88-_slJnbtkXQSb5mSJY-D2W6sPlmVlrYEOoMBqpazRo7jzliy4UDm8WqYro9RXuh6AzbTGtb2zE0y-TTxDmr6MUW-10tY_KKGv5YuTfKTKYD_b4j6uGhpMNBiTKO3KlRbcp87VerCAVHeYQLanKu3gBkh-AZNX8YRcAbpZVSiCJYNh-eMTNdVsroSUWQsljItvF1qgzZCmrj6tYkNIkSw4ZF2L08_hVExPqx4KgmS038Da1dTRoTtqwOJ7U7KVJPWnpBWZ26WaP7-FpY7ibucfW8X2wVNbgoK5ssQDT1ZGF4qN9XW5m6M6vruYfg9xnp9EgQYJb75M7yCF8c286A7O_rF1Rjx16bsdGxxRw2w2LU8aadSR0gz0ic1Gd5-xi46TGHOAiZuTt4g0vXL6m9oiGhoGA_MWYO8sT4UWX0gfVlP1ZvWBT2iX6rP2oMj910UBPIl-eBNwt1quNBRLCZ1lfPtWxYWHp2pSYFjCr0dqaJYN01BHiS-Xz4bKyWzValaE_Qax2sTFlcW0NR6bF-Lk62ED9-OvhTZgFV6hsxeo2ALKmYddb6QcVP91s3yr4EdW8PjdU1BF1B-NZgdgyXyJdaw9IHiya4F-0"
    ]
let timebodyValarr =
    [
        'p=9NwGV8Ov71o=GvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLL668-J89JrJs71imvZziw6VQrDJSaPYBNMiOz_ziM611zHz1pHPf3DA2hjz2cSJ4jaSpZTqcSgmHruiXNvQa9RC98phL98FAmJjIGYQUEA9Vo7IGhXstlrxrs2VqSEw8zfNCM0AYT3r2tEICkM-64mf_4JDTbkN-pVrNiaH4PbK03P8XNMDDi1G2bgmiInRsSqI0faHn-VW1p21PW7HC-b5k5tO7hVsuvuNKvqSMDg0evXEA6iOadUzIhPrzwbVEpkkUT_osYYUlhMkjtFWRUNb5gxkgNfToR7YS4EeyG6qfPGbyAy2CpWsqDEltALf_46fLSmpYpncvEi0Frqy1_5wctEWAXbAOSyFLGPPrj-8480KbQ5-uWmZ5B2TpKd_UrkqKFVrz5mhvX60P9k2SaXmT3w-22MgRzczPjeej__en_JYJque_kdB-gYuhslSwHviWhc-tE3ogaPtmr6JzagrAORPuNHwknwCp5hGmMniM7xSIcZm-9C98Ey9eIzG6D38DezEkbsvIvi_m68WXb1_ajm9QsVy-CI8_zYBBbPexmnOufEGgtyO7dgRPm9b8gE0EsFzvgKyq3ycLMi-CaCVWmqxUYcb__00DFbsDU4wSyMItZNXoZIBn3W_GowGIu080cXpDslBdloR5LFT7xx',
        'p=9NwGV8Ov71o=gW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_mEtDEGsOrBruuZzIpWlevTEf2n4e6SDtwtHI8jh7tGLFm1iscPtbZwlhO1--2rPMqEVay5SHQZ0Xa5om9y_QnFioIoDSg-ArtrfwznZt1IhRAOspLNm4F1Z4mRILDUTDM9AS-u45jBDxKekfVGwiWHcQammhDRTYrZuDBoknZJ1oAF77s8FUK920uBdQYMucK7Di6mQ5azyEX5vAZKmPyHGABhVGfRvEFXlUDlPqU0ojmERE6B_nfO0_Xw0UPn7t146utj0a4X_6S5dl8CnyVLtiituzwOA3IAdc83j--TAPdl5rTjww_wwI0bYil23NLJ3-hBJaJFlWdD8g7OeGUKY2FQt_tRm2C4AbT2GC2M6UE2hUikNwUNHzyxLIwQ3Xiq1Y4CmQWHNic2JC1HtW8J14lPxPAmgDJMo3En90hvmN8E1oYDe0MgYFHd3aFXOe3bIJpxHajBL7yVbIULs04E5dJBlqwLgszVkdQXGDOl53_NtihzJ1kemGh-OPGOaOQjwSJHTJkX0NzBKa2ic4B-kWmyJe28q0q7Y3zhc0pWrigP6lGtcXv_8HgsU_TWt7vnONcp_NFJUdePUFsBc7pLvApCJGR2Pb_wS7IurASkNOJzkHHuNkIXVvInS4Fb8KawbdYZ0BzFU_-qtKLNoORiGiaDrbsh4WPbOhyxO2XTghNu_3aK0IzE92MIi-ySFtUhkm6EpvOXwiUQxrfSfvJ1uOIPG66eSL0Y_2hFUA9GSX1GFdPj1CBBXwjfTXcmnrkQaLC8LUhLrCqdwcoZgikt47309tL0H-zLEJ4cP-dtI='
    ];




!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    for (let j = 0; j < theoldbodyarr.length; j++) {
        theoldbody=theoldbodyarr[j];
        timebodyVal=timebodyValarr[j];
        for (let i = 0; i < articlebody.datas.length; i++) {
            newbody = articlebody.datas[i].substring(0, 818) + theoldbody.substring(818, 869) + articlebody.datas[i].substring(869);
            await readreward(newbody);
            await $.wait(30000);
        }
    }
}


function readreward(body) {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/article/complete.json";
        const request = {
            url: url,
            headers: {},
            body: `${body}`
        };

        $.post(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    readres = JSON.parse(data);
                    if (readres.error_code == '0' && typeof readres.items.read_score === 'number') {
                        console.log(`【阅读文章】本次阅读获得${readres.items.read_score}个青豆，请等待30s后执行下一次阅读`);
                        if (readres.items.read_score > 5)
                            await
                                AddReadTime();
                        await $.wait(30000);
                    }
                    else if (readres.error_code == '0' && typeof readres.items.score === 'number') {
                        console.log(`【阅读文章】本次阅读获得${readres.items.score}个青豆，即将开始下次阅读`);
                        await $.wait(30000);
                    }
                    else {
                        console.log(`请求失败`)
                        $.log(data);
                        await $.wait(30000);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function AddReadTime() {

    return new Promise((resolve, reject) => {
        let url = {
            url: `https://ios.baertt.com/v5/user/stay.json`,
            headers: {
                'User-Agent': 'KDApp/1.7.8 (iPhone; iOS 14.0; Scale/3.00)'
            },
            body: timebodyVal,
        };
        $.post(url, async (error, response, data) => {
            let result = JSON.parse(data);
            console.log(`【阅读时间】增加1分钟，${result.message}`);
            resolve()
        })

    })
}




function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
