


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
  initializeTabs("reviewsTabs");
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


// ======retailer-request start =====

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('sameAddressCheckbox');
  var deliveryDetailsDiv = document.getElementById('deliveryDetails');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      deliveryDetailsDiv.classList.add('hidden');
    } else {
      deliveryDetailsDiv.classList.remove('hidden');
    }
  });
});




// ======== Personal Info and update Personal Info ======= 

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections
  const personalInfoSection = document.getElementById("personalInfoSection");
  const updatePersonalInfoSection = document.getElementById("updatePersonalInfoSection");

  // Get reference to the image icon
  const profileEditIcon = document.getElementById("profileEditIcon");

  // Add click event listener to the image icon
  profileEditIcon.addEventListener("click", function (event) {
    // Toggle visibility of the sections
    personalInfoSection.classList.toggle("hidden");
    updatePersonalInfoSection.classList.toggle("hidden");
  });

  // Add click event listener to the "Cancel" button in the update section
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", function (event) {
    // Prevent the default button behavior
    event.preventDefault();

    // Toggle visibility of the sections
    personalInfoSection.classList.toggle("hidden");
    updatePersonalInfoSection.classList.toggle("hidden");
  });
});




// profile toggle left and right Side Bar Create the page start

function changeContent(content, clickedLink) {
  var rightSidebarContent = document.getElementById("right-sidebar-content");
  var contentDiv = document.getElementById(content);

  if (rightSidebarContent && contentDiv) {
    var allContentDivs =
      rightSidebarContent.getElementsByClassName("content-div");
    for (var i = 0; i < allContentDivs.length; i++) {
      allContentDivs[i].style.display = "none";
    }

    contentDiv.style.display = "block";

    // Remove the 'active-link' class from all links
    var allLinks = document.querySelectorAll(".submenu-link");
    allLinks.forEach(function (link) {
      link.classList.remove("active-link");
    });

    // Add the 'active-link' class to the clicked link
    if (clickedLink) {
      clickedLink.classList.add("active-link");
    }
  }
}

function changeTab(tabId) {
  const tabButtons = document.querySelectorAll('.reviews-tab-button');
  const tabContents = document.querySelectorAll('.reviews-tab-content');

  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  const clickedButton = document.getElementById(tabId.replace('content', 'tab'));
  const clickedContent = document.getElementById(tabId);

  clickedButton.classList.add('active');
  clickedContent.classList.add('active');
}



// byu now cart 
document.addEventListener('DOMContentLoaded', function () {
  const openCartIcon = document.getElementById('openCartIcon');
  const cartContainer = document.querySelector('.cart-container');
  const closeCartButton = document.getElementById('closeCartButton');

  openCartIcon.addEventListener('click', function () {
    cartContainer.classList.toggle('hidden');
  });

  closeCartButton.addEventListener('click', function () {
    cartContainer.classList.add('hidden');
  });
});

function toggleForm() {
  var formContainer = document.getElementById("formContainer");
  formContainer.classList.toggle("hidden");
}