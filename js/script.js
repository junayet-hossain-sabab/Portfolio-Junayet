


  function updateFooterTime() {
    const now = new Date();
    

    document.getElementById('current-year').textContent = now.getFullYear();
    
    const dateTimeString = now.toLocaleString('en-US', {
      weekday: 'long',  
      year: 'numeric',   
      month: 'short',   
      day: 'numeric',    
      hour: '2-digit',   
      minute: '2-digit', 
      second: '2-digit'  
    });
    
    document.getElementById('live-clock').textContent = dateTimeString;
  }

  updateFooterTime();

  setInterval(updateFooterTime, 1000);
