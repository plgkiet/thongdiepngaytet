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
    "Chúc bạn sức khoẻ - bình an - may mắn - 8386 bạn nhé!/Bạn mãi đỉnh, mãi đỉnh, mãi đỉnh!",
    "Mong bạn năm 2025, mỗi ngày đều như ngày nghỉ lễ,/ làm thì ít nhưng lương thì nhiều!",
    "Chúc bạn luôn “online” trong hạnh phúc,/ “offline” với muộn phiền!",
    "2025 chúc bạn giàu như Elon Musk,/ nhưng stress thì nhẹ nhàng như đi spa!",
    "Chúc bạn năm mới lộc phát đều tay,/ ví tiền đầy và bụng luôn căng!",
    "Mong năm mới, deadline đến nhưng không đuổi kịp bạn,/ và công việc luôn đúng tiến độ!",
    "Tết này chúc bạn cười nhiều như emoji :D,/ và buồn ít như icon :)",
    "Tết này, chúc bạn kiếm tiền dễ như “add to cart”,/ tiêu tiền chậm như cách bạn “checkout”!",
    "Chúc bạn năm mới bùng nổ như countdown,/ mà bình yên như sáng mùng 1!",
    "Năm 2025 chúc bạn đẹp trai - xinh gái/ bất chấp camera thường!",
    "Chúc bạn năm mới thảnh thơi như ngày thứ 7,/ không áp lực như sáng thứ 2!",
    "Mong bạn năm 2025, tiền vào ví như sóng biển,/ càng đếm càng nhiều!",
    "Chúc bạn năm mới cứ thức khuya nhưng da vẫn căng bóng,/ ăn mì nhiều mà không bị mụn!",
    "Mong bạn năm 2025, crush trả lời ngay không seen,/ sếp tăng lương không cần xin!",
    "Chúc bạn năm nay ăn ngon không lo béo,/ tiêu tiền không sợ nghèo!",
    "Năm mới chúc bạn công việc suôn sẻ như quẹt thẻ,/ lương về nhanh như cách bạn săn sale!",
    "Chúc bạn năm mới sảng khoái như wifi full vạch,/ hạnh phúc như tài khoản full số!",
    "Năm 2025 chúc bạn vừa đủ lười để không áp lực,/ vừa đủ chăm để thành công tới tấp!",
    "Chúc bạn năm mới ăn no ngủ kỹ,/ tiền đầy túi, tình đầy tim!",
    "Mong bạn 2025, làm việc nhẹ nhàng,/ thành công nặng ký!",
    "Chúc bạn năm mới luôn có người bao ăn,/ sếp bao lương, và đời bao đẹp!",
    "Năm mới mong bạn như trà sữa full topping,/ ngọt ngào, đầy đủ, và luôn 'hot'!",
    "Chúc bạn 2025, mỗi ngày là một chuyến du lịch,/ mỗi tháng là một lần lên lương!",
    "Tết này không tăng cân, chỉ tăng lương,/ tiền vô vườn như nước tràn bờ đê!",
    "Năm mới chúc bạn mua sắm tẹt ga,/ nhưng tài khoản vẫn cứ dày dặn!",
    "Chúc bạn 2025, buồn phiền về hưu,/ niềm vui thăng tiến!",
    "Mong bạn năm mới 'gánh team' như tuyển thủ,/ lương thưởng như CEO!",
    "Chúc bạn Tết này hạnh phúc nhân đôi,/ thành công nhân ba, và mệt mỏi chia hết!", 
    "Chúc bạn năm mới rực rỡ như pháo hoa,/ hạnh phúc như hội chợ Tết!",
    "Năm 2025, mong bạn cười như Tết,/ vui như được tăng lương!",
    "Tết này ăn uống thả ga,/ nhưng cân nặng không nhích nha!",
    "Chúc bạn 2025 tình yêu nở rộ,/ tiền bạc sinh sôi!",
    "Chúc bạn Tết vui như được nhận lì xì,/ tiền vào túi rủng rỉnh như chợ phiên!",
    "Năm 2025 chúc bạn vui như Tết,/ phúc lộc đầy nhà như mâm cỗ!",
    "Mong bạn năm mới nhiều like, nhiều share,/ nhưng lương cũng phải nhiều số!"
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

// kiểm tra số lượng truy cập
window.onload = function () {
    let count = localStorage.getItem('visitCount') || 0;
    count++;
    localStorage.setItem('visitCount', count);
    console.log("Số lượt truy cập: " + count);
};

