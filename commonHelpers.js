import{i}from"./assets/vendor-8e8cd629.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l="45145101-fcee514389e5c9851c2eb0c8a",f="https://pixabay.com/api/";async function u(t,n=1,s=12){const r=await fetch(`${f}?key=${l}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${s}`);if(!r.ok)throw new Error("Failed to fetch images");return await r.json()}function d(t){const n=document.querySelector(".gallery"),s=t.map(r=>`
        <div class="gallery-item">
      <a href="${r.largeImageURL}" target="_blank">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${r.likes}</p>
        <p><strong>Views:</strong> ${r.views}</p>
        <p><strong>Comments:</strong> ${r.comments}</p>
        <p><strong>Downloads:</strong> ${r.downloads}</p>
      </div>
    </div>
  `).join("");n.innerHTML=s}function c(t){i.error({message:t,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:p,iconColor:"#fff"})}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}const p="../symbol-defs.svg#icon-bi_x-octagon",m=document.querySelector(".search-form");m.addEventListener("submit",async t=>{t.preventDefault();const n=t.currentTarget.elements.searchQuery.value.trim();if(n===""){c("Please enter a search query.");return}g();try{const s=await u(n);if(s.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}d(s.hits)}catch{c("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=commonHelpers.js.map
