(()=>{"use strict";var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],a=(a,h)=>{var e="";for(let r=1;r<=h;r++){let o=Math.floor(a)/Math.pow(83,h-r)%83;e+=t[Math.floor(o)]}return e},h=t=>{let a=t/255;return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},e=t=>{let a=Math.max(0,Math.min(1,t));return a<=.0031308?Math.trunc(12.92*a*255+.5):Math.trunc(255*(1.055*Math.pow(a,.4166666666666667)-.055)+.5)},r=(t,a)=>(t=>t<0?-1:1)(t)*Math.pow(Math.abs(t),a),o=class extends Error{constructor(t){super(t),this.name="ValidationError",this.message=t}},l=(t,a,e,r)=>{let o=0,l=0,s=0,M=4*a;for(let n=0;n<a;n++){let a=4*n;for(let i=0;i<e;i++){let e=a+i*M,m=r(n,i);o+=m*h(t[e]),l+=m*h(t[e+1]),s+=m*h(t[e+2])}}let n=1/(a*e);return[o*n,l*n,s*n]},s=(t,h,s,M,n)=>{if(M<1||M>9||n<1||n>9)throw new o("BlurHash must have between 1 and 9 components");if(h*s*4!==t.length)throw new o("Width and height must match the pixels array");let i=[];for(let a=0;a<n;a++)for(let e=0;e<M;e++){let r=0==e&&0==a?1:2,o=l(t,h,s,((t,o)=>r*Math.cos(Math.PI*e*t/h)*Math.cos(Math.PI*a*o/s)));i.push(o)}let m,f=i[0],u=i.slice(1),c="";if(c+=a(M-1+9*(n-1),1),u.length>0){let t=Math.max(...u.map((t=>Math.max(...t)))),h=Math.floor(Math.max(0,Math.min(82,Math.floor(166*t-.5))));m=(h+1)/166,c+=a(h,1)}else m=1,c+=a(0,1);return c+=a((t=>(e(t[0])<<16)+(e(t[1])<<8)+e(t[2]))(f),4),u.forEach((t=>{c+=a(((t,a)=>19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*r(t[0]/a,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*r(t[1]/a,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*r(t[2]/a,.5)+9.5)))))(t,m),2)})),c};const M=self;M.addEventListener("message",(t=>{const{seq:a,imageData:h}=t.data,e=s(h.data,h.width,h.height,h.width>=h.height?4:3,h.height>=h.width?4:3);M.postMessage({seq:a,blurhash:e})}))})();
//# sourceMappingURL=blurhash.worker.js.map