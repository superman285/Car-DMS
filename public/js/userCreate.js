import axios from  'axios';

let inputName = document.querySelector(".inputName>input"),
    inputNum = document.querySelector(".inputNum>input"),
    inputPwd = document.querySelector(".inputPwd>input"),
    inputRoleSelect = document.querySelector(".inputRole"),
    saveBtn = document.querySelector(".saveBtn");

saveBtn.onclick = async ()=>{
    let inputRole = inputRoleSelect.options[inputRoleSelect.selectedIndex].text;

    let [name,phone,password,role,created_time] = [inputName.value,inputNum.value,inputPwd.value,inputRole,(new Date()).toISOString().substring(0, 19).replace('T', ' ')];

    if (name&&phone&&password&&inputRoleSelect.selectedIndex) {

        let result = await axios({
            method: "POST",
            url: '/user/create',
            data: {
                name,
                phone,
                password,
                role,
                created_time
            }
        });
        
        /*let result = await axios({
            method: "get",
            url,
            params:{
                address,
            }
        });*/
        console.log('createRes',result);

        window.location.href="/uli"
    }else{
        alert('请完善所有信息!')
    }

};