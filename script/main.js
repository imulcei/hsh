document.addEventListener("DOMContentLoaded", (e) => {

    // CHARGEMENT DES PAGES
    let displayPage = document.getElementById("display-page");
    let currentLocationId = null;

    function loadPage(url, locationId = null) {
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
        loadPage('pages/inscription.html');
    });
    document.getElementById("connexion-page").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('pages/connexion.html');
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
            const titleElement = document.querySelector('.locations-container__infos h3');
            const imgElement = document.querySelector('.locations-container__infos img');
            const nameElement = document.querySelector('.locations-container__infos h4');
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