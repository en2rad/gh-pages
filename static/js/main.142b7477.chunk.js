(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(15),s=a.n(i),r=(a(92),a(93),a(9)),o=a(45),l=a(6),j=a(39),u=[{title:"VO52-V1M",artist:"20syl",img_src:"images/20syl.jpg",src:"music/20syl - VO52-V1M.mp3",favorite:!1},{title:"A New Error",artist:"Moderat",img_src:"images/moderat.jpg",src:"music/Moderat - A New Error.mp3",favorite:!1},{title:"\u042d\u043d\u0442\u0440\u043e\u043f\u0438\u044f",artist:"Mujuice",img_src:"images/mujuice.jpg",src:"music/Mujuice - \u042d\u043d\u0442\u0440\u043e\u043f\u0438\u044f.mp3",favorite:!1},{title:"Faint",artist:"Quok",img_src:"images/quok.jpg",src:"music/Quok - Faint.mp3",favorite:!1},{title:"Stressed Out",artist:"Twenty One Pilots",img_src:"images/tw.gif",src:"music/Twenty One Pilots - Stressed Out.mp3",favorite:!1},{title:"Comptine D'un Autre",artist:"Yann Tiersen",img_src:"images/ameli.jpg",src:"music/Yann_Tiersen_-_Comptine_Dun_Autre_t_Laprs-Midi_48096940.mp3",favorite:!1},{title:"Komorebi",artist:"DROELOE",img_src:"images/DROELOE - Komorebi.png",src:"music/DROELOE_-_Komorebi.mp3",favorite:!1},{title:"People",artist:"Whitey",img_src:"images/Whitey - People.jpg",src:"music/Whitey - People.mp3",favorite:!1},{title:"Walking All Day",artist:"Graham Coxon",img_src:"./images/Graham Coxon - Walking All Day.jpg",src:"./music/Graham Coxon - Walking All Day.mp3",favorite:!1},{title:"adhd",artist:"slowthai",img_src:"./images/slowthai - adhd.jpg",src:"music/slowthai - adhd.mp3",favorite:!1}],b=a(2),m=n.a.createContext({}),d=m.Provider,O=function(e){var t,a=e.children,n=Object(c.useState)(0),i=Object(j.a)(n,2),s=i[0],m=i[1],O=Object(c.useState)(!0),p=Object(j.a)(O,2),g=p[0],h=p[1],f=Object(c.useState)({playing:!1,muted:!1,volume:1,played:0,seeking:!1,loop:!1,fovarite:!1}),x=Object(j.a)(f,2),v=x[0],y=x[1],_=Object(c.useState)(u),S=Object(j.a)(_,2),k=S[0],N=S[1],C=Object(c.useState)({favoritePlayList:{id:"favoritePlayList",title:"\u041c\u043e\u0439 \u043b\u044e\u0431\u0438\u043c\u044b\u0435",img_src:"./images/mujuice.jpg",src:"./music/Mujuice - \u042d\u043d\u0442\u0440\u043e\u043f\u0438\u044f.mp3",favorite:!0,tracks:[]},allSongs:{id:"2",title:"\u0412\u0441\u044f",img_src:"./images/mujuice.jpg",src:"./music/Mujuice - \u042d\u043d\u0442\u0440\u043e\u043f\u0438\u044f.mp3",favorite:!0,tracks:u}}),P=Object(j.a)(C,2),L=P[0],w=P[1],M=function(){y(Object(l.a)(Object(l.a)({},v),{},{playing:!v.playing}))};return Object(b.jsx)(d,{value:(t={PickPlayList:function(e){N(e),m(0)},songs:k,currentSongIndex:s,page:g,setPage:h},Object(r.a)(t,"currentSongIndex",s),Object(r.a)(t,"setCurrentSongIndex",m),Object(r.a)(t,"PickSong",(function(e){s===e?M():(m(e),y(Object(l.a)(Object(l.a)({},v),{},{playing:!0})))})),Object(r.a)(t,"playerState",v),Object(r.a)(t,"setPlayerState",y),Object(r.a)(t,"handleFovorite",(function(){k[s].favorite&&w(Object(l.a)(Object(l.a)({},L),{},{favoritePlayList:Object(l.a)(Object(l.a)({},L.favoritePlayList),{},{tracks:Object(o.a)(L.favoritePlayList.tracks.filter((function(e){return e!==k[s]})))})})),k[s].favorite||w(Object(l.a)(Object(l.a)({},L),{},{favoritePlayList:Object(l.a)(Object(l.a)({},L.favoritePlayList),{},{tracks:[k[s]].concat(Object(o.a)(L.favoritePlayList.tracks))})}));var e=Object(o.a)(k);e.forEach((function(e){return e===k[s]?e.favorite=!e.favorite:null})),N(Object(o.a)(e))})),Object(r.a)(t,"handlePlayPause",M),Object(r.a)(t,"handleMuted",(function(){y(Object(l.a)(Object(l.a)({},v),{},{muted:!v.muted}))})),Object(r.a)(t,"handleLoop",(function(){y(Object(l.a)(Object(l.a)({},v),{},{loop:!v.loop}))})),Object(r.a)(t,"handleVolumeChange",(function(e,t){y(Object(l.a)(Object(l.a)({},v),{},{volume:parseFloat(t/100),muted:0===t}))})),Object(r.a)(t,"handleProgress",(function(e){v.seeking||y(Object(l.a)(Object(l.a)({},v),e))})),Object(r.a)(t,"handleSeekChange",(function(e,t){y(Object(l.a)(Object(l.a)({},v),{},{played:parseFloat(t/100)}))})),Object(r.a)(t,"handleSeekMouseDown",(function(e){y(Object(l.a)(Object(l.a)({},v),{},{seeking:!0}))})),Object(r.a)(t,"SkipSong",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m(e?function(){var e=s;return++e>k.length-1&&(e=0),e}:function(){var e=s;return--e<0&&(e=k.length-1),e})})),Object(r.a)(t,"setPlayerState",y),Object(r.a)(t,"songs",k),Object(r.a)(t,"playerState",v),Object(r.a)(t,"setPlayerState",y),Object(r.a)(t,"playList",L),t),children:a})},p=a(32),g=a(10),h=a(66),f=a.n(h),x=a(5),v=a(147),y=a(146),_=a(139),S=a(53),k=a(140),N=a(76),C=a.n(N),P=a(75),L=a.n(P),w=a(77),M=a.n(w),D=a(74),z=a.n(D),F=a(79),T=a.n(F),q=a(72),E=a.n(q),V=a(73),A=a.n(V),W=a(81),I=a.n(W),B=a(80),U=a.n(B),R=a(78),G=a.n(R),K=Object(x.a)({root:{color:"#fff",height:2,padding:"10px 0"},thumb:{backgroundColor:"#fff",boxShadow:"0 3px 1px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 13%), 0 0 0 1px rgb(0 0 0 / 2%)"},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.3},mark:{backgroundColor:"red",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(v.a);function J(e){var t=e.children,a=e.open,c=e.value;return Object(b.jsx)(y.a,{open:a,enterTouchDelay:0,placement:"top",title:c,children:t})}var Q=Object(_.a)({iconStyleBig:{fontSize:50,color:"#fff",padding:"0"},iconStyle:{color:"#fff",fontSize:30,padding:"0","&:hover":{}},sliderWrap:{display:"flex",flexDirection:"column"},time:{display:"flex",justifyContent:"space-between"},controls:{display:"flex",justifyContent:"space-between"}});var Y=function(e){var t=e.playerState,a=e.onPlayPause,n=e.onMuted,i=e.onLoop,s=e.onVolumeChange,r=e.played,o=e.onSeek,j=e.onSeekMouseDown,u=e.onSeekMouseUp,d=e.elapsedTime,O=e.totalDuration,p=e.SkipSong,g=e.onFovorite,h=(e.songfavorite,Object(c.useContext)(m)),f=h.songs,x=h.currentSongIndex;console.log("check");var y=Q();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:y.sliderWrap,children:[Object(b.jsx)(K,{min:0,max:100,value:100*r,ValueLabelComponent:function(e){return Object(b.jsx)(J,Object(l.a)(Object(l.a)({},e),{},{value:d}))},onChange:o,onMouseDown:j,onChangeCommitted:u}),Object(b.jsxs)("time",{className:y.time,children:[Object(b.jsx)(S.a,{variant:"body1",style:{},children:d}),Object(b.jsx)(S.a,{variant:"body1",style:{},children:O})]})]}),Object(b.jsxs)("div",{className:y.controls,children:[Object(b.jsx)(k.a,{onClick:function(){return i()},className:y.iconStyle,"arial-label":"reqind",children:t.loop?Object(b.jsx)(E.a,{fontSize:"inherit"}):Object(b.jsx)(A.a,{fontSize:"inherit"})}),Object(b.jsx)(k.a,{onClick:function(){return p(!1)},className:(y.iconStyle,y.iconStyleBig),"arial-label":"reqind",children:Object(b.jsx)(z.a,{fontSize:"inherit"})}),Object(b.jsx)(k.a,{onClick:function(){return a()},className:(y.iconStyle,y.iconStyleBig),"arial-label":"reqind",children:t.playing?Object(b.jsx)(L.a,{fontSize:"inherit"}):Object(b.jsx)(C.a,{fontSize:"inherit"})}),Object(b.jsx)(k.a,{onClick:function(){return p()},className:(y.iconStyle,y.iconStyleBig),"arial-label":"reqind",children:Object(b.jsx)(M.a,{fontSize:"inherit"})}),Object(b.jsx)(k.a,{onClick:function(){return g()},className:y.iconStyle,"arial-label":"reqind",children:f[x].favorite?Object(b.jsx)(G.a,{fontSize:"inherit"}):Object(b.jsx)(T.a,{fontSize:"inherit"})})]}),Object(b.jsxs)("div",{className:"volume-wrap",children:[Object(b.jsx)(k.a,{onClick:function(){return n()},className:y.iconStyle,"arial-label":"reqind",children:t.muted?Object(b.jsx)(U.a,{fontSize:"inherit"}):Object(b.jsx)(I.a,{fontSize:"inherit"})}),Object(b.jsx)(v.a,{min:0,max:100,defaultValue:100,onChange:s})]})]})},H=a(148),X=a(141),Z=a(35),$=a.n(Z);var ee=function(e){var t=e.song;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(H.a,{className:"c-player-info",children:[Object(b.jsx)("img",{className:"c-player-info__img",src:t.img_src,title:"img"}),Object(b.jsxs)("div",{className:"c-player-info__body",children:[Object(b.jsxs)(X.a,{className:"c-player-info__text",children:[Object(b.jsx)(S.a,{className:"c-player-info__title",component:"h7",variant:"h7",style:{color:"#fff"},children:t.title}),Object(b.jsx)(S.a,{className:"c-player-info__artist",variant:"subtitle1",color:"textSecondary",style:{color:"#fff",opacity:"0.7"},children:t.artist})]}),Object(b.jsx)(k.a,{className:"c-player-info__btn btn-more","arial-label":"reqind",children:Object(b.jsx)($.a,{className:"c-player-info__icon icon",fontSize:"inherit"})})]})]})})},te=function(e){if(isNaN(e))return"00:00";var t=new Date(1e3*e),a=t.getUTCHours(),c=t.getUTCMinutes(),n=t.getUTCSeconds().toString().padStart(2,"0");return a?"".concat(a,":").concat(c.toString().padStart(2,"0"),":").concat(n):"".concat(c,":").concat(n)};var ae=function(){var e=Object(c.useContext)(m),t=e.currentSongIndex,a=e.page,n=Object(c.useContext)(m),i=n.handleFovorite,s=n.handlePlayPause,r=n.handleMuted,o=n.handleLoop,j=n.handleVolumeChange,u=n.handleProgress,d=n.handleSeekChange,O=n.handleSeekMouseDown,p=n.SkipSong,g=n.playerState,h=n.setPlayerState,x=n.songs,v=Object(c.useRef)(null),y=v.current?v.current.getCurrentTime():"00:00",_=v.current?v.current.getDuration():"00:00",S=te(y),k=te(_),N=["c-player"];return!a&&N.push("hidden"),Object(b.jsx)(b.Fragment,{children:x.length?Object(b.jsxs)("div",{className:N.join(" "),children:[Object(b.jsx)(f.a,{width:"0",height:"0",url:x[t].src,ref:v,playing:g.playing,muted:g.muted,volume:g.volume,played:100*g.played,onProgress:u,onEnded:function(){return p()},loop:g.loop}),Object(b.jsx)(ee,{song:x[t]}),Object(b.jsx)(Y,{playerState:g,onPlayPause:s,onMuted:r,played:g.played,onVolumeChange:j,onSeek:d,onSeekMouseDown:O,onSeekMouseUp:function(e,t){h(Object(l.a)(Object(l.a)({},g),{},{seeking:!1})),v.current.seekTo(t/100,"fraction")},elapsedTime:S,totalDuration:k,onLoop:o,SkipSong:p,songfavorite:x[t].favorite,onFovorite:i})]}):null})},ce=a(142),ne=a(143),ie=a(82),se=a.n(ie),re=a(83),oe=a.n(re),le=a(84),je=a.n(le);var ue=function(){var e=Object(c.useContext)(m).setPage;return Object(b.jsxs)(ce.a,{className:"\u0441-bottom-nav",children:[Object(b.jsx)(p.b,{className:"\u0441-bottom-nav__link",onClick:function(){return e(!0)},to:"/gh-pages",children:Object(b.jsx)(ne.a,{className:"\u0441-bottom-nav__btn",to:"/",label:"\u041f\u043b\u0435\u0435\u0440",value:"recents",icon:Object(b.jsx)(se.a,{className:"\u0441-bottom-nav__icon icon"})})}),Object(b.jsx)(p.b,{className:"\u0441-bottom-nav__link",onClick:function(){return e(!1)},to:"/gh-pages/list-music",children:Object(b.jsx)(ne.a,{className:"\u0441-bottom-nav__btn",to:"/list-music",label:"\u041c\u0443\u0437\u044b\u043a\u0430",value:"favorites",icon:Object(b.jsx)(oe.a,{className:"\u0441-bottom-nav__icon icon"})})}),Object(b.jsx)(p.b,{className:"\u0441-bottom-nav__link",onClick:function(){return e(!1)},to:"/gh-pages/play-list",children:Object(b.jsx)(ne.a,{className:"\u0441-bottom-nav__btn",to:"/play-list",label:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b",value:"playlist",icon:Object(b.jsx)(je.a,{className:"\u0441-bottom-nav__icon icon"})})})]})},be=a(144),me=a(149),de=a(145);var Oe=function(e){var t=e.playList,a=Object(c.useContext)(m).PickSong;return Object(b.jsxs)("div",{className:"c-list-music",children:[Object(b.jsxs)("div",{className:"c-list-music__header",children:[Object(b.jsx)("span",{className:"c-list-music__disc",children:"C\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u0435\u0442"}),Object(b.jsx)("p",{className:"c-list-music__title",children:'\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 "\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"'})]}),t.map((function(e,t){return Object(b.jsxs)(be.a,{onClick:function(){return a(t)},className:"c-list-music__item",button:!0,children:[Object(b.jsx)(me.a,{className:"c-list-music__img",variant:"square",src:e.img_src,alt:"img"}),Object(b.jsx)(de.a,{className:"c-list-music__text",primary:e.title,secondary:e.artist}),Object(b.jsx)(k.a,{className:"c-list-music__btn btn-more","arial-label":"reqind",children:Object(b.jsx)($.a,{className:"c-list-music__icon icon",fontSize:"inherit"})})]},t)}))]})};var pe=function(){var e=Object(c.useContext)(m),t=e.playList,a=e.PickPlayList,n=[];for(var i in t){var s=t[i];n.push(s)}return Object(b.jsxs)("div",{className:"c-play-list",children:[Object(b.jsx)("div",{className:"c-play-list__header",children:Object(b.jsx)("p",{className:"c-play-list__title",children:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b"})}),n.map((function(e,t){return Object(b.jsx)(p.b,{to:"/list-music",children:Object(b.jsxs)(be.a,{className:"c-play-list__item",onClick:function(){return a(e.tracks)},button:!0,children:[Object(b.jsx)(me.a,{className:"c-play-list__img",variant:"square",src:e.img_src,alt:"img"}),Object(b.jsx)(de.a,{className:"c-play-list__text",primary:e.title,secondary:"".concat(e.tracks.length," \u0442\u0440\u0435\u043a\u043e\u0432")}),Object(b.jsx)(k.a,{className:"c-play-list__btn btn-more","arial-label":"reqind",children:Object(b.jsx)($.a,{className:"c-play-list__icon icon",fontSize:"inherit"})})]},t)})}))]})};var ge=function(){var e=Object(c.useContext)(m).songs;return Object(b.jsx)("div",{class:"background",children:Object(b.jsx)("div",{class:"iphone",children:Object(b.jsx)("div",{class:"screen",children:Object(b.jsxs)(p.a,{children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(ae,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/gh-pages"}),Object(b.jsx)(g.a,{path:"/gh-pages/list-music",children:Object(b.jsx)(Oe,{playList:e})}),Object(b.jsx)(g.a,{path:"/gh-pages/play-list",children:Object(b.jsx)(pe,{})})]})]}),Object(b.jsx)(ue,{})]})})})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{children:Object(b.jsx)(ge,{})})}),document.getElementById("root")),he()},92:function(e,t,a){},93:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.142b7477.chunk.js.map