import axios from  'axios';

let loginNum = document.querySelector(".inputNum>input"),
    loginPwd = document.querySelector(".inputPwd>input");


let loginBtn = document.querySelector(".loginBtn");


loginBtn.onclick = async ()=>{

    let [phone,password] = [loginNum.value,loginPwd.value];

    if (phone&&password) {
        let getRes = await axios({
            method: 'POST',
            url: '/user/login',
            data: {
                phone,
                password
            }
        });

        console.log('getRes',getRes);
        if (getRes.data.result.length) {
            console.log('数据集',getRes.data.result);
            location.href="/bl";

        }else{
            alert('账号或密码错误!')
        }
    }else{
        alert('请输入完整信息!')
    }


    
};
