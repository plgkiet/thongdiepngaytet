// Lấy tất cả các object
const objects = document.querySelectorAll('.falling-object');

// Hàm để tạo vị trí ngẫu nhiên và khởi tạo các object
function initializeObject(obj) {
    const screenWidth = window.innerWidth; // Chiều rộng màn hình
    const randomX = Math.random() * (screenWidth - 20); // Vị trí ngang ngẫu nhiên (trừ chiều rộng object)
    const speed = 0.5 + Math.random(); // Tốc độ rơi ngẫu nhiên (px mỗi frame)

    // Thiết lập vị trí ban đầu
    obj.style.left = `${randomX}px`;
    obj.style.top = `-20px`; // Bắt đầu từ ngoài màn hình

    // Gán tốc độ rơi vào dataset
    obj.dataset.speed = speed;
}

// Hàm để cập nhật vị trí rơi
function updateObjectPosition(obj) {
    const currentTop = parseFloat(obj.style.top); // Lấy vị trí hiện tại
    const speed = parseFloat(obj.dataset.speed); // Lấy tốc độ từ dataset

    // Cập nhật vị trí theo tốc độ
    const newTop = currentTop + speed;
    obj.style.top = `${newTop}px`;

    // Nếu object rơi quá màn hình, khởi tạo lại
    if (newTop > window.innerHeight) {
        initializeObject(obj);
    }
}

// Khởi tạo tất cả object
objects.forEach((obj) => {
    initializeObject(obj);
});

// Vòng lặp để cập nhật vị trí
function animateObjects() {
    objects.forEach((obj) => updateObjectPosition(obj));
    requestAnimationFrame(animateObjects); // Gọi lại hàm để tạo vòng lặp
}

// Bắt đầu hoạt
animateObjects();
