      const cookie = document.getElementById("cookie");
      const click = document.getElementById("click");
      
      let count = 0;
      
      cookie.addEventListener("click", () => {
        count++;
        
        click.textContent = count;
      });