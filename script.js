const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        // Remove active class from all tabs
        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        });

        // Add active class to clicked tab
        tab.classList.add("active");


        // Hide all content
        contents.forEach(function(content) {
            content.classList.remove("active");
        });


        // Get the content that belongs to the clicked tab
        const tabId = tab.getAttribute("data-tab");

        document.getElementById(tabId).classList.add("active");

    });

});