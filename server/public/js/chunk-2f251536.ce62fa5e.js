(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f251536"],{1822:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"full-width"},[e("HeaderPage",{attrs:{"svg-name":"Work"}}),e("section",{staticClass:"section",staticStyle:{"max-width":"100vw"}},t._l(t.works,(function(i,s){return e("div",{key:s},[e("section",{staticClass:"section full-width"},[e("h2",{staticClass:"title is-size-3-mobile is-2 has-text-white"},[t._v(" "+t._s(i.name)+" ")]),e("p",{staticClass:"is-size-7-mobile is-size-5 has-text-white has-text-justified",staticStyle:{"margin-bottom":"20px"}},[t._v(" "+t._s(t.$t(i.description))+" ")]),i.link?e("p",{staticClass:"has-text-left is-size-6-mobile is-size-4 has-text-primary",staticStyle:{"margin-bottom":"20px"}},[e("b-icon",{attrs:{icon:"check-circle"}}),t._v(" "+t._s(t.$t("listWorks.publishedAt"))+" "),e("a",{staticClass:"has-text-white",attrs:{href:i.link,rel:"noreferrer",target:"_blank"}},[t._v(t._s(i.linkAlias))])],1):e("p",{staticClass:"has-text-left is-size-6-mobile is-size-4 has-text-danger",staticStyle:{"margin-bottom":"20px"}},[e("b-icon",{attrs:{icon:"minus-circle"}}),t._v(" "+t._s(t.$t("listWorks.notAvaliable"))+" ")],1),e("Carousel",{attrs:{list:i.list}})],1)])})),0),e("div",{staticClass:"columns is-vcentered is-centered has-background-primary is-mobile is-multiline",staticStyle:{height:"100vh",margin:"0","padding-top":"10vh"}},[e("div",{staticClass:"column is-full-mobile is-9-tablet"},[e("h2",{staticClass:"title is-size-1 is-size-3-mobile has-text-dark"},[t._v(" "+t._s(t.$t("work.otherWorks"))+" ")]),e("p",{staticClass:"is-size-4 is-size-6-mobile has-text-white"},[t._v(" "+t._s(t.$t("work.otherWorksDescription"))+" ")]),e("a",{staticClass:"button grow-hover is-large is-dark",staticStyle:{"margin-top":"15px"},attrs:{name:"github","aria-label":t.$t("work.goToGitHub"),title:t.$t("work.goToGitHub"),href:"https://github.com/mauroviniciussilva",rel:"noreferrer",target:"_blank"}},[e("b-icon",{staticStyle:{"margin-right":"15px"},attrs:{icon:"github",size:"is-large"}}),t._v(" "+t._s(t.$t("work.goToGitHub"))+" ")],1)])])],1)},o=[],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("b-carousel",{attrs:{autoplay:!0,"pause-hover":!0,progress:!0,overlay:t.gallery,"indicator-inside":!1,"indicator-custom-size":"is-small","indicator-mode":"hover","indicator-style":"is-dots","pause-text":t.$t("work.paused")},scopedSlots:t._u([{key:"indicators",fn:function(i){return[e("figure",{staticClass:"al image",attrs:{draggable:!1}},[e("img",{attrs:{draggable:!1,src:t.getImgUrl(i.i),title:t.getImgTitle(i.i)}})])]}}])},[t._l(t.list,(function(i,s){return e("b-carousel-item",{key:s},[e("a",{staticClass:"image",on:{click:function(i){return t.switchGallery(!0)}}},[e("img",{attrs:{src:i.url,title:t.$t(i.title)}})])])})),t.gallery?e("span",{staticClass:"modal-close is-large",on:{click:function(i){return t.switchGallery(!1)}}}):t._e()],2)},l=[],a={props:{list:{type:Array,required:!0}},data:function(){return{gallery:!1}},methods:{getImgUrl:function(t){return this.list[t].url},getImgTitle:function(t){return this.$t(this.list[t].title)},switchGallery:function(t){return this.gallery=t,t?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped")}}},n=a,c=(e("88bf"),e("2877")),g=Object(c["a"])(n,r,l,!1,null,null,null),u=g.exports,m=e("e9c6"),p=e("7dff"),b={name:"Works",metaInfo:function(){return{title:"Works - Mauro Oliveira",meta:[{name:"description",content:this.$t("works.metaDescription")},{name:"keywords",content:this.$t("keywords")},{property:"og:title",content:"Mauro Oliveira"},{property:"og:site_name",content:"Mauro Oliveira"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},data:function(){return{works:p["a"]}},components:{HeaderPage:m["a"],Carousel:u}},k=b,d=Object(c["a"])(k,s,o,!1,null,null,null);i["default"]=d.exports},"7dff":function(t){t.exports=JSON.parse('{"a":[{"name":"Booking","description":"listWorks.booking.description","list":[{"url":"/img/booking/login.webp","title":"listWorks.loginScreen"},{"url":"/img/booking/apartamentos.webp","title":"listWorks.booking.apartmentsList"},{"url":"/img/booking/apartamentoEdit.webp","title":"listWorks.booking.apartmentsEdit"},{"url":"/img/booking/hospedes.webp","title":"listWorks.booking.guestsList"},{"url":"/img/booking/hospedeEdit.webp","title":"listWorks.booking.guestsEdit"},{"url":"/img/booking/reservas.webp","title":"listWorks.booking.bookingList"},{"url":"/img/booking/reservaEdit.webp","title":"listWorks.booking.bookingEdit"},{"url":"/img/booking/usuarios.webp","title":"listWorks.booking.usersList"},{"url":"/img/booking/caixa.webp","title":"listWorks.booking.cashierScreen"},{"url":"/img/booking/tarifas.webp","title":"listWorks.booking.faresScreen"}]},{"name":"Confispe","description":"listWorks.confispe.description","link":"http://confispecontabilidade.com.br/","linkAlias":"confispecontabilidade.com.br","list":[{"url":"/img/confispe/home.webp","title":"listWorks.homePage"},{"url":"/img/confispe/mudarContador.webp","title":"listWorks.confispe.changeCounterPage"},{"url":"/img/confispe/abrirEmpresa.webp","title":"listWorks.confispe.openCompanyPage"},{"url":"/img/confispe/planos.webp","title":"listWorks.confispe.plansPage"},{"url":"/img/confispe/blog.webp","title":"listWorks.blog"}]},{"name":"Deblogger","description":"listWorks.deblogger.description","link":"http://deblogger.com.br/","linkAlias":"deblogger.com.br","list":[{"url":"/img/deblogger/home.webp","title":"listWorks.homePage"},{"url":"/img/deblogger/apendice.webp","title":"listWorks.homePage"},{"url":"/img/deblogger/tutoriais.webp","title":"listWorks.deblogger.tutorialsPage"},{"url":"/img/deblogger/roadMap.webp","title":"listWorks.deblogger.roadMapPage"},{"url":"/img/deblogger/categorias.webp","title":"listWorks.deblogger.blogCategoriesPage"}]},{"name":"Olímpia Parques","description":"listWorks.olimpiaParques.description","list":[{"url":"/img/olimpiaParques/home.webp","title":"listWorks.homePage"},{"url":"/img/olimpiaParques/home2.webp","title":"listWorks.homePage"},{"url":"/img/olimpiaParques/carrinho.webp","title":"listWorks.olimpiaParques.cartPage"},{"url":"/img/olimpiaParques/finalizarCompra.webp","title":"listWorks.olimpiaParques.checkoutPage"},{"url":"/img/olimpiaParques/notFound.webp","title":"listWorks.pageNotFount"}]},{"name":"CSA São Paulo","description":"listWorks.csaSaoPaulo.description","list":[{"url":"/img/csaSaoPaulo/home.webp","title":"listWorks.homePage"},{"url":"/img/csaSaoPaulo/mapa.webp","title":"listWorks.csaSaoPaulo.mapsPage"},{"url":"/img/csaSaoPaulo/calculadoraTempoLimpo.webp","title":"listWorks.csaSaoPaulo.cleanTimeCalculatorPage"},{"url":"/img/csaSaoPaulo/documentos.webp","title":"listWorks.csaSaoPaulo.documentsPage"}]}]}')},"88bf":function(t,i,e){"use strict";var s=e("ff6c"),o=e.n(s);o.a},ff6c:function(t,i,e){}}]);
//# sourceMappingURL=chunk-2f251536.ce62fa5e.js.map