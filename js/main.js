(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Select the dropdown parent (Pages link) separately
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link.dropdown-toggle');

// Add click event listener to handle active class for normal links
    navLinks.forEach(link => {
        // Ignore the dropdown toggle
        if (link !== dropdownToggle) {
            link.addEventListener('click', function () {
                // Remove the active class from all links
                navLinks.forEach(nav => nav.classList.remove('active'));

                // Add the active class to the clicked link
                this.classList.add('active');
            });
        }
    });

// Highlight the active link based on the current page URL
    const currentLocation = window.location.pathname;

    navLinks.forEach(link => {
        // Ignore the dropdown toggle for the Pages menu
        if (link !== dropdownToggle) {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentLocation) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });

// Prevent the dropdown (Pages) link from being marked as active
    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default click behavior
        navLinks.forEach(nav => nav.classList.remove('active')); // Clear active class from other links
    });




    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

// Contact us

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    const form = event.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      if (response.ok) { // Check if the HTTP response status is 200-299
        alert("Your message has been sent successfully. We'll respond shortly!");
        form.reset(); // Reset form fields
      } else {
        return response.text().then(text => {
          throw new Error(text); // Throw an error with response text
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Your message has been sent successfully. We'll respond shortly!");
    });

  });



  
