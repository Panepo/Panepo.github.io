webpackJsonp([7],{1441:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),c=r(1),l=n(c),u=r(58),_=r(29),f=r(40),p=r(210),i=r(1450),s=n(i),j=(0,u.compose)((0,f.firebaseConnect)(function(e){return[{path:"projects/"+e.params.projectname}]}),(0,_.connect)(function(e,t){var r=e.firebase.data,n=t.params.projectname;return{project:r.projects&&r.projects[n]}}),(0,p.spinnerWhileLoading)(["project"])),d=function(e){var t=e.project,r=e.params;return(0,f.isEmpty)(t)?a.default.createElement("div",null,"Project not found"):a.default.createElement("div",{className:s.default.container},a.default.createElement("h2",null,"Project Container"),a.default.createElement("pre",null,"Project Key: ",r.projectname),a.default.createElement("pre",null,JSON.stringify(t,null,2)))};d.propTypes={project:l.default.object,params:l.default.object.isRequired},t.default=j(d)},1450:function(e,t){e.exports={flex:"ProjectContainer__flex___2bElP","flex-column":"ProjectContainer__flex-column___Cxl5I","flex-column-center":"ProjectContainer__flex-column-center___3kMjt","flex-row":"ProjectContainer__flex-row___1K34R","flex-row-center":"ProjectContainer__flex-row-center___1uaDk",progress:"ProjectContainer__progress___3aKMU"}}});
//# sourceMappingURL=7.496754ebdd29501f7ed7.js.map