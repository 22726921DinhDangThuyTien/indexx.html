$("#portfolio button").click(function(event) {
	// alert("hehe\"");
	// alert('hehe"');
	/* Act on the event */
	//this là button được click
	//Nếu click vào button đang active thì không làm gì hết.
	if ($(this).hasClass('active')) {
		return;
	}
	//Remove active button
	//$(this).siblings('button.active'): anh em của nút được click mà có tên thẻ là button và class là active
	$(this).siblings('button.active').removeClass('active');
	//
	//Active button được click
	$(this).addClass('active');
	//
	//attr("data"): lấy giá trị của thuộc tính data
	var data = $(this).attr("data");

	// $("#portfolio .row > div"): Lấy 8 div
	// var allDivs = $(`#portfolio .row > div`);
	var allDivs = $(this).nextAll(".row").children();
	if (data == "all") {
		//show hết
		allDivs.show();
	}
	else {
		// 
		// div nào có thuộc tính data GIỐNG với button được click
		// var shownDivs = $(`#portfolio .row > div[data=${data}]`);
		var shownDivs = $(this).nextAll('.row').children(`[data=${data}]`);
		shownDivs.show();


		// div nào có thuộc tính data KHÁC với button được click
		allDivs.not(shownDivs).hide();
		// alert(data);
	}

	
});

// Chuyển đổi giữa trang đăng nhập và đăng ký
document.getElementById("to-register").addEventListener("click", function() {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.add("active");
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("register-tab").classList.add("active");
});

document.getElementById("to-login").addEventListener("click", function() {
    document.getElementById("register-form").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("register-tab").classList.remove("active");
});

// Kiểm tra đăng ký mật khẩu khớp nhau
document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
    }

    // Tiến hành đăng ký ở đây, ví dụ gửi dữ liệu lên server
    console.log("Đăng ký thành công!");
});

// Xử lý đăng nhập (ví dụ này chỉ kiểm tra nhập liệu cơ bản)
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Tiến hành đăng nhập ở đây, ví dụ gửi dữ liệu lên server
    console.log("Đăng nhập thành công!");
});










