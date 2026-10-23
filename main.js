// Just Video — router and interactions
function go(r){const[k,a]=r.split(":");const f=R[k]||R.home;document.getElementById("app").innerHTML=f(a);
if(k==="contact")document.getElementById("f").onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
const body=Object.entries(d).map(([k,v])=>k+": "+v).join("\n");location.href="mailto:info@originpicturestudioz.com?subject="+encodeURIComponent("New enquiry: "+(d.service||"General"))+"&body="+encodeURIComponent(body)};
window.scrollTo(0,0);try{history.replaceState(null,"","#"+r.replace(":","-"))}catch(_){}}
document.addEventListener("click",e=>{const a=e.target.closest("[data-r]");if(a){e.preventDefault();go(a.dataset.r)}});
let last=0;addEventListener("scroll",()=>{const y=scrollY;document.getElementById("hd").classList.toggle("hide",y>last&&y>80);last=y},{passive:true});
const h=location.hash.slice(1);let init="home";
if(h.startsWith("cat-"))init="cat:"+h.slice(4);else if(h.startsWith("watch-"))init="watch:"+h.slice(6);else if(R[h])init=h;
go(init);
