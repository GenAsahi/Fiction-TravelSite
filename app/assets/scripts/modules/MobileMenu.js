class MobileMenu {
    constructor() {
        //alert('Testing from MobileMenu.')
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteheader = document.querySelector(".site-header");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        //console.log("Hooray - the icon was clicked.");
        this.menuContent.classList.toggle('site-header__menu-content--is-visible');
        this.siteheader.classList.toggle('site-header--is-expanded');
    }
}

export default MobileMenu;