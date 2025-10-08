// renderer.js (updated)
document.getElementById('getStartedBtn').addEventListener('click', () => {
  // Open the login.html page in a new window
  const loginWindow = window.open('login.html', '_blank', 'width=1000,height=800');

  // Add an event listener to handle the form submission in the login window
  loginWindow.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Simulated authentication logic
    // Open the steam.html page in a new window upon successful authentication
    const steamWindow = window.open('steam.html', '_blank', 'width=1000,height=800');

    // Wait for the steamWindow to finish loading before accessing its content
    await new Promise(resolve => steamWindow.addEventListener('DOMContentLoaded', resolve));

    // Add an event listener to handle the form submission in the steam window
    steamWindow.document.getElementById('steamForm').addEventListener('submit', (steamEvent) => {
      steamEvent.preventDefault();

      // Simulated login to Steam logic
      // Open the library.html page in a new window upon successful login
      const libraryWindow = window.open('library.html', '_blank', 'width=1000,height=800');

      // Add event listener for the game launch buttons
      const launchButtons = libraryWindow.document.getElementsByClassName('launchBtn');
      for (const launchButton of launchButtons) {
        // Replace the URL with the actual website URL
        const websiteURL = 'https://www.rocketleague.com';
        launchButton.addEventListener('click', () => window.open(websiteURL, '_blank'));
      }

      steamWindow.close(); // Close the steam window
    });

    loginWindow.close(); // Close the login window
  });
});
