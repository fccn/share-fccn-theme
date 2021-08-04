const tocContainer = document.getElementById('page-toc-container');

function generatePageTOC() {
    document.querySelectorAll('article h2').forEach(function(el, index) {
      // Insert a marker since anchor links breaks with css position sticky
      // sticky headers upwards are stacked at the top of the viewport
      // and therefore cannot be jumped to since they are already visible
      // Instead inject a hidden element to use as a scroll marker
      el.insertAdjacentHTML('beforebegin', '<i id="page-toc-'+index+'" class="page-toc-scroll-marker sr-only">Marcador de capítulo</i>');
      const newTocNavItem = document.createElement('li');
      const newTocNavItemLink = document.createElement('a');
      const newTocNavItemText = document.createTextNode(el.textContent);
      newTocNavItemLink.setAttribute('href', '#page-toc-' + index);
      newTocNavItemLink.appendChild(newTocNavItemText);
      newTocNavItem.appendChild(newTocNavItemLink);
      tocContainer.appendChild(newTocNavItem);
    });
  }

generatePageTOC();
