        let slides = document.querySelectorAll(".slide");
        let index = 0;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove("show"));
            slides[n].classList.add("show");
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            showSlide(index);
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        }

        //Auto slide every 3 seconds
        setInterval(nextSlide, 3000);
        showSlide(index);
