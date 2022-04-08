const tocContainer = document.getElementById('page-toc-container');

function generatePageTOC(depth = 2) {
  // Ensure that depth is valid
  depth = (depth <= 0 || depth > 5) ? 5 : depth;

  // Get all possible headings within the specified depth
  let headings = document.querySelectorAll('div ' + Array.from({length: depth}, (_, i) => "h" + (i + 2)).join(","));

  // Root of the TOC
  let currentNode = tocContainer;

  headings.forEach(function(el, index) {
    // Insert a marker since anchor links breaks with css position sticky
    // sticky headers upwards are stacked at the top of the viewport
    // and therefore cannot be jumped to since they are already visible
    // Instead inject a hidden element to use as a scroll marker
    el.insertAdjacentHTML('beforebegin', '<i id="page-toc-'+index+'" class="page-toc-scroll-marker sr-only">Marcador de capítulo</i>');
    
    // Create a new sublist when the current heading has more depth than the last
    if (index > 0 && headings[index].tagName[1] > headings[index - 1].tagName[1]) {
      let newNode = document.createElement('ul');
      currentNode.appendChild(newNode);
      currentNode = newNode;
    }
    // Return to the parent list when the current heading has less depth than the last
    else if (index > 0 && headings[index].tagName[1] < headings[index - 1].tagName[1]) {
      currentNode = currentNode.parentElement;
    }

    const newTocNavItem = document.createElement('li');
    const newTocNavItemLink = document.createElement('a');
    const newTocNavItemText = document.createTextNode(el.textContent);
    newTocNavItemLink.setAttribute('href', '#page-toc-' + index);
    newTocNavItemLink.appendChild(newTocNavItemText);
    newTocNavItem.appendChild(newTocNavItemLink);
    currentNode.appendChild(newTocNavItem);
  });
}