(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={profile:"https://www.github.com/knazir",repo:"https://www.github.com/knazir/tft",page:"https://www.knazir.github.io/tft",prefix:"/tft"}},24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),o=a(3),c=a(2),l=a(5),u=a(4),m=a(6),h=a(13),p=a(11);function d(e){return"".concat("/tft","/").concat(e)}var f={about:d(""),items:d("items")},g=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,this._makeLink("About",f.about),this._makeLink("Items",f.items))}},{key:"_makeLink",value:function(e,t){var a=this;return r.a.createElement(h.b,{to:t,className:this._getClassName(t),onClick:function(){return a.forceUpdate()}},e)}},{key:"_getClassName",value:function(e){return window.location.pathname.endsWith(e)?"selected":null}}]),t}(n.Component)),k=a(15),b=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about view"},r.a.createElement("p",null,"Hi, ",r.a.createElement("a",{href:k.profile,target:"_blank",rel:"noopener noreferrer"},"I'm")," really bad at Team Fight, Tactics but I think it's pretty fun. I started working on some tools to help me make better decisions while playing. I hope that you may find them useful as well."),r.a.createElement("p",null,"You can find the source for these tools and submit bugs on ",r.a.createElement("a",{href:k.repo,target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),r.a.createElement("p",null,"I did not make AutoChess. All images and information on this site are copyright their respective owners."))}}]),t}(n.Component)),v=a(23),y=a(10),w=a.n(y),E=function(e){return"".concat("/tft","/images/").concat(e)},O=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selected:!1,hovering:!1},a}return Object(m.a)(t,e),Object(c.a)(t,null,[{key:"propTypes",get:function(){return{item:w.a.object.isRequired,onClick:w.a.func}}}]),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.item,t=this.state,a=t.selected,n=t.hovering,i=E("items/".concat(e.image)),s=e.effects.map(function(e,t){return r.a.createElement("div",{key:t,className:"effect"},e)});return r.a.createElement("div",{className:"imageIcon ".concat(this.props.onClick?"clickable":"")},r.a.createElement("img",{className:a?"selected":null,src:i,alt:e.name,onClick:this._onClick.bind(this),onMouseEnter:this._onMouseEnter.bind(this),onMouseLeave:this._onMouseLeave.bind(this)}),n&&r.a.createElement("div",{className:"tooltip"},r.a.createElement("h3",null,e.name),s))}},{key:"_onClick",value:function(){var e=this;if(this.props.onClick){var t=this.props.item,a=!this.state.selected;this.setState({selected:!this.state.selected},function(){return e.props.onClick(t,a)})}}},{key:"_onMouseEnter",value:function(){this.setState({hovering:!0})}},{key:"_onMouseLeave",value:function(){this.setState({hovering:!1})}}]),t}(n.Component)),j=(a(40),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.item,t=[],a=0;a<e.components.length;a++){var n=e.components[a];t.push(r.a.createElement(O,{key:"".concat(n.name,"-").concat(a),item:n})),a<e.components.length-1&&t.push(r.a.createElement("div",{key:a,className:"plus"},"+"))}return r.a.createElement("div",{className:"itemRecipe"},t,r.a.createElement("div",{className:"equals"},"="),r.a.createElement(O,{item:e}))}}],[{key:"propTypes",get:function(){return{item:w.a.object.isRequired}}}]),t}(n.Component));function C(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r={name:e,effects:t,image:a};return n&&(n.forEach(function(e){return r.effects=r.effects.concat(e.effects.filter(function(e){return-1!==r.effects.indexOf(e)}))}),r.components=n),r}var S=C("B.F. Sword",["+20 Attack Damage"],"bf.png"),I=C("Chain Vest",["+20 Armor"],"vest.png"),_=C("Giant's Belt",["+200 Health"],"belt.png"),N=C("Needlessly Large Rod",["+20% Spell Damage"],"rod.png"),A=C("Negatron Cloak",["+20 Magic Resist"],"negatron.png"),x=C("Recurve Bow",["+15% Attack Speed"],"recurve.png"),R=C("Spatula",["Used to build items that change a champions Origin or Class"],"spatula.png"),W=C("Tear of the Goddess",["+20 Mana"],"tear.png"),B=C("Guardian Angel",["Wearer revives with 500 health"],"ga.png",[S,I]),H=C("Hextech Gunblade",["Heal for 25% of all damage dealt"],"gunblade.png",[S,N]),M=C("Spear of Shoujin",["After casting an ability, wearer gains 15% of its max mana per attack"],"shoujin.png",[S,W]),L=C("Sword of the Divine",["Each second, the wearer has a 5% chance to gain 100% critical strike"],"sotd.png",[S,x]),z=C("Bloodthirster",["50% lifesteal"],"bt.png",[S,A]),G=C("Infinity Edge",["Critical strikes deal 100% damage"],"ie.png",[S,S]),D=[S,I,_,N,A,x,R,W,B,H,M,L,z,C("Youmuu's Blade",["Wearer is also an assassin"],"youmuus.png",[S,R]),G,C("Frozen Heart",["Adjacent enemies attack speed is 20% slower"],"frozenHeart.png",[I,W]),C("Knight's Vow",["Wearer is also a knight"],"knightsVow.png",[I,R]),C("Locket of the Iron Solari",["On start of combat, all adjacent allies gain a shield of 200"],"locket.png",[I,N]),C("Phantom Dancer",["Wearer dodges all critical strikes"],"pd.png",[I,x]),C("Red Buff",["Attacks deal 2.5% maximum health burn damage, burned units cannot heal"],"red.png",[I,_]),C("Sword Breaker",["Attacks have a chance to disarm"],"swordBreaker.png",[I,A]),C("Thornmail",["Reflect 35% of damage taken taken from attacks"],"thornmail.png",[I,I]),C("Frozen Mallet",["Wearer is also a glacial"],"mallet.png",[_,R]),C("Morellonomicon",["Spells deal burn damage equal to 2.5% of the enemy's maximum health per second"],"morello.png",[_,N]),C("Redemption",["On death, heal all nearby allies for 1000 health"],"redemption.png",[_,W]),C("Titanic Hydra",["Attacks deal 10% of the wearer's max health as splash damage"],"titanic.png",[_,x]),C("Warmog's Armor",["Wearer regenerates 3% max health per second"],"warmogs.png",[_,_]),C("Zephyr",["On start of combat, banish an enemy for 5 seconds"],"zephyr.png",[_,A]),C("Yuumi",["Wearer is also a sorcerer"],"yuumi.png",[N,R]),C("Rabadon's Deathcap",["Spell damage +50%"],"deathcap.png",[N,N]),C("Luden's Echo",["Spells deal 200 splash damage on hit"],"ludens.png",[N,W]),C("Ionic Spark",["Whenever an enemy casts a spell, they take 200 damage"],"spark.png",[N,A]),C("Guinsoo's Rageblade",["Attacks grant 3% attack speed, stacks infinitely"],"guinsoos.png",[N,x]),C("Cursed Blade",["Attacks have a low chance to reduce enemy's star level by 1"],"cursedBlade.png",[A,x]),C("Dragon's Claw",["Gain 83% resistance to magic damage"],"dragonsClaw.png",[A,A]),C("Hush",["Attacks have a high chance to silence"],"hush.png",[A,W]),C("Runaan's Hurricane",["Attacks 2 additional enemies, these additional attacks deal 50% damage"],"runaans.png",[A,R]),C("Statikk Shiv",["Every 3rd attack deals 100 splash magical damage"],"shiv.png",[x,W]),C("Rapid Firecannon",["Wearer's attacks cannot be dodged, attack range is doubled"],"rapidfire.png",[x,x]),C("Blade of the Ruined King",["Wearer is also a blademaster"],"bork.png",[x,R]),C("Darkin",["Wearer is also a demon"],"darkin.png",[W,R]),C("Seraph's Embrace",["Regain 20 mana each time a spell is cast"],"seraphs.png",[W,W]),C("Force of Nature",["Gain +1 team size"],"forceOfNature.png",[R,R])],T=(a(41),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selectedItems:new Set},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"items view"},r.a.createElement("h1",null,"Items"),this._itemSelect(),r.a.createElement("h1",null,"Combinations"),this._availableItems())}},{key:"_itemSelect",value:function(){var e=this,t=D.filter(function(e){return!e.components}).map(function(t){return r.a.createElement(O,{key:t.name,item:t,onClick:e._onItemClick.bind(e)})});return r.a.createElement("div",{className:"itemSelect"},t)}},{key:"_availableItems",value:function(){var e=this.state.selectedItems,t=D.filter(function(e){return e.components}),a=[],n=!0,i=!1,s=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var l=o.value,u=Object(v.a)(l.components),m=!0,h=!1,p=void 0;try{for(var d,f=e[Symbol.iterator]();!(m=(d=f.next()).done);m=!0)for(var g=d.value,k=u.indexOf(g);-1!==k;)-1!==k&&u.splice(k,1),k=u.indexOf(g)}catch(y){h=!0,p=y}finally{try{m||null==f.return||f.return()}finally{if(h)throw p}}0===u.length&&a.push(l)}}catch(y){i=!0,s=y}finally{try{n||null==c.return||c.return()}finally{if(i)throw s}}var b=a.map(function(e){return r.a.createElement(j,{key:e.name,item:e})});return r.a.createElement("div",{className:"availableItems"},b)}},{key:"_onItemClick",value:function(e,t){var a=this.state.selectedItems;t?a.add(e):a.delete(e),this.forceUpdate()}}]),t}(n.Component)),F=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(g,null),r.a.createElement(p.a,{path:f.about,exact:!0,component:b}),r.a.createElement(p.a,{path:f.items,component:T}))}}]),t}(n.Component));s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.975c1908.chunk.js.map