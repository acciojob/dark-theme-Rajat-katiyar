document.getElementById('swap').addEventListener('click', swapTheme);  

function swapTheme() {  
    const appDiv = document.getElementById('app');  
    const swapButton = document.getElementById('swap');  

    // Toggle classes for the app div  
    if (appDiv.classList.contains('day')) {  
        appDiv.classList.remove('day');  
        appDiv.classList.add('night');  
        
        // Change button class and text  
        swapButton.classList.remove('button_day');  
        swapButton.classList.add('button_night');  
        swapButton.textContent = 'Switch to Light Theme';  
    } else {  
        appDiv.classList.remove('night');  
        appDiv.classList.add('day');  
        
        // Change button class and text  
        swapButton.classList.remove('button_night');  
        swapButton.classList.add('button_day');  
        swapButton.textContent = 'Switch to Dark Theme';  
    }  
}