(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(42)},29:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(21),i=t.n(s),c=t(6),o=t(2),l=t(8),u=t(7),m=t(9),d=t(13),h=t(11);function p(e){return"".concat("/tft","/").concat(e)}var g={items:p(""),about:p("about")},f=(t(29),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,this._makeLink("Items",g.items),r.a.createElement(d.b,{to:g.items,className:"todo"},"More to come!"))}},{key:"_makeLink",value:function(e,a){var t=this;return r.a.createElement(d.b,{to:a,className:this._getClassName(a),onClick:function(){return t.forceUpdate()}},e)}},{key:"_getClassName",value:function(e){return window.location.pathname.endsWith(e)?"selected":null}}]),a}(n.Component)),k=t(14),b=t(15),v=t(10),y=t.n(v),j=function(e){return"".concat("/tft","/images/").concat(e)},O=(t(38),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={hovering:!1},t}return Object(m.a)(a,e),Object(o.a)(a,null,[{key:"propTypes",get:function(){return{item:y.a.object.isRequired,selected:y.a.bool.isRequired,onClick:y.a.func}}}]),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.item,t=e.selected,n=this.state.hovering,s=j("items/".concat(a.image)),i=a.effects.map(function(e,a){return r.a.createElement("div",{key:a,className:"effect"},e)});return r.a.createElement("div",{className:"imageIcon ".concat(this.props.onClick?"clickable":"")},r.a.createElement("img",{className:t?"selected":null,src:s,alt:a.name,onClick:this._onClick.bind(this),onMouseEnter:this._onMouseEnter.bind(this),onMouseLeave:this._onMouseLeave.bind(this)}),n&&r.a.createElement("div",{className:"tooltip"},r.a.createElement("h3",null,a.name),i))}},{key:"_onClick",value:function(){var e=this.props,a=e.item,t=e.selected;this.props.onClick&&this.props.onClick(a,!t)}},{key:"_onMouseEnter",value:function(){this.setState({hovering:!0})}},{key:"_onMouseLeave",value:function(){this.setState({hovering:!1})}}]),a}(n.Component)),E=(t(39),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){for(var e=this.props.item,a=[],t=0;t<e.components.length;t++){var n=e.components[t];a.push(r.a.createElement(O,{key:"".concat(n.name,"-").concat(t),item:n,selected:!1})),t<e.components.length-1&&a.push(r.a.createElement("div",{key:t,className:"plus"},"+"))}return r.a.createElement("div",{className:"itemRecipe"},a,r.a.createElement("div",{className:"equals"},"="),r.a.createElement(O,{item:e,selected:!1}))}}],[{key:"propTypes",get:function(){return{item:y.a.object.isRequired}}}]),a}(n.Component));function w(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r={name:e,effects:a,image:t};return n&&(n.find(function(e){return"Spatula"===e.name})||n.forEach(function(e){return r.effects=[].concat(Object(k.a)(e.effects),Object(k.a)(r.effects))}),r.components=n),r}var C=w("B.F. Sword",["+20 Attack Damage"],"bf.png"),S=w("Chain Vest",["+20 Armor"],"vest.png"),I=w("Giant's Belt",["+200 Health"],"belt.png"),_=w("Needlessly Large Rod",["+20% Spell Damage"],"rod.png"),N=w("Negatron Cloak",["+20 Magic Resist"],"negatron.png"),A=w("Recurve Bow",["+15% Attack Speed"],"recurve.png"),R=w("Spatula",["Used to build items that change a champions Origin or Class"],"spatula.png"),x=w("Tear of the Goddess",["+20 Mana"],"tear.png"),W=w("Guardian Angel",["Wearer revives with 500 health"],"ga.png",[C,S]),B=w("Zeke's Herald",["Adjacent allies gain 10% attack speed"],"zekes.png",[C,I]),L=w("Hextech Gunblade",["Heal for 25% of all damage dealt"],"gunblade.png",[C,_]),M=w("Spear of Shoujin",["After casting an ability, wearer gains 15% of its max mana per attack"],"shoujin.png",[C,x]),D=w("Sword of the Divine",["Each second, the wearer has a 5% chance to gain 100% critical strike"],"sotd.png",[C,A]),H=w("Bloodthirster",["50% lifesteal"],"bt.png",[C,N]),z=w("Infinity Edge",["Critical strikes deal 100% damage"],"ie.png",[C,C]),G=[C,S,I,_,N,A,R,x,W,B,L,M,D,H,w("Youmuu's Blade",["Wearer is also an assassin"],"youmuus.png",[C,R]),z,w("Frozen Heart",["Adjacent enemies attack speed is 20% slower"],"frozenHeart.png",[S,x]),w("Knight's Vow",["Wearer is also a knight"],"knightsVow.png",[S,R]),w("Locket of the Iron Solari",["On start of combat, all adjacent allies gain a shield of 200"],"locket.png",[S,_]),w("Phantom Dancer",["Wearer dodges all critical strikes"],"pd.png",[S,A]),w("Red Buff",["Attacks deal 2.5% maximum health burn damage, burned units cannot heal"],"red.png",[S,I]),w("Sword Breaker",["Attacks have a chance to disarm"],"swordBreaker.png",[S,N]),w("Thornmail",["Reflect 35% of damage taken taken from attacks"],"thornmail.png",[S,S]),w("Frozen Mallet",["Wearer is also a glacial"],"mallet.png",[I,R]),w("Morellonomicon",["Spells deal burn damage equal to 2.5% of the enemy's maximum health per second"],"morello.png",[I,_]),w("Redemption",["On death, heal all nearby allies for 1000 health"],"redemption.png",[I,x]),w("Titanic Hydra",["Attacks deal 10% of the wearer's max health as splash damage"],"titanic.png",[I,A]),w("Warmog's Armor",["Wearer regenerates 3% max health per second"],"warmogs.png",[I,I]),w("Zephyr",["On start of combat, banish an enemy for 5 seconds"],"zephyr.png",[I,N]),w("Yuumi",["Wearer is also a sorcerer"],"yuumi.png",[_,R]),w("Rabadon's Deathcap",["Spell damage +50%"],"deathcap.png",[_,_]),w("Luden's Echo",["Spells deal 200 splash damage on hit"],"ludens.png",[_,x]),w("Ionic Spark",["Whenever an enemy casts a spell, they take 200 damage"],"spark.png",[_,N]),w("Guinsoo's Rageblade",["Attacks grant 3% attack speed, stacks infinitely"],"guinsoos.png",[_,A]),w("Cursed Blade",["Attacks have a low chance to reduce enemy's star level by 1"],"cursedBlade.png",[N,A]),w("Dragon's Claw",["Gain 83% resistance to magic damage"],"dragonsClaw.png",[N,N]),w("Hush",["Attacks have a high chance to silence"],"hush.png",[N,x]),w("Runaan's Hurricane",["Attacks 2 additional enemies, these additional attacks deal 50% damage"],"runaans.png",[N,R]),w("Statikk Shiv",["Every 3rd attack deals 100 splash magical damage"],"shiv.png",[A,x]),w("Rapid Firecannon",["Wearer's attacks cannot be dodged, attack range is doubled"],"rapidfire.png",[A,A]),w("Blade of the Ruined King",["Wearer is also a blademaster"],"bork.png",[A,R]),w("Darkin",["Wearer is also a demon"],"darkin.png",[x,R]),w("Seraph's Embrace",["Regain 20 mana each time a spell is cast"],"seraphs.png",[x,x]),w("Force of Nature",["Gain +1 team size"],"forceOfNature.png",[R,R])],q=(t(40),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e)))._onItemClick=t._onItemClick.bind(Object(b.a)(t)),t.state={selectedItems:new Set,doubledItems:new Set},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"items view"},r.a.createElement("h1",null,"Items"),this._itemSelect(),r.a.createElement("h1",null,"Combinations"),this._availableItems())}},{key:"_itemSelect",value:function(){var e=this,a=this.state,t=a.selectedItems,n=a.doubledItems,s=G.filter(function(e){return!e.components}).map(function(a){var s=t.has(a),i=n.has(a);return r.a.createElement("div",{key:a.name,className:"item"},r.a.createElement(O,{item:a,selected:s,onClick:e._onItemClick}),r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",checked:i,onChange:function(t){return e._onDouble(a,t.target.checked)}}),"2+"))});return r.a.createElement("div",{className:"itemSelect"},s)}},{key:"_availableItems",value:function(){var e=this.state,a=e.selectedItems,t=e.doubledItems,n=G.filter(function(e){return e.components}),s=[],i=!0,c=!1,o=void 0;try{for(var l,u=n[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var m=l.value,d=Object(k.a)(m.components);if(1===a.size){var h=a.values().next().value;if(!t.has(h)){-1!==d.indexOf(h)&&s.push(m);continue}}var p=!0,g=!1,f=void 0;try{for(var b,v=a[Symbol.iterator]();!(p=(b=v.next()).done);p=!0){var y=b.value,j=d.indexOf(y);-1!==j&&d.splice(j,1),t.has(y)&&-1!==(j=d.indexOf(y))&&d.splice(j,1)}}catch(w){g=!0,f=w}finally{try{p||null==v.return||v.return()}finally{if(g)throw f}}0===d.length&&s.push(m)}}catch(w){c=!0,o=w}finally{try{i||null==u.return||u.return()}finally{if(c)throw o}}var O=s.map(function(e){return r.a.createElement(E,{key:e.name,item:e})});return r.a.createElement("div",{className:"availableItems"},O)}},{key:"_onItemClick",value:function(e,a){var t=this.state,n=t.selectedItems,r=t.doubledItems;a?n.add(e):(n.delete(e),r.has(e)&&r.delete(e)),this.forceUpdate()}},{key:"_onDouble",value:function(e,a){var t=this.state,n=t.selectedItems,r=t.doubledItems;a?(r.add(e),n.has(e)||n.add(e)):r.delete(e),this.forceUpdate()}}]),a}(n.Component)),F=(t(41),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f,null),r.a.createElement(h.a,{path:g.items,exact:!0,component:q}))}}]),a}(n.Component));function T(){window.dataLayer.push(arguments)}i.a.render(r.a.createElement(F,null),document.getElementById("root")),window.dataLayer=window.dataLayer||[];try{T("js",new Date),T("config","UA-143604066-1")}catch(U){console.log("Analytics disabled: ".concat(U.message))}}},[[24,1,2]]]);
//# sourceMappingURL=main.9a203008.chunk.js.map