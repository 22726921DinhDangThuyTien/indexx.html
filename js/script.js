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