!function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1917,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a={year:t,month:e,day:n};return new Date(a.year,a.month-1,a.day).toDateString()},o=[new i.default({firstName:"Ryan",lastName:"Dudley",birthDate:u(1991,2,8)}),new i.default({firstName:"Dave",lastName:"Daverson",birthDate:u(1982,7,22)}),new i.default({firstName:"Bob",lastName:"Bobberson",birthDate:u(1965,4,13)}),new i.default({firstName:"Sally",lastName:"May",birthDate:u(2001,10,30)}),new i.default({firstName:"Regina",lastName:"Something",birthDate:u(2006,12,25)})],l=new Set(o);t.exports={studentList:l,parseDate:u}},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.firstName,r=e.lastName,i=e.birthDate;a(this,t),this.firstName=n,this.lastName=r,this.birthDate=i};t.exports=r},function(t,e,n){"use strict";var a=n(0).studentList,r={createListItem:function(t){var e=t.firstName,n=t.lastName,i=t.birthDate,u=t.id,o=r.createElement({type:"li",className:"student"}),l=document.getElementById("students__list"),s=[r.createElement({type:"span",className:"student__id",content:u}),r.createElement({type:"span",className:"student__name",content:e+" "+n}),r.createElement({type:"button",className:"student__delete",content:"Delete"}),r.createElement({type:"span",className:"student__joined",content:i})],d=s[2];d.addEventListener("click",function(){a.delete(t),l.removeChild(event.target.parentNode),r.assignStudentID(),r.populateList()});var c=!0,f=!1,m=void 0;try{for(var v,y=s[Symbol.iterator]();!(c=(v=y.next()).done);c=!0){var p=v.value;o.appendChild(p)}}catch(t){f=!0,m=t}finally{try{!c&&y.return&&y.return()}finally{if(f)throw m}}return o},populateList:function(){var t=document.getElementById("students__list");t.innerHTML="";var e=!0,n=!1,i=void 0;try{for(var u,o=a[Symbol.iterator]();!(e=(u=o.next()).done);e=!0){var l=u.value;t.appendChild(r.createListItem(l))}}catch(t){n=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw i}}},createElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=t.className,a=t.content,r=document.createElement(e);return r.classList.add(n),a&&(r.innerHTML=a),r},addStudent:function(t){a.add(t),r.assignStudentID(),r.populateList()},assignStudentID:function(){var t=1,e=!0,n=!1,r=void 0;try{for(var i,u=a[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var o=i.value;o.id=t,t++}}catch(t){n=!0,r=t}finally{try{!e&&u.return&&u.return()}finally{if(n)throw r}}}};t.exports={UI:r}},function(t,e){},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){function t(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(a=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(1),u=a(i);n(3);var o=(n(0).studentList,n(0).parseDate),l=n(2).UI;l.assignStudentID(),l.populateList();var s=document.getElementById("bday_input"),d=document.getElementById("fname_input"),c=document.getElementById("lname_input"),f=document.getElementById("submit");f.addEventListener("click",function(){var t=s.value.split("-"),e=r(t,3),n=e[0],a=e[1],i=e[2],f=new u.default({firstName:d.value,lastName:c.value,birthDate:o(parseInt(n),parseInt(a),parseInt(i))});l.addStudent(f),s.value="",d.value="",c.value=""})}]);