import{S as m,i as h}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="45145101-fcee514389e5c9851c2eb0c8a",L="https://pixabay.com/api/";async function b(o){const t=await fetch(`${L}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}const l=document.querySelector(".gallery");let c;function $(o){f();const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:s,comments:p,downloads:y})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${p}</p>
          <p>Downloads: ${y}</p>
        </div>
      </li>
    `).join("");l.innerHTML=t,c=new m(".gallery a"),c.refresh()}function f(){l.innerHTML=""}function a(o){h.error({message:o,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconColor:"#fff"})}const u=document.querySelector(".search-form"),w=u.querySelector('input[name="searchQuery"]'),d=document.getElementById("loader");u.addEventListener("submit",async o=>{o.preventDefault();const t=w.value.trim();if(t===""){a("Please enter a search query.");return}f(),q();try{const n=await b(t);n.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):$(n.hits)}catch(n){a(n.message)}finally{S()}});function q(){d.style.display="block"}function S(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
