"use strict";(self.webpackChunkerp_system=self.webpackChunkerp_system||[]).push([[1422],{1422:(M,Z,a)=>{a.r(Z),a.d(Z,{DepreciationMethodModule:()=>be});var r=a(4863),_=a(6983),p=a(8059),U=a(9112),c=a(4218),e=a(7716),v=a(6793),l=a(7857),g=a(8583),o=a(3679),h=a(486),f=a(9577);function A(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const d=e.oxw();return d.confirmDelete(d.depreciationMethod.id)}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancel()}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p",6),e._uU(16,"Are you sure you want to delete this Depreciation Method?"),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancel()}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span"),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",10),e._uU(30,"\n      "),e._UZ(31,"fa-icon",11),e._uU(32,"\xa0"),e.TgZ(33,"span"),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}}let E=(()=>{class n{constructor(t,i){this.depreciationMethodService=t,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.depreciationMethodService.delete(t).subscribe(()=>{this.activeModal.close("deleted")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.E),e.Y36(l.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","depreciationMethodDeleteDialogHeading",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"close",3,"click"],[1,"modal-body"],["id","jhi-delete-depreciationMethod-heading"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["id","jhi-confirm-delete-depreciationMethod","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"]],template:function(t,i){1&t&&(e.YNc(0,A,38,0,"form",0),e._uU(1,"\n")),2&t&&e.Q6J("ngIf",i.depreciationMethod)},directives:[g.O5,o._Y,o.JL,o.F,h.A,f.BN],encapsulation:2}),n})();var b=a(9003),J=a(1427),O=a(1408),B=a(8133);function j(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().search("")}),e._uU(1,"\n            "),e._UZ(2,"fa-icon",19),e._uU(3,"\n          "),e.qZA()}}function Q(n,s){1&n&&(e.TgZ(0,"div",20),e._uU(1,"\n    "),e.TgZ(2,"span"),e._uU(3,"No depreciationMethods found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}function R(n,s){1&n&&e._UZ(0,"fa-icon",25)}function k(n,s){1&n&&e._UZ(0,"fa-icon",25)}function Y(n,s){1&n&&e._UZ(0,"fa-icon",25)}function w(n,s){1&n&&e._UZ(0,"fa-icon",25)}const S=function(n){return["/depreciation-method",n,"view"]},H=function(n){return["/depreciation-method",n,"edit"]};function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr",33),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",34),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15),e.qZA(),e._uU(16,"\n          "),e.TgZ(17,"td"),e._uU(18),e.qZA(),e._uU(19,"\n          "),e.TgZ(20,"td",35),e._uU(21,"\n            "),e.TgZ(22,"div",36),e._uU(23,"\n              "),e.TgZ(24,"button",37),e._uU(25,"\n                "),e._UZ(26,"fa-icon",38),e._uU(27,"\n                "),e.TgZ(28,"span",39),e._uU(29,"View"),e.qZA(),e._uU(30,"\n              "),e.qZA(),e._uU(31,"\n\n              "),e.TgZ(32,"button",40),e._uU(33,"\n                "),e._UZ(34,"fa-icon",41),e._uU(35,"\n                "),e.TgZ(36,"span",39),e._uU(37,"Edit"),e.qZA(),e._uU(38,"\n              "),e.qZA(),e._uU(39,"\n\n              "),e.TgZ(40,"button",42),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw(2).delete(u)}),e._uU(41,"\n                "),e._UZ(42,"fa-icon",43),e._uU(43,"\n                "),e.TgZ(44,"span",39),e._uU(45,"Delete"),e.qZA(),e._uU(46,"\n              "),e.qZA(),e._uU(47,"\n            "),e.qZA(),e._uU(48,"\n          "),e.qZA(),e._uU(49,"\n        "),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(8,S,t.id)),e.xp6(1),e.Oqu(t.id),e.xp6(4),e.Oqu(t.depreciationMethodName),e.xp6(3),e.Oqu(t.description),e.xp6(3),e.Oqu(t.depreciationType),e.xp6(3),e.Oqu(t.remarks),e.xp6(6),e.Q6J("routerLink",e.VKq(10,S,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(12,H,t.id))}}function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",21),e._uU(1,"\n    "),e.TgZ(2,"table",22),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",23),e.NdJ("predicateChange",function(d){return e.CHM(t),e.oxw().predicate=d})("ascendingChange",function(d){return e.CHM(t),e.oxw().ascending=d})("sortChange",function(){return e.CHM(t),e.oxw().loadPage()}),e._uU(7,"\n          "),e.TgZ(8,"th",24),e.TgZ(9,"span"),e._uU(10,"ID"),e.qZA(),e._uU(11," "),e._UZ(12,"fa-icon",25),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"th",26),e._uU(15,"\n            "),e.TgZ(16,"span"),e._uU(17,"Depreciation Method Name"),e.qZA(),e._uU(18," "),e.YNc(19,R,1,0,"fa-icon",27),e._uU(20,"\n          "),e.qZA(),e._uU(21,"\n          "),e.TgZ(22,"th",28),e.TgZ(23,"span"),e._uU(24,"Description"),e.qZA(),e._uU(25," "),e.YNc(26,k,1,0,"fa-icon",27),e.qZA(),e._uU(27,"\n          "),e.TgZ(28,"th",29),e._uU(29,"\n            "),e.TgZ(30,"span"),e._uU(31,"Depreciation Type"),e.qZA(),e._uU(32," "),e.YNc(33,Y,1,0,"fa-icon",27),e._uU(34,"\n          "),e.qZA(),e._uU(35,"\n          "),e.TgZ(36,"th",30),e._uU(37,"\n            "),e.TgZ(38,"span"),e._uU(39,"Remarks"),e.qZA(),e._uU(40," "),e.YNc(41,w,1,0,"fa-icon",27),e._uU(42,"\n          "),e.qZA(),e._uU(43,"\n          "),e._UZ(44,"th",31),e._uU(45,"\n        "),e.qZA(),e._uU(46,"\n      "),e.qZA(),e._uU(47,"\n      "),e.TgZ(48,"tbody"),e._uU(49,"\n        "),e.YNc(50,z,50,14,"tr",32),e._uU(51,"\n      "),e.qZA(),e._uU(52,"\n    "),e.qZA(),e._uU(53,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("predicate",t.predicate)("ascending",t.ascending),e.xp6(13),e.Q6J("ngIf",!t.currentSearch),e.xp6(7),e.Q6J("ngIf",!t.currentSearch),e.xp6(7),e.Q6J("ngIf",!t.currentSearch),e.xp6(8),e.Q6J("ngIf",!t.currentSearch),e.xp6(9),e.Q6J("ngForOf",t.depreciationMethods)("ngForTrackBy",t.trackId)}}const $=function(n,s,t){return{page:n,totalItems:s,itemsPerPage:t}};function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",44),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",45),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",44),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",46),e.NdJ("pageChange",function(d){return e.CHM(t),e.oxw().ngbPaginationPage=d})("pageChange",function(d){return e.CHM(t),e.oxw().loadPage(d)}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,$,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("collectionSize",t.totalItems)("page",t.ngbPaginationPage)("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const W=function(){return["/depreciation-method/new"]};let V=(()=>{class n{constructor(t,i,d,u){var m;this.depreciationMethodService=t,this.activatedRoute=i,this.router=d,this.modalService=u,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=c.gK,this.ngbPaginationPage=1,this.currentSearch=null!==(m=this.activatedRoute.snapshot.queryParams.search)&&void 0!==m?m:""}loadPage(t,i){var d;this.isLoading=!0;const u=null!==(d=null!=t?t:this.page)&&void 0!==d?d:1;this.currentSearch?this.depreciationMethodService.search({page:u-1,query:this.currentSearch,size:this.itemsPerPage,sort:this.sort()}).subscribe(m=>{this.isLoading=!1,this.onSuccess(m.body,m.headers,u,!i)},()=>{this.isLoading=!1,this.onError()}):this.depreciationMethodService.query({page:u-1,size:this.itemsPerPage,sort:this.sort()}).subscribe(m=>{this.isLoading=!1,this.onSuccess(m.body,m.headers,u,!i)},()=>{this.isLoading=!1,this.onError()})}search(t){t&&["depreciationMethodName","description","depreciationType"].includes(this.predicate)&&(this.predicate="id",this.ascending=!0),this.currentSearch=t,this.loadPage(1)}ngOnInit(){this.handleNavigation()}trackId(t,i){return i.id}delete(t){const i=this.modalService.open(E,{size:"lg",backdrop:"static"});i.componentInstance.depreciationMethod=t,i.closed.subscribe(d=>{"deleted"===d&&this.loadPage()})}sort(){const t=[this.predicate+","+(this.ascending?c.aW:c.jo)];return"id"!==this.predicate&&t.push("id"),t}handleNavigation(){(0,U.aj)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([t,i])=>{var d;const u=i.get("page"),m=+(null!=u?u:1),F=(null!==(d=i.get(c._l))&&void 0!==d?d:t.defaultSort).split(","),P=F[0],L=F[1]===c.aW;(m!==this.page||P!==this.predicate||L!==this.ascending)&&(this.predicate=P,this.ascending=L,this.loadPage(m,!0))})}onSuccess(t,i,d,u){this.totalItems=Number(i.get("X-Total-Count")),this.page=d,this.ngbPaginationPage=this.page,u&&this.router.navigate(["/depreciation-method"],{queryParams:{page:this.page,size:this.itemsPerPage,search:this.currentSearch,sort:this.predicate+","+(this.ascending?c.aW:c.jo)}}),this.depreciationMethods=null!=t?t:[],this.ngbPaginationPage=this.page}onError(){var t;this.ngbPaginationPage=null!==(t=this.page)&&void 0!==t?t:1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.E),e.Y36(_.gz),e.Y36(_.F0),e.Y36(l.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-depreciation-method"]],decls:59,vars:9,consts:[["id","page-heading","data-cy","DepreciationMethodHeading"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","mr-2",3,"disabled","click"],["icon","sync",3,"spin"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-depreciation-method",3,"routerLink"],["icon","plus"],[1,"hidden-sm-down"],[1,"row"],[1,"col-sm-12"],["name","searchForm",1,"form-inline"],[1,"input-group","w-100","mt-3"],["type","text","id","currentSearch","name","currentSearch","placeholder","Query",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append","btn","btn-info",3,"click"],["icon","search"],["class","input-group-append btn btn-danger",3,"click",4,"ngIf"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],[1,"input-group-append","btn","btn-danger",3,"click"],["icon","trash-alt"],["id","no-result",1,"alert","alert-warning"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["icon","sort"],["scope","col","jhiSortBy","depreciationMethodName"],["icon","sort",4,"ngIf"],["scope","col","jhiSortBy","description"],["scope","col","jhiSortBy","depreciationType"],["scope","col","jhiSortBy","remarks"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-right"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],[1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],[1,"row","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span"),e._uU(5,"Depreciation Methods"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",1),e._uU(8,"\n      "),e.TgZ(9,"button",2),e.NdJ("click",function(){return i.loadPage()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",3),e._uU(12,"\n        "),e.TgZ(13,"span"),e._uU(14,"Refresh List"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",4),e._uU(18,"\n        "),e._UZ(19,"fa-icon",5),e._uU(20,"\n        "),e.TgZ(21,"span",6),e._uU(22," Create a new Depreciation Method "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.TgZ(31,"div",7),e._uU(32,"\n    "),e.TgZ(33,"div",8),e._uU(34,"\n      "),e.TgZ(35,"form",9),e._uU(36,"\n        "),e.TgZ(37,"div",10),e._uU(38,"\n          "),e.TgZ(39,"input",11),e.NdJ("ngModelChange",function(u){return i.currentSearch=u}),e.qZA(),e._uU(40,"\n\n          "),e.TgZ(41,"button",12),e.NdJ("click",function(){return i.search(i.currentSearch)}),e._uU(42,"\n            "),e._UZ(43,"fa-icon",13),e._uU(44,"\n          "),e.qZA(),e._uU(45,"\n\n          "),e.YNc(46,j,4,0,"button",14),e._uU(47,"\n        "),e.qZA(),e._uU(48,"\n      "),e.qZA(),e._uU(49,"\n    "),e.qZA(),e._uU(50,"\n  "),e.qZA(),e._uU(51,"\n\n  "),e.YNc(52,Q,5,0,"div",15),e._uU(53,"\n\n  "),e.YNc(54,K,54,8,"div",16),e._uU(55,"\n\n  "),e.YNc(56,G,12,11,"div",17),e._uU(57,"\n"),e.qZA(),e._uU(58,"\n")),2&t&&(e.xp6(9),e.Q6J("disabled",i.isLoading),e.xp6(2),e.Q6J("spin",i.isLoading),e.xp6(6),e.Q6J("routerLink",e.DdM(8,W)),e.xp6(22),e.Q6J("ngModel",i.currentSearch),e.xp6(7),e.Q6J("ngIf",i.currentSearch),e.xp6(6),e.Q6J("ngIf",0===(null==i.depreciationMethods?null:i.depreciationMethods.length)),e.xp6(2),e.Q6J("ngIf",i.depreciationMethods&&i.depreciationMethods.length>0),e.xp6(2),e.Q6J("ngIf",i.depreciationMethods&&i.depreciationMethods.length>0))},directives:[f.BN,_.rH,h.A,b.w,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,g.O5,J.b,O.T,g.sg,_.yS,B.N,l.N9],encapsulation:2}),n})();const X=function(n){return["/placeholder",n,"view"]};function ee(n,s){if(1&n&&(e.TgZ(0,"span"),e._uU(1,"\n            "),e.TgZ(2,"a",10),e._uU(3),e.qZA(),e._uU(4),e.qZA()),2&n){const t=s.$implicit,i=s.last;e.xp6(2),e.Q6J("routerLink",e.VKq(3,X,null==t?null:t.id)),e.xp6(1),e.Oqu(t.description),e.xp6(1),e.hij("",i?"":", ","\n          ")}}const te=function(n){return["/depreciation-method",n,"edit"]};function ne(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3),e.TgZ(3,"span"),e._uU(4,"Depreciation Method"),e.qZA(),e.qZA(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",4),e._uU(13,"\n        "),e.TgZ(14,"dt"),e.TgZ(15,"span"),e._uU(16,"ID"),e.qZA(),e.qZA(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt"),e.TgZ(25,"span"),e._uU(26,"Depreciation Method Name"),e.qZA(),e.qZA(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt"),e.TgZ(35,"span"),e._uU(36,"Description"),e.qZA(),e.qZA(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt"),e.TgZ(45,"span"),e._uU(46,"Depreciation Type"),e.qZA(),e.qZA(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52,"\n        "),e.qZA(),e._uU(53,"\n        "),e.TgZ(54,"dt"),e.TgZ(55,"span"),e._uU(56,"Remarks"),e.qZA(),e.qZA(),e._uU(57,"\n        "),e.TgZ(58,"dd"),e._uU(59,"\n          "),e.TgZ(60,"span"),e._uU(61),e.qZA(),e._uU(62,"\n        "),e.qZA(),e._uU(63,"\n        "),e.TgZ(64,"dt"),e.TgZ(65,"span"),e._uU(66,"Placeholder"),e.qZA(),e.qZA(),e._uU(67,"\n        "),e.TgZ(68,"dd"),e._uU(69,"\n          "),e.YNc(70,ee,5,5,"span",5),e._uU(71,"\n        "),e.qZA(),e._uU(72,"\n      "),e.qZA(),e._uU(73,"\n\n      "),e.TgZ(74,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().previousState()}),e._uU(75,"\n        "),e._UZ(76,"fa-icon",7),e._uU(77,"\xa0"),e.TgZ(78,"span"),e._uU(79,"Back"),e.qZA(),e._uU(80,"\n      "),e.qZA(),e._uU(81,"\n\n      "),e.TgZ(82,"button",8),e._uU(83,"\n        "),e._UZ(84,"fa-icon",9),e._uU(85,"\xa0"),e.TgZ(86,"span"),e._uU(87,"Edit"),e.qZA(),e._uU(88,"\n      "),e.qZA(),e._uU(89,"\n    "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(21),e.Oqu(t.depreciationMethod.id),e.xp6(10),e.Oqu(t.depreciationMethod.depreciationMethodName),e.xp6(10),e.Oqu(t.depreciationMethod.description),e.xp6(10),e.Oqu(t.depreciationMethod.depreciationType),e.xp6(10),e.Oqu(t.depreciationMethod.remarks),e.xp6(9),e.Q6J("ngForOf",t.depreciationMethod.placeholders),e.xp6(12),e.Q6J("routerLink",e.VKq(7,te,t.depreciationMethod.id))}}let ie=(()=>{class n{constructor(t){this.activatedRoute=t,this.depreciationMethod=null}ngOnInit(){this.activatedRoute.data.subscribe(({depreciationMethod:t})=>{this.depreciationMethod=t})}previousState(){window.history.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-depreciation-method-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","depreciationMethodDetailsHeading"],[1,"row-md","jh-entity-details"],[4,"ngFor","ngForOf"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],[3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,ne,90,9,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&t&&(e.xp6(4),e.Q6J("ngIf",i.depreciationMethod))},directives:[g.O5,h.A,b.w,g.sg,f.BN,_.rH,_.yS],encapsulation:2}),n})();var oe=a(9765),T=a(5917),ae=a(8071),re=a(5435),ce=a(7519),se=a(4395),q=a(8307),de=a(3190),ue=a(5304),pe=a(8939),x=a(8002),I=a(9178),y=(()=>{return(n=y||(y={})).STRAIGHT_LINE="STRAIGHT_LINE",n.DECLINING_BALANCE="DECLINING_BALANCE",y;var n})(),le=a(550),_e=a(3499),C=a(4376),he=a(989);function ge(n,s){1&n&&(e.TgZ(0,"small",30),e._uU(1,"\n              This field is required.\n            "),e.qZA())}function me(n,s){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.YNc(2,ge,2,0,"small",29),e._uU(3,"\n          "),e.qZA()),2&n){const t=e.oxw();let i;e.xp6(2),e.Q6J("ngIf",null==(i=t.editForm.get("depreciationMethodName"))||null==i.errors?null:i.errors.required)}}function Ue(n,s){1&n&&(e.TgZ(0,"small",30),e._uU(1,"\n              This field is required.\n            "),e.qZA())}function Ze(n,s){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.YNc(2,Ue,2,0,"small",29),e._uU(3,"\n          "),e.qZA()),2&n){const t=e.oxw();let i;e.xp6(2),e.Q6J("ngIf",null==(i=t.editForm.get("depreciationType"))||null==i.errors?null:i.errors.required)}}function fe(n,s){if(1&n&&(e.TgZ(0,"ng-option",31),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij("\n              ",t.description,"\n            ")}}function ve(n,s){if(1&n&&(e._uU(0,"\n              "),e._uU(1,"\n              "),e._UZ(2,"input",32),e._uU(3)),2&n){const t=s.item,i=s.item$,d=s.index;e.xp6(2),e.MGl("id","item-",d,""),e.Q6J("checked",i.selected),e.xp6(1),e.hij(" ",t.description,"\n            ")}}const Te=function(){return["placeholders"]};function Ae(n,s){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"json"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,t.editForm.get(e.DdM(3,Te)).value))}}let N=(()=>{class n{constructor(t,i,d,u,m){this.depreciationMethodService=t,this.placeholderSuggestionService=i,this.placeholderService=d,this.activatedRoute=u,this.fb=m,this.isSaving=!1,this.depreciationTypesValues=Object.keys(y),this.placeholdersSharedCollection=[],this.editForm=this.fb.group({id:[],depreciationMethodName:[null,[o.kI.required]],description:[],depreciationType:[null,[o.kI.required]],remarks:[],placeholders:[]}),this.minAccountLengthTerm=3,this.placeholdersLoading=!1,this.placeholderControlInput$=new oe.xQ,this.placeholderLookups$=(0,T.of)([])}ngOnInit(){this.activatedRoute.data.subscribe(({depreciationMethod:t})=>{this.updateForm(t),this.loadRelationshipsOptions()}),this.loadPlaceholders()}loadPlaceholders(){this.placeholderLookups$=(0,ae.z)((0,T.of)([]),this.placeholderControlInput$.pipe((0,re.h)(t=>null!==t),(0,ce.x)(),(0,se.b)(800),(0,q.b)(()=>this.placeholdersLoading=!0),(0,de.w)(t=>this.placeholderSuggestionService.search(t).pipe((0,ue.K)(()=>(0,T.of)([])),(0,q.b)(()=>this.placeholdersLoading=!1)))),(0,T.of)([...this.placeholdersSharedCollection]))}trackPlaceholdersByFn(t){return t.id}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.createFromForm();this.subscribeToSaveResponse(void 0!==t.id?this.depreciationMethodService.update(t):this.depreciationMethodService.create(t))}trackPlaceholderById(t,i){return i.id}getSelectedPlaceholder(t,i){if(i)for(const d of i)if(t.id===d.id)return d;return t}subscribeToSaveResponse(t){t.pipe((0,pe.x)(()=>this.onSaveFinalize())).subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(t){var i;this.editForm.patchValue({id:t.id,depreciationMethodName:t.depreciationMethodName,description:t.description,depreciationType:t.depreciationType,placeholders:t.placeholders}),this.placeholdersSharedCollection=this.placeholderService.addPlaceholderToCollectionIfMissing(this.placeholdersSharedCollection,...null!==(i=t.placeholders)&&void 0!==i?i:[])}loadRelationshipsOptions(){this.placeholderService.query().pipe((0,x.U)(t=>{var i;return null!==(i=t.body)&&void 0!==i?i:[]})).pipe((0,x.U)(t=>{var i;return this.placeholderService.addPlaceholderToCollectionIfMissing(t,...null!==(i=this.editForm.get("placeholders").value)&&void 0!==i?i:[])})).subscribe(t=>this.placeholdersSharedCollection=t)}createFromForm(){return Object.assign(Object.assign({},new I.s),{id:this.editForm.get(["id"]).value,depreciationMethodName:this.editForm.get(["depreciationMethodName"]).value,description:this.editForm.get(["description"]).value,depreciationType:this.editForm.get(["depreciationType"]).value,placeholders:this.editForm.get(["placeholders"]).value})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.E),e.Y36(le.F),e.Y36(_e.Q),e.Y36(_.gz),e.Y36(o.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-depreciation-method-update"]],decls:107,vars:20,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-depreciation-method-heading","data-cy","DepreciationMethodCreateUpdateHeading"],[1,"form-group",3,"hidden"],["for","field_id",1,"form-control-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"form-group"],["for","field_depreciationMethodName",1,"form-control-label"],["type","text","name","depreciationMethodName","id","field_depreciationMethodName","data-cy","depreciationMethodName","formControlName","depreciationMethodName",1,"form-control"],[4,"ngIf"],["for","field_description",1,"form-control-label"],["type","text","name","description","id","field_description","data-cy","description","formControlName","description",1,"form-control"],["for","field_depreciationType",1,"form-control-label"],["name","depreciationType","formControlName","depreciationType","id","field_depreciationType","data-cy","depreciationType",1,"form-control"],[3,"ngValue"],["value","STRAIGHT_LINE"],["value","DECLINING_BALANCE"],["for","field_remarks",1,"form-control-label"],["name","remarks","id","field_remarks","data-cy","remarks","formControlName","remarks",1,"form-control"],[1,"form-control-label"],["bindLabel","description","formControlName","placeholders",3,"items","trackByFn","minTermLength","loading","typeToSearchText","typeahead","multiple"],[3,"value",4,"ngFor","ngForOf"],["ng-option-tmp",""],[4,"jhiHasAnyAuthority"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"],[3,"value"],["type","checkbox",3,"id","checked"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"Create or edit a Depreciation Method"),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.TgZ(13,"div",4),e._uU(14,"\n          "),e.TgZ(15,"label",5),e._uU(16,"ID"),e.qZA(),e._uU(17,"\n          "),e._UZ(18,"input",6),e._uU(19,"\n        "),e.qZA(),e._uU(20,"\n\n        "),e.TgZ(21,"div",7),e._uU(22,"\n          "),e.TgZ(23,"label",8),e._uU(24,"Depreciation Method Name"),e.qZA(),e._uU(25,"\n          "),e._UZ(26,"input",9),e._uU(27,"\n          "),e.YNc(28,me,4,1,"div",10),e._uU(29,"\n        "),e.qZA(),e._uU(30,"\n\n        "),e.TgZ(31,"div",7),e._uU(32,"\n          "),e.TgZ(33,"label",11),e._uU(34,"Description"),e.qZA(),e._uU(35,"\n          "),e._UZ(36,"input",12),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"div",7),e._uU(40,"\n          "),e.TgZ(41,"label",13),e._uU(42,"Depreciation Type"),e.qZA(),e._uU(43,"\n          "),e.TgZ(44,"select",14),e._uU(45,"\n            "),e._UZ(46,"option",15),e._uU(47,"\n            "),e.TgZ(48,"option",16),e._uU(49,"Straight line"),e.qZA(),e._uU(50,"\n            "),e.TgZ(51,"option",17),e._uU(52,"Declining balance"),e.qZA(),e._uU(53,"\n          "),e.qZA(),e._uU(54,"\n          "),e.YNc(55,Ze,4,1,"div",10),e._uU(56,"\n        "),e.qZA(),e._uU(57,"\n\n        "),e.TgZ(58,"div",7),e._uU(59,"\n          "),e.TgZ(60,"label",18),e._uU(61,"Remarks"),e.qZA(),e._uU(62,"\n          "),e._UZ(63,"textarea",19),e._uU(64,"\n        "),e.qZA(),e._uU(65,"\n\n        "),e._uU(66,"\n        "),e.TgZ(67,"div",7),e._uU(68,"\n          "),e.TgZ(69,"label",20),e._uU(70,"Placeholders"),e.qZA(),e._uU(71,"\n          "),e.TgZ(72,"ng-select",21),e.ALo(73,"async"),e._uU(74,"\n            "),e.YNc(75,fe,2,2,"ng-option",22),e.ALo(76,"async"),e._uU(77,"\n            "),e.YNc(78,ve,4,3,"ng-template",23),e._uU(79,"\n          "),e.qZA(),e._uU(80,"\n          "),e.YNc(81,Ae,3,4,"div",24),e._uU(82,"\n        "),e.qZA(),e._uU(83,"\n\n      "),e.qZA(),e._uU(84,"\n\n      "),e.TgZ(85,"div"),e._uU(86,"\n        "),e.TgZ(87,"button",25),e.NdJ("click",function(){return i.previousState()}),e._uU(88,"\n          "),e._UZ(89,"fa-icon",26),e._uU(90,"\xa0"),e.TgZ(91,"span"),e._uU(92,"Cancel"),e.qZA(),e._uU(93,"\n        "),e.qZA(),e._uU(94,"\n\n        "),e.TgZ(95,"button",27),e._uU(96,"\n          "),e._UZ(97,"fa-icon",28),e._uU(98,"\xa0"),e.TgZ(99,"span"),e._uU(100,"Save"),e.qZA(),e._uU(101,"\n        "),e.qZA(),e._uU(102,"\n      "),e.qZA(),e._uU(103,"\n    "),e.qZA(),e._uU(104,"\n  "),e.qZA(),e._uU(105,"\n"),e.qZA(),e._uU(106,"\n")),2&t&&(e.xp6(4),e.Q6J("formGroup",i.editForm),e.xp6(9),e.Q6J("hidden",null==i.editForm.get("id").value),e.xp6(5),e.Q6J("readonly",!0),e.xp6(10),e.Q6J("ngIf",i.editForm.get("depreciationMethodName").invalid&&(i.editForm.get("depreciationMethodName").dirty||i.editForm.get("depreciationMethodName").touched)),e.xp6(18),e.Q6J("ngValue",null),e.xp6(9),e.Q6J("ngIf",i.editForm.get("depreciationType").invalid&&(i.editForm.get("depreciationType").dirty||i.editForm.get("depreciationType").touched)),e.xp6(17),e.MGl("typeToSearchText","Please enter ",i.minAccountLengthTerm," or more characters"),e.Q6J("items",e.lcZ(73,16,i.placeholderLookups$))("trackByFn",i.trackPlaceholdersByFn)("minTermLength",i.minAccountLengthTerm)("loading",i.placeholdersLoading)("typeahead",i.placeholderControlInput$)("multiple",!0),e.xp6(3),e.Q6J("ngForOf",e.lcZ(76,18,i.placeholderLookups$)),e.xp6(6),e.Q6J("jhiHasAnyAuthority","ROLE_DEV"),e.xp6(14),e.Q6J("disabled",i.editForm.invalid||i.isSaving))},directives:[o._Y,o.JL,o.sg,h.A,o.wV,o.Fj,o.JJ,o.u,g.O5,o.EJ,o.YN,o.Kr,C.w9,g.sg,C.ir,he.o,f.BN,C.jq],pipes:[g.Ov,g.Ts],encapsulation:2}),n})();var Me=a(9193),ye=a(9773);let D=(()=>{class n{constructor(t,i){this.service=t,this.router=i}resolve(t){const i=t.params.id;return i?this.service.find(i).pipe((0,ye.zg)(d=>d.body?(0,T.of)(d.body):(this.router.navigate(["404"]),Me.E))):(0,T.of)(new I.s)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.E),e.LFG(_.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ce=[{path:"",component:V,data:{defaultSort:"id,asc"},canActivate:[p.Z]},{path:":id/view",component:ie,resolve:{depreciationMethod:D},canActivate:[p.Z]},{path:"new",component:N,resolve:{depreciationMethod:D},canActivate:[p.Z]},{path:":id/edit",component:N,resolve:{depreciationMethod:D},canActivate:[p.Z]}];let De=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Ce)],_.Bz]}),n})(),be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.m,De]]}),n})()},9003:(M,Z,a)=>{a.d(Z,{w:()=>v});var r=a(7716),_=a(4728),p=a(8583),U=a(7857);function c(l,g){if(1&l){const o=r.EpF();r.TgZ(0,"ngb-alert",4),r.NdJ("closed",function(){r.CHM(o);const f=r.oxw().$implicit;return r.oxw().close(f)}),r._uU(1,"\n      "),r._UZ(2,"pre",5),r._uU(3,"\n    "),r.qZA()}if(2&l){const o=r.oxw().$implicit;r.Q6J("type",o.type),r.xp6(2),r.Q6J("innerHTML",o.message,r.oJD)}}function e(l,g){if(1&l&&(r.TgZ(0,"div",2),r._uU(1,"\n    "),r.YNc(2,c,4,2,"ngb-alert",3),r._uU(3,"\n  "),r.qZA()),2&l){const o=g.$implicit,h=r.oxw();r.Q6J("ngClass",h.setClasses(o)),r.xp6(2),r.Q6J("ngIf",o.message)}}let v=(()=>{class l{constructor(o){this.alertService=o,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(o){const h={"jhi-toast":Boolean(o.toast)};return o.position?Object.assign(Object.assign({},h),{[o.position]:!0}):h}ngOnDestroy(){this.alertService.clear()}close(o){var h;null===(h=o.close)||void 0===h||h.call(o,this.alerts)}}return l.\u0275fac=function(o){return new(o||l)(r.Y36(_.c))},l.\u0275cmp=r.Xpm({type:l,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(o,h){1&o&&(r.TgZ(0,"div",0),r._uU(1,"\n  "),r.YNc(2,e,4,2,"div",1),r._uU(3,"\n"),r.qZA(),r._uU(4,"\n")),2&o&&(r.xp6(2),r.Q6J("ngForOf",h.alerts))},directives:[p.sg,p.mk,p.O5,U.xm],encapsulation:2}),l})()},8133:(M,Z,a)=>{a.d(Z,{N:()=>_});var r=a(7716);let _=(()=>{class p{set params(c){c.page&&void 0!==c.totalItems&&c.itemsPerPage?(this.first=(c.page-1)*c.itemsPerPage+1,this.second=c.page*c.itemsPerPage<c.totalItems?c.page*c.itemsPerPage:c.totalItems):(this.first=void 0,this.second=void 0),this.total=c.totalItems}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=r.Xpm({type:p,selectors:[["jhi-item-count"]],inputs:{params:"params"},decls:4,vars:3,template:function(c,e){1&c&&(r._uU(0," "),r.TgZ(1,"div"),r._uU(2),r.qZA(),r._uU(3," ")),2&c&&(r.xp6(2),r.lnq("Showing ",e.first," - ",e.second," of ",e.total," items."))},encapsulation:2}),p})()},1408:(M,Z,a)=>{a.d(Z,{T:()=>v});var r=a(9765),_=a(6782),p=a(9577),U=a(9976),c=a(7716),e=a(1427);let v=(()=>{class l{constructor(o){this.sort=o,this.sortIcon=U.CmM,this.sortAscIcon=U.foy,this.sortDescIcon=U.u9C,this.destroy$=new r.xQ,o.predicateChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),o.ascendingChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let o=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(o=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=o.iconName,this.iconComponent.render()}}}return l.\u0275fac=function(o){return new(o||l)(c.Y36(e.b,1))},l.\u0275dir=c.lG2({type:l,selectors:[["","jhiSortBy",""]],contentQueries:function(o,h,f){if(1&o&&c.Suo(f,p.BN,5),2&o){let A;c.iGM(A=c.CRH())&&(h.iconComponent=A.first)}},hostBindings:function(o,h){1&o&&c.NdJ("click",function(){return h.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),l})()},1427:(M,Z,a)=>{a.d(Z,{b:()=>_});var r=a(7716);let _=(()=>{class p{constructor(){this.predicateChange=new r.vpe,this.ascendingChange=new r.vpe,this.sortChange=new r.vpe}get predicate(){return this._predicate}set predicate(c){this._predicate=c,this.predicateChange.emit(c)}get ascending(){return this._ascending}set ascending(c){this._ascending=c,this.ascendingChange.emit(c)}sort(c){this.ascending=c!==this.predicate||!this.ascending,this.predicate=c,this.predicateChange.emit(c),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275dir=r.lG2({type:p,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),p})()}}]);