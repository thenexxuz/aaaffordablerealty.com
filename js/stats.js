
/***************************************************************************
 phpTrafficA @soft.ZoneO.net
 Copyright (C) 2004-2008 ZoneO-soft, Butchu (email: "butchu" with the domain "zoneo.net")

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 More Info About The Licence At http://www.gnu.org/copyleft/gpl.html
****************************************************************************/

function encode64(inp){
var key="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var chr1,chr2,chr3,enc3,enc4,i=0,out="";
while(i<inp.length){
chr1=inp.charCodeAt(i++);if(chr1>127) chr1=88;
chr2=inp.charCodeAt(i++);if(chr2>127) chr2=88;
chr3=inp.charCodeAt(i++);if(chr3>127) chr3=88;
if(isNaN(chr3)) {enc4=64;chr3=0;} else enc4=chr3&63;
if(isNaN(chr2)) {enc3=64;chr2=0;} else enc3=((chr2<<2)|(chr3>>6))&63;
out+=key.charAt((chr1>>2)&63)+key.charAt(((chr1<<4)|(chr2>>4))&63)+key.charAt(enc3)+key.charAt(enc4);
}
return encodeURIComponent(out);
}

function stats(sid){
var referer=encode64(document.referrer);
var thispage=encode64(window.location.pathname+location.search);
var date=new Date();
var time=date.getTime();
var resolution= screen.width + "x" + screen.height;
document.writeln("<img src=\"http://williampenton.com/traffic/count.php?sid="+sid+"&p="+thispage+"&r="+referer+"&t="+time+"&res="+resolution+"\" alt=\"\" border=\"0\" />\n");
}

