"use strict";!function(){const e=document.querySelector(".header");window.onscroll=(()=>{window.pageYOffset>50?e.classList.add("header-active"):e.classList.remove("header-active")})}(),function(){const e=document.querySelector(".burger"),t=document.querySelector(".header-nav"),n=document.querySelector(".header-nav-close"),c=document.querySelectorAll(".header-nav-link");if(e.addEventListener("click",()=>{t.classList.add("header-nav-active")}),n.addEventListener("click",()=>{t.classList.remove("header-nav-active")}),window.innerWidth<=767)for(let e=0;e<c.length;e+=1)c[e].addEventListener("click",()=>{t.classList.remove("header-nav-active")})}(),document.querySelectorAll(".js-scroll").forEach(e=>{e.addEventListener("click",function(){!function(e,t){const n=document.querySelector(".header").clientHeight;let c=document.querySelector(e).getBoundingClientRect().top-n,r=window.pageYOffset,o=null;const i=function(e){null===o&&(o=e);const n=e-o,a=(l=n,d=r,s=c,(l/=t/2)<1?s/2*l*l+d:-s/2*(--l*(l-2)-1)+d);var l,d,s;window.scrollTo(0,a),n<t&&requestAnimationFrame(i)};requestAnimationFrame(i)}(this.getAttribute("href"),1e3)})});