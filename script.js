document.addEventListener('DOMContentLoaded', function() {
    const digitalClock = document.getElementById('digitalClock');
    const dateDisplay = document.getElementById('dateDisplay');
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
    const toggleBtn = document.getElementById('toggleBtn');
    const hourMarks = document.getElementById('hourMarks');
    
    let showSeconds = true;
    
    
    
    function updateClock() {
        const now = new Date();
        
        // Digital clock
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        digitalClock.textContent = `${hours}:${minutes}${showSeconds ? `:${seconds}` : ''}`;
        
        // Date display
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString(undefined, options);
        
        // Analog clock
        const hourDegrees = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
        const minuteDegrees = now.getMinutes() * 6;
        const secondDegrees = now.getSeconds() * 6;
        
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        secondHand.style.display = showSeconds ? 'block' : 'none';
        if (showSeconds) {
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        }
    }
    
    // Toggle seconds visibility
    toggleBtn.addEventListener('click', function() {
        showSeconds = !showSeconds;
        toggleBtn.textContent = showSeconds ? 'Hide Seconds' : 'Show Seconds';
        updateClock();
    });
    
    // Update clock every second
    updateClock();
    setInterval(updateClock, 1000);
});