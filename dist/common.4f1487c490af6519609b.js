"use strict";(self.webpackChunkerp_system=self.webpackChunkerp_system||[]).push([[592],{6123:(f,v,e)=>{e.d(v,{N:()=>p});var p=(()=>{return(_=p||(p={})).STRAIGHT_LINE_BASIS="STRAIGHT_LINE_BASIS",_.DECLINING_BALANCE_BASIS="DECLINING_BALANCE_BASIS",p;var _})()},9717:(f,v,e)=>{e.d(v,{y:()=>p,M:()=>_});class p{constructor(E,h,d,l,u,c,i,t,o){this.id=E,this.paymentExpense=h,this.withholdingVAT=d,this.withholdingTax=l,this.paymentAmount=u,this.paymentLabels=c,this.payment=i,this.paymentCategory=t,this.placeholders=o}}function _(a){return a.id}},547:(f,v,e)=>{e.d(v,{B:()=>p,N:()=>_});class p{constructor(E,h,d,l,u,c,i,t,o,D,s,r){this.id=E,this.transactionNumber=h,this.transactionDate=d,this.transactionCurrency=l,this.transactionAmount=u,this.dealerName=c,this.fileUploadToken=i,this.compilationToken=t,this.paymentLabels=o,this.paymentCategory=D,this.placeholders=s,this.signedPaymentGroup=r}}function _(a){return a.id}},7731:(f,v,e)=>{e.d(v,{G:()=>p,Q:()=>_});class p{constructor(E,h,d,l,u,c,i,t,o,D,s){this.id=E,this.telcoExciseDuty=h,this.valueAddedTax=d,this.withholdingVAT=l,this.withholdingTaxConsultancy=u,this.withholdingTaxRent=c,this.cateringLevy=i,this.serviceCharge=t,this.withholdingTaxImportedService=o,this.payments=D,this.placeholders=s}}function _(a){return a.id}},390:(f,v,e)=>{e.d(v,{M:()=>_});var p=e(7716);let _=(()=>{class a{transform(h,d){let l="";if(h.categoryDescription){const u=d.length>0?parseInt(d[0],10):30,c=d.length>1?d[1]:"...";let i="";i=h.categoryDescription.length>u?h.categoryDescription.substring(0,u)+c:h.categoryDescription,l=`Id: ${h.id} | Name: ${h.categoryName} |${i}`}return h?l:""}}return a.\u0275fac=function(h){return new(h||a)},a.\u0275pipe=p.Yjl({name:"formatPaymentCategory",type:a,pure:!0}),a})()},8531:(f,v,e)=>{e.d(v,{w:()=>u});var p=e(6037),_=e(5929),a=e(9717),E=e(9639),h=e(7716),d=e(1841),l=e(1082);let u=(()=>{class c{constructor(t,o){this.http=t,this.applicationConfigService=o,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/payment-calculations"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/payment-calculations")}create(t){return this.http.post(this.resourceUrl,t,{observe:"response"})}update(t){return this.http.put(`${this.resourceUrl}/${(0,a.M)(t)}`,t,{observe:"response"})}partialUpdate(t){return this.http.patch(`${this.resourceUrl}/${(0,a.M)(t)}`,t,{observe:"response"})}find(t){return this.http.get(`${this.resourceUrl}/${t}`,{observe:"response"})}query(t){const o=(0,_.b)(t);return this.http.get(this.resourceUrl,{params:o,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`,{observe:"response"})}search(t){const o=(0,_.b)(t);return this.http.get(this.resourceSearchUrl,{params:o,observe:"response"})}addPaymentCalculationToCollectionIfMissing(t,...o){const D=o.filter(p.E);if(D.length>0){const s=t.map(n=>(0,a.M)(n));return[...D.filter(n=>{const m=(0,a.M)(n);return null!=m&&!s.includes(m)&&(s.push(m),!0)}),...t]}return t}}return c.\u0275fac=function(t){return new(t||c)(h.LFG(d.eN),h.LFG(l.y))},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:E.a}),c})()},5815:(f,v,e)=>{e.d(v,{N:()=>u});var p=e(6037),_=e(5929),a=e(1011),E=e(9639),h=e(7716),d=e(1841),l=e(1082);let u=(()=>{class c{constructor(t,o){this.http=t,this.applicationConfigService=o,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/payment-categories"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/payment-categories")}create(t){return this.http.post(this.resourceUrl,t,{observe:"response"})}update(t){return this.http.put(`${this.resourceUrl}/${(0,a.r)(t)}`,t,{observe:"response"})}partialUpdate(t){return this.http.patch(`${this.resourceUrl}/${(0,a.r)(t)}`,t,{observe:"response"})}find(t){return this.http.get(`${this.resourceUrl}/${t}`,{observe:"response"})}query(t){const o=(0,_.b)(t);return this.http.get(this.resourceUrl,{params:o,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`,{observe:"response"})}search(t){const o=(0,_.b)(t);return this.http.get(this.resourceSearchUrl,{params:o,observe:"response"})}addPaymentCategoryToCollectionIfMissing(t,...o){const D=o.filter(p.E);if(D.length>0){const s=t.map(n=>(0,a.r)(n));return[...D.filter(n=>{const m=(0,a.r)(n);return null!=m&&!s.includes(m)&&(s.push(m),!0)}),...t]}return t}}return c.\u0275fac=function(t){return new(t||c)(h.LFG(d.eN),h.LFG(l.y))},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:E.a}),c})()},9249:(f,v,e)=>{e.d(v,{m:()=>o});var p=e(8002),_=e(8873),E=e(6037),h=e(1726),d=e(5929),l=e(547),u=e(9639),c=e(7716),i=e(1841),t=e(1082);let o=(()=>{class D{constructor(r,n){this.http=r,this.applicationConfigService=n,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/signed-payments"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/signed-payments")}create(r){const n=this.convertDateFromClient(r);return this.http.post(this.resourceUrl,n,{observe:"response"}).pipe((0,p.U)(m=>this.convertDateFromServer(m)))}update(r){const n=this.convertDateFromClient(r);return this.http.put(`${this.resourceUrl}/${(0,l.N)(r)}`,n,{observe:"response"}).pipe((0,p.U)(m=>this.convertDateFromServer(m)))}partialUpdate(r){const n=this.convertDateFromClient(r);return this.http.patch(`${this.resourceUrl}/${(0,l.N)(r)}`,n,{observe:"response"}).pipe((0,p.U)(m=>this.convertDateFromServer(m)))}find(r){return this.http.get(`${this.resourceUrl}/${r}`,{observe:"response"}).pipe((0,p.U)(n=>this.convertDateFromServer(n)))}query(r){const n=(0,d.b)(r);return this.http.get(this.resourceUrl,{params:n,observe:"response"}).pipe((0,p.U)(m=>this.convertDateArrayFromServer(m)))}delete(r){return this.http.delete(`${this.resourceUrl}/${r}`,{observe:"response"})}search(r){const n=(0,d.b)(r);return this.http.get(this.resourceSearchUrl,{params:n,observe:"response"}).pipe((0,p.U)(m=>this.convertDateArrayFromServer(m)))}addSignedPaymentToCollectionIfMissing(r,...n){const m=n.filter(E.E);if(m.length>0){const P=r.map(U=>(0,l.N)(U));return[...m.filter(U=>{const y=(0,l.N)(U);return null!=y&&!P.includes(y)&&(P.push(y),!0)}),...r]}return r}convertDateFromClient(r){var n;return Object.assign({},r,{transactionDate:(null===(n=r.transactionDate)||void 0===n?void 0:n.isValid())?r.transactionDate.format(h.z):void 0})}convertDateFromServer(r){return r.body&&(r.body.transactionDate=r.body.transactionDate?_(r.body.transactionDate):void 0),r}convertDateArrayFromServer(r){return r.body&&r.body.forEach(n=>{n.transactionDate=n.transactionDate?_(n.transactionDate):void 0}),r}}return D.\u0275fac=function(r){return new(r||D)(c.LFG(i.eN),c.LFG(t.y))},D.\u0275prov=c.Yz7({token:D,factory:D.\u0275fac,providedIn:u.a}),D})()},1843:(f,v,e)=>{e.d(v,{k:()=>u});var p=e(6037),_=e(5929),a=e(7731),E=e(9639),h=e(7716),d=e(1841),l=e(1082);let u=(()=>{class c{constructor(t,o){this.http=t,this.applicationConfigService=o,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/tax-rules"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/tax-rules")}create(t){return this.http.post(this.resourceUrl,t,{observe:"response"})}update(t){return this.http.put(`${this.resourceUrl}/${(0,a.Q)(t)}`,t,{observe:"response"})}partialUpdate(t){return this.http.patch(`${this.resourceUrl}/${(0,a.Q)(t)}`,t,{observe:"response"})}find(t){return this.http.get(`${this.resourceUrl}/${t}`,{observe:"response"})}query(t){const o=(0,_.b)(t);return this.http.get(this.resourceUrl,{params:o,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`,{observe:"response"})}search(t){const o=(0,_.b)(t);return this.http.get(this.resourceSearchUrl,{params:o,observe:"response"})}addTaxRuleToCollectionIfMissing(t,...o){const D=o.filter(p.E);if(D.length>0){const s=t.map(n=>(0,a.Q)(n));return[...D.filter(n=>{const m=(0,a.Q)(n);return null!=m&&!s.includes(m)&&(s.push(m),!0)}),...t]}return t}}return c.\u0275fac=function(t){return new(t||c)(h.LFG(d.eN),h.LFG(l.y))},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:E.a}),c})()},8111:(f,v,e)=>{e.d(v,{QR:()=>i,a7:()=>h,dt:()=>E,DW:()=>t,Z1:()=>l,OY:()=>d});var p=e(8873),_=(()=>{return(o=_||(_={})).KES="KES",o.USD="USD",o.GBP="GBP",o.EUR="EUR",o.INR="INR",o.ZAR="ZAR",o.AED="AED",o.CNY="CNY",o.CHF="CHF",o.UGX="UGX",o.TZS="TZS",o.JPY="JPY",o.CAD="CAD",_;var o})();const E=p(),h=_.KES,d=0,l=0,i=1,t="SETTLEMENT"},1945:(f,v,e)=>{e.d(v,{f:()=>p,p:()=>_});class p{constructor(E,h,d,l,u,c,i,t,o,D,s){this.id=E,this.invoiceNumber=h,this.invoiceDate=d,this.invoiceAmount=l,this.fileUploadToken=u,this.compilationToken=c,this.purchaseOrders=i,this.placeholders=t,this.paymentLabels=o,this.settlementCurrency=D,this.biller=s}}function _(a){return a.id}},3740:(f,v,e)=>{e.d(v,{C:()=>t});var p=e(8002),_=e(8873),E=e(6037),h=e(1726),d=e(5929),l=e(1945),u=e(7716),c=e(1841),i=e(1082);let t=(()=>{class o{constructor(s,r){this.http=s,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/payment-invoices"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/payment-invoices")}create(s){const r=this.convertDateFromClient(s);return this.http.post(this.resourceUrl,r,{observe:"response"}).pipe((0,p.U)(n=>this.convertDateFromServer(n)))}update(s){const r=this.convertDateFromClient(s);return this.http.put(`${this.resourceUrl}/${(0,l.p)(s)}`,r,{observe:"response"}).pipe((0,p.U)(n=>this.convertDateFromServer(n)))}partialUpdate(s){const r=this.convertDateFromClient(s);return this.http.patch(`${this.resourceUrl}/${(0,l.p)(s)}`,r,{observe:"response"}).pipe((0,p.U)(n=>this.convertDateFromServer(n)))}find(s){return this.http.get(`${this.resourceUrl}/${s}`,{observe:"response"}).pipe((0,p.U)(r=>this.convertDateFromServer(r)))}query(s){const r=(0,d.b)(s);return this.http.get(this.resourceUrl,{params:r,observe:"response"}).pipe((0,p.U)(n=>this.convertDateArrayFromServer(n)))}delete(s){return this.http.delete(`${this.resourceUrl}/${s}`,{observe:"response"})}search(s){const r=(0,d.b)(s);return this.http.get(this.resourceSearchUrl,{params:r,observe:"response"}).pipe((0,p.U)(n=>this.convertDateArrayFromServer(n)))}addPaymentInvoiceToCollectionIfMissing(s,...r){const n=r.filter(E.E);if(n.length>0){const m=s.map(g=>(0,l.p)(g));return[...n.filter(g=>{const U=(0,l.p)(g);return null!=U&&!m.includes(U)&&(m.push(U),!0)}),...s]}return s}convertDateFromClient(s){var r;return Object.assign({},s,{invoiceDate:(null===(r=s.invoiceDate)||void 0===r?void 0:r.isValid())?s.invoiceDate.format(h.z):void 0})}convertDateFromServer(s){return s.body&&(s.body.invoiceDate=s.body.invoiceDate?_(s.body.invoiceDate):void 0),s}convertDateArrayFromServer(s){return s.body&&s.body.forEach(r=>{r.invoiceDate=r.invoiceDate?_(r.invoiceDate):void 0}),s}}return o.\u0275fac=function(s){return new(s||o)(u.LFG(c.eN),u.LFG(i.y))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8940:(f,v,e)=>{e.d(v,{u:()=>p,r:()=>_});class p{constructor(E,h,d,l,u,c,i,t,o){this.id=E,this.categoryName=h,this.categoryDescription=d,this.categoryType=l,this.fileUploadToken=u,this.compilationToken=c,this.paymentLabels=i,this.paymentCalculations=t,this.placeholders=o}}function _(a){return a.id}},9394:(f,v,e)=>{e.d(v,{N:()=>l});var p=e(6037),_=e(5929),a=e(8940),E=e(7716),h=e(1841),d=e(1082);let l=(()=>{class u{constructor(i,t){this.http=i,this.applicationConfigService=t,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/payments/payment-categories"),this.resourceSearchUrl=this.applicationConfigService.getEndpointFor("api/payments/_search/payment-categories")}create(i){return this.http.post(this.resourceUrl,i,{observe:"response"})}update(i){return this.http.put(`${this.resourceUrl}/${(0,a.r)(i)}`,i,{observe:"response"})}partialUpdate(i){return this.http.patch(`${this.resourceUrl}/${(0,a.r)(i)}`,i,{observe:"response"})}find(i){return this.http.get(`${this.resourceUrl}/${i}`,{observe:"response"})}query(i){const t=(0,_.b)(i);return this.http.get(this.resourceUrl,{params:t,observe:"response"})}delete(i){return this.http.delete(`${this.resourceUrl}/${i}`,{observe:"response"})}search(i){const t=(0,_.b)(i);return this.http.get(this.resourceSearchUrl,{params:t,observe:"response"})}addPaymentCategoryToCollectionIfMissing(i,...t){const o=t.filter(p.E);if(o.length>0){const D=i.map(r=>(0,a.r)(r));return[...o.filter(r=>{const n=(0,a.r)(r);return null!=n&&!D.includes(n)&&(D.push(n),!0)}),...i]}return i}}return u.\u0275fac=function(i){return new(i||u)(E.LFG(h.eN),E.LFG(d.y))},u.\u0275prov=E.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);