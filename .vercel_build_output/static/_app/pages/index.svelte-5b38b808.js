var ds=Object.defineProperty,_s=Object.defineProperties;var ms=Object.getOwnPropertyDescriptors;var ns=Object.getOwnPropertySymbols;var cs=Object.prototype.hasOwnProperty,ys=Object.prototype.propertyIsEnumerable;var is=(n,t,f)=>t in n?ds(n,t,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[t]=f,Fe=(n,t)=>{for(var f in t||(t={}))cs.call(t,f)&&is(n,f,t[f]);if(ns)for(var f of ns(t))ys.call(t,f)&&is(n,f,t[f]);return n},Qe=(n,t)=>_s(n,ms(t));import{S as vs,i as fs,s as us,e as u,c as r,a as o,d as l,b as v,D as rs,f as a,M as ps,N as We,O as Dl,P as Vl,F as Es,Q as zs,j as wl,k as d,t as m,m as kl,n as _,g as c,o as bl,E as i,x as re,u as _e,v as Yl,R as Is,H as Ds,w as Vs,A as ws,T as Sl,r as ks}from"../chunks/vendor-e159a187.js";function bs(n){let t,f,k,E,I,D;return{c(){t=u("div"),this.h()},l(z){t=r(z,"DIV",{class:!0,style:!0}),o(t).forEach(l),this.h()},h(){v(t,"class",f=""+(rs(n[5])+" svelte-1p4q6gb")),v(t,"style",k=`left:${n[0]};top:${n[1]};background:${n[3]};transform: translate(0,${n[2]*.5}px)`)},m(z,V){a(z,t,V),I||(D=ps(n[6].call(null,t)),I=!0)},p(z,[V]){n=z,V&32&&f!==(f=""+(rs(n[5])+" svelte-1p4q6gb"))&&v(t,"class",f),V&15&&k!==(k=`left:${n[0]};top:${n[1]};background:${n[3]};transform: translate(0,${n[2]*.5}px)`)&&v(t,"style",k)},i(z){E||We(()=>{E=Dl(t,Vl,n[4]),E.start()})},o:Es,d(z){z&&l(t),I=!1,D()}}}function Ys(n,t,f){let k,{type:E}=t,{x:I}=t,{y:D}=t,{moveY:z}=t,{color:V}=t,{animation:y}=t;function w(p){let Y,O;const q=zs({x:0,y:0},{stiffness:.04,damping:.1});q.subscribe(b=>{p.style.transform=`translate3d(${b.x}px, ${b.y+z*.5}px, 0)`}),p.addEventListener("mousedown",S);function S(b){Y=b.clientX,O=b.clientY,window.addEventListener("mouseup",ve),window.addEventListener("mousemove",T)}function ve(){window.removeEventListener("mouseup",ve),window.removeEventListener("mousemove",T),q.update(()=>({x:0,y:0})),Y=0,O=0}function T(b){const oe=b.clientX-Y,fe=b.clientY-O;Y=b.clientX,O=b.clientY,q.update(L=>({x:L.x+oe,y:L.y+fe}))}}return n.$$set=p=>{"type"in p&&f(7,E=p.type),"x"in p&&f(0,I=p.x),"y"in p&&f(1,D=p.y),"moveY"in p&&f(2,z=p.moveY),"color"in p&&f(3,V=p.color),"animation"in p&&f(4,y=p.animation)},n.$$.update=()=>{n.$$.dirty&128&&f(5,k=E+" grabbable")},[I,D,z,V,y,k,w,E]}class Ll extends vs{constructor(t){super();fs(this,t,Ys,bs,us,{type:7,x:0,y:1,moveY:2,color:3,animation:4})}}function os(n){let t,f,k,E,I,D,z,V,y,w,p,Y,O,q,S,ve,T,b,oe,fe,L,he,me,M,Ge,ce,X,Je,ye,A,Ke,pe,P,Ue,Ee,R,Ze,ze,j,$e,Ie,H,ge,De,N,el,Ve,x,ll,we,B,sl,ke,F,al,be,Q,tl,Ye,W,nl,Se,h,il,Le,G,vl,Oe,J,fl,Te,K,ul,Ce,U,rl,qe,Z,ol,Me,$,dl,Xe,g,_l,Ae,ee,ml,Pe,le,cl,Re,se,yl,je,ae,pl,He,te,El,Ne,ne,zl,xe,ie,Il,Be;return f=new Ll({props:{animation:Qe(Fe({},n[2][3]),{y:-100,x:0,duration:2e3,easing:Sl}),type:"circle",y:"-5px",x:"80%",color:"#bf97ac",moveY:n[1]}}),E=new Ll({props:{animation:Qe(Fe({},n[2][4]),{y:0,x:-50,duration:2e3,easing:Sl}),type:"triangle",y:"30%",x:"20%",color:"",moveY:n[1]}}),D=new Ll({props:{animation:Qe(Fe({},n[2][5]),{y:50,x:0,duration:2e3,easing:Sl}),type:"innercircle",y:"90%",x:"70%",color:"",moveY:n[1]}}),{c(){t=u("div"),wl(f.$$.fragment),k=d(),wl(E.$$.fragment),I=d(),wl(D.$$.fragment),z=d(),V=u("div"),y=u("h1"),w=m("Collegacy Indonesia"),Y=d(),O=u("br"),q=d(),S=u("p"),ve=m(`Student Organization committed to enhance in-demand skills in today's workforce to create
					well developed future leaders `),T=u("span"),b=m("#LeaveYourMark"),fe=d(),L=u("div"),he=m("nananan"),me=d(),M=u("div"),Ge=m("nananan"),ce=d(),X=u("div"),Je=m("nananan"),ye=d(),A=u("div"),Ke=m("nananan"),pe=d(),P=u("div"),Ue=m("nananan"),Ee=d(),R=u("div"),Ze=m("nananan"),ze=d(),j=u("div"),$e=m("nananan"),Ie=d(),H=u("div"),ge=m("nananan"),De=d(),N=u("div"),el=m("nananan"),Ve=d(),x=u("div"),ll=m("nananan"),we=d(),B=u("div"),sl=m("nananan"),ke=d(),F=u("div"),al=m("nananan"),be=d(),Q=u("div"),tl=m("nananan"),Ye=d(),W=u("div"),nl=m("nananan"),Se=d(),h=u("div"),il=m("nananan"),Le=d(),G=u("div"),vl=m("nananan"),Oe=d(),J=u("div"),fl=m("nananan"),Te=d(),K=u("div"),ul=m("nananan"),Ce=d(),U=u("div"),rl=m("nananan"),qe=d(),Z=u("div"),ol=m("nananan"),Me=d(),$=u("div"),dl=m("nananan"),Xe=d(),g=u("div"),_l=m("nananan"),Ae=d(),ee=u("div"),ml=m("nananan"),Pe=d(),le=u("div"),cl=m("nananan"),Re=d(),se=u("div"),yl=m("nananan"),je=d(),ae=u("div"),pl=m("nananan"),He=d(),te=u("div"),El=m("nananan"),Ne=d(),ne=u("div"),zl=m("nananan"),xe=d(),ie=u("div"),Il=m("nananan"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);kl(f.$$.fragment,s),k=_(s),kl(E.$$.fragment,s),I=_(s),kl(D.$$.fragment,s),z=_(s),V=r(s,"DIV",{class:!0});var C=o(V);y=r(C,"H1",{class:!0});var de=o(y);w=c(de,"Collegacy Indonesia"),de.forEach(l),Y=_(C),O=r(C,"BR",{class:!0}),q=_(C),S=r(C,"P",{class:!0});var ue=o(S);ve=c(ue,`Student Organization committed to enhance in-demand skills in today's workforce to create
					well developed future leaders `),T=r(ue,"SPAN",{class:!0});var Ol=o(T);b=c(Ol,"#LeaveYourMark"),Ol.forEach(l),ue.forEach(l),C.forEach(l),s.forEach(l),fe=_(e),L=r(e,"DIV",{class:!0});var Tl=o(L);he=c(Tl,"nananan"),Tl.forEach(l),me=_(e),M=r(e,"DIV",{class:!0});var Cl=o(M);Ge=c(Cl,"nananan"),Cl.forEach(l),ce=_(e),X=r(e,"DIV",{class:!0});var ql=o(X);Je=c(ql,"nananan"),ql.forEach(l),ye=_(e),A=r(e,"DIV",{class:!0});var Ml=o(A);Ke=c(Ml,"nananan"),Ml.forEach(l),pe=_(e),P=r(e,"DIV",{class:!0});var Xl=o(P);Ue=c(Xl,"nananan"),Xl.forEach(l),Ee=_(e),R=r(e,"DIV",{class:!0});var Al=o(R);Ze=c(Al,"nananan"),Al.forEach(l),ze=_(e),j=r(e,"DIV",{class:!0});var Pl=o(j);$e=c(Pl,"nananan"),Pl.forEach(l),Ie=_(e),H=r(e,"DIV",{class:!0});var Rl=o(H);ge=c(Rl,"nananan"),Rl.forEach(l),De=_(e),N=r(e,"DIV",{class:!0});var jl=o(N);el=c(jl,"nananan"),jl.forEach(l),Ve=_(e),x=r(e,"DIV",{class:!0});var Hl=o(x);ll=c(Hl,"nananan"),Hl.forEach(l),we=_(e),B=r(e,"DIV",{class:!0});var Nl=o(B);sl=c(Nl,"nananan"),Nl.forEach(l),ke=_(e),F=r(e,"DIV",{class:!0});var xl=o(F);al=c(xl,"nananan"),xl.forEach(l),be=_(e),Q=r(e,"DIV",{class:!0});var Bl=o(Q);tl=c(Bl,"nananan"),Bl.forEach(l),Ye=_(e),W=r(e,"DIV",{class:!0});var Fl=o(W);nl=c(Fl,"nananan"),Fl.forEach(l),Se=_(e),h=r(e,"DIV",{class:!0});var Ql=o(h);il=c(Ql,"nananan"),Ql.forEach(l),Le=_(e),G=r(e,"DIV",{class:!0});var Wl=o(G);vl=c(Wl,"nananan"),Wl.forEach(l),Oe=_(e),J=r(e,"DIV",{class:!0});var hl=o(J);fl=c(hl,"nananan"),hl.forEach(l),Te=_(e),K=r(e,"DIV",{class:!0});var Gl=o(K);ul=c(Gl,"nananan"),Gl.forEach(l),Ce=_(e),U=r(e,"DIV",{class:!0});var Jl=o(U);rl=c(Jl,"nananan"),Jl.forEach(l),qe=_(e),Z=r(e,"DIV",{class:!0});var Kl=o(Z);ol=c(Kl,"nananan"),Kl.forEach(l),Me=_(e),$=r(e,"DIV",{class:!0});var Ul=o($);dl=c(Ul,"nananan"),Ul.forEach(l),Xe=_(e),g=r(e,"DIV",{class:!0});var Zl=o(g);_l=c(Zl,"nananan"),Zl.forEach(l),Ae=_(e),ee=r(e,"DIV",{class:!0});var $l=o(ee);ml=c($l,"nananan"),$l.forEach(l),Pe=_(e),le=r(e,"DIV",{class:!0});var gl=o(le);cl=c(gl,"nananan"),gl.forEach(l),Re=_(e),se=r(e,"DIV",{class:!0});var es=o(se);yl=c(es,"nananan"),es.forEach(l),je=_(e),ae=r(e,"DIV",{class:!0});var ls=o(ae);pl=c(ls,"nananan"),ls.forEach(l),He=_(e),te=r(e,"DIV",{class:!0});var ss=o(te);El=c(ss,"nananan"),ss.forEach(l),Ne=_(e),ne=r(e,"DIV",{class:!0});var as=o(ne);zl=c(as,"nananan"),as.forEach(l),xe=_(e),ie=r(e,"DIV",{class:!0});var ts=o(ie);Il=c(ts,"nananan"),ts.forEach(l),this.h()},h(){v(y,"class","title svelte-78zghi"),v(O,"class","svelte-78zghi"),v(T,"class","tags svelte-78zghi"),v(S,"class","svelte-78zghi"),v(V,"class","hero svelte-78zghi"),v(t,"class","container svelte-78zghi"),v(L,"class","svelte-78zghi"),v(M,"class","svelte-78zghi"),v(X,"class","svelte-78zghi"),v(A,"class","svelte-78zghi"),v(P,"class","svelte-78zghi"),v(R,"class","svelte-78zghi"),v(j,"class","svelte-78zghi"),v(H,"class","svelte-78zghi"),v(N,"class","svelte-78zghi"),v(x,"class","svelte-78zghi"),v(B,"class","svelte-78zghi"),v(F,"class","svelte-78zghi"),v(Q,"class","svelte-78zghi"),v(W,"class","svelte-78zghi"),v(h,"class","svelte-78zghi"),v(G,"class","svelte-78zghi"),v(J,"class","svelte-78zghi"),v(K,"class","svelte-78zghi"),v(U,"class","svelte-78zghi"),v(Z,"class","svelte-78zghi"),v($,"class","svelte-78zghi"),v(g,"class","svelte-78zghi"),v(ee,"class","svelte-78zghi"),v(le,"class","svelte-78zghi"),v(se,"class","svelte-78zghi"),v(ae,"class","svelte-78zghi"),v(te,"class","svelte-78zghi"),v(ne,"class","svelte-78zghi"),v(ie,"class","svelte-78zghi")},m(e,s){a(e,t,s),bl(f,t,null),i(t,k),bl(E,t,null),i(t,I),bl(D,t,null),i(t,z),i(t,V),i(V,y),i(y,w),i(V,Y),i(V,O),i(V,q),i(V,S),i(S,ve),i(S,T),i(T,b),a(e,fe,s),a(e,L,s),i(L,he),a(e,me,s),a(e,M,s),i(M,Ge),a(e,ce,s),a(e,X,s),i(X,Je),a(e,ye,s),a(e,A,s),i(A,Ke),a(e,pe,s),a(e,P,s),i(P,Ue),a(e,Ee,s),a(e,R,s),i(R,Ze),a(e,ze,s),a(e,j,s),i(j,$e),a(e,Ie,s),a(e,H,s),i(H,ge),a(e,De,s),a(e,N,s),i(N,el),a(e,Ve,s),a(e,x,s),i(x,ll),a(e,we,s),a(e,B,s),i(B,sl),a(e,ke,s),a(e,F,s),i(F,al),a(e,be,s),a(e,Q,s),i(Q,tl),a(e,Ye,s),a(e,W,s),i(W,nl),a(e,Se,s),a(e,h,s),i(h,il),a(e,Le,s),a(e,G,s),i(G,vl),a(e,Oe,s),a(e,J,s),i(J,fl),a(e,Te,s),a(e,K,s),i(K,ul),a(e,Ce,s),a(e,U,s),i(U,rl),a(e,qe,s),a(e,Z,s),i(Z,ol),a(e,Me,s),a(e,$,s),i($,dl),a(e,Xe,s),a(e,g,s),i(g,_l),a(e,Ae,s),a(e,ee,s),i(ee,ml),a(e,Pe,s),a(e,le,s),i(le,cl),a(e,Re,s),a(e,se,s),i(se,yl),a(e,je,s),a(e,ae,s),i(ae,pl),a(e,He,s),a(e,te,s),i(te,El),a(e,Ne,s),a(e,ne,s),i(ne,zl),a(e,xe,s),a(e,ie,s),i(ie,Il),Be=!0},p(e,s){n=e;const C={};s&2&&(C.moveY=n[1]),f.$set(C);const de={};s&2&&(de.moveY=n[1]),E.$set(de);const ue={};s&2&&(ue.moveY=n[1]),D.$set(ue)},i(e){Be||(re(f.$$.fragment,e),re(E.$$.fragment,e),re(D.$$.fragment,e),p||We(()=>{p=Dl(y,Vl,n[2][0]),p.start()}),oe||We(()=>{oe=Dl(S,Vl,n[2][1]),oe.start()}),Be=!0)},o(e){_e(f.$$.fragment,e),_e(E.$$.fragment,e),_e(D.$$.fragment,e),Be=!1},d(e){e&&l(t),Yl(f),Yl(E),Yl(D),e&&l(fe),e&&l(L),e&&l(me),e&&l(M),e&&l(ce),e&&l(X),e&&l(ye),e&&l(A),e&&l(pe),e&&l(P),e&&l(Ee),e&&l(R),e&&l(ze),e&&l(j),e&&l(Ie),e&&l(H),e&&l(De),e&&l(N),e&&l(Ve),e&&l(x),e&&l(we),e&&l(B),e&&l(ke),e&&l(F),e&&l(be),e&&l(Q),e&&l(Ye),e&&l(W),e&&l(Se),e&&l(h),e&&l(Le),e&&l(G),e&&l(Oe),e&&l(J),e&&l(Te),e&&l(K),e&&l(Ce),e&&l(U),e&&l(qe),e&&l(Z),e&&l(Me),e&&l($),e&&l(Xe),e&&l(g),e&&l(Ae),e&&l(ee),e&&l(Pe),e&&l(le),e&&l(Re),e&&l(se),e&&l(je),e&&l(ae),e&&l(He),e&&l(te),e&&l(Ne),e&&l(ne),e&&l(xe),e&&l(ie)}}}function Ss(n){let t=!1,f=()=>{t=!1},k,E,I,D,z,V;We(n[3]);let y=n[0]&&os(n);return{c(){E=d(),I=u("div"),y&&y.c(),this.h()},l(w){Is('[data-svelte="svelte-rky0ku"]',document.head).forEach(l),E=_(w),I=r(w,"DIV",{class:!0});var Y=o(I);y&&y.l(Y),Y.forEach(l),this.h()},h(){document.title="Collegacy Indonesia Website",v(I,"class","page svelte-78zghi")},m(w,p){a(w,E,p),a(w,I,p),y&&y.m(I,null),D=!0,z||(V=Ds(window,"scroll",()=>{t=!0,clearTimeout(k),k=setTimeout(f,100),n[3]()}),z=!0)},p(w,[p]){p&2&&!t&&(t=!0,clearTimeout(k),scrollTo(window.pageXOffset,w[1]),k=setTimeout(f,100)),w[0]?y?(y.p(w,p),p&1&&re(y,1)):(y=os(w),y.c(),re(y,1),y.m(I,null)):y&&(ks(),_e(y,1,1,()=>{y=null}),Vs())},i(w){D||(re(y),D=!0)},o(w){_e(y),D=!1},d(w){w&&l(E),w&&l(I),y&&y.d(),z=!1,V()}}}function Ls(n,t,f){let k=!1,E,I=[...Array(10).keys()].map(z=>({x:-100,delay:500*z+1,duration:1e3}));ws(()=>f(0,k=!0));function D(){f(1,E=window.pageYOffset)}return[k,E,I,D]}class Cs extends vs{constructor(t){super();fs(this,t,Ls,Ss,us,{})}}export{Cs as default};