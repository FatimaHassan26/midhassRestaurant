import './style.css'
import createHome from './home';
import createMenu  from './menu';
import createContact from './contact';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    function loadTab(tabFunction) {
        contentDiv.innerHTML = ''; // Clear the content div
        const tabContent = tabFunction(); // Create new content
        contentDiv.appendChild(tabContent); // Append the content

        // Add event listeners for dropdown links after content is loaded
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                const sectionClass = this.getAttribute('data-section');
                const targetSection = document.querySelector('.' + sectionClass);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    document.getElementById('home-tab').addEventListener('click', () => loadTab(createHome));
    document.getElementById('menu-tab').addEventListener('click', () => loadTab(createMenu));
    document.getElementById('contact-tab').addEventListener('click', () => loadTab(createContact));

    // Load the initial tab content
    loadTab(createHome);
});