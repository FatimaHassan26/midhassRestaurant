import './style.css'
import createHome from './home';
import createMenu  from './menu';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
  
    function loadTab(tab) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(tab);
    }
  
    document.getElementById('home-tab').addEventListener('click', () => loadTab(createHome()));
    document.getElementById('menu-tab').addEventListener('click', () => loadTab(createMenu()));
  
    loadTab(createHome());
  });