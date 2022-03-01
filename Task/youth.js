
const CryptoJS = require('crypto');
const jobname = 'zqkd'
const { timeStamp } = require('console');
const { MD5 } = require('crypto-js');
const $ = Env(jobname)
var sd = require('silly-datetime');
YOUTH_HOST = "https://kd.youth.cn/WebApi/";
s = 200 //各数据接口延迟
key = "dJhSXhsC";  //十六位十六进制数作为密钥
iv = '9NwGV8Ov';   //十六位十六进制数作为密钥偏移量




let ckarr = [

    "https://kd.youth.cn/WebApi/NewUserTask/info_new?uuid=b56f63657dce75ce71ccd909e1b7d505&sign=840075b555206a8b497af7cf44567ca2&channel_code=80000000&uid=60944825&channel=80000000&access=WIfI&app_version=1.7.8&device_platform=iphone&cookie_id=720be8dc07e5d0ac4d6a07cd3e86c9d3&openudid=b56f63657dce75ce71ccd909e1b7d505&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSwp59phXyc36-4qmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFoobesLmyrIF5l7GEY2Ft&device_model=iPhone_6&subv=1.5.1&&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSwp59phXyc36-4qmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFoobesLmyrIF5l7GEY2Ft&cookie_id=720be8dc07e5d0ac4d6a07cd3e86c9d3&popup_task=1&uuid=b56f63657dce75ce71ccd909e1b7d505&sign=840075b555206a8b497af7cf44567ca2&channel_code=80000000&uid=60944825&channel=80000000&access=WIfI&app_version=1.7.8&device_platform=iphone&cookie_id=720be8dc07e5d0ac4d6a07cd3e86c9d3&openudid=b56f63657dce75ce71ccd909e1b7d505&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSwp59phXyc36-4qmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFoobesLmyrIF5l7GEY2Ft&device_model=iPhone_6&subv=1.5.1&=undefined&request_time=1642928751",
    "https://kd.youth.cn/WebApi/NewUserTask/info_new?uuid=a5039064a1c17cee6a613859e1f78cc6&sign=78a57932a6f08c19f4d9c24c577cf7e0&channel_code=80000000&uid=63065713&channel=80000000&access=Wlan&app_version=1.7.8&device_platform=iphone&cookie_id=7de58cda24dbc54ccefa695b45690e88&openudid=a5039064a1c17cee6a613859e1f78cc6&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XVrhYyY3q7eqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6Z4OJm2yEY2Ft&device_model=iPhone_6&subv=1.5.1&&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XVrhYyY3q7eqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6Z4OJm2yEY2Ft&cookie_id=7de58cda24dbc54ccefa695b45690e88&popup_task=1&uuid=a5039064a1c17cee6a613859e1f78cc6&sign=78a57932a6f08c19f4d9c24c577cf7e0&channel_code=80000000&uid=63065713&channel=80000000&access=Wlan&app_version=1.7.8&device_platform=iphone&cookie_id=7de58cda24dbc54ccefa695b45690e88&openudid=a5039064a1c17cee6a613859e1f78cc6&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XVrhYyY3q7eqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6Z4OJm2yEY2Ft&device_model=iPhone_6&subv=1.5.1&=undefined&request_time=1645269051",
    //"https://kd.youth.cn/WebApi/NewUserTask/info_new?uuid=dc3dc3b4f7f41e4e0c163424a6228c74&sign=f218945cef75e107a44e144aaf0ea7cd&channel_code=80000000&uid=63130248&channel=80000000&access=Wlan&app_version=1.7.8&device_platform=iphone&cookie_id=ebb2a1e7264f93e92f06bfd7c15b23e3&openudid=dc3dc3b4f7f41e4e0c163424a6228c74&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XmzhHx-lrCoqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6aIKJfW2EY2Ft&device_model=iPhone_6&subv=1.5.1&&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XmzhHx-lrCoqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6aIKJfW2EY2Ft&cookie_id=ebb2a1e7264f93e92f06bfd7c15b23e3&popup_task=1&uuid=dc3dc3b4f7f41e4e0c163424a6228c74&sign=f218945cef75e107a44e144aaf0ea7cd&channel_code=80000000&uid=63130248&channel=80000000&access=Wlan&app_version=1.7.8&device_platform=iphone&cookie_id=ebb2a1e7264f93e92f06bfd7c15b23e3&openudid=dc3dc3b4f7f41e4e0c163424a6228c74&device_type=1&device_brand=iphone&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=178&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWSw3XmzhHx-lrCoqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooaXrs-6aIKJfW2EY2Ft&device_model=iPhone_6&subv=1.5.1&=undefined&request_time=1645269578"

]





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

    //任务一：看看赚
    for (let i = 0; i < ckarr.length; i++) {
        $.log(`账号${i + 1}：执行看看赚`)
        cookie = ckarr[i].match(/cookie=(.*?)&/)[1]; //cookiearr[i];
        cookie_id = ckarr[i].match(/cookie_id=(.*?)&/)[1];
        uid = ckarr[i].match(/&uid=(.*?)&/)[1];
        imei = randomNum(000000000000000, 999999999999999);
        banner_idarr = [];
        await getTaskBrowse();
        await getTaskBrowse2();
        for (let i = 0; i < banner_idarr.length; i++) {
            $.log(`\n准备第${i + 1}次任务`);
            let thetempbody = `channel_code=80000000&uid=${uid}&request_time=1639228673.915065&access=WIfI&channel=80000000&phone_version=14.3&app_version=2.0.2&phone_network=WIfI&device_type=1&client_version=2.0.2&task_id=${banner_idarr[i]}&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&version_code=2.0.2&os_version=14.3&sign=368d127c6612c9323ef1388eee3985cb`
            await getbody(thetempbody);
            await adlickstart();
            await $.wait(randomNum(0, 2000));
            for (let i = 0; i < 6; i++) {
                await bannerstatus(i);
                await $.wait(randomNum(0, 2000));
            }
            await adlickend();
        }
    }

    //任务二：阅读
    readidarr = [];
    for (let i = 0; i < 5; i++) {
        await getarticleid();
        await getvideoid();
    }

    for (let i = 0; i < readidarr.length; i++) {
        for (let j = 0; j < ckarr.length; j++) {
            uid = ckarr[j].match(/&uid=(.*?)&/)[1];
            let thetempbody = `access=WIFI&app_version=2.0.2&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.2&device_brand=iphone&device_id=55439074&device_model=iPhone&device_platform=iphone&device_type=iphone&id=${readidarr[i]}&isnew=1&mobile_type=2&net_type=1&openudid=a635541d5d56684d53aaf373515c26ca&os_version=14.3&phone_code=a635541d5d56684d53aaf373515c26ca&phone_network=WIFI&platform=3&read_type=0&request_time=1639218733&resolution=750x1334&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&szlm_ddid=D2HmKye36ot8HphJGNJtZNeEkFI67D2E7b457KnGsBs2IXac&time=1639218734&uid=${uid}&uuid=a635541d5d56684d53aaf373515c26ca`
            await getbody(thetempbody);
            await readreward(j);
        }
        await $.wait(30000);
    }

    //任务三：签到
    for (let i = 0; i < ckarr.length; i++) {
        newtaskarr = ["taskbox_watch", "taskbox_ad", "taskbox_game", "taskbox_video", "taskbox_read"]
        taskarr = ["read_time_sixty_minutes", "watch_article_reward", "watch_video_reward", "read_time_two_minutes", "first_share_article", "new_fresh_five_video_reward"]
        cookie = ckarr[i].match(/cookie=(.*?)&/)[1]; //cookiearr[i];
        cookieid = ckarr[i].match(/cookie_id=(.*?)&/)[1];
        uid = ckarr[i].match(/&uid=(.*?)&/)[1];
        signheaderVal = { "Referer": `https://kd.youth.cn/h5/20190301taskcenter/ios/index.html?access=WIfI&app_version=2.0.2&device_platform=iphone&cookie_id=${cookieid}&device_type=1&device_brand=iphone&cookie=${cookie}` }

        await sign();
        await signInfo();
        await punchCard()
        await endCard();
        await SevCont();
        await TimePaceket();
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



}

async function getbody(abody) {
    body = EncryptDES(abody, key, iv);
    body = "p=9NwGV8Ov71o=" + body;
    body = body.replace(/\//g, `_`);
    body = body.replace(/\+/g, `-`);
}

function getarticleid() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v3/article/lists.json?&access=WIFI&ad=1&app_version=2.0.2&behot_time=&catid=0&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.2&device_brand=iphone&device_id=55439074&device_model=iPhone&device_platform=iphone&device_type=iphone&fuck=1&isnew=1&min_time=&mobile_type=2&net_type=1&number=10&op=0&openudid=a635541d5d56684d53aaf373515c26ca&os_version=14.3&phone_code=a635541d5d56684d53aaf373515c26ca&phone_network=WIFI&platform=3&request_time=1639224384&resolution=750x1334&sign=7fac98db084ba47f0eb60b2fae7ebb1f&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&step=0&szlm_ddid=D2HmKye36ot8HphJGNJtZNeEkFI67D2E7b457KnGsBs2IXac&time=1639224384&uid=54983260&uuid=a635541d5d56684d53aaf373515c26ca";
        const headers = {

        };
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.success == true) {
                        let tempid = ""
                        for (let i = 0; i < result.items.length; i++) {
                            readidarr.push(result.items[i].id);
                            tempid += result.items[i].id;
                            tempid += " ";
                        }
                        $.log(`【文章ID】本次获取文章id共${result.count}个:${tempid}`);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function getvideoid() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v3/article/lists.json?&access=WIFI&ad=1&app_version=2.0.2&behot_time=&catid=1453&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.2&device_brand=iphone&device_id=57204276&device_model=iPhone&device_platform=iphone&device_type=iphone&fuck=1&isnew=1&min_time=&mobile_type=2&net_type=1&number=10&op=0&openudid=d84c65e2a2b03897b46fc69116f4cee4&os_version=14.3&phone_code=d84c65e2a2b03897b46fc69116f4cee4&phone_network=WIFI&platform=3&request_time=1639286028&resolution=750x1334&sign=e5cbba336a457b27c74d27da65683e41&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&step=0&szlm_ddid=D2HmKye36ot8HphJGNJtZNeEkFI67D2E7b457KnGsBs2IXac&time=1639286028&uid=52806391&uuid=d84c65e2a2b03897b46fc69116f4cee4&video_catid=0";
        const headers = {
        };
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.success == true) {
                        let tempid = ""
                        for (let i = 0; i < result.items.length; i++) {
                            readidarr.push(result.items[i].id);
                            tempid += result.items[i].id;
                            tempid += " ";
                        }
                        $.log(`【视频ID】本次获取视频id共${result.count}个:${tempid}`);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}










function getTaskBrowse2() {
    return new Promise((resolve, reject) => {
        const url = `https://kd.youth.cn/webApi/Nameless/getTaskBrowse?type=0&access=WIFI&androidid=fe836cd49ba8c7c9&app-version=2.0.2&app_version=2.0.2&channel=c4015&cookie=${cookie}&cookie_id=${cookie_id}&device_brand=Xiaomi&device_id=50009898&device_model=MIX%2B2&device_platform=android&device_type=android&imei=${imei}&inner_version=202004211754&mc=02%253A00%253A00%253A00%253A00%253A00&mi=1&openudid=fe836cd49ba8c7c9&os_api=28&os_version=PKQ1.190118.001&request_time=1639228085&resolution=1080.0x2030.0&sim=2&sm_device_id=2021012517441685ff6eaafc646f04de70162ee89e058b01f02cd6aee2e7f2&subv=1.2.2&uid=${uid}&version_code=46&zqkey=${cookie}&zqkey_id=${cookie_id}`;
        const headers = {
            "Referer": `https://kd.youth.cn/h5/20190527watchMoney/?access=WIFI&androidid=fe836cd49ba8c7c9&app-version=2.0.2&app_version=2.0.2&channel=c4015&cookie=${cookie}&cookie_id=${cookie_id}&device_brand=Xiaomi&device_id=50009898&device_model=MIX%202&device_platform=android&device_type=android&imei=${imei}&inner_version=202004211754&mc=02%3A00%3A00%3A00%3A00%3A00&mi=1&openudid=fe836cd49ba8c7c9&os_api=28&os_version=PKQ1.190118.001&request_time=1639228085&resolution=1080.0x2030.0&sim=2&sm_device_id=2021012517441685ff6eaafc646f04de70162ee89e058b01f02cd6aee2e7f2&subv=1.2.2&uid=${uid}&version_code=46&zqkey=${cookie}&zqkey_id=${cookie_id}`,
        };
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    //banner_idarr = [];
                    if (result.status == 1) {
                        for (let i = 0; i < result.data.list.length; i++) {
                            if (result.data.list[i].status == 0)
                                banner_idarr.push(result.data.list[i].banner_id);
                        }
                        $.log(`【看看赚】本次获取${result.data.can_num}条，共${result.data.can_score}青豆，今日一共获得${result.data.score}青豆`);
                    }


                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function getTaskBrowse() {
    return new Promise((resolve, reject) => {
        const url = `https://kd.youth.cn/webApi/Nameless/getTaskBrowse?type=10&access=WIFI&androidid=fe836cd49ba8c7c9&app-version=2.0.2&app_version=2.0.2&channel=c4015&cookie=${cookie}&cookie_id=${cookie_id}&device_brand=Xiaomi&device_id=50009898&device_model=MIX%2B2&device_platform=android&device_type=android&imei=${imei}&inner_version=202004211754&mc=02%253A00%253A00%253A00%253A00%253A00&mi=1&openudid=fe836cd49ba8c7c9&os_api=28&os_version=PKQ1.190118.001&request_time=1639228085&resolution=1080.0x2030.0&sim=2&sm_device_id=2021012517441685ff6eaafc646f04de70162ee89e058b01f02cd6aee2e7f2&subv=1.2.2&uid=${uid}&version_code=46&zqkey=${cookie}&zqkey_id=${cookie_id}`;
        const headers = {
            "Referer": `https://kd.youth.cn/h5/20190527watchMoney/?access=WIFI&androidid=fe836cd49ba8c7c9&app-version=2.0.2&app_version=2.0.2&channel=c4015&cookie=${cookie}&cookie_id=${cookie_id}&device_brand=Xiaomi&device_id=50009898&device_model=MIX%202&device_platform=android&device_type=android&imei=${imei}&inner_version=202004211754&mc=02%3A00%3A00%3A00%3A00%3A00&mi=1&openudid=fe836cd49ba8c7c9&os_api=28&os_version=PKQ1.190118.001&request_time=1639228085&resolution=1080.0x2030.0&sim=2&sm_device_id=2021012517441685ff6eaafc646f04de70162ee89e058b01f02cd6aee2e7f2&subv=1.2.2&uid=${uid}&version_code=46&zqkey=${cookie}&zqkey_id=${cookie_id}`,
        };
        const request = {
            url: url,
            headers: headers
        };

        $.get(request, async (error, response, data) => {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.status == 1) {
                        for (let i = 0; i < result.data.list.length; i++) {
                            if (result.data.list[i].status == 0)
                                banner_idarr.push(result.data.list[i].banner_id);
                        }
                        $.log(`【宝箱任务】本次获取${result.data.can_num}条，共${result.data.can_score}青豆，今日一共获得${result.data.score}青豆`);
                    }


                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function adlickstart() {
    return new Promise((resolve, reject) => {
        const url = "https://kandian.youth.cn/v5/Nameless/adlickstart.json";
        const headers = {
            // "device-platform": "android"
        };
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`开始任务:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function adlickend() {
    return new Promise((resolve, reject) => {
        const url = "https://kandian.youth.cn/v5/Nameless/adlickend.json";
        const headers = {
            // "device-platform": "android"
        };
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`结束阅读:${result.message}`);
                if (typeof result.items != 'undefined' && typeof result.items.task_score != 'undefined')
                    $.log(`本次任务获得青豆${result.items.task_score}`);
                if (typeof result.items != 'undefined' && typeof result.items.score != 'undefined')
                    $.log(`本次任务获得青豆${result.items.score}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function bannerstatus(i) {
    return new Promise((resolve, reject) => {
        const url = "https://kandian.youth.cn/v5/Nameless/bannerstatus.json";
        const headers = {
            //  "device-platform": "android"
        };
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data);
                $.log(`完成第${i + 1}次阅读:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}








function readreward(index) {
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
                        console.log(`【阅读收益】账号${index + 1}本次阅读获得${readres.items.read_score}个青豆，请等待30s后执行下一次阅读`);
                        if (readres.items.read_score > 5) {
                            let thetempbody = `access=WIFI&app_version=2.0.2&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.2&device_brand=iphone&device_id=55439074&device_model=iPhone&device_platform=iphone&device_type=iphone&isnew=1&mobile_type=2&net_type=1&openudid=a635541d5d56684d53aaf373515c26ca&os_version=14.3&phone_code=a635541d5d56684d53aaf373515c26ca&phone_network=WIFI&platform=3&request_time=1639226633&resolution=750x1334&second=61&sm_device_id=20210807184220298c1aaa7490c8370aec08b29221f025017695a090360ce0&szlm_ddid=D2HmKye36ot8HphJGNJtZNeEkFI67D2E7b457KnGsBs2IXac&time=1639226634&uid=${uid}&uuid=a635541d5d56684d53aaf373515c26ca`;
                            getbody(thetempbody);
                            await AddReadTime();
                        }

                    }
                    else if (readres.error_code == '0' && typeof readres.items.score === 'number') {
                        console.log(`【阅读收益】账号${index + 1}本次阅读获得${readres.items.score}个青豆，即将开始下次阅读`);
                    }
                    else {
                        console.log(`请求失败`)
                        $.log(data);
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
        let request = {
            url: `https://ios.baertt.com/v5/user/stay.json`,
            headers: {
                'User-Agent': 'KDApp/1.7.8 (iPhone; iOS 14.0; Scale/3.00)'
            },
            body: body,
        };
        $.post(request, async (error, response, data) => {
            let result = JSON.parse(data);
            console.log(`【阅读时间】增加1分钟，${result.message}`);
            resolve()
        })

    })
}













function cipheriv(en, code, data) {
    var buf1 = en.update(data, code), buf2 = en.final();
    var r = new Buffer.alloc(buf1.length + buf2.length);
    buf1.copy(r); buf2.copy(r, buf1.length);
    return r;
};
function EncryptDES(data, key, vi) {
    return data = cipheriv(CryptoJS.createCipheriv('des', key, vi), 'utf8', data).toString('base64');
};
function DecryptDES(data, key, vi) {
    return cipheriv(CryptoJS.createDecipheriv('des', key, vi), 'base64', data).toString('utf8');
};


function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}




//分享数据获取
async function getShareInfo() {
    try {
        var s_si = url.match(/si=(.*?)&/)[1];
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
                    console.log("分享成功")
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
        const url = `https://kd.youth.cn/WebApi/NewTaskIos/sendTwentyScore?action=${task}&uid=${uid}&cookie_id=${cookieid}&cookie=${cookie}`;
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
            if (signres.status == 1) {
                signresult = `【签到结果】成功 🎉 明日+${signres.nextScore} `
                //detail = `【签到结果】成功 🎉 青豆: +${signres.score}，明日青豆: +${signres.nextScore}\n`

            } else if (signres.status == 0) {
                signresult = `【签到结果】重复`;
                detail = "";
                /*if (runtimes !== undefined) {
                    $.setdata(`${parseInt(runtimes) + 1}`, 'times')
                }*/
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
                detail += `【打卡报名】${punchcardstart.msg}\n`
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
        const rotarbody = JSON.stringify(signheaderVal).split("&")[15] + '&' + JSON.stringify(signheaderVal).split("&")[8] + '&num=' + index;
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
                    detail += `【转盘双倍】+${Doubleres.data.score1}青豆 剩余${Doubleres.data.doubleNum}次\n`
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
                    detail += '\n'
                }
                resolve()
            })
        }, s)
    })
}
async function showmsg() {
    $.msg($.name + "  " + nick + " ", subTitle, detail)
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
