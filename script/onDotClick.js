function onDotClick(categoryId, dotBoxId) {
    var companiesLogos = document.querySelectorAll('#' + categoryId + ' .col-1-sm');

    var companiesLogosLengthPartMarketplace = companiesLogos.length;

    var dots = document.querySelectorAll('#' + dotBoxId + ' ul li');
    var dotsLength = dots.length;
    var currentDot = document.getElementsByClassName("current");
    var indexOfCurrentDot = 1;
   
    dots.forEach(function (elem, index) {
        if (elem.classList.contains("current") == true) {
            indexOfCurrentDot = index + 1;
        }
    });

    createCompanyLogoGallery(indexOfCurrentDot, categoryId, dotBoxId);
}