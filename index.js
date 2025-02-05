(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c={links:["https://www.instagram.com/goitclub/","https://www.facebook.com/goITclub/","https://www.youtube.com/c/GoIT","https://github.com/Alex-chernomor/project-K3n5t13n"]};function l({links:i}){return i.map(r=>`
        <li class="link-wrap">
          <a class="link" href="${r}" target="_blank">${r}</a>
        </li>
      `).join("")}const u=document.querySelector(".list-link");u.innerHTML=l(c);
//# sourceMappingURL=index.js.map
