document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Lấy phần tử header
    const headerHeight = header.offsetHeight; // Lấy chiều cao của header

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > headerHeight) {
            // Kiểm tra vị trí cuộn trang có vượt qua chiều cao của header không
            header.classList.add("fixed");
            header.style.height = 80 + "px";
        } else {
            header.style.height = "";
            header.classList.remove("fixed");
        }
    });
});

var images = ["./assets/img/Banner1.png", "./assets/img/Banner2.png"]; // tạo một mảng chứa đường dẫn của hai hình ảnh
var currentImage = 0; // biến đếm để lưu trữ chỉ số của hình ảnh đang được hiển thị
var img = document.getElementById("slideshow"); // lấy đối tượng hình ảnh từ HTML

function changeImage() {
    img.style.transform = "translateX(-100%)"; // thay đổi vị trí của hình ảnh để hiển thị hình ảnh mới
    setTimeout(function () {
        img.src = images[currentImage]; // thay đổi thuộc tính src của đối tượng hình ảnh thành đường dẫn của hình ảnh mới
        img.style.transform = "translateX(0%)"; // thay đổi vị trí của hình ảnh để hiển thị hình ảnh mới
        currentImage++; // tăng biến đếm lên 1 để thay đổi hình ảnh tiếp theo trong mảng
        if (currentImage >= images.length) {
            // nếu biến đếm vượt quá kích thước của mảng thì reset về 0
            currentImage = 0;
        }
    }, 1000); // thực hiện thay đổi hình ảnh sau một khoảng thời gian 1 giây
}

setInterval(changeImage, 5000); // thực hiện việc thay đổi hình ảnh sau mỗi 5 giây
