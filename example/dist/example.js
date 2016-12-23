require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFc = require('react-fc');

var _reactFc2 = _interopRequireDefault(_reactFc);

var _fusioncharts = require('fusioncharts');

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusionchartsFusionchartsCharts = require('fusioncharts/fusioncharts.charts');

var _fusionchartsFusionchartsCharts2 = _interopRequireDefault(_fusionchartsFusionchartsCharts);

var _fusionchartsFusionchartsPowercharts = require('fusioncharts/fusioncharts.powercharts');

var _fusionchartsFusionchartsPowercharts2 = _interopRequireDefault(_fusionchartsFusionchartsPowercharts);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var React_fc = _reactFc2['default'].FusionCharts;

// Chart(FusionCharts);

var config = {
	type: "Spline",
	width: 600,
	height: 400,
	dataFormat: "json",
	dataSource: { data: [{ value: 500 }, { value: 400 }, { value: 600 }] }
};

console.log(_jquery2['default']);

var App = _react2['default'].createClass({
	displayName: 'App',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(React_fc, config)
		);
	}
});

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"fusioncharts":undefined,"fusioncharts/fusioncharts.charts":2,"fusioncharts/fusioncharts.powercharts":3,"jquery":4,"react":undefined,"react-dom":undefined,"react-fc":undefined}],2:[function(require,module,exports){
/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
(function(na,Ha){"object"===typeof module&&module.exports?module.exports=na.document?Ha(na):function(ua){if(!ua.document)throw Error("Window with document not present");return Ha(ua,!0)}:na.FusionCharts=Ha(na,!0)})("undefined"!==typeof window?window:this,function(na,Ha){FusionCharts.register("module",["private","modules.renderer.js-charts",function(){function ua(d,L){for(var g=[],a=0,l=d.length;a<l;a++)g[a]=L.call(d[a],d[a],a,d);return g}function fa(d,L){var g=L?360:q;d=(d||0)%g;return 0>d?g+d:d}
function na(d,L,g,a,l){return La((L-g[1]-a.top)/l,d-g[0]-a.left)}function la(d){this.config={};this.linkedItems={chart:d}}var ha=this,U=ha.hcLib,Ha=U.hasTouch,Da=ha.window,ma=Da.document,oa=U.Raphael,Ma=U.getPosition,sa=U.BLANKSTRING,G=U.preDefStr,Qa=G.HUNDREDSTRING,G=G.NINETYSTRING,za=U.pluck,ia=U.pluckNumber,Ya=U.getFirstValue,Ua=U.extend2,R=U.toRaphaelColor,ra=U.hasSVG,Na=U.hashify,Za="createTouch"in ma,eb=Za&&!(Da.navigator.maxTouchPoints||Da.navigator.msMaxTouchPoints),Ia=U.each,Ga=U.plotEventHandler,
wa=U.componentDispose,Ea=8===Da.document.documentMode?"visible":"",xa=Math,va=xa.sin,pa=xa.cos,La=xa.atan2,qa=xa.round,Aa=xa.min,Ba=xa.max,Fa=xa.abs,ta=xa.PI,a=xa.ceil,b=xa.floor,c=ta/180,h=180/ta,m=Math.PI,f=m/2,q=2*m,v=m+f,A=U.getFirstColor,n=U.getFirstAlpha,C=U.graphics.getDarkColor,p=U.graphics.getLightColor,I=U.graphics.convertColor,K=U.POSITION_BOTTOM,B=U.POSITION_RIGHT,k=U.chartAPI,x=U.COMMASTRING,aa=U.ZEROSTRING,N=U.ONESTRING,D=!/fusioncharts\.com$/i.test(Da.location.hostname),Z={},X={};k("column2d",
{standaloneInit:!0,friendlyName:"Column Chart",creditLabel:D,defaultDatasetType:"column",applicableDSList:{column:!0},singleseries:!0},k.sscartesian);k("column3d",{friendlyName:"3D Column Chart",defaultDatasetType:"column3d",applicableDSList:{column3d:!0},defaultPlotShadow:1,creditLabel:D,is3D:!0,standaloneInit:!0,hasLegend:!1,singleseries:!0,fireGroupEvent:!0,defaultZeroPlaneHighlighted:!1},k.sscartesian3d,{showplotborder:0});k("bar2d",{friendlyName:"Bar Chart",isBar:!0,standaloneInit:!0,defaultDatasetType:"bar2d",
creditLabel:D,applicableDSList:{bar2d:!0},singleseries:!0,spaceManager:k.barbase},k.ssbarcartesian);k("bar3d",{friendlyName:"3D Bar Chart",defaultDatasetType:"bar3d",applicableDSList:{bar3d:!0},defaultPlotShadow:1,fireGroupEvent:!0,standaloneInit:!0,creditLabel:D,is3D:!0,isBar:!0,singleseries:!0,defaultZeroPlaneHighlighted:!1},k.ssbarcartesian3d,{showplotborder:0});k("area2d",{friendlyName:"Area Chart",standaloneInit:!0,creditLabel:D,defaultDatasetType:"area",singleseries:!0,defaultPlotShadow:0},
k.sscartesian,{},k.areabase);k("line",{friendlyName:"Line Chart",standaloneInit:!0,creditLabel:D,defaultPlotShadow:1,singleseries:!0,axisPaddingLeft:0,axisPaddingRight:0,defaultDatasetType:"line"},k.sscartesian,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},k.areabase);k("pareto2d",{defaultDatasetType:"column2d",singleseries:!0,creditLabel:D,_createDatasets:function(){var d=this.components,L=this.jsonData,g=this.is3D,a=d.numberFormatter,l=L.data||L.dataset&&L.dataset[0]&&L.dataset[0].data,
e=l&&l.length,b=L.chart,c=this.defaultDatasetType,L=new (FusionCharts.get("component",["dataset","Pareto"])),r=ia(b.showcumulativeline,1),w=[],u,F;if(l){for(b=0;b<e;b++)u=l[b],F=a.getCleanValue(u.value),null!==F&&"true"!==u.vline&&!0!==u.vline&&1!==u.vline&&"1"!==u.vline&&w.push(u);this.config.categories=w;a=d.dataset||(d.dataset=[]);(l=za(c))&&l.toLowerCase();l=FusionCharts.register("component",["datasetGroup","column"]);l=d[void 0]=new l;l.chart=this;l.init();if(e=g?FusionCharts.get("component",
["dataset","Column3d"]):FusionCharts.get("component",["dataset","Column"]))(g=a[0])?(c=w.length,l=g.components.data.length,c<l&&g.removeData(c,l-c),g.JSONData={data:w},L.configure.call(g)):(g=new e,a.push(g),g.chart=this,g.index=b,l&&l.addDataSet(g,0,0),L.init(g,w,c));d=d.yAxis[1];if(r)d&&d.setAxisConfig({drawLabels:!0,drawPlotLines:!0,drawAxisName:!0,drawAxisLine:!0,drawPlotBands:!0,drawTrendLines:!0,drawTrendLabels:!0}),d.show(),e=FusionCharts.get("component",["dataset","line"]),(g=a[1])?(c=w.length,
l=g.components.data.length,c<l&&g.removeData(c,l-c),g.JSONData={data:w},L.configure.call(g)):(g=new e,a.push(g),g.chart=this,g.index=b,L.init(g,w,"line"));else{if(g=a[1])wa.call(g),a.pop();d&&(d.setAxisConfig({drawLabels:!1,drawPlotLines:!1,drawAxisName:!1,drawAxisLine:!1,drawPlotBands:!1,drawTrendLines:!1,drawTrendLabels:!1}),d.hide())}}else this.setChartMessage()},_setCategories:function(){var d=this.components,L=this.jsonData,g=L.dataset,a=d.numberFormatter,d=d.xAxis,L=L.data||g&&g[0].data||[],
g=[],l,e=L.length,b,c={},r=0,w;for(b=0;b<e;b++){l=L[b];w=a.getCleanValue(l.value,!0);if("true"===l.vline||"1"===l.vline||1===l.vline||!0===l.vline)c[r]=l;else if(null===w)continue;else l.value=w,g.push(l);r++}g.sort(function(d,g){return g.value-d.value});for(b in c)g.splice(b,0,c[b]);d[0].setCategory(g)},standaloneInit:!0,hasLegend:!1,isPercentage:!0},k.msdybasecartesian,{plotfillalpha:G});k("pareto3d",{standaloneInit:!0,is3D:!0,friendlyName:"3D Pareto Chart",creditLabel:D,fireGroupEvent:!0,defaultPlotShadow:1,
singleseries:!0,hasLegend:!1,defaultDatasetType:"column3d",_createDatasets:k.pareto2d,_setCategories:k.pareto2d,isPercentage:!0},k.msdybasecartesian3d,{plotfillalpha:G,use3dlineshift:1});k("pie2d",{friendlyName:"Pie Chart",standaloneInit:!0,defaultSeriesType:"pie",defaultPlotShadow:1,reverseLegend:1,alignCaptionWithCanvas:0,sliceOnLegendClick:!0,isSingleSeries:!0,dontShowLegendByDefault:!0,defaultDatasetType:"Pie2D",applicableDSList:{Pie2D:!0},defaultZeroPlaneHighlighted:!1,creditLabel:D,_plotDragMove:function(d,
L,g,a,l){var e=this.data("plotItem"),b=e.chart,e=e.seriesData,c=b.components.dataset[0].config;isNaN(d)||isNaN(L)||!c.enableRotation||e.singletonCase||e.isRightClicked||(d=na.call(l,g,a,e.pieCenter,e.chartPosition,1),e.isRotating||(e.dragStartAngle!==d&&(e.isRotating=!0),ha.raiseEvent("RotationStart",{startingAngle:e._rotationalStartAngle=b._startingAngle()},b.chartInstance)),c.startAngle+=d-e.dragStartAngle,e.dragStartAngle=d,e.moveDuration=0,c.updateInited||(c.updateInited=!0,setTimeout(b._batchRotate||
(b._batchRotate=function(){b._rotate();c.updateInited=!1}),50)))},_plotDragStart:function(d,L,g){var a=this.data("plotItem"),l=a.chart,a=a.seriesData,e=l.components.dataset[0].config,b=-e.startAngle;a.isRightClicked=Ha||0===g.button||1===g.button?!1:!0;if(e.enableRotation&&!a.isRightClicked){a.isRotating=!1;e=l.linkedItems.container;l={left:0,top:0};if(e.getBoundingClientRect)e=e.getBoundingClientRect(),l.top=e.top+(Da.pageYOffset||ma.scrollTop||0)-(ma.clientTop||0),l.left=e.left+(Da.pageXOffset||
ma.scrollLeft||0)-(ma.clientLeft||0);else for(;e;)l.left+=e.offsetLeft||0,l.top+=e.offsetTop||0,e!==ma.body&&e!==ma.documentElement&&(l.left-=e.scrollLeft||0,l.top-=e.scrollTop||0),e=e.offsetParent;a.chartPosition=l;d=na.call(g,d,L,a.pieCenter,a.chartPosition,1);a.dragStartAngle=d;a.startingAngleOnDragStart=b}},_plotDragEnd:function(d){var L,g=this.data("plotItem"),a=g.chart,l=a.config,e=g.seriesData;e.isRightClicked||(l.clicked=!0,a.disposed||a._rotate(),!e.isRotating&&a._plotGraphicClick.call(g.graphic,
d),delete l.clicked,e.isRotating&&(setTimeout(function(){e.isRotating=!1},0),ha.raiseEvent("RotationEnd",{startingAngle:L=a._startingAngle(),changeInAngle:L-e._rotationalStartAngle},a.chartInstance)))},_plotRollOver:function(d){var L=this.plotItem||this.data("plotItem"),g=L.chart,a=g.components.dataset[0].config,l,e;a.isRotating||(Ga.call(this,g,d,"DataPlotRollOver"),g.onPlotHover(this,!0));a.isHovered=!0;(d=L.innerDiameter)&&(l=L.centerLabelConfig)&&(e=l.label)&&g.drawDoughnutCenterLabel(e,L.center[0],
L.center[1],d,d,l,!1)},onPlotHover:function(d,L){var g=d.data("plotItem"),a=g.center,l=g.rolloverProperties||{},e=L?l.color:g.color,b=L?l.borderWidth:g.borderWidth,c=L?l.borderColor:g.borderColor;e&&(L&&(e.cx=a[0],e.cy=a[1],e.r=g.radius),l.enabled&&g.graphic.attr({fill:R(e),"stroke-width":b,stroke:c}))},_plotRollOut:function(d){var L=this.plotItem||this.data("plotItem"),g=L.chart,a=g.components.dataset[0].config,l,e;a.isRotating||(Ga.call(this,g,d,"DataPlotRollOut"),g.onPlotHover(this,!1));a.isHovered=
!1;(d=L.innerDiameter)&&(l=a.centerLabelConfig)&&((e=l.label)||!e)&&g.drawDoughnutCenterLabel(e,L.center[0],L.center[1],d,d,l,!1)},_rotate:function(){var d,L,g=this.components.dataset[0],a=g.config,l=g.components.data,e=this.config,b=a.slicingDistance,g=g.config,c=q/g.valueTotal,r=e.canvasLeft+.5*e.canvasWidth,e=e.canvasTop+.5*e.canvasHeight,w=a.pieMinRadius,u=.5*(a.piePlotOptions.innerSize||0),F,t,f,h,m;F=(a.startAngle||0)%q;for(m=0;m<l.length;m+=1)f=l[m].config,h=l[m].graphics,d=f.y,null!==d&&void 0!==
d&&(t=F,F-=g.singletonCase?q:d*c,d=.5*(F+t),f.angle=d,f.transX=pa(d)*b,f.transY=va(d)*b,f.slicedTranslation="t"+pa(d)*b+x+va(d)*b,(L=f._rotateAttrs)||(L=f._rotateAttrs={ringpath:[],transform:sa}),d=L.ringpath,d[0]=r,d[1]=e,d[2]=w,d[3]=u,d[4]=F,d[5]=t,L.transform=f.sliced?f.slicedTranslation:sa,h.element.attr(L));this.placeDataLabels(!0,l,a)},getPlotData:function(d,L){var g=this.components.dataset[0],a=g.components.data[d].config,g=g.config.userData||(g.config.userData=[]),l,e;if(g[d])g=g[d];else{g=
g[d]={};for(e in a)"object"!==typeof(l=a[e])&&"function"!==typeof l&&0!==e.indexOf("_")&&(g[e]=l);g.value=g.y;g.categoryLabel=g.label=g.seriesName;delete g.y;delete g.total;delete g.doNotSlice;delete g.name;delete g.seriesName;delete g.centerAngle;delete g.showInLegend;delete g.angle;delete g.endAngle;delete g.isVisible;delete g.setColor;delete g.slicedTranslation;delete g.startAngle;delete g.transX;delete g.transY;delete g.pValue}g.sliced=L;return g},_plotGraphicClick:function(d){var L,g=this.element||
this,a=g.plotItem||g.data("plotItem"),l=g.data("eventArgs")||{},e=a.chart,b=a.index,c=e.components.dataset[0],r=c.config,w=r.enableMultiSlicing,c=c.components.data[b],u=c.graphics,c=c.config,f=c.doNotSlice,t;L=c.slicedTranslation;var m=e.get("config","animationObj"),h=m.duration||200,k=m.dummyObj,q=m.animObj,m=m.animType;!r.isRotating&&Ga.call(g,e,d);if(!(r.isRotating||r.singletonCase||f||(d=!w&&e.sliceInOtherPies(b),(t=c.sliced)&&d))){if(Za&&!eb){d=(new Date).getTime();if(a.lastSliceTimeStamp&&400>
d-a.lastSliceTimeStamp)return;a.lastSliceTimeStamp=d}r=u.element;a=u.connector;w=u.label||u.dataLabel;L="object"===typeof L?"t"+L:L;f=c.connectorPath;u=(t?-1:1)*c.transX;d=(t?-1:1)*c.transY;g=r.data("eventArgs")||r.data("eventArgs",{});ha.raiseEvent("slicingStart",{slicedState:t,dataIndex:"index"in l&&l.index,data:e.getPlotData(b,t)},e.chartInstance);r.animateWith(k,q,{transform:t?"t0,0":L},h,m,function(){ha.raiseEvent("slicingEnd",{slicedState:t,dataIndex:"index"in l&&l.index,data:e.getPlotData(b,
t)},e.chartInstance)});w&&w.x&&((L=w.data("textPos"))||(L=w.data("textPos",{x:w.x,y:w.y})),w.animateWith(k,q,{x:w.x+(t?0:u)},h,m),L.x=w.x+(t?0:u));f&&(L=f.slice(0),L[1]+=u,L[2]+=d,L[4]+=u,L[6]+=u,a.animateWith(k,q,{path:L},h,m),c.connectorPath=L);return g.isSliced=t=c.sliced=!t}},sliceInOtherPies:function(d){var L=this.components.dataset[0],g=L.components.data,a=g.length,l=0,e;for(L.enableMultiSlicing=!0;a--;)a!==d&&(e=g[a]).config.sliced&&++l&&this._plotGraphicClick.call(e.graphics);L.enableMultiSlicing=
!1;return!!l},placeDataLabels:function(){var d=function(d,g){return d.point.value-g.point.value},L=function(d,g){return d.angle-g.angle},g=["start","start","end","end"],c=[-1,1,1,-1],l=[1,1,-1,-1];return function(e,ba,h,r){var w=this.config,u=this.components,F=u.dataset[0],t=F.graphics,k=F.config,p=w.canvasLeft,C=w.canvasTop,F=w.canvasWidth,n=p+.5*w.canvasWidth,A=C+.5*w.canvasHeight,Ka=this.linkedItems.smartLabel,B=k.dataLabelOptions,$a=B.style,P=ia(a(parseFloat($a.lineHeight)),12),D=1===ba.length?
w.singletonPlaceValue:!1,x=B.skipOverlapLabels,I=B.manageLabelOverflow,K=B.connectorPadding,J;J=r&&r.metrics||[n,A,2*k.pieMinRadius,k.innerSize||0];var y=J[1],z=J[0];r=.5*J[2];var k=[[],[],[],[]],n=h.labelsRadius=r+B.distance,H=A=parseInt($a.fontSize,10),S=H/2,K=[K,K,-K,-K];h=h.labelsMaxInQuadrant=b(n/H);var B=B.isSmartLineSlanted,O=J[3]/2,W,E,T,Q,Ra,Ja,ga,aa,G,ja,M,ea,V,ka,X;J=Number.POSITIVE_INFINITY;var da,Z;E=[];T=[];E=this.get("config","animationObj");var N=e?0:E.duration||0,R=E.dummyObj,fa=
E.animObj,U=E.animType,ha=this._plotDragMove,ma=this._plotDragStart,sa=this._plotDragEnd,ra=this._plotRollOver,ya=this._plotRollOut,la=u.paper,Y=t.dataLabelContainer,ca,oa;Ka.useEllipsesOnOverflow(w.useEllipsesWhenOverflow);e||Ka.setStyle($a);if(1==ba.length&&!O&&D)E=ba[0],(ca=E.config._textAttrs).text&&(Z=E.graphics,da=E.config,M=Z.label,E.slicedTranslation=[p,C],ca["text-anchor"]="middle",ca.x=0,ca.y=0,ca.transform=["t",z,y],M?M.animateWith(R,fa,ca,N,U):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,
ya),M.x=z,M.data("textPos",{x:z,y:y}).data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),null!==da.y&&void 0!==da.y&&M.show(),Z.connector&&Z.connector.attr({path:[]}));else if(D)X=O+(r-O)/2,Ia(ba,function(d){da=d.config;(ca=da._textAttrs).text&&(Z=d.graphics,M=Z.label,null!==da.y&&void 0!==da.y&&((ja=Z.connector)&&ja.show(),M&&M.show()),ca.transform="t0,0",G=da.angle,aa=y+X*va(G),Q=z+X*pa(G),ca._x=Q,ca._y=aa,d.sliced&&(ka=d.slicedTranslation,ea=ka[0]-p,V=ka[1]-C,Q+=ea,aa+=V),ca["text-anchor"]=
"middle",ca.x=0,ca.y=0,ca.transform=["t",Q,aa],M?M.animateWith(R,fa,ca,N,U):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,ya),M.x=ca._x,M.x=ca._x,M.y=ca._y,M.data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),ca.visibility===Ea&&M.show())});else{for(e=ba.length-1;0<=e;e--)if(E=ba[e],da=E.config,ca=da._textAttrs,ca.text=da.displayValue)Z=E.graphics,null!==da.y&&void 0!==da.y&&(M=Z.label,(ja=Z.connector)&&ja.show(),M&&M.show()),ca.text=da.displayValue,ca.transform="t0,0",G=da.angle%q,
0>G&&(G=q+G),u=0<=G&&G<f?1:G<m?2:G<v?3:0,k[u].push({point:E,angle:G});for(e=ba=4;e--;){if(x&&(u=k[e].length-h,0<u))for(k[e].sort(d),t=k[e].splice(0,u),u=0,D=t.length;u<D;u+=1)E=t[u].point,ca=E.config._textAttrs,Z=E.graphics,Z.label&&Z.label.attr("visibility","hidden"),Z.connector&&Z.connector.attr({visibility:"hidden"});k[e].sort(L)}e=Ba(k[0].length,k[1].length,k[2].length,k[3].length);u=Ba(Aa(e,h)*H,n+H);T=k[0].concat(k[1]);E=k[2].concat(k[3]);for(e=T.length-1;0<=e;e--)t=T[e].point.config,delete t.clearance,
delete t.clearanceShift,O=Fa(u*va(t.angle)),Math.abs(J-O)<2*P&&(t.clearance=0,T[e+1].point.clearanceShift=P/2),J=O;J=Number.POSITIVE_INFINITY;e=0;for(D=E.length;e<D;e++)t=E[e].point.config,delete t.clearance,delete t.clearanceShift,O=Fa(u*va(t.angle)),Math.abs(J-O)<2*P&&(t.clearance=0,E[e-1].point.clearanceShift=P/2),J=O;k[1].reverse();for(k[3].reverse();ba--;){t=k[ba];D=t.length;x||(H=D>h?u/D:A,S=H/2);P=D*H;J=u;for(e=0;e<D;e+=1,P-=H)O=Fa(u*va(t[e].angle)),J<O?O=J:O<P&&(O=P),J=(t[e].oriY=O)-H;$a=
g[ba];D=u-(D-1)*H;J=0;for(e=t.length-1;0<=e;--e,D+=H)if(E=t[e].point,G=t[e].angle,da=E.config,ca=da._textAttrs,ca.text&&(oa=da._textCss,Z=E.graphics,E=da.sliced,M=Z.label,O=Fa(u*va(G)),O<J?O=J:O>D&&(O=D),J=O+H,P=void 0===da.clearance?2*a(ia(parseFloat(da.style.border),12),12):2*a(ia(parseFloat(da.style.border),da.clearance)),Ja=(O+t[e].oriY)/2,O=z+l[ba]*n*pa(xa.asin(Ja/u)),Ja*=c[ba],Ja+=y,ga=y+r*va(G),T=z+r*pa(G),(2>ba&&O<T||1<ba&&O>T)&&(O=T),Q=O+K[ba],aa=Ja-S-2,Ra=Q+K[ba],ca._x=Ra,I&&(W=1<ba?Ra-
w.canvasLeft:w.canvasLeft+F-Ra,Ka.setStyle(da.style),P=ia(a(parseFloat(da.style.lineHeight)),12)+P,P=Ka.getSmartText(da.displayValue,W,P),void 0===da.clearance&&P.height>H&&(Ja+=H),ca.text=P.text,ca.tooltip=P.tooltext),ca._y=aa,E&&(ea=da.transX,V=da.transY,Q+=ea,O+=ea,T+=ea,ga+=V,Ra+=ea),ca["text-anchor"]=$a,ca.vAlign="middle",ca.x=Ra,ca.y=Ja,(P=M&&M.data("textPos"))?M.attr({x:P.x,y:P.y}).animateWith(R,fa,ca,N):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,ya),M.x=ca._x,M._x=ca._x,M.y=ca._y,
ca.tooltip&&(M.tooltip(ca.tooltip),delete ca.tooltip),ca.visibility===Ea&&M.show(),M.data("textPos",{x:Ra,y:Ja}).data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),ja=Z.connector))da.connectorPath=P=["M",T,ga,"L",B?O:T,Ja,Q,Ja],(E=ja.data("connectorPath"))?w.clicked||ja.attr({path:E.path}).animateWith(R,fa,{path:P},N):ja.attr({path:P}),ja.data("connectorPath",{path:P})}}}}(),_spaceManager:function(){var d=this.config,a=this.components,g=a.dataset[0],b=g.components.data,l=g.config,e=a.legend,
c=a.colorManager,f=this.linkedItems.smartLabel,r=l.dataLabelCounter,w=0,u=this.jsonData.chart,a=ia(u.managelabeloverflow,0),F=ia(u.slicingdistance),t=l.preSliced||d.allPlotSliceEnabled!==aa||u.showlegend===N&&u.interactivelegend!==aa?Fa(ia(F,20)):0,k=ia(u.pieradius,0),m=(F=ia(u.enablesmartlabels,u.enablesmartlabel,1))?ia(u.skipoverlaplabels,u.skipoverlaplabel,1):0,h=ia(u.issmartlineslanted,1),q=r?ia(u.labeldistance,u.nametbdistance,5):t,p=ia(u.smartlabelclearance,5),v=d.width,C=d.height,D=(this._manageActionBarSpace(.225*
C)||{}).bottom,v=v-(d.marginRight+d.marginLeft),C=C-(d.marginTop+d.marginBottom)-(D?D+d.marginBottom:0),D=Aa(C,v),P=za(u.smartlinecolor,c.getColor("plotFillColor")),n=ia(u.smartlinealpha,100),A=ia(u.smartlinethickness,.7),g=l.dataLabelOptions=g._parseDataLabelOptions(),c=g.style,c=r?ia(parseInt(c.lineHeight,10),12):0,x=0===k?.15*D:k,G=2*x,J={bottom:0,right:0},y=l.pieYScale,D=l.pieSliceDepth;g.connectorWidth=A;g.connectorPadding=ia(u.connectorpadding,5);g.connectorColor=I(P,n);r&&(F&&(q=p),q+=t);p=
G+2*(c+q);p=this._manageChartMenuBar(p<C?C-p:C/2);C-=(p.top||0)+(p.bottom||0);l.showLegend&&(this.hasLegend=!0,za(u.legendposition,K).toLowerCase()!==B?(J=e._manageLegendPosition(C/2),C-=J.bottom):(J=e._manageLegendPosition(C/2),v-=J.right));this._allocateSpace(J);f.useEllipsesOnOverflow(d.useEllipsesWhenOverflow);if(1!==r)for(;r--;)f.setStyle(b[r].config.style||d.dataLabelStyle),e=f.getOriSize(b[r].config.displayValue),w=Ba(w,e.width);0===k?x=this._stubRadius(v,w,C,q,t,c,x):(l.slicingDistance=t,
l.pieMinRadius=x,g.distance=q);d=C-2*(x*y+c);l.managedPieSliceDepth=D>d?D-d:l.pieSliceDepth;g.isSmartLineSlanted=h;g.enableSmartLabels=F;g.skipOverlapLabels=m;g.manageLabelOverflow=a},_stubRadius:function(d,a,g,b,l,e,c){var f=this.components.dataset[0],r=f.config,w=ia(this.jsonData.chart.slicingdistance),f=r.dataLabelOptions||(r.dataLabelOptions=f._parseDataLabelOptions()),u=0,u=Aa(d/2-a-l,g/2-e)-b;u>=c?c=u:w||(l=b=Ba(Aa(b-(c-u),l),10));r.slicingDistance=l;r.pieMinRadius=c;f.distance=b;return c},
getDataSet:function(d){return this.components.dataset[d]},_startingAngle:function(d,a){var g,b=this.components.dataset[0].config,l=(g=b.startAngle)*-h+(0>-1*g?360:0);isNaN(d)||(b.singletonCase||b.isRotating?l=b.startAngle:(d+=a?l:0,b.startAngle=-d*c,this._rotate(d),l=d));return qa(100*((l%=360)+(0>l?360:0)))/100},eiMethods:{isPlotItemSliced:function(d){var a,g,b,l=this.apiInstance;return l&&l.components.dataset&&(b=l.components.dataset[0])&&(a=b.components.data)&&a.length&&a[d]&&(g=a[d].config)&&
g.sliced},addData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.addData.apply(d,arguments)},removeData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.removeData.apply(d,arguments)},updateData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.updateData.apply(d,arguments)},slicePlotItem:function(d,a){var g,b,l,e,c=this.apiInstance;return c&&c.components.dataset&&
(g=c.components.dataset[0])&&(b=g.components.data)&&(e=b.length)&&b[d=g.config.reversePlotOrder?e-d-1:d]&&(l=b[d].config)&&((!!a!==l.sliced||void 0===a)&&c._plotGraphicClick.call(b[d].graphics.element)||l.sliced)},centerLabel:function(d,a){var g=this.apiInstance,b=g.components.dataset[0],l=b.config,e=l.piePlotOptions.innerSize,c=l.pieCenter,f=c[0],c=c[1],l=l.centerLabelConfig,r;if("object"!==typeof a)a=l;else for(r in l)void 0===a[r]&&(a[r]=l[r]);a.label=d;b.centerLabelConfig=a;e&&g.drawDoughnutCenterLabel(d||
"",f,c,e,e,a,!0)},startingAngle:function(d,a){return this.apiInstance._startingAngle(d,a)}}},k.guageBase,{plotborderthickness:1,alphaanimation:0,singletonPlaceValue:!0,usedataplotcolorforlabels:0,enableslicing:N});k("pie3d",{defaultDatasetType:"Pie3D",applicableDSList:{Pie3D:!0},is3D:!0,friendlyName:"3D Pie Chart",fireGroupEvent:!0,creditLabel:D,getPointColor:function(d){return d},_configureManager:function(){var d=this.components.dataset[0],a=d.config,g=d.components,d=g.Pie3DManager,g=g.data;d&&
d.configure(a.pieSliceDepth,1===g.length,a.use3DLighting,!1)},defaultPlotShadow:0,_preDrawCalculate:function(){var d,a,g=this.config,c=0,l=this.components.dataset[0],e=l.config;d=l.components;a=e.dataLabelOptions;var f=e.pie3DOptions=l._parsePie3DOptions(),k=za(e.startAngle,0)%q,r=e.managedPieSliceDepth,w=e.slicedOffset=f.slicedOffset,u=g.canvasWidth,F=g.canvasHeight,t=[g.canvasLeft+.5*u,g.canvasTop+.5*F-.5*r],m,h,g=d.data,p,v=Aa(u,F),C,Ka=a.distance;m=e.pieYScale;var D=e.slicedOffsetY||(e.slicedOffsetY=
w*e.pieYScale);p=d.Pie3DManager;t.push(2*e.pieMinRadius,f.innerSize||0);t=ua(t,function(d,a){return(C=/%$/.test(d))?[u,F-r,v,v][a]*parseInt(d,10)/100:d});t[2]/=2;t[3]/=2;t.push(t[2]*m);t.push((t[2]+t[3])/2);t.push(t[5]*m);l.getX=function(d,a){h=xa.asin((d-t[1])/(t[2]+Ka));return t[0]+(a?-1:1)*pa(h)*(t[2]+Ka)};e.center=t;Ia(g,function(d){c+=d.config.y});e.labelsRadius=t[2]+Ka;e.labelsRadiusY=e.labelsRadius*m;e.quadrantHeight=(F-r)/2;e.quadrantWidth=u/2;l=qa(1E3*k)/1E3;f=l+q;k=ia(parseInt(a.style.fontSize,
10),10)+4;e.maxLabels=b(e.quadrantHeight/k);e.labelFontSize=k;e.connectorPadding=ia(a.connectorPadding,5);e.isSmartLineSlanted=za(a.isSmartLineSlanted,!0);e.connectorWidth=ia(a.connectorWidth,1);e.enableSmartLabels=a.enableSmartLabels;p||(p=d.Pie3DManager=new la(this),this.get("graphics","datasetGroup").trackTooltip(!0));this._configureManager();for(d=g.length-1;0<=d;--d)a=g[d],a=a.config,k=l,p=c?a.y/c:0,l=qa(1E3*(l+p*q))/1E3,l>f&&(l=f),m=l,a.shapeArgs={start:qa(1E3*k)/1E3,end:qa(1E3*m)/1E3},a.centerAngle=
h=(m+k)/2%q,a.slicedTranslation=[qa(pa(h)*w),qa(va(h)*D)],k=pa(h)*t[2],e.radiusY=m=va(h)*t[4],a.tooltipPos=[t[0]+.7*k,t[1]+m],a.percentage=100*p,a.total=c},placeDataLabels:function(){var d=function(d,a){return d.point.value-a.point.value},b=function(d,a){return d.angle-a.angle},g=["start","start","end","end"],c=[-1,1,1,-1],l=[1,1,-1,-1];return function(e){var ba,k,r=this.config,w=this.components,u=w.dataset[0],F=u.config,t=u.components.data,h=F.piePlotOptions,p=r.canvasLeft,C=r.canvasTop,D=r.canvasWidth,
n=p+.5*r.canvasWidth,Ka=C+.5*r.canvasHeight,B=this.linkedItems.smartLabel,A=F.dataLabelOptions,P=A.style;ba=ia(a(parseFloat(P.lineHeight)),12);ba=Ya(A.placeInside,!1);var x=A.skipOverlapLabels,I=A.manageLabelOverflow,K=A.connectorPadding,G=A.distance,J=A.connectorWidth,y=[[],[],[],[]],z=parseInt(P.fontSize,10),H=z,S=H/2,K=[K,K,-K,-K],O=A.isSmartLineSlanted,W,E,T,Q,Z,aa,ga,X,N,ja,M,ea,V,ka,R,G=0<G,da=F.center||(F.center=[n,Ka,h.size,h.innerSize||0]),fa=da[1],U=da[0],h=da[2],n=da[4],Ka=F.labelsRadius,
ha=qa(100*F.labelsRadiusY)/100,ma=F.maxLabels,sa=F.enableSmartLabels,ra=F.pieSliceDepth/2;E=this.get("config","animationObj");var la=e?0:E.duration,oa=E.dummyObj,ta=E.animObj,ya=E.animType,ua,Y,ca=this._plotDragMove,wa=this._plotDragStart,za=this._plotDragEnd,na=this._plotRollOver,Ga=this._plotRollOut,Ca=w.paper,Da=u.graphics.dataLabelContainer;B.useEllipsesOnOverflow(r.useEllipsesWhenOverflow);if(F.dataLabelCounter)if(e||B.setStyle(P),1==t.length)E=t[0],ka=E.graphics,V=E.config,Y=V._textAttrs,ua=
V._textCss,M=ka.label,R=ka.connector,V.slicedTranslation=[p,C],null!==V.y&&void 0!==V.y&&(Y.visibility=Ea,Y["text-anchor"]="middle",Y.x=U,Y.y=fa+S-2,Y._x=U),M?M.animateWith(oa,ta,Y,la,ya):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,Ga),Y._x&&(M.x=Y._x,delete Y.x),M.data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs),Y.visibility===Ea&&M.show(),R&&R.hide();else if(ba)Ia(t,function(d){ka=d.graphics;V=d.config;Y=V._textAttrs;M=ka.label;if(null!==V.y&&void 0!==V.y){ja=V.angle;N=fa+da[6]*
va(ja)+S-2;Z=U+da[5]*pa(ja);Y._x=Z;Y._y=N;if(V.sliced){d=d.slicedTranslation;var a=d[1]-C;Z+=d[0]-p;N+=a}Y.visibility=Ea;Y.align="middle";Y.x=Z;Y.y=N}M?M.animateWith(oa,ta,Y,la,ya):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,Ga);M.data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs);Y.visibility===Ea&&M.show();M.x=Y._x;M._x=Y._x;M._y=Y._y});else{Ia(t,function(d){ka=d.graphics;V=d.config;ua=V._textCss;Y=V._textAttrs;if(Y.text=V.displayValue)ka=d.graphics,null!==V.y&&void 0!==V.y&&(M=ka.label,
(R=ka.connector)&&R.show(),M&&M.show()),M=ka.label,ja=V.angle,0>ja&&(ja=q+ja),ea=0<=ja&&ja<f?1:ja<m?2:ja<v?3:0,y[ea].push({point:d,angle:ja})});for(w=r=4;w--;){if(x&&(u=y[w].length-ma,0<u))for(y[w].sort(d),F=y[w].splice(0,u),u=0,ba=F.length;u<ba;u+=1)E=F[u].point,ka=E.graphics,ka.label&&ka.label.attr("visibility","hidden"),ka.connector&&ka.connector.attr({visibility:"hidden"});y[w].sort(b)}w=Ba(y[0].length,y[1].length,y[2].length,y[3].length);ha=Ba(Aa(w,ma)*H,ha+H);y[1].reverse();y[3].reverse();for(B.setStyle(P);r--;){u=
y[r];ba=u.length;x||(H=ba>ma?ha/ba:z,S=H/2);F=ba*H;P=ha;for(w=0;w<ba;w+=1,F-=H)E=Fa(ha*va(u[w].angle)),P<E?E=P:E<F&&(E=F),P=(u[w].oriY=E)-H;F=g[r];t=ha-(ba-1)*H;P=0;for(w=u.length-1;0<=w;--w,t+=H)E=u[w].point,ka=E.graphics,V=E.config,Y=V._textAttrs,ua=V._textCss,null!==V.y&&Y.text&&(ja=u[w].angle,T=V.sliced,M=ka.label,E=Fa(ha*va(ja)),E<P?E=P:E>t&&(E=t),P=E+H,ga=(E+u[w].oriY)/2,E=U+l[r]*Ka*pa(xa.asin(ga/ha)),ga*=c[r],ga+=fa,X=fa+n*va(ja),Q=U+h*pa(ja),(2>r&&E<Q||1<r&&E>Q)&&(E=Q),Z=E+K[r],N=ga+S-2,aa=
Z+K[r],Y._x=aa,I&&(W=1<r?aa-p:p+D-aa,B.setStyle(V.style),ba=ia(a(parseFloat(V.style.lineHeight)),12)+(2*a(parseFloat(V.style.border),12)||0),ba=B.getSmartText(V.displayValue,W,ba),Y.text=ba.text,Y.tooltip=ba.tooltext),ja<m&&(ga+=ra,X+=ra,N+=ra),Y._y=N,T&&(ba=V.transX,T=V.transY,Z+=ba,E+=ba,Q+=ba,X+=T,aa+=ba),Y.visibility=Ea,Y["text-anchor"]=F,(ba=M&&M.data("textPos"))&&M.attr({x:ba.x,y:ba.y}),Y.x=aa,Y.y=ga,!e&&ba?M.animateWith(oa,ta,Y,la,ya):M?Y&&M.attr(Y):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,
Ga),M.data("textPos",{x:aa,y:ga}).data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs),M.x=Y._x,M._x=Y._x,M.y=Y._y,Y.tooltip&&(M.tooltip(Y.tooltip),delete Y.tooltip),G&&J&&sa&&(R=ka.connector,V.connectorPath||(k=!0),V.connectorPath=ba=["M",Q,X,"L",O?E:Q,ga,Z,ga],ba={path:ba,"stroke-width":J,stroke:A.connectorColor||"#606060",visibility:Ea},R&&(e||k?R.attr(ba):R.animateWith(oa,ta,ba,la,ya))))}}}}(),animate:function(){var d,a,g,b,l=this,e=l.components.dataset[0],c=e.components.data;d=l.graphics.datasetGroup;
var f=c.length;a=e.config.alphaAnimation;g=function(){l.disposed||l.disposing||l.placeDataLabels(!1)};var r=l.get("config","animationObj"),e=r.duration||0,w=r.dummyObj,u=r.animObj,r=r.animType;if(a)d.attr({opacity:0}),d.animateWith(w,u,{opacity:1},e,r,g);else for(d=0;d<f;d++)if(a=c[d],g=a.graphics,a=a.config,b=a.shapeArgs,a=2*ta,g=g.element)g.attr({start:a,end:a}),g=b.start,b=b.end,(void 0).animateWith(w,u,{cx:g-a,cy:b-a},e,r)},_rotate:function(d){var a=this.components.dataset[0],g=a.config,a=a.components,
b=a.data,l=g.slicedOffset,e=g.slicedOffsetY,c=g.startAngle,f;d=isNaN(d)?-g._lastAngle:d;f=(d-c)%360;g.startAngle=ia(d,g.startAngle)%360;f=-(f*ta)/180;a.Pie3DManager&&a.Pie3DManager.rotate(f);Ia(b,function(d){var a=[],g=d.config;d=d.graphics.element;var a=g.shapeArgs,b=a.start+=f,a=a.end+=f,c=g.angle=fa((b+a)/2),b=g.sliced,a=pa(c),c=va(c),a=g.slicedTranslation=[qa(a*l),qa(c*e)];g.transX=a[0];g.transY=a[1];g.slicedX=b?pa(f)*l:0;g.slicedY=b?va(f)*e:0;d&&b&&d.attr({transform:"t"+a[0]+","+a[1]})});this.placeDataLabels(!0,
b)},_plotRollOver:function(d){var a=this.data("plotItem"),g=a.chart,b=g.config,l=g.components.dataset[0],e=l.components.data[a.index],a=e.graphics.element,e=e.config.hoverEffects;l.config.isRotating||(Ga.call(a,g,d,"DataPlotRollOver"),e.enabled&&a.attr(e));b.isHovered=!0},_plotRollOut:function(d){var a=this.data("plotItem"),g=a.chart,b=g.config,l=g.components.dataset[0],e=l.components.data[a.index],a=e.config,e=e.graphics.element;l.config.isRotating||(Ga.call(e,g,d,"DataPlotRollOut"),e.attr({color:a.color.color.split(",")[0],
alpha:a._3dAlpha,borderWidth:a.borderWidth,borderColor:a.borderColor}));b.isHovered=!1},_plotDragStart:function(d,a,g){var b=this.data("plotItem").chart,l=b.components.dataset[0].config;l.isRightClicked=Ha||0===g.button||1===g.button?!1:!0;l.enableRotation&&!l.isRightClicked&&(l.isRotating=!1,d=na.call(g,d,a,l.center,l.chartPosition=Ma(b.linkedItems.container),l.pieYScale),l.dragStartAngle=d,l._lastAngle=-l.startAngle,l.startingAngleOnDragStart=l.startAngle)},_plotDragEnd:function(d){var a=this.data("plotItem"),
g=a.index,a=a.chart,b=a.config,l=a.components.dataset[0],e=l.config,l=l.components.Pie3DManager,c=e.startAngle;e.isRightClicked||(e.isRotating?(setTimeout(function(){e.isRotating=!1},0),ha.raiseEvent("rotationEnd",{startingAngle:fa(c,!0),changeInAngle:c-e.startingAngleOnDragStart},a.chartInstance),!b.isHovered&&l.colorObjs[g]&&l.onPlotHover(g,!1)):a._plotGraphicClick.call(this,d))},_plotDragMove:function(d,a,g,b,l){var e=this.data("plotItem").chart,c=e.components.dataset[0].config;isNaN(d)||isNaN(a)||
!c.enableRotation||c.singletonCase||c.isRightClicked||(d=na.call(l,g,b,c.center,c.chartPosition,c.pieYScale),c.isRotating||(c.dragStartAngle!==d&&(c.isRotating=!0),ha.raiseEvent("rotationStart",{startingAngle:fa(c.startAngle,!0)},e.chartInstance)),a=d-c.dragStartAngle,c.dragStartAngle=d,c.moveDuration=0,c._lastAngle+=180*a/ta,d=(new Date).getTime(),c._lastTime&&!(c._lastTime+c.timerThreshold<d))||(c._lastTime||e._rotate(),c.timerId=setTimeout(function(){e.disposed&&e.disposing||e._rotate()},c.timerThreshold),
c._lastTime=d)},_stubRadius:function(d,a,g,b,l,e,c){var f=this.components.dataset[0],r=f.config,w=ia(f.config.slicingdistance),f=r.dataLabelOptions||(r.dataLabelOptions=f._parseDataLabelOptions()),u=0,u=r.pieYScale;g-=r.pieSliceDepth;u=Aa(d/2-a-l,(g/2-e)/u)-b;u>=c?c=u:w||(l=b=Ba(Aa(b-(c-u),l),10));r.slicingDistance=l;r.pieMinRadius=c;f.distance=b;return c},_startingAngle:function(d,a){var g,b=this.components.dataset[0].config,l=(g=b.startAngle)+(0>g?360:0);isNaN(d)||b.singletonCase||b.isRotating||
(d+=a?l:0,this._rotate(d),l=d);return qa(100*((l%=360)+(0>l?360:0)))/100}},k.pie2d,{plotborderthickness:.1,alphaanimation:1});k("doughnut2d",{friendlyName:"Doughnut Chart",defaultDatasetType:"Doughnut2D",creditLabel:D,applicableDSList:{Doughnut2D:!0},getPointColor:function(d,a,g){var c;d=A(d);a=n(a);100>g&&ra?(c=C(d,b(100*(85-.2*(100-g)))/100),d=p(d,b(100*(100-.5*g))/100),a={FCcolor:{color:c+","+d+","+d+","+c,alpha:a+","+a+","+a+","+a,radialGradient:!0,gradientUnits:"userSpaceOnUse",r:g}}):a={FCcolor:{color:d+
","+d,alpha:a+","+a,ratio:"0,100"}};return a},drawDoughnutCenterLabel:function(d,a,g,b,c,e,f){var k=this.components,r=k.dataset[0].config;e=e||r.lastCenterLabelConfig;var k=k.paper,w=this.linkedItems.smartLabel,u=this.graphics,F=u.datasetGroup,t=e.padding,h=2*e.textPadding,m={fontFamily:e.font,fontSize:e.fontSize+"px",lineHeight:1.2*e.fontSize+"px",fontWeight:e.bold?"bold":"",fontStyle:e.italic?"italic":""},p=1.414*(.5*b-t)-h;c=1.414*(.5*c-t)-h;var q;w.setStyle(m);w.useEllipsesOnOverflow(this.config.useEllipsesWhenOverflow);
w=w.getSmartText(d,p,c);(c=u.doughnutCenterLabel)?(c.attr("text")!==d&&this.centerLabelChange(d),q=u.centerLabelOvalBg):(e.bgOval&&(u.centerLabelOvalBg=q=k.circle(a,g,.5*b-t,F)),c=u.doughnutCenterLabel=k.text(F).hover(this.centerLabelRollover,this.centerLabelRollout).click(this.centerLabelClick),c.chart=this);d?(c.css(m).attr({x:a,y:g,text:w.text,visibility:Ea,direction:r.textDirection,fill:R({FCcolor:{color:e.color,alpha:e.alpha}}),"text-bound":e.bgOval?"none":[R({FCcolor:{color:e.bgColor,alpha:e.bgAlpha}}),
R({FCcolor:{color:e.borderColor,alpha:e.borderAlpha}}),e.borderThickness,e.textPadding,e.borderRadius]}).tooltip(e.toolText||w.tooltext),e.bgOval&&q&&q.attr({visibility:Ea,fill:Na(e.bgColor),"fill-opacity":e.bgAlpha/100,stroke:Na(e.borderColor),"stroke-width":e.borderThickness,"stroke-opacity":e.borderAlpha/100})):(c.attr("visibility","hidden"),q&&q.attr("visibility","hidden"));f&&(r.lastCenterLabelConfig=e,r.centerLabelConfig=e)},centerLabelRollover:function(){var d=this.chart,a=d.config,g=d.chartInstance,
b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,a={height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelRollover",a,g,this,d.hoverOnCenterLabel)},centerLabelRollout:function(){var d=this.chart,a=d.config,g=d.chartInstance,b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,a={height:a.height,width:a.width,
pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelRollout",a,g,this,d.hoverOffCenterLabel)},centerLabelClick:function(){var d=this.chart,a=d.config,g=d.chartInstance,b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,d={height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,
centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelClick",d,g)},centerLabelChange:function(d){var a=this.config,g=this.chartInstance,b=g.ref;ha.raiseEvent("centerLabelChanged",{height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:this.linkedItems.container,centerLabelText:d},g)},hoverOnCenterLabel:function(){var d=this.chart.components.dataset[0].config.lastCenterLabelConfig;(d.hoverColor||d.hoverAlpha)&&
this.attr({fill:R({FCcolor:{color:d.hoverColor||d.color,alpha:d.hoverAlpha||d.alpha}})})},hoverOffCenterLabel:function(){var d=this.chart.components.dataset[0].config.lastCenterLabelConfig;(d.hoverColor||d.hoverAlpha)&&this.attr({fill:R({FCcolor:{color:d.color,alpha:d.alpha}})})}},k.pie2d,{singletonPlaceValue:!1});k("doughnut3d",{friendlyName:"3D Doughnut Chart",defaultDatasetType:"Doughnut3D",creditLabel:D,applicableDSList:{Doughnut3D:!0},_configureManager:function(){var d=this.components.dataset[0],
a=d.config,g=d.components,d=g.Pie3DManager,g=g.data;d&&d.configure(a.pieSliceDepth,1===g.length,a.use3DLighting,!0)}},k.pie3d);k("mscolumn2d",{standaloneInit:!0,friendlyName:"Multi-series Column Chart",creditLabel:D,defaultDatasetType:"column",applicableDSList:{column:!0},eiMethods:{}},k.mscartesian);k("mscolumn3d",{standaloneInit:!0,defaultDatasetType:"column3d",friendlyName:"Multi-series 3D Column Chart",applicableDSList:{column3d:!0},defaultPlotShadow:1,fireGroupEvent:!0,is3D:!0,creditLabel:D,
defaultZeroPlaneHighlighted:!1},k.mscartesian3d,{showplotborder:0});k("msbar2d",{standaloneInit:!0,friendlyName:"Multi-series Bar Chart",isBar:!0,hasLegend:!0,creditLabel:D,defaultDatasetType:"bar2d",applicableDSList:{bar2d:!0}},k.msbarcartesian);k("msbar3d",{standaloneInit:!0,defaultSeriesType:"bar3d",friendlyName:"Multi-series 3D Bar Chart",fireGroupEvent:!0,defaultPlotShadow:1,is3D:!0,isBar:!0,hasLegend:!0,creditLabel:D,defaultZeroPlaneHighlighted:!1,defaultDatasetType:"bar3d",applicableDSList:{bar3d:!0}},
k.msbarcartesian3d,{showplotborder:0});k("msarea",{standaloneInit:!0,friendlyName:"Multi-series Area Chart",creditLabel:D,defaultDatasetType:"area",defaultPlotShadow:0,applicableDSList:{area:!0}},k.areabase);k("msline",{standaloneInit:!0,friendlyName:"Multi-series Line Chart",creditLabel:D,defaultDatasetType:"line",defaultPlotShadow:1,axisPaddingLeft:0,axisPaddingRight:0,applicableDSList:{line:!0}},k.areabase,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0});k("stackedarea2d",{friendlyName:"Stacked Area Chart",
showsum:0,creditLabel:D},k.msarea,{plotfillalpha:Qa,isstacked:1});k("stackedcolumn2d",{friendlyName:"Stacked Column Chart",creditLabel:D},k.mscolumn2d,{isstacked:!0});k("stackedcolumn3d",{friendlyName:"3D Stacked Column Chart",creditLabel:D},k.mscolumn3d,{showplotborder:0},k.stackedcolumn2d);k("stackedbar2d",{friendlyName:"Stacked Bar Chart",creditLabel:D},k.msbar2d,{maxbarheight:50},k.stackedcolumn2d);k("stackedbar3d",{friendlyName:"3D Stacked Bar Chart",creditLabel:D},k.msbar3d,{showplotborder:0},
k.stackedcolumn2d);k("marimekko",{standaloneInit:!0,friendlyName:"Marimekko Chart",isValueAbs:!0,distributedColumns:!0,stack100percent:!0,defaultDatasetType:"marimekko",applicableDSList:{marimekko:!0},isStacked:!0,showsum:1,creditLabel:D,_setAxisLimits:function(){var d=this.components,a=d.dataset,g=d.yAxis,d=d.xAxis,b,c=a.length,e,f=-Infinity,k=Infinity,r=Infinity,w=-Infinity,u,F,t={};u=this.config.categories;var h=[],m=function(d){f=Ba(f,d.max);k=Aa(k,d.min);w=Ba(w,d.xMax||-Infinity);r=Aa(r,d.xMin||
Infinity)};for(e=0;e<c;e++)b=a[e],(F=b.groupManager)?t[b.type]=F:h.push(b);for(F in t)a=t[F].getDataLimits(),m(a);c=h.length;for(e=0;e<c;e++)a=h[e].getDataLimits(),m(a);-Infinity===f&&(f=0);Infinity===k&&(k=0);g[0].setAxisConfig({isPercent:this.config.isstacked?this.config.stack100percent:0});g[0].setDataLimit(f,k);if(-Infinity!==w||Infinity!==r)d[0].config.xaxisrange={max:w,min:r},d[0].setDataLimit(w,r);g=t[F].getStackSumPercent();e=g.length;F=d[0].getCategoryLen();F>e&&u.splice(e,F-e);this._setCategories();
e=d[0].getLimit();r=e.min;w=e.max;u=r;F=w-r;for(e=0;e<g.length;e++)a=g[e],c=F*a/100,a=u+c/2,d[0].updateCategory(e,{x:a}),u+=c}},k.mscartesian,{isstacked:!0,showpercentvalues:0,usepercentdistribution:1,showsum:1});k("msstackedcolumn2d",{standaloneInit:!0,defaultDatasetType:"column",applicableDSList:{column:!0},friendlyName:"Multi-series Stacked Column Chart",_createDatasets:function(){var d=this.components,a=this.jsonData,g=a.dataset,b=g&&g.length||0,c,e,f,k=this.defaultDatasetType,r=this.applicableDSList,
w,u,F,t,h,m,p=a.lineset||[],q=this.config,v=q.dataSetMap,C=q.lineSetMap,D=v&&v.length,A=d.legend,n=[],B=[],x=0;F=0;var I,K=-1,J,y=this.config.catLen,z=d.xAxis[0],H,S,O=d.dataset;if(g||0!==p.length){this.config.categories=a.categories&&a.categories[0].category;e=d.dataset=[];for(a=0;a<b;a++){h=g[a];K++;if(h.dataset)for(S=!0,m=h.dataset&&h.dataset.length||0,n[a]=[],c=0;c<m;c++){if(F=h.dataset[c],w=(w=za(F.renderas,k))&&w.toLowerCase(),r[w]||(w=k),f=FusionCharts.get("component",["dataset",w]))t="datasetGroup_"+
w,u=FusionCharts.register("component",["datasetGroup",w]),w=d[t],u&&!w?(w=d[t]=new u,w.chart=this,w.init()):w&&v&&0!==v.length&&!I&&(w.init(),I=!0),v&&v[a]&&v[a][c]?(f=v[a][c],f.index=x,t=f.JSONData,u=t.data.length,t=F.data&&F.data.length||0,J=z.getCategoryLen(),H=y-J,u-=t,u=this._getDiff(u,t,H,J),t=u.diff,u=u.startIndex,0<t&&f.removeData(u,t,!1),f.JSONData=F,f.configure()):(f=new f,f.chart=this,f.index=x,f.init(F)),x++,n[a].push(f),e.push(f),w&&w.addDataSet(f,K,c)}else m=c=0,K--;h=v&&v[a]&&v[a].length;
if(h>m)for(F=c,h=h-m+c;F<h;F++)w=v[a][F],A.removeItem(w.legendItemId),wa.call(w)}if(D>b)for(F=a,h=D-b+a;F<h;F++)for(m=v[F].length,c=0;c<m;c++)w=v[F][c],A.removeItem(w.legendItemId),wa.call(w);q.dataSetMap=n;if(this.lineset){a=0;for(b=p.length;a<b;a++)g=p[a],f=FusionCharts.get("component",["dataset","line"]),f=new f,C&&C[a]?(f=C[a],f.index=x,t=f.JSONData,u=t.data.length,t=g.data&&g.data.length||0,u>t&&f.removeData(t,u-t,!1),f.JSONData=g,f.configure()):(f.chart=this,f.index=x,f.init(g)),B.push(f),e.push(f),
x++;p=C&&C.length;if(p>b)for(F=a,h=p-b+a;F<h;F++)w=C[F],A.removeItem(w.legendItemId),wa.call(w);q.lineSetMap=B}S?this.config.catLen=z.getCategoryLen():(d.dataset=O,this.setChartMessage())}else this.setChartMessage()},creditLabel:D},k.mscartesian,{isstacked:!0});k("mscombi2d",{friendlyName:"Multi-series Combination Chart",standaloneInit:!0,creditLabel:D,defaultDatasetType:"column",applicableDSList:{line:!0,area:!0,column:!0},_createDatasets:function(){var d=this.components,a=this.jsonData,g=a.dataset,
b=g&&g.length,c,e,f=this.defaultDatasetType,k=this.applicableDSList;c=this.components.legend;var r=d.xAxis[0],w,u,h,t,m,p=this.config.isstacked,q,v,C=[],D={},A=this.config,n=this.config.catLen,B=A.datasetMap||(A.datasetMap={line:[],area:[],column:[],column3d:[],scrollcolumn2d:[]}),x={line:[],area:[],column:[],column3d:[],scrollcolumn2d:[]};g||this.setChartMessage();this.config.categories=a.categories&&a.categories[0].category;a=d.dataset=[];c&&c.emptyItems();for(c=0;c<b;c++)if(m=g[c],t=m.parentyaxis||
"",u=(u=this.config.isdual&&"s"===t.toLowerCase()?"line"===this.defaultSecondaryDataset?this.sDefaultDatasetType:za(m.renderas,this.sDefaultDatasetType):za(m.renderas,f))&&u.toLowerCase(),k[u]||(u=f),h=FusionCharts.get("component",["dataset",u]))void 0===D[u]?D[u]=0:D[u]++,e="datasetGroup_"+u,t=FusionCharts.register("component",["datasetGroup",u]),(w=d[e])&&C.push(w),t&&!w&&(w=d[e]=new t,w.chart=this,w.init()),t=B[u],(e=t[0])?(delete e.legendItemId,w=r.getCategoryLen(),h=n-w,v=e.JSONData,q=v.data&&
v.data.length,v=m.data&&m.data.length||0,q-=v,h=this._getDiff(q,v,h,w),w=h.diff,h=h.startIndex,0<w&&e.removeData(h,w,!1),e.index=c,e.JSONData=m,e.configure(),t.splice(0,1)):(e=new h,e.chart=this,e.index=c,w&&(p?w.addDataSet(e,0,D[u]):w.addDataSet(e,D[u],0)),e.init(m)),x[u].push(e),a.push(e);for(g in B)if(t=B[g],f=t[0]&&t[0].groupManager,b=t.length,k=void 0===D[g]?0:D[g]+1,b)for(p&&f&&f.removeDataSet(0,k,b),d=0;d<b;d++)f&&!p&&f.removeDataSet(k,0,1),"column"===t[d].type&&!0===this.is3D?(t[d].visible=
!1,t[d].draw()):wa.call(t[d]);A.datasetMap=x;this.config.catLen=r.getCategoryLen()}},k.areabase);k("mscombi3d",{standaloneInit:!0,friendlyName:"Multi-series 3D Combination Chart",defaultDatasetType:"column3d",is3D:!0,creditLabel:D,defaultPlotShadow:1,applicableDSList:{column3d:!0,line:!0,area:!0},_createDatasets:k.mscombi2d},k.mscartesian3d,{showplotborder:0},k.areabase);k("mscolumnline3d",{friendlyName:"Multi-series Column and Line Chart",is3D:!0,creditLabel:D,defaultPlotShadow:1,applicableDSList:{column3d:!0,
line:!0}},k.mscombi3d,{use3dlineshift:1,showplotborder:0},k.msarea);k("stackedcolumn2dline",{friendlyName:"Stacked Column and Line Chart",defaultDatasetType:"column",creditLabel:D,applicableDSList:{line:!0,column:!0}},k.mscombi2d,{isstacked:!0,stack100percent:0},k.msarea);k("stackedcolumn3dline",{friendlyName:"Stacked 3D Column and Line Chart",is3D:!0,creditLabel:D,applicableDSList:{column3d:!0,line:!0}},k.mscombi3d,{use3dlineshift:1,isstacked:!0,stack100percent:0,showplotborder:0},k.msarea);k("mscombidy2d",
{standaloneInit:!0,friendlyName:"Multi-series Dual Y-Axis Combination Chart",defaultDatasetType:"column",sDefaultDatasetType:"line",_createDatasets:k.mscombi2d,creditLabel:D,applicableDSList:{column:!0,line:!0,area:!0}},k.msdybasecartesian,{isdual:1},k.msarea);k("mscolumn3dlinedy",{standaloneInit:!0,friendlyName:"Multi-series 3D Column and Line Chart",defaultDatasetType:"column3d",sDefaultDatasetType:"line",is3D:!0,creditLabel:D,_createDatasets:k.mscombi2d,defaultPlotShadow:1,applicableDSList:{column3d:!0,
line:!0}},k.msdybasecartesian3d,{use3dlineshift:1,isdual:!0,showplotborder:0},k.msarea);k("stackedcolumn3dlinedy",{standaloneInit:!0,friendlyName:"Stacked 3D Column and Line Chart",is3D:!0,defaultDatasetType:"column3d",creditLabel:D,sDefaultDatasetType:"line",defaultSecondaryDataset:"line",_createDatasets:k.mscombi2d,applicableDSList:{column3d:!0,line:!0}},k.msdybasecartesian3d,{use3dlineshift:1,isdual:!0,isstacked:!0,showplotborder:0},k.msarea);k("msstackedcolumn2dlinedy",{standaloneInit:!0,friendlyName:"Multi-series Dual Y-Axis Stacked Column and Line Chart",
stack100percent:0,defaultDatasetType:"column",sDefaultDatasetType:"line",hasLineSet:!0,creditLabel:D,applicableDSList:{column:!0},lineset:!0,_createDatasets:k.msstackedcolumn2d},k.msdybasecartesian,{isdual:!0,haslineset:!0,isstacked:!0},k.msarea);k("scrollcolumn2d",{standaloneInit:!0,friendlyName:"Scrollable Multi-series Column Chart",tooltipConstraint:"plot",canvasborderthickness:1,creditLabel:D,defaultDatasetType:"scrollcolumn2d",applicableDSList:{scrollcolumn2d:!0},avgScrollPointWidth:40,hasScroll:!0,
defaultPlotShadow:1,_manageScrollerPosition:function(){var d=this.config,a;a=this._scrollBar.get;var g=this.components.scrollBar,b;a=a()[0];g.setConfiguaration(a.conf);a=d.scrollEnabled;b=g.getLogicalSpace();this._allocateSpace({bottom:d.shift=!1===a?0:b.height+g.conf.padding})},_resetViewPortConfig:function(){this.config.viewPortConfig={scaleX:1,scaleY:1,x:0,y:0}},updateManager:function(d){var a=this.config,g=this.config.viewPortConfig,b=g.scaleX,c=this.graphics.datasetGroup,e=this.graphics.datalabelsGroup,
f=this.graphics.trackerGroup,h=a.canvasWidth*(b-1)*d,r=this.components.xAxis[0],w=this.graphics.sumLabelsLayer;g.x=h/b;g="t"+-qa(h)+",0";a.lastScrollPosition=d;c.attr({transform:g});e.attr({transform:g});f.attr({transform:g});w&&w.attr({transform:g});d=r.getAxisConfig("animateAxis");a=r.getAxisConfig("drawAxisName");r.setAxisConfig({animateAxis:!1,drawAxisName:!1});r.draw();r.setAxisConfig({animateAxis:d,drawAxisName:a})},_createToolBox:function(){var d=this.components,a=this._scrollBar,g=a.get,b=
a.add,c,e,f=d.scrollBar;k.mscartesian._createToolBox.call(this);c=d.tb;e=(d.toolBoxAPI||c.getAPIInstances(c.ALIGNMENT_HORIZONTAL)).Scroller;a.clear();b({isHorizontal:!0},{scroll:function(d){return function(){d.updateManager.apply(d,arguments)}}(this)});a=g()[0];f||(d.scrollBar=(new e(a.conf,c.idCount,c.pId)).attachEventHandlers(a.handler))},_setAxisScale:function(){var d=this.config,a=this.components.xAxis[0].getCategoryLen(),g=this.jsonData,c=d.scrollOptions||(d.scrollOptions={}),f=this.components.dataset,
e=f.length,h,k,r=0,w;w=d.canvasWidth;var u=d.scrollToEnd,m=d.lastScrollPosition,g=ia(g.chart.numvisibleplot,b(d.width/this.avgScrollPointWidth));for(k=0;k<e;k++)h=f[k],"column"===h.type&&r++;this.config.isstacked&&(r=1);a*=r||1;2<=g&&g<a?(d.viewPortConfig.scaleX=a/=g,w=w*(a-1)*(void 0!==m?m:u?1:0),d.viewPortConfig.x=w/a,c.vxLength=g/e,d.scrollEnabled=!0):d.scrollEnabled=!1},drawScrollBar:function(){var d=this,a=d.config,g=a.viewPortConfig,c=d.components,b=d.graphics,e=c.paper,f=c.xAxis[0],h=f.config,
r=f.config.axisRange,k=a.scrollOptions||(a.scrollOptions={}),u=r.max,m=r.min,t=k.vxLength,p=c.scrollBar,r=p.node,q=a.scrollToEnd,v=a.lastScrollPosition,C=g.scaleX,D,A,B,n,x;n=void 0!==v?v:q?1:0;g=a.canvasLeft;q=a.canvasTop;v=a.canvasHeight;D=a.canvasWidth;c=c.canvas.config;A=c.canvasBorderWidth;B=h.showAxisLine?h.axisLineThickness||0:0;x=ia(A,h.lineStartExtension);h=ia(A,h.lineEndExtension);k.viewPortMin=m;k.viewPortMax=u;C=k.scrollRatio=1/C;t=k.windowedCanvasWidth=f.getAxisPosition(t);f=k.fullCanvasWidth=
f.getAxisPosition(u-m)-t;k=b.scrollBarParentGroup;k||(k=b.scrollBarParentGroup=e.group("scrollBarParentGroup",b.parentGroup).insertBefore(b.datalabelsGroup));!1!==a.scrollEnabled?(p.draw(g-x,q+v+A+B-2,{width:D+x+h,scrollRatio:C,roundEdges:c.isRoundEdges,fullCanvasWidth:f,windowedCanvasWidth:t,scrollPosition:n,parentLayer:k}),!r&&function(){var a;oa.eve.on("raphael.scroll.start."+p.node.id,function(g){a=g;ha.raiseEvent("scrollstart",{scrollPosition:g},d.chartInstance)});oa.eve.on("raphael.scroll.end."+
p.node.id,function(g){ha.raiseEvent("scrollend",{prevScrollPosition:a,scrollPosition:g},d.chartInstance)})}()):p&&p.node&&p.node.hide()},_drawDataset:function(){this._setClipping();k.mscartesian._drawDataset.call(this)},_setClipping:function(){var a=this.config,c=this.graphics.datasetGroup,g=this.graphics.datalabelsGroup,b=this.graphics.trackerGroup,f=a.viewPortConfig,e=this.graphics.sumLabelsLayer,k=f.scaleX,h=this.get("config","animationObj"),r=h.duration,m=h.dummyObj,u=h.animObj,h=h.animType,f=
f.x,a=a.height,F=this.components.canvas.config.clip["clip-canvas"],F=F&&F.slice(0)||[];this.config.clipSet?(c.animateWith(m,u,{"clip-rect":F},r,h),g.animateWith(m,u,{"clip-rect":F},r,h),b.attr({"clip-rect":F}),F[3]=a,F[1]=0,e&&e.animateWith(m,u,{"clip-rect":F},r,h)):(c.attr({"clip-rect":F}),g.attr({"clip-rect":F}),b.attr({"clip-rect":F}),F[3]=a,F[1]=0,e&&e.attr({"clip-rect":F}));c.attr({transform:"T"+-(f*k)+",0"});g.attr({transform:"T"+-(f*k)+",0"});b.attr({transform:"T"+-(f*k)+",0"});e&&e.attr({transform:"T"+
-(f*k)+",0"});this.config.clipSet=!0},configure:function(){var a=this.jsonData.chart,c;k.mscolumn2d.configure.call(this);c=this.config;c.scrollToEnd=ia(a.scrolltoend,0);c.lastScrollPosition=void 0}},k.scrollbase);k("scrollarea2d",{friendlyName:"Scrollable Multi-series Area Chart",tooltipConstraint:"plot",canvasborderthickness:1,creditLabel:D,hasScroll:!0,defaultDatasetType:"scrollarea2d",applicableDSList:{scrollarea2d:!0},avgScrollPointWidth:75,defaultPlotShadow:0,_setAxisScale:function(){var a=this.config,
c=this.components.xAxis[0].getCategoryLen(),g=this.jsonData,f=a.scrollOptions||(a.scrollOptions={}),l;l=a.lastScrollPosition;var e=a.scrollToEnd,h=a.canvasWidth,g=ia(g.chart.numvisibleplot,b(a.width/this.avgScrollPointWidth));2<=g&&g<c?(a.viewPortConfig.scaleX=c/=g,l=h*(c-1)*(void 0!==l?l:e?1:0),a.viewPortConfig.x=l/c,f.vxLength=g,a.scrollEnabled=!0):a.scrollEnabled=!1}},k.scrollcolumn2d,{},k.areabase);k("scrollline2d",{friendlyName:"Scrollable Multi-series Line Chart",tooltipConstraint:"plot",canvasborderthickness:1,
defaultDatasetType:"line",creditLabel:D,avgScrollPointWidth:75,defaultPlotShadow:1},k.scrollarea2d,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},k.areabase);k("scrollstackedcolumn2d",{friendlyName:"Scrollable Stacked Column Chart",canvasborderthickness:1,tooltipConstraint:"plot",avgScrollPointWidth:75,creditLabel:D},k.scrollcolumn2d,{},k.stackedcolumn2d);k("scrollcombi2d",{friendlyName:"Scrollable Combination Chart",tooltipConstraint:"plot",hasScroll:!0,canvasborderthickness:1,avgScrollPointWidth:40,
applicableDSList:{area:!0,line:!0,column:!0},creditLabel:D,_createDatasets:k.mscombi2d},k.scrollcolumn2d,{},k.msarea);k("scrollcombidy2d",{friendlyName:"Scrollable Dual Y-Axis Combination Chart",tooltipConstraint:"plot",canvasborderthickness:1,avgScrollPointWidth:40,hasScroll:!0,_drawDataset:k.scrollcolumn2d,updateManager:k.scrollcolumn2d,_setAxisScale:k.scrollcolumn2d,_createToolBox:k.scrollcolumn2d,_scrollBar:k.scrollcolumn2d,_manageScrollerPosition:k.scrollcolumn2d,drawScrollBar:k.scrollcolumn2d,
_setClipping:k.scrollcolumn2d,creditLabel:D,configure:k.scrollcolumn2d},k.mscombidy2d,{isdual:!0},k.areabase);k("scatter",{friendlyName:"Scatter Chart",isXY:!0,standaloneInit:!0,hasLegend:!0,defaultZeroPlaneHighlighted:!1,creditLabel:D,defaultDatasetType:"Scatter",applicableDSList:{Scatter:!0}},k.scatterBase);Ua(U.eventList,{zoomedOut:"FC_ZoomedOut"});k("bubble",{friendlyName:"Bubble Chart",standaloneInit:!0,defaultDatasetType:"bubble",creditLabel:D,applicableDSList:{bubble:!0},getDataLimits:function(){var a=
this.components.dataset,c,g,b,f=-Infinity,e=Infinity;c=0;for(b=a.length;c<b;c++)g=a[c],g=g.getDataLimits(),f=Ba(f,g.zMax||-Infinity),e=Aa(e,g.zMin||Infinity);f=-Infinity===f?0:f;e=Infinity===e?0:e;return{zMax:f,zMin:e}}},k.scatter);oa._availableAnimAttrs&&oa._availableAnimAttrs.cx&&(oa._availableAnimAttrs.innerR=oa._availableAnimAttrs.depth=oa._availableAnimAttrs.radiusYFactor=oa._availableAnimAttrs.start=oa._availableAnimAttrs.end=oa._availableAnimAttrs.cx);la.prototype={configure:function(a,c,g,
b){var f=this.linkedItems.chart,e=f.get("components","paper"),f=f.get("graphics","datasetGroup");"object"===typeof a&&(a=a.depth,c=a.hasOnePoint,g=a.use3DLighting,b=a.isDoughnut);this.renderer||(this.renderer=e);this.hasOnePoint=c;this.use3DLighting=g;this.isDoughnut=b;this.depth=a;!this.bottomBorderGroup&&(this.bottomBorderGroup=e.group("bottom-border",f));this.bottomBorderGroup.attr({transform:"t0,"+a});!this.slicingWallsBackGroup&&(this.slicingWallsBackGroup=e.group("slicingWalls-back-Side",f));
!this.slicingWallsFrontGroup&&(this.slicingWallsFrontGroup=e.group("slicingWalls-front-Side",f));!this.topGroup&&(this.topGroup=e.group("top-Side",f));!this.pointElemStore&&(this.pointElemStore=[]);!this.slicingWallsArr&&(this.slicingWallsArr=[]);this.moveCmdArr=["M"];this.lineCmdArr=["L"];this.closeCmdArr=["Z"];this.colorObjs=[]},getArcPath:function(a,c,b,f,l,e,h,k,r,m){return b==l&&f==e?[]:["A",h,k,0,m,r,l,e]},_parseSliceColor:function(a,c,b){var f,l,e,h,k,r,m,u,F,t,q,v,D,A,B;B=3;var n=(f=this.use3DLighting)?
Z:X,K=b.radiusYFactor,G=b.cx,P=b.cy,aa=b.r,N=aa*K,fa=b.innerR||0,sb=G+aa,J=G-aa,y=G+fa,z=G-fa;c=c||100;b=c/2;n[a]&&n[a][c]?n=n[a][c]:(n[a]||(n[a]={}),n[a][c]||(n[a][c]={}),n=n[a][c],f?(f=C(a,80),l=C(a,75),r=p(a,85),m=p(a,70),u=p(a,40),F=p(a,50),p(a,30),t=p(a,65),C(a,85),e=C(a,69),h=C(a,75),k=C(a,95)):(B=10,f=C(a,90),l=C(a,87),r=p(a,93),m=p(a,87),u=p(a,80),t=F=p(a,85),p(a,80),k=C(a,85),e=C(a,75),h=C(a,80)),q=l+x+r+x+m+x+r+x+l,D=c+x+c+x+c+x+c+x+c,v=l+x+a+x+r+x+a+x+l,A=b+x+b+x+b+x+b+x+b,u=l+x+a+x+u+
x+a+x+l,e=h+x+r+x+F+x+r+x+e,h="FFFFFF"+x+"FFFFFF"+x+"FFFFFF"+x+"FFFFFF"+x+"FFFFFF",B=0+x+b/B+x+c/B+x+b/B+x+0,n.top=ra?{FCcolor:{gradientUnits:"userSpaceOnUse",radialGradient:!0,color:t+x+k,alpha:c+x+c,ratio:"0,100"}}:{FCcolor:{gradientUnits:"objectBoundingBox",color:m+x+m+x+r+x+l,alpha:c+x+c+x+c+x+c,angle:-72,ratio:"0,8,15,77"}},n.frontOuter={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:e,alpha:D,angle:0,ratio:"0,20,15,15,50"}},n.backOuter={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,
y2:0,color:u,alpha:A,angle:0,ratio:"0,62,8,8,22"}},n.frontInner={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:v,alpha:A,angle:0,ratio:"0,25,5,5,65"}},n.backInner={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:q,alpha:D,angle:0,ratio:"0,62,8,8,22"}},n.topBorder={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:h,alpha:B,angle:0,ratio:"0,20,15,15,50"}},n.topInnerBorder={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:h,alpha:B,angle:0,ratio:"0,50,15,15,20"}},n.bottom=
R(I(a,b)),n.startSlice=R(I(f,c)),n.endSlice=R(I(f,c)));if(n.cx!==G||n.cy!==P||n.rx!==aa||n.radiusYFactor!==K||n.innerRx!==fa)ra&&(n.top.FCcolor.cx=G,n.top.FCcolor.cy=P,n.top.FCcolor.r=aa,n.top.FCcolor.fx=G-.3*aa,n.top.FCcolor.fy=P+1.2*N),n.topBorder.FCcolor.x1=n.backOuter.FCcolor.x1=n.frontOuter.FCcolor.x1=J,n.topBorder.FCcolor.x2=n.backOuter.FCcolor.x2=n.frontOuter.FCcolor.x2=sb,n.topInnerBorder.FCcolor.x1=n.backInner.FCcolor.x1=n.frontInner.FCcolor.x1=z,n.topInnerBorder.FCcolor.x2=n.backInner.FCcolor.x2=
n.frontInner.FCcolor.x2=y,n.cx=G,n.cy=P,n.rx=aa,n.radiusYFactor=K,n.innerRx=fa;return n},rotate:function(a){var c=this.pointElemStore,b=0,f=c.length,l;if(!this.hasOnePoint){for(;b<f;b+=1)l=c[b],l=l._confObject,l.start+=a,l.end+=a,this._setSliceShape(l);this.refreshDrawing()}},removeSlice:function(a){var c=this.pointElemStore,b=a._confObject.elements,f=this.slicingWallsArr,l;l=c.length;var e;for(--l;0<=l;--l)e=c[l],e===a&&c.splice(l,1);l=f.length;for(--l;0<=l;--l)c=f[l],c!==b.startSlice&&c!==b.frontOuter1&&
c!==b.frontOuter&&c!==b.backInner&&c!==b.endSlice||f.splice(l,1);a.hide&&a.hide();this._slicePool||(this._slicePool=[]);this._slicePool.push(a);this.refreshDrawing()},useSliceFromPool:function(){var a=this._slicePool||(this._slicePool=[]),c=this.slicingWallsArr,b=!1;a.length&&(b=a.shift(),this.pointElemStore.push(b),b.show(),a=b._confObject.elements,c.push(a.startSlice,a.frontOuter1,a.frontOuter),a.backInner&&c.push(a.backInner),c.push(a.endSlice));return b},refreshDrawing:function(){var a=function(a,
d){return a._conf.index-d._conf.index||a._conf.cIndex-d._conf.cIndex||a._conf.isStart-d._conf.isStart||a._conf.si-d._conf.si};return function(){var c=this.slicingWallsArr,b=0,h,l=c.length,e,k,p,r,w=this.slicingWallsFrontGroup,u=this.slicingWallsBackGroup;c.sort(a);a:{var F=c[0]&&c[0]._conf.index,t,q;r=F<=m;e=1;for(h=c.length;e<h;e+=1)if(q=c[e]._conf.index,t=q<=m,t!=r||q<F)break a;e=0}for(;b<l;b+=1,e+=1)e===l&&(e=0),h=c[e],r=h._conf.index,r<f?w.appendChild(h):r<=m?(k?h.insertBefore(k):w.appendChild(h),
k=h):r<=v?(p?h.insertBefore(p):u.appendChild(h),p=h):u.appendChild(h)}}(),_setSliceShape:function(a,c){var b=this.getArcPath,h=a.start,l=a.end,e=fa(h),k=fa(l),p,r,w,u,F,t,n,C,D,A,B,x,K,I,P,G,Z,aa=this.isDoughnut,N=a.radiusYFactor,J=a.cx,y=a.cy,z=a.r,H=z*N,S=z+(ra?-1:2),O=H+(ra?-1:2),W=a.innerR||0,E=W*N,T=this.depth,Q=T+y,X=J+z,R=J-z,ga=J+W,U=J-W,ha=y-H,ja=["M",U,ha,"L",U,Q+H,"Z"],N=a.elements,M,ea,V,ka,ia,da="path",ma=(e+k)/2,la=e>k;r=pa(e);w=va(e);u=pa(k);F=va(k);t=J+z*r;n=y+H*w;C=J+S*r;D=y+O*w;
M=n+T;ea=J+z*u;V=y+H*F;A=J+S*u;B=y+O*F;ka=V+T;aa?(x=J+W*r,K=y+E*w,G=K+T,I=J+W*u,P=y+E*F,Z=P+T,a.startSlice=["M",t,n,"L",t,M,x,G,x,K,"Z"],a.endSlice=["M",ea,V,"L",ea,ka,I,Z,I,P,"Z"]):(a.startSlice=["M",t,n,"L",t,M,J,Q,J,y,"Z"],a.endSlice=["M",ea,V,"L",ea,ka,J,Q,J,y,"Z"]);ra?(p=(e>k?q:0)+k-e,a.clipTopPath=aa?[["M",t,n,"A",z,H,0,p>m?1:0,1,ea,V,"L",I,P,"A",W,E,0,p>m?1:0,0,x,K,"Z"]]:[["M",t,n,"A",z,H,0,p>m?1:0,1,ea,V,"L",J,y,"Z"]],a.clipOuterFrontPath1=[ja],a.clipTopBorderPath=[["M",C,D,"A",S,O,0,p>m?
1:0,1,A,B,"L",ea,V,ea,V+1,"A",z,H,0,p>m?1:0,0,t,n+1,"L",t,n,"Z"]],h!=l?e>k?e<m?(a.clipOuterFrontPath=[["M",X,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,X,y+T,"Z"]],a.clipOuterFrontPath1=[["M",R,y,"A",z,H,0,0,0,t,n,"v",T,"A",z,H,0,0,1,R,y+T,"Z"]],a.clipOuterBackPath=[["M",X,y,"A",z,H,0,1,0,R,y,"v",T,"A",z,H,0,1,1,X,y+T,"Z"]],aa&&(a.clipInnerBackPath=[["M",ga,y,"A",W,E,0,1,0,U,y,"v",T,"A",W,E,0,1,1,ga,y+T,"Z"]],a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,ga,y+T,"Z","M",U,y,"A",
W,E,0,0,0,x,K,"v",T,"A",W,E,0,0,1,U,y+T,"Z"]])):k>m?(a.clipOuterFrontPath=[["M",X,y,"A",z,H,0,1,1,R,y,"v",T,"A",z,H,0,1,0,X,y+T,"Z"]],a.clipOuterBackPath=[["M",R,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,R,y+T,"Z","M",X,y,"A",z,H,0,0,0,t,n,"v",T,"A",z,H,0,0,1,X,y+T,"Z"]],aa&&(a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,1,1,U,y,"v",T,"A",W,E,0,1,0,ga,y+T,"Z"]],a.clipInnerBackPath=[["M",U,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,U,y+T,"Z","M",ga,y,"A",W,E,0,0,0,x,K,"v",T,"A",W,E,0,0,1,ga,y+T,"Z"]])):(a.clipOuterFrontPath=
[["M",X,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,X,y+T,"Z"]],a.clipOuterBackPath=[["M",t,n,"A",z,H,0,0,1,X,y,"v",T,"A",z,H,0,0,0,t,M,"Z"]],aa&&(a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,ga,y+T,"Z"]],a.clipInnerBackPath=[["M",x,K,"A",W,E,0,0,1,ga,y,"v",T,"A",W,E,0,0,0,x,G,"Z"]])):e<m?k>m?(a.clipOuterFrontPath=[["M",t,n,"A",z,H,0,0,1,R,y,"v",T,"A",z,H,0,0,0,t,M,"Z"]],a.clipOuterBackPath=[["M",R,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,R,y+T,"Z"]],aa&&(a.clipInnerFrontPath=
[["M",x,K,"A",W,E,0,0,1,U,y,"v",T,"A",W,E,0,0,0,x,G,"Z"]],a.clipInnerBackPath=[["M",U,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,U,y+T,"Z"]])):(a.clipOuterFrontPath=[["M",t,n,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,t,M,"Z"]],a.clipOuterBackPath=[ja],aa&&(a.clipInnerFrontPath=[["M",x,K,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,x,G,"Z"]],a.clipInnerBackPath=[ja])):(a.clipOuterFrontPath=[ja],a.clipOuterBackPath=[["M",t,n,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,t,M,"Z"]],aa&&(a.clipInnerFrontPath=[ja],a.clipInnerBackPath=
[["M",x,K,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,x,G,"Z"]])):a.clipOuterFrontPath=a.clipOuterBackPath=a.clipInnerBackPath=a.clipInnerFrontPath=[ja],da="litepath",a.clipBottomBorderPath=a.clipTopPath,a.startSlice=[a.startSlice],a.endSlice=[a.endSlice]):(S=this.moveCmdArr,O=this.lineCmdArr,r=this.closeCmdArr,T=[J,y],w=[R,y],ha=[J,ha],u=[X,y],F=[J,y+H],ja=[R,Q],ia=[X,Q],C=[U,y],D=[ga,y],A=[U,Q],B=[ga,Q],a.clipOuterFrontPath1=[],h!=l?(e>k?e<m?(h=b(J,y,t,n,R,y,z,H,1,0),l=b(J,y,R,y,X,y,z,H,1,0),V=b(J,y,
X,y,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat(w,l,O,ia,b(J,Q,X,Q,R,Q,z,H,0,0),r),a.clipOuterFrontPath1=S.concat([t,n],h,O,ja,b(J,Q,R,Q,t,M,z,H,0,0),r),a.clipOuterFrontPath=S.concat(u,V,O,[ea,ka],b(J,Q,ea,ka,X,Q,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l,V),aa?(z=b(J,y,I,P,ga,y,W,E,0,0),H=b(J,y,ga,y,U,y,W,E,0,0),K=b(J,y,U,y,x,K,W,E,0,0),a.clipInnerBackPath=S.concat(D,H,O,A,b(J,Q,U,Q,ga,Q,W,E,1,0),r),a.clipInnerFrontPath=S.concat(C,K,O,[x,G],b(J,Q,x,G,U,Q,W,E,1,0),r,S,[I,P],z,O,B,b(J,Q,ga,
Q,I,Z,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,K,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H,K)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):k>m?(h=b(J,y,t,n,X,y,z,H,1,0),l=b(J,y,X,y,R,y,z,H,1,0),V=b(J,y,R,y,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat(u,l,O,ja,b(J,Q,R,Q,X,Q,z,H,0,0),r),a.clipOuterBackPath=S.concat([t,n],h,O,ia,b(J,Q,X,Q,t,M,z,H,0,0),r,S,w,V,O,[ea,ka],b(J,Q,ea,ka,R,Q,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l,V),aa?(z=b(J,y,I,
P,U,y,W,E,0,0),H=b(J,y,U,y,ga,y,W,E,0,0),K=b(J,y,ga,y,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat(C,H,O,B,b(J,Q,ga,Q,U,Q,W,E,1,0),r),a.clipInnerBackPath=S.concat(D,K,O,[x,G],b(J,Q,x,G,ga,Q,W,E,1,0),r,S,[I,P],z,O,A,b(J,Q,U,Q,I,Z,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,K,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H,K)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,X,y,z,H,1,0),l=b(J,y,X,y,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat(u,l,O,[ea,
ka],b(J,Q,ea,ka,X,Q,z,H,0,0),r),a.clipOuterBackPath=S.concat([t,n],h,O,ia,b(J,Q,X,Q,t,M,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l),aa?(z=b(J,y,I,P,ga,y,W,E,0,0),H=b(J,y,ga,y,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat([I,P],z,O,B,b(J,Q,ga,Q,I,Z,W,E,1,0),r),a.clipInnerBackPath=S.concat(D,H,O,[x,G],b(J,Q,x,G,ga,Q,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):e<
m?k>m?(h=b(J,y,t,n,R,y,z,H,1,0),l=b(J,y,R,y,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat(w,l,O,[ea,ka],b(J,Q,ea,ka,R,Q,z,H,0,0),r),a.clipOuterFrontPath=S.concat([t,n],h,O,ja,b(J,Q,R,Q,t,M,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l),aa?(z=b(J,y,I,P,U,y,W,E,0,0),H=b(J,y,U,y,x,K,W,E,0,0),a.clipInnerBackPath=S.concat([I,P],z,O,A,b(J,Q,U,Q,I,Z,W,E,1,0),r),a.clipInnerFrontPath=S.concat(C,H,O,[x,G],b(J,Q,x,G,U,Q,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,r),a.clipTopBorderPath=
a.clipTopBorderPath.concat(S,[I,P],z,H)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat([t,n]),a.clipTopBorderPath=a.clipOuterBackPath.concat(h),a.clipOuterFrontPath=a.clipTopBorderPath.concat(O,[ea,ka],b(J,Q,ea,ka,t,M,z,H,0,0),r),aa?(z=b(J,y,I,P,x,K,W,E,0,0),a.clipInnerBackPath=S.concat([I,P]),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z),a.clipInnerFrontPath=a.clipInnerBackPath.concat(z,
O,[x,G],b(J,Q,x,G,I,Z,W,E,1,0),r)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat([t,n]),a.clipTopBorderPath=a.clipOuterFrontPath.concat(h),a.clipOuterBackPath=a.clipTopBorderPath.concat(O,[ea,ka],b(J,Q,ea,ka,t,M,z,H,0,0),r),aa?(z=b(J,y,I,P,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat([I,P]),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(a.clipInnerFrontPath,z),a.clipInnerBackPath=a.clipInnerFrontPath.concat(z,
O,[x,G],b(J,Q,x,G,I,Z,W,E,1,0),r)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)),h=S.concat(w,O,u),z=S.concat(ha,O,F),a.clipTopPath=a.clipTopPath.concat(h,z),a.clipOuterFrontPath=a.clipOuterFrontPath.concat(h),a.clipOuterFrontPath1=a.clipOuterFrontPath1.concat(h),a.clipOuterBackPath=a.clipOuterBackPath.concat(h),aa&&(z=S.concat(C,O,D),a.clipInnerFrontPath=a.clipInnerFrontPath.concat(z),a.clipInnerBackPath=a.clipInnerBackPath.concat(z))):(a.clipTopPath=a.clipOuterFrontPath=a.clipOuterBackPath=[],
aa&&(a.clipInnerFrontPath=a.clipInnerBackPath=[])),a.clipBottomBorderPath=a.clipTopBorderPath);c||(N.startSlice._conf.index=e,N.endSlice._conf.index=k,N.backOuter._conf.index=x=la&&(e<=v||k>v)||e<=v&&k>v?v:e>m?e:k,N.frontOuter._conf.index=b=k<=f?k:e>k||e<=f?f:e,N.frontOuter1._conf.index=e,N.frontOuter1._conf.cIndex=m,e>k?(N.backOuter._conf.cIndex=e<v?v:q,N.startSlice._conf.cIndex=e<m?(e+m)/2:(e+q)/2,N.endSlice._conf.cIndex=N.frontOuter._conf.cIndex=0):N.backOuter._conf.cIndex=N.startSlice._conf.cIndex=
N.endSlice._conf.cIndex=N.frontOuter._conf.cIndex=ma,p>m?N.frontOuter1.show().attr(da,a.clipOuterFrontPath1):N.frontOuter1.hide(),a.thisElement._attr(da,a.clipTopPath),N.bottom.attr(da,a.clipTopPath),N.bottomBorder.attr(da,a.clipBottomBorderPath),N.topBorder&&N.topBorder.attr(da,a.clipTopBorderPath),N.frontOuter.attr(da,a.clipOuterFrontPath),N.backOuter.attr(da,a.clipOuterBackPath),aa&&(N.backInner.attr(da,a.clipInnerBackPath),N.frontInner.attr(da,a.clipInnerFrontPath),N.backInner._conf.index=x,N.frontInner._conf.index=
b,e>k?(N.backInner._conf.cIndex=q,N.frontInner._conf.cIndex=0):N.backInner._conf.cIndex=N.frontInner._conf.cIndex=ma),this.hasOnePoint?(N.startSlice.hide(),N.endSlice.hide()):(N.startSlice.attr(da,a.startSlice).show(),N.endSlice.attr(da,a.endSlice).show()))},_setSliceCosmetics:function(a){var b=a.thisElement,c=a.showBorderEffect,f=a.elements,h=I(a.borderColor,ia(a.borderAlpha,a.alpha)),e=a.borderWidth,k;a.color&&(a=this._parseSliceColor(a.color,a.alpha,a),ra?(k={fill:R(a.top),"stroke-width":0},c?
f.topBorder.show().attr({fill:R(a.topBorder),"stroke-width":0}):(f.topBorder.hide(),k.stroke=h,k["stroke-width"]=e),b._attr(k)):(b._attr({fill:R(a.top),"stroke-width":0}),f.topBorder.attr({stroke:h,"stroke-width":e})),f.bottom.attr({fill:R(a.bottom)}),f.bottomBorder.attr({stroke:h,"stroke-width":e}),f.frontOuter.attr({fill:R(a.frontOuter)}),f.frontOuter1.attr({fill:R(a.frontOuter)}),f.backOuter.attr({fill:R(a.backOuter)}),f.startSlice.attr({fill:R(a.startSlice),stroke:h,"stroke-width":e}),f.endSlice.attr({fill:R(a.endSlice),
stroke:h,"stroke-width":e}),this.isDoughnut&&(f.frontInner.attr({fill:R(a.frontInner)}),f.backInner.attr({fill:R(a.backInner)})))},createSlice:function(){var a={stroke:!0,strokeWidth:!0,"stroke-width":!0,dashstyle:!0,"stroke-dasharray":!0,translateX:!0,translateY:!0,"stroke-opacity":!0,fill:!0,opacity:!0,transform:!0,ishot:!0,cursor:!0,start:!0,end:!0,color:!0,alpha:!0,borderColor:!0,borderAlpha:!0,borderWidth:!0,rolloverProps:!0,showBorderEffect:!0,positionIndex:!0,cx:!0,cy:!0,radiusYFactor:!0,r:!0,
innerR:!0},b=function(b,c){var e,f,g=this,h=g._confObject,k={},l=h.elements,r,m,w,n=h.Pie3DManager,p;"string"===typeof b&&void 0!==c&&null!==c&&(e=b,b={},b[e]=c);if(b&&"string"!==typeof b){for(e in b)if(f=b[e],a[e])if(h[e]=f,"ishot"===e||"cursor"===e||"transform"===e)k[e]=f,p=!0;else if("start"===e||"end"===e||"cx"===e||"cy"===e||"radiusYFactor"===e||"r"===e||"innerR"===e)m=!0;else{if("color"===e||"alpha"===e||"borderColor"===e||"borderAlpha"===e||"borderWidth"===e)w=!0}else g._attr(e,f);m&&(n._setSliceShape(h),
n.refreshDrawing());(w||m)&&n._setSliceCosmetics(h);if(p){for(r in l)l[r].attr(k);g._attr(k)}}else g=a[b]?h[b]:g._attr(b);return g},c=function(a,b){var c=this._confObject.elements,e;for(e in c)c[e].on(a,b);return this._on(a,b)},f=function(a,b,c){var e,d=this._confObject.elements,f=-1<Da.navigator.userAgent.toLowerCase().indexOf("android");for(e in d)f?"topBorder"!==e&&"frontOuter"!==e&&"startSlice"!==e&&"endSlice"!==e||d[e].drag(a,b,c):d[e].drag(a,b,c);return this._drag(a,b,c)},h=function(){var a=
this._confObject.elements,b;for(b in a)a[b].hide();return this._hide()},e=function(){var a=this._confObject.elements,b;for(b in a)a[b].show();return this._show()},k=function(){var a=this._confObject,b=a.elements,c;for(c in b)b[c].destroy();ra&&(a.clipTop.destroy(),a.clipOuterFront.destroy(),a.clipOuterBack.destroy(),a.clipOuterFront1&&a.clipOuterFront1.destroy(),a.clipInnerFront&&a.clipInnerFront.destroy(),a.clipInnerBack&&a.clipInnerBack.destroy());return this._destroy()},m=function(a){var b=this._confObject.elements,
c;for(c in b)b[c].tooltip(a);return this._tooltip(a)},r=function(a,b){var c=this._confObject.elements,e;if(void 0===b)return this._data(a);for(e in c)c[e].data(a,b);return this._data(a,b)},w=0;return function(){var a=this.renderer,d,t={elements:{},Pie3DManager:this},n=this.slicingWallsArr,p=t.elements,q=ra?"litepath":"path";d=a[q](this.topGroup);d._confObject=t;t.thisElement=d;d._destroy=d.destroy;d.destroy=k;d._show=d.show;d.show=e;d._hide=d.hide;d.hide=h;d._on=d.on;d.on=c;d._drag=d.drag;d.drag=
f;d._attr=d.attr;d.attr=b;d._tooltip=d.tooltip;d.tooltip=m;d._data=d.data;d.data=r;this.pointElemStore.push(d);p.topBorder=a[q](this.topGroup);p.bottom=a[q](this.bottomBorderGroup).attr({"stroke-width":0});p.bottomBorder=a[q](this.bottomBorderGroup);p.frontOuter=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});p.backOuter=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});p.startSlice=a[q](this.slicingWallsFrontGroup);p.endSlice=a[q](this.slicingWallsFrontGroup);p.frontOuter1=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});
p.frontOuter._conf={si:w,isStart:.5};p.frontOuter1._conf={si:w,isStart:.5};p.startSlice._conf={si:w,isStart:0};p.endSlice._conf={si:w,isStart:1};p.backOuter._conf={si:w,isStart:.4};n.push(p.startSlice,p.frontOuter1,p.frontOuter,p.backOuter,p.endSlice);this.isDoughnut&&(p.frontInner=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0}),p.backInner=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0}),p.backInner._conf={si:w,isStart:.5},p.frontInner._conf={si:w,isStart:.4},n.push(p.frontInner,
p.backInner));w+=1;return d}}()};la.prototype.constructor=la},[3,2,2,"sr4"]]);FusionCharts.register("module",["private","modules.renderer.js-zoomline",function(){var ua=this,fa=ua.hcLib,na=fa.hashify,la=ua.window,ha=la.document,U=la.Image,Ha=la.MouseEvent,Da=/msie/i.test(la.navigator.userAgent)&&!la.opera,ma=fa.chartAPI,oa=fa.extend2,Ma=fa.addEvent,sa=fa.pluck,G=fa.pluckNumber,Qa=fa.getFirstColor,za=fa.graphics.convertColor,ia=fa.bindSelectionEvent,Ya=fa.parseUnsafeString,Ua=fa.componentDispose,R=
fa.Raphael,ra=fa.toRaphaelColor,Na=fa.hasTouch,Za=fa.plotEventHandler,eb=fa.getMouseCoordinate,Ia=!/fusioncharts\.com$/i.test(la.location.hostname),Ga="rgba(192,192,192,"+(Da?.002:1E-6)+")",wa=Math,Ea=wa.ceil,xa=wa.floor,va=wa.round,pa=wa.max,La=wa.min,qa=wa.cos,Aa=wa.sin,Ba=la.parseFloat,Fa=la.parseInt,ta;oa(fa.eventList,{zoomed:"FC_Zoomed",pinned:"FC_Pinned",resetzoomchart:"FC_ResetZoomChart"});ma("zoomline",{standaloneInit:!0,canvasborderthickness:1,defaultDatasetType:"zoomline",applicableDSList:{zoomline:!0},
friendlyName:"Zoomable and Panable Multi-series Line Chart",creditLabel:Ia,_drawAxis:function(){var a=this.components.yAxis||[],b,c;b=0;for(c=a.length;b<c;b++)a[b].draw()},_setCategories:function(){var a=this.config,b=this.jsonData,c=this.components.xAxis,h,m,f;m=a.cdmchar;var q=b.categories&&b.categories[0].category||[];if((a.cdm||"string"===typeof q)&&q.split){a=q.split(m);h=[];m=0;for(f=a.length;m<f;m+=1)h.push({label:a[m]});this.config.categories=b.categories[0].category=h}c[0].setAxisPadding(0,
0);c[0].setCategory(h||q)},_createDatasets:function(){var a,b,c,h,m,f,q,v,A;m={};var n=this.config;a=this.components;v=this.jsonData;var C=v.dataset,p=C&&C.length,I=n.cdmchar,K=n.cdm,B=this.defaultDatasetType,k=this.applicableDSList,n=this.components.legend.components.items||[];v=v.categories&&v.categories[0].category;C&&v||this.setChartMessage();this.config.categories=v;v=a.dataset||(a.dataset=[]);A=v.length;for(a=0;a<p;a++){q=C[a];if(K&&q.data&&q.data.split){f=q.data.split(I);h=[];b=0;for(c=f.length;b<
c;b++)h.push({value:f[b]});q.data=h}b=q.parentyaxis||"";b=(b=this.isDual&&"s"===b.toLowerCase()?sa(q.renderas,this.sDefaultDatasetType):sa(q.renderas,B))&&b.toLowerCase();k[b]||(b=B);if(c=FusionCharts.get("component",["dataset",b]))void 0===m[b]?m[b]=0:m[b]++,(b=v[a])?(c=(b.JSONData.data||[]).length,h=(q.data||[]).length,c>h&&b.removeData(h,c-h,!1),v[a].JSONData=q,v[a].configure(),v[a]._deleteGridImages&&v[a]._deleteGridImages()):(b=new c,v.push(b),b.chart=this,b.index=a,b.init(q))}if(A>p){m=A-p;
b=a;for(p=m+a;b<p;b++)Ua.call(v[b]);v.splice(a,m);n.splice(a,m)}},isWithinCanvas:function(a,b){var c=fa.getMouseCoordinate(b.get("linkedItems","container"),a),h=c.chartX,m=c.chartY,f=b.get("config"),q=f.canvasLeft,v=f.canvasTop,A=f.canvasLeft+f.canvasWidth,f=f.canvasHeight+f.canvasTop;c.insideCanvas=!1;c.originalEvent=a;h>q&&h<A&&m>v&&m<f&&(c.insideCanvas=!0);return c},highlightPoint:function(a,b,c,h,m,f){var q=this,v=q.config,A=q.components,n=q.graphics,C=A.paper,p=n.tracker,I=(A=A.dataset[m])&&
A.config;m=A&&I.zoomedRadius||0;var K=A&&I.hoverCosmetics,A=K&&K.fill,I=K&&K.borderColor,K=K&&K.borderThickness,B={},B=function(a){fa.plotEventHandler.call(this,q,a)},k=function(a){fa.plotEventHandler.call(this,q,a,"dataplotRollover")},x=function(a){fa.plotEventHandler.call(this,q,a,"dataplotRollout")};p||(p=n.tracker=C.circle(0,0,0,n.trackerGroup).attr({"clip-rect":v.canvasLeft+","+v.canvasTop+","+v.canvasWidth+","+v.canvasHeight}).click(B).trackTooltip(!0).hover(k,x));h&&p.data("eventArgs",{x:h.x,
y:h.y,tooltip:h.tooltip,link:h.link});v.lastHoveredPoint=h;B=Number(a)?{r:m,fill:A,stroke:I,"stroke-width":K}:{r:m,fill:Ga,stroke:Ga,"stroke-width":0};p.attr(B).tooltip(f).transform("t"+(b+v.canvasLeft)+","+(c+v.canvasTop));h&&q.fireMouseEvent("mouseover",p&&p.node,v.lastMouseEvent)},fireMouseEvent:function(a,b,c){var h;b&&a&&(c||(c={}),c.originalEvent&&(c=c.originalEvent),c.touches&&(c=c.touches[0]),b.dispatchEvent?(Ha?h=new Ha(a,{bubbles:!!c.bubbles,cancelable:!!c.cancelable,clientX:c.clientX||
c.pageX&&c.pageX-ha.body.scrollLeft-ha.documentElement.scrollLeft||0,clientY:c.clientY||c.pageY&&c.pageY-ha.body.scrollTop-ha.documentElement.scrollTop||0,screenX:c.screenX||0,screenY:c.screenY||0,pageX:c.pageX||0,pageY:c.pageY||0}):ha.createEvent&&(h=ha.createEvent("HTMLEvents"),h.initEvent(a,!!c.bubbles,!!c.cancelable)),h.eventName=a,h&&b.dispatchEvent(h)):ha.createEventObject&&b.fireEvent&&(h=ha.createEventObject(),h.eventType=a,h.eventName=a,b.fireEvent("on"+a,h)))},configure:function(){var a,
b=this.jsonData.chart||{},c=this.components.colorManager,h=c.getColor("canvasBorderColor"),m;b.animation=0;b.showvalues=0;ma.msline.configure.call(this);m=this.config;a=m.style;oa(m,{useRoundEdges:G(b.useroundedges,0),animation:!1,zoomType:"x",canvasPadding:G(b.canvaspadding,0),scrollColor:Qa(sa(b.scrollcolor,c.getColor("altHGridColor"))),scrollShowButtons:!!G(b.scrollshowbuttons,1),scrollHeight:G(b.scrollheight,16)||16,scrollBarFlat:G(b.flatscrollbars,0),allowPinMode:G(b.allowpinmode,1),skipOverlapPoints:G(b.skipoverlappoints,
1),showToolBarButtonTooltext:G(b.showtoolbarbuttontooltext,1),btnResetChartTooltext:sa(b.btnresetcharttooltext,"Reset Chart"),btnZoomOutTooltext:sa(b.btnzoomouttooltext,"Zoom out one level"),btnSwitchToZoomModeTooltext:sa(b.btnswitchtozoommodetooltext,"<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"),btnSwitchToPinModeTooltext:sa(b.btnswitchtopinmodetooltext,"<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"),
pinPaneFill:za(sa(b.pinpanebgcolor,h),G(b.pinpanebgalpha,15)),zoomPaneFill:za(sa(b.zoompanebgcolor,"#b9d5f1"),G(b.zoompanebgalpha,30)),zoomPaneStroke:za(sa(b.zoompanebordercolor,"#3399ff"),G(b.zoompaneborderalpha,80)),showPeakData:G(b.showpeakdata,0),maxPeakDataLimit:G(b.maxpeakdatalimit,b.maxpeaklimit,null),minPeakDataLimit:G(b.minpeakdatalimit,b.minpeaklimit,null),crossline:{enabled:G(b.showcrossline,1),line:{"stroke-width":G(b.crosslinethickness,1),stroke:Qa(sa(b.crosslinecolor,"#000000")),"stroke-opacity":G(b.crosslinealpha,
20)/100},labelEnabled:G(b.showcrosslinelabel,b.showcrossline,1),labelstyle:{fontSize:Ba(b.crosslinelabelsize)?Ba(b.crosslinelabelsize)+"px":a.outCanfontSize,fontFamily:sa(b.crosslinelabelfont,a.outCanfontFamily)},valueEnabled:G(b.showcrosslinevalues,b.showcrossline,1),valuestyle:{fontSize:Ba(b.crosslinevaluesize)?Ba(b.crosslinevaluesize)+"px":a.inCanfontSize,fontFamily:sa(b.crosslinevaluefont,a.inCanvasStyle.fontFamily)}},useCrossline:G(b.usecrossline,1),tooltipSepChar:sa(b.tooltipsepchar,", "),showTerminalValidData:G(b.showterminalvaliddata,
0),cdmchar:sa(b.dataseparator,"|"),cdm:G(b.compactdatamode,0)})},getValuePixel:function(a){var b=this.config.viewPortConfig;return b.ddsi+xa(a/b.ppp)},__toolbar:function(){var a,b,c,h,m=this,f=m.components,q=f.tb=new (FusionCharts.register("component",["toolbox","toolbox"])),v=q.getDefaultConfiguration(),A,n;q.init({iAPI:{chart:m},graphics:m.graphics,chart:m,components:f});a=f.toolBoxAPI||q.getAPIInstances(q.ALIGNMENT_HORIZONTAL);b=a.SymbolStore;c=a.ComponentGroup;h=a.Toolbar;A=a.Symbol;n=a.Scroller;
q.graphics={};return{reInit:function(){q.init({iAPI:{chart:m},graphics:m.graphics,chart:m,components:f})},addSymbol:function(a,b,c,f){a=new A(a);c&&f.setConfiguaration({buttons:oa(oa({},v),c)});b.tooltext=c.tooltip;b&&a.attachEventHandlers(b);f.addSymbol(a);return a},addScroll:function(a,b){var c=new n(a);b&&c.attachEventHandlers(b);return c},addComponentGroup:function(a,b){var f;f=new c;f.setConfiguaration({group:{fill:b?b.fill:za("EBEBEB",0),borderThickness:b?G(b.borderThickness,0):0}});return f},
addToolBox:function(a){var b,c=new h;for(b=0;b<a.length;b+=1)c.addComponent(a[b]);return c},setDrawingArea:function(a,b){a.drawingArea=b;return a},draw:function(a){var b,c,f;for(b=0;b<a.length;b+=1)c=a[b],f=c.drawingArea,c.draw(f.x,f.y)},registerSymbol:function(a,c){b.register(a,c)},getLogicalSpace:function(a){return a.getLogicalSpace()},getNode:function(a){return a.node}}},__preDraw:function(){var a,b,c,h,m,f,q,v,A,n,C=this,p=C.components,I=p.paper,K=C.graphics;b=K.imageContainer;var B=C.config,
k=B.canvasLeft,x=B.canvasWidth;a=C.jsonData.chart;var aa=B.cdm;c=p.xAxis[0];var N=B.viewPortConfig,D=C.components.canvas.config,Z=pa(D.canvasPadding,D.canvasPaddingLeft,D.canvasPaddingRight);n=p.yAxis[0];v=K.datasetGroup;var D=B.canvasHeight,X=B.canvasTop,d=C.jsonData.chart,d=B.borderWidth||(B.borderWidth=G(d.showborder,1)?G(d.borderthickness,1):0),L=B.allowPinMode,g=B.crossline,N=c.getCategoryLen(),U=Fa(G(a.displaystartindex,1),10)-1,l=Fa(G(a.displayendindex,N||2),10)-1,e=0,ba=p.dataset,fa=ba.length,
p=K.crossline;B.updateAnimDuration=500;b.transform("t"+k+","+X);b.attr({"clip-rect":k+","+X+","+x+","+D});B.status="zoom";B.maxZoomLimit=G(a.maxzoomlimit,1E3);B.viewPortHistory=[];1>(b=G(a.pixelsperpoint,15))&&(b=1);(c=G(a.pixelsperlabel,a.xaxisminlabelwidth,c.getAxisConfig("labels").rotation?20:60))<b&&(c=b);(0>U||U>=(N-1||1))&&(U=0);(l<=U||l>(N-1||1))&&(l=N-1||1);N=B.viewPortConfig=oa(B.viewPortConfig,{amrd:G(a.anchorminrenderdistance,20),nvl:G(a.numvisiblelabels,0),cdm:aa,oppp:b,oppl:c,dsi:U,dei:l,
vdl:l-U,clen:N,offset:0,step:1,llen:0,alen:0,ddsi:U,ddei:l,ppc:0});if(N.clen){for(;fa--;)a=ba[fa].config,e=pa(e,a.drawanchors&&(a.anchorradius||0)+(Number(a.anchorborderthickness)||0)||0);B.overFlowingMarkerWidth=e;Z=B.canvasPadding=pa(e,Z);B._prezoomed=N.dei-N.dsi<N.clen-1;h=B._visw=B.canvasWidth-2*Z;m=B._visx=B.canvasLeft+Z;B._visout=-(B.height+D+1E3);B._ypvr=n&&n.getPVR()||0;a=B._yminValue=n.getLimit().min;f=B._ymin=n.getPixel(a);n=v.attr("clip-rect",[m-e,X,h+2*e,D]);K.scroll||(K.scroll=I.group("scroll").insertAfter(K.datasetGroup));
L&&(v=R.crispBound(0,X-f,0,D,d),q=B["clip-pinrect"]=[v.x,X,v.width,v.height],A=(K.zoompin=I.group("zoompin")).insertBefore(n).transform(B._pingrouptransform=["T",m,f]).hide(),K.pinrect=I.rect(0,X-f,h,D,A).attr({"stroke-width":0,stroke:"none",fill:B.pinPaneFill,"shape-rendering":"crisp",ishot:!0}),K.pintracker=I.rect(K.trackerGroup).attr({transform:A.transform(),x:0,y:X-f,width:0,height:D,stroke:"none",fill:Ga,ishot:!0,cursor:R.svg&&"ew-resize"||"e-resize"}).hide().drag(function(a){var b=m+a+this.__pindragdelta,
c=this.__pinboundleft,e=this.__pinboundright,d=this.data("cliprect").slice(0);b<c?b=c:b>e&&(b=e);A.transform(["T",b,f]);K.pintracker.transform(A.transform());R.svg||(d[0]=d[0]+b-m-this.__pindragdelta,A.attr("clip-rect",d));this.__pindragoffset=a},function(){this.__pinboundleft=0-q[0]+m+k;this.__pinboundright=this.__pinboundleft+h-q[2];this.data("cliprect",A.attr("clip-rect"));A._.clipispath=!0},function(){A._.clipispath=!1;this.__pindragdelta=this.__pindragoffset;delete this.__pindragoffset;delete this.__pinboundleft;
delete this.__pinboundright}));d++;v=R.crispBound(k-d,X+D+d,x+d+d,B.scrollHeight,d);d--;ia(C,{attr:{stroke:B.zoomPaneStroke,fill:B.zoomPaneFill,strokeWidth:0},selectionStart:function(){},selectionEnd:function(a){var b=a.selectionLeft-k;a=b+a.selectionWidth;K.crossline&&K.crossline.hide();C[B.viewPortConfig.pinned?"pinRangePixels":"zoomRangePixels"](b,a)}});g&&0!==g.enabled&&1===B.useCrossline?(p||(p=K.crossline=new ta),p.configure(C,g)):(g&&(g.enabled=0),p&&p.hide())}},resetZoom:function(){var a=
this.config.viewPortHistory,b=a[0];if(!a.length)return!1;a.length=0;this.zoomTo(b.dsi,b.dei,b)&&ua.raiseEvent("zoomReset",this._zoomargs,this.chartInstance,[this.chartInstance.id]);return!0},eiMethods:{zoomOut:function(){var a;if(a=this.apiInstance)return a.zoomOut&&a.zoomOut()},zoomTo:function(a,b){var c;if(c=this.apiInstance)return c.zoomRange&&c.zoomRange(a,b)},resetChart:function(){var a;if(a=this.apiInstance)a.pinRangePixels&&a.pinRangePixels(),a.resetZoom&&a.resetZoom()},setZoomMode:function(a){var b;
(b=this.apiInstance)&&b.activatePin&&b.activatePin(!a)},getViewStartIndex:function(){var a;if(this.apiInstance&&(a=this.apiInstance.config.viewPortConfig))return a.ddsi},getViewEndIndex:function(){var a,b;if(this.apiInstance&&(a=this.apiInstance.config.viewPortConfig))return b=a.ddei-1,(b>=a.clen?a.clen:b)-1}},zoomOut:function(){var a,b,c=this.config;b=c.viewPortHistory;var h,m,f;a=b.pop();b=b[0]||c.viewPortConfig;a?(h=a.dsi,m=a.dei):c._prezoomed&&(h=0,m=b.clen-1);(f=this.zoomTo(h,m,a))&&ua.raiseEvent("zoomedout",
f,this.chartInstance);return!0},zoomRangePixels:function(a,b){var c=this.config,h=c.viewPortHistory,c=c.viewPortConfig,m=c.ppp,f=c.ddsi,q;h.push(c);(q=this.zoomTo(f+xa(a/m),f+xa(b/m)))?ua.raiseEvent("zoomedin",q,this.chartInstance):h.pop()},zoomRange:function(a,b){var c,h,m=this.config,f=m.viewPortConfig;h=this.components.xAxis[0];var q=m.viewPortHistory,v;q.push(f);c=h.getPixel(a);h=h.getPixel(b);f.x=c;f.scaleX=m.canvasWidth/(c-h);(v=this.zoomTo(+a,+b))?ua.raiseEvent("zoomedin",v,this.chartInstance):
q.pop()},zoomTo:function(a,b,c){var h,m;h=this.config;var f=this.components,q=h.viewPortConfig,v=h.canvasHeight;m=h.canvasLeft;var A=h.canvasTop,n=h.canvasBottom,C=h.viewPortHistory,p=q.clen,I=this.components.xAxis[0];0>a&&(a=0);a>=p-1&&(a=p-1);b<=a&&(b=a+1);b>p-1&&(b=p-1);if(a===b||a===q.dsi&&b===q.dei)return!1;this.pinRangePixels();q=oa({},q);q.dsi=a;q.dei=b;q=h.viewPortConfig=q;c?this.updateVisual(c.x,c.y,c.scaleX,c.scaleY):(c=I.getPixel(a),h=I.getPixel(b),m=this.getOriginalPositions(c-m,A,h-m,
n-A),this.zoomSelection(m[0],0,m[2],v));f.scrollBar.node.attr({"scroll-ratio":q.vdl/(p-!!p),"scroll-position":[q.dsi/(p-q.vdl-1),!0]});f={level:C.length+1,startIndex:a,startLabel:I.getLabel(a).label,endIndex:b,endLabel:I.getLabel(b).label};ua.raiseEvent("zoomed",f,this.chartInstance,[this.chartInstance.id,a,b,f.startLabel,f.endLabel,f.level]);return f},activatePin:function(a){var b=this.config.viewPortConfig,c=this.components.tb.graphics.pinButton;if(b.pinned^(a=!!a))return a||this.pinRangePixels(),
ua.raiseEvent("zoomModeChanged",{pinModeActive:a},this.chartInstance,[]),this.updateButtonVisual(c.node,a?"pressed":"enable"),b.pinned=a},updateButtonVisual:function(a,b){return a.attr({disable:{config:{hover:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3",cursor:"default"},normal:{fill:"#FFFFFF",stroke:"#E3E3E3","stroke-width":1,cursor:"default"},disable:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3","stroke-opacity":1,cursor:"default"},pressed:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3",
cursor:"default"}},"button-disabled":!1,stroke:"#E3E3E3","stroke-opacity":1},enable:{config:{hover:{fill:"#FFFFFF","stroke-width":1,stroke:"#aaaaaa",cursor:"pointer"},normal:{fill:"#FFFFFF",stroke:"#C2C2C2","stroke-width":1,cursor:"pointer"},disable:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3","stroke-opacity":1,cursor:"pointer"},pressed:{fill:"#EFEFEF","stroke-width":1,stroke:"#C2C2C2",cursor:"pointer"}},"button-disabled":!1,fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0],stroke:"#C2C2C2",
"stroke-opacity":1},pressed:{config:{pressed:{fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0]}},fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0],stroke:"#E3E3E3"}}[b])},pinRangePixels:function(a,b){var c,h=this.components,m=h.paper,f=this.graphics,q=this.config,v=q.canvasLeft,A=q.viewPortConfig,n=f.zoompin;c=f.pinrect;var C=q["clip-pinrect"],p=q._pingrouptransform,h=h.dataset,I=b-a,K,B,k,f=f.pintracker;if(A&&n&&c){if(a===b)return n.hide(),f.hide(),A.pinned=!1;for(k=h.length;k--;)K=h[k],c=K.graphics,
B=c.pinline,B||(B=c.pinline=m.path(n)),B.attr({path:c.lineElement.attrs.path,transform:["T",-q._visx,-q._ymin]}).attr(K.config.pin);C[0]=a+v;C[2]=I;n.attr({"clip-rect":C,transform:p}).show();f.__pindragdelta=0;f.show().attr({transform:p,x:a,width:I});this.getValuePixel(a);this.getValuePixel(b);return A.pinned=!0}},_createLayers:function(){var a,b=this.components.paper;ma.scatter._createLayers.call(this);a=this.graphics;a.imageContainer=b.group("dataset-orphan",a.dataSetGroup);this.__preDraw();this.toogleDragPan(!0)},
getValue:function(a){var b=this.config,c=this.components,h=b.viewPortConfig;a=this.getOriginalPositions(a.x,a.y,a.x,a.y);var m=c.xAxis[0].config.axisRange,c=c.yAxis[0].config.axisRange,f=m.min,q=c.max;return{x:f+(a[0]-b.canvasLeft)/(b.canvasWidth*h.scaleX/(m.max-f)),y:q-(a[1]-b.canvasTop)/(b.canvasHeight*h.scaleY/(q-c.min))}},getOriginalPositions:function(a,b,c,h){var m=this.config,f=m.viewPortConfig,q=f.scaleX,v=f.scaleY,A=f.x,f=f.y,n=La(a,c);a=pa(a,c);c=La(b,h);b=pa(b,h);a=a>m.canvasWidth?m.canvasWidth:
a;b=b>m.canvasHeight?m.canvasHeight:b;n=0>n?0:n;c=0>c?0:c;return[A+n/q,f+c/v,(a-n)/q,(b-c)/v]},zoomSelection:function(a,b,c,h){var m=this.config;c&&h&&(c=Math.abs(m.canvasWidth/c),h=Math.abs(m.canvasHeight/h),this.updateVisual(a,b,c,h))},updateVisual:function(a,b,c,h,m){var f=this.config,q=f.viewPortConfig,v=f.canvasWidth,A=f.canvasHeight,n=f.viewPortHistory.slice(-1)[0]||q,f=f.maxZoomLimit;q.x=isNaN(a)?a=n.x:a;q.y=isNaN(b)?b=n.y:b;q.scaleX=c||(c=n.scaleX);q.scaleY=h||(h=n.scaleY);c>f&&(q.x=La(a,
v-v/f),q.scaleX=f);h>f&&(q.y=La(b,A-A/f),q.scaleY=f);this.updateManager(m)},toogleDragPan:function(a){var b=this.config.viewPortConfig,c=b.status;a&&(b.status="zoom"===c?"pan":"zoom")},resize:function(){var a=this.config,b=this.graphics,c=this.components.canvas,h=c.graphics,m=h.canvasBorderElement,h=h.canvasElement,c=c.config.canvasBorderThickness,f=c/2,q=a.canvasHeight-=c,v=a.canvasWidth-=2*c,A=a.canvasLeft+=c;a.canvasBottom-=c;a.canvasRight-=c;h?h.attr({x:A,y:a.canvasTop,height:q,width:v}):this.drawCanvas();
m&&m.attr({x:A-f,y:a.canvasTop-f,height:q+c,width:v+c,"stroke-width":c});b.imageContainer.attr({"clip-rect":a.canvasLeft+","+a.canvasTop+","+a.canvasWidth+","+a.canvasHeight}).transform("t"+a.canvasLeft+","+a.canvasTop);b.trackerElem.attr({x:a.canvasLeft,y:a.canvasTop,width:a.canvasWidth,height:a.canvasHeight});b.tracker&&b.tracker.attr({"clip-rect":a.canvasLeft+","+a.canvasTop+","+a.canvasWidth+","+a.canvasHeight})},updateManager:function(a){var b,c;c=this.components;var h=c.dataset,m=h.length;b=
this.config;var f=b.viewPortConfig,q=b._ypvr,v=b._visw,A=this.components.xAxis[0],n=function(){return A.getPixel.apply(A,arguments)},C=A.getAxisConfig("labels").style,p,I,K,B,k,x=this.updateButtonVisual,G=c.tb.graphics,N=G.zoomOutButton,G=G.resetButton,D=b.viewPortHistory;if(b.legendClicked)for(a=0;a<m;a+=1)h[a].draw();else{!f&&(f=b.viewPortConfig);p=f.oppp;k=K=f.nvl;I=f.dsi;K=f.dei;I=f.vdl=K-I;K=f.ppl=k?v/k:f.oppl;v=f.step=(B=f.ppp=v/I)<p?Ea(p/B):1;C=f.lskip=Ea(pa(K,Ba(C.lineHeight))/B/v);void 0!==
a?(p=(f.clen-I-1)*a,f.offset=(p-(p=Fa(p)))*B,I=p+I):(p=f.dsi,I=f.dei,f.offset=0);B=f.norm=p%v;f.ddsi=p-=B;f.ddei=I=I+2*v-B;f.pvr=q;f._ymin=b._ymin;f._yminValue=b._yminValue;f.x=(n(p)-n(A.getLimit().min)+f.offset)/f.scaleX;I-p>A.getCategoryLen()?f.scaleX=1:f.scaleX=A.getCategoryLen()/Math.abs(I-p-v-.9);void 0!==a&&c.scrollBar.node&&c.scrollBar.node.attr({"scroll-position":f._pos=a});c=A._getVisibleConfig();c=Math.ceil((c.maxValue-c.minValue+1)/k);b=b.viewPortConfig&&b.viewPortConfig.scaleX;b=Math.max(Math.round(A.getAxisConfig("labelStep")/
b),k?c:C*v);A.setLabelConfig({step:b});b=A.getAxisConfig("animateAxis");k=A.getAxisConfig("drawAxisName");a&&A.setAxisConfig({animateAxis:!1,drawAxisName:!1});A.draw();A.setAxisConfig({animateAxis:b,drawAxisName:k});for(a=0;a<m;a+=1)h[a].draw();x(N.node,f.vdl===f.clen-1?"disable":"enable");x(G.node,0<D.length?"enable":"disable");la.FC_DEV_ENVIRONMENT&&la.jQuery&&(FusionCharts["debugger"].enable()?(this.debug=this.debug||(la.jQuery("#fc-zoominfo").length||la.jQuery("body").append('<pre id="fc-zoominfo">'),
la.jQuery("#fc-zoominfo").css({position:"absolute",left:"10px",top:"0","pointer-events":"none",opacity:.7,width:"250px",zIndex:"999",border:"1px solid #cccccc","box-shadow":"1px 1px 3px #cccccc",background:"#ffffff"})),this.debug.text(JSON.stringify(f,0,2))):(this.debug&&la.jQuery("#fc-zoominfo").remove(),delete this.debug))}},_drawDataset:function(){ma.zoomline.updateManager.call(this)},getParsedLabel:function(a){var b=this.xlabels;return b.parsed[a]||(b.parsed[a]=Ya(b.data[a]||""))},_createToolBox:function(){var a,
b,c,h,m,f,q,v=this,A=v.config;q=A.allowPinMode;h=v.components;var n=A.showToolBarButtonTooltext;a=h.chartMenuBar;b=h.actionBar;a&&a.drawn||b&&b.drawn||(ma.scrollcolumn2d._createToolBox.call(v),a=h.tb,b=a.graphics||(a.graphics={}),c=h.toolBoxAPI||a.getAPIInstances(a.ALIGNMENT_HORIZONTAL),c=c.Symbol,h=(h.chartMenuBar||h.actionBar).componentGroups[0],m=b.zoomOutButton=(new c("zoomOutIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.zoomOut()},tooltext:n&&A.btnZoomOutTooltext||
""}),f=b.resetButton=(new c("resetIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.resetZoom()},tooltext:n&&A.btnResetChartTooltext||""}),q&&(q=b.pinButton=(new c("pinModeIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.activatePin(!A.viewPortConfig.pinned)},tooltext:n&&A.btnSwitchToPinModeTooltext||""}),h.addSymbol(q,!0)),h.addSymbol(f,!0),h.addSymbol(m,!0))},_scrollBar:ma.scrollcolumn2d,_manageScrollerPosition:ma.scrollcolumn2d,draw:function(){var a,
b,c,h,m,f,q,v,A,n,C=this,p=C.config,I=C.graphics||(C.graphics={});f=C.components;a=C.jsonData;h=a.dataset;var K=a.categories&&a.categories[0].category,B;ma.msline.draw.call(C);q=p.canvasLeft;v=p.canvasTop;A=p.canvasHeight;n=p.canvasWidth;a=p.borderWidth;b=p.useRoundEdges;c=p.viewPortConfig;(B=I.toolboxParentGroup)||(B=I.toolboxParentGroup=f.paper.group("toolbarParentGroup",I.parentGroup));h&&K&&(a++,h=R.crispBound(q-a,v+A+a,n+a+a,p.scrollHeight,a),a--,f=(m=f.scrollBar)&&m.node,m.draw(h.x+(b&&-1||
a%2),h.y-(b&&4||2),{isHorizontal:!0,width:h.width-(!b&&2||0),height:h.height,showButtons:p.scrollShowButtons,scrollRatio:c.vdl/(c.clen-!!c.clen),scrollPosition:[c.dsi/(c.clen-c.vdl-1),!1],r:b&&2||0,parentLayer:B.insertBefore(I.datalabelsGroup)}),!f&&function(){var a;R.eve.on("raphael.scroll.start."+m.node.id,function(b){a=b;C.graphics.crossline&&C.graphics.crossline.disable(!0);ua.raiseEvent("scrollstart",{scrollPosition:b},C.chartInstance)});R.eve.on("raphael.scroll.end."+m.node.id,function(b){C.graphics.crossline&&
C.graphics.crossline.disable(!1);ua.raiseEvent("scrollend",{prevScrollPosition:a,scrollPosition:b},C.chartInstance)})}())}},ma.msline,{showValues:0,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0});ma("zoomlinedy",{standaloneInit:!0,defaultDatasetType:"zoomline",applicableDSList:{zoomline:!0},creditLabel:Ia,friendlyName:"Zoomable and Panable Multi-series Dual-axis Line Chart",_spaceManager:ma.msdybasecartesian._spaceManager,_setAxisLimits:ma.msdybasecartesian._setAxisLimits,_createAxes:ma.msdybasecartesian._createAxes,
_feedAxesRawData:ma.msdybasecartesian._feedAxesRawData},ma.zoomline,{isdual:!0});FusionCharts.register("component",["dataset","zoomline",{_setConfigure:function(){var a=this.config,b=this.chart.jsonData.chart,c=this.JSONData;a.drawanchors=G(b.drawanchors,b.showanchors,1);a.anchorradius=G(c.anchorradius,b.anchorradius,a.linethickness+2);this.__base__._setConfigure.apply(this,arguments)},configure:function(){var a,b,c={};a=this.chart.jsonData.chart;a.animation=0;a.showvalues=G(a.showvalues,0);this.__base__.configure.call(this);
b=this.config;a=b.linethickness+G(a.pinlinethicknessdelta,1);c["stroke-width"]=0<a&&a||0;c["stroke-dasharray"]=[3,2];c.stroke=fa.hashify(b.linecolor);c["stroke-opacity"]=b.alpha/100;c["stroke-linejoin"]=b["stroke-linejoin"]="round";c["stroke-linecap"]=b["stroke-linecap"]="round";b.pin=c;b.animation=!1;b.transposeanimduration=0},draw:function(){var a,b,c,h=!1,m=!1,f=this,q=f.JSONData,v=f.chart,A=v.components,n=f.config,C=f.index||f.positionIndex,p=v.config,I=v.jsonData.chart,K=f.components,B=K.data,
k=B.length,x,aa=A.paper,N=A.xAxis[0],D=f.yAxis,Z,X,d=v.graphics,L=d.datalabelsGroup,g=fa.parseUnsafeString,R=fa.getValidValue,l,e,ba,ha,r,w,u,F,t,ia,ma=n.linethickness,la=f.graphics.container,oa=f.graphics.trackerContainer,ta=function(a){Za.call(this,v,a)},ua=function(a){var b=this.data("dataObj");b.config.hoverEffects&&b&&b.graphics&&b.graphics.element&&f._hoverPlotAnchor(b,"DataPlotRollOver",I);Za.call(this,v,a,"DataPlotRollOver")},va=function(a){var b=this.data("dataObj");b.config.hoverEffects&&
b&&b.graphics&&b.graphics.element&&f._hoverPlotAnchor(b,"DataPlotRollOut",I);Za.call(this,v,a,"DataPlotRollOut")},wa=p.viewPortConfig,P=p.showtooltip,xa,qa=d.datasetGroup,na,za=n.shadow,J,y=f.graphics.dataLabelContainer,z={},H,S,O=v.is3D,W=n.use3dlineshift,E,T,Q,Aa=D.getAxisBase(),Ba=D.yBasePos=D.getAxisPosition(Aa),ga=N.getAxisPosition(0),Da=N.getAxisPosition(1)-ga,Ea,ja=O?10:0,M=O&&W?10:0,ea=[pa(0,p.canvasLeft-ja),pa(0,p.canvasTop-M),pa(1,p.canvasWidth+2*ja),pa(1,p.canvasHeight+M)],V=[pa(0,p.canvasLeft-
ja),pa(0,p.canvasTop-M),1,pa(1,p.canvasHeight+2*M)],ka={},Ha=v.hasScroll||!1,da,Fa=n.lineDashStyle,Ia={color:n.linecolor,alpha:n.alpha};[ra(Ia),Fa].join(":");var Ma,Na,Qa,Va=f.graphics.lineElement,Wa=f.visible,Ya,Ua,ya=f.pool||(f.pool={element:[]}),jb={},Y={},ca={},kb=n.anchorradius,lb,fb=[],mb,Ca,ab,bb,gb,hb,tb=p.showTerminalValidData,Xa=p.viewPortConfig,ub=p.showPeakData,nb=p.maxPeakDataLimit,ob=p.minPeakDataLimit,pb=G(p.useCrossline,0),Oa=Xa.step,ib=N.getPixel(Xa.step)-ga<Xa.amrd,qb=function(b,
c){var d=b.graphics;S=b.config;r=S.setValue;ha=S.setLink;Ya=S.x||c;T=R(g(sa(S.setLevelTooltext,q.plottooltext,I.plottooltext)));E=S.showValue;z=S.anchorProps;J=z.shadow;u=S.displayValue;Ua=S.dip||0;b||(b=B[c]={graphics:{}});Qa={color:S.color,alpha:S.alpha};Q=S.dashStyle;Z=S.xPos||N.getAxisPosition(Ya)-ja;X=f.visible?D.getAxisPosition(r)+M:Ba;na=S.hoverEffects;z.isAnchorHoverRadius=na.anchorRadius;lb=N.getLabel(c);l=pb?"":S.toolText+(T?"":S.toolTipValue);w={index:c,link:ha,value:r,displayValue:u,categoryLabel:lb,
toolText:l,id:n.userID,datasetIndex:C,datasetName:q.seriesname,visible:Wa};null===S.setValue||ib||(z.imageUrl?(H=new U,H.onload=f._onAnchorImageLoad(f,c,w,Z,X),H.onerror=f._onErrorSetter(Z,X,c,f),H.src=z.imageUrl):(e=d.element,e||(e=ya.element&&ya.element.length?d.element=ya.element.shift():d.element=aa.polypath(la.anchorGroup)),e.attr({polypath:[z.symbol[1]||2,Z,X,z.radius,z.startAngle,Ua],fill:ra({color:z.bgColor,alpha:z.bgAlpha}),stroke:ra({color:z.borderColor,alpha:z.borderAlpha}),"stroke-width":z.borderThickness,
visibility:z.radius?Wa:"hidden"}).shadow(J,la.anchorShadowGroup).data("anchorRadius",z.radius).data("anchorHoverRadius",na.anchorRadius).data("setRolloverAttr",ia).data("setRolloutAttr",t),e[r||0===r?"show":"hide"]()),ia={polypath:[na.anchorSides||2,Z,X,na.anchorRadius,na.startAngle,na.dip],fill:ra({color:na.anchorColor,alpha:na.anchorBgAlpha}),stroke:ra({color:na.anchorBorderColor,alpha:na.anchorBorderAlpha}),"stroke-width":na.anchorBorderThickness},t={polypath:[z.sides,Z,X,z.radius,z.startAngle,
Ua],fill:ra({color:z.bgColor,alpha:z.bgAlpha}),stroke:ra({color:z.borderColor,alpha:z.borderAlpha}),"stroke-width":z.borderThickness},e&&e.data("anchorRadius",z.radius).data("anchorHoverRadius",na.anchorRadius).data("setRolloverAttr",ia).data("setRolloutAttr",t),kb=pa(z.radius,na&&na.anchorRadius||0),xa={cx:Z,cy:X,r:kb,cursor:ha?"pointer":"",stroke:Ga,"stroke-width":z.borderThickness,fill:Ga,ishot:!0,visibility:Wa},z.imageUrl||!ha&&!P||(ba=d.hotElement,ba||(ya.hotElement&&ya.hotElement.length?ba=
d.hotElement=ya.hotElement.shift():(a=!0,ba=d.hotElement=aa.circle(oa))),ba.show().attr(xa),(ba||e).data("eventArgs",w).data("groupId",void 0).data("dataObj",b),a&&(ba||e).click(ta).hover(ua,va),a=!1));b._xPos=Z;b._yPos=X;[ra(Qa||Ia),Q||Fa].join(":");ca=f.getLinePath([b],ca);Ma=ra(Qa||Ia);Na=Q||Fa;sa(S.setColor,S.setAlpha,S.setDashed);[Ma,Na].join(":");E&&!z.imageUrl&&f.drawLabel(c);fb.push(b)},vb=function(a,b){var c=a&&a.length,d=a.slice().sort(function(a,b){return a.config.setValue-b.config.setValue}),
f=d&&d.pop().config.setValue,g=d.length&&d.shift().config.setValue||f,d=0;if(f>nb||g<ob)for(;d<c;){e=a[d];f=e.config.setValue;if(f>nb||f<ob)f=b+d,qb(e,f);d+=1}},cb=function(a,c){--a;c+=1;var d;for(x=a;x<c;x+=1)for(d in b=B[x]&&B[x].graphics||{},B[x]&&(B[x].config.isRemoving=!0),b)ya[d]||(ya[d]=[]),b[d]&&(ya[d].push(b[d].hide()),b[d]=void 0)},db=wa.ddsi||0,Pa=wa.ddei||k,Sa=n._oldStartIndex,Ta=n._oldEndIndex,wb=n._oldStep,rb=K.removeDataArr,xb=rb&&rb.length;qa.line=qa.line||aa.group("line",qa);qa.lineConnector=
qa.lineConnector||aa.group("line-connector",qa);la||(la=f.graphics.container={lineShadowGroup:aa.group("connector-shadow",qa.line),anchorShadowGroup:aa.group("anchor-shadow",qa.lineConnector),lineGroup:aa.group("line",qa.line),anchorGroup:aa.group("anchors",qa.lineConnector)},la.lineGroup.trackTooltip(!0),Wa||(la.lineShadowGroup.hide(),la.anchorShadowGroup.hide(),la.lineGroup.hide(),la.anchorGroup.hide()));oa||(oa=f.graphics.trackerContainer=aa.group("line-hot",d.trackerGroup).toBack(),Wa||oa.hide());
B||(B=f.components.data=[]);y||(y=f.graphics.dataLabelContainer=f.graphics.dataLabelContainer||aa.group("datalabel",L),Wa||y.hide());Ea=Da*k;ib&&!n._oldHideAnchors?cb(Sa,Ta):Oa!==wb?cb(Sa,Ta):(db>Sa&&cb(Sa,db>Ta?Ta:db),Pa<Ta&&cb(Pa<Sa?Sa:Pa,Ta),(db<Sa||Pa>Ta)&&cb(Sa,Ta));n._oldHideAnchors=ib;n._oldEndIndex=Pa;n._oldStep=Oa;f.setVisibility(Wa);for(x=n._oldStartIndex=db;x<=Pa;x+=Oa){F=B[x]||{};S=F.config||{};S.isRemoving=!1;r=S.setValue||null;ab=x;if(tb)if(0===x&&null===r){mb=0;for(Ca=c=x;Ca<k;)if(null!==
B[Ca].config.setValue||h?h=!0:Ca++,null===B[c].config.setValue&&!m&&c<=k?(c+=Oa,mb++):m=!0,h&&m){h=m=!1;break}0!==Ca%Oa&&(S=B[Ca].config,ab=Ca)}else if(x>=k&&null===r){for(Ca=c=x;0<Ca&&(void 0!==B[Ca]||h?h=!0:Ca--,void 0===B[c]&&!m&&0<=c?c-=Oa:m=!0,!h||!m););0!==Ca%Oa&&(S=B[Ca].config,ab=Ca)}if(F=B[ab])qb(F,ab),ub&&1<Oa&&(bb=La(x+1,Pa),hb=La(bb+Oa,Pa),gb=hb===Pa?B.slice(bb):B.slice(bb,hb),gb.length&&vb(gb,bb))}Y=f.getLinePath(fb,{});jb=f.getLinePath(fb,jb);n.lastPath=Y;Va||(Va=ya.lineElement&&ya.lineElement.length?
f.graphics.lineElement=ya.lineElement.shift():f.graphics.lineElement=aa.path(la.lineGroup));pb||Va.tooltipListenerAttached||(Va.tooltipListenerAttached=!0,Va.mousemove(function(a){Xa=p.viewPortConfig;var b=p._visx,c=Xa.step,d=Xa.ppp*c,b=eb(v.linkedItems.container,a).chartX-b,e;a=p.tooltipSepChar;b=(b+=d/2+Xa.offset)-b%d;e=(e=v.getValuePixel(b))+e%c;c=N.getLabel(e).label+a+f.components.data[e].config.formatedVal;c=n.seriesname&&n.seriesname+a+c||c;Va.tooltip(0===p.crossline.enabled?c:!1)}));Va.attr({path:Y.getPathArr(),
"stroke-dasharray":Fa,"stroke-width":ma,stroke:ra(Ia),"stroke-linecap":"round","stroke-linejoin":2<=ma?"round":"miter"}).shadow(za,la.lineShadowGroup);Ha&&(da=ka.startPercent,ea[2]=Ea+V[0],1===da&&(V[0]=ea[2],ea[0]=0));ea[3]+=M;f.drawn=!0;xb&&f.remove()},setVisibility:function(a,b){var c=this.graphics,h=c&&c.container,m=c&&c.trackerContainer,c=c&&c.dataLabelContainer,f=a?"show":"hide";h.lineGroup[f]();h.anchorGroup[f]();h.anchorShadowGroup[f]();h.lineShadowGroup[f]();m[f]();c[f]();b&&this.transposeLimits(a)},
transposeLimits:function(a){var b=this.chart,c=b.config,h=this.yAxis;b._chartAnimation();this.visible=a;this._conatinerHidden=!a;b._setAxisLimits();h.draw();c.legendClicked=!0;b._drawDataset();delete c.legendClicked},hide:function(){this.setVisibility(!1,!0)},show:function(){this.setVisibility(!0,!0)}},"Line"]);ta=function(){};ta.prototype.configure=function(a,b){var c,h,m,f={},q=this,v=a.components,A=v.numberFormatter,n=v.paper,C=a.config;c=a.graphics;h=this.left=C._visx;m=this.top=C.canvasTop;var p=
this.height=C.canvasHeight,I=this._visout=C._visout,K=this.plots=a.components.dataset,B=c.datalabelsGroup,k,x,G=b.labelstyle,N=b.valuestyle,D=v.yAxis[0],Z=D.getLimit(),X=v.yAxis[1],d=X&&X.getLimit();x=this.tracker;var v=this.labels,L=this.positionLabel;k=a.get("linkedItems");var g=k.container,R=k.eventListeners||(k.eventListeners=[]);q.width=C._visw;k=this.group;k||(k=this.group=n.group("crossline-labels",B),this.container=g);k.attr({transform:["T",h,C._ymin]}).css(N);x||(x=q.tracker=g,R.push(Ma(g,
"touchstart mousemove",function(b){var c=q.onMouseMove,d=q.onMouseOut;a.isWithinCanvas(b,a).insideCanvas?c.call(q,b):d.call(q,b)},q)),R.push(Ma(g,"mousedown",function(){q.onMouseDown()},q)),R.push(Ma(g,"mouseup",function(){q.onMouseUp()},q)),R.push(Ma(g,"mouseout",function(){q.onMouseOut()},q)));x=this.line;x||(x=this.line=n.path(B).toBack());x.attr(oa({path:["M",h,m,"l",0,p]},b.line));v||(v=this.labels=b.valueEnabled&&n.set());b.labelEnabled?(f.x=I,f.y=m+p+(C.scrollHeight||0)+2.5,f["vertical-align"]=
"top",f.direction=C.textDirection,f.text="",L?(L.attr(f),L.css(G)):L=this.positionLabel=n.text(f,G,c.datalabelsGroup).insertBefore(c.datasetGroup)):(L&&L.remove(),delete this.positionLabel);this.hide();this.ppixelRatio=-D.getPVR();this.spixelRatio=X&&-X.getPVR();this.yminValue=C._yminValue;this.pyaxisminvalue=Z.min;this.pyaxismaxvalue=Z.max;this.syaxisminvalue=d&&d.min;this.syaxismaxvalue=d&&d.max;this.positionLabels=C.xlabels||{data:[],parsed:[]};this.chart=a;this.getZoomInfo=function(){return C.viewPortConfig};
this.getDataIndexFromPixel=function(b){return Math.round(a.components.xAxis[0].getValue(b))};this.getPositionLabel=function(b){return(b=a.components.xAxis[0].getLabel(b))&&b.label||""};if(b.valueEnabled){c=0;for(h=K.length;c<h;c+=1)m=K[c],m=na(m.config.linecolor),f.x=0,f.y=I,f.fill=m,f.direction=C.textDirection,f.text="",f["text-bound"]=N["text-bound"],f.lineHeight=N.lineHeight,v[c]?v[c].attr(f):v[c]=v.items[c]=n.text(f,void 0,k);for(;c<v.items.length;c+=1)v[c].remove(),delete v[c],v.items.splice(c,
1);this.numberFormatter=A}else if(v.items&&v.items.length){for(c=0;c<v.items.length;c+=1)v[c].remove(),delete v[c];v.length=0}};ta.prototype.disable=function(a){void 0!==a&&(this.disabled=!!a)&&this.visible&&this.hide();return this.disabled};ta.prototype.onMouseOut=function(){this.hide();this.position=void 0};ta.prototype.onMouseDown=function(){!Na&&this.hide();this._mouseIsDown=!0};ta.prototype.onMouseUp=function(){!Na&&this.hide();delete this._mouseIsDown};ta.prototype.onMouseMove=function(a){if(!(this.disabled||
this._mouseIsDown&&!Na)){var b,c=this.getZoomInfo(),h=this.line,m=this.left,c=c.step,f=this.chart,q=f.components.xAxis[0],f=f.get("config"),v=f.canvasLeft,A=q.getAxisConfig("axisDimention");a=eb(this.container,a).chartX-m;var m=q._getVisibleConfig(),A=A.x-v,n;n=(n=this.getDataIndexFromPixel(va(a)))+((b=n%c)>c/2?c-b:-b);a=q.getPixel(n)-A-v;h.transform(["T",va(a),0]);this.hidden&&0!==f.crossline.enabled&&this.show();(n<m.minValue||n>m.maxValue)&&this.hide();if(n!==this.position||this.hidden)this.position=
n,this.lineX=a,this.updateLabels()}};ta.prototype.updateLabels=function(){var a=this,b=a.labels,c=a.plots,h=a.width,m=a.position,f=a.lineX,q=xa(f),v=a.ppixelRatio,A=a.spixelRatio,n=a.yminValue,C=a._visout,p=a.numberFormatter,I=a.pyaxisminvalue,G=a.pyaxismaxvalue,B=a.syaxisminvalue,k=a.syaxismaxvalue,x=function(){function b(){this.y=0;this.lRef=void 0;this.__index=this.__shift=0}function c(a){for(var b=0;b<a;)this.push(b++);return this}function f(a){var b,c,d,g={},h=Number.POSITIVE_INFINITY;for(b=
0;b<this.length;b++)c=this[b]-a,0>c?d=x.NEG:d=x.POS,c=e(c),c<=h&&(h=c,g.absValue=c,g.noScaleSide=d);return g}function h(a){this.holes=c.call([],a)}var k=-1*a.height,d=n*v,m=0,g,p={},l,e=Math.abs,q=Math.floor,x={};"function"!=typeof Object.create&&(Object.create=function(){function a(){}var b=Object.prototype.hasOwnProperty;return function(c){var d,e,f;if("object"!=typeof c)throw new TypeError("Object prototype may only be an Object or null");a.prototype=c;f=new a;a.prototype=null;if(1<arguments.length)for(e in d=
Object(arguments[1]),d)b.call(d,e)&&(f[e]=d[e]);return f}}());Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c,d,e;if(null==this)throw new TypeError('"this" is null or not defined');d=Object(this);e=d.length>>>0;if(0===e)return-1;c=+b||0;Infinity===Math.abs(c)&&(c=0);if(c>=e)return-1;for(c=Math.max(0<=c?c:e-Math.abs(c),0);c<e;){if(c in d&&d[c]===a)return c;c++}return-1});Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d,e,f,g;if(null==this)throw new TypeError(" this is null or not defined");
e=Object(this);f=e.length>>>0;if("function"!==typeof a)throw new TypeError(a+" is not a function");1<arguments.length&&(c=b);for(d=0;d<f;)d in e&&(g=e[d],a.call(c,g,d,e)),d++});b.prototype.constructor=b;b.prototype.applyShift=function(a){this.__shift=a;this.lRef.calcY=this.y+=a*m};b.prototype.applyDirectIndex=function(a){this.__index=a;this.lRef.calcY=this.y=k-a*m*-1};try{Object.defineProperty(x,"POS",{enumerable:!1,configurable:!1,get:function(){return 1}}),Object.defineProperty(x,"NEG",{enumerable:!1,
configurable:!1,get:function(){return-1}})}catch(r){x.POS=1,x.NEG=-1}h.prototype=Object.create(Array.prototype);h.prototype.constructor=h;h.prototype.repositionHoles=function(){var a,b=0,c;for(a=this.holes.length=0;a<this.length;a++)c=this[a],!c&&(this.holes[b++]=a)};h.prototype.attachShift=function(a,c,d){var e,g=this.length;if(a===C)d.calcY=C;else if(g=c>g-1?g-1:c,e=this[g],c=new b,c.y=a,c.lRef=d,e){a=f.call(this.holes,g);d=g+a.absValue*a.noScaleSide;if(a.noScaleSide===x.POS)return c.applyDirectIndex(d),
this.splice(d,1,c),this.holes.splice(this.holes.indexOf(d),1),d;if(a.noScaleSide===x.NEG){a=this.splice(d+1,this.length-1);this.pop();a.forEach(function(a){a&&a.applyShift(-1)});for([].push.apply(this,a);this[d];)d++;this.push(0);this.repositionHoles();a=f.call(this.holes,d);d+=a.absValue*a.noScaleSide;c.applyDirectIndex(d);this.splice(d,1,c);this.repositionHoles();return this.length-1}}else c.applyDirectIndex(g),this.splice(g,1,c),this.holes.splice(this.holes.indexOf(g),1)};try{Object.defineProperty(p,
"top",{enumerable:!1,configurable:!1,get:function(){return k}}),Object.defineProperty(p,"bottom",{enumerable:!1,configurable:!1,get:function(){return d}})}catch(r){p.top=k,p.bottom=d}p.init=function(a,b){var c;m=a+2;k+=m/2;l=q(e(k)/m);g=new h(l);for(c=0;c<l;c++)g.push(0)};p.occupy=function(a,b){var c=q(e(k-a)/m);g&&g.attachShift(a,c,b)};return p}();b&&(b[0]&&b[0].attr({text:p.yAxis("0")}),b[0]&&x.init(b[0].getBBox().height,b.length),b.forEach(function(a,b){var f=c[b],h=f.components.data[m]&&f.components.data[m].config.setValue,
p=f.config.parentYAxis;x.occupy(void 0===h||!f.visible||(p?h>k||h<B:h>G||h<I)?C:p?(h-B)*A:(h-I)*v,a)}));b&&b.forEach(function(a,b){var k=c[b],n,v;(k=p[k.config.parentYAxis?"sYAxis":"yAxis"](k.components.data[m]&&k.components.data[m].config.setValue))?(a.attr({text:k}),k=(k=(k=(k=a.getBBox())&&k.width)&&.5*k)&&k+10,v=a.calcY,n=pa(0,La(q,h)),void 0!==v&&void 0!==n&&a.attr({x:n,y:v,"text-anchor":f<=k&&"start"||f+k>=h&&"end"||"middle","text-bound":["rgba(255,255,255,0.8)","rgba(0,0,0,0.2)",1,2.5]})):
a.attr({x:-h})});a.positionLabel&&a.positionLabel.attr({x:f+a.left,text:a.getPositionLabel(m),"text-bound":["rgba(255,255,255,1)","rgba(0,0,0,1)",1,2.5]})};ta.prototype.show=function(){this.disabled||(this.hidden=!1,this.group.attr("visibility","visible"),this.line.attr("visibility","visible"),this.positionLabel&&this.positionLabel.attr("visibility","visible"))};ta.prototype.hide=function(){this.hidden=!0;this.group.attr("visibility","hidden");this.line.attr("visibility","hidden");this.positionLabel&&
this.positionLabel.attr("visibility","hidden")};ta.prototype.dispose=function(){for(var a in this)this.hasOwnProperty(a)&&delete this[a]};R.addSymbol({pinModeIcon:function(a,b,c){var h=.5*c,m=a-c,f=a+c,q=a-h,v=a+h,A=a+.5,n=A+1,C=A+1.5,p=b-c,I=b+h,G=b-h,h=b+(c-h);return["M",m,p,"L",q,G,q,h,m,I,a-.5,I,a,b+c+.5,A,I,f,I,v,h,v,G,f,p,C,p,C,G,C,h,n,h,n,G,C,G,C,p,"Z"]},zoomOutIcon:function(a,b,c){a-=.2*c;b-=.2*c;var h=.8*c,m=R.rad(43),f=R.rad(48),q=a+h*qa(m),m=b+h*Aa(m),v=a+h*qa(f),f=b+h*Aa(f),A=R.rad(45),
n=q+c*qa(A),C=m+c*Aa(A),p=v+c*qa(A);c=f+c*Aa(A);return["M",q,m,"A",h,h,0,1,0,v,f,"Z","M",q+1,m+1,"L",n,C,p,c,v+1,f+1,"Z","M",a-2,b,"L",a+2,b,"Z"]},resetIcon:function(a,b,c){var h=a-c,m=(wa.PI/2+wa.PI)/2;a+=c*qa(m);var m=b+c*Aa(m),f=2*c/3;return["M",h,b,"A",c,c,0,1,1,a,m,"L",a+f,m-1,a+2,m+f-.5,a,m]}})}]);Ha&&(na.FusionCharts=FusionCharts);return FusionCharts});

},{}],3:[function(require,module,exports){
/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.11.3
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.11.3
*/
(function(Va,sb){"object"===typeof module&&module.exports?module.exports=Va.document?sb(Va):function(E){if(!E.document)throw Error("Window with document not present");return sb(E,!0)}:Va.FusionCharts=sb(Va,!0)})("undefined"!==typeof window?window:this,function(Va,sb){FusionCharts.register("module",["private","modules.renderer.js-gradientlegend",function(){function E(n,k){(function r(k,n){var w,v;for(v in k)Ea.call(k,v)&&(w=k[v],void 0===n[v]?n[v]=w:"object"===typeof w&&r(w,n[v]))})(n,k);return k}
function t(n){return ca(n?n:Wa)||Wa}function zb(n){var k=n.fontSize+"";if(!k)return n;k=k.replace(/(\d+)(px)*/,"$1px");n.fontSize=k;return n}function Fa(n){return void 0===n||"undefined"===typeof n||null===n||n!==n?!0:!1}function Ba(n,k){this.carpet=n;this._componentPool=k}function bb(n){this.conf=n;this._id="GL_CARPET";this.compositionsByCategory={};this._lSpace=this.group=this.node=void 0;this.autoRecalculate=!1;this.groupName="fc-gradient-legend";this.moveInstructions={}}function Db(){bb.apply(this,
arguments)}function V(n,k){this.rawText=n;this.conf=k;this._id="GL_CAPTION";this._lSpace=this.bound=this.node=void 0}function Ca(n,k,m){this.colorRange=n;this.conf=k;this.childTextConf=m;this._id="GL_BODY";this.bound=void 0;this.compositionsByCategory={};this._lSpace=void 0}function Qa(){Ca.apply(this,arguments)}function Ga(n){this.conf=n;this._id="GL_LABELS"}function tb(){Ga.apply(this,arguments)}function oa(){Ga.apply(this,arguments);this._id="GL_VALUES"}function Ra(){oa.apply(this,arguments);this._id=
"GL_VALUES"}function Ia(n){this.conf=n;this._id="FL_AXIS";this.markerLine=this.shadow=this.node=void 0;this.compositionsByCategory={}}function sa(){Ia.apply(this,arguments)}function La(n){var k={};this._id="GL_SG1";this.conf=n;k.conf=n;this.extremes=[];this.sliders={};k.sliderGroup=this;this.valueRange=[];this.callbacks=[];this.sliders[!1]=new Ja(!1,k,this._id+"_0");this.sliders[!0]=new Ja(!0,k,this._id+"_1")}function Ja(n,k,m){this.conf=k.conf;this.sliderIndex=n;this.rangeGroup=k.sliderGroup;this._id=
m;this.tracker=this.node=void 0;this.currPos=0;this.swing=[]}function Oa(n,k,m){m=m.components.numberFormatter;var r,u,K,w,v,C;this.data=n;this.options=k||{};C=this.mapByPercent=!!n.mapByPercent;this.appender="";u=this.mapByPercent?0:k.min;k=this.mapByPercent?100:k.max;2===n.colorRange.length&&(r=n.colorRange[0],K=n.colorRange[1],w=r.value=Fa(r.value)?u:r.value,v=K.value=Fa(K.value)?k:K.value,w===v&&(w=r.value=u,v=K.value=k),r.displayValue=C?w+"%":m.legendValue(w),K.displayValue=C?v+"%":m.legendValue(v));
Fa(u)&&Fa(r.value)||Fa(k)&&Fa(r.value)||!n.gradient?this._preparationGoneWrong=!0:this._preparationGoneWrong=!1;m=this.colorRange=n.colorRange.sort(function(k,n){return k.value-n.value});this.valueRatio=void 0;this.values=[];n=0;for(r=m.length;n<r;n++)this.values.push(m[n].value)}function gb(){Ba.apply(this,arguments)}var Z=this,xa=Z.hcLib,O=xa.pluckNumber,Xa=xa.pluck,uc=xa.toRaphaelColor,ac=xa.graphics,Ac=xa.dehashify,Ya=xa.hashify,Eb=ac.convertColor,mc=ac.RGBtoHex,Pa=ac.HEXtoRGB,pa=ac.getLightColor,
ca=ac.getValidColor,Qb="rgba(192,192,192,"+(xa.isIE?.002:1E-6)+")",ba,Wa=xa.COLOR_BLACK,Ea={}.hasOwnProperty,kb,eb={};ba=function(){function n(n){var m=k.numberFormatter,r,v,C;r=0;for(v=n.length;r<v;r++)if(C=n[r].maxvalue)n[r].maxvalue=m.getCleanValue(C)}var k,m,r={legendCarpetConf:{spreadFactor:.85,allowDrag:!1,captionAlignment:"center",padding:{v:3,h:3},style:{fill:"#e4d9c1",stroke:"#c4b89d"}},legendCaptionConf:{spreadFactor:.2,padding:{v:2,h:2},style:{fill:"#786B50",fontFamily:"sans-serif",fontSize:"12px",
fontWeight:"bold",fontStyle:"normal"},bound:{style:{stroke:"none"}}},legendBodyConf:{spreadFactor:.8,padding:{v:2,h:2},bound:{style:{stroke:"none"}}}};r.legendAxisConf={legendAxisHeight:11,spreadFactor:.4,padding:{v:1,h:1},style:{stroke:"none","stroke-opacity":0,"stroke-width":1},line:{grooveLength:3,offset:8,style:{stroke:"rgba(255, 255, 255, 0.65)","stroke-width":1.5}},shadow:{style:{stroke:"none",fill:uc({FCcolor:{alpha:"25,0,0",angle:360,color:"000000,FFFFFF,FFFFFF",ratio:"0,30,40"}})}},bound:{style:{stroke:"none"}}};
r.sliderGroupConf={showTooltip:1,outerCircle:{rFactor:1.4,style:{fill:Qb,stroke:"#757575","stroke-width":3}},innerCircle:{rFactor:.65,style:{fill:Qb,stroke:"#FFFFFF"}}};r.axisTextItemConf={spreadFactor:.3,padding:{v:1,h:1},style:{fill:"#786B50",fontFamily:"sans-serif",fontSize:"12px",fontWeight:"normal",fontStyle:"normal"}};return{init:function(n){m=n.chart;k=m.components},setConf:function(k){},legacyDataParser:function(m,r){var w={},v=k.numberFormatter,C,A,B,z,G,E,q,H,h;if(!m)return!1;w.mapByPercent=
h=!!O(m.mapbypercent,0);C=m.color||[];void 0===m.minvalue&&(m.minvalue=void 0!==r.min?h?0:r.min:0);void 0===m.maxvalue&&(m.maxvalue=void 0!==r.max?h?100:r.max:100);E=!1;B=0;for(z=C.length;B<z;B++)if(C[B].maxvalue){E=!0;break}E||(C=[]);B=m.code;E=w.colorRange=[];w.gradient=!!O(m.gradient,1);C.length?B=t(B):(B?(z=t(B),B=t()):(B=t(),z=pa(B,1)),C.push({code:z,maxvalue:m.maxvalue,label:void 0}));n(C);C=C.sort(function(h,q){return h.maxvalue-q.maxvalue});q=H=m.minvalue&&v.getCleanValue(m.minvalue);H=(void 0!==
q||null!==q)&&(h?q+"%":v.legendValue(q));E.push({code:Ac(B),value:q,displayValue:H,label:m.startlabel});B=0;for(z=C.length;B<z;B++)A=C[B],G=t(A.code||A.color),q=H=A.maxvalue,isNaN(parseInt(q,10))||(H=(void 0!==q||null!==q)&&(h?q+"%":v.legendValue(q)),E.push(Object({code:Ac(G),value:q,displayValue:H,label:A.label||A.displayvalue})));E[E.length-1].label=m.endlabel||A.label;return w},getDefaultConf:function(k){return r[k]}}}();kb=function(n){var k=n.chartInstance.id,m=eb[k]||(eb[k]={});return function(){function r(){var k,
n,r,u,w,K;for(k in m)for(n in r=m[k],r)if(u=r[n],u instanceof Array)for(w=0,K=u.length;w<K;w++)u[w]&&u[w].hide();else u.hide()}var u,K={},w;u={KEY_RECT:"rect",KEY_TEXT:"text",KEY_GROUP:"group",KEY_CIRCLE:"circle",KEY_PATH:"path"};K[u.KEY_RECT]=function(k){return w.rect(k)};K[u.KEY_TEXT]=function(k,n){return w.text(k,n)};K[u.KEY_GROUP]=function(k,n){return w.group(k,n)};K[u.KEY_CIRCLE]=function(k){return w.circle(k)};K[u.KEY_PATH]=function(k,n){return w.path(k,n)};return{init:function(k){w=k;r()},
emptyPool:function(){m=eb[k]={}},getChart:function(){return n},getComponent:function(k,n,r){var u=m[k],w,G,t,q=0;u||(u=m[k]={});return(G=u[n])&&!(G instanceof Array)||G instanceof Array&&0<G.length?function(){return r?(t=G[q++])?t.show():G[q]=K[n].apply(this,arguments):G.show()}:function(){return r?(w=u[n]||(u[n]=[]),G=K[n].apply(this,arguments),w.push(G),G.show()):u[n]=K[n].apply(this,arguments)}},hideAll:function(){r()},getKeys:function(){return u}}}()};Ba.prototype.constructor=Ba;Ba.prototype.draw=
function(n){n.componentPool=this._componentPool;return this.carpet.draw(n)};Ba.prototype.getLogicalSpace=function(n,k){n.componentPool=this._componentPool;return this.carpet.getLogicalSpace(n,k)};Ba.prototype.dispose=function(){this.carpet&&this.carpet.group&&this.carpet.group.remove();this._componentPool.emptyPool()};bb.prototype.constructor=bb;bb.prototype.addCompositions=function(n,k){this.compositionsByCategory[k]=n};bb.prototype.getBoundingBox=function(n){var k=this.conf,m=n.refSide,r=n.alignment,
u=n.refOffset,K=n.x,w=n.y,k=k.width=m*k.spreadFactor;!r||void 0!==K&&null!==K||(K=(u+m)/2-k/2);return{width:k,height:n.maxOtherSide,x:K,y:w}};bb.prototype.getPostCalcDecisions=function(n,k){var m=this.conf.padding,r,u=0;for(r in k)u+=k[r].height||0;n.height=u+2*m.v};bb.prototype.getLogicalSpace=function(n,k){var m=this._lSpace,r=this.conf.padding,u=this.compositionsByCategory,K,w,v;v=0;var t={},A,B=0;if(m&&!k)return m.isImpure=!0,m;m=this._lSpace=w=this.getBoundingBox(n);if(Fa(m.x)||Fa(m.y)||Fa(m.height)||
Fa(m.width))this.autoRecalculate=!0;m=E(w,{});m.height-=2*r.v;m.width-=2*r.h;m.x+=r.h;m.y+=r.v;for(A in u)K=u[A],r=E(m,{}),r.y+=v,v=m.height*K.conf.spreadFactor,r.height=v+B,v=K.getLogicalSpace(E(r,{}),n,k),B=r.height-v.height,t[A]=v,v=v.height;this.getPostCalcDecisions(w,t);return this._lSpace=w};bb.prototype.setupDragging=function(){var n=this.group,k=0,m=0,r=0,u=0;n.css({cursor:"move"});n.drag(function(K,w){k=K;m=w;n.attr({transform:"t"+(r+k)+","+(u+m)})},function(){r+=k;u+=m},function(){})};bb.prototype.draw=
function(n){var k=this.conf,m=this.compositionsByCategory,r=n.paper,u=n.parentGroup,K=n.componentPool,w,v,t=K.getChart().get("config","animationObj").duration,A,B=K.getKeys();this.getLogicalSpace(n,this.autoRecalculate);v=this._lSpace;A=K.getComponent(this._id,B.KEY_GROUP);this.group=u=A(this.groupName,u);u.attr({opacity:0});u.animate({opacity:1},t,"easeIn");A=K.getComponent(this._id,B.KEY_RECT);this.node=A(u).attr(v).css(k.style);for(w in m)K=m[w],K.draw(k.captionAlignment,v,{colorRange:n.colorRange,
numberFormatter:n.numberFormatter,paper:r,parentLayer:u,smartLabel:n.smartLabel,moveInstructions:this.moveInstructions[w],componentPool:n.componentPool});k.allowDrag&&this.setupDragging();return this.node};Db.prototype=Object.create(bb.prototype);Db.prototype.constructor=Db;Db.prototype.getBoundingBox=function(n){var k=this.conf,m=n.refSide,r=n.alignment,u=n.refOffset,K=n.x,w=n.y,k=k.height=m*k.spreadFactor;!r||void 0!==w&&null!==w||(w=(u+m)/2-k/2);return{width:n.maxOtherSide,height:k,x:K,y:w}};Db.prototype.getPostCalcDecisions=
function(n,k){var m=this.conf.padding,r=Number.NEGATIVE_INFINITY,u,K,w=this.moveInstructions;bb.prototype.getPostCalcDecisions.apply(this,arguments);for(K in k)u=k[K].width,r=r<u?u:r;n.width=r+2*m.h;for(K in k)if(u=k[K].width,m=r-u)w[K]="t"+m/2+",0"};V.prototype.constructor=V;V.LEFT={x:function(n,k){return k.x+n.width/2+2}};V.RIGHT={x:function(n,k){return k.x+k.width-n.width/2-2}};V.CENTER={x:function(n,k){return k.x+k.width/2}};V.prototype.getLogicalSpace=function(n,k,m){var r=this.conf.padding,
u=this._lSpace,K=this.rawText,w=k.componentPool.getChart();if(u&&!m)return u.isImpure=!0,u;u=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0,smartText:void 0}};m=k.smartLabel;if(!K)return u.bound;k=E(n,{});k.height-=2*r.v;k.width-=2*r.h;k.x+=r.h;k.y+=r.v;m.useEllipsesOnOverflow(w.config.useEllipsesWhenOverflow);w=E(this.conf.style,{});zb(w);m.setStyle(this._metaStyle=w);K=m.getSmartText(K,k.width,k.height);k.height=K.height;k.width=K.width;n.height=K.height+2*r.v;n.width=K.width+2*r.h;
u.node.smartText=K;u.node.logicArea=k;return u.bound=n};V.prototype.draw=function(){var n=this.conf,k,m=n.bound||{},r,u,K,w,v,t,A;3<=arguments.length?(K=arguments[0],w=arguments[1],v=arguments[2]):2<=arguments.length&&(K=arguments[0],v=arguments[1]);k=v.parentLayer;t=v.componentPool;A=t.getKeys();r=t.getComponent(this._id,A.KEY_GROUP);this.group=k=r("legend-caption",k).css(n.style);this.getLogicalSpace(w,v);r=this._lSpace;v=r.node;u=r.bound;r=t.getComponent(this._id,A.KEY_RECT);this.bound=m=r(k).attr(u).css(m.style);
K="string"===typeof K?V[K.toUpperCase()].x(v.smartText,w||v.logicArea):K;r=t.getComponent(this._id,A.KEY_TEXT);this.node=r({},k).attr({text:v.smartText.text,x:K,y:v.logicArea.y+v.smartText.height/2,lineHeight:this._metaStyle.lineHeight,fill:n.style.fill});return{group:k,bound:m,node:this.node}};Ca.SC_STACK=["LEGEND_LABEL","LEGEND_AXIS","AXIS_VALUE"];Ca.DARW_STACK=["AXIS_VALUE","LEGEND_AXIS","LEGEND_LABEL"];Ca.prototype.constructor=Ca;Ca.prototype.addCompositions=function(n,k){this.compositionsByCategory[k]=
n};Ca.prototype.getCompositionPlotAreaFor=function(n){var k;k=E(n,{});return function(m,r){m=m||{};k.y+=m.height||0;k.height=n.height*r;return k}};Ca.prototype.getSpaceTaken=function(n){return n.height};Ca.prototype.updateEffectivePlotArea=function(n,k,m){var r=this.conf.padding;k.height=m;n.height=m+2*r.v};Ca.prototype.getLogicalSpace=function(n,k,m){var r=this._lSpace,u=this.conf.padding,K=this.compositionsByCategory,w,v,t,A=0,B,z;if(r&&!m)return r.isImpure=!0,r;r=this._lSpace={bound:{height:0,
width:0},node:{logicArea:void 0}};v=E(n,{});v.height-=2*u.v;v.width-=2*u.h;v.x+=u.h;v.y+=u.v;t=this.getCompositionPlotAreaFor(v);k.colorRange=this.colorRange;B=0;for(z=Ca.SC_STACK.length;B<z;B++)if(u=K[Ca.SC_STACK[B]])w=t(w,u.conf.spreadFactor),w=u.getLogicalSpace(E(w,{}),k,m),A+=this.getSpaceTaken(w);this.updateEffectivePlotArea(n,v,A);r.node.logicArea=v;return r.bound=n};Ca.prototype.draw=function(){var n=this.childTextConf,k=this.conf.bound.style||{},m=this.compositionsByCategory,r,u,K,w,v,t,A;
3<=arguments.length?(K=arguments[1],v=arguments[2]):2<=arguments.length&&(v=arguments[1]);r=v.parentLayer;w=v.componentPool;t=w.getKeys();this.getLogicalSpace(K,v);K=this._lSpace;A=w.getComponent(this._id,t.KEY_GROUP);n=A("legend-body",r).attr({transform:"t0,0"}).css(n.style);A=w.getComponent(this._id,t.KEY_RECT);this.bound=k=A(n).attr(K.bound).css(k);v.colorRange=this.colorRange;v.parentLayer=n;w=0;for(t=Ca.DARW_STACK.length;w<t;w++)(u=m[Ca.DARW_STACK[w]])&&u.draw(v);v.moveInstructions&&n.attr({transform:v.moveInstructions});
return{bound:k,group:n}};Qa.prototype=Object.create(Ca.prototype);Qa.prototype.constructor=Qa;Qa.prototype.getCompositionPlotAreaFor=function(n){var k;k=E(n,{});return function(m,r){m=m||{};k.x+=m.width||0;k.width=n.width*r;return k}};Qa.prototype.updateEffectivePlotArea=function(n,k,m){var r=this.conf.padding;k.width=m;n.width=m+2*r.h};Qa.prototype.getSpaceTaken=function(n){return n.width};Ga.prototype.constructor=Ga;Ga.prototype.getEffectivePlotArea=function(n){var k=this.conf.padding;n.height-=
2*k.v;n.width-=2*k.h;n.x+=k.h;n.y+=k.v;this.node=[];return n};Ga.prototype.getLogicalSpace=function(n,k,m){var r=this._lSpace,u=this.conf,K=u.padding,w,v,t=[],A,B,z,G,O,q=0,H,h,T;O=k.componentPool.getChart();var Y=[];if(r&&!m)return r.isImpure=!0,r;r=k.colorRange;k=k.smartLabel;m=r.getCumulativeValueRatio();w=r.colorRange;r=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0,smartTexts:[]}};G=r.node.smartTexts;A=E(n,{});A=this.getEffectivePlotArea(A);k.useEllipsesOnOverflow(O.config.useEllipsesWhenOverflow);
u=E(u.style,{});zb(this._metaStyle=u);k.setStyle(u);O=k.getSmartText("W");v=0;for(u=w.length;v<u;v++)(B=w[v].label)?(q++,Y.push({oriIndex:v,label:B})):G[v]=void 0;u=Y.length;if(0===u)return{height:0,width:0};B=z=1<u?(m[Y[u-1].oriIndex]-m[Y[0].oriIndex])/2*A.width/100:Math.max(m[Y[0].oriIndex],100-m[Y[0].oriIndex])/2*A.width/100;q=k.getSmartText(Y[0].label,B,A.height);q.x=m[Y[0].oriIndex]*A.width/100;v=q.x+q.width;t.push(q.height);G[Y[0].oriIndex]=q;q=k.getSmartText(Y[u-1].label,B,A.height);q.x=m[Y[u-
1].oriIndex]*A.width/100;w=q.x-q.width;t.push(q.height);G[Y[u-1].oriIndex]=q;h=v;for(v=1;v<u-1;v++)B=Y[v].label,T=Y[v].oriIndex,q=void 0,z=v+1===u-1?w:m[Y[v+1].oriIndex]*A.width/100,H=m[Y[v].oriIndex]*A.width/100,z=Math.min(H-h,z-H),z>2*O.width&&(q=k.getSmartText(B,z,A.height),q.x=m[T]*A.width/100,h=z,t.push(q.height)),G[Y[v].oriIndex]=q;t=Math.max.apply(Math,t);A.height=t;n.height=t+2*K.v;r.node.logicArea=A;return r.bound=n};Ga.prototype.draw=function(){var n,k,m=this.conf;k=m.bound&&m.bound.style||
{stroke:"none"};var r,u,K,w,v,t,A,B;2<=arguments.length?(u=arguments[0],w=arguments[1]):1<=arguments.length&&(w=arguments[0]);n=w.parentLayer;w.colorRange.getCumulativeValueRatio();r=w.componentPool;v=r.getKeys();this.getLogicalSpace(u,w);K=this._lSpace;u=K.node.logicArea;w=K.node.smartTexts;B=r.getComponent(this._id,v.KEY_GROUP);n=B("legend-labels",n);B=r.getComponent(this._id,v.KEY_RECT);this.bound=k=B(n).attr(K.bound).css(k);B=r.getComponent(this._id,v.KEY_TEXT,!0);v=0;for(K=w.length;v<K;v++)if(r=
w[v])t=u.y+r.height/2,A=v===K-1?u.x+r.x-r.width/2:v?u.x+r.x:u.x+r.x+r.width/2,this.node.push(B({},n).attr({text:r.text,x:A,y:t,lineHeight:this._metaStyle.lineHeight,fill:m.style.fill}).transform("R0"));return{group:n,bound:k,node:this.node}};tb.prototype=Object.create(Ga.prototype);tb.prototype.constructor=tb;tb.prototype.getLogicalSpace=function(n,k,m){var r=this._lSpace,u=this.conf,K=u.padding,w,v,t=[],A,B,z,G,O,q=0,H,h,T;O=k.componentPool.getChart();var Y=[];if(r&&!m)return r.isImpure=!0,r;r=k.colorRange;
k=k.smartLabel;m=r.getCumulativeValueRatio();w=r.colorRange;r=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0,smartTexts:[]}};G=r.node.smartTexts;A=E(n,{});A=this.getEffectivePlotArea(A);k.useEllipsesOnOverflow(O.config.useEllipsesWhenOverflow);u=E(u.style,{});zb(this._metaStyle=u);k.setStyle(u);O=k.getSmartText("W");v=0;for(u=w.length;v<u;v++)(B=w[v].label)?(q++,Y.push({oriIndex:v,label:B})):G[v]=void 0;u=Y.length;if(0===u)return{height:0,width:0};B=z=1<u?(m[Y[u-1].oriIndex]-m[Y[0].oriIndex])/
2*A.height/100:Math.max(m[Y[0].oriIndex],100-m[Y[0].oriIndex])/2*A.height/100;q=k.getSmartText(Y[0].label,B,A.width);q.y=m[Y[0].oriIndex]*A.height/100;v=q.y+q.width;t.push(q.height);G[Y[0].oriIndex]=q;q=k.getSmartText(Y[u-1].label,B,A.width);q.y=m[Y[u-1].oriIndex]*A.height/100;w=q.y-q.width;t.push(q.height);G[Y[u-1].oriIndex]=q;h=v;for(v=1;v<u-1;v++)B=Y[v].label,T=Y[v].oriIndex,q=void 0,z=v+1===u-1?w:m[Y[v+1].oriIndex]*A.height/100,H=m[Y[v].oriIndex]*A.height/100,z=Math.min(H-h,z-H),z>2*O.width&&
(q=k.getSmartText(B,z,A.width),q.y=m[T]*A.height/100,h=z,t.push(q.height)),G[Y[v].oriIndex]=q;t=Math.max.apply(Math,t);A.width=t;n.width=t+2*K.v;r.node.logicArea=A;return r.bound=n};tb.prototype.draw=function(){var n,k,m=this.conf;k=m.bound&&m.bound.style||{stroke:"none"};var r,u,t,w,v,C,A,B;2<=arguments.length?(u=arguments[0],w=arguments[1]):1<=arguments.length&&(w=arguments[0]);n=w.parentLayer;w.colorRange.getCumulativeValueRatio();r=w.componentPool;v=r.getKeys();this.getLogicalSpace(u,w);t=this._lSpace;
u=t.node.logicArea;w=t.node.smartTexts;B=r.getComponent(this._id,v.KEY_GROUP);n=B("legend-labels",n);B=r.getComponent(this._id,v.KEY_RECT);this.bound=k=B(n).attr(t.bound).css(k);B=r.getComponent(this._id,v.KEY_TEXT,!0);v=0;for(t=w.length;v<t;v++)if(r=w[v])C=u.x+r.height/2,A=v===t-1?u.y+r.y-r.width/2:v?u.y+r.y:u.y+r.y+r.width/2,this.node.push(B({},n).attr({text:r.text,x:C,y:A,lineHeight:this._metaStyle.lineHeight,fill:m.style.fill}).transform("R270,"+C+","+A));return{group:n,bound:k,node:this.node}};
oa.prototype=Object.create(Ga.prototype);oa.prototype.constructor=oa;oa.prototype.getLogicalSpace=function(n,k,m){var r=this._lSpace,u=this.conf,t=u.padding,w=k.componentPool.getChart(),v,C,A,B,z,G,O=[],q,H,h,T;if(r&&!m)return r.isImpure=!0,r;r=k.colorRange;k=k.smartLabel;m=r.colorRange;A=r.getCumulativeValueRatio();r=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0,smartTexts:[]}};T=r.node.smartTexts;H=E(n,{});H.height-=2*t.v;H.width-=2*t.h;H.x+=t.h;H.y+=t.v;k.useEllipsesOnOverflow(w.config.useEllipsesWhenOverflow);
u=E(u.style,{});zb(this._metaStyle=u);k.setStyle(u);w=k.getSmartText("W");u=m.length;G=(A[u-1]-A[0])/2*H.width/100;v=m[0].displayValue;v=k.getSmartText("string"!==typeof v&&void 0!==v&&v.toString()||v,G,H.height);v.x=A[0]*H.width/100;C=v.x+v.width;O.push(v.height);T[0]=v;v=k.getSmartText(m[u-1].displayValue,G,H.height);v.x=A[u-1]*H.width/100;G=v.x-v.width;O.push(v.height);T[u-1]=v;q=C;for(C=1;C<u-1;C++)v=void 0,h=m[C].displayValue,B=C+1===u-1?G:A[C+1]*H.width/100,z=A[C]*H.width/100,B=Math.min(z-q,
B-z),B>1.5*w.width&&(v=k.getSmartText(h,2*B,H.height),v.x=A[C]*H.width/100,q=B,O.push(v.height)),T[C]=v;O=Math.max.apply(Math,O);H.height=O;n.height=O+2*t.v;r.node.logicArea=H;return r.bound=n};oa.prototype.draw=function(){var n=this.conf,k=n.bound&&n.bound.style||{stroke:"none"},m,r,u,t,w,v,C,A,B;2<=arguments.length?(w=arguments[0],C=arguments[1]):1<=arguments.length&&(C=arguments[0]);t=C.parentLayer;r=C.colorRange.getCumulativeValueRatio();u=C.componentPool;m=u.getKeys();this.getLogicalSpace(w,
C);v=this._lSpace;w=v.node.logicArea;C=v.node.smartTexts;B=u.getComponent(this._id,m.KEY_GROUP);t=B("legend-values",t);B=u.getComponent(this._id,m.KEY_RECT);this.bound=k=B(t).attr(v.bound).css(k);B=u.getComponent(this._id,m.KEY_TEXT,!0);m=0;for(v=r.length;m<v;m++)if(A=C[m])r=w.y+A.height/2,u=m===v-1?w.x+A.x-A.width/2:m?w.x+A.x:w.x+A.x+A.width/2,B({},t).attr({text:A.text,x:u,y:r,lineHeight:this._metaStyle.lineHeight,fill:n.style.fill});return{group:t,bound:k}};Ra.prototype=Object.create(oa.prototype);
Ra.prototype.constructor=Ra;Ra.prototype.getLogicalSpace=function(n,k,m){var r=this._lSpace,u=this.conf,t=u.padding,w=k.componentPool.getChart(),v,C,A,B,z,G,O=[],q,H,h,T;if(r&&!m)return r.isImpure=!0,r;r=k.colorRange;k=k.smartLabel;m=r.colorRange;C=r.getCumulativeValueRatio();r=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0,smartTexts:[]}};T=r.node.smartTexts;z=E(n,{});z.height-=2*t.v;z.width-=2*t.h;z.x+=t.h;z.y+=t.v;k.useEllipsesOnOverflow(w.config.useEllipsesWhenOverflow);u=E(u.style,
{});zb(u);k.setStyle(this._metaStyle=u);h=k.getSmartText("W");w=m.length;G=(C[w-1]-C[0])/2*z.height/100;u=k.getSmartText(m[0].displayValue,z.width,G);u.y=C[0]*z.height/100;v=u.y+u.width;O.push(u.width);T[0]=u;u=k.getSmartText(m[w-1].displayValue,z.width,G);u.y=C[w-1]*z.height/100;G=u.y-u.height;O.push(u.width);T[w-1]=u;q=v;for(v=1;v<w-1;v++)u=void 0,H=m[v].displayValue,A=v+1===w-1?G:C[v+1]*z.height/100,B=C[v]*z.height/100,A=Math.min(B-q,A-B),A>2*h.height&&(u=k.getSmartText(H,z.width,2*A),u.y=C[v]*
z.height/100,q=A,O.push(u.width)),T[v]=u;O=Math.max.apply(Math,O);z.width=O;n.width=O+2*t.h;r.node.logicArea=z;return r.bound=n};Ra.prototype.draw=function(){var n,k,m=this.conf;k=m.bound&&m.bound.style||{stroke:"none"};var r,u,t,w,v,C,A,B;2<=arguments.length?(r=arguments[0],t=arguments[1]):1<=arguments.length&&(t=arguments[0]);n=t.parentLayer;w=t.colorRange.getCumulativeValueRatio();v=t.componentPool;C=v.getKeys();this.getLogicalSpace(r,t);u=this._lSpace;r=u.node.logicArea;t=u.node.smartTexts;B=
v.getComponent(this._id,C.KEY_GROUP);n=B("legend-values",n);B=v.getComponent(this._id,C.KEY_RECT);this.bound=k=B(n).attr(u.bound).css(k);B=v.getComponent(this._id,C.KEY_TEXT,!0);v=0;for(C=w.length;v<C;v++)if(w=t[v])u=r.x+w.width/2,A=v===C-1?r.y+w.y-w.height/2:v?r.y+w.y:r.y+w.y+w.height/2,B({},n).attr({text:w.text,x:u,y:A,lineHeight:this._metaStyle.lineHeight,fill:m.style.fill});return{group:n,bound:k}};Ia.prototype.constructor=Ia;Ia.prototype.addCompositions=function(n,k){this.compositionsByCategory[k]=
n};Ia.prototype.getLogicalSpace=function(n,k,m){k=this._lSpace;var r=this.conf,u=r.padding,t,w;w=r.legendAxisHeight;var v=this.compositionsByCategory,C;C=0;if(k&&!m)return k.isImpure=!0,k;k=this._lSpace={bound:{height:0,width:0},node:{logicArea:void 0}};m=E(n,{});m.height-=2*u.v;m.width-=2*u.h;m.x+=u.h;m.y+=u.v;r=w/2+r.line.offset;t=w/2;if(v=v.RANGE)C=v.sliders[!1],C=C.conf.outerCircle.rFactor*w,t+=C=Math.max(C/2-w/2,0);m.y+=C;m.height=w=t+r+C;n.height=w+2*u.v;k.node.logicArea=m;return k.bound=n};
Ia.prototype.getDrawableAxisArea=function(n){var k=this.conf;return{x:n.x,y:n.y,width:n.width,height:k.legendAxisHeight,r:k.legendAxisHeight/2}};Ia.prototype.preDrawingRangeParam=function(n){return{y:n.y+n.height/2,calculationBase:n.height,rangeStart:n.x,rangeEnd:n.x+n.width,prop:"y"}};Ia.prototype.getScaleMarkerPathStr=function(n,k){var m=E(n,{}),r=this.conf.line,u,t,w,v,C="";m.x+=m.r;m.width-=2*m.r;v=m.y+m.height;u=0;for(t=k.length;u<t;u++)w=k[u],w=m.x+w*m.width/100,C+="M"+w+","+(v-r.grooveLength)+
"L"+w+","+(v+r.offset);m=""+("M"+m.x+","+(v+r.offset)+"L"+(m.x+m.width)+","+(v+r.offset));return C+m};Ia.prototype.getColorGradient=function(n){return{axis:n.getBoxFill(),shadow:uc({FCcolor:{alpha:"25,0,0",angle:90,color:"000000,FFFFFF,FFFFFF",ratio:"0,30,40"}})}};Ia.prototype.draw=function(){var n,k=this.conf,m=k.line,r=(k.bound||{}).style||{},u,t,w=this.compositionsByCategory,v,C,A,B,z,G;2<=arguments.length?(u=arguments[0],z=arguments[1]):1<=arguments.length&&(z=arguments[0]);n=z.parentLayer;v=
z.colorRange;C=v.getCumulativeValueRatio();G=z.componentPool;A=G.getKeys();this.getLogicalSpace(u,z);B=this._lSpace;u=G.getComponent(this._id,A.KEY_GROUP);n=u("legend-axis",n);u=G.getComponent(this._id,A.KEY_RECT,!0);this.bound=u(n).attr(B.bound).css(r);r=this.getDrawableAxisArea(B.node.logicArea);v=this.getColorGradient(v);k.style.fill=v.axis;k.shadow.style.fill=v.shadow;this.node=u(n).attr(r).css(k.style);this.shadow=u(n).attr(r).css(k.shadow.style);k=this.getScaleMarkerPathStr(r,C);u=G.getComponent(this._id,
A.KEY_PATH);u("M0,0",n).attr({path:k}).css(m.style);for(t in w)switch(m=w[t],t){case "RANGE":A=this.preDrawingRangeParam(r),z[A.prop]=A[A.prop],z.key=A.prop,z.rCalcBase=A.calculationBase,z.parentLayer=n,m.draw(A.rangeStart,A.rangeEnd,z)}};sa.prototype=Object.create(Ia.prototype);sa.prototype.constructor=sa;sa.prototype.getLogicalSpace=function(n,k,m){k=this._lSpace;var r=this.conf,u=r.padding,t,w;w=r.legendAxisHeight;var v=this.compositionsByCategory,C;C=0;if(k&&!m)return k.isImpure=!0,k;k=this._lSpace=
{bound:{height:0,width:0},node:{logicArea:void 0}};m=E(n,{});m.height-=2*u.v;m.width-=2*u.h;m.x+=u.h;m.y+=u.v;r=w/2+r.line.offset;t=w/2;if(v=v.RANGE)C=v.sliders[!1],C=C.conf.outerCircle.rFactor*w,t+=C=Math.max(C/2-w/2,0);m.x+=C;m.width=w=t+r+C;n.width=w+2*u.v;k.node.logicArea=m;return k.bound=n};sa.prototype.getDrawableAxisArea=function(n){var k=this.conf;return{x:n.x,y:n.y,width:k.legendAxisHeight,height:n.height,r:k.legendAxisHeight/2}};sa.prototype.getScaleMarkerPathStr=function(n,k){var m=E(n,
{}),r=this.conf.line,u,t,w,v,C="";m.y+=m.r;m.height-=2*m.r;v=m.x+m.width;u=0;for(w=k.length;u<w;u++)t=k[u],t=m.y+t*m.height/100,C+="M"+(v-r.grooveLength)+","+t+"L"+(v+r.offset)+","+t;m=""+("M"+(v+r.offset)+","+m.y+"L"+(v+r.offset)+","+(m.y+m.height));return C+m};sa.prototype.getColorGradient=function(n){return{axis:n.getBoxFill(!0),shadow:uc({FCcolor:{alpha:"25,0,0",angle:360,color:"000000,FFFFFF,FFFFFF",ratio:"0,30,40"}})}};sa.prototype.preDrawingRangeParam=function(n){return{x:n.x+n.width/2,calculationBase:n.width,
rangeStart:n.y,rangeEnd:n.y+n.height,prop:"x"}};La.prototype.constructor=La;La.prototype.initRange=function(n,k){this.extremes[+n.sliderIndex]=k};La.prototype.updateRange=function(n,k){var m=n.sliderIndex;this.sliders[!m].updateSwingRange(m,k)};La.prototype.reset=function(){var n={};n.conf=this.conf;n.sliderGroup=this;this.sliders[!1]=new Ja(!1,n,this._id+"_0");this.sliders[!0]=new Ja(!0,n,this._id+"_1");this.draw.apply(this,this._drawParams)};La.prototype.clearListeners=function(){this.callbacks.length=
0};La.prototype.draw=function(n,k,m){var r=this.sliders,u=r[!1],r=r[!0],t=m.colorRange,w=t.colorRange,v=this._fcChart=m.componentPool.getChart();this.getValueFormPixel=function(k,n,m,r){var u=(n-k)/(r-m);this.getValueFormPixel=function(n){return k+u*n}};this.updateWhenInMove=function(k,n){this.updateWhenInMove=function(m,r){var u=this.extremes,u=this.getValueFormPixel(m.sliderIndex?u[1]-u[0]+r:r);return u=n?parseFloat(u).toFixed(2)+"%":k.legendValue(u)}};this._drawParams=[n,k,m];this.updateWhenInMove(v.components.numberFormatter,
t.mapByPercent);n=u.draw(n,w[0].displayValue,m[m.key],m);n=r.draw(k,w[w.length-1].displayValue,m[m.key],m);u.swing=this.extremes.slice(0);r.swing=this.extremes.slice(0);this.getValueFormPixel(w[0].value,w[w.length-1].value,this.extremes[0],this.extremes[1]);return n};La.prototype.registerListener=function(n,k,m){this.callbacks.push({fn:n,context:k,params:m||[]})};La.prototype.updateWhenInRest=function(n,k){var m=this.sliders,r=this.extremes,u=n.sliderIndex,t,w=this.callbacks,v,C;u?(t=m[!u].currPos,
m=r[1]-r[0]+k):(t=k,m=r[1]-r[0]+m[!u].currPos);r=0;for(u=w.length;r<u;r++)v=w[r],C=v.params.slice(0),C.unshift(this.getValueFormPixel(m)),C.unshift(this.getValueFormPixel(t)),v.fn.apply(v.context,C)};La.prototype.dragStarted=function(n){var k=this.sliders,m=this.extremes,r=n.conf,u=this._fcChart;Z.raiseEvent("legendpointerdragstart",{pointerIndex:+n.sliderIndex,pointers:[{value:this.getValueFormPixel(k[!1].currPos)},{value:this.getValueFormPixel(m[1]-m[0]+k[!0].currPos)}],legendPointerHeight:r.outerRadius,
legendPointerWidth:r.innerRadius,outerRadius:r.outerRadius,innerRadius:r.innerRadius},u.chartInstance,[u.id])};La.prototype.dragCompleted=function(n,k,m){var r=this.sliders,u=this.extremes,t=n.conf,w=this.getValueFormPixel(r[!1].currPos),r=this.getValueFormPixel(u[1]-u[0]+r[!0].currPos),v=this._fcChart,C;n.sliderIndex?(C=w,m=this.getValueFormPixel(u[1]-u[0]+m)):(C=this.getValueFormPixel(m),m=r);k&&Z.raiseEvent("legendrangeupdated",{previousMinValue:w,previousMaxValue:r,minValue:C,maxValue:m},v.chartInstance,
[v.id]);Z.raiseEvent("legendpointerdragstop",{pointerIndex:+n.sliderIndex,pointers:[{value:w},{value:r}],legendPointerHeight:t.outerRadius,legendPointerWidth:t.innerRadius,outerRadius:t.outerRadius,innerRadius:t.innerRadius},v.chartInstance,[v.id])};Ja.prototype.constructor=Ja;Ja.prototype.updateSwingRange=function(n,k){this.swing[+n]=k};Ja.prototype.draw=function(n,k,m,r){var u=r.parentLayer,t=this.conf,w=t.outerCircle,v=t.innerCircle,C=Math.ceil(w.rFactor*r.rCalcBase/2),A=Math.ceil(v.rFactor*r.rCalcBase/
2),B=C-A,z=this.rangeGroup,G=this.sliderIndex,O,q,H=r.componentPool,h=H.getKeys();t.outerRadius=C;t.innerRadius=A;this._scaleVal=k;v.style["stroke-width"]=B;B=Math.ceil(w.style["stroke-width"]/2);A+=B;q=H.getComponent(this._id,h.KEY_GROUP);u=this.node=q("fc-gl-slider",u).attr({cursor:"pointer",transform:"t0,0"});"x"===r.key?n=O=n+(G?-A:+A):(O=m,n=m=n+(G?-A:+A));z.initRange(this,n);q=H.getComponent(this._id,h.KEY_CIRCLE,!0);q(u).attr({cx:m,cy:O,r:C}).css(w.style);q(u).attr({cx:m,cy:O,r:A}).css(v.style);
k=this.tracker=q(u).attr({cx:m,cy:O,r:C+5,ishot:!0,fill:Qb,stroke:0,cursor:"pointer"}).trackTooltip(t.showTooltip?!0:!1).tooltip(k,null,null,!0);this._dragAPI=r=this.getDragAPI("x"===r.key);k.undrag();k.drag(r.dragging,r.dragStart,r.dragEnd);return{translateAscending:C+B}};Ja.prototype.getDragAPI=function(n){var k=this,m=k.node,r=k.sliderIndex,u=k.rangeGroup,t,w,v,C=k.conf.innerRadius,A;return{dragging:function(B,z,G,O,q){var H;q.stopPropagation();q.preventDefault();H=n?z:B;r?(B=t[0]-t[1]+C,z=0):
(B=0,z=t[1]-t[0]-C);if(!(k.currPos+H<B||k.currPos+H>z))return m.attr({transform:n?"t0,"+(k.currPos+H):"t"+(k.currPos+H)+",0"}),w=H,v&&clearTimeout(v),v=setTimeout(function(){u.updateWhenInRest(k,k.currPos+H)},100),k.tracker.tooltip(u.updateWhenInMove(k,k.currPos+H),null,null,!0),A=!0},dragStart:function(r,v,w){w.stopPropagation();w.preventDefault();m.attr({transform:n?"t0,"+k.currPos:"t"+k.currPos+",0"});t=t||k.swing;A=!1;u.dragStarted(k)},dragEnd:function(){var n;u.dragCompleted(k,A,k.currPos+w);
A&&(v&&clearTimeout(v),v=setTimeout(function(){u.updateWhenInRest(k,k.currPos)},100),k.currPos+=w,n=t[+r]+k.currPos,u.updateRange(k,n))}}};Oa.prototype.constructor=Oa;Oa.prototype.getValueRatio=function(){var n=this.colorRange,k,m,r=n.length,u=this.valueRatio,t=n[0].value,w=n[r-1].value-t,v=0;if(u)return u;u=this.valueRatio=[];for(m=0;m<r;m++)k=n[m],k=(k.value-t)/w,u.push(100*(k-v)),v=k;return u};Oa.prototype.getCumulativeValueRatio=function(){var n=this.colorRange,k,m,r=n.length,u=n[0].value,t=n[r-
1].value,w=[];for(m=0;m<r;m++)k=n[m],w.push((k.value-u)/(t-u)*100);return w};Oa.prototype.getBoxFill=function(n){var k=this.colorRange,m,r=k.length,u=[],t;t=n?90:0;for(m=0;m<r;m++)n=k[m],u.push(n.code);k={FCcolor:{alpha:"100,100,100",angle:t,color:u.join(","),ratio:this.getValueRatio().join(",")}};return uc(k)};Oa.prototype.getColorByValue=function(n){var k=this.values,m=this.colorRange,r,u,t,w;if(void 0!==n&&null!==n){u=0;for(r=k.length;u<r;u++)if(n===k[u]){w=m[u].code;break}else if(!u&&n<k[u]){t=
!0;break}else if(u===r-1&&n>k[u]){t=!0;break}else if(n>k[u]&&n<k[u+1]){k=m[u];r=m[u+1];m=k.value;u=Pa(k.code);k=r.value;r=Pa(r.code);w=w=void 0;w=k-m;w=[Math.round(u[0]+(r[0]-u[0])/w*(n-m)),Math.round(u[1]+(r[1]-u[1])/w*(n-m)),Math.round(u[2]+(r[2]-u[2])/w*(n-m))];w=mc(w);break}if(!t)return w}};gb.prototype=Object.create(Ba.prototype);gb.prototype.constructor=gb;FusionCharts.register("component",["gradientLegend","gradientLegend",{pIndex:1,enabled:!1,init:function(n){function k(k){m.data=n.chart.jsonData.colorrange;
(w=m.nData=ba.legacyDataParser(m.data,k))?(m.drawOptions={smartLabel:r.linkedItems.smartLabel,colorRange:m.colorRange=O=new Oa(w,k,v),maxOtherSide:k.maxOtherSide},m._dontPlot=!1,O&&O._preparationGoneWrong&&(m._dontPlot=!0),m._recalculateLogicalSpace=!0,m._configure()):m._dontPlot=!0}var m=this,r=n.chart,t,O,w,v;ba.init(n);v=m._chart=n.chart;m._cpool=kb(v);if(!(t=n.dataExtremes))return k;k(t)},_configure:function(){var n=this._chart,k=n.jsonData.chart,m=this.conf={},r=k.outcnvbasefont,t=k.outcnvbasefontsize,
K=k.outcnvbasefontcolor,n=n.config.dataLabelStyle,w,v,C,A,B,z,G;m.caption=Xa(k.legendcaption);m.legendPosition=Xa(k.legendposition,"bottom").toLowerCase();m.showLegend=O(k.showlegend,1);m.interactiveLegend=O(k.interactivelegend,1);m.showLegendLabels=O(k.showlegendlabels,1);w=k.legenditemfontcolor||K;v=k.legenditemfont||r;C=k.legenditemfontsize||t;A=O(k.legenditemfontbold,0);K=k.legendcaptionfontcolor||K;r=k.legendcaptionfont||r;t=k.legendcaptionfontsize||t;B=O(k.legendcaptionfontbold,1);G=(z=k.legendaxisbordercolor?
Ya(Ac(k.legendaxisbordercolor)):void 0)?O(k.legendaxisborderalpha,100)/100:void 0;m.axisTextItemConf={style:{fill:w?Eb(Xa(w)):n.color,fontFamily:v?Xa(v):n.fontFamily,fontSize:C?O(C):n.fontSize.match(/\d+/)[0],fontWeight:A?"bold":n.fontWeight}};m.legendCaptionConf={style:{fill:K?Eb(Xa(K)):n.color,fontFamily:r?Xa(r):n.fontFamily,fontSize:t?O(t):n.fontSize.match(/\d+/)[0],fontWeight:B?"bold":n.fontWeight,fontStyle:"normal"}};m.legendAxisConf={legendAxisHeight:11,style:{stroke:z,"stroke-opacity":G},line:{style:{stroke:Eb(Xa(k.legendscalelinecolor,
"FFF8E9"),O(k.legendscalelinealpha,100)),"stroke-width":O(k.legendscalelinethickness)}}};m.sliderGroupConf={showTooltip:O(k.showtooltip,1),outerCircle:{rFactor:O(k.sliderdiameterfactor),style:{stroke:Eb(Xa(k.legendpointerbordercolor,"757575"),O(k.legendpointerborderalpha,100))}},innerCircle:{rFactor:O(k.sliderholediameterfactor),style:{stroke:Eb(Xa(k.legendpointercolor,"FFFFFF"),O(k.legendpointeralpha,100))}}};m.legendCarpetConf={spreadFactor:O(k.legendspreadfactor),allowDrag:!!O(k.legendallowdrag,
0),captionAlignment:Xa(k.legendcaptionalignment,"center"),style:{fill:Eb(Xa(k.legendbgcolor,"e4d9c1"),O(k.legendbgalpha,100)),stroke:Eb(Xa(k.legendbordercolor,"c4b89d"),O(k.legendborderalpha,100)),"stroke-width":O(k.legendborderthickness,1)}}},postConfigureInit:function(){var n=this.conf,k,m,r,t,O,w,v;this.elem={};n.caption&&(m=E(ba.getDefaultConf("legendCaptionConf"),n.legendCaptionConf),k=new V(n.caption,m));n.interactiveLegend&&(m=E(ba.getDefaultConf("sliderGroupConf"),n.sliderGroupConf),this.elem.sGroup=
t=new La(m),this.listeners&&0<this.listeners.length&&t.registerListener.apply(t,this.listeners));m=E(ba.getDefaultConf("legendCarpetConf"),n.legendCarpetConf);"bottom"===n.legendPosition?(this.drawOptions.refSideKey="canvasWidth",this.drawOptions.refOffsetKey="canvasLeft",m=new bb(m),O=E(ba.getDefaultConf("axisTextItemConf"),n.axisTextItemConf),w=new Ca(this.drawOptions.colorRange,ba.getDefaultConf("legendBodyConf"),O),r=new Ia(E(ba.getDefaultConf("legendAxisConf"),n.legendAxisConf)),n.showLegendLabels&&
(v=new Ga(O)),n=new oa(O)):(this.drawOptions.refSideKey="canvasHeight",this.drawOptions.refOffsetKey="canvasTop",O=E(ba.getDefaultConf("axisTextItemConf"),n.axisTextItemConf),m=new Db(m),w=new Qa(this.drawOptions.colorRange,ba.getDefaultConf("legendBodyConf"),O),r=new sa(E(ba.getDefaultConf("legendAxisConf"),n.legendAxisConf)),n.showLegendLabels&&(v=new tb(O)),n=new Ra(O));t&&r.addCompositions(t,"RANGE");v&&w.addCompositions(v,"LEGEND_LABEL");w.addCompositions(r,"LEGEND_AXIS");w.addCompositions(n,
"AXIS_VALUE");k&&m.addCompositions(k,"CAPTION");m.addCompositions(w,"LEGEND_BODY");this.elem.gl=new gb(m,this._cpool)},notifyWhenUpdate:function(n,k,m){var r;(r=this.elem&&this.elem.sGroup)?r.registerListener(n,k,m):this.listeners=[n,k,m]},dispose:function(){this.elem&&this.elem.gl&&this.elem.gl.dispose();this.elem={}},getLogicalSpace:function(n){var k=this.conf,m={height:0,width:0},r=this.drawOptions,t=this._chart;if(!this._recalculateLogicalSpace)return k=r.refSideKey,r=r.refOffsetKey,this.drawOptions.refSide=
t.config[k],this.drawOptions.refOffset=t.config[r],(this._logicalArea=this.elem.gl.getLogicalSpace(this.drawOptions,!0))||m;if(this._dontPlot)return m;this._recalculateLogicalSpace=!1;this.postConfigureInit();if(!k.showLegend)return m;k=r.refSideKey;r=r.refOffsetKey;this.drawOptions.refSide=t.config[k];this.drawOptions.refOffset=t.config[r];this.drawOptions.maxOtherSide=n||this.drawOptions.maxOtherSide;return this.elem.gl&&(this._logicalArea=this.elem.gl.getLogicalSpace(this.drawOptions,!0))},resetLegend:function(){var n;
(n=this.elem&&this.elem.sGroup)&&n.reset()},clearListeners:function(){var n;(n=this.elem&&this.elem.sGroup)&&n.clearListeners()},draw:function(n,k,m){var r=this.conf;this._dontPlot||(this._cpool.init(m.paper),r.showLegend?(this.drawOptions.paper=m.paper,this.drawOptions.parentGroup=m.parentGroup,this.drawOptions.x=n,this.drawOptions.y=k,this.drawOptions.maxOtherSide=this.drawOptions.maxOtherSide||m.maxOtherSide,n=this.elem.gl.draw(this.drawOptions),n=n.getBBox(),r.xPos=n.x,r.yPos=n.y,r.height=n.height,
r.width=n.width,this.enabled=!0):this.enabled=!1)}}])}]);FusionCharts.register("module",["private","modules.renderer.js-msstepline",function(){var E=this.hcLib,t=this.window,zb=!/fusioncharts\.com$/i.test(t.location.hostname),Fa=E.chartAPI,Ba=E.pluckNumber,bb=E.pluck,Db=t.Image,t=E.preDefStr,V=E.schedular,Ca=t.line,Qa=E.toRaphaelColor,Ga=E.getFirstValue,tb=t.configStr,oa=t.animationObjStr,Ra=t.dataLabelStr,Ia=E.BLANKSTRING,sa=t.hiddenStr,La=Math.max,Ja=E.TOUCH_THRESHOLD_PIXELS,Oa=E.CLICK_THRESHOLD_PIXELS,
gb=E.hasTouch?Ja:Oa,Z=t.ROUND,xa=t.miterStr;Fa("msstepline",{friendlyName:"Multi-series Step Line Chart",standaloneInit:!0,creditLabel:zb,defaultDatasetType:"msstepline",defaultPlotShadow:1,applicableDSList:{msstepline:!0}},Fa.mscartesian,{drawverticaljoins:1,useforwardsteps:1,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},Fa.areabase);FusionCharts.register("component",["dataset","MSStepLine",{type:"stepline",_addLegend:function(){var t=this.config,E=this.chart.components.legend,Z=Ba(t.drawanchors,
1),t={enabled:t.includeinlegend,type:Ca,drawLine:bb(t.drawLine,!0),fillColor:Qa({color:t.anchorbgcolor,alpha:t.anchorbgalpha}),strokeColor:Qa({color:t.anchorbordercolor,alpha:"100"}),rawFillColor:t.anchorbgcolor,rawStrokeColor:t.anchorbordercolor,anchorSide:Z?t.anchorsides:0,strokeWidth:t.anchorborderthickness,label:Ga(this.JSONData.seriesname),lineWidth:t.linethickness};this.legendItemId=E.addItems(this,this.legendInteractivity,t)},draw:function(){var t=this,Ga=t.JSONData,Fa=t.chart,Ba=Fa.getJobList(),
Ja=Fa.components,Ya=t.config,Oa=t.index||t.positionIndex,zb=Fa.config,Pa,pa,ca=Ja.paper,Qb=Ja.xAxis[0],ba=t.yAxis,Wa,Ea,kb=Fa.graphics;Pa=kb.datalabelsGroup;var eb,n,k,m,r,u,K=t.components.data,w,v=t.components.removeDataArr||[],C=v.length,A=Ya.linethickness,B=t.graphics.container,z=t.graphics.trackerContainer;pa=kb.trackerGroup;var G=zb.connectnulldata,ya=kb.datasetGroup,q,kb=Ya.shadow,H,h=t.graphics.dataLabelContainer,T={},Y,W,T=Fa.get(tb,oa),fb=T.dummyObj,ga=T.animObj,Mb=T.duration,ub=t.components.pool||
[],Va=function(){!1!==t.visible||!1!==t._conatinerHidden&&void 0!==t._conatinerHidden||(B.lineGroup.hide(),B.lineShadowGroup.hide(),B.anchorShadowGroup.hide(),B.anchorGroup.hide(),z.hide(),h&&h.hide(),t._conatinerHidden=!0)},bc=function(){ya.lineConnector.attr({"clip-rect":null});ya.lineConnector.node&&ya.lineConnector.node.removeAttribute("clip-path");!1!==t.visible&&(B.lineShadowGroup.show(),B.anchorShadowGroup.show(),B.anchorGroup.show(),z.show(),h&&h.show())},mb=!0,cc,nc=ba.getAxisBase(),nc=ba.yBasePos=
ba.getAxisPosition(nc),oc=Ja.canvas.config.clip,Ja=oc["clip-canvas-init"].slice(0),oc=oc["clip-canvas"].slice(0),Za=Ya.lineDashStyle,pc={color:Ya.linecolor,alpha:Ya.alpha},Rb,$a,Nb,nb,Da=[],sb=0,Tb=[],ob=null,cb,Ma=[],rc=!1,vc,Zb=t.graphics.lineElement,Sb=t.visible,Ka=Ya.drawverticaljoins,Ub=Ya.useforwardsteps,vb,qa=T.animType,da=0,X,Fa=Fa.config.stepatmiddle?.5*Qb.getPVR():0;Ya.imagesLoaded=0;ya.lineConnector=ya.lineConnector||ca.group("line-connector",ya);B||(B=t.graphics.container={lineShadowGroup:ca.group("connector-shadow",
ya.lineConnector),anchorShadowGroup:ca.group("anchor-shadow",ya.lineConnector),lineGroup:ca.group(Ca,ya.lineConnector),anchorGroup:ca.group("anchors",ya.lineConnector)},Sb||(B.lineShadowGroup.hide(),B.anchorShadowGroup.hide(),B.lineGroup.hide(),B.anchorGroup.hide()));z||(z=t.graphics.trackerContainer=ca.group("line-hot",pa),Sb||z.hide());K||(K=t.components.data=[]);h||(h=t.graphics.dataLabelContainer=t.graphics.dataLabelContainer||ca.group(Ra,Pa),Sb||h.hide());Sb&&(B.lineShadowGroup.show(),B.anchorShadowGroup.show(),
B.lineGroup.show(),B.anchorGroup.show(),z.show(),h.show());Pa=Qb.getCategoryLen();for(pa=0;pa<Pa;pa++)if(w=K[pa])W=w.config,m=W.setValue,k=W.setLink,r=W.setLevelTooltext,T=W.anchorProps,Y=T.symbol,H=T.shadow,u=W.displayValue,n=w.graphics.element,vb=w.graphics.image,Wa=w.graphics.hotElement,Ea=w.graphics.label,w||(w=K[pa]={graphics:{}}),null===m?(Ma.length=0,G||(ob=null),n&&n.hide(),vb&&vb.hide(),Ea&&Ea.hide(),Wa&&Wa.hide()):(nb={color:W.color,alpha:W.alpha},cc=W.dashStyle,Wa=Qb.getAxisPosition(pa),
Ea=!t.visible&&Mb?nc:ba.getAxisPosition(m),q=W.hoverEffects,T.isAnchorHoverRadius=q.anchorRadius,X=Qb.getLabel(pa),eb=zb.showtooltip?W.toolText+(r?Ia:W.toolTipValue):Ia,W.finalTooltext=eb,r=W.eventArgs||(W.eventArgs={}),r.index=pa,r.link=k,r.value=m,r.displayValue=u,r.categoryLabel=X,r.toolText=eb,r.id=Ya.userID,r.datasetIndex=Oa,r.datasetName=Ga.seriesname,r.visible=Sb,T.imageUrl?(W.anchorImageLoaded=!1,w._xPos=Wa,w._yPos=Ea,H=new Db,H.onload=this._onAnchorImageLoad(t,pa,r,Wa,Ea),H.onerror=this._onErrorSetter(t,
pa),H.src=T.imageUrl,da++):(vb&&vb.hide(),m=[Y[1]||2,Wa,Ea,T.radius,T.startAngle,T.dip],k={fill:Qa({color:T.bgColor,alpha:T.bgAlpha}),stroke:Qa({color:T.borderColor,alpha:T.borderAlpha}),"stroke-width":T.borderThickness,visibility:T.radius?Sb:sa},n||(ub.element&&ub.element.length?n=w.graphics.element=ub.element.shift():(n=w.graphics.element=ca.polypath(B.anchorGroup),n.attr({polypath:m}))),n.show().animateWith(fb,ga,{polypath:m},Mb,qa,mb&&Va),n.attr(k).shadow(H,B.anchorShadowGroup),mb=!1),H=w.graphics.connector,
q.enabled&&(m={polypath:[q.anchorSides||2,Wa,Ea,q.anchorRadius,q.startAngle,q.dip],fill:Qa({color:q.anchorColor,alpha:q.anchorBgAlpha}),stroke:Qa({color:q.anchorBorderColor,alpha:q.anchorBorderAlpha}),"stroke-width":q.anchorBorderThickness},k={polypath:[T.sides,Wa,Ea,T.radius,T.startAngle,0],fill:Qa({color:T.bgColor,alpha:T.bgAlpha}),stroke:Qa({color:T.borderColor,alpha:T.borderAlpha}),"stroke-width":T.borderThickness},n&&n.data("anchorRadius",T.radius).data("anchorHoverRadius",q.anchorRadius).data("setRolloverAttr",
m).data("setRolloutAttr",k)),W.trackerConfig||(W.trackerConfig={}),W.trackerConfig.trackerRadius=La(T.radius,q&&q.anchorRadius||0,gb)+(T.borderThickness||0)/2,Nb=Nb!==[Qa(nb||pc),cc||Za].join(":"),null!==ob?(Ma.length&&(Da=Da.concat(Ma),Ma.length=0),Da.join(Ia)||Da.push("M",cb,ob),Ub?(Da.push("H",Wa-Fa),Ka?Da.push("V",Ea):Da.push("M",Wa-Fa,Ea),Fa&&Da.push("H",Wa)):(Ka?Da.push("V",Ea):Da.push("M",cb,Ea),Da.push("H",Wa)),Nb&&(sb?Tb=Tb.concat(Da):(H||(H=w.graphics.connector=ca.path(Da,B.lineGroup),rc=
!0),H.animateWith(fb,ga,{path:Da},Mb,qa,mb&&Va),H.attr({"stroke-dasharray":$a,"stroke-width":A,stroke:Rb,"stroke-linecap":Z,"stroke-linejoin":2<A?Z:xa}).shadow(vc,B.lineShadowGroup),mb=!1),Da=[]),Nb||H&&H.hide()):Ma.push("M",Wa,Ea),cb=Wa,ob=Ea,Rb=Qa(nb||pc),vc=nb?{opacity:nb&&nb.alpha/100}:kb,$a=cc||Za,sb=void 0===bb(W.color,W.alpha,W.dashed)?1:0,Nb=[Rb,$a].join(":"),w._xPos=Wa,w._yPos=Ea,!T.imageUrl&&this.drawLabel(pa));Ya.noOfImages=Ya.totalImages=da;0===da&&(Ba.trackerDrawID.push(V.addJob(t.drawTracker,
t,[],E.priorityList.tracker)),Ba.labelDrawID.push(V.addJob(t.drawLabel,t,[],E.priorityList.label)));Da.length&&(Tb=Tb.concat(Da));Ga={path:Tb};k={"stroke-dasharray":Za,"stroke-width":A,stroke:Qa(pc),"stroke-linecap":Z,"stroke-linejoin":2<=A?Z:xa};Zb||(Zb=t.graphics.lineElement=ca.path({path:Tb},B.lineGroup),rc=!0);Zb.show().animateWith(fb,ga,Ga,Mb,qa,mb&&Va);Zb.attr(k).shadow(kb,B.lineShadowGroup);mb=!1;Mb&&Sb&&rc&&(B.anchorGroup.hide(),B.lineShadowGroup.hide(),B.anchorShadowGroup.hide(),h.hide(),
ya.lineConnector.attr({"clip-rect":Ja}).animateWith(fb,ga,{"clip-rect":oc},Mb,"normal",bc));for(pa=0;pa<C;pa++)t._removeDataVisuals(v.shift());t.drawn=!0}},Ca,{drawverticaljoins:void 0,useforwardsteps:void 0}])}]);FusionCharts.register("module",["private","modules.renderer.js-powercharts",function(){var E=this,t=E.hcLib,zb=t.Raphael,Fa="VML"===zb.type,Ba=E.window,bb=Ba.Image,Db=Ba.document,V=t.preDefStr,Ca=V.colors,Qa=Ca.B90000,Ga=Ca.FFFFFF,tb=Ca.AAAAAA,oa=Ca.c000000,Ra=V.defaultFontStr,Ia=V.divLineAlpha3DStr,
sa=V.divLineAlphaStr,La=V.altVGridColorStr,Ja=V.altVGridAlphaStr,Oa=V.altHGridColorStr,gb=V.altHGridAlphaStr,Z=V.configStr,xa=V.animationObjStr,O=V.showHoverEffectStr,Xa=V.columnStr,Va=V.colHotStr,ac=V.shadowStr,sb=V.errorBarStr,Ya=V.errorHotStr,Eb=V.errorShadowStr,mc=V.dataLabelStr,Pa=V.miterStr,pa=V.hiddenStr,ca=V.visibleStr,Qb=V.visiblilityStr,ba=V.ROUND,Wa=V.PERCENTAGESTRING,Ea=t.ZEROSTRING,kb=V.pStr,eb=V.sStr,n=V.POSITION_START,k=V.POSITION_TOP,m=V.POSITION_END,r=V.POSITION_BOTTOM,u=V.PLOTFILLCOLOR_STR,
K=V.UNDERSCORE,w=V.NORMAL,v=V.line,C=V.column,A=V.bar,B=V.volume,z=t.BLANKSTRING,G=t.BLANKSTRING,ya=t.parseTooltext,q=t.pluck,H=t.getValidValue,h=t.pluckNumber,T=t.getFirstValue,Y=t.parseUnsafeString,W=t.extend2,fb=t.getDashStyle,ga=t.toRaphaelColor,Mb=t.toPrecision,ub=t.hasSVG,Ec=t.isIE,bc=t.regex.dropHash,mb=t.HASHSTRING,cc=t.hashify,nc=t.setAttribDefs,oc=t.parseConfiguration,Za=t.attrTypeNum,pc=function(a,c){var d;a||(a={});for(d in c)a[d]=c[d];return a},Rb=t.COMMASPACE,$a=t.schedular,Nb=t.chartPaletteStr=
{chart2D:{bgColor:"bgColor",bgAlpha:"bgAlpha",bgAngle:"bgAngle",bgRatio:"bgRatio",canvasBgColor:"canvasBgColor",canvasBaseColor:"canvasBaseColor",divLineColor:"divLineColor",legendBgColor:"legendBgColor",legendBorderColor:"legendBorderColor",toolTipbgColor:"toolTipbgColor",toolTipBorderColor:"toolTipBorderColor",baseFontColor:"baseFontColor",anchorBgColor:"anchorBgColor"},chart3D:{bgColor:"bgColor3D",bgAlpha:"bgAlpha3D",bgAngle:"bgAngle3D",bgRatio:"bgRatio3D",canvasBgColor:"canvasBgColor3D",canvasBaseColor:"canvasBaseColor3D",
divLineColor:"divLineColor3D",divLineAlpha:Ia,legendBgColor:"legendBgColor3D",legendBorderColor:"legendBorderColor3D",toolTipbgColor:"toolTipbgColor3D",toolTipBorderColor:"toolTipBorderColor3D",baseFontColor:"baseFontColor3D",anchorBgColor:"anchorBgColor3D"}},nb=t.each,Da=t.addEvent,Fc=t.removeEvent,Tb=t.getTouchEvent,ob=t.componentDispose,cb=function(a){return void 0!==a&&null!==a},Ma="rgba(192,192,192,"+(Ec?.002:1E-6)+")",rc=t.TOUCH_THRESHOLD_PIXELS,vc=t.CLICK_THRESHOLD_PIXELS,Zb=8===Ba.document.documentMode?
ca:G,Sb=t.BGRATIOSTRING,Ka=Math,Ub=Ka.sin,vb=Ka.cos,qa=Ka.round,da=Ka.min,X=Ka.max,Ua=Ka.abs,Bc=Ka.PI,Gc=Ka.ceil,Cc=Ka.floor,Pc=Ka.sqrt,Qc=Ka.pow,Hc=Bc/180,Vb=t.hasTouch,ab=Vb?rc:vc,Ha=t.getFirstColor,Ic=t.setLineHeight,Wb=t.pluckFontSize,Xb=t.getFirstAlpha,Rc=t.graphics.getDarkColor,Ob=t.graphics.getLightColor,aa=t.graphics.convertColor,Jc=t.POSITION_RIGHT,Kc=t.POSITION_LEFT,Sc=t.bindSelectionEvent,N=t.chartAPI,Tc=t.graphics.mapSymbolName,Dc=t.COMMASTRING,za=t.HUNDREDSTRING,wc=t.getMouseCoordinate,
va=!/fusioncharts\.com$/i.test(Ba.location.hostname),ka=t.plotEventHandler,Lc=E.xssEncode,sc=t.SHAPE_RECT,Mc=t.graphics,Uc=Mc.parseColor,Vc=Mc.getValidColor,xc,yc=function(){this.data("move",!1);clearTimeout(this._longpressactive);delete this._longpressactive},Wc=t.createElement;t.eventList.chartupdated="FC_ChartUpdated";t.eventList.dataposted="FC_DataPosted";t.eventList.dataposterror="FC_DataPostError";t.eventList.datarestored="FC_DataRestored";E.addEventListener("rendered",function(a){a=a.sender;
var c=a.__state,d=a.jsVars&&a.jsVars.instanceAPI;!c.listenersAdded&&d&&"function"===typeof d.getCollatedData&&(a.addEventListener(["chartupdated","dataupdated","rendered"],function(a){delete a.sender.__state.hasStaleData}),c.listenersAdded=!0)});N("spline",{friendlyName:"Spline Chart",standaloneInit:!0,singleseries:!0,creditLabel:va,defaultDatasetType:"msspline",defaultPlotShadow:1,applicableDSList:{spline:!0},getSplineExtremities:function(a,c,d,b,e){var f=[],g=!1;b=b||0;for(e=e||{max:Number.MIN_VALUE,
min:Number.MAX_VALUE};b<a.length;++b)if(g)if(isNaN(a[b].config.setValue)||null===a[b].config.setValue){if(!d)break}else f.push({index:b,y:a[b].config.setValue});else isNaN(a[b].config.setValue)||null===a[b].config.setValue||(g=!0,f.push({index:b,y:a[b].config.setValue}));2<f.length&&this.evalSplineExtremities(f,c,e);b<a.length&&!d&&this.getSplineExtremities(a,c,d,b,e);return e},evalSplineExtremities:function(a,c,d){var b={},e,f,g;for(f=0;f<a.length;++f)e=a[f].index,b["D"+e]=0;for(e=0;10>e;++e)for(f=
0;f<a.length;++f)g=0===f?(3*(a[f+1].y-a[f].y)-b["D"+a[f+1].index])/2:f===a.length-1?(3*(a[f].y-a[f-1].y)-b["D"+a[f-1].index])/2:(3*(a[f+1].y-a[f-1].y)-b["D"+a[f+1].index]-b["D"+a[f-1].index])/4,b["D"+a[f].index]=g;c=qa(c/(a.length-1));for(f=1;f<a.length;++f)this.getSegmentExtremities(f,a,b,d,c)},getSegmentExtremities:function(a,c,d,b,e){var f,g,l,x,P;f=d["D"+c[0].index];g=d["D"+c[a].index];d=c[0].y;l=3*(c[a].y-c[0].y)-2*f-g;a=2*(c[0].y-c[a].y)+f+g;c=b.max;g=b.min;for(x=0;x<=e;x++)P=x/e,P=d+f*P+l*
P*P+a*P*P*P,P<g&&(g=P),P>c&&(c=P);b.max=c;b.min=g}},N.sscartesian,{minimizetendency:0,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);N("splinearea",{friendlyName:"Spline Area Chart",standaloneInit:!0,hasLegend:!1,singleseries:!0,creditLabel:va,defaultDatasetType:"mssplinearea",defaultPlotShadow:0},N.spline,{anchoralpha:za,minimizetendency:0},N.areabase);N("msspline",{standaloneInit:!0,friendlyName:"Multi-series Spline  Chart",creditLabel:va,defaultDatasetType:"msspline",
applicableDSList:{msspline:!0},defaultPlotShadow:1,getSplineExtremities:N.spline.getSplineExtremities,evalSplineExtremities:N.spline.evalSplineExtremities,getSegmentExtremities:N.spline.getSegmentExtremities},N.mscartesian,{minimizetendency:0,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);N("mssplinearea",{friendlyName:"Multi-series Spline Area Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:"mssplinearea",defaultPlotShadow:0},N.msspline,{minimizetendency:0},N.areabase);
N("mssplinedy",{friendlyName:"Multi-series Dual Y-Axis Spline Chart",standaloneInit:!0,creditLabel:va,isDual:!0,defaultDatasetType:"msspline",applicableDSList:{msspline:!0},getSplineExtremities:N.spline.getSplineExtremities,evalSplineExtremities:N.spline.evalSplineExtremities,getSegmentExtremities:N.spline.getSegmentExtremities},N.msdybasecartesian,{minimizetendency:0,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.msspline);N("multiaxisline",{friendlyName:"Multi-axis Line Chart",standaloneInit:!0,
creditLabel:va,defaultDatasetType:"multiaxisline",defaultPlotShadow:1,axisPaddingLeft:0,axisPaddingRight:0,applicableDSList:{LINE:!0},_createDatasets:function(){var a=this.components,c=this.config,d=this.jsonData,b=d.axis,e,f,g,l,x=0,P,y,p=this.defaultDatasetType,h=this.applicableDSList,ib=a.legend.components.items||[],S,ta,k,n,t=this.config.isstacked,ma,ha={},m=0,r;if(b){e=b.length;this.config.categories=d.categories&&d.categories[0].category;d=a.dataset||(a.dataset=[]);l=d.length;r=c.axisDataSetMap=
[];for(f=0;f<e;f++)if(g=b[f].dataset,r[f]=[],g)for(y=g.length,x+=y,c=0;c<y;c++)if(n=g[c],n.seriesname&&(n.seriesname=Y(n.seriesname)),P=n.parentyaxis||G,ta=(ta=this.isDual&&P.toLowerCase()===eb?q(n.renderas,this.sDefaultDatasetType):q(n.renderas,p))&&ta.toLowerCase(),h[ta]||(ta=p),P=FusionCharts.get("component",["dataset",ta]))void 0===ha[ta]?ha[ta]=0:ha[ta]++,ma="datasetGroup_"+ta,k=FusionCharts.register("component",["datasetGroup",ta]),S=a[ma],k&&!S&&(S=a[ma]=new k,S.chart=this,S.init()),d[m]?(P=
d[m],S=P.JSONData,S=S.data?S.data.length:0,ta=n.data?n.data.length:0,S>ta&&P.removeData(ta-1,S-ta,!1),P.JSONData=n,P.index=f,P.axisIndex=f,P.configure(),r[f].push(m),m+=1):(P=new P,d.push(P),P.chart=this,P.index=f,P.axisIndex=f,r[f].push(m),m+=1,S&&(t?S.addDataSet(P,0,ha[ta]):S.addDataSet(P,ha[ta],0)),P.init(n));if(l>x){a=l-x;for(c=x;c<l;c++)ob.call(d[c]);d.splice(x,a);ib.splice(x,a)}}else this.setChartMessage()},_createAxes:function(){var a=this.components,c=FusionCharts.register("component",["axis",
"cartesian"]);a.yAxis=[];a.xAxis=[];a.xAxis[0]=a=new c;a.chart=this;a.init();this._setCategories()},_feedAxesRawData:function(){var a=this.components,c=this.config,d=a.colorManager,b=a.numberFormatter,e=this.jsonData,f=e.chart,g,l,x=this.is3d;l=x?Nb.chart3D:Nb.chart2D;var P=FusionCharts.register("component",["axis","cartesian"]),y,p,ja,ib,S,ta,k,n,t,ma,m,r;g=!1;var u=0;g={outCanfontFamily:q(f.outcnvbasefont,f.basefont,Ra),outCanfontSize:Wb(f.outcnvbasefontsize,f.basefontsize,10),outCancolor:q(f.outcnvbasefontcolor,
f.basefontcolor,d.getColor(l.baseFontColor)).replace(/^#? ([a-f0-9]+)/ig,"#$1"),axisNamePadding:f.xaxisnamepadding,axisValuePadding:f.labelpadding,axisNameFont:f.xaxisnamefont,axisNameFontSize:f.xaxisnamefontsize,axisNameFontColor:f.xaxisnamefontcolor,axisNameFontBold:f.xaxisnamefontbold,axisNameFontItalic:f.xaxisnamefontitalic,axisNameBgColor:f.xaxisnamebgcolor,axisNameBorderColor:f.xaxisnamebordercolor,axisNameAlpha:f.xaxisnamealpha,axisNameFontAlpha:f.xaxisnamefontalpha,axisNameBgAlpha:f.xaxisnamebgalpha,
axisNameBorderAlpha:f.xaxisnameborderalpha,axisNameBorderPadding:f.xaxisnameborderpadding,axisNameBorderRadius:f.xaxisnameborderradius,axisNameBorderThickness:f.xaxisnameborderthickness,axisNameBorderDashed:f.xaxisnameborderdashed,axisNameBorderDashLen:f.xaxisnameborderdashlen,axisNameBorderDashGap:f.xaxisnameborderdashgap,useEllipsesWhenOverflow:f.useellipseswhenoverflow,divLineColor:q(f.vdivlinecolor,f.divlinecolor,d.getColor(l.divLineColor)),divLineAlpha:q(f.vdivlinealpha,f.divlinealpha,x?d.getColor(Ia):
d.getColor(sa)),divLineThickness:h(f.vdivlinethickness,f.divlinethickness,1),divLineIsDashed:!!h(f.vdivlinedashed,f.vdivlineisdashed,f.divlinedashed,f.divlineisdashed,0),divLineDashLen:h(f.vdivlinedashlen,f.divlinedashlen,4),divLineDashGap:h(f.vdivlinedashgap,f.divlinedashgap,2),showAlternateGridColor:h(f.showalternatevgridcolor,0),alternateGridColor:q(f.alternatevgridcolor,d.getColor(La)),alternateGridAlpha:q(f.alternatevgridalpha,d.getColor(Ja)),numDivLines:f.numvdivlines,labelFont:f.labelfont,
labelFontSize:f.labelfontsize,labelFontColor:f.labelfontcolor,labelFontBold:f.labelfontbold,labelFontItalic:f.labelfontitalic,labelFontAlpha:f.labelalpha,maxLabelHeight:f.maxlabelheight,axisName:f.xaxisname,axisMinValue:f.xaxisminvalue,axisMaxValue:f.xaxismaxvalue,setAdaptiveMin:f.setadaptivexmin,adjustDiv:f.adjustvdiv,labelDisplay:f.labeldisplay,showLabels:f.showlabels,rotateLabels:f.rotatelabels,slantLabel:h(f.slantlabels,f.slantlabel),labelStep:h(f.labelstep,f.xaxisvaluesstep),showAxisValues:h(f.showxaxisvalues,
f.showxaxisvalue),showLimits:f.showvlimits,showDivLineValues:h(f.showvdivlinevalues,f.showvdivlinevalues),showZeroPlane:f.showvzeroplane,zeroPlaneColor:f.vzeroplanecolor,zeroPlaneThickness:f.vzeroplanethickness,zeroPlaneAlpha:f.vzeroplanealpha,showZeroPlaneValue:f.showvzeroplanevalue,trendlineColor:f.trendlinecolor,trendlineToolText:f.trendlinetooltext,trendlineThickness:f.trendlinethickness,trendlineAlpha:f.trendlinealpha,showTrendlinesOnTop:f.showtrendlinesontop,showAxisLine:h(f.showxaxisline,f.showaxislines,
f.drawAxisLines,0),axisLineThickness:h(f.xaxislinethickness,f.axislinethickness,1),axisLineAlpha:h(f.xaxislinealpha,f.axislinealpha,100),axisLineColor:q(f.xaxislinecolor,f.axislinecolor,oa)};l={outCanfontFamily:q(f.outcnvbasefont,f.basefont,Ra),outCanfontSize:Wb(f.outcnvbasefontsize,f.basefontsize,10),outCancolor:q(f.outcnvbasefontcolor,f.basefontcolor,d.getColor(l.baseFontColor)).replace(/^#? ([a-f0-9]+)/ig,"#$1"),useEllipsesWhenOverflow:f.useellipseswhenoverflow,showAlternateGridColor:0,axisNameFont:f.yaxisnamefont,
axisNameFontSize:f.yaxisnamefontsize,axisNameFontColor:f.yaxisnamefontcolor,axisNameFontBold:f.yaxisnamefontbold,axisNameFontItalic:f.yaxisnamefontitalic,axisNameBgColor:f.yaxisnamebgcolor,axisNameBorderColor:f.yaxisnamebordercolor,axisNameAlpha:f.yaxisnamealpha,axisNameFontAlpha:f.yaxisnamefontalpha,axisNameBgAlpha:f.yaxisnamebgalpha,axisNameBorderAlpha:f.yaxisnameborderalpha,axisNameBorderPadding:f.yaxisnameborderpadding,axisNameBorderRadius:f.yaxisnameborderradius,axisNameBorderThickness:f.yaxisnameborderthickness,
axisNameBorderDashed:f.yaxisnameborderdashed,axisNameBorderDashLen:f.yaxisnameborderdashlen,axisNameBorderDashGap:f.yaxisnameborderdashgap};x=a.xAxis[0];x.setCommonConfigArr(g,!1,!1,!1);x.configure();c.axesArr={leftAxes:[],rightAxes:[],axesMap:[],checkBox:[],leftSideSelected:!1};x=c.axesArr.leftAxes=[];ta=c.axesArr.rightAxes=[];k=c.axesArr.axesMap=[];y=e.axis||[];p=0;for(ja=y.length;p<ja;p+=1){a.yAxis[p]?e=a.yAxis[p]:(e=a.yAxis[p]=new P,e.chart=this,e.init());S=y[p];g=!1;r=0;for(ib=S.dataset?S.dataset.length:
0;r<ib;r+=1)0!==Number(S.dataset[r].visible)&&(g=!0);r=h(S.showaxis,1);ib=d.getPlotColor(p);n=q(S.color,f.axiscolor,ib);aa(n,100);t=h(S.divlinethickness,f.divlinethickness,1);ma=h(S.tickwidth,f.axistickwidth,2);m=h(S.axislinethickness,f.axislinethickness,2);(ib=!h(S.axisonleft,1))?(k.push({side:"r",index:ta.length,showAxis:r,checkBoxChecked:g}),ta.push({index:p,showAxis:r,checkBoxChecked:g})):(r&&(c.axesArr.leftSideSelected=!0),k.push({side:"l",index:x.length,showAxis:r,checkBoxChecked:g}),x.push({index:p,
showAxis:r,checkBoxChecked:g}));l.labelStep=h(S.yaxisvaluesstep,S.yaxisvaluestep,f.yaxisvaluesstep,f.yaxisvaluestep);l.axisMaxValue=S.maxvalue;l.axisMinValue=S.minvalue;l.setAdaptiveMin=h(S.setadaptiveymin,f.setadaptiveymin);l.numDivLines=h(S.numdivlines,f.numdivlines,4);l.adjustDiv=h(S.adjustdiv,f.adjustdiv);l.showAxisValues=h(S.showyaxisvalues,S.showyaxisvalue,f.showyaxisvalues,f.showyaxisvalue,1);l.showLimits=h(S.showlimits,f.showyaxislimits,f.showlimits,l.showAxisValues);l.showDivLineValues=h(S.showdivlinevalue,
f.showdivlinevalues,S.showdivlinevalues,l.showAxisValues);l.showZeroPlane=h(S.showzeroplane,f.showzeroplane);l.showZeroPlaneValue=h(S.showzeroplanevalue,f.showzeroplanevalue);l.zeroPlaneColor=S.zeroplanecolor;l.zeroPlaneThickness=h(S.zeroplanethickness,S.divlinethickness,c.zeroplanethickness,2);l.zeroPlaneAlpha=h(S.zeroplanealpha,S.divlinealpha,c.zeroplanealpha);l.showZeroPlaneOnTop=c.showzeroplaneontop;l.divLineColor=q(S.divlinecolor,n);l.divLineAlpha=h(S.divlinealpha,f.divlinealpha,d.getColor(sa),
100);l.divLineThickness=t;l.divLineIsDashed=!!h(S.divlinedashed,S.divlineisdashed,f.divlinedashed,f.divlineisdashed,0);l.divLineDashLen=h(S.divlinedashlen,f.divlinedashlen,4);l.divLineDashGap=h(S.divlinedashgap,f.divlinedashgap,2);l.showAxisLine=1;l.axisLineThickness=m;l.axisLineAlpha=100;l.axisLineColor=n;l.tickLength=ma;l.tickColor=n;l.tickAlpha=100;l.tickWidth=m;l.axisName=S.title;l.rotateAxisName=1;e.setCommonConfigArr(W({},l),!0,!1,ib);e.configure();b.parseMLAxisConf(S,p);0===h(S.showaxis)?(e.hide(),
e.setAxisConfig({axisIndex:p,drawAxisLineWRTCanvas:!1,drawLabels:!1,drawPlotlines:!1,drawAxisLine:!1,drawPlotBands:!1,drawAxisName:!1,drawTrendLines:!1,drawTrendLabels:!1,drawTick:!1,drawTickMinor:!1})):(e.show(),e.setAxisConfig({axisIndex:p,drawAxisLineWRTCanvas:!1,drawLabels:!0,drawPlotlines:!0,drawAxisLine:!0,drawPlotBands:!0,drawAxisName:!0,drawTrendLines:!0,drawTrendLabels:!0,drawTick:!0,drawTickMinor:!0}));u+=1}p=u;for(ja=a.yAxis.length;p<ja;p+=1)a.yAxis[p].hide()},_setAxisLimits:function(){var a=
this.components,c=this.config.axisDataSetMap,d=a.dataset,a=a.yAxis,b=c.length,e,f=-Infinity,g=Infinity,l,x,P;for(e=0;e<b;e+=1){l=0;for(x=c[e].length;l<x;l+=1)P=d[c[e][l]].getDataLimits(),f=X(f,P.max),g=da(g,P.min);Infinity===g&&(g=0);-Infinity===f&&(f=g+1);a[e].setDataLimit(f,g);f=-Infinity;g=Infinity}},_spaceManager:function(){var a,c,d,b=this.config,e=b.axesArr,f=this.components;d=b.legendPosition;var g=f.xAxis;a=f.yAxis;var l=this.hasLegend,x=b.yDepth;c=f.legend;var P=b.axesPadding,y=0,p=0,ja=
b.axisDataSetMap.length,q,S,ta,k=this.jsonData.chart,n=h(k.showborder,this.is3D?0:1),f=f.canvas.config.canvasBorderWidth;q=b.borderWidth=n?h(k.borderthickness,1):0;var t=b.canvasMarginTop,ma=b.canvasMarginBottom,m=b.canvasMarginLeft,k=b.canvasMarginRight,qc=b.height,n=b.width;this._allocateSpace({top:q,bottom:q,left:q,right:q});this._allocateSpace({left:b.canvasMarginLeft,right:b.canvasMarginRight});q=e.axesMap;S=e.leftAxes;e=e.rightAxes;ta="right"===d?.3*b.canvasWidth:.3*b.canvasHeight;!1!==l&&g&&
this._allocateSpace(c._manageLegendPosition(ta));for(l=0;l<ja;l+=1)0!==q[l].showaxis&&(c=.7*b.canvasWidth,c=a[l].placeAxis(c),a[l]&&this._allocateSpace(c),ta=q[l],"r"===ta.side?(e[ta.index].width=c.right,y+=P):(S[ta.index].width=c.left,p+=P));a=.225*b.availableHeight;a=this._manageActionBarSpace&&this._manageActionBarSpace(a)||{};this._allocateSpace(a);d=d===r?.6*b.canvasHeight:.6*b.canvasWidth;this._manageChartMenuBar(d);c=.7*b.canvasWidth;c>y+p&&this._allocateSpace({left:p,right:y});d=.6*b.canvasHeight;
g[0]&&this._allocateSpace(g[0].placeAxis(d));d=.325*b.canvasHeight;this._getDSspace&&this._allocateSpace(this._getDSspace(d));x&&this._allocateSpace({bottom:x});this._allocateSpace({top:f,bottom:f,left:f,right:f});g=t>b.canvasTop?t-b.canvasTop:0;x=ma>qc-b.canvasBottom?ma+b.canvasBottom-qc:0;y=m>b.canvasLeft?m-b.canvasLeft:0;p=k>n-b.canvasRight?k+b.canvasRight-n:0;this._allocateSpace({top:g,bottom:x,left:y,right:p});b.actualCanvasMarginTop=g;b.actualCanvasMarginLeft=y;b.actualCanvasMarginRight=p;b.actualCanvasMarginBottom=
x},_postSpaceManagement:function(){var a=this.config,c=this.components,d=c.xAxis&&c.xAxis[0],b=c.legend,e=a.xDepth,f=c.canvas.config,c=f.canvasBorderWidth,g=f.canvasPadding,l=f.canvasPaddingLeft,f=f.canvasPaddingRight;d&&d.setAxisDimention({x:a.canvasLeft+(e||0)+X(l,g),y:a.canvasBottom+(a.shift||0)+c,opposite:a.canvasTop-c,axisLength:a.canvasWidth-(e||0)-X(l,g)-X(f,g)});d&&d.shiftLabels(-e,0);b.postSpaceManager()},_resuffelAxis:function(){var a=this.data("axisDetails"),c=a.iapi,d=c.config.axesArr,
b,e,f,g,l;b=d.leftAxes;e=d.rightAxes;if("l"===a.position){for(g=b.length-1;g>a.index;g--)if(b[g].showAxis){f=g;l=a.index;break}void 0!==f&&(a=W({},b[l]),b[l]=W({},b[f]),b[f]=W({},a));if(d.leftSideSelected&&void 0===f)return;d.leftSideSelected=!0}else{for(g=0;g<a.index;g++)if(e[g].showAxis){f=g;l=a.index;break}void 0!==f&&(a=W({},e[l]),e[l]=W({},e[f]),e[f]=W({},a));if(!d.leftSideSelected&&void 0===f)return;d.leftSideSelected=!1}c._drawAxis(!0)},_dolegendInteraction:function(a,c){var d=c.components.dataset,
b=c.components.legend,e;if(this.checked)for(e in d)d.hasOwnProperty(e)&&(d[e].visible||d[e].axisIndex!==a||d[e].show());else for(e in d)d.hasOwnProperty(e)&&d[e].visible&&d[e].axisIndex===a&&d[e].hide();b.drawLegend()},_drawAxis:function(a){var c=this.config,d=c.axesArr,b=this.components,e=b.yAxis||[],f=b.xAxis||[],g=b.paper,l=c.allowAxisShift,x=c.allowSelection,P=this.graphics.axisHotElement||[],y=this.graphics.trackerContainer,p=this.graphics.buttonGroup,h=b.canvas.config,q=h.canvasBorderWidth,
S=h.canvasPaddingTop,h=h.canvasPaddingBottom,ta=c.axesPadding,k=this.components.tb,n=0,t=0,ma=0,m,r,u,D,v,w,F,L,I,z,A,B,U,C,Q,H,K=!1,E=0,X,M;I=this.get(Z,xa);X=I.animObj;M=I.dummyObj;A=I.transposeAnimDuration;B=I.animType;I=b.tb||(b.tb=new (FusionCharts.register("component",["toolbox","toolbox"])));I.init({iAPI:this,graphics:this.graphics,chart:this,components:b});z=b.toolBoxAPI.CheckboxSymbol;v=d.leftAxes;b=d.rightAxes;C=d.checkBox;for(w in C)C.hasOwnProperty(w)&&C[w].checkbox.hide();L={cursor:"col-resize",
stroke:Ma,fill:Ma,ishot:!0,visibility:!0};for(w=v.length-1;0<=w;--w)if(0!==v[w].showAxis&&(m=c.canvasLeft-q-n-ta,r=c.canvasTop+S,u=c.canvasHeight-S-h,D=v[w].width,U=v[w].index,F=e[U],F.setAxisDimention({x:m,y:r,opposite:c.canvasRight+q,axisLength:u}),n+=D+ta,!K&&d.leftSideSelected?(F.setAxisConfig({isActive:!0,axisNameAlignCanvas:!0,drawAxisNameFromBottom:!0}),K=!0):F.setAxisConfig({isActive:!1,axisNameAlignCanvas:!0,drawAxisNameFromBottom:!0}),x&&(C[U]?(F=C[U],Q=m-D-C[U].checkboxPrePos.x,H=r+u+4-
C[U].checkboxPrePos.y,F.checkbox.show(),F.checkbox.attachEventHandlers({click:{fn:this._dolegendInteraction,args:[U,this]}}),A?F.checkbox.node.animateWith(M,X,{transform:"t"+Q+","+H},A,B):F.checkbox.node.attr({transform:"t"+Q+","+H})):(F=C[U]={},F.checkbox=new z(G,!0,E++,k.pId),F.checkbox.conf=I.getDefaultConfiguration(),F.checkbox.attachEventHandlers({click:{fn:this._dolegendInteraction,args:[U,this]}}),F.checkbox.draw(m-D,r+u+4,{parentLayer:p}),F.checkboxPrePos={x:m-D,y:r+u+4}),F.checkbox.node.attr({stroke:ga({color:c.checkBoxColor,
alpha:100})}),F.checkbox.node.attr({"stroke-width":[1,2]}),c.axisConfigured&&(v[w].checkBoxChecked?F.checkbox.check():F.checkbox.uncheck())),l)){L.x=m-D;L.y=r;L.width=D;L.height=u;if(P[ma])for(u=P[ma].attr(L),u.show(),m=0,r=u.events.length;m<r;m++)u.events[m].unbind(),u.events.splice(m,1),--r;else u=P[ma]=g.rect(L,y);u.data("axisDetails",{iapi:this,position:"l",index:w});Vb?u.touchstart(this._resuffelAxis):u.mousedown(this._resuffelAxis);ma+=1}w=0;for(n=b.length;w<n;w+=1)if(0!==b[w].showAxis&&(U=
b[w].index,F=e[U],m=c.canvasRight+q+t+ta,r=c.canvasTop+S,u=c.canvasHeight-S-h,D=b[w].width,F.setAxisDimention({x:m,y:r,opposite:c.canvasLeft-q,axisLength:u}),t+=b[w].width+ta,K||d.leftSideSelected?F.setAxisConfig({isActive:!1,axisNameAlignCanvas:!0,drawAxisNameFromBottom:!0}):(F.setAxisConfig({isActive:!0,axisNameAlignCanvas:!0,drawAxisNameFromBottom:!0}),K=!0),v=F.getAxisConfig("axisNamePadding"),x&&(C[U]?(F=C[U],Q=m-D-F.checkboxPrePos.x,H=r+u+4-F.checkboxPrePos.y,F.checkbox.show(),F.checkbox.attachEventHandlers({click:{fn:this._dolegendInteraction,
args:[U,this]}}),A?F.checkbox.node.animateWith(M,X,{transform:"t"+Q+","+H},A,B):F.checkbox.node.attr({transform:"t"+Q+","+H})):(F=C[U]={},F.checkbox=new z(G,!0,E++,k.pId),F.checkbox.conf=I.getDefaultConfiguration(),F.checkbox.attachEventHandlers({click:{fn:this._dolegendInteraction,args:[U,this]}}),F.checkbox.draw(m+v,r+u+4,{parentLayer:p}),F.checkboxPrePos={x:m-D,y:r+u+4}),F.checkbox.node.attr({stroke:ga({color:c.checkBoxColor,alpha:100})}),F.checkbox.node.attr({"stroke-width":[1,2]}),c.axisConfigured&&
(b[w].checkBoxChecked?F.checkbox.check():F.checkbox.uncheck())),l)){L.x=m;L.y=r;L.width=D;L.height=u;if(P[ma])for(u=P[ma].attr(L),u.show(),m=0,r=u.events.length;m<r;m++)u.events[m].unbind(),u.events.splice(m,1),--r;else u=P[ma]=g.rect(L,y);u.data("axisDetails",{iapi:this,position:"r",index:w});Vb?u.touchstart(this._resuffelAxis):u.mousedown(this._resuffelAxis);ma+=1}this.graphics.axisHotElement=P;w=ma;for(n=P.length;w<n;w+=1)P[w].hide();if(!a)for(w=0,n=f.length;w<n;w++)f[w].draw();w=0;for(n=e.length;w<
n;w++)e[w].draw();c.axisConfigured=!1}},N.mscartesian,{},N.areabase);N("inversemsline",{friendlyName:"Inverted Y-Axis Multi-series Line Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:v,defaultPlotShadow:1,applicableDSList:{LINE:!0}},N.msinversecartesian,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);N("inversemsarea",{friendlyName:"Inverted Y-Axis Multi-series Area Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:"area",applicableDSList:{area:!0}},
N.msinversecartesian,{},N.areabase);N("inversemscolumn2d",{friendlyName:"Inverted Y-Axis Multi-series Column Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:C,applicableDSList:{COLUMN:!0},isInverse:!0},N.msinversecartesian);N("logmsline",{standaloneInit:!0,friendlyName:"Multi-series Line Chart",creditLabel:va,defaultDatasetType:v,defaultPlotShadow:1,applicableDSList:{LINE:!0}},N.mslog,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);N("logmscolumn2d",{friendlyName:"Multi-series Log Column Chart",
standaloneInit:!0,creditLabel:va,defaultDatasetType:C,applicableDSList:{COLUMN:!0}},N.mslog);N("logstackedcolumn2d",{friendlyName:"Stacked Log Column Chart",standaloneInit:!0,creditLabel:va},N.logmscolumn2d,{isstacked:!0});N("errorbar2d",{friendlyName:"Error Bar Chart",standaloneInit:!0,creditLabel:va,showValues:0,isErrorChart:!0,fireGroupEvent:!0,hasLegend:!0,defaultDatasetType:"errorbar2d",applicableDSList:{errorbar2d:!0},eiMethods:{}},N.mscartesian);FusionCharts.register("component",["dataset",
"ErrorBar2D",{configure:function(){var a=this.chart,c=this.config,d=this.JSONData,b=d.data,e=a.config.categories,f=da(e&&e.length,b&&b.length),g=a.jsonData.chart,l=a.components.colorManager,x,P=l.getPlotColor(this.index||this.positionIndex),y=h(d.dashed,g.plotborderdashed),p=h(g.useplotgradientcolor,1),ja=t.parseUnsafeString,ib=ja(g.yaxisname),S=ja(g.xaxisname),ta=ja(q(g.tooltipsepchar,Rb)),n=h(g.seriesnameintooltip,1),k=t.parseTooltext,m,ma,r,u,v,D,w,Yb,F,L,I,z,A,C,U,B,Q,K,E,tc,N,M,O,Y,R,wa,Z,na,
W=t.getDashStyle,V=this.components.data,la=a.components.numberFormatter,aa=a.isBar,ba=a.is3D;Q=a.isStacked;var ca,ea,ka;x={};x=x.dataObj||(x.dataObj={});L=x.chart||(x.chart={});c.legendSymbolColor=P;x=c.showplotborder=h(g.showplotborder,ba?0:1);c.plotDashLen=w=h(g.plotborderdashlen,5);c.plotDashGap=Yb=h(g.plotborderdashgap,4);c.plotfillAngle=I=h(360-g.plotfillangle,aa?180:90);c.plotFillAlpha=z=q(d.alpha,g.plotfillalpha,za);c.plotColor=q(d.color,P);c.legendSymbolColor=c.plotColor;c.isRoundEdges=F=
h(g.useroundedges,0);c.plotRadius=h(g.useRoundEdges,c.isRoundEdges?1:0);c.plotFillRatio=A=q(d.ratio,g.plotfillratio);c.plotgradientcolor=C=t.getDefinedColor(g.plotgradientcolor,l.getColor("plotGradientColor"));!p&&(C=G);c.plotBorderAlpha=U=x?q(g.plotborderalpha,z,za):0;c.plotBorderColor=B=q(g.plotbordercolor,ba?Ga:l.getColor("plotBorderColor"));c.plotBorderThickness=p=h(g.plotborderthickness,1);c.plotBorderDashStyle=y=y?W(w,Yb,p):"none";c.showValues=h(d.showvalues,g.showvalues,1);c.valuePadding=h(g.valuepadding,
2);c.enableAnimation=ca=h(g.animation,g.defaultanimation,1);c.animation=ca?{duration:1E3*h(g.animationduration,1)}:!1;L.transposeAnimation=c.transposeAnimation=h(g.transposeanimation,L.transposeAnimation,ca);c.transposeAnimDuration=1E3*h(g.transposeanimduration,.2);c.showShadow=F||ba?h(g.showshadow,1):h(g.showshadow,l.getColor("showShadow"));c.showHoverEffect=L=h(g.plothovereffect,g.showhovereffect,void 0);c.showTooltip=l=h(g.showtooltip,1);c.stack100Percent=ca=h(a.stack100percent,g.stack100percent,
0);c.definedGroupPadding=X(h(g.plotspacepercent),0);c.plotSpacePercent=X(h(g.plotspacepercent,20)%100,0);c.maxColWidth=h(aa?g.maxbarheight:g.maxcolwidth,50);c.showPercentValues=h(g.showpercentvalues,Q&&ca?1:0);c.showPercentInToolTip=h(g.showpercentintooltip,Q&&ca?1:0);c.plotPaddingPercent=h(g.plotpaddingpercent);c.rotateValues=h(g.rotatevalues)?270:0;c.placeValuesInside=h(g.placevaluesinside,0);c.includeInLegend=h(d.includeinlegend,1);c.errorInPercent=ea=h(d.errorinpercent,g.errorinpercent);c.use3DLighting=
h(g.use3dlighting,1);c.parentYAxis=ca=q(d.parentyaxis&&d.parentyaxis.toLowerCase(),kb)===eb?1:0;V||(V=this.components.data=[]);for(ka=0;ka<f;ka++)D=b&&b[ka],Q=(u=V[ka])&&u.config,u||(u=V[ka]={graphics:{}}),u.config||(Q=V[ka].config={}),Q.showValue=h(D.showvalue,c.showValues),Q.setValue=u=la.getCleanValue(D.value),Q.setLink=q(D.link),Q.toolTipValue=ma=la.dataLabels(u,ca),Q.setDisplayValue=P=ja(D.displayvalue),Q.displayValue=q(P,ma),ma=h(D.dashed),P=h(D.dashlen,w),m=Yb=h(D.dashgap,Yb),Q.plotBorderDashStyle=
m=1===ma?W(P,m,p):0===ma?"none":y,P=q(D.color,c.plotColor),z=q(D.alpha,c.plotFillAlpha),0>u&&!F&&(v=I,I=aa?180-I:360-I),Q.colorArr=K=t.graphics.getColumnColor(P+","+C,z,A,I,F,B,U.toString(),aa?1:0,ba?!0:!1),Q.label=ma=H(ja(q(e[ka].tooltext,e[ka].label))),0!==L&&(E=q(D.hovercolor,d.hovercolor,g.plotfillhovercolor,g.columnhovercolor,P),tc=q(D.hoveralpha,d.hoveralpha,g.plotfillhoveralpha,g.columnhoveralpha,z),N=q(D.hovergradientcolor,d.hovergradientcolor,g.plothovergradientcolor,C),!N&&(N=G),M=q(D.hoverratio,
d.hoverratio,g.plothoverratio,A),O=h(360-D.hoverangle,360-d.hoverangle,360-g.plothoverangle,I),Y=q(D.borderhovercolor,d.borderhovercolor,g.plotborderhovercolor,B),R=q(D.borderhoveralpha,d.borderhoveralpha,g.plotborderhoveralpha,g.plotfillhoveralpha,U,z),z=h(D.borderhoverthickness,d.borderhoverthickness,g.plotborderhoverthickness,p),wa=h(D.borderhoverdashed,d.borderhoverdashed,g.plotborderhoverdashed),Z=h(D.borderhoverdashgap,d.borderhoverdashgap,g.plotborderhoverdashgap,w),na=h(D.borderhoverdashlen,
d.borderhoverdashlen,g.plotborderhoverdashlen,Yb),wa=wa?W(na,Z,z):m,1==L&&E===P&&(E=Ob(E,70)),P=t.graphics.getColumnColor(E+","+N,tc,M,O,F,Y,R.toString(),aa?1:0,ba?!0:!1),Q.setRolloutAttr={fill:ba?[ga(K[0]),!c.use3DLighting]:ga(K[0]),stroke:x&&ga(K[1]),"stroke-width":p,"stroke-dasharray":m},Q.setRolloverAttr={fill:ba?[ga(P[0]),!c.use3DLighting]:ga(P[0]),stroke:x&&ga(P[1]),"stroke-width":z,"stroke-dasharray":wa}),m=Q.toolTipValue,P=H(ja(q(D.tooltext,d.plottooltext,g.plottooltext))),Q.setErrorValue=
K=la.getCleanValue(D.errorvalue),Q.errorInPercent=h(D.errorinpercent,ea,0),Q.errorInPercent&&(Q.setErrorValue=K=h((K/100*u).toFixed(2))),Q.positiveErrorValue=la.getCleanValue(D.positiveerrorvalue),Q.errorInPercent&&Q.positiveErrorValue&&(Q.positiveErrorValue=h((Q.positiveErrorValue/100*u).toFixed(2))),Q.negativeErrorValue=la.getCleanValue(D.negativeerrorvalue),Q.errorInPercent&&Q.negativeErrorValue&&(Q.negativeErrorValue=h((Q.negativeErrorValue/100*u).toFixed(2))),Q.errorToolTipValue=E=la.dataLabels(K,
ca),Q.negativeErrorToolTipValue=la.dataLabels(Q.negativeErrorValue,ca),Q.positiveErrorToolTipValue=la.dataLabels(Q.positiveErrorValue,ca),Q.errorPercentValue=tc=qa(K/u*za*za)/za+Wa,l?null===m?D=!1:void 0!==P?(u=[1,2,3,4,5,6,7,99,100,101,102,120,121],ma={yaxisName:ib,xaxisName:S,formattedValue:m,errorValue:K,errorDataValue:E,errorPercentValue:tc,errorPercentDataValue:tc,positiveErrorValue:Q.positiveErrorToolTipValue,negativeErrorValue:Q.negativeErrorToolTipValue,label:ma},D=k(P,u,ma,D,g,d)):(n&&(r=
T(d&&d.seriesname)),D=r?r+ta:G,D+=ma?ma+ta:G):D=!1,Q.toolText=D,Q.setTooltext=D,v&&(I=v);c=this.config.includeInLegend;!1!==a.hasLegend&&c&&this._addLegend();this.ErrorValueConfigure()},ErrorValueConfigure:function(){var a=this.chart,c=this.config,d=this.JSONData,b=d.data,e=a.config.categories,e=da(e&&e.length,b&&b.length),f=a.jsonData.chart,a=t.parseUnsafeString,g,l,x,P=this.components.data,y=a(f.yaxisname),p=a(f.xaxisname),ja=h(f.seriesnameintooltip,1),ib,S=a(q(f.tooltipsepchar,Rb)),ta,n,k,m,r,
u,v,w=-Infinity,D=Infinity,J,Yb,F,L,I=function(a){c.showTooltip?null===r?a=!1:void 0!==a?(ta=[1,2,3,4,5,6,7,99,100,101,102,120,121],n={yaxisName:y,xaxisName:p,formattedValue:x.toolTipValue,errorValue:m,errorDataValue:x.errorToolTipValue,errorPercentValue:x.errorPercentValue,errorPercentDataValue:x.errorPercentValue,positiveErrorValue:x.positiveErrorToolTipValue,negativeErrorValue:x.negativeErrorToolTipValue,label:x.label},a=ya(a,ta,n,g,f,d)):(ja&&(ib=T(d&&d.seriesname)),a=ib?ib+S:G,a+=x.label?x.label+
S:G):a=!1;return a},z;c.showValues=h(d.showvalues,f.showvalues,0);c.errorBarShadow=v=h(f.errorbarshadow,f.showshadow,1);c.ignoreEmptyDatasets=h(d.ignoreemptydatasets,0);Yb=h(f.halferrorbar,1);c.notHalfErrorBar=!h(f.halferrorbar,1);k=Xb(q(d.errorbaralpha,f.errorbaralpha,c.plotFillAlpha));c.errorBarWidthPercent=h(d.errorbarwidthpercent,f.errorbarwidthpercent,70);c.errorBarColor=aa(Ha(q(d.errorbarcolor,f.errorbarcolor,tb)),k);c.errorBarThickness=h(d.errorbarthickness,f.errorbarthickness,1);c.shadowOpacity=
v?k/250:0;for(z=0;z<e;z++)if(g=b&&b[z],x=(l=P[z])&&l.config,v=k=void 0,void 0!==h(g.value)){l||(l=P[z]={graphics:{}});l.config||(x=P[z].config={});x.notHalfErrorBar=c.notHalfErrorBar;x.halfErrorBar=Yb;J=x.setValue;x.showValue=h(g.showvalue,c.showValues);x.hasErrorValue=void 0!==h(g.errorvalue)?1:0;m=x.setErrorValue;x.errorValue=m;r=l=x.errorToolTipValue;u=H(a(q(g.errorplottooltext,d.errorplottooltext,f.errorplottooltext,r)));l=I(u);(u=H(a(q(g.errorplottooltext,d.errorplottooltext,f.errorplottooltext,
x.positiveErrorToolTipValue))))&&x.positiveErrorToolTipValue&&(k=I(u));(u=H(a(q(g.errorplottooltext,d.errorplottooltext,f.errorplottooltext,x.negativeErrorToolTipValue))))&&x.negativeErrorToolTipValue&&(v=I(u));F=x.positiveErrorValue;L=x.negativeErrorValue;if(F||L)x.halfErrorBar=0,x.notHalfErrorBar=!0;u=J+(null!==F?F:m);J-=x.halfErrorBar?0:0>L&&0>J?0:null!=L?L:m;w=X(w,u,J);D=da(D,u,J);null==m&&(m=void 0);x.errorValueArr=[];x.errorValueArr.push({errorValue:null!=L?L:null!==F?m:-m,tooltext:v||l});x.notHalfErrorBar&&
x.errorValueArr.push({errorValue:null!==F?-F:null!=L?-m:m,tooltext:k||l})}c.maxValue=w;c.minValue=D},init:function(a){var c=this.chart,d=c.components,d=c.isDual?d.yAxis[this.yAxis||0]:d.yAxis[0];if(!a)return!1;this.JSONData=a;this.yAxis=d;this.chartGraphics=c.chartGraphics;this.components={};this.graphics={};this.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},draw:function(){var a=this,c=a.JSONData,d=a.chart.jsonData.chart,b=a.config,e=a.groupManager,
f=a.index,g=a.chart.config.categories,l=c.data,x,P,y,p,ja=a.visible,ib=a.chart,S=ib.getJobList(),ta=ib.components.paper,k=ib.components.xAxis[0],n=ib.components.yAxis[0];x=ib.graphics.columnGroup;var m,r,u=ib.graphics,v=t.parseUnsafeString,w=t.getValidValue,D=t.Raphael,J=b.showTooltip,Yb=k.getAxisPosition(0),F=k.getAxisPosition(1),L=b.groupMaxWidth=F-Yb,I=b.definedGroupPadding,z=b.plotSpacePercent/200,A=e.getDataSetPosition(a),Yb=e.manageClip,C=b.maxColWidth,U=ib.get(Z,xa),ib=U.animType,F=U.animObj,
B=U.dummyObj,U=U.duration,L=(1-.01*I)*L||da(L*(1-2*z),1*C),L=h(A.columnWidth,L/1),Q,I=A.xPosOffset||0,A=A.height,H,K,z=a.components.data,E,X,M,N,O,C=n.getLimit(),R=C.min,C=0<C.max&&0>R,R=n.getAxisBase(),T=n.yBasePos=n.getAxisPosition(R),Y=0,na=b.showShadow,W=b.plotBorderThickness,b=b.plotRadius,V=a.graphics.container,la=a.graphics.trackerContainer,aa=a.graphics.dataLabelContainer,ca=a.graphics.shadowContainer,ba=a.graphics.errorGroupContainer,ea=a.graphics.errorTrackerContainer,ka=a.graphics.errorShadowContainer;
p=u.trackerGroup;var qa,u=!0,oa=!1,pa=!1,za=(a.components.removeDataArr||[]).length,Fa=a.components.pool||[],Ha,Na=function(){!1!==a.visible||!1!==a._conatinerHidden&&void 0!==a._conatinerHidden||(V.hide(),la.hide(),ca.hide(),aa&&aa.hide(),ba&&ba.hide(),ea&&ea.hide(),ka&&ka.hide(),a._conatinerHidden=!0)},Ea=function(){a.drawLabel();a.drawErrorValue()};V||(V=a.graphics.container=ta.group(Xa,x),ja||V.hide());la||(la=a.graphics.trackerContainer=ta.group(Va,p),ja||la.hide());ca||(ca=a.graphics.shadowContainer=
ta.group(ac,x).toBack(),ja||ca.hide());x=k.getCategoryLen();for(p=0;p<x;p++)if(P=l&&l[p],E=z[p])if(Ha=E.trackerConfig={},y=(O=E&&E.config)&&O.setValue,void 0!==E&&void 0!==y&&null!==y&&(m=0<=y,M=O.setLink,qa=O.colorArr,E.graphics||(z[p].graphics={}),N=O.displayValue,m=m?O.previousPositiveY:O.previousNegativeY,X=w(v(q(P.tooltext,c.plottooltext,d.plottooltext))),Q=n.getAxisPosition(m||R),P=k.getAxisPosition(p)+I,0!==A?(m=n.getAxisPosition(y+(m||0)),H=Ua(Q-m)):(H=0,m=Q),m=da(m,Q),!C&&Yb&&ja&&0<W&&(H+=
W,e.manageClip=!1),E._oriXPos=P,E._oriYPos=m,E._oriHeight=H,E._oriWidth=L,e.isCrisp?(r=D.crispBound(P,m,L,H,W),P=r.x,m=r.y,Q=r.width,H=r.height):Q=L,K=!1!==O.toolText&&O.toolText+(X?"":O.toolTipValue),X=O.plotBorderDashStyle,Ha.eventArgs={index:p,link:M,value:y,displayValue:N,categoryLabel:g[p].label,toolText:K?K:"",id:G,datasetIndex:f,datasetName:c.seriesname,visible:ja},U||(T=m,Y=H),y={x:P,y:T,width:Q,height:Y||1,r:b,ishot:!J,fill:ga(qa[0]),stroke:ga(qa[1]),"stroke-width":W,"stroke-dasharray":X,
"stroke-linejoin":Pa,visibility:ja},E._xPos=P,E._yPos=m,E._height=H,E._width=Q,E.graphics.element?(oa=pa=!0,E=E.graphics.element,y={x:P,y:m,width:Q,height:H||1},E.animateWith(B,F,y,U,ib,u&&Na),E.attr({r:b,ishot:!J,fill:ga(qa[0]),stroke:ga(qa[1]),"stroke-width":W,"stroke-dasharray":X,"stroke-linejoin":Pa,visibility:ja}),O.elemCreated=!1):(Fa.element&&Fa.element.length?(E=E.graphics.element=Fa.element.shift(),E.show()):E=E.graphics.element=ta.rect(y,V),E.attr(y),E.animateWith(B,F,{y:m,height:H||1},
U,ib,u&&Ea),u=!1,O.elemCreated=!0),E.shadow({opacity:na},ca).data("BBox",r),M||J))H<ab&&(m-=(ab-H)/2,H=ab),Ha.attr={x:P,y:m,width:Q,height:H,r:b,cursor:M?"pointer":G,stroke:Ma,"stroke-width":W,fill:Ma,ishot:!0,visibility:ja};S.trackerDrawID.push($a.addJob(a.drawTracker,a,[],t.priorityList.tracker));za&&a.remove();oa&&a.drawLabel();pa&&a.drawErrorValue()},show:function(){var a=this.graphics&&this.graphics.container,c=this.graphics&&this.graphics.trackerContainer,d=this.graphics&&this.graphics.dataLabelContainer,
b=this.graphics&&this.graphics.shadowContainer,e=this.graphics&&this.graphics.errorGroupContainer,f=this.graphics&&this.graphics.errorTrackerContainer,g=this.graphics&&this.graphics.errorShadowContainer,l=this.chart.is3D,x=this.components.data,P=this.chart.config.categories,y=this.yAxis,p=this.chart,P=da(this.JSONData.data&&this.JSONData.data.length,P&&P.length);p._chartAnimation();this.visible=!0;this._conatinerHidden=!1;if(l)for(a=0;a<P;a++)x[a].graphics.element&&x[a].graphics.element.attr(Qb,ca),
x[a].graphics.hotElement&&x[a].graphics.hotElement.attr(Qb,ca);else a.show(),c.show();b.show();d&&d.show();e&&e.show();f&&f.show();g&&g.show();p._setAxisLimits();y.draw();p._drawDataset()},hide:function(){var a=this.yAxis,c=this.chart;c._chartAnimation();this.visible=!1;c._setAxisLimits();a.draw();c._drawDataset()},drawErrorValue:function(){var a=this.config,c=this.chart.config.categories,d=this.JSONData.data,b=c&&c.length,e=d&&d.length,f,g=this.visible,l=this.chart,d=l.getJobList(),x=l.graphics.columnGroup,
c=l.components.paper,P=l.components.yAxis[0],y=this.components.data,p=this.groupManager.getDataSetPosition(this).height,h=l.get(Z,xa),q=h.animType,S=h.animObj,ta=h.dummyObj,h=h.duration,k=a.errorBarThickness,n=a.errorBarWidthPercent,m=a.errorBarColor,r=a.showTooltip,a=a.shadowOpacity,u=this.graphics.errorGroupContainer,v=this.graphics.errorTrackerContainer,w=this.graphics.errorShadowContainer,l=l.graphics.trackerGroup,D,J,z,F,L,I,A,C,B,U;u||(u=this.graphics.errorGroupContainer=c.group(sb,x),g||u.hide());
v||(v=this.graphics.errorTrackerContainer=c.group(Ya,l),g||v.hide());w||(w=this.graphics.errorShadowContainer=c.group(Eb,x).toBack(),g||w.hide());b=da(b,e);for(e=0;e<b;e++)if(g=y[e],v=g.errorTrackerConfig={},v.errorTrackerArr=[],z=(D=g&&g.config)&&D.setValue,!g||void 0!==z&&null!==z||(g.graphics.element&&(g.graphics.element.hide(),g.graphics.element.shadow(!1)),g.graphics.hotElement&&g.graphics.hotElement.hide(),g.graphics.error&&g.graphics.error[0]&&(g.graphics.error[0].hide(),g.graphics.error[0].shadow({opacity:0})),
g.graphics.error&&g.graphics.error[1]&&(g.graphics.error[1].hide(),g.graphics.error[1].shadow({opacity:0})),g.graphics.errorTracker&&g.graphics.errorTracker[0]&&(g.graphics.errorTracker[0].hide(),g.graphics.errorTracker[0].shadow({opacity:0})),g.graphics.errorTracker&&g.graphics.errorTracker[1]&&(g.graphics.errorTracker[1].hide(),g.graphics.errorTracker[1].shadow({opacity:0}))),void 0!==g&&void 0!==z&&null!==z)if(x=D.errorValueArr,v.errorLen=l=x.length,!g.graphics.error&&(g.graphics.error=[]),!g.graphics.errorTracker&&
(g.graphics.errorTracker=[]),D.errorValue===G||void 0===D.errorValue||null===D.errorValue&&null===D.positiveErrorValue&&null===D.negativeErrorValue)g.graphics.error&&g.graphics.error[0]&&(g.graphics.error[0].hide(),g.graphics.error[0].shadow({opacity:0})),g.graphics.error&&g.graphics.error[1]&&(g.graphics.error[1].hide(),g.graphics.error[1].shadow({opacity:0})),g.graphics.errorTracker&&g.graphics.errorTracker[0]&&(g.graphics.errorTracker[0].hide(),g.graphics.errorTracker[0].shadow({opacity:0})),g.graphics.errorTracker&&
g.graphics.errorTracker[1]&&(g.graphics.errorTracker[1].hide(),g.graphics.errorTracker[1].shadow({opacity:0}));else for(D=D.setLink,A=0>z,J=g._oriXPos,C=g._oriYPos,B=g._oriWidth,U=g._oriHeight,z=A?C+U:C,J+=B/2;l--;)v.errorTrackerArr[l]={},I=x[l],v.errorTrackerArr[l].tooltext=I.tooltext,f=z,F=I.errorValue,null===F||isNaN(F)?(g.graphics.error&&g.graphics.error[l]&&(g.graphics.error[l].hide(),g.graphics.error[l].shadow({opacity:l})),g.graphics.errorTracker&&g.graphics.errorTracker[l]&&(g.graphics.errorTracker[l].hide(),
g.graphics.errorTracker[l].shadow({opacity:l}))):(I=n/100*B,I/=2,L=0===p?0:1,F=C+(P.getAxisPosition(0)-P.getAxisPosition(1))*F*L,A&&(F+=U),F=qa(F)+k%2/2,L=qa(J)+k%2/2,I=["M",L,f,"V",F,"M",L-I,F,"H",L+I],g.graphics.error[l]?(f={path:I},F=g.graphics.error[l],F.animateWith(ta,S,f,h,q),F.attr({stroke:m,ishot:!r,"stroke-width":k,cursor:D?"pointer":G,"stroke-linecap":ba})):F=g.graphics.error[l]=c.path(I,u).attr({stroke:m,ishot:!r,"stroke-width":k,cursor:D?"pointer":G,"stroke-linecap":ba}),F.show(),F.shadow({opacity:a},
w),v.errorTrackerArr[l].attr={path:I,stroke:Ma,"stroke-width":k<ab?ab:k,cursor:D?"pointer":G,ishot:!!D});d.trackerDrawID.push($a.addJob(this.drawErrorTracker,this,[],t.priorityList.tracker))},drawErrorTracker:function(){var a=this.config,c=this.chart,d=this.components.data,b=c.components,e=b.paper,b=b.xAxis[0].getCategoryLen(),f=this.graphics.errorTrackerContainer,g,l,x,P,y,p,h,q,S,ta=function(a){ka.call(this,c,a)},k=function(a){ka.call(this,c,a,"DataPlotRollOver")},n=function(a){ka.call(this,c,a,
"DataPlotRollOut")},m=function(a){return function(){void 0!==a&&c.linkClickFN.call({link:a},c)}};for(y=0;y<b;y++)if(p=d[y]){P=p&&p.config;l=p.trackerConfig;g=p.errorTrackerConfig;x=g.errorTrackerArr;for(g=g.errorLen;g--;)if(x[g]&&(S=x[g].attr)){if(p.graphics.errorTracker[g])p.graphics.errorTracker[g].show(),p.graphics.errorTracker[g].attr(S);else if(P.setLink||a.showTooltip)h=p.graphics.errorTracker[g]=e.path(f).attr(S);q=l.eventArgs;(h=p.graphics.errorTracker[g])&&h.data("eventArgs",q);h&&h.click(ta).data("groupId",
void 0).hover(k,n);a.showTooltip?h&&h.tooltip(x[g].tooltext):h&&h.tooltip(!1);(P.setLink||a.showTooltip)&&h&&h.click(m(P.setLink))}P.notHalfErrorBar||(p.graphics.error&&p.graphics.error[1]&&p.graphics.error[1].hide()&&p.graphics.error[1].shadow({opacity:0}),p.graphics.errorTracker&&p.graphics.errorTracker[1]&&p.graphics.errorTracker[1].hide()&&p.graphics.errorTracker[1].shadow({opacity:0}))}},remove:function(){var a=this.components,c=a.removeDataArr,d=a.pool||(a.pool={element:[],hotElement:[],label:[]}),
b=c.length,e,f=this.maxminFlag,g,l;for(l=0;l<b;l++)e=c[0],c.splice(0,1),e&&e.graphics&&(g=e.graphics,g.element&&g.element.hide()&&g.element.shadow({opacity:0}),g.error&&g.error[0]&&g.error[0].hide()&&g.error[0].shadow({opacity:0}),g.error&&g.error[1]&&g.error[1].hide()&&g.error[1].shadow({opacity:0}),g.errorTracker&&g.errorTracker[0]&&g.errorTracker[0].hide()&&g.errorTracker[0].shadow({opacity:0}),g.errorTracker&&g.errorTracker[1]&&g.errorTracker[1].hide()&&g.errorTracker[1].shadow({opacity:0}),g.hotElement&&
g.hotElement.hide()&&g.hotElement.attr({width:0}),e.graphics.element&&(d.element=d.element.concat(e.graphics.element)),e.graphics.hotElement&&(d.hotElement=d.hotElement.concat(e.graphics.hotElement)),e.graphics.label&&(d.label=d.label.concat(e.graphics.label)));a.pool=d;f&&this.setMaxMin()}},"Column"]);FusionCharts.register("component",["datasetGroup","errorbar2d",{},C]);N("errorline",{friendlyName:"Error Line Chart",useErrorGroup:!0,isErrorChart:!0,fireGroupEvent:!0,creditLabel:va,defaultPlotShadow:1,
axisPaddingLeft:0,axisPaddingRight:0,canvasPaddingModifiers:["anchor","errorbar"],defaultDatasetType:"errorline",applicableDSList:{errorline:!0}},N.mscartesian,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);FusionCharts.register("component",["dataset","ErrorLine",{type:v,ErrorValueConfigure:function(){var a=this.chart,c=this.config,d=a.config,b=c.parentYAxis,e=this.JSONData,f=e.data,g=a.jsonData.chart,l=a.components.xAxis[0].getCategoryLen(),x=t.parseUnsafeString,P,y,p,
ja=this.components.data,a=a.components.numberFormatter,k,S,ta,n,m=c.linethickness,r=-Infinity,u=Infinity,ha,v=x(g.yaxisname),w=x(g.xaxisname),D=q(g.tooltipsepchar,Rb),J,z,F,L=h(g.seriesnameintooltip,1),I=function(a){d.showtooltip?null===ta?a=!1:void 0!==a?(J=[1,2,3,4,5,6,7,99,100,101,102],z={yaxisName:v,xaxisName:w,formattedValue:p.toolTipValue,errorValue:S,errorDataValue:p.errorToolTipValue,errorPercentValue:p.errorPercentValue,errorPercentDataValue:p.errorPercentValue,label:p.label},a=ya(a,J,z,
P,g,e)):(L&&(F=T(e&&e.seriesname)),a=F?F+D:G,a+=p.label?p.label+D:G):a=!1;return a};c.errorBarShadow=n=h(g.errorbarshadow,g.showshadow,1);c.ignoreEmptyDatasets=h(e.ignoreemptydatasets,0);ha=h(g.halferrorbar,1);c.notHalfErrorBar=!h(g.halferrorbar,1);k=Xb(q(e.errorbaralpha,g.errorbaralpha,c.alpha));c.errorBarWidth=h(e.errorbarwidth,g.errorbarwidth,5);c.errorBarColor=aa(Ha(q(e.errorbarcolor,g.errorbarcolor,tb)),k);y=h(e.errorbarthickness,g.errorbarthickness,1);c.errorBarThickness=y>m?m:y;c.shadowOpacity=
n?k/250:0;for(k=0;k<l;k++)P=f&&f[k],f&&P&&(p=(y=ja[k])&&y.config,y||(y=ja[k]={graphics:{}}),y.config||(p=ja[k].config={}),m=p.setValue,S=a.getCleanValue(P.errorvalue),p.errorToolTipValue=a.dataLabels(S,b),qa(S/m*za*za),p.hasErrorValue=void 0!==h(P.errorvalue)?1:0,S=a.getCleanValue(P.errorvalue),ta=y=p.errorToolTipValue,y=H(x(q(P.errorplottooltext,e.errorplottooltext,g.errorplottooltext,ta))),p.errorValue=P.errorvalue,n=m+S,m-=ha?0:S,r=X(r,n,m),u=da(u,n,m),y=I(y),p.errorValueArr=[],p.errorValueArr.push({errorValue:-S,
tooltext:y}),c.notHalfErrorBar&&p.errorValueArr.push({errorValue:S,tooltext:y}),p.toolText=I(p.setTooltext));c.maxValue=r;c.minValue=u},init:function(a){var c=this.chart,d=c.components,b=c.isDual;this.chart=c;this.yAxis=b?d.yAxis[this.yAxis||0]:d.yAxis[0];this.components={};this.graphics={};this.JSONData=a;this.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},show:function(){var a=this.chart,c=this.yAxis,d=this.graphics&&this.graphics.container,b=this.graphics&&
this.graphics.trackerContainer,e=this.graphics&&this.graphics.dataLabelContainer,f=this.graphics&&this.graphics.errorGroupContainer,g=this.graphics&&this.graphics.errorTrackerContainer,l=this.graphics&&this.graphics.errorShadowContainer;a._chartAnimation();d.lineGroup.show();d.anchorGroup.show();d.anchorShadowGroup.show();d.lineShadowGroup.show();b.show();e.show();this.visible=!0;f&&f.show();g&&g.show();l&&l.show();this._conatinerHidden=!1;a._setAxisLimits();c.draw();a._drawDataset()},hide:function(){var a=
this.chart,c=this.yAxis;a._chartAnimation();this.visible=!1;a._setAxisLimits();c.draw();a._drawDataset()},drawErrorValue:function(){var a=this.config,c=this.chart,d=c.getJobList(),b=c.graphics.datasetGroup,e=c.components,f=e.xAxis[0].getCategoryLen(),g,l,x=this.visible,e=e.paper,P=this.yAxis,y=this.components.data,p=c.get(Z,xa),h=p.animType,q=p.animObj,S=p.dummyObj,p=p.duration,k=a.errorBarThickness,n=a.errorBarWidth,m=a.errorBarColor,r=c.config.showtooltip,a=a.shadowOpacity;l=this.graphics.container.lineGroup;
var u=this.graphics.errorGroupContainer,ha=this.graphics.errorTrackerContainer,v=this.graphics.errorShadowContainer,c=c.graphics.trackerGroup,w=this.graphics.trackerContainer,D,J,z,F,L,I,A;u||(u=this.graphics.errorGroupContainer=e.group(sb,b).insertAfter(l),x||u.hide());ha||(ha=this.graphics.errorTrackerContainer=e.group(Ya,c).insertBefore(w),x||ha.hide());v||(v=this.graphics.errorShadowContainer=e.group(Eb,b).insertBefore(u),x||v.hide());for(b=0;b<f;b++)if(c=y[b],l=c.errorTrackerConfig={},l.errorTrackerArr=
[],ha=(D=c&&c.config)&&D.setValue,void 0===c||void 0===ha||null===ha){if(c.graphics.error)for(l=0;l<c.graphics.error.length;l++)c.graphics.error[l].hide(),c.graphics.errorTracker[l].hide(),c.graphics.error[l].shadow(!1)}else if(ha=D.errorValueArr,l.errorLen=w=ha.length,!c.graphics.error&&(c.graphics.error=[]),!c.graphics.errorTracker&&(c.graphics.errorTracker=[]),D.errorValue===G||void 0===D.errorValue)c.graphics.error&&c.graphics.error[0]&&(c.graphics.error[0].hide(),c.graphics.error[0].shadow({opacity:0})),
c.graphics.error&&c.graphics.error[1]&&(c.graphics.error[1].hide(),c.graphics.error[1].shadow({opacity:0}));else for(D=D.setLink,J=c._xPos,z=A=c._yPos;w--;)l.errorTrackerArr[w]={},I=ha[w],l.errorTrackerArr[w].tooltext=I.tooltext,g=z,L=I.errorValue,I=n/2,F=x?1:0,F=A+(P.getAxisPosition(0)-P.getAxisPosition(1))*L*F,F=qa(F)+k%2/2,L=qa(J)+k%2/2,I=["M",L,g,"V",F,"M",L-I,F,"H",L+I],c.graphics.error[w]?(g={path:I},F=c.graphics.error[w],F.animateWith(S,q,g,p,h),F.attr({stroke:m,ishot:!r,"stroke-width":k,cursor:D?
"pointer":G,"stroke-linecap":ba})):F=c.graphics.error[w]=e.path(I,u).attr({stroke:m,ishot:!r,"stroke-width":k,cursor:D?"pointer":G,"stroke-linecap":ba}),F.show(),F.shadow({opacity:a},v),l.errorTrackerArr[w].attr={path:I,stroke:Ma,"stroke-width":k<ab?ab:k,cursor:D?"pointer":G,ishot:!!D};d.trackerDrawID.push($a.addJob(this.drawErrorTracker,this,[],t.priorityList.tracker))},drawErrorTracker:function(){var a=this.config,c=this.chart,d=this.components.data,b=c.components,e=b.paper,b=b.xAxis[0].getCategoryLen(),
f=this.graphics.errorTrackerContainer,g,l,x,P,y,p=c.config.showtooltip,h,q,S,k=function(a){ka.call(this,c,a)},n=function(a){ka.call(this,c,a,"DataPlotRollOver")},m=function(a){ka.call(this,c,a,"DataPlotRollOut")},r=function(a){return function(){void 0!==a&&c.linkClickFN.call({link:a},c)}};for(P=0;P<b;P++){x=(y=d[P])&&y.config;g=y.errorTrackerConfig;l=g.errorTrackerArr;for(g=g.errorLen;g--;)if(l[g]&&(S=l[g].attr)){if(y.graphics.errorTracker[g])y.graphics.errorTracker[g].show(),y.graphics.errorTracker[g].attr(S);
else if(x.setLink||p)h=y.graphics.errorTracker[g]=e.path(f).attr(S);q=x.eventArgs;(h=y.graphics.errorTracker[g])&&h.data("eventArgs",q);h&&h.click(k).data("groupId",void 0).hover(n,m);p?h&&h.tooltip(l[g].tooltext):h&&h.tooltip(!1);(x.setLink||p)&&h&&h.click(r(x.setLink))}a.notHalfErrorBar||(y.graphics.error&&y.graphics.error[1]&&y.graphics.error[1].hide()&&y.graphics.error[1].shadow({opacity:0}),y.graphics.errorTracker&&y.graphics.errorTracker[1]&&y.graphics.errorTracker[1].hide()&&y.graphics.errorTracker[1].shadow({opacity:0}))}},
manageSpace:function(){var a=.5*this.config.errorBarWidth,c=this.chart,d=c.config.dataLabelStyle,b=(this.components||{}).data||[],e=b[0],b=b[b.length-1],f,g;f={};var l,x,P,y=c.linkedItems.smartLabel,p={paddingLeft:0,paddingRight:0};e&&(e=e.config,P=e.showValue,g=e&&e.anchorProps||{},P&&(f=e.displayValue,y.useEllipsesOnOverflow(c.config.useEllipsesWhenOverflow),y.setStyle(d),f=y.getOriSize(f)),e.setValue&&(l=X(h(g.radius,0),a)+h(g.borderThickness,0),x=(f.width||0)/2),p.paddingLeft=X(l,x));b&&(e=b.config,
P=e.showValue,g=e&&e.anchorProps||{},P&&(f=e.displayValue,y.setStyle(d),f=y.getOriSize(f)),e.setValue&&(l=X(h(g.radius,0),a)+h(g.borderThickness,0),x=(f.width||0)/2),p.paddingRight=X(l,x));return p},_removeDataVisuals:function(a){a&&(a=a.graphics,a.element&&a.element.hide()&&a.element.shadow({opacity:0}),a.error&&a.error[0]&&a.error[0].hide()&&a.error[0].shadow({opacity:0}),a.error&&a.error[1]&&a.error[1].hide()&&a.error[1].shadow({opacity:0}),a.errorTracker&&a.errorTracker[0]&&a.errorTracker[0].hide()&&
a.errorTracker[0].shadow({opacity:0}),a.errorTracker&&a.errorTracker[1]&&a.errorTracker[1].hide()&&a.errorTracker[1].shadow({opacity:0}),a.hotElement&&a.hotElement.hide()&&a.hotElement.attr({width:0}))}},v]);N("errorscatter",{friendlyName:"Error Scatter Chart",isXY:!0,standaloneInit:!0,creditLabel:va,defaultDatasetType:"errorscatter",applicableDSList:{errorscatter:!0},defaultZeroPlaneHighlighted:!1,useErrorGroup:!0,isErrorChart:!0,fireGroupEvent:!0,initAnimation:!0},N.scatterBase);FusionCharts.register("component",
["dataset","ErrorScatter",{ErrorValueConfigure:function(){var a=this.chart,c=a.components,d=this.config,b=this.JSONData,e=a.config.categories,f=a.jsonData.chart,g=b.data,l=c.xAxis[0].getCategoryLen(),l=g&&g.length||l,x=t.parseUnsafeString,P,y,p,ja=this.components.data,k=c.numberFormatter,S,n,m,r,u,ma,v,w,ia,D,J,G,F,L,I=q(f.tooltipsepchar,Rb),A=x(f.yaxisname),C=x(f.xaxisname),B=d.parentYAxis,U,E,Q,K,O,N,T,M,Y,W=-Infinity,R=Infinity,ga=Infinity,V=-Infinity,na=function(a,c){var e;d.showTooltip?null===
E?e=!1:void 0!==a?(O=[1,2,3,4,5,6,7,8,9,10,11,99,100,101,102,103,104,105,106,107,109],N={yaxisName:A,xaxisName:C,yDataValue:E,xDataValue:p.label,formattedValue:p.toolTipValue,horizontalErrorValue:ia,horizontalErrorDataValue:J,verticalErrorValue:D,verticalErrorDataValue:F,horizontalErrorPercent:Q,verticalErrorPercent:K,label:p.label,errorValue:c,errorDataValue:c,errorPercentValue:p.errorPercentValue,errorPercentDataValue:p.errorPercentValue},e=ya(a,O,N,P,f,b)):null===E?e=!1:(d.seriesNameInTooltip&&
(T=t.getFirstValue(b&&b.seriesname)),e=T?T+I:z,e+=U.x?k.xAxis(U.x)+I:z,e+=p.toolTipValue):e=!1;return e};d.errorBarShadow=c=h(f.errorbarshadow,f.showshadow,0);d.ignoreEmptyDatasets=h(b.ignoreemptydatasets,0);d.notHalfErrorBar=!h(f.halferrorbar,1);d.errorBarAlpha=Xb(q(b.errorbaralpha,f.errorbaralpha));d.errorBarWidth=n=h(b.errorbarwidth,f.errorbarwidth,5);d.errorBarColor=m=aa(Ha(q(b.errorbarcolor,f.errorbarcolor,tb)),void 0);d.errorBarThickness=S=h(b.errorbarthickness,f.errorbarthickness,1);d.shadowOpacity=
c?NaN:0;d.halfHorizontalErrorBar=r=h(f.halfhorizontalerrorbar,1);d.halfVerticalErrorBar=u=h(f.halfverticalerrorbar,1);void 0===d.initAnimation&&(d.initAnimation=a.initAnimation);a=q(b.horizontalerrorbaralpha,b.errorbaralpha,f.horizontalerrorbaralpha,void 0);ma=h(b.verticalerrorbaralpha,b.errorbaralpha,f.verticalerrorbaralpha,void 0);v=aa(q(b.horizontalerrorbarcolor,b.errorbarcolor,f.horizontalerrorbarcolor,m),a);m=aa(q(b.verticalerrorbarcolor,b.errorbarcolor,f.verticalerrorbarcolor,m),ma);w=h(b.horizontalerrorbarthickness,
b.errorbarthickness,f.horizontalerrorbarthickness,S);S=h(b.verticalerrorbarthickness,b.errorbarthickness,f.verticalerrorbarthickness,S);d.horizontalErrorBarWidth=h(b.horizontalerrorbarwidth,f.horizontalerrorbarwidth,n);d.verticalErrorBarWidth=h(b.verticalerrorbarwidth,f.verticalerrorbarwidth,n);for(n=0;n<l;n++)g&&(P=g&&g[n],p=(y=ja[n])&&y.config,y||(y=ja[n]={graphics:{}}),y.config||(p=ja[n].config={}),y=k.getCleanValue(P.errorvalue),U=p.setValue,p.errorValue=P.errorvalue,p.hErrorValue=ia=k.getCleanValue(q(P.horizontalerrorvalue,
P.errorvalue)),p.vErrorValue=D=k.getCleanValue(q(P.verticalerrorvalue,P.errorvalue)),J=k.dataLabels(ia,B),G=H(x(q(P.errorplottooltext,b.errorplottooltext,f.errorplottooltext,J))),F=k.dataLabels(D,d.parentYAxis),L=H(x(q(P.errorplottooltext,b.errorplottooltext,f.errorplottooltext,F))),e&&e[n]&&(p.label=H(x(q(e[n].tooltext,e[n].label)))),null!==U.x&&(M=U.x+Number(ia),Y=U.x-(r?0:Number(ia)),V=X(V,M,Y),ga=da(ga,M,Y)),null!==U.y&&(M=U.y+Number(D),Y=U.y-(u?0:Number(D)),W=X(W,M,Y),R=da(R,M,Y)),p.useHorizontalErrorBar=
h(P.usehorizontalerrorbar,b.usehorizontalerrorbar,f.usehorizontalerrorbar,0),p.useVerticalErrorBar=h(P.useverticalerrorbar,b.useverticalerrorbar,f.useverticalerrorbar,1),p.errorValueArr=[],p.errorValueArr.push({errorValue:-ia,tooltext:na(G,J),errorBarColor:v,isHorizontal:1,errorBarThickness:w,shadowOpacity:c?a/250:0}),p.errorValueArr.push({errorValue:ia,tooltext:na(G,J),errorBarColor:v,isHorizontal:1,errorBarThickness:w,shadowOpacity:c?a/250:0}),p.errorValueArr.push({errorValue:-D,tooltext:na(L,F),
errorBarColor:m,errorBarThickness:S,shadowOpacity:c?ma/250:0}),p.errorValueArr.push({errorValue:D,tooltext:na(L,F),errorBarColor:m,errorBarThickness:S,shadowOpacity:c?ma/250:0}),U=p.setValue,qa(y/U*za*za),Q=qa(ia/U*za*za)/za+Wa,K=qa(D/U*za*za)/za+Wa,E=p.formatedVal,d.showTooltip?void 0!==p.setTooltext?(O=[1,2,3,4,5,6,7,8,9,10,11,99,100,101,102,103,104,105,106,107,109],N={yaxisName:A,xaxisName:C,yDataValue:E,xDataValue:p.label,formattedValue:p.toolTipValue,horizontalErrorValue:ia,horizontalErrorDataValue:J,
verticalErrorValue:D,verticalErrorDataValue:F,horizontalErrorPercent:Q,verticalErrorPercent:K,label:p.label},y=ya(p.setTooltext,O,N,P,f,b)):null===E?y=!1:(d.seriesNameInTooltip&&(T=t.getFirstValue(b&&b.seriesname)),y=T?T+I:z,y+=U.x?k.xAxis(U.x)+I:z,y+=p.toolTipValue):y=!1,p.toolText=y);d.xMax=V;d.xMin=ga;d.yMin=R;d.yMax=W},drawErrorValue:function(){var a=this.chart,c=a.getJobList(),d=a.components,b=this.parentContainer,e=this.config,f=this.JSONData.data,f=f&&f.length,g,l=this.visible,x=d.paper,d=
d.xAxis[0],P=this.yAxis,y=this.components.data,p,ja,q,S,k=a.graphics,n=e.showTooltip,m=e.shadowOpacity,r=a.get(Z,xa),a=r.animType,u=r.animObj,v=r.dummyObj,r=r.duration,w=this.graphics.container.lineGroup,ia=this.graphics.errorGroupContainer,D=this.graphics.errorTrackerContainer,J=this.graphics.errorShadowContainer,z=this.graphics.trackerContainer,k=k.trackerGroup,F,L,I,A,C,B,U,E,Q;ia||(ia=this.graphics.errorGroupContainer=x.group(sb,b).insertAfter(w),l||ia.hide());D||(D=this.graphics.errorTrackerContainer=
x.group(Ya,k).insertBefore(z),l||D.hide());J||(J=this.graphics.errorShadowContainer=x.group(Eb,b).insertBefore(ia),l||J.hide());for(b=0;b<f;b++)if(k=y[b],z=k.errorTrackerConfig={},z.errorTrackerArr=[],S=(w=k&&k.config)&&w.setValue,D=w.errorValueArr,void 0!==k&&void 0!==S&&null!==S&&D&&(D=w.errorValueArr,z.errorLen=B=D.length,!k.graphics.error&&(k.graphics.error=[]),!k.graphics.errorTracker&&(k.graphics.errorTracker=[]),null===w.vErrorValue&&(k.graphics.error&&k.graphics.error[0]&&(k.graphics.error[0].hide(),
k.graphics.error[0].shadow({opacity:0})),k.graphics.error&&k.graphics.error[1]&&(k.graphics.error[1].hide(),k.graphics.error[1].shadow({opacity:0}))),null===w.hErrorValue&&(k.graphics.error&&k.graphics.error[2]&&(k.graphics.error[2].hide(),k.graphics.error[2].shadow({opacity:0})),k.graphics.error&&k.graphics.error[3]&&(k.graphics.error[3].hide(),k.graphics.error[3].shadow({opacity:0}))),null!==w.hErrorValue||null!==w.vErrorValue))for(F=w.setLink,U=k._xPos,I=E=k._yPos,L=U,Q=0;Q<B;Q++)!w.useHorizontalErrorBar&&
(0===Q||1===Q)||!w.useVerticalErrorBar&&(2===Q||3===Q)||1===Q&&e.halfHorizontalErrorBar||3===Q&&e.halfVerticalErrorBar?(k.graphics.error&&k.graphics.error[Q]&&k.graphics.error[Q].hide()&&k.graphics.error[Q].shadow({opacity:0}),k.graphics.errorTracker&&k.graphics.errorTracker[Q]&&k.graphics.errorTracker[Q].hide()&&k.graphics.errorTracker[Q].shadow({opacity:0})):(z.errorTrackerArr[Q]={},ja=D[Q],z.errorTrackerArr[Q].tooltext=ja.tooltext,g=I,A=ja.errorValue,S=ja.errorBarColor,p=h(ja.isHorizontal,0),ja=
h(ja.errorBarThickness,e.errorBarThickness,1),q=p?e.horizontalErrorBarWidth:e.verticalErrorBarWidth,q=l?q/2:0,C=l?1:0,p?(A=U+(d.getAxisPosition(0)-d.getAxisPosition(1))*A*C,p=qa(g)+ja%2/2,A=qa(A)+ja%2/2,q=["M",L,p,"H",A,"M",A,p-q,"V",p+q]):(A=E+(P.getAxisPosition(0)-P.getAxisPosition(1))*A*C,p=qa(A)+ja%2/2,A=qa(L)+ja%2/2,q=["M",A,g,"V",p,"M",A-q,p,"H",A+q]),k.graphics.error[Q]?(p=k.graphics.error[Q],g={path:q,"stroke-width":l?ja:0},p.animateWith(v,u,g,r,a),p.attr({stroke:S,ishot:!n,cursor:F?"pointer":
G,"stroke-linecap":ba})):(p=k.graphics.error[Q]=x.path(q,ia).attr({stroke:S,ishot:!n,"stroke-width":ja,cursor:F?"pointer":G,"stroke-linecap":ba}),e.initAnimation&&p.attr({opacity:0}).animateWith(v,u,{opacity:1},r,a)),p.show(),p.shadow({opacity:m},J),z.errorTrackerArr[Q].attr={path:q,stroke:Ma,"stroke-width":l?ja<ab?ab:ja:0,cursor:F?"pointer":G,ishot:!!F});e.initAnimation=!1;c.trackerDrawID.push($a.addJob(this.drawErrorTracker,this,[],t.priorityList.tracker))},drawErrorTracker:function(){var a=this.config,
c=this.chart,d=this.components.data,b=c.components,e=b.paper,b=b.xAxis[0].getCategoryLen(),f=this.graphics.errorTrackerContainer,g,l,x,P,y,p,h,k,S,q=function(a){ka.call(this,c,a)},n=function(a){ka.call(this,c,a,"DataPlotRollOver")},m=function(a){ka.call(this,c,a,"DataPlotRollOut")},r=function(a){return function(){void 0!==a&&c.linkClickFN.call({link:a},c)}};for(P=0;P<b;P++)if(p=d[P])for(x=p&&p.config,g=p.errorTrackerConfig,l=g.errorTrackerArr,g=g.errorLen,y=0;y<g;y++)if(l[y]&&(S=l[y].attr)){if(p.graphics.errorTracker[y])p.graphics.errorTracker[y].show(),
p.graphics.errorTracker[y].attr(S);else if(x.setLink||a.showTooltip)h=p.graphics.errorTracker[y]=e.path(f).attr(S);k=x.eventArgs;(h=p.graphics.errorTracker[y])&&h.data("eventArgs",k);h&&h.click(q).data("groupId",void 0).hover(n,m);a.showTooltip?h&&h.tooltip(l[y].tooltext):h&&h.tooltip(!1);(x.setLink||a.showTooltip)&&h&&h.click(r(x.setLink))}},show:function(){var a=this.chart,c=this.yAxis,d=this.graphics&&this.graphics.errorGroupContainer,b=this.graphics&&this.graphics.errorTrackerContainer,e=this.graphics&&
this.graphics.errorShadowContainer;a._chartAnimation();this.visible=!0;this._conatinerHidden=!1;d&&d.show();b&&b.show();e&&e.show();a._setAxisLimits();c.draw();this.draw()},remove:function(){var a=this.components,c=a.removeDataArr,d=a.pool||(a.pool={element:[],hotElement:[],label:[]}),b=c.length,e,f=this.maxminFlag,g,l,x;for(l=0;l<b;l++)if(e=c[0],c.splice(0,1),e&&e.graphics){g=e.graphics;g.element&&g.element.hide()&&g.element.shadow({opacity:0});for(x=0;4>x;x++)g.error&&g.error[x]&&g.error[x].hide()&&
g.error[x].shadow({opacity:0}),g.errorTracker&&g.errorTracker[x]&&g.errorTracker[x].hide()&&g.errorTracker[x].shadow({opacity:0});g.hotElement&&g.hotElement.hide()&&g.hotElement.attr({width:0});e.graphics.element&&(d.element=d.element.concat(e.graphics.element));e.graphics.hotElement&&(d.hotElement=d.hotElement.concat(e.graphics.hotElement));e.graphics.label&&(d.label=d.label.concat(e.graphics.label))}a.pool=d;f&&this.setMaxMin()}},"Scatter"]);FusionCharts.register("component",["dataset","multiaxisline",
{type:"multiaxisline",pIndex:2,customConfigFn:"_createDatasets",configure:function(){var a=this.chart,c=this.JSONData,d=this.config,b=a.config,e=a.components,f=a.jsonData,g=f.chart,l=f.axis[this.axisIndex],x=a.singleseries,f=FusionCharts.get("component",["dataset",v]).prototype;f.configure.call(this);this.yAxis=e.yAxis[this.axisIndex];b.axesPadding=5;b.allowAxisShift=h(g.allowaxisshift,1);b.allowSelection=h(g.allowselection,1);b.checkBoxColor=q(g.checkboxcolor,"#2196f3");b.axisConfigured=!0;d.linethickness=
h(c.linethickness,l.linethickness,g.linethickness,x?4:2);d.lineDashLen=h(c.linedashlen,l.linedashlen,g.linedashlen,5);d.lineDashGap=h(c.linedashgap,l.linedashgap,g.linedashgap,4);d.alpha=h(c.alpha,l.linealpha,g.linealpha,za);d.linecolor=q(c.color,l.linecolor,l.color,g.linecolor,d.plotColor);d.legendSymbolColor=this.type===v?d.lineColor:d.plotFillColor;e=h(c.dashed,l.linedashed,g.linedashed);b=t.getDashStyle(d.lineDashLen,d.lineDashGap,d.linethickness);d.anchorBorderColor=q(c.anchorbordercolor,g.anchorbordercolor,
d.lineColor,d.plotColor);d.lineDashStyle=e?b:"none";f._setConfigure.call(this);!1!==a.hasLegend&&this._addLegend()},init:function(a){this.chart=this.chart;this.components={};this.conf={};this.graphics={};this.JSONData=a;this.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},legendInteractivity:function(a,c){var d=a.chart,b=d.components.dataset,e=this.config,f=a.visible,g=c.config,l=c.graphics,x=e.itemHiddenStyle.color,e=e.itemStyle.color,h=g.fillColor,
g=g.strokeColor,y=a.axisIndex,p=!0,ja,d=d.config.axesArr.checkBox;f?a.hide():a.show();if(f){for(ja in b)b.hasOwnProperty(ja)&&b[ja].visible&&b[ja].axisIndex===y&&(p=!1);p&&d[y]&&d[y].checkbox.uncheck()}else d[y]&&d[y].checkbox.check();f?(l.legendItemSymbol&&l.legendItemSymbol.attr({fill:x,stroke:x}),l.legendItemText&&l.legendItemText.attr({fill:x}),l.legendIconLine&&l.legendIconLine.attr({stroke:x})):(l.legendItemSymbol&&l.legendItemSymbol.attr({fill:h,stroke:g}),l.legendItemText&&l.legendItemText.attr({fill:e}),
l.legendIconLine&&l.legendIconLine.attr({stroke:h}))}},v]);N("waterfall2d",{standaloneInit:!0,friendlyName:"Waterfall Chart",creditLabel:va,defaultDatasetType:"Waterfall2D",applicableDSList:{Waterfall2D:!0},singleseries:!0,hasLegend:!1,_dataSegregator:function(a){var c=[],d=[];nb(a,function(a,e){"true"!==a.vline&&!0!==a.vline&&1!==a.vline&&"1"!==a.vline?c.push(a):d.push({index:e,data:a})});return{data:c,catData:d}}},N.sscartesian);N("multilevelpie",{standaloneInit:!0,friendlyName:"Multi-level Pie Chart",
creditLabel:va,defaultDatasetType:"multiLevelPie",applicableDSList:{multiLevelPie:!0},is3d:!0,hasLegend:!1,hasCanvas:!1,_createDatasets:function(){var a=this.components,c=this.jsonData,d=c.dataset||[],b=d.length,e,f,g=this.defaultDatasetType,l=this.applicableDSList,x;e=[];var h={};e=this.config.categories=c.category||[];c=e.length;!b&&c&&(d=e,b=c);c||this.setChartMessage();e=a.dataset||(a.dataset=[]);for(a=0;a<b;a+=1)if(c=d[a],c.seriesname&&(c.seriesname=Y(c.seriesname)),f=c.parentyaxis||G,f=(f=f.toLowerCase()===
eb?q(c.renderas,this.sDefaultDatasetType):q(c.renderas,g))&&f.toLowerCase(),l[f]||(f=g),x=FusionCharts.get("component",["dataset",f]))void 0===h[f]?h[f]=0:h[f]++,e[0]?(f=e[0],f.JSONData=c):(f=new x,e.push(f),f.chart=this,f.index=a),f.init(d)},_spaceManager:function(){var a=this.config;this._allocateSpace(this._manageActionBarSpace&&this._manageActionBarSpace(.225*a.availableHeight)||{});this._manageChartMenuBar(.7*a.canvasHeight)}},N.guageBase);FusionCharts.register("component",["dataset","multiLevelPie",
{init:function(a){!this.components&&(this.components={data:[]});this.conf={};this.graphics={};this.JSONData=a;this.configure()},configure:function(){var a,c,d=this,b=d.chart,e=b.config,f=d.conf||(d.conf={}),g=f.dataLabelOptions||(f.dataLabelOptions={}),l=f.piePlotOptions,x=b.config.style,P=d.JSONData,b=b.jsonData.chart;a=f.enableAnimation=h(b.animation,b.defaultanimation,1);var y=h(-b.centerangle,180),p=h(b.totalangle,360);f.animation=a?{duration:1E3*h(b.animationduration,b.moveduration,1)}:!1;f.showShadow=
h(b.showshadow,0);a=f.useHoverColor=!!h(b.usehovercolor,1);f.hoverFillColor=aa(q(b.hoverfillcolor,"FF5904"),h(b.hoverfillalpha,100));f.pierad=parseInt(b.pieradius,10);c=(c=T(b.valuebordercolor,z))?aa(c,h(b.valueborderalpha,b.valuebgalpha,b.valuealpha,100)):z;!g.style&&(g.style={fontFamily:q(b.valuefont,x.fontFamily),fontSize:h(b.valuefontsize,parseInt(x.fontSize,10))+"px",color:aa(q(b.valuefontcolor,x.color),h(b.valuefontalpha,b.valuealpha,100)),fontWeight:h(b.valuefontbold)?"bold":"normal",fontStyle:h(b.valuefontitalic)?
"italic":"normal",backgroundColor:b.valuebgcolor?aa(b.valuebgcolor,h(b.valuebgalpha,b.valuealpha,100)):z,border:c||b.valuebgcolor?h(b.valueborderthickness,1)+"px solid":z,borderPadding:h(b.valueborderpadding,2),borderThickness:h(b.valueborderthickness,x.borderThickness,1),borderRadius:h(b.valueborderradius,x.borderRadius,0),borderColor:c,borderDash:h(b.valueborderdashed,0)?fb(h(b.valueborderdashlen,4),h(b.valueborderdashgap,2),h(b.valueborderthickness,1)):"none"});!l&&(l=f.piePlotOptions={});l.allowPointSelect=
!1;f.borderColor=aa(q(b.plotbordercolor,b.piebordercolor,Ga),b.showplotborder!=Ea?q(b.plotborderalpha,b.pieborderalpha,100):0);f.showTooltip=h(b.showtooltip,1);f.borderWidth=h(b.pieborderthickness,b.plotborderthickness,1);l.startingAngle=0;l.size="100%";f.showLabels=h(b.showlabels,1);f.showValues=h(b.showvalues,0);f.showValuesInTooltip=h(b.showvaluesintooltip,b.showvalues,0);f.showPercentValues=h(b.showpercentvalues,b.showpercentagevalues,0);f.showPercentInTooltip=h(b.showpercentintooltip,0);f.toolTipSepChar=
q(b.tooltipsepchar,b.hovercapsepchar,Rb);f.labelSepChar=q(b.labelsepchar,f.toolTipSepChar);f.tooltext=b.plottooltext;f.alpha=q(b.plotfillalpha,b.piefillalpha,100);f.startAngle=Bc/180*(y-p/2);f.endtAngle=Bc/180*(y+p/2);f.initialAngle=f.endtAngle;f.originX=h(b.originx);f.originY=h(b.originy);a&&(f.events={mouseOver:function(){for(var a=this.data("plotItem").selfRef,b=d.conf;a.graphics.element;)a.graphics.element.attr({fill:b.hoverFillColor}),a=a.linkedItems.parent},mouseOut:function(){for(var a=this.data("plotItem"),
b=a.selfRef;b.graphics.element;)b.graphics.element.attr({fill:(b.config||a).color}),b=b.linkedItems.parent}});e.plotBorderWidth=0;e.plotBorderWidth=0;f.maxLevel=d.addMSPieCat(P,1,d,f.startAngle,f.endtAngle);f.pieRadius=parseInt(b.pieradius,10);g.distance=0;g.placeLabelsInside=!0},removalFn:function(a,c,d){var b,e,f=this.pool||(this.pool={});b=this.chart.get(Z,xa);var g=b.duration,l=b.dummyObj,x=b.animObj,h=b.animType,y=function(a){(a||this).hide()};!f[d]&&(f[d]=[]);"element"===d?(e=a.attr("ringpath"),
b=(e[4]+e[5])/2,c?a.animateWith(l,x,{ringpath:[e[0],e[1],e[2],e[3],b,b]},g,h,y):f[d].push(a)):c?y(a):f[d].push(a)},removeGraphics:function(a,c){var d,b,e=a.components&&a.components.data,f,g=a.graphics;if(e)for(f=e.length,d=0;d<f;d+=1)this.removeGraphics(e[d]);if(a.graphics)for(b in g)g.hasOwnProperty(b)&&this.removalFn(a.graphics[b],c,b)},removeChild:function(a,c,d){var b,e;if(a.length)for(b=0;b<a.length;b+=1)e=a[b],d?this.removalFn(e,c,d):this.removeGraphics(e,c);else for(b in a)this.removeChild(a[b],
c,b)},addMSPieCat:function(a,c,d,b,e){var f,g,l,x=a.length,P=this,y=d.components.data,p=P.chart.components,ja=P.conf,k=ja.borderWidth,S=ja.borderColor,n=p.numberFormatter,p=p.colorManager,m,r=0,t,u,w=ja.labelSepChar,v,ia,D,J,A,F=c,L=y.length,I=function(){P.removeChild.apply(P,arguments)},G=a.length;m=e-b;var C=0,B;for(u=0;u<x;u+=1)e=a[u],e._userValue=n.getCleanValue(e.value,!0),e._value=h(e._userValue,1),r+=e._value;r=r||1;m/=r;for(u=x-1;0<=u;--u)e=a[u],t=m*e._value,f=Y(q(e.label,e.name)),ia=null!==
e._userValue?n.dataLabels(e._userValue):z,D=n.percentValue(e._value/r*100),v=h(e.alpha,ja.alpha),A=ja.showLabels?f:z,ja.showValues&&(ja.showPercentValues?A+=A!==z?w+D:D:void 0!==ia&&ia!==z&&(A+=A!==z?w+ia:ia)),J=ja.showTooltip?Y(q(e.tooltext,e.hovertext,ja.tooltext)):void 0,J===z?(J=f,ja.showValuesInTooltip&&(ja.showPercentInTooltip?J+=J!==z?w+D:D:void 0!==ia&&ia!==z&&(J+=J!==z?w+ia:ia))):J=ya(J,[1,2,3,14],{percentValue:D,label:f,formattedValue:ia},e),f=y[u],ia=b+C,C+=t,f||(f=y[u]={components:{data:[]},
linkedItems:{},config:{},graphics:{}}),f.graphics.element&&(B=f.config.startAngle+f.config.angleStrech),f.config={initialAngle:B||(d.conf||d.config).initialAngle,startAngle:ia,angleStrech:t,level:c,displayValue:A,toolText:J,link:H(e.link),doNotSlice:!0,color:aa(e.color||p.getPlotColor(),v),borderWidth:h(e.borderwidth,k),borderColor:q(e.bordercolor,S),dashStyle:h(e.valueborderdashed,0)?fb(h(e.borderdashlen,4),h(e.borderdashgap,2),h(e.borderthickness,1)):"none",shadow:{opacity:.01*qa(50<v?v*v*v*1E-4:
v*v*.01)},isSingleTon:1<x?!1:!0},f.linkedItems.parent=d,e.category?(F=X(F,P.addMSPieCat(e.category,c+1,f,ia,t+ia)),(g=f.components.data.length)>(l=e.category.length)&&I(f.components.data.splice(g-1,l))):(g=f.components.data.length)&&I(f.components.data.splice(0,g));L>G&&I(y.splice(L-1,G));return F},draw:function(a){var c,d,b,e=this,f=e.conf||{},g=e.chart,l=g.getJobList(),x=g.config,P=g.graphics,y=e.components,p=y.data.length,ja=x.dataLabelStyle;c=f.showShadow;var k=g.components.paper,S=x.textDirection,
q=x.tooltip||{};d=q&&!1!==q.enabled;var p=x.canvasWidth,n=x.canvasHeight,q=h(f.originX,x.canvasLeft+.5*p),x=h(f.originY,x.canvasTop+.5*n),m,r,u,w,v,ia=P.datasetGroup.trackTooltip(!0),D=g.get(Z,xa),J=D.duration||0,z=D.dummyObj,F=D.animObj,D=D.animType,L,I,A,C=f.events||{},B=function(a){var b=C.mouseOver;ka.call(this,g,a,"DataPlotRollOver");b&&b.call(this)},U=function(a){var b=C.mouseOut;ka.call(this,g,a,"DataPlotRollOut");b&&b.call(this)},E=function(a){ka.call(this,g,a)},Q=function(){f._drawn||(f._drawn=
!0,K.show(),l.labelDrawID.push($a.addJob(e.drawLabel,e,[],t.priorityList.label)),g._animCallBack())},H=e.pool||(e.pool={}),y=(y=y.removeDataArr)&&y.length,n=h(2*f.pieRadius,da(p,n))/(2*f.maxLevel),K=P.datalabels||(P.datalabels=k.group("datalabels").insertAfter(ia));y&&e.remove();J&&K.hide();a||(a=e,K.css(ja));p=a.components.data.length;for(P=0;P<p;P+=1)e.draw(a.components.data[P]);p=a.config;(b=p.level)?(y=b*n,n*=b-1,L=a.graphics,r=p.angleStrech,b=p.displayValue,u=!!p.link,m=p.color,w=p.startAngle,
v=w+p.angleStrech,A=p.initialAngle,I=L.element,I||(H.element&&H.element.length?(I=L.element=H.element.shift(),I.show()):I=L.element=k.ringpath(ia).mouseover(B).mouseout(U).mouseup(E),I.attr({ringpath:[q,x,y,n,A,A]})),p.plotItem=a={chart:g,link:p.link,value:r,color:m,labelText:b,graphics:{element:I},selfRef:a},p.eventArgs=k={link:p.link,label:p.displayValue,toolText:p.toolText},I.attr({"stroke-width":p.borderWidth,stroke:p.borderColor,fill:ga(p.color),"stroke-dasharray":p.dashStyle,ishot:!d,cursor:u?
"pointer":G}).tooltip(p.toolText).shadow(c&&!!p.shadow).data("plotItem",a).data("eventArgs",k),void 0!==b&&b!==G&&(c=(w+v)/2,p._textAttr||(p._textAttr={}),a=0===n&&p.isSingleTon?0:n+(y-n)/2,(d=p._textAttrs)||(d=p._textAttrs={}),d.text=b,d.fill=ja.color||oa,d.direction=S,d.ishot=u,d.cursor=u?"pointer":G,d.x=q+a*vb(c),d.y=x+a*Ub(c),d["text-bound"]=[ja.backgroundColor,ja.borderColor,ja.borderThickness,ja.borderPadding,ja.borderRadius,ja.borderDash]),I.animateWith(z,F,{ringpath:[q,x,y,n,w,v]},J,D,!P&&
Q)):(f._drawn&&e.drawLabel(),e.removeChild(e.pool,!0))},drawLabel:function(a){var c,d=this.chart,b=d.config,e=d.graphics;c=this.components.data.length;var f=b.dataLabelStyle,g=d.components.paper,b=(b=b.tooltip||{},!1!==b.enabled),l,x,h,y,p=(this.conf||{}).events||{},k=function(a){var b=p.mouseOver;ka.call(this,d,a,"DataPlotRollOver");b&&b.call(this)},q=function(a){var b=p.mouseOut;ka.call(this,d,a,"DataPlotRollOut");b&&b.call(this)},S=function(a){ka.call(this,d,a)},n=this.pool||(this.pool={}),e=e.datalabels;
!a&&(a=this);c=a.components.data.length;for(l=0;l<c;l+=1)this.drawLabel(a.components.data[l]);h=a.config;l=h.plotItem;x=h.displayValue;c=h._textAttrs;h.level?(a=a.graphics,y=a.label,void 0!==x&&x!==G?((y=a.label)?y.attr(c).css(f):n.label&&n.label.length?(y=a.label=n.label.shift(),y.attr(c).css(f)):y=a.label=g.text(c,f,e).mouseover(k).mouseout(q).mouseup(S),l.label=y.show().data("plotItem",l).data("eventArgs",h.eventArgs),b&&y.tooltip(void 0)):y&&y.hide()):this.removeChild(this.pool,!0)}},"Pie2D"]);
N("radar",{friendlyName:"Radar Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:"radar",applicableDSList:{radar:!0},hasLegend:!0,areaAlpha:50,defaultPlotShadow:0,_postSpaceManagement:function(){var a=this.components,c=this.config,d=a.legend;(a.yAxis&&a.yAxis[0]).setAxisDimention({x:c.canvasLeft+c.canvasWidth/2,y:c.canvasTop,axisLength:c.canvasHeight/2});d.postSpaceManager()}},N.mspolar,{radarradius:0,radarborderthickness:2,showvalues:0,plotfillalpha:50},N.areabase);N("dragbase",{configure:function(){var a=
this.jsonData.chart,c,d;this.base.base.configure.call(this);d=this.config;d.formAction=H(a.formaction);a.submitdataasxml!==Ea||a.formdataformat||(a.formdataformat=E.dataFormats.CSV);d.formDataFormat=q(a.formdataformat,E.dataFormats.XML);d.formTarget=q(a.formtarget,"_self");d.formMethod=q(a.formmethod,"POST");d.submitFormAsAjax=h(a.submitformusingajax,1);d.restoreBtnTitle=q(a.restorebtntitle,"Restore");d.submitBtnTitle=q(a.formbtntitle,"Submit");d.showFormBtn=h(a.showformbtn,1)&&d.formAction;d.showRestoreBtn=
h(a.showrestorebtn,1);d.formBtnTitle=q(a.formbtntitle,"Submit");d.formBtnBorderColor=q(a.formbtnbordercolor,"CBCBCB");d.formBtnBgColor=q(a.formbtnbgcolor,Ga);d.btnPadding=h(a.btnpadding,7);d.btnSpacing=h(a.btnspacing,5);d.formBtnStyle={fontSize:d.style.outCanfontSize,fontFamily:d.style.outCanfontFamily,fontWeight:"bold"};d.formBtnLabelFill=d.style.outCancolor;a.btntextcolor&&(d.formBtnLabelFill=a.btntextcolor.replace(bc,mb));0<=(c=h(a.btnfontsize))&&(d.formBtnStyle.fontSize=c+"px");d.restoreBtnWidth=
h(a.restorebtnwidth,0);d.formBtnWidth=h(a.formbtnwidth,0);d.restoreBtnBorderColor=q(a.restorebtnbordercolor,d.formBtnBorderColor);d.restoreBtnBgColor=q(a.restorebtnbgcolor,d.formBtnBgColor);d.restoreBtnStyle={fontSize:d.formBtnStyle.fontSize,fontFamily:d.formBtnStyle.fontFamily,fontWeight:"bold"};d.restoreBtnLabelFill=d.formBtnLabelFill;a.toolbary||a.toolbarx?d.spaceHardCoded=!0:delete d.spaceHardCoded},_createToolBox:function(){var a=this,c=a.components.tb||(a.components.tb=new (FusionCharts.register("component",
["toolbox","toolbox"]))),d,b,e,f=a.components,g,l,x,h=a.linkedItems.smartLabel,y=a.config,p=y.showRestoreBtn,k=y.formAction,q=y.restoreBtnTitle,S=y.submitBtnTitle,n=y.formBtnStyle,m=y.restoreBtnStyle,r=y.restoreBtnWidth,t=y.restoreBtnBgColor,u=y.restoreBtnBorderColor,w=y.formBtnBgColor,v=y.formBtnBorderColor,ia=y.restoreBtnLabelFill,D=y.formBtnLabelFill,J=y.btnSpacing,z=y.btnPadding,F=y.formBtnWidth;d=f.chartMenuBar;l=f.actionBar;d&&d.drawn||l&&l.drawn||(d=c.init({graphics:a.graphics||(a.graphics=
{}),chart:a,components:a.components}),c.pId=d,d=f.toolBoxAPI=c.getAPIInstances(c.ALIGNMENT_HORIZONTAL),b=d.ComponentGroup,e=d.Toolbar,g=d.Symbol,c.getDefaultConfiguration(),d=c.getDefaultConfiguration(),x=new g(q,!0,(c.idCount=c.idCount||0,c.idCount++),c.pId),g=new g(S,!0,c.idCount++,c.pId),N.mscartesian._createToolBox.call(a),y.spaceHardCoded&&(l=f.actionBar=f.chartMenuBar||f.actionBar),(l=f.actionBar)||(l=new e(c.idCount++,c.pId),l=f.actionBar=l),a.addConfigureOptions&&a.addConfigureOptions(),c=
new b(c.idCount++,c.pId),h.useEllipsesOnOverflow(y.useEllipsesWhenOverflow),h.setStyle(m),q=h.getOriSize(q),r=X(q.width,r),y=q.height,h.setStyle(n),q=h.getOriSize(S),F=X(F,q.width),h=q.height,x.conf.width=r+z,g.conf.width=F+z,x.conf.stroke=aa(u,100),x.conf.height=y+z,g.conf.height=h+z,g.conf.fill=aa(w,100),g.conf.labelFill=aa(D,100),x.conf.fill=aa(t,100),x.conf.labelFill=aa(ia,100),g.conf.stroke=aa(v,100),g.conf.btnTextStyle.fontSize=n.fontSize,x.conf.btnTextStyle.fontSize=m.fontSize,d.spacing=J,
c.setConfiguaration({buttons:d,group:{fill:aa(Ga,0),borderThickness:0}}),p&&(c.addSymbol(x),x.attachEventHandlers({click:function(){a.restoreData()}})),k&&(c.addSymbol(g),g.attachEventHandlers({click:function(){a.submitData(E)}})),c.btnConfig.vAlign="b",l.addComponent(c),l.toolbarConfig.fill=aa("EBEBEB",0),l.toolbarConfig.borderThickness=0)},addConfigureOptions:function(){var a=this,c=a.chartMenuTools,d=a.components,b=d.actionBar,d=(d.chartMenuBar||b).componentGroups[0].symbolList[0].getListRefernce(),
b=h(a.jsonData.chart.allowaxischange,1),c=c.set,e=[{"Increase Upper Limit":{handler:function(){var b=a.components.yAxis[0].config.axisRange;a.changeUpperLimits(b.max+b.tickInterval)},action:"click"}},{"Increase Lower Limit":{handler:function(){var b=a.components.yAxis[0].config.axisRange;a.changeLowerLimits(b.min+b.tickInterval)},action:"click"}},{"Decrease Upper Limit":{handler:function(){var b=a.components.yAxis[0].config.axisRange;a.changeUpperLimits(b.max-b.tickInterval)},action:"click"}},{"Decrease Lower Limit":{handler:function(){var b=
a.components.yAxis[0].config.axisRange;a.changeLowerLimits(b.min-b.tickInterval)},action:"click"}}];b&&(c(e),d.appendAsList(e))},drawAxisUpdateUI:function(){var a=this,c=a.graphics,d=a.components.yAxis[0],b=d.config.axisRange,e=d.getAxisConfig("extremeLabels")||[],d=a.config,f=b.min,b=b.max,g=e.lastLabel.graphic,l=e.firstLabel.graphic,x=a.linkedItems.container,e=pc({outline:"none","-webkit-appearance":"none",filter:"alpha(opacity=0)",position:"absolute",background:"transparent",border:"1px solid #cccccc",
textAlign:"right",top:0,left:0,width:50,zIndex:20,opacity:0,borderRadius:0,display:"block"},a.config.style.inCanvasStyle||{}),h=t.hashify,f={max:{label:g,value:b},min:{label:l,value:f}},y,p,q,k,S,n,m=function(b,c,d){return b===c+G?null:d?a.changeUpperLimits(Number(b),!0):a.changeLowerLimits(Number(b),!0)},l=function(){var b={opacity:1,filter:"alpha(opacity=100)",color:(a.config.style.inCanvasStyle||{}).color},c;b.color&&(b.color=h(b.color));this.value=this.dataValue;for(c in b)this.style[c]=b[c];
this.hasFocus=this.justFocussed=!0;this.axisLabel&&this.axisLabel.hide();a.graphics.hiddenAxisLabels||(a.graphics.hiddenAxisLabels=[]);a.graphics.hiddenAxisLabels.push(this.axisLabel)},r=function(){return function(){var a=this;a.justFocussed&&(a.justFocussed=!1,Vb||setTimeout(function(){a.select()},0))}}(),u=function(){!0!==m(this.value,this.oldValue,this.isMaxLabel)&&(this.style.opacity=0,this.style.filter="alpha(opacity=0)",this.axisLabel&&this.axisLabel.show());Ec&&Db.getElementsByTagName("body")[0].focus&&
Db.getElementsByTagName("body")[0].focus();this.hasFocus=this.justFocussed=!1},w=function(a){var b=a.originalEvent.keyCode,c=this.value,d=this.oldValue,e=this.isMaxLabel;13===b?(b=m(c,d,e),!1===b?this.style.color="#dd0000":t.dem.fire(this,"blur",a)):27===b&&(this.value=d,t.dem.fire(this,"blur",a))},v=function(a){return function(b){a.parentNode&&t.dem.fire(a,"blur",b)}},qc=function(b,c){return function(){Fc(a,"defaultprevented",c);b.parentNode.removeChild(b)}},z=function(a){return function(b){b.srcElement!==
a&&a.hasFocus&&t.dem.fire(a,"blur",b)}},D=function(a,b){return function(){Fc(x,"mousedown",b);a.parentNode.removeChild(a)}},J;for(J in f)if(y=f[J],b=y.label,g=y.value,y.oldValue=g,p=b&&b.getBBox(),y="max"===J?!0:!1,c.inputElements||(c.inputElements={}),q=c.inputElements[J],p&&b){k=p.x+p.width-d.marginLeft;S=d.canvasLeft-k-(ub?4:5);pc(e,{top:p.y+(ub?-1:0)+"px",left:S+"px",width:k+"px"});q||(q=c.inputElements[J]=Wc("input",{type:"text",value:g,name:g||G},x,!0),t.dem.listen(q,["focus","mouseup","blur",
"keyup"],[l,r,u,w]),q.setAttribute("isOverlay","true"),ub?(Da(x,"defaultprevented",p=v(q)),Da(x,"destroy",qc(q,p))):(Da(x,"mousedown",p=z(q)),Da(x,"destroy",D(q,p))));q.dataValue=g;e.color&&(e.color=h(e.color));for(n in e)q.style[n]=e[n];q.value=g;q.oldValue=g;q.name=g||G;q.axisLabel=b;q.isMaxLabel=y}else q&&(q.style.display="none")},changeUpperLimits:function(a){var c=this.components,d=c.yAxis[0],b=d.config.axisRange,e=b.min,f=b.max,g=this.config.yMax,b=!1,l=this.graphics.hiddenAxisLabels||[],x=
l.length;void 0!==a&&a>g&&a!==f?b=!0:a=g>f?g:f;if(b){d.setAxisConfig({axisMaxValue:a,axisMinValue:e,showUpperLimit:!0});d.setDataLimit(a,e);this._manageSpace();this._postSpaceManagement();this._drawCanvas();this.chartMenuBar&&this._drawChartMenuBar();this._manageCaptionPosition();this._drawCanvas();c.caption&&c.caption.draw();this.drawLegend();this.drawActionBar&&this.drawActionBar();for(c=0;c<x;c++)d=l[c],d.show();this._drawAxis&&this._drawAxis();this._drawDataset();this.drawAxisUpdateUI()}return b},
changeLowerLimits:function(a){var c=this.components,d=c.yAxis[0],b=d.config.axisRange,e=this.config.yMin,f=b.max,g,l=!1,x=this.graphics.hiddenAxisLabels||[],h=x.length,b=b.min;void 0!==a&&a<e&&a!==b?(g=a,l=!0):a=e<b?e:b;if(l){d.setAxisConfig({axisMaxValue:f,axisMinValue:a});d.setDataLimit(f,g);this._manageSpace();this._postSpaceManagement();this._drawCanvas();this.chartMenuBar&&this._drawChartMenuBar();this._manageCaptionPosition();this._drawCanvas();c.caption&&c.caption.draw();this.drawLegend();
this.drawActionBar&&this.drawActionBar();for(a=0;a<h;a++)c=x[a],c.show();this._drawAxis&&this._drawAxis();this._drawDataset();this.drawAxisUpdateUI()}return l},eiMethods:{getDataWithId:function(){for(var a=this.jsVars.instanceAPI.getJSONData(),c=[[z]],d=a.dataset,a=a.categories&&a.categories[0]&&a.categories[0].category,b=d&&d.length||0,e=0,f,g,l,x,h,y;b--;)if(g=d[b])for(c[0][b+1]=g.id||g.seriesname,x=g.id||b+1,y=(g=g.data)&&g.length||0,h=0;h<y;h+=1){l=h+1;if(!c[l]){for(f=a&&a[h+e]||{};f.vline;)e+=
1,f=a[h+e]||{};f=f.label||f.name||z;c[l]=[f]}f=c[l];l=g[h].id||l+K+x;f[b+1]=[l,Number(g[h].value)]}return c},getData:function(a){var c=this.jsVars.instanceAPI,d=c.getJSONData(),b=[[z]],e=d.dataset,f=d.categories&&d.categories[0]&&d.categories[0].category,g=e&&e.length||0,l=0,x,h;if(a)b=/^json$/ig.test(a)?d:E.core.transcodeData.call(c.chartInstance,d,"json",a);else for(;g--;)if(a=e[g])for(b[0][g+1]=e[g].seriesname,c=(a=e[g]&&e[g].data)&&a.length||0,d=0;d<c;d+=1){h=d+1;if(!b[h]){for(x=f&&f[d+l]||{};x.vline;)l+=
1,x=f[d+l]||{};x=x.label||x.name||z;b[h]=[x]}h=b[h];h[g+1]=Number(a[d].value)}return b},setUpperLimit:function(){return this.apiInstance.changeUpperLimits.apply(this.apiInstance,arguments)},setLowerLimit:function(){return this.apiInstance.changeLowerLimits.apply(this.apiInstance,arguments)},getLowerLimit:function(){var a=this.apiInstance.components;if(a=a.yAxis&&a.yAxis[0])return a.config.axisRange.min},getUpperLimit:function(){var a=this.apiInstance.components;if(a=a.yAxis&&a.yAxis[0])return a.config.axisRange.max}},
restoreData:function(){var a=this.components,c=a.yAxis[0],d=a.dataset,a=a.legend,b=d.length,e,f=this.graphics.hiddenAxisLabels||[],g;for(g=0;g<b;g++)e=d[g],e.configure();c.setAxisConfig({axisMaxValue:void 0,axisMinValue:void 0});this._setAxisLimits();b=f.length;for(g=0;g<b;g++)c=f[g],c.show();this._drawAxis();this._drawDataset();a._drawPointLegendItem();this.drawAxisUpdateUI();t.raiseEvent("dataRestored",{},this.chartInstance,[this.chartInstance.id])},submitData:function(a){var c=this.chartInstance,
d=new a.ajax,b=this.config,e=a.dataFormats.JSON,f=a.dataFormats.CSV,g=a.dataFormats.XML,l=b.formAction,x=this.chartInstance,h=b.submitFormAsAjax,y,p,q,k,S;b.formDataFormat===e?(y=e,p=JSON.stringify(this.getJSONData())):this.formDataFormat===f?(y=f,p=c.getCSVString&&c.getCSVString(),void 0===p&&(p=a.core.transcodeData(this.getJSONData(),e,f))):(y=g,p=a.core.transcodeData(this.getJSONData(),e,g));a.raiseEvent("beforeDataSubmit",{data:p},x,void 0,function(){h?(d.onError=function(a,b,c,d){t.raiseEvent("dataSubmitError",
{xhrObject:b.xhr,url:d,statusText:a,httpStatus:b.xhr&&b.xhr.status?b.xhr.status:-1,data:p},x,[x.id,a,b.xhr&&b.xhr.status])},d.onSuccess=function(a,b,c,e){t.raiseEvent("dataSubmitted",{xhrObject:d,response:a,url:e,data:p},x,[x.id,a])},q={},q["str"+y.toUpperCase()]=p,d.open&&d.abort(),d.post(l,q)):(k=Ba.document.createElement("span"),k.innerHTML='<form style="display:none" action="'+l+'" method="'+b.formMethod+'" target="'+b.formTarget+'"> <input type="hidden" name="strXML" value="'+Lc(p)+'"><input type="hidden" name="dataFormat" value="'+
y.toUpperCase()+'" /></form>',S=k.removeChild(k.firstChild),Ba.document.body.appendChild(S),S.submit&&S.submit(),S.parentNode.removeChild(S),k=S=null)},function(){a.raiseEvent("dataSubmitCancelled",{data:p},x)})},getJSONData:function(){var a=this.defaultDatasetType&&this.defaultDatasetType.toLowerCase(),c=this.components,d=c["datasetGroup_"+a],a=c.dataset,b=this.jsonData.dataset,e,f=this.jsonData,g=a.length,c=[],l;if(d)c=d.getJSONData();else for(d=0;d<g;d++)e=a[d],l=e.getJSONData(),e=b[d]||{},delete e.data,
c.push(W(e,l));a=W({},f);a.dataset=c;return a},_setDataLimits:function(){var a=this.components.dataset,c=this.config,d=-Infinity,b=Infinity,e,f,g;f=a.length;for(g=0;g<f;g++)e=a[g],e=e.getDataLimits(),d=X(d,e.max),b=da(b,e.min);c.yMax=d;c.yMin=b}},N.mscartesian);N("dragnode",{friendlyName:"Dragable Node Chart",standaloneInit:!0,hasLegend:!0,numVDivLines:0,numDivLines:0,showLimits:0,setadaptivexmin:1,showdivlinevalues:0,showzeroplane:0,showyaxisvalues:0,dontShowLegendByDefault:!0,creditLabel:va,defaultDatasetType:"dragnode",
configure:function(){var a=this.jsonData.chart,c;N.dragbase.configure.call(this);c=this.config;c.formAction=H(a.formaction);a.submitdataasxml!==Ea||a.formdataformat||(a.formdataformat=E.dataFormats.CSV);c.formDataFormat=q(a.formdataformat,E.dataFormats.XML);c.formTarget=q(a.formtarget,"_self");c.formMethod=q(a.formmethod,"POST");c.submitFormAsAjax=h(a.submitformusingajax,1);c.viewMode=h(a.viewmode,0)},_createDatasets:function(){var a=this.config,c=this.components,d=this.jsonData,b=d.dataset,e=d.connectors,
f=d.labels&&d.labels.label||[],g=b&&b.length,l=e&&e.length,x=f&&f.length||[],h=c.legend,y,p,q,k,S,n,m,r,t,u;r=0;var w=a.datasetMap||(a.datasetMap={connectors:[],dragnode:[],labels:[]}),v,z={connectors:[],dragnode:[],labels:[]},D={};if(b){this.config.categories=d.categories&&d.categories[0].category;p=c.dataset=[];y=FusionCharts.register("component",["datasetGroup","dragnode"]);d=c.datasetGroup_dragnode;y&&!d&&(d=c.datasetGroup_dragnode=new y,d.chart=this,d.init());S=FusionCharts.get("component",["dataset",
"Dragnode"]);n=FusionCharts.get("component",["dataset","Connector"]);m=FusionCharts.get("component",["dataset","DragableLabels"]);for(y=0;y<g;y++)c="dragnode",q=w[c],v=q[0],void 0===D[c]?D[c]=0:D[c]++,v?(k=b[y],t=v.components&&v.components.data||[],z[c].push(v),p.push(v),t=t.length,u=k&&k.data&&k.data.length||0,t>u&&v.removeData(u-1,t-u),v.JSONData=k,v.configure(),q.shift()):(k=b[y],q=new S,q.chart=this,z[c].push(q),p.push(q),q.chart=this,q.index=y,q.init(k),d.addDataset(q,y)),r++;for(y=0;y<l;y++)c=
"connectors",g=e[y],q=w[c],v=q[0],void 0===D[c]?D[c]=0:D[c]++,v?(t=v.components&&v.components.data||[],t=t.length,u=g.connector&&g.connector.length||0,z[c].push(v),p.push(v),t>u&&v.removeData(u-1,t-u),v.JSONData=g,v.configure(),q.shift()):(q=new n,q.chart=this,q.index=y,z[c].push(q),p.push(q),q.init(g),d.addConnectors(q,y)),r++;c="labels";q=w[c];v=q[0];void 0===D[c]?D[c]=0:D[c]++;v?(t=v.JSONData,t=t.length,u=x,z[c].push(v),p.push(v),t>u&&v.removeData(u-1,t-u),v.JSONData=f,v.configure(),q.shift()):
(r=new m,r.chart=this,z[c].push(r),p.push(r),r.init(f),d.addLabels(r,0));this.config._datasetUpdated=!0;for(b in w)if(q=w[b],f=q.length,r=D[b]||-1,f)for(e=0;e<f;e++)"dragnode"===b?(d.removeNodeDataset(r),d._clearConnectors(),h.removeItem(q[e].legendItemId)):"connectors"===b?d.removeConnectorSet(r):d.removeLabelSet(r),ob.call(q[e]),r+=1;a.datasetMap=z}else this.setChartMessage()},addConfigureOptions:function(){var a=this.chartMenuTools,c=this.components,d=c.actionBar,b=this.components["datasetGroup_"+
this.defaultDatasetType],c=(c.chartMenuBar||d).componentGroups[0].symbolList[0].getListRefernce(),a=a.set,d=this.config.viewMode,e=[{"Add Node":{handler:function(){b.showNodeAddUI()},action:"click"}},{"Add Connector":{handler:function(){b.showConnectorAddUI(b.chart,{})},action:"click"}},{"Add Label":{handler:function(){b.showLabelUpdateUI(b.chart,{})},action:"click"}}];a(e);!d&&c.appendAsList(e)},_redrawDragNode:function(a,c){var d=this.chart;this.draw();t.raiseEvent("chartUpdated",W({sourceEvent:c},
a),d.chartInstance,[d.chartInstance.id])},addNode:function(a){var c=this.components.dataset,d=a.datasetId,b=c.length,e,f,g,l;for(l=0;l<b;l++)if(e=c[l]||{},g=e.config&&e.config.id,void 0!==g&&(g=g.toString()),g===d){f=!0;break}e&&f&&(c=e.groupManager,d=e.components.data,a.add=!0,b=d.length,d={index:b,dataIndex:b,link:a.link,y:a.y,x:a.x,shape:a.shape,width:a.width,height:a.height,radius:a.radius,sides:a.sides,label:a.name,toolText:a.tooltext,id:a.id,datasetIndex:e.index,datasetName:e.JSONData.seriesname,
sourceType:"dataplot"},e._setConfigure(b,a),this._redrawDragNode.call(c,d,"nodeAdded"),E.raiseEvent("nodeAdded",d,this.chartInstance))},updateNode:function(a){var c=this.components["datasetGroup_"+this.defaultDatasetType],d=c.datasets,b=d.length,e,f,g,l,x,h,y;a.update=!0;for(x=0;x<b;x++)for(g=d[x].dataset,h=g.components.data||[],e=h.length,y=0;y<e;y++)if(l=h[y],l.config.id===a.id){f=!0;break}g&&f&&(d={index:y,dataIndex:y,link:a.link,y:a.y,x:a.x,shape:a.shape,width:a.width,height:a.height,radius:a.radius,
sides:a.sides,label:a.name,toolText:a.tooltext,id:a.id,datasetIndex:g.index,datasetName:g.JSONData.seriesname,sourceType:"dataplot"},g._setConfigure(y,a),this._redrawDragNode.call(c,d,"nodeupdated"),E.raiseEvent("nodeupdated",d,this.chartInstance))},deleteNode:function(a){var c=this.components["datasetGroup_"+this.defaultDatasetType].nodes,d=c[a],b,e,f,g,l,x,h,y,p=function(a){for(var b in a)a[b].remove()};if(d){b=d.dataset;e=b.components.data;f=d.config.startConnectors;g=d.config.endConnectors;y=
e.length;for(d=0;d<y;d++)if(x=e[d],x.config.id===a){l=!0;break}if(!0===l){e=x.graphics;p(e);for(h in f)l=f[h]||{},e=l.graphics,p(e),delete l.graphics,l.removed=!0;for(h in g)l=g[h]||{},e=l.graphics,p(e),delete l.graphics,l.removed=!0;delete c[a];x.removed=!0;a=x.config||{};b={index:d,dataIndex:d,link:a.link,y:a.y,x:a.x,shape:a.shape,width:a.width,height:a.height,radius:a.radius,sides:a.sides,label:a.displayValue,toolText:a.toolText,id:a.id,datasetIndex:d,datasetName:b.JSONData.seriesname,sourceType:"dataplot"};
t.raiseEvent("chartUpdated",W({sourceEvent:"nodedeleted"},b),this.chartInstance,[this.chartInstance.id]);E.raiseEvent("nodedeleted",b,this.chartInstance)}}},addConnector:function(a){var c=this.components["datasetGroup_"+this.defaultDatasetType],d=c.connectorSet[0].connectors,b=d.components.data.length;a.add=!0;d._setConfigure(b,a);a={arrowAtEnd:!!a.arrowAtEnd,arrowAtStart:!!a.arrowAtStart,fromNodeId:a.from,id:a.id,label:a.label,link:a.connectorLink,sourceType:"connector",toNodeId:a.to};this._redrawDragNode.call(c,
a,"connectoradded");E.raiseEvent("connectoradded",a,this.chartInstance)},editConnector:function(a){var c=this.components["datasetGroup_"+this.defaultDatasetType],d=a.from,b=a.to,e=c.connectorSet,f,g,l,x,h,y,p,q,k=e.length;for(f=0;f<k;f++)for(l=(q=e[f].connectors)&&q.components.data||[],g=l.length,y=0;y<g;y++)if(x=l[y],h=x.config,x=h.from,h=h.to,x===d&&h===b){p=!0;break}a.update=!0;p&&(q._setConfigure(y,a),a={arrowAtEnd:!!a.arrowatend,arrowAtStart:!!a.arrowatstart,fromNodeId:a.from,id:a.id,label:a.label,
link:a.link,sourceType:"connector",toNodeId:a.to},this._redrawDragNode.call(c,a,"connectorupdated"),E.raiseEvent("connectorupdated",a,this.chartInstance))},deleteConnector:function(a){var c=a.from;a=a.to;var d=this.components["datasetGroup_"+this.defaultDatasetType].connectorSet,b,e,f,g,l,x=!1,h=d.length;for(b=0;b<h;b++)for(e=d[b].connectors,g=e.components.data,l=g.length,e=0;e<l;e++)if(f=g[e],f.config.from===c&&f.config.to===a){x=!0;break}if(x){c=f.config||{};c={arrowAtEnd:c.arrowAtEnd,arrowAtStart:c.arrowAtStart,
fromNodeId:c.from,id:c.id,label:c.label,link:c.connectorLink,sourceType:"connector",toNodeId:c.to};a=f.graphics;for(var y in a)a[y].remove();delete f.graphics;f.removed=!0;t.raiseEvent("chartUpdated",W({sourceEvent:"connectordeleted"},c),this.chartInstance,[this.chartInstance.id]);E.raiseEvent("connectordeleted",c,this.chartInstance)}},addLabel:function(a){var c=this.components["datasetGroup_"+this.defaultDatasetType],d=c.labelSet,b=FusionCharts.get("component",["dataset","DragableLabels"]);a.add=
!0;d.length?(d=c.labelSet[0].labels,b=d.components.data,b=b.length,d._setConfigure(b,a)):(d=new b,d.chart=this,d.init([a]),c.addLabels(d,0));d={text:a.text,x:a.x,y:a.y,allowdrag:a.allowdrag,sourceType:"labelnode",link:a.link};this._redrawDragNode.call(c,d,"labeladded");E.raiseEvent("labeladded",d,this.chartInstance);a.add=!0},deleteLabel:function(a){a=this.components["datasetGroup_"+this.defaultDatasetType].labelSet[0].labels.components.data[a];var c,d;if(c=a.graphics.element)d=c.data("eventArgs"),
c.remove(),delete a.graphics;t.raiseEvent("chartUpdated",W({sourceEvent:"labeldeleted"},d),this.chartInstance,[this.chartInstance.id]);E.raiseEvent("labeldeleted",d,this.chartInstance);a.removed=!0},restoreData:function(){var a=this.components["datasetGroup_"+this.defaultDatasetType],c=a.datasets,d=this.components.legend,b=a.connectorSet,e,f,g,l,x=a.labelSet,h=function(a){var b,c;for(b=0;b<a.length;b++)if(g=a[b],delete g.removed,g.config.add)for(c in l=a[b].graphics,l)l[c].remove()};for(e=0;e<c.length;e++)f=
c[e].dataset,a=f.components.data,h(a),f.drawn=!1,f.configure();for(e=0;e<b.length;e++)f=b[e].connectors,a=f.components.data,h(a),f.drawn=!1,f.configure();x.length&&(c=x[0].labels,a=c.components.data,h(a),c.configure());this._setAxisLimits();this._drawAxis();this._drawDataset();d._drawPointLegendItem();t.raiseEvent("dataRestored",{},this.chartInstance,[this.chartInstance.id])},getJSONData:function(){var a=this.defaultDatasetType&&this.defaultDatasetType.toLowerCase(),c=this.components,d=c["datasetGroup_"+
a],a=c.dataset,b=this.jsonData,e=a.length,c=[],f;if(d)c=d.getJSONData();else for(d=0;d<e;d++)f=a[d],f=f.getJSONData(),c.push(f);a=W({},b);a.dataset=c.dataset;a.connectors=c.connectors;a.labels=c.labels;return a},_setCategories:function(){var a=this.jsonData,c=this.components.xAxis,a=a.categories&&a.categories[0].category||[],d=a.length,b=[],e,f;for(e=0;e<d;e++)f=a[e]||{},void 0!==f.x&&b.push(f);c&&c[0].setCategory(b)},_drawDataset:function(){var a=this.components["datasetGroup_"+this.defaultDatasetType];
a&&a.draw()},_setAxisLimits:function(){var a=this.components,c=this.jsonData,c=c.categories&&c.categories[0].category||[],d,b=a.dataset,e=a.yAxis,a=a.xAxis,f,g=b.length,l,x=-Infinity,h=Infinity,y=Infinity,p=-Infinity,k,n,S={},m=[],r=function(a){k=q(a.xMax,-Infinity);n=q(a.xMin,Infinity);x=X(x,a.max);h=da(h,a.min);p=X(p,k);y=da(y,n)};for(l=0;l<g;l++)f=b[l],(d=f.groupManager)?S[f.type]=d:m.push(f);for(d in S)b=S[d].getDataLimits(),r(b);g=m.length;for(l=0;l<g;l++)b=m[l].getDataLimits(),r(b);-Infinity===
x&&(x=0);Infinity===h&&(h=0);this.config.yMax=x;this.config.yMin=h;e[0].setAxisConfig({isPercent:this.isStacked?this.config.stack100Percent:0});e[0].setDataLimit(x,h);if(-Infinity!==p||Infinity!==y){l=0;for(g=c.length;l<g;l++)if(d=c[l],d=d.x)d<y&&(y=d),d>p&&(p=d);a[0].setDataLimit(p,y)}}},N.dragbase);FusionCharts.register("component",["datasetGroup","DragNode",{init:function(){this.connectorSet=[];this.nodes={};this.datasets=[];this.components=[];this.graphics={};this.labelSet=[]},addDataset:function(a,
c){var d=this.datasets[c];a.groupManager=this;a.datasetIndex=c;d||(this.datasets[c]={dataset:a})},addLabels:function(a,c){var d=this.labelSet[c];a.groupManager=this;d||(this.labelSet[c]={labels:a})},addConnectors:function(a,c){var d=this.connectorSet[c];a.groupManager=this;d||(this.connectorSet[c]={connectors:a})},showNodeAddUI:function(){var a=this.chart,c=a.components.dataset,d=G,b,e,f;for(f=0;f<c.length;f++)e=c[f]||{},b=e.config,e=e.plotType,"dragnode"===e&&(d+='<option value="'+b.id+'">'+(b.name!==
z&&void 0!==b.name&&b.name+Dc+" "||z)+b.id+"</option>");this.showNodeUpdateUI(a,{dataset:{innerHTML:d}})},showConnectorAddUI:function(){var a=this.chart,c=this.nodes,d=G,b,e;for(e in c)b=c[e],b=b.config,b=b.id,d+='<option value="'+b+'">'+b+"</option>";this.showConnectorUpdateUI(a,{fromid:{innerHTML:d},toid:{innerHTML:d}})},draw:function(){var a=this.datasets,c=this.connectorSet,d,b,e=this.labelSet,f;this.updateUIvisuals();d=0;for(f=a.length;d<f;d++)b=a[d].dataset,b.draw();d=0;for(f=c.length;d<f;d++)a=
c[d].connectors,a.draw();d=0;for(f=e.length;d<f;d++)c=e[d].labels,c.draw();this.drawn=!0},getJSONData:function(){var a=this.datasets,c=this.connectorSet,d=this.labelSet,b={},e,f,g;b.dataset=[];b.connectors=[];b.labels=[];e=0;for(f=a.length;e<f;e++)g=a[e]&&a[e].dataset,b.dataset[e]||(b.dataset[e]=W({},g.JSONData)),b.dataset[e].data=g.getJSONData();e=0;for(f=c.length;e<f;e++)g=c[e]&&c[e].connectors,b.connectors[e]||(b.connectors[e]=W({},g.JSONData)),b.connectors[e].connector=g.getJSONData();e=0;for(f=
d.length;e<f;e++)g=d[e]&&d[e].labels,b.labels[e]||(b.labels[e]={label:[]}),b.labels[e].label=g.getJSONData();return b},clearLongPress:function(){this.data("move",!1);clearTimeout(this._longpressactive);delete this._longpressactive},createHtmlDialog:function(a,c,d,b,e,f,g){var l=a.components.paper,x=a.config.style.inCanvasStyle||{},h=a.config.width,y=a.config.height,p=a.get(Z,xa).transposeAnimDuration,q={color:cc(x.color),textAlign:"center",paddingTop:"1px",border:"1px solid #cccccc",borderRadius:"4px",
cursor:"pointer",_cursor:"hand",backgroundColor:mb+Ga,zIndex:21,"-webkit-border-radius":"4px"},k=g;k?p?k.animate({width:h,height:y},p,"normal"):k.attr({width:h,height:y}):k=l.html("div",{fill:"transparent",width:h,height:y},{fontSize:"10px",lineHeight:"15px",fontFamily:x.fontFamily},a.linkedItems.container);k.veil?p?k.veil.animate({width:h,height:y},p,"normal"):k.veil.attr({width:h,height:y}):k.veil=l.html("div",{fill:oa,width:h,height:y,opacity:.3},void 0,k);a={x:(h-c)/2,y:(y-d)/2,fill:"efefef",
strokeWidth:1,stroke:oa,width:c,height:d};k.dialog?p?k.dialog.animate({x:a.x,y:a.y,width:a.width,height:a.height},p,"normal"):k.dialog.attr(a):k.dialog=l.html("div",a,{borderRadius:"5px",boxShadow:"1px 1px 3px #000000","-webkit-border-radius":"5px","-webkit-box-shadow":"1px 1px 3px #000000",filter:'progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color="#000000")'},k);a={x:c-70-5,y:d-23-5,width:65,height:17,text:"Submit",tabIndex:1};k.ok?p?k.ok.animate({x:a.x,y:a.y,width:a.width,
height:a.height},p,"normal"):k.ok.attr(a):k.ok=l.html("div",a,q,k.dialog).on("click",b);b={x:c-140-5,y:d-23-5,width:65,height:17,text:"Cancel",tabIndex:2};k.cancel?p?k.cancel.animate({x:b.x,y:b.y,width:b.width,height:b.height},p,"normal"):k.cancel.attr(b):k.cancel=l.html("div",b,q,k.dialog).on("click",e);c={x:c-210-5,y:d-23-5,width:65,height:17,text:"Delete",tabIndex:3};k.remove?p?k.remove.animate({x:c.x,y:c.y,width:c.width,height:c.height},p,"normal"):k.remove.attr(c):k.remove=l.html("div",c,q,k.dialog).on("click",
f);k.handleKeyPress||(k.handleKeyPress=function(a){13===a.keyCode?k.ok.trigger(Vb?"touchStart":"click",a):27===a.keyCode&&k.cancel.trigger(Vb?"touchStart":"click",a)});return k},updateUIvisuals:function(){var a=this.graphics.cacheConnectorUpdateUI,c=this.chart,d=this.graphics.cacheLabelUpdateUI,b=this.graphics.cacheLabelDeleteUI,e=this.graphics.cacheUpdateUI;a&&this.createHtmlDialog(c,350,215,void 0,void 0,void 0,a);e&&this.createHtmlDialog(c,350,215,void 0,void 0,void 0,e);d&&this.createHtmlDialog(c,
350,215,void 0,void 0,void 0,d);b&&this.createHtmlDialog(c,350,215,void 0,void 0,void 0,b)},showConnectorUpdateUI:function(a,c,d){var b=a.components.paper,e=this.cacheConnectorUpdateUI,f={border:"1px solid #cccccc",fontSize:"10px",lineHeight:"15px",fontFamily:(a.config.style.inCanvasStyle||{}).fontFamily,padding:"2px"},g={textAlign:"right"},l=e&&e.fields,x=e&&e.labels,h,y,p,k=function(){var b=e&&e.fields,b={from:b.fromid.val(),to:b.toid.val(),id:b.id.val()};a.deleteConnector(b);e.hide()},n;e?(e.attr({width:a.config.width,
height:a.config.height}),e.veil.attr({width:a.config.width,height:a.config.height}),e.dialog.attr({x:(a.config.width-315)/2,y:(a.config.height-215)/2,width:315,height:215})):(e=this.graphics.cacheConnectorUpdateUI=this.createHtmlDialog(a,315,215,function(){var b=e&&e.fields,c;b&&(c={from:b.fromid.val(),to:b.toid.val(),id:b.id.val(),label:b.label.val(),color:b.color.val(),alpha:b.alpha.val(),link:b.url.val(),tooltext:b.tooltext.val(),strength:b.strength.val(),arrowatstart:b.arratstart.val(),arrowatend:b.arratend.val(),
dashed:b.dashed.val(),dashlen:b.dashlen.val(),dashgap:b.dashgap.val()},c.from?c.to?c.from!=c.to?(d?a.editConnector(c):a.addConnector(c),e.enableFields(),e.hide(),e.clearFields()):(e.error.attr({text:"Connector cannot start and end at the same node!"}),b.fromid.focus()):(e.error.attr({text:"Please select a valid connector end."}),b.toid.focus()):(e.error.attr({text:"Please select a valid connector start."}),b.fromid.focus()))},function(){e.error.attr({text:G});e.enableFields();e.hide()},k),n=e.dialog,
x=e.labels={},l=e.fields={});e.config=c;e.enableFields||(e.enableFields=function(){for(var a in c)c[a]&&c[a].disabled&&l[a]&&l[a].element.removeAttribute("disabled")});e.clearFields||(e.clearFields=function(){var a,b=e.fields;for(a in b)b[a].element.disabled||(b[a].element.value=G)});nb(this.connectorUpdateUIDefinition,function(a){var d=a.key,k=c[d]||{};x[d]||(x[d]=b.html("label",{x:a.x,y:a.y,width:a.labelWidth||45,text:a.text},g,n));if(!a.noInput){if(!(y=l[d])){y=l[d]=b.html(a.inputType||"input",
{y:-2+(a.inputPaddingTop||0),x:a.labelWidth&&a.labelWidth+5||50,width:a.inputWidth||50,name:d||G},f);if("select"!==a.inputType)y.attr({type:a.type||"text"}).on("keyup",e.handleKeyPress);y.add(x[d])}(h=q(k.innerHTML,a.innerHTML))&&y.attr({innerHTML:h});void 0!==(p=q(k.val,a.val))&&y.val(p);k.disabled&&y.attr({disabled:"disabled"})}});e.checkDash=function(){var a=l.dashed&&l.dashed.val()?"show":"hide";x.dashgap&&x.dashgap[a]();l.dashgap&&l.dashgap[a]();x.dashlen&&x.dashlen[a]();l.dashlen&&l.dashlen[a]()};
e.checkDash();l.dashed.on("click",e.checkDash);e.error||(e.error=b.html("span",{color:"ff0000",x:10,y:170},void 0,n));e.remove[d?"show":"hide"]();a.animation?e.fadeIn("fast"):e.show()},labelUpdateUIDefinition:[{key:"label",text:"Label*",x:10,y:15,inputWidth:235},{key:"size",text:"Size",x:10,y:40},{key:"padding",text:"Padding",x:10,y:65},{key:"x",text:"Position",x:120,y:65,labelWidth:70,inputWidth:25},{key:"y",text:",",x:225,y:65,labelWidth:10,inputWidth:25},{key:"xy",text:"(x, y)",x:260,y:65,noInput:!0},
{key:"allowdrag",text:"Allow Drag",x:120,y:40,inputType:"checkbox",inputPaddingTop:3,inputWidth:15,labelWidth:70,val:1},{key:"color",text:"Color",x:10,y:90},{key:"alpha",text:"Alpha",x:145,y:90,inputWidth:30,val:za},{key:"bordercolor",text:"Border Color",x:10,y:125,labelWidth:100},{key:"bgcolor",text:"Background Color",x:10,y:150,labelWidth:100}],showLabelUpdateUI:function(a,c){var d=a.components.paper,b=this.graphics.cacheLabelUpdateUI,e={border:"1px solid #cccccc",fontSize:"10px",lineHeight:"15px",
fontFamily:(a.config.style.inCanvasStyle||{}).fontFamily,padding:"2px"},f={textAlign:"right"},g=b&&b.fields,l=b&&b.labels,x,h,y;b||(b=this.graphics.cacheLabelUpdateUI=this.createHtmlDialog(a,315,205,function(){var c=b&&b.fields,d;c&&(d={text:c.label.val(),x:c.x.val(),y:c.y.val(),color:c.color.val(),alpha:c.alpha.val(),bgcolor:c.bgcolor.val(),bordercolor:c.bordercolor.val(),fontsize:c.size.val(),allowdrag:c.allowdrag.val(),padding:c.padding.val()},d.text?(a.addLabel&&a.addLabel(d),b.hide()):(b.error.attr({text:"Label cannot be blank."}),
c.label.focus()))},function(){b.error.attr({text:G});b.hide()}),y=b.dialog,l=b.labels={},g=b.fields={});nb(this.labelUpdateUIDefinition,function(a){var k=a.key;l[k]||(l[k]=d.html("label",{x:a.x,y:a.y,width:a.labelWidth||45,text:a.text},f,y));a.noInput||((x=g[k])||(x=g[k]=d.html("input",{y:-2+(a.inputPaddingTop||0),x:a.labelWidth&&a.labelWidth+5||50,width:a.inputWidth||50,type:a.inputType||"text",name:k||G},e,l[k]).on("keyup",b.handleKeyPress)),void 0!==(h=q(c[k],a.val))&&x.val(h))});b.error||(b.error=
d.html("span",{color:"ff0000",x:10,y:180},void 0,y));a.animation?b.fadeIn("fast"):b.show();b.fields.label.focus()},showLabelDeleteUI:function(a){var c=this.chart,d=c.get(Z,xa).duration,b=c.components.paper,e=this.graphics.cacheLabelDeleteUI;e||(e=this.graphics.cacheLabelDeleteUI=this.createHtmlDialog(c,250,100,void 0,function(){e.hide()},function(){c.deleteLabel(a.config.index);e.hide()}),e.message=b.html("span",{x:10,y:10,width:230,height:80}).add(e.dialog),e.ok.hide(),e.remove.translate(175).show());
e.message.attr({text:'Would you really like to delete the label: "'+a.config.text+'"?'});d?e.fadeIn("fast"):e.show()},connectorUpdateUIDefinition:[{key:"fromid",text:"Connect From",inputType:"select",x:10,y:15,labelWidth:80,inputWidth:100},{key:"toid",text:"Connect To",inputType:"select",x:10,y:40,labelWidth:80,inputWidth:100},{key:"arratstart",text:"Arrow At Start",x:200,y:15,type:"checkbox",inputPaddingTop:3,labelWidth:80,inputWidth:15},{key:"arratend",text:"Arrow At End",x:200,y:40,type:"checkbox",
inputPaddingTop:3,labelWidth:80,inputWidth:15},{key:"label",text:"Label",x:10,y:75,labelWidth:40,inputWidth:120},{key:"id",text:"Node ID",x:190,y:75,inputWidth:55},{key:"color",text:"Color",x:10,y:100,labelWidth:40,inputWidth:35},{key:"alpha",text:"Alpha",x:110,y:100,inputWidth:25,labelWidth:35},{key:"strength",text:"Strength",x:190,y:100,inputWidth:55,val:"0.1"},{key:"url",text:"Link",x:10,y:125,labelWidth:40,inputWidth:120},{key:"tooltext",text:"Tooltip",x:190,y:125,labelWidth:40,inputWidth:60},
{key:"dashed",text:"Dashed",x:10,y:150,type:"checkbox",inputPaddingTop:3,inputWidth:15,labelWidth:40},{key:"dashgap",text:"Dash Gap",x:85,y:150,labelWidth:60,inputWidth:25},{key:"dashlen",text:"Dash Length",x:190,y:150,labelWidth:70,inputWidth:30}],nodeUpdateUIDefinition:[{key:"id",text:"Id",inputWidth:60,x:10,y:15},{key:"dataset",text:"dataset",inputType:"select",inputWidth:110,innerHTML:void 0,x:170,y:15},{key:"x",text:"Value",x:10,y:40,inputWidth:21},{key:"y",text:",",x:88,y:40,inputWidth:21,labelWidth:5},
{text:"(x, y)",x:125,y:40,labelWidth:33,noInput:!0},{key:"tooltip",text:"Tooltip",inputWidth:105,x:170,y:40},{key:"label",text:"Label",inputWidth:92,x:10,y:65},{key:"labelalign",text:"Align",labelWidth:70,inputWidth:110,inputType:"select",innerHTML:'<option></option><option value="top">Top</option><option value="middle">Middle</option><option value="bottom">Bottom</option>',x:145,y:63},{key:"color",text:"Color",x:10,y:90,inputWidth:60},{key:"colorOut",innerHTML:"&nbsp;",x:85,y:90,inputWidth:15,inputType:"span"},
{key:"alpha",text:"Alpha",x:170,y:90,inputWidth:20},{key:"draggable",text:"Allow Drag",value:!0,inputWidth:20,x:250,y:90,labelWidth:58,inputPaddingTop:3,type:"checkbox"},{key:"shape",text:"Shape",inputType:"select",inputWidth:97,innerHTML:'<option value="rect">Rectangle</option><option value="circ">Circle</option><option value="poly">Polygon</option>',x:10,y:115},{key:"rectHeight",text:"Height",x:170,y:115,inputWidth:20},{key:"rectWidth",text:"Width",x:255,y:115,inputWidth:20},{key:"circPolyRadius",
text:"Radius",x:170,y:115,inputWidth:20},{key:"polySides",text:"Sides",x:255,y:115,inputWidth:20},{key:"link",text:"Link",x:10,y:140,inputWidth:92},{key:"image",text:"Image",type:"checkbox",inputPaddingTop:4,inputWidth:20,x:10,y:170},{key:"imgUrl",text:"URL",inputWidth:105,x:170,y:170},{key:"imgWidth",text:"Width",inputWidth:20,x:10,y:195},{key:"imgHeight",text:"Height",inputWidth:20,x:82,y:195},{key:"imgAlign",text:"Align",inputType:"select",inputWidth:75,innerHTML:'<option value="top">Top</option><option value="middle">Middle</option><option value="bottom">Bottom</option>',
x:170,y:195}],showNodeUpdateUI:function(){var a=function(){for(var a=this.graphics.cacheUpdateUI,c=a.fields.shape,d=["rectWidth","rectHeight","circPolyRadius","polySides"],g=d.length,l;g--;)l=d[g],/rect|poly|circ/ig.test(l)&&(a.labels[l].hide(),a.fields[l].hide()),(new RegExp(q(c.val(),"rect"),"ig")).test(l)&&(a.labels[l].show(),a.fields[l].show())},c=function(){var a=this.graphics.cacheUpdateUI.fields,c=Vc(a.color.val());c&&a.colorOut.css({background:Uc(c)})},d=function(a,c){var d=this.graphics.cacheUpdateUI,
g=a.config.height,l=d.fields.image.val(),x=c?300:0,h=["imgWidth","imgHeight","imgAlign","imgUrl"],y,p,k;y=l?250:215;d.ok.hide();d.cancel.hide();d.remove.hide();d.error.hide();for(p=h.length;!l&&p--;)k=h[p],d.labels[k].hide(),d.fields[k].hide();t.danimate.animate(d.dialog.element,{top:(g-y)/2,height:y},x,"linear",function(){for(p=h.length;p--&&l;)k=h[p],d.labels[k].show(),d.fields[k].show();d.ok.attr({y:y-23-5}).show();d.cancel.attr({y:y-23-5}).show();d.remove.attr({y:y-23-5});d.error.attr({y:y-23-
5+4}).show();d.edit?d.remove.show():d.remove.hide()})};return function(b,e,f){var g=this,l=g.graphics,x=l.cacheUpdateUI,h=g.nodes,y=b.config,p=y.animation,k=b.components.paper,q={width:"80px",border:"1px solid #cccccc",fontSize:"10px",lineHeight:"15px",padding:"2px",fontFamily:(y.style.inCanvasStyle||{}).fontFamily},n={textAlign:"right"},m=x&&x.fields,r=x&&x.labels,t,y=function(){var a=x&&x.fields,b=x.edit,c=g.chart,d=c.components,e,f,l;e=d.xAxis[0].config.axisRange.min;d=d.yAxis[0].config.axisRange.min;
if(a){switch(a.shape.val()){case "circ":l="circle";break;case "poly":l="polygon";break;default:l="rectangle"}e={x:T(a.x.val(),e),y:T(a.y.val(),d),id:a.id.val(),datasetId:a.dataset.val(),name:a.label.val(),tooltext:a.tooltip.val(),color:a.color.val(),alpha:a.alpha.val(),labelalign:a.labelalign.val(),allowdrag:a.draggable.val(),shape:l,width:a.rectWidth.val(),height:a.rectHeight.val(),radius:a.circPolyRadius.val(),numsides:a.polySides.val(),imagenode:a.image.val(),imagewidth:a.imgWidth.val(),imageheight:a.imgHeight.val(),
imagealign:a.imgAlign.val(),imageurl:a.imgUrl.val(),link:a.link.val()};h[e.id]&&(f=!0);if(f&&void 0===b)x.error.attr({text:"ID already exist."}),a.label.focus();else{a=e.datasetId;if(a!==G||b)b?c.updateNode(e):c.addNode(e),x.hide(),x.visible=!1;return}}x.enableFields()},u=function(){x.hide();x.visible=!1;x.enableFields();x.error.attr({text:z});x.visible=!1},v=function(){b.deleteNode(x.fields.id.val());x.hide();x.visible=!1};x||(x=l.cacheUpdateUI=this.createHtmlDialog(b,350,215,y,u,v),t=x.dialog,r=
x.labels={},m=x.fields={});x.config=e;x.edit=f;x.error||(x.error=k.html("span",{color:"ff0000",x:30,y:228},void 0,t));x.enableFields||(x.enableFields=function(){for(var a in e)e[a]&&e[a].disabled&&m[a]&&m[a].element.removeAttribute("disabled")});x.clearFields||(x.clearFields=function(){var a,b=x.fields;for(a in b)b[a].element.disabled||(b[a].element.value=G)});nb(this.nodeUpdateUIDefinition,function(f){var l,h=f.key,p={},y=e[h]||{},P,u;!r[h]&&(r[h]=k.html("label",{x:f.x,y:f.y,width:f.labelWidth||
45,text:f.text},n,t));if(!f.noInput){l=m[h];if(!l){q.border="checkbox"==f.type?z:"1px solid #cccccc";l=m[h]=k.html(f.inputType||"input",{x:f.labelWidth&&f.labelWidth+5||50,y:-2+(f.inputPaddingTop||0),width:f.inputWidth||50,name:h||G},q);if("select"!==f.inputType)l.attr({type:f.type||"text"}).on("keyup",x.handleKeyPress);l.add(r[h])}cb(P=T(y.innerHTML,f.innerHTML))&&(p.innerHTML=P);y.disabled?p.disabled="disabled":l.element&&(l.element.disabled=!1);l.attr(p);cb(u=T(y.value,f.value))&&l.val(u);"shape"==
h&&l.on("change",function(){a.call(g,b)});"image"==h&&l.on("click",function(){d.call(g,b,!0)});"color"==h&&l.on("keyup",function(){c.call(g,b)})}});c.call(this,b);d.call(this,b);a.call(this,b);p?x.fadeIn("fast"):x.show();x.visible=!0;x.fields[f?"label":"id"].focus()}}(),getDataLimits:function(){var a=this.datasets,c,d=Infinity,b=-Infinity,e=-Infinity,f=Infinity,g;for(c=0;c<a.length;c++)g=a[c].dataset.config,b=X(b,g.yMax),d=da(d,g.yMin),e=X(e,g.xMax),f=da(f,g.xMin);return{max:b,min:d,xMax:e,xMin:f}},
removeNodeDataset:function(a){this.datasets.splice(a)},removeConnectorSet:function(a){this.connectorSet.splice(a)},removeLabelSet:function(a){this.labelSet.splice(a)},_clearConnectors:function(){var a=this.nodes,c,d,b,e,f;for(c in a)if(b=a[c]){d=b.config.startConnectors||{};b=b.config.endConnectors||{};for(f in d)e={graphics:d[f].graphics||{}},ob.call(e);for(f in b)e={graphics:b[f].graphics||{}},ob.call(e)}this.nodes={}}}]);FusionCharts.register("component",["dataset","Dragnode",{type:"dragnode",
configure:function(){var a=this.index,c=this.chart,d=this.JSONData,b=c.jsonData.chart,e=(d.data||[]).length,f=this.config,c=c.components.colorManager,g,l,x,P,y,p;f.showValues=h(d.showvalues,b.showvalues,1);p=f.useRoundEdges=h(b.useroundedges);f.zIndex=1;f.name=H(d.seriesname);f.viewMode=h(b.viewmode,0);f.id=q(d.id,this.index);if(0===h(d.includeinlegend)||void 0===f.name)f.showInLegend=!1;f.includeInLegend=h(d.includeinlegend,1);f.showTooltip=h(b.showtooltip,1);f.seriesNameInTooltip=h(b.seriesnameintooltip,
1);f.tooltipSepChar=q(b.tooltipsepchar," - ");g=f.plotFillAlpha=q(b.plotfillalpha,za);l=f.showPlotBorder=h(b.showplotborder,1);x=f.plotBorderColor=Ha(q(b.plotbordercolor,"666666"));P=f.plotBorderThickness=h(b.plotborderthickness,p?2:1);y=f.plotBorderAlpha=q(b.plotborderalpha,b.plotfillalpha,p?"35":"95");f.use3DLighting=!!h(b.use3dlighting,b.is3d,p?1:0);f.color=Ha(q(d.color,c.getPlotColor(a)));f.alpha=q(d.plotfillalpha,d.nodeFillAlpha,d.alpha,g);f.datasetShowPlotBorder=!!h(d.showplotborder,l);f.datasetPlotBorderColor=
Ha(q(d.plotbordercolor,d.nodebordercolor,x));f.datasetPlotBorderThickness=h(d.plotborderthickness,d.nodeborderthickness,P);f.datasetPlotBorderAlpha=f.datasetShowPlotBorder?q(d.plotborderalpha,d.nodeborderalpha,d.alpha,y):Ea;f.seriesname=Y(d.seriesname);f.datasetAllowDrag=!!h(d.allowdrag,1);f.colorObj={fillColor:aa(f.color,f.alpha),lineColor:{FCcolor:{color:f.datasetPlotBorderColor,alpha:f.datasetPlotBorderAlpha}}};f.lineWidth=void 0;f.symbol="poly_4";a=this.components.data=this.components.data||(this.components.data=
[]);b=a.length;b>e&&a.splice(e,b-e);this.visible=1===h(d.visible,!Number(d.initiallyhidden),1);f.yMin=f.yMax=f.xMax=f.xMin=0;this._refreshData=!0;for(d=0;d<e;d+=1)this._setConfigure(d);this._refreshData=!1;this._addLegend()},_setConfigure:function(a,c){var d=this.JSONData,b=d.data,e=c?c:b[a],f=this.components.data,b=this.config,f=f[a]=f[a]||(f[a]={}),g=f.config=f.config||(f.config={}),l=b.id,x=b.yMin||Infinity,P=b.yMax||-Infinity,y=b.xMax||-Infinity,p=b.xMin||Infinity,n,m,S=b.use3DLighting,r=b.datasetPlotBorderThickness,
t=b.datasetPlotBorderColor,u=b.datasetPlotBorderAlpha,v=this.chart.jsonData.chart,w=b.color,ha=b.alpha,A=b.datasetAllowDrag,ia=this.chart.components.numberFormatter;!f.graphics&&(f.graphics={});g._options=W({},e);if(e||c){n=g.y=ia.getCleanValue(q(e.y));m=g.x=ia.getCleanValue(q(e.x));g.index=a;g.dragStart||(g.dragStart={});P=X(P,g.y);x=da(x,g.y);y=X(y,g.x);p=da(p,g.x);if(null===n)g.value=null;else{m=ia.xAxis(m);g.formatedVal=null===n?n:ia.dataLabels(n);g.setTooltext=H(Y(q(e.tooltext,d.plottooltext,
v.plottooltext)));g.pointLabel=q(e.label,e.name);d=Y(g.pointLabel);g.label=d;g.name=d;g.displayValue=d;g.xValue=m;g.startConnectors={};g.endConnectors={};g.toolText=b.showTooltip?this._configureTooltext(g,b,v):!1;g.link=e.link;g.id=q(e.id,l+K+a);g.allowDrag=!!h(e.allowdrag,A);d=g.shape=H(q(e.shape),"rectangle").toLowerCase();g.height=H(q(e.height),10);g.width=H(q(e.width),10);g.radius=H(q(e.radius),10);g.numSides=H(q(e.numsides),4);g.color=Ha(q(e.color,w));g.borderColor=Ha(q(e.bordercolor,t));g.alpha=
q(e.alpha,ha);g.imageURL=H(e.imageurl);g.imageNode=!!h(e.imagenode);g.imageWidth=e.imagewidth;g.imageHeight=e.imageheight;g.imageAlign=H(e.imagealign,z).toLowerCase();g.labelAlign=q(e.labelalign,g.imageNode&&cb(g.imageURL)?k:"middle");switch(g.shape){case "circle":e=0;break;case "polygon":e=2;d=Tc(g.numSides);break;default:e=1}g.symbol=d;S?(g.fillColor=this.getPointColor(g.color,g.alpha,e),g.cloneFillColor=this.getPointColor(g.color,50,e)):(g.fillColor={color:g.color,alpha:g.alpha},g.cloneFillColor=
aa(g.color,50));g.rollOverProperties=this.pointHoverOptions(f,v,{shapeType:e,use3D:S,height:g.height,width:g.width,radius:g.radius,color:g.color,alpha:g.alpha,borderColor:g.borderColor,borderAlpha:u,borderThickness:r})}!g.update&&c&&(g.update=c.update);!g.add&&c&&(g.add=c.add);!0===this._refreshData&&delete f.removed}f.dataset=this;b.xMax=y;b.xMin=p;b.yMin=x;b.yMax=P},_configureTooltext:function(a,c,d){var b=a.setTooltext,e=a.formatedVal,f=c.seriesname,g=a.label,l=a.xValue,x=a.pointLabel,h=c.tooltipSepChar;
void 0!==b?a=ya(b,[3,4,5,6,8,9,10,11],{yaxisName:Y(d.yaxisname),xaxisName:Y(d.xaxisname),yDataValue:e,xDataValue:l,label:g},a,d,c):void 0!==x?a=g:null===e?a=!1:(c.seriesNameInToolTip&&(f=T(c.seriesname)),a=f?f+h:z,a+=l?l+h:z,a+=e);return a},updatePointConfig:function(a,c){var d=this.chart,b=this.config,e=(this.components.data[c]||{}).config,f=d.components.numberFormatter,d=d.jsonData.chart,g=b.yMin||Infinity,l=b.yMax||-Infinity,x=b.xMax||-Infinity,h=b.xMin||Infinity;void 0!==e&&(e.y=f.getCleanValue(q(a.y)),
e.x=f.getCleanValue(q(a.x)),e._options.x=e.x,e._options.y=e.y,X(l,e.y),da(g,e.y),X(x,e.x),da(h,e.x),g=f.xAxis(e.x),e.formatedVal=null===e.y?e.y:f.dataLabels(e.y),e.xValue=g,e.toolText=b.showTooltip?this._configureTooltext(e,b,d):!1,e.update=a.update)},pointHoverOptions:function(a,c,d){var b=h(a.showhovereffect,this.showhovereffect,c.plothovereffect,c.showhovereffect),e={},f=!!q(a.hovercolor,this.hovercolor,c.plotfillhovercolor,a.hoveralpha,this.hoveralpha,c.plotfillhoveralpha,a.borderhovercolor,this.borderhovercolor,
c.plotborderhovercolor,a.borderhoveralpha,this.borderhoveralpha,c.plotborderhoveralpha,a.borderhoverthickness,this.borderhoverthickness,c.plotborderhoverthickness,a.hoverheight,this.hoverheight,c.plothoverheight,a.hoverwidth,this.hoverwidth,c.plothoverwidth,a.hoverradius,this.hoverradius,c.plothoverradius,b),g=!1;if(void 0===b&&f||b)g=!0,b=q(a.hovercolor,this.hovercolor,c.plotfillhovercolor,Ob(d.color,70)),f=q(a.hoveralpha,this.hoveralpha,c.plotfillhoveralpha,d.alpha),e={stroke:aa(q(a.borderhovercolor,
this.borderhovercolor,c.plotborderhovercolor,d.borderColor),h(a.borderhoveralpha,this.borderhoveralpha,c.plotborderhoveralpha,f,d.borderAlpha)),"stroke-width":h(a.borderhoverthickness,this.borderhoverthickness,c.plotborderhoverthickness,d.borderThickness),height:h(a.hoverheight,this.hoverheight,c.plothoverheight,d.height),width:h(a.hoverwidth,this.hoverwidth,c.plothoverwidth,d.width),r:h(a.hoverradius,this.hoverradius,c.plothoverradius,d.radius)},a=d.use3D?this.getPointColor(Ha(q(a.hovercolor,this.hovercolor,
c.plotfillhovercolor,Ob(d.color,70))),q(a.hoveralpha,this.hoveralpha,c.plotfillhoveralpha,d.alpha),d.shapeType):aa(b,f),e.fill=ga(a);return{enabled:g,rollOverAttrs:e}},getJSONData:function(){var a=this.components.data,c=a.length,d=[],b,e;for(e=0;e<c;e++)b=a[e],!b.removed&&b.config._options&&(delete b.config._options.update,delete b.config._options.add,d.push(b.config._options));return d},getPointColor:function(a,c,d){var b;a=Ha(a);c=Xb(c);b=Ob(a,80);a=Rc(a,65);c={FCcolor:{gradientUnits:"objectBoundingBox",
color:b+","+a,alpha:c+","+c,ratio:Sb}};d?c.FCcolor.angle=1===d?0:180:(c.FCcolor.cx=.4,c.FCcolor.cy=.4,c.FCcolor.r="50%",c.FCcolor.radialGradient=!0);return c},init:function(a){this.yAxis=this.chart.components.yAxis[0];this.components={};this.graphics={};this.JSONData=a;this.plotType="dragnode";this.configure()},_addLegend:function(){var a=this.config,c=this.chart.components.legend,a={enabled:a.includeInLegend,type:this.type,fillColor:ga({color:a.color,alpha:a.alpha}),strokeColor:ga({color:a.plotBorderColor,
alpha:za}),anchorSide:4,strokeWidth:a.anchorBorderThickness,label:T(this.JSONData.seriesname)};this.legendItemId=c.addItems(this,this.legendInteractivity,a)},draw:function(){var a=this.components,c=this.graphics,d=this.chart,b=d.getJobList(),e=d.linkedItems.smartLabel,a=a.data,f=this.components.removeDataArr||[],g=f.length,l=d.components.paper,x,h=d.config.dataLabelStyle,y={fontFamily:h.fontFamily,fontSize:h.fontSize,lineHeight:h.lineHeight,fontWeight:h.fontWeight,fontStyle:h.fontStyle},p;x=d.graphics;
p=x.datasetGroup;var k=x.trackerGroup;x=c.group=c.group||l.group(p);p=c.dragLabelGroup=c.dragLabelGroup||l.group("dragLabelGroup",p);c.trackerContainer=c.trackerContainer||l.group("tracker",k);e.useEllipsesOnOverflow(d.config.useEllipsesWhenOverflow);e.setStyle(h);x.css(y);d=0;for(e=a.length;d<e;d+=1)l=a[d].removed,!l&&this._drawNode(d);b.trackerDrawID.push($a.addJob(this.drawTracker,this,[],t.priorityList.tracker));!this.drawn&&b.labelDrawID.push($a.addJob(this.drawLabel,this,[],t.priorityList.label));
this.drawn=!0;this.visible&&(x.show(),p.show(),c.trackerContainer.show());for(d=0;d<g;d++)this._removeDataVisuals(f.shift())},_drawNode:function(a){var c=this.chart,d=c.components,b=this.groupManager,e=b.nodes,f=d.paper,g=this.xAxis=d.xAxis[0],l=this.yAxis=d.yAxis[0],d=this.components.data[a],x=d.config,k=this.config,y=c.get(Z,xa)||{},p=y.duration,n=y.dummyObj,m=y.animObj,y=d.graphics||(d.graphics={}),S=x.symbol,t,u,v,w,ma,ha,A,ia,D=k.colorObj.lineColor,J=k.datasetPlotBorderThickness,C,F;w=this.graphics;
A=c.graphics.datasetGroup;var c=w.group,L=d.config.rollOverProperties,I,B,E,H=this.components.pool||{},U;t=y.graphic;var O=y.cloneGraphic,Q=y.cloneImage,N=y.image,X,T=y.label;w.cloneGraphicGroup=w.cloneGraphicGroup||f.group("clone",A);w.cloneGraphicGroup.attr({opacity:.3});x._yPos=l=l.getAxisPosition(x.y);x._xPos=g=g.getAxisPosition(x.x);if(void 0!==l&&!isNaN(l)){x.shapeArg={};ha=x.shapeArg;u=h(x.height);t=h(x.width);v=h(x.radius);S="rectangle"===S;w=x.id;ma=x.imageNode;A=x.imageURL;ia=x.imageAlign;
C=S?t:1.4*v;I=h(x.imageWidth,C);F=S?u:1.4*v;v=h(x.imageHeight,F);E=ga(x.fillColor);x._plotWidth=C;x._plotHeight=F;B={fill:E,"stroke-width":J,stroke:ga(D)};S=ha.symbol=q(x.symbol,k.symbol,z);S=S.split(K);U=[S[1],g,l,x.radius,x.startAngle,0];"poly"===S[0]||"circle"===S[0]?(x.shapeType=S[0],X="polypath",k="path",U={polypath:U},ha.x=g,ha.y=l,ha.radius=x.radius,ha.sides=S[1]):(x.shapeType=sc,k=X="rect",ha.x=g-t/2,ha.y=l-u/2,ha.r=0,ha.width=t,ha.height=u,U={x:ha.x,y:ha.y,width:t,height:u,r:0},B.width=t,
B.height=u,B.x=g-t/2,B.y=l-u/2,L&&L.enabled&&(S=L.rollOverAttrs,S.x=g-S.width/2,S.y=l-S.height/2,delete S.r));S=(t=y.element)&&t.type;-1===X.indexOf(S)&&t&&(t.remove(),t=y.element=null,T&&T.remove(),N&&N.remove(),delete y.label,delete y.image,N=null);t||(H.element&&H.element[k]&&H.element[k].length?(t=y.element=H.element[k].shift(),t.toFront()):(t=y.element=f[X](c),t.attr(U)));t.show().animateWith(n,m,U,p);t.attr({fill:E,"stroke-width":J,stroke:ga(D)});b.animationDone=!0;O&&(O.transform(G),O.attr(U));
if(ma&&A){v>F&&(v=F);I>C&&(I=C);switch(ia){case "middle":b=l-v/2;break;case r:b=F>v?l+F/2-v:l-v/2;break;default:b=F>v?l-.5*F:l-v/2}x.imageX=g-I/2;x.imageY=b;x.imageWidth=I;x.imageHeight=v;k="image";N||(H.image&&H.image[k]&&H.image[k].length?(N=y.image=H.image[k].shift(),N.toFront()):N=y.image=f.image(c));N.show().attr({src:A,x:x.imageX,y:b,width:I,height:v});Q&&(Q.transform(G),Q.attr({src:A,x:x.imageX,y:b,width:I,height:v}))}x.pointAttr=B;this.drawn&&this.drawLabel(a);e[w]=d}},drawLabel:function(a){var c=
this.chart,d=c.components.paper,b=this.components.data,e=b.length,f,g,l=this.graphics.group,x=c.config.dataLabelStyle,h=c.get("config","animationObj"),y=h.dummyObj,p=h.animObj,q=h.duration,n=this.components.pool||{},m=c.config,t,u,h=h.animType,v,w,ma,c=c.linkedItems.smartLabel;for(void 0!==a?e=a+1:a=0;a<e;a++)if(u=b[a],f=u.config,w=f._plotWidth,t=f._plotHeight,g=f.displayValue,v=f.labelAlign,ma=u.graphics,cb(g)||g!==z){c.useEllipsesOnOverflow(m.useEllipsesWhenOverflow);g=c.getSmartText(g,w,t);t=.5*
t-.5*g.height;switch(v){case k:t=-t;break;case r:break;default:t=0}v=f._xPos;f=f._yPos;u._yAdjustment=u=t;u=f+u;f={text:g.text,title:g.tooltext||G,fill:x.color,"text-bound":[x.backgroundColor,x.borderColor,x.borderThickness,x.borderPadding,x.borderRadius,x.borderDash]};(g=ma.label=ma.label||n.label&&n.label.text&&n.label.text.shift())?(g.attr(f),g.show().animateWith(y,p,{x:v,y:u},q,h)):(f.x=v,f.y=u,g=ma.label=d.text(f,l));(ma=ma&&(ma.image||ma.element))&&g.insertAfter(ma)}else ma.label&&ma.label.hide()},
_removeDataVisuals:function(a){var c=this.components.pool||(this.components.pool={}),d,b,e,f;if(a)for(b in a=a.graphics,a)d=c[b]||(c[b]={}),e=(f=a[b])&&f.type,d=d[e]||(d[e]=[]),f.hide&&"function"===typeof f.hide&&(f.attr({"text-bound":[]}),f.hide(),f.transform&&f.transform(G)),d.push(a[b])},show:function(){var a=this.graphics,c=this.graphics.trackerContainer,d=a.dragLabelGroup;a.group.show();d.show();c.show();this.visible=!0},hide:function(){var a=this.graphics,c=this.graphics.trackerContainer,d=
a.dragLabelGroup;a.group.hide();c.hide();d.hide();this.visible=!1},drawTracker:function(a,c){for(var d=this,b=d.components.data,e=d.chart,f=e.components.paper,g,l,x,h,y,p,k,n,m,r,t,u=d.graphics.trackerContainer,v={},w,ha,z,A={circle:"path",rect:"rect",poly:"path"},D=function(a,b){return function(c){var d=this.data("hoverAttr");b&&a.graphics.element.attr(d);ka.call(this,e,c,"DataPlotRollOver")}},J=function(a,b){return function(c){var d=this.data("unHoverAttr");b&&a.graphics.element.attr(d);ka.call(this,
e,c,"DataPlotRollOut")}},C,F,L,I,B=function(a){d._dragUp.call(this,a)},E=function(a,b,c,f){d._dragMove.call(this,a,b,c,f,e)},H=function(a){d._dragStart.call(this,a,e)},U=a||0,K=c||b.length,U=0;U<K;U++)I=b[U],I.removed||(g=I.config,l=g.shapeArg,x=l.width,h=l.height,y=l.x,p=l.y,k=g.pointAttr,n=g.shapeType,m=l.sides,r=l.radius,l=I.graphics.trackerElement,t=I.graphics.cloneGraphic,z=g.rollOverProperties,v={},w=I.graphics.cloneImage,ha=I.graphics.cloneText,C=l&&l.data("type"),F=g.toolText,L=g.link?"pointer":
g.allowDrag?"move":G,v.fill=Ma,v.stroke=Ma,v.cursor=L,v.ishot=!0,C!==A[n]&&l&&(l.remove(),l=I.graphics.trackerElement=null),l?(n!==sc?l.attr({polypath:[m||2,y,p,r,g.startAngle,0]}).attr(v):l.attr({x:y,y:p,width:x,height:h}).attr(v),l.tooltip(F)):(n!==sc?(l=I.graphics.trackerElement=f.polypath(m||2,y,p,r,g.startAngle,0,u),l.data("type","path")):(l=I.graphics.trackerElement=f.rect(y,p,x,h,0,u),l.data("type","rect")),t&&(t.remove(),delete I.graphics.cloneGraphic),w&&(w.remove(),delete I.graphics.cloneImage),
ha&&(ha.remove(),delete I.graphics.cloneText),l.attr(v).tooltip(F),l.hover(D(I,z&&z.enabled),J(I,z&&z.enabled)),l.data("drag-options",{dataObj:I,dataset:d,datasetIndex:d.index,pointIndex:I.config.index,cursor:L,chart:e,link:I.link}),l.drag(E,H,B)),g={index:U,link:g.link,y:g.y,x:g.x,shape:q(n,"rect"),width:x,height:h,radius:r,sides:g.numSides,label:g.displayValue,toolText:g.toolText,id:g.id,datasetIndex:d.index,datasetName:d.JSONData.seriesname,sourceType:"dataplot"},l.data("eventArgs",g),l.data("hoverAttr",
z&&z.rollOverAttrs),l.data("unHoverAttr",k))},_dragStart:function(a,c){var d=this,b=d.data("drag-options"),e=d.getBBox(),f=b.dataObj,g=f.config,l=b.dataset,x=l.groupManager,h=x.graphics,y=h.waitElement,p=b.dataset.config,b=p.viewMode;Vb&&Tb(a);var k=c.components.paper,q=l.graphics.trackerContainer,n=g.dragStart||(g.dragStart={}),m=f.graphics.cloneGraphic,r=l.graphics.cloneGraphicGroup,t=f.graphics.cloneText,u=f.graphics.image,v=f.graphics.cloneImage,w=f.graphics.label,A={circle:"circ",rectangle:"rect",
polygon:"poly"};Fa&&(d._.dirty=1);g.symbol.split(K);g.allowDrag&&(!m&&f.graphics.element&&(m=f.graphics.cloneGraphic=f.graphics.element.clone(),r.appendChild(m)),w&&!t&&(t=f.graphics.cloneText=f.graphics.label.clone(),t.followers[0]&&t.followers[0].el&&r.appendChild(t.followers[0].el),r.appendChild(t)),u&&!v&&(v=f.graphics.cloneImage=f.graphics.image.clone(),r.appendChild(v)),t&&t.show(),v&&v.show(),m&&m.show());n.xPos=g._xPos;n.yPos=g._yPos;n.x=g.x;n.y=g.y;n.bBox=e;n.origX=n.lastDx||(n.lastDx=0);
n.origY=n.lastDy||(n.lastDy=0);d.data("fire_click_event",1);d.data("mousedown",1);clearTimeout(d._longpressactive);d.data("move",!0);b||(y||(y=h.waitElement=k.ringpath(g._xPos,g._yPos,8,11,0,0,q).attr({fill:ga({alpha:"100,100",angle:120,color:"CCCCCC,FFFFFF",ratio:"30,50"}),"stroke-width":0})),y.attr({ringpath:[g._xPos,g._yPos,8,11,0,0]}).show().animate({ringpath:[g._xPos,g._yPos,8,11,0,6.28]},1E3),d._longpressactive=setTimeout(function(){var a=p.name!==z&&void 0!==p.name?p.name+Dc+" ":z,b=p.id;h.waitElement&&
h.waitElement.hide();d.data("fire_click_event",0);x.showNodeUpdateUI(c,{x:{value:g.x},y:{value:g.y},draggable:{value:T(g.allowdrag,1)},color:{value:g.color},alpha:{value:g.alpha},label:{value:T(g.label,g.name)},tooltip:{value:g.toolText},shape:{value:A[g.shape]},rectWidth:{value:g.width},rectHeight:{value:g.height},circPolyRadius:{value:g.radius},polySides:{value:g.numsides},image:{value:g.imageNode},imgWidth:{value:g.imageWidth},imgHeight:{value:g.imageHeight},imgAlign:{value:g.imageAlign},imgUrl:{value:g.imageURL},
id:{value:g.id,disabled:!0},link:{value:g.link},dataset:{innerHTML:'<option value="'+b+'">'+a+b+"</option>",disabled:!0},datasetIndex:l.index},!0)},1E3));m&&m.show();t&&t.show();v&&v.show()},_dragMove:function(a,c,d,b,e){var f=this.data("drag-options"),g=f.dataObj;d=g.graphics.cloneGraphic;b=g.graphics.cloneImage;var l=g.graphics.cloneText,g=g.config,x=g.dragStart,h=x.bBox.x+a,y=x.bBox.x2+a,p=x.bBox.y+c,k=x.bBox.y2+c,q=f.dataset.groupManager.graphics,n=e.config.canvasLeft,m=e.config.canvasRight,r=
e.config.canvasTop;e=e.config.canvasBottom;h<n&&(a+=n-h);y>m&&(a-=y-m);p<r&&(c+=r-p);k>e&&(c-=k-e);if(a||c)q.waitElement&&q.waitElement.hide(),this.data("fire_click_event",0),yc.call(this);g.allowDrag&&(x.draged=!0,x.lastDx=a,x.lastDy=c,e=f._transformObj={transform:"t"+(x.origX+a)+","+(x.origY+c)},d&&d.attr(e),b&&b.attr(e),l&&l.attr({x:g._xPos+a,y:g._yPos+c}))},removeData:function(a,c){var d=this.components,b=this.groupManager,e=d.data,f=d.removeDataArr||(d.removeDataArr=[]);a=a||0;0>a&&(a=0);d.removeDataArr=
f.concat(e.splice(a,c||1));b._clearConnectors()},_dragUp:function(a){var c=this.data("drag-options"),d=c.dataset,b=d.chart,e=d.components.data,f=c.dataObj,g=c.dataset.groupManager,l=this.data("fire_click_event"),c=f.config,x=b.config.canvasTop,h=b.config.canvasLeft,y=f.config.dragStart||{},p=d.yAxis,k=f.graphics.cloneText,q=d.groupManager.graphics,n=b.components.xAxis[0],m={},r,u,v,w,ha,z=f.graphics.cloneGraphic,A=f.graphics.cloneImage,D=function(a){var b;if(a)for(b in a)if(ha=a[b])v=ha.config.datasetIndex,
r=ha.config.fromPointObj,u=ha.config.toPointObj,(w=g.connectorSet[v])&&w&&w.connectors.drawConnector(ha,r,u)};q.waitElement&&q.waitElement.hide();yc.call(this);this.data("mousedown",0);l&&ka.call(this,b,a);if(y.draged){y.origX+=y.lastDx;y.origY+=y.lastDy;f.config._xPos=y.xPos+y.lastDx;f.config._yPos=y.yPos+y.lastDy;m.x=n.getValue(f.config._xPos-h);m.y=p.getValue(f.config._yPos-x);m.update=!0;l=0;for(h=e.length;l<h&&(x=e[l],f.config.id!==x.config.id);l++);d.updatePointConfig(m,l);e=this.data("eventArgs");
e.x=m.x;e.y=m.y;d._drawNode(l);d.drawTracker(l,l+1);d=f.config.startConnectors;f=f.config.endConnectors;D(d);D(f);a=wc(b.linkedItems.container,a);a.sourceEvent="dataplotdragend";t.raiseEvent("chartupdated",W(a,e),b.chartInstance);y.draged=!1}k&&k.hide();z&&z.hide();A&&A.hide();delete c.dragStart},getDataLimits:function(){var a=this.config;return{max:a.yMax,min:a.yMin,xMax:a.xMax,xMin:a.xMin}}},"Area"]);FusionCharts.register("component",["dataset","Connector",{type:"connector",configure:function(){var a=
this.chart.jsonData.chart,c=this.config,d=this.components.data||(this.components.data=[]),b=this.JSONData,e=b.connector,f=e&&e.length,g=t.parseUnsafeString;c.connectorsTooltext=H(g(q(b.connectortooltext,a.connectortooltext)));c.stdThickness=h(b.stdthickness,1);c.conColor=Ha(q(b.color,"FF5904"));c.conAlpha=q(b.alpha,za);c.conDashGap=h(b.dashgap,5);c.conDashLen=h(b.dashlen,5);c.conDashed=!!h(b.dashed,0);c.arrowAtStart=!!h(b.arrowatstart,1);c.arrowAtEnd=!!h(b.arrowatend,1);c.conStrength=h(b.strength,
1);c.toolTipSepChar=q(a.tooltipsepchar," - ");c.showTooltip=h(a.showtooltip,1);c.viewMode=h(a.viewmode,1);a=d.length;a>f&&d.splice(f,a-f);c._refreshData=!0;for(d=0;d<f;d+=1)this._setConfigure(d,e[d]);c._refreshData=!0},_setConfigure:function(a,c){var d=this.components.data,d=d[a]||(d[a]=d[a]={}),b=this.config,e=this.chart,f=Y(q(c.label,c.name)),g=q(c.alpha,b.conAlpha),l=e.linkedItems.smartLabel,x="$fromLabel"+b.toolTipSepChar+"$toLabel",g={FCcolor:{color:Ha(q(c.color,b.conColor)),alpha:g}},k=H(Y(q(c.tooltext,
b.connectorsTooltext)));l.useEllipsesOnOverflow(e.config.useEllipsesWhenOverflow);e=l.getOriSize(f);d.config=d.config||(d.config={});!d.graphics&&(d.graphics={});x=b.showTooltip?q(k,f?"$label":x):!1;f=d.config={_options:c,id:q(c.id,a).toString(),from:q(c.from,z),to:q(c.to,z),label:f,toolText:x,customToolText:k,color:g,index:a,dashStyle:h(c.dashed,b.conDashed)?fb(h(c.dashlen,b.conDashLen),h(c.dashgap,b.conDashGap),b.stdThickness):"none",dashed:c.dashed,dashlen:c.dashlen,dashgap:c.dashgap,arrowAtStart:!!h(c.arrowatstart,
b.arrowAtStart),arrowAtEnd:!!h(c.arrowatend,b.arrowAtEnd),conStrength:h(c.strength,b.conStrength),link:c.link,stdThickness:b.stdThickness,labelWidth:e.widht,labelHeight:e.height};f.datasetIndex=this.index;f.add=c.add;f.update=c.update;b._refreshData&&delete d.removed},init:function(a){this.yAxis=this.chart.components.yAxis[0];this.components={};this.graphics={};this.JSONData=a;this.configure()},draw:function(){var a=this.chart,c=this.config,d=a.graphics,b=this.groupManager.nodes,e=this.components.data,
f,g,l=this.chart.components.paper,x=a.getJobList();g=d.datasetGroup;f=a.config.dataLabelStyle;var a=e.length,d=this.components.removeDataArr||[],h=d.length,y;y||(y=this.graphics.connectorGroup=this.graphics.connectorGroup||l.group("connectorGroup").insertBefore(g));c.showTooltip&&y.trackTooltip(!0);c.cleared=!1;y.css(f);for(l=0;l<a;l++)c=e[l],y=c.config,c.graphics||(c.graphics={}),f=y.from,g=y.to,f=b[f],g=b[g],f&&g&&!0!==y.deleted&&this.drawConnector(c,f,g,l);!0!==this.drawn&&x.labelDrawID.push($a.addJob(this.drawLabel,
this,[],t.priorityList.label));this.drawn=!0;for(l=0;l<h;l++)this._removeDataVisuals(d.shift())},mouseDown:function(){var a=this,c=a.data(Z),d=a.data("dataset"),b=d.groupManager,e=d.chart,f=d.config,g=c||{};a._longpressactive=clearTimeout(a._longpressactive);a.data("fire_click_event",1);a._longpressactive=setTimeout(function(){a.data("fire_click_event",0);a.data("viewMode")||b.showConnectorUpdateUI(e,{fromid:{val:g.from,innerHTML:"<option>"+g.from+"</option>",disabled:!0},toid:{val:g.to,innerHTML:"<option>"+
g.to+"</option>",disabled:!0},datasetIndex:d.index,index:c.index,arratstart:{val:!!h(g.arrowatstart,1)},arratend:{val:!!h(g.arrowatend,1)},dashed:{val:h(g.dashed)},dashgap:{val:g.dashgap},dashlen:{val:g.dashlen},label:{val:g.label},tooltext:{val:g.tooltext},id:{val:f.id,disabled:!0},strength:{val:g.conStrength},alpha:{val:g.alpha},color:{val:g.color.FCcolor.color}},!0)},1E3)},mousemove:function(){this.data("fire_click_event",0);yc.call(this)},mouseup:function(a){var c=this.data("dataset").chart;yc.call(this);
ka.call(this,c,a,"ConnectorClick")},hoverIn:function(a){var c=this.data("dataset").chart;ka.call(this,c,a,"ConnectorRollover")},hoverOut:function(a){var c=this.data("dataset").chart;ka.call(this,c,a,"ConnectorRollout")},drawConnector:function(a,c,d){if(!a.removed){var b=this.chart,e,f,g,l,x=b.components.paper,h=b.components.numberFormatter,y=a.graphics,p=b.get("config","animationObj"),b=this.graphics.connectorGroup,k=p.animObj,n=p.dummyObj,m=p.animType,p=p.duration,r=a.config;f=r.toolText;var t,u,
v=r.eventArgs||(r.eventArgs={}),w=this.config,ha=this.components.pool||{};r.fromPointObj=c;r.toPointObj=d;t=c.config;u=d.config;r.fromX=e=t._xPos;r.fromY=g=t._yPos;r.toX=f=u._xPos;r.toY=l=u._yPos;r._labelX=(e+f)/2;r._labelY=(g+l)/2;r.strokeWidth=e=r.conStrength*r.stdThickness;g=r.color;r.textBgColor=g&&g.FCcolor&&g.FCcolor.color;v.label=r.label;v.arrowAtStart=r.arrowAtStart;v.arrowAtEnd=r.arrowAtEnd;v.link=r.link;v.id=r.id;v.fromNodeId=t.id;v.toNodeId=u.id;f=r.toolText=ya(r.toolText,[3,83,84,85,86,
87,88,89,90,91,92],{label:r.label,fromXValue:h.dataLabels(c.config.x),fromYValue:h.dataLabels(c.config.y),fromXDataValue:c.config.x,fromYDataValue:c.config.y,fromLabel:q(c.config.displayValue,c.config.id),toXValue:h.dataLabels(d.config.x),toYValue:h.dataLabels(d.config.y),toXDataValue:d.config.x,toYDataValue:d.config.y,toLabel:q(d.config.displayValue,d.config.id)});t=c.config;u=d.config;c=t.startConnectors;d=u.endConnectors;h=a.config.id+"-"+t.id+"-"+u.id;c[h]=a;d[h]=a;c=this._getlinePath(a);d=y.graphic;
y.graphic||(ha.graphic&&ha.graphic.path&&ha.graphic.path.length?d=y.graphic=ha.graphic.path.shift():(d=y.graphic=x.path(b).mousedown(this.mouseDown).mousemove(this.mousemove).mouseup(this.mouseup).hover(this.hoverIn,this.hoverOut),d.attr({path:c})));d.show().animateWith(n,k,{path:c},p,m);d.attr({"stroke-width":e,ishot:!0,"stroke-dasharray":r.dashStyle,cursor:r.link?"pointer":G,stroke:ga(g)}).data("eventArgs",v).data("viewMode",w.viewMode).data(Z,r).data("dataset",this).tooltip(f);this.drawn&&this.drawLabel(a)}},
drawLabel:function(a){var c=this,d=c.config,b=c.chart,e=b.components.paper,f=b.get("config","animationObj"),g=c.graphics.connectorGroup,l=f.animObj,x=f.dummyObj,h=f.animType,y=f.duration,p,k,n,m,r=b.config.dataLabelStyle,t,u,v,w,ha,z,b=c.components.data,A=c.components.pool||{},f=b.length,D=function(a){p=a.config;n=p.toolText;u=a.graphics;k=p.label;w=p._labelX;ha=p._labelY;z=p.textBgColor;k?(t=u.text=u.text||A.element&&A.element.text&&A.element.text.shift(),m={text:k,fill:r.color,ishot:!0,direction:G,
cursor:p.link?"pointer":G,"text-bound":[q(r.backgroundColor,z),q(r.borderColor,z),1,"2"]},u.text?(t.show().animateWith(x,l,{x:w,y:ha},y,h),t.attr(m)):(m.x=w,m.y=ha,u.text=t=e.text(m,g).mousedown(c.mouseDown).mousemove(c.mousemove).mouseup(c.mouseup).hover(c.hoverIn,c.hoverOut)),t.data("eventArgs",p.eventArgs).data("viewMode",d.viewMode).data(Z,p).data("dataset",c).tooltip(n)):u.text&&u.text.hide()};if(a)D(a);else for(v=0;v<f;v++)a=b[v],D(a)},getJSONData:function(){var a=this.components.data,c=a.length,
d=[],b,e;for(e=0;e<c;e++)b=a[e],b.removed||(b.config._options&&(delete b.config._options.update,delete b.config._options.add),d.push(b.config._options));return d},_updateFromPos:function(a,c){this.fromX=a;this.fromY=c;this.graphic&&this.graphic.animate({path:this.getlinePath()});this.text&&this.text.animate({x:(this.fromX+this.toX)/2,y:(this.fromY+this.toY)/2})},_updateToPos:function(a,c){this.toX=a;this.toY=c;this.graphic&&this.graphic.animate({path:this.getlinePath()});this.text&&this.text.animate({x:(this.fromX+
this.toX)/2,y:(this.fromY+this.toY)/2})},_getlinePath:function(a){a=a.config;var c=a.fromPointObj,d=a.toPointObj,b=a.fromX,e=a.fromY,f=a.toX,g=a.toY,l=["M",b,e];a.arrowAtStart&&(c=c.config,l=c.shapeType===sc?l.concat(this._drawArrow(b,e,f,g,c.shapeArg.width,c.shapeArg.height)):l.concat(this._drawArrow(b,e,f,g,c.shapeArg.radius)));a.arrowAtEnd&&(c=d.config,l=c.shapeType===sc?l.concat(this._drawArrow(f,g,b,e,c.shapeArg.width,c.shapeArg.height)):l.concat(this._drawArrow(f,g,b,e,c.shapeArg.radius)));
l.push("L",f,g);return l},_drawArrow:function(a,c,d,b,e,f){var g=Ka.atan((c-b)/(a-d)),l=[];0>g&&(g=2*Ka.PI+g);if(b>c){if(d>=a&&g>Ka.PI||d<a&&g>Ka.PI)g-=Ka.PI}else if(d>=a&&g<Ka.PI&&0!==g||d<a&&g<Ka.PI)g+=Ka.PI;"undefined"==typeof f?(d=a+e*vb(g),e=c+e*Ub(g)):(e=Ua(e)/2,f=Ua(f)/2,d=a+(e=a<d?e:-e),e=c+e*Ka.tan(g),Ua(c-e)>Ua(f)&&(e=c+(f=c<b?f:-f),d=a+f/Ka.tan(g)));l.push("L",d,e,d+10*vb(g+.79),e+10*Ub(g+.79),"M",d+10*vb(g-.79),e+10*Ub(g-.79),"L",d,e);return l},removeData:function(a,c){var d=this.components,
b=d.data;0>a&&(a=0);d.removeDataArr=b.splice(a,c)}},"Dragnode"]);FusionCharts.register("component",["dataset","DragableLabels",{configure:function(){var a=(this.JSONData||[]).length,c,d=this.components.data;this.config.viewMode=h(this.chart.jsonData.chart.viewmode,0);d||(d=this.components.data=[]);c=d.length;c>a&&d.splice(a,c-a);for(c=0;c<a;c++)this._setConfigure(c)},_setConfigure:function(a,c){var d=this.JSONData,d=c?c:d[a],b=this.components.data,e,f=this.chart.config.style.inCanvasStyle,g=f.fontSize;
e=b[a];!e&&(e=b[a]={});!e.graphics&&(e.graphics={});b=e.config=e.config||(e.config={});e=Y(q(d.text,d.label));b._options=d;b.add=d.add;e&&(b.text=e,b.x=d.x||0,b.y=d.y||0,b.labelFontSize=g=h(d.fontsize,g),b.labelColor=cc(q(d.color,f.color)),b.alpha=h(d.alpha,100)/100,b.allowdrag=h(d.allowdrag,1),b.padding=h(d.padding,5),b.labelCSS=d.fontsize?{fontSize:g+"px"}:void 0,b.labelBGColor=q(d.bgcolor&&d.bgcolor.replace(bc,mb)),b.labelBDColor=q(d.bordercolor&&d.bordercolor.replace(bc,mb)),b.link=d.link,b.allowDrag=
h(d.allowdrag,1),b.borderThickness=d.borderthickness,b.dashLen=d.dashlen,b.dashGap=d.dashgap,b.dashed=d.dashed,b.radius=d.radius)},init:function(a){this.yAxis=this.chart.components.yAxis[0];this.components={};this.graphics={};this.JSONData=a;this.configure()},getJSONData:function(){var a=this.components.data,c=a.length,d=[],b,e;for(e=0;e<c;e++)b=a[e],b.removed||b.config._options&&d.push(b.config._options);return d},draw:function(){var a=this.components.data,c=this.chart,d=c.getJobList(),b=c.get(Z,
xa),e=b.duration,f=b.animType,g=b.dummyObj,b=b.animObj,l=c.components.paper,x=c.components.yAxis[0],k=c.components.xAxis[0],y=c.linkedItems.smartLabel,p=c.graphics.datalabelsGroup,q=c.graphics.trackerGroup,n=c.config.dataLabelStyle,m,r,u,v,w,ma,ha,z,A,D,J,C,F,L,I,B=a.length,E=this.components.removeDataArr||[],H=E.length,U=this.components.pool||{},K,Q,p=this.graphics.dataLabelContainer=this.graphics.dataLabelContainer||l.group("datalabels",p);this.graphics.trackerContainer=this.graphics.trackerContainer||
l.group("tracker",q);p.css({"font-weight":n.fontWeight,"font-style":n.fontStyle,"font-size":n.fontSize,"font-family":n.fontFamily});for(K=0;K<B;K++)J=a[K],J.removed||(D=J.config,!J.graphics&&(J.graphics={}),D.index=K,q=k.getPixel(D.x),v=x.getPixel(D.y),ma=D.text,ha=D.labelBGColor,z=D.labelBDColor,A=D.padding,C=D.allowDrag,F=D.labelFontSize,w=D.labelColor,L=D.radius,u=D.dashed,m=D.dashLen,r=D.dashGap,I=D.borderThickness,Q=D.labelCSS,m={x:q,y:v,text:ma,align:"center",fill:w,"text-bound":[ha||G,z||G,
h(I,1),A,h(L,0),h(u,0)?fb(h(m,5),h(r,4),h(I,1)):"none"],visibility:ca},ha={backgroundColor:ha,borderColor:z,borderPadding:A,fontSize:F+"px",fontStyle:n.fontStyle,fontWeight:n.fontWeight,borderRadius:0,borderDash:"none",fontFamily:n.fontFamily},Ic(ha),y.useEllipsesOnOverflow(c.config.useEllipsesWhenOverflow),y.setStyle(ha),C={link:D.link,text:ma,x:q,y:v,allowdrag:C,sourceType:"labelnode"},(ha=J.graphics.element=J.graphics.element||U.element&&U.element.text&&U.element.text.shift())?(D.labelCSSApplied&&
!Q&&ha.removeCSS(),ha.show().animateWith(g,b,m,e,f).css(Q)):ha=J.graphics.element=l.text(m,Q,p),D.labelCSSApplied=Q,ha.data("eventArgs",C),ma=y.getOriSize(ma),D.width=ma.width,D.height=ma.height,D.xPos=q,D.yPos=v);d.trackerDrawID.push($a.addJob(this.drawTracker,this,[],t.priorityList.tracker));for(K=0;K<H;K++)this._removeDataVisuals(E.shift())},removeData:function(a,c){var d=this.components;d.removeDataArr=d.data.splice(a,c)},drawTracker:function(){var a=this,c=a.components.data,d=a.chart,b=d.components.paper,
e=a.groupManager,f=a.config,g=a.graphics.trackerContainer,l=c.length,x,h,y,p=function(a){var b=this;b.data("fire_click_event",1);clearTimeout(b._longpressactive);b._longpressactive=setTimeout(function(){b.data("fire_click_event",0);b.data("viewMode")||e.showLabelDeleteUI(a)},1E3)},k=function(){this.data("fire_click_event")&&(this.data("fire_click_event",0),e.clearLongPress.call(this))},q=function(a){var b=this.data("fire_click_event");e.clearLongPress.call(this);b&&ka.call(this,d,a,"LabelClick")},
n=function(a){ka.call(this,d,a,"LabelRollover")},m=function(a){ka.call(this,d,a,"LabelRollout")},r,t,u,v,w,z,A,D=function(b,c,e,f,g){a._labelDragMove.call(this,b,c,e,f,d,g)},J=function(b){a._labelDragStart.call(this,b,d)},C=function(b){a._labelDragUp.call(this,b)},F;for(F=0;F<l;F++)x=c[F],x.removed||(h=x.config,y=h.padding||0,z=h.width,A=h.height,v=h.xPos-z/2,w=h.yPos-A/2,r=h.allowDrag,t=h.text,u=x.graphics.trackerElement,y={x:v-y,y:w-y,width:z+2*y,height:A+2*y,cursor:h.allowDrag?"move":G,fill:Ma,
stroke:Ma,ishot:!0},h={link:h.link,text:t,x:v,y:w,allowdrag:r,sourceType:"labelnode"},u||(u=x.graphics.trackerElement=b.rect(g).mousedown(p).mousemove(k).mouseup(q).data("viewMode",f.viewMode).data("eventArgs",h).hover(n,m).drag(D,J,C)),u.attr(y),u.data("drag-options",{index:F,dataset:a}))},_labelDragStart:function(){var a=this,c=a.getBBox(),d=a.data("drag-options"),b=d.dataset,e=b.groupManager,f=b.components.data[d.index],b=f.graphics.element,g=f.dragStart=f.dragStart||(f.dragStart={});d.ox=b.attr("x");
d.oy=b.attr("y");d.bBox=c;g.xPos=f.config.xPos;g.yPos=f.config.yPos;g.bBox=c;a.data("fire_click_event",1);a.data("fire_dragend",0);clearTimeout(a._longpressactive);a._longpressactive=setTimeout(function(){a.data("fire_click_event",0);a.data("viewMode")||e.showLabelDeleteUI(f)},1E3)},_labelDragMove:function(a,c,d,b,e,f){b=e.config;d=b.canvasLeft;var g=b.canvasRight,l=b.canvasBottom;b=b.canvasTop;var x=this.data("drag-options"),h=x.dataset,y=h.groupManager,h=h.components.data[x.index],p=h.graphics.element,
k=h.dragStart,q=k.bBox,n=k.bBox.x+a,m=k.bBox.x2+a,r=k.bBox.y+c,t=k.bBox.y2+c,u=e.components.yAxis[0],v=e.components.xAxis[0];n<d&&(a+=d-n);m>g&&(a-=m-g);r<b&&(c+=b-r);t>l&&(c-=t-l);k.draged=!0;this.attr({x:q.x+a,y:q.y+c});g=x.ox+a;l=x.oy+c;p.attr({x:x.ox+a,y:x.oy+c});h.config.x=v.getValue(g-d);h.config.y=u.getValue(l-b);this.data("fire_dragend")||(ka.call(this,e,f,"LabelDragStart"),this.data("fire_dragend",1));this.data("fire_click_event")&&(this.data("fire_click_event",0),y.clearLongPress.call(this))},
_labelDragUp:function(a){var c=this.data("drag-options"),d=c.dataset,b=d.chart,e=d.groupManager,f=d.components.data[c.index].dragStart,c=this.data("eventArgs"),d=d.yAxis;c.x=b.components.xAxis[0].getValue(this.attr("x"));c.y=d.getValue(this.attr("y"));f.draged=!1;this.data("fire_dragend")&&(d=wc(b.linkedItems.container,a),d.sourceEvent="labeldragend",t.raiseEvent("chartupdated",W(d,c),b.chartInstance),ka.call(this,b,a,"labeldragend"));e.clearLongPress.call(this)}},"Dragnode"]);N("dragarea",{friendlyName:"Dragable Area Chart",
standaloneInit:!0,creditLabel:va,defaultDatasetType:"dragarea",decimals:2,applicableDSList:{dragarea:!0}},N.dragbase,{anchoralpha:za},N.areabase);N("dragline",{friendlyName:"Dragable Line Chart",standaloneInit:!0,creditLabel:va,decimals:2,defaultDatasetType:"dragline",applicableDSList:{dragline:!0},defaultPlotShadow:1},N.dragbase,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},N.areabase);N("dragcolumn2d",{friendlyName:"Dragable Column Chart",standaloneInit:!0,creditLabel:va,decimals:2,
defaultDatasetType:"DragColumn",applicableDSList:{dragcolumn:!0}},N.dragbase);FusionCharts.register("component",["dataset","DragColumn",{configure:function(){var a,c=this.chart.jsonData.chart,d,b;b=this.JSONData;var e=this.JSONData.data||[],f,g;this.__base__.configure.call(this);a=this.config;d=this.components.data;a.allowDrag=h(b.allowdrag,1);a.allowNegDrag=h(b.allownegativedrag,1);a.allowAxisChange=h(c.allowaxischange,1);a.snapToDivOnly=h(c.snaptodivonly,0);a.snapToDiv=a.snapToDivOnly?1:h(c.snaptodiv,
1);a.doNotSnap=h(c.donotsnap,0);a.snapToDivRelaxation=h(c.snaptodivrelaxation,10);a.doNotSnap&&(a.snapToDiv=a.snapToDivOnly=0);f=d.length;for(c=0;c<f;c++)g=e[c]||{},b=d[c].config,b.allowDrag=h(g.allowdrag,a.allowDrag),b.allowNegDrag=h(g.allownegativedrag,a.allowNegDrag)},drawTracker:function(){var a=this.chart,c,d=a.components.paper,b,e,f,g,l,x=Vb?40:10,h,y=this.components.pool||{},p=this.graphics.trackerContainer,k,q,n,m;FusionCharts.get("component",["dataset","column"]).prototype.drawTracker.call(this);
c=this.components.data;m=c.length;for(n=0;n<m;n++)b=c[n],g=b.config,l=b._yPos+(0>g.setValue&&b._height)||0,k=g.setValue,q=g.allowDrag,e=b._width,f=b._xPos,g=b.graphics.element,h=b.graphics.dragTracker||y.dragTracker&&y.dragTracker.shift(),null!==k&&q&&g?(k=["M",f,l,"L",f+e,l,"Z"],k={path:k,stroke:Ma,"stroke-width":x,ishot:!0,cursor:ub&&"ns-resize"||"n-resize"},h||(h=b.graphics.dragTracker=d.path(p),h.drag(this.dragMove,this.dragStart,this.dragUp)),h.show().attr(k).data("drag-options",{items:g,yPos:l,
chart:a,name:this.JSONData.seriesname,datasetIndex:this.index,pointIndex:n,dataObj:b}),b.graphics.dragTracker=h):h&&h.hide()},dragStart:function(){var a=this.data("drag-options"),c=a.chart,d=c.config,b=c.components.yAxis[0],c=b.config.axisRange.max,b=b.config.axisRange.min,e=this.getBBox();a.barH=a.items.getBBox().height;a.isAllPositive=0<c&&0<b;a.isAllPositiveZero=0<c&&0<=b;a.isAllNegative=0>c&&0>b;a.isAllNegativeZero=0>=c&&0>b;a.isPositiveNegative=0<c&&0>b;a.boundaryTop=d.canvasTop;a.boundaryBottom=
d.canvasTop+d.canvasHeight;a.bBoxY=e.y;a.bBoxY2=e.y2||e.y+e.height;a.startValue=a.dataObj.config.setValue;a.origX=a.lastX||(a.lastX=0);a.origY=a.lastY||(a.lastY=0);a.draged=!1},dragMove:function(a,c){var d=this.data("drag-options"),b=d.items,e=d.dataObj,f=d.chart,g=e.config,l=f.config,x=f.components,h=x.canvas.config,y=x.yAxis[0],p=x.dataset[d.datasetIndex],x=x.numberFormatter,k=y.getPixel(y.getAxisBase()),n={},m=d.bBoxY2+c,r=d.bBoxY+c,t=l.canvasBottom,u=e.config.allowNegDrag?t:k,l=l.canvasTop,v=
parseFloat(p.config.plotBorderThickness)||0,h=h.showCanvasBorder,w=d.isAllNegativeZero,z=d.isPositiveNegative,A=e._xPos,C=e._width,D=e.graphics.hotElement,J=e.graphics.element;r<d.boundaryTop&&(c=d.boundaryTop-d.bBoxY);m>u&&(c=u-d.bBoxY2);d.draged||(m={dataIndex:d.pointIndex+1,datasetIndex:d.datasetIndex,startValue:d.startValue,datasetName:d.name},E.raiseEvent("dataplotDragStart",m,f.chartInstance));m=d.yPos+c;m<=k?(n.y=m,n.height=k-m):(n.y=k,n.height=m-k);h&&!z&&(w?n.y-=n.y-(l-v/2):n.height=t-n.y+
v);this.attr({path:["M",A,m,"L",A+C,m]});b.animate(n);(D||J).data("draged",!0);d.shapeAttr=n;b=d.value=qa(y.getValue(m-l));g.setValue=b;y=y.getPixel(y.getAxisBase());e._yPos=da(m,y);e._height=n.height;y=x.dataLabels(b);g.toolTipValue=y;g.displayValue=q(g.setDisplayValue,y);d.draged=!0;d.lastX=a;d.lastY=c;e.draged=!0;e.lastX=a;e.lastY=c;f=f.config.animationObj;e=f.duration;f.duration=0;p.drawLabel(d.pointIndex,d.pointIndex+1);f.duration=e},dragUp:function(){var a=this.data("drag-options"),c=a.chart,
d=c.components,b=d.numberFormatter,e=c.config,d=d.dataset[a.datasetIndex],f=d.config,g=!f.doNotSnap,l=a.dataObj,x=d.yAxis,h,y,p,k=e.canvasTop,q=l.config.setTooltext,n=l.config.origToolText,m=f.snapToDivRelaxation,r=f.snapToDiv,u=l.graphics.hotElement,v=l.graphics.element,w=f.snapToDivOnly,z=l.config,A=z.setValue,f=l.trackerConfig,e=e.showtooltip;a.draged&&(y=h=a.yPos+a.lastY,g&&r&&(y=Ua(x.getValue(h+m-k)-A),p=l.config.setValue=x.getClosestDiv(A,w?null:y),y=x.getPixel(p),l._yPos=y,y-h&&d.dragMove.call(this,
0,y-a.yPos)),b=z.toolTipValue=b.dataLabels(p),l={dataIndex:a.pointIndex+1,datasetIndex:a.datasetIndex+1,startValue:a.startValue,endValue:l.config.setValue,datasetName:a.name},x=[c.chartInstance.id,l.dataIndex,l.datasetIndex,l.datsetName,l.startValue,l.endValue],E.raiseEvent("dataplotDragEnd",l,c.chartInstance),t.raiseEvent("chartupdated",l,c.chartInstance,x),a.yPos=y,a.lastX+=a.origX,a.lastY+=a.origY,(u||v).data("draged",!1),q=f.eventArgs.toolText=q+(n?"":b),e&&u&&u.attr(a.shapeAttr).tooltip(q),d.setMaxMin(),
c._setDataLimits())},getJSONData:function(){var a=this.JSONData.data,c=this.components.data,d=[],b={},e,f,g,l,x;x=0;for(l=a.length;x<l;x++){f=a[x];e=c[x];b={};for(g in f)b[g]="value"===g?e.config.setValue:f[g];d.push(b)}return{data:d}}},"Column"]);FusionCharts.register("component",["datasetGroup","DragColumn",{getJSONData:function(){var a=this.chart,c=a.components.dataset,a=a.jsonData&&a.jsonData.dataset,d=[],b,e,f,g=c.length;for(f=0;f<g;f++)b=c[f],e=W({},a[f]),delete e.data,b=b.getJSONData(),d.push(W(e,
b));return d}},C]);FusionCharts.register("component",["dataset","DragArea",{configure:function(){var a,c=this.chart.jsonData.chart;a=FusionCharts.get("component",["dataset","area"]);var d,b,e;b=this.JSONData;var f=b.data||[],g;a.prototype.configure.call(this);a=this.config;d=this.components.data;a.allowDrag=h(b.allowdrag,1);a.allowNegDrag=h(b.allownegativedrag,1);a.allowAxisChange=h(c.allowaxischange,1);a.snapToDivOnly=h(c.snaptodivonly,0);a.doNotSnap=h(c.donotsnap,0);a.snapToDiv=h(c.snaptodiv,1);
a.snapToDivRelaxation=h(c.snaptodivrelaxation,10);a.doNotSnap&&(a.snapToDiv=a.snapToDivOnly=0);g=d.length;for(c=0;c<g;c++)e=f[c]||{},b=d[c].config,b.allowDrag=h(e.allowdrag,a.allowDrag),b.allowNegDrag=h(e.allownegativedrag,a.allowNegDrag)},drawTracker:function(){var a=this.chart,c,d,b=this.dragStart,e=FusionCharts.get("component",["dataset","DragArea"]).prototype.dragUp,f=this.dragMove,g,l,x,h,y;FusionCharts.get("component",["dataset","area"]).prototype.drawTracker.call(this);g=this.components.data;
h=g.length;for(x=0;x<h;x++)c=g[x],l=c.config,y=c._yPos,(d=c.graphics.hotElement)&&l.allowDrag?(l.dragEventListenerAttached||(d.drag(f,b,e),l.dragEventListenerAttached=!0),d.attr({cursor:ub&&"ns-resize"||"n-resize",ishot:!0}).data("drag-options",{items:g,yPos:y,chart:a,name:this.JSONData.seriesname,datasetIndex:this.index,pointIndex:x,dataObj:c})):(d&&d.undrag(f,b,e),l.dragEventListenerAttached=!1)},dragStart:function(){var a=this.data("drag-options"),c=a.chart.config;a._origY=a._lastY||(a._lastY=
0);a.boundaryTop=c.canvasTop;a.boundaryBottom=c.canvasTop+c.canvasHeight;a.startValue=a.dataObj.config.setValue;a.origY=this.attr("cy");a.origX=this.attr("cx");a.draged=!1},dragMove:function(a,c){var d=this.data("drag-options"),b=d.items,e=d.dataObj,f=d.chart,g=f.config.animationObj,l=f.components,x=l.dataset[d.datasetIndex],h=x.graphics.lineElement,y=l.yAxis[0],p=e._xPos,k=e.config,n=g.duration,l=l.numberFormatter,m=f.config.canvasTop,r=b[d.pointIndex].graphics,t=y.getPixel(y.getAxisBase()),u=e.config.allowNegDrag?
d.boundaryBottom:t,t=r.image,v=x.graphics.anchorGroup,w=e.config.anchorProps,z=w.imageUrl,A=r.element,C,r=e.config.showValue,D;D=d.origY+c;d.draged||(C={dataIndex:d.pointIndex+1,datasetIndex:d.datasetIndex,startValue:d.startValue,datasetName:d.name},E.raiseEvent("dataplotDragStart",C,f.chartInstance));D<d.boundaryTop&&(c=d.boundaryTop-d.origY);D>u&&(c=u-d.origY);D=d.origY+c;this.attr({cy:D});Fa&&z?t=A:(u=A.data("setRolloverAttr"),(z=A.data("setRolloutAttr"))&&(z.polypath[2]=D),u&&(u.polypath[2]=D),
A&&A.attr({polypath:[w.symbol[1]||2,p,D,w.radius,90,0]}),A.data("setRolloverAttr",u),A.data("setRolloutAttr",z));e._yPos=D;t&&x.updateImage(e,f,v);e=k.setValue=y.getValue(D-m);e=l.dataLabels(e);k.toolTipValue=e;k.displayValue=q(k.setDisplayValue,e);g.duration=0;r&&x.drawLabel(d.pointIndex);g.duration=n;d.draged=!0;this.data("draged",!0);d.lastY=c;d=x.getLinePath(b,{});x.config.lastPath=d;h&&h.attr({path:d.getPathArr()})},updateImage:function(a){var c=this.chart,d=a.graphics,d=d.image||d.element,b=
a.config,e=b.anchorProps,f=b.hoverEffects,b=d&&d.data("imgRef"),g=function(a){var b=a.length,c=G,d;for(d=0;d<b;d+=1)c+=" "+a[d];return c},l=e.imageScale,x=c.components.paper,h=b.height*l*.01,y=b.width*l*.01,c=a._xPos;a=a._yPos;var p=f.imageHoverScale,k=b.width*p*.01,q=b.height*p*.01,n=e.radius=e.isAnchorRadius?e.radius:da(y,h)/2,m=e.imagePadding,r=n-m-.5*e.borderThickness,m=f.radius-m-.5*f.anchorBorderThickness,n=e.symbol[1],e=x.polypath(n||2,c,a,0<r?r:0,e.startAngle,0).attr({visibility:pa}),r=g(e.attrs.path),
l={x:c-b.width*l*.005,y:a-b.height*l*.005,width:y,height:h,alpha:100};Fa||(l["clip-path"]=r);e.remove();e=x.polypath(n||2,c,a,0<m?m:0,f.startAngle,f.dip);f=g(e.attrs.path);e.remove();b={x:c-b.width*p*.005,y:a-b.height*p*.005,width:k,height:q,alpha:100};Fa||(b["clip-path"]=f);d.attr(l);d.data("setRolloverAttr",b);d.data("setRolloutAttr",l)},dragUp:function(){var a=this.data("drag-options"),c=a.dataObj,d=a.chart,b=d.config,e=d.components.dataset[a.datasetIndex],f=e.config,g=b.showtooltip,l=c.config.setTooltext,
x=c.config.setLevelTooltext,h=!f.doNotSnap,y=b.canvasTop,b=e.yAxis,p=f.snapToDivRelaxation,k=f.snapToDivOnly,q=f.snapToDiv,n,m;m=c.config.setValue;var r,u=d.components.numberFormatter,f=c.graphics.hotElement;a.draged&&(n=r=a.yPos+a.lastY,h&&q&&(n=Ua(b.getValue(r+p-y)-m),n=m=c.config.setValue=b.getClosestDiv(m,k?null:n),n=b.getPixel(n),n-r&&e.dragMove.call(this,0,n-a.yPos)),b=c.config.toolTipValue=u.dataLabels(m),m={dataIndex:a.pointIndex+1,datasetIndex:a.datasetIndex+1,startValue:a.startValue,endValue:m,
datasetName:a.name},h=[d.chartInstance.id,m.dataIndex,m.datasetIndex,m.datsetName,m.startValue,m.endValue],E.raiseEvent("dataplotDragEnd",m,d.chartInstance),t.raiseEvent("chartupdated",m,d.chartInstance,h),a.yPos=n,c._yPos=n,l+=x?"":b,f&&f.attr({y:a.yPos}).tooltip(g?l:G),a._lastY=a.lastY+a._origY,a.lastY+=a.origY,this.data("draged",!1),e.setMaxMin(),d._setDataLimits())},getJSONData:function(){var a=this.JSONData.data,c=this.components.data,d=[],b={},e,f,g,l,x;x=0;for(l=a.length;x<l;x++){e=a[x];f=
c[x];b={};for(g in e)b[g]="value"===g?f.config.setValue:e[g];d.push(b)}return{data:d}}},"Area"]);FusionCharts.register("component",["datasetGroup","DragArea",{getJSONData:function(){var a=this.chart,c=a.components.dataset,a=a.jsonData&&a.jsonData.dataset,d=[],b,e,f,g=c.length;for(f=0;f<g;f++)b=c[f],e=W({},a[f]),delete e.data,b=b.getJSONData(),d.push(W(e,b));return d}},"area"]);FusionCharts.register("component",["dataset","DragLine",{configure:FusionCharts.get("component",["dataset","DragArea"]).prototype.configure,
drawTracker:FusionCharts.get("component",["dataset","DragArea"]).prototype.drawTracker,dragStart:function(){var a=this.data("drag-options"),c=a.chart.config;a._origY=a._lastY||(a._lastY=0);a.boundaryTop=c.canvasTop;a.boundaryBottom=c.canvasTop+c.canvasHeight;a.startValue=a.dataObj.config.setValue;a.origY=this.attr("cy");a.origX=this.attr("cx");a.latestY=a.origY;a.draged=!1},dragMove:function(a,c){var d=this.data("drag-options"),b=d.items,e=b[d.pointIndex],f=d.dataObj,g=f.config,l=d.chart,x=l.components,
h=x.dataset[d.datasetIndex],y=FusionCharts.get("component",["dataset","DragArea"]),p=l.config.animationObj,k=x.yAxis[0],n=f._xPos,m=p.duration,r=x.numberFormatter,t=l.config.canvasTop,u=e.graphics,e=k.getPixel(k.getAxisBase()),v=f.config.allowNegDrag?d.boundaryBottom:e,w=u.image,z=f.config.anchorProps,A=z.imageUrl,e=h.graphics.lineElement,x=f.config.showValue,C=b.length,D,u=u.element,J;J=d.origY+c;d.draged||(D={dataIndex:d.pointIndex+1,datasetIndex:d.datasetIndex,startValue:d.startValue,datasetName:d.name},
E.raiseEvent("dataplotDragStart",D,l.chartInstance));J<d.boundaryTop&&(c=d.boundaryTop-d.origY);J>v&&(c=v-d.origY);J=d.origY+c;this.attr({cy:J});Fa&&A?w=u:(v=u.data("setRolloverAttr"),(l=u.data("setRolloutAttr"))&&(l.polypath[2]=J),v&&(v.polypath[2]=J),u&&u.attr({polypath:[z.symbol[1]||2,n,J,z.radius,90,0]}),u.data("setRolloverAttr",v),u.data("setRolloutAttr",l));f._yPos=J;w&&y.prototype.updateImage.call(h,f);d.latestY=J;f._yPos=J;f=g.setValue=k.getValue(J-t);f=r.dataLabels(f);g.toolTipValue=f;g.displayValue=
q(g.setDisplayValue,f);for(g=0;g<C;g++)if(u=b[g].graphics,f=u.connector)k=b[g],y=k.config.connStartIndex,k=k.config.connEndIndex,y=h.getLinePath(b,{},{begin:y,end:k+1}),f.attr({path:y.getPathArr()});e&&(g=h.config,y=g.pathStartIndex,k=g.pathEndIndex,y=h.getLinePath(b,{},{begin:y,end:k}),e.attr({path:y.getPathArr()}));p.duration=0;x&&h.drawLabel(d.pointIndex);p.duration=m;d.draged=!0;this.data("draged",!0);d.lastY=c},getJSONData:function(){var a=this.JSONData.data,c=this.components.data,d=[],b={},
e,f,g,l,x;x=0;for(l=a.length;x<l;x++){e=a[x];g=c[x];b={};for(f in e)b[f]="value"===f?g.config.setValue:e[f];d.push(b)}return{data:d}}},v]);N("selectscatter",{isXY:!0,hasLegend:!0,applicableDSList:{selectScatter:!0},friendlyName:"Dragable Scatter Chart",standaloneInit:!0,creditLabel:va,defaultDatasetType:"selectScatter",defaultZeroPlaneHighlighted:!1,configure:N.dragbase.configure,_createToolBox:N.dragbase._createToolBox,_manageActionBarSpace:N.dragbase._manageActionBarSpace,drawActionBar:N.dragbase.drawActionBar,
getData:function(a){var c=this.getCollatedData(),d=[],b=c.dataset,e=b&&b.length||0,f=0,g=0,l;if(a)d=/^json$/ig.test(a)?c:/^csv$/ig.test(a)?this.getCSVString():E.core.transcodeData(c,"json",a);else for(;f<e;f+=1)if(c=b[f]){for((l=a=(c=b[f]&&b[f].data)&&c.length||0)&&(d[g]||(d[g]=[H(b[f].id,"null")]));l--;)d[g][l+1]=H(c[l].id,"null");a&&(g+=1)}return d},getCSVString:function(){for(var a=this.getData(),c=a.length;c--;)a[c]=a[c].join(",");return a.join("|")},getCollatedData:function(){for(var a=this.config._selectEleArr,
c=a&&a.length,d=W({},this.chartInstance.getChartData(E.dataFormats.JSON)),b=d.dataset,e,f,g,l,x,h,y,p,k,q=[];c--;)if(e=a[c])for(h=e.startX,y=e.endX,p=e.startY,k=e.endY,l=b.length;l--;)for(q[l]||(q[l]={data:[]}),x=(g=b[l].data)&&g.length;x--;)f=g[x],e=f.x,f=f.y,e>h&&e<y&&f<p&&f>k&&(q[l].data[x]=!0);for(l=b.length;l--;)for(x=(g=b[l].data)&&g.length;x--;)q[l]&&q[l].data[x]||g.splice(x,1);return this.updatedDataObj=d},createSelectionBox:function(a){var c=a.chart,d=c.components,b=d.paper,e=c.config,f=
d.yAxis&&d.yAxis[0],d=d.xAxis&&d.xAxis[0],g=a.selectionLeft,l=a.selectionTop,x=a.selectionWidth;a=a.selectionHeight;var h=g+x,y=l+a,p=15<x&&15<a,k={resizeEleRadius:15,canvasTop:e.canvasTop,canvasRight:e.canvasLeft+e.canvasWidth,canvasLeft:e.canvasLeft,canvasBottom:e.canvasTop+e.canvasHeight},q=c.graphics.trackerGroup,n=e._selectEleArr||(e._selectEleArr=[]);k.index=n.length;k.id="SELECT_"+k.index;k.selectBoxG=q=b.group("selection-box",q).toFront();k.selectBoxTracker=b.rect(g,l,x,a,q).attr({"stroke-width":1,
stroke:ga(e.selectBorderColor),ishot:!0,fill:e.selectFillColor}).css({cursor:"move"});k.selectBoxTracker.data(Z,{position:6,selectEleObj:k,xChange:!0,yChange:!0});k.topTracker=b.rect(g,l-6,x,12,q).attr({"stroke-width":0,ishot:!0,fill:Ma}).css("cursor",ub&&"ns-resize"||"n-resize");k.topTracker.data(Z,{position:1,selectEleObj:k,yChange:!0});k.rightTracker=b.rect(g+x-6,l,12,a,q).attr({"stroke-width":0,ishot:!0,fill:Ma}).css("cursor",ub&&"ew-resize"||"w-resize");k.rightTracker.data(Z,{position:2,selectEleObj:k,
xChange:!0});k.bottomTracker=b.rect(g,l+a-6,x,12,q).attr({"stroke-width":0,ishot:!0,fill:Ma}).css("cursor",ub&&"ns-resize"||"n-resize");k.bottomTracker.data(Z,{position:3,selectEleObj:k,yChange:!0});k.leftTracker=b.rect(g-6,l,12,a,q).attr({"stroke-width":0,ishot:!0,fill:Ma}).css("cursor",ub&&"ew-resize"||"e-resize");k.leftTracker.data(Z,{position:4,selectEleObj:k,xChange:!0});k.cornerInnerSymbol=b.symbol("resizeIcon",0,0,15,q).attr({transform:"t"+h+","+y,"stroke-width":1,visibility:p?Zb:pa,ishot:!0,
stroke:"#999999"});k.cornerOuterSymbol=b.symbol("resizeIcon",0,0,-12,q).attr({transform:"t"+h+","+y,strokeWidth:1,visibility:p?pa:Zb,ishot:!0,stroke:"#777777"});k.resizeTracker=b.circle(h,y,12,q).attr({"stroke-width":1,stroke:Ma,ishot:!0,fill:Ma}).css("cursor",ub&&"nwse-resize"||"nw-resize");k.resizeTracker.data(Z,{position:5,selectEleObj:k,yChange:!0,xChange:!0});k.closeButton=b.symbol("closeIcon",0,0,6,q).attr({transform:"t"+h+","+l,"stroke-width":2,stroke:e.selectionCancelButtonBorderColor,fill:e.selectionCancelButtonFillColor,
"stroke-linecap":ba,ishot:!0,"stroke-linejoin":ba}).css({cursor:"pointer",_cursor:"hand"}).click(function(){c.deleteSelection(this,c)});k.closeButton.data(Z,{index:k.index});k.chart=c;k.startX=d.getValue(g-e.canvasLeft);k.startY=f.getValue(l-e.canvasTop);k.endX=d.getValue(h-e.canvasLeft);k.endY=f.getValue(y-e.canvasTop);k.isVisible=!0;n.push(k);c.bindDragEvent(k)},_deleteAllSelection:function(){var a=this.config._selectEleArr,c,d,b,e;for(b in a)if(a.hasOwnProperty(b)){c=a[b];for(e in c)c.hasOwnProperty(e)&&
(d=c[e],d.remove&&d.remove(),delete c[e]);delete a[b]}},deleteSelection:function(a,c){var d=a.data(Z).index,b=c.components,e=c.config._selectEleArr,f=e[d],g,l;l=f.selectBoxTracker.getBBox();l={selectionLeft:l.x,selectionTop:l.y,selectionWidth:l.width,selectionHeight:l.height,startXValue:b.xAxis[0].getAxisPosition(l.x,1),startYValue:b.yAxis[0].getAxisPosition(l.y,1),endXValue:b.xAxis[0].getAxisPosition(l.x+l.width,1),endYValue:b.yAxis[0].getAxisPosition(l.y+l.height,1),data:c.getCollatedData(),id:f.id};
for(g in f)f.hasOwnProperty(g)&&(b=f[g],b.remove&&b.remove(),delete f[g]);delete e[d];E.raiseEvent("selectionRemoved",l,c.chartInstance)},bindDragEvent:function(a){for(var c in a)/Tracker/.test(c)&&a[c].drag(this.move,this.start,this.up)},start:function(){var a=this.data(Z).selectEleObj,c=a.topTracker,d=a.rightTracker,b=a.bottomTracker,e=a.leftTracker,f=a.resizeTracker,g=c.data(Z),l=d.data(Z),h=b.data(Z),k=e.data(Z),y=f.data(Z),p=a.selectBoxTracker.data(Z),q=a.selectBoxTracker.getBBox();g.ox=q.x;
g.oy=q.y;l.ox=q.x2;l.oy=q.y;h.ox=q.x;h.oy=q.y2;k.ox=q.x;k.oy=q.y;g.ox=q.x;g.oy=q.y;y.ox=q.x2;y.oy=q.y2;p.ox=q.x;p.oy=q.y;p.ow=q.width;p.oh=q.height;p.ox2=q.x2;p.oy2=q.y2;a.selectBoxG.toFront();c.hide();d.hide();b.hide();e.hide();f.hide();this.show()},move:function(a,c){var d=this.data(Z),b=d.selectEleObj,e=b.chart,f=e.config,g=e.components,l=b.topTracker,h=b.rightTracker,k=b.bottomTracker,y=b.leftTracker,p=b.resizeTracker,q=b.selectBoxTracker,n=b.canvasLeft,m=b.canvasRight,r=b.canvasTop,u=b.canvasBottom,
t=q.data(Z),v={},w,z;a=d.xChange?a:0;c=d.yChange?c:0;w=a+d.ox;z=c+d.oy;w=da(m-(d.ow||0),X(w,n));z=da(u-(d.oh||0),X(z,r));switch(d.position){case 1:v.y=da(t.oy2,z);v.height=Ua(t.oy2-z)||1;l.attr({y:z+-6});break;case 2:v.x=da(t.ox,w);v.width=Ua(t.ox-w)||1;h.attr({x:w+-6});break;case 3:v.y=da(t.oy,z);v.height=Ua(t.oy-z)||1;k.attr({y:z+-6});break;case 4:v.x=da(t.ox2,w);v.width=Ua(t.ox2-w)||1;y.attr({x:w+-6});break;case 5:v.x=da(t.ox,w);v.width=Ua(t.ox-w)||1;v.y=da(t.oy,z);v.height=Ua(t.oy-z)||1;p.attr({cx:w,
cy:z});break;default:v.x=w,v.y=z}this.data("dragStarted")||(d=q.getBBox(),f={selectionLeft:d.x,selectionTop:d.y,selectionWidth:d.width,selectionHeight:d.height,startXValue:g.xAxis[0].getValue(d.x-f.canvasLeft),startYValue:g.yAxis[0].getValue(d.y-f.canvasTop),endXValue:g.xAxis[0].getValue(d.x+d.width-f.canvasLeft),endYValue:g.yAxis[0].getValue(d.y+d.height-f.canvasTop),id:b.id},E.raiseEvent("BeforeSelectionUpdate",f,e.chartInstance),this.data("dragStarted",1));q.animate(v);b.isVisible&&(b.closeButton.hide(),
b.cornerInnerSymbol.hide(),b.cornerOuterSymbol.hide(),b.isVisible=!1)},up:function(){var a=this,c=a.data(Z).selectEleObj,d=c.chart,b=d.components,e=d.config,f=b.xAxis&&b.xAxis[0],g=b.yAxis&&b.yAxis[0],l=c.topTracker,h=c.rightTracker,k=c.bottomTracker,y=c.leftTracker,p=c.resizeTracker,q=c.selectBoxTracker,n,m;setTimeout(function(){n=q.getBBox();c.startX=f.getValue(n.x-e.canvasLeft);c.startY=g.getValue(n.y-e.canvasTop);c.endX=f.getValue(n.x2-e.canvasLeft);c.endY=g.getValue(n.y2-e.canvasTop);l.attr({x:n.x,
y:n.y+-6,width:n.width});h.attr({x:n.x2+-6,y:n.y,height:n.height});k.attr({x:n.x,y:n.y2+-6,width:n.width});y.attr({x:n.x+-6,y:n.y,height:n.height});p.attr({cx:n.x2,cy:n.y2});c.closeButton.transform("t"+n.x2+","+n.y);c.cornerInnerSymbol.transform("t"+n.x2+","+n.y2);c.cornerOuterSymbol.transform("t"+n.x2+","+n.y2);c.closeButton.show();15>n.width||15>n.height?(c.cornerInnerSymbol.hide(),c.cornerOuterSymbol.show()):(c.cornerInnerSymbol.show(),c.cornerOuterSymbol.hide());c.isVisible=!0;l.show();h.show();
k.show();y.show();p.show();a.data("dragStarted")&&(m={selectionLeft:n.x,selectionTop:n.y,selectionWidth:n.width,selectionHeight:n.height,startXValue:b.xAxis[0].getValue(n.x-e.canvasLeft),startYValue:b.yAxis[0].getValue(n.y-e.canvasTop),endXValue:b.xAxis[0].getValue(n.x+n.width-e.canvasLeft),endYValue:b.yAxis[0].getValue(n.y+n.height-e.canvasTop),data:d.getCollatedData(),id:c.id},E.raiseEvent("SelectionUpdated",m,d.chartInstance),a.data("dragStarted",0))},100)},restoreData:function(){var a=this.components.dataset,
c;this._deleteAllSelection();for(c=0;c<a.length;c++)a[c].draw();t.raiseEvent("dataRestored",{},this.chartInstance,[this.chartInstance.id]);return!0},submitData:function(){var a=this.chartInstance,c=new E.ajax,d=this.config,b=E.dataFormats.JSON,e=E.dataFormats.CSV,f=E.dataFormats.XML,g=d.formAction||"",l=d.submitFormAsAjax,h,k,y,p,q;d.formDataFormat===b?(h=b,k=JSON.stringify(this.getCollatedData())):this.formDataFormat===e?(h=e,k=a.getCSVString&&a.getCSVString(),void 0===k&&(k=E.core.transcodeData(this.getCollatedData(),
b,e))):(h=f,k=E.core.transcodeData(this.getCollatedData(),b,f));E.raiseEvent("beforeDataSubmit",{data:k},a,void 0,function(){l?(c.onError=function(b,c,d,e){t.raiseEvent("dataSubmitError",{xhrObject:c.xhr,url:e,statusText:b,httpStatus:c.xhr&&c.xhr.status?c.xhr.status:-1,data:k},a,[a.id,b,c.xhr&&c.xhr.status])},c.onSuccess=function(b,d,e,f){t.raiseEvent("dataSubmitted",{xhrObject:c,response:b,url:f,data:k},a,[a.id,b])},y={},y["str"+h.toUpperCase()]=k,c.open&&c.abort(),c.post(g,y)):(p=Ba.document.createElement("span"),
p.innerHTML='<form style="display:none" action="'+g+'" method="'+d.formMethod+'" target="'+d.formTarget+'"> <input type="hidden" name="strXML" value="'+Lc(k)+'"><input type="hidden" name="dataFormat" value="'+h.toUpperCase()+'" /></form>',q=p.removeChild(p.firstChild),Ba.document.body.appendChild(q),q.submit&&q.submit(),q.parentNode.removeChild(q),p=q=null)},function(){E.raiseEvent("dataSubmitCancelled",{data:k},a)})},_postSpaceManagement:function(){N("mscartesian")._postSpaceManagement.call(this);
this._deleteAllSelection()},eiMethods:{getData:function(a){var c=this.apiInstance;return c&&c.getData(a)},restoreData:function(){var a=this.apiInstance;return a&&a.restoreData()},submitData:function(){var a=this.apiInstance;return a&&a.submitData()}}},N.scatterBase);FusionCharts.register("component",["dataset","selectScatter",{configure:function(){var a=this.chart,c=a.config,d=a.jsonData.chart,a=a.components.colorManager,b=q(d.selectbordercolor,a.getColor("canvasBorderColor")),e=h(d.selectborderalpha,
a.getColor("canvasBorderAlpha"));FusionCharts.get("component",["dataset","scatter"]).prototype.configure.call(this);c.selectBorderColor={FCcolor:{color:b,alpha:e}};c.selectFillColor=aa(q(d.selectfillcolor,a.getColor(Oa)),h(d.selectfillalpha,a.getColor(gb)));c.selectionCancelButtonBorderColor=aa(q(d.selectioncancelbuttonbordercolor,b),h(d.selectioncancelbuttonborderalpha,e));c.selectionCancelButtonFillColor=aa(q(d.selectioncancelbuttonfillcolor,Ga),h(d.selectioncancelbuttonfillalpha,100));c.connativeZoom=
!1;c.zoomType="xy";c.formAction=H(d.formaction);d.submitdataasxml!==Ea||d.formdataformat||(d.formdataformat=E.dataFormats.CSV);c.formDataFormat=q(d.formdataformat,E.dataFormats.XML);c.formTarget=q(d.formtarget,"_self");c.formMethod=q(d.formmethod,"POST");c.submitFormAsAjax=h(d.submitformusingajax,1)},draw:function(){var a=this.chart,c=a.linkedItems.container;FusionCharts.get("component",["dataset","scatter"]).prototype.draw.call(this);Sc(a,{selectionStart:function(a){var b=wc(c,a.originalEvent),b=
W({selectionLeft:a.selectionLeft,selectionTop:a.selectionTop,selectionWidth:a.selectionWidth,selectionHeight:a.selectionHeight,startXValue:a.chart.components.xAxis[0].getAxisPosition(a.selectionLeft,1),startYValue:a.chart.components.yAxis[0].getAxisPosition(a.selectionTop,1)},b);E.raiseEvent("selectionStart",b,a.chart.chartInstance)},selectionEnd:function(a){var b=wc(c,a.originalEvent),e=a.chart.components.xAxis[0],f=a.chart.components.yAxis[0],b=W({selectionLeft:a.selectionLeft,selectionTop:a.selectionTop,
selectionWidth:a.selectionWidth,selectionHeight:a.selectionHeight,startXValue:e.getAxisPosition(a.selectionLeft,1),startYValue:f.getAxisPosition(a.selectionTop,1),endXValue:e.getAxisPosition(a.selectionLeft+a.selectionWidth,1),endYValue:f.getAxisPosition(a.selectionTop+a.selectionHeight,1)},b);E.raiseEvent("selectionEnd",b,a.chart.chartInstance);a.chart.createSelectionBox(a)}})}},"scatter"]);N("candlestick",{friendlyName:"Candlestick Chart",standaloneInit:!0,creditLabel:va,paletteIndex:3,defaultDatasetType:"candlestick",
hasLegend:!0,applicableDSList:{candlestick:!0},canvasborderthickness:1,hasInteractiveLegend:!1,init:function(a,c,d,b){var e;this.jsonData=c;e=this.components=this.components||(this.components={});e.canvasVolume=e.canvasVolume||(e.canvasVolume={graphics:{},config:{}});N.mscartesian.init.call(this,a,c,d,b)},configure:function(){var a,c,d,b=this.components.colorManager,e=this.jsonData.chart,f=this.components;this.base.configure.call(this);a=this.config;d=f.canvas.config;a.showVolumeChart=h(e.showvolumechart,
1);c=h(e.volumeheightpercent,40);a.volumeHeightPercent=20>c?20:80<c?80:c;a.canvasBorderWidth=h(e.canvasborderthickness,1);a.rollOverBandColor=aa(q(e.rolloverbandcolor,b.getColor(Oa)),q(e.rolloverbandalpha,b.getColor(gb)));W(f.canvasVolume.config,d)},_createDatasets:function(){var a=this.config,c=this.components,d=this.jsonData,b=d.dataset,e=d.trendset||[],f=this.config.showVolumeChart,g=b&&b.length,l,h,k=this.defaultDatasetType,y=q(Y(d.chart.plotpriceas),C),p,n,m,r,t,u=0,v=a.datasetMap||(a.datasetMap=
{trendset:[],candlestick:[]}),w,z={},A={trendset:[],candlestick:[]},G=c.legend;if(b){this.config.categories=d.categories&&d.categories[0].category;l=c.dataset=[];d=0;for(g=b.length;d<g;d++)m=b[d],m.seriesname&&(m.seriesname=Y(m.seriesname)),p=(p=q(m.renderas,k))&&p.toLowerCase(),n=FusionCharts.get("component",["dataset",p]),w=v[p],h=w[0],n&&(void 0===z[p]?z[p]=0:z[p]++,h?(r=h,h.index=d,y!==r.config.plotType?(ob.call(r),h=l[u]=new n,h.chart=this,h.index=u,h.init(m)):(r=(r=h.JSONData)&&r.data&&r.data.length,
t=m.data&&m.data.length,r>t&&h.removeData(t-1,r-t,!1),h.JSONData=m),h.configure(),A[p].push(h),l.push(h),w.shift()):(h=new n,l.push(h),A[p].push(h),h.chart=this,h.index=u,h.init(m))),u++,w=c.yAxis&&c.yAxis[1],f&&this.config.drawVolume?(w&&w.show(),n&&(void 0===z[p]?z[p]=0:z[p]++,w=v[p],(h=w[0])?(r=(r=h.JSONData)&&r.data&&r.data.length,t=m.data&&m.data.length,r>t&&h.removeData(t-1,r-t,!1),h.JSONData=m,h.configure(),l.push(h),A[p].push(h),w.shift()):(h=new n,h.chart=this,l.push(h),A[p].push(h),h.init(m,
B))),u++):w&&w.hide(),f=this.config.drawVolume&&f?this.config.showVolumeChart=1:this.config.showVolumeChart=0;d=0;for(g=e.length;d<g;d++)m=e[d],p="trendset",w=v[p],h=w[0],void 0===z[p]?z[p]=0:z[p]++,h?(r=(r=h.JSONData)&&r.data&&r.data.length,t=m.data&&m.data.length,A[p].push(h),l.push(h),h.index=u,r>t&&h.removeData(t-1,r-t,!1),h.JSONData=m,h.configure(),w.shift()):(n=FusionCharts.get("component",["dataset",p]),c=new n,l.push(c),A[p].push(c),c.chart=this,c.index=u,c.init(m)),u++;for(b in v)if(w=v[b],
g=w.length)for(e=0;e<g;e++)G.removeItem(w[e].legendItemId),ob.call(w[e]);a.datasetMap=A}else this.setChartMessage()},_spaceManager:function(){var a,c,d,b=this.config,e=this.components,f=b.legendPosition,g=e.xAxis&&e.xAxis[0],l=e.xAxis&&e.xAxis[1],h=e.yAxis&&e.yAxis[0],k=e.yAxis&&e.yAxis[1];c=this.hasLegend;var y=e.legend,p,q=this.config.showVolumeChart,n=q?b.volumeHeightPercent:0,m=e.canvas.config,t=e.canvasVolume.config,u=b.width,v=b.height,w={};a=b.chartBorderWidth;e=e.canvas.config.canvasBorderWidth;
p=b.minCanvasHeight;d=b.minCanvasWidth;var z=b.canvasMarginLeft,A=b.canvasMarginRight,C=b.canvasMarginTop,G=b.canvasMarginBottom,D,J,B=b.origCanvasTopMargin,F=b.origCanvasBottomMargin,L=b.origCanvasLeftMargin,I=b.origCanvasRightMargin;this._allocateSpace({top:a,bottom:a,left:a,right:a});a=.225*b.availableHeight;a=this._manageActionBarSpace&&this._manageActionBarSpace(a)||{};this._allocateSpace(a);a=f===Jc?.225*b.canvasWidth:.3*b.canvasHeight;!1!==c&&g&&this._allocateSpace(y._manageLegendPosition(a));
c=.7*b.canvasWidth;h=h.placeAxis(c);k=q?k.placeAxis(c):{};w.left=X(h.left,k.left||0);w.right=X(h.right,k.right||0);this._allocateSpace(w);d>u-z-A&&(J=!0,k=b.canvasWidth-d,w=z+A,z=b.canvasMarginLeft=k*z/w,A=b.canvasMarginRight=k*A/w);z=z>b.canvasLeft?z-b.canvasLeft:0;u=A>u-b.canvasRight?A+b.canvasRight-u:0;this._allocateSpace({left:z,right:u});J&&(w=L+I,J=b.canvasWidth,J>d&&(k=J-d,z=k*L/w,u=k*I/w),this._allocateSpace({left:z,right:u}));d=f===r?.6*b.canvasHeight:.6*b.canvasWidth;this._manageChartMenuBar(d);
this._allocateSpace({top:b.canvasMarginTop,bottom:b.canvasMarginBottom});d=.3*b.canvasHeight;f=g.placeAxis(d);g&&this._allocateSpace(f);f.bottom+=6;q&&(g=l.placeAxis(d),this._allocateSpace(g));this._allocateSpace({top:e,bottom:2*e,left:e,right:e});p>v-C-G&&(D=!0,k=b.canvasHeight-p,w=C+G,C=b.canvasMarginTop=k*C/w,G=b.canvasMarginBottom=k*G/w);g=C>b.canvasTop?C-b.canvasTop:0;v=G>v-b.canvasBottom?G+b.canvasBottom-v:0;this._allocateSpace({top:g,bottom:v});D&&(w=B+F,D=b.canvasHeight,D>p&&(k=D-p,g=k*B/
w,v=k*F/w),this._allocateSpace({top:g,bottom:v}));p=b.canvasHeight;m.canvasHeight=qa((100-n)/100*p);t.canvasHeight=n/100*p;m.canvasTop=b.canvasTop;m.canvasLeft=b.canvasLeft;m.canvasBottom=m.canvasTop+m.canvasHeight;m.canvasWidth=b.canvasWidth;m.canvasRight=b.canvasRight;t.canvasTop=m.canvasBottom+f.bottom+2*e;t.canvasLeft=b.canvasLeft;t.canvasBottom=t.canvasTop+t.canvasHeight+2*e;t.canvasRight=b.canvasRight;t.canvasWidth=b.canvasWidth;n=b.canvasTop+m.canvasHeight+e;b=b.canvasTop+m.canvasHeight+f.bottom+
2*e;m.canvasY=n;t.canvasY=b},_postSpaceManagement:function(){var a=this.components,c=this.config.showVolumeChart,d=a.xAxis&&a.xAxis[0],b=a.yAxis&&a.yAxis[0],e=a.xAxis&&a.xAxis[1],f=a.yAxis&&a.yAxis[1],g=a.canvas.config,l=a.legend,a=a.canvasVolume.config,h=g.canvasBorderWidth;d&&d.setAxisDimention({x:g.canvasLeft,y:g.canvasY,opposite:g.canvasTop-h,axisLength:g.canvasWidth});b&&b.setAxisDimention({x:g.canvasLeft-h,y:g.canvasTop,opposite:g.canvasRight+h,axisLength:g.canvasHeight});c&&(e&&e.setAxisDimention({x:g.canvasLeft,
y:a.canvasBottom,opposite:a.canvasTop-h,axisLength:g.canvasWidth}),f&&f.setAxisDimention({x:g.canvasLeft-h,y:a.canvasY,opposite:a.canvasRight+h,axisLength:a.canvasHeight}),e&&e.setCanvas(a),f&&f.setCanvas(a));d.setCanvas(g);b.setCanvas(g);l.postSpaceManager()},_drawCanvas:function(){var a=this.components,c=this.graphics,d=a.paper,b=a.canvas,e=a.canvas.config,f=e.clip||(e.clip=[]),g=a.canvasVolume.config,l=b.graphics,a=a.canvasVolume.graphics,h=b.config,k=l.topCanvas,y=l.topCanvasBorderElement,b=a.volumeCanvas,
p=e.canvasLeft,q=e.canvasTop,n=e.canvasWidth,e=e.canvasHeight,m=g.canvasTop,g=g.canvasHeight,c=c.canvasGroup,r=h.canvasBorderRadius,t=h.canvasBorderWidth,u=.5*t,v=h.canvasBorderColor,w=this.get(Z,xa),z=w.dummyObj,A=w.animObj,C=w.animType,w=w.transposeAnimDuration,D,J=this.config.showVolumeChart,G=h.shadow,F=h.shadowOnCanvasFill,h=h.canBGColor;D={x:p-u,y:q-u,width:n+t,height:e+t,r:r,"stroke-width":t,stroke:v,"stroke-linejoin":2<t?ba:Pa};y?w?y.animateWith(z,A,{x:p-u,y:q-u,width:n+t,height:e+t,r:r},
w,C):y.attr(D):y=l.topCanvasBorderElement=d.rect(D,c).shadow(G);y.attr({"stroke-width":t,stroke:v,"stroke-linejoin":2<t?ba:Pa});f["clip-canvas"]=[X(0,p),X(0,q),X(1,n),X(1,e)];f["clip-canvas-init"]=[X(0,p),X(0,q),1,X(1,e)];k?w?k.animate({x:p,y:q,width:n,height:e},w,C).attr({r:r}):k.attr(void 0):(l.topCanvas=k=d.rect(c),k.attr({x:p,y:q,width:n,height:e}).shadow(F));k.animateWith(z,A,{x:p,y:q,width:n,height:e},w,C);k.attr({r:r,"stroke-width":0,stroke:"none",fill:ga(h)});J?(f={x:p-u,y:m-u-1,width:n+t,
height:g+t},b||(a.volumeCanvas=b=d.rect(c).attr(f).shadow(F).crisp()),b.show().animateWith(z,A,f,w,C).attr({r:r,fill:ga(h),"stroke-width":t,stroke:v,"stroke-linejoin":2<t?ba:Pa,"shape-rendering":"crisp"})):b&&b.hide()},_createAxes:function(){var a=this.components,c,d=FusionCharts.register("component",["axis","cartesian"]),b=this.config.showVolumeChart,e,f;a.yAxis=[];a.xAxis=[];a.yAxis[0]=e=new d;a.yAxis[1]=c=new d;a.xAxis[0]=f=new d;e.chart=this;c.chart=this;f.chart=this;b&&(a.xAxis[1]=a=new d,a.chart=
this,a.init());e.init();c.init();f.init();this._setCategories()},_feedAxesRawData:function(){var a=this.components,c=a.colorManager,d=this.jsonData,b=d.chart,e,f,g=this.is3d,l=g?Nb.chart3D:Nb.chart2D,x=FusionCharts.register("component",["axis","cartesian"]),k=this.config.showVolumeChart;e={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,b.basefontcolor,c.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,
"#$1"),axisNamePadding:b.xaxisnamepadding,axisValuePadding:b.labelpadding,axisNameFont:b.xaxisnamefont,axisNameFontSize:b.xaxisnamefontsize,axisNameFontColor:b.xaxisnamefontcolor,axisNameFontBold:b.xaxisnamefontbold,axisNameFontItalic:b.xaxisnamefontitalic,axisNameBgColor:b.xaxisnamebgcolor,axisNameBorderColor:b.xaxisnamebordercolor,axisNameAlpha:b.xaxisnamealpha,axisNameFontAlpha:b.xaxisnamefontalpha,axisNameBgAlpha:b.xaxisnamebgalpha,axisNameBorderAlpha:b.xaxisnameborderalpha,axisNameBorderPadding:b.xaxisnameborderpadding,
axisNameBorderRadius:b.xaxisnameborderradius,axisNameBorderThickness:b.xaxisnameborderthickness,axisNameBorderDashed:b.xaxisnameborderdashed,axisNameBorderDashLen:b.xaxisnameborderdashlen,axisNameBorderDashGap:b.xaxisnameborderdashgap,useEllipsesWhenOverflow:b.useellipseswhenoverflow,divLineColor:q(b.vdivlinecolor,b.divlinecolor,c.getColor(l.divLineColor)),divLineAlpha:q(b.vdivlinealpha,b.divlinealpha,g?c.getColor(Ia):c.getColor(sa)),divLineThickness:h(b.vdivlinethickness,b.divlinethickness,1),divLineIsDashed:!!h(b.vdivlinedashed,
b.vdivlineisdashed,b.divlinedashed,b.divlineisdashed,0),divLineDashLen:h(b.vdivlinedashlen,b.divlinedashlen,4),divLineDashGap:h(b.vdivlinedashgap,b.divlinedashgap,2),showAlternateGridColor:h(b.showalternatevgridcolor,0),alternateGridColor:q(b.alternatevgridcolor,c.getColor(La)),alternateGridAlpha:q(b.alternatevgridalpha,c.getColor(Ja)),numDivLines:b.numvdivlines,labelFont:b.labelfont,labelFontSize:b.labelfontsize,labelFontColor:b.labelfontcolor,labelFontAlpha:b.labelalpha,labelFontBold:b.labelfontbold,
labelFontItalic:b.labelfontitalic,axisName:b.xaxisname,axisMinValue:b.xaxisminvalue,axisMaxValue:b.xaxismaxvalue,setAdaptiveMin:b.setadaptivexmin,adjustDiv:b.adjustvdiv,labelDisplay:b.labeldisplay,showLabels:b.showlabels,rotateLabels:b.rotatelabels,slantLabel:h(b.slantlabels,b.slantlabel),labelStep:h(b.labelstep,b.xaxisvaluesstep),showAxisValues:h(b.showxaxisvalues,b.showxaxisvalue),showLimits:b.showvlimits,showDivLineValues:h(b.showvdivlinevalues,b.showvdivlinevalues),showZeroPlane:b.showvzeroplane,
zeroPlaneColor:b.vzeroplanecolor,zeroPlaneThickness:b.vzeroplanethickness,zeroPlaneAlpha:b.vzeroplanealpha,showZeroPlaneValue:b.showvzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendlinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showxaxisline,b.showaxislines,b.drawAxisLines,0),axisLineThickness:h(b.xaxislinethickness,b.axislinethickness,1),axisLineAlpha:h(b.xaxislinealpha,b.axislinealpha,
100),axisLineColor:q(b.xaxislinecolor,b.axislinecolor,oa)};g={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,b.basefontcolor,c.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,"#$1"),axisNamePadding:b.xaxisnamepadding,axisValuePadding:b.labelpadding,axisNameFont:b.xaxisnamefont,axisNameFontSize:b.xaxisnamefontsize,axisNameFontColor:b.xaxisnamefontcolor,axisNameFontBold:b.xaxisnamefontbold,axisNameFontItalic:b.xaxisnamefontitalic,
axisNameBgColor:b.xaxisnamebgcolor,axisNameBorderColor:b.xaxisnamebordercolor,axisNameAlpha:b.xaxisnamealpha,axisNameFontAlpha:b.xaxisnamefontalpha,axisNameBgAlpha:b.xaxisnamebgalpha,axisNameBorderAlpha:b.xaxisnameborderalpha,axisNameBorderPadding:b.xaxisnameborderpadding,axisNameBorderRadius:b.xaxisnameborderradius,axisNameBorderThickness:b.xaxisnameborderthickness,axisNameBorderDashed:b.xaxisnameborderdashed,axisNameBorderDashLen:b.xaxisnameborderdashlen,axisNameBorderDashGap:b.xaxisnameborderdashgap,
useEllipsesWhenOverflow:b.useellipseswhenoverflow,divLineColor:q(b.vdivlinecolor,c.getColor(l.divLineColor)),divLineAlpha:q(b.vdivlinealpha,c.getColor(sa)),divLineThickness:h(b.vdivlinethickness,1),divLineIsDashed:!!h(b.vdivlinedashed,b.vdivlineisdashed,0),divLineDashLen:h(b.vdivlinedashlen,4),divLineDashGap:h(b.vdivlinedashgap,2),showAlternateGridColor:h(b.showalternatevgridcolor,0),alternateGridColor:q(b.alternatevgridcolor,c.getColor(La)),alternateGridAlpha:q(b.alternatevgridalpha,c.getColor(Ja)),
numDivLines:b.numvdivlines,labelFont:b.labelfont,labelFontSize:b.labelfontsize,labelFontColor:b.labelfontcolor,labelFontAlpha:b.labelalpha,labelFontBold:b.labelfontbold,labelFontItalic:b.labelfontitalic,axisName:b.xaxisname,axisMinValue:b.xaxisminvalue,axisMaxValue:b.xaxismaxvalue,setAdaptiveMin:b.setadaptivexmin,adjustDiv:b.adjustvdiv,labelDisplay:b.labeldisplay,showLabels:1,rotateLabels:b.rotatelabels,slantLabel:h(b.slantlabels,b.slantlabel),labelStep:h(b.labelstep,b.xaxisvaluesstep),showAxisValues:h(b.showxaxisvalues,
b.showxaxisvalue),showLimits:b.showvlimits,showDivLineValues:h(b.showvdivlinevalues,b.showvdivlinevalues),showZeroPlane:b.showvzeroplane,zeroPlaneColor:b.vzeroplanecolor,zeroPlaneThickness:b.vzeroplanethickness,zeroPlaneAlpha:b.vzeroplanealpha,showZeroPlaneValue:b.showvzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showxaxisline,b.showaxislines,
b.drawAxisLines,0),axisLineThickness:h(b.xaxislinethickness,b.axislinethickness,1),axisLineAlpha:h(b.xaxislinealpha,b.axislinealpha,100),axisLineColor:q(b.xaxislinecolor,b.axislinecolor,oa)};f={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,b.basefontcolor,c.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,"#$1"),axisNamePadding:b.yaxisnamepadding,axisValuePadding:b.yaxisvaluespadding,axisNameFont:b.pyaxisnamefont,
axisNameFontSize:b.pyaxisnamefontsize,axisNameFontColor:b.pyaxisnamefontcolor,axisNameFontBold:b.pyaxisnamefontbold,axisNameFontItalic:b.pyaxisnamefontitalic,axisNameBgColor:b.pyaxisnamebgcolor,axisNameBorderColor:b.pyaxisnamebordercolor,axisNameAlpha:b.pyaxisnamealpha,axisNameFontAlpha:b.pyaxisnamefontalpha,axisNameBgAlpha:b.pyaxisnamebgalpha,axisNameBorderAlpha:b.pyaxisnameborderalpha,axisNameBorderPadding:b.pyaxisnameborderpadding,axisNameBorderRadius:b.pyaxisnameborderradius,axisNameBorderThickness:b.pyaxisnameborderthickness,
axisNameBorderDashed:b.pyaxisnameborderdashed,axisNameBorderDashLen:b.pyaxisnameborderdashlen,axisNameBorderDashGap:b.pyaxisnameborderdashgap,axisNameWidth:b.yaxisnamewidth,useEllipsesWhenOverflow:b.useellipseswhenoverflow,rotateAxisName:h(b.rotateyaxisname,1),axisName:b.pyaxisname,divLineColor:q(b.divlinecolor,c.getColor(l.divLineColor)),divLineAlpha:q(b.divlinealpha,c.getColor(sa)),divLineThickness:h(b.divlinethickness,1),divLineIsDashed:!!h(b.divlinedashed,b.divlineisdashed,1),divLineDashLen:h(b.divlinedashlen,
4),divLineDashGap:h(b.divlinedashgap,2),showAlternateGridColor:h(b.showalternatehgridcolor,1),alternateGridColor:q(b.alternatehgridcolor,c.getColor(Oa)),alternateGridAlpha:q(b.alternatehgridalpha,c.getColor(gb)),numDivLines:h(b.numpdivlines,5),axisMinValue:b.pyaxisminvalue,axisMaxValue:b.pyaxismaxvalue,setAdaptiveMin:h(b.setadaptiveymin,1),adjustDiv:b.adjustdiv,labelStep:b.yaxisvaluesstep,showAxisValues:h(b.showyaxisvalues,b.showyaxisvalue),showLimits:h(b.showyaxislimits,b.showlimits,this.showLimits),
showDivLineValues:h(b.showdivlinevalues,b.showdivlinevalue),showZeroPlane:b.showzeroplane,zeroPlaneColor:b.zeroplanecolor,zeroPlaneThickness:b.zeroplanethickness,zeroPlaneAlpha:b.zeroplanealpha,showZeroPlaneValue:b.showzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendlinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showyaxisline,b.showaxislines,b.drawAxisLines,0),axisLineThickness:h(b.yaxislinethickness,
b.axislinethickness,1),axisLineAlpha:h(b.yaxislinealpha,b.axislinealpha,100),axisLineColor:q(b.yaxislinecolor,b.axislinecolor,oa)};c={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,b.basefontcolor,c.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,"#$1"),axisNamePadding:b.yaxisnamepadding,axisValuePadding:b.yaxisvaluespadding,axisNameFont:b.vyaxisnamefont,axisNameFontSize:b.vyaxisnamefontsize,axisNameFontColor:b.vyaxisnamefontcolor,
axisNameFontBold:b.vyaxisnamefontbold,axisNameFontItalic:b.vyaxisnamefontitalic,axisNameBgColor:b.vyaxisnamebgcolor,axisNameBorderColor:b.vyaxisnamebordercolor,axisNameAlpha:b.vyaxisnamealpha,axisNameFontAlpha:b.vyaxisnamefontalpha,axisNameBgAlpha:b.vyaxisnamebgalpha,axisNameBorderAlpha:b.vyaxisnameborderalpha,axisNameBorderPadding:b.vyaxisnameborderpadding,axisNameBorderRadius:b.vyaxisnameborderradius,axisNameBorderThickness:b.vyaxisnameborderthickness,axisNameBorderDashed:b.vyaxisnameborderdashed,
axisNameBorderDashLen:b.vyaxisnameborderdashlen,axisNameBorderDashGap:b.vyaxisnameborderdashgap,axisNameWidth:b.yaxisnamewidth,useEllipsesWhenOverflow:b.useellipseswhenoverflow,rotateAxisName:h(b.rotateyaxisname,1),axisName:b.vyaxisname,divLineColor:q(b.divlinecolor,c.getColor(l.divLineColor)),divLineAlpha:q(b.divlinealpha,c.getColor(sa)),divLineThickness:h(b.divlinethickness,1),divLineIsDashed:!!h(b.divlinedashed,b.divlineisdashed,1),divLineDashLen:h(b.divlinedashlen,4),divLineDashGap:h(b.divlinedashgap,
2),showAlternateGridColor:h(b.showalternatehgridcolor,1),alternateGridColor:q(b.alternatehgridcolor,c.getColor(Oa)),alternateGridAlpha:q(b.alternatehgridalpha,c.getColor(gb)),numDivLines:b.numdivlines,axisMinValue:b.vyaxisminvalue,axisMaxValue:b.vyaxismaxvalue,setAdaptiveMin:b.setadaptiveymin,adjustDiv:b.adjustdiv,labelStep:b.yaxisvaluesstep,showAxisValues:h(b.showyaxisvalues,b.showyaxisvalue),showLimits:h(b.showsecondarylimits,b.showlimits),showDivLineValues:h(b.showdivlinevalues,b.showdivlinevalue),
showZeroPlane:b.showzeroplane,zeroPlaneColor:b.zeroplanecolor,zeroPlaneThickness:b.zeroplanethickness,zeroPlaneAlpha:b.zeroplanealpha,showZeroPlaneValue:b.showzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendlinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showyaxisline,b.showaxislines,b.drawAxisLines,0),axisLineThickness:h(b.yaxislinethickness,b.axislinethickness,1),axisLineAlpha:h(b.yaxislinealpha,
b.axislinealpha,100),axisLineColor:q(b.yaxislinecolor,b.axislinecolor,oa)};e.vtrendlines=d.vtrendlines;g.vtrendlines=d.vtrendlines;f.trendlines=d.trendlines;b=a.yAxis[0];d=a.yAxis[1];l=a.xAxis[0];b.setCommonConfigArr(f,!0,!1,!1);b.configure();d.setCommonConfigArr(c,!0,!1,!1);d.configure();b.setAxisConfig({drawLabelsOpposit:1,axisNameAlignCanvas:1,relativeAxis:d});d.setAxisConfig({drawLabelsOpposit:1,axisNameAlignCanvas:1,uniqueClassName:1,relativeAxis:b});l.setCommonConfigArr(e,!1,!1,!1);l.configure();
l.setAxisConfig({drawTrendLabels:k?!1:!0});k?(a.xAxis[1]?a.xAxis[1].show():(x=a.xAxis[1]=new x,x.chart=this,x.init()),x=a.xAxis[1],x.setCommonConfigArr(g,!1,!1,!1),x.configure(),x.setAxisConfig({drawLabels:!1,drawPlotlines:!0,drawPlotBands:!1,drawAxisName:!1,drawTrendLines:!0,drawOnlyCategoryLine:!0,uniqueClassName:1})):a.xAxis[1]&&a.xAxis[1].hide()},_setCategories:function(){var a=this.jsonData,c=this.components.xAxis,a=a.categories&&a.categories[0].category||[],d=[],b,e;for(e=0;e<a.length;e++)b=
W({},a[e]),b.label=G,d.push(b);c[0].setAxisPadding(.5,.5);c[0].setCategory(a);c[1]&&c[1].setAxisPadding(.5,.5);c[1]&&c[1].setCategory(d)},_setAxisLimits:function(){var a=this.components,c=a.dataset,d=a.yAxis,a=a.xAxis,b,e=c.length,f,g=-Infinity,l=Infinity,h=-Infinity,k=Infinity,y=Infinity,p=-Infinity,q,n=0,m={};for(f=0;f<e;f++)b=c[f],q=b.groupManager,n=b.config.parentYAxis,q?(m[b.type]=q,m[b.type].yAxisIndex=n):(b=b.getDataLimits(),1===n?(h=X(h,b.max),k=da(k,b.min)):(g=X(g,b.max),l=da(l,b.min)),p=
X(p,b.xMax||-Infinity),y=da(y,b.xMin||Infinity));for(q in m)b=m[q].getDataLimits(),g=X(g,b.max),l=da(l,b.min);c=this._getTrendLineMinMax("h");g=X(g,c.max);l=da(l,c.min);d[0].setDataLimit(g,l);d[1].setDataLimit(h,k);if(-Infinity!==p||Infinity!==y)a[0].setAxisRange({min:y-.5,max:p+.5,tickInterval:1}),a[1]&&a[1].setAxisRange({min:y-.5,max:p+.5,tickInterval:1})},isDual:!0},N.mscartesian);FusionCharts.register("component",["dataset","Candlestick",{type:"Candlestick",configure:function(){if(this.plotType===
B)this._configureVolume();else{var a=this.config,c=this.chart,d=c.components,b=this.JSONData,e=b.data||[],f=c.jsonData.chart,g=e.length,l=a.plotPriceAs=H(f.plotpriceas,G).toLowerCase(),x=d.numberFormatter,k=d.colorManager,y,p,n,m,d=a.bearBorderColor=Ha(q(f.bearbordercolor,Qa)),r=a.bearFillColor=Ha(q(f.bearfillcolor,Qa)),u=a.bullBorderColor=Ha(q(f.bullbordercolor,k.getColor("canvasBorderColor"))),w=a.bullFillColor=Ha(q(f.bullfillcolor,Ga)),z=a.linethickness=a.plotBorderThickness=h(f.plotlinethickness,
l==v||l==A?2:1),E=a.plotLineDashLen=h(f.plotlinedashlen,5),ma=a.plotLineDashGap=h(f.plotlinedashgap,4),ha=!!h(f.drawanchors,1),qc=h(f.anchorstartangle,90),ia=h(f.anchorradius,this.anchorRadius,3),D=Ha(q(f.anchorbordercolor,u)),J=h(f.anchorborderthickness,this.anchorBorderThickness,1),k=Ha(q(f.anchorbgcolor,k.getColor("anchorBgColor"))),N=q(f.anchoralpha,Ea),F=q(f.anchorbgalpha,N),L,I,O,T,W,U,jb,Q,ga,V,ca,Z,M,aa=!1,ba=-Infinity,R=Infinity,wa=-Infinity,ka=Infinity,na=t.graphics.mapSymbolName;a.parentYAxis=
0;a.toolText=H(Y(q(b.tooltext,f.plottooltext)));a.name=H(b.seriesname);a.showTooltip=q(f.showtooltip,1);switch(l){case v:a.plotType=v;break;case A:a.plotType=A;break;default:a.plotType=C,a.showErrorValue=!0,a.errorBarWidthPercent=0,aa=!0}a.animation={duration:200};L=q(f.maxcolwidth);a.maxColWidth=Ua(h(L,50))||1;a.enableAnimation=L=h(f.animation,f.defaultanimation,1);a.animation=L?{duration:1E3*h(f.animationduration,1)}:!1;a.lineAlpha=q(f.plotlinealpha,"100");L=X(h(f.plotspacepercent,20)%100,0);a.plotSpacePercent=
a.groupPadding=L/200;ca=this.components.data=this.components.data||(this.components.data=[]);a.valuePadding=h(b.valuepadding,f.valuepadding,2);a.plotBorderThickness=z;for(L=0;L<g;L+=1)if(Z=e[L],(I=ca[L])||(I=ca[L]={}),!I.config&&(I.config={}),!I.graphics&&(I.graphics={}),M=I.config,Z&&!Z.vline){M.setLink=q(Z.link);I=M.open=x.getCleanValue(Z.open);T=M.close=x.getCleanValue(Z.close);W=M.high=x.getCleanValue(Z.high);U=M.low=x.getCleanValue(Z.low);jb=M.volume=x.getCleanValue(Z.volume,!0);null!==jb&&(c.config.drawVolume=
!0);jb=M.x=x.getCleanValue(Z.x);M.openVal=aa?Ua(T-I):I;ga=M.closeVal=da(I,T);V=M.yVal=X(I,T);m=l===v?1:0;O=da(I,T,W,U);Q=X(I,T,W,U);Y(H(Z.valuetext,G));p=Ha(q(Z.bordercolor,T<I?d:u));n=q(Z.alpha,m?a.lineAlpha:"100");y=Ha(q(Z.color,T<I?r:w));m=h(Z.dashed)?fb(E,ma):"none";M.dashStyle=m;m={opacity:n/100};M.color=aa?y:p;M.alpha=n;M.setColor=M.color;M.setAlpha=M.alpha;M.anchorImageUrl=q(Z.anchorimageurl,b.anchorimageurl,f.anchorimageurl);p=M.borderColor=p;M.borderAlpha=M.plotLineAlpha;M.colorArr=[{color:M.color,
alpha:M.alpha},{color:M.borderColor,alpha:M.borderAlpha}];M.anchorSides=h(Z.anchorsides,b.anchorsides,f.anchorsides);M.symbol=na(M.anchorSides).split(K);M.anchorProps={enabled:ha,bgColor:k,symbol:M.symbol,bgAlpha:F*N/100+G,borderColor:D,borderAlpha:N,borderThickness:J,imageUrl:M.anchorImageUrl,radius:ia,imageScale:h(Z.imagescale,b.imagescale,f.imagescale,100),imagePadding:h(Z.anchorimagepadding,b.anchorimagepadding,f.anchorimagepadding,1),imageAlpha:h(b.anchorimagealpha,f.anchorimagealpha,100),startAngle:qc};
M.showValue=1;M.hoverEffects={};switch(a.plotType){case v:M.y=T;M.link=q(Z.link);break;case C:M.y=Ua(T-I);M.previousY=ga;M.link=q(Z.link);M.errorValue=[];0<W-V&&M.errorValue.push({errorValue:W-V,errorStartValue:V,errorBarColor:p,errorBarThickness:z,opacity:1});0>U-ga&&M.errorValue.push({errorValue:U-ga,errorStartValue:ga,errorBarColor:p,errorBarThickness:z,opacity:1});break;default:M.y=I,M.previousY=T,M.link=q(Z.link)}M.setValue=M.y;null!==O&&(!ba&&0!==ba&&(ba=O),!R&&0!==R&&(R=O),ba=X(ba,O),R=da(R,
O));null!==Q&&(!ba&&(ba=Q),!R&&(R=Q),ba=X(ba,Q),R=da(R,Q));null!==jb&&(wa=X(wa,jb),ka=da(ka,jb));O=this._parseToolText(L);M.toolText=O;M.toolTipValue=G;jb=jb?jb:L+1;M.x=jb;M.displayValue=Y(q(Z.displayvalue,Z.valuetext,G));M.high=X(I,T,W,U);M.low=da(I,T,W,U);M.shadow=m}a.yMax=ba;a.yMin=R;a.xMax=wa;a.xMin=ka}},_parseToolText:function(a){var c=this.config,d=this.chart,b=d.jsonData.chart,e=c.plotType===v?1:0,f=this.JSONData.data[a],g=this.components.data[a].config,d=d.components.xAxis[0].getLabel(g.x).label;
a=g.open;var l=g.close,h=this.yAxis,k=g.high,y=g.low,g=g.volume,p=void 0!==g?f.volumetooltext:void 0;c.showTooltip?(c=H(Y(q(p,f.tooltext,c.volumeToolText,c.toolText))),void 0!==c?c=ya(c,[3,5,6,10,54,55,56,57,58,59,60,61,81,82],{label:d,yaxisName:Y(b.yaxisname),xaxisName:Y(b.xaxisname),openValue:f.open,openDataValue:h.dataLabels(a),closeValue:f.close,closeDataValue:h.dataLabels(l),highValue:f.high,highDataValue:h.dataLabels(k),lowValue:f.low,lowDataValue:h.dataLabels(y),volumeValue:f.volume,volumeDataValue:h.dataLabels(g)},
f,b):(c=null===a||e?G:"<b>Open:</b> "+h.dataLabels(a)+"<br />",c+=null!==l?"<b>Close:</b> "+h.dataLabels(l)+"<br />":G,c+=null===k||e?G:"<b>High:</b> "+h.dataLabels(k)+"<br />",c+=null===y||e?G:"<b>Low:</b> "+h.dataLabels(y)+"<br />",c+=null!==g?"<b>Volume:</b> "+h.dataLabels(g):G)):c=G;return c},init:function(a,c){var d=this.chart;this.yAxis=c===B?d.components.yAxis[1]:d.components.yAxis[0];this.components={};this.graphics={};this.JSONData=a;this.visible=1;this.plotType=c;this.configure()},_configureVolume:function(){var a=
this.config,c=this.chart,d=this.JSONData,b=d.data||[],e=c.jsonData.chart,f=b.length,g=c.components.colorManager,l,x,k,y,p,n,m=a.bearBorderColor=Ha(q(e.bearbordercolor,Qa)),r=a.bearFillColor=Ha(q(e.bearfillcolor,Qa)),g=a.bullBorderColor=Ha(q(e.bullbordercolor,g.getColor("canvasBorderColor"))),u=a.bullFillColor=Ha(q(e.bullfillcolor,Ga)),v=h(e.showvplotborder,1)?h(e.vplotborderthickness,1):0,w=a.plotLineDashLen=h(e.plotlinedashlen,5),z=a.plotLineDashGap=h(e.plotlinedashgap,4),A,ha=this.yAxis,B=-Infinity,
E=Infinity,D=-Infinity,J=Infinity;p=c.components.vNumberFormatter;a.plotType=C;a.parentYAxis=1;a.volumeToolText=H(Y(q(d.volumetooltext,e.volumetooltext,e.plottooltext)));a.name=H(d.seriesname);a.showTooltip=q(e.showtooltip,1);a.enableAnimation=d=h(e.animation,e.defaultanimation,1);a.animation=d?{duration:1E3*h(e.animationduration,1)}:!1;d=q(e.maxcolwidth);a.maxColWidth=Ua(h(d,50))||1;d=X(h(e.plotspacepercent,20)%100,0);a.plotSpacePercent=a.groupPadding=d/200;a.plotBorderThickness=v;d=this.components.data=
this.components.data||(this.components.data=[]);e=W(W({},e),{forcedecimals:T(e.forcevdecimals,e.forcedecimals),forceyaxisvaluedecimals:T(e.forcevyaxisvaluedecimals,e.forceyaxisvaluedecimals),yaxisvaluedecimals:T(e.vyaxisvaluedecimals,e.yaxisvaluedecimals),formatnumber:T(e.vformatnumber,e.formatnumber),formatnumberscale:T(e.vformatnumberscale,e.formatnumberscale),defaultnumberscale:T(e.vdefaultnumberscale,e.defaultnumberscale),numberscaleunit:T(e.vnumberscaleunit,e.numberscaleunit),vnumberscalevalue:T(e.vnumberscalevalue,
e.numberscalevalue),scalerecursively:T(e.vscalerecursively,e.scalerecursively),maxscalerecursion:T(e.vmaxscalerecursion,e.maxscalerecursion),scaleseparator:T(e.vscaleseparator,e.scaleseparator),numberprefix:T(e.vnumberprefix,e.numberprefix),numbersuffix:T(e.vnumbersuffix,e.numbersuffix),decimals:T(e.vdecimals,e.decimals)});p?p.configure(e):p=c.components.vNumberFormatter=new t.NumberFormatter(c,e);ha.setNumberFormatter(p);for(c=0;c<f;c+=1)p=b[c],(e=d[c])||(e=d[c]={}),!e.config&&(e.config={}),!e.graphics&&
(e.graphics={}),A=e.config,p&&!p.vline&&(y=A.open=ha.getCleanValue(p.open),l=A.close=ha.getCleanValue(p.close),A.high=ha.getCleanValue(p.high),A.low=ha.getCleanValue(p.low),n=A.volume=ha.getCleanValue(p.volume,!0),e=A.x=ha.getCleanValue(p.x),A.openVal=Ua(l-y),A.closeVal=da(y,l),B=X(B,n),E=da(E,n),D=X(D,e),J=da(J,e),Y(H(p.valuetext,G)),x=Ha(q(p.bordercolor,l<y?m:g)),k=q(p.alpha,"100"),l=Ha(q(p.color,l<y?r:u)),A.dashStyle=h(p.dashed)?fb(w,z):"none",y={opacity:k/100},A.color=l,A.alpha=k,A.setLink=p.link,
A.borderWidth=v,A.borderColor=x,A.borderAlpha=q(A.plotLineAlpha,k),A.y=n,A.colorArr=[{color:A.color,alpha:A.alpha},{color:A.borderColor,alpha:A.borderAlpha}],A.setValue=A.y,p=this._parseToolText(c),A.toolText=p,A.toolTipValue=G,e=e?e:c+1,A.x=e,A.shadow=y);a.yMax=B;a.yMin=E;a.xMax=D;a.xMin=J},draw:function(){var a=this.config,c=a.plotType;c===v?this.__base__.draw.call(this):c===C?(this._drawColumn(),a.showErrorValue&&this._drawErrorValue()):this._drawCandlestickBar();this.drawn=!0},_drawColumn:function(){var a=
this,c=a.JSONData,d=a.chart,b=d.getJobList(),e=a.chart.jsonData.chart,f=a.config,g=a.index,l=c.data,x=l&&l.length,k,y,p=a.visible,n=d.components.paper,m=d.components.xAxis[0],r=a.yAxis,u,v,w=d.graphics,z=t.parseUnsafeString,A=t.getValidValue,ha=t.Raphael,B=f.showTooltip,E=d.get(Z,xa),D=E.duration,J=E.dummyObj,H=E.animObj,F=m.getPVR(),L=f.plotSpacePercent,I=f.maxColWidth,F=(1-.01*f.definedGroupPadding)*F||da(F*(1-2*L),1*I),L=F/2,F=F/1,I=da(F-1,0),L=0*F-L+I/2,O,I=a.components.data,N,T,U,X,Q,W=r.getAxisBase(),
Y=r.yBasePos=r.getAxisPosition(W),V=f.plotBorderThickness,ba=f.plotRadius||0,M=a.graphics.container,ca=a.graphics.trackerContainer,aa=a.graphics.shadowContainer;Q=w.trackerGroup;var R,ka,qa=!d.config.plotAnimDone,na=a.components.removeDataArr||[],oa=na.length,pa=FusionCharts.get("component",["dataset",C]).prototype.drawLabel,la=function(){var b=a.graphics.errorGroupContainer;b&&b.show()};R=w.datasetGroup;w=a.components.pool||[];M||(M=a.graphics.container=n.group(Xa,R),p||M.hide());ca||(ca=a.graphics.trackerContainer=
n.group(Va,Q),p||ca.hide());aa||(aa=a.graphics.shadowContainer=n.group(ac,R).toBack(),p||aa.hide());ca=F;f.columnWidth=F;for(f=0;f<x;f++)k=l[f],Q=(y=I[f])&&y.config,N=Q.setLink,T=Q.y,u=h(Q.x,f),R=Q.colorArr,null!==T&&(N=Q.setLink,y.graphics||(I[f].graphics={}),X=a.index+K+f,Q.groupId=X,X=Q.displayValue,A(z(q(k.tooltext,c.plottooltext,e.plottooltext))),k=Q.previousY,v=r.getAxisPosition(k||W),k=r.getAxisPosition(T+(k||0)),u=m.getAxisPosition(u)+L,v=Ua(k-v),v=ha.crispBound(u,k,ca,v,V),u=v.x,k=v.y,ca=
v.width,v=v.height||1,O=Q.toolText,ka=Q.dashStyle,U=Q.eventArgs,U||(U=Q.eventArgs={}),U.index=f,U.link=N,U.value=T,U.displayValue=X,U.categoryLabel=m.getLabel(f).label,U.toolText=O,U.id=G,U.datasetIndex=g,U.datasetName=c.seriesname,U.visible=p,y._xPos=u,y._yPos=k,y._height=v,y._width=F,N=y.graphics.element,N||(w.element&&w.element.length?N=y.graphics.element=w.element.shift():(N=y.graphics.element=n.rect(M),D&&N.attr({x:u,y:Y,width:ca,height:0}))),y=Q._elemPositions,y||(y=Q._elemPositions={}),y.x=
u,y.y=k,y.width=ca,y.height=v,N.show().animateWith(J,H,y,D,E.animType,qa&&la),y=Q._elemCosmetics,y||(y=Q._elemCosmetics={}),y.r=ba,y.ishot=!B,y.fill=ga(R[0]),y.stroke=ga(R[1]),y["stroke-width"]=V,y["stroke-dasharray"]=ka,y["stroke-linejoin"]=Pa,y.visibility=p,N.attr(y).shadow(Q.shadow,aa),d.config.plotAnimDone=!0);b.trackerDrawID.push($a.addJob(a.drawTracker,a,[],t.priorityList.tracker));a.drawn?pa.call(a,0,I.length):b.labelDrawID.push($a.addJob(pa,a,[0,I.length],t.priorityList.label));for(f=0;f<
oa;f++)if(y=na[0])a._removeDataVisuals(y.graphics),na.shift();a.drawn=!0},rolloverResponseSetter:function(a,c){return function(d){c.graphics.rollOverBand.transform("t"+(a._xPos+(a._width||0)/2)+",0").show();ka.call(this,c,d,"DataPlotRollOver")}},rolloutResponseSetter:function(a,c){return function(a){c.graphics.rollOverBand.hide();ka.call(this,c,a,"DataPlotRollOut")}},drawTracker:function(){var a=this.graphics.trackerContainer,c=this.components.data,d=this.config,b=this.chart,e=b.components.paper,
f=c.length,g,l,h,k,y=this.components.pool||{},p=function(a){ka.call(this,b,a)},q=function(a){ka.call(this,b,a,"DataPlotRollOver")},n=function(a){ka.call(this,b,a,"DataPlotRollOut")},m,r=this.visible,t=d.plotRadius||0,u=d.plotBorderThickness,w,z,A,C,B,D,J,E=b.components,F=b.graphics.datasetGroup,L=b.graphics.rollOverBand,I=E.canvas.config,H=E.canvasVolume.config,E=d.columnWidth,K=b.config.rollOverBandColor,N=this.graphics.errorTrackerContainer;A=FusionCharts.get("component",["dataset","line"]).prototype.drawTracker;
if(d.plotType===v)A.call(this);else for(d=0;d<f;d++)for(D=c[d],k=D.config,l=D._width,h=D._height,w=D._yPos,z=D._xPos,J=k.eventArgs,A=k.setLink,g=D.graphics.hotElement,B=k.toolText,h<ab&&(w-=(ab-h)/2,h=ab),C=k.groupId,m=k._hotElemAttrs,m||(m=k._hotElemAttrs={}),m.x=z,m.y=w,m.width=l,m.height=h,m.r=t,m.cursor=A?"pointer":G,m.stroke=Ma,m["stroke-width"]=u,m.fill=Ma,m.ishot=!0,m.visibility=r,g=D.graphics.hotElement||y.hotElement&&y.hotElement.shift(),g||(g=D.graphics.hotElement=e.rect(a),g.click(p).mouseover(this.rolloverResponseSetter(D,
b)).mouseout(this.rolloutResponseSetter(D,b))),g.data("x",z+l/2),g.attr(m),g.data("eventArgs",J).data("groupId",C).tooltip(B),g=(h=k.errorValue)&&h.length||0;g--;)l=D.graphics.error[g],m=l.errorTrackerElem||y.errorTrackerElem&&y.errorTrackerElem.shift(),k=h[g],k=k.errorPath,m||(m=l.errorTrackerElem=e.path(N),m.click(p).hover(q,n)),m.attr({path:k,stroke:Ma,"stroke-width":ab,cursor:A?"pointer":G,ishot:!!A,visibility:r}).data("groupId",C).tooltip(B),m.data("eventArgs",J);a=["M",0,I.canvasTop,"L",0,I.canvasBottom,
"M",0,H.canvasTop-H.canvasBorderWidth,"L",0,H.canvasTop+H.canvasHeight+H.canvasBorderWidth/2];L||(L=b.graphics.rollOverBand=e.path(F));L.transform(G);L.attr({path:a,"stroke-width":E,ishot:!0,stroke:K,"stroke-linecap":"butt"});L.data("width",E);L.toBack();L.hide()},_removeDataVisuals:function(a){var c=this.components.pool||(this.components.pool={}),d,b,e,f,g;a.graphics&&(a=a.graphics);for(b in a){d=c[b]||(c[b]=[]);e=a[b];if(e instanceof Array)for(f=0,g=e.length;f<g;f++)this._removeDataVisuals(e[f]);
else e.hide&&"function"===typeof e.hide&&e.hide();d.push(a[b])}},_drawCandlestickBar:function(){var a=this.chart,c=a.components,d,b=this.config,e=this.components.data,f=e.length,g=c.xAxis[0],l=this.yAxis,x=a.graphics,c=c.paper,k=b.numColumns||1,y=b.columnPosition||0,p=g.getPVR(),q=b.groupPadding,n=b.maxColWidth,p=(1-.01*b.plotspacepercent)*p||da(p*(1-2*q),n*k),k=p/k*y-p/2,x=x.datasetGroup,m,r,t,u,v,y=a.get(Z,xa)||{},p=y.duration,q=y.dummyObj,n=y.animObj,w=this.graphics.container,z=this.components.pool||
{};d=this.visible;var A,C,D,J=this.components.removeDataArr||[],B=J.lengt,F;w||(w=this.graphics.container=c.group(Xa,x),d||w.hide());for(m=0;m<f;m+=1)r=e[m],d=r.config,F=r.graphics,u=d.y,null!==u&&(t=h(d.x,m),r=d.link,t=g.getAxisPosition(t),v=d.previousY,v=l.getAxisPosition(v),u=l.getAxisPosition(u),A=l.getAxisPosition(d.high),C=l.getAxisPosition(d.low),Ua(u-v),D=k,v=["M",t,C,"L",t,A,"M",t,u,"L",t+D,u,"M",t,v,"L",t-D,v],t=F.element,t||(z.element&&z.element.length?F.element=c.path(x):t=F.element=c.path(v,
w)),t.show().animateWith(q,n,{path:v},p,y.animType),a.config.plotAnimDone=!0,t.attr({fill:ga(d.color),stroke:ga(d.borderColor),"stroke-width":b.linethickness,"stroke-dasharray":d.dashStyle,"stroke-linecap":ba,"stroke-linejoin":ba,"shape-rendering":"crisp",cursor:r?"pointer":G,visibility:ca}).shadow(d.shadow));for(m=0;m<B;m++)this._removeDataVisuals(J.shift())},_drawErrorValue:function(){var a=this.config,c=this.JSONData.data,c=c&&c.length,d;d=this.visible;var b=this.chart,e=b.components.paper,f=b.components.yAxis[0],
g=this.components.data,l,h=a.errorBarWidthPercent,k,q=b.graphics,p=q.datasetGroup,a=a.showTooltip,n=this.graphics.errorGroupContainer,m=this.graphics.errorTrackerContainer,r=q.trackerGroup,t,u,v,w,z,A,C,b=b.get(Z,xa),q=b.duration,B=b.dummyObj,D=b.animObj,J,E,F,L;t=this.drawn;var I,H=this.components.pool||[],K;n||(n=this.graphics.errorGroupContainer=e.group(sb,p),d||n.hide());m||(m=this.graphics.errorTrackerContainer=e.group(Ya,r).toBack(),d||m.hide());d&&(n.show(),m.show());q&&!t&&n.hide();for(d=
0;d<c;d++)if(t=(p=g[d])&&p.config,w=t.y,m=t.errorValue,r=m.length,!p.graphics.error&&(p.graphics.error=[]),null!==w){t=t.setLink;w=0>w;u=p._xPos;v=p._yPos;L=p._width;K=p._height;v+=K;u+=L/2;l=p.graphics.error;k=l.length;if(k>r)for(I=r;I<k;I++)F=l.pop(),this._removeDataVisuals(F);for(;r--;)(I=p.graphics.error[r])||(I=p.graphics.error[r]={}),F=I.errorLineElem,J=m[r],z=J.errorValue,A=J.errorStartValue,k=J.errorBarColor,l=J.errorBarThickness,C=isNaN(A)?v:f.getAxisPosition(A),E=h/100*L,E/=2,z=f.getAxisPosition((cb(A)?
A:void 0)+z),w&&(z+=K),z=qa(z)+l%2/2,A=qa(u)+l%2/2,C=["M",A,C,"V",z,"M",A-E,z,"H",A+E],J.errorPath=C,J=p.graphics.hotElement||p.graphics.element,J.data("groupId"),F||(F=H.errorLineElem&&H.errorLineElem.length?I.errorLineElem=H.errorLineElem.shift():I.errorLineElem=e.path(n)),F.show().animateWith(B,D,{path:C},q,b.animType),F.attr({stroke:k,ishot:!a,"stroke-width":l,cursor:t?"pointer":G,"stroke-linecap":ba})}},getDataLimits:function(){var a=this.config;return{max:a.yMax,min:a.yMin,xMax:a.xMax,xMin:a.xMin}},
removeData:function(a,c){var d=this.components,b=d.data,e=d.removeDataArr||(d.removeDataArr=[]);d.removeDataArr=e.concat(b.splice(a||0,c||1))}},v]);FusionCharts.register("component",["dataset","Trendset",{configure:function(){var a=this.chart,c=a.jsonData.chart,d=this.JSONData,b=this.index,e=d.data||d.set||[],f=this.config,g,l=this.components.data,k,n=-Infinity,y=Infinity,p,m=-Infinity,r=Infinity,t=a.components.numberFormatter,b=Ha(q(d.color,c.trendsetcolor,"666666"));k=q(d.alpha,c.trendsetalpha,
"100");p=h(d.thickness,c.trendsetthickness,2);g=!!h(d.dashed,c.trendsetdashed,0);var u=h(d.dashlen,c.trendsetdashlen,4),v=h(d.dashgap,c.trendsetdashgap,4);f.includeInLegend=h(d.includeinlegend,1);f.lineColor=b;f.lineAlpha=k;f.connectNullData=h(c.connectnulldata,0);f.lineThickness=p;f.lineDashStyle=g?fb(u,v):"none";f.name=H(d.name);f.includeInLegend=h(d.includeinlegend,1);l||(l=this.components.data=[]);b=0;for(p=e.length;b<p;b+=1)(g=e[b])&&!g.vline&&(d=l[b]=l[b]||(l[b]={}),k=d.config=d.config||(d.config=
{}),c=k.setValue=t.getCleanValue(g.value),g=t.getCleanValue(g.x),g=k.x=null!==g?g:b+1,n=X(n,c),y=da(y,c),r=da(r,g),m=X(m,g),d.graphics||(d.graphics={}));f.max=n;f.min=y;f.xMax=m;f.xMin=r;this.yAxis=a.components.yAxis[0];this.visible=!0;this._addLegend()},_addLegend:function(){var a=this.JSONData,c=this.config,d=this.chart.components.legend,a={enabled:c.includeInLegend,interactiveLegend:!1,type:this.type,drawLine:!0,strokeColor:ga({color:c.lineColor,alpha:za}),label:T(a.name)};this.legendItemId=d.addItems(this,
this.legendInteractivity,a)},legendInteractivity:function(){},draw:function(){var a=this.chart,c=a.components,d=this.config,b=c.canvas.config.clip,e=this.components.data.length,f,g=c.paper,c=c.xAxis[0],l=this.yAxis,h,k,q=a.graphics,p=a.get(Z,xa),a=p.duration,n=p.dummyObj,m=p.animObj,p=p.animType,r=this.components.data,t,u=d.lineThickness,w=this.graphics.container,z=q.datasetGroup,q=d.shadow,A=function(){z.line.attr({"clip-rect":null});w.lineShadowGroup.show()},C=b["clip-canvas"].slice(0),b=b["clip-canvas-init"].slice(0),
G=d.lineDashStyle,d={color:d.lineColor,alpha:d.lineAlpha},B=!1,D=this.graphics.lineElement,J=this.visible;z.line=z.line||g.group(v,z);z.lineConnector=z.lineConnector||g.group("line-connector",z);w||(w=this.graphics.container={lineShadowGroup:g.group("connector-shadow",z.line),lineGroup:g.group(v,z.line)},J||(w.lineShadowGroup.hide(),w.lineGroup.hide()));for(f=0;f<e;f++)t=r[f],h=t.config,k=h.setValue,h=h.x,h=c.getAxisPosition(h),k=l.getAxisPosition(k),t._xPos=h,t._yPos=k;e=this.getLinePath(r,{}).getPathArr();
D||(D=this.graphics.lineElement=g.path(w.lineGroup),B=!0);D.show().animateWith(n,m,{path:e},a,p);D.attr({"stroke-dasharray":G,"stroke-width":u,stroke:ga(d),"stroke-linecap":ba,"stroke-linejoin":2<=u?ba:Pa}).shadow(q,w.lineShadowGroup);a&&J&&B&&(w.lineShadowGroup.hide(),z.line.attr({"clip-rect":b}).animateWith(n,m,{"clip-rect":C},a,p,A))},getDataLimits:function(){var a=this.config;return{max:a.max,min:a.min,xMax:a.xMax,xMin:a.xMin}}},v]);N("kagi",{standaloneInit:!0,friendlyName:"Kagi Chart",creditLabel:va,
defaultDatasetType:"kagi",applicableDSList:{kagi:!0},singleseries:!0,hasLegend:!1,_postSpaceManagement:function(){var a=this.config,c=this.components,d=c.xAxis&&c.xAxis[0],b=c.yAxis&&c.yAxis[0],e=c.canvas.config,f=e.canvasBorderWidth,g=e.canvasPadding||15,l=e.canvasPaddingTop,e=e.canvasPaddingBottom,k=this.jsonData.chart,q=(c=c.dataset[0].config)&&c.shiftCount,n=h(d.getAxisConfig("axisMinValue"),0),p=h(d.getAxisConfig("axisMaxValue"),q-1),m=this.config.canvasWidth;da(h(k.canvaspadding,0),m/2-10);
var k=h(k.maxhshiftpercent,10),m=m-2*g,r;b&&b.setAxisDimention({x:a.canvasLeft-f,y:a.canvasTop+l,opposite:a.canvasRight+f,axisLength:a.canvasHeight-l-e});this._setPosition();c&&(r=c.xShiftLength=da(m/q,(0>=k?10:k)*m/100),X(q-1,1),p=X(p,1));this._adjustCanvasPadding();d&&d.setAxisDimention({x:this.config.canvasLeft+g+r/2,axisLength:r*(p-n),y:a.canvasBottom+(a.shift||0)+f,opposite:a.canvasTop-f})},_setPosition:function(){var a,c,d,b,e,f,g;a=this.components;b=this.jsonData;var l=a.dataset[0],h=b.data||
l&&l[0]&&l[0].data,k=(l=l.components.data)&&l.length,n=a.yAxis[0],p=0,m=p,r=[];for(a=0;a<k;a++)c=l[a].config,d=c.setValue,(b=l[a])||(l[a]={graphics:{}}),c.isDefined||(d=c.plotValue),d=q(c.plotValue,d),c.plotY=Mb(n.getAxisPosition(c.setValue),2),c.graphY=Mb(n.getAxisPosition(d),2),c.plotX=m,c.isShift?(m=p+=1,h&&r.push(h[a])):a===k-1&&h&&r.push(h[a]),a&&(g=l[a-1].config,b=c&&c.objParams&&c.objParams.isRally,d=c&&c.objParams&&c.objParams.lastHigh,e=c&&c.objParams&&c.objParams.lastLow,f=c&&c.objParams&&
c.objParams.isRallyInitialised,g&&f&&g.isRally!==c.isRally?(c.isChanged=!0,c.ty=Mb(n.getAxisPosition(b?d:e),2)):c.isChanged=!1)},_setAxisLimits:function(){var a=this.components,c=a.dataset,d=a.yAxis,a=a.xAxis,b,e=c.length,f,g=-Infinity,l=Infinity,h=Infinity,k=-Infinity,q,p={},n=[],m=function(a){g=X(g,a.max);l=da(l,a.min);k=X(k,a.xMax||-Infinity);h=da(h,a.xMin||Infinity)};for(f=0;f<e;f++)b=c[f],(q=b.groupManager)?p[b.type]=q:n.push(b);for(q in p)c=p[q].getDataLimits(),m(c);e=n.length;for(f=0;f<e;f++)c=
n[f].getDataLimits(),m(c);m(this._getTrendLineMinMax("h"));-Infinity===g&&(g=0);Infinity===l&&(l=0);this.config.yMax=g;this.config.yMin=l;d[0].setAxisConfig({setAdaptiveMin:!0});d[0].setDataLimit(g,l);if(-Infinity!==k||Infinity!==h)a[0].config.xaxisrange={max:k,min:h},a[0].setDataLimit(k,h)}},N.waterfall2d,{},N.areabase);t.BoxAndWhiskerStatisticalCalc=xc=function(a,c,d){this.nf=c;this.dataSeparator=d;this.method=(a||z).toLowerCase().replace(/\s/g,G)};xc.prototype={setArray:function(a){var c=this.nf,
d=this.dataSeparator,b=0;!a&&(a=z);for(a=this.dataLength=(d=a.replace(/\s/g,z).split(d))&&d.length;a--;)b+=d[a]=c.getCleanValue(d[a]);d&&d.sort(function(a,b){return a-b});this.values=d;this.mean=b/this.dataLength;this.getFrequencies()},getQuartiles:function(){var a=this.values,c=this.dataLength,d=c%2,b,e;switch(this.method){case "tukey":d?(d=(c+3)/4,c=(3*c+1)/4):(d=(c+2)/4,c=(3*c+2)/4);break;case "mooremccabe":d?(d=(c+1)/4,c=3*d):(d=(c+2)/4,c=(3*c+2)/4);break;case "freundperles":d=(c+3)/4;c=(3*c+
1)/4;break;case "mendenhallsincich":d=qa((c+1)/4);c=qa(3*d);break;default:d=(c+1)/4,c=3*d}--d;--c;b=Cc(d);e=Cc(c);d=d-b?a[b]+(a[Gc(d)]-a[b])*(d-b):a[d];a=c-e?a[e]+(a[Gc(c)]-a[e])*(c-e):a[c];return this.quartiles={q1:d,q3:a}},getMinMax:function(){var a=this.values;return{min:a[0],max:a[this.dataLength-1]}},getMean:function(){return this.mean},getMD:function(){for(var a=this.mean,c=this.frequencies,d=c.length,b,e=0;d--;)b=c[d],e+=b.frequency*Ua(b.value-a);return e/this.dataLength},getSD:function(){for(var a=
this.mean,c=this.values,d=this.dataLength,b=d,e=0;d--;)e+=Qc(c[d]-a,2);return Pc(e)/b},getQD:function(){return.5*(this.quartiles.q3-this.quartiles.q1)},getFrequencies:function(){var a=[],c=this.dataLength,d=this.values,b=0,e,f,g;for(g=0;g<c;g+=1)b+=e=d[g],cb(a[g])?a[g].frequency+=1:(f={},f.value=e,f.frequency=1,a[g]=f);this.sum=b;this.frequencies=a},getMedian:function(){var a=this.dataLength,c=.5*a,d=this.values;return 0===a%2?(d[c]+d[c-1])/2:d[Cc(c)]}};xc.prototype.constructor=xc;nc&&nc({whiskerslimitswidthratio:{type:Za,
pAttr:"whiskerslimitswidthratio"},outliersupperrangeratio:{type:Za,pAttr:"outliersupperrangeratio"},outlierslowerrangeratio:{type:Za,pAttr:"outlierslowerrangeratio"},showalloutliers:{type:Za,pAttr:"showalloutliers"},showmean:{type:Za,pAttr:"showmean"},showsd:{type:Za,pAttr:"showsd"},showmd:{type:Za,pAttr:"showmd"},showqd:{type:Za,pAttr:"showqd"},showminvalues:{type:Za,pAttr:"showminvalues"},showmaxvalues:{type:Za,pAttr:"showmaxvalues"},showq1values:{type:Za,pAttr:"showq1values"},showq3values:{type:Za,
pAttr:"showq3values"},showmedianvalues:{type:Za,pAttr:"showmedianvalues"}});N("boxandwhisker2d",{friendlyName:"Box and Whisker Chart",standaloneInit:!0,creditLabel:va,chart:N.errorbar2d.chart,drawErrorValue:N.errorbar2d.drawErrorValue,decimals:2,maxColWidth:Infinity,useErrorAnimation:1,avoidCrispError:0,tooltipsepchar:": ",defaultDatasetType:"boxandwhisker2d",applicableDSList:{boxandwhisker2d:!0},hasSubDataset:!0,fireGroupEvent:!0,fireInitialAnimation:!0,_drawDataset:function(){var a=this.components.dataset,
c,d=a.length,b,e,f={};for(b=0;b<d;b++)c=a[b],e=c.groupManager,f[c.type]=e;for(e in f)f[e].draw();a.flag=!0;for(b=0;b<d;b++)for(a[b].components.mean&&a[b].components.mean.draw(),a[b].components.sd&&a[b].components.sd.draw(),a[b].components.md&&a[b].components.md.draw(),a[b].components.qd&&a[b].components.qd.draw(),e=a[b].config.maxNumberOfOutliers||a[b].components.outliers.length,c=0;c<e;c++)a[b].config.showOutliersLegend||(a[b].components.outliers[c].visible=!1),a[b].components.outliers&&a[b].components.outliers[c].draw()},
_createDatasets:function(){var a=this.components,c=a.xAxis[0],d=this.jsonData,b=d.dataset,e=b&&b.length,f,g,l,h=this.defaultDatasetType,k=this.applicableDSList,n=this.components.legend;f=n.components.items||[];var p,m,r,t,u=this.isStacked,v,w,z=[],A=this.isRealTime,C=this.config.catLen,B={};b||this.setChartMessage();this.config.categories=d.categories&&d.categories[0].category;d=a.dataset||(a.dataset=[]);g=d.length;n.emptyItems(0,f.length);for(f=0;f<e;f++)if(t=b[f],t.seriesname&&(t.seriesname=Y(t.seriesname)),
l=t.parentyaxis||G,m=(m=this.isDual&&l.toLowerCase()===eb?q(t.renderas,this.sDefaultDatasetType):q(t.renderas,h))&&m.toLowerCase(),k[m]||(m=h),r=FusionCharts.get("component",["dataset",m]))void 0===B[m]?B[m]=0:B[m]++,v="datasetGroup_"+m,l=FusionCharts.register("component",["datasetGroup",m]),(p=a[v])&&z.push(p),l&&!p&&(p=a[v]=new l,p.chart=this,p.init()),(l=d[f])?(m=c.getCategoryLen(),v=C-m,r=A?l.components:l.JSONData,w=r.data&&r.data.length||0,r=t.data&&t.data.length||0,w-=r,v>w||(v=w,m=r),0<v&&
l.removeData(m,v,!1),d[f].JSONData=t,d[f].configure(),d[f]._deleteGridImages&&d[f]._deleteGridImages()):(l=new r,d.push(l),l.chart=this,l.index=f,p&&(u?p.addDataSet(l,0,B[m]):p.addDataSet(l,B[m],0)),l.init(t));if(g>e){v=g-e;p&&u&&p.removeDataSet(0,f,v);a=f;for(e=v+f;a<e;a++)p&&!u&&p.removeDataSet(f,0,1),n.removeItem(d[a].legendItemId),ob.call(d[a]);d.splice(f,v)}this.config.catLen=c.getCategoryLen()}},N.mscartesian,{showplotborder:1,plotborderdashlen:5,plotborderdashgap:4,plotfillalpha:za,useroundedges:0,
plotborderthickness:1,showvalues:1,valuepadding:2,showtooltip:1,maxcolwidth:50,rotatevalues:0,use3dlighting:1,whiskerslimitswidthratio:40,outliersupperrangeratio:0,outlierslowerrangeratio:0,showalloutliers:0,showmean:0,showsd:0,showmd:0,showqd:0,showminvalues:1,showmaxvalues:1,showq1values:0,showq3values:0,showmedianvalues:1});FusionCharts.register("component",["dataset","boxandwhisker2d",{type:"boxandwhisker2d",configure:function(){var a=this.chart,c=this.config,d=this.JSONData,b=d.data,e=a.config.categories,
f=a.singleseries,g=a.config,l=da(e&&e.length,b&&b.length),k=a.jsonData.chart,n=a.components.colorManager,m=this.index||this.positionIndex,p,r=c.plotColor=n.getPlotColor(m),u=h(d.dashed,k.plotborderdashed),v=h(k.useplotgradientcolor,1),w,z=t.parseUnsafeString,A=z(k.yaxisname),C=z(k.xaxisname),B=z(q(k.tooltipsepchar,": ")),E=t.parseTooltext,K,N,D,J,O,F,L,I,T,Z,W,U,Y,Q,V,ca,ba,ka,M,qa,pa,R,wa,oa,na,xa,Fa,la,Ea,Ma,va,ea,Ca,Ga,Qa,Ka,Wa,$b,Ua,Na,Ja,Da,Ib=t.getDashStyle,Pb=this.components.data,ua=a.components.numberFormatter,
Ba,Ia,pb,lc,Nc,Oc,wb,db=0,sa=0,ya=t.BoxAndWhiskerStatisticalCalc,fc,La,$a,cb,Ya,Sa,Ab,qb,bb,Ta,Ra,lb,fa,Oa,Aa,Bb,Cb,rb,Xa,ra,xb,Pa,Za,ab,gc,yb,Gb,Fb=0,Va;this.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.__setDefaultConfig();oc(d,c,g,{data:!0});c.includeInLegend=h(d.includeinlegend,1);c.legendSymbolColor=c.plotColor;p=c.showplotborder;L=c.plotborderdashlen;I=c.plotborderdashgap;Y=c.plotfillalpha;Z=c.useroundedges;Q=c.ratio;T=c.plotborderthickness;rb=c.showvalues;
w=c.showtooltip;c.rotatevalues&&(c.rotatevalues=270);Xa=c.showalloutliers;c.plotfillAngle=U=h(360-k.plotfillangle,90);c.plotColor=r=q(d.color,r);c.plotRadius=h(k.useroundedges,Z?1:0);c.plotgradientcolor=V=t.getDefinedColor(k.plotgradientcolor,n.getColor("plotGradientColor"));!v&&(V=G);c.plotBorderAlpha=ca=p?q(k.plotborderalpha,Y,za):0;c.plotBorderColor=ba=q(k.plotbordercolor,n.getColor("plotBorderColor"));c.plotBorderDashStyle=ka=u?Ib(L,I,T):"none";c.showShadow=Z?h(k.showshadow,1):h(k.showshadow,
n.getColor("showShadow"));c.showHoverEffect=W=h(k.plothovereffect,k.showhovereffect,void 0);c.definedGroupPadding=X(h(k.plotspacepercent),0);c.plotSpacePercent=X(h(k.plotspacepercent,20)%100,0);c.parentYAxis=pb=q(d.parentyaxis&&d.parentyaxis.toLowerCase(),kb)===eb?1:0;c.dataSeparator=Dc;c.bwCalc=fc=new ya(void 0,ua,c.dataSeparator);c.textDirection="1"===k.hasrtltext?"rtl":G;c.showMeanLegend=c.showSDLegend=c.showMDLegend=c.showQDLegend=c.showOutliersLegend=0;!this.components.data&&(this.components.data=
[]);Pb=this.components.data;for(wb=0;wb<l;wb++)if(M=b&&b[wb],R=(pa=Pb[wb])&&pa.config,pa||(pa=Pb[wb]={graphics:{}}),pa.config||(R=Pb[wb].config={}),M.value){M.value&&(fc.setArray(M.value),La=fc.getQuartiles(),$a=La.q1,cb=La.q3,Ya=fc.getMinMax(),R.min=Sa=Ya.min,R.max=Ab=Ya.max,qb=fc.getMedian(),R.mean=bb=fc.getMean(),R.md=Ta=fc.getMD(),R.sd=Ra=fc.getSD(),R.qd=lb=fc.getQD());M.outliers&&(R.outliers=M.outliers.split(","),Fb=X(Fb,R.outliers.length));R.showMean=Pa=h(M.showmean,c.showmean);R.showSD=Za=
h(M.showsd,c.showsd);R.showMD=ab=h(M.showmd,c.showmd);R.showQD=gc=h(M.showqd,c.showqd);M.outliers&&(c.showOutliersLegend=1);Pa&&(c.showMeanLegend=1);Za&&(c.showSDLegend=1);ab&&(c.showMDLegend=1);gc&&(c.showQDLegend=1);R.upperQuartile={value:cb,color:aa(q(M.upperquartilecolor,d.upperquartilecolor,k.upperquartilecolor,k.plotbordercolor,n.getColor("plotBorderColor")),h(M.upperquartilealpha,d.upperquartilealpha,k.upperquartilealpha,k.plotborderalpha,100)),borderWidth:h(M.upperquartilethickness,d.upperquartilethickness,
k.upperquartilethickness,k.plotborderthickness,Z?0:1),displayValue:ua.dataLabels(cb)};R.lowerQuartile={value:$a,color:aa(q(M.lowerquartilecolor,d.lowerquartilecolor,k.lowerquartilecolor,k.plotbordercolor,n.getColor("plotBorderColor")),h(M.lowerquartilealpha,d.lowerquartilealpha,k.lowerquartilealpha,k.plotborderalpha,100)),borderWidth:h(M.lowerquartilethickness,d.lowerquartilethickness,k.lowerquartilethickness,k.plotborderthickness,Z?0:1),displayValue:ua.dataLabels($a)};R.upperBoxBorder={color:aa(q(M.upperboxbordercolor,
d.upperboxbordercolor,k.upperboxbordercolor,k.plotbordercolor,n.getColor("plotBorderColor")),h(M.upperboxborderalpha,d.upperboxborderalpha,k.upperboxborderalpha,k.plotborderalpha,100)),borderWidth:h(M.upperboxborderthickness,d.upperboxborderthickness,k.upperboxborderthickness,!Z&&k.plotborderthickness,Z?0:1)};R.lowerBoxBorder={color:aa(q(M.lowerboxbordercolor,d.lowerboxbordercolor,k.lowerboxbordercolor,k.plotbordercolor,n.getColor("plotBorderColor")),h(M.lowerboxborderalpha,d.lowerboxborderalpha,
k.lowerboxborderalpha,k.plotborderalpha,100)),borderWidth:h(M.lowerboxborderthickness,d.lowerboxborderthickness,k.lowerboxborderthickness,!Z&&k.plotborderthickness,Z?0:1)};R.median={value:qb,color:aa(q(M.mediancolor,d.mediancolor,k.mediancolor,k.plotbordercolor,n.getColor("plotBorderColor")),h(M.medianalpha,d.medianalpha,k.medianalpha,k.plotborderalpha,100)),borderWidth:h(M.medianthickness,d.medianthickness,k.medianthickness,k.plotborderthickness,1),displayValue:ua.dataLabels(qb)};c.upperBoxColor=
fa=q(M.upperboxcolor,d.upperboxcolor,k.upperboxcolor,n.getPlotColor(2*m));Oa=c.upperBoxAlpha=q(M.upperboxalpha,d.upperboxalpha,k.upperboxalpha,Y,za);c.lowerBoxColor=Aa=q(M.lowerboxcolor,d.lowerboxcolor,k.lowerboxcolor,n.getPlotColor(2*m+1));Bb=c.lowerBoxAlpha=q(M.lowerboxalpha,d.lowerboxalpha,k.lowerboxalpha,Y,za);R.upperColorArr=t.graphics.getColumnColor(fa,Oa,void 0,void 0,Z,ba,ca.toString(),0,!1);R.lowerColorArr=t.graphics.getColumnColor(Aa,Bb,void 0,void 0,Z,ba,ca.toString(),0,!1);R.showMinValues=
rb?h(M.showminvalues,c.showminvalues):0;R.showMaxValues=rb?h(M.showmaxvalues,c.showmaxvalues):0;R.showQ1Values=rb?h(M.showq1values,c.showq1values):0;R.showQ3Values=rb?h(M.showq3values,c.showq3values):0;R.showMedianValues=rb?h(M.showmedianvalues,c.showmedianvalues):0;R.upperWhiskerAlpha=Cb=Xb(q(M.upperwhiskeralpha,d.upperwhiskeralpha,k.upperwhiskeralpha,k.plotborderalpha,100));R.upperWhiskerColor=aa(Ha(q(M.upperwhiskercolor,d.upperwhiskercolor,k.upperwhiskercolor,k.plotbordercolor,n.getColor("plotBorderColor"))),
Cb);R.upperWhiskerThickness=h(M.upperwhiskerthickness,d.upperwhiskerthickness,k.upperwhiskerthickness,k.plotborderthickness,1);R.upperWhiskerShadowOpacity=c.showShadow?Cb/250:0;R.lowerWhiskerAlpha=xb=Xb(q(M.lowerwhiskeralpha,d.lowerwhiskeralpha,k.lowerwhiskeralpha,k.plotborderalpha,100));R.lowerWhiskerColor=aa(Ha(q(M.lowerwhiskercolor,d.lowerwhiskercolor,k.lowerwhiskercolor,k.plotbordercolor,n.getColor("plotBorderColor"))),xb);R.lowerWhiskerThickness=h(M.lowerwhiskerthickness,d.lowerwhiskerthickness,
k.lowerwhiskerthickness,k.plotborderthickness,1);R.lowerWhiskerShadowOpacity=c.showShadow?xb/250:0;R.showValue=h(M.showvalue,c.showvalues);R.setValue=qa=ua.getCleanValue(M.value);R.setLink=q(M.link);R.toolTipValue=Ba=ua.dataLabels(qa,pb);R.setDisplayValue=Ia=z(M.displayvalue);R.displayValue=q(Ia,Ba);lc=h(M.dashed);Nc=h(M.dashlen,L);Oc=I=h(M.dashgap,I);db=X(db,Ab);sa=da(sa,Sa);if(Xa&&M.outliers)for(Va=0;Va<R.outliers.length;Va++)db=X(db,R.outliers[Va]),sa=da(sa,R.outliers[Va]);R.plotBorderDashStyle=
1===lc?Ib(Nc,Oc,T):0===lc?"none":ka;f?(r=n.getPlotColor(wb),r=q(M.color,r),Q=q(M.ratio,c.ratio)):r=q(M.color,c.plotColor);Y=q(M.alpha,c.plotfillalpha);0>qa&&!Z&&(O=U,U=360-U);R.colorArr=t.graphics.getColumnColor(r+","+V,Y,Q,U,Z,ba,ca.toString(),0,!1);R.label=wa=H(z(q(e[wb].tooltext,e[wb].label)));0!==W&&(oa=q(M.upperboxhovercolor,d.upperboxhovercolor,k.upperboxhovercolor,fa),na=q(M.upperboxhoveralpha,d.upperboxhoveralpha,k.upperboxhoveralpha,Oa),xa=q(M.upperboxborderhovercolor,d.upperboxborderhovercolor,
k.upperboxborderhovercolor,M.upperboxbordercolor,d.upperboxbordercolor,k.upperboxbordercolor,k.plotbordercolor,n.getColor("plotBorderColor")),Fa=q(M.upperboxborderhoveralpha,d.upperboxborderhoveralpha,k.upperboxborderhoveralpha,M.upperboxborderalpha,d.upperboxborderalpha,k.upperboxborderalpha,k.plotborderalpha,100),la=Z?0:q(M.upperboxborderhoverthickness,d.upperboxborderhoverthickness,k.upperboxborderhoverthickness,R.upperBoxBorder.borderWidth),Ea=q(M.lowerboxhovercolor,d.lowerboxhovercolor,k.lowerboxhovercolor,
Aa),Ma=q(M.lowerboxhoveralpha,d.lowerboxhoveralpha,k.lowerboxhoveralpha,Bb),va=q(M.lowerboxborderhovercolor,d.lowerboxborderhovercolor,k.lowerboxborderhovercolor,M.lowerboxbordercolor,d.lowerboxbordercolor,k.lowerboxbordercolor,k.plotbordercolor,n.getColor("plotBorderColor")),ea=q(M.lowerboxborderhoveralpha,d.lowerboxborderhoveralpha,k.lowerboxborderhoveralpha,M.lowerboxborderalpha,d.lowerboxborderalpha,k.lowerboxborderalpha,k.plotborderalpha,100),Ca=Z?0:q(M.lowerboxborderhoverthickness,d.lowerboxborderhoverthickness,
k.lowerboxborderhoverthickness,R.lowerBoxBorder.borderWidth),Ga=q(M.upperquartilehovercolor,d.upperquartilehovercolor,k.upperquartilehovercolor,M.upperquartilecolor,d.upperquartilecolor,k.upperquartilecolor,k.plotbordercolor,n.getColor("plotBorderColor")),Qa=q(M.upperquartilehoveralpha,d.upperquartilehoveralpha,k.upperquartilehoveralpha,M.upperquartilealpha,d.upperquartilealpha,k.upperquartilealpha,k.plotborderalpha,100),Ka=q(M.upperquartilehoverthickness,d.upperquartilehoverthickness,k.upperquartilehoverthickness,
R.upperQuartile.borderWidth),Wa=q(M.lowerquartilehovercolor,d.lowerquartilehovercolor,k.lowerquartilehovercolor,M.lowerquartilecolor,d.lowerquartilecolor,k.lowerquartilecolor,k.plotbordercolor,n.getColor("plotBorderColor")),$b=q(M.lowerquartilehoveralpha,d.lowerquartilehoveralpha,k.lowerquartilehoveralpha,M.lowerquartilealpha,d.lowerquartilealpha,k.lowerquartilealpha,k.plotborderalpha,100),Ua=q(M.lowerquartilehoverthickness,d.lowerquartilehoverthickness,k.lowerquartilehoverthickness,R.lowerQuartile.borderWidth),
Na=q(M.medianhovercolor,d.medianhovercolor,k.medianhovercolor,M.mediancolor,d.mediancolor,k.mediancolor,k.plotbordercolor,n.getColor("plotBorderColor")),Ja=q(M.medianhoveralpha,d.medianhoveralpha,k.medianhoveralpha,M.medianalpha,d.medianalpha,k.medianalpha,k.plotborderalpha,100),Da=q(M.medianhoverthickness,d.medianhoverthickness,k.medianhoverthickness,R.median.borderWidth),1==W&&(fa===oa&&(oa=Ob(oa,70)),Aa===Ea&&(Ea=Ob(Ea,70))),R.upperBoxHoverColorArr=t.graphics.getColumnColor(oa,na,void 0,void 0,
Z,ba,ca.toString(),0,!1),R.lowerBoxHoverColorArr=t.graphics.getColumnColor(Ea,Ma,void 0,void 0,Z,ba,ca.toString(),0,!1),R.setUpperBoxRolloutAttr={fill:ga(R.upperColorArr[0])},R.setUpperBoxRolloverAttr={fill:ga(R.upperBoxHoverColorArr[0])},R.setLowerBoxRolloutAttr={fill:ga(R.lowerColorArr[0])},R.setLowerBoxRolloverAttr={fill:ga(R.lowerBoxHoverColorArr[0])},R.setUpperBoxBorderRolloverAttr={stroke:aa(xa,Fa),"stroke-width":la},R.setUpperBoxBorderRolloutAttr={stroke:R.upperBoxBorder.color,"stroke-width":R.upperBoxBorder.borderWidth},
R.setLowerBoxBorderRolloverAttr={stroke:aa(va,ea),"stroke-width":Ca},R.setLowerBoxBorderRolloutAttr={stroke:R.lowerBoxBorder.color,"stroke-width":R.lowerBoxBorder.borderWidth},R.setUpperQuartileRolloverAttr={stroke:aa(Ga,Qa),"stroke-width":Ka},R.setUpperQuartileRolloutAttr={stroke:R.upperQuartile.color,"stroke-width":R.upperQuartile.borderWidth},R.setLowerQuartileRolloverAttr={stroke:aa(Wa,$b),"stroke-width":Ua},R.setLowerQuartileRolloutAttr={stroke:R.lowerQuartile.color,"stroke-width":R.lowerQuartile.borderWidth},
R.setMedianRolloverAttr={stroke:aa(Na,Ja),"stroke-width":Da},R.setMedianRolloutAttr={stroke:R.median.color,"stroke-width":R.median.borderWidth});K=R.toolTipValue;D=H(z(q(M.tooltext,d.plottooltext,k.plottooltext)));w?null===K?F=!1:void 0!==D?(J=[1,2,3,4,5,6,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],N={maxValue:Ab,maxDataValue:ua.dataLabels(Ab),minValue:Sa,minDataValue:ua.dataLabels(Sa),Q1:ua.dataLabels($a),unformattedQ1:$a,Q3:ua.dataLabels(cb),unformattedQ3:cb,median:ua.dataLabels(qb),
unformattedMedian:qb,SD:ua.dataLabels(Ra),unformattedsd:Ra,QD:ua.dataLabels(lb),unformattedQD:lb,MD:ua.dataLabels(Ta),unformattedMD:Ta,mean:ua.dataLabels(bb),unformattedMean:bb,label:wa,yaxisName:A,xaxisName:C,formattedValue:K,value:wa},F=E(D,J,N,M,k,d)):F="<b>Maximum"+B+"</b>"+ua.dataLabels(Ab)+"<br /><b>Q3"+B+"</b>"+ua.dataLabels(cb)+"<br /><b>Median"+B+"</b>"+ua.dataLabels(qb)+"<br /><b>Q1"+B+"</b>"+ua.dataLabels($a)+"<br /><b>Minimum"+B+"</b>"+ua.dataLabels(Sa):F=!1;R.toolText=F;R.setTooltext=
F;O&&(U=O)}c.maxNumberOfOutliers=Fb;c.maxValue=db;c.minValue=sa;Xa||(ra=db-sa,c.maxValue+=c.outliersupperrangeratio*ra,c.minValue-=c.outlierslowerrangeratio*ra);!1!==a.hasLegend&&this._addLegend();this.subDS=0;this.components.mean=this._createSubDS(0,"Mean");c.showMeanLegend&&this._addLegendSubDS(this.components.mean);c.showMeanLegend&&(this.subDS+=1);this.components.sd=this._createSubDS(1,"SD");c.showSDLegend&&this._addLegendSubDS(this.components.sd);c.showSDLegend&&(this.subDS+=1);this.components.md=
this._createSubDS(2,"MD");c.showMDLegend&&this._addLegendSubDS(this.components.md);c.showMDLegend&&(this.subDS+=1);this.components.qd=this._createSubDS(3,"QD");c.showQDLegend&&this._addLegendSubDS(this.components.qd);c.showQDLegend&&(this.subDS+=1);!this.components.outliers&&(this.components.outliers=[]);Gb=this.config.maxNumberOfOutliers||this.components.outliers.length;for(wb=0;wb<Gb;wb++)yb=this._createSubDS(4+wb,"Outliers",wb),this.components.outliers[wb]=yb;c.showOutliersLegend&&this._addLegendOutliers(this.components.outliers);
c.showOutliersLegend&&(this.subDS+=1)},_createSubDS:function(a,c,d){var b=this.chart,e=b.jsonData.dataset,f=e&&e.length,g=this.components,l,h,e=b.components.legend,k={},g=g.dataset||(g.dataset=[]),f=f*(a+1)+this.index;if(g[a])h=g[a],h.index=f,b=W({},this.JSONData),h.JSONData=b;else if(l=FusionCharts.get("component",["dataset","subDS"]))void 0===k.subDS?k.subDS=0:k.subDS++,h=new l,h.chart=b,h.index=f,g.push(h),b=W({},this.JSONData),this.initSubDataset(b,h),h.name=c;switch(a){case 0:this.configureMean(h);
!this.config.showMeanLegend&&e.removeItem(h.legendItemId);break;case 1:this.configureSD(h);!this.config.showQDLegend&&e.removeItem(h.legendItemId);break;case 2:this.configureMD(h);!this.config.showMDLegend&&e.removeItem(h.legendItemId);break;case 3:this.configureQD(h);!this.config.showQDLegend&&e.removeItem(h.legendItemId);break;default:this.configureOutliers(h,d),!this.config.showOutliersLegend&&e.removeItem(this.components.outliers.legendItemId)}return h},configureMean:function(a){var c=a.chart,
d=c.components,b=t.parseUnsafeString,e=a.config,f=a.JSONData,g=c.jsonData.chart,l=d.colorManager,k=a.index||a.stackIndex,n=a.type,m=!c.singleseries||H(g.palettecolors)?l.getPlotColor(k):l.getColor(u).split(/\s*\,\s*/)[0],k=f.data,p,r=c.config.categories,r=da(r&&r.length,k&&k.length),w=d.numberFormatter,z=c.use3dlineshift,A,C=-Infinity,B=Infinity,G,E,ha=q(g.tooltipsepchar,": "),K=h(f.dashed,g.linedashed);E=c.isStacked;p=c.hasLineSet;d=d.xAxis[0];a.visible=1===h(a.JSONData.visible,!Number(a.JSONData.initiallyhidden),
1);e.use3dlineshift=void 0!==z?h(g.use3dlineshift,z):1;e.plotColor=m;e.legendSymbolColor=e.plotColor;c=h(c.defaultPlotShadow,l.getColor("showShadow"));e.drawFullAreaBorder=h(g.drawfullareaborder,1);e.parentYAxis=p?G=1:G=q(f.parentyaxis&&f.parentyaxis.toLowerCase(),kb)===eb?1:0;e.connectNullData=h(g.connectnulldata,0);e.enableAnimation=l=h(g.animation,g.defaultanimation,1);e.animation=l?{duration:1E3*h(g.animationduration,1)}:!1;e.transposeanimation=h(g.transposeanimation,l);e.transposeanimduration=
1E3*h(g.transposeanimduration,.2);e.showValues=0;e.valuePadding=h(g.valuepadding,2);e.valuePosition=q(f.valueposition,g.valueposition,"auto");e.stack100Percent=l=h(g.stack100percent,0);e.showPercentValues=h(g.showpercentvalues,E&&l?1:0);e.showPercentInToolTip=h(g.showpercentintooltip,E&&l?1:0);e.showTooltip=h(g.showtooltip,1);e.seriesNameInTooltip=h(g.seriesnameintooltip,1);e.showHoverEffect=h(g.plothovereffect,g.anchorhovereffect,g.showhovereffect,void 0);e.rotateValues=h(g.rotatevalues)?270:0;e.linethickness=
h(f.linethickness,g.linethickness,1);e.lineDashLen=h(f.linedashlen,g.linedashlen,5);e.lineDashGap=h(f.linedashgap,g.linedashgap,4);e.drawLine=e.alpha=h(g.drawmeanconnector,f.drawmeanconnector,0)&&100;E=t.getDashStyle(e.lineDashLen,e.lineDashGap,e.linethickness);e.lineDashStyle=K?E:"none";e.shadow={opacity:h(g.showshadow,c)?n===v?e.alpha/100:e.plotBorderAlpha/100:0};e.drawAnchors=h(f.drawanchors,f.showanchors,g.drawanchors,g.showanchors);e.anchorBgColor=q(f.meaniconcolor,g.meaniconcolor,oa);e.anchorBorderColor=
oa;e.anchorRadius=h(f.meaniconradius,g.meaniconradius,5);e.anchorAlpha=q(f.alpha,f.meaniconalpha,g.meaniconalpha);e.anchorBgAlpha=q(f.meaniconalpha,g.meaniconalpha,100);e.anchorBorderThickness=q(f.anchorborderthickness,g.anchorborderthickness,1);e.anchorSides=q(f.meaniconsides,g.meaniconsides,3);e.linecolor=e.anchorBgColor;e.minimizeTendency=h(g.minimizetendency,g.minimisetendency,0);e.anchorImageUrl=q(f.anchorimageurl,g.anchorimageurl);e.anchorImageAlpha=h(f.anchorimagealpha,g.anchorimagealpha,100);
e.anchorImageScale=h(f.anchorimagescale,g.anchorimagescale,100);e.anchorImagePadding=h(f.anchorimagepadding,g.anchorimagepadding,1);e.anchorStartAngle=h(f.anchorstartangle,g.anchorstartangle,90);e.anchorShadow=h(f.anchorshadow,g.anchorshadow,0);!a.components.data&&(a.components.data=[]);c=a.components.data;for(m=0;m<r;m++)p=k&&k[m],n=c[m]=c[m]||{},n.config=n.config||{},l=n.config,z=this.components.data[m].config,p.value=z.showMean?z.mean:null,l.x=this.components.data[m]._xPos,l.setValue=z=w.getCleanValue(p.value),
l.setLink=q(p.link),l.anchorProps=this._parseAnchorProperties(m,a,"mean"),A=d.getLabel(m),l.label=t.getValidValue(b(q(A.tooltext,A.label,A.name))),l.showValue=0,l.dashed=h(p.dashed,K),l.color=q(p.color,e.lineColor),l.alpha=q(p.alpha,p.alpha,e.alpha),C=X(C,z),B=da(B,z),l.dashStyle=l.dashed?E:"none",l.toolTipValue=z=w.dataLabels(z,G),l.setDisplayValue=A=b(p.displayvalue),l.displayValue=q(A,z),l.formatedVal=l.toolTipValue,l.setTooltext=t.getValidValue(b(q(p.tooltext,f.plottooltext,g.plottooltext))),
p=q(p.meaniconshape,f.meaniconshape,g.meaniconshape,"polygon"),e.dip=l.dip="polygon"===p?0:"spoke"===p?1:0,p=e.showTooltip?"<b>Mean"+ha+"</b>":!1,l.toolText=p,l.setTooltext=p,n?n.graphics||(c[m].graphics={}):c[m]={graphics:{}},l.hoverEffects={enabled:!1};e.maxValue=C;e.minValue=B},configureSD:function(a){var c=a.chart,d=c.components,b=t.parseUnsafeString,e=a.config,f=a.JSONData,g=c.jsonData.chart,l=d.colorManager,k=a.index||a.stackIndex,n=a.type,m=!c.singleseries||H(g.palettecolors)?l.getPlotColor(k):
l.getColor(u).split(/\s*\,\s*/)[0],k=f.data,p,r=c.config.categories,r=da(r&&r.length,k&&k.length),w=d.numberFormatter,z=c.use3dlineshift,A,C=-Infinity,B=Infinity,G,E,K=q(g.tooltipsepchar,": "),N=h(f.dashed,g.linedashed);E=c.isStacked;p=c.hasLineSet;d=d.xAxis[0];a.visible=1===h(a.JSONData.visible,!Number(a.JSONData.initiallyhidden),1);e.use3dlineshift=void 0!==z?h(g.use3dlineshift,z):1;e.plotColor=m;e.legendSymbolColor=e.plotColor;c=h(c.defaultPlotShadow,l.getColor("showShadow"));e.drawFullAreaBorder=
h(g.drawfullareaborder,1);e.parentYAxis=p?G=1:G=q(f.parentyaxis&&f.parentyaxis.toLowerCase(),kb)===eb?1:0;e.connectNullData=h(g.connectnulldata,0);e.enableAnimation=l=h(g.animation,g.defaultanimation,1);e.animation=l?{duration:1E3*h(g.animationduration,1)}:!1;e.transposeanimation=h(g.transposeanimation,l);e.transposeanimduration=1E3*h(g.transposeanimduration,.2);e.showValues=0;e.valuePadding=h(g.valuepadding,2);e.valuePosition=q(f.valueposition,g.valueposition,"auto");e.stack100Percent=l=h(g.stack100percent,
0);e.showPercentValues=h(g.showpercentvalues,E&&l?1:0);e.showPercentInToolTip=h(g.showpercentintooltip,E&&l?1:0);e.showTooltip=h(g.showtooltip,1);e.seriesNameInTooltip=h(g.seriesnameintooltip,1);e.showHoverEffect=h(g.plothovereffect,g.anchorhovereffect,g.showhovereffect,void 0);e.rotateValues=h(g.rotatevalues)?270:0;e.linethickness=h(f.linethickness,g.linethickness,1);e.lineDashLen=h(f.linedashlen,g.linedashlen,5);e.lineDashGap=h(f.linedashgap,g.linedashgap,4);e.drawLine=e.alpha=h(g.drawsdconnector,
f.drawsdconnector,0)&&100;E=t.getDashStyle(e.lineDashLen,e.lineDashGap,e.linethickness);e.lineDashStyle=N?E:"none";e.shadow={opacity:h(g.showshadow,c)?n===v?e.alpha/100:e.plotBorderAlpha/100:0};e.drawAnchors=h(f.drawanchors,f.showanchors,g.drawanchors,g.showanchors);e.anchorBgColor=q(f.sdiconcolor,g.sdiconcolor,oa);e.anchorBorderColor=oa;e.anchorRadius=h(f.sdiconradius,g.sdiconradius,5);e.anchorAlpha=q(f.alpha,f.sdiconalpha,g.sdiconalpha);e.anchorBgAlpha=q(f.sdiconalpha,g.sdiconalpha,100);e.anchorBorderThickness=
q(f.anchorborderthickness,g.anchorborderthickness,1);e.anchorSides=q(f.sdiconsides,g.sdiconsides,3);e.linecolor=e.anchorBgColor;e.minimizeTendency=h(g.minimizetendency,g.minimisetendency,0);e.anchorImageUrl=q(f.anchorimageurl,g.anchorimageurl);e.anchorImageAlpha=h(f.anchorimagealpha,g.anchorimagealpha,100);e.anchorImageScale=h(f.anchorimagescale,g.anchorimagescale,100);e.anchorImagePadding=h(f.anchorimagepadding,g.anchorimagepadding,1);e.anchorStartAngle=h(f.anchorstartangle,g.anchorstartangle,90);
e.anchorShadow=h(f.anchorshadow,g.anchorshadow,0);!a.components.data&&(a.components.data=[]);c=a.components.data;for(m=0;m<r;m++)p=k&&k[m],n=c[m]=c[m]||{},n.config=n.config||{},l=n.config,z=this.components.data[m].config,p.value=z.showSD?z.sd:null,l.x=this.components.data[m]._xPos,l.setValue=z=w.getCleanValue(p.value),l.setLink=q(p.link),l.anchorProps=this._parseAnchorProperties(m,a,"sd"),A=d.getLabel(m),l.label=t.getValidValue(b(q(A.tooltext,A.label,A.name))),l.showValue=0,l.dashed=h(p.dashed,N),
l.color=q(p.color,e.lineColor),l.alpha=q(p.alpha,p.alpha,e.alpha),C=X(C,z),B=da(B,z),l.dashStyle=l.dashed?E:"none",l.toolTipValue=z=w.dataLabels(z,G),l.setDisplayValue=A=b(p.displayvalue),l.displayValue=q(A,z),l.formatedVal=z=l.toolTipValue,l.setTooltext=t.getValidValue(b(q(p.tooltext,f.plottooltext,g.plottooltext))),p=q(p.sdiconshape,f.sdiconshape,g.sdiconshape,"polygon"),e.dip=l.dip="polygon"===p?0:"spoke"===p?1:0,p=e.showTooltip?null===z?!1:"<b>SD"+K+"</b>":!1,l.toolText=p,l.setTooltext=p,n?n.graphics||
(c[m].graphics={}):c[m]={graphics:{}},l.hoverEffects={enabled:!1};e.maxValue=C;e.minValue=B},configureMD:function(a){var c=a.chart,d=c.components,b=t.parseUnsafeString,e=a.config,f=a.JSONData,g=c.jsonData.chart,l=d.colorManager,k=a.index||a.stackIndex,n=a.type,m=!c.singleseries||H(g.palettecolors)?l.getPlotColor(k):l.getColor(u).split(/\s*\,\s*/)[0],k=f.data,p,r=c.config.categories,r=da(r&&r.length,k&&k.length),w=d.numberFormatter,z=c.use3dlineshift,A,C=-Infinity,B=Infinity,G,E,K=q(g.tooltipsepchar,
": "),N=h(f.dashed,g.linedashed);E=c.isStacked;p=c.hasLineSet;d=d.xAxis[0];a.visible=1===h(a.JSONData.visible,!Number(a.JSONData.initiallyhidden),1);e.use3dlineshift=void 0!==z?h(g.use3dlineshift,z):1;e.plotColor=m;e.legendSymbolColor=e.plotColor;c=h(c.defaultPlotShadow,l.getColor("showShadow"));e.drawFullAreaBorder=h(g.drawfullareaborder,1);e.parentYAxis=p?G=1:G=q(f.parentyaxis&&f.parentyaxis.toLowerCase(),kb)===eb?1:0;e.connectNullData=h(g.connectnulldata,0);e.enableAnimation=l=h(g.animation,g.defaultanimation,
1);e.animation=l?{duration:1E3*h(g.animationduration,1)}:!1;e.transposeanimation=h(g.transposeanimation,l);e.transposeanimduration=1E3*h(g.transposeanimduration,.2);e.showValues=0;e.valuePadding=h(g.valuepadding,2);e.valuePosition=q(f.valueposition,g.valueposition,"auto");e.stack100Percent=l=h(g.stack100percent,0);e.showPercentValues=h(g.showpercentvalues,E&&l?1:0);e.showPercentInToolTip=h(g.showpercentintooltip,E&&l?1:0);e.showTooltip=h(g.showtooltip,1);e.seriesNameInTooltip=h(g.seriesnameintooltip,
1);e.showHoverEffect=h(g.plothovereffect,g.anchorhovereffect,g.showhovereffect,void 0);e.rotateValues=h(g.rotatevalues)?270:0;e.linethickness=h(f.linethickness,g.linethickness,1);e.lineDashLen=h(f.linedashlen,g.linedashlen,5);e.lineDashGap=h(f.linedashgap,g.linedashgap,4);e.drawLine=e.alpha=h(g.drawmdconnector,f.drawmdconnector,0)&&100;E=t.getDashStyle(e.lineDashLen,e.lineDashGap,e.linethickness);e.lineDashStyle=N?E:"none";e.shadow={opacity:h(g.showshadow,c)?n===v?e.alpha/100:e.plotBorderAlpha/100:
0};e.drawAnchors=h(f.drawanchors,f.showanchors,g.drawanchors,g.showanchors);e.anchorBgColor=q(f.mdiconcolor,g.mdiconcolor,oa);e.anchorBorderColor=oa;e.anchorRadius=h(f.mdiconradius,g.mdiconradius,5);e.anchorAlpha=q(f.alpha,f.mdiconalpha,g.mdiconalpha);e.anchorBgAlpha=q(f.mdiconalpha,g.mdiconalpha,100);e.anchorBorderThickness=q(f.anchorborderthickness,g.anchorborderthickness,1);e.anchorSides=q(f.mdiconsides,g.mdiconsides,3);e.linecolor=e.anchorBgColor;e.minimizeTendency=h(g.minimizetendency,g.minimisetendency,
0);e.anchorImageUrl=q(f.anchorimageurl,g.anchorimageurl);e.anchorImageAlpha=h(f.anchorimagealpha,g.anchorimagealpha,100);e.anchorImageScale=h(f.anchorimagescale,g.anchorimagescale,100);e.anchorImagePadding=h(f.anchorimagepadding,g.anchorimagepadding,1);e.anchorStartAngle=h(f.anchorstartangle,g.anchorstartangle,90);e.anchorShadow=h(f.anchorshadow,g.anchorshadow,0);!a.components.data&&(a.components.data=[]);c=a.components.data;for(m=0;m<r;m++)p=k&&k[m],n=c[m]=c[m]||{},n.config=n.config||{},l=n.config,
z=this.components.data[m].config,p.value=z.showMD?z.md:null,l.x=this.components.data[m]._xPos,l.setValue=z=w.getCleanValue(p.value),l.setLink=q(p.link),l.anchorProps=this._parseAnchorProperties(m,a,"md"),A=d.getLabel(m),l.label=t.getValidValue(b(q(A.tooltext,A.label,A.name))),l.showValue=0,l.dashed=h(p.dashed,N),l.color=q(p.color,e.lineColor),l.alpha=q(p.alpha,p.alpha,e.alpha),C=X(C,z),B=da(B,z),l.dashStyle=l.dashed?E:"none",l.toolTipValue=z=w.dataLabels(z,G),l.setDisplayValue=A=b(p.displayvalue),
l.displayValue=q(A,z),l.formatedVal=l.toolTipValue,l.setTooltext=t.getValidValue(b(q(p.tooltext,f.plottooltext,g.plottooltext))),p=q(p.mdiconshape,f.mdiconshape,g.mdiconshape,"polygon"),e.dip=l.dip="polygon"===p?0:"spoke"===p?1:0,p=e.showTooltip?"<b>MD"+K+"</b>":!1,l.toolText=p,l.setTooltext=p,n?n.graphics||(c[m].graphics={}):c[m]={graphics:{}},l.hoverEffects={enabled:!1};e.maxValue=C;e.minValue=B},configureQD:function(a){var c=a.chart,d=c.components,b=t.parseUnsafeString,e=a.config,f=a.JSONData,
g=c.jsonData.chart,l=d.colorManager,k=a.index||a.stackIndex,n=a.type,m=!c.singleseries||H(g.palettecolors)?l.getPlotColor(k):l.getColor(u).split(/\s*\,\s*/)[0],k=f.data,p,r=c.config.categories,r=da(r&&r.length,k&&k.length),w=d.numberFormatter,z=c.use3dlineshift,A,C=-Infinity,B=Infinity,E,G,K=q(g.tooltipsepchar,": "),N=h(f.dashed,g.linedashed);G=c.isStacked;p=c.hasLineSet;d=d.xAxis[0];a.visible=1===h(a.JSONData.visible,!Number(a.JSONData.initiallyhidden),1);e.use3dlineshift=void 0!==z?h(g.use3dlineshift,
z):1;e.plotColor=m;e.legendSymbolColor=e.plotColor;c=h(c.defaultPlotShadow,l.getColor("showShadow"));e.drawFullAreaBorder=h(g.drawfullareaborder,1);e.parentYAxis=p?E=1:E=q(f.parentyaxis&&f.parentyaxis.toLowerCase(),kb)===eb?1:0;e.connectNullData=h(g.connectnulldata,0);e.enableAnimation=l=h(g.animation,g.defaultanimation,1);e.animation=l?{duration:1E3*h(g.animationduration,1)}:!1;e.transposeanimation=h(g.transposeanimation,l);e.transposeanimduration=1E3*h(g.transposeanimduration,.2);e.showValues=0;
e.valuePadding=h(g.valuepadding,2);e.valuePosition=q(f.valueposition,g.valueposition,"auto");e.stack100Percent=l=h(g.stack100percent,0);e.showPercentValues=h(g.showpercentvalues,G&&l?1:0);e.showPercentInToolTip=h(g.showpercentintooltip,G&&l?1:0);e.showTooltip=h(g.showtooltip,1);e.seriesNameInTooltip=h(g.seriesnameintooltip,1);e.showHoverEffect=h(g.plothovereffect,g.anchorhovereffect,g.showhovereffect,void 0);e.rotateValues=h(g.rotatevalues)?270:0;e.linethickness=h(f.linethickness,g.linethickness,
1);e.lineDashLen=h(f.linedashlen,g.linedashlen,5);e.lineDashGap=h(f.linedashgap,g.linedashgap,4);e.drawLine=e.alpha=h(g.drawqdconnector,f.drawqdconnector,0)&&100;G=t.getDashStyle(e.lineDashLen,e.lineDashGap,e.linethickness);e.lineDashStyle=N?G:"none";e.shadow={opacity:h(g.showshadow,c)?n===v?e.alpha/100:e.plotBorderAlpha/100:0};e.drawAnchors=h(f.drawanchors,f.showanchors,g.drawanchors,g.showanchors);e.anchorBgColor=q(f.qdiconcolor,g.qdiconcolor,oa);e.anchorBorderColor=oa;e.anchorRadius=h(f.qdiconradius,
g.qdiconradius,5);e.anchorAlpha=q(f.alpha,f.qdiconalpha,g.qdiconalpha);e.anchorBgAlpha=q(f.qdiconalpha,g.qdiconalpha,100);e.anchorBorderThickness=q(f.anchorborderthickness,g.anchorborderthickness,1);e.anchorSides=q(f.qdiconsides,g.qdiconsides,3);e.linecolor=e.anchorBgColor;e.minimizeTendency=h(g.minimizetendency,g.minimisetendency,0);e.anchorImageUrl=q(f.anchorimageurl,g.anchorimageurl);e.anchorImageAlpha=h(f.anchorimagealpha,g.anchorimagealpha,100);e.anchorImageScale=h(f.anchorimagescale,g.anchorimagescale,
100);e.anchorImagePadding=h(f.anchorimagepadding,g.anchorimagepadding,1);e.anchorStartAngle=h(f.anchorstartangle,g.anchorstartangle,90);e.anchorShadow=h(f.anchorshadow,g.anchorshadow,0);!a.components.data&&(a.components.data=[]);c=a.components.data;for(m=0;m<r;m++)p=k&&k[m],n=c[m]=c[m]||{},n.config=n.config||{},l=n.config,z=this.components.data[m].config,p.value=z.showQD?z.qd:null,l.x=this.components.data[m]._xPos,l.setValue=z=w.getCleanValue(p.value),l.setLink=q(p.link),l.anchorProps=this._parseAnchorProperties(m,
a,"qd"),A=d.getLabel(m),l.label=t.getValidValue(b(q(A.tooltext,A.label,A.name))),l.showValue=0,l.dashed=h(p.dashed,N),l.color=q(p.color,e.lineColor),l.alpha=q(p.alpha,p.alpha,e.alpha),C=X(C,z),B=da(B,z),l.dashStyle=l.dashed?G:"none",l.toolTipValue=z=w.dataLabels(z,E),l.setDisplayValue=A=b(p.displayvalue),l.displayValue=q(A,z),l.formatedVal=z=l.toolTipValue,l.setTooltext=t.getValidValue(b(q(p.tooltext,f.plottooltext,g.plottooltext))),p=q(p.qdiconshape,f.qdiconshape,g.qdiconshape,"polygon"),e.dip=l.dip=
"polygon"===p?0:"spoke"===p?1:0,p=e.showTooltip?null===z?!1:"<b>QD"+K+"</b>":!1,l.toolText=p,l.setTooltext=p,n?n.graphics||(c[m].graphics={}):c[m]={graphics:{}},l.hoverEffects={enabled:!1};e.maxValue=C;e.minValue=B},configureOutliers:function(a,c){var d=a.chart,b=d.components,e=t.parseUnsafeString,f=a.config,g=a.JSONData,l=d.jsonData.chart,k=b.colorManager,n=a.index||a.stackIndex,m=a.type,p=!d.singleseries||H(l.palettecolors)?k.getPlotColor(n):k.getColor(u).split(/\s*\,\s*/)[0],n=g.data,r,w=d.config.categories,
w=da(w&&w.length,n&&n.length),z=b.numberFormatter,A=d.use3dlineshift,C,B=-Infinity,G=Infinity,E,K,N=q(l.tooltipsepchar,": "),O=h(g.dashed,l.linedashed);K=d.isStacked;r=d.hasLineSet;b=b.xAxis[0];a.visible=1===h(a.JSONData.visible,!Number(a.JSONData.initiallyhidden),1);f.use3dlineshift=void 0!==A?h(l.use3dlineshift,A):1;f.plotColor=p;f.legendSymbolColor=f.plotColor;d=h(d.defaultPlotShadow,k.getColor("showShadow"));f.drawFullAreaBorder=h(l.drawfullareaborder,1);f.parentYAxis=r?E=1:E=q(g.parentyaxis&&
g.parentyaxis.toLowerCase(),kb)===eb?1:0;f.connectNullData=h(l.connectnulldata,0);f.enableAnimation=k=h(l.animation,l.defaultanimation,1);f.animation=k?{duration:1E3*h(l.animationduration,1)}:!1;f.transposeanimation=h(l.transposeanimation,k);f.transposeanimduration=1E3*h(l.transposeanimduration,.2);f.showValues=0;f.valuePadding=h(l.valuepadding,2);f.valuePosition=q(g.valueposition,l.valueposition,"auto");f.stack100Percent=k=h(l.stack100percent,0);f.showPercentValues=h(l.showpercentvalues,K&&k?1:0);
f.showPercentInToolTip=h(l.showpercentintooltip,K&&k?1:0);f.showTooltip=h(l.showtooltip,1);f.seriesNameInTooltip=h(l.seriesnameintooltip,1);f.showHoverEffect=h(l.plothovereffect,l.anchorhovereffect,l.showhovereffect,void 0);f.rotateValues=h(l.rotatevalues)?270:0;f.linethickness=h(g.linethickness,l.linethickness,1);f.lineDashLen=h(g.linedashlen,l.linedashlen,5);f.lineDashGap=h(g.linedashgap,l.linedashgap,4);f.alpha=0;K=t.getDashStyle(f.lineDashLen,f.lineDashGap,f.linethickness);f.lineDashStyle=O?K:
"none";f.shadow={opacity:h(l.showshadow,d)?m===v?f.alpha/100:f.plotBorderAlpha/100:0};f.drawAnchors=h(g.drawanchors,g.showanchors,l.drawanchors,l.showanchors);f.anchorBgColor=q(g.outliericoncolor,l.outliericoncolor,oa);f.anchorBorderColor=oa;f.anchorRadius=h(g.outliericonradius,l.outliericonradius,5);f.anchorAlpha=q(g.alpha,g.outliericonalpha,l.outliericonalpha);f.anchorBgAlpha=q(g.outliericonalpha,l.outliericonalpha,100);f.anchorBorderThickness=q(g.anchorborderthickness,l.anchorborderthickness,1);
f.anchorSides=q(g.outliericonsides,l.outliericonsides,3);f.linecolor=f.anchorBgColor;f.minimizeTendency=h(l.minimizetendency,l.minimisetendency,0);f.anchorImageUrl=q(g.anchorimageurl,l.anchorimageurl);f.anchorImageAlpha=h(g.anchorimagealpha,l.anchorimagealpha,100);f.anchorImageScale=h(g.anchorimagescale,l.anchorimagescale,100);f.anchorImagePadding=h(g.anchorimagepadding,l.anchorimagepadding,1);f.anchorStartAngle=h(g.anchorstartangle,l.anchorstartangle,90);f.anchorShadow=h(g.anchorshadow,l.anchorshadow,
0);!a.components.data&&(a.components.data=[]);d=a.components.data;for(p=0;p<w;p++)r=n&&n[p],m=d[p]=d[p]||{},m.config=m.config||{},k=m.config,C=this.components.data[p].config,r.value=C.outliers?C.outliers[c]:null,k.x=this.components.data[p]._xPos,k.setValue=A=z.getCleanValue(r.value),A>=C.min&&A<=C.max&&(k.setValue=r.value=null),k.setLink=q(r.link),k.anchorProps=this._parseAnchorProperties(p,a,"outlier"),C=b.getLabel(p),k.label=t.getValidValue(e(q(C.tooltext,C.label,C.name))),k.showValue=0,k.dashed=
h(r.dashed,O),k.color=q(r.color,f.lineColor),k.alpha=q(r.alpha,r.alpha,f.alpha),B=X(B,A),G=da(G,A),k.dashStyle=k.dashed?K:"none",k.toolTipValue=A=z.dataLabels(A,E),k.setDisplayValue=C=e(r.displayvalue),k.displayValue=q(C,A),k.formatedVal=A=k.toolTipValue,k.setTooltext=t.getValidValue(e(q(r.tooltext,g.plottooltext,l.plottooltext))),r=q(r.outliericonshape,g.outliericonshape,l.outliericonshape,"polygon"),f.dip=k.dip="polygon"===r?0:"spoke"===r?1:0,r=f.showTooltip?null===A?!1:"<b>Outlier"+N+"</b>":!1,
k.toolText=r,k.setTooltext=r,m?m.graphics||(d[p].graphics={}):d[p]={graphics:{}},k.hoverEffects={enabled:!1};f.maxValue=B;f.minValue=G},initSubDataset:function(a,c){var d=c.chart,b=d.components,e=d.hasLineSet,e=a.parentyaxis&&a.parentyaxis.toLowerCase()===eb||e?1:0;c.chart=d;c.yAxis=b.yAxis[e];c.components={};c.graphics={};c.JSONData=a},_parseAnchorProperties:function(a,c,d){var b=c.config,e="area"===c.type?0:1,f=c.JSONData,g=c.chart.jsonData.chart;a=f.data[a];c={};var l=t.graphics.mapSymbolName,
f=void 0!==q(a.anchorstartangle,f.anchorstartangle,g.anchorstartangle,a.anchorimagealpha,f.anchorimagealpha,g.anchorimagealpha,a.anchorimagescale,f.anchorimagescale,g.anchorimagescale,a.anchorimagepadding,f.anchorimagepadding,g.anchorimagepadding,a.anchorimageurl,f.anchorimageurl,g.anchorimageurl,a.meaniconradius,f.meaniconradius,g.meaniconradius,a.meaniconcolor,f.meaniconcolor,g.meaniconcolor,a.anchorbordercolor,f.anchorbordercolor,g.anchorbordercolor,a.anchoralpha,f.anchoralpha,g.anchoralpha,a.meaniconsides,
f.meaniconsides,g.meaniconsides,a.anchorborderthickness,f.anchorborderthickness,g.anchorborderthickness,void 0),g=h(a.drawanchors,b.drawAnchors);c.enabled=f?h(g,f):h(g,e);c.startAngle=h(a.anchorstartangle,b.anchorStartAngle);c.imageAlpha=h(a.anchorimagealpha,b.anchorImageAlpha);c.imageScale=h(a.anchorimagescale,b.anchorImageScale);c.imagePadding=h(a.anchorimagepadding,b.anchorImagePadding);0>c.imagePadding&&(c.imagePadding=0);c.imageUrl=q(a.anchorimageurl,b.anchorImageUrl);c.radius=h(a[d+"iconradius"],
b.anchorRadius);c.isAnchorRadius=c.radius;c.bgColor=q(a[d+"iconcolor"],b.anchorBgColor);e=c.enabled?Xb(q(a.anchoralpha,b.anchorAlpha,c.enabled?za:Ea)):0;c.bgAlpha=Xb(q(a[d+"iconalpha"],b.meaniconalpha,e));c.borderColor=q(a.anchorbordercolor,b.anchorBorderColor);c.borderAlpha=e;c.sides=q(a[d+"iconsides"],b.anchorSides);c.borderThickness=q(a.anchorborderthickness,b.anchorBorderThickness);c.symbol=l(c.sides).split(K);c.shadow=h(a.anchorshadow,b.anchorShadow)&&1<=c.radius?{opacity:e/100}:!1;return c},
init:function(a){var c=this.chart,d=c.components,b=a.parentyaxis&&a.parentyaxis.toLowerCase()===eb?1:0,d=d.yAxis[b];if(!a)return!1;this.JSONData=a;this.yAxis=d;this.chartGraphics=c.chartGraphics;this.components={};this.graphics={};this.configure()},draw:function(){var a,c,d,b,e,f,g,l=this,q=l.JSONData,t=l.config,y=l.groupManager,p=l.index,u=l.chart.config.categories,v=q.data,w=u&&u.length,A=v&&v.length,C,B,E,H=l.visible,N=l.chart,T=N.config,ia=N.components.paper,D=N.components.xAxis[0],J=l.yAxis,
W=N.graphics.columnGroup,F,L,I=N.graphics,Y=t.showtooltip,V=N.get(Z,xa),aa=V.animType,U=V.animObj,jb=V.dummyObj,Q=V.duration,pa=D.getAxisPosition(0),oa=D.getAxisPosition(1)-pa,Fa=t.definedGroupPadding,Ea=t.plotSpacePercent/200,M=y.getDataSetPosition(l),za=t.maxcolwidth,Ha=(1-.01*Fa)*oa||da(oa*(1-2*Ea),1*za),R=h(M.columnWidth,Ha/1),wa,Ma=M.xPosOffset||0,na=M.height,va,Ca=l.components.data,la,Ga,Qa,sa,ea,Ka,Wa=J.getAxisBase(),$a,Ua,Ja=t.showShadow,$b=l.graphics.upperBoxContainer,Da=l.graphics.lowerBoxContainer,
Na=l.graphics.medianContainer,Ba=l.graphics.upperWhiskerContainer,Ia=l.graphics.lowerWhiskerContainer,Ib=l.graphics.dataLabelContainer,Pb=l.graphics.shadowContainer,ua,La,Ya,pb,lc,eb,ya,wb,db,bb,Ra,Oa,Xa,Va,Pa,Za,Sa,Ab,qb,ab,Ta,kb,lb,fa=N.config.dataLabelStyle,ub=I.datalabelsGroup,Aa=t.rotatevalues,Bb=t.valuepadding,Cb=N.components.numberFormatter,rb=Aa?Kc:"middle",sb=N.linkedItems.smartLabel,ra,xb,zb,zc,tb,gc,yb,Gb,Fb,gb,fb,mb,nb,ob,vb,Db=Infinity,hb,Eb,Hb=!0,Qb=(l.components.removeDataArr||[]).length,
Mb,Nb,Ob,Rb,Sb,Tb,Ub,Vb,Wb,dc,ec,hc=t.showHoverEffect,Jb,Kb,Xb,Zb,bc,cc,ic=function(a){ka.call(this,N,a)},jc=function(a){return function(b){var c;if(0!==this.data(O))for(c in a)"label"!==c&&(a[c].attr(this.data("setRolloverAttr")[c]),ka.call(this,N,b,"DataPlotRollOver"))}},kc=function(a){return function(b){var c;if(0!==this.data(O))for(c in a)"label"!==c&&(a[c].attr(this.data("setRolloutAttr")[c]),ka.call(this,N,b,"DataPlotRollOut"))}},Lb=function(){!1!==l.visible||!1!==l._conatinerHidden&&void 0!==
l._conatinerHidden||($b.hide(),Da.hide(),Ba.hide(),Ia.hide(),Na.hide(),Pb.hide(),Ib&&Ib.hide(),l._conatinerHidden=!0)};Ib||(Ib=l.graphics.dataLabelContainer=ia.group(mc,ub),H||Ib.hide());$b||($b=l.graphics.upperBoxContainer=ia.group("upperBox",W).trackTooltip(!0).toBack(),H||$b.hide());Ba||(Ba=l.graphics.upperWhiskerContainer=ia.group("upperWhisker",W).trackTooltip(!0),H||Ba.hide());Da||(Da=l.graphics.lowerBoxContainer=ia.group("lowerBox",W).trackTooltip(!0).toBack(),H||Da.hide());Ia||(Ia=l.graphics.lowerWhiskerContainer=
ia.group("lowerWhisker",W).trackTooltip(!0),H||Ia.hide());Na||(Na=l.graphics.medianContainer=ia.group("median",W).trackTooltip(!0),H||Na.hide());Pb||(Pb=l.graphics.shadowContainer=ia.group(ac,W).toBack(),H||Pb.hide());H&&($b.show(),Da.show(),Ba.show(),Ia.show(),Na.show(),Pb.show(),Ib&&Ib.show(),l._conatinerHidden=!1,l.components.mean.visible&&l.components.mean.show(),l.components.sd.visible&&l.components.sd.show(),l.components.qd.visible&&l.components.qd.show(),l.components.md.visible&&l.components.md.show());
C=da(w,A);for(E=0;E<C;E++)if(Qa=(ea=(la=Ca[E])&&la.config)&&ea.setValue,Wb=Vb=Ub=Tb=Sb=Rb=Ob=Nb=Mb=!1,void 0!==la&&void 0!==Qa&&null!==Qa)for(ra=la.graphics,Ka=0<=Qa,Ga=ea.setLink,la.graphics||(Ca[E].graphics={}),ra.label||(Ca[E].graphics.label=[]),$a=Ka?ea.previousPositiveY:ea.previousNegativeY,Ua=J.getAxisPosition($a||Wa),F=D.getAxisPosition(E)+Ma,0===na&&(Db=0,hb=Ua),L=da(L,Ua),wa=R,Ya=((La=(ua=ea.upperQuartile||{},ua.value))||0===La)&&J.getAxisPosition(La),eb=((lc=(pb=ea.lowerQuartile||{},pb.value))||
0===lc)&&J.getAxisPosition(lc),db=((wb=(ya=ea.median)&&ya.value)||0===wb)&&J.getAxisPosition(wb),bb=db-Ya,Ra=eb-db,Oa=ea.upperBoxBorder||{},Xa=ea.lowerBoxBorder||{},va=ea.toolText,xb=l.index+K+E,sa={index:E,link:Ga,maximum:ea.max,minimum:ea.min,median:wb,q3:ua.value,q1:pb.value,maxDisplayValue:ea.showMaxValues?Cb.dataLabels(ea.max):G,minDisplayValue:ea.showMinValues?Cb.dataLabels(ea.min):G,medianDisplayValue:ea.showMedianValues?Cb.dataLabels(wb):G,q1DisplayValue:ea.showQ1Values?Cb.dataLabels(pb.value):
G,q3DisplayValue:ea.showQ3Values?Cb.dataLabels(ua.value):G,categoryLabel:ea.label,toolText:va,datasetIndex:p,datasetName:q.seriesname,visible:H},Ta=qa(F)+Oa.borderWidth%2*.5,kb=qa(F+wa)+Oa.borderWidth%2*.5,lb=qa(Ya)+ua.borderWidth%2*.5,wa=kb-Ta,a={fill:ga(ea.upperColorArr[0]),"stroke-width":0,"stroke-dasharray":"none",cursor:Ga?"pointer":G,ishot:!0,visibility:H},c={fill:ga(ea.lowerColorArr[0]),"stroke-width":0,"stroke-dasharray":"none",cursor:Ga?"pointer":z,ishot:!0,visibility:H},d={stroke:Oa.color,
"stroke-width":Oa.borderWidth,"stroke-linecap":ba,dashstyle:Oa.dashStyle,ishot:!0,visibility:H},b={stroke:Xa.color,"stroke-width":Xa.borderWidth,dashstyle:Xa.dashStyle,"stroke-linecap":ba,ishot:!0,visibility:H},e={stroke:ga(ua.color),"stroke-width":ua.borderWidth,"stroke-dasharray":ua.dashSyle,"stroke-linecap":ba,cursor:Ga?"pointer":z,ishot:!0,visibility:H},f={stroke:ga(pb.color),"stroke-width":pb.borderWidth,"stroke-dasharray":pb.dashSyle,cursor:Ga?"pointer":G,"stroke-linecap":ba,ishot:!0,visibility:H},
g={stroke:ga(ya.color),"stroke-width":ya.borderWidth,"stroke-dasharray":ya.dashSyle,cursor:Ga?"pointer":G,"stroke-linecap":ba,ishot:!0,visibility:H},Xb=hb||lb,B={x:Ta,y:hb||lb,width:X(wa,0),height:X(da(Db,bb),0),r:0},(Va=la.graphics.upperBoxElem)?(Va.animateWith(jb,U,B,Q,aa,Hb&&Lb),Hb=!1):(Va=la.graphics.upperBoxElem=ia.rect(B,$b),Mb=!0),Va.attr(a).shadow({opacity:Ja?t.upperBoxAlpha/100:0},Pb),B={path:["M",Ta,hb||lb,"V",hb||lb+bb,"M",kb,hb||lb,"V",hb||lb+bb]},(Pa=la.graphics.upperBoxBorderEle)?Pa.animateWith(jb,
U,B,Q,aa,Hb&&Lb):(Pa=la.graphics.upperBoxBorderEle=ia.path(B,$b),Ob=!0),Pa.attr(d),B={path:["M",Ta,hb||lb,"H",Ta+wa]},(Za=la.graphics.upperQuartileEle)?Za.animateWith(jb,U,B,Q,aa,Hb&&Lb):(Za=la.graphics.upperQuartileEle=ia.path(B,$b),Sb=!0),Za.attr(e),zb=lb,zc=t.whiskerslimitswidthratio/100*wa,tb=zc/2,Gb=gc=J.getAxisPosition(ea.max),yb=Ta,Gb=qa(gc)+ea.upperWhiskerThickness%2/2,Ta=qa(Ta+wa/2)+ea.upperWhiskerThickness%2/2,gb=["M",Ta,hb||zb,"V",da(hb||Gb,Xb),"M",Ta-tb,da(hb||Gb,Xb),"H",Ta+tb],Fb=la.graphics.upperWhiskerEle,
B={path:gb,ishot:!Y,"stroke-width":ea.upperWhiskerThickness,cursor:Ga?"pointer":G,"stroke-linecap":ba},Fb?Fb.animateWith(jb,U,B,Q,aa,Hb&&Lb):(Fb=la.graphics.upperWhiskerEle=ia.path(B,Ba),Vb=!0),Fb.attr({stroke:ea.upperWhiskerColor}),Fb.shadow({opacity:ea.upperWhiskerShadowOpacity},Pb),sb.useEllipsesOnOverflow(N.config.useEllipsesWhenOverflow),sb.setStyle(fa),mb=sb.getOriSize(Cb.dataLabels(ea.max)),nb=Aa?mb.width:mb.height,vb=gc-.5*ea.upperWhiskerThickness-Bb-nb*(Aa?.5:1),vb-(Aa?nb/2:0)<T.canvasTop&&
(vb=T.canvasTop+(Aa?nb/2:0)),B={text:Cb.dataLabels(ea.max),x:yb+wa/2,title:ua.originalText||G,y:vb,"text-anchor":Aa?"middle":rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,transform:ia.getSuggestiveRotation(Aa,yb+wa/2,vb),"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]},ea.showMaxValues?(ra.label[3]?(ra.label[3].show(),Jb=yb+wa/2,Kb=hb||vb,ra.label[3].attr({text:Cb.dataLabels(ea.max),title:ua.originalText||
G,"text-anchor":Aa?"middle":rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]}),ra.label[3].animateWith(jb,U,{x:Jb,y:Kb,transform:ia.getSuggestiveRotation(Aa,Jb,Kb)},Q,aa,Hb&&Lb)):ra.label[3]=ia.text(B,Ib),ra.label[3].data("groupId",xb)):ra.label[3]&&ra.label[3].hide()&&ra.label[3].attr({"text-bound":[]}),Ta=qa(F)+Xa.borderWidth%2*.5,kb=qa(F+wa)+
Xa.borderWidth%2*.5,lb=qa(db+Ra)+pb.borderWidth%2*.5,Zb=hb||db,bc=X(da(Db,lb-db),0),cc=Zb+bc,B={x:Ta,y:Zb,width:X(wa,0),height:bc,r:0},(Sa=la.graphics.lowerBoxElem)?Sa.animateWith(jb,U,B,Q,aa,Hb&&Lb):(Sa=la.graphics.lowerBoxElem=ia.rect(B,Da),Nb=!0),Sa.attr(c).shadow({opacity:Ja?t.lowerBoxAlpha/100:0},Pb),B={path:["M",Ta,hb||db,"V",hb||db+Ra,"M",kb,hb||db,"V",hb||db+Ra]},(Ab=la.graphics.lowerBoxBorderEle)?Ab.animateWith(jb,U,B,Q,aa,Hb&&Lb):(Ab=la.graphics.lowerBoxBorderEle=ia.path(B,Da),Rb=!0),Ab.attr(b),
lb=qa(db+Ra)+pb.borderWidth%2*.5,B={path:["M",Ta,hb||lb,"H",Ta+wa]},(qb=la.graphics.lowerQuartileEle)?qb.animateWith(jb,U,B,Q,aa,Hb&&Lb):(qb=la.graphics.lowerQuartileEle=ia.path(B,Da),Tb=!0),qb.attr(f),zb=lb,zc=t.whiskerslimitswidthratio/100*wa,tb=zc/2,Gb=gc=J.getAxisPosition(ea.min),yb=Ta,Gb=qa(gc)+ea.lowerWhiskerThickness%2/2,yb=qa(yb+wa/2)+ea.lowerWhiskerThickness%2/2,gb=["M",yb,hb||zb,"V",X(hb||Gb,cc),"M",yb-tb,X(hb||Gb,cc),"H",yb+tb],fb=la.graphics.lowerWhiskerEle,sb.setStyle(fa),mb=sb.getOriSize(Cb.dataLabels(ea.min)),
nb=Aa?mb.width:mb.height,ob=gc+.5*ea.lowerWhiskerThickness+Bb,ob+nb>T.canvasBottom&&(ob=T.canvasBottom-nb),B={text:Cb.dataLabels(ea.min),x:yb,title:ua.originalText||G,y:ob,"text-anchor":Aa?m:rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,transform:ia.getSuggestiveRotation(Aa,yb,ob),"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]},ea.showMinValues?(ra.label[4]?(ra.label[4].show(),Jb=yb,Kb=hb||
ob,ra.label[4].animateWith(jb,U,{x:Jb,y:Kb,transform:ia.getSuggestiveRotation(Aa,Jb,Kb)},Q,aa,Hb&&Lb),ra.label[4].attr({text:Cb.dataLabels(ea.min),title:ua.originalText||G,"text-anchor":Aa?m:rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]})):ra.label[4]=ia.text(B,Ib),ra.label[4].data("groupId",xb)):ra.label[4]&&ra.label[4].hide()&&ra.label[4].attr({"text-bound":[]}),
B={path:gb,ishot:!Y,"stroke-width":ea.lowerWhiskerThickness,cursor:Ga?"pointer":G,"stroke-linecap":ba},fb?fb.animateWith(jb,U,B,Q,aa,Hb&&Lb):(fb=la.graphics.lowerWhiskerEle=ia.path(B,Ia),Wb=!0),fb.attr({stroke:ea.lowerWhiskerColor}),fb.shadow({opacity:ea.lowerWhiskerShadowOpacity},Pb),lb=qa(db)+ya.borderWidth%2*.5,B={path:["M",Ta,hb||lb,"H",Ta+wa]},(ab=la.graphics.midLineElem)?ab.animateWith(jb,U,B,Q,aa,Hb&&Lb):(ab=la.graphics.midLineElem=ia.path(B,Na),Ub=!0),ab.attr(g),dc={upperBoxElem:ea.setUpperBoxRolloverAttr,
lowerBoxElem:ea.setLowerBoxRolloverAttr,upperBoxBorderEle:ea.setUpperBoxBorderRolloverAttr,lowerBoxBorderEle:ea.setLowerBoxBorderRolloverAttr,upperQuartileEle:ea.setUpperQuartileRolloverAttr,lowerQuartileEle:ea.setLowerQuartileRolloverAttr,midLineElem:ea.setMedianRolloverAttr},ec={upperBoxElem:ea.setUpperBoxRolloutAttr,lowerBoxElem:ea.setLowerBoxRolloutAttr,upperBoxBorderEle:ea.setUpperBoxBorderRolloutAttr,lowerBoxBorderEle:ea.setLowerBoxBorderRolloutAttr,upperQuartileEle:ea.setUpperQuartileRolloutAttr,
lowerQuartileEle:ea.setLowerQuartileRolloutAttr,midLineElem:ea.setMedianRolloutAttr},Va.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Mb&&Va.click(ic).hover(jc(la.graphics),kc(la.graphics)),Sa.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Nb&&Sa.click(ic).hover(jc(la.graphics),kc(la.graphics)),Pa.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",
ec),Ob&&Pa.click(ic).hover(jc(la.graphics),kc(la.graphics)),Ab.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Rb&&Ab.click(ic).hover(jc(la.graphics),kc(la.graphics)),Za.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Sb&&Za.click(ic).hover(jc(la.graphics),kc(la.graphics)),qb.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Tb&&qb.click(ic).hover(jc(la.graphics),
kc(la.graphics)),ab.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Ub&&ab.click(ic).hover(jc(la.graphics),kc(la.graphics)),Fb.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Vb&&Fb.click(ic).hover(jc(la.graphics),kc(la.graphics)),fb.data("groupId",xb).data("eventArgs",sa).data(O,hc).data("setRolloverAttr",dc).data("setRolloutAttr",ec),Wb&&fb.click(ic).hover(jc(la.graphics),kc(la.graphics)),
rb=Aa?Kc:"middle",B={text:ua.displayValue,x:F+wa/2,title:ua.originalText||G,y:Ya-Bb,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":r,visibility:ca,direction:t.textDirection,fill:fa.color,transform:ia.getSuggestiveRotation(Aa,F+wa/2,Ya-Bb),"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]},cb(ua.displayValue)&&ua.displayValue!==z&&ea.showQ3Values?(ra.label[0]?(ra.label[0].show(),Jb=F+wa/2,Kb=hb||Ya-Bb,ra.label[0].animateWith(jb,U,
{x:Jb,y:Kb,transform:ia.getSuggestiveRotation(Aa,Jb,Kb)},Q,aa,Hb&&Lb),ra.label[0].attr({text:ua.displayValue,title:ua.originalText||G,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":r,visibility:ca,direction:t.textDirection,fill:fa.color,"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]})):ra.label[0]=ia.text(B,Ib),ra.label[0].data("groupId",xb)):ra.label[0]&&ra.label[0].hide()&&ra.label[0].attr({"text-bound":[]}),B={text:ya.displayValue,
x:Ta+wa/2,y:db-Bb,title:ya.originalText||G,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":r,visibility:ca,direction:t.textDirection,fill:fa.color,transform:ia.getSuggestiveRotation(Aa,Ta+wa/2,db-Bb),"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]},cb(ya.displayValue)&&ya.displayValue!==z&&ea.showMedianValues?(ra.label[1]?(ra.label[1].show(),Jb=Ta+wa/2,Kb=hb||db-Bb,ra.label[1].animateWith(jb,U,{x:Jb,y:Kb,transform:ia.getSuggestiveRotation(Aa,
Jb,Kb)},Q,aa,Hb&&Lb),ra.label[1].attr({text:ya.displayValue,title:ya.originalText||G,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":r,visibility:ca,direction:t.textDirection,fill:fa.color,"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]})):ra.label[1]=ia.text(B,Ib),ra.label[1].data("groupId",xb)):ra.label[1]&&ra.label[1].hide()&&ra.label[1].attr({"text-bound":[]}),B={text:pb.displayValue,x:F+wa/2,y:eb+Bb,title:pb.originalText||
G,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,transform:ia.getSuggestiveRotation(Aa,F+wa/2,eb+Bb),"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]},cb(pb.displayValue)&&pb.displayValue!==z&&ea.showQ1Values?(ra.label[2]?(ra.label[2].show(),Jb=F+wa/2,Kb=hb||eb+Bb,ra.label[2].animateWith(jb,U,{x:Jb,y:Kb,transform:ia.getSuggestiveRotation(Aa,Jb,Kb)},Q,aa,Hb&&Lb),ra.label[2].attr({text:pb.displayValue,
title:pb.originalText||G,"text-anchor":Aa?n:rb,"vertical-align":Aa?"middle":k,visibility:ca,direction:t.textDirection,fill:fa.color,"text-bound":[fa.backgroundColor,fa.borderColor,fa.borderThickness,fa.borderPadding,fa.borderRadius,fa.borderDash]})):ra.label[2]=ia.text(B,Ib),ra.label[2].data("groupId",xb)):ra.label[2]&&ra.label[2].hide()&&ra.label[2].attr({"text-bound":[]}),Hb&&Lb(),Y?(Va.tooltip(va),Sa.tooltip(va),Pa.tooltip(va),Ab.tooltip(va),Za.tooltip(va),qb.tooltip(va),ab.tooltip(va),Fb.tooltip(va),
fb.tooltip(va)):(Va.tooltip(!1),Sa.tooltip(!1),Pa.tooltip(!1),Ab.tooltip(!1),Za.tooltip(!1),qb.tooltip(!1),ab.tooltip(!1),Fb.tooltip(!1),fb.tooltip(!1)),F+=wa/2,l.components.mean.components.data[E].config.xPos=F,l.components.sd.components.data[E].config.xPos=F,l.components.qd.components.data[E].config.xPos=F,l.components.md.components.data[E].config.xPos=F,Eb=0;Eb<t.maxNumberOfOutliers;Eb++)l.components.outliers[Eb].components.data[E].config.xPos=F;l.flag=!0;Qb&&l.remove()},remove:function(){var a=
this.components,c=a.removeDataArr,d=a.pool||(a.pool={element:[],hotElement:[],label:[]}),b=c.length,e,f=this.maxminFlag,g,l,h,k,m;for(h=0;h<b;h++)if(e=c[0],c.splice(0,1),e&&e.graphics){l=e.graphics;for(g in l)if("label"!==g)l[g].shadow({opacity:0}),l[g].hide();else for(k=l[g].length,m=0;m<k;m++)l[g][m]&&(l[g][m].shadow({opacity:0}),l[g][m].hide(),l[g][m].attr({"text-bound":[]}));e.graphics.element&&(d.element=d.element.concat(e.graphics.element));e.graphics.hotElement&&(d.hotElement=d.hotElement.concat(e.graphics.hotElement));
e.graphics.label&&(d.label=d.label.concat(e.graphics.label))}a.pool=d;f&&this.setMaxMin()},removeData:function(a,c,d){var b=this.components,e=b.data,f=b.removeDataArr||(b.removeDataArr=[]),g=b.mean.components.removeDataArr||(b.mean.components.removeDataArr=[]),l=b.sd.components.removeDataArr||(b.sd.components.removeDataArr=[]),h=b.md.components.removeDataArr||(b.md.components.removeDataArr=[]),k=b.qd.components.removeDataArr||(b.qd.components.removeDataArr=[]),m=this.config,p=this.groupManager,n=
this.maxminFlag;c=c||1;a=a||0;if(a+c===e.length)this.endPosition=!0;else if(0===a||void 0===a)this.endPosition=!1;b.removeDataArr=f=f.concat(e.splice(a,c));b.mean.components.removeDataArr=g.concat(b.mean.components.data.splice(a,c));b.sd.components.removeDataArr=l.concat(b.sd.components.data.splice(a,c));b.md.components.removeDataArr=h.concat(b.md.components.data.splice(a,c));b.qd.components.removeDataArr=k.concat(b.qd.components.data.splice(a,c));g=b.outliers.length;for(e=0;e<g;e++)l=b.outliers[e].components.removeDataArr||
(b.outliers[e].components.removeDataArr=[]),b.outliers[e].components.removeDataArr=l.concat(b.outliers[e].components.data.splice(a,c));p&&p.removeSumLabels&&p.removeSumLabels(a,c,this.positionIndex);g=f.length;for(e=0;e<g;e++)if(f[e]){a=f[e].config;if(a.setValue===m.maxValue||a.setValue===m.minValue)n=this.maxminFlag=!0;if(n)break}n&&this.setMaxMin();d&&this.draw()},_addLegendSubDS:function(a){var c;c=a.config;var d=a.chart.components.legend,b=c.anchorBgColor;c={anchorSide:c.anchorSides,legendBackgroundColor:this.config.upperBoxColor,
fillColor:aa(b),strokeColor:aa(oa),enabled:this.config.includeInLegend,label:this.JSONData.seriesname&&T(a.name),customLegendIcon:!1,spoke:c.dip?1:0,drawLine:c.drawLine?!0:!1,lineColor:ga({color:b,alpha:za})};a.itemId=d.addItems(a,a.legendInteractivity,c)},_addLegendOutliers:function(a){var c=this.JSONData,d=this.chart.jsonData.chart,b=this.config,e=b.upperBoxColor,f=this.chart.components.legend,g=q(c.outliericoncolor,d.outliericoncolor,oa),c={anchorSide:h(c.outliericonsides,d.outliericonsides,3),
fillColor:aa(g),legendBackgroundColor:e,strokeColor:aa(oa),enabled:b.includeInLegend,label:this.JSONData.seriesname&&"Outliers",customLegendIcon:!1,spoke:a[0].config.dip?1:0,drawLine:!1,datasetObj:a[0]};a.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);a[0]&&(a[0].itemId=f.addItems(a,this.legendInteractivityOutliers,c))},legendInteractivityOutliers:function(a,c){var d=this.config,b=c.config,e=c.graphics,f=d.itemHiddenStyle.color,d=d.itemStyle.color,g=b.fillColor,b=b.strokeColor,
l,h;a.visible=a.visible?!1:!0;for(l=0;l<a.length;l++)h=a[l].visible,a[l].visible=h?!1:!0,a[l].draw(),h?(a.visible=!1,e.legendItemSymbol&&e.legendItemSymbol.attr({fill:f,stroke:f}),e.legendItemText&&e.legendItemText.attr({fill:f}),e.legendIconLine&&e.legendIconLine.attr({stroke:f})):(e.legendItemSymbol&&e.legendItemSymbol.attr({fill:g,stroke:b}),e.legendItemText&&e.legendItemText.attr({fill:d}),e.legendIconLine&&e.legendIconLine.attr({stroke:g}))},_addLegend:function(){var a;a=this.config;var c=this.chart.components.legend,
d=a.upperBoxColor;a={fillColor:ga({FCcolor:{color:d+","+a.lowerBoxColor,angle:90,ratio:"50, 0",alpha:"100, 100"}}),legendBackgroundColor:d,strokeColor:ga(oa),rawFillColor:d,rawStrokeColor:oa,enabled:a.includeInLegend,label:T(this.JSONData.seriesname),index:this.index,mainDS:!0};this.itemId=c.addItems(this,this.legendInteractivity,a)},legendInteractivity:function(a,c){var d=this.config,b=a.visible,e=c.config,f=c.graphics,g=d.itemHiddenStyle.color,d=d.itemStyle,l=d.color,h=e.fillColor,e=e.strokeColor,
k=c.index,m=a.subDS;b?a.hide():a.show();if(b)for(f.legendItemSymbol&&f.legendItemSymbol.attr({fill:g,stroke:g}),f.legendItemText&&f.legendItemText.attr({fill:g}),f.legendItemLine&&f.legendItemLine.attr({stroke:g}),b=k+1;b<=k+m;b++){if(f=(e=this.components.items[b])&&e.graphics)f.legendItemSymbol&&f.legendItemSymbol.attr({fill:g,stroke:g}),f.legendItemText&&f.legendItemText.attr({fill:g}),f.legendItemLine&&f.legendItemLine.attr({stroke:g})}else for(f.legendItemSymbol&&f.legendItemSymbol.attr({fill:h,
stroke:e}),f.legendItemText&&f.legendItemText.attr({fill:l}),f.legendItemLine&&f.legendItemLine.attr({stroke:h}),b=k+1;b<=k+m;b++)if(f=(e=this.components.items[b])&&e.graphics)e=e.config,l=d.color,h=e.fillColor,e=e.strokeColor,f.legendItemSymbol&&f.legendItemSymbol.attr({fill:h,stroke:e}),f.legendItemText&&f.legendItemText.attr({fill:l}),f.legendItemLine&&f.legendItemLine.attr({stroke:h})},show:function(){var a=this.graphics.upperBoxContainer,c=this.graphics.lowerBoxContainer,d=this.graphics.medianContainer,
b=this.graphics.upperWhiskerContainer,e=this.graphics.lowerWhiskerContainer,f=this.graphics.dataLabelContainer,g=this.graphics.shadowContainer,l=this.chart,h=this.yAxis;l._chartAnimation();this.visible=!0;this.components.outliers.visible=!0;this._conatinerHidden=!1;a.show();c.show();d.show();b.show();e.show();f.show();g.show();for(a=0;a<this.config.maxNumberOfOutliers;a++)this.components.outliers[a].show();l._setAxisLimits();h.draw();l._drawDataset();this.components.mean.show();this.components.sd.show();
this.components.qd.show();this.components.md.show()},hide:function(){var a=this.chart,c=this.yAxis,d,b;a._chartAnimation();this.visible=!1;d=this.config.maxNumberOfOutliers;for(b=0;b<d;b++)this.components.outliers[b].hide();a._setAxisLimits();c.draw();a._drawDataset();this.components.mean.hide();this.components.sd.hide();this.components.qd.hide();this.components.md.hide();d=this.config.maxNumberOfOutliers||this.components.outliers.length;this.components.outliers.visible=!1;for(b=0;b<d;b++)this.components.outliers[b].visible=
!1,this.components.outliers[b].draw()}},"Column",{showplotborder:void 0,plotborderdashlen:void 0,plotborderdashgap:void 0,plotfillalpha:void 0,useroundedges:void 0,ratio:void 0,plotborderthickness:void 0,showvalues:void 0,valuepadding:void 0,showtooltip:void 0,maxcolwidth:void 0,rotatevalues:void 0,use3dlighting:void 0,whiskerslimitswidthratio:void 0,outliersupperrangeratio:void 0,outlierslowerrangeratio:void 0,showalloutliers:void 0,showmean:void 0,showsd:void 0,showmd:void 0,showqd:void 0,showminvalues:void 0,
showmaxvalues:void 0,showq1values:void 0,showq3values:void 0,showmedianvalues:void 0}]);FusionCharts.register("component",["dataset","subDS",{show:function(){var a=this.chart,c=this.yAxis;a._chartAnimation();this.visible=!0;this._conatinerHidden=!1;a.config.transposeAxis&&(a._setAxisLimits(),c.draw());this.draw()},hide:function(){var a=this.chart,c=this.yAxis;a._chartAnimation();this.visible=!1;a.config.transposeAxis&&(a._setAxisLimits(),c.draw());this.draw()},getEventArgs:function(){return{datasetName:this.name,
datasetIndex:this.index,id:(this.config||{}).userID,visible:this.visible}},legendInteractivity:function(a,c){var d=this.config,b=a.visible,e=c.config,f=c.graphics,g=d.itemHiddenStyle.color,d=d.itemStyle.color,l=e.fillColor,h,k=e.strokeColor;b?a.hide():a.show();b={legendItemSymbol:{fill:b?g:l,stroke:b?g:k},legendItemText:{fill:b?g:d},legendItemLine:{stroke:b?g:e.lineAttr&&e.lineAttr.stroke}};for(h in f)(e=f[h])&&b[h]&&e.attr(b[h])}},"Line"]);FusionCharts.register("component",["datasetGroup","boxandwhisker2d",
{draw:function(){var a=this.positionStackArr,c=a.length,d,b,e,f;d=this.chart;b=d.graphics.datasetGroup;var g=d.graphics;e=d.components.canvas.config.clip["clip-canvas"].slice(0);f=W([],d.components.canvas.config.clip["clip-canvas-init"]);var g=g.datalabelsGroup,l=d.get(Z,xa),h=l.animType,k=l.animObj,m=l.dummyObj,l=l.duration;d.fireInitialAnimation&&(b.attr({"clip-rect":f}),g.attr({"clip-rect":f}));d.fireInitialAnimation=!1;b.animateWith(m,k,{"clip-rect":e},l,h);g.animateWith(m,k,{"clip-rect":e},l,
h);this.preDrawCalculate();this.drawSumValueFlag=!0;for(d=0;d<c;d++)for(b=a[d],e=b.length,this.manageClip=!0,b=0;b<e;b++)f=a[d][b].dataSet,f.draw()}},C]);N("heatmap",{friendlyName:"Heatmap Chart",standaloneInit:!0,creditLabel:va,hasLegend:!0,tooltipsepchar:": ",tooltipConstraint:"chart",defaultDatasetType:"heatmap",applicableDSList:{heatmap:!0},isSingleSeries:!0,hasGradientLegend:!0,_createAxes:function(){var a=this.components,c=FusionCharts.register("component",["axis","cartesian"]),d;a.yAxis=[];
a.xAxis=[];a.yAxis[0]=d=new c;a.xAxis[0]=a=new c;d.chart=this;a.chart=this;d.init();a.init()},_postSpaceManagement:function(){var a=this.config,c=a.placeAxisLabelsOnTop,d=this.components,b=d.xAxis&&d.xAxis[0],e=d.yAxis&&d.yAxis[0],f=d.legend,g=a.xDepth,d=d.canvas.config.canvasBorderWidth;b&&b.setAxisDimention({x:a.canvasLeft,y:c?a.canvasTop+(a.shift||0)-d:a.canvasBottom+(a.shift||0)+d,opposite:a.canvasTop-d,axisLength:a.canvasWidth});e&&e.setAxisDimention({x:a.canvasLeft-d,y:a.canvasTop,opposite:a.canvasRight+
d,axisLength:a.canvasHeight});b&&b.shiftLabels(-g,0);f.postSpaceManager();this.config.realtimeEnabled&&this._setRealTimeCategories&&this._setRealTimeCategories();this._adjustCanvasPadding()},_adjustCanvasPadding:function(){},_feedAxesRawData:function(){var a=this.components,c=a.colorManager,d=this.jsonData,b=d.chart,e;e=this.is3d;var f=t.chartPaletteStr,f=e?f.chart3D:f.chart2D;e={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,
b.basefontcolor,c.getColor(f.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,"#$1"),axisNamePadding:b.xaxisnamepadding,axisValuePadding:b.labelpadding,axisNameFont:b.xaxisnamefont,axisNameFontSize:b.xaxisnamefontsize,axisNameFontColor:b.xaxisnamefontcolor,axisNameFontBold:b.xaxisnamefontbold,axisNameFontItalic:b.xaxisnamefontitalic,axisNameBgColor:b.xaxisnamebgcolor,axisNameBorderColor:b.xaxisnamebordercolor,axisNameAlpha:b.xaxisnamealpha,axisNameFontAlpha:b.xaxisnamefontalpha,axisNameBgAlpha:b.xaxisnamebgalpha,
axisNameBorderAlpha:b.xaxisnameborderalpha,axisNameBorderPadding:b.xaxisnameborderpadding,axisNameBorderRadius:b.xaxisnameborderradius,axisNameBorderThickness:b.xaxisnameborderthickness,axisNameBorderDashed:b.xaxisnameborderdashed,axisNameBorderDashLen:b.xaxisnameborderdashlen,axisNameBorderDashGap:b.xaxisnameborderdashgap,useEllipsesWhenOverflow:b.useellipseswhenoverflow,divLineColor:q(b.vdivlinecolor,b.divlinecolor,c.getColor(f.divLineColor)),divLineAlpha:q(b.vdivlinealpha,b.divlinealpha,e?c.getColor(Ia):
c.getColor(sa)),divLineThickness:h(b.vdivlinethickness,b.divlinethickness,1),divLineIsDashed:!!h(b.vdivlinedashed,b.vdivlineisdashed,b.divlinedashed,b.divlineisdashed,0),divLineDashLen:h(b.vdivlinedashlen,b.divlinedashlen,4),divLineDashGap:h(b.vdivlinedashgap,b.divlinedashgap,2),showAlternateGridColor:h(b.showalternatevgridcolor,0),alternateGridColor:q(b.alternatevgridcolor,c.getColor(La)),alternateGridAlpha:q(b.alternatevgridalpha,c.getColor(Ja)),numDivLines:b.numvdivlines,labelFont:b.labelfont,
labelFontSize:b.labelfontsize,labelFontColor:b.labelfontcolor,labelFontAlpha:b.labelalpha,labelFontBold:b.labelfontbold,labelFontItalic:b.labelfontitalic,axisName:b.xaxisname,axisMinValue:b.xaxisminvalue,axisMaxValue:b.xaxismaxvalue,setAdaptiveMin:b.setadaptivexmin,adjustDiv:b.adjustvdiv,labelDisplay:b.labeldisplay,showLabels:h(b.showxaxislabels,b.showlabels),rotateLabels:b.rotatexaxislabels,slantLabel:h(b.slantlabels,b.slantlabel),labelStep:h(b.labelstep,b.xaxisvaluesstep),showAxisValues:h(b.showxaxisvalues,
b.showxaxisvalue),maxLabelHeight:b.maxlabelheight,showZeroPlane:b.showvzeroplane,zeroPlaneColor:b.vzeroplanecolor,zeroPlaneThickness:b.vzeroplanethickness,zeroPlaneAlpha:b.vzeroplanealpha,showZeroPlaneValue:b.showvzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendlinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showxaxisline,b.showaxislines,b.drawAxisLines,0),axisLineThickness:h(b.xaxislinethickness,
b.axislinethickness,1),axisLineAlpha:h(b.xaxislinealpha,b.axislinealpha,100),axisLineColor:q(b.xaxislinecolor,b.axislinecolor,oa)};c={outCanfontFamily:q(b.outcnvbasefont,b.basefont,Ra),outCanfontSize:Wb(b.outcnvbasefontsize,b.basefontsize,10),outCancolor:q(b.outcnvbasefontcolor,b.basefontcolor,c.getColor(f.baseFontColor)).replace(/^#?([a-f0-9]+)/ig,"#$1"),axisNamePadding:b.yaxisnamepadding,axisValuePadding:b.yaxisvaluespadding,axisNameFont:b.yaxisnamefont,axisNameFontSize:b.yaxisnamefontsize,axisNameFontColor:b.yaxisnamefontcolor,
axisNameFontBold:b.yaxisnamefontbold,axisNameFontItalic:b.yaxisnamefontitalic,axisNameBgColor:b.yaxisnamebgcolor,axisNameBorderColor:b.yaxisnamebordercolor,axisNameAlpha:b.yaxisnamealpha,axisNameFontAlpha:b.yaxisnamefontalpha,axisNameBgAlpha:b.yaxisnamebgalpha,axisNameBorderAlpha:b.yaxisnameborderalpha,axisNameBorderPadding:b.yaxisnameborderpadding,axisNameBorderRadius:b.yaxisnameborderradius,axisNameBorderThickness:b.yaxisnameborderthickness,axisNameBorderDashed:b.yaxisnameborderdashed,axisNameBorderDashLen:b.yaxisnameborderdashlen,
axisNameBorderDashGap:b.yaxisnameborderdashgap,axisNameWidth:b.yaxisnamewidth,useEllipsesWhenOverflow:b.useellipseswhenoverflow,rotateAxisName:h(b.rotateyaxisname,1),axisName:b.yaxisname,showAlternateGridColor:h(b.showalternatehgridcolor,1),alternateGridColor:q(b.alternatehgridcolor,c.getColor(Oa)),alternateGridAlpha:q(b.alternatehgridalpha,c.getColor(gb)),numDivLines:b.numdivlines,axisMinValue:b.yaxisminvalue,axisMaxValue:b.yaxismaxvalue,setAdaptiveMin:b.setadaptiveymin,adjustDiv:b.adjustdiv,labelStep:b.yaxisvaluesstep,
showLabels:h(b.showyaxislabels,b.showlabels),maxLabelWidthPercent:b.maxlabelwidthpercent,showAxisValues:h(b.showyaxisvalues,b.showyaxisvalue),divLineColor:q(b.hdivlinecolor,c.getColor(f.divLineColor)),divLineAlpha:q(b.hdivlinealpha,c.getColor(sa)),divLineThickness:h(b.hdivlinethickness,1),divLineIsDashed:!!h(b.hdivlinedashed,b.hdivlineisdashed,0),divLineDashLen:h(b.hdivlinedashlen,4),divLineDashGap:h(b.hdivlinedashgap,2),showZeroPlane:b.showzeroplane,zeroPlaneColor:b.zeroplanecolor,zeroPlaneThickness:b.zeroplanethickness,
zeroPlaneAlpha:b.zeroplanealpha,showZeroPlaneValue:b.showzeroplanevalue,trendlineColor:b.trendlinecolor,trendlineToolText:b.trendlinetooltext,trendlineThickness:b.trendlinethickness,trendlineAlpha:b.trendlinealpha,showTrendlinesOnTop:b.showtrendlinesontop,showAxisLine:h(b.showyaxisline,b.showaxislines,b.drawAxisLines,0),axisLineThickness:h(b.yaxislinethickness,b.axislinethickness,1),axisLineAlpha:h(b.yaxislinealpha,b.axislinealpha,100),axisLineColor:q(b.yaxislinecolor,b.axislinecolor,oa)};e.vtrendlines=
d.vtrendlines;c.trendlines=d.trendlines;d=a.yAxis[0];a=a.xAxis[0];d.setCommonConfigArr(c,!0,!0,!1);a.setCommonConfigArr(e,!1,!1,this.config.placeAxisLabelsOnTop?!0:!1);d.configure();a.configure();this._setCategories()},_setAxisLimits:function(){},_setCategories:function(){var a=this.components,c=this.jsonData,d=a.xAxis,a=a.yAxis,b=c.dataset&&c.dataset[0].data&&c.dataset[0].data.length,e,f,g,l,h,k=[],m=[],p;if(!c.columns||!c.rows)for(c.columns={},c.columns.column=l=[],c.rows={},c.rows.row=h=[],e=0;e<
b;e++){g=f=!0;for(p=0;p<l.length;p++)c.dataset[0].data[e].columnid==l[p].id&&(f=!1);f&&(f={id:c.dataset[0].data[e].columnid,label:c.dataset[0].data[e].columnid},c.columns.column.push(f));for(p=0;p<h.length;p++)c.dataset[0].data[e].rowid==h[p].id&&(g=!1);g&&(g={id:c.dataset[0].data[e].rowid,label:c.dataset[0].data[e].rowid},c.rows.row.push(g))}l=c.columns.column;h=c.rows.row;for(e=0;e<(l&&l.length);e++)l[e].label=q(l[e].label,l[e].name,l[e].id),void 0!==l[e].label&&k.push(l[e]);c.columns.column=k;
for(e=0;e<(h&&h.length);e++)h[e].label=q(h[e].label,h[e].name,h[e].id),void 0!==h[e].label&&m.push(h[e]);c.rows.row=m;c.columns&&d[0].setAxisPadding(.5,.5);c.columns&&d[0].setCategory(c.columns.column);c.columns&&a[0].setAxisPadding(.5,.5);c.rows&&a[0].setCategory(c.rows.row);d[0].setAxisConfig({categoryNumDivLines:c.columns.column.length-1,categoryDivLinesFromZero:0,showAlternateGridColor:0});a[0].setAxisConfig({categoryNumDivLines:c.rows.row.length-1,categoryDivLinesFromZero:0,showAlternateGridColor:0})}},
N.mscartesian);FusionCharts.register("component",["dataset","HeatMap",{type:"heatmap",configure:function(){var a=this.chart,c=a.components,d=c.postLegendInitFn,b=c.gradientLegend,e=a.config.style,f=this.config,g=a.jsonData,l=this.JSONData,k=l.data,m=a.singleseries,n=k&&k.length,p=a.jsonData.chart,r=a.components.colorManager,u,v=f.plotColor=r.getPlotColor(this.index||this.positionIndex),A=h(l.dashed,p.plotborderdashed),B=h(p.useplotgradientcolor,1),C=h(p.showtooltip,1),E=t.parseUnsafeString,K=E(p.yaxisname),
N=E(p.xaxisname),O=E(q(p.tooltipsepchar,": ")),T=t.parseTooltext,D,J,Z,F,L,I,W,Y,V,U,ca,Q,ba,ka,oa,pa,M,va,Fa,R,wa,xa,na,sa=g.colorrange||{},Ea=a.components.xAxis[0],la=a.components.yAxis[0],ya,Ha,Da=f.mapByPercent=h(sa.mapbypercent,0),ea=f.mapByCategory=h(p.mapbycategory,0),Ma=a.jsonData,Ca=Ma.colorrange&&h(Ma.colorrange.gradient),Qa=t.nonGradientColorRange,Ba,Ia,Ka,Ua,Na,Va,Ya,Pa,Za,ua,$a,ab,pb,Wa=t.getDashStyle,Ja=this.components.data,Oa=a.components.numberFormatter,Xa,db,Ra=a.isBar,La=a.is3D,
bb,cb,fb,nb,sb,Sa,Ab=-Infinity,qb=Infinity,tb,Ta,mb=H(p.tltype,z),lb=H(p.trtype,z),fa=H(p.bltype,z),ob=H(p.brtype,z),Aa,Bb,Cb,rb,vb=z,ra=z,xb=z,zb=z,gb,Eb,ub,yb,Gb,Fb,Db;u=f.showplotborder=h(p.showplotborder,La?0:1);f.plotDashLen=W=h(p.plotborderdashlen,5);f.plotDashGap=Y=h(p.plotborderdashgap,4);f.plotfillAngle=Q=h(360-p.plotfillangle,Ra?180:90);f.plotFillAlpha=ba=q(l.alpha,p.plotfillalpha,za);f.plotColor=v=q(l.color,v);f.isRoundEdges=U=h(p.useroundedges,0);f.plotRadius=h(p.useRoundEdges,f.isRoundEdges?
1:0);f.plotFillRatio=ka=q(l.ratio,p.plotfillratio);f.plotgradientcolor=oa=t.getDefinedColor(p.plotgradientcolor,r.getColor("plotGradientColor"));!B&&(oa=G);f.plotBorderAlpha=pa=u?q(p.plotborderalpha,ba,za):0;f.plotBorderColor=M=q(p.plotbordercolor,La?Ga:r.getColor("plotBorderColor"));f.plotBorderThickness=V=h(p.plotborderthickness,1);f.plotBorderDashStyle=Fa=A?Wa(W,Y,V):"none";f.showValues=h(l.showvalues,p.showvalues,1);f.valuePadding=h(p.valuepadding,2);f.enableAnimation=bb=h(p.animation,p.defaultanimation,
1);f.animation=bb?{duration:1E3*h(p.animationduration,1)}:!1;f.transposeAnimation=h(p.transposeanimation,bb);f.transposeAnimDuration=1E3*h(p.transposeanimduration,.2);f.showShadow=U||La?h(p.showshadow,1):h(p.showshadow,r.getColor("showShadow"));f.showHoverEffect=ca=h(p.plothovereffect,p.showhovereffect,void 0);f.showTooltip=h(p.showtooltip,1);f.definedGroupPadding=X(h(p.plotspacepercent),0);f.plotSpacePercent=X(h(p.plotspacepercent,20)%100,0);f.maxColWidth=h(Ra?p.maxbarheight:p.maxcolwidth,50);f.plotPaddingPercent=
h(p.plotpaddingpercent);f.rotateValues=h(p.rotatevalues)?270:0;f.placeValuesInside=h(p.placevaluesinside,0);ub=e.inCanfontFamily;yb=parseInt(e.inCanfontSize,10);Gb=e.inCancolor;f.tlLabelStyle={fontFamily:q(p.tlfont,ub),fontSize:h(p.tlfontsize,yb)+"px",color:aa(q(p.tlfontcolor,Gb),100),fontWeight:w,fontStyle:w};Ic(f.tlLabelStyle);f.trLabelStyle={fontFamily:q(p.trfont,ub),fontSize:h(p.trfontsize,yb)+"px",color:aa(q(p.trfontcolor,Gb),100),fontWeight:w,fontStyle:w};f.brLabelStyle={fontFamily:q(p.brfont,
ub),fontSize:h(p.brfontsize,yb)+"px",color:aa(q(p.brfontcolor,Gb),100),fontWeight:w,fontStyle:w};f.blLabelStyle={fontFamily:q(p.blfont,ub),fontSize:h(p.blfontsize,yb)+"px",color:aa(q(p.blfontcolor,Gb),100),fontWeight:w,fontStyle:w};f.use3DLighting=h(p.use3dlighting,1);f.parentYAxis=cb=q(l.parentyaxis&&l.parentyaxis.toLowerCase(),kb)===eb?1:0;Ja||(Ja=this.components.data=[]);for(Sa=0;Sa<n;Sa++)R=k&&k[Sa],na=(xa=Ja[Sa])&&xa.config,xa||(xa=Ja[Sa]={graphics:{}}),xa.config||(na=Ja[Sa].config={}),na.showValue=
h(R.showvalue,f.showValues),na.setValue=wa=Oa.getCleanValue(R.value),na.setLink=q(R.link),na.toolTipValue=Xa=Oa.dataLabels(wa,cb),na.setDisplayValue=db=E(R.displayvalue),na.displayValue=q(db,Xa),fb=h(R.dashed),nb=h(R.dashlen,W),sb=Y=h(R.dashgap,Y),Ab=X(Ab,wa),qb=da(qb,wa),na.plotBorderDashStyle=va=1===fb?Wa(nb,sb,V):0===fb?"none":Fa,m?(v=r.getPlotColor(Sa),v=q(R.color,v),ka=q(R.ratio,f.plotFillRatio)):v=q(R.color,f.plotColor),na.plotFillAlpha=ba=q(R.alpha,f.plotFillAlpha),0>wa&&!U&&(L=Q,Q=Ra?180-
Q:360-Q),na.colorArr=t.graphics.getColumnColor(v+","+f.plotgradientcolor,ba,ka=f.plotFillRatio,Q,U,f.plotBorderColor,pa.toString(),Ra?1:0,La?!0:!1),D=na.toolTipValue,L&&(Q=L);f.maxValue=Ab;f.minValue=qb;tb=Ab-qb;if(Ca&&!ea)d({min:qb,max:Ab}),this.components.colorRange=sa=b.colorRange;else{this.components.colorRange=sa=new Qa({colorRange:g.colorrange,dataMin:qb,dataMax:Ab,sortLegend:0,mapByCategory:ea,defaultColor:"cccccc",numberFormatter:Oa});f.colorMap=[];for(Sa=0;Sa<sa.colorArr.length;Sa++)f.colorMap[Sa]=
{config:sa.colorArr[Sa],dataSet:this},f.colorMap[Sa].config.visible=!0;0===f.colorMap.length&&(a.setChartMessage(),b&&b.elem&&b.elem.gl.carpet.group.hide())}for(Sa=0;Sa<n;Sa++)R=k&&k[Sa],na=(xa=Ja[Sa])&&xa.config,na.percentValue=Da?gb=R.value&&qa((R.value-qb)/tb*1E4)/100:void 0,na.value=Fb=ea?R.colorrangelabel||R.categoryid:Da?gb:na.setValue,Ca&&!ea?Db=sa.getColorByValue(Fb):(Ta=sa.getColorObj(Fb),xa.legendItemIndex=Ta.seriesIndex),void 0===Ta&&void 0===Db?na.visible=!1:Ta&&Ta.outOfRange?(na.visible=
!1,na.displayValue=G):(na.visible=!0,v=q(R.color,Ta&&Ta.code||Db),na.color=aa(v,q(R.alpha,f.plotFillAlpha)),0!==ca&&(Ba=q(R.hovercolor,l.hovercolor,p.plotfillhovercolor,p.columnhovercolor,v),Ia=q(R.hoveralpha,l.hoveralpha,p.plotfillhoveralpha,p.columnhoveralpha,"25"),Ka=q(R.hovergradientcolor,l.hovergradientcolor,p.plothovergradientcolor,oa),!Ka&&(Ka=G),Ua=q(R.hoverratio,l.hoverratio,p.plothoverratio,ka),Na=h(360-R.hoverangle,360-l.hoverangle,360-p.plothoverangle,Q),Va=q(R.borderhovercolor,l.borderhovercolor,
p.plotborderhovercolor,M),Ya=q(R.borderhoveralpha,l.borderhoveralpha,p.plotborderhoveralpha,pa,ba),Pa=h(R.borderhoverthickness,l.borderhoverthickness,p.plotborderhoverthickness,V),Za=h(R.borderhoverdashed,l.borderhoverdashed,p.plotborderhoverdashed),ua=h(R.borderhoverdashgap,l.borderhoverdashgap,p.plotborderhoverdashgap,W),$a=h(R.borderhoverdashlen,l.borderhoverdashlen,p.plotborderhoverdashlen,Y),ab=Za?Wa($a,ua,Pa):va,1==ca&&Ba===v&&(Ba=Ob(Ba,70)),pb=t.graphics.getColumnColor(Ba,Ia,Ua,Na,U,Va,Ya.toString(),
Ra?1:0,La?!0:!1),na.setRolloutAttr={fill:ga(na.color),stroke:u&&ga(pb[1]),"stroke-width":V,"stroke-dasharray":va},na.setRolloverAttr={fill:ga(pb[0]),stroke:u&&ga(pb[1]),"stroke-width":Pa,"stroke-dasharray":ab}),Da&&(gb=Oa.percentValue(gb)),na.setValue=wa=Oa.getCleanValue(R.value),na.toolTipValue=Xa=Oa.dataLabels(wa,cb),D=na.toolTipValue,Z=H(E(q(R.tooltext,l.plottooltext,p.plottooltext))),na.tlLabel=Aa=E(q(R.tllabel,R.ltlabel)),na.trLabel=Bb=E(q(R.trlabel,R.rtlabel)),na.blLabel=Cb=E(q(R.bllabel,R.lblabel)),
na.brLabel=rb=E(q(R.brlabel,R.rblabel)),db=H(E(R.displayvalue)),Eb=ea?db:q(R.displayvalue,D),na.displayValue=q(db,gb,na.toolTipValue),mb!==z&&(vb="<b>"+mb+O+"</b>"),lb!==z&&(ra="<b>"+lb+O+"</b>"),fa!==z&&(xb="<b>"+fa+O+"</b>"),ob!==z&&(zb="<b>"+ob+O+"</b>"),ya=Ea.getCategoryFromId(k[Sa].columnid.toLowerCase()),Ha=la.getCategoryFromId(k[Sa].rowid.toLowerCase()),C?(null===D?I=!1:void 0!==Z?(F=[1,2,5,6,7,14,93,94,95,96,97,98,112,113,114,115,116,117],J={formattedValue:D,value:R.value,yaxisName:K,xaxisName:N,
displayValue:db,percentValue:Da?gb:z,tlLabel:Aa,trLabel:Bb,blLabel:Cb,brLabel:rb,rowLabel:Ha.catObj&&Ha.catObj.label,columnLabel:ya.catObj&&ya.catObj.label,percentDataValue:Da?gb:z,trtype:lb,tltype:mb,brType:ob,blType:fa,colorRangeLabel:na.colorRangeLabel},I=T(Z,F,J,R,p,J)):I=(Da?"<b>Value"+O+"</b>"+D+"<br /><b>Percentage"+O+"</b>"+gb:Eb)+(Aa!==z?"<br />"+(vb+Aa):z)+(Bb!==z?"<br />"+ra+Bb:z)+(Cb!==z?"<br />"+xb+Cb:z)+(rb!==z?"<br />"+zb+rb:z),na.toolText=I,na.setTooltext=I):na.toolText=!1);!1===a.hasLegend||
Ca&&!ea||this._addLegend()},init:function(a){var c=this.chart,d=c.components,b=a.parentyaxis&&a.parentyaxis.toLowerCase()===eb?1:0,d=d.yAxis[b];if(!a)return!1;this.JSONData=a;this.yAxis=d;this.chartGraphics=c.chartGraphics;this.components={};this.graphics={};this.visible=1===h(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},_addLegend:function(){var a=this.components.data,c=this.chart,d=c.jsonData.chart,b,e,f=this.config.colorMap,g=this.components.colorRange,l,k,
m,n;k=c.components.legend;d=h(d.us3dlighting,d.useplotgradientcolor,1);k.emptyItems();k=0;for(m=f.length;k<m;k++)n=f[k],l=g.colorArr[k].code,b=Ob(l,60).replace(bc,mb),Ob(l,40),d?(e=Ob(l,40),e={FCcolor:{color:l+","+l+","+e,ratio:"0,70,30",angle:270,alpha:"100,100,100"}}):e={FCcolor:{color:l,angle:0,ratio:Ea,alpha:za}},b={fillColor:ga(e),label:n.config.label,rawFillColor:l,strokeColor:ga(b),datasetObj:this},f[k].legendItemId=c.components.legend.addItems(n,this.legendInteractivity,b);for(k=0;k<a.length;k++)for(d=
g.getColorObj(a[k].config.value).code,c=0;c<f.length;c++)if(f[c].config.code==d){a[k].legendItemId=f[c].legendItemId;a[k].datasetIndex=c;a[k].datasetName=f[c].config.label;break}},legendInteractivity:function(a,c){var d=this.config,b=a.config.visible,e=a.dataSet,f=c.config,g=c.graphics,l=d.itemHiddenStyle.color,d=d.itemStyle.color,h=f.fillColor,f=f.strokeColor;b?e.hide(a):e.show(a);b?(g.legendItemSymbol&&g.legendItemSymbol.attr({fill:l,stroke:l}),g.legendItemText&&g.legendItemText.attr({fill:l}),
g.legendIconLine&&g.legendIconLine.attr({stroke:l})):(g.legendItemSymbol&&g.legendItemSymbol.attr({fill:h,stroke:f}),g.legendItemText&&g.legendItemText.attr({fill:d}),g.legendIconLine&&g.legendIconLine.attr({stroke:h}))},hide:function(a){var c=this.components.data,d=this.chart.get(Z,xa),b=d.animType,e=d.animObj,f=d.dummyObj,d=d.duration,g=this.components.colorRange,l,h,k,m,p;m=a.config.code;l=0;for(h=c.length;l<h;l++)p=g.getColorObj(c[l].config.value).code,k=c[l].config,m===p&&(c[l].graphics.element&&
c[l].graphics.element.animateWith(f,e,{"fill-opacity":0,"stroke-width":0},d,b),c[l].graphics.hotElement&&c[l].graphics.hotElement.hide(),c[l].graphics.valEle&&c[l].graphics.valEle.hide(),c[l].graphics.tlLabel&&c[l].graphics.tlLabel.hide(),c[l].graphics.trLabel&&c[l].graphics.trLabel.hide(),c[l].graphics.blLabel&&c[l].graphics.blLabel.hide(),c[l].graphics.brLabel&&c[l].graphics.brLabel.hide(),k.visible=!1,c[l].visible=!1);a.visible=!1;a.config.visible=!1},show:function(a){var c=this.components.data,
d=this.config,b=this.chart.get(Z,xa),e=b.animType,f=b.animObj,g=b.dummyObj,b=b.duration,h,k,m=this.components.colorRange,n,p,q,r;q=a.config.code;n=0;for(p=c.length;n<p;n++)h=c[n].config,k=h.plotFillAlpha/100,r=m.getColorObj(c[n].config.value).code,q===r&&(c[n].graphics.element&&c[n].graphics.element.attr({visibility:ca}).animateWith(g,f,{"fill-opacity":k,"stroke-width":d.plotBorderThickness},b,e),c[n].graphics.hotElement&&c[n].graphics.hotElement.show(),c[n].graphics.valEle&&c[n].graphics.valEle.show(),
c[n].graphics.tlLabel&&c[n].graphics.tlLabel.show(),c[n].graphics.trLabel&&c[n].graphics.trLabel.show(),c[n].graphics.blLabel&&c[n].graphics.blLabel.show(),c[n].graphics.brLabel&&c[n].graphics.brLabel.show(),h.visible=!0,c[n].visible=!0);a.visible=!0;a.config.visible=!0},updatePlot:function(a,c){var d=this.config,b=this.chart.get(Z,xa),e=b.animType,f=b.animObj,g=b.dummyObj,b=b.duration,h,k,n=this.components.data,m,p,q;m=0;for(p=n.length;m<p;m++)h=n[m].config,k=h.plotFillAlpha/100,q=n[m].config.value,
q<a||q>c?h.visible&&(n[m].graphics.element&&n[m].graphics.element.animateWith(g,f,{"fill-opacity":0,"stroke-width":0},b,e),n[m].graphics.hotElement&&n[m].graphics.hotElement.hide(),n[m].graphics.valEle&&n[m].graphics.valEle.hide(),n[m].graphics.tlLabel&&n[m].graphics.tlLabel.hide(),n[m].graphics.trLabel&&n[m].graphics.trLabel.hide(),n[m].graphics.blLabel&&n[m].graphics.blLabel.hide(),n[m].graphics.brLabel&&n[m].graphics.brLabel.hide(),h.visible=!1,n[m].visible=!1):h.visible||(n[m].graphics.element&&
n[m].graphics.element.animateWith(g,f,{"fill-opacity":k,"stroke-width":d.plotBorderThickness},b,e),n[m].graphics.hotElement&&n[m].graphics.hotElement.show(),n[m].graphics.valEle&&n[m].graphics.valEle.show(),n[m].graphics.tlLabel&&n[m].graphics.tlLabel.show(),n[m].graphics.trLabel&&n[m].graphics.trLabel.show(),n[m].graphics.blLabel&&n[m].graphics.blLabel.show(),n[m].graphics.brLabel&&n[m].graphics.brLabel.show(),h.visible=!0,n[m].visible=!0)},draw:function(){var a=this.config,c=this.JSONData.data,
d,b,e,f=this.visible;e=this.chart;var g=e.getJobList(),h=e.components.paper,k=e.components.xAxis[0],m=e.components.yAxis[0],n=e.components.gradientLegend;d=e.graphics.datasetGroup;var p,q,r=e.graphics,u=e.config.showtooltip,v=e.get(Z,xa),w=v.animType,z=v.animObj,A=v.dummyObj,B=v.duration,C,E,H,D=this.components.data,J,K,F,L,I=m.getAxisBase();b=m.yBasePos=m.getAxisPosition(I);var N=0,I=a.showShadow,O=a.plotBorderThickness,T=a.plotRadius,U=this.graphics.container,X=this.graphics.trackerContainer;E=
this.graphics.dataLabelContainer;var Q=this.graphics.shadowContainer;L=r.datalabelsGroup;var W=r.trackerGroup,Y,r=e.components.legend.config.isActive,V,ba=[],M=(this.components.removeDataArr||[]).length;n&&n.enabled&&(n.resetLegend(),n.clearListeners());n.notifyWhenUpdate(this.updatePlot,this);U||(U=this.graphics.container=h.group(Xa,d),f||U.hide());X||(X=this.graphics.trackerContainer=h.group(Va,W),f||X.hide());Q||(Q=this.graphics.shadowContainer=h.group(ac,d).toBack(),f||Q.hide());E||(E=this.graphics.dataLabelContainer=
h.group(mc,L),f||E.hide());d=c&&c.length;X=e.config.canvasWidth/e.jsonData.columns.column.length;E=e.config.canvasHeight/e.jsonData.rows.row.length;for(e=0;e<d;e++)if(J=D[e],W=J.trackerConfig={},L=J&&J.config,b=L.setValue,n&&n.enabled&&!r&&(L.visible=!0),N=k.getCategoryFromId(c[e].columnid.toLowerCase()),V=m.getCategoryFromId(c[e].rowid.toLowerCase()),N.catObj&&V.catObj&&L.value!==G)if(a.mapByCategory||null!==b){if(p=N.index.toString()+V.index.toString(),ba.push(p),K=L.setLink,Y=L.colorArr,J.graphics||
(D[e].graphics={}),F=L.displayValue,p=k.getAxisPosition(N.index)-X/2,q=m.getAxisPosition(V.index)-E/2,C=X,H=L.toolText,J.graphics.valEle&&J.graphics.valEle.hide(),J.graphics.tlLabel&&J.graphics.tlLabel.hide(),J.graphics.trLabel&&J.graphics.trLabel.hide(),J.graphics.blLabel&&J.graphics.blLabel.hide(),J.graphics.brLabel&&J.graphics.brLabel.hide(),W.eventArgs={index:e,link:K,value:L.percentValue||b,displayValue:F,columnId:N.catObj.id,rowId:V.catObj.id,tlLabel:L.tlLabel,trLabel:L.trLabel,blLabel:L.blLabel,
brLabel:L.brLabel,toolText:H?H:"",id:G,datasetIndex:r?J.datasetIndex:void 0,datasetName:r?J.datasetName:void 0,visible:f},b=q,N=E,b={x:p,y:b,width:C,height:N||1,r:T,ishot:!u,fill:L.color,stroke:ga(Y[1]),"stroke-width":B?0:O,"stroke-dasharray":void 0,"fill-opacity":B?0:L.plotFillAlpha/100,"stroke-linejoin":Pa,visibility:L.visible?ca:pa},J._xPos=p,J._yPos=q,J._height=E,J._width=C,J.graphics.element?(b={x:p,y:q,width:C,height:E||1},J=J.graphics.element,J.animateWith(A,z,b,B,v.animType),J.attr({ishot:!u,
fill:L.color,stroke:ga(Y[1]),"fill-opacity":L.visible?L.plotFillAlpha/100:0,"stroke-width":L.visible?O:0,"stroke-dasharray":void 0,"stroke-linejoin":Pa,visibility:L.visible?ca:pa}),L.elemCreated=!1):(J=J.graphics.element=h.rect(b,U),J.animateWith(A,z,{"fill-opacity":L.plotFillAlpha/100,"stroke-width":O},B,w),L.elemCreated=!0),J.shadow({opacity:I},Q).data("BBox",void 0),K||u)E<ab&&(q-=(ab-E)/2,E=ab),W.attr={x:p,y:q,width:C,height:E,r:T,cursor:K?"pointer":G,stroke:Ma,"stroke-width":O,fill:Ma,ishot:!0,
visibility:L.visible?ca:pa}}else J.graphics.element&&J.graphics.element.hide(),J.graphics.hotElement&&J.graphics.hotElement.hide();g.trackerDrawID.push($a.addJob(this.drawTracker,this,[],t.priorityList.tracker));this.drawn?this.drawLabel():g.labelDrawID.push($a.addJob(this.drawLabel,this,[],t.priorityList.label));this.drawn=!0;M&&this.remove()},drawTracker:function(){var a=this.JSONData.data,c=this.chart,d=this.components,b=d.pool,d=d.data,e=c.config.plothovereffect,f=c.components.paper,a=a&&a.length,
g=this.graphics.trackerContainer,h,k,n,m,p,q,r,t,u=function(a){ka.call(this,c,a)},v=function(a){return function(b){var d=this.getData();0!==d.showHoverEffect&&!0!==d.draged&&(a.attr(this.getData().setRolloverAttr),ka.call(this,c,b,"DataPlotRollOver"))}},w=function(a){return function(b){var d=this.getData();0!==d.showHoverEffect&&!0!==d.draged&&(a.attr(this.getData().setRolloutAttr),ka.call(this,c,b,"DataPlotRollOut"))}};for(n=0;n<a;n++)if(m=d[n],void 0!==m&&(k=m&&m.config,h=m.trackerConfig,(p=m.graphics)&&
p.element)){p=p.element;r=m.graphics.hotElement;if(t=h.attr)(r=m.graphics.hotElement)?r.attr(t):b&&b.hotElement[0]?(r=m.graphics.hotElement=b.hotElement[0],b.hotElement.splice(0,1)):(r=m.graphics.hotElement=f.rect(t,g),q=!0);(r||p).data("eventArgs",h.eventArgs).data(O,e).data("setRolloverAttr",k.setRolloverAttr||{}).data("setRolloutAttr",k.setRolloutAttr||{}).tooltip(h.eventArgs&&h.eventArgs.toolText);(q||k.elemCreated)&&(r||p).click(u).hover(v(p),w(p))}},drawLabel:function(){var a=this.chart,c=a.config,
d=a.graphics,b=a.components.paper,e=a.linkedItems.smartLabel,f=a.config.dataLabelStyle,g=this.config,h=this.JSONData.data.length,q=this.components.data,t=this.visible,u,p,v,w,A,B,C=this.graphics.dataLabelContainer,E=this.graphics.tlLabelContainer,H=this.graphics.blLabelContainer,K=this.graphics.trLabelContainer,N=this.graphics.brLabelContainer,O,T,D,J,X,F,L,I,W,Y,V,U,ba,Q,a=a.get(Z,xa),aa=a.animObj,da=a.dummyObj,ga=a.duration,d=d.datalabelsGroup;C||(C=this.graphics.dataLabelContainer=b.group(mc,d),
t||C.hide());E||(E=this.graphics.tlLabelContainer=b.group("tlLabel",d));H||(H=this.graphics.blLabelContainer=b.group("blLabel",d));K||(K=this.graphics.trLabelContainer=b.group("trLabel",d));N||(N=this.graphics.brLabelContainer=b.group("brLabel",d));t=g.tlLabelStyle;d=g.trLabelStyle;O=g.blLabelStyle;T=g.brLabelStyle;u={fontFamily:t.fontFamily,fontSize:t.fontSize,lineHeight:t.lineHeight,fontWeight:t.fontWeight,fontStyle:t.fontStyle};v={fontFamily:d.fontFamily,fontSize:d.fontSize,lineHeight:d.lineHeight,
fontWeight:d.fontWeight,fontStyle:d.fontStyle};D={fontFamily:O.fontFamily,fontSize:O.fontSize,lineHeight:O.lineHeight,fontWeight:O.fontWeight,fontStyle:O.fontStyle};J={fontFamily:T.fontFamily,fontSize:T.fontSize,lineHeight:T.lineHeight,fontWeight:T.fontWeight,fontStyle:T.fontStyle};e.useEllipsesOnOverflow(c.useEllipsesWhenOverflow);e.setStyle(f);E.css(u);H.css(D);K.css(v);N.css(J);for(u=0;u<h;u++)if(c=q[u],void 0!==c&&(v=c.graphics))if(v=c&&c.config,D=v.setValue,g.mapByCategory||null!==D){if(p=v.displayValue,
D=c.graphics.element)D=c._width,J=c._height,X=c._xPos,F=c._yPos,e.setStyle(f),cb(p)&&p!==z&&v.showValue?(L=e.getSmartText(p,D,J,!1),p=L.text,w=F+.5*J,A=X+.5*D,c.graphics.valEle?(c.graphics.valEle.animateWith(da,aa,{x:A,y:w},ga,a.animType),c.graphics.valEle.attr({text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:f.color,direction:v.textDirection,"text-bound":[f.backgroundColor,f.borderColor,f.borderThickness,f.borderPadding,f.borderRadius,f.borderDash]})):(p={text:p,title:L.tooltext||G,visibility:v.visible?
ca:pa,fill:f.color,direction:v.textDirection,x:A,y:w,"text-bound":[f.backgroundColor,f.borderColor,f.borderThickness,f.borderPadding,f.borderRadius,f.borderDash]},c.graphics.valEle=b.text(p,C)),v.visible&&c.graphics.valEle.show(),p=v.tlLabel,A=v.trLabel,I=v.blLabel,W=v.brLabel,B=cb(p)&&p!==z,Y=cb(A)&&A!==z,V=cb(I)&&I!==z,U=cb(W)&&W!==z,ba=D*(B&&Y?.5:.9),Q=.5*(J-(L&&L.height||0)),w=F+4,B?(e.setStyle(t),L=e.getSmartText(p,ba,Q,!1),p=L.text,B=X,c.graphics.tlLabel?(c.graphics.tlLabel.animateWith(da,aa,
{x:B+4,y:w},ga,a.animType),c.graphics.tlLabel.attr({text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:t.color,"text-anchor":n,"vertical-align":k,direction:v.textDirection,"text-bound":[t.backgroundColor,t.borderColor,t.borderThickness,t.borderPadding,t.borderRadius,t.borderDash]})):(p={text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:t.color,"text-anchor":n,"vertical-align":k,direction:v.textDirection,x:B+4,y:w,"text-bound":[t.backgroundColor,t.borderColor,t.borderThickness,t.borderPadding,
t.borderRadius,t.borderDash]},c.graphics.tlLabel=b.text(p,E)),v.visible&&c.graphics.tlLabel.show()):c.graphics.tlLabel&&(c.graphics.tlLabel.remove(),delete c.graphics.tlLabel),Y?(e.setStyle(d),L=e.getSmartText(A,ba,Q,!1),p=L.text,B=X+D,c.graphics.trLabel?(c.graphics.trLabel.animateWith(da,aa,{x:B-4,y:w},ga,a.animType),c.graphics.trLabel.attr({text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:d.color,"text-anchor":m,"vertical-align":k,direction:v.textDirection,"text-bound":[d.backgroundColor,
d.borderColor,d.borderThickness,d.borderPadding,d.borderRadius,d.borderDash]})):(p={text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:d.color,"text-anchor":m,"vertical-align":k,direction:v.textDirection,x:B-4,y:w,"text-bound":[d.backgroundColor,d.borderColor,d.borderThickness,d.borderPadding,d.borderRadius,d.borderDash]},c.graphics.trLabel=b.text(p,K)),v.visible&&c.graphics.trLabel.show()):c.graphics.trLabel&&(c.graphics.trLabel.remove(),delete c.graphics.trLabel),w=F+J-4,V?(e.setStyle(O),
L=e.getSmartText(I,ba,Q,!1),p=L.text,B=X,c.graphics.blLabel?(c.graphics.blLabel.animateWith(da,aa,{x:B+4,y:w},ga,a.animType),c.graphics.blLabel.attr({text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:O.color,"text-anchor":n,"vertical-align":r,direction:v.textDirection,"text-bound":[O.backgroundColor,O.borderColor,O.borderThickness,O.borderPadding,O.borderRadius,O.borderDash]})):(p={text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:O.color,"text-anchor":n,"vertical-align":r,direction:v.textDirection,
x:B+4,y:w,"text-bound":[O.backgroundColor,O.borderColor,O.borderThickness,O.borderPadding,O.borderRadius,O.borderDash]},c.graphics.blLabel=b.text(p,H)),v.visible&&c.graphics.blLabel.show()):c.graphics.blLabel&&(c.graphics.blLabel.remove(),delete c.graphics.blLabel),U?(e.setStyle(O),L=e.getSmartText(W,ba,Q,!1),p=L.text,B=X+D-4,c.graphics.brLabel?(c.graphics.brLabel.animateWith(da,aa,{x:B,y:w},ga,a.animType),c.graphics.brLabel.attr({text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:T.color,
"text-anchor":m,"vertical-align":r,direction:v.textDirection,"text-bound":[T.backgroundColor,T.borderColor,T.borderThickness,T.borderPadding,T.borderRadius,T.borderDash]})):(p={text:p,title:L.tooltext||G,visibility:v.visible?ca:pa,fill:T.color,"text-anchor":m,"vertical-align":r,direction:v.textDirection,x:B,y:w,"text-bound":[T.backgroundColor,T.borderColor,T.borderThickness,T.borderPadding,T.borderRadius,T.borderDash]},c.graphics.brLabel=b.text(p,N)),v.visible&&c.graphics.brLabel.show()):c.graphics.brLabel&&
(c.graphics.brLabel.remove(),delete c.graphics.brLabel)):(c.graphics.valEle&&(c.graphics.valEle.remove(),delete c.graphics.valEle),c.graphics.tlLabel&&(c.graphics.tlLabel.remove(),delete c.graphics.tlLabel),c.graphics.trLabel&&(c.graphics.trLabel.remove(),delete c.graphics.trLabel),c.graphics.blLabel&&(c.graphics.blLabel.remove(),delete c.graphics.blLabel),c.graphics.brLabel&&(c.graphics.brLabel.remove(),delete c.graphics.brLabel))}else c.graphics.valEle&&c.graphics.valEle.hide(),c.graphics.tlLabel&&
c.graphics.tlLabel.hide(),c.graphics.trLabel&&c.graphics.trLabel.hide(),c.graphics.blLabel&&c.graphics.blLabel.hide(),c.graphics.brLabel&&c.graphics.brLabel.hide();this.labelDrawn=!0},remove:function(){var a=this.components,c=a.removeDataArr,d=a.pool||(a.pool={element:[],hotElement:[],label:[]}),b=c.length,e,f=this.maxminFlag,g,h,k;for(k=0;k<b;k++)if(e=c[0],c.splice(0,1),e&&e.graphics){h=e.graphics;for(g in h)h[g].stop(),h[g].hide();e.graphics.element&&(d.element=d.element.concat(e.graphics.element));
e.graphics.hotElement&&(d.hotElement=d.hotElement.concat(e.graphics.hotElement));e.graphics.label&&(d.label=d.label.concat(e.graphics.label))}a.pool=d;f&&this.setMaxMin()},getEventArgs:function(a){var c=a.dataset.config||{};return{datasetName:c.label,datasetIndex:a.index,visible:c.visible}}},"Column"]);FusionCharts.register("component",["datasetGroup","heatmap",{},C]);FusionCharts.register("component",["dataset","Kagi",{type:"kagi",_parseShadowOptions:function(){var a=this.config;return{opacity:h(this.chart.jsonData.chart.showshadow,
1)?a.alpha/100:0}},configure:function(){var a,c,d=this.chart,b=d.components.xAxis[0],e=0,f,g=[],l,m,n,v,p,u,w,z,A,B,C=t.getDashStyle,E,G,H,K,N,D,J,O,F,L;A=0;var I;this.__base__.configure.call(this);a=this.components;f=a.data;l=this.config;m=this.JSONData.data;d=d.jsonData.chart;n=l.maxValue;v=l.minValue;c=a.removeDataArr||(a.removeDataArr=[]);a=!1;p=0;u=h(d.reversalvalue,-1);w=h(d.reversalpercentage,5);for(z=0;z<f.length;z+=1)f[z].config.__nullCount=A,null===f[z].config.setValue&&(c.push(f.splice(z,
1)[0]),A++,--z);if(f.length){l.rallyColor=q(d.rallycolor,"FF0000");l.rallyAlpha=h(d.rallyalpha,d.linealpha,100);l.declineColor=q(d.declinecolor,"0000FF");l.declineAlpha=h(d.declinealpha,d.linealpha,100);l.canvasPadding=h(d.canvaspadding,15);l.maxHShiftPercent=h(d.maxhshiftpercent,10);l.rallyThickness=h(d.rallythickness,d.linethickness,2);z=h(d.rallydashlen,d.linedashlen,5);A=h(d.rallydashgap,d.linedashgap,4);l.declineThickness=h(d.declinethickness,d.linethickness,2);c=h(d.declinedashlen,d.linedashlen,
5);B=h(d.declinedashgap,d.linedashgap,4);l.lineDashed={"true":h(d.rallydashed,d.linedashed,0),"false":h(d.declinedashed,d.linedashed,0)};l.rallyDashed=h(d.rallydashed,d.linedashed,0)?C(z,A,l.rallyThickness):"none";l.declineDashed=h(d.declinedashed,d.linedashed,0)?C(c,B,l.declineThickness):"none";l.canvasPadding=h(d.canvaspadding,this.canvasPadding,15);u=0<u?u:w*(n-v)/100;C=f[0].config.setValue;n=function(a,b){for(var c,d=1,e=f[0].config.setValue;d<a;)c=f[d].config.setValue,b?c<=e&&(f[d].config.isDefined=
!1):c>=e&&(f[d].config.isDefined=!1),d+=1;f[0].config.vAlign=b?r:k;f[0].config.align="center"};v=m.length;for(w=z=0;w<v;w+=1,z+=1)if(E=m[w],!E||!E.vline)if(c=f[z]&&f[z].config,G&&(G=!1),c&&(c.isDefined=!0),E.tooltext||this.JSONData.plottooltext||d.plottooltext||c&&(c.toolText+=c.displayValue),z&&c){c.isShift=void 0;H=f[z-1].config;c.vAlign="middle";c.align=Jc;c.showLabel=!1;A=null;B=c.setValue;K=f[z+1]&&f[z+1].config.setValue;N=Ua(C-B);a?B<J&&D?D=!1:B>O&&!D&&(D=!0):(B>C&&N>u?(D=!0,J=C,O=null,a=F=
!0,n(z,D)):B<C&&N>u?(D=!1,J=null,O=C,F=!1,a=!0,n(z,D)):(F=D=null,a=!1),cb(H)&&(H.isRally=D),null!=D&&(f[0].config.isRally=D));c.isRally=D;if(F&&B<C||!F&&B>C)A=C;L=A?A:B;N=Ua(L-K);K=null==F?null:F?L>K&&N>=u:L<K&&N>=u;if(H&&H.isShift)for(F?(J=C,I=r):F||(O=C,I=k),H=z;1<H;--H)if(f[H].y==C){f[H].vAlign=I;f[H].align="center";f[H].showLabel=!0;break}K?(p+=1,G=!0,F=!F,c.isShift=!0,C=L,g.push(m[z+c.__nullCount]),e=this._appendCategory(e,z,g,0)):F&&B>C||!F&&B<C?C=B:A=C;c.plotValue=A;c.objParams={isRally:D,
lastHigh:O,lastLow:J,isRallyInitialised:a}}this._appendCategory(e,z,g,1);g.push(E);b.setCategory(g);l.shiftCount=p+1}},_appendCategory:function(a,c,d,b){var e,f,g,l=this.JSONData.catData;if(a<l.length)for(e=a;e<l.length;e+=1,a=e){f=l[e];g=f.data;f=f.index-(e+1);if(f<c)g.lineposition=h(g.lineposition,b);else if(f>c)break;d.push(g)}return a},draw:function(){var a,c,d,b=this,e=b.graphics,f=b.JSONData;a=b.chart;var g=a.getJobList(),h=a.components,k=a.config,m=b.config,n=b.components,p=n.data,q=(n=n.removeDataArr)&&
n.length,r=p&&p.length,n=p&&p.length,u=h.paper,w=h.xAxis[0],z,A,h=a.graphics,B=h.datalabelsGroup,C,E,G,H,D,J=b.components.data,K,F,L,I=e.container,N=e.trackerContainer,O=h.tracker,T,U=h.datasetGroup,W,h=m.shadow,Q,Y=e.dataLabelContainer,V={},aa,ca,M,ka=function(){I.lineGroup.attr({"clip-rect":null});I.lineShadowGroup.show();I.anchorShadowGroup.show();I.anchorGroup.show();N.show();Y&&Y.show()},oa=!0,R=w.getAxisPosition(0),wa=w.getAxisPosition(1)-R,sa={"clip-rect":[X(0,k.canvasLeft),X(0,k.canvasTop),
X(1,k.canvasWidth),X(1,k.canvasHeight)]},na={"clip-rect":[X(0,k.canvasLeft),X(0,k.canvasTop),1,X(1,k.canvasHeight)]},k=m.rallyThickness,va=m.declineThickness,Fa={stroke:ga({color:m.rallyColor,alpha:m.rallyAlpha}),"stroke-linecap":ba,"stroke-linejoin":ba,"stroke-width":k,"stroke-dasharray":m.rallyDashed},la={stroke:ga({color:m.declineColor,alpha:m.declineAlpha}),"stroke-linecap":ba,"stroke-linejoin":ba,"stroke-width":va,"stroke-dasharray":m.declineDashed},Da={"true":k,"false":va},Ea=[],Ga=[],ea=e.rallyElem,
ya=e.declineElem,Ha=b.visible,Ba=w.getAxisPosition(0),Ca=p[0]&&!!p[0].isRally,Ma,R=R-wa/2,za,Ja,Na,Oa=e.lineElement,Qa=b.pool||(b.pool={});a=a.get(Z,xa);var Ia=a.duration||0,Ka=a.dummyObj,ua=a.animObj,Ra=0,La=a.animType,Pa;m.imagesLoaded=0;q&&b.remove();if(p.length){ea&&ea.show();ya&&ya.show();I||(I=b.graphics.container={lineShadowGroup:u.group("connector-shadow",U).attr(na),anchorShadowGroup:u.group("anchor-shadow",U).attr(na),lineGroup:u.group(v,U).attr(na),anchorGroup:u.group("anchors",U).attr(na)},
Ha||(I.lineShadowGroup.hide(),I.anchorShadowGroup.hide(),I.lineGroup.hide(),I.anchorGroup.hide()));N||(N=b.graphics.trackerContainer=u.group("line-hot").trackTooltip(!0),Ha||N.hide());J||(J=b.components.data=[]);O&&O.appendChild(N);Y||(Y=b.graphics.dataLabelContainer=b.graphics.dataLabelContainer||u.group(mc,B),Ha||Y.hide());da(r,n);if(p[0].config.setValue)za=p[0].config.plotY;else for(a=1;a<n;a+=1)if(H=p[a].config.setValue){za=p[a].config.plotY;break}Ca=!!p[0].config.isRally;a=qa(za)+Da[Ca]%2/2;
Ca?Ea.push("M",R,a,"H",Ba):Ga.push("M",R,a,"H",Ba);nb(p,function(a,e){a=a.config;K=J[e];M=K.config;c=a.trackerConfig={};d=K.graphics;Pa=d.image;W=M.hoverEffects;H=M.setValue;D=M.displayValue;Ja=p[e+1]&&p[e+1].config||{};Na=["M",Ba,za];Ca=a.isRally;a.isShift&&(Ba+=wa,za=a.graphY,Na.push("H",Ba),Na[2]=qa(Na[2])+Da[Ca]%2/2,Na=Na.toString(),Ca?Ea.push(Na):Ga.push(Na),Na=["M",Ba,za]);Ja.isChanged&&(za=Ja.ty,Na.push("V",za),Na[1]=qa(Na[1])+Da[Ca]%2/2,Na=Na.toString(),Ca?Ea.push(Na):Ga.push(Na),Na=["M",
Ba,za]);Ma=Ja.isRally;Ja.graphY!==Na[2]&&(Na.push("V",Ja.graphY),Na[1]=qa(Na[1])+Da[Ma]%2/2,Na=Na.toString(),Ma?Ea.push(Na):Ga.push(Na));za=Ja.graphY;z=K._xPos=w.getAxisPosition(a.plotX);A=K._yPos=a.plotY;V=M.anchorProps;ca=V.symbol;Q=V.shadow;C=a.finalTooltext=a.toolText;G=M.setLink;void 0!==A&&!isNaN(A)&&a.isDefined?(a.eventArgs={index:e,link:G,value:H,displayValue:D,categoryLabel:M.label,toolText:C,id:m.userID,datasetIndex:0,datasetName:f.seriesname,visible:Ha},F=L={},V.imageUrl?(aa=new bb,M.anchorImageLoaded=
!1,aa.onload=b._onAnchorImageLoad(b,e,void 0,z,A,K),aa.onerror=b._onErrorSetter(b,e),aa.src=V.imageUrl,Ra++):(Pa&&Pa.hide(),(E=d.element)?(E.animateWith(Ka,ua,{polypath:[ca[1]||2,z,A,V.radius,V.startAngle,0]},Ia,La),oa&&ka(),oa=!1):(E=Qa.element&&Qa.element.length?d.element=Qa.element.shift():d.element=u.polypath(I.anchorGroup),E.attr({polypath:[ca[1]||2,z,A,V.radius,V.startAngle,0]})),E.attr({fill:ga({color:V.bgColor,alpha:V.bgAlpha}),stroke:ga({color:V.borderColor,alpha:V.borderAlpha}),"stroke-width":V.borderThickness,
visibility:V.radius?Ha:pa}).shadow(Q,I.anchorShadowGroup),T=X(V.radius,W&&W.anchorRadius||0,ab)+V.borderThickness/2,c.trackerRadius=T),W.enabled&&(L={polypath:[W.anchorSides||2,z,A,W.anchorRadius,W.startAngle,W.dip],fill:ga({color:W.anchorColor,alpha:W.anchorBgAlpha}),stroke:ga({color:W.anchorBorderColor,alpha:W.anchorBorderAlpha}),"stroke-width":W.anchorBorderThickness},F={polypath:[V.sides,z,A,V.radius,V.startAngle,0],fill:ga({color:V.bgColor,alpha:V.bgAlpha}),stroke:ga({color:V.borderColor,alpha:V.borderAlpha}),
"stroke-width":V.borderThickness},E&&E.data("anchorRadius",V.radius).data("anchorHoverRadius",W.anchorRadius).data("setRolloverAttr",L).data("setRolloutAttr",F))):(d.element&&d.element.hide(),Pa&&Pa.hide())});Oa||(ea||(Oa=ea=e.rallyElem=u.path(I.lineGroup)),ea.animateWith(Ka,ua,{path:Ea},oa?0:Ia,La).attr(Fa).shadow(k&&h,I.lineShadowGroup),ya||(Oa=ya=e.declineElem=u.path(I.lineGroup)),ya.animateWith(Ka,ua,{path:Ga},oa?0:Ia,La).attr(la).shadow(va&&h,I.lineShadowGroup));Ia&&oa||(oa=!1);m.noOfImages=
m.totalImages=Ra;0===Ra&&(!0===b.drawn?b.drawTracker():g.trackerDrawID.push($a.addJob(b.drawTracker,b,[],t.priorityList.tracker)),b.drawn?b.drawLabel():g.labelDrawID.push($a.addJob(b.drawLabel,b,[],t.priorityList.tracker)));b.drawn=!0;I.anchorGroup.animateWith(Ka,ua,sa,Ia,La);Y.hide();I.lineShadowGroup.animateWith(Ka,ua,sa,Ia,La);I.anchorShadowGroup.animateWith(Ka,ua,sa,Ia,La);I.lineShadowGroup.animateWith(Ka,ua,sa,Ia,La);I.lineGroup.animateWith(Ka,ua,sa,Ia,La,ka)}else ea&&ea.hide(),ya&&ya.hide()},
hidingPosition:function(){return function(a){a=a.graphics.element;return{polypath:(a&&a.attr("polypath"))[3]=0,r:0,text:G}}}},"Line"]);zb.addSymbol({resizeIcon:function(a,c,d){var b=h(d,15)/3,e=[];0>b&&(b=-b,d=-d,a+=d-b/2,c+=d-b/2);for(d=3;0<d;--d)e.push("M",a-b*d,c-3,"L",a-3,c-b*d);return e},closeIcon:function(a,c,d){var b=1.3*d,e=43*Hc,f=48*Hc,g=a+b*vb(e),e=c+b*Ub(e),h=a+b*vb(f),k=c+b*Ub(f),f=.71*(d-2);d=.71*(d-2);b=["A",b,b,0,1,0,h,k];g=["M",g,e];g=g.concat(b);return g=g.concat(["M",a+f,c-d,"L",
a-f,c+d,"M",a-f,c-d,"L",a+f,c+d])},configureIcon:function(a,c,d){--d;var b=.71*d,e=.71*(d+2),f=a-d,g=c-d,h=a+d;d=c+d;var k=a+.5,m=c+.5,n=a-.5,p=c-.5,q=f-2,r=g-2,t=h+2,u=d+2,v=a+b,w=c+b,z=a-b,b=c-b,A=a+e,B=c+e;a-=e;c-=e;return["M",f,m,"L",q,m,q,p,f,p,z-.25,b+.25,a-.25,c+.25,a+.25,c-.25,z+.25,b-.25,n,g,n,r,k,r,k,g,v-.25,b-.25,A-.25,c-.25,A+.25,c+.25,v+.25,b+.25,h,p,t,p,t,m,h,m,v+.25,w-.25,A+.25,B-.25,A-.25,B+.25,v-.25,w+.25,k,d,k,u,n,u,n,d,z+.25,w+.25,a+.25,B+.25,a-.25,B-.25,z-.25,w-.25,"Z"]},axisIcon:function(a,
c,d){--d;var b=.33*d,e=d/2,f=a-d,g=c-d,h=a+e;d=c+d;a-=e;e=c+b;c-=b;return["M",f,g,"L",h,g,h,d,f,d,"M",a,e,"L",h,e,"M",a,c,"L",h,c]},loggerIcon:function(a,c,d){--d;a-=d;c-=d;var b=a+2*d,e=a+2,f=b-2,g=c+2;d=g+d;var h=d+2;return["M",a,c,"L",b,c,b,g,f,g,f,d,b,d,b,h,a,h,a,d,e,d,e,g,a,g,a,c]}})},[3,2,1,"release"]]);sb&&(Va.FusionCharts=FusionCharts);return FusionCharts});

},{}],4:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );

},{}]},{},[1]);
