"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3607],{3607:(Q,u,i)=>{i.r(u),i.d(u,{CategoriaePageModule:()=>J});var g=i(4755),l=i(5030),n=i(9972),c=i(237),d=i(4004),t=i(3020),h=i(3144),m=i(8666);function p(e,a){if(1&e&&(t.TgZ(0,"ion-item")(1,"ion-accordion")(2,"ion-item",12)(3,"ion-label"),t._uU(4),t.qZA()(),t.TgZ(5,"p",13),t._uU(6),t.qZA()(),t._UZ(7,"ion-reorder",14),t.qZA()),2&e){const o=a.$implicit;t.xp6(4),t.Oqu(o.notcTitulo),t.xp6(2),t.Oqu(o.notcContenido)}}const f=function(){return["/categoriaa"]},Z=function(){return["/categoriab"]},C=function(){return["/categoriac"]},T=function(){return["/categoriad"]},A=function(){return["/categoriaf"]},v=function(){return["/externapi"]},D=function(){return["/sqliteintento"]},x=function(){return["/fotoshot"]},M=function(){return["/home"]},U=[{path:"",component:(()=>{class e{handleReorder(o){console.log("Dragged from index",o.detail.from,"to",o.detail.to),o.detail.complete()}constructor(o,r,s){this.router=o,this.http=r,this.servicioBD=s,this.nchrchtn=[],this.nachrichtenArreglo=[{notcIdent:"",notcTitulo:"",notcCategoria:"",notcContenido:""}]}ngOnInit(){this.getNachrichten().subscribe(o=>{console.log("Res",o),this.nchrchtn=o}),this.servicioBD.dbState().subscribe(o=>{o&&this.servicioBD.nachrichtenFetch().subscribe(r=>{this.nachrichtenArreglo=r})})}obtenerTexto(o){console.log("Texto escrito: "+o.target.value)}modificar(o){this.router.navigate(["/modificar"],{state:{notcIdentEnvio:o.notcIdent,notcTituloEnvio:o.notcTitulo,notcCategoriaEnvio:o.notcCategoria,notcContenidoEnvio:o.notcContenido}})}eliminar(o){this.servicioBD.nachrichtEliminacion(o.notcIdent),this.servicioBD.presentToast("Noticia Eliminada")}getNachrichten(){return this.http.get("assets/files/nachrichten.json").pipe((0,d.U)(o=>o.E))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.F0),t.Y36(h.eN),t.Y36(m.J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-categoriae"]],decls:42,vars:21,consts:[["contentId","main-content"],[1,"ion-padding"],[3,"routerLink"],["size","large"],[1,"ion-text-center"],["src","../assets/imaginaciones/logotipo_corporativo-internacionalista.png",2,"max-height","89px"],["id","main-content",1,"ion-padding",3,"fullscreen"],["size","large",1,"ion-padding"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],["collapse","fade",1,"ion-text-center"],["slot","start",3,"routerLink"],["slot","header","color","light"],["slot","content",1,"ion-padding"],["slot","end"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-menu",0)(1,"ion-content",1)(2,"ion-title",1),t._uU(3,"Men\xfa"),t.qZA(),t.TgZ(4,"ion-list")(5,"ion-item",2),t._uU(6,"Categor\xeda A"),t.qZA(),t.TgZ(7,"ion-item",2),t._uU(8,"Categor\xeda B"),t.qZA(),t.TgZ(9,"ion-item",2),t._uU(10,"Categor\xeda C"),t.qZA(),t.TgZ(11,"ion-item",2),t._uU(12,"Categor\xeda D"),t.qZA(),t.TgZ(13,"ion-item",2),t._uU(14,"Categor\xeda F"),t.qZA(),t.TgZ(15,"ion-item",2),t._uU(16,"JSON Externo"),t.qZA(),t.TgZ(17,"ion-item",2),t._uU(18,"SQLite Intento"),t.qZA(),t.TgZ(19,"ion-item",2),t._uU(20,"C\xe1mara Foto Captura"),t.qZA()()(),t.TgZ(21,"ion-footer",1)(22,"ion-menu-toggle")(23,"ion-title",3),t._uU(24,"Cerrar"),t.qZA()()()(),t.TgZ(25,"ion-header",4)(26,"ion-toolbar")(27,"ion-title"),t._UZ(28,"img",5),t.qZA()()(),t.TgZ(29,"ion-content",6)(30,"ion-title",7),t._uU(31,"Categor\xeda E"),t.qZA(),t.TgZ(32,"ion-accordion-group")(33,"ion-reorder-group",8),t.NdJ("ionItemReorder",function(P){return r.handleReorder(P)}),t.YNc(34,p,8,2,"ion-item",9),t.qZA()()(),t.TgZ(35,"ion-footer",10)(36,"ion-toolbar")(37,"ion-title",11),t._uU(38,"Inicio"),t.qZA(),t.TgZ(39,"ion-menu-toggle")(40,"ion-title"),t._uU(41,"Men\xfa"),t.qZA()()()()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(12,f)),t.xp6(2),t.Q6J("routerLink",t.DdM(13,Z)),t.xp6(2),t.Q6J("routerLink",t.DdM(14,C)),t.xp6(2),t.Q6J("routerLink",t.DdM(15,T)),t.xp6(2),t.Q6J("routerLink",t.DdM(16,A)),t.xp6(2),t.Q6J("routerLink",t.DdM(17,v)),t.xp6(2),t.Q6J("routerLink",t.DdM(18,D)),t.xp6(2),t.Q6J("routerLink",t.DdM(19,x)),t.xp6(10),t.Q6J("fullscreen",!0),t.xp6(4),t.Q6J("disabled",!1),t.xp6(1),t.Q6J("ngForOf",r.nchrchtn),t.xp6(3),t.Q6J("routerLink",t.DdM(20,M)))},dependencies:[g.sg,n.We,n.eh,n.W2,n.fr,n.Gu,n.Ie,n.Q$,n.q_,n.z0,n.zc,n.Nh,n.oz,n.wd,n.sr,n.YI,c.rH]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(U),c.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,l.u5,n.Pc,E]}),e})()}}]);