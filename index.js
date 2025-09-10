document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    
    // It handles switching between tab content.
    window.opentab = function(event, tabname) {
                for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        if (event && event.currentTarget) {
            event.currentTarget.classList.add("active-link");
        } else {
            // prefer because no lonoger depending on exact text in js fuction caall
            for (let tablink of tablinks) {
                if (tablink.getAttribute('onclick').includes(tabname)) {
                    tablink.classList.add('active-link');
                    break;
                }
            }
        }
        
        const targetTabContent = document.getElementById(tabname);
        if (targetTabContent) {
            targetTabContent.classList.add("active-tab");
        }
    };

    // Initialize the first tab as active when the page loads
    // Find the initially active tab link and its corresponding content
    const initialActiveTabLink = document.querySelector('.tab-links.active-link');
    if (initialActiveTabLink) {
        // Extract tabname from the onclick attribute
        const onclickAttr = initialActiveTabLink.getAttribute('onclick');
        const match = onclickAttr.match(/'([^']+)'/);
        if (match && match[1]) {
            // Call opentab without an event object to activate it on load
            window.opentab(null, match[1]);
        }
    }


    // Sidemenu functionality
    const sidemenu = document.getElementById("sidemenu");

    window.openmenu = function() {
        if (sidemenu) {
            sidemenu.style.right = "0";
        }
    };

    window.closemenu = function() {
        if (sidemenu) {
            sidemenu.style.right = "-200px";
        }
    };

   
});