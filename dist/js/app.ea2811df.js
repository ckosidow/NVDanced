(function(e){function t(t){for(var a,c,n=t[0],r=t[1],o=t[2],d=0,b=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var s=l[t],a=!0,n=1;n<s.length;n++){var r=s[n];0!==i[r]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},i={app:0},l=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var u=r;l.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"26d1":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),i=s("6c02");const l={class:"navbar is-primary is-flex px-2",id:"nvd-navbar"},c={class:"navbar-brand is-flex-grow-1"},n=Object(a["i"])("N V Danced"),r={class:"is-align-self-center is-flex is-flex-grow-1 px-2"},o={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},u={class:"dropdown-content"},d=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("p",null,"Albums")],-1),b=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("hr",{class:"dropdown-divider"})],-1),p=Object(a["g"])("div",{class:"dropdown-item"},[Object(a["g"])("p",null,"Playlists")],-1),m={class:"is-flex is-flex-grow-0 is-justify-content-flex-end px-2"},g=Object(a["g"])("a",{class:"has-text-white navbar-item",href:"https://www.spotify.com"},[Object(a["g"])("span",{class:"icon"},[Object(a["g"])("i",{class:"fab fa-spotify has-white-text"})])],-1),y={class:"has-text-white navbar-item",href:"api/logIn"},h=Object(a["g"])("div",{id:"nvd-playback-padding"},null,-1),j={key:0,id:"nvd-playback",class:"is-flex is-justify-content-center p-4"},O={id:"nvd-playback-card",class:"card p-2 px-4 is-flex is-flex-grow-1"},v={class:"image mr-2 is-64x64 is-flex-shrink-0",id:"nvd-playback-image-fig"},f=["src"],k={class:"nvd-text is-align-self-center mx-2 has-text-white is-flex-grow-1"},w=["innerHTML"],x=Object(a["g"])("br",null,null,-1),P=["innerHTML"],_={class:"icon nvd-playback-button-text"},D=Object(a["g"])("span",{class:"icon nvd-playback-button-text"},[Object(a["g"])("i",{class:"fa fa-step-forward"})],-1),I=[D],T=["innerHTML"],L={class:"icon nvd-playback-button-text"};function A(e,t,s,i,D,A){const H=Object(a["y"])("router-link"),M=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("nav",l,[Object(a["g"])("div",c,[Object(a["j"])(H,{class:"px-2 navbar-item",to:{name:D.auth?"user":"home"}},{default:Object(a["F"])(()=>[n]),_:1},8,["to"]),Object(a["g"])("div",r,[Object(a["g"])("div",{class:Object(a["p"])(["dropdown",{"is-active":D.suggestedArtists.length||D.suggestedPlaylists.length||D.suggestedAlbums.length}])},[Object(a["g"])("div",o,[Object(a["g"])("div",u,[d,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(D.suggestedAlbums,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"dropdown-item",key:e},[Object(a["j"])(H,{class:"dropdown-item",to:{path:"/album",query:{album_id:e.id}},innerHTML:e.name},null,8,["to","innerHTML"])]))),128)),b,p,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(D.suggestedPlaylists,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"dropdown-item",key:e},[Object(a["j"])(H,{class:"dropdown-item",to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}},innerHTML:e.name},null,8,["to","innerHTML"])]))),128))])])],2),Object(a["G"])(Object(a["g"])("input",{id:"nvd-search",class:"is-flex-grow-1 input","onUpdate:modelValue":t[0]||(t[0]=e=>D.query=e),onInput:t[1]||(t[1]=e=>A.search()),placeholder:"search"},null,544),[[a["C"],D.query]])]),Object(a["g"])("div",m,[g,Object(a["G"])(Object(a["g"])("a",y,"Log In",512),[[a["D"],!D.auth]]),Object(a["G"])(Object(a["g"])("a",{class:"has-text-white navbar-item",onClick:t[2]||(t[2]=(...e)=>A.logOut&&A.logOut(...e))},"Log Out",512),[[a["D"],D.auth]])])])]),Object(a["j"])(M),h,D.auth?(Object(a["t"])(),Object(a["f"])("div",j,[Object(a["g"])("div",O,[Object(a["g"])("figure",v,[D.playingImage?(Object(a["t"])(),Object(a["f"])("img",{key:0,id:"nvd-playback-image",src:D.playingImage},null,8,f)):Object(a["e"])("",!0)]),Object(a["g"])("span",k,[Object(a["g"])("span",{innerHTML:D.playingName},null,8,w),x,Object(a["g"])("span",{class:"is-size-7",innerHTML:D.playingArtists.join(", ")},null,8,P)]),Object(a["g"])("button",{id:"toggle-play",class:"button mx-2 nvd-playback-button p-1 is-align-self-center",onClick:t[3]||(t[3]=(...e)=>A.togglePlay&&A.togglePlay(...e))},[Object(a["g"])("span",_,[Object(a["g"])("i",{class:Object(a["p"])(["fa",D.isPlaying?"fa-pause":"fa-play"])},null,2)])]),Object(a["g"])("button",{id:"next",class:"button nvd-playback-button p-1 mx-2 is-align-self-center",onClick:t[4]||(t[4]=(...e)=>A.playNext&&A.playNext(...e))},I),Object(a["g"])("span",{class:"nvd-text is-align-self-center mx-2 p-1 has-text-white",innerHTML:D.currDeviceName},null,8,T),Object(a["g"])("button",{id:"use-this-device",class:"button nvd-playback-button p-1 mx-2 is-align-self-center",onClick:t[5]||(t[5]=(...e)=>A.useThisDevice&&A.useThisDevice(...e))},[Object(a["g"])("span",L,[Object(a["g"])("i",{class:Object(a["p"])(["fa","Smartphone"===D.currDeviceType?"fa-mobile-alt":"fa-laptop"])},null,2)])])])])):Object(a["e"])("",!0)],64)}var H=s("bc3a"),M=s.n(H),S=s("2b27"),z=s.n(S);const q="N V Danced";var B={name:"App",data(){return{auth:null,query:null,suggestedAlbums:[],suggestedArtists:[],suggestedPlaylists:[],deviceId:null,isPlaying:!1,playingName:null,playingArtists:[],playingImage:null,spotifyPlayer:null,currDeviceId:null,currDeviceName:null,currDeviceType:null}},methods:{logOut(){z.a.remove("auth"),this.auth=null,this.$router.push({name:"home"})},search(){M.a.get("api/search?query="+this.query).then(e=>{e.data&&(e.data.albums&&(this.suggestedAlbums=e.data.albums.items),e.data.playlists&&(this.suggestedPlaylists=e.data.playlists.items))})},clearSuggestions(){this.suggestedPlaylists=[],this.suggestedAlbums=[],this.suggestedArtists=[]},togglePlay(){this.isPlaying?M.a.post("api/me/pause").then(()=>{this.isPlaying=!1}):(this.currDeviceId||M.a.post("api/me/start-player?device_id="+this.deviceId+"&play=true").then(()=>{this.currDeviceId=this.deviceId}),M.a.post("api/me/play-song").then(()=>{}),this.isPlaying=!0)},playNext(){this.currDeviceId||M.a.post("api/me/start-player?device_id="+this.deviceId).then(()=>{this.currDeviceId=this.deviceId}),M.a.post("api/me/next").then(()=>{}),this.isPlaying=!0},playSong(e){this.currDeviceId||M.a.post("api/me/start-player?device_id="+this.deviceId).then(()=>{this.currDeviceId=this.deviceId,this.currDeviceName=q}),M.a.post("api/me/play-song?uri="+e).then(()=>{this.checkPlayback()})},useThisDevice(){this.currDeviceId!==this.deviceId&&M.a.post("api/me/start-player?device_id="+this.deviceId+"&play="+this.isPlaying).then(()=>{this.currDeviceId=this.deviceId,this.currDeviceName=q,this.currDeviceType="Computer"})},checkPlayback(){M.a.get("api/me/get-playback").then(e=>{if(e.data){const t=e.data;t.is_playing&&(this.isPlaying=t.is_playing),t.item&&(this.playingName=t.item.name,this.playingArtists=t.item.artists.map(e=>e.name),t.item.album&&t.item.album.images&&(this.playingImage=t.item.album.images[0].url)),t.device&&(this.currDeviceId=t.device.id,this.currDeviceName=t.device.name,this.currDeviceType=t.device.type)}})}},mounted(){this.auth=z.a.get("auth")},created(){window.addEventListener("click",this.clearSuggestions),window.onSpotifyWebPlaybackSDKReady=()=>{this.spotifyPlayer=new window.Spotify.Player({name:q,getOAuthToken:e=>{e(z.a.get("auth"))},volume:.5}),this.spotifyPlayer.addListener("ready",({device_id:e})=>{this.deviceId=e}),this.spotifyPlayer.addListener("not_ready",({device_id:e})=>{this.deviceId=e}),this.spotifyPlayer.addListener("initialization_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("authentication_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("account_error",({message:e})=>{console.error(e)}),this.spotifyPlayer.addListener("playback_error",({message:e})=>{console.error(e)});const e=e=>{if(e){const{track_window:{current_track:t}}=e;t&&(this.playingImage=null,t.album&&t.album.images&&(this.playingImage=t.album.images[0].url),this.playingName=t.name,this.playingArtists=t.artists.map(e=>e.name))}else this.checkPlayback()};this.spotifyPlayer.addListener("player_state_changed",e),this.spotifyPlayer.connect().then(e=>{})},this.checkPlayback()},unmounted(){window.removeEventListener("click",this.clearSuggestions)}},C=s("6b0d"),N=s.n(C);const $=N()(B,[["render",A]]);var F=$;const E={key:0,class:"container p-5"},W={class:"columns is-mobile"},V={key:0,class:"column is-3"},G={class:"image"},K=["src"],J={class:"column is-9"},Y=["innerHTML"],R={key:0,class:"columns is-mobile is-multiline"},U={class:"image"},Q=["src"],X=["innerHTML"],Z=["innerHTML"];function ee(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return l.user?(Object(a["t"])(),Object(a["f"])("div",E,[Object(a["g"])("div",W,[l.user.images&&l.user.images.length?(Object(a["t"])(),Object(a["f"])("div",V,[Object(a["g"])("figure",G,[Object(a["g"])("img",{class:"is-96x96",src:l.user.images[0].url},null,8,K)])])):Object(a["e"])("",!0),Object(a["g"])("div",J,[Object(a["g"])("h3",{class:"is-size-3",innerHTML:l.user.display_name},null,8,Y)])]),l.playlists?(Object(a["t"])(),Object(a["f"])("div",R,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlists.items,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:e},[Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("figure",U,[Object(a["g"])("img",{class:"is-256x256",src:e.images[0].url},null,8,Q)])]),_:2},1032,["to"]),Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("h4",{class:"is-size-4 has-text-white",innerHTML:e.name},null,8,X)]),_:2},1032,["to"]),Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:e.owner.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("p",{innerHTML:e.owner.display_name},null,8,Z)]),_:2},1032,["to"])]))),128))])):Object(a["e"])("",!0)])):Object(a["e"])("",!0)}var te={data(){return{user:null,playlists:null}},mounted(){M.a.get("api/me").then(e=>{this.user=e.data.user,this.playlists=e.data.playlists})},methods:{}};const se=N()(te,[["render",ee]]);var ae=se;const ie={class:"p-5"},le=Object(a["h"])('<h2 class="is-size-2"> Let&#39;s Dance </h2><br><p> We think you want to dance and we think your playlists should help. With N V Danced we want to help make your playlists worth dancing to. </p><br><p> N V Danced is an app that allows you to see stats about your Spotify playlists and songs. Among these stats is danceability. This app uses the Spotify <a class="has-text-white" href="https://developer.spotify.com/documentation/web-api/">Web API</a> and the <a class="has-text-white" href="https://developer.spotify.com/documentation/web-playback-sdk/">Web Playback SDK</a> to show you just how danceable your playlists are. </p><hr><p><small>With use of APIs from Spotify</small><br><small>Copyright© 2021 Conor Kosidowski</small></p>',7),ce=[le];function ne(e,t,s,i,l,c){return Object(a["t"])(),Object(a["f"])("div",ie,ce)}var re={data(){return{}},mounted(){z.a.get("auth")&&this.$router.push({name:"user"})}};const oe=N()(re,[["render",ne]]);var ue=oe;const de=Object(a["g"])("div",{id:"nvd-img-header"},null,-1),be={key:0,class:"container p-5 mx-0",id:"nvd-page-body"},pe={class:"columns is-mobile is-multiline"},me={class:"column is-6"},ge={class:"is-size-4"},ye={class:"column is-6"},he={class:"column is-12"},je={class:"columns is-mobile is-multiline"},Oe={class:"is-size-5"},ve=["onClick"];function fe(e,t,s,i,l,c){return Object(a["t"])(),Object(a["f"])("div",null,[de,l.album?(Object(a["t"])(),Object(a["f"])("div",be,[Object(a["g"])("div",pe,[Object(a["g"])("div",me,[Object(a["g"])("h4",ge,Object(a["A"])(l.album.name),1),(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.album.artists,e=>(Object(a["t"])(),Object(a["f"])("p",{key:e},Object(a["A"])(e.name),1))),128))]),Object(a["g"])("div",ye,[Object(a["g"])("p",null," Danceability: "+Object(a["A"])(l.overallDance),1),Object(a["g"])("p",null," Tempo: "+Object(a["A"])(l.overallTempo),1),Object(a["g"])("p",null," Popularity: "+Object(a["A"])(l.overallPop),1)]),Object(a["g"])("div",he,[Object(a["g"])("button",{class:"button is-primary",onClick:t[0]||(t[0]=(...e)=>c.sortByDanceability&&c.sortByDanceability(...e))},"Danceability")])]),Object(a["g"])("div",je,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.tracks,t=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-4",key:t},[Object(a["g"])("h5",Oe,[Object(a["g"])("a",{class:"has-text-white",onClick:s=>e.$root.playSong(t.uri)},Object(a["A"])(t.name),9,ve)]),Object(a["g"])("p",null," Danceability: "+Object(a["A"])(t.danceability.toFixed(2)),1),Object(a["g"])("p",null," Tempo: "+Object(a["A"])(t.tempo.toFixed(2)),1)]))),128))])])):Object(a["e"])("",!0)])}let ke;var we={props:["album_id"],data(){return{album:null,tracks:null,overallDance:0,overallPop:0,overallTempo:0}},mounted(){ke=document.getElementById("nvd-img-header"),this.updatePage()},methods:{updatePage(){M.a.get("api/album?album_id="+this.$route.query.album_id).then(e=>{this.album=e.data.album,this.tracks=e.data.tracks,this.overallDance=e.data.overallDance,this.overallPop=e.data.overallPop,this.overallTempo=e.data.overallTempo,this.album.images[1]?ke.style.backgroundImage="url("+this.album.images[1].url+")":this.album.images[0]&&(ke.style.backgroundImage="url("+this.album.images[0].url+")")})},sortByDanceability(){this.tracks=this.tracks.sort((e,t)=>t.danceability-e.danceability)},resizeHeaderImage(){ke.style.backgroundSize="auto "+(200+window.scrollY/10)+"%"}},watch:{$route(e){"album"===e.name&&this.updatePage()}},created(){window.addEventListener("scroll",this.resizeHeaderImage)},unmounted(){window.removeEventListener("scroll",this.resizeHeaderImage)}};const xe=N()(we,[["render",fe]]);var Pe=xe;const _e={key:0,class:"container p-5"},De={class:"columns is-mobile"},Ie={key:0,class:"column is-3"},Te={class:"image"},Le=["src"],Ae={class:"column is-9"},He={class:"is-size-3"},Me={class:"columns is-mobile is-multiline"},Se={class:"image"},ze=["src"],qe={class:"is-size-4 has-text-white"};function Be(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return l.user?(Object(a["t"])(),Object(a["f"])("div",_e,[Object(a["g"])("div",De,[l.user.images.length?(Object(a["t"])(),Object(a["f"])("div",Ie,[Object(a["g"])("figure",Te,[Object(a["g"])("img",{class:"is-96x96",src:l.user.images[0]?l.user.images[0].url:""},null,8,Le)])])):Object(a["e"])("",!0),Object(a["g"])("div",Ae,[Object(a["g"])("h3",He,Object(a["A"])(l.user.display_name),1)])]),Object(a["g"])("div",Me,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlists.items,e=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:e},[e.images.length?(Object(a["t"])(),Object(a["d"])(n,{key:0,to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("figure",Se,[Object(a["g"])("img",{class:"is-96x96",src:e.images[0]?e.images[0].url:""},null,8,ze)])]),_:2},1032,["to"])):Object(a["e"])("",!0),Object(a["j"])(n,{to:{path:"/playlist",query:{user_id:e.owner.id,playlist_id:e.id}}},{default:Object(a["F"])(()=>[Object(a["g"])("h4",qe,Object(a["A"])(e.name),1)]),_:2},1032,["to"]),Object(a["g"])("p",null,[Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:e.owner.id}}},{default:Object(a["F"])(()=>[Object(a["i"])(Object(a["A"])(e.owner.display_name),1)]),_:2},1032,["to"])])]))),128))])])):Object(a["e"])("",!0)}var Ce={props:["user_id"],data(){return{user:null,playlists:null}},mounted(){this.updatePage()},methods:{updatePage(){M.a.get("api/other?user_id="+this.$route.query.user_id).then(e=>{this.user=e.data.user,this.playlists=e.data.playlists})}},watch:{$route(e){"other"===e.name&&this.updatePage()}}};const Ne=N()(Ce,[["render",Be]]);var $e=Ne;const Fe=Object(a["g"])("div",{id:"nvd-img-header"},null,-1),Ee={key:0,class:"container p-5 mx-0",id:"nvd-page-body"},We={class:"columns is-mobile is-multiline"},Ve={class:"column is-6"},Ge=["innerHTML"],Ke={class:"column is-6"},Je={class:"column is-12"},Ye={class:"columns is-mobile is-multiline"},Re={class:"image is-256x256"},Ue=["onClick"],Qe=["src"],Xe={class:"is-size-5 song-title"},Ze=["onClick"],et={class:"is-size-6 song-album"};function tt(e,t,s,i,l,c){const n=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("div",null,[Fe,l.playlist?(Object(a["t"])(),Object(a["f"])("div",Ee,[Object(a["g"])("div",We,[Object(a["g"])("div",Ve,[Object(a["g"])("h1",{class:"is-size-1",innerHTML:l.playlist.name},null,8,Ge),Object(a["g"])("p",null,[Object(a["j"])(n,{class:"has-text-white",to:{path:"/other",query:{user_id:l.playlist.owner.id}},innerHTML:l.playlist.owner.display_name},null,8,["to","innerHTML"])])]),Object(a["g"])("div",Ke,[Object(a["g"])("p",null," Danceability: "+Object(a["A"])(l.overallDance),1),Object(a["g"])("p",null," Popularity: "+Object(a["A"])(l.overallPop),1),Object(a["g"])("p",null," Tempo: "+Object(a["A"])(l.overallTempo),1)]),Object(a["g"])("div",Je,[Object(a["g"])("button",{class:"button is-primary",onClick:t[0]||(t[0]=(...e)=>c.sortByDanceability&&c.sortByDanceability(...e))},"Danceability"),Object(a["g"])("button",{class:"button is-primary mx-1",onClick:t[1]||(t[1]=(...e)=>c.sortByPopularity&&c.sortByPopularity(...e))},"Popularity"),Object(a["g"])("button",{class:"button is-primary",onClick:t[2]||(t[2]=(...e)=>c.sortByBest&&c.sortByBest(...e))},"Best")])]),Object(a["g"])("div",Ye,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(l.playlist.tracks.items,t=>(Object(a["t"])(),Object(a["f"])("div",{class:"column is-2-desktop is-3-tablet is-4-mobile",key:t},[Object(a["g"])("figure",Re,[Object(a["g"])("a",{onClick:s=>e.$root.playSong(t.track.uri)},[Object(a["g"])("img",{src:t.track.album.images[1]?t.track.album.images[1].url:""},null,8,Qe)],8,Ue)]),Object(a["g"])("h5",Xe,[Object(a["g"])("a",{class:"has-text-white",onClick:s=>e.$root.playSong(t.track.uri)},Object(a["A"])(t.track.name),9,Ze)]),Object(a["g"])("h6",et,[Object(a["j"])(n,{class:"has-text-white",to:{path:"/album?album_id="+t.track.album.id}},{default:Object(a["F"])(()=>[Object(a["i"])(Object(a["A"])(t.track.album.name),1)]),_:2},1032,["to"])])]))),128))])])):Object(a["e"])("",!0)])}let st;var at={props:["playlist_id","user_id"],data(){return{playlist:null,overallPop:null,overallTempo:null,overallDance:null}},mounted(){st=document.getElementById("nvd-img-header"),this.updatePage()},methods:{updatePage(){M.a.get("api/playlist?user_id="+this.$route.query.user_id+"&playlist_id="+this.$route.query.playlist_id).then(e=>{this.playlist=e.data.playlist,this.overallDance=e.data.overallDance,this.overallPop=e.data.overallPop,this.overallTempo=e.data.overallTempo,this.playlist.images[1]?st.style.backgroundImage="url("+this.playlist.images[1].url+")":this.playlist.images[0]&&(st.style.backgroundImage="url("+this.playlist.images[0].url+")")})},sortByDanceability(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.danceability-e.track.danceability)},sortByPopularity(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.popularity-e.track.popularity)},sortByBest(){this.playlist.tracks.items=this.playlist.tracks.items.sort((e,t)=>t.track.popularity+t.track.danceability-(e.track.popularity+e.track.danceability))},resizeHeaderImage(){st.style.backgroundSize="auto "+(200+window.scrollY/10)+"%"}},watch:{$route(e){"playlist"===e.name&&this.updatePage()}},created(){window.addEventListener("scroll",this.resizeHeaderImage)},unmounted(){window.removeEventListener("scroll",this.resizeHeaderImage)}};const it=N()(at,[["render",tt]]);var lt=it;s("26d1");const ct=[{path:"/user",name:"user",component:ae},{path:"/home",name:"home",component:ue},{path:"/",name:"home",component:ue},{path:"/album",name:"album",component:Pe,props:!0},{path:"/other",name:"other",component:$e,props:!0},{path:"/playlist",name:"playlist",component:lt,props:!0}],nt=Object(i["a"])({history:Object(i["b"])(),routes:ct});Object(a["c"])(F).use(nt).mount("#app")}});
//# sourceMappingURL=app.ea2811df.js.map