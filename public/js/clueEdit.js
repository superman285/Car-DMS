import axios from 'axios';

let infoBtn = document.querySelector(".infoaddBtn");
let logBtn = document.querySelector(".trackaddBtn");
let statusSelect = document.querySelector(".userstate-select"),
    salerSelect = document.querySelector(".saler-select"),
    inputRemark = document.querySelector(".remark>textarea"),
    inputLog = document.querySelector(".note>textarea");

//clue id
let idIndex = location.href.indexOf('id=');
let id = location.href.substr(idIndex + 3);

infoBtn.onclick = async () => {
    console.log('我点了吗到低');
    let status = statusSelect.options[statusSelect.selectedIndex].text,
        saler = salerSelect.options[salerSelect.selectedIndex].text;
    let remark = inputRemark.value;

    console.log('输入的内容备注', inputRemark, remark);

    if (statusSelect.selectedIndex && salerSelect.selectedIndex) {

        //查销售对应userid
        let useridRes = await axios({
            method: 'GET',
            url: '/user/get',
            params: {
                name: saler,
            }
        });

        console.log('chek销售对应id', useridRes.data.result[0].id);


        let user_id = useridRes.data.result[0].id;
        let result = await axios({
            method: "POST",
            url: '/clue/edit',
            data: {
                id,
                params: {
                    status,
                    user_id,
                    remark
                }
            }
        });

        window.location.href = "/cli"
    } else {
        alert('请完善所有信息!')
    }
};

logBtn.onclick = async () => {

    let log = inputLog.value;

    if (log) {
        let logRes = axios({
            method: 'POST',
            url: '/cluelog/create',
            data: {
                clue_id: id,
                content: log,
                created_time: (
                    new Date()).toISOString().substring(0, 19).replace('T', ' ')

            }
        });
        window.location.href="/cli"

    } else {
        alert('请输入内容!');
    }

};