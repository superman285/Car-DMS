import axios from 'axios';

let userbody = document.querySelector(".userlist-tbody");
(async () => {
        let userlistRes = await axios({
            method: "GET",
            url: '/user/all',
        });
    console.log('result222safas22',userlistRes.data.result)

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

            /*var delBtn = document.querySelector("a[data-idx]="+id);
            delBtn.onclick = async ()=> {
                console.log('点击删除');
                let delRes = await axios({
                    method: 'POST',
                    url: '/user/del',
                    data: {
                        id
                    }
                });
                console.log('delRes',delRes);
            }*/

        });

    userbody.innerHTML += userdataStr;


    console.dir(userbody);
    console.log('inner',userbody.innerHTML);



})();




