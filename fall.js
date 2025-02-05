const objects = document.querySelectorAll('.falling-object');

function initializeObject(obj) {
    const screenWidth = window.innerWidth; 
    const randomX = Math.random() * (screenWidth - 20); 
    const speed = 0.5 + Math.random();

    obj.style.position = 'fixed';
    obj.style.left = `${randomX}px`;
    obj.style.top = `-20px`; 


    obj.dataset.speed = speed;
}

function updateObjectPosition(obj) {
    const currentTop = parseFloat(obj.style.top); 
    const speed = parseFloat(obj.dataset.speed); 

    const newTop = currentTop + speed;
    obj.style.top = `${newTop}px`;

    if (newTop > window.innerHeight) {
        initializeObject(obj);
    }
}

objects.forEach((obj) => {
    initializeObject(obj);
});

function animateObjects() {
    objects.forEach((obj) => updateObjectPosition(obj));
    requestAnimationFrame(animateObjects); 
}

animateObjects();



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

document.addEventListener('keydown', function (event) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const isCtrlOrCommand = isMac ? event.metaKey : event.ctrlKey;

    if (
        (isCtrlOrCommand && event.key.toLowerCase() === 'c') ||
        (isCtrlOrCommand && event.key.toLowerCase() === 'v')
    ) {
        event.preventDefault();
        alert("Chức năng sao chép và dán đã bị vô hiệu hóa!");
    }
});
