"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4862],{4862:(P,g,r)=>{r.r(g),r.d(g,{SqliteintentoPageModule:()=>b});var d=r(4755),m=r(5030),e=r(9972),l=r(237),t=r(3020),p=r(3144),f=r(8666);function Z(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-item")(1,"ion-accordion")(2,"ion-item",14)(3,"ion-label"),t._uU(4),t.qZA()(),t.TgZ(5,"p",15),t._uU(6),t.qZA()(),t.TgZ(7,"ion-buttons",16)(8,"ion-button",17),t.NdJ("click",function(){const a=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.modificar(a))}),t._UZ(9,"ion-icon",18),t.qZA(),t.TgZ(10,"ion-button",17),t.NdJ("click",function(){const a=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.eliminar(a))}),t._UZ(11,"ion-icon",19),t.qZA()(),t._UZ(12,"ion-reorder",16),t.qZA()}if(2&o){const n=c.$implicit;t.xp6(4),t.Oqu(n.notcTitulo),t.xp6(2),t.Oqu(n.notcContenido)}}const h=function(){return["/categoriaa"]},_=function(){return["/categoriac"]},x=function(){return["/categoriad"]},q=function(){return["/categoriae"]},T=function(){return["/categoriaf"]},C=function(){return["/externapi"]},A=function(){return["/fotoshot"]},v=function(){return["/generar"]},M=function(){return["/home"]},D=[{path:"",component:(()=>{class o{handleReorder(n){console.log("Dragged from index",n.detail.from,"to",n.detail.to),n.detail.complete()}constructor(n,i,u){this.router=n,this.http=i,this.servicioBD=u,this.nachrichtenArreglo=[{notcIdent:"",notcTitulo:"",notcCategoria:"",notcContenido:""}]}ngOnInit(){this.servicioBD.dbState().subscribe(n=>{n&&this.servicioBD.nachrichtenFetch().subscribe(i=>{this.nachrichtenArreglo=i})})}obtenerTexto(n){console.log("Texto escrito: "+n.target.value)}modificar(n){this.router.navigate(["/modificar"],{state:{notcIdentEnvio:n.notcIdent,notcTituloEnvio:n.notcTitulo,notcCategoriaEnvio:n.notcCategoria,notcContenidoEnvio:n.notcContenido}})}eliminar(n){this.servicioBD.nachrichtEliminacion(n.notcIdent),this.servicioBD.presentToast("Noticia Eliminada")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l.F0),t.Y36(p.eN),t.Y36(f.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sqliteintento"]],decls:45,vars:21,consts:[["contentId","main-content"],[1,"ion-padding"],[3,"routerLink"],["size","large"],[1,"ion-text-center"],["src","../assets/imaginaciones/logotipo_corporativo-internacionalista.png",2,"max-height","89px"],["id","main-content",1,"ion-padding",3,"fullscreen"],["size","large",1,"ion-padding"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["size","small",3,"routerLink"],["collapse","fade",1,"ion-text-center"],["slot","start",3,"routerLink"],["slot","header","color","light"],["slot","content",1,"ion-padding"],["slot","end"],["ion-button","","clear","",3,"click"],["name","create"],["name","trash"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-menu",0)(1,"ion-content",1)(2,"ion-title",1),t._uU(3,"Men\xfa"),t.qZA(),t.TgZ(4,"ion-list")(5,"ion-item",2),t._uU(6,"Categor\xeda A"),t.qZA(),t.TgZ(7,"ion-item",2),t._uU(8,"Categor\xeda C"),t.qZA(),t.TgZ(9,"ion-item",2),t._uU(10,"Categor\xeda D"),t.qZA(),t.TgZ(11,"ion-item",2),t._uU(12,"Categor\xeda E"),t.qZA(),t.TgZ(13,"ion-item",2),t._uU(14,"Categor\xeda F"),t.qZA(),t.TgZ(15,"ion-item",2),t._uU(16,"JSON Externo"),t.qZA(),t.TgZ(17,"ion-item",2),t._uU(18,"C\xe1mara Foto Captura"),t.qZA()()(),t.TgZ(19,"ion-footer",1)(20,"ion-menu-toggle")(21,"ion-title",3),t._uU(22,"Cerrar"),t.qZA()()()(),t.TgZ(23,"ion-header",4)(24,"ion-toolbar")(25,"ion-title"),t._UZ(26,"img",5),t.qZA()()(),t.TgZ(27,"ion-content",6)(28,"ion-title",7),t._uU(29,"SQLite Intento"),t.qZA(),t.TgZ(30,"ion-accordion-group")(31,"ion-reorder-group",8),t.NdJ("ionItemReorder",function(a){return i.handleReorder(a)}),t.YNc(32,Z,13,2,"ion-item",9),t.qZA()(),t.TgZ(33,"ion-fab",10)(34,"ion-title",11),t._uU(35,"Agregar"),t._UZ(36,"br"),t._uU(37,"Noticia"),t.qZA()()(),t.TgZ(38,"ion-footer",12)(39,"ion-toolbar")(40,"ion-title",13),t._uU(41,"Inicio"),t.qZA(),t.TgZ(42,"ion-menu-toggle")(43,"ion-title"),t._uU(44,"Otras categor\xedas"),t.qZA()()()()),2&n&&(t.xp6(5),t.Q6J("routerLink",t.DdM(12,h)),t.xp6(2),t.Q6J("routerLink",t.DdM(13,_)),t.xp6(2),t.Q6J("routerLink",t.DdM(14,x)),t.xp6(2),t.Q6J("routerLink",t.DdM(15,q)),t.xp6(2),t.Q6J("routerLink",t.DdM(16,T)),t.xp6(2),t.Q6J("routerLink",t.DdM(17,C)),t.xp6(2),t.Q6J("routerLink",t.DdM(18,A)),t.xp6(10),t.Q6J("fullscreen",!0),t.xp6(4),t.Q6J("disabled",!1),t.xp6(1),t.Q6J("ngForOf",i.nachrichtenArreglo),t.xp6(2),t.Q6J("routerLink",t.DdM(19,v)),t.xp6(6),t.Q6J("routerLink",t.DdM(20,M)))},dependencies:[d.sg,e.We,e.eh,e.YG,e.Sm,e.W2,e.IJ,e.fr,e.Gu,e.gu,e.Ie,e.Q$,e.q_,e.z0,e.zc,e.Nh,e.oz,e.wd,e.sr,e.YI,l.rH],styles:["ion-fab[_ngcontent-%COMP%] > ion-title[_ngcontent-%COMP%]{background:#d0d53e;border-radius:15px;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026;color:#000;text-align:center;padding:1em}ion-fab[_ngcontent-%COMP%] > ion-title[_ngcontent-%COMP%]:hover{background:#a0a50c}"]}),o})()}];let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(D),l.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,m.u5,e.Pc,S]}),o})()}}]);