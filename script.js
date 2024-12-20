const wishes = [
    "Chúc mùng 1 “on trend”, mùng 2 “on time”,/ mùng 3 không còn “on loan”!",
    "Chúc bạn năm 2025, đi đâu cũng nhận được lì xì,/ còn đi làm thì nhận được... tăng lương.",
    "Năm nay mong mọi chuyện suôn sẻ, công việc trôi chảy/ như uống trà sữa không bị kẹt trân châu.",
    "Tết này cứ mạnh dạn nhận lì xì,/ tuổi tác chỉ là con số thôi mà!",
    "Chúc bạn có một năm mới như mạng 5G:/ nhanh, mạnh, không bị gián đoạn!",
    "Mong năm nay tình duyên như máy ảnh xịn,/ rõ nét, không bị mờ!",
    "Chúc Tết này tiền đầy ví, nhưng đừng quên giữ dáng,/ vì Tết là lúc ăn ngon!",
    "Chúc bạn năm mới có thật nhiều niềm vui, ít stress,/ và không bị “lỗi hệ thống” khi gặp khó khăn!",
    "Tết này cứ chơi hết mình, nhưng đừng quên... /ngủ đủ giấc để đi làm xịn hơn!",
    "Chúc bạn năm nay, không chỉ “on trend” /mà còn “on fire” trong mọi lĩnh vực!",
    "Năm mới chúc bạn không chỉ “chill” /mà còn “hype” trong mọi khoảnh khắc!",
    "Chúc bạn năm mới cười nhiều hơn,/ buồn phiền \"bay mất tiêu\"!",
    "Năm mới chúc bạn \"tiền vào như nước,/ tiền ra như... cà phê nhỏ giọt\"!",
    "Tết này chúc bạn \"như ngựa phi nước đại\",/ thành công không kịp đếm!",
    "Chúc bạn năm mới vạn sự như ý - vàng mua cả ký/ - thật là hết ý.",
    "Tết này chúc bạn luôn tỏa sáng/ như một vì tinh tú trên bầu trời rộng lớn!",
    "Chúc bạn sức khoẻ - bình an - may mắn - 8386 bạn nhé!/Bạn mãi đỉnh, mãi đỉnh, mãi đỉnh!"
];

function generateWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const wishElement1 = document.getElementById('wish1'); 
    const wishElement2 = document.getElementById('wish2'); 
    const text = wishes[randomIndex];

    const parts = text.split('/');
    const part1 = parts[0] ? parts[0].trim() : ''; 
    const part2 = parts[1] ? parts[1].trim() : ''; 

    let i = 0, j = 0;
    wishElement1.textContent = '';
    wishElement2.textContent = '';

    function typeWriter1() {
        if (i < part1.length) {
            wishElement1.textContent += part1.charAt(i);
            i++;
            setTimeout(typeWriter1, 100);
        } else {
            typeWriter2();
        }
    }

    function typeWriter2() {
        if (j < part2.length) {
            wishElement2.textContent += part2.charAt(j);
            j++;
            setTimeout(typeWriter2, 100);
        }
    }

    typeWriter1();
}

generateWish();


// chặn tải về và inspect
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        
    }
});

document.addEventListener('keydown', function (event) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const isCtrlOrCommand = isMac ? event.metaKey : event.ctrlKey;

    if (isCtrlOrCommand && event.key.toLowerCase() === 's') {
        event.preventDefault(); 
        alert("Chức năng lưu trang đã bị vô hiệu hóa!"); 
    }
});
