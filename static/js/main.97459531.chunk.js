(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(25),s=n.n(c),o=n(9),r=(n(33),n(4)),l=n(5),d=n(13),h=n(7),m=n(6),j=n(3),p=(n(23),n.p+"static/media/mrg_headshot.c85638bc.jpg"),b=n(1),u=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={portfolioActive:"nav-link-active-false",photographyActive:"nav-link-active-false",homeActive:"nav-link-active-false"},a.resetActiveState=a.resetActiveState.bind(Object(d.a)(a)),a.toggleNavActiveClass=a.toggleNavActiveClass.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"resetActiveState",value:function(){this.setState({portfolioActive:"nav-link-active-false",photographyActive:"nav-link-active-false",homeActive:"nav-link-active-false"})}},{key:"toggleNavActiveClass",value:function(e){this.resetActiveState(),""!==e&&void 0!==e||(e=window.location.href.split("/").pop()),"portfolio"===e?this.setState({portfolioActive:"nav-link-active"}):"photography"===e?this.setState({photographyActive:"nav-link-active"}):""===e&&this.setState({homeActive:"nav-link-active"})}},{key:"componentDidMount",value:function(){this.toggleNavActiveClass()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"top-nav",children:[Object(b.jsxs)("div",{id:"nav-title-container",className:"nav-title-container",children:[Object(b.jsx)("div",{className:"headshot-container",children:Object(b.jsx)("img",{src:p,className:"headshot-image"})}),Object(b.jsxs)("div",{className:"nav-text-container",children:[Object(b.jsx)("div",{id:"nav-content-title",className:"name h1",children:Object(b.jsx)(o.b,{class:"nav-link",to:"/",children:"Matthew Galvin"})}),Object(b.jsx)("div",{id:"nav-content-subtitle",className:"h3",children:Object(b.jsx)(o.b,{class:"nav-link",to:"/",children:"Software Engineer"})})]})]}),Object(b.jsx)("div",{className:"top-nav-link-container",children:Object(b.jsxs)("div",{className:"nav-link-container-wrapper",children:[Object(b.jsx)("div",{className:"body1 nav-link-container button",children:Object(b.jsx)(o.b,{id:"home",className:"nav-link ".concat(this.state.homeActive),to:"/",children:"Home"})}),Object(b.jsx)("div",{className:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{className:"body1 nav-link-container button",children:Object(b.jsx)(o.b,{id:"portfolio",className:"nav-link ".concat(this.state.portfolioActive),to:"/portfolio",children:"Portfolio"})}),Object(b.jsx)("div",{className:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{className:"body1 nav-link-container button",children:Object(b.jsx)(o.b,{id:"photography",className:"nav-link ".concat(this.state.photographyActive),to:"/photography",children:"Photography"})}),Object(b.jsx)("div",{className:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{className:"body1 nav-link-container button",children:Object(b.jsx)("a",{className:"nav-link",href:"/MatthewGalvin_Resume_Public.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"})})]})})]})}}]),n}(i.a.Component),v=n(18),g=n(28),f=(n(43),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer-content-container",children:Object(b.jsxs)("div",{className:"footer-text-container",children:[Object(b.jsx)("div",{className:"body1 footer-attribution footer-text",children:"Developed and designed by Matthew Galvin"}),Object(b.jsx)("div",{className:"nav-link-container-wrapper",children:Object(b.jsxs)("div",{className:"footer-icons-container",children:[Object(b.jsx)("div",{class:"body1 nav-link-container",children:Object(b.jsx)("a",{class:"nav-link nav-icon-container",href:"mailto:matthewrgalvin@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(g.a,{className:"nav-icon"})})}),Object(b.jsx)("div",{class:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{class:"body1 nav-link-container",children:Object(b.jsx)("a",{class:"nav-link nav-icon-container",href:"https://github.com/galvinma",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(v.a,{className:"nav-icon"})})}),Object(b.jsx)("div",{class:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{class:"body1 nav-link-container",children:Object(b.jsx)("a",{class:"nav-link nav-icon-container",href:"https://www.linkedin.com/in/matthewrgalvin/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(v.b,{className:"nav-icon"})})}),Object(b.jsx)("div",{class:"body1 nav-spacer",children:"|"}),Object(b.jsx)("div",{class:"body1 nav-link-container",children:Object(b.jsx)("a",{class:"nav-link nav-icon-container",href:"https://www.twitter.com/galvinmath",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(v.c,{className:"nav-icon"})})})]})})]})})}}]),n}(i.a.Component)),O=(n(15),n(16),n(44),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"landing-about-container",children:Object(b.jsxs)("div",{className:"general-text-container",children:[Object(b.jsx)("div",{className:"about-text",children:Object(b.jsx)("p",{className:"body1",children:"Hi, I\u2019m Matthew! \ud83d\udc4b"})}),Object(b.jsx)("div",{className:"about-text",children:Object(b.jsx)("div",{className:"body1",children:"I\u2019m a full-stack software engineer living in Portland, Oregon \ud83c\udf32\u26f0\ufe0f\ud83c\udf27\ufe0f"})}),Object(b.jsx)("div",{className:"about-text",children:Object(b.jsxs)("div",{className:"body1",children:["I work at ",Object(b.jsx)("a",{className:"unstyled-link",href:"https://www.invitae.com",target:"_blank",rel:"noopener noreferrer",children:"Invitae"})," where I build bioinformatics pipelines. Previously at the ",Object(b.jsx)("a",{className:"unstyled-link",href:"https://oregon.providence.org/our-services/p/providence-cancer-center/",target:"_blank",rel:"noopener noreferrer",children:"Providence Cancer Institute"})," and ",Object(b.jsx)("a",{className:"unstyled-link",href:"https://www.illumina.com",target:"_blank",rel:"noopener noreferrer",children:"Illumina."})]})}),Object(b.jsx)("div",{className:"about-text",children:Object(b.jsxs)("div",{className:"body1",children:["Thank you for visiting my website. Be sure to checkout out my ",Object(b.jsx)(o.b,{class:"nav-link unstyled-link",to:"/portfolio",children:"portfolio"}),", ",Object(b.jsx)(o.b,{class:"nav-link unstyled-link",to:"/photography",children:"photography"}),", and ",Object(b.jsx)("a",{class:"nav-link unstyled-link",href:"/MatthewGalvin_Resume_Public.pdf",target:"_blank",rel:"noopener noreferrer",children:"resume"}),". I am always looking for new and exciting projects; If you would like to work together, or have any questions about my work, please ",Object(b.jsx)("a",{className:"unstyled-link",href:"mailto:matthewrgalvin@gmail.com",children:"reach out"}),"."]})})]})})}),Object(b.jsx)("div",{className:"footer footer-wrapper",children:Object(b.jsx)(f,{})})]})}}]),n}(i.a.Component)),y=(n(45),n.p+"static/media/aboveguitar.41aac7a8.jpg"),x=n.p+"static/media/alpsRolling.b6d9b0bd.jpg",w=n.p+"static/media/arno.845f3bbd.jpg",k=n.p+"static/media/beach_camp.149413db.jpg",N=n.p+"static/media/ca_coast.bccb8094.jpg",I=n.p+"static/media/carlsbad_sunset.c049fa2f.jpg",_=n.p+"static/media/church.ab796916.jpg",E=n.p+"static/media/col.d5001d63.jpg",A=n.p+"static/media/damnationcreek_ocean.649f5d9a.jpg",S=n.p+"static/media/damnationcreek.b468c1cd.jpg",B=n.p+"static/media/flor.12d91da9.jpg",C=n.p+"static/media/geneva.94106cb0.jpg",M=n.p+"static/media/kleinescheidegg.f790b849.jpg",W=n.p+"static/media/lake_lugano.c93baf22.jpg",z=n.p+"static/media/landsendrocks.9bc69980.jpg",L=n.p+"static/media/lincolncity.b95bbb1b.jpg",P=n.p+"static/media/lugano_swim.3d70ef04.jpg",D=n.p+"static/media/lugano.8c487910.jpg",R=n.p+"static/media/mountrigi.4632e49a.jpg",G=n.p+"static/media/oeschinenseeClouds.5042578e.jpg",H=n.p+"static/media/oeschinenseeSide.337c62f9.jpg",T=n.p+"static/media/pl_mom_dad.8b40e1d9.jpg",J=n.p+"static/media/pl_storm.f4f82d7f.jpg",F=n.p+"static/media/priestlake_point.f6ea59a2.jpg",U=n.p+"static/media/rome_bridge.fc98d98a.jpg",q=n.p+"static/media/rome_street.72247e08.jpg",K=n.p+"static/media/sardinia.852d87a4.jpg",V=n.p+"static/media/SardiniaSunset.2026b140.jpg",$=n.p+"static/media/super_bloom.36c29374.jpg",Q=n.p+"static/media/thor.674fe0dd.jpg",X=n.p+"static/media/thunderstormcalm.fa4d7bc7.jpg",Y=n.p+"static/media/whitneysunrise.a6543790.jpg",Z=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={images:[[y,"Guitar Lake, High Sierra Trail"],[x,"Above Wengen, Switzerland"],[w,"Florence, Italy"],[k,"Oregon Coast"],[N,"Highway 101, Northern California"],[I,"Near Carlsbad, San Diego"],[_,"Mount Rigi, Switzerland"],[Y,"Mount Whitney, High Sierra Trail"],[E,"Colosseum, Italy"],[A,"Waves, Northern California"],[q,"Rome, Italy"],[S,"Damnation Creek, Northern California"],[H,"Oeschinensee, Switzerland"],[B,"Plaza Michelangelo, Florence"],[F,"Priest Lake, Idaho"],[M,"Kleinescheidegg, Switzerland"],[T,"Family, Idaho"],[W,"Lake Lucerne, Switzerland"],[z,"Lands End, San Francisco"],[L,"Lincoln City, Oregon"],[D,"Lugano, Switzerland"],[R,"Mount Rigi, Switzerland"],[G,"Oeschinensee, Switzerland"],[J,"Priest Lake, Idaho"],[P,"Lugano, Switzerland"],[U,"Rome, Italy"],[K,"Sardinia, Italy"],[V,"Alghero, Italy"],[$,"Desert, Southern California"],[Q,"Train, Switzerland"],[X,"After the storm, High Sierra Trail"],[C,"Geneva, Switzerland"]],img_content:[]},a.shuffleArray=a.shuffleArray.bind(Object(d.a)(a)),a.returnImageArray=a.returnImageArray.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffleArray(this.state.images)}),this.returnImageArray(),window.addEventListener("resize",this.returnImageArray.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.returnImageArray.bind(this))}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}},{key:"returnImageArray",value:function(){var e=this,t=[];this.state.images.map((function(n,a){if(window.innerWidth>768){if(a%2==0&&e.state.images.length>=a+1){var i=e.state.images[a][0],c=e.state.images[a][1],s=e.state.images[a+1][0],o=e.state.images[a+1][1];t.push(Object(b.jsxs)("div",{className:"photography-container",children:[Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("a",{href:i,target:"_blank",children:Object(b.jsx)("img",{src:i,className:"photography-image"})}),Object(b.jsx)("div",{className:"body1 photo-caption",children:c})]}),Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("a",{href:s,target:"_blank",children:Object(b.jsx)("img",{src:s,className:"photography-image"})}),Object(b.jsx)("div",{className:"body1 photo-caption",children:o})]})]}))}}else{var r=e.state.images[a][0],l=e.state.images[a][1];t.push(Object(b.jsx)("div",{className:"photography-container",children:Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("a",{href:r,target:"_blank",children:Object(b.jsx)("img",{src:r,className:"photography-image"})}),Object(b.jsx)("div",{className:"body1 photo-caption",children:l})]})}))}})),this.setState({img_content:t})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"photography-wrapper",children:this.state.img_content})}}]),n}(i.a.Component),ee=(n(46),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)(Z,{})}),Object(b.jsx)("div",{className:"footer footer-wrapper",children:Object(b.jsx)(f,{})})]})}}]),n}(i.a.Component)),te=(n(20),n(24),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"portfolio-row-wrapper",children:[Object(b.jsx)("a",{class:"h3 nav-link nav-icon-container",href:this.props.githubLink,target:"_blank",rel:"noopener noreferrer",children:this.props.title}),Object(b.jsx)("div",{className:"portfolio-image-wrapper",children:this.props.images.map((function(e,t){return Object(b.jsx)("div",{className:"portfolio-image-container",children:Object(b.jsx)("img",{src:e,className:"portfolio-row-image"})})}))}),Object(b.jsx)("div",{className:"body1 portfolio-row-description",children:this.props.description})]})}}]),n}(i.a.Component)),ne=n.p+"static/media/daisyjournal_signup.bdad711a.png",ae=n.p+"static/media/daisyjournal_journal.4ba0f69b.png",ie=n.p+"static/media/daisyjournal_habits.d91b385a.png",ce=n.p+"static/media/daisyjournal_landing.f4e0d7e2.png",se=n.p+"static/media/jennifergalvin_landing.38bb0669.png",oe=n.p+"static/media/jennifergalvin_process.d78a9641.png",re=n.p+"static/media/jennifergalvin_about.22af87a3.png",le=n.p+"static/media/jennifergalvin_gallery.291a82e2.png",de=n.p+"static/media/mathtronaut_practice.51ef2aed.png",he=n.p+"static/media/mathtronaut_play.1c3939cf.png",me=n.p+"static/media/mathtronaut_blastoff.dd67ce7f.png",je=n.p+"static/media/mathtronaut_landing.43ffb4c1.png",pe=n.p+"static/media/rankedchoicepoll_about.dcc68006.png",be=n.p+"static/media/rankedchoicepoll_signup.3bc79d00.png",ue=n.p+"static/media/rankedchoicepoll_form.42aac50a.png",ve=n.p+"static/media/rankedchoicepoll_landing.5338019a.png",ge=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={content:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=[["Daisy Journal","Life planning software.",[ce,ne,ae,ie],"https://daisyjournal.com","https://github.com/galvinma/daisy-journal"],["Mathtronaut","Educational multiplication game.",[je,he,me,de],"https://mathtronaut.org","https://github.com/galvinma/mathtronaut"],["Jennifer Galvin's Artist Portfolio","Website for Virginia artist Jennifer Galvin.",[se,re,le,oe],"https://jennifergalvin.com","https://jennifergalvin.com"],["Ranked Choice Poll","Instant-runoff voting application.",[ve,be,pe,ue],"https://rankedchoicepoll.com","https://github.com/galvinma/ranked-choice-poll"]];this.setState({content:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"portfolio-content-container",children:this.state.content.map((function(t,n){return Object(b.jsx)(te,{title:e.state.content[n][0],description:e.state.content[n][1],images:e.state.content[n][2],link:e.state.content[n][3],githubLink:e.state.content[n][4]})}))})}}]),n}(i.a.Component),fe=(n(47),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"portfolio-content-container",children:Object(b.jsxs)("p",{className:"body1 port-des general-text-container",children:["I have worked on a number of web development and engineering projects in my career. Below you will find a few visual examples of web applications I have authored. If you would like to discuss non-visual or other proprietary work such as API, pipeline, or database development as described in my ",Object(b.jsx)("a",{class:"nav-link unstyled-link",href:"/MatthewGalvin_Resume_Public.pdf",target:"_blank",rel:"noopener noreferrer",children:"resume"}),", please send me an ",Object(b.jsx)("a",{className:"unstyled-link",href:"mailto:matthewrgalvin@gmail.com",children:"email"}),"."]})}),Object(b.jsx)(ge,{})]}),Object(b.jsx)("div",{className:"footer footer-wrapper",children:Object(b.jsx)(f,{})})]})}}]),n}(i.a.Component)),Oe=(n(48),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"single-page-content-wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsx)("div",{className:"not-found-content-wrapper",children:Object(b.jsxs)("div",{className:"not-found-text-container",children:[Object(b.jsx)("div",{className:"subtitle1 not-found-text",children:"Uh, oh. Something went wrong."}),Object(b.jsx)("div",{className:"subtitle1 not-found-text",children:Object(b.jsx)(o.c,{exact:!0,to:"/",className:"unstyled-link",children:"Take me back."})})]})})]})}}]),n}(i.a.Component));function ye(){void 0!==document.getElementById("close-icon")&&null!==document.getElementById("close-icon")&&(window.innerWidth<600?(document.getElementById("close-icon").style.width="40px",document.getElementById("close-icon").style.height="40px"):window.innerWidth<900?(document.getElementById("close-icon").style.width="60px",document.getElementById("close-icon").style.height="60px"):(document.getElementById("close-icon").style.width="72px",document.getElementById("close-icon").style.height="72px")),void 0!==document.getElementById("menu-icon")&&null!==document.getElementById("menu-icon")&&(window.innerWidth<600?(document.getElementById("menu-icon").style.width="40px",document.getElementById("menu-icon").style.height="40px"):window.innerWidth<900?(document.getElementById("menu-icon").style.width="60px",document.getElementById("menu-icon").style.height="60px"):(document.getElementById("menu-icon").style.width="72px",document.getElementById("menu-icon").style.height="72px")),void 0!==document.getElementById("back-arrow")&&null!==document.getElementById("back-arrow")&&(window.innerWidth<600?(document.getElementById("back-arrow").style.width="40px",document.getElementById("back-arrow").style.height="40px"):window.innerWidth<900?(document.getElementById("back-arrow").style.width="60px",document.getElementById("back-arrow").style.height="60px"):(document.getElementById("back-arrow").style.width="72px",document.getElementById("back-arrow").style.height="72px")),void 0!==document.getElementById("scroll-arrow-container")&&null!==document.getElementById("scroll-arrow-container")&&(window.innerWidth<600?document.getElementById("scroll-arrow-container").style.height="50%":window.innerWidth<900&&(document.getElementById("scroll-arrow-container").style.height="75%"))}var xe=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).setIconDimensions=ye.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setIconDimensions(),window.addEventListener("resize",this.setIconDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setIconDimensions.bind(this))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/portfolio",children:Object(b.jsx)(fe,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/photography",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(j.a,{path:"*",children:Object(b.jsx)(Oe,{})})]})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[49,1,2]]]);
//# sourceMappingURL=main.97459531.chunk.js.map