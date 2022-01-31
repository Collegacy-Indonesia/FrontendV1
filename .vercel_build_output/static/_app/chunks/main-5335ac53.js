import{_ as D,bx as j,c as d,a2 as U,U as ne,bw as se,cp as ie,ao as K,s as oe,g as R,cF as x,aQ as Z,X as le,aq as de,F as ue,bt as fe,M as ve,bu as I,aL as ce,t as ge,a3 as pe,aj as L,bM as he,T as ye,cw as me,bT as $,al as be,l as Re,cn as Se,cJ as Ee,P as V,K as Ce,a5 as J,v as De,w as we,x as xe,a8 as Q,aW as Te,q as ke,aR as Pe,cI as M,o as W,k as A,bZ as T,bz as Me,ct as X,bK as Ne,R as B,V as He}from"./main-802c70d9.js";/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/var Ie=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.headerElRef=M(),e}return n.prototype.renderSimpleLayout=function(e,t){var a=this,o=a.props,s=a.context,i=[],l=j(s.options);return e&&i.push({type:"header",key:"header",isSticky:l,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),i.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),d(U,{viewSpec:s.viewSpec},function(v,u){return d("div",{ref:v,className:["fc-daygrid"].concat(u).join(" ")},d(ne,{liquid:!o.isHeightAuto&&!o.forPrint,collapsibleWidth:o.forPrint,cols:[],sections:i}))})},n.prototype.renderHScrollLayout=function(e,t,a,o){var s=this.context.pluginHooks.scrollGridImpl;if(!s)throw new Error("No ScrollGrid implementation");var i=this,l=i.props,v=i.context,u=!l.forPrint&&j(v.options),f=!l.forPrint&&se(v.options),p=[];return e&&p.push({type:"header",key:"header",isSticky:u,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),p.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),f&&p.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:ie}]}),d(U,{viewSpec:v.viewSpec},function(y,c){return d("div",{ref:y,className:["fc-daygrid"].concat(c).join(" ")},d(s,{liquid:!l.isHeightAuto&&!l.forPrint,collapsibleWidth:l.forPrint,colGroups:[{cols:[{span:a,minWidth:o}]}],sections:p}))})},n}(W);function F(r,n){for(var e=[],t=0;t<n;t+=1)e[t]=[];for(var a=0,o=r;a<o.length;a++){var s=o[a];e[s.row].push(s)}return e}function z(r,n){for(var e=[],t=0;t<n;t+=1)e[t]=[];for(var a=0,o=r;a<o.length;a++){var s=o[a];e[s.firstCol].push(s)}return e}function Y(r,n){var e=[];if(r){for(var t=0;t<n;t+=1)e[t]={affectedInstances:r.affectedInstances,isEvent:r.isEvent,segs:[]};for(var a=0,o=r.segs;a<o.length;a++){var s=o[a];e[s.row].segs.push(s)}}else for(var t=0;t<n;t+=1)e[t]=null;return e}var We=function(r){D(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.render=function(){var e=this.props,t=K(this.context,e.date);return d(oe,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:Be},function(a,o){return(o||e.forceDayTop)&&d("div",{className:"fc-daygrid-day-top",ref:a},d("a",R({id:e.dayNumberId,className:"fc-daygrid-day-number"},t),o||d(x,null,"\xA0")))})},n}(A);function Be(r){return r.dayNumberText}var _=Z({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function ee(r){var n=r.eventRange.ui.display;return n==="list-item"||n==="auto"&&!r.eventRange.def.allDay&&r.firstCol===r.lastCol&&r.isStart&&r.isEnd}var te=function(r){D(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.render=function(){var e=this.props;return d(le,R({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:_,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},n}(A),ae=function(r){D(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.render=function(){var e=this,t=e.props,a=e.context,o=a.options.eventTimeFormat||_,s=de(t.seg,o,a,!0,t.defaultDisplayEventEnd);return d(ue,{seg:t.seg,timeText:s,defaultContent:Ae,isDragging:t.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:t.isSelected,isPast:t.isPast,isFuture:t.isFuture,isToday:t.isToday},function(i,l,v,u){return d("a",R({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(l).join(" "),ref:i},fe(t.seg,a)),u)})},n}(A);function Ae(r){return d(x,null,d("div",{className:"fc-daygrid-event-dot",style:{borderColor:r.borderColor||r.backgroundColor}}),r.timeText&&d("div",{className:"fc-event-time"},r.timeText),d("div",{className:"fc-event-title"},r.event.title||d(x,null,"\xA0")))}var Fe=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.compileSegs=T(ze),e}return n.prototype.render=function(){var e=this.props,t=this.compileSegs(e.singlePlacements),a=t.allSegs,o=t.invisibleSegs;return d(ve,{dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:a,hiddenSegs:o,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:function(){var s=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return d(x,null,a.map(function(i){var l=i.eventRange.instance.instanceId;return d("div",{className:"fc-daygrid-event-harness",key:l,style:{visibility:s[l]?"hidden":""}},ee(i)?d(ae,R({seg:i,isDragging:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},I(i,e.todayRange))):d(te,R({seg:i,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},I(i,e.todayRange))))}))}},function(s,i,l,v,u,f,p,y){return d("a",R({ref:s,className:["fc-daygrid-more-link"].concat(i).join(" "),title:f,"aria-expanded":p,"aria-controls":y},ce(u)),v)})},n}(A);function ze(r){for(var n=[],e=[],t=0,a=r;t<a.length;t++){var o=a[t];n.push(o.seg),o.isVisible||e.push(o.seg)}return{allSegs:n,invisibleSegs:e}}var Ge=Z({week:"narrow"}),Le=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.rootElRef=M(),e.state={dayNumberId:Me()},e.handleRootEl=function(t){X(e.rootElRef,t),X(e.props.elRef,t)},e}return n.prototype.render=function(){var e=this,t=e.context,a=e.props,o=e.state,s=e.rootElRef,i=a.date,l=a.dateProfile,v=K(t,i,"week");return d(ge,{date:i,dateProfile:l,todayRange:a.todayRange,showDayNumber:a.showDayNumber,extraHookProps:a.extraHookProps,elRef:this.handleRootEl},function(u,f,p,y){return d("td",R({ref:u,role:"gridcell",className:["fc-daygrid-day"].concat(f,a.extraClassNames||[]).join(" ")},p,a.extraDataAttrs,a.showDayNumber?{"aria-labelledby":o.dayNumberId}:{}),d("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:a.innerElRef},a.showWeekNumber&&d(pe,{date:i,defaultFormat:Ge},function(c,S,C,E){return d("a",R({ref:c,className:["fc-daygrid-week-number"].concat(S).join(" ")},v),E)}),!y&&d(We,{date:i,dateProfile:l,showDayNumber:a.showDayNumber,dayNumberId:o.dayNumberId,forceDayTop:a.forceDayTop,todayRange:a.todayRange,extraHookProps:a.extraHookProps}),d("div",{className:"fc-daygrid-day-events",ref:a.fgContentElRef},a.fgContent,d("div",{className:"fc-daygrid-day-bottom",style:{marginTop:a.moreMarginTop}},d(Fe,{allDayDate:i,singlePlacements:a.singlePlacements,moreCnt:a.moreCnt,alignmentElRef:s,alignGridTop:!a.showDayNumber,extraDateSpan:a.extraDateSpan,dateProfile:a.dateProfile,eventSelection:a.eventSelection,eventDrag:a.eventDrag,eventResize:a.eventResize,todayRange:a.todayRange}))),d("div",{className:"fc-daygrid-day-bg"},a.bgContent)))})},n}(W);function Ve(r,n,e,t,a,o,s){var i=new je;i.allowReslicing=!0,i.strictOrder=t,n===!0||e===!0?(i.maxCoord=o,i.hiddenConsumes=!0):typeof n=="number"?i.maxStackCnt=n:typeof e=="number"&&(i.maxStackCnt=e,i.hiddenConsumes=!0);for(var l=[],v=[],u=0;u<r.length;u+=1){var f=r[u],p=f.eventRange.instance.instanceId,y=a[p];y!=null?l.push({index:u,thickness:y,span:{start:f.firstCol,end:f.lastCol+1}}):v.push(f)}for(var c=i.addSegs(l),S=i.toRects(),C=Oe(S,r,s),E=C.singleColPlacements,b=C.multiColPlacements,m=C.leftoverMargins,g=[],k=[],w=0,P=v;w<P.length;w++){var f=P[w];b[f.firstCol].push({seg:f,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var h=f.firstCol;h<=f.lastCol;h+=1)E[h].push({seg:N(f,h,h+1,s),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(var h=0;h<s.length;h+=1)g.push(0);for(var G=0,O=c;G<O.length;G++){var q=O[G],f=r[q.index],H=q.span;b[H.start].push({seg:N(f,H.start,H.end,s),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var h=H.start;h<H.end;h+=1)g[h]+=1,E[h].push({seg:N(f,h,h+1,s),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(var h=0;h<s.length;h+=1)k.push(m[h]);return{singleColPlacements:E,multiColPlacements:b,moreCnts:g,moreMarginTops:k}}function Oe(r,n,e){for(var t=qe(r,e.length),a=[],o=[],s=[],i=0;i<e.length;i+=1){for(var l=t[i],v=[],u=0,f=0,p=0,y=l;p<y.length;p++){var c=y[p],S=n[c.index];v.push({seg:N(S,i,i+1,e),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:c.levelCoord-u}),u=c.levelCoord+c.thickness}var C=[];u=0,f=0;for(var E=0,b=l;E<b.length;E++){var c=b[E],S=n[c.index],m=c.span.end-c.span.start>1,g=c.span.start===i;f+=c.levelCoord-u,u=c.levelCoord+c.thickness,m?(f+=c.thickness,g&&C.push({seg:N(S,c.span.start,c.span.end,e),isVisible:!0,isAbsolute:!0,absoluteTop:c.levelCoord,marginTop:0})):g&&(C.push({seg:N(S,c.span.start,c.span.end,e),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:f}),f=0)}a.push(v),o.push(C),s.push(f)}return{singleColPlacements:a,multiColPlacements:o,leftoverMargins:s}}function qe(r,n){for(var e=[],t=0;t<n;t+=1)e.push([]);for(var a=0,o=r;a<o.length;a++)for(var s=o[a],t=s.span.start;t<s.span.end;t+=1)e[t].push(s);return e}function N(r,n,e,t){if(r.firstCol===n&&r.lastCol===e-1)return r;var a=r.eventRange,o=a.range,s=Ne(o,{start:t[n].date,end:J(t[e-1].date,1)});return R(R({},r),{firstCol:n,lastCol:e-1,eventRange:{def:a.def,ui:R(R({},a.ui),{durationEditable:!1}),instance:a.instance,range:s},isStart:r.isStart&&s.start.valueOf()===o.start.valueOf(),isEnd:r.isEnd&&s.end.valueOf()===o.end.valueOf()})}var je=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.hiddenConsumes=!1,e.forceHidden={},e}return n.prototype.addSegs=function(e){for(var t=this,a=r.prototype.addSegs.call(this,e),o=this.entriesByLevel,s=function(l){return!t.forceHidden[L(l)]},i=0;i<o.length;i+=1)o[i]=o[i].filter(s);return a},n.prototype.handleInvalidInsertion=function(e,t,a){var o=this,s=o.entriesByLevel,i=o.forceHidden,l=e.touchingEntry,v=e.touchingLevel,u=e.touchingLateral;if(this.hiddenConsumes&&l){var f=L(l);if(!i[f])if(this.allowReslicing){var p=R(R({},l),{span:he(l.span,t.span)}),y=L(p);i[y]=!0,s[v][u]=p,this.splitEntry(l,t,a)}else i[f]=!0,a.push(l)}return r.prototype.handleInvalidInsertion.call(this,e,t,a)},n}(ye),re=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.cellElRefs=new B,e.frameElRefs=new B,e.fgElRefs=new B,e.segHarnessRefs=new B,e.rootElRef=M(),e.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},e}return n.prototype.render=function(){var e=this,t=this,a=t.props,o=t.state,s=t.context,i=s.options,l=a.cells.length,v=z(a.businessHourSegs,l),u=z(a.bgEventSegs,l),f=z(this.getHighlightSegs(),l),p=z(this.getMirrorSegs(),l),y=Ve(me(a.fgEventSegs,i.eventOrder),a.dayMaxEvents,a.dayMaxEventRows,i.eventOrderStrict,o.eventInstanceHeights,o.maxContentHeight,a.cells),c=y.singleColPlacements,S=y.multiColPlacements,C=y.moreCnts,E=y.moreMarginTops,b=a.eventDrag&&a.eventDrag.affectedInstances||a.eventResize&&a.eventResize.affectedInstances||{};return d("tr",{ref:this.rootElRef,role:"row"},a.renderIntro&&a.renderIntro(),a.cells.map(function(m,g){var k=e.renderFgSegs(g,a.forPrint?c[g]:S[g],a.todayRange,b),w=e.renderFgSegs(g,Ue(p[g],S),a.todayRange,{},Boolean(a.eventDrag),Boolean(a.eventResize),!1);return d(Le,{key:m.key,elRef:e.cellElRefs.createRef(m.key),innerElRef:e.frameElRefs.createRef(m.key),dateProfile:a.dateProfile,date:m.date,showDayNumber:a.showDayNumbers,showWeekNumber:a.showWeekNumbers&&g===0,forceDayTop:a.showWeekNumbers,todayRange:a.todayRange,eventSelection:a.eventSelection,eventDrag:a.eventDrag,eventResize:a.eventResize,extraHookProps:m.extraHookProps,extraDataAttrs:m.extraDataAttrs,extraClassNames:m.extraClassNames,extraDateSpan:m.extraDateSpan,moreCnt:C[g],moreMarginTop:E[g],singlePlacements:c[g],fgContentElRef:e.fgElRefs.createRef(m.key),fgContent:d(x,null,d(x,null,k),d(x,null,w)),bgContent:d(x,null,e.renderFillSegs(f[g],"highlight"),e.renderFillSegs(v[g],"non-business"),e.renderFillSegs(u[g],"bg-event"))})}))},n.prototype.componentDidMount=function(){this.updateSizing(!0)},n.prototype.componentDidUpdate=function(e,t){var a=this.props;this.updateSizing(!$(e,a))},n.prototype.getHighlightSegs=function(){var e=this.props;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},n.prototype.getMirrorSegs=function(){var e=this.props;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},n.prototype.renderFgSegs=function(e,t,a,o,s,i,l){var v=this.context,u=this.props.eventSelection,f=this.state.framePositions,p=this.props.cells.length===1,y=s||i||l,c=[];if(f)for(var S=0,C=t;S<C.length;S++){var E=C[S],b=E.seg,m=b.eventRange.instance.instanceId,g=m+":"+e,k=E.isVisible&&!o[m],w=E.isAbsolute,P="",h="";w&&(v.isRtl?(h=0,P=f.lefts[b.lastCol]-f.lefts[b.firstCol]):(P=0,h=f.rights[b.firstCol]-f.rights[b.lastCol])),c.push(d("div",{className:"fc-daygrid-event-harness"+(w?" fc-daygrid-event-harness-abs":""),key:g,ref:y?null:this.segHarnessRefs.createRef(g),style:{visibility:k?"":"hidden",marginTop:w?"":E.marginTop,top:w?E.absoluteTop:"",left:P,right:h}},ee(b)?d(ae,R({seg:b,isDragging:s,isSelected:m===u,defaultDisplayEventEnd:p},I(b,a))):d(te,R({seg:b,isDragging:s,isResizing:i,isDateSelecting:l,isSelected:m===u,defaultDisplayEventEnd:p},I(b,a)))))}return c},n.prototype.renderFillSegs=function(e,t){var a=this.context.isRtl,o=this.props.todayRange,s=this.state.framePositions,i=[];if(s)for(var l=0,v=e;l<v.length;l++){var u=v[l],f=a?{right:0,left:s.lefts[u.lastCol]-s.lefts[u.firstCol]}:{left:0,right:s.rights[u.firstCol]-s.rights[u.lastCol]};i.push(d("div",{key:be(u.eventRange),className:"fc-daygrid-bg-harness",style:f},t==="bg-event"?d(Re,R({seg:u},I(u,o))):Se(t)))}return d.apply(void 0,Ee([x,{}],i))},n.prototype.updateSizing=function(e){var t=this,a=t.props,o=t.frameElRefs;if(!a.forPrint&&a.clientWidth!==null){if(e){var s=a.cells.map(function(f){return o.currentMap[f.key]});if(s.length){var i=this.rootElRef.current;this.setState({framePositions:new V(i,s,!0,!1)})}}var l=this.state.eventInstanceHeights,v=this.queryEventInstanceHeights(),u=a.dayMaxEvents===!0||a.dayMaxEventRows===!0;this.setState({eventInstanceHeights:R(R({},l),v),maxContentHeight:u?this.computeMaxContentHeight():null})}},n.prototype.queryEventInstanceHeights=function(){var e=this.segHarnessRefs.currentMap,t={};for(var a in e){var o=Math.round(e[a].getBoundingClientRect().height),s=a.split(":")[0];t[s]=Math.max(t[s]||0,o)}return t},n.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],a=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-a.getBoundingClientRect().top},n.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap;return this.props.cells.map(function(t){return e[t.key]})},n}(W);re.addStateEquality({eventInstanceHeights:$});function Ue(r,n){if(!r.length)return[];var e=Ke(n);return r.map(function(t){return{seg:t,isVisible:!0,isAbsolute:!0,absoluteTop:e[t.eventRange.instance.instanceId],marginTop:0}})}function Ke(r){for(var n={},e=0,t=r;e<t.length;e++)for(var a=t[e],o=0,s=a;o<s.length;o++){var i=s[o];n[i.seg.eventRange.instance.instanceId]=i.absoluteTop}return n}var Ze=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.splitBusinessHourSegs=T(F),e.splitBgEventSegs=T(F),e.splitFgEventSegs=T(F),e.splitDateSelectionSegs=T(F),e.splitEventDrag=T(Y),e.splitEventResize=T(Y),e.rowRefs=new B,e.handleRootEl=function(t){e.rootEl=t,t?e.context.registerInteractiveComponent(e,{el:t,isHitComboAllowed:e.props.isHitComboAllowed}):e.context.unregisterInteractiveComponent(e)},e}return n.prototype.render=function(){var e=this,t=this.props,a=t.dateProfile,o=t.dayMaxEventRows,s=t.dayMaxEvents,i=t.expandRows,l=t.cells.length,v=this.splitBusinessHourSegs(t.businessHourSegs,l),u=this.splitBgEventSegs(t.bgEventSegs,l),f=this.splitFgEventSegs(t.fgEventSegs,l),p=this.splitDateSelectionSegs(t.dateSelectionSegs,l),y=this.splitEventDrag(t.eventDrag,l),c=this.splitEventResize(t.eventResize,l),S=s===!0||o===!0;S&&!i&&(S=!1,o=null,s=null);var C=["fc-daygrid-body",S?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",i?"":"fc-daygrid-body-natural"];return d("div",{className:C.join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},d(Ce,{unit:"day"},function(E,b){return d(x,null,d("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:i?t.clientHeight:""}},t.colGroupNode,d("tbody",{role:"presentation"},t.cells.map(function(m,g){return d(re,{ref:e.rowRefs.createRef(g),key:m.length?m[0].date.toISOString():g,showDayNumbers:l>1,showWeekNumbers:t.showWeekNumbers,todayRange:b,dateProfile:a,cells:m,renderIntro:t.renderRowIntro,businessHourSegs:v[g],eventSelection:t.eventSelection,bgEventSegs:u[g].filter($e),fgEventSegs:f[g],dateSelectionSegs:p[g],eventDrag:y[g],eventResize:c[g],dayMaxEvents:s,dayMaxEventRows:o,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:t.forPrint})}))))}))},n.prototype.prepareHits=function(){this.rowPositions=new V(this.rootEl,this.rowRefs.collect().map(function(e){return e.getCellEls()[0]}),!1,!0),this.colPositions=new V(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},n.prototype.queryHit=function(e,t){var a=this,o=a.colPositions,s=a.rowPositions,i=o.leftToIndex(e),l=s.topToIndex(t);if(l!=null&&i!=null){var v=this.props.cells[l][i];return{dateProfile:this.props.dateProfile,dateSpan:R({range:this.getCellRange(l,i),allDay:!0},v.extraDateSpan),dayEl:this.getCellEl(l,i),rect:{left:o.lefts[i],right:o.rights[i],top:s.tops[l],bottom:s.bottoms[l]},layer:0}}return null},n.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},n.prototype.getCellRange=function(e,t){var a=this.props.cells[e][t].date,o=J(a,1);return{start:a,end:o}},n}(W);function $e(r){return r.eventRange.def.allDay}var Je=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.forceDayIfListItem=!0,e}return n.prototype.sliceRange=function(e,t){return t.sliceRange(e)},n}(He),Qe=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.slicer=new Je,e.tableRef=M(),e}return n.prototype.render=function(){var e=this,t=e.props,a=e.context;return d(Ze,R({ref:this.tableRef},this.slicer.sliceProps(t,t.dateProfile,t.nextDayThreshold,a,t.dayTableModel),{dateProfile:t.dateProfile,cells:t.dayTableModel.cells,colGroupNode:t.colGroupNode,tableMinWidth:t.tableMinWidth,renderRowIntro:t.renderRowIntro,dayMaxEvents:t.dayMaxEvents,dayMaxEventRows:t.dayMaxEventRows,showWeekNumbers:t.showWeekNumbers,expandRows:t.expandRows,headerAlignElRef:t.headerAlignElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:t.forPrint}))},n}(W),Xe=function(r){D(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e.buildDayTableModel=T(Ye),e.headerRef=M(),e.tableRef=M(),e}return n.prototype.render=function(){var e=this,t=this.context,a=t.options,o=t.dateProfileGenerator,s=this.props,i=this.buildDayTableModel(s.dateProfile,o),l=a.dayHeaders&&d(De,{ref:this.headerRef,dateProfile:s.dateProfile,dates:i.headerDates,datesRepDistinctDays:i.rowCnt===1}),v=function(u){return d(Qe,{ref:e.tableRef,dateProfile:s.dateProfile,dayTableModel:i,businessHours:s.businessHours,dateSelection:s.dateSelection,eventStore:s.eventStore,eventUiBases:s.eventUiBases,eventSelection:s.eventSelection,eventDrag:s.eventDrag,eventResize:s.eventResize,nextDayThreshold:a.nextDayThreshold,colGroupNode:u.tableColGroupNode,tableMinWidth:u.tableMinWidth,dayMaxEvents:a.dayMaxEvents,dayMaxEventRows:a.dayMaxEventRows,showWeekNumbers:a.weekNumbers,expandRows:!s.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:u.clientWidth,clientHeight:u.clientHeight,forPrint:s.forPrint})};return a.dayMinWidth?this.renderHScrollLayout(l,v,i.colCnt,a.dayMinWidth):this.renderSimpleLayout(l,v)},n}(Ie);function Ye(r,n){var e=new we(r.renderRange,n);return new xe(e,/year|month|week/.test(r.currentRangeUnit))}var _e=function(r){D(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.buildRenderRange=function(e,t,a){var o=this.props.dateEnv,s=r.prototype.buildRenderRange.call(this,e,t,a),i=s.start,l=s.end,v;if(/^(year|month)$/.test(t)&&(i=o.startOfWeek(i),v=o.startOfWeek(l),v.valueOf()!==l.valueOf()&&(l=Q(v,1))),this.props.monthMode&&this.props.fixedWeekCount){var u=Math.ceil(Te(i,l));l=Q(l,6-u)}return{start:i,end:l}},n}(ke),tt=Pe({initialView:"dayGridMonth",views:{dayGrid:{component:Xe,dateProfileGeneratorClass:_e},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});export{Xe as DayGridView,Qe as DayTable,Je as DayTableSlicer,Ze as Table,Ie as TableView,Ye as buildDayTableModel,tt as default};
