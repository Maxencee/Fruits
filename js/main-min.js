"use strict";!function(){const e=["apple","apple","apple","apple","apple","banana","banana","banana","banana","orange","orange","orange","orange","grape","grape","grape","pear","pear","pear","watermelon","watermelon","strawberry"];function n(n){for(let a=0;a<n;a++)$(".game-container").appendChild(Line.instance({fruits:[e[Random(0,e.length)],e[Random(0,e.length)],e[Random(0,e.length)],e[Random(0,e.length)],e[Random(0,e.length)]]}))}let a,t=0;$(".game-container").addEventListener("click",(e=>{if(e.target.classList.contains("no-support"))return;let a=0;if(a+=$$(".line-container:not(.claimed):has(:nth-child(5 of .apple))").length,a+=2*$$(".line-container:not(.claimed):has(:nth-child(5 of .orange))").length,a+=3*$$(".line-container:not(.claimed):has(:nth-child(5 of .banana))").length,a+=8*$$(".line-container:not(.claimed):has(:nth-child(5 of .pear))").length,a+=10*$$(".line-container:not(.claimed):has(:nth-child(5 of .grape))").length,a+=25*$$(".line-container:not(.claimed):has(:nth-child(5 of .watermelon))").length,a+=100*$$(".line-container:not(.claimed):has(:nth-child(5 of .strawberry))").length,a>0){$(".score").innerText=t+=a,n(1);let e=[{transform:`rotate(-6deg) scale(${1.6*(a-a/1.2)})`},{transform:"rotate(0deg) scale(1)"},{transform:"rotate(6deg) scale(1)"},{transform:"rotate(0deg) scale(1)"}],r={duration:270,fillMode:"fowards",timing:"ease-in"};$(".score").animate(e,r);let i=$$(".line-container:has(:nth-child(5 of .apple)), .line-container:has(:nth-child(5 of .orange)), .line-container:has(:nth-child(5 of .banana)), .line-container:has(:nth-child(5 of .pear)), .line-container:has(:nth-child(5 of .grape)), .line-container:has(:nth-child(5 of .watermelon)), .line-container:has(:nth-child(5 of .strawberry))");i.forEach(((e,n)=>{e.classList.add("claimed")})),setTimeout((()=>{i.forEach(((e,n)=>{e.remove()}))}),2e3)}})),n(18),document.addEventListener("drag",(e=>{e.target.closest("img")&&e.preventDefault()})),document.addEventListener("dragstart",(e=>{e.target.closest("img")&&e.preventDefault()}));const r=$(".pwa-install");window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),a=e,r.removeAttribute("hidden")})),r.addEventListener("click",(async()=>{if(!a)return alert("No install?");await a.prompt();a=null,r.setAttribute("hidden","")}))}();