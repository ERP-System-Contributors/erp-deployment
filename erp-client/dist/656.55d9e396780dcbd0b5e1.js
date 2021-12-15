"use strict";(self.webpackChunkerp_system=self.webpackChunkerp_system||[]).push([[656],{8656:(_e,f,l)=>{l.r(f),l.d(f,{PaymentLabelModule:()=>me});var x=l(3105),s=l(6983),m=l(8059),S=l(9112),d=l(4218),e=l(7716),_=l(1120),b=l(7857),p=l(8583),c=l(665),g=l(486),U=l(9577);function F(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.oxw();return i.confirmDelete(i.paymentLabel.id)}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancel()}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p",6),e._uU(16,"Are you sure you want to delete this Payment Label?"),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancel()}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span"),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",10),e._uU(30,"\n      "),e._UZ(31,"fa-icon",11),e._uU(32,"\xa0"),e.TgZ(33,"span"),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}}let k=(()=>{class a{constructor(n,t){this.paymentLabelService=n,this.activeModal=t}cancel(){this.activeModal.dismiss()}confirmDelete(n){this.paymentLabelService.delete(n).subscribe(()=>{this.activeModal.close("deleted")})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.A),e.Y36(b.Kz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","paymentLabelDeleteDialogHeading",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"close",3,"click"],[1,"modal-body"],["id","jhi-delete-paymentLabel-heading"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["id","jhi-confirm-delete-paymentLabel","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"]],template:function(n,t){1&n&&(e.YNc(0,F,38,0,"form",0),e._uU(1,"\n")),2&n&&e.Q6J("ngIf",t.paymentLabel)},directives:[p.O5,c._Y,c.JL,c.F,g.A,U.BN],encapsulation:2}),a})();var T=l(9003),J=l(1427),N=l(1408),I=l(8133);function D(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){return e.CHM(n),e.oxw().search("")}),e._uU(1,"\n            "),e._UZ(2,"fa-icon",19),e._uU(3,"\n          "),e.qZA()}}function Q(a,o){1&a&&(e.TgZ(0,"div",20),e._uU(1,"\n    "),e.TgZ(2,"span"),e._uU(3,"No paymentLabels found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}function j(a,o){1&a&&e._UZ(0,"fa-icon",25)}function O(a,o){1&a&&e._UZ(0,"fa-icon",25)}function Y(a,o){1&a&&e._UZ(0,"fa-icon",25)}function w(a,o){1&a&&e._UZ(0,"fa-icon",25)}const y=function(a){return["/payment-label",a,"view"]};function B(a,o){if(1&a&&(e.TgZ(0,"div"),e._uU(1,"\n              "),e.TgZ(2,"a",35),e._uU(3),e.qZA(),e._uU(4,"\n            "),e.qZA()),2&a){const n=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(2,y,null==n.containingPaymentLabel?null:n.containingPaymentLabel.id)),e.xp6(1),e.Oqu(null==n.containingPaymentLabel?null:n.containingPaymentLabel.description)}}const M=function(a){return["/payment-label",a,"edit"]};function R(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"tr",34),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",35),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15),e.qZA(),e._uU(16,"\n          "),e.TgZ(17,"td"),e._uU(18),e.qZA(),e._uU(19,"\n          "),e.TgZ(20,"td"),e._uU(21,"\n            "),e.YNc(22,B,5,4,"div",17),e._uU(23,"\n          "),e.qZA(),e._uU(24,"\n          "),e.TgZ(25,"td",36),e._uU(26,"\n            "),e.TgZ(27,"div",37),e._uU(28,"\n              "),e.TgZ(29,"button",38),e._uU(30,"\n                "),e._UZ(31,"fa-icon",39),e._uU(32,"\n                "),e.TgZ(33,"span",40),e._uU(34,"View"),e.qZA(),e._uU(35,"\n              "),e.qZA(),e._uU(36,"\n\n              "),e.TgZ(37,"button",41),e._uU(38,"\n                "),e._UZ(39,"fa-icon",42),e._uU(40,"\n                "),e.TgZ(41,"span",40),e._uU(42,"Edit"),e.qZA(),e._uU(43,"\n              "),e.qZA(),e._uU(44,"\n\n              "),e.TgZ(45,"button",43),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw(2).delete(r)}),e._uU(46,"\n                "),e._UZ(47,"fa-icon",44),e._uU(48,"\n                "),e.TgZ(49,"span",40),e._uU(50,"Delete"),e.qZA(),e._uU(51,"\n              "),e.qZA(),e._uU(52,"\n            "),e.qZA(),e._uU(53,"\n          "),e.qZA(),e._uU(54,"\n        "),e.qZA()}if(2&a){const n=o.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(9,y,n.id)),e.xp6(1),e.Oqu(n.id),e.xp6(4),e.Oqu(n.description),e.xp6(3),e.Oqu(n.comments),e.xp6(3),e.Oqu(n.fileUploadToken),e.xp6(3),e.Oqu(n.compilationToken),e.xp6(4),e.Q6J("ngIf",n.containingPaymentLabel),e.xp6(7),e.Q6J("routerLink",e.VKq(11,y,n.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(13,M,n.id))}}function z(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"div",21),e._uU(1,"\n    "),e.TgZ(2,"table",22),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",23),e.NdJ("predicateChange",function(i){return e.CHM(n),e.oxw().predicate=i})("ascendingChange",function(i){return e.CHM(n),e.oxw().ascending=i})("sortChange",function(){return e.CHM(n),e.oxw().loadPage()}),e._uU(7,"\n          "),e.TgZ(8,"th",24),e.TgZ(9,"span"),e._uU(10,"ID"),e.qZA(),e._uU(11," "),e._UZ(12,"fa-icon",25),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"th",26),e.TgZ(15,"span"),e._uU(16,"Description"),e.qZA(),e._uU(17," "),e.YNc(18,j,1,0,"fa-icon",27),e.qZA(),e._uU(19,"\n          "),e.TgZ(20,"th",28),e.TgZ(21,"span"),e._uU(22,"Comments"),e.qZA(),e._uU(23," "),e.YNc(24,O,1,0,"fa-icon",27),e.qZA(),e._uU(25,"\n          "),e.TgZ(26,"th",29),e._uU(27,"\n            "),e.TgZ(28,"span"),e._uU(29,"File Upload Token"),e.qZA(),e._uU(30," "),e.YNc(31,Y,1,0,"fa-icon",27),e._uU(32,"\n          "),e.qZA(),e._uU(33,"\n          "),e.TgZ(34,"th",30),e._uU(35,"\n            "),e.TgZ(36,"span"),e._uU(37,"Compilation Token"),e.qZA(),e._uU(38," "),e.YNc(39,w,1,0,"fa-icon",27),e._uU(40,"\n          "),e.qZA(),e._uU(41,"\n          "),e.TgZ(42,"th",31),e._uU(43,"\n            "),e.TgZ(44,"span"),e._uU(45,"Containing Payment Label"),e.qZA(),e._uU(46," "),e._UZ(47,"fa-icon",25),e._uU(48,"\n          "),e.qZA(),e._uU(49,"\n          "),e._UZ(50,"th",32),e._uU(51,"\n        "),e.qZA(),e._uU(52,"\n      "),e.qZA(),e._uU(53,"\n      "),e.TgZ(54,"tbody"),e._uU(55,"\n        "),e.YNc(56,R,55,15,"tr",33),e._uU(57,"\n      "),e.qZA(),e._uU(58,"\n    "),e.qZA(),e._uU(59,"\n  "),e.qZA()}if(2&a){const n=e.oxw();e.xp6(6),e.Q6J("predicate",n.predicate)("ascending",n.ascending),e.xp6(12),e.Q6J("ngIf",!n.currentSearch),e.xp6(6),e.Q6J("ngIf",!n.currentSearch),e.xp6(7),e.Q6J("ngIf",!n.currentSearch),e.xp6(8),e.Q6J("ngIf",!n.currentSearch),e.xp6(17),e.Q6J("ngForOf",n.paymentLabels)("ngForTrackBy",n.trackId)}}const E=function(a,o,n){return{page:a,totalItems:o,itemsPerPage:n}};function H(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",45),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",46),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",45),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",47),e.NdJ("pageChange",function(i){return e.CHM(n),e.oxw().ngbPaginationPage=i})("pageChange",function(i){return e.CHM(n),e.oxw().loadPage(i)}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&a){const n=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,E,n.page,n.totalItems,n.itemsPerPage)),e.xp6(5),e.Q6J("collectionSize",n.totalItems)("page",n.ngbPaginationPage)("pageSize",n.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const V=function(){return["/payment-label/new"]};let K=(()=>{class a{constructor(n,t,i,r){var u;this.paymentLabelService=n,this.activatedRoute=t,this.router=i,this.modalService=r,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=d.gK,this.ngbPaginationPage=1,this.currentSearch=null!==(u=this.activatedRoute.snapshot.queryParams.search)&&void 0!==u?u:""}loadPage(n,t){var i;this.isLoading=!0;const r=null!==(i=null!=n?n:this.page)&&void 0!==i?i:1;this.currentSearch?this.paymentLabelService.search({page:r-1,query:this.currentSearch,size:this.itemsPerPage,sort:this.sort()}).subscribe(u=>{this.isLoading=!1,this.onSuccess(u.body,u.headers,r,!t)},()=>{this.isLoading=!1,this.onError()}):this.paymentLabelService.query({page:r-1,size:this.itemsPerPage,sort:this.sort()}).subscribe(u=>{this.isLoading=!1,this.onSuccess(u.body,u.headers,r,!t)},()=>{this.isLoading=!1,this.onError()})}search(n){n&&["description","comments","fileUploadToken","compilationToken"].includes(this.predicate)&&(this.predicate="id",this.ascending=!0),this.currentSearch=n,this.loadPage(1)}ngOnInit(){this.handleNavigation()}trackId(n,t){return t.id}delete(n){const t=this.modalService.open(k,{size:"lg",backdrop:"static"});t.componentInstance.paymentLabel=n,t.closed.subscribe(i=>{"deleted"===i&&this.loadPage()})}sort(){const n=[this.predicate+","+(this.ascending?d.aW:d.jo)];return"id"!==this.predicate&&n.push("id"),n}handleNavigation(){(0,S.aj)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([n,t])=>{var i;const r=t.get("page"),u=+(null!=r?r:1),P=(null!==(i=t.get(d._l))&&void 0!==i?i:n.defaultSort).split(","),q=P[0],C=P[1]===d.aW;(u!==this.page||q!==this.predicate||C!==this.ascending)&&(this.predicate=q,this.ascending=C,this.loadPage(u,!0))})}onSuccess(n,t,i,r){this.totalItems=Number(t.get("X-Total-Count")),this.page=i,this.ngbPaginationPage=this.page,r&&this.router.navigate(["/payment-label"],{queryParams:{page:this.page,size:this.itemsPerPage,search:this.currentSearch,sort:this.predicate+","+(this.ascending?d.aW:d.jo)}}),this.paymentLabels=null!=n?n:[],this.ngbPaginationPage=this.page}onError(){var n;this.ngbPaginationPage=null!==(n=this.page)&&void 0!==n?n:1}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.A),e.Y36(s.gz),e.Y36(s.F0),e.Y36(b.FF))},a.\u0275cmp=e.Xpm({type:a,selectors:[["jhi-payment-label"]],decls:59,vars:9,consts:[["id","page-heading","data-cy","PaymentLabelHeading"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","mr-2",3,"disabled","click"],["icon","sync",3,"spin"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-payment-label",3,"routerLink"],["icon","plus"],[1,"hidden-sm-down"],[1,"row"],[1,"col-sm-12"],["name","searchForm",1,"form-inline"],[1,"input-group","w-100","mt-3"],["type","text","id","currentSearch","name","currentSearch","placeholder","Query",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append","btn","btn-info",3,"click"],["icon","search"],["class","input-group-append btn btn-danger",3,"click",4,"ngIf"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],[1,"input-group-append","btn","btn-danger",3,"click"],["icon","trash-alt"],["id","no-result",1,"alert","alert-warning"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["icon","sort"],["scope","col","jhiSortBy","description"],["icon","sort",4,"ngIf"],["scope","col","jhiSortBy","comments"],["scope","col","jhiSortBy","fileUploadToken"],["scope","col","jhiSortBy","compilationToken"],["scope","col","jhiSortBy","containingPaymentLabel.description"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-right"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],[1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],[1,"row","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span"),e._uU(5,"Payment Labels"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",1),e._uU(8,"\n      "),e.TgZ(9,"button",2),e.NdJ("click",function(){return t.loadPage()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",3),e._uU(12,"\n        "),e.TgZ(13,"span"),e._uU(14,"Refresh List"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",4),e._uU(18,"\n        "),e._UZ(19,"fa-icon",5),e._uU(20,"\n        "),e.TgZ(21,"span",6),e._uU(22," Create a new Payment Label "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.TgZ(31,"div",7),e._uU(32,"\n    "),e.TgZ(33,"div",8),e._uU(34,"\n      "),e.TgZ(35,"form",9),e._uU(36,"\n        "),e.TgZ(37,"div",10),e._uU(38,"\n          "),e.TgZ(39,"input",11),e.NdJ("ngModelChange",function(r){return t.currentSearch=r}),e.qZA(),e._uU(40,"\n\n          "),e.TgZ(41,"button",12),e.NdJ("click",function(){return t.search(t.currentSearch)}),e._uU(42,"\n            "),e._UZ(43,"fa-icon",13),e._uU(44,"\n          "),e.qZA(),e._uU(45,"\n\n          "),e.YNc(46,D,4,0,"button",14),e._uU(47,"\n        "),e.qZA(),e._uU(48,"\n      "),e.qZA(),e._uU(49,"\n    "),e.qZA(),e._uU(50,"\n  "),e.qZA(),e._uU(51,"\n\n  "),e.YNc(52,Q,5,0,"div",15),e._uU(53,"\n\n  "),e.YNc(54,z,60,8,"div",16),e._uU(55,"\n\n  "),e.YNc(56,H,12,11,"div",17),e._uU(57,"\n"),e.qZA(),e._uU(58,"\n")),2&n&&(e.xp6(9),e.Q6J("disabled",t.isLoading),e.xp6(2),e.Q6J("spin",t.isLoading),e.xp6(6),e.Q6J("routerLink",e.DdM(8,V)),e.xp6(22),e.Q6J("ngModel",t.currentSearch),e.xp6(7),e.Q6J("ngIf",t.currentSearch),e.xp6(6),e.Q6J("ngIf",0===(null==t.paymentLabels?null:t.paymentLabels.length)),e.xp6(2),e.Q6J("ngIf",t.paymentLabels&&t.paymentLabels.length>0),e.xp6(2),e.Q6J("ngIf",t.paymentLabels&&t.paymentLabels.length>0))},directives:[U.BN,s.rH,g.A,T.w,c._Y,c.JL,c.F,c.Fj,c.JJ,c.On,p.O5,J.b,N.T,p.sg,s.yS,I.N,b.N9],encapsulation:2}),a})();const $=function(a){return["/payment-label",a,"view"]};function X(a,o){if(1&a&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.TgZ(2,"a",10),e._uU(3),e.qZA(),e._uU(4,"\n          "),e.qZA()),2&a){const n=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(2,$,null==n.paymentLabel.containingPaymentLabel?null:n.paymentLabel.containingPaymentLabel.id)),e.xp6(1),e.Oqu(null==n.paymentLabel.containingPaymentLabel?null:n.paymentLabel.containingPaymentLabel.description)}}const G=function(a){return["/placeholder",a,"view"]};function W(a,o){if(1&a&&(e.TgZ(0,"span"),e._uU(1,"\n            "),e.TgZ(2,"a",10),e._uU(3),e.qZA(),e._uU(4),e.qZA()),2&a){const n=o.$implicit,t=o.last;e.xp6(2),e.Q6J("routerLink",e.VKq(3,G,null==n?null:n.id)),e.xp6(1),e.Oqu(n.description),e.xp6(1),e.hij("",t?"":", ","\n          ")}}const ee=function(a){return["/payment-label",a,"edit"]};function ne(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3),e.TgZ(3,"span"),e._uU(4,"Payment Label"),e.qZA(),e.qZA(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",4),e._uU(13,"\n        "),e.TgZ(14,"dt"),e.TgZ(15,"span"),e._uU(16,"ID"),e.qZA(),e.qZA(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt"),e.TgZ(25,"span"),e._uU(26,"Description"),e.qZA(),e.qZA(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt"),e.TgZ(35,"span"),e._uU(36,"Comments"),e.qZA(),e.qZA(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt"),e.TgZ(45,"span"),e._uU(46,"File Upload Token"),e.qZA(),e.qZA(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52,"\n        "),e.qZA(),e._uU(53,"\n        "),e.TgZ(54,"dt"),e.TgZ(55,"span"),e._uU(56,"Compilation Token"),e.qZA(),e.qZA(),e._uU(57,"\n        "),e.TgZ(58,"dd"),e._uU(59,"\n          "),e.TgZ(60,"span"),e._uU(61),e.qZA(),e._uU(62,"\n        "),e.qZA(),e._uU(63,"\n        "),e.TgZ(64,"dt"),e.TgZ(65,"span"),e._uU(66,"Containing Payment Label"),e.qZA(),e.qZA(),e._uU(67,"\n        "),e.TgZ(68,"dd"),e._uU(69,"\n          "),e.YNc(70,X,5,4,"div",2),e._uU(71,"\n        "),e.qZA(),e._uU(72,"\n        "),e.TgZ(73,"dt"),e.TgZ(74,"span"),e._uU(75,"Placeholder"),e.qZA(),e.qZA(),e._uU(76,"\n        "),e.TgZ(77,"dd"),e._uU(78,"\n          "),e.YNc(79,W,5,5,"span",5),e._uU(80,"\n        "),e.qZA(),e._uU(81,"\n      "),e.qZA(),e._uU(82,"\n\n      "),e.TgZ(83,"button",6),e.NdJ("click",function(){return e.CHM(n),e.oxw().previousState()}),e._uU(84,"\n        "),e._UZ(85,"fa-icon",7),e._uU(86,"\xa0"),e.TgZ(87,"span"),e._uU(88,"Back"),e.qZA(),e._uU(89,"\n      "),e.qZA(),e._uU(90,"\n\n      "),e.TgZ(91,"button",8),e._uU(92,"\n        "),e._UZ(93,"fa-icon",9),e._uU(94,"\xa0"),e.TgZ(95,"span"),e._uU(96,"Edit"),e.qZA(),e._uU(97,"\n      "),e.qZA(),e._uU(98,"\n    "),e.qZA()}if(2&a){const n=e.oxw();e.xp6(21),e.Oqu(n.paymentLabel.id),e.xp6(10),e.Oqu(n.paymentLabel.description),e.xp6(10),e.Oqu(n.paymentLabel.comments),e.xp6(10),e.Oqu(n.paymentLabel.fileUploadToken),e.xp6(10),e.Oqu(n.paymentLabel.compilationToken),e.xp6(9),e.Q6J("ngIf",n.paymentLabel.containingPaymentLabel),e.xp6(9),e.Q6J("ngForOf",n.paymentLabel.placeholders),e.xp6(12),e.Q6J("routerLink",e.VKq(8,ee,n.paymentLabel.id))}}let te=(()=>{class a{constructor(n){this.activatedRoute=n,this.paymentLabel=null}ngOnInit(){this.activatedRoute.data.subscribe(({paymentLabel:n})=>{this.paymentLabel=n})}previousState(){window.history.back()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(s.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["jhi-payment-label-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","paymentLabelDetailsHeading"],[1,"row-md","jh-entity-details"],[4,"ngFor","ngForOf"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],[3,"routerLink"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,ne,99,10,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&n&&(e.xp6(4),e.Q6J("ngIf",t.paymentLabel))},directives:[p.O5,g.A,T.w,p.sg,U.BN,s.rH,s.yS],encapsulation:2}),a})();var ae=l(8939),Z=l(8002),v=l(6031),ie=l(775);function oe(a,o){1&a&&(e.TgZ(0,"small",28),e._uU(1," This field is required. "),e.qZA())}function le(a,o){if(1&a&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.YNc(2,oe,2,0,"small",27),e._uU(3,"\n          "),e.qZA()),2&a){const n=e.oxw();let t;e.xp6(2),e.Q6J("ngIf",null==(t=n.editForm.get("description"))||null==t.errors?null:t.errors.required)}}function re(a,o){if(1&a&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&a){const n=o.$implicit,t=e.oxw();e.Q6J("ngValue",n.id===(null==t.editForm.get("containingPaymentLabel").value?null:t.editForm.get("containingPaymentLabel").value.id)?t.editForm.get("containingPaymentLabel").value:n),e.xp6(1),e.hij("\n              ",n.description,"\n            ")}}function ce(a,o){if(1&a&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&a){const n=o.$implicit,t=e.oxw();e.Q6J("ngValue",t.getSelectedPlaceholder(n,t.editForm.get("placeholders").value)),e.xp6(1),e.hij("\n              ",n.description,"\n            ")}}let L=(()=>{class a{constructor(n,t,i,r){this.paymentLabelService=n,this.placeholderService=t,this.activatedRoute=i,this.fb=r,this.isSaving=!1,this.paymentLabelsSharedCollection=[],this.placeholdersSharedCollection=[],this.editForm=this.fb.group({id:[],description:[null,[c.kI.required]],comments:[],fileUploadToken:[],compilationToken:[],containingPaymentLabel:[],placeholders:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({paymentLabel:n})=>{this.updateForm(n),this.loadRelationshipsOptions()})}previousState(){window.history.back()}save(){this.isSaving=!0;const n=this.createFromForm();this.subscribeToSaveResponse(void 0!==n.id?this.paymentLabelService.update(n):this.paymentLabelService.create(n))}trackPaymentLabelById(n,t){return t.id}trackPlaceholderById(n,t){return t.id}getSelectedPlaceholder(n,t){if(t)for(const i of t)if(n.id===i.id)return i;return n}subscribeToSaveResponse(n){n.pipe((0,ae.x)(()=>this.onSaveFinalize())).subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(n){var t;this.editForm.patchValue({id:n.id,description:n.description,comments:n.comments,fileUploadToken:n.fileUploadToken,compilationToken:n.compilationToken,containingPaymentLabel:n.containingPaymentLabel,placeholders:n.placeholders}),this.paymentLabelsSharedCollection=this.paymentLabelService.addPaymentLabelToCollectionIfMissing(this.paymentLabelsSharedCollection,n.containingPaymentLabel),this.placeholdersSharedCollection=this.placeholderService.addPlaceholderToCollectionIfMissing(this.placeholdersSharedCollection,...null!==(t=n.placeholders)&&void 0!==t?t:[])}loadRelationshipsOptions(){this.paymentLabelService.query().pipe((0,Z.U)(n=>{var t;return null!==(t=n.body)&&void 0!==t?t:[]})).pipe((0,Z.U)(n=>this.paymentLabelService.addPaymentLabelToCollectionIfMissing(n,this.editForm.get("containingPaymentLabel").value))).subscribe(n=>this.paymentLabelsSharedCollection=n),this.placeholderService.query().pipe((0,Z.U)(n=>{var t;return null!==(t=n.body)&&void 0!==t?t:[]})).pipe((0,Z.U)(n=>{var t;return this.placeholderService.addPlaceholderToCollectionIfMissing(n,...null!==(t=this.editForm.get("placeholders").value)&&void 0!==t?t:[])})).subscribe(n=>this.placeholdersSharedCollection=n)}createFromForm(){return Object.assign(Object.assign({},new v.R),{id:this.editForm.get(["id"]).value,description:this.editForm.get(["description"]).value,comments:this.editForm.get(["comments"]).value,fileUploadToken:this.editForm.get(["fileUploadToken"]).value,compilationToken:this.editForm.get(["compilationToken"]).value,containingPaymentLabel:this.editForm.get(["containingPaymentLabel"]).value,placeholders:this.editForm.get(["placeholders"]).value})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.A),e.Y36(ie.Q),e.Y36(s.gz),e.Y36(c.qu))},a.\u0275cmp=e.Xpm({type:a,selectors:[["jhi-payment-label-update"]],decls:102,vars:10,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-payment-label-heading","data-cy","PaymentLabelCreateUpdateHeading"],[1,"form-group",3,"hidden"],["for","field_id",1,"form-control-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"form-group"],["for","field_description",1,"form-control-label"],["type","text","name","description","id","field_description","data-cy","description","formControlName","description",1,"form-control"],[4,"ngIf"],["for","field_comments",1,"form-control-label"],["type","text","name","comments","id","field_comments","data-cy","comments","formControlName","comments",1,"form-control"],["for","field_fileUploadToken",1,"form-control-label"],["type","text","name","fileUploadToken","id","field_fileUploadToken","data-cy","fileUploadToken","formControlName","fileUploadToken",1,"form-control"],["for","field_compilationToken",1,"form-control-label"],["type","text","name","compilationToken","id","field_compilationToken","data-cy","compilationToken","formControlName","compilationToken",1,"form-control"],["for","field_containingPaymentLabel",1,"form-control-label"],["id","field_containingPaymentLabel","data-cy","containingPaymentLabel","name","containingPaymentLabel","formControlName","containingPaymentLabel",1,"form-control"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],["for","field_placeholders"],["id","field_placeholders","data-cy","placeholder","multiple","","name","placeholders","formControlName","placeholders",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return t.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"Create or edit a Payment Label"),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.TgZ(13,"div",4),e._uU(14,"\n          "),e.TgZ(15,"label",5),e._uU(16,"ID"),e.qZA(),e._uU(17,"\n          "),e._UZ(18,"input",6),e._uU(19,"\n        "),e.qZA(),e._uU(20,"\n\n        "),e.TgZ(21,"div",7),e._uU(22,"\n          "),e.TgZ(23,"label",8),e._uU(24,"Description"),e.qZA(),e._uU(25,"\n          "),e._UZ(26,"input",9),e._uU(27,"\n          "),e.YNc(28,le,4,1,"div",10),e._uU(29,"\n        "),e.qZA(),e._uU(30,"\n\n        "),e.TgZ(31,"div",7),e._uU(32,"\n          "),e.TgZ(33,"label",11),e._uU(34,"Comments"),e.qZA(),e._uU(35,"\n          "),e._UZ(36,"input",12),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"div",7),e._uU(40,"\n          "),e.TgZ(41,"label",13),e._uU(42,"File Upload Token"),e.qZA(),e._uU(43,"\n          "),e._UZ(44,"input",14),e._uU(45,"\n        "),e.qZA(),e._uU(46,"\n\n        "),e.TgZ(47,"div",7),e._uU(48,"\n          "),e.TgZ(49,"label",15),e._uU(50,"Compilation Token"),e.qZA(),e._uU(51,"\n          "),e._UZ(52,"input",16),e._uU(53,"\n        "),e.qZA(),e._uU(54,"\n\n        "),e.TgZ(55,"div",7),e._uU(56,"\n          "),e.TgZ(57,"label",17),e._uU(58,"Containing Payment Label"),e.qZA(),e._uU(59,"\n          "),e.TgZ(60,"select",18),e._uU(61,"\n            "),e._UZ(62,"option",19),e._uU(63,"\n            "),e.YNc(64,re,2,2,"option",20),e._uU(65,"\n          "),e.qZA(),e._uU(66,"\n        "),e.qZA(),e._uU(67,"\n\n        "),e.TgZ(68,"div",7),e._uU(69,"\n          "),e.TgZ(70,"label",21),e._uU(71,"Placeholder"),e.qZA(),e._uU(72,"\n          "),e.TgZ(73,"select",22),e._uU(74,"\n            "),e.YNc(75,ce,2,2,"option",20),e._uU(76,"\n          "),e.qZA(),e._uU(77,"\n        "),e.qZA(),e._uU(78,"\n      "),e.qZA(),e._uU(79,"\n\n      "),e.TgZ(80,"div"),e._uU(81,"\n        "),e.TgZ(82,"button",23),e.NdJ("click",function(){return t.previousState()}),e._uU(83,"\n          "),e._UZ(84,"fa-icon",24),e._uU(85,"\xa0"),e.TgZ(86,"span"),e._uU(87,"Cancel"),e.qZA(),e._uU(88,"\n        "),e.qZA(),e._uU(89,"\n\n        "),e.TgZ(90,"button",25),e._uU(91,"\n          "),e._UZ(92,"fa-icon",26),e._uU(93,"\xa0"),e.TgZ(94,"span"),e._uU(95,"Save"),e.qZA(),e._uU(96,"\n        "),e.qZA(),e._uU(97,"\n      "),e.qZA(),e._uU(98,"\n    "),e.qZA(),e._uU(99,"\n  "),e.qZA(),e._uU(100,"\n"),e.qZA(),e._uU(101,"\n")),2&n&&(e.xp6(4),e.Q6J("formGroup",t.editForm),e.xp6(9),e.Q6J("hidden",null==t.editForm.get("id").value),e.xp6(5),e.Q6J("readonly",!0),e.xp6(10),e.Q6J("ngIf",t.editForm.get("description").invalid&&(t.editForm.get("description").dirty||t.editForm.get("description").touched)),e.xp6(34),e.Q6J("ngValue",null),e.xp6(2),e.Q6J("ngForOf",t.paymentLabelsSharedCollection)("ngForTrackBy",t.trackPaymentLabelById),e.xp6(11),e.Q6J("ngForOf",t.placeholdersSharedCollection)("ngForTrackBy",t.trackPlaceholderById),e.xp6(15),e.Q6J("disabled",t.editForm.invalid||t.isSaving))},directives:[c._Y,c.JL,c.sg,g.A,c.wV,c.Fj,c.JJ,c.u,p.O5,c.EJ,c.YN,c.Kr,p.sg,c.K7,U.BN],encapsulation:2}),a})();var A=l(5917),ue=l(9193),se=l(9773);let h=(()=>{class a{constructor(n,t){this.service=n,this.router=t}resolve(n){const t=n.params.id;return t?this.service.find(t).pipe((0,se.zg)(i=>i.body?(0,A.of)(i.body):(this.router.navigate(["404"]),ue.E))):(0,A.of)(new v.R)}}return a.\u0275fac=function(n){return new(n||a)(e.LFG(_.A),e.LFG(s.F0))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const de=[{path:"",component:K,data:{defaultSort:"id,asc"},canActivate:[m.Z]},{path:":id/view",component:te,resolve:{paymentLabel:h},canActivate:[m.Z]},{path:"new",component:L,resolve:{paymentLabel:h},canActivate:[m.Z]},{path:":id/edit",component:L,resolve:{paymentLabel:h},canActivate:[m.Z]}];let pe=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[s.Bz.forChild(de)],s.Bz]}),a})(),me=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[x.m,pe]]}),a})()}}]);