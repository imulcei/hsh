document.addEventListener("DOMContentLoaded", (e) => {

    // CHARGEMENT DES PAGES
    let displayPage = document.getElementById("display-page");
    let currentLocationId = null;
    let currentCarouselIndex = 0;
    let carouselImages = [];
    let carouselInterval;

    function loadPage(url, locationId = null) {
        stopCarousel();
        currentLocationId = locationId;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de chargement');
                }
                return response.text();
            })
            .then(html => {
                displayPage.innerHTML = html;
                if (url === 'pages/services.html') {
                    initiliazeCollapse();
                } else if (url === 'pages/locations.html') {
                    initializeLocationsPage();
                } else if (url === 'pages/presentation.html' && locationId) {
                    initializePresentationPage(locationId);
                }
            })
            .catch(error => {
                console.error('Erreur.');
            });
    }

    // CHARGEMENT DES MODALES
    function loadModal(url) {
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de chargement de la modale');
                }
                return response.text();
            })
            .then(html => {
                modalContent.innerHTML = html;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';

                initializeModalEvents(url);
            })
            .catch(error => {
                console.error('Erreur lors du chargement de la modale:', error);
            });
    }

    function closeModal() {
        const modalOverlay = document.getElementById('modal-overlay');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
    }

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }

    function initializeModalEvents(url) {
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');

        modalClose.removeEventListener('click', closeModal);
        modalOverlay.removeEventListener('click', handleOverlayClick);
        document.removeEventListener('keydown', handleEscapeKey);
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', handleOverlayClick);
        document.addEventListener('keydown', handleEscapeKey);

        if (url === 'pages/connexion.html') {
            const subscribeLink = document.getElementById('subscribe-page-redirection');
            if (subscribeLink) {
                subscribeLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadModal('pages/inscription.html');
                });
            }
        } else if (url === 'pages/inscription.html') {
            const loginLink = document.getElementById('login-page-redirection');
            if (loginLink) {
                loginLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadModal('pages/connexion.html');
                });
            }
        }
    }

    loadPage("pages/home.html");

    document.getElementById("accueil-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('pages/home.html');
    });
    document.getElementById("locations-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('pages/locations.html');
    });
    document.getElementById("services-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('pages/services.html');
    });
    document.getElementById("apropos-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('pages/a-propos.html');
    });
    document.getElementById("inscription-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadModal('pages/inscription.html');
    });
    document.getElementById("connexion-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadModal('pages/connexion.html');
    });

    // MENU BURGER
    const burger = document.querySelector('.menu__burger');
    const menuList = document.querySelector('.menu__list');
    const menuItems = document.querySelectorAll('.menu__items a');
    const iconUser = document.querySelector('.icon-user');
    const menuListUser = document.querySelector('.menu__list-user');
    const menuItemsUser = document.querySelectorAll('.menu__list-user .menu__items a');

    const overlay = document.createElement('div');
    overlay.classList.add('menu__overlay');
    document.body.appendChild(overlay);

    function toggleMenu() {
        menuListUser.classList.remove('menu__list-user--active');
        burger.classList.toggle('menu__burger--active');
        menuList.classList.toggle('menu__list--active');
        overlay.classList.toggle('menu__overlay--active');

        if (menuList.classList.contains('menu__list--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function toggleUserMenu() {
        burger.classList.remove('menu__burger--active');
        menuList.classList.remove('menu__list--active');

        menuListUser.classList.toggle('menu__list-user--active');
        overlay.classList.toggle('menu__overlay--active');

        if (menuListUser.classList.contains('menu__list-user--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeAllMenus() {
        burger.classList.remove('menu__burger--active');
        menuList.classList.remove('menu__list--active');
        menuListUser.classList.remove('menu__list-user--active');
        overlay.classList.remove('menu__overlay--active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', toggleMenu);
    iconUser.addEventListener('click', toggleUserMenu);
    overlay.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', closeAllMenus);
    });

    menuItemsUser.forEach(item => {
        item.addEventListener('click', closeAllMenus);
    });

    window.addEventListener('resize', closeAllMenus);

    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !menuList.contains(e.target) &&
            !iconUser.contains(e.target) && !menuListUser.contains(e.target)) {
            closeAllMenus();
        }
    });

    // AFFICHAGE VALEUR DES INPUTS RANGE
    function updateRangeValue(rangeId, valueId) {
        const range = document.getElementById(rangeId);
        const valueDisplay = document.getElementById(valueId);

        range.addEventListener('input', function () {
            valueDisplay.textContent = this.value;
        });
    }

    // Initialiser les deux ranges
    updateRangeValue('rooms-number', 'rooms-value');
    updateRangeValue('bedrooms-number', 'bedrooms-value');

    // GESTION DES PAGES PRESENTATION DE LA PAGE LOCATIONS
    function initializeLocationsPage() {
        document.querySelectorAll('a[data-page="presentation"]').forEach(e => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
                const locationId = event.currentTarget.dataset.id;
                loadPage('pages/presentation.html', locationId);
            })
        })
    }

    function initializePresentationPage(locationId) {
        if (locationId && locationsData[locationId]) {
            const location = locationsData[locationId];

            if (location.images && location.images.length > 0) {
                initializeCarousel(location.images);
            }

            const titleElement = document.querySelector('.locations-container__infos h3');
            const imgElement = document.querySelector('.locations-container__owner img');
            const nameElement = document.querySelector('.locations-container__owner h4');
            const descriptionElement = document.querySelector('.locations-container__infos p');

            if (titleElement) {
                titleElement.textContent = location.title;
            } else {
                console.error('Élément titre non trouvé');
            }

            if (nameElement) {
                nameElement.textContent = location.ownerName;
            } else {
                console.error('Élément nom non trouvé');
            }

            if (imgElement) {
                imgElement.src = location.ownerImage;
            } else {
                console.error('Élément image non trouvé');
            }

            if (descriptionElement) {
                descriptionElement.textContent = location.description;
            } else {
                console.error('Élément description non trouvé');
            }

            setRating(location.rating);
            setEquipmentList(location.equipments);
        }
    }

    function setRating(rating) {
        const review = document.querySelector('.locations-container__review');
        review.innerHTML = "";
        for (let index = 1; index <= 5; index++) {
            const star = document.createElement('i');
            star.className = index <= rating ? 'fa-solid fa-star' : 'fa-regular fa-star';
            review.appendChild(star);
        }
    }

    function setEquipmentList(equipments) {
        const ul = document.querySelector('.locations-container__equipments ul');
        ul.innerHTML = '';
        equipments.forEach(e => {
            const li = document.createElement('li');
            li.textContent = e;
            ul.appendChild(li);
        });
    }

    // CAROUSEL DES PAGES PRESENTATION
    function initializeCarousel(images) {
        carouselImages = images;
        currentCarouselIndex = 0;

        const carouselTrack = document.querySelector('.carousel__track');
        const previousBtn = document.querySelector('.carousel__btn--prev');
        const nextBtn = document.querySelector('.carousel__btn--next');

        carouselTrack.innerHTML = '';
        images.forEach((imageSrc, index) => {
            const slide = document.createElement('div');
            slide.classList.add('carousel__slide');
            slide.innerHTML = `<img src="${imageSrc}" />`;
            carouselTrack.appendChild(slide);
        });

        updateCarouselPosition(false);

        if (previousBtn) {
            const newPreviousBtn = previousBtn.cloneNode(true);
            previousBtn.parentNode.replaceChild(newPreviousBtn, previousBtn);
            newPreviousBtn.addEventListener('click', goToPreviousSlide);
        }

        if (nextBtn) {
            const newNextBtn = nextBtn.cloneNode(true);
            nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
            newNextBtn.addEventListener('click', goToNextSlide);
        }

    }

    function goToPreviousSlide() {
        currentCarouselIndex--;
        if (currentCarouselIndex < 0) {
            currentCarouselIndex = carouselImages.length - 1;
        }
        updateCarouselPosition(true);
    }

    function goToNextSlide() {
        currentCarouselIndex++;
        if (currentCarouselIndex >= carouselImages.length) {
            currentCarouselIndex = 0;
        }
        updateCarouselPosition(true);
    }

    function updateCarouselPosition(withTransition = true) {
        const carouselTrack = document.querySelector('.carousel__track');
        if (carouselTrack) {
            const translateX = -currentCarouselIndex * 100;
            if (withTransition) {
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            } else {
                carouselTrack.style.transition = 'none';
            }
            carouselTrack.style.transform = `translateX(${translateX}%)`;
        }
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // GESTION DU COLLAPSE DE LA PAGE SERVICE
    function initiliazeCollapse() {
        let collapsibleButtons = document.querySelectorAll('[id^="collapsible-"]');

        collapsibleButtons.forEach(button => {
            button.addEventListener("click", function () {
                const isActive = this.classList.contains("active");
                collapsibleButtons.forEach(btn => {
                    btn.classList.remove("active");
                    btn.nextElementSibling.classList.remove("open");
                });
                if (!isActive) {
                    this.classList.add("active");
                    this.nextElementSibling.classList.add("open");
                }
            });
        });
    }
});