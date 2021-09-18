(this["webpackJsonptime-table"]=this["webpackJsonptime-table"]||[]).push([[0],{90:function(e,o,t){"use strict";t.r(o);var r=t(0),n=t(32),a=t.n(n),i=t(5),l=t(92),c=t(112),s=t(108),d=t(120),p=t(102),b=t(113),u=t(104),j=t(3),x=function(){var e=Object(l.c)("gray.900","gray.100");return Object(j.jsx)("label",{htmlFor:"selector",children:Object(j.jsx)(p.a,{my:"2",children:Object(j.jsx)(u.a,{fontSize:["25px","30px","32px"],color:e,children:"6x9 Generator"})})})},m=t(119),h=t(118),g=[{ID:1,Code:"MATHF211",Name:"Mathematics III",Type:"Lecture",Hour:[4],Repeat:3,Section:"JK Sahoo"},{ID:2,Code:"MATHF211",Name:"Mathematics III Tutorial",Type:"Tutorial",Hour:[0],Repeat:1,Section:"Bibekananda Sitha"},{ID:3,Code:"CSF222",Name:"Discrete Math for CS",Type:"Lecture",Hour:[2],Repeat:3,Section:"Anup Basil Mathew"},{ID:4,Code:"CSF222",Name:"Discrete Math Tutorial",Type:"Tutorial",Hour:[18],Repeat:1,Section:"Teaching Assistants"},{ID:5,Code:"CSF214",Name:"Logic in CS",Type:"Lecture",Hour:[3],Repeat:3,Section:"A Baskar"},{ID:6,Code:"CSF214",Name:"Logic in CS Tutorial",Type:"Tutorial",Hour:[9],Repeat:1,Section:"A Baskar"},{ID:7,Code:"CSF215",Name:"Digital Design",Type:"Lecture",Hour:[1],Repeat:3,Section:"Ravi Kadlimatti"},{ID:8,Code:"CSF215",Name:"Digital Design Tutorial",Type:"Tutorial",Hour:[44],Repeat:1,Section:"Ravi Kadlimatti"},{ID:9,Code:"CSF215",Name:"Digital Design Lab",Type:"Lab",Hour:[14],Repeat:2,Section:"Hrishikesh Sonalikar"},{ID:10,Code:"GSF322",Name:"Critical Analysis of Literature and Cinema",Type:"Lecture",Hour:[10],Repeat:3,Section:"Geeta B"},{ID:11,Code:"CSF213",Name:"Object Oriented Programming",Type:"Lecture",Hour:[11],Repeat:3,Section:"Neena Goveas"},{ID:12,Code:"CSF213",Name:"Object Oriented Programming Lab",Type:"Lab",Hour:[34],Repeat:2,Section:"Group VIII"}],C=function(e){var o=Object(r.useState)(""),t=Object(i.a)(o,2),n=t[0],a=t[1],c=Object(l.c)("gray.400","gray.200"),s=Object(l.c)("gray.500","gray.100"),d={xs:"none",sm:"none",md:"inline-block",lg:"inline-block"},p=function(){n&&(e.handleTable(n),e.handleState()),a("")};return Object(j.jsxs)("div",{children:[Object(j.jsx)(m.a,{list:"courses",id:"selector",w:["50vw","45vw","40vw"],type:"text",borderWidth:"thin",listStyleImg:"revert",mt:"3",p:"1em",placeholder:"Search Courses",borderColor:c,errorBorderColor:"crimson",focusBorderColor:s,onChange:function(e){return a(e.target.value)},value:n,_placeholder:{color:s},variant:"outline",onKeyPress:function(e){"Enter"===e.key&&p()},display:{xs:"none",sm:"none",md:"inline-block",lg:"inline-block"}}),Object(j.jsx)("datalist",{id:"courses",children:g.map((function(e,o){return e.Section?Object(j.jsxs)("option",{value:e.Name,children:[e.Code," ",e.Type," : ",e.Section]},o):Object(j.jsxs)("option",{value:e.Name,children:[e.Code," ",e.Type]},o)}))}),Object(j.jsx)(h.a,{onClick:p,ml:["20px","30px","40px"],color:e.textColor,backgroundColor:e.addColor,_hover:{background:e.color},_focus:{_focus:"none"},display:d,children:"Add"}),Object(j.jsx)(h.a,{onClick:function(){n&&(e.handleRemove(n),e.handleState(),console.log(n)),a("")},ml:["20px","30px","40px"],color:e.textColor,backgroundColor:e.removeColor,_hover:{background:e.color},_focus:{_focus:"none"},display:d,children:"Remove"})]})},f=["pink.900","purple.900","cyan.900","teal.900","green.900","red.900","gray.800"],O=["purple.100","cyan.100","teal.100","green.100","red.200","gray.100"],y=function(){var e=Object(l.c)("gray.900","gray.100");return Object(j.jsx)(d.a,{className:"TimeRow",h:"80px",templateColumns:"repeat(9, 1fr)",position:"relative",display:"flex",flexDir:"row",alignItems:"flex-end",left:"4vw",children:["8:00","9:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"].map((function(o,t){return Object(j.jsx)(d.b,{gap:2,h:["72.2px"],width:["9vw","9vw","9vw"],borderWidth:"0.5px",borderColor:e,backgroundColor:"transparent",textColor:e,display:{xs:"none",sm:"none",md:"block",lg:"block"},children:Object(j.jsx)(p.a,{position:"relative",top:"30%",fontSize:"0.88em",fontWeight:"semibold",children:o})},t)}))})},v=function(){var e=Object(l.c)("gray.900","gray.100");return Object(j.jsx)(d.a,{className:"DaysCol",h:"100px",templateColumns:"repeat(1, 1fr)",display:{xs:"none",sm:"none",md:"block",lg:"block"},position:"relative",left:"-40.5vw",children:["Mon","Tues","Wed","Thurs","Fri","Sat"].map((function(o,t){return Object(j.jsx)(d.b,{gap:1,h:["72.2px"],w:["50px","100px","123px"],border:"1px",borderColor:e,backgroundColor:"transparent",textColor:e,children:Object(j.jsx)(p.a,{position:"relative",top:"30%",left:["-5px","-8px","0"],fontSize:"0.88em",fontWeight:"semibold",children:o})},t)}))})},S=t(109),k=t(110),T=t(107),w=t(116),I=t(68),D=t(111),L=function(e){var o=Object(l.b)(),t=o.colorMode,r=o.toggleColorMode,n=Object(l.c)("gray.900","white");return Object(j.jsxs)(T.a,{children:[Object(j.jsx)(w.a,{label:"Reset the table",children:Object(j.jsx)(I.a,{position:"absolute",top:"0",right:"100px",m:"4",color:n,fontSize:"2.7em",fontWeight:"bold",onClick:e.handling,cursor:"pointer",display:{xs:"none",sm:"none",md:"block",lg:"block"},children:Object(j.jsx)("path",{fill:"currentColor",d:"M13.6,2.4 C12.2,0.9 10.2,0 8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C11.7,16 14.8,13.4 15.7,10 L13.6,10 C12.8,12.3 10.6,14 8,14 C4.7,14 2,11.3 2,8 C2,4.7 4.7,2 8,2 C9.7,2 11.1,2.7 12.2,3.8 L9,7 L16,7 L16,0 L13.6,2.4 L13.6,2.4 Z"})})}),Object(j.jsx)(w.a,{label:"Toggle Color mode",children:Object(j.jsx)(s.a,{onClick:r,position:"absolute",top:"1px",right:"60px",m:"3.5",cursor:"pointer",children:"light"===t?Object(j.jsx)(S.a,{color:"gray.900",fontSize:"3xl"}):Object(j.jsx)(k.a,{color:"gray.100",fontSize:"3xl"})})}),Object(j.jsx)(D.a,{href:"https://github.com/priyansh71/6x9-Generator",children:Object(j.jsx)(I.a,{color:n,fontSize:"2em",position:"absolute",top:"0",right:"5px",m:"3.5",cursor:"pointer",children:Object(j.jsx)("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(j.jsx)(p.a,{mx:"4",mb:"2",position:"absolute",bottom:"0",right:"0",children:Object(j.jsx)(u.a,{fontSize:["16px"],color:n,children:"Copyright, Priyansh Vyas, 2021."})})]})};var N=function(){var e=Object(l.b)().colorMode,o=Object(l.c)("gray.800","gray.100"),t=Object(l.c)("teal.600","teal.200"),n=Object(l.c)("red.600","red.200"),a=Object(l.c)("gray.100","gray.800"),u=Object(r.useState)(Array(54).fill(null)),m=Object(i.a)(u,2),h=m[0],S=m[1],k=Object(r.useReducer)((function(e){return e+1}),0),T=Object(i.a)(k,2)[1],w=function(e){S((function(o){return o.forEach((function(t,r){t&&e===t.Name&&(o[r]=null)})),o})),T()};return Object(j.jsxs)("div",{children:[Object(j.jsx)(L,{handling:function(){return S(Array(54).fill(null))}}),Object(j.jsxs)(c.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"2",children:[Object(j.jsx)(x,{}),Object(j.jsx)(s.a,{display:"flex",mt:"5",mb:"10",children:Object(j.jsx)(C,{handleTable:function(e){var o=g.find((function(o){return o.Name===e}));if(o){var t=o.Hour,r=f[Math.floor(Math.random()*f.length)],n=O[Math.floor(Math.random()*O.length)];S((function(e){var a;for(a=0;a<o.Repeat-1;a++)"Lab"===o.Type?t[a+1]=t[a]+1:t[a+1]=18+t[a];for(a=0;a<3;a++)e[t[a]]=o,Object.assign(o,{darkColor:r}),Object.assign(o,{lightColor:n});return e}))}},handleState:function(){return T()},textColor:a,addColor:t,removeColor:n,handleRemove:w})}),Object(j.jsx)(y,{}),Object(j.jsx)(v,{}),Object(j.jsx)(d.a,{templateColumns:"repeat(9,1fr)",position:"relative",left:"4vw",top:"-100px",display:{xs:"none",sm:"none",md:"grid",lg:"grid"},children:h.map((function(t,r){return t?Object(j.jsx)(d.b,{h:["72.2px"],opacity:"0.95",w:["50px","9vw"],borderColor:"transparent",fontFamily:"Fira Code",backgroundColor:"light"===e?t.darkColor:t.lightColor,color:a,fontWeight:"900",children:Object(j.jsxs)(p.a,{position:"relative",top:["0%","25%","20%"],fontSize:{xs:"0",sm:"0",md:"11px",lg:"0.84em"},verticalAlign:"center",mx:"2",my:"auto",children:[t.Code,Object(j.jsx)("br",{}),t.Type,Object(j.jsx)(b.a,{onClick:function(){return w(t.Name)},position:"relative",top:"-5",right:"-0.5",m:"0.5",display:{xs:"none",sm:"none",md:"none",lg:"block"},color:a,fontSize:"1em",cursor:"pointer"})]})},r):Object(j.jsx)(d.b,{h:["72.2px"],w:"9vw",borderWidth:"0.02px",borderColor:o,backgroundColor:a},r)}))})]})]})},R=t(115),F=t(114),M=Object(F.a)({xs:"0px",sm:"500px",md:"700px",lg:"1050px"}),H=Object(R.a)({breakpoints:M,styles:{global:{body:{fontFamily:"Nunito"}}}}),z=t(117),A=function(){return Object(j.jsx)(c.a,{display:{xs:"block",sm:"block",md:"none",lg:"none"},position:"relative",top:"50vh",margin:"auto",fontSize:"1.2em",overflowX:"hidden",children:Object(j.jsx)(p.a,{mx:"10",children:"Please switch to Landscape mode or a wider screen for utilizing the application."})})};a.a.render(Object(j.jsxs)(z.a,{theme:H,children:[Object(j.jsx)(A,{}),Object(j.jsx)(N,{})]}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.1faff991.chunk.js.map