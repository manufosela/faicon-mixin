import { html } from 'lit-element';
import '@fortawesome/fontawesome-free/js/all.js';

export let FaIcon = Base => class extends Base {
  getNodeFaIcon(iconName) {
    let obj = {prefix: 'fa', iconName: iconName};
    let icn = window.FontAwesome.icon(obj) || {node: ''};
    return icn.node;
  }

  getSVGFaIcon(iconName, size) {
    size = size || '24px';
    let node = this.getNodeFaIcon(iconName);
    let svg = node[0];
    svg.setAttribute('style', 'width: ' + size);
    return html`${svg}`;
  }
};