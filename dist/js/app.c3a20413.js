(function(e){function t(t){for(var a,c,n=t[0],r=t[1],o=t[2],d=0,b=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var s=l[t],a=!0,n=1;n<s.length;n++){var r=s[n];0!==i[r]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},i={app:0},l=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var u=r;l.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"1e34":function(e,t,s){},"26d1":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),i=s("6c02");const l={class:"navbar is-primary is-flex px-2",id:"nvd-navbar"},c={class:"navbar-brand is-flex-grow-1"},n=Object(a["i"])("N V Danced"),r={class:"is-align-self-center is-flex is-flex-grow-1 px-2"},o={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},u={class:"dropdown-content"},d=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("p",null,"Albums")],-1),b=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("hr",{class:"dropdown-divider"})],-1),p=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("p",null,"Playlists")],-1),g={class:"is-flex is-flex-grow-0 is-justify-content-flex-end px-2"},m=Object(a["g"])("a",{class:"has-text-white navbar-item",href:"https://www.spotify.com"},[Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})])],-1),h={class:"has-text-white navbar-item",href:"api/logIn"},y=Object(a["g"])("div",{id:"nvd-playback-padding"},null,-1),j={key:0,id:"nvd-playback",class:"is-flex is-justify-content-center p-4"},O={id:"nvd-playback-card",class:"card p-2 px-4 is-flex is-flex-grow-1"},v={class:"image mr-2 is-64x64 is-flex-shrink-0 is-align-self-center",id:"nvd-playback-image-fig"},f=["src"],k={class:"nvd-text is-align-self-center mx-2 has-text-white is-flex-grow-1"},w=["innerHTML","title"],x=Object(a["g"])("br",null,null,-1),P=["innerHTML","title"],_=Object(a["g"])("br",null,null,-1),D={key:0,href:"https://open.spotify.com",class:"has-text-white"},I=Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})],-1),T=Object(a["g"])("span",{class:"is-size-7"},"Spotify",-1),A=[I,T],L={class:"icon nvd-playback-button-text"},H=["innerHTML","title"],z={class:"icon nvd-playback-button-text"};function S(e,t,s,i,I,T){const S=Object(a["y"])("router-link"),M=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("nav",l,[Object(a["g"])("div",c,[Object(a["j"])(S,{class:"px-2 navbar-item",to:{name:I.auth?"user":"home"}},{default:Object(a["F"])(()=>[n]),_:1},8,["to"]),Object(a["g"])("div",r,[Object(a["g"])("div",{class:Object(a["p"])(["dropdown",{"is-active":I.suggestedArtists.length||I.suggestedPlaylists.length||I.suggestedAlbums.length}])},[Object(a["g"])("div",o,[Object(a["g"])("div",u,[d,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(I.suggestedAlbums,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"dropdown-item",key:e},[Object(a["j"])(S,{class:"dropdown-item",to:{path:"/album",query:{album_id:e.id}},innerHTML:e.name},null,8,["to","innerHTML"])]))),128)),b,p,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(I.suggestedPlaylists,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"dropdown-item",key:e},[Object(a["j"])(S,{class:"dropdown-item",to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}},innerHTML:e.name},null,8,["to","innerHTML"])]))),128))])])],2),Object(a["G"])(Object(a["g"])("input",{id:"nvd-search",class:"is-flex-grow-1 input","onUpdate:modelValue":t[0]||(t[0]=e=>I.query=e),onInput:t[1]||(t[1]=e=>T.search()),placeholder:"search"},null,544),[[a["C"],I.query]])]),Object(a["g"])("div",g,[m,Object(a["G"])(Object(a["g"])("a",h,"Log In",512),[[a["D"],!I.auth]]),Object(a["G"])(Object(a["g"])("a",{class:"has-text-white navbar-item",onClick:t[2]||(t[2]=(...e)=>T.logOut&&T.logOut(...e))},"Log Out",512),[[a["D"],I.auth]])])])]),Object(a["j"])(M),y,I.auth?(Object(a["t"])(),Object(a["f"])("div",j,[Object(a["g"])("div",O,[Object(a["g"])("figure",v,[I.playingImage?(Object(a["t"])(),Object(a["f"])("img",{key:0,id:"nvd-playback-image",crossorigin:"anonymous",src:I.playingImage},null,8,f)):Object(a["e"])("",!0)]),Object(a["g"])("span",k,[Object(a["g"])("span",{innerHTML:I.playingName,title:I.playingName},null,8,w),x,Object(a["g"])("span",{class:"is-size-7",innerHTML:I.playingArtists.join(", "),title:I.playingArtists.join(", ")},null,8,P),_,I.playingName?(Object(a["t"])(),Object(a["f"])("a",D,A)):Object(a["e"])("",!0)]),Object(a["g"])("button",{id:"toggle-play",class:"button mx-2 nvd-playback-button p-1 is-align-self-center",onClick:t[3]||(t[3]=(...e)=>T.togglePlay&&T.togglePlay(...e))},[Object(a["g"])("span",L,[Object(a["g"])("i",{class:Object(a["p"])(["fa",I.isPlaying?"fa-pause":"fa-play"])},null,2)])]),Object(a["g"])("span",{class:"nvd-text is-align-self-center mx-2 p-1 has-text-white",innerHTML:I.currDeviceName,title:I.currDeviceName},null,8,H),Object(a["g"])("button",{id:"use-this-device",class:"button nvd-playback-button p-1 mx-2 is-align-self-center",onClick:t[4]||(t[4]=(...e)=>T.useThisDevice&&T.useThisDevice(...e))},[Object(a["g"])("span",z,[Object(a["g"])("i",{class:Object(a["p"])(["fa","Smartphone"===I.currDeviceType?"fa-mobile-alt":"fa-laptop"])},null,2)])])])])):Object(a["e"])("",!0)],64)}var M=s("bc3a"),B=s.n(M),C=s("2b27"),q=s.n(C);const N="N V Danced",$=5,E={r:0,g:0,b:0};var F={name:"App",data(){return{auth:null,query:null,suggestedAlbums:[],suggestedArtists:[],suggestedPlaylists:[],deviceId:null,isPlaying:!1,playingName:null,playingArtists:[],playingImage:null,spotifyPlayer:null,currDeviceId:null,currDeviceName:null,currDeviceType:null}},methods:{decimalToHex(e,t){let s=Number(e).toString(16);t="undefined"===typeof t||null===t?t=2:t;while(s.length<t)s="0"+s;return s},executeAfterImagesLoaded(e){Promise.all(Array.from(document.images).filter(e=>!e.complete).map(e=>new Promise(t=>{e.onload=e.onerror=t}))).then(e)},getAverageRGB(){const e=document.getElementById("nvd-playback-image"),t=document.createElement("canvas"),s=t.getContext&&t.getContext("2d");let a,i,l,c,n=-4,r={r:0,g:0,b:0},o=0;if(!s||!e)return E;l=t.height=e.naturalHeight||e.offsetHeight||e.height,i=t.width=e.naturalWidth||e.offsetWidth||e.width,s.drawImage(e,0,0);try{a=s.getImageData(0,0,i,l)}catch(d){return E}c=a.data.length;while((n+=4*$)<c)++o,r.r+=a.data[n],r.g+=a.data[n+1],r.b+=a.data[n+2];r.r=~~(r.r/o),r.g=~~(r.g/o),r.b=~~(r.b/o);let u=document.documentElement;u.style.setProperty("--player-background","#"+this.decimalToHex(r.r,2)+this.decimalToHex(r.g,2)+this.decimalToHex(r.b,2)+"80")},logOut(){q.a.remove("auth"),this.auth=null,this.$router.push({name:"home"})},search(){B.a.get("api/search?query="+this.query).then(e=>{e.data&&(e.data.albums&&(this.suggestedAlbums=e.data.albums.items),e.data.playlists&&(this.suggestedPlaylists=e.data.playlists.items))})},clearSuggestions(){this.suggestedPlaylists=[],this.suggestedAlbums=[],this.suggestedArtists=[]},togglePlay(){this.isPlaying?B.a.post("api/me/pause").then(()=>{this.isPlaying=!1}):(this.currDeviceId||B.a.post("api/me/start-player?device_id="+this.deviceId+"&play=true").then(()=>{this.currDeviceId=this.deviceId}),B.a.post("api/me/play-song").then(()=>{}),this.isPlaying=!0)},playSong(e){this.currDeviceId||B.a.post("api/me/start-player?device_id="+this.deviceId).then(()=>{this.currDeviceId=this.deviceId,this.currDeviceName=N}),B.a.post("api/me/play-song?uri="+e).then(()=>{this.checkPlayback()})},useThisDevice(){this.currDeviceId!==this.deviceId&&B.a.post("api/me/start-player?device_id="+this.deviceId+"&play="+this.isPlaying).then(()=>{this.currDeviceId=this.deviceId,this.currDeviceName=N,this.currDeviceType="Computer"})},checkPlayback(){B.a.get("api/me/get-playback").then(e=>{if(e.data){const t=e.data;t.is_playing&&(this.isPlaying=t.is_playing),t.item&&(this.playingName=t.item.name,this.playingArtists=t.item.artists.map(e=>e.name),t.item.album&&t.item.album.images&&(this.playingImage=t.item.album.images[0].url)),t.device&&(this.currDeviceId=t.device.id,this.currDeviceName=t.device.name,this.currDeviceType=t.device.type)}})}},mounted(){this.auth=q.a.get("auth")},watch:{playingImage:function(){Object(a["o"])().then(()=>{this.executeAfterImagesLoaded(this.getAverageRGB)})}},created(){window.addEventListener("click",this.clearSuggestions),window.onSpotifyWebPlaybackSDKReady=()=>{this.spotifyPlayer=new window.Spotify.Player({name:N,getOAuthToken:e=>{e(q.a.get("auth"))},volume:.5}),this.spotifyPlayer.addListener("ready",({device_id:e})=>{this.deviceId=e}),this.spotifyPlayer.addListener("not_ready",({device_id:e})=>{this.deviceId=e}),this.spotifyPlayer.addListener("initialization_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("authentication_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("account_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("playback_error",({message:e})=>{console.error(e)});const e=e=>{if(e){const{track_window:{current_track:t}}=e;t&&(this.playingImage=null,t.album&&t.album.images&&(this.playingImage=t.album.images[0].url),this.playingName=t.name,this.playingArtists=t.artists.map(e=>e.name))}else this.checkPlayback()};this.spotifyPlayer.addListener("player_state_changed",e),this.spotifyPlayer.connect().then(e=>{})},this.checkPlayback()},unmounted(){window.removeEventListener("click",this.clearSuggestions)}},W=(s("aa40"),s("6b0d")),G=s.n(W);const V=G()(F,[["render",S]]);var K=V;const R={key:0,class:"container p-5"},J={class:"columns is-mobile"},Y={key:0,class:"column is-3"},U={class:"image"},Q=["src"],X={class:"column is-9"},Z=["innerHTML"],ee=Object(a["g"])("p",null,[Object(a["g"])("a",{href:"https://open.spotify.com",class:"has-text-white"},[Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})]),Object(a["g"])("span",{class:"is-size-7"},"Open Spotify")])],-1),te={key:0,class:"columns is-mobile is-multiline"},se={class:"image"},ae=["src"],ie=["innerHTML"],le=["innerHTML"];function ce(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return l.user?(Object(a["t"])(),Object(a["f"])("div",R,[Object(a["g"])("div",J,[l.user.images&&l.user.images.length?(Object(a["t"])(),Object(a["f"])("div",Y,[Object(a["g"])("figure",U,[Object(a["g"])("img",{class:"is-96x96",src:l.user.images[0].url},null,8,Q)])])):Object(a["e"])("",!0),Object(a["g"])("div",X,[Object(a["g"])("h3",{class:"is-size-3",innerHTML:l.user.display_name},null,8,Z),ee])]),l.playlists?(Object(a["t"])(),Object(a["f"])("div",te,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlists.items,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:e},[Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("figure",se,[Object(a["g"])("img",{class:"is-256x256",src:e.images[0].url},null,8,ae)])]),_:2},1032,["to"]),Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("h4",{class:"is-size-5 has-text-white",innerHTML:e.name},null,8,ie)]),_:2},1032,["to"]),Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:e.owner.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("p",{class:"is-size-6",innerHTML:e.owner.display_name},null,8,le)]),_:2},1032,["to"])]))),128))])):Object(a["e"])("",!0)])):Object(a["e"])("",!0)}var ne={data(){return{user:null,playlists:null}},mounted(){B.a.get("api/me").then(e=>{this.user=e.data.user,this.playlists=e.data.playlists})},methods:{}};const re=G()(ne,[["render",ce]]);var oe=re;const ue={class:"p-5"},de=Object(a["h"])('<h2 class="is-size-2"> Let&#39;s Dance </h2><br><p> We think you want to dance and we think your playlists should help. With N V Danced we want to help make your playlists worth dancing to. </p><br><p> N V Danced is an app that allows you to see stats about your Spotify playlists and songs. Among these stats is danceability. This app uses the Spotify <a class="has-text-white" href="https://developer.spotify.com/documentation/web-api/">Web API</a> and the <a class="has-text-white" href="https://developer.spotify.com/documentation/web-playback-sdk/">Web Playback SDK</a> to show you just how danceable your playlists are. </p><hr><p><small>With use of APIs from Spotify</small><br><small>Copyright© 2021 Conor Kosidowski</small></p>',7),be=[de];function pe(e,t,s,i,l,c){return Object(a["t"])(),Object(a["f"])("div",ue,be)}var ge={data(){return{}},mounted(){q.a.get("auth")&&this.$router.push({name:"user"})}};const me=G()(ge,[["render",pe]]);var he=me;const ye=Object(a["g"])("div",{id:"nvd-img-header"},null,-1),je={key:0,class:"container p-5 mx-0",id:"nvd-page-body"},Oe={class:"columns is-mobile is-multiline"},ve={class:"column is-6"},fe={class:"is-size-4"},ke={class:"column is-6"},we={class:"column is-12"},xe={class:"columns is-mobile is-multiline"},Pe=["title"],_e=["onClick"],De={class:"is-size-7"},Ie={class:"is-size-7"};function Te(e,t,s,i,l,c){return Object(a["t"])(),Object(a["f"])("div",null,[ye,l.album?(Object(a["t"])(),Object(a["f"])("div",je,[Object(a["g"])("div",Oe,[Object(a["g"])("div",ve,[Object(a["g"])("h4",fe,Object(a["A"])(l.album.name),1),(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.album.artists,e=>(Object(a["t"])(),Object(a["f"])("p",{key:e},Object(a["A"])(e.name),1))),128))]),Object(a["g"])("div",ke,[Object(a["g"])("p",null," Danceability: "+Object(a["A"])(l.overallDance),1),Object(a["g"])("p",null," Tempo: "+Object(a["A"])(l.overallTempo),1),Object(a["g"])("p",null," Popularity: "+Object(a["A"])(l.overallPop),1)]),Object(a["g"])("div",we,[Object(a["g"])("button",{class:"button is-primary",onClick:t[0]||(t[0]=(...e)=>c.sortByDanceability&&c.sortByDanceability(...e))},"Danceability")])]),Object(a["g"])("div",xe,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.tracks,t=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-4",key:t},[Object(a["g"])("h5",{class:"is-size-6",title:t.name},[Object(a["g"])("a",{class:"has-text-white",onClick:s=>e.$root.playSong(t.uri)},Object(a["A"])(t.name),9,_e)],8,Pe),Object(a["g"])("p",null,[Object(a["g"])("span",De,"Danceability: "+Object(a["A"])(t.danceability.toFixed(2)),1)]),Object(a["g"])("p",null,[Object(a["g"])("span",Ie,"Tempo: "+Object(a["A"])(t.tempo.toFixed(2)),1)])]))),128))])])):Object(a["e"])("",!0)])}let Ae;var Le={props:["album_id"],data(){return{album:null,tracks:null,overallDance:0,overallPop:0,overallTempo:0}},mounted(){Ae=document.getElementById("nvd-img-header"),this.updatePage()},methods:{updatePage(){B.a.get("api/album?album_id="+this.$route.query.album_id).then(e=>{this.album=e.data.album,this.tracks=e.data.tracks,this.overallDance=e.data.overallDance,this.overallPop=e.data.overallPop,this.overallTempo=e.data.overallTempo,this.album.images[1]?Ae.style.backgroundImage="url("+this.album.images[1].url+")":this.album.images[0]&&(Ae.style.backgroundImage="url("+this.album.images[0].url+")")})},sortByDanceability(){this.tracks=this.tracks.sort((e,t)=>t.danceability-e.danceability)},resizeHeaderImage(){Ae.style.backgroundSize="auto "+(200+window.scrollY/10)+"%"}},watch:{$route(e){"album"===e.name&&this.updatePage()}},created(){window.addEventListener("scroll",this.resizeHeaderImage)},unmounted(){window.removeEventListener("scroll",this.resizeHeaderImage)}};const He=G()(Le,[["render",Te]]);var ze=He;const Se={key:0,class:"container p-5"},Me={class:"columns is-mobile"},Be={key:0,class:"column is-3"},Ce={class:"image"},qe=["src"],Ne={class:"column is-9"},$e={class:"is-size-3"},Ee=Object(a["g"])("p",null,[Object(a["g"])("a",{href:"https://open.spotify.com",class:"has-text-white"},[Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})]),Object(a["g"])("span",{class:"is-size-7"},"Open Spotify")])],-1),Fe={class:"columns is-mobile is-multiline"},We={class:"image"},Ge=["src"],Ve={class:"is-size-5 has-text-white"},Ke={class:"is-size-6"};function Re(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return l.user?(Object(a["t"])(),Object(a["f"])("div",Se,[Object(a["g"])("div",Me,[l.user.images.length?(Object(a["t"])(),Object(a["f"])("div",Be,[Object(a["g"])("figure",Ce,[Object(a["g"])("img",{class:"is-96x96",src:l.user.images[0]?l.user.images[0].url:""},null,8,qe)])])):Object(a["e"])("",!0),Object(a["g"])("div",Ne,[Object(a["g"])("h3",$e,Object(a["A"])(l.user.display_name),1),Ee])]),Object(a["g"])("div",Fe,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlists.items,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:e},[e.images.length?(Object(a["t"])(),Object(a["d"])(n,{key:0,to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("figure",We,[Object(a["g"])("img",{class:"is-96x96",src:e.images[0]?e.images[0].url:""},null,8,Ge)])]),_:2},1032,["to"])):Object(a["e"])("",!0),Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("h4",Ve,Object(a["A"])(e.name),1)]),_:2},1032,["to"]),Object(a["g"])("p",Ke,[Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:e.owner.id}}},{default:Object(a["F"])(()=>[Object(a["i"])(Object(a["A"])(e.owner.display_name),1)]),_:2},1032,["to"])])]))),128))])])):Object(a["e"])("",!0)}var Je={props:["user_id"],data(){return{user:null,playlists:null}},mounted(){this.updatePage()},methods:{updatePage(){B.a.get("api/other?user_id="+this.$route.query.user_id).then(e=>{this.user=e.data.user,this.playlists=e.data.playlists})}},watch:{$route(e){"other"===e.name&&this.updatePage()}}};const Ye=G()(Je,[["render",Re]]);var Ue=Ye;const Qe=Object(a["g"])("div",{id:"nvd-img-header"},null,-1),Xe={key:0,class:"container p-5 mx-0",id:"nvd-page-body"},Ze={class:"columns is-mobile is-multiline"},et={class:"column is-6"},tt=["innerHTML"],st=Object(a["g"])("br",null,null,-1),at=Object(a["g"])("p",null,[Object(a["g"])("a",{href:"https://open.spotify.com",class:"has-text-white"},[Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})]),Object(a["g"])("span",{class:"is-size-7"},"Open Spotify")])],-1),it={class:"column is-6"},lt={class:"column is-12"},ct={class:"columns is-mobile is-multiline"},nt={class:"image is-256x256"},rt=["onClick"],ot=["src"],ut=["title"],dt=["onClick"],bt=["title"];function pt(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("div",null,[Qe,l.playlist?(Object(a["t"])(),Object(a["f"])("div",Xe,[Object(a["g"])("div",Ze,[Object(a["g"])("div",et,[Object(a["g"])("h1",{class:"is-size-1",innerHTML:l.playlist.name},null,8,tt),Object(a["g"])("p",null,[Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:l.playlist.owner.id}},innerHTML:l.playlist.owner.display_name},null,8,["to","innerHTML"])]),st,at]),Object(a["g"])("div",it,[Object(a["g"])("p",null," Danceability: "+Object(a["A"])(l.overallDance),1),Object(a["g"])("p",null," Popularity: "+Object(a["A"])(l.overallPop),1),Object(a["g"])("p",null," Tempo: "+Object(a["A"])(l.overallTempo),1)]),Object(a["g"])("div",lt,[Object(a["g"])("button",{class:"button is-primary",onClick:t[0]||(t[0]=(...e)=>c.sortByDanceability&&c.sortByDanceability(...e))},"Danceability"),Object(a["g"])("button",{class:"button is-primary mx-1",onClick:t[1]||(t[1]=(...e)=>c.sortByPopularity&&c.sortByPopularity(...e))},"Popularity"),Object(a["g"])("button",{class:"button is-primary",onClick:t[2]||(t[2]=(...e)=>c.sortByBest&&c.sortByBest(...e))},"Best")])]),Object(a["g"])("div",ct,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlist.tracks.items,t=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:t},[Object(a["g"])("figure",nt,[Object(a["g"])("a",{onClick:s=>e.$root.playSong(t.track.uri)},[Object(a["g"])("img",{src:t.track.album.images[1]?t.track.album.images[1].url:""},null,8,ot)],8,rt)]),Object(a["g"])("h5",{class:"is-size-6 song-title",title:t.track.name},[Object(a["g"])("a",{class:"has-text-white",onClick:s=>e.$root.playSong(t.track.uri)},Object(a["A"])(t.track.name),9,dt)],8,ut),Object(a["g"])("h6",{class:"is-size-7 song-album",title:t.track.artists.map(e=>e.name).join(", ")},[Object(a["g"])("span",null,Object(a["A"])(t.track.artists.map(e=>e.name).join(", ")),1)],8,bt)]))),128))])])):Object(a["e"])("",!0)])}let gt;var mt={props:["playlist_id","user_id"],data(){return{playlist:null,overallPop:null,overallTempo:null,overallDance:null}},mounted(){gt=document.getElementById("nvd-img-header"),this.updatePage()},methods:{updatePage(){B.a.get("api/playlist?user_id="+this.$route.query.user_id+"&playlist_id="+this.$route.query.playlist_id).then(e=>{this.playlist=e.data.playlist,this.overallDance=e.data.overallDance,this.overallPop=e.data.overallPop,this.overallTempo=e.data.overallTempo,this.playlist.images[1]?gt.style.backgroundImage="url("+this.playlist.images[1].url+")":this.playlist.images[0]&&(gt.style.backgroundImage="url("+this.playlist.images[0].url+")")})},sortByDanceability(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.danceability-e.track.danceability)},sortByPopularity(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.popularity-e.track.popularity)},sortByBest(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.popularity+t.track.danceability-(e.track.popularity+e.track.danceability))},resizeHeaderImage(){gt.style.backgroundSize="auto "+(200+window.scrollY/10)+"%"}},watch:{$route(e){"playlist"===e.name&&this.updatePage()}},created(){window.addEventListener("scroll",this.resizeHeaderImage)},unmounted(){window.removeEventListener("scroll",this.resizeHeaderImage)}};const ht=G()(mt,[["render",pt]]);var yt=ht;s("26d1");const jt=[{path:"/user",name:"user",component:oe},{path:"/home",name:"home",component:he},{path:"/",name:"home",component:he},{path:"/album",name:"album",component:ze,props:!0},{path:"/other",name:"other",component:Ue,props:!0},{path:"/playlist",name:"playlist",component:yt,props:!0}],Ot=Object(i["a"])({history:Object(i["b"])(),routes:jt});Object(a["c"])(K).use(Ot).mount("#app")},aa40:function(e,t,s){"use strict";s("1e34")}});
//# sourceMappingURL=app.c3a20413.js.map