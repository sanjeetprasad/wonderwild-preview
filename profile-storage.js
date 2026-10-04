(function(root){
'use strict';
const marker='wonderwild-family-active';
function active(){try{const p=JSON.parse(sessionStorage.getItem(marker));return p&&/^[a-f0-9-]{36}$/i.test(p.id)?p:null;}catch{return null;}}
function keyFor(id,base){return `wonderwild-profile-${id}-${base}`;}
root.WonderProfileStorage={active,keyFor,key(base){const p=active();return p?keyFor(p.id,base):base;}};
})(globalThis);
