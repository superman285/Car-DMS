import axios from 'axios';

let userbody = document.querySelector(".userlist-tbody");
(async () => {
        let userlistRes = await axios({
            method: "GET",
            url: '/user/all',
        });

        let {result} = userlistRes.data;
        var userdataStr = ``;
        result.forEach(item => {
            var {id,name, phone, role, created_time} = item;
            created_time = created_time.replace('T',' ').replace('.000Z','');
            userdataStr +=
                `<tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${role}</td>
                    <td>${created_time}</td>
                    <td>
                        <a href="/ue?id=${id}">编辑</a>
                        <!-- | <a class="delBtn">删除</a>-->
                    </td>
                </tr>`

        });

    userbody.innerHTML += userdataStr;
})();




