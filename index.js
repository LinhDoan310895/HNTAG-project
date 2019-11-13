function login() {
    let inputEmail = document.getElementById("exampleInputEmail").value;
    let inputPassword = document.getElementById("exampleInputPassword").value;
    if (inputEmail == "admin" && inputPassword == "123456") {
        alert("Bạn đã đăng nhập thành công.");
        window.location.href = "danh-sach-mon.html";
    }
    else {
        alert("Bạn đã đăng nhập thất bại.\nVui lòng kiểm tra lại Email hoặc Mật khẩu.");
    }
}

