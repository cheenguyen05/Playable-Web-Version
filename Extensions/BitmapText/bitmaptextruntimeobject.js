var gdjs;(function(i){class r extends i.RuntimeObject{constructor(t,e){super(t,e);this._opacity=e.content.opacity,this._text=e.content.text,this._tint=i.rgbOrHexToRGBColor(e.content.tint),this._bitmapFontResourceName=e.content.bitmapFontResourceName,this._textureAtlasResourceName=e.content.textureAtlasResourceName,this._scaleX=e.content.scale,this._scaleY=e.content.scale,this._wordWrap=e.content.wordWrap,this._wrappingWidth=0,this._align=e.content.align,this._renderer=new i.BitmapTextRuntimeObjectRenderer(this,t),this.onCreated()}getRendererObject(){return this._renderer.getRendererObject()}updateFromObjectData(t,e){return t.content.opacity!==e.content.opacity&&this.setOpacity(e.content.opacity),t.content.text!==e.content.text&&this.setText(e.content.text),t.content.tint!==e.content.tint&&(this._tint=i.rgbOrHexToRGBColor(e.content.tint),this._renderer.updateTint()),t.content.bitmapFontResourceName!==e.content.bitmapFontResourceName&&this.setBitmapFontResourceName(e.content.bitmapFontResourceName),t.content.textureAtlasResourceName!==e.content.textureAtlasResourceName&&this.setTextureAtlasResourceName(e.content.textureAtlasResourceName),t.content.scale!==e.content.scale&&this.setScale(e.content.scale),t.content.wordWrap!==e.content.wordWrap&&this.setWordWrap(e.content.wordWrap),t.content.align!==e.content.align&&this.setAlignment(e.content.align),!0}getNetworkSyncData(){return{...super.getNetworkSyncData(),text:this._text,opa:this._opacity,tint:this._tint,bfrn:this._bitmapFontResourceName,tarn:this._textureAtlasResourceName,scale:this.getScale(),wwrap:this._wordWrap,wwidth:this._wrappingWidth,align:this._align}}updateFromNetworkSyncData(t){super.updateFromNetworkSyncData(t),this._text!==void 0&&this.setText(t.text),this._opacity!==void 0&&this.setOpacity(t.opa),this._tint!==void 0&&(this._tint=t.tint,this._renderer.updateTint()),this._bitmapFontResourceName!==void 0&&this.setBitmapFontResourceName(t.bfrn),this._textureAtlasResourceName!==void 0&&this.setTextureAtlasResourceName(t.tarn),this._scaleX!==void 0&&this.setScale(t.scale),this._wordWrap!==void 0&&this.setWordWrap(t.wwrap),this._wrappingWidth!==void 0&&this.setWrappingWidth(t.wwidth),this._align!==void 0&&this.setAlignment(t.align)}extraInitializationFromInitialInstance(t){t.customSize&&this.setWrappingWidth(t.width),t.opacity!==void 0&&this.setOpacity(t.opacity)}onDestroyed(){super.onDestroyed(),this._renderer.onDestroy()}setText(t){this._text=t,this._renderer.updateTextContent(),this.invalidateHitboxes()}getText(){return this._text}setTint(t){this._tint=i.rgbOrHexToRGBColor(t),this._renderer.updateTint()}getTint(){return this._tint[0]+";"+this._tint[1]+";"+this._tint[2]}getScale(){const t=this.getScaleX(),e=this.getScaleY();return t===e?t:Math.sqrt(t*e)}getScaleX(){return this._scaleX}getScaleY(){return this._scaleY}setScale(t){this.setScaleX(t),this.setScaleY(t)}setScaleX(t){t<0&&(t=0),this._scaleX!==t&&(this._scaleX=t,this._renderer.updateScale(),this.invalidateHitboxes())}setScaleY(t){t<0&&(t=0),this._scaleY!==t&&(this._scaleY=t,this._renderer.updateScale(),this.invalidateHitboxes())}getFontSize(){return this._renderer.getFontSize()}setBitmapFontAndTextureAtlasResourceName(t,e){t&&(this.setBitmapFontResourceName(t),this._renderer.updateFont()),e&&(this.setTextureAtlasResourceName(e),this._renderer.updateFont())}setBitmapFontResourceName(t){this._bitmapFontResourceName=t}getBitmapFontResourceName(){return this._bitmapFontResourceName}setTextureAtlasResourceName(t){this._textureAtlasResourceName=t}getTextureAtlasResourceName(){return this._textureAtlasResourceName}setAlignment(t){this._align=t,this._renderer.updateAlignment()}getAlignment(){return this._align}setX(t){super.setX(t),this._renderer.updatePosition()}setY(t){super.setY(t),this._renderer.updatePosition()}setAngle(t){super.setAngle(t),this._renderer.updateAngle()}setOpacity(t){t<0&&(t=0),t>255&&(t=255),this._opacity=t,this._renderer.updateOpacity()}getOpacity(){return this._opacity}setWrappingWidth(t){this._wrappingWidth=t,this._renderer.updateWrappingWidth(),this.invalidateHitboxes()}getWrappingWidth(){return this._wrappingWidth}setWordWrap(t){this._wordWrap=t,this._renderer.updateWrappingWidth(),this.invalidateHitboxes()}getWordWrap(){return this._wordWrap}getWidth(){return this._renderer.getWidth()}getHeight(){return this._renderer.getHeight()}}i.BitmapTextRuntimeObject=r,i.registerObject("BitmapText::BitmapTextObject",i.BitmapTextRuntimeObject)})(gdjs||(gdjs={}));
//# sourceMappingURL=bitmaptextruntimeobject.js.map
