var Qa="170",dh=0,js=1,ph=2,qs=1,fh=2,$t=3,cr=0,gt=1,jt=2,ur=0,Wr=1,Ys=2,Zs=3,Js=4,mh=5,Ar=100,gh=101,vh=102,_h=103,xh=104,yh=200,Mh=201,Sh=202,Eh=203,en=204,tn=205,Th=206,bh=207,wh=208,Ah=209,Rh=210,Ch=211,Ph=212,Lh=213,Nh=214,rn=0,an=1,nn=2,Xr=3,sn=4,on=5,ln=6,hn=7,Ks=0,Ih=1,Uh=2,dr=0,Dh=1,Oh=2,Fh=3,$s=4,zh=5,Bh=6,Vh=7,Qs=300,jr=301,qr=302,cn=303,un=304,oa=306,la=1e3,Rr=1001,dn=1002,Ot=1003,Hh=1004,ha=1005,qt=1006,pn=1007,Cr=1008,Qt=1009,eo=1010,to=1011,Di=1012,fn=1013,Pr=1014,er=1015,Oi=1016,mn=1017,gn=1018,Yr=1020,ro=35902,io=1021,ao=1022,Ft=1023,no=1024,so=1025,Zr=1026,Jr=1027,oo=1028,vn=1029,lo=1030,_n=1031,xn=1033,ca=33776,ua=33777,da=33778,pa=33779,yn=35840,Mn=35841,Sn=35842,En=35843,Tn=36196,bn=37492,wn=37496,An=37808,Rn=37809,Cn=37810,Pn=37811,Ln=37812,Nn=37813,In=37814,Un=37815,Dn=37816,On=37817,Fn=37818,zn=37819,Bn=37820,Vn=37821,fa=36492,Hn=36494,Gn=36495,ho=36283,kn=36284,Wn=36285,Xn=36286,ma=2300,jn=2301,qn=2302,co=2400,uo=2401,po=2402,Gh=3200,kh=3201,fo=0,Wh=1,pr="",At="srgb",Kr="srgb-linear",ga="linear",Qe="srgb",$r=7680,mo=519,Xh=512,jh=513,qh=514,go=515,Yh=516,Zh=517,Jh=518,Kh=519,vo=35044,_o="300 es",tr=2e3,va=2001,Qr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=1234567,Fi=Math.PI/180,zi=180/Math.PI;function Lr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+"-"+xt[t&255]+xt[t>>8&255]+"-"+xt[t>>16&15|64]+xt[t>>24&255]+"-"+xt[r&63|128]+xt[r>>8&255]+"-"+xt[r>>16&255]+xt[r>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function pt(e,t,r){return Math.max(t,Math.min(r,e))}function Yn(e,t){return(e%t+t)%t}function $h(e,t,r,i,a){return i+(e-t)*(a-i)/(r-t)}function Qh(e,t,r){return e!==t?(r-e)/(t-e):0}function Bi(e,t,r){return(1-r)*e+r*t}function ec(e,t,r,i){return Bi(e,t,1-Math.exp(-r*i))}function tc(e,t=1){return t-Math.abs(Yn(e,t*2)-t)}function rc(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*(3-2*e))}function ic(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*e*(e*(e*6-15)+10))}function ac(e,t){return e+Math.floor(Math.random()*(t-e+1))}function nc(e,t){return e+Math.random()*(t-e)}function sc(e){return e*(.5-Math.random())}function oc(e){e!==void 0&&(xo=e);let t=xo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lc(e){return e*Fi}function hc(e){return e*zi}function cc(e){return(e&e-1)===0&&e!==0}function uc(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function dc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function pc(e,t,r,i,a){let n=Math.cos,s=Math.sin,o=n(r/2),l=s(r/2),h=n((t+i)/2),c=s((t+i)/2),u=n((t-i)/2),d=s((t-i)/2),f=n((i-t)/2),v=s((i-t)/2);switch(a){case"XYX":e.set(o*c,l*u,l*d,o*h);break;case"YZY":e.set(l*d,o*c,l*u,o*h);break;case"ZXZ":e.set(l*u,l*d,o*c,o*h);break;case"XZX":e.set(o*c,l*v,l*f,o*h);break;case"YXY":e.set(l*f,o*c,l*v,o*h);break;case"ZYZ":e.set(l*v,l*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var yo={DEG2RAD:Fi,RAD2DEG:zi,generateUUID:Lr,clamp:pt,euclideanModulo:Yn,mapLinear:$h,inverseLerp:Qh,lerp:Bi,damp:ec,pingpong:tc,smoothstep:rc,smootherstep:ic,randInt:ac,randFloat:nc,randFloatSpread:sc,seededRandom:oc,degToRad:lc,radToDeg:hc,isPowerOfTwo:cc,ceilPowerOfTwo:uc,floorPowerOfTwo:dc,setQuaternionFromProperEuler:pc,normalize:Mt,denormalize:ei},fe=class Kl{constructor(t=0,r=0){Kl.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(pt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class $l{constructor(t,r,i,a,n,s,o,l,h){$l.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h)}set(t,r,i,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],v=i[8],g=a[0],m=a[3],p=a[6],w=a[1],x=a[4],E=a[7],F=a[2],R=a[5],A=a[8];return n[0]=s*g+o*w+l*F,n[3]=s*m+o*x+l*R,n[6]=s*p+o*E+l*A,n[1]=h*g+c*w+u*F,n[4]=h*m+c*x+u*R,n[7]=h*p+c*E+u*A,n[2]=d*g+f*w+v*F,n[5]=d*m+f*x+v*R,n[8]=d*p+f*E+v*A,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return r*s*c-r*o*h-i*n*c+i*o*l+a*n*h-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*s-o*h,d=o*l-c*n,f=h*n-s*l,v=r*u+i*d+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=u*g,t[1]=(a*h-c*i)*g,t[2]=(o*i-a*s)*g,t[3]=d*g,t[4]=(c*r-a*l)*g,t[5]=(a*n-o*r)*g,t[6]=f*g,t[7]=(i*l-h*r)*g,t[8]=(s*r-i*n)*g,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(Zn.makeScale(t,r)),this}rotate(t){return this.premultiply(Zn.makeRotation(-t)),this}translate(t,r){return this.premultiply(Zn.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zn=new Ye;function Mo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _a(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function fc(){let e=_a("canvas");return e.style.display="block",e}var So={};function Vi(e){e in So||(So[e]=!0,console.warn(e))}function mc(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}function gc(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vc(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Je={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===Qe&&(e.r=rr(e.r),e.g=rr(e.g),e.b=rr(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Qe&&(e.r=ti(e.r),e.g=ti(e.g),e.b=ti(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===pr?ga:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function rr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ti(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Eo=[.64,.33,.3,.6,.15,.06],To=[.2126,.7152,.0722],bo=[.3127,.329],wo=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Kr]:{primaries:Eo,whitePoint:bo,transfer:ga,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:To,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:Eo,whitePoint:bo,transfer:Qe,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:To,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var ri,_c=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=_a("canvas")),ri.width=e.width,ri.height=e.height;let r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=rr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rr(t[r]/255)*255):t[r]=rr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xc=0,Ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(Jn(i[n].image)):a.push(Jn(i[n]))}else a=Jn(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function Jn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?_c.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yc=0,zt=class Ka extends Qr{constructor(t=Ka.DEFAULT_IMAGE,r=Ka.DEFAULT_MAPPING,i=Rr,a=Rr,n=qt,s=Cr,o=Ft,l=Qt,h=Ka.DEFAULT_ANISOTROPY,c=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Lr(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case dn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case dn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=Qs,zt.DEFAULT_ANISOTROPY=1;var et=class Ql{constructor(t=0,r=0,i=0,a=1){Ql.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],f=s[2],v=s[6],g=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-f)<.01&&Math.abs(d-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let p=(o+1)/2,w=(u+1)/2,x=(g+1)/2,E=(l+c)/4,F=(h+f)/4,R=(d+v)/4;return p>w&&p>x?p<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(p),a=E/i,n=F/i):w>x?w<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(w),i=E/a,n=R/a):x<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),i=F/n,a=R/n),this.set(i,a,n,r),this}let m=Math.sqrt((v-d)*(v-d)+(h-f)*(h-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(v-d)/m,this.y=(h-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends Qr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let a=new zt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class extends Mc{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},Co=class extends zt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Sc=class extends zt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],h=r[i+2],c=r[i+3],u=a[n+0],d=a[n+1],f=a[n+2],v=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=v;return}if(c!==v||o!==u||l!==d||h!==f){let g=1-s,m=o*u+l*d+h*f+c*v,p=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let E=Math.sqrt(w),F=Math.atan2(E,m*p);g=Math.sin(g*F)/E,s=Math.sin(s*F)/E}let x=s*p;if(o=o*g+u*x,l=l*g+d*x,h=h*g+f*x,c=c*g+v*x,g===1-s){let E=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=E,l*=E,h*=E,c*=E}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],h=r[i+3],c=a[n],u=a[n+1],d=a[n+2],f=a[n+3];return e[t]=s*f+h*c+o*d-l*u,e[t+1]=o*f+h*u+l*c-s*d,e[t+2]=l*f+h*d+s*u-o*c,e[t+3]=h*f-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),h=s(i/2),c=s(a/2),u=o(r/2),d=o(i/2),f=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"YXZ":this._x=u*h*c+l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"ZXY":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c-u*d*f;break;case"ZYX":this._x=u*h*c-l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c+u*d*f;break;case"YZX":this._x=u*h*c+l*d*f,this._y=l*d*c+u*h*f,this._z=l*h*f-u*d*c,this._w=l*h*c-u*d*f;break;case"XZY":this._x=u*h*c-l*d*f,this._y=l*d*c-u*h*f,this._z=l*h*f+u*d*c,this._w=l*h*c+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=r+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-i)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(a-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(n-i)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=r*h+n*s+i*l-a*o,this._y=i*h+n*o+a*s-r*l,this._z=a*h+n*l+r*o-i*s,this._w=n*h-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*n+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=n*c+this._w*u,this._x=r*c+this._x*u,this._y=i*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class eh{constructor(t=0,r=0,i=0){eh.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(Po.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*i),c=2*(o*r-n*a),u=2*(n*i-s*r);return this.x=r+l*h+s*u-o*c,this.y=i+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kn.copy(this).projectOnVector(t),this.sub(Kn)}reflect(t){return this.sub(Kn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(pt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kn=new P,Po=new ii,ai=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Bt):Bt.fromBufferAttribute(a,n),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xa.copy(r.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ya.subVectors(this.max,Hi),ni.subVectors(e.a,Hi),si.subVectors(e.b,Hi),oi.subVectors(e.c,Hi),fr.subVectors(si,ni),mr.subVectors(oi,si),Ir.subVectors(ni,oi);let t=[0,-fr.z,fr.y,0,-mr.z,mr.y,0,-Ir.z,Ir.y,fr.z,0,-fr.x,mr.z,0,-mr.x,Ir.z,0,-Ir.x,-fr.y,fr.x,0,-mr.y,mr.x,0,-Ir.y,Ir.x,0];return!$n(t,ni,si,oi,ya)||(t=[1,0,0,0,1,0,0,0,1],!$n(t,ni,si,oi,ya))?!1:(Ma.crossVectors(fr,mr),t=[Ma.x,Ma.y,Ma.z],$n(t,ni,si,oi,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ir=[new P,new P,new P,new P,new P,new P,new P,new P],Bt=new P,xa=new ai,ni=new P,si=new P,oi=new P,fr=new P,mr=new P,Ir=new P,Hi=new P,ya=new P,Ma=new P,Ur=new P;function $n(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Ur.fromArray(e,n);let o=a.x*Math.abs(Ur.x)+a.y*Math.abs(Ur.y)+a.z*Math.abs(Ur.z),l=t.dot(Ur),h=r.dot(Ur),c=i.dot(Ur);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Ec=new ai,Gi=new P,Qn=new P,es=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):Ec.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);let t=Gi.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Gi,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Qn)),this.expandByPoint(Gi.copy(e.center).sub(Qn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ar=new P,ts=new P,Sa=new P,gr=new P,rs=new P,Ea=new P,is=new P,Tc=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){ts.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(ts);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Sa),s=gr.dot(this.direction),o=-gr.dot(Sa),l=gr.lengthSq(),h=Math.abs(1-n*n),c,u,d,f;if(h>0)if(c=n*o-s,u=n*s-o,f=a*h,c>=0)if(u>=-f)if(u<=f){let v=1/h;c*=v,u*=v,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-f?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=f?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(ts).addScaledVector(Sa,u),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);let r=ar.dot(this.direction),i=ar.dot(ar)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(r=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(r=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,i,a){rs.subVectors(t,e),Ea.subVectors(r,e),is.crossVectors(rs,Ea);let n=this.direction.dot(is),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;gr.subVectors(this.origin,e);let o=s*this.direction.dot(Ea.crossVectors(gr,Ea));if(o<0)return null;let l=s*this.direction.dot(rs.cross(gr));if(l<0||o+l>n)return null;let h=-s*gr.dot(is);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class Ws{constructor(t,r,i,a,n,s,o,l,h,c,u,d,f,v,g,m){Ws.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,h,c,u,d,f,v,g,m)}set(t,r,i,a,n,s,o,l,h,c,u,d,f,v,g,m){let p=this.elements;return p[0]=t,p[4]=r,p[8]=i,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ws().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/li.setFromMatrixColumn(t,0).length(),n=1/li.setFromMatrixColumn(t,1).length(),s=1/li.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*c,f=s*u,v=o*c,g=o*u;r[0]=l*c,r[4]=-l*u,r[8]=h,r[1]=f+v*h,r[5]=d-g*h,r[9]=-o*l,r[2]=g-d*h,r[6]=v+f*h,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,v=h*c,g=h*u;r[0]=d+g*o,r[4]=v*o-f,r[8]=s*h,r[1]=s*u,r[5]=s*c,r[9]=-o,r[2]=f*o-v,r[6]=g+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,v=h*c,g=h*u;r[0]=d-g*o,r[4]=-s*u,r[8]=v+f*o,r[1]=f+v*o,r[5]=s*c,r[9]=g-d*o,r[2]=-s*h,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,f=s*u,v=o*c,g=o*u;r[0]=l*c,r[4]=v*h-f,r[8]=d*h+g,r[1]=l*u,r[5]=g*h+d,r[9]=f*h-v,r[2]=-h,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,f=s*h,v=o*l,g=o*h;r[0]=l*c,r[4]=g-d*u,r[8]=v*u+f,r[1]=u,r[5]=s*c,r[9]=-o*c,r[2]=-h*c,r[6]=f*u+v,r[10]=d-g*u}else if(t.order==="XZY"){let d=s*l,f=s*h,v=o*l,g=o*h;r[0]=l*c,r[4]=-u,r[8]=h*c,r[1]=d*u+g,r[5]=s*c,r[9]=f*u-v,r[2]=v*u-f,r[6]=o*c,r[10]=g*u+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,wc)}lookAt(t,r,i){let a=this.elements;return Rt.subVectors(t,r),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),vr.crossVectors(i,Rt),vr.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),vr.crossVectors(i,Rt)),vr.normalize(),Ta.crossVectors(Rt,vr),a[0]=vr.x,a[4]=Ta.x,a[8]=Rt.x,a[1]=vr.y,a[5]=Ta.y,a[9]=Rt.y,a[2]=vr.z,a[6]=Ta.z,a[10]=Rt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],v=i[2],g=i[6],m=i[10],p=i[14],w=i[3],x=i[7],E=i[11],F=i[15],R=a[0],A=a[4],U=a[8],M=a[12],S=a[1],C=a[5],O=a[9],B=a[13],H=a[2],j=a[6],G=a[10],Q=a[14],k=a[3],se=a[7],de=a[11],Oe=a[15];return n[0]=s*R+o*S+l*H+h*k,n[4]=s*A+o*C+l*j+h*se,n[8]=s*U+o*O+l*G+h*de,n[12]=s*M+o*B+l*Q+h*Oe,n[1]=c*R+u*S+d*H+f*k,n[5]=c*A+u*C+d*j+f*se,n[9]=c*U+u*O+d*G+f*de,n[13]=c*M+u*B+d*Q+f*Oe,n[2]=v*R+g*S+m*H+p*k,n[6]=v*A+g*C+m*j+p*se,n[10]=v*U+g*O+m*G+p*de,n[14]=v*M+g*B+m*Q+p*Oe,n[3]=w*R+x*S+E*H+F*k,n[7]=w*A+x*C+E*j+F*se,n[11]=w*U+x*O+E*G+F*de,n[15]=w*M+x*B+E*Q+F*Oe,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+n*l*u-a*h*u-n*o*d+i*h*d+a*o*f-i*l*f)+g*(+r*l*f-r*h*d+n*s*d-a*s*f+a*h*c-n*l*c)+m*(+r*h*u-r*o*f-n*s*u+i*s*f+n*o*c-i*h*c)+p*(-a*o*c-r*l*u+r*o*d+a*s*u-i*s*d+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],w=u*m*h-g*d*h+g*l*f-o*m*f-u*l*p+o*d*p,x=v*d*h-c*m*h-v*l*f+s*m*f+c*l*p-s*d*p,E=c*g*h-v*u*h+v*o*f-s*g*f-c*o*p+s*u*p,F=v*u*l-c*g*l-v*o*d+s*g*d+c*o*m-s*u*m,R=r*w+i*x+a*E+n*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return t[0]=w*A,t[1]=(g*d*n-u*m*n-g*a*f+i*m*f+u*a*p-i*d*p)*A,t[2]=(o*m*n-g*l*n+g*a*h-i*m*h-o*a*p+i*l*p)*A,t[3]=(u*l*n-o*d*n-u*a*h+i*d*h+o*a*f-i*l*f)*A,t[4]=x*A,t[5]=(c*m*n-v*d*n+v*a*f-r*m*f-c*a*p+r*d*p)*A,t[6]=(v*l*n-s*m*n-v*a*h+r*m*h+s*a*p-r*l*p)*A,t[7]=(s*d*n-c*l*n+c*a*h-r*d*h-s*a*f+r*l*f)*A,t[8]=E*A,t[9]=(v*u*n-c*g*n-v*i*f+r*g*f+c*i*p-r*u*p)*A,t[10]=(s*g*n-v*o*n+v*i*h-r*g*h-s*i*p+r*o*p)*A,t[11]=(c*o*n-s*u*n-c*i*h+r*u*h+s*i*f-r*o*f)*A,t[12]=F*A,t[13]=(c*g*a-v*u*a+v*i*d-r*g*d-c*i*m+r*u*m)*A,t[14]=(v*o*a-s*g*a-v*i*l+r*g*l+s*i*m-r*o*m)*A,t[15]=(s*u*a-c*o*a+c*i*l-r*u*l-s*i*d+r*o*d)*A,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+i,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+i,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,h=n+n,c=s+s,u=o+o,d=n*h,f=n*c,v=n*u,g=s*c,m=s*u,p=o*u,w=l*h,x=l*c,E=l*u,F=i.x,R=i.y,A=i.z;return a[0]=(1-(g+p))*F,a[1]=(f+E)*F,a[2]=(v-x)*F,a[3]=0,a[4]=(f-E)*R,a[5]=(1-(d+p))*R,a[6]=(m+w)*R,a[7]=0,a[8]=(v+x)*A,a[9]=(m-w)*A,a[10]=(1-(d+g))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=li.set(a[0],a[1],a[2]).length(),s=li.set(a[4],a[5],a[6]).length(),o=li.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Vt.copy(this);let l=1/n,h=1/s,c=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=c,Vt.elements[9]*=c,Vt.elements[10]*=c,r.setFromRotationMatrix(Vt),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=tr){let l=this.elements,h=2*n/(r-t),c=2*n/(i-a),u=(r+t)/(r-t),d=(i+a)/(i-a),f,v;if(o===tr)f=-(s+n)/(s-n),v=-2*s*n/(s-n);else if(o===va)f=-s/(s-n),v=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=tr){let l=this.elements,h=1/(r-t),c=1/(i-a),u=1/(s-n),d=(r+t)*h,f=(i+a)*c,v,g;if(o===tr)v=(s+n)*u,g=-2*u;else if(o===va)v=n*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},li=new P,Vt=new lt,bc=new P(0,0,0),wc=new P(1,1,1),vr=new P,Ta=new P,Rt=new P,Lo=new lt,No=new ii,_r=class th{constructor(t=0,r=0,i=0,a=th.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],f=a[10];switch(r){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return Lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lo,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return No.setFromEuler(this),this.setFromQuaternion(No,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ac=0,Uo=new P,hi=new ii,nr=new lt,ba=new P,ki=new P,Rc=new P,Cc=new ii,Do=new P(1,0,0),Oo=new P(0,1,0),Fo=new P(0,0,1),zo={type:"added"},Pc={type:"removed"},ci={type:"childadded",child:null},as={type:"childremoved",child:null},Lt=class $a extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$a.DEFAULT_UP.clone();let t=new P,r=new _r,i=new ii,a=new P(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ye}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=$a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return hi.setFromAxisAngle(t,r),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,r){return hi.setFromAxisAngle(t,r),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Do,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,r){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(Do,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?ba.copy(t):ba.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ki,ba,this.up):nr.lookAt(ba,ki,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),hi.setFromRotationMatrix(nr),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Pc),as.child=t,this.dispatchEvent(as),as.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Rc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Cc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Lt.DEFAULT_UP=new P(0,1,0),Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=new P,sr=new P,ns=new P,or=new P,ui=new P,di=new P,Bo=new P,ss=new P,os=new P,ls=new P,hs=new et,cs=new et,us=new et,Wi=class bi{constructor(t=new P,r=new P,i=new P){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),Ht.subVectors(t,r),a.cross(Ht);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){Ht.subVectors(a,r),sr.subVectors(i,r),ns.subVectors(t,r);let s=Ht.dot(Ht),o=Ht.dot(sr),l=Ht.dot(ns),h=sr.dot(sr),c=sr.dot(ns),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,f=(h*l-o*c)*d,v=(s*c-o*l)*d;return n.set(1-f-v,v,f)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,or.x),l.addScaledVector(s,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return hs.setScalar(0),cs.setScalar(0),us.setScalar(0),hs.fromBufferAttribute(t,r),cs.fromBufferAttribute(t,i),us.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(hs,n.x),s.addScaledVector(cs,n.y),s.addScaledVector(us,n.z),s}static isFrontFacing(t,r,i,a){return Ht.subVectors(i,r),sr.subVectors(t,r),Ht.cross(sr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ht.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ht.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return bi.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return bi.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;ui.subVectors(a,i),di.subVectors(n,i),ss.subVectors(t,i);let l=ui.dot(ss),h=di.dot(ss);if(l<=0&&h<=0)return r.copy(i);os.subVectors(t,a);let c=ui.dot(os),u=di.dot(os);if(c>=0&&u<=c)return r.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(ui,s);ls.subVectors(t,n);let f=ui.dot(ls),v=di.dot(ls);if(v>=0&&f<=v)return r.copy(n);let g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),r.copy(i).addScaledVector(di,o);let m=c*v-f*u;if(m<=0&&u-c>=0&&f-v>=0)return Bo.subVectors(n,a),o=(u-c)/(u-c+(f-v)),r.copy(a).addScaledVector(Bo,o);let p=1/(m+g+d);return s=g*p,o=d*p,r.copy(i).addScaledVector(ui,s).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ds(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var Ze=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=r,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=Je.workingColorSpace){if(e=Yn(e,1),t=pt(t,0,1),r=pt(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=ds(n,a,e+1/3),this.g=ds(n,a,e),this.b=ds(n,a,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let r=Vo[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Je.fromWorkingColorSpace(yt.copy(this),e),Math.round(pt(yt.r*255,0,255))*65536+Math.round(pt(yt.g*255,0,255))*256+Math.round(pt(yt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(yt.copy(this),t);let r=yt.r,i=yt.g,a=yt.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=At){Je.fromWorkingColorSpace(yt.copy(this),e);let t=yt.r,r=yt.g,i=yt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(wa);let r=Bi(xr.h,wa.h,t),i=Bi(xr.s,wa.s,t),a=Bi(xr.l,wa.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yt=new Ze;Ze.NAMES=Vo;var Lc=0,Xi=class extends Qr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Lr(),this.name="",this.blending=Wr,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=en,this.blendDst=tn,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==en&&(r.blendSrc=this.blendSrc),this.blendDst!==tn&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pi=class extends Xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=Ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ct=new P,Aa=new fe,Yt=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vo,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ei(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Mt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),i=Mt(i,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),e}},Ho=class extends Yt{constructor(e,t,r){super(new Uint16Array(e),t,r)}},Go=class extends Yt{constructor(e,t,r){super(new Uint32Array(e),t,r)}},St=class extends Yt{constructor(e,t,r){super(new Float32Array(e),t,r)}},Nc=0,Nt=new lt,ps=new Lt,fi=new P,Ct=new ai,ji=new ai,ft=new P,yr=class rh extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mo(t)?Go:Ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new Ye().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nt.makeRotationFromQuaternion(t),this.applyMatrix4(Nt),this}rotateX(t){return Nt.makeRotationX(t),this.applyMatrix4(Nt),this}rotateY(t){return Nt.makeRotationY(t),this.applyMatrix4(Nt),this}rotateZ(t){return Nt.makeRotationZ(t),this.applyMatrix4(Nt),this}translate(t,r,i){return Nt.makeTranslation(t,r,i),this.applyMatrix4(Nt),this}scale(t,r,i){return Nt.makeScale(t,r,i),this.applyMatrix4(Nt),this}lookAt(t){return ps.lookAt(t),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new St(i,3))}else{for(let i=0,a=r.count;i<a;i++){let n=t[i];r.setXYZ(i,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];Ct.setFromBufferAttribute(n),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ct.min,ji.min),Ct.expandByPoint(ft),ft.addVectors(Ct.max,ji.max),Ct.expandByPoint(ft)):(Ct.expandByPoint(ji.min),Ct.expandByPoint(ji.max))}Ct.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)ft.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(ft));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ft.fromBufferAttribute(o,h),l&&(fi.fromBufferAttribute(t,h),ft.add(fi)),a=Math.max(a,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new P,l[U]=new P;let h=new P,c=new P,u=new P,d=new fe,f=new fe,v=new fe,g=new P,m=new P;function p(U,M,S){h.fromBufferAttribute(i,U),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,M),v.fromBufferAttribute(n,S),c.sub(h),u.sub(h),f.sub(d),v.sub(d);let C=1/(f.x*v.y-v.x*f.y);isFinite(C)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(C),o[U].add(g),o[M].add(g),o[S].add(g),l[U].add(m),l[M].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,M=w.length;U<M;++U){let S=w[U],C=S.start,O=S.count;for(let B=C,H=C+O;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new P,E=new P,F=new P,R=new P;function A(U){F.fromBufferAttribute(a,U),R.copy(F);let M=o[U];x.copy(M),x.sub(F.multiplyScalar(F.dot(M))).normalize(),E.crossVectors(R,M);let S=E.dot(l[U])<0?-1:1;s.setXYZW(U,x.x,x.y,x.z,S)}for(let U=0,M=w.length;U<M;++U){let S=w[U],C=S.start,O=S.count;for(let B=C,H=C+O;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let a=new P,n=new P,s=new P,o=new P,l=new P,h=new P,c=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(r,v),n.fromBufferAttribute(r,g),s.fromBufferAttribute(r,m),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=r.count;d<f;d+=3)a.fromBufferAttribute(r,d+0),n.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)ft.fromBufferAttribute(t,r),ft.normalize(),t.setXYZ(r,ft.x,ft.y,ft.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*c;for(let p=0;p<c;p++)d[v++]=h[f++]}return new Yt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new rh,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,i);r.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];r.addGroup(h.start,h.count,h.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(r))}let n=t.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(r));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ko=new lt,Dr=new Tc,Ra=new es,Wo=new P,Ca=new P,Pa=new P,La=new P,fs=new P,Na=new P,Xo=new P,Ia=new P,Xe=class extends Lt{constructor(e=new yr,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){Na.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(fs.fromBufferAttribute(c,e),n?Na.addScaledVector(fs,h):Na.addScaledVector(fs.sub(t),h))}t.add(Na)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ra.copy(r.boundingSphere),Ra.applyMatrix4(a),Dr.copy(e.ray).recast(e.near),!(Ra.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ra,Wo)===null||Dr.origin.distanceToSquared(Wo)>(e.far-e.near)**2))&&(ko.copy(a).invert(),Dr.copy(e.ray).applyMatrix4(ko),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,v=u.length;f<v;f++){let g=u[f],m=n[g.materialIndex],p=Math.max(g.start,d.start),w=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let x=p,E=w;x<E;x+=3){let F=s.getX(x),R=s.getX(x+1),A=s.getX(x+2);i=Ua(this,m,e,r,l,h,c,F,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let g=f,m=v;g<m;g+=3){let p=s.getX(g),w=s.getX(g+1),x=s.getX(g+2);i=Ua(this,n,e,r,l,h,c,p,w,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,v=u.length;f<v;f++){let g=u[f],m=n[g.materialIndex],p=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=p,E=w;x<E;x+=3){let F=x,R=x+1,A=x+2;i=Ua(this,m,e,r,l,h,c,F,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let f=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=f,m=v;g<m;g+=3){let p=g,w=g+1,x=g+2;i=Ua(this,n,e,r,l,h,c,p,w,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Ic(e,t,r,i,a,n,s,o){let l;if(t.side===gt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===cr,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(e.matrixWorld);let h=r.ray.origin.distanceTo(Ia);return h<r.near||h>r.far?null:{distance:h,point:Ia.clone(),object:e}}function Ua(e,t,r,i,a,n,s,o,l,h){e.getVertexPosition(o,Ca),e.getVertexPosition(l,Pa),e.getVertexPosition(h,La);let c=Ic(e,t,r,i,Ca,Pa,La,Xo);if(c){let u=new P;Wi.getBarycoord(Xo,Ca,Pa,La,u),a&&(c.uv=Wi.getInterpolatedAttribute(a,o,l,h,u,new fe)),n&&(c.uv1=Wi.getInterpolatedAttribute(n,o,l,h,u,new fe)),s&&(c.normal=Wi.getInterpolatedAttribute(s,o,l,h,u,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new P,materialIndex:0};Wi.getNormal(Ca,Pa,La,d.normal),c.face=d,c.barycoord=u}return c}var mi=class ih extends yr{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,f=0;v("z","y","x",-1,-1,i,r,t,s,n,0),v("z","y","x",1,-1,i,r,-t,s,n,1),v("x","z","y",1,1,t,i,r,a,s,2),v("x","z","y",1,-1,t,i,-r,a,s,3),v("x","y","z",1,-1,t,r,i,a,n,4),v("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2));function v(g,m,p,w,x,E,F,R,A,U,M){let S=E/A,C=F/U,O=E/2,B=F/2,H=R/2,j=A+1,G=U+1,Q=0,k=0,se=new P;for(let de=0;de<G;de++){let Oe=de*C-B;for(let Ve=0;Ve<j;Ve++){let q=Ve*S-O;se[g]=q*w,se[m]=Oe*x,se[p]=H,h.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=R>0?1:-1,c.push(se.x,se.y,se.z),u.push(Ve/A),u.push(1-de/U),Q+=1}}for(let de=0;de<U;de++)for(let Oe=0;Oe<A;Oe++){let Ve=d+Oe+j*de,q=d+Oe+j*(de+1),ne=d+(Oe+1)+j*(de+1),Ae=d+(Oe+1)+j*de;l.push(Ve,q,Ae),l.push(q,ne,Ae),k+=6}o.addGroup(f,k,M),f+=k,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gi(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function Et(e){let t={};for(let r=0;r<e.length;r++){let i=gi(e[r]);for(let a in i)t[a]=i[a]}return t}function Uc(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function jo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}var Dc={clone:gi,merge:Et},Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mr=class extends Xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},qo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sr=new P,Yo=new fe,Zo=new fe,Pt=class extends qo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Zo),t.subVectors(Zo,Yo)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fi*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vi=-90,_i=1,zc=class extends Lt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(vi,_i,e,t);i.layers=this.layers,this.add(i);let a=new Pt(vi,_i,e,t);a.layers=this.layers,this.add(a);let n=new Pt(vi,_i,e,t);n.layers=this.layers,this.add(n);let s=new Pt(vi,_i,e,t);s.layers=this.layers,this.add(s);let o=new Pt(vi,_i,e,t);o.layers=this.layers,this.add(o);let l=new Pt(vi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===va)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},Jo=class extends zt{constructor(e,t,r,i,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,r,i,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bc=class extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mi(5,5,5),a=new Mr({name:"CubemapFromEquirect",uniforms:gi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gt,blending:ur});a.uniforms.tEquirect.value=t;let n=new Xe(i,a),s=t.minFilter;return t.minFilter===Cr&&(t.minFilter=qt),new zc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,i){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},ms=new P,Vc=new P,Hc=new Ye,Er=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=ms.subVectors(r,t).cross(Vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(ms),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Hc.getNormalMatrix(e),i=this.coplanarPoint(ms).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new es,Da=new P,gs=class{constructor(e=new Er,t=new Er,r=new Er,i=new Er,a=new Er,n=new Er){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr){let r=this.planes,i=e.elements,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],f=i[9],v=i[10],g=i[11],m=i[12],p=i[13],w=i[14],x=i[15];if(r[0].setComponents(o-a,u-l,g-d,x-m).normalize(),r[1].setComponents(o+a,u+l,g+d,x+m).normalize(),r[2].setComponents(o+n,u+h,g+f,x+p).normalize(),r[3].setComponents(o-n,u-h,g-f,x-p).normalize(),r[4].setComponents(o-s,u-c,g-v,x-w).normalize(),t===tr)r[5].setComponents(o+s,u+c,g+v,x+w).normalize();else if(t===va)r[5].setComponents(s,c,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ko(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function Gc(e){let t=new WeakMap;function r(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(e.bindBuffer(h,o),u.length===0)e.bufferSubData(h,0,c);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){let v=u[d],g=u[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){let g=u[f];e.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,r(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var vs=class ah extends yr{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),h=o+1,c=l+1,u=t/o,d=r/l,f=[],v=[],g=[],m=[];for(let p=0;p<c;p++){let w=p*d-s;for(let x=0;x<h;x++){let E=x*u-n;v.push(E,-w,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let x=w+h*p,E=w+h*(p+1),F=w+1+h*(p+1),R=w+1+h*p;f.push(x,E,R),f.push(E,F,R)}this.setIndex(f),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.width,t.height,t.widthSegments,t.heightSegments)}},kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ru=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$u=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:kc,alphahash_pars_fragment:Wc,alphamap_fragment:Xc,alphamap_pars_fragment:jc,alphatest_fragment:qc,alphatest_pars_fragment:Yc,aomap_fragment:Zc,aomap_pars_fragment:Jc,batching_pars_vertex:Kc,batching_vertex:$c,begin_vertex:Qc,beginnormal_vertex:eu,bsdfs:tu,iridescence_fragment:ru,bumpmap_pars_fragment:iu,clipping_planes_fragment:au,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:su,clipping_planes_vertex:ou,color_fragment:lu,color_pars_fragment:hu,color_pars_vertex:cu,color_vertex:uu,common:du,cube_uv_reflection_fragment:pu,defaultnormal_vertex:fu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:vu,emissivemap_pars_fragment:_u,colorspace_fragment:xu,colorspace_pars_fragment:yu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Du,envmap_vertex:bu,fog_vertex:wu,fog_pars_vertex:Au,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Pu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Iu,lights_pars_begin:Uu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Fu,lights_phong_fragment:zu,lights_phong_pars_fragment:Bu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Hu,lights_fragment_begin:Gu,lights_fragment_maps:ku,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Yu,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Ku,map_particle_pars_fragment:$u,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:ed,morphinstance_vertex:td,morphcolor_vertex:rd,morphnormal_vertex:id,morphtarget_pars_vertex:ad,morphtarget_vertex:nd,normal_fragment_begin:sd,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:hd,normal_vertex:cd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:vd,premultiplied_alpha_fragment:_d,project_vertex:xd,dithering_fragment:yd,dithering_pars_fragment:Md,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:bd,shadowmap_vertex:wd,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Pd,skinnormal_vertex:Ld,specularmap_fragment:Nd,specularmap_pars_fragment:Id,tonemapping_fragment:Ud,tonemapping_pars_fragment:Dd,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:zd,uv_pars_vertex:Bd,uv_vertex:Vd,worldpos_vertex:Hd,background_vert:Gd,background_frag:kd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:jd,cube_frag:qd,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Kd,equirect_vert:$d,equirect_frag:Qd,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:rp,meshbasic_frag:ip,meshlambert_vert:ap,meshlambert_frag:np,meshmatcap_vert:sp,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:hp,meshphong_vert:cp,meshphong_frag:up,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:fp,meshtoon_frag:mp,points_vert:gp,points_frag:vp,shadow_vert:_p,shadow_frag:xp,sprite_vert:yp,sprite_frag:Mp},pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Zt={basic:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Et([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Et([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Et([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Et([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Et([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Et([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Et([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Et([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Et([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Et([pe.lights,pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Oa={r:0,b:0,g:0},Fr=new _r,Sp=new lt;function Ep(e,t,r,i,a,n,s){let o=new Ze(0),l=n===!0?0:1,h,c,u=null,d=0,f=null;function v(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?r:t).get(x)),x}function g(w){let x=!1,E=v(w);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);let F=e.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(w,x){let E=v(x);E&&(E.isCubeTexture||E.mapping===oa)?(c===void 0&&(c=new Xe(new mi(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:gi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Fr.copy(x.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(Fr)),c.material.toneMapped=Je.getTransfer(E.colorSpace)!==Qe,(u!==E||d!==E.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Xe(new vs(2,2),new Mr({name:"BackgroundMaterial",uniforms:gi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Je.getTransfer(E.colorSpace)!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=e.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function p(w,x){w.getRGB(Oa,jo(e)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:g,addToRenderList:m}}function Tp(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null),n=a,s=!1;function o(S,C,O,B,H){let j=!1,G=u(B,O,C);n!==G&&(n=G,h(n.object)),j=f(S,B,O,H),j&&v(S,B,O,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,E(S,C,O,B),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function u(S,C,O){let B=O.wireframe===!0,H=i[S.id];H===void 0&&(H={},i[S.id]=H);let j=H[C.id];j===void 0&&(j={},H[C.id]=j);let G=j[B];return G===void 0&&(G=d(l()),j[B]=G),G}function d(S){let C=[],O=[],B=[];for(let H=0;H<r;H++)C[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,C,O,B){let H=n.attributes,j=C.attributes,G=0,Q=O.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=H[k],de=j[k];if(de===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;G++}return n.attributesNum!==G||n.index!==B}function v(S,C,O,B){let H={},j=C.attributes,G=0,Q=O.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=j[k];se===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));let de={};de.attribute=se,se&&se.data&&(de.data=se.data),H[k]=de,G++}n.attributes=H,n.attributesNum=G,n.index=B}function g(){let S=n.newAttributes;for(let C=0,O=S.length;C<O;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){let O=n.newAttributes,B=n.enabledAttributes,H=n.attributeDivisors;O[S]=1,B[S]===0&&(e.enableVertexAttribArray(S),B[S]=1),H[S]!==C&&(e.vertexAttribDivisor(S,C),H[S]=C)}function w(){let S=n.newAttributes,C=n.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==S[O]&&(e.disableVertexAttribArray(O),C[O]=0)}function x(S,C,O,B,H,j,G){G===!0?e.vertexAttribIPointer(S,C,O,H,j):e.vertexAttribPointer(S,C,O,B,H,j)}function E(S,C,O,B){g();let H=B.attributes,j=O.getAttributes(),G=C.defaultAttributeValues;for(let Q in j){let k=j[Q];if(k.location>=0){let se=H[Q];if(se===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){let de=se.normalized,Oe=se.itemSize,Ve=t.get(se);if(Ve===void 0)continue;let q=Ve.buffer,ne=Ve.type,Ae=Ve.bytesPerElement,Te=ne===e.INT||ne===e.UNSIGNED_INT||se.gpuType===fn;if(se.isInterleavedBufferAttribute){let le=se.data,we=le.stride,He=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<k.locationSize;Ie++)p(k.location+Ie,le.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<k.locationSize;Ie++)m(k.location+Ie);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Ie=0;Ie<k.locationSize;Ie++)x(k.location+Ie,Oe/k.locationSize,ne,de,we*Ae,(He+Oe/k.locationSize*Ie)*Ae,Te)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)p(k.location+le,se.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<k.locationSize;le++)m(k.location+le);e.bindBuffer(e.ARRAY_BUFFER,q);for(let le=0;le<k.locationSize;le++)x(k.location+le,Oe/k.locationSize,ne,de,Oe*Ae,Oe/k.locationSize*le*Ae,Te)}}else if(G!==void 0){let de=G[Q];if(de!==void 0)switch(de.length){case 2:e.vertexAttrib2fv(k.location,de);break;case 3:e.vertexAttrib3fv(k.location,de);break;case 4:e.vertexAttrib4fv(k.location,de);break;default:e.vertexAttrib1fv(k.location,de)}}}}w()}function F(){U();for(let S in i){let C=i[S];for(let O in C){let B=C[O];for(let H in B)c(B[H].object),delete B[H];delete C[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let C=i[S.id];for(let O in C){let B=C[O];for(let H in B)c(B[H].object),delete B[H];delete C[O]}delete i[S.id]}function A(S){for(let C in i){let O=i[C];if(O[S.id]===void 0)continue;let B=O[S.id];for(let H in B)c(B[H].object),delete B[H];delete O[S.id]}}function U(){M(),s=!0,n!==a&&(n=a,h(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function bp(e,t,r){let i;function a(h){i=h}function n(h,c){e.drawArrays(i,h,c),r.update(c,i,1)}function s(h,c,u){u!==0&&(e.drawArraysInstanced(i,h,c,u),r.update(c,i,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];r.update(d,i,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<h.length;v++)s(h[v],c[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=c[g]*d[g];r.update(v,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wp(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Ft&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let U=A===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qt&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==er&&!U)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=r.precision!==void 0?r.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:F,maxSamples:R}}function Ap(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Er,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||a;return a=d,i=u.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){r=c(u,d,0)},this.setState=function(u,d,f){let v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=e.get(u);if(!a||v===null||v.length===0||n&&!m)n?c(null):h();else{let w=n?0:i,x=w*4,E=p.clippingState||null;l.value=E,E=c(v,d,x,f);for(let F=0;F!==x;++F)E[F]=r[F];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,v){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let p=f+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==g;++x,E+=4)s.copy(u[x]).applyMatrix4(w,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Rp(e){let t=new WeakMap;function r(s,o){return o===cn?s.mapping=jr:o===un&&(s.mapping=qr),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===cn||o===un)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Bc(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),r(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var $o=class extends qo{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xi=4,Qo=[.125,.215,.35,.446,.526,.582],zr=20,_s=new $o,el=new Ze,xs=null,ys=0,Ms=0,Ss=!1,Br=(1+Math.sqrt(5))/2,yi=1/Br,tl=[new P(-Br,yi,0),new P(Br,yi,0),new P(-yi,0,Br),new P(yi,0,Br),new P(0,Br,-yi),new P(0,Br,yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,ys,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Oi,format:Ft,colorSpace:Kr,depthBuffer:!1},i=rl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(a)),this._blurMaterial=Pp(a,e,t)}return i}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,r,i){let a=new Pt(90,1,t,r),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(el),o.toneMapping=dr,o.autoClear=!1;let c=new pi({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),u=new Xe(new mi,c),d=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,d=!0):(c.color.copy(el),d=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,n[v],0),a.lookAt(s[v],0,0)):g===1?(a.up.set(0,0,n[v]),a.lookAt(0,s[v],0)):(a.up.set(0,n[v],0),a.lookAt(0,0,s[v]));let m=this._cubeSize;Fa(i,g*m,v>2?m:0,m,m),o.setRenderTarget(i),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===jr||e.mapping===qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new Xe(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Fa(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,_s)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=tl[(i-a-1)%tl.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,c=new Xe(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*zr-1),v=a/f,g=isFinite(a)?1+Math.floor(h*v):zr;g>zr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zr}`);let m=[],p=0;for(let R=0;R<zr;++R){let A=R/v,U=Math.exp(-A*A/2);m.push(U),R===0?p+=U:R<g&&(p+=2*U)}for(let R=0;R<m.length;R++)m[R]=m[R]/p;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:w}=this;u.dTheta.value=f,u.mipInt.value=w-r;let x=this._sizeLods[i],E=3*x*(i>w-xi?i-w+xi:0),F=4*(this._cubeSize-x);Fa(t,E,F,3*x,2*x),o.setRenderTarget(t),o.render(c,_s)}};function Cp(e){let t=[],r=[],i=[],a=e,n=e-xi+1+Qo.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-xi?l=Qo[s-e+xi-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,v=6,g=3,m=2,p=1,w=new Float32Array(g*v*f),x=new Float32Array(m*v*f),E=new Float32Array(p*v*f);for(let R=0;R<f;R++){let A=R%3*2/3-1,U=R>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];w.set(M,g*v*R),x.set(d,m*v*R);let S=[R,R,R,R,R,R];E.set(S,p*v*R)}let F=new yr;F.setAttribute("position",new Yt(w,g)),F.setAttribute("uv",new Yt(x,m)),F.setAttribute("faceIndex",new Yt(E,p)),t.push(F),a>xi&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function rl(e,t,r){let i=new Nr(e,t,r);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function Pp(e,t,r){let i=new Float32Array(zr),a=new P(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function il(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function al(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===cn||l===un,c=l===jr||l===qr;if(h||c){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new Es(e)),u=h?r.fromEquirectangular(o,u):r.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return h&&f&&f.height>0||c&&f&&a(f)?(r===null&&(r=new Es(e)),u=h?r.fromEquirectangular(o):r.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function Np(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&Vi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Ip(e,t,r,i){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);for(let v in d.morphAttributes){let g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",s),delete a[d.id];let f=n.get(d);f&&(t.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,r.memory.geometries++),d}function l(u){let d=u.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER);let f=u.morphAttributes;for(let v in f){let g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],e.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,v=u.attributes.position,g=0;if(f!==null){let w=f.array;g=f.version;for(let x=0,E=w.length;x<E;x+=3){let F=w[x+0],R=w[x+1],A=w[x+2];d.push(F,R,R,A,A,F)}}else if(v!==void 0){let w=v.array;g=v.version;for(let x=0,E=w.length/3-1;x<E;x+=3){let F=x+0,R=x+1,A=x+2;d.push(F,R,R,A,A,F)}}else return;let m=new(Mo(d)?Go:Ho)(d,1);m.version=g;let p=n.get(u);p&&t.remove(p),n.set(u,m)}function c(u){let d=n.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Up(e,t,r){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,f){e.drawElements(i,f,n,d*s),r.update(f,i,1)}function h(d,f,v){v!==0&&(e.drawElementsInstanced(i,f,n,d*s,v),r.update(f,i,v))}function c(d,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,n,d,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];r.update(g,i,1)}function u(d,f,v,g){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/s,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,n,d,0,g,0,v);let p=0;for(let w=0;w<v;w++)p+=f[w]*g[w];r.update(p,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Dp(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function Op(e,t,r){let i=new WeakMap,a=new et;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(o);if(d===void 0||d.count!==u){let f=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();let v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;v===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let F=o.attributes.position.count*E,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);let A=new Float32Array(F*R*4*u),U=new Co(A,F,R,u);U.type=er,U.needsUpdate=!0;let M=E*4;for(let S=0;S<u;S++){let C=p[S],O=w[S],B=x[S],H=F*R*4*S;for(let j=0;j<C.count;j++){let G=j*M;v===!0&&(a.fromBufferAttribute(C,j),A[H+G+0]=a.x,A[H+G+1]=a.y,A[H+G+2]=a.z,A[H+G+3]=0),g===!0&&(a.fromBufferAttribute(O,j),A[H+G+4]=a.x,A[H+G+5]=a.y,A[H+G+6]=a.z,A[H+G+7]=0),m===!0&&(a.fromBufferAttribute(B,j),A[H+G+8]=a.x,A[H+G+9]=a.y,A[H+G+10]=a.z,A[H+G+11]=B.itemSize===4?a.w:1)}}d={count:u,texture:U,size:new fe(F,R)},i.set(o,d),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Fp(e,t,r,i){let a=new WeakMap;function n(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:n,dispose:s}}var nl=class extends zt{constructor(e,t,r,i,a,n,s,o,l,h=Zr){if(h!==Zr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Zr&&(r=Pr),r===void 0&&h===Jr&&(r=Yr),super(null,i,a,n,s,o,h,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ot,this.minFilter=o!==void 0?o:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sl=new zt,ol=new nl(1,1),ll=new Co,hl=new Sc,cl=new Jo,ul=[],dl=[],pl=new Float32Array(16),fl=new Float32Array(9),ml=new Float32Array(4);function Mi(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=ul[a];if(n===void 0&&(n=new Float32Array(a),ul[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function ut(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function dt(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function za(e,t){let r=dl[t];r===void 0&&(r=new Int32Array(t),dl[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function zp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function Bp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ut(r,t))return;e.uniform2fv(this.addr,t),dt(r,t)}}function Vp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(ut(r,t))return;e.uniform3fv(this.addr,t),dt(r,t)}}function Hp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ut(r,t))return;e.uniform4fv(this.addr,t),dt(r,t)}}function Gp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ut(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),dt(r,t)}else{if(ut(r,i))return;ml.set(i),e.uniformMatrix2fv(this.addr,!1,ml),dt(r,i)}}function kp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ut(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),dt(r,t)}else{if(ut(r,i))return;fl.set(i),e.uniformMatrix3fv(this.addr,!1,fl),dt(r,i)}}function Wp(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(ut(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),dt(r,t)}else{if(ut(r,i))return;pl.set(i),e.uniformMatrix4fv(this.addr,!1,pl),dt(r,i)}}function Xp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function jp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ut(r,t))return;e.uniform2iv(this.addr,t),dt(r,t)}}function qp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ut(r,t))return;e.uniform3iv(this.addr,t),dt(r,t)}}function Yp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ut(r,t))return;e.uniform4iv(this.addr,t),dt(r,t)}}function Zp(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function Jp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ut(r,t))return;e.uniform2uiv(this.addr,t),dt(r,t)}}function Kp(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(ut(r,t))return;e.uniform3uiv(this.addr,t),dt(r,t)}}function $p(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ut(r,t))return;e.uniform4uiv(this.addr,t),dt(r,t)}}function Qp(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ol.compareFunction=go,n=ol):n=sl,r.setTexture2D(t||n,a)}function ef(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||hl,a)}function tf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||cl,a)}function rf(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||ll,a)}function af(e){switch(e){case 5126:return zp;case 35664:return Bp;case 35665:return Vp;case 35666:return Hp;case 35674:return Gp;case 35675:return kp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return rf}}function nf(e,t){e.uniform1fv(this.addr,t)}function sf(e,t){let r=Mi(t,this.size,2);e.uniform2fv(this.addr,r)}function of(e,t){let r=Mi(t,this.size,3);e.uniform3fv(this.addr,r)}function lf(e,t){let r=Mi(t,this.size,4);e.uniform4fv(this.addr,r)}function hf(e,t){let r=Mi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function cf(e,t){let r=Mi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function uf(e,t){let r=Mi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function df(e,t){e.uniform1iv(this.addr,t)}function pf(e,t){e.uniform2iv(this.addr,t)}function ff(e,t){e.uniform3iv(this.addr,t)}function mf(e,t){e.uniform4iv(this.addr,t)}function gf(e,t){e.uniform1uiv(this.addr,t)}function vf(e,t){e.uniform2uiv(this.addr,t)}function _f(e,t){e.uniform3uiv(this.addr,t)}function xf(e,t){e.uniform4uiv(this.addr,t)}function yf(e,t,r){let i=this.cache,a=t.length,n=za(r,a);ut(i,n)||(e.uniform1iv(this.addr,n),dt(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||sl,n[s])}function Mf(e,t,r){let i=this.cache,a=t.length,n=za(r,a);ut(i,n)||(e.uniform1iv(this.addr,n),dt(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||hl,n[s])}function Sf(e,t,r){let i=this.cache,a=t.length,n=za(r,a);ut(i,n)||(e.uniform1iv(this.addr,n),dt(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||cl,n[s])}function Ef(e,t,r){let i=this.cache,a=t.length,n=za(r,a);ut(i,n)||(e.uniform1iv(this.addr,n),dt(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||ll,n[s])}function Tf(e){switch(e){case 5126:return nf;case 35664:return sf;case 35665:return of;case 35666:return lf;case 35674:return hf;case 35675:return cf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return pf;case 35668:case 35672:return ff;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return vf;case 36295:return _f;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}var bf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=af(t.type)}},wf=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}},Af=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},bs=/(\w+)(\])?(\[|\.)?/g;function gl(e,t){e.seq.push(t),e.map[t.id]=t}function Rf(e,t,r){let i=e.name,a=i.length;for(bs.lastIndex=0;;){let n=bs.exec(i),s=bs.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){gl(r,h===void 0?new bf(o,e,t):new wf(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Af(o),gl(r,c)),r=c}}}var Ba=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);Rf(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function vl(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var Cf=37297,Pf=0;function Lf(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var _l=new Ye;function Nf(e){Je._getMatrix(_l,Je.workingColorSpace,e);let t=`mat3( ${_l.elements.map(r=>r.toFixed(4))} )`;switch(Je.getTransfer(e)){case ga:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xl(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+Lf(e.getShaderSource(t),s)}else return a}function If(e,t){let r=Nf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Uf(e,t){let r;switch(t){case Dh:r="Linear";break;case Oh:r="Reinhard";break;case Fh:r="Cineon";break;case $s:r="ACESFilmic";break;case Bh:r="AgX";break;case Vh:r="Neutral";break;case zh:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Va=new P;function Df(){Je.getLuminanceCoefficients(Va);let e=Va.x.toFixed(4),t=Va.y.toFixed(4),r=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Of(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Ff(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function zf(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function qi(e){return e!==""}function yl(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(e){return e.replace(Bf,Hf)}var Vf=new Map;function Hf(e,t){let r=qe[t];if(r===void 0){let i=Vf.get(t);if(i!==void 0)r=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ws(r)}var Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(e){return e.replace(Gf,kf)}function kf(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function El(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wf(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===qs?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===$t&&(t="SHADOWMAP_TYPE_VSM"),t}function Xf(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case jr:case qr:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jf(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function qf(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ks:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function Zf(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Wf(r),h=Xf(r),c=jf(r),u=qf(r),d=Yf(r),f=Of(r),v=Ff(n),g=a.createProgram(),m,p,w=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v].filter(qi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v].filter(qi).join(`
`),p.length>0&&(p+=`
`)):(m=[El(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),p=[El(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==dr?"#define TONE_MAPPING":"",r.toneMapping!==dr?qe.tonemapping_pars_fragment:"",r.toneMapping!==dr?Uf("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,If("linearToOutputTexel",r.outputColorSpace),Df(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(qi).join(`
`)),s=ws(s),s=yl(s,r),s=Ml(s,r),o=ws(o),o=yl(o,r),o=Ml(o,r),s=Sl(s),o=Sl(o),r.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",r.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=w+m+s,E=w+p+o,F=vl(a,a.VERTEX_SHADER,x),R=vl(a,a.FRAGMENT_SHADER,E);a.attachShader(g,F),a.attachShader(g,R),r.index0AttributeName!==void 0?a.bindAttribLocation(g,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function A(C){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(g).trim(),B=a.getShaderInfoLog(F).trim(),H=a.getShaderInfoLog(R).trim(),j=!0,G=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,F,R);else{let Q=xl(a,F,"vertex"),k=xl(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Q+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:j,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}a.deleteShader(F),a.deleteShader(R),U=new Ba(a,g),M=zf(a,g)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(g,Cf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Pf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=R,this}var Jf=0,Kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new $f(e),t.set(e,r)),r}},$f=class{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}};function Qf(e,t,r,i,a,n,s){let o=new Io,l=new Kf,h=new Set,c=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,f=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,O,B){let H=O.fog,j=B.geometry,G=M.isMeshStandardMaterial?O.environment:null,Q=(M.isMeshStandardMaterial?r:t).get(M.envMap||G),k=Q&&Q.mapping===oa?Q.image.height:null,se=v[M.type];M.precision!==null&&(f=a.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Oe=de!==void 0?de.length:0,Ve=0;j.morphAttributes.position!==void 0&&(Ve=1),j.morphAttributes.normal!==void 0&&(Ve=2),j.morphAttributes.color!==void 0&&(Ve=3);let q,ne,Ae,Te;if(se){let Ne=Zt[se];q=Ne.vertexShader,ne=Ne.fragmentShader}else q=M.vertexShader,ne=M.fragmentShader,l.update(M),Ae=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);let le=e.getRenderTarget(),we=e.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Z=!!M.map,ae=!!M.matcap,T=!!Q,ve=!!M.aoMap,$=!!M.lightMap,_e=!!M.bumpMap,te=!!M.normalMap,De=!!M.displacementMap,ue=!!M.emissiveMap,be=!!M.metalnessMap,b=!!M.roughnessMap,_=M.anisotropy>0,D=M.clearcoat>0,Y=M.dispersion>0,J=M.iridescence>0,W=M.sheen>0,xe=M.transmission>0,oe=_&&!!M.anisotropyMap,ye=D&&!!M.clearcoatMap,Fe=D&&!!M.clearcoatNormalMap,re=D&&!!M.clearcoatRoughnessMap,me=J&&!!M.iridescenceMap,je=J&&!!M.iridescenceThicknessMap,ze=W&&!!M.sheenColorMap,Ee=W&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ge=!!M.specularColorMap,$e=!!M.specularIntensityMap,L=xe&&!!M.transmissionMap,ee=xe&&!!M.thicknessMap,X=!!M.gradientMap,K=!!M.alphaMap,ge=M.alphaTest>0,he=!!M.alphaHash,ce=!!M.extensions,Ce=dr;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let Me={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ne,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?e.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Kr,alphaToCoverage:!!M.alphaToCoverage,map:Z,matcap:ae,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:k,aoMap:ve,lightMap:$,bumpMap:_e,normalMap:te,displacementMap:d&&De,emissiveMap:ue,normalMapObjectSpace:te&&M.normalMapType===Wh,normalMapTangentSpace:te&&M.normalMapType===fo,metalnessMap:be,roughnessMap:b,anisotropy:_,anisotropyMap:oe,clearcoat:D,clearcoatMap:ye,clearcoatNormalMap:Fe,clearcoatRoughnessMap:re,dispersion:Y,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:je,sheen:W,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:Be,specularColorMap:Ge,specularIntensityMap:$e,transmission:xe,transmissionMap:L,thicknessMap:ee,gradientMap:X,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ge,alphaHash:he,combine:M.combine,mapUv:Z&&g(M.map.channel),aoMapUv:ve&&g(M.aoMap.channel),lightMapUv:$&&g(M.lightMap.channel),bumpMapUv:_e&&g(M.bumpMap.channel),normalMapUv:te&&g(M.normalMap.channel),displacementMapUv:De&&g(M.displacementMap.channel),emissiveMapUv:ue&&g(M.emissiveMap.channel),metalnessMapUv:be&&g(M.metalnessMap.channel),roughnessMapUv:b&&g(M.roughnessMap.channel),anisotropyMapUv:oe&&g(M.anisotropyMap.channel),clearcoatMapUv:ye&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:Ge&&g(M.specularColorMap.channel),specularIntensityMapUv:$e&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ee&&g(M.thicknessMap.channel),alphaMapUv:K&&g(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(te||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Z||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Z&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:ue&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jt,flipSided:M.side===gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Me.vertexUv1s=h.has(1),Me.vertexUv2s=h.has(2),Me.vertexUv3s=h.has(3),h.clear(),Me}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(S,M),x(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){let S=v[M.type],C;if(S){let O=Zt[S];C=Dc.clone(O.uniforms)}else C=M.uniforms;return C}function F(M,S){let C;for(let O=0,B=c.length;O<B;O++){let H=c[O];if(H.cacheKey===S){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Zf(e,S,M,n),c.push(C)),C}function R(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:U}}function em(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function tm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Tl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function bl(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(u,d,f,v,g,m){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,v,g,m){let p=s(u,d,f,v,g,m);f.transmission>0?i.push(p):f.transparent===!0?a.push(p):r.push(p)}function l(u,d,f,v,g,m){let p=s(u,d,f,v,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?a.unshift(p):r.unshift(p)}function h(u,d){r.length>1&&r.sort(u||tm),i.length>1&&i.sort(d||Tl),a.length>1&&a.sort(d||Tl)}function c(){for(let u=t,d=e.length;u<d;u++){let f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function rm(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new bl,e.set(i,[s])):a>=n.length?(s=new bl,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function im(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new P,color:new Ze};break;case"SpotLight":r={position:new P,direction:new P,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new P,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":r={direction:new P,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":r={color:new Ze,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=r,r}}}function am(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var nm=0;function sm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function om(e){let t=new im,r=am(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);let a=new P,n=new lt,s=new lt;function o(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,w=0,x=0,E=0,F=0,R=0,A=0;h.sort(sm);for(let M=0,S=h.length;M<S;M++){let C=h[M],O=C.color,B=C.intensity,H=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=O.r*B,u+=O.g*B,d+=O.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],B);A++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,k=r.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=C.shadow.matrix,w++}i.directional[f]=G,f++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[g]=G;let Q=C.shadow;if(C.map&&(i.spotLightMap[F]=C.map,F++,Q.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[g]=Q.matrix,C.castShadow){let k=r.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=j,E++}g++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,k=r.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=C.shadow.matrix,x++}i.point[v]=G,v++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==f||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==x||U.numSpotShadows!==E||U.numSpotMaps!==F||U.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+F-R,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,U.directionalLength=f,U.pointLength=v,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=x,U.numSpotShadows=E,U.numSpotMaps=F,U.numLightProbes=A,i.version=nm++)}function l(h,c){let u=0,d=0,f=0,v=0,g=0,m=c.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){let x=h[p];if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(x.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),s.identity(),n.copy(x.matrixWorld),n.premultiply(m),s.extractRotation(n),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function wl(e){let t=new om(e),r=[],i=[];function a(c){h.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let h={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function lm(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new wl(e),t.set(a,[o])):n>=s.length?(o=new wl(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var hm=class extends Xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cm=class extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pm(e,t,r){let i=new gs,a=new fe,n=new fe,s=new et,o=new hm({depthPacking:kh}),l=new cm,h={},c=r.maxTextureSize,u={[cr]:gt,[gt]:cr,[jt]:jt},d=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:um,fragmentShader:dm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new yr;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xe(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(R,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(ur),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==$t&&this.type===$t,H=p===$t&&this.type!==$t;for(let j=0,G=R.length;j<G;j++){let Q=R[j],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let se=k.getFrameExtents();if(a.multiply(se),n.copy(k.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/se.x),a.x=n.x*se.x,k.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/se.y),a.y=n.y*se.y,k.mapSize.y=n.y)),k.map===null||B===!0||H===!0){let Oe=this.type!==$t?{minFilter:Ot,magFilter:Ot}:{};k.map!==null&&k.map.dispose(),k.map=new Nr(a.x,a.y,Oe),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();let de=k.getViewportCount();for(let Oe=0;Oe<de;Oe++){let Ve=k.getViewport(Oe);s.set(n.x*Ve.x,n.y*Ve.y,n.x*Ve.z,n.y*Ve.w),O.viewport(s),k.updateMatrices(Q,Oe),i=k.getFrustum(),E(A,U,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===$t&&w(k,U),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,C)};function w(R,A){let U=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nr(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,U,d,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,U,f,g,null)}function x(R,A,U,M){let S=null,C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=S.uuid,B=A.uuid,H=h[O];H===void 0&&(H={},h[O]=H);let j=H[B];j===void 0&&(j=S.clone(),H[B]=j,A.addEventListener("dispose",F)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,M===$t?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=e.properties.get(S);O.light=U}return S}function E(R,A,U,M,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===$t)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let O=t.update(R),B=R.material;if(Array.isArray(B)){let H=O.groups;for(let j=0,G=H.length;j<G;j++){let Q=H[j],k=B[Q.materialIndex];if(k&&k.visible){let se=x(R,k,M,S);R.onBeforeShadow(e,R,A,U,O,se,Q),e.renderBufferDirect(U,null,O,se,R,Q),R.onAfterShadow(e,R,A,U,O,se,Q)}}}else if(B.visible){let H=x(R,B,M,S);R.onBeforeShadow(e,R,A,U,O,H,null),e.renderBufferDirect(U,null,O,H,R,null),R.onAfterShadow(e,R,A,U,O,H,null)}}let C=R.children;for(let O=0,B=C.length;O<B;O++)E(C[O],A,U,M,S)}function F(R){R.target.removeEventListener("dispose",F);for(let A in h){let U=h[A],M=R.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}var fm={[rn]:an,[nn]:ln,[sn]:hn,[Xr]:on,[an]:rn,[ln]:nn,[hn]:sn,[on]:Xr};function mm(e,t){function r(){let L=!1,ee=new et,X=null,K=new et(0,0,0,0);return{setMask:function(ge){X!==ge&&!L&&(e.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){L=ge},setClear:function(ge,he,ce,Ce,Me){Me===!0&&(ge*=Ce,he*=Ce,ce*=Ce),ee.set(ge,he,ce,Ce),K.equals(ee)===!1&&(e.clearColor(ge,he,ce,Ce),K.copy(ee))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function i(){let L=!1,ee=!1,X=null,K=null,ge=null;return{setReversed:function(he){if(ee!==he){let ce=t.get("EXT_clip_control");ee?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);let Ce=ge;ge=null,this.setClear(Ce)}ee=he},getReversed:function(){return ee},setTest:function(he){he?le(e.DEPTH_TEST):we(e.DEPTH_TEST)},setMask:function(he){X!==he&&!L&&(e.depthMask(he),X=he)},setFunc:function(he){if(ee&&(he=fm[he]),K!==he){switch(he){case rn:e.depthFunc(e.NEVER);break;case an:e.depthFunc(e.ALWAYS);break;case nn:e.depthFunc(e.LESS);break;case Xr:e.depthFunc(e.LEQUAL);break;case sn:e.depthFunc(e.EQUAL);break;case on:e.depthFunc(e.GEQUAL);break;case ln:e.depthFunc(e.GREATER);break;case hn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=he}},setLocked:function(he){L=he},setClear:function(he){ge!==he&&(ee&&(he=1-he),e.clearDepth(he),ge=he)},reset:function(){L=!1,X=null,K=null,ge=null,ee=!1}}}function a(){let L=!1,ee=null,X=null,K=null,ge=null,he=null,ce=null,Ce=null,Me=null;return{setTest:function(Ne){L||(Ne?le(e.STENCIL_TEST):we(e.STENCIL_TEST))},setMask:function(Ne){ee!==Ne&&!L&&(e.stencilMask(Ne),ee=Ne)},setFunc:function(Ne,_t,mt){(X!==Ne||K!==_t||ge!==mt)&&(e.stencilFunc(Ne,_t,mt),X=Ne,K=_t,ge=mt)},setOp:function(Ne,_t,mt){(he!==Ne||ce!==_t||Ce!==mt)&&(e.stencilOp(Ne,_t,mt),he=Ne,ce=_t,Ce=mt)},setLocked:function(Ne){L=Ne},setClear:function(Ne){Me!==Ne&&(e.clearStencil(Ne),Me=Ne)},reset:function(){L=!1,ee=null,X=null,K=null,ge=null,he=null,ce=null,Ce=null,Me=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,w=null,x=null,E=null,F=null,R=null,A=new Ze(0,0,0),U=0,M=!1,S=null,C=null,O=null,B=null,H=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Q>=2);let se=null,de={},Oe=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),q=new et().fromArray(Oe),ne=new et().fromArray(Ve);function Ae(L,ee,X,K){let ge=new Uint8Array(4),he=e.createTexture();e.bindTexture(L,he),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ce=0;ce<X;ce++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,ge):e.texImage2D(ee+ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return he}let Te={};Te[e.TEXTURE_2D]=Ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Te[e.TEXTURE_CUBE_MAP]=Ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[e.TEXTURE_2D_ARRAY]=Ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Te[e.TEXTURE_3D]=Ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(e.DEPTH_TEST),s.setFunc(Xr),_e(!1),te(js),le(e.CULL_FACE),ve(ur);function le(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function we(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function He(L,ee){return u[L]!==ee?(e.bindFramebuffer(L,ee),u[L]=ee,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ee),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ie(L,ee){let X=f,K=!1;if(L){X=d.get(ee),X===void 0&&(X=[],d.set(ee,X));let ge=L.textures;if(X.length!==ge.length||X[0]!==e.COLOR_ATTACHMENT0){for(let he=0,ce=ge.length;he<ce;he++)X[he]=e.COLOR_ATTACHMENT0+he;X.length=ge.length,K=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,K=!0);K&&e.drawBuffers(X)}function Z(L){return v!==L?(e.useProgram(L),v=L,!0):!1}let ae={[Ar]:e.FUNC_ADD,[gh]:e.FUNC_SUBTRACT,[vh]:e.FUNC_REVERSE_SUBTRACT};ae[_h]=e.MIN,ae[xh]=e.MAX;let T={[yh]:e.ZERO,[Mh]:e.ONE,[Sh]:e.SRC_COLOR,[en]:e.SRC_ALPHA,[Rh]:e.SRC_ALPHA_SATURATE,[wh]:e.DST_COLOR,[Th]:e.DST_ALPHA,[Eh]:e.ONE_MINUS_SRC_COLOR,[tn]:e.ONE_MINUS_SRC_ALPHA,[Ah]:e.ONE_MINUS_DST_COLOR,[bh]:e.ONE_MINUS_DST_ALPHA,[Ch]:e.CONSTANT_COLOR,[Ph]:e.ONE_MINUS_CONSTANT_COLOR,[Lh]:e.CONSTANT_ALPHA,[Nh]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(L,ee,X,K,ge,he,ce,Ce,Me,Ne){if(L===ur){g===!0&&(we(e.BLEND),g=!1);return}if(g===!1&&(le(e.BLEND),g=!0),L!==mh){if(L!==m||Ne!==M){if((p!==Ar||E!==Ar)&&(e.blendEquation(e.FUNC_ADD),p=Ar,E=Ar),Ne)switch(L){case Wr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ys:e.blendFunc(e.ONE,e.ONE);break;case Zs:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Js:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ys:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Zs:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Js:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,x=null,F=null,R=null,A.set(0,0,0),U=0,m=L,M=Ne}return}ge=ge||ee,he=he||X,ce=ce||K,(ee!==p||ge!==E)&&(e.blendEquationSeparate(ae[ee],ae[ge]),p=ee,E=ge),(X!==w||K!==x||he!==F||ce!==R)&&(e.blendFuncSeparate(T[X],T[K],T[he],T[ce]),w=X,x=K,F=he,R=ce),(Ce.equals(A)===!1||Me!==U)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Me),A.copy(Ce),U=Me),m=L,M=!1}function $(L,ee){L.side===jt?we(e.CULL_FACE):le(e.CULL_FACE);let X=L.side===gt;ee&&(X=!X),_e(X),L.blending===Wr&&L.transparent===!1?ve(ur):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(L){S!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),S=L)}function te(L){L!==dh?(le(e.CULL_FACE),L!==C&&(L===js?e.cullFace(e.BACK):L===ph?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):we(e.CULL_FACE),C=L}function De(L){L!==O&&(G&&e.lineWidth(L),O=L)}function ue(L,ee,X){L?(le(e.POLYGON_OFFSET_FILL),(B!==ee||H!==X)&&(e.polygonOffset(ee,X),B=ee,H=X)):we(e.POLYGON_OFFSET_FILL)}function be(L){L?le(e.SCISSOR_TEST):we(e.SCISSOR_TEST)}function b(L){L===void 0&&(L=e.TEXTURE0+j-1),se!==L&&(e.activeTexture(L),se=L)}function _(L,ee,X){X===void 0&&(se===null?X=e.TEXTURE0+j-1:X=se);let K=de[X];K===void 0&&(K={type:void 0,texture:void 0},de[X]=K),(K.type!==L||K.texture!==ee)&&(se!==X&&(e.activeTexture(X),se=X),e.bindTexture(L,ee||Te[L]),K.type=L,K.texture=ee)}function D(){let L=de[se];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(L){q.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function Ee(L){ne.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function Be(L,ee){let X=h.get(ee);X===void 0&&(X=new WeakMap,h.set(ee,X));let K=X.get(L);K===void 0&&(K=e.getUniformBlockIndex(ee,L.name),X.set(L,K))}function Ge(L,ee){let X=h.get(ee).get(L);l.get(ee)!==X&&(e.uniformBlockBinding(ee,X,L.__bindingPointIndex),l.set(ee,X))}function $e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},se=null,de={},u={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,w=null,x=null,E=null,F=null,R=null,A=new Ze(0,0,0),U=0,M=!1,S=null,C=null,O=null,B=null,H=null,q.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:le,disable:we,bindFramebuffer:He,drawBuffers:Ie,useProgram:Z,setBlending:ve,setMaterial:$,setFlipSided:_e,setCullFace:te,setLineWidth:De,setPolygonOffset:ue,setScissorTest:be,activeTexture:b,bindTexture:_,unbindTexture:D,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:me,texImage3D:je,updateUBOMapping:Be,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:re,texSubImage2D:W,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:ye,scissor:ze,viewport:Ee,reset:$e}}function Al(e,t,r,i){let a=gm(i);switch(r){case io:return e*t;case no:return e*t;case so:return e*t*2;case oo:return e*t/a.components*a.byteLength;case vn:return e*t/a.components*a.byteLength;case lo:return e*t*2/a.components*a.byteLength;case _n:return e*t*2/a.components*a.byteLength;case ao:return e*t*3/a.components*a.byteLength;case Ft:return e*t*4/a.components*a.byteLength;case xn:return e*t*4/a.components*a.byteLength;case ca:case ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:case En:return Math.max(e,16)*Math.max(t,8)/4;case yn:case Sn:return Math.max(e,8)*Math.max(t,8)/2;case Tn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ln:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case In:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Dn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Vn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fa:case Hn:case Gn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ho:case kn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wn:case Xn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function gm(e){switch(e){case Qt:case eo:return{byteLength:1,components:1};case Di:case to:case Oi:return{byteLength:2,components:1};case mn:case gn:return{byteLength:2,components:4};case Pr:case fn:case er:return{byteLength:4,components:1};case ro:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function vm(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return f?new OffscreenCanvas(b,_):_a("canvas")}function g(b,_,D){let Y=1,J=be(b);if((J.width>D||J.height>D)&&(Y=D/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let W=Math.floor(Y*J.width),xe=Math.floor(Y*J.height);u===void 0&&(u=v(W,xe));let oe=_?v(W,xe):u;return oe.width=W,oe.height=xe,oe.getContext("2d").drawImage(b,0,0,W,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+xe+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){e.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(b,_,D,Y,J=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=_;if(_===e.RED&&(D===e.FLOAT&&(W=e.R32F),D===e.HALF_FLOAT&&(W=e.R16F),D===e.UNSIGNED_BYTE&&(W=e.R8)),_===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.R8UI),D===e.UNSIGNED_SHORT&&(W=e.R16UI),D===e.UNSIGNED_INT&&(W=e.R32UI),D===e.BYTE&&(W=e.R8I),D===e.SHORT&&(W=e.R16I),D===e.INT&&(W=e.R32I)),_===e.RG&&(D===e.FLOAT&&(W=e.RG32F),D===e.HALF_FLOAT&&(W=e.RG16F),D===e.UNSIGNED_BYTE&&(W=e.RG8)),_===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RG8UI),D===e.UNSIGNED_SHORT&&(W=e.RG16UI),D===e.UNSIGNED_INT&&(W=e.RG32UI),D===e.BYTE&&(W=e.RG8I),D===e.SHORT&&(W=e.RG16I),D===e.INT&&(W=e.RG32I)),_===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGB8UI),D===e.UNSIGNED_SHORT&&(W=e.RGB16UI),D===e.UNSIGNED_INT&&(W=e.RGB32UI),D===e.BYTE&&(W=e.RGB8I),D===e.SHORT&&(W=e.RGB16I),D===e.INT&&(W=e.RGB32I)),_===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),D===e.UNSIGNED_INT&&(W=e.RGBA32UI),D===e.BYTE&&(W=e.RGBA8I),D===e.SHORT&&(W=e.RGBA16I),D===e.INT&&(W=e.RGBA32I)),_===e.RGB&&D===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),_===e.RGBA){let xe=J?ga:Je.getTransfer(Y);D===e.FLOAT&&(W=e.RGBA32F),D===e.HALF_FLOAT&&(W=e.RGBA16F),D===e.UNSIGNED_BYTE&&(W=xe===Qe?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(b,_){let D;return b?_===null||_===Pr||_===Yr?D=e.DEPTH24_STENCIL8:_===er?D=e.DEPTH32F_STENCIL8:_===Di&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pr||_===Yr?D=e.DEPTH_COMPONENT24:_===er?D=e.DEPTH_COMPONENT32F:_===Di&&(D=e.DEPTH_COMPONENT16),D}function F(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ot&&b.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),U(_),_.isVideoTexture&&c.delete(_)}function A(b){let _=b.target;_.removeEventListener("dispose",A),S(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let D=b.source,Y=d.get(D);if(Y){let J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(Y).length===0&&d.delete(D)}i.remove(b)}function M(b){let _=i.get(b);e.deleteTexture(_.__webglTexture);let D=b.source,Y=d.get(D);delete Y[_.__cacheKey],s.memory.textures--}function S(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)e.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else e.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[Y]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=b.textures;for(let Y=0,J=D.length;Y<J;Y++){let W=i.get(D[Y]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(D[Y])}i.remove(b)}let C=0;function O(){C=0}function B(){let b=C;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),C+=1,b}function H(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){let D=i.get(b);if(b.isVideoTexture&&De(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(D,b,_);return}}r.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+_)}function G(b,_){let D=i.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,_);return}r.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+_)}function Q(b,_){let D=i.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,_);return}r.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+_)}function k(b,_){let D=i.get(b);if(b.version>0&&D.__version!==b.version){Ae(D,b,_);return}r.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+_)}let se={[la]:e.REPEAT,[Rr]:e.CLAMP_TO_EDGE,[dn]:e.MIRRORED_REPEAT},de={[Ot]:e.NEAREST,[Hh]:e.NEAREST_MIPMAP_NEAREST,[ha]:e.NEAREST_MIPMAP_LINEAR,[qt]:e.LINEAR,[pn]:e.LINEAR_MIPMAP_NEAREST,[Cr]:e.LINEAR_MIPMAP_LINEAR},Oe={[Xh]:e.NEVER,[Kh]:e.ALWAYS,[jh]:e.LESS,[go]:e.LEQUAL,[qh]:e.EQUAL,[Jh]:e.GEQUAL,[Yh]:e.GREATER,[Zh]:e.NOTEQUAL};function Ve(b,_){if(_.type===er&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===pn||_.magFilter===ha||_.magFilter===Cr||_.minFilter===qt||_.minFilter===pn||_.minFilter===ha||_.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,se[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,se[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,se[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,de[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==ha&&_.minFilter!==Cr||_.type===er&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function q(b,_){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let Y=_.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let W=H(_);if(W!==b.__cacheKey){J[W]===void 0&&(J[W]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),J[W].usedTimes++;let xe=J[b.__cacheKey];xe!==void 0&&(J[b.__cacheKey].usedTimes--,xe.usedTimes===0&&M(_)),b.__cacheKey=W,b.__webglTexture=J[W].texture}return D}function ne(b,_,D){let Y=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=e.TEXTURE_3D);let J=q(b,_),W=_.source;r.bindTexture(Y,b.__webglTexture,e.TEXTURE0+D);let xe=i.get(W);if(W.version!==xe.__version||J===!0){r.activeTexture(e.TEXTURE0+D);let oe=Je.getPrimaries(Je.workingColorSpace),ye=_.colorSpace===pr?null:Je.getPrimaries(_.colorSpace),Fe=_.colorSpace===pr||oe===ye?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let re=g(_.image,!1,a.maxTextureSize);re=ue(_,re);let me=n.convert(_.format,_.colorSpace),je=n.convert(_.type),ze=x(_.internalFormat,me,je,_.colorSpace,_.isVideoTexture);Ve(Y,_);let Ee,Be=_.mipmaps,Ge=_.isVideoTexture!==!0,$e=xe.__version===void 0||J===!0,L=W.dataReady,ee=F(_,re);if(_.isDepthTexture)ze=E(_.format===Jr,_.type),$e&&(Ge?r.texStorage2D(e.TEXTURE_2D,1,ze,re.width,re.height):r.texImage2D(e.TEXTURE_2D,0,ze,re.width,re.height,0,me,je,null));else if(_.isDataTexture)if(Be.length>0){Ge&&$e&&r.texStorage2D(e.TEXTURE_2D,ee,ze,Be[0].width,Be[0].height);for(let X=0,K=Be.length;X<K;X++)Ee=Be[X],Ge?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Ee.width,Ee.height,me,je,Ee.data):r.texImage2D(e.TEXTURE_2D,X,ze,Ee.width,Ee.height,0,me,je,Ee.data);_.generateMipmaps=!1}else Ge?($e&&r.texStorage2D(e.TEXTURE_2D,ee,ze,re.width,re.height),L&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,re.width,re.height,me,je,re.data)):r.texImage2D(e.TEXTURE_2D,0,ze,re.width,re.height,0,me,je,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&$e&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ze,Be[0].width,Be[0].height,re.depth);for(let X=0,K=Be.length;X<K;X++)if(Ee=Be[X],_.format!==Ft)if(me!==null)if(Ge){if(L)if(_.layerUpdates.size>0){let ge=Al(Ee.width,Ee.height,_.format,_.type);for(let he of _.layerUpdates){let ce=Ee.data.subarray(he*ge/Ee.data.BYTES_PER_ELEMENT,(he+1)*ge/Ee.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,he,Ee.width,Ee.height,1,me,ce)}_.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,re.depth,me,Ee.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,ze,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,re.depth,me,je,Ee.data):r.texImage3D(e.TEXTURE_2D_ARRAY,X,ze,Ee.width,Ee.height,re.depth,0,me,je,Ee.data)}else{Ge&&$e&&r.texStorage2D(e.TEXTURE_2D,ee,ze,Be[0].width,Be[0].height);for(let X=0,K=Be.length;X<K;X++)Ee=Be[X],_.format!==Ft?me!==null?Ge?L&&r.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,Ee.width,Ee.height,me,Ee.data):r.compressedTexImage2D(e.TEXTURE_2D,X,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Ee.width,Ee.height,me,je,Ee.data):r.texImage2D(e.TEXTURE_2D,X,ze,Ee.width,Ee.height,0,me,je,Ee.data)}else if(_.isDataArrayTexture)if(Ge){if($e&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ze,re.width,re.height,re.depth),L)if(_.layerUpdates.size>0){let X=Al(re.width,re.height,_.format,_.type);for(let K of _.layerUpdates){let ge=re.data.subarray(K*X/re.data.BYTES_PER_ELEMENT,(K+1)*X/re.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,me,je,ge)}_.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,je,re.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,ze,re.width,re.height,re.depth,0,me,je,re.data);else if(_.isData3DTexture)Ge?($e&&r.texStorage3D(e.TEXTURE_3D,ee,ze,re.width,re.height,re.depth),L&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,je,re.data)):r.texImage3D(e.TEXTURE_3D,0,ze,re.width,re.height,re.depth,0,me,je,re.data);else if(_.isFramebufferTexture){if($e)if(Ge)r.texStorage2D(e.TEXTURE_2D,ee,ze,re.width,re.height);else{let X=re.width,K=re.height;for(let ge=0;ge<ee;ge++)r.texImage2D(e.TEXTURE_2D,ge,ze,X,K,0,me,je,null),X>>=1,K>>=1}}else if(Be.length>0){if(Ge&&$e){let X=be(Be[0]);r.texStorage2D(e.TEXTURE_2D,ee,ze,X.width,X.height)}for(let X=0,K=Be.length;X<K;X++)Ee=Be[X],Ge?L&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,me,je,Ee):r.texImage2D(e.TEXTURE_2D,X,ze,me,je,Ee);_.generateMipmaps=!1}else if(Ge){if($e){let X=be(re);r.texStorage2D(e.TEXTURE_2D,ee,ze,X.width,X.height)}L&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,me,je,re)}else r.texImage2D(e.TEXTURE_2D,0,ze,me,je,re);m(_)&&p(Y),xe.__version=W.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ae(b,_,D){if(_.image.length!==6)return;let Y=q(b,_),J=_.source;r.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+D);let W=i.get(J);if(J.version!==W.__version||Y===!0){r.activeTexture(e.TEXTURE0+D);let xe=Je.getPrimaries(Je.workingColorSpace),oe=_.colorSpace===pr?null:Je.getPrimaries(_.colorSpace),ye=_.colorSpace===pr||xe===oe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Fe=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Fe&&!re?me[K]=g(_.image[K],!0,a.maxCubemapSize):me[K]=re?_.image[K].image:_.image[K],me[K]=ue(_,me[K]);let je=me[0],ze=n.convert(_.format,_.colorSpace),Ee=n.convert(_.type),Be=x(_.internalFormat,ze,Ee,_.colorSpace),Ge=_.isVideoTexture!==!0,$e=W.__version===void 0||Y===!0,L=J.dataReady,ee=F(_,je);Ve(e.TEXTURE_CUBE_MAP,_);let X;if(Fe){Ge&&$e&&r.texStorage2D(e.TEXTURE_CUBE_MAP,ee,Be,je.width,je.height);for(let K=0;K<6;K++){X=me[K].mipmaps;for(let ge=0;ge<X.length;ge++){let he=X[ge];_.format!==Ft?ze!==null?Ge?L&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,he.width,he.height,ze,he.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,he.width,he.height,ze,Ee,he.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Be,he.width,he.height,0,ze,Ee,he.data)}}}else{if(X=_.mipmaps,Ge&&$e){X.length>0&&ee++;let K=be(me[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,ee,Be,K.width,K.height)}for(let K=0;K<6;K++)if(re){Ge?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,ze,Ee,me[K].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,me[K].width,me[K].height,0,ze,Ee,me[K].data);for(let ge=0;ge<X.length;ge++){let he=X[ge].image[K].image;Ge?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,he.width,he.height,ze,Ee,he.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Be,he.width,he.height,0,ze,Ee,he.data)}}else{Ge?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ze,Ee,me[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ze,Ee,me[K]);for(let ge=0;ge<X.length;ge++){let he=X[ge];Ge?L&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,ze,Ee,he.image[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Be,ze,Ee,he.image[K])}}}m(_)&&p(e.TEXTURE_CUBE_MAP),W.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Te(b,_,D,Y,J,W){let xe=n.convert(D.format,D.colorSpace),oe=n.convert(D.type),ye=x(D.internalFormat,xe,oe,D.colorSpace),Fe=i.get(_),re=i.get(D);if(re.__renderTarget=_,!Fe.__hasExternalTextures){let me=Math.max(1,_.width>>W),je=Math.max(1,_.height>>W);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?r.texImage3D(J,W,ye,me,je,_.depth,0,xe,oe,null):r.texImage2D(J,W,ye,me,je,0,xe,oe,null)}r.bindFramebuffer(e.FRAMEBUFFER,b),te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,J,re.__webglTexture,0,_e(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,J,re.__webglTexture,W),r.bindFramebuffer(e.FRAMEBUFFER,null)}function le(b,_,D){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=E(_.stencilBuffer,J),xe=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=_e(_);te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,oe,W,_.width,_.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,oe,W,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,W,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,b)}else{let Y=_.textures;for(let J=0;J<Y.length;J++){let W=Y[J],xe=n.convert(W.format,W.colorSpace),oe=n.convert(W.type),ye=x(W.internalFormat,xe,oe,W.colorSpace),Fe=_e(_);D&&te(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe,ye,_.width,_.height):te(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe,ye,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ye,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let D=i.get(_.depthTexture);D.__renderTarget=_,(!D.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let Y=D.__webglTexture,J=_e(_);if(_.depthTexture.format===Zr)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Jr)te(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function He(b){let _=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");we(_.__webglFramebuffer,b)}else if(D){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=e.createRenderbuffer(),le(_.__webglDepthbuffer[Y],b,!1);else{let J=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,W)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),le(_.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,J)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(b,_,D){let Y=i.get(b);_!==void 0&&Te(Y.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&He(b)}function Z(b){let _=b.texture,D=i.get(b),Y=i.get(_);b.addEventListener("dispose",A);let J=b.textures,W=b.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=_.version,s.memory.textures++),W){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)D.__webglFramebuffer[oe][ye]=e.createFramebuffer()}else D.__webglFramebuffer[oe]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)D.__webglFramebuffer[oe]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(xe)for(let oe=0,ye=J.length;oe<ye;oe++){let Fe=i.get(J[oe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=e.createTexture(),s.memory.textures++)}if(b.samples>0&&te(b)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let ye=J[oe];D.__webglColorRenderbuffer[oe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);let Fe=n.convert(ye.format,ye.colorSpace),re=n.convert(ye.type),me=x(ye.internalFormat,Fe,re,ye.colorSpace,b.isXRRenderTarget===!0),je=_e(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,je,me,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),le(D.__webglDepthRenderbuffer,b,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){r.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Te(D.__webglFramebuffer[oe][ye],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else Te(D.__webglFramebuffer[oe],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&p(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(xe){for(let oe=0,ye=J.length;oe<ye;oe++){let Fe=J[oe],re=i.get(Fe);r.bindTexture(e.TEXTURE_2D,re.__webglTexture),Ve(e.TEXTURE_2D,Fe),Te(D.__webglFramebuffer,b,Fe,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D,0),m(Fe)&&p(e.TEXTURE_2D)}r.unbindTexture()}else{let oe=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(oe,Y.__webglTexture),Ve(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Te(D.__webglFramebuffer[ye],b,_,e.COLOR_ATTACHMENT0,oe,ye);else Te(D.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,oe,0);m(_)&&p(oe),r.unbindTexture()}b.depthBuffer&&He(b)}function ae(b){let _=b.textures;for(let D=0,Y=_.length;D<Y;D++){let J=_[D];if(m(J)){let W=w(b),xe=i.get(J).__webglTexture;r.bindTexture(W,xe),p(W),r.unbindTexture()}}}let T=[],ve=[];function $(b){if(b.samples>0){if(te(b)===!1){let _=b.textures,D=b.width,Y=b.height,J=e.COLOR_BUFFER_BIT,W=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(b),oe=_.length>1;if(oe)for(let ye=0;ye<_.length;ye++)r.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),oe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Fe=i.get(_[ye]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,D,Y,0,0,D,Y,J,e.NEAREST),l===!0&&(T.length=0,ve.length=0,T.push(e.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(T.push(W),ve.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,T))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<_.length;ye++){r.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Fe=i.get(_[ye]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,Fe,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function _e(b){return Math.min(a.maxSamples,b.samples)}function te(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(b){let _=s.render.frame;c.get(b)!==_&&(c.set(b,_),b.update())}function ue(b,_){let D=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Kr&&D!==pr&&(Je.getTransfer(D)===Qe?(Y!==Ft||J!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=Ie,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=te}function _m(e,t){function r(i,a=pr){let n,s=Je.getTransfer(a);if(i===Qt)return e.UNSIGNED_BYTE;if(i===mn)return e.UNSIGNED_SHORT_4_4_4_4;if(i===gn)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ro)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===eo)return e.BYTE;if(i===to)return e.SHORT;if(i===Di)return e.UNSIGNED_SHORT;if(i===fn)return e.INT;if(i===Pr)return e.UNSIGNED_INT;if(i===er)return e.FLOAT;if(i===Oi)return e.HALF_FLOAT;if(i===io)return e.ALPHA;if(i===ao)return e.RGB;if(i===Ft)return e.RGBA;if(i===no)return e.LUMINANCE;if(i===so)return e.LUMINANCE_ALPHA;if(i===Zr)return e.DEPTH_COMPONENT;if(i===Jr)return e.DEPTH_STENCIL;if(i===oo)return e.RED;if(i===vn)return e.RED_INTEGER;if(i===lo)return e.RG;if(i===_n)return e.RG_INTEGER;if(i===xn)return e.RGBA_INTEGER;if(i===ca||i===ua||i===da||i===pa)if(s===Qe)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===ca)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===ca)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yn||i===Mn||i===Sn||i===En)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===yn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===En)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tn||i===bn||i===wn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Tn||i===bn)return s===Qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===wn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===An||i===Rn||i===Cn||i===Pn||i===Ln||i===Nn||i===In||i===Un||i===Dn||i===On||i===Fn||i===zn||i===Bn||i===Vn)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===An)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ln)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===In)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Un)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===On)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vn)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===Hn||i===Gn)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===fa)return s===Qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ho||i===kn||i===Wn||i===Xn)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===fa)return n.COMPRESSED_RED_RGTC1_EXT;if(i===kn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var xm=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ym={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,r),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,f=.005;l.inputState.pinching&&u>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new It;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Em=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new zt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Mr({vertexShader:Mm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new vs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tm=class extends Qr{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,f=null,v=new Em,g=t.getContextAttributes(),m=null,p=null,w=[],x=[],E=new fe,F=null,R=new Pt;R.viewport=new et;let A=new Pt;A.viewport=new et;let U=[R,A],M=new xm,S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=w[q];return ne===void 0&&(ne=new As,w[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=w[q];return ne===void 0&&(ne=new As,w[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=w[q];return ne===void 0&&(ne=new As,w[q]=ne),ne.getHandSpace()};function O(q){let ne=x.indexOf(q.inputSource);if(ne===-1)return;let Ae=w[ne];Ae!==void 0&&(Ae.update(q.inputSource,q.frame,l||n),Ae.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let q=0;q<w.length;q++){let ne=x[q];ne!==null&&(x[q]=null,w[q].disconnect(ne))}S=null,C=null,v.reset(),e.setRenderTarget(m),d=null,u=null,c=null,i=null,p=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Nr(d.framebufferWidth,d.framebufferHeight,{format:Ft,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,Ae=null,Te=null;g.depth&&(Te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Jr:Zr,Ae=g.stencil?Yr:Pr);let le={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(le),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Nr(u.textureWidth,u.textureHeight,{format:Ft,type:Qt,depthTexture:new nl(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),Ve.setContext(i),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(q){for(let ne=0;ne<q.removed.length;ne++){let Ae=q.removed[ne],Te=x.indexOf(Ae);Te>=0&&(x[Te]=null,w[Te].disconnect(Ae))}for(let ne=0;ne<q.added.length;ne++){let Ae=q.added[ne],Te=x.indexOf(Ae);if(Te===-1){for(let we=0;we<w.length;we++)if(we>=x.length){x.push(Ae),Te=we;break}else if(x[we]===null){x[we]=Ae,Te=we;break}if(Te===-1)break}let le=w[Te];le&&le.connect(Ae)}}let j=new P,G=new P;function Q(q,ne,Ae){j.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(Ae.matrixWorld);let Te=j.distanceTo(G),le=ne.projectionMatrix.elements,we=Ae.projectionMatrix.elements,He=le[14]/(le[10]-1),Ie=le[14]/(le[10]+1),Z=(le[9]+1)/le[5],ae=(le[9]-1)/le[5],T=(le[8]-1)/le[0],ve=(we[8]+1)/we[0],$=He*T,_e=He*ve,te=Te/(-T+ve),De=te*-T;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),le[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let ue=He+te,be=Ie+te,b=$-De,_=_e+(Te-De),D=Z*Ie/be*ue,Y=ae*Ie/be*ue;q.projectionMatrix.makePerspective(b,_,D,Y,ue,be),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function k(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,Ae=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),M.near=A.near=R.near=ne,M.far=A.far=R.far=Ae,(S!==M.near||C!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,C=M.far),R.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|A.layers.mask;let Te=q.parent,le=M.cameras;k(M,Te);for(let we=0;we<le.length;we++)k(le[we],Te);le.length===2?Q(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),se(q,M,Te)};function se(q,ne,Ae){Ae===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(Ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(q){o=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let de=null;function Oe(q,ne){if(h=ne.getViewerPose(l||n),f=ne,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Te=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let we=0;we<Ae.length;we++){let He=Ae[we],Ie=null;if(d!==null)Ie=d.getViewport(He);else{let ae=c.getViewSubImage(u,He);Ie=ae.viewport,we===0&&(e.setRenderTargetTextures(p,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(p))}let Z=U[we];Z===void 0&&(Z=new Pt,Z.layers.enable(we),Z.viewport=new et,U[we]=Z),Z.matrix.fromArray(He.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(He.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),we===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(Z)}let le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){let we=c.getDepthInformation(Ae[0]);we&&we.isValid&&we.texture&&v.init(e,we,i.renderState)}}for(let Ae=0;Ae<w.length;Ae++){let Te=x[Ae],le=w[Ae];Te!==null&&le!==void 0&&le.update(Te,ne,l||n)}de&&de(q,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),f=null}let Ve=new Ko;Ve.setAnimationLoop(Oe),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}},Vr=new _r,bm=new lt;function wm(e,t){function r(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jo(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,w,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(n(m,p),v(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,r(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,r(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,r(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,r(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,r(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),x=w.envMap,E=w.envMapRotation;x&&(m.envMap.value=x,Vr.copy(E),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Vr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,r(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,r(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,r(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,r(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,r(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,r(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,r(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,r(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,r(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,r(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,r(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,r(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,r(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,r(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,r(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,r(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,r(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,r(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,r(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Am(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){let E=x.program;i.uniformBlockBinding(w,E)}function h(w,x){let E=a[w.id];E===void 0&&(v(w),E=c(w),a[w.id]=E,w.addEventListener("dispose",m));let F=x.program;i.updateUBOMapping(w,F);let R=t.render.frame;n[w.id]!==R&&(d(w),n[w.id]=R)}function c(w){let x=u();w.__bindingPointIndex=x;let E=e.createBuffer(),F=w.__size,R=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,F,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,E),E}function u(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let x=a[w.id],E=w.uniforms,F=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let R=0,A=E.length;R<A;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,S=U.length;M<S;M++){let C=U[M];if(f(C,R,M,F)===!0){let O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],H=0;for(let j=0;j<B.length;j++){let G=B[j],Q=g(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,O+H,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(w,x,E,F){let R=w.value,A=x+"_"+E;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{let U=F[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(w){let x=w.uniforms,E=0,F=16;for(let A=0,U=x.length;A<U;A++){let M=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,C=M.length;S<C;S++){let O=M[S],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,j=B.length;H<j;H++){let G=B[H],Q=g(G),k=E%F,se=k%Q.boundary,de=k+se;E+=se,de!==0&&F-de<Q.storage&&(E+=F-de),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Q.storage}}}let R=E%F;return R>0&&(E+=F-R),w.__size=E,w.__cache={},this}function g(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){let x=w.target;x.removeEventListener("dispose",m);let E=s.indexOf(x.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function p(){for(let w in a)e.deleteBuffer(a[w]);s=[],a={},n={}}return{bind:l,update:h,dispose:p}}var Rm=class{constructor(e={}){let{canvas:t=fc(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=n;let f=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=dr,this.toneMappingExposure=1;let x=this,E=!1,F=0,R=0,A=null,U=-1,M=null,S=new et,C=new et,O=null,B=new Ze(0),H=0,j=t.width,G=t.height,Q=1,k=null,se=null,de=new et(0,0,j,G),Oe=new et(0,0,j,G),Ve=!1,q=new gs,ne=!1,Ae=!1,Te=new lt,le=new lt,we=new P,He=new et,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ae(){return A===null?Q:1}let T=r;function ve(y,I){return t.getContext(y,I)}try{let y={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ge,!1),T===null){let I="webgl2";if(T=ve(I,y),T===null)throw ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $,_e,te,De,ue,be,b,_,D,Y,J,W,xe,oe,ye,Fe,re,me,je,ze,Ee,Be,Ge,$e;function L(){$=new Np(T),$.init(),Be=new _m(T,$),_e=new wp(T,$,e,Be),te=new mm(T,$),_e.reverseDepthBuffer&&u&&te.buffers.depth.setReversed(!0),De=new Dp(T),ue=new em,be=new vm(T,$,te,ue,_e,Be,De),b=new Rp(x),_=new Lp(x),D=new Gc(T),Ge=new Tp(T,D),Y=new Ip(T,D,De,Ge),J=new Fp(T,Y,D,De),je=new Op(T,_e,be),Fe=new Ap(ue),W=new Qf(x,b,_,$,_e,Ge,Fe),xe=new wm(x,ue),oe=new rm,ye=new lm($),me=new Ep(x,b,_,te,J,d,o),re=new pm(x,J,_e),$e=new Am(T,De,_e,te),ze=new bp(T,$,De),Ee=new Up(T,$,De),De.programs=W.programs,x.capabilities=_e,x.extensions=$,x.properties=ue,x.renderLists=oe,x.shadowMap=re,x.state=te,x.info=De}L();let ee=new Tm(x,T);this.xr=ee,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(j,G,!1))},this.getSize=function(y){return y.set(j,G)},this.setSize=function(y,I,z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,G=I,t.width=Math.floor(y*Q),t.height=Math.floor(I*Q),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(j*Q,G*Q).floor()},this.setDrawingBufferSize=function(y,I,z){j=y,G=I,Q=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(de)},this.setViewport=function(y,I,z,V){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,I,z,V),te.viewport(S.copy(de).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,I,z,V){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,I,z,V),te.scissor(C.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(y){te.setScissorTest(Ve=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){se=y},this.getClearColor=function(y){return y.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(y=!0,I=!0,z=!0){let V=0;if(y){let N=!1;if(A!==null){let ie=A.texture.format;N=ie===xn||ie===_n||ie===vn}if(N){let ie=A.texture.type,Se=ie===Qt||ie===Pr||ie===Di||ie===Yr||ie===mn||ie===gn,Re=me.getClearColor(),Pe=me.getClearAlpha(),ke=Re.r,We=Re.g,Ue=Re.b;Se?(f[0]=ke,f[1]=We,f[2]=Ue,f[3]=Pe,T.clearBufferuiv(T.COLOR,0,f)):(v[0]=ke,v[1]=We,v[2]=Ue,v[3]=Pe,T.clearBufferiv(T.COLOR,0,v))}else V|=T.COLOR_BUFFER_BIT}I&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),oe.dispose(),ye.dispose(),ue.dispose(),b.dispose(),_.dispose(),J.dispose(),Ge.dispose(),$e.dispose(),W.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",mt),ee.removeEventListener("sessionend",Ai),ot.stop()};function X(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=De.autoReset,I=re.enabled,z=re.autoUpdate,V=re.needsUpdate,N=re.type;L(),De.autoReset=y,re.enabled=I,re.autoUpdate=z,re.needsUpdate=V,re.type=N}function ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function he(y){let I=y.target;I.removeEventListener("dispose",he),ce(I)}function ce(y){Ce(y),ue.remove(y)}function Ce(y){let I=ue.get(y).programs;I!==void 0&&(I.forEach(function(z){W.releaseProgram(z)}),y.isShaderMaterial&&W.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,V,N,ie){I===null&&(I=Ie);let Se=N.isMesh&&N.matrixWorld.determinant()<0,Re=hh(y,I,z,V,N);te.setMaterial(V,Se);let Pe=z.index,ke=1;if(V.wireframe===!0){if(Pe=Y.getWireframeAttribute(z),Pe===void 0)return;ke=2}let We=z.drawRange,Ue=z.attributes.position,Ke=We.start*ke,rt=(We.start+We.count)*ke;ie!==null&&(Ke=Math.max(Ke,ie.start*ke),rt=Math.min(rt,(ie.start+ie.count)*ke)),Pe!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Pe.count)):Ue!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Ue.count));let it=rt-Ke;if(it<0||it===1/0)return;Ge.setup(N,V,Re,z,Pe);let ht,at=ze;if(Pe!==null&&(ht=D.get(Pe),at=Ee,at.setIndex(ht)),N.isMesh)V.wireframe===!0?(te.setLineWidth(V.wireframeLinewidth*ae()),at.setMode(T.LINES)):at.setMode(T.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),te.setLineWidth(Le*ae()),N.isLineSegments?at.setMode(T.LINES):N.isLineLoop?at.setMode(T.LINE_LOOP):at.setMode(T.LINE_STRIP)}else N.isPoints?at.setMode(T.POINTS):N.isSprite&&at.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,br=N._multiDrawCounts,wr=N._multiDrawCount,Dt=Pe?D.get(Pe).bytesPerElement:1,kr=ue.get(V).currentProgram.getUniforms();for(let wt=0;wt<wr;wt++)kr.setValue(T,"_gl_DrawID",wt),at.render(Le[wt]/Dt,br[wt])}else if(N.isInstancedMesh)at.renderInstances(Ke,it,N.count);else if(z.isInstancedBufferGeometry){let Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,br=Math.min(z.instanceCount,Le);at.renderInstances(Ke,it,br)}else at.render(Ke,it)};function Me(y,I,z){y.transparent===!0&&y.side===jt&&y.forceSinglePass===!1?(y.side=gt,y.needsUpdate=!0,Tr(y,I,z),y.side=cr,y.needsUpdate=!0,Tr(y,I,z),y.side=jt):Tr(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),m=ye.get(z),m.init(I),w.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let Se=0;Se<ie.length;Se++){let Re=ie[Se];Me(Re,z,N),V.add(Re)}else Me(ie,z,N),V.add(ie)}),w.pop(),m=null,V},this.compileAsync=function(y,I,z=null){let V=this.compile(y,I,z);return new Promise(N=>{function ie(){if(V.forEach(function(Se){ue.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){N(y);return}setTimeout(ie,10)}$.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ne=null;function _t(y){Ne&&Ne(y)}function mt(){ot.stop()}function Ai(){ot.start()}let ot=new Ko;ot.setAnimationLoop(_t),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(y){Ne=y,ee.setAnimationLoop(y),y===null?ot.stop():ot.start()},ee.addEventListener("sessionstart",mt),ee.addEventListener("sessionend",Ai),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,A),m=ye.get(y,w.length),m.init(I),w.push(m),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(le),Ae=this.localClippingEnabled,ne=Fe.init(this.clippingPlanes,Ae),g=oe.get(y,p.length),g.init(),p.push(g),ee.enabled===!0&&ee.isPresenting===!0){let ie=x.xr.getDepthSensingMesh();ie!==null&&Ri(ie,I,-1/0,x.sortObjects)}Ri(y,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,se),Z=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Z&&me.addToRenderList(g,y),this.info.render.frame++,ne===!0&&Fe.beginShadows();let z=m.state.shadowsArray;re.render(z,y,I),ne===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(m.setupLights(),I.isArrayCamera){let ie=I.cameras;if(N.length>0)for(let Se=0,Re=ie.length;Se<Re;Se++){let Pe=ie[Se];Ci(V,N,y,Pe)}Z&&me.render(y);for(let Se=0,Re=ie.length;Se<Re;Se++){let Pe=ie[Se];na(g,y,Pe,Pe.viewport)}}else N.length>0&&Ci(V,N,y,I),Z&&me.render(y),na(g,y,I);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(x,y,I),Ge.resetDefaultState(),U=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],ne===!0&&Fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ri(y,I,z,V){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){V&&He.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);let ie=J.update(y),Se=y.material;Se.visible&&g.push(y,ie,Se,z,He.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){let ie=J.update(y),Se=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),He.copy(y.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),He.copy(ie.boundingSphere.center)),He.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){let Re=ie.groups;for(let Pe=0,ke=Re.length;Pe<ke;Pe++){let We=Re[Pe],Ue=Se[We.materialIndex];Ue&&Ue.visible&&g.push(y,ie,Ue,z,He.z,We)}}else Se.visible&&g.push(y,ie,Se,z,He.z,null)}}let N=y.children;for(let ie=0,Se=N.length;ie<Se;ie++)Ri(N[ie],I,z,V)}function na(y,I,z,V){let N=y.opaque,ie=y.transmissive,Se=y.transparent;m.setupLightsView(z),ne===!0&&Fe.setGlobalState(x.clippingPlanes,z),V&&te.viewport(S.copy(V)),N.length>0&&Kt(N,I,z),ie.length>0&&Kt(ie,I,z),Se.length>0&&Kt(Se,I,z),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Ci(y,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Nr(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Oi:Qt,minFilter:Cr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let N=m.state.transmissionRenderTarget[V.id],ie=V.viewport||S;N.setSize(ie.z,ie.w);let Se=x.getRenderTarget();x.setRenderTarget(N),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Z&&me.render(z);let Re=x.toneMapping;x.toneMapping=dr;let Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),ne===!0&&Fe.setGlobalState(x.clippingPlanes,V),Kt(y,z,V),be.updateMultisampleRenderTarget(N),be.updateRenderTargetMipmap(N),$.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let We=0,Ue=I.length;We<Ue;We++){let Ke=I[We],rt=Ke.object,it=Ke.geometry,ht=Ke.material,at=Ke.group;if(ht.side===jt&&rt.layers.test(V.layers)){let Le=ht.side;ht.side=gt,ht.needsUpdate=!0,Pi(rt,z,V,it,ht,at),ht.side=Le,ht.needsUpdate=!0,ke=!0}}ke===!0&&(be.updateMultisampleRenderTarget(N),be.updateRenderTargetMipmap(N))}x.setRenderTarget(Se),x.setClearColor(B,H),Pe!==void 0&&(V.viewport=Pe),x.toneMapping=Re}function Kt(y,I,z){let V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ie=y.length;N<ie;N++){let Se=y[N],Re=Se.object,Pe=Se.geometry,ke=V===null?Se.material:V,We=Se.group;Re.layers.test(z.layers)&&Pi(Re,I,z,Pe,ke,We)}}function Pi(y,I,z,V,N,ie){y.onBeforeRender(x,I,z,V,N,ie),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,I,z,V,y,ie),N.transparent===!0&&N.side===jt&&N.forceSinglePass===!1?(N.side=gt,N.needsUpdate=!0,x.renderBufferDirect(z,I,V,N,y,ie),N.side=cr,N.needsUpdate=!0,x.renderBufferDirect(z,I,V,N,y,ie),N.side=jt):x.renderBufferDirect(z,I,V,N,y,ie),y.onAfterRender(x,I,z,V,N,ie)}function Tr(y,I,z){I.isScene!==!0&&(I=Ie);let V=ue.get(y),N=m.state.lights,ie=m.state.shadowsArray,Se=N.state.version,Re=W.getParameters(y,N.state,ie,I,z),Pe=W.getProgramCacheKey(Re),ke=V.programs;V.environment=y.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(y.isMeshStandardMaterial?_:b).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,ke===void 0&&(y.addEventListener("dispose",he),ke=new Map,V.programs=ke);let We=ke.get(Pe);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===Se)return sa(y,Re),We}else Re.uniforms=W.getUniforms(y),y.onBeforeCompile(Re,x),We=W.acquireProgram(Re,Pe),ke.set(Pe,We),V.uniforms=Re.uniforms;let Ue=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Fe.uniform),sa(y,Re),V.needsLights=uh(y),V.lightsStateVersion=Se,V.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function Li(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ba.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function sa(y,I){let z=ue.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function hh(y,I,z,V,N){I.isScene!==!0&&(I=Ie),be.resetTextureUnits();let ie=I.fog,Se=V.isMeshStandardMaterial?I.environment:null,Re=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kr,Pe=(V.isMeshStandardMaterial?_:b).get(V.envMap||Se),ke=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,We=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color,it=dr;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(it=x.toneMapping);let ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=ht!==void 0?ht.length:0,Le=ue.get(V),br=m.state.lights;if(ne===!0&&(Ae===!0||y!==M)){let bt=y===M&&V.id===U;Fe.setState(V,y,bt)}let wr=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==br.state.version||Le.outputColorSpace!==Re||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Pe||V.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Fe.numPlanes||Le.numIntersection!==Fe.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==We||Le.morphTargets!==Ue||Le.morphNormals!==Ke||Le.morphColors!==rt||Le.toneMapping!==it||Le.morphTargetsCount!==at)&&(wr=!0):(wr=!0,Le.__version=V.version);let Dt=Le.currentProgram;wr===!0&&(Dt=Tr(V,I,N));let kr=!1,wt=!1,Ni=!1,tt=Dt.getUniforms(),Xt=Le.uniforms;if(te.useProgram(Dt.program)&&(kr=!0,wt=!0,Ni=!0),V.id!==U&&(U=V.id,wt=!0),kr||M!==y){te.buffers.depth.getReversed()?(Te.copy(y.projectionMatrix),gc(Te),vc(Te),tt.setValue(T,"projectionMatrix",Te)):tt.setValue(T,"projectionMatrix",y.projectionMatrix),tt.setValue(T,"viewMatrix",y.matrixWorldInverse);let bt=tt.map.cameraPosition;bt!==void 0&&bt.setValue(T,we.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&tt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,wt=!0,Ni=!0)}if(N.isSkinnedMesh){tt.setOptional(T,N,"bindMatrix"),tt.setOptional(T,N,"bindMatrixInverse");let bt=N.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(T,"boneTexture",bt.boneTexture,be))}N.isBatchedMesh&&(tt.setOptional(T,N,"batchingTexture"),tt.setValue(T,"batchingTexture",N._matricesTexture,be),tt.setOptional(T,N,"batchingIdTexture"),tt.setValue(T,"batchingIdTexture",N._indirectTexture,be),tt.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(T,"batchingColorTexture",N._colorsTexture,be));let Ii=z.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&je.update(N,z,Dt),(wt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,tt.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Xt.envMap.value=Pe,Xt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Xt.envMapIntensity.value=I.environmentIntensity),wt&&(tt.setValue(T,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&ch(Xt,Ni),ie&&V.fog===!0&&xe.refreshFogUniforms(Xt,ie),xe.refreshMaterialUniforms(Xt,V,Q,G,m.state.transmissionRenderTarget[y.id]),Ba.upload(T,Li(Le),Xt,be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ba.upload(T,Li(Le),Xt,be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tt.setValue(T,"center",N.center),tt.setValue(T,"modelViewMatrix",N.modelViewMatrix),tt.setValue(T,"normalMatrix",N.normalMatrix),tt.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let bt=V.uniformsGroups;for(let Ui=0,hr=bt.length;Ui<hr;Ui++){let Xs=bt[Ui];$e.update(Xs,Dt),$e.bind(Xs,Dt)}}return Dt}function ch(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function uh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,z){ue.get(y.texture).__webglTexture=I,ue.get(y.depthTexture).__webglTexture=z;let V=ue.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let z=ue.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){A=y,F=I,R=z;let V=!0,N=null,ie=!1,Se=!1;if(y){let Re=ue.get(y);if(Re.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)be.setupRenderTarget(y);else if(Re.__hasExternalTextures)be.rebindTextures(y,ue.get(y.texture).__webglTexture,ue.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let We=y.depthTexture;if(Re.__boundDepthTexture!==We){if(We!==null&&ue.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(y)}}let Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);let ke=ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?N=ke[I][z]:N=ke[I],ie=!0):y.samples>0&&be.useMultisampledRTT(y)===!1?N=ue.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[z]:N=ke,S.copy(y.viewport),C.copy(y.scissor),O=y.scissorTest}else S.copy(de).multiplyScalar(Q).floor(),C.copy(Oe).multiplyScalar(Q).floor(),O=Ve;if(te.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&te.drawBuffers(y,N),te.viewport(S),te.scissor(C),te.setScissorTest(O),ie){let Re=ue.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,z)}else if(Se){let Re=ue.get(y.texture),Pe=I||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,Pe)}U=-1},this.readRenderTargetPixels=function(y,I,z,V,N,ie,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){te.bindFramebuffer(T.FRAMEBUFFER,Re);try{let Pe=y.texture,ke=Pe.format,We=Pe.type;if(!_e.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-V&&z>=0&&z<=y.height-N&&T.readPixels(I,z,V,N,Be.convert(ke),Be.convert(We),ie)}finally{let Pe=A!==null?ue.get(A).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,I,z,V,N,ie,Se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){let Pe=y.texture,ke=Pe.format,We=Pe.type;if(!_e.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-V&&z>=0&&z<=y.height-N){te.bindFramebuffer(T.FRAMEBUFFER,Re);let Ue=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.bufferData(T.PIXEL_PACK_BUFFER,ie.byteLength,T.STREAM_READ),T.readPixels(I,z,V,N,Be.convert(ke),Be.convert(We),0);let Ke=A!==null?ue.get(A).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,Ke);let rt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await mc(T,rt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ie),T.deleteBuffer(Ue),T.deleteSync(rt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,z=0){y.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let V=Math.pow(2,-z),N=Math.floor(y.image.width*V),ie=Math.floor(y.image.height*V),Se=I!==null?I.x:0,Re=I!==null?I.y:0;be.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,Se,Re,N,ie),te.unbindTexture()},this.copyTextureToTexture=function(y,I,z=null,V=null,N=0){y.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],I=arguments[2],N=arguments[3]||0,z=null);let ie,Se,Re,Pe,ke,We,Ue,Ke,rt,it=y.isCompressedTexture?y.mipmaps[N]:y.image;z!==null?(ie=z.max.x-z.min.x,Se=z.max.y-z.min.y,Re=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,ke=z.min.y,We=z.isBox3?z.min.z:0):(ie=it.width,Se=it.height,Re=it.depth||1,Pe=0,ke=0,We=0),V!==null?(Ue=V.x,Ke=V.y,rt=V.z):(Ue=0,Ke=0,rt=0);let ht=Be.convert(I.format),at=Be.convert(I.type),Le;I.isData3DTexture?(be.setTexture3D(I,0),Le=T.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(be.setTexture2DArray(I,0),Le=T.TEXTURE_2D_ARRAY):(be.setTexture2D(I,0),Le=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let br=T.getParameter(T.UNPACK_ROW_LENGTH),wr=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Dt=T.getParameter(T.UNPACK_SKIP_PIXELS),kr=T.getParameter(T.UNPACK_SKIP_ROWS),wt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,it.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,it.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,ke),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);let Ni=y.isDataArrayTexture||y.isData3DTexture,tt=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let Xt=ue.get(y),Ii=ue.get(I),bt=ue.get(Xt.__renderTarget),Ui=ue.get(Ii.__renderTarget);te.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let hr=0;hr<Re;hr++)Ni&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(y).__webglTexture,N,We+hr),y.isDepthTexture?(tt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(I).__webglTexture,N,rt+hr),T.blitFramebuffer(Pe,ke,ie,Se,Ue,Ke,ie,Se,T.DEPTH_BUFFER_BIT,T.NEAREST)):tt?T.copyTexSubImage3D(Le,N,Ue,Ke,rt+hr,Pe,ke,ie,Se):T.copyTexSubImage2D(Le,N,Ue,Ke,rt+hr,Pe,ke,ie,Se);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else tt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Le,N,Ue,Ke,rt,ie,Se,Re,ht,at,it.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(Le,N,Ue,Ke,rt,ie,Se,Re,ht,it.data):T.texSubImage3D(Le,N,Ue,Ke,rt,ie,Se,Re,ht,at,it):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Ue,Ke,ie,Se,ht,at,it.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Ue,Ke,it.width,it.height,ht,it.data):T.texSubImage2D(T.TEXTURE_2D,N,Ue,Ke,ie,Se,ht,at,it);T.pixelStorei(T.UNPACK_ROW_LENGTH,br),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wr),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,kr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt),N===0&&I.generateMipmaps&&T.generateMipmap(Le),te.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z=null,V=null,N=0){return y.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,z,V,N)},this.initRenderTarget=function(y){ue.get(y).__webglFramebuffer===void 0&&be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?be.setTextureCube(y,0):y.isData3DTexture?be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?be.setTexture2DArray(y,0):be.setTexture2D(y,0),te.unbindTexture()},this.resetState=function(){F=0,R=0,A=null,te.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}},Rl=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cl=class extends zt{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let h=r[i],c=r[i+1]-h,u=(n-h)/c;return(i+u)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new fe:new P);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new P,i=[],a=[],n=[],s=new P,o=new lt;for(let d=0;d<=e;d++){let f=d/e;i[d]=this.getTangentAt(f,new P)}a[0]=new P,n[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),u<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(i[d-1],i[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(pt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,f))}n[d].crossVectors(i[d],a[d])}if(t===!0){let d=Math.acos(pt(a[0].dot(a[e]),-1,1));d/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(i[f],d*f)),n[f].crossVectors(i[f],a[f])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rs=class extends Gt{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new fe){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cm=class extends Rs{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Cs(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,f*=c,a(s,o,d,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var Ha=new P,Ps=new Cs,Ls=new Cs,Ns=new Cs,Pm=class extends Gt{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new P){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=i[(s-1)%a]:(Ha.subVectors(i[0],i[1]).add(i[0]),l=Ha);let c=i[s%a],u=i[(s+1)%a];if(this.closed||s+2<a?h=i[(s+2)%a]:(Ha.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),Ps.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,f,v,g),Ls.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,f,v,g),Ns.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,f,v,g)}else this.curveType==="catmullrom"&&(Ps.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Ls.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Ns.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return r.set(Ps.calc(o),Ls.calc(o),Ns.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pl(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function Lm(e,t){let r=1-e;return r*r*t}function Nm(e,t){return 2*(1-e)*e*t}function Im(e,t){return e*e*t}function Yi(e,t,r,i){return Lm(e,t)+Nm(e,r)+Im(e,i)}function Um(e,t){let r=1-e;return r*r*r*t}function Dm(e,t){let r=1-e;return 3*r*r*e*t}function Om(e,t){return 3*(1-e)*e*e*t}function Fm(e,t){return e*e*e*t}function Zi(e,t,r,i,a){return Um(e,t)+Dm(e,r)+Om(e,i)+Fm(e,a)}var Ll=class extends Gt{constructor(e=new fe,t=new fe,r=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new fe){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Zi(e,i.x,a.x,n.x,s.x),Zi(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zm=class extends Gt{constructor(e=new P,t=new P,r=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new P){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(Zi(e,i.x,a.x,n.x,s.x),Zi(e,i.y,a.y,n.y,s.y),Zi(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Gt{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bm=class extends Gt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends Gt{constructor(e=new fe,t=new fe,r=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new fe){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Yi(e,i.x,a.x,n.x),Yi(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends Gt{constructor(e=new P,t=new P,r=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new P){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(Yi(e,i.x,a.x,n.x),Yi(e,i.y,a.y,n.y),Yi(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends Gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],h=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(Pl(s,o.x,l.x,h.x,c.x),Pl(s,o.y,l.y,h.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new fe().fromArray(i))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Cm,CatmullRomCurve3:Pm,CubicBezierCurve:Ll,CubicBezierCurve3:zm,EllipseCurve:Rs,LineCurve:Nl,LineCurve3:Bm,QuadraticBezierCurve:Il,QuadraticBezierCurve3:Ul,SplineCurve:Dl}),Vm=class extends Gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];r&&r.equals(h)||(t.push(h),r=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Ga[i.type]().fromJSON(i))}return this}},ka=class extends Vm{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Nl(this.currentPoint.clone(),new fe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new Il(this.currentPoint.clone(),new fe(e,t),new fe(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new Ll(this.currentPoint.clone(),new fe(e,t),new fe(r,i),new fe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Dl(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new Rs(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Si=class nh extends yr{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],f=[],v=0,g=[],m=i/2,p=0;w(),s===!1&&(t>0&&x(!0),r>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function w(){let E=new P,F=new P,R=0,A=(r-t)/i;for(let U=0;U<=n;U++){let M=[],S=U/n,C=S*(r-t)+t;for(let O=0;O<=a;O++){let B=O/a,H=B*l+o,j=Math.sin(H),G=Math.cos(H);F.x=C*j,F.y=-S*i+m,F.z=C*G,u.push(F.x,F.y,F.z),E.set(j,A,G).normalize(),d.push(E.x,E.y,E.z),f.push(B,1-S),M.push(v++)}g.push(M)}for(let U=0;U<a;U++)for(let M=0;M<n;M++){let S=g[M][U],C=g[M+1][U],O=g[M+1][U+1],B=g[M][U+1];(t>0||M!==0)&&(c.push(S,C,B),R+=3),(r>0||M!==n-1)&&(c.push(C,O,B),R+=3)}h.addGroup(p,R,0),p+=R}function x(E){let F=v,R=new fe,A=new P,U=0,M=E===!0?t:r,S=E===!0?1:-1;for(let O=1;O<=a;O++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),v++;let C=v;for(let O=0;O<=a;O++){let B=O/a*l+o,H=Math.cos(B),j=Math.sin(B);A.x=M*j,A.y=m*S,A.z=M*H,u.push(A.x,A.y,A.z),d.push(0,S,0),R.x=H*.5+.5,R.y=j*.5*S+.5,f.push(R.x,R.y),v++}for(let O=0;O<a;O++){let B=F+O,H=C+O;E===!0?c.push(H,H+1,B):c.push(H+1,H,B),U+=3}h.addGroup(p,U,E===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hr=class extends ka{constructor(e){super(e),this.uuid=Lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new ka().fromJSON(i))}return this}},Hm={triangulate:function(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=Ol(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,c,u,d,f;if(i&&(n=jm(e,t,n,r)),e.length>80*r){o=h=e[0],l=c=e[1];for(let v=r;v<a;v+=r)u=e[v],d=e[v+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return Ji(n,s,r,o,l,f,0),s}};function Ol(e,t,r,i,a){let n,s;if(a===ig(e,t,r,i)>0)for(n=t;n<r;n+=i)s=Bl(n,e[n],e[n+1],s);else for(n=r-i;n>=t;n-=i)s=Bl(n,e[n],e[n+1],s);return s&&Wa(s,s.next)&&($i(s),s=s.next),s}function Gr(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Wa(r,r.next)||nt(r.prev,r,r.next)===0)){if($i(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function Ji(e,t,r,i,a,n,s){if(!e)return;!s&&n&&Km(e,i,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?km(e,i,a,n):Gm(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(h.i/r|0),$i(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=Wm(Gr(e),t,r),Ji(e,t,r,i,a,n,2)):s===2&&Xm(e,t,r,i,a,n):Ji(Gr(e),t,r,i,a,n,1);break}}}function Gm(e){let t=e.prev,r=e,i=e.next;if(nt(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,h=i.y,c=a<n?a<s?a:s:n<s?n:s,u=o<l?o<h?o:h:l<h?l:h,d=a>n?a>s?a:s:n>s?n:s,f=o>l?o>h?o:h:l>h?l:h,v=i.next;for(;v!==t;){if(v.x>=c&&v.x<=d&&v.y>=u&&v.y<=f&&Ei(a,o,n,l,s,h,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function km(e,t,r,i){let a=e.prev,n=e,s=e.next;if(nt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,f=o<l?o<h?o:h:l<h?l:h,v=c<u?c<d?c:d:u<d?u:d,g=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,p=Is(f,v,t,r,i),w=Is(g,m,t,r,i),x=e.prevZ,E=e.nextZ;for(;x&&x.z>=p&&E&&E.z<=w;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=m&&x!==a&&x!==s&&Ei(o,c,l,u,h,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=f&&E.x<=g&&E.y>=v&&E.y<=m&&E!==a&&E!==s&&Ei(o,c,l,u,h,d,E.x,E.y)&&nt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=m&&x!==a&&x!==s&&Ei(o,c,l,u,h,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=w;){if(E.x>=f&&E.x<=g&&E.y>=v&&E.y<=m&&E!==a&&E!==s&&Ei(o,c,l,u,h,d,E.x,E.y)&&nt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Wm(e,t,r){let i=e;do{let a=i.prev,n=i.next.next;!Wa(a,n)&&Fl(a,i,i.next,n)&&Ki(a,n)&&Ki(n,a)&&(t.push(a.i/r|0),t.push(i.i/r|0),t.push(n.i/r|0),$i(i),$i(i.next),i=e=n),i=i.next}while(i!==e);return Gr(i)}function Xm(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&eg(s,o)){let l=zl(s,o);s=Gr(s,s.next),l=Gr(l,l.next),Ji(s,t,r,i,a,n,0),Ji(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function jm(e,t,r,i){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,h=Ol(e,o,l,i,!1),h===h.next&&(h.steiner=!0),a.push(Qm(h));for(a.sort(qm),n=0;n<a.length;n++)r=Ym(a[n],r);return r}function qm(e,t){return e.x-t.x}function Ym(e,t){let r=Zm(e,t);if(!r)return t;let i=zl(r,e);return Gr(i,i.next),Gr(r,r.next)}function Zm(e,t){let r=t,i=-1/0,a,n=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=n&&d>i&&(i=d,a=r.x<r.next.x?r:r.next,d===n))return a}r=r.next}while(r!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&Ei(s<h?n:i,s,l,h,s<h?i:n,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(n-r.x),Ki(r,e)&&(u<c||u===c&&(r.x>a.x||r.x===a.x&&Jm(a,r)))&&(a=r,c=u)),r=r.next;while(r!==o);return a}function Jm(e,t){return nt(e.prev,e,t.prev)<0&&nt(t.next,e,e.next)<0}function Km(e,t,r,i){let a=e;do a.z===0&&(a.z=Is(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,$m(a)}function $m(e){let t,r,i,a,n,s,o,l,h=1;do{for(r=e,e=null,n=null,s=0;r;){for(s++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(a=r,r=r.nextZ,o--):(a=i,i=i.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=i}n.nextZ=null,h*=2}while(s>1);return e}function Is(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Qm(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Ei(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function eg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!tg(e,t)&&(Ki(e,t)&&Ki(t,e)&&rg(e,t)&&(nt(e.prev,e,t.prev)||nt(e,t.prev,t))||Wa(e,t)&&nt(e.prev,e,e.next)>0&&nt(t.prev,t,t.next)>0)}function nt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Wa(e,t){return e.x===t.x&&e.y===t.y}function Fl(e,t,r,i){let a=ja(nt(e,t,r)),n=ja(nt(e,t,i)),s=ja(nt(r,i,e)),o=ja(nt(r,i,t));return!!(a!==n&&s!==o||a===0&&Xa(e,r,t)||n===0&&Xa(e,i,t)||s===0&&Xa(r,e,i)||o===0&&Xa(r,t,i))}function Xa(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function ja(e){return e>0?1:e<0?-1:0}function tg(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Fl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Ki(e,t){return nt(e.prev,e,e.next)<0?nt(e,t,e.next)>=0&&nt(e,e.prev,t)>=0:nt(e,t,e.prev)<0||nt(e,e.next,t)<0}function rg(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function zl(e,t){let r=new Us(e.i,e.x,e.y),i=new Us(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function Bl(e,t,r,i){let a=new Us(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function $i(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Us(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ig(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Ds=class sh{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return sh.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];Vl(t),Hl(i,t);let s=t.length;r.forEach(Vl);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,Hl(i,r[l]);let o=Hm.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Vl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Hl(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var Qi=class oh extends yr{constructor(t=new Hr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new St(a,3)),this.setAttribute("uv",new St(n,2)),this.computeVertexNormals();function s(o){let l=[],h=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,u=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,v=r.bevelSize!==void 0?r.bevelSize:f-.1,g=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,p=r.extrudePath,w=r.UVGenerator!==void 0?r.UVGenerator:ag,x,E=!1,F,R,A,U;p&&(x=p.getSpacedPoints(c),E=!0,d=!1,F=p.computeFrenetFrames(c,!1),R=new P,A=new P,U=new P),d||(m=0,f=0,v=0,g=0);let M=o.extractPoints(h),S=M.shape,C=M.holes;if(!Ds.isClockWise(S)){S=S.reverse();for(let Z=0,ae=C.length;Z<ae;Z++){let T=C[Z];Ds.isClockWise(T)&&(C[Z]=T.reverse())}}let O=Ds.triangulateShape(S,C),B=S;for(let Z=0,ae=C.length;Z<ae;Z++){let T=C[Z];S=S.concat(T)}function H(Z,ae,T){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ae,T)}let j=S.length,G=O.length;function Q(Z,ae,T){let ve,$,_e,te=Z.x-ae.x,De=Z.y-ae.y,ue=T.x-Z.x,be=T.y-Z.y,b=te*te+De*De,_=te*be-De*ue;if(Math.abs(_)>Number.EPSILON){let D=Math.sqrt(b),Y=Math.sqrt(ue*ue+be*be),J=ae.x-De/D,W=ae.y+te/D,xe=T.x-be/Y,oe=T.y+ue/Y,ye=((xe-J)*be-(oe-W)*ue)/(te*be-De*ue);ve=J+te*ye-Z.x,$=W+De*ye-Z.y;let Fe=ve*ve+$*$;if(Fe<=2)return new fe(ve,$);_e=Math.sqrt(Fe/2)}else{let D=!1;te>Number.EPSILON?ue>Number.EPSILON&&(D=!0):te<-Number.EPSILON?ue<-Number.EPSILON&&(D=!0):Math.sign(De)===Math.sign(be)&&(D=!0),D?(ve=-De,$=te,_e=Math.sqrt(b)):(ve=te,$=De,_e=Math.sqrt(b/2))}return new fe(ve/_e,$/_e)}let k=[];for(let Z=0,ae=B.length,T=ae-1,ve=Z+1;Z<ae;Z++,T++,ve++)T===ae&&(T=0),ve===ae&&(ve=0),k[Z]=Q(B[Z],B[T],B[ve]);let se=[],de,Oe=k.concat();for(let Z=0,ae=C.length;Z<ae;Z++){let T=C[Z];de=[];for(let ve=0,$=T.length,_e=$-1,te=ve+1;ve<$;ve++,_e++,te++)_e===$&&(_e=0),te===$&&(te=0),de[ve]=Q(T[ve],T[_e],T[te]);se.push(de),Oe=Oe.concat(de)}for(let Z=0;Z<m;Z++){let ae=Z/m,T=f*Math.cos(ae*Math.PI/2),ve=v*Math.sin(ae*Math.PI/2)+g;for(let $=0,_e=B.length;$<_e;$++){let te=H(B[$],k[$],ve);Te(te.x,te.y,-T)}for(let $=0,_e=C.length;$<_e;$++){let te=C[$];de=se[$];for(let De=0,ue=te.length;De<ue;De++){let be=H(te[De],de[De],ve);Te(be.x,be.y,-T)}}}let Ve=v+g;for(let Z=0;Z<j;Z++){let ae=d?H(S[Z],Oe[Z],Ve):S[Z];E?(A.copy(F.normals[0]).multiplyScalar(ae.x),R.copy(F.binormals[0]).multiplyScalar(ae.y),U.copy(x[0]).add(A).add(R),Te(U.x,U.y,U.z)):Te(ae.x,ae.y,0)}for(let Z=1;Z<=c;Z++)for(let ae=0;ae<j;ae++){let T=d?H(S[ae],Oe[ae],Ve):S[ae];E?(A.copy(F.normals[Z]).multiplyScalar(T.x),R.copy(F.binormals[Z]).multiplyScalar(T.y),U.copy(x[Z]).add(A).add(R),Te(U.x,U.y,U.z)):Te(T.x,T.y,u/c*Z)}for(let Z=m-1;Z>=0;Z--){let ae=Z/m,T=f*Math.cos(ae*Math.PI/2),ve=v*Math.sin(ae*Math.PI/2)+g;for(let $=0,_e=B.length;$<_e;$++){let te=H(B[$],k[$],ve);Te(te.x,te.y,u+T)}for(let $=0,_e=C.length;$<_e;$++){let te=C[$];de=se[$];for(let De=0,ue=te.length;De<ue;De++){let be=H(te[De],de[De],ve);E?Te(be.x,be.y+x[c-1].y,x[c-1].x+T):Te(be.x,be.y,u+T)}}}q(),ne();function q(){let Z=a.length/3;if(d){let ae=0,T=j*ae;for(let ve=0;ve<G;ve++){let $=O[ve];le($[2]+T,$[1]+T,$[0]+T)}ae=c+m*2,T=j*ae;for(let ve=0;ve<G;ve++){let $=O[ve];le($[0]+T,$[1]+T,$[2]+T)}}else{for(let ae=0;ae<G;ae++){let T=O[ae];le(T[2],T[1],T[0])}for(let ae=0;ae<G;ae++){let T=O[ae];le(T[0]+j*c,T[1]+j*c,T[2]+j*c)}}i.addGroup(Z,a.length/3-Z,0)}function ne(){let Z=a.length/3,ae=0;Ae(B,ae),ae+=B.length;for(let T=0,ve=C.length;T<ve;T++){let $=C[T];Ae($,ae),ae+=$.length}i.addGroup(Z,a.length/3-Z,1)}function Ae(Z,ae){let T=Z.length;for(;--T>=0;){let ve=T,$=T-1;$<0&&($=Z.length-1);for(let _e=0,te=c+m*2;_e<te;_e++){let De=j*_e,ue=j*(_e+1),be=ae+ve+De,b=ae+$+De,_=ae+$+ue,D=ae+ve+ue;we(be,b,_,D)}}}function Te(Z,ae,T){l.push(Z),l.push(ae),l.push(T)}function le(Z,ae,T){He(Z),He(ae),He(T);let ve=a.length/3,$=w.generateTopUV(i,a,ve-3,ve-2,ve-1);Ie($[0]),Ie($[1]),Ie($[2])}function we(Z,ae,T,ve){He(Z),He(ae),He(ve),He(ae),He(T),He(ve);let $=a.length/3,_e=w.generateSideWallUV(i,a,$-6,$-3,$-2,$-1);Ie(_e[0]),Ie(_e[1]),Ie(_e[3]),Ie(_e[1]),Ie(_e[2]),Ie(_e[3])}function He(Z){a.push(l[Z*3+0]),a.push(l[Z*3+1]),a.push(l[Z*3+2])}function Ie(Z){n.push(Z.x),n.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return ng(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Ga[a.type]().fromJSON(a)),new oh(i,t.options)}},ag={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],h=t[a*3],c=t[a*3+1];return[new fe(n,s),new fe(o,l),new fe(h,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[a*3],f=t[a*3+1],v=t[a*3+2],g=t[n*3],m=t[n*3+1],p=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new fe(s,1-l),new fe(h,1-u),new fe(d,1-v),new fe(g,1-p)]:[new fe(o,1-l),new fe(c,1-u),new fe(f,1-v),new fe(m,1-p)]}};function ng(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var sg=class lh extends yr{constructor(t=new Ul(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),r=64,i=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:r,radius:i,radialSegments:a,closed:n};let s=t.computeFrenetFrames(r,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new P,l=new P,h=new fe,c=new P,u=[],d=[],f=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function g(){for(let x=0;x<r;x++)m(x);m(n===!1?r:0),w(),p()}function m(x){c=t.getPointAt(x/r,c);let E=s.normals[x],F=s.binormals[x];for(let R=0;R<=a;R++){let A=R/a*Math.PI*2,U=Math.sin(A),M=-Math.cos(A);l.x=M*E.x+U*F.x,l.y=M*E.y+U*F.y,l.z=M*E.z+U*F.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=r;x++)for(let E=1;E<=a;E++){let F=(a+1)*(x-1)+(E-1),R=(a+1)*x+(E-1),A=(a+1)*x+E,U=(a+1)*(x-1)+E;v.push(F,R,U),v.push(R,A,U)}}function w(){for(let x=0;x<=r;x++)for(let E=0;E<=a;E++)h.x=x/r,h.y=E/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lh(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Os=class extends Xi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ut=class extends Os{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function qa(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function og(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ya=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lg=class extends Ya{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:co,endingEnd:co}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case uo:a=e,s=2*t-r;break;case po:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case uo:n=e,o=2*r-t;break;case po:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(r-t)/(i-t),v=f*f,g=v*f,m=-u*g+2*u*v-u*f,p=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*f+1,w=(-1-d)*g+(1.5+d)*v+.5*f,x=d*g-d*v;for(let E=0;E!==s;++E)a[E]=m*n[h+E]+p*n[l+E]+w*n[o+E]+x*n[c+E];return a}},hg=class extends Ya{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(r-t)/(i-t),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},cg=class extends Ya{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},lr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case jn:t=this.InterpolantFactoryMethodLinear;break;case qn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return qn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&og(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===qn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,u=c-r,d=c+r;for(let f=0;f!==r;++f){let v=t[c+f];if(v!==t[u+f]||v!==t[d+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,u=n*r;for(let d=0;d!==r;++d)t[u+d]=t[c+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};lr.prototype.TimeBufferType=Float32Array,lr.prototype.ValueBufferType=Float32Array,lr.prototype.DefaultInterpolation=jn;var ea=class extends lr{constructor(e,t,r){super(e,t,r)}};ea.prototype.ValueTypeName="bool",ea.prototype.ValueBufferType=Array,ea.prototype.DefaultInterpolation=ma,ea.prototype.InterpolantFactoryMethodLinear=void 0,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ug=class extends lr{};ug.prototype.ValueTypeName="color";var dg=class extends lr{};dg.prototype.ValueTypeName="number";var pg=class extends Ya{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let h=l+s;l!==h;l+=4)ii.slerpFlat(a,0,n,l-s,n,l,o);return a}},Gl=class extends lr{InterpolantFactoryMethodLinear(e){return new pg(this.times,this.values,this.getValueSize(),e)}};Gl.prototype.ValueTypeName="quaternion",Gl.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends lr{constructor(e,t,r){super(e,t,r)}};ta.prototype.ValueTypeName="string",ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=ma,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var fg=class extends lr{};fg.prototype.ValueTypeName="vector";var mg=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){s++,a===!1&&i.onStart!==void 0&&i.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,i.onProgress!==void 0&&i.onProgress(h,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null}}},gg=new mg,vg=class{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vg.DEFAULT_MATERIAL_NAME="__DEFAULT";var kl=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fs=new lt,Wl=new P,Xl=new P,jl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ql=new lt,ra=new P,zs=new P,_g=class extends jl{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),r.position.copy(ra),zs.copy(r.position),zs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(zs),r.updateMatrixWorld(),i.makeTranslation(-ra.x,-ra.y,-ra.z),ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}},xg=class extends kl{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new _g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yg=class extends jl{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mg=class extends kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new yg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bs="\\[\\]\\.:\\/",Sg=new RegExp("["+Bs+"]","g"),Vs="[^"+Bs+"]",Eg="[^"+Bs.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",Vs),bg=/(WCOD+)?/.source.replace("WCOD",Eg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vs),Ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vs),Rg=new RegExp("^"+Tg+bg+wg+Ag+"$"),Cg=["material","materials","bones","map"],Pg=class{constructor(e,t,r){let i=r||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},st=class wi{constructor(t,r,i){this.path=r,this.parsedPath=i||wi.parseTrackName(r),this.node=wi.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new wi.Composite(t,r,i):new wi(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let r=Rg.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);Cg.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=wi.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Pg,st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);var Lg=class extends Rl{constructor(){super();let e=new mi;e.deleteAttribute("uv");let t=new Os({side:gt}),r=new Os,i=new xg(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new Xe(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let n=new Xe(e,r);n.position.set(-10.906,2.009,1.846),n.rotation.set(0,-.195,0),n.scale.set(2.328,7.905,4.651),this.add(n);let s=new Xe(e,r);s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),this.add(s);let o=new Xe(e,r);o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),this.add(o);let l=new Xe(e,r);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Xe(e,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let c=new Xe(e,r);c.position.set(-2.193,-.369,-5.547),c.rotation.set(0,.516,0),c.scale.set(3.875,3.487,2.986),this.add(c);let u=new Xe(e,Ti(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let d=new Xe(e,Ti(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let f=new Xe(e,Ti(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let v=new Xe(e,Ti(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let g=new Xe(e,Ti(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Xe(e,Ti(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ti(e){let t=new pi;return t.color.setScalar(e),t}var Za=6.4,Yl=8.5,Tt=5,vt=-24.5,kt=30,Wt=5,Hs=-Za,ia=[9,14.5,20,25.5,31],aa=[-3,-3.9,-2.6,-3.5,-2.9],Ja=Wt+1,Gs=.9,Zl=-.6,Jt=(e,t,r)=>(r=yo.clamp((r-e)/(t-e),0,1),r*r*(3-2*r)),ks=(e,t,r)=>e+(t-e)*r;function Ng(e){let t=new Hr,r=Math.asin(Tt/Yl);if(t.absarc(0,0,Yl,-Math.PI/2+r,Math.PI*1.5-r,!1),t.lineTo(-Tt,vt+3),t.quadraticCurveTo(-Tt,vt,-Tt+3,vt),t.lineTo(Tt-3,vt),t.quadraticCurveTo(Tt,vt,Tt,vt+3),t.closePath(),e){let i=new ka;i.absarc(0,0,e,0,Math.PI*2,!0),t.holes.push(i)}return t}function Jl(e,t,r=.5){let i=new Qi(e,{depth:t,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:4,curveSegments:48});return i.translate(0,0,-t/2),i.rotateY(Math.PI/2),i.computeVertexNormals(),i}function Ig(e,t){let r=new Rm({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.captura});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.outputColorSpace=At,r.toneMapping=$s,r.toneMappingExposure=.95,r.localClippingEnabled=!0,e.appendChild(r.domElement);let i=new Rl,a=new Es(r);i.environment=a.fromScene(new Lg,.035).texture;let n=new Mg(16777215,1.4);n.position.set(40,80,60),i.add(n);let s=new Er(new P(0,0,-1),60),o=[s],l=document.createElement("canvas");l.width=512,l.height=512;let h=l.getContext("2d");h.fillStyle="#7a7a7a",h.fillRect(0,0,512,512);for(let ce=0;ce<2600;ce++){let Ce=Math.random()*512,Me=100+Math.random()*70|0;h.fillStyle=`rgba(${Me},${Me},${Me},.35)`,h.fillRect(0,Ce,512,.6+Math.random())}let c=new Cl(l);c.wrapS=c.wrapT=la,c.repeat.set(.02,.06);let u=new Ut({roughnessMap:c,bumpMap:c,bumpScale:.02,color:12172738,metalness:1,roughness:.3,clearcoat:.15,clearcoatRoughness:.4,clippingPlanes:o}),d=new Ut({color:14267228,metalness:1,roughness:.24,clippingPlanes:o}),f=new Ut({color:14672611,metalness:1,roughness:.18}),v=new Ut({color:10199979,metalness:1,roughness:.34}),g=new Ut({color:7305087,metalness:1,roughness:.38,clippingPlanes:o}),m=new Ut({color:11186874,metalness:1,roughness:.25}),p=new Ut({color:2369581,metalness:0,roughness:.42,clearcoat:.6,clearcoatRoughness:.35}),w=new Ut({color:11120823,metalness:.85,roughness:.42,side:gt,clippingPlanes:o}),x=new Ut({color:13081157,metalness:.9,roughness:.36,side:gt,clippingPlanes:o}),E=new pi({color:16765802,transparent:!0,opacity:0}),F=new It;i.add(F);let R=new It;F.add(R);let A=Jl(Ng(Za+.05),kt-1),U=[-1,1].map(ce=>{let Ce=new It;return Ce.add(new Xe(A,u),new Xe(A,w)),Ce.position.x=ce*(Wt+kt/2),R.add(Ce),Ce}),M=new Hr;M.moveTo(-Tt,vt+2.5),M.quadraticCurveTo(-Tt,vt,-Tt+2.5,vt),M.lineTo(Tt-2.5,vt),M.quadraticCurveTo(Tt,vt,Tt,vt+2.5),M.lineTo(Tt,vt+7),M.lineTo(-Tt,vt+7),M.closePath();let S=new It,C=Jl(M,Wt*2+2,.3);S.add(new Xe(C,u),new Xe(C,w)),R.add(S);let O=new Xe(new Si(2.1,2.1,10.4,32,1,!0),new Ut({color:3817800,metalness:1,roughness:.5,side:jt}));O.rotation.x=Math.PI/2,O.position.set(0,vt+3.6,0),S.add(O);let B=new Si(Za,Za,kt+.2,64);B.rotateZ(Math.PI/2);let H=[-1,1].map(ce=>{let Ce=new It;Ce.position.x=ce*(Wt+kt/2),Ce.add(new Xe(B,d),new Xe(B,x));let Me=new Xe(new mi(.4,7.6,2.5),new pi({color:855825}));return Me.position.set(ce*(kt/2+.12),-.4,0),Ce.add(Me),R.add(Ce),Ce}),j=new Hr;j.absarc(0,0,7.6,-Math.PI*.32,Math.PI*1.32,!1),j.lineTo(-3.2,-14.2),j.quadraticCurveTo(0,-16.4,3.2,-14.2),j.closePath();let G=new Qi(j,{depth:Wt*2-1.4,bevelEnabled:!0,bevelThickness:.3,bevelSize:.3,bevelSegments:3,curveSegments:40});G.translate(0,0,-(Wt*2-1.4)/2),G.rotateY(Math.PI/2);let Q=new It;Q.add(new Xe(G,g)),R.add(Q);let k=new It;U[1].add(k);let se=new Si(1.35,1.35,1,24,1,!0),de=new Si(1.35,1.35,.01,24),Oe=new Si(.62,.62,1,20),Ve=new Si(1.35,1.35,3.2,24);class q extends Gt{getPoint(Ce,Me=new P){let Ne=Ce*Math.PI*2*7;return Me.set(Math.cos(Ne)*1,-Ce,Math.sin(Ne)*1)}}let ne=new sg(new q,220,.2,6,!1),Ae=aa.map(ce=>ce-Hs),Te=ia.map((ce,Ce)=>{let Me={x:ce-(Wt+kt/2)};return Me.sleeve=new Xe(se,f),Me.cap=new Xe(de,f),Me.inner=new Xe(Oe,v),Me.drv=new Xe(Ve,v),Me.spr=new Xe(ne,m),[Me.sleeve,Me.cap,Me.inner,Me.drv,Me.spr].forEach(Ne=>{Ne.position.x=Me.x,k.add(Ne)}),Me.len=Ae[Ce],Me}),le=new Xe(new mi(kt-2,.16,.16),E);le.position.set(0,Hs,.2),H[1].add(le);let we=new Hr,He=0,Ie=Wt+kt+4-Ja;we.moveTo(He,-1.2),we.lineTo(He+Gs,-3.8),ia.forEach((ce,Ce)=>{let Me=ce-Ja;we.lineTo(Me-1.9,-3.95),we.lineTo(Me-.6,aa[Ce]),we.lineTo(Me+.6,aa[Ce]),we.lineTo(Me+1.9,-3.95)}),we.lineTo(Ie,-3.95),we.lineTo(Ie,3.4),we.lineTo(He+4,3.4),we.lineTo(He,1.4),we.closePath();let Z=new Qi(we,{depth:2.1,bevelEnabled:!0,bevelThickness:.18,bevelSize:.18,bevelSegments:2,curveSegments:4});Z.translate(0,0,-1.05);let ae=new It;ae.add(new Xe(Z,new Ut({color:15001315,metalness:1,roughness:.26,clearcoat:.2})));let T=new Hr,ve=22,$=24,_e=7;T.moveTo(0,-$/2+_e),T.quadraticCurveTo(0,-$/2,_e,-$/2),T.lineTo(ve-_e,-$/2),T.quadraticCurveTo(ve,-$/2,ve,-$/2+_e),T.lineTo(ve,$/2-_e),T.quadraticCurveTo(ve,$/2,ve-_e,$/2),T.lineTo(_e,$/2),T.quadraticCurveTo(0,$/2,0,$/2-_e),T.closePath();let te=new ka;te.absarc(ve-7,0,3.2,0,Math.PI*2,!0),T.holes.push(te);let De=new Qi(T,{depth:5.2,bevelEnabled:!0,bevelThickness:1.2,bevelSize:1.2,bevelSegments:6,curveSegments:32});De.translate(Ie-2,0,-2.6),ae.add(new Xe(De,p));let ue=new Hr;ue.moveTo(3,-8),ue.lineTo(9,-8),ue.quadraticCurveTo(11,-8,11,-6),ue.lineTo(11,6),ue.quadraticCurveTo(11,8,9,8),ue.lineTo(3,8),ue.quadraticCurveTo(1.5,8,1.5,6),ue.lineTo(1.5,-6),ue.quadraticCurveTo(1.5,-8,3,-8);let be=new Qi(ue,{depth:.3,bevelEnabled:!1,curveSegments:12}),b=new Ut({color:3883336,metalness:0,roughness:.85});[3.85,-4.15].forEach(ce=>{let Ce=new Xe(be,b);Ce.position.set(Ie-.5,0,ce),ae.add(Ce)}),R.add(ae);function _(ce,Ce){let Me=ce-Ce;if(Me<0||Me>Ie)return null;if(Me<Gs)return ks(-1.2,-3.8,Me/Gs);for(let Ne=0;Ne<ia.length;Ne++){let _t=ia[Ne]-Ja;if(Math.abs(Me-_t)<1.9){let mt=Math.abs(Me-_t);return mt<.6?aa[Ne]:ks(aa[Ne],-3.95,(mt-.6)/1.3)}}return-3.95}let D=document.createElement("canvas");D.width=D.height=256;let Y=D.getContext("2d"),J=Y.createRadialGradient(128,128,2,128,128,127);J.addColorStop(0,"rgba(10,16,24,.50)"),J.addColorStop(.35,"rgba(10,16,24,.22)"),J.addColorStop(.7,"rgba(10,16,24,.06)"),J.addColorStop(1,"rgba(10,16,24,0)"),Y.fillStyle=J,Y.fillRect(0,0,256,256);let W=new Xe(new vs(130,40),new pi({map:new Cl(D),transparent:!0,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.y=vt-1.2,F.add(W);let xe=new Pt(26,1,1,2e3),oe={a:[new P(78,56,176),new P(14,-8,0)],b:[new P(22,-6,225),new P(22,-6,0)],c:[new P(-70,48,185),new P(4,-8,0)],d:[new P(165,44,128),new P(20,-8,0)]},ye=new P,Fe=new P,re=new ai,me=new P,je=new P;function ze(){re.setFromObject(R),xe.updateMatrixWorld();let ce=Math.tan(yo.degToRad(xe.fov/2))*.9,Ce=ce*xe.aspect,Me=0;for(let Ne=0;Ne<8;Ne++)me.set(Ne&1?re.max.x:re.min.x,Ne&2?re.max.y:re.min.y,Ne&4?re.max.z:re.min.z),me.applyMatrix4(xe.matrixWorldInverse),Me=Math.max(Me,Math.abs(me.x)/Ce+me.z,Math.abs(me.y)/ce+me.z);xe.getWorldDirection(je),xe.position.addScaledVector(je,-Me)}function Ee(ce){let Ce=Jt(.16,.3,ce),Me=Jt(.5,.62,ce),Ne=Jt(.76,.86,ce);ye.copy(oe.a[0]).lerp(oe.b[0],Ce).lerp(oe.c[0],Me).lerp(oe.d[0],Ne),Fe.copy(oe.a[1]).lerp(oe.b[1],Ce).lerp(oe.c[1],Me).lerp(oe.d[1],Ne),xe.position.copy(ye),xe.lookAt(Fe)}function Be(ce){Ee(ce);let Ce=Jt(.18,.28,ce)*(1-Jt(.32,.46,ce)),Me=Jt(.52,.62,ce)*(1-Jt(.72,.8,ce)),Ne=Ja+40*Ce+26*Me;ae.position.x=Ne;let _t=Jt(.24,.34,ce)*(1-Jt(.5,.58,ce));s.constant=ks(60,.02,_t),U[0].position.x=-(Wt+kt/2)-14*Me,U[1].position.x=Wt+kt/2+14*Me,H[0].position.x=U[0].position.x-6*Me,H[1].position.x=U[1].position.x+6*Me,H[0].position.y=H[1].position.y=0,S.position.y=-8*Me;let mt=Jt(.86,.99,ce)*Math.PI*2;ae.rotation.x=mt,H[1].rotation.x=mt,Q.rotation.x=mt,ae.position.x=Ne+(H[1].position.x-(Wt+kt/2));let Ai=!0;Te.forEach((ot,Ri)=>{let na=ia[Ri]+0,Ci=_(na,Ne),Kt=Math.min(Zl,Ci===null?Zl:Ci),Pi=Kt-ot.len;Math.abs(Pi-Hs)>.05&&(Ai=!1),ot.sleeve.scale.y=ot.len,ot.sleeve.position.y=Kt-ot.len/2,ot.cap.position.y=Kt,ot.inner.scale.y=ot.len+.5,ot.inner.position.y=Kt+.25-(ot.len+.5)/2;let Tr=Pi-1.6;ot.drv.position.y=Tr;let Li=Tr-1.6,sa=vt+2.4;ot.spr.position.y=Li,ot.spr.scale.y=Li-sa}),E.opacity=Ai&&_t>.6?.95:0,k.visible=_t>.002,(Ce>0||Me>0)&&ze()}let Ge=0,$e=0;function L(){let ce=e.getBoundingClientRect();ce.width===Ge&&ce.height===$e||(Ge=ce.width,$e=ce.height,r.setSize(Ge,$e,!1),r.domElement.style.width="100%",r.domElement.style.height="100%",xe.aspect=Ge/Math.max($e,1),xe.fov=xe.aspect<1.1?30/Math.max(xe.aspect,.6):26,xe.updateProjectionMatrix())}let ee=t.progreso(),X=0,K=!0;function ge(){if(X=0,!K)return;L();let ce=t.progreso();ee+=(ce-ee)*.22,Math.abs(ce-ee)<8e-4&&(ee=ce),W.material.opacity=t.tema()==="dark"?.55:1,Be(ee),r.render(i,xe),ee!==ce&&(X=requestAnimationFrame(ge))}function he(){X||(X=requestAnimationFrame(ge))}return L(),Be(ee),r.render(i,xe),{pintar:he,parar(){K=!1,r.dispose()},lienzo:r.domElement}}export{Ig as montar};
