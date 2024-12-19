const wishes = [
    "Chúc mùng 1 “on trend”, mùng 2 “on time”, mùng 3 không còn “on loan”!",
    "Chúc bạn năm 2025, đi đâu cũng nhận được lì xì, còn đi làm thì nhận được... tăng lương.",
    "Năm nay mong mọi chuyện suôn sẻ, công việc trôi chảy như uống trà sữa không bị kẹt trân châu.",
    "Tết này cứ mạnh dạn nhận lì xì, tuổi tác chỉ là con số thôi mà!",
    "Chúc bạn có một năm mới như mạng 4G: nhanh, mạnh, không bị gián đoạn!",
    "Mong năm nay tình duyên như máy ảnh xịn, rõ nét, không bị mờ!",
    "Chúc Tết này tiền đầy ví, nhưng đừng quên giữ dáng, vì Tết là lúc ăn ngon!",
    "Chúc bạn năm mới có thật nhiều niềm vui, ít stress, và không bị “lỗi hệ thống” khi gặp khó khăn!",
    "Tết này cứ chơi hết mình, nhưng đừng quên... ngủ đủ giấc để đi làm xịn hơn!",
    "Chúc bạn năm nay, không chỉ “on trend” mà còn “on fire” trong mọi lĩnh vực!",
    "Năm mới chúc bạn không chỉ “chill” mà còn “hype” trong mọi khoảnh khắc!",
    "Chúc bạn năm mới cười nhiều hơn, buồn phiền \"bay mất tiêu\"!",
    "Năm mới chúc bạn \"tiền vào như nước, tiền ra như... cà phê nhỏ giọt\"!",
    "Tết này chúc bạn \"như ngựa phi nước đại\", thành công không kịp đếm!",
    "Chúc bạn năm mới vạn sự như ý - vàng mua cả ký - thật là hết ý.",
    "Tết này chúc bạn luôn tỏa sáng như một vì tinh tú trên bầu trời rộng lớn!"
];

function generateWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const wishElement = document.getElementById('wish');
    const text = wishes[randomIndex];
    let i = 0;
    wishElement.textContent = ''; 

    function typeWriter() {
        if (i < text.length) {
            wishElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

generateWish();


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

