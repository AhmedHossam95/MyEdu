"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1378],{1378:(k,d,p)=>{p.r(d),p.d(d,{SubscriptionPageModule:()=>U});var s=p(6814),l=p(95),c=p(1024),m=p(6958),o=p(6689),u=p(7629);function f(t,r){if(1&t&&(o.ynx(0),o._UZ(1,"ion-input",4),o.BQk()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("name",e.controlName)("formControl",e.control)("type",e.type)("placeholder",e.placeholder)}}function h(t,r){if(1&t&&(o.TgZ(0,"ion-select-option",8),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.Q6J("value",e),o.xp6(1),o.Oqu(e)}}function C(t,r){if(1&t&&(o.ynx(0),o.YNc(1,h,2,2,"ion-select-option",7),o.BQk()),2&t){const e=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",e.selectOpts)}}function _(t,r){if(1&t&&(o.TgZ(0,"ion-select",5),o.YNc(1,C,2,1,"ng-container",6),o.qZA()),2&t){const e=o.oxw();o.Q6J("name",e.controlName)("formControl",e.control)("placeholder",e.placeholder),o.xp6(1),o.Q6J("ngIf",e.selectOpts.length>0)}}let x=(()=>{var t;class r{constructor(){this.selectOpts=[]}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-form-control"]],inputs:{label:"label",placeholder:"placeholder",type:"type",controlName:"controlName",control:"control",selectOpts:"selectOpts"},decls:7,vars:6,consts:[[1,"d-flex","flex-col","form-control"],[1,"font-md","label",3,"for"],[4,"ngIf","ngIfElse"],["isSelect",""],["fill","outline","mode","md",1,"input","font-lg","bg-white","full-width",3,"name","formControl","type","placeholder"],["mode","md","fill","outline","interface","popover","toggleIcon","chevron-down",1,"custom-select",3,"name","formControl","placeholder"],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){if(1&n&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.YNc(4,f,2,4,"ng-container",2),o.YNc(5,_,2,4,"ng-template",null,3,o.W1O),o.qZA()),2&n){const a=o.MAs(6);o.xp6(1),o.Q6J("for",i.controlName),o.xp6(1),o.Oqu(o.lcZ(3,4,i.label)),o.xp6(2),o.Q6J("ngIf","select"!==i.type)("ngIfElse",a)}},dependencies:[s.sg,s.O5,c.pK,c.t9,c.n0,c.QI,c.j9,l.JJ,l.oH,s.rS],styles:[".input[_ngcontent-%COMP%]{border-radius:8px;padding:10px 14px;border:1px solid #D0D5DD;line-height:150%;box-shadow:0 1px 2px #1018280d;min-height:unset;height:44px;color:#667085;opacity:.5}.input.has-value[_ngcontent-%COMP%]{opacity:1}"]}),r})();function b(t,r){if(1&t&&(o.TgZ(0,"ion-select-option",6),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.Q6J("value",e),o.xp6(1),o.Oqu(e)}}function O(t,r){if(1&t&&(o.TgZ(0,"ion-select",4),o.ALo(1,"titlecase"),o.YNc(2,b,2,2,"ion-select-option",5),o.qZA()),2&t){const e=r.$implicit,n=o.oxw();o.Q6J("formControl",e.control)("placeholder",o.lcZ(1,3,e.placeholder)),o.xp6(2),o.Q6J("ngForOf",n.dummyVals)}}let y=(()=>{var t;class r{constructor(){this.dateControls=[],this.dummyVals=["1","2","3","4","5","6","7","8","9","10","11","12"],this.label="child\u2019s date of bBirth"}ngOnInit(){this.getDateFormControls()}getDateFormControls(){this.dateControls=[{placeholder:"date",control:this.dateControl},{placeholder:"month",control:this.monthControl},{placeholder:"year",control:this.yearControl}]}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-child-date-control"]],inputs:{dateControl:"dateControl",monthControl:"monthControl",yearControl:"yearControl"},decls:6,vars:4,consts:[[1,"d-flex","flex-col","form-control"],[1,"font-md","label"],[1,"d-flex","dates-wrapper"],["mode","md","fill","outline","class","custom-select","interface","popover","toggleIcon","chevron-down",3,"formControl","placeholder",4,"ngFor","ngForOf"],["mode","md","fill","outline","interface","popover","toggleIcon","chevron-down",1,"custom-select",3,"formControl","placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.TgZ(4,"div",2),o.YNc(5,O,3,5,"ion-select",3),o.qZA()()),2&n&&(o.xp6(2),o.Oqu(o.lcZ(3,2,i.label)),o.xp6(3),o.Q6J("ngForOf",i.dateControls))},dependencies:[s.sg,l.JJ,c.t9,c.n0,c.QI,l.oH,s.rS],styles:[".dates-wrapper[_ngcontent-%COMP%]{gap:6px}"]}),r})();function Z(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"button",4),o.NdJ("click",function(){const a=o.CHM(e).$implicit,g=o.oxw();return o.KtG(g.setGender(a))}),o.TgZ(1,"p"),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o._UZ(4,"ion-icon",5),o.qZA()}if(2&t){const e=r.$implicit,n=o.oxw();o.ekj("selected",n.control.value===e),o.xp6(2),o.Oqu(o.lcZ(3,5,e)),o.xp6(2),o.ekj("selected",n.control.value===e)}}let v=(()=>{var t;class r{constructor(){this.genders=["boy","girl"]}ngOnInit(){}setGender(n){this.control.value!==n&&this.control.setValue(n)}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-gender-control"]],inputs:{control:"control"},decls:5,vars:1,consts:[[1,"d-flex","flex-col","form-control"],[1,"font-md","label"],[1,"gender-wrapper"],["class","gender font-lg",3,"selected","click",4,"ngFor","ngForOf"],[1,"gender","font-lg",3,"click"],["name","checkmark-circle-outline",1,"check-icon"]],template:function(n,i){1&n&&(o.TgZ(0,"section",0)(1,"label",1),o._uU(2,"Gender"),o.qZA(),o.TgZ(3,"div",2),o.YNc(4,Z,5,7,"button",3),o.qZA()()),2&n&&(o.xp6(4),o.Q6J("ngForOf",i.genders))},dependencies:[s.sg,c.gu,s.rS],styles:[".gender-wrapper[_ngcontent-%COMP%]{display:flex;gap:8px}.gender-wrapper[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]{background-color:var(--ion-color-white);flex:1;border-radius:8px;padding:10px 14px;border:1px solid #D0D5DD;line-height:150%;box-shadow:0 1px 2px #1018280d;min-height:unset;height:44px;display:flex;justify-content:space-between;align-items:center}.gender-wrapper[_ngcontent-%COMP%]   .gender.selected[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary)}.gender-wrapper[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{color:#667085;opacity:.5}.gender-wrapper[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   .check-icon.selected[_ngcontent-%COMP%]{opacity:1;color:var(--ion-color-primary)}"]}),r})();function P(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"ion-chip",18),o.NdJ("click",function(){const a=o.CHM(e).index,g=o.oxw();return o.KtG(g.selectTopic(a))}),o._uU(1),o.ALo(2,"titlecase"),o.qZA()}if(2&t){const e=r.$implicit,n=r.index,i=o.oxw();o.ekj("selected",i.topicsControl.value[n]),o.xp6(1),o.hij(" ",o.lcZ(2,3,e)," ")}}let M=(()=>{var t;class r{constructor(n){this.fb=n,this.grades=[],this.topics=[],this.MAX_TOPICS_COUNT=3}ngOnInit(){this.fillTopics()}fillTopics(){this.topicsControl.controls=this.topics.map(n=>this.fb.control(!1))}get nameControl(){return this.userInfoForm.get("contactInfo.name")}get emailControl(){return this.userInfoForm.get("contactInfo.email")}get childNameControl(){return this.userInfoForm.get("childInfo.fullName")}get dateControl(){return this.userInfoForm.get("childInfo.dateOfBirth.date")}get monthControl(){return this.userInfoForm.get("childInfo.dateOfBirth.month")}get yearControl(){return this.userInfoForm.get("childInfo.dateOfBirth.year")}get gradeControl(){return this.userInfoForm.get("childInfo.grade")}get genderControl(){return this.userInfoForm.get("childInfo.gender")}get topicsControl(){return this.userInfoForm.get("topics")}selectTopic(n){const i=this.topicsControl.at(n);i.value||this.checkSelectedTopicsCount()?(i.patchValue(!i.value),this.topicsControl.updateValueAndValidity()):console.log("max topics count reached")}checkSelectedTopicsCount(){return this.topicsControl.controls.filter(n=>n.value).length<this.MAX_TOPICS_COUNT}}return(t=r).\u0275fac=function(n){return new(n||t)(o.Y36(l.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-user-subscription-form"]],inputs:{userInfoForm:"userInfoForm",grades:"grades",topics:"topics"},decls:31,vars:14,consts:[[1,"subscription-form","bg-white",3,"formGroup"],[1,"form-title","font-xxl","font-bold","ion-no-margin"],[1,"form-title-desc","font-lg","ion-no-margin"],[1,"ion-margin-vertical"],["bgClassName","bg-light-purple"],[1,"form-controls-wrapper","d-flex","flex-col"],[1,"full-width"],[1,"font-xl","ion-no-margin","font-bold","form-sub-title"],[1,"contact-info-wrapper","d-flex","flex-col"],["label","your name","type","text","controlName","name","placeholder","e.g Osama Alshathri",3,"control"],["label","email","type","email","controlName","email","placeholder","Osama@gmail.com",3,"control"],["label","child\u2019s full name","type","text","controlName","childName","placeholder","e.g Sarah Mohammad",3,"control"],[3,"dateControl","monthControl","yearControl"],["label","Grade","type","select","controlName","grade","placeholder","e.g Grade 2",3,"control","selectOpts"],[3,"control"],["formArrayName","topics",1,"topics-wrapper","d-flex"],["class","topic font-lg ion-no-margin",3,"selected","click",4,"ngFor","ngForOf"],["expand","block","type","submit","mode","ios",1,"custom-btn","font-xl","ion-no-margin","font-extra-bold","ion-hide-xl-down"],[1,"topic","font-lg","ion-no-margin",3,"click"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"section")(2,"h1",1),o._uU(3,"Subscribe"),o.qZA(),o.TgZ(4,"p",2),o._uU(5,"to our Monthly Surprise Box"),o.qZA()(),o.TgZ(6,"div",3),o._UZ(7,"app-divider",4),o.qZA(),o.TgZ(8,"article",5)(9,"section",6)(10,"h2",7),o._uU(11,"Contact Information"),o.qZA(),o.TgZ(12,"div",8),o._UZ(13,"app-form-control",9)(14,"app-form-control",10),o.qZA()(),o.TgZ(15,"section",6)(16,"h2",7),o._uU(17,"Child's Information"),o.qZA(),o.TgZ(18,"div",8),o._UZ(19,"app-form-control",11)(20,"app-child-date-control",12)(21,"app-form-control",13)(22,"app-gender-control",14),o.qZA()(),o.TgZ(23,"section",6)(24,"h2",7),o._uU(25,"As a parent select any 3 topics"),o.qZA(),o.TgZ(26,"div",15),o.YNc(27,P,3,5,"ion-chip",16),o.qZA()()(),o.TgZ(28,"ion-button",17),o._uU(29),o.ALo(30,"titlecase"),o.qZA()()),2&n&&(o.Q6J("formGroup",i.userInfoForm),o.xp6(13),o.Q6J("control",i.nameControl),o.xp6(1),o.Q6J("control",i.emailControl),o.xp6(5),o.Q6J("control",i.childNameControl),o.xp6(1),o.Q6J("dateControl",i.dateControl)("monthControl",i.monthControl)("yearControl",i.yearControl),o.xp6(1),o.Q6J("control",i.gradeControl)("selectOpts",i.grades),o.xp6(1),o.Q6J("control",i.genderControl),o.xp6(5),o.Q6J("ngForOf",i.topics),o.xp6(2),o.hij(" ",o.lcZ(30,12,"continue to payment")," "))},dependencies:[s.sg,l.JL,c.YG,c.hM,u.X,x,l.sg,l.CE,y,v,s.rS],styles:[".subscription-form[_ngcontent-%COMP%]{padding:32px 16px}.subscription-form[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{line-height:133%}.subscription-form[_ngcontent-%COMP%]   .form-title-desc[_ngcontent-%COMP%]{line-height:150%}.subscription-form[_ngcontent-%COMP%]   .form-sub-title[_ngcontent-%COMP%]{line-height:160%;margin-bottom:8px}.subscription-form[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%]{gap:32px}.subscription-form[_ngcontent-%COMP%]   .form-controls-wrapper[_ngcontent-%COMP%]   .contact-info-wrapper[_ngcontent-%COMP%]{gap:24px}.subscription-form[_ngcontent-%COMP%]   .topics-wrapper[_ngcontent-%COMP%]{gap:8px;flex-wrap:wrap}.subscription-form[_ngcontent-%COMP%]   .topics-wrapper[_ngcontent-%COMP%]   .topic[_ngcontent-%COMP%]{line-height:150%;--background: var(--ion-color-white);--color: var(--ion-color-dark);padding:4px 20px;box-shadow:0 1px 2px #1018280d;border-radius:48px;border:1px solid #E1E3E6}.subscription-form[_ngcontent-%COMP%]   .topics-wrapper[_ngcontent-%COMP%]   .topic.selected[_ngcontent-%COMP%]{--background: #F4F1FE;--color: var(--ion-color-primary);border:1px solid var(--ion-color-primary)}@media screen and (min-width: 1200px){.subscription-form[_ngcontent-%COMP%]{flex:1 0 0;padding:32px}.custom-btn[_ngcontent-%COMP%]{height:55px;font-size:23px;margin-top:72px}}"]}),r})(),F=(()=>{var t;class r{constructor(){}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-summmary"]],decls:53,vars:10,consts:[[1,"bg-secondary","d-flex","flex-col"],[1,"summary-wrapper","flex-col-center-all","ion-align-items-start"],[1,"line-h-133","font-xxl","font-bold","ion-no-margin"],[1,"line-h-150","font-lg","ion-no-margin"],[1,"mystery-box","bg-white","flex-space-between","full-width"],[1,"d-flex","flex-col","mystery"],[1,"ion-no-margin","font-bold","font-lg","line-h-150"],[1,"ion-no-margin","font-sm","line-h-133","grey-txt"],[1,"d-flex","flex-col","ion-align-items-end"],[1,"ion-no-margin","font-lg","line-h-150"],[1,"font-bold"],[1,"full-width"],[1,"d-flex","flex-col","payment-summary"],[1,"gap-17","flex-space-between"],[1,"font-md","black-txt","flex-grow","ion-no-margin"],[1,"font-lg","ion-no-margin"],[1,"font-md","grey-txt","ion-no-margin"],[1,"divider"],["bgClassName","bg-light-purple"],[1,"font-17","font-semi-bold","black-txt","flex-grow","ion-no-margin"],[1,"font-xxl","ion-no-margin"],["expand","block","type","submit","mode","ios",1,"custom-btn","font-xl","ion-no-margin","font-extra-bold","ion-hide-xl-up"]],template:function(n,i){1&n&&(o.TgZ(0,"article",0)(1,"section",1)(2,"h1",2),o._uU(3,"Subscribe"),o.qZA(),o.TgZ(4,"p",3),o._uU(5,"to our Monthly Surprise Box"),o.qZA()(),o.TgZ(6,"section",4)(7,"div",5)(8,"h2",6),o._uU(9," Mystery Box "),o.qZA(),o.TgZ(10,"p",7),o._uU(11,"X 1"),o.qZA()(),o.TgZ(12,"div",8)(13,"h2",9),o._uU(14),o.TgZ(15,"span",10),o._uU(16,"456"),o.qZA()(),o.TgZ(17,"p",7),o._uU(18,"Monthly"),o.qZA()()(),o.TgZ(19,"section",11)(20,"div",12)(21,"div",13)(22,"p",14),o._uU(23,"Subtotal"),o.qZA(),o.TgZ(24,"p",15),o._uU(25),o.TgZ(26,"span",10),o._uU(27,"456"),o.qZA()()(),o.TgZ(28,"div",13)(29,"p",14),o._uU(30,"Shipping"),o.qZA(),o.TgZ(31,"p",16),o._uU(32,"Free "),o.qZA()(),o.TgZ(33,"div",13)(34,"p",14),o._uU(35,"Taxes"),o.qZA(),o.TgZ(36,"p",15),o._uU(37),o.TgZ(38,"span",10),o._uU(39),o.ALo(40,"number"),o.qZA()()()(),o.TgZ(41,"div",17),o._UZ(42,"app-divider",18),o.qZA(),o.TgZ(43,"div",13)(44,"p",19),o._uU(45,"Total"),o.qZA(),o.TgZ(46,"p",20),o._uU(47),o.TgZ(48,"span",10),o._uU(49,"460"),o.qZA()()()(),o.TgZ(50,"ion-button",21),o._uU(51),o.ALo(52,"titlecase"),o.qZA()()),2&n&&(o.xp6(14),o.hij(" ","SAR ",""),o.xp6(11),o.Oqu("SAR "),o.xp6(12),o.Oqu("SAR "),o.xp6(2),o.Oqu(o.lcZ(40,6,4)),o.xp6(8),o.Oqu("SAR "),o.xp6(4),o.hij(" ",o.lcZ(52,8,"continue to payment")," "))},dependencies:[c.YG,u.X,s.JJ,s.rS],styles:["article[_ngcontent-%COMP%]{padding:32px 16px 24px;gap:24px;height:100%}article[_ngcontent-%COMP%]   .summary-wrapper[_ngcontent-%COMP%]{gap:2px}article[_ngcontent-%COMP%]   .mystery-box[_ngcontent-%COMP%]{padding:16px 16px 40px;border-radius:8px}article[_ngcontent-%COMP%]   .mystery-box[_ngcontent-%COMP%]   .mystery[_ngcontent-%COMP%]{width:185px}article[_ngcontent-%COMP%]   .line-h-133[_ngcontent-%COMP%]{line-height:133%}article[_ngcontent-%COMP%]   .line-h-150[_ngcontent-%COMP%]{line-height:150%}article[_ngcontent-%COMP%]   .payment-summary[_ngcontent-%COMP%]{gap:14px}article[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin-block:21px}.gap-17[_ngcontent-%COMP%]{gap:17px}.font-17[_ngcontent-%COMP%]{font-size:17px}.flex-grow[_ngcontent-%COMP%]{flex:1 0 0}@media screen and (min-width: 1200px){article[_ngcontent-%COMP%]{width:400px;padding:32px}}"]}),r})();var T=p(6846);function w(t,r){if(1&t&&(o.TgZ(0,"a",5),o._uU(1),o.ALo(2,"titlecase"),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}let A=(()=>{var t;class r{constructor(){this.navLinks=["overview","help","privacy"]}ngOnInit(){this.getLogoPath()}getLogoPath(){this.logoPath=T.Vd}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-subscription-footer"]],decls:6,vars:2,consts:[[1,"footer","flex-space-between","ion-align-items-center"],[1,"logo",3,"src"],[1,"nav-links","d-flex"],["class","nav-link font-lg font-semi-bold",4,"ngFor","ngForOf"],[1,"font-lg","copy-rights"],[1,"nav-link","font-lg","font-semi-bold"]],template:function(n,i){1&n&&(o.TgZ(0,"footer",0),o._UZ(1,"ion-img",1),o.TgZ(2,"nav",2),o.YNc(3,w,3,3,"a",3),o.qZA(),o.TgZ(4,"p",4),o._uU(5,"\xa9 2077 MyEdu"),o.qZA()()),2&n&&(o.xp6(1),o.Q6J("src",i.logoPath),o.xp6(2),o.Q6J("ngForOf",i.navLinks))},dependencies:[s.sg,c.Xz,s.rS],styles:[".footer[_ngcontent-%COMP%]{padding:48px 80px;height:123px}.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:63px;height:27px}.footer[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{gap:32px}.footer[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:var(--ion-color-dark);text-decoration:none;line-height:150%}.footer[_ngcontent-%COMP%]   .copy-rights[_ngcontent-%COMP%]{color:#667085;line-height:150%}"]}),r})();const I=[{path:"",component:(()=>{var t;class r{constructor(n){this.fb=n,this.grades=[],this.topics=[]}ngOnInit(){this.initUserInfoForm(),this.getGrades(),this.getTopics()}initUserInfoForm(){this.userInfoForm=this.fb.group({contactInfo:this.userInfoFormGroupFactory(),childInfo:this.childInfoFormGroupFactory(),topics:this.fb.array([])})}userInfoFormGroupFactory(){return this.fb.group({name:["",l.kI.required],email:["",[l.kI.required,l.kI.email]]})}childInfoFormGroupFactory(){return this.fb.group({fullName:["",l.kI.required],dateOfBirth:this.dateOfBirthFormGroupFactory(),grade:["",l.kI.required],gender:["",l.kI.required]})}dateOfBirthFormGroupFactory(){return this.fb.group({date:["",l.kI.required],month:["",l.kI.required],year:["",l.kI.required]})}getGrades(){this.grades=["grade 1","grade 2","grade 3","grade 4","grade 5","grade 6","grade 7","grade 8"]}getTopics(){this.topics=["arabic","islamic","english","history","sports"]}submitForm(){}}return(t=r).\u0275fac=function(n){return new(n||t)(o.Y36(l.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-subscription"]],decls:7,vars:4,consts:[[1,"d-flex","flex-col","ion-align-items-center","full-height","wrapper"],[1,"subscription-card","d-flex","flex-col",3,"formGroup","ngSubmit"],[3,"userInfoForm","grades","topics"],[1,"ion-hide-xl-down"]],template:function(n,i){1&n&&(o.TgZ(0,"ion-content")(1,"div",0)(2,"form",1),o.NdJ("ngSubmit",function(){return i.submitForm()}),o._UZ(3,"app-user-subscription-form",2)(4,"app-summmary"),o.qZA()()(),o.TgZ(5,"div",3),o._UZ(6,"app-subscription-footer"),o.qZA()),2&n&&(o.xp6(2),o.Q6J("formGroup",i.userInfoForm),o.xp6(1),o.Q6J("userInfoForm",i.userInfoForm)("grades",i.grades)("topics",i.topics))},dependencies:[l._Y,l.JL,c.W2,l.sg,M,F,A],styles:[".subscription-card[_ngcontent-%COMP%]{border-radius:24px;border:1px solid var(--ion-color-light-purple);color:var(--ion-color-dark);overflow:hidden}.wrapper[_ngcontent-%COMP%]{padding:112px 16px 80px;height:-moz-fit-content;height:fit-content;background:url(subscription-bg.3c59bdd05426e117.png) lightgray 50%/cover no-repeat}@media screen and (min-width: 1200px){.wrapper[_ngcontent-%COMP%]{padding:208px 64px 112px}.subscription-card[_ngcontent-%COMP%]{flex-direction:row;width:1012px;justify-content:space-between;margin:0}.subscription-card[_ngcontent-%COMP%]   app-user-subscription-form[_ngcontent-%COMP%]{flex:1 0 0}}"]}),r})()}];let q=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.Bz.forChild(I),m.Bz]}),r})();var S=p(8081);let U=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,l.u5,c.Pc,q,S.I,l.UX]}),r})()}}]);