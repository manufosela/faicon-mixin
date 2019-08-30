import { html } from 'lit-element';
import '@fortawesome/fontawesome-free/js/all.js';

let FaIcon = Base => class extends Base {
  getNodeFaIcon(iconName) {
    let obj = {prefix: 'fa', iconName: iconName};
    let icn = window.FontAwesome.icon(obj) || {node: ''};
    return icn.node;
  }

  getSVGFaIcon(iconName) {
    let node = this.getNodeFaIcon(iconName);
    let svg = node[0];
    console.log(node[0]);
    return html`${svg}`;
  }
};