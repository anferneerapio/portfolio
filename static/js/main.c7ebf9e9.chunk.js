(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(51)},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(19),a(30),a(31),a(12)),i=a(6),s=a(8),p=a(7),m=a(10),f=a(11),u=(a(32),a(53)),E=a(54),d=a(60),g=a(55),h=a(56),v=a(57);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},a.navToggle=function(){a.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{collapsed:!e.collapsed})}))},a.scrollInto=function(e){a.props.setScroll(e)},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.collapsed?r.a.createElement(u.a,{className:"d-flex sidebar sidebar-small flex-column justify-content-center"},r.a.createElement(E.a,{className:"collapsed",onClick:this.navToggle}),r.a.createElement(d.a,{isOpen:!0,navbar:!0},r.a.createElement(g.a,{className:"align-items-left justify-content-center",navbar:!0},r.a.createElement(h.a,{onClick:function(){return e.scrollInto("".concat(window.screen.width>=992?"ProjectsDesktop":"Projects"))},className:"pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"brand"},"AR"),r.a.createElement("small",null,"Dev")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("".concat(window.screen.width>=992?"ProjectsDesktop":"Projects"))},className:"pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"small"},"Projects")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Experience")},className:"pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"small"},"Experience")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Skills")},className:"pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"small"},"Skills")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Background")},className:"pr-2 pb-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"small"},"Background")),r.a.createElement(h.a,null,r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("a",{style:{paddingBottom:"8px"},href:"https://www.facebook.com/rapioanfernee"},r.a.createElement("img",{src:"/portfolio/fb-2.png",alt:"fb"})),r.a.createElement("a",{style:{paddingBottom:"8px"},href:"https://github.com/anferneerapio"},r.a.createElement("img",{src:"/portfolio/gh-2.png",alt:"fb"})),r.a.createElement("a",{style:{paddingBottom:"8px"},href:"https://www.linkedin.com/in/anfernee-rapio-673843136/"},r.a.createElement("img",{src:"/portfolio/linkedin-2.png",alt:"fb"}))))))):r.a.createElement(u.a,{className:"d-flex sidebar flex-column justify-content-center"},r.a.createElement(E.a,{onClick:this.navToggle}),r.a.createElement(d.a,{isOpen:!0,navbar:!0},r.a.createElement(g.a,{className:"align-items-left justify-content-center",navbar:!0},r.a.createElement(h.a,{onClick:function(){return e.scrollInto("".concat(window.screen.width>=992?"ProjectsDesktop":"Projects"))},className:"pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"},className:"brand"},"Anfernee Rapio"),r.a.createElement("small",null,"Front-End Developer")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("".concat(window.screen.width>=992?"ProjectsDesktop":"Projects"))},className:"pl-4 pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"}},"Projects")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Experience")},className:"pl-4 pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"}},"Experience")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Skills")},className:"pl-4 pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"}},"Skills")),r.a.createElement(h.a,{onClick:function(){return e.scrollInto("Background")},className:"pl-4 pr-2"},r.a.createElement(v.a,{style:{cursor:"pointer"}},"Background")),r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.facebook.com/rapioanfernee"},r.a.createElement("img",{src:"/portfolio/fb-2.png",alt:"fb"})),r.a.createElement("a",{href:"https://github.com/anferneerapio"},r.a.createElement("img",{src:"/portfolio/gh-2.png",alt:"fb"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/anfernee-rapio-673843136/"},r.a.createElement("img",{src:"/portfolio/linkedin-2.png",alt:"fb"})))))))}}]),t}(r.a.Component),N=a(59),w=(a(42),a(43),function(e){return r.a.createElement("div",{className:"background",ref:e.sectionRef},r.a.createElement("div",{className:"background-title pb-5"},"Background"),r.a.createElement("p",null,"Experienced front-end developer specializing in ReactJS web applications"),r.a.createElement("p",null,"Underwent multiple roles in the software engineering industry such as software developer and support"),r.a.createElement("p",null,"Highly experienced in Agile methodologies such as Scrum and Kanban"),r.a.createElement("p",null,"Able to convert designs in Sketch / Figma into responsive web applications using HTML, CSS, SCSS, and ReactJS"),r.a.createElement("p",null,"Effectively presented multiple web application projects unto clients to discuss functionality and use-case scenarios"))}),y=(a(44),function(e){return r.a.createElement("div",{className:"experiencetile py-4"},r.a.createElement("div",{className:"experiencetile-company"},e.company),r.a.createElement("div",{className:"experiencetile-position py-2"},e.position),e.description.map((function(e,t){return r.a.createElement("p",{className:"experiencetile-description",key:t},e)})))}),S=(a(45),function(e){return r.a.createElement("div",{className:"experience",ref:e.sectionRef},r.a.createElement("div",{className:"experience-title"},"Experience"),r.a.createElement("div",{className:"experience-container"},[{company:"Samsung R&D Institute Philippines",position:"Engineer",description:["Works as a front-end developer for a team focused on delivering web application that uses analytics dashboard","Uses primarily JavaScript and ReactJS for developing web application"]},{company:"Innovation Love",position:"Front-End Developer",description:["Together with a team, developed and supported a web application using ReactJS for Real ","Converted Figma designs into a responsive web application using HTML, CSS, and ReactJS"]},{company:"White Cloak Technologies",position:"ReactJS Developer",description:["Together with a team, restructured and reworked a web application for back office application using ReactJS with Redux "]},{company:"Accenture",position:"Application Development Associate",description:["Held a brown-bag session to discuss basics of ReactJS for participants in a local competition","Together with a team, maintained and supported a web application for billing purposes"]}].map((function(e,t){return r.a.createElement(y,Object.assign({key:t},e))}))))}),k=a(13),R=a.n(k),x=a(58),C=(a(48),a(49),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={slidesPerView:1,spaceBetween:40,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projects d-none d-lg-flex",ref:this.props.sectionRef.projectsRefDesktop},r.a.createElement("span",null,"Projects"),r.a.createElement(R.a,{slidesPerView:2,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},r.a.createElement("div",{className:"project"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-home.png",alt:"op"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-1.png",alt:"op"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-2.png",alt:"op"}))),r.a.createElement("div",{className:"project-title"},"OnePropertee"),r.a.createElement("p",{className:"project-subtitle"},"A Real Estate portal made closely with the country's top sellers."),r.a.createElement("small",null,"Role: Front-End, UI"),r.a.createElement("small",null,"Technologies: ReactJS, HTML, CSS, SCSS, JavaScript, Google Maps API, Bootstrap"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://onepropertee.com"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")))),r.a.createElement("div",{className:"project"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-home.png",alt:"ilove"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-1.png",alt:"ilove"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-2.png",alt:"ilove"}))),r.a.createElement("div",{className:"project-title"},"Innovation Love (Company Website)"),r.a.createElement("p",{className:"project-subtitle"},"Human-Centered innovations solving everyday problems"),r.a.createElement("small",null,"Role: Front-End UI"),r.a.createElement("small",null,"Technologies: ReactJS, Context, HTML, CSS, SCSS, JavaScript"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://innovationlove.ph"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")))),r.a.createElement("div",{className:"project"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-home.png",alt:"w"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-1.png",alt:"w"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-2.png",alt:"w"}))),r.a.createElement("div",{className:"project-title"},"Weather Forecast App"),r.a.createElement("p",{className:"project-subtitle"},"A React Application for Monitoring Weather Conditions on a Specific Area"),r.a.createElement("small",null,"Role: Front-End, UI, Owner"),r.a.createElement("small",null,"Technologies: ReactJS, Redux, HTML, CSS, SCSS, JavaScript, Google Maps API"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://rapioanfernee.github.io/weatherforecastapp/"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")),r.a.createElement("a",{className:"ml-3",href:"https://github.com/rapioanfernee/weatherforecastapp/"},r.a.createElement(x.a,{color:"secondary",size:"large"},"View Repository")))))),r.a.createElement("div",{className:"projects d-lg-none d-flex flex-column align-items-center  pt-5 pt-lg-0",ref:this.props.sectionRef.projectsRef},r.a.createElement("span",null,"Projects"),r.a.createElement("div",{className:"project pb-4 d-flex flex-column align-items-center text-center border-bottom border-top border-secondary"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-home.png",alt:"op"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-home.png",alt:"op"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/op-home.png",alt:"op"}))),r.a.createElement("div",{className:"project-title pt-0"},"OnePropertee"),r.a.createElement("p",{className:"project-subtitle"},"A Real Estate portal made closely with the country's top sellers."),r.a.createElement("small",null,"Role: Front-End, UI"),r.a.createElement("small",null,"Technologies: ReactJS, HTML, CSS, SCSS, JavaScript, Google Maps API"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://onepropertee.com"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")))),r.a.createElement("div",{className:"project pb-4 d-flex flex-column align-items-center text-center border-bottom  border-secondary"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-home.png",alt:"ilove"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-1.png",alt:"ilove"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/ilove-2.png",alt:"ilove"}))),r.a.createElement("div",{className:"project-title pt-0"},"Innovation Love (Company Website)"),r.a.createElement("p",{className:"project-subtitle"},"Human-Centered innovations solving everyday problems"),r.a.createElement("small",null,"Role: Front-End, UI"),r.a.createElement("small",null,"Technologies: ReactJS, Context, HTML, CSS, SCSS, JavaScript"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://innovationlove.ph"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")))),r.a.createElement("div",{className:"project pb-4 d-flex flex-column align-items-center text-center border-bottom border-secondary"},r.a.createElement(R.a,e,r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-home.png",alt:"w"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-1.png",alt:"w"})),r.a.createElement("div",{className:"project-photo-container"},r.a.createElement("img",{src:"/portfolio/w-2.png",alt:"w"}))),r.a.createElement("div",{className:"project-title pt-0"},"Weather Forecast App"),r.a.createElement("p",{className:"project-subtitle"},"A React Application for Monitoring Weather Conditions on a Specific Area"),r.a.createElement("small",null,"Role: Front-End, UI"),r.a.createElement("small",null,"Technologies: ReactJS, Redux, HTML, CSS, SCSS, JavaScript, Google Maps API"),r.a.createElement("div",{className:"project-buttons mt-3"},r.a.createElement("a",{href:"https://rapioanfernee.github.io/weatherforecastapp/"},r.a.createElement(x.a,{color:"secondary",size:"large"},"Visit Page")),r.a.createElement("a",{className:"ml-3",href:"https://github.com/rapioanfernee/weatherforecastapp/"},r.a.createElement(x.a,{color:"secondary",size:"large"},"View Repository"))))))}}]),t}(r.a.Component)),O=(a(50),function(e){return r.a.createElement("div",{className:"skills",ref:e.sectionRef},r.a.createElement("div",{className:"skills-title"},"Skills"),r.a.createElement("div",{className:"skills-section pb-5"},r.a.createElement("div",{className:"skills-section-subtitle pt-3 pb-5"},"Proficiency in web technologies such as the following:"),r.a.createElement("div",{className:"skills-section-items"},[{img:"/portfolio/html5-1.png",name:"HTML"},{img:"/portfolio/css3.png",name:"CSS"},{img:"/portfolio/js-1.png",name:"JavaScript"},{img:"/portfolio/react-1.png",name:"ReactJS"},{img:"/portfolio/redux-1.png",name:"Redux"}].map((function(e,t){return r.a.createElement("div",{key:t,className:"skills-item mb-4"},r.a.createElement("div",{className:"skills-photo-container"},r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement("div",{className:"skills-skill-name"},e.name))})))),r.a.createElement("div",{className:"skills-section pb-5"},r.a.createElement("div",{className:"skills-section-subtitle pt-3 pb-5"},"Knowledgeable on other technologies such as:"),r.a.createElement("div",{className:"skills-section-items"},[{img:"/portfolio/sass-1.png",name:"SASS"},{img:"/portfolio/bootstrap-1.png",name:"Bootstrap"},{img:"/portfolio/java-1.png",name:"Java"},{img:"/portfolio/figma-1.png",name:"Figma"},{img:"/portfolio/git-1.png",name:"Git"}].map((function(e,t){return r.a.createElement("div",{key:t,className:"skills-item mb-4"},r.a.createElement("div",{className:"skills-photo-container"},r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement("div",{className:"skills-skill-name"},e.name))})))))}),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).projectsRefDesktop=r.a.createRef(),a.projectsRef=r.a.createRef(),a.experienceRef=r.a.createRef(),a.skillsRef=r.a.createRef(),a.backgroundRef=r.a.createRef(),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.setRef({name:"Projects",ref:this.projectsRef}),this.props.setRef({name:"ProjectsDesktop",ref:this.projectsRefDesktop}),this.props.setRef({name:"Experience",ref:this.experienceRef}),this.props.setRef({name:"Skills",ref:this.skillsRef}),this.props.setRef({name:"Background",ref:this.backgroundRef})}},{key:"render",value:function(){return r.a.createElement("div",{style:{overflowY:"auto",margin:"0 auto",width:"100%"}},r.a.createElement(N.a,{className:"content"},r.a.createElement(C,{sectionRef:{projectsRefDesktop:this.projectsRefDesktop,projectsRef:this.projectsRef}}),r.a.createElement(S,{sectionRef:this.experienceRef}),r.a.createElement(O,{sectionRef:this.skillsRef}),r.a.createElement(w,{sectionRef:this.backgroundRef})))}}]),t}(r.a.Component),I=a(24),J=r.a.createContext(),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ref:[]},a.setScroll=function(e){a.state.ref.find((function(t){return t.name===e})).ref.current.scrollIntoView({behavior:"smooth"})},a.setRef=function(e){a.setState((function(t){return{ref:[].concat(Object(I.a)(t.ref),[e])}}))},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(J.Provider,{value:{setScroll:this.setScroll,setRef:this.setRef}},this.props.children)}}]),t}(n.Component);var D=function(){return r.a.createElement(A,null,r.a.createElement("div",{className:"app"},r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,e),r.a.createElement(P,e))}))))};l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c7ebf9e9.chunk.js.map