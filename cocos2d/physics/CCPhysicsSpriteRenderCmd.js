/****************************************************************************
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

cc.PhysicsSprite.CanvasRenderCmd = function(renderableObject){
    cc.Node.CanvasRenderCmd.call(this, renderableObject);
    this._needDraw = true;
};

cc.PhysicsSprite.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
cc.PhysicsSprite.CanvasRenderCmd.prototype.constructor = cc.PhysicsSprite.CanvasRenderCmd;

cc.PhysicsSprite.CanvasRenderCmd.prototype.rendering = function(){
    if (this._node.transform)
        this._node.transform();
};

cc.PhysicsSprite.WebGLRenderCmd = function(renderableObject){
    cc.Node.CanvasRenderCmd.call(this, renderableObject);
    this._needDraw = true;
};

cc.PhysicsSprite.WebGLRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
cc.PhysicsSprite.WebGLRenderCmd.prototype.constructor = cc.PhysicsSprite.WebGLRenderCmd;

cc.PhysicsSprite.WebGLRenderCmd.prototype.rendering = function(){
    if(this._node._transformForRenderer)
        this._node._transformForRenderer();
};

