document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.image-wrapper');
    let currentIndex = 0;

    function updateImages() {
        // Past o'ng (2), o'rtadagi (1), va tepa chap (0) ketma-ketligini berish uchun arrayni teskari tartibda ko'rsatamiz
        const order = [2, 1, 0]; 

        order.forEach((cardIndex, i) => {
            const card = cards[cardIndex];
            const images = card.querySelectorAll('img');
            const delay = i * 200; // Har biriga 1 soniya kechikish qo'shamiz

            setTimeout(() => {
                images.forEach((img, index) => {
                    if (index === currentIndex) {
                        img.classList.add('active');
                        img.classList.remove('prev');
                    } else if (index === (currentIndex - 1 + images.length) % images.length) {
                        img.classList.add('prev');
                        img.classList.remove('active');
                    } else {
                        img.classList.remove('active', 'prev');
                    }
                });
            }, delay); // Kechikishni hisobga olamiz
        });

        currentIndex = (currentIndex + 1) % cards[0].querySelectorAll('img').length; // Rasmlar soni bo'yicha
    }

    // Har 3 soniyada rasmni almashtirish
    setInterval(updateImages, 3000);
});
