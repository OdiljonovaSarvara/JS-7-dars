let users = [
    {
    login: "MD696",
    password: "38707"
    }
];

$(document).ready(Function (){
    $(".btn-success").click(function () {
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;

        if (users.length != 0) {
            users.forEach(function (item) {
                if (login == item.login) {
                    if (password == item.password) {
                        num = true;
                        alert("Siz tizimga kirdingiz")
                    }
                }
            });

            if (!num) {
                alert("Ro'yhatdan o'ting")
            }

        } else {
            alert("Siz birinchi foydalanuvchisiz. Iltimos ro'yhatdan o'ting!");
        }
    })
    $(".btn-link").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;
        if (login == "") {
            alert("Login qatorini to'ldiring!");
        }else {
            if (users.length !=0){}


           if (num){
               alert("Bunday user mavjud!");
           }else{
               alert("Siz ro'yhatdan o'tdingiz!");
               users.push({login: login, password: password})
           }

        }else{
            users.push({login: login, password: password});
        }
    })
    $(".btn-light").on("mousedown",function (){
        let attr = $("#password").attr("type");
        $("#password").attr("type","text");
        $("#fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").class("boreder-color","red");
    });
    $(".btn-light").on("mouseup",function (){
        let attr = $("#password").attr("type");
        $("#password").attr("type",)
    })
}
);