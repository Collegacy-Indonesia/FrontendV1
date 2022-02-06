import{Q as n,C as c}from"./vendor-23be5db7.js";class i{constructor(e="",t=""){this.API_URL="https://infinite-reef-54814.herokuapp.com",this.path=e,this.errMsg=t}async reqToken(e,t){if(!this.hasToken())try{const{data:o}=await n({method:"POST",url:this.API_URL+this.path,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},responseType:"json",data:{email:e,password:t}});return console.log(o),this.setLocalStorage(o.token,o.refresh_token),this.displayToken(),!0}catch{return alert(this.errMsg),!1}}async getData(e=!1){const t=this.getToken();if(!t)throw"user has no token";try{return(await n({method:"GET",url:this.API_URL+this.path,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:`Bearer ${t}`},responseType:"json"})).data}catch(o){if(e)throw o;try{return await this.refreshToken(),this.getData(!0)}catch(r){throw r}}}async postData(e,t=!1){const o=this.getToken();if(!o)throw"user has no token";try{return(await n({method:"POST",url:this.API_URL+this.path,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:`Bearer ${o}`},data:e,responseType:"json"})).data}catch(r){if(t)throw r.toString();try{return await this.refreshToken(),this.postData(e,!0)}catch(a){throw a}}}async putData(e,t,o=!1){const r=this.getToken();if(!r)throw"user has no token";try{const a=await n({method:"PUT",url:this.API_URL+this.path+"/"+e,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:`Bearer ${r}`},responseType:"json",data:t});return console.log(a),a.data}catch(a){if(console.log(a),o)throw"your token is invalid";try{return await this.refreshToken(),this.putData(e,t,!0)}catch(h){throw h}}}async deleteData(e,t=!1){const o=this.getToken();if(!o)throw"user has no token";try{const r=await n({method:"DELETE",url:this.API_URL+this.path+"/"+e,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:`Bearer ${o}`},responseType:"json"});return console.log(r),r.data}catch(r){if(console.log(r),t)throw"your token is invalid";try{return await this.refreshToken(),this.deleteData(e,!0)}catch(a){throw a}}}async refreshToken(){try{const{data:e}=await n({method:"POST",url:this.API_URL+"/auth/refresh-token",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},responseType:"json",data:{refresh_token:localStorage.getItem("refresh_token")}});this.setLocalStorage(e.token,e.refresh_token),this.displayToken()}catch(e){throw e}}logout(){localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),window.location.href="/"}getToken(){return localStorage.getItem("token")}hasToken(){return!!localStorage.getItem("token")}setLocalStorage(e,t){localStorage.setItem("token",e),localStorage.setItem("refresh_token",t)}displayToken(){console.log("FROM LOCAL STORAGE"),console.log(localStorage.getItem("token")),console.log(localStorage.getItem("refresh_token"))}}const l=c(null),g=async(s,e)=>{const t="Your email and password is invalid";return await new i("/auth/login",t).reqToken(s,e)},u=async(s,e)=>{const t="Your email has been used. Please login";return await new i("/auth/register",t).reqToken(s,e)},k=async()=>{const s=new i("/auth/profile"),e=s.getToken();try{const t=await s.postData({token:e});l.set(t),l.subscribe(o=>console.log(o))}catch(t){console.log(t)}},w=()=>{new i().logout(),l.set(null)};export{i as A,g as a,k as g,w as l,u as r,l as u};
