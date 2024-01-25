


 // popup create code start 
 function createPopup(popupTriggerClass, closePopupClass) {
    const popupTriggers = document.querySelectorAll(
      `.${popupTriggerClass}`
    );
    const closePopups = document.querySelectorAll(`.${closePopupClass}`);
  
    popupTriggers.forEach((popupTrigger) => {
      const popupId = popupTrigger.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      const popupContent = popup.querySelector(".popupContent");
  
   
      popupTrigger.addEventListener("click", function () {
        popup.style.display = "flex";
        popupContent.innerHTML = getContentForPopup(popupId);
      });
    });
  
    closePopups.forEach((closePopup) => {
      const popup = closePopup.closest(".popup");
  
      closePopup.addEventListener("click", function () {
        popup.style.display = "none"; 
      });
    });
  }
  
  // Initialize popups
  createPopup("popupTrigger", "closePopup");
  

  document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementById('info-icon');
    var dropdown = document.getElementById('info-dropdown');
    icon.addEventListener('click', function (event) {
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
      event.stopPropagation();
    });
    window.addEventListener('click', function () {
      dropdown.style.display = 'none';
    });
  });


  // tab 
 // Get the tab items and content elements
 document.addEventListener("DOMContentLoaded", function () {
  function initializeTabs(containerId) {
    const container = document.getElementById(containerId);
    const tabs = container.querySelectorAll(".tab-button");
    const tabContents = container.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("active-tab-color");
        });

        tab.classList.add("active-tab-color");

        tabContents.forEach((content) => content.classList.add("hidden"));
        container
          .querySelector(`#${tab.dataset.tab}`)
          .classList.remove("hidden");
      });
    });
  }
  initializeTabs("smartWatches");
  initializeTabs("headphonesTabs");
  initializeTabs("wirelessSpeakersTabs");
  initializeTabs("chargerCablesTabs");
  initializeTabs("smartTvAccessoriesTabs");
  initializeTabs("smartHomeAppliancesTabs");
  initializeTabs("computerAccessoriesTabs");
  initializeTabs("networkComponentsTabs");
  initializeTabs("healthOutdoorsTabs");
  initializeTabs("smartPhonesTabs");
});



// password hidden and open toggle code 
// function togglePasswordVisibility() {
//   var passwordInput = document.getElementById("passwordInput");
//   var togglePasswordIcon = document.getElementById("togglePassword");

//   if (passwordInput.type === "password") {
//       passwordInput.type = "text";
//       togglePasswordIcon.src = "/image/signUp/eye_show.svg";
//   } else {
//       passwordInput.type = "password";
//       togglePasswordIcon.src = "/image/signUp/eye.svg";
//   }
// }



function togglePasswordVisibility(inputId, toggleIconId) {
  var passwordInput = document.getElementById(inputId);
  var togglePasswordIcon = document.getElementById(toggleIconId);

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordIcon.src = "/image/signUp/eye_show.svg";
  } else {
      passwordInput.type = "password";
      togglePasswordIcon.src = "/image/signUp/eye.svg";
  }
}