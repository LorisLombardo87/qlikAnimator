define(["jquery","qlik","./properties","./initialproperties","./lib/js/extensionUtils","text!./lib/css/style.css","text!./lib/external/scoped-bootstrap.css","text!./lib/partials/template.html"],function(a,b,c,d,e,f,g,h){"use strict";return e.addStyleToHeader(f),e.addStyleToHeader(g),{definition:c,initialProperties:d,snapshot:{canTakeSnapshot:!0},resize:function(){},template:h,controller:["$scope","$timeout",function(c,d){function e(){c.step++,c.step<c.list.length?(c.stepValue=c.list[c.step][0],b.currApp(this).field(c.field).clear(),b.currApp(this).field(c.field).select([c.stepValue.qElemNumber],!0,!0),d(function(){e()},c.layout.props.time)):c.step==c.list.length&&d(function(){c.step=-1,b.currApp(this).field(c.field).clear()},3e3)}c.step=-1,c.stepValue="",c.play=function(){c.list=a.extend(!0,[],c.layout.qHyperCube.qDataPages[0].qMatrix),c.field=c.layout.qHyperCube.qDimensionInfo[0].qGroupFieldDefs[0],c.step=-1,c.stepValue="",e()}}],paint:function(){}}});