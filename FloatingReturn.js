/* Create floating "Return to Main Navigation" button
 */
(function () {
    const menuNav = "https://amanmd2000.github.io./";
    const body = document.querySelector("body"); //current page to inject new code
    createButton();
    body.addEventListener("click", (e) => {
      if (e.target.classList.contains("return-button")) {
        linkReturn(e);
      }
    });
  
    function createButton() {
      const button = document.createElement("button");
      button.id = "return-button";
      button.classList.add("return-button");
      button.innerHTML = `Return to<br>Project List`;
      body.appendChild(button);
    }
  
    function linkReturn() {
      window.location.href = menuNav;
    }
    console.log(body);
  })(); // Wrapped in an IIFE
  