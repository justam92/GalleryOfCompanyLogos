function hideCompaniesLogo(companiesLogosLength, companiesLogos){
	for(var counter = 0; counter < companiesLogosLength; counter++){
		companiesLogos[counter].classList.remove("d-flex");
	}
}