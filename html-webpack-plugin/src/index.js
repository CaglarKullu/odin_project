import _ from 'lodash';

/**
 * Creates a new component element with inner HTML containing 'Hello webpack'.
 *
 * @return {Element} The newly created component element.
 */
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());