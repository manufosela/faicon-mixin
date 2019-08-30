import '@fortawesome/fontawesome-free/js/all.js';

let FavIcon = Base => class extends Base {
  getFaIcon(iconName) {
    let obj = {prefix: 'fa', iconName: iconName};
    let icn = window.FontAwesome.icon(obj) || {node: ''};
    return `${icn.node}`;
  }
};