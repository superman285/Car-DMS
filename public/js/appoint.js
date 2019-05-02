import axios from  'axios';

let appointNum = document.querySelector(".inputNum>input"),
    appointName = document.querySelector(".inputName>input");

let raceBtn = document.querySelector(".raceBtn");


raceBtn.onclick = async ()=>{


    let [name,phone,utm] = [appointName.value,appointNum.value,''];
    
    if(location.href.indexOf('utm=')!==-1){
        let utmIdx = location.href.indexOf('utm=');
        utm = location.href.substr(utmIdx+4);
    }

    let created_time = (new Date()).toISOString().substring(0, 19).replace('T', ' ');
    let status = "意向一般";

    if (name&&phone) {
        let createRes = await axios({
            method: 'POST',
            url: '/clue/create',
            data: {
                name,
                phone,
                utm,
                status,
                created_time
            }
        });
        if (createRes.data.status===0) {
            alert('抢占成功!')
        }

    }else{
        alert('请输入完整信息!')
    }



};

