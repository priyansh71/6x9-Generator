(this["webpackJsonptime-table"]=this["webpackJsonptime-table"]||[]).push([[0],{90:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(32),a=o.n(n),i=o(5),c=o(92),l=o(112),s=o(108),d=o(116),b=o(68),p=o(120),u=o(102),j=o(113),x=o(104),m=o(3),h=function(){var e=Object(c.c)("gray.900","gray.100");return Object(m.jsx)("label",{htmlFor:"selector",children:Object(m.jsx)(u.a,{my:"2",children:Object(m.jsx)(x.a,{fontSize:["25px","30px","32px"],color:e,children:"6x9 Generator"})})})},g=o(119),C=o(118),f=[{ID:1,Code:"MATHF211",Name:"Mathematics III",Type:"Lecture",Hour:[4],Repeat:"3",Section:"JK Sahoo"},{ID:2,Code:"MATHF211",Name:"Mathematics III Tutorial",Type:"Tutorial",Hour:[0],Repeat:1,Section:"Bibekananda Sitha"},{ID:3,Code:"CSF222",Name:"Discrete Math for CS",Type:"Lecture",Hour:[2],Repeat:"3",Section:"Anup Basil Mathew"},{ID:4,Code:"CSF222",Name:"Discrete Math Tutorial",Type:"Tutorial",Hour:[18],Repeat:1,Section:"Teaching Assistants"},{ID:5,Code:"CSF214",Name:"Logic in CS",Type:"Lecture",Hour:[3],Repeat:"3",Section:"A Baskar"},{ID:6,Code:"CSF214",Name:"Logic in CS Tutorial",Type:"Tutorial",Hour:[9],Repeat:1,Section:"A Baskar"},{ID:7,Code:"CSF215",Name:"Digital Design",Type:"Lecture",Hour:[1],Repeat:"3",Section:"Ravi Kadlimatti"},{ID:8,Code:"CSF215",Name:"Digital Design Tutorial",Type:"Tutorial",Hour:[44],Repeat:1,Section:"Ravi Kadlimatti"},{ID:9,Code:"CSF215",Name:"Digital Design Lab",Type:"Lab",Hour:[14],Repeat:2,Section:"Hrishikesh Sonalikar"},{ID:10,Code:"GSF322",Name:"Critical Analysis of Literature and Cinema",Type:"Lecture",Hour:[10],Repeat:"3",Section:"Geeta B"},{ID:11,Code:"CSF213",Name:"Object Oriented Programming",Type:"Lecture",Hour:[11],Repeat:"3",Section:"Neena Goveas"},{ID:12,Code:"CSF213",Name:"Object Oriented Programming Lab",Type:"Lab",Hour:[34],Repeat:2,Section:"Group VIII"}],y=function(e){var t=Object(r.useState)(""),o=Object(i.a)(t,2),n=o[0],a=o[1],l=Object(c.c)("gray.400","gray.200"),s=Object(c.c)("gray.600","gray.100"),d={xs:"none",sm:"none",md:"inline-block",lg:"inline-block"},b=function(){n&&(e.handleTable(n),e.handleState()),a("")};return Object(m.jsxs)("div",{children:[Object(m.jsx)(g.a,{list:"courses",id:"selector",w:["50vw","45vw","30vw"],type:"text",borderWidth:"thin",listStyleImg:"revert",mt:"3",p:"1em",placeholder:"Search Courses",borderColor:l,errorBorderColor:"crimson",focusBorderColor:s,onChange:function(e){return a(e.target.value)},value:n,_placeholder:{color:s},variant:"outline",onKeyPress:function(e){"Enter"===e.key&&b()},display:{xs:"none",sm:"none",md:"inline-block",lg:"inline-block"}}),Object(m.jsx)("datalist",{id:"courses",children:f.map((function(e,t){return e.Section?Object(m.jsxs)("option",{value:e.Name,children:[e.Code," ",e.Type," : ",e.Section]},t):Object(m.jsxs)("option",{value:e.Name,children:[e.Code," ",e.Type]},t)}))}),Object(m.jsx)(C.a,{onClick:b,ml:["20px","30px","35px"],color:e.textColor,backgroundColor:e.addColor,_hover:{background:e.color},_focus:{_focus:"none"},display:d,children:"Add"}),Object(m.jsx)(C.a,{onClick:function(){n&&(e.handleRemove(n),e.handleState()),a("")},ml:["20px","30px","30px"],color:e.textColor,backgroundColor:e.removeColor,_hover:{background:e.color},_focus:{_focus:"none"},display:d,children:"Remove"})]})},O=["pink.900","purple.900","cyan.900","teal.900","green.900","red.900","gray.800"],v=["purple.100","cyan.100","teal.200","green.100","red.200"],S=function(){var e=Object(c.c)("gray.900","gray.100");return Object(m.jsx)(p.a,{className:"TimeRow",h:"80px",templateColumns:"repeat(9, 1fr)",position:"relative",display:"flex",flexDir:"row",alignItems:"flex-end",left:"4vw",children:["8:00","9:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"].map((function(t,o){return Object(m.jsx)(p.b,{gap:2,h:["72.2px"],width:["9vw","9vw","9vw"],borderWidth:"0.5px",borderColor:e,backgroundColor:"transparent",textColor:e,display:{xs:"none",sm:"none",md:"block",lg:"block"},children:Object(m.jsx)(u.a,{position:"relative",top:"30%",fontSize:"0.88em",fontWeight:"semibold",children:t})},o)}))})},k=function(){var e=Object(c.c)("gray.900","gray.100");return Object(m.jsx)(p.a,{className:"DaysCol",h:"100px",templateColumns:"repeat(1, 1fr)",display:{xs:"none",sm:"none",md:"block",lg:"block"},position:"relative",left:"-40.5vw",children:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(t,o){return Object(m.jsx)(p.b,{gap:1,h:["72.2px"],w:["50px","100px","123px"],border:"1px",borderColor:e,backgroundColor:"transparent",textColor:e,children:Object(m.jsx)(u.a,{position:"relative",top:"30%",left:["-5px","-8px","0"],fontSize:"0.85em",fontWeight:"semibold",margin:"auto",children:t})},o)}))})},T=o(109),w=o(110),I=o(107),D=o(111),L=function(){var e=Object(c.b)(),t=e.colorMode,o=e.toggleColorMode,r=Object(c.c)("gray.900","white");return Object(m.jsxs)(I.a,{children:[Object(m.jsx)(d.a,{label:"Toggle Color mode",children:Object(m.jsx)(s.a,{onClick:o,position:"absolute",top:"1px",right:"60px",m:"3.5",cursor:"pointer",children:"light"===t?Object(m.jsx)(T.a,{color:"gray.900",fontSize:"3xl"}):Object(m.jsx)(w.a,{color:"gray.100",fontSize:"3xl"})})}),Object(m.jsx)(D.a,{href:"https://github.com/priyansh71/6x9-Generator",children:Object(m.jsx)(b.a,{color:r,fontSize:"2em",position:"absolute",top:"0",right:"5px",m:"3.5",cursor:"pointer",children:Object(m.jsx)("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(m.jsx)(u.a,{mx:"4",mb:"2",position:"absolute",bottom:"0",right:"0",children:Object(m.jsx)(x.a,{fontSize:["16px"],color:r,children:"Copyright, Priyansh Vyas, 2021."})})]})};var N=function(){var e=Object(c.b)().colorMode,t=Object(c.c)("gray.800","gray.100"),o=Object(c.c)("teal.700","green.100"),n=Object(c.c)("red.600","red.200"),a=Object(c.c)("gray.100","gray.800"),x=Object(c.c)("blue.900","cyan.300"),g=Object(r.useState)(Array(54).fill(null)),C=Object(i.a)(g,2),T=C[0],w=C[1],I=Object(r.useReducer)((function(e){return e+1}),0),D=Object(i.a)(I,2)[1],N=function(e){w((function(t){return t.forEach((function(o,r){o&&e===o.Name&&(t[r]=null)})),t})),D()};return Object(m.jsxs)("div",{children:[Object(m.jsx)(L,{}),Object(m.jsxs)(l.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"2",children:[Object(m.jsx)(h,{}),Object(m.jsxs)(s.a,{display:"flex",mt:"5",mb:"5",flexDir:"row",justifyContent:"flex-start",children:[Object(m.jsx)(y,{handleTable:function(e){var t=f.find((function(t){return t.Name===e}));if(t){var o=t.Hour,r=O[Math.floor(Math.random()*O.length)],n=v[Math.floor(Math.random()*v.length)];w((function(e){var a;for(a=0;a<t.Repeat-1;a++)"Lab"===t.Type?o[a+1]=o[a]+1:o[a+1]=18+o[a];for(a=0;a<3;a++)e[o[a]]=t,Object.assign(t,{darkColor:r}),Object.assign(t,{lightColor:n});return e}))}},handleState:function(){return D()},textColor:a,addColor:o,removeColor:n,handleRemove:N}),Object(m.jsx)(d.a,{label:"Reset the table",children:Object(m.jsx)(b.a,{ml:"8",my:"5",color:x,fontSize:"2.65em",fontWeight:"bold",onClick:function(){return w(Array(54).fill(null))},cursor:"pointer",display:{xs:"none",sm:"none",md:"block",lg:"block"},children:Object(m.jsx)("path",{fill:"currentColor",d:"M13.6,2.4 C12.2,0.9 10.2,0 8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C11.7,16 14.8,13.4 15.7,10 L13.6,10 C12.8,12.3 10.6,14 8,14 C4.7,14 2,11.3 2,8 C2,4.7 4.7,2 8,2 C9.7,2 11.1,2.7 12.2,3.8 L9,7 L16,7 L16,0 L13.6,2.4 L13.6,2.4 Z"})})})]}),Object(m.jsx)(S,{}),Object(m.jsx)(k,{}),Object(m.jsx)(p.a,{templateColumns:"repeat(9,1fr)",position:"relative",left:"4vw",top:"-100px",display:{xs:"none",sm:"none",md:"grid",lg:"grid"},children:T.map((function(o,r){return o?Object(m.jsx)(p.b,{h:["72.2px"],opacity:"0.95",w:["50px","9vw"],borderColor:"transparent",fontFamily:"Fira Code",backgroundColor:"light"===e?o.darkColor:o.lightColor,color:a,fontWeight:"900",children:Object(m.jsxs)(u.a,{position:"relative",top:["0%","25%","20%"],fontSize:{xs:"0",sm:"0",md:"11px",lg:"0.82em"},children:[o.Code,Object(m.jsx)("br",{}),o.Type,Object(m.jsx)(j.a,{onClick:function(){return N(o.Name)},position:"relative",transform:"translate(80%,-120%)",display:{xs:"none",sm:"none",md:"none",lg:"block"},color:a,fontSize:"1.09em",cursor:"pointer"})]})},r):Object(m.jsx)(p.b,{h:["72.2px"],w:"9vw",borderWidth:"0.02px",borderColor:t,backgroundColor:a},r)}))})]})]})},R=o(115),F=o(114),M=Object(F.a)({xs:"0px",sm:"470px",md:"650px",lg:"1200px"}),H=Object(R.a)({breakpoints:M,styles:{global:{body:{fontFamily:"Nunito"}}}}),z=o(117),A=function(){return Object(m.jsx)(l.a,{display:{xs:"block",sm:"block",md:"none",lg:"none"},position:"relative",top:"50vh",margin:"auto",fontSize:"1.2em",overflowX:"hidden",children:Object(m.jsx)(u.a,{mx:"10",children:"Please switch to Landscape mode or a wider screen for utilizing the application."})})};a.a.render(Object(m.jsxs)(z.a,{theme:H,children:[Object(m.jsx)(A,{}),Object(m.jsx)(N,{})]}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.cc3d83f9.chunk.js.map