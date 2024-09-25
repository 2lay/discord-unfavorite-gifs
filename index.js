(function clickRemoveFromFavorites() {
    const buttonSelector = '.favButton_bad108'; 
    const delay = 200; // Delay in milliseconds

    const button = document.querySelector(buttonSelector);
    if (button) {
        button.click(); 
        console.log('Clicked the Remove from Favourites button!'); 
    } else {
        console.log('Button not found.');
    }
    setTimeout(clickRemoveFromFavorites, delay);
})();
