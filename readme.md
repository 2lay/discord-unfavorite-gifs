# Discord unfavorite all GIFs script

This script automates the process of unfavoriting all gifs.

## How to Use

### Requirements
- You need to be using a web browser, not the Discord app
  
### Steps to Execute the Script

1. **Open the Browser Developer Tools**:
   - **For Windows/Linux**: Press `Ctrl + Shift + I` to open the Developer Tools.
   - **For macOS**: Press `Command + Option + I` to open the Developer Tools.

2. **Navigate to the Console Tab**:
   - Once the Developer Tools are open, click on the "Console" tab and type ``allow pasting``.

3. **Open the Favorite GIF Section**:
   - Ensure that you have the "Favorite GIFs" tab open.

4. **Copy and Paste the Script**:
   - Copy the following script:

    ```javascript
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
    ```

5. **Run the Script**:
   - Paste the script into the console and press `Enter`. The script will start unfavoriting all gifs.

6. **When You're Done**:
   - Reload the page or close the page to stop the script.

### Important Notes
- Ensure that you are on the correct webpage where the button exists before running the script.
- The script will continue to run until the button is no longer found on the page or you manually stop it by refreshing the page.
- Rate limiting may cause not all GIFs to be removed. A reload of the page and re-execution of the script may be required.

## License
- This project is licensed under the GNU GPLv3 License.
