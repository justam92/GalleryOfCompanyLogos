function createCompanyLogoGallery(indexOfCurrentDot, categoryId, dotBoxId) {

	(function init() {
		var screenWidth = innerWidth;

		var companiesLogos = document.querySelectorAll('#' + categoryId + ' .col-1-sm');

		var companiesLogosLengthPartMarketplace = companiesLogos.length;

		hideCompaniesLogo(companiesLogosLengthPartMarketplace, companiesLogos);

		var companiesLogosCountOnOnePage = getCompaniesLogosCountOnOnePage(screenWidth);

		if (indexOfCurrentDot == null || isNaN(indexOfCurrentDot)) {
			indexOfCurrentDot = 1;
		}

		var lastIndexOfCompanyLogo = indexOfCurrentDot * companiesLogosCountOnOnePage;

		if (lastIndexOfCompanyLogo > companiesLogosLengthPartMarketplace) {
			lastIndexOfCompanyLogo = companiesLogosLengthPartMarketplace;
		}

		for (var counter = (indexOfCurrentDot * companiesLogosCountOnOnePage) - companiesLogosCountOnOnePage; counter < lastIndexOfCompanyLogo; counter++) {
			companiesLogos[counter].classList.add("d-flex");
		}

		deleteDots();

		addDots(companiesLogosLengthPartMarketplace, companiesLogosCountOnOnePage);

	})();

	function deleteDots() {
		var dots = document.querySelectorAll('#' + dotBoxId + ' ul li');
		var dotsLength = dots.length;
		var ulElement = document.getElementsByTagName("ul");
		var elementsLiOfDots = document.getElementsByTagName("li");

		for (var counter = 0; counter < dotsLength; counter++) {
			dots[counter].remove(elementsLiOfDots);
		}
	}

	function addDots(companiesLogosLengthPartMarketplace, companiesLogosCountOnOnePage) {

		var companiesMarketplace = document.getElementById(dotBoxId);

		var ulElement = document.createElement("ul");

		var dotsCountOnOnePage = 0;

		dotsCountOnOnePage = (companiesLogosLengthPartMarketplace / companiesLogosCountOnOnePage);

		indexOfCurrentDot = indexOfCurrentDot - 1;

		for (let counter = 0; counter < dotsCountOnOnePage; counter++) {
			let dot = document.createElement("li");
			let linkToPageOfCompany = document.createElement("a");

			if (counter == indexOfCurrentDot) {
				dot.classList.add("current");
			}

			dot.addEventListener('click', function (ev) {
				ev.preventDefault();
				if (counter !== indexOfCurrentDot) {
					let dots = document.querySelectorAll('#' + dotBoxId + ' ul li');

					dots[indexOfCurrentDot].className = '';

					setTimeout(function () {
						dot.className += ' current';

						onDotClick(categoryId, dotBoxId);
					}, 25);
				}
			});

			dot.appendChild(linkToPageOfCompany);
			ulElement.appendChild(dot);
		}

		companiesMarketplace.appendChild(ulElement);
	}

	function getCompaniesLogosCountOnOnePage(screenWidth) {
		let companiesLogosCountOnOnePage = 0;

		if (screenWidth >= 1 && screenWidth <= 480) {
			companiesLogosCountOnOnePage = 1;
		}

		else if (screenWidth >= 481 && screenWidth <= 720) {
			companiesLogosCountOnOnePage = 2;
		}

		else if (screenWidth >= 721 && screenWidth <= 1280) {
			companiesLogosCountOnOnePage = 3;
		}

		else if (screenWidth >= 1281 && screenWidth <= 1600) {
			companiesLogosCountOnOnePage = 4;
		}

		else if (screenWidth >= 1601 && screenWidth <= 2048) {
			companiesLogosCountOnOnePage = 5;
		}

		else if (screenWidth >= 2049) {
			companiesLogosCountOnOnePage = 6;
		}
		return companiesLogosCountOnOnePage;
	}

}