document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    
    // It handles switching between tab content.
    window.opentab = function(event, tabname) {
        // Handle cases where 'event' might not be passed (like in your first 'skills' tab)
        // If event is passed, remove active-link from the current target
        // Otherwise, it means we're likely activating a default tab without a click event
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        if (event && event.currentTarget) {
            event.currentTarget.classList.add("active-link");
        } else {
            // If no event, find the tablink corresponding to tabname and make it active
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

    // Google Sheet Form Submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxkawasHv6ULKNVWN4LtLhVa00BXkKdZePqrxUeIhrVG3C85otIsK_aEHlOk1eWJfxX/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg"); // Element to display success/error messages

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    if (msg) {
                        msg.innerHTML = "Message sent successfully";
                        setTimeout(() => {
                            msg.innerHTML = "";
                        }, 5000);
                    }
                    form.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    if (msg) {
                        msg.innerHTML = "Error sending message. Please try again.";
                    }
                });
        });
    }
});