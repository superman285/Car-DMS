import axios from 'axios';

let inputName = document.querySelector(".inputName>input"),
    inputNum = document.querySelector(".inputNum>input"),
    inputPwd = document.querySelector(".inputPwd>input"),
    inputRoleSelect = document.querySelector(".inputRole"),
    saveBtn = document.querySelector(".saveBtn");

saveBtn.onclick = async ()=>{
    let inputRole = inputRoleSelect.options[inputRoleSelect.selectedIndex].text;
    let [name,phone,password,role,created_time] = [inputName.value,inputNum.value,inputPwd.value,inputRole,(new Date()).toISOString().substring(0, 19).replace('T', ' ')];

    let idIndex = location.href.indexOf('id=');
    let id = location.href.substr(idIndex+3);

    if (name&&phone&&password&&inputRoleSelect.selectedIndex) {

        let result = await axios({
            method: "POST",
            url: '/user/edit',
            data: {
                id,
                params:{
                    name,
                    phone,
                    password,
                    role,
                    created_time
                }
            }
        });

        console.log('createRes',result);
        window.location.href="/uli"

    }else{
        alert('请完善所有信息!')
    }
};