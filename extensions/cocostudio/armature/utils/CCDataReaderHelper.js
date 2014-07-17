/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
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

/**
 * @ignore
 */
ccs.CONST_VERSION = "version";
ccs.CONST_VERSION_2_0 = 2.0;
//ccs.CONST_VERSION_COMBINED = 0.3;

ccs.CONST_ARMATURES = "armatures";
ccs.CONST_ARMATURE = "armature";
ccs.CONST_BONE = "b";
ccs.CONST_DISPLAY = "d";

ccs.CONST_ANIMATIONS = "animations";
ccs.CONST_ANIMATION = "animation";
ccs.CONST_MOVEMENT = "mov";
ccs.CONST_FRAME = "f";

ccs.CONST_TEXTURE_ATLAS = "TextureAtlas";
ccs.CONST_SUB_TEXTURE = "SubTexture";

ccs.CONST_SKELETON = "skeleton";

ccs.CONST_A_NAME = "name";
ccs.CONST_A_DURATION = "dr";
ccs.CONST_A_FRAME_INDEX = "fi";
ccs.CONST_A_DURATION_TO = "to";
ccs.CONST_A_DURATION_TWEEN = "drTW";
ccs.CONST_A_LOOP = "lp";
ccs.CONST_A_MOVEMENT_SCALE = "sc";
ccs.CONST_A_MOVEMENT_DELAY = "dl";
ccs.CONST_A_DISPLAY_INDEX = "dI";

ccs.CONST_A_PLIST = "plist";

ccs.CONST_A_PARENT = "parent";
ccs.CONST_A_SKEW_X = "kX";
ccs.CONST_A_SKEW_Y = "kY";
ccs.CONST_A_SCALE_X = "cX";
ccs.CONST_A_SCALE_Y = "cY";
ccs.CONST_A_Z = "z";
ccs.CONST_A_EVENT = "evt";
ccs.CONST_A_SOUND = "sd";
ccs.CONST_A_SOUND_EFFECT = "sdE";
ccs.CONST_A_TWEEN_EASING = "twE";
ccs.CONST_A_EASING_PARAM = "twEP";
ccs.CONST_A_TWEEN_ROTATE = "twR";
ccs.CONST_A_IS_ARMATURE = "isArmature";
ccs.CONST_A_DISPLAY_TYPE = "displayType";
ccs.CONST_A_MOVEMENT = "mov";

ccs.CONST_A_X = "x";
ccs.CONST_A_Y = "y";

ccs.CONST_A_COCOS2DX_X = "cocos2d_x";
ccs.CONST_A_COCOS2DX_Y = "cocos2d_y";

ccs.CONST_A_WIDTH = "width";
ccs.CONST_A_HEIGHT = "height";
ccs.CONST_A_PIVOT_X = "pX";
ccs.CONST_A_PIVOT_Y = "pY";

ccs.CONST_A_COCOS2D_PIVOT_X = "cocos2d_pX";
ccs.CONST_A_COCOS2D_PIVOT_Y = "cocos2d_pY";

ccs.CONST_A_BLEND_TYPE = "bd";
ccs.CONST_A_BLEND_SRC = "bd_src";
ccs.CONST_A_BLEND_DST = "bd_dst";

ccs.CONST_A_ALPHA = "a";
ccs.CONST_A_RED = "r";
ccs.CONST_A_GREEN = "g";
ccs.CONST_A_BLUE = "b";
ccs.CONST_A_ALPHA_OFFSET = "aM";
ccs.CONST_A_RED_OFFSET = "rM";
ccs.CONST_A_GREEN_OFFSET = "gM";
ccs.CONST_A_BLUE_OFFSET = "bM";
ccs.CONST_A_COLOR_TRANSFORM = "colorTransform";
ccs.CONST_A_TWEEN_FRAME = "tweenFrame";

ccs.CONST_CONTOUR = "con";
ccs.CONST_CONTOUR_VERTEX = "con_vt";

ccs.CONST_FL_NAN = "NaN";

ccs.CONST_FRAME_DATA = "frame_data";
ccs.CONST_MOVEMENT_BONE_DATA = "mov_bone_data";
ccs.CONST_MOVEMENT_DATA = "mov_data";
ccs.CONST_ANIMATION_DATA = "animation_data";
ccs.CONST_DISPLAY_DATA = "display_data";
ccs.CONST_SKIN_DATA = "skin_data";
ccs.CONST_BONE_DATA = "bone_data";
ccs.CONST_ARMATURE_DATA = "armature_data";
ccs.CONST_CONTOUR_DATA = "contour_data";
ccs.CONST_TEXTURE_DATA = "texture_data";
ccs.CONST_VERTEX_POINT = "vertex";
ccs.CONST_COLOR_INFO = "color";

ccs.CONST_CONFIG_FILE_PATH = "config_file_path";
ccs.CONST_CONTENT_SCALE = "content_scale";

/**
 * @ignore
 * @constructor
 */
ccs.DataInfo = function () {
    this.asyncStruct = null;
    this.configFileQueue = [];
    this.contentScale = 1;
    this.filename = "";
    this.baseFilePath = "";
    this.flashToolVersion = 0;
    this.cocoStudioVersion = 0
};

/**
 * CocoStudio data reader helper
 * @namespace
 * @name ccs.dataReaderHelper
 */
ccs.dataReaderHelper = /** @lends ccs.dataReaderHelper# */{

    ConfigType: {
        DragonBone_XML: 0,
        CocoStudio_JSON: 1,
        CocoStudio_Binary: 2
    },

    _configFileList: [],
    _flashToolVersion: ccs.CONST_VERSION_2_0,
    _cocoStudioVersion: ccs.CONST_VERSION_COMBINED,
    _positionReadScale: 1,
    _asyncRefCount: 0,
    _asyncRefTotalCount: 0,

    _dataQueue: null,

    //LoadData don't need

    setPositionReadScale: function (scale) {
        this._positionReadScale = scale;
    },

    getPositionReadScale: function () {
        return this._positionReadScale;
    },

    addDataFromFile: function (filePath) {

        /*
         * Check if file is already added to ArmatureDataManager, if then return.
         */
        if (this._configFileList.indexOf(filePath) != -1) {
            return;
        }
        this._configFileList.push(filePath);

        //! find the base file path
        var basefilePath = this._initBaseFilePath(filePath);

        // Read content from file
        // Here the reader into the next process

        var str = cc.path.extname(filePath).toLowerCase();

        var dataInfo = new ccs.DataInfo();
        dataInfo.filename = filePath;
        dataInfo.basefilePath = basefilePath;
        if (str == ".xml") {
            ccs.dataReaderHelper.addDataFromXML(filePath, dataInfo);
        }
        else if (str == ".json" || str == ".exportjson") {
            ccs.dataReaderHelper.addDataFromJson(filePath, dataInfo);
        }
        else if(str == ".csb"){
            ccs.dataReaderHelper.addDataFromBinaryCache(filePath, dataInfo);
        }

    },

    addDataFromFileAsync: function (imagePath, plistPath, filePath, target, selector) {
        /*
         * Check if file is already added to ArmatureDataManager, if then return.
         */
        if (this._configFileList.indexOf(filePath) != -1) {
            if (target && selector) {
                if (this._asyncRefTotalCount == 0 && this._asyncRefCount == 0)
//                    this._asyncCallBack(target, selector, 1);
                    target.selector(1);
                else
//                    this._asyncCallBack(target, selector, (this._asyncRefTotalCount - this._asyncRefCount) / this._asyncRefTotalCount);
                    target.selector((this._asyncRefTotalCount - this._asyncRefCount) / this._asyncRefTotalCount);
            }
            return;
        }
        this._configFileList.push(filePath);

        //! find the base file path
//        var basefilePath = this._initBaseFilePath(filePath);

        this._asyncRefTotalCount++;
        this._asyncRefCount++;
        var self = this;
        var fun = function () {
            self.addDataFromFile(filePath);
            self._asyncRefCount--;
            self._asyncCallBack(target, selector, (self._asyncRefTotalCount - self._asyncRefCount) / self._asyncRefTotalCount);
        };
        cc.director.getScheduler().scheduleCallbackForTarget(this, fun, 0.1, false);
    },

    /*
    addDataAsyncCallBack: function(dt){
        //TODO
        // the data is generated in loading thread
        var dataQueue = this._dataQueue;

        _dataInfoMutex.lock();
        if (dataQueue.empty())
        {
            _dataInfoMutex.unlock();
        }
        else
        {
            DataInfo *pDataInfo = dataQueue.front();
            dataQueue.pop();
            _dataInfoMutex.unlock();

            AsyncStruct *pAsyncStruct = pDataInfo.asyncStruct;


            if (pAsyncStruct.imagePath != "" && pAsyncStruct.plistPath != "")
            {
                _getFileMutex.lock();
                ArmatureDataManager::getInstance().addSpriteFrameFromFile(pAsyncStruct.plistPath.c_str(), pAsyncStruct.imagePath.c_str(), pDataInfo.filename.c_str());
                _getFileMutex.unlock();
            }

            while (!pDataInfo.configFileQueue.empty())
            {
                std::string configPath = pDataInfo.configFileQueue.front();
                _getFileMutex.lock();
                ArmatureDataManager::getInstance().addSpriteFrameFromFile((pAsyncStruct.baseFilePath + configPath + ".plist").c_str(), (pAsyncStruct.baseFilePath + configPath + ".png").c_str(),pDataInfo.filename.c_str());
                _getFileMutex.unlock();
                pDataInfo.configFileQueue.pop();
            }


            Ref* target = pAsyncStruct.target;
            SEL_SCHEDULE selector = pAsyncStruct.selector;

            --_asyncRefCount;

            if (target && selector)
            {
                (target.*selector)((_asyncRefTotalCount - _asyncRefCount) / (float)_asyncRefTotalCount);
                target.release();
            }


            delete pAsyncStruct;
            delete pDataInfo;

            if (0 == _asyncRefCount)
            {
                _asyncRefTotalCount = 0;
                Director::getInstance().getScheduler().unschedule(schedule_selector(DataReaderHelper::addDataAsyncCallBack), this);
            }
        }
    },
    */

    removeConfigFile: function (configFile) {
//        cc.arrayRemoveObject(this._configFileList, configFile);
        var len = this._configFileList.length;
        var it = this._configFileList[len];
        for (var i = 0;i<len; i++)
        {
            if (this._configFileList[i] == configFile)
            {
                it = i;
            }
        }

        if (it != this._configFileList[len])
        {
            cc.arrayRemoveObject(this._configFileList, configFile);
        }

    },

    addDataFromCache: function (skeleton, dataInfo) {

        if (!skeleton) {
            cc.log("XML error  or  XML is empty.");
            return;
        }
        dataInfo.flashToolVersion = parseFloat(skeleton.getAttribute(ccs.CONST_VERSION));

        /*
         * Begin decode armature data from xml
         */
        var armaturesXML = skeleton.querySelectorAll(ccs.CONST_SKELETON + " > " + ccs.CONST_ARMATURES + " >  " + ccs.CONST_ARMATURE + "");
        var armatureDataManager = ccs.armatureDataManager;
        for (var i = 0; i < armaturesXML.length; i++) {
            var armatureData = this.decodeArmature(armaturesXML[i], dataInfo);
            armatureDataManager.addArmatureData(armatureData.name, armatureData, dataInfo.filename);
        }

        /*
         * Begin decode animation data from xml
         */
        var animationsXML = skeleton.querySelectorAll(ccs.CONST_SKELETON + " > " + ccs.CONST_ANIMATIONS + " >  " + ccs.CONST_ANIMATION + "");
        for (var i = 0; i < animationsXML.length; i++) {
            var animationData = this.decodeAnimation(animationsXML[i], dataInfo);
            armatureDataManager.addAnimationData(animationData.name, animationData, dataInfo.filename);
        }

        var texturesXML = skeleton.querySelectorAll(ccs.CONST_SKELETON + " > " + ccs.CONST_TEXTURE_ATLAS + " >  " + ccs.CONST_SUB_TEXTURE + "");
        for (var i = 0; i < texturesXML.length; i++) {
            var textureData = this.decodeTexture(texturesXML[i], dataInfo);
            armatureDataManager.addTextureData(textureData.name, textureData, dataInfo.filename);
        }

    },

    decodeArmature: function (armatureXML, dataInfo) {
        var armatureData = new ccs.ArmatureData();
        armatureData.init();

        var name = armatureXML.getAttribute(ccs.CONST_A_NAME);
        armatureData.name = name;

        var bonesXML = armatureXML.querySelectorAll(ccs.CONST_ARMATURE + " > " + ccs.CONST_BONE);

        for (var i = 0; i < bonesXML.length; i++) {
            /*
             *  If this bone have parent, then get the parent bone xml
             */
            var boneXML = bonesXML[i];
            var parentName = boneXML.getAttribute(ccs.CONST_A_PARENT);
            var parentXML = null;
            if (parentName) {
                //parentXML = armatureXML.querySelectorAll(ccs.CONST_ARMATURE+" > "+ccs.CONST_BONE);
                for (var j = 0; j < bonesXML.length; j++) {
                    parentXML = bonesXML[j];
                    if (parentName == bonesXML[j].getAttribute(ccs.CONST_A_NAME)) {
                        //todo
                        break;
                    }
                }
            }
            var boneData = this.decodeBone(boneXML, parentXML, dataInfo);
            armatureData.addBoneData(boneData);
        }
        return armatureData;
    },

    decodeArmatureFromJSON: function (json, dataInfo) {
        var armatureData = new ccs.ArmatureData();
        armatureData.init();

        var name = json[ccs.CONST_A_NAME];
        if (name) {
            armatureData.name = name;
        }

        dataInfo.cocoStudioVersion = armatureData.dataVersion = json[ccs.CONST_VERSION] || 0.1;

        var boneDataList = json[ccs.CONST_BONE_DATA];
        for (var i = 0; i < boneDataList.length; i++) {
            var boneData = this.decodeBoneFromJson(boneDataList[i], dataInfo);
            armatureData.addBoneData(boneData);
        }
        return armatureData;
    },

    decodeBone: function (boneXML, parentXML, dataInfo) {
        var boneData = new ccs.BoneData();
        boneData.init();

        var name = boneXML.getAttribute(ccs.CONST_A_NAME);
        boneData.name = name;

        boneData.parentName = boneXML.getAttribute(ccs.CONST_A_PARENT) || "";

        boneData.zOrder = parseInt(boneXML.getAttribute(ccs.CONST_A_Z)) || 0;

        var displaysXML = boneXML.querySelectorAll(ccs.CONST_BONE + " > " + ccs.CONST_DISPLAY);
        for (var i = 0; i < displaysXML.length; i++) {
            var displayXML = displaysXML[i];
            var displayData = this.decodeBoneDisplay(displayXML, dataInfo);
            boneData.addDisplayData(displayData);
        }
        return boneData;
    },

    decodeBoneFromJson: function (json, dataInfo) {
        var boneData = new ccs.BoneData();
        boneData.init();

        this.decodeNodeFromJson(boneData, json, dataInfo);

        boneData.name = json[ccs.CONST_A_NAME] || "";

        boneData.parentName = json[ccs.CONST_A_PARENT] || "";
        var displayDataList = json[ccs.CONST_DISPLAY_DATA] || [];
        for (var i = 0; i < displayDataList.length; i++) {
            var locDisplayData = this.decodeBoneDisplayFromJson(displayDataList[i], dataInfo);
            boneData.addDisplayData(locDisplayData);
        }
        return boneData;
    },

    decodeBoneDisplay: function (displayXML, dataInfo) {

        var isArmature = parseFloat(displayXML.getAttribute(ccs.CONST_A_IS_ARMATURE)) || 0;
        var displayData = null;

        if (isArmature == 1) {
            displayData = new ccs.ArmatureDisplayData();
            displayData.displayType = ccs.DISPLAY_TYPE_ARMATURE;
        }
        else {
            displayData = new ccs.SpriteDisplayData();
            displayData.displayType = ccs.DISPLAY_TYPE_SPRITE;
        }

        var displayName = displayXML.getAttribute(ccs.CONST_A_NAME) || "";
        if (displayName) {
            displayData.displayName = displayName;
        }
        return displayData;
    },

    decodeBoneDisplayFromJson: function (json, dataInfo) {
        var displayType = json[ccs.CONST_A_DISPLAY_TYPE] || ccs.DISPLAY_TYPE_SPRITE;
        var displayData = null;

        switch (displayType) {
            case ccs.DISPLAY_TYPE_SPRITE:
                displayData = new ccs.SpriteDisplayData();

                displayData.displayName = json[ccs.CONST_A_NAME] || "";

                var dicArray = json[ccs.CONST_SKIN_DATA] || [];
                var dic = dicArray[0];
                if (dic) {
                    var skinData = displayData.skinData;
                    skinData.x = (dic[ccs.CONST_A_X] || 0) * this._positionReadScale;
                    skinData.y = (dic[ccs.CONST_A_Y] || 0) * this._positionReadScale;
                    skinData.scaleX = dic[ccs.CONST_A_SCALE_X] || 1;
                    skinData.scaleY = dic[ccs.CONST_A_SCALE_Y] || 1;
                    skinData.skewX = dic[ccs.CONST_A_SKEW_X] || 1;
                    skinData.skewY = dic[ccs.CONST_A_SKEW_Y] || 1;

                    skinData.x *= dataInfo.contentScale;
                    skinData.y *= dataInfo.contentScale;
                }
                break;
            case ccs.DISPLAY_TYPE_ARMATURE:
                displayData = new ccs.ArmatureDisplayData();
                displayData.displayName = json[ccs.CONST_A_NAME] || "";
                break;
            case ccs.DISPLAY_TYPE_PARTICLE:
                displayData = new ccs.ParticleDisplayData();
                displayData.displayName = dataInfo.basefilePath + json[ccs.CONST_A_PLIST] || "";
                break;
            default:
                displayData = new ccs.SpriteDisplayData();
                break;
        }

        displayData.displayType = displayType;

        return displayData;
    },

    decodeAnimation: function (animationXML, dataInfo) {
        var aniData = new ccs.AnimationData();

        var name = animationXML.getAttribute(ccs.CONST_A_NAME);

        var armatureData = ccs.armatureDataManager.getArmatureData(name);

        aniData.name = name;

        var movementsXML = animationXML.querySelectorAll(ccs.CONST_ANIMATION + " > " + ccs.CONST_MOVEMENT);
        var movementXML = null;

        for (var i = 0; i < movementsXML.length; i++) {
            movementXML = movementsXML[i];
            var movementData = this.decodeMovement(movementXML, armatureData, dataInfo);
            aniData.addMovement(movementData);
        }
        return aniData;
    },

    decodeAnimationFromJson: function (json, dataInfo) {
        var aniData = new ccs.AnimationData();

        var name = json[ccs.CONST_A_NAME];
        if(name){
            aniData.name = json[ccs.CONST_A_NAME];
        }

        var movementDataList = json[ccs.CONST_MOVEMENT_DATA] || [];
        for (var i = 0; i < movementDataList.length; i++) {
            var locMovementData = this.decodeMovementFromJson(movementDataList[i], dataInfo);
            aniData.addMovement(locMovementData);
        }
        return aniData;
    },

    decodeMovement: function (movementXML, armatureData, dataInfo) {
        var movementData = new ccs.MovementData();

        var movName = movementXML.getAttribute(ccs.CONST_A_NAME);
        movementData.name = movName;

        var duration, durationTo, durationTween, loop, tweenEasing = 0;

        duration = parseFloat(movementXML.getAttribute(ccs.CONST_A_DURATION)) || 0;
        movementData.duration = duration;

        durationTo = parseFloat(movementXML.getAttribute(ccs.CONST_A_DURATION_TO)) || 0;
        movementData.durationTo = durationTo;

        durationTween = parseFloat(movementXML.getAttribute(ccs.CONST_A_DURATION_TWEEN)) || 0;
        movementData.durationTween = durationTween;

        loop = movementXML.getAttribute(ccs.CONST_A_LOOP);
        movementData.loop = loop ? Boolean(parseFloat(loop)) : true;

        var easing = movementXML.getAttribute(ccs.CONST_A_TWEEN_EASING);
        if (easing) {
            if (easing != ccs.CONST_FL_NAN) {
                tweenEasing = parseFloat(easing) || 0;
                movementData.tweenEasing = tweenEasing == 2 ? ccs.TweenType.sineEaseInOut : tweenEasing;
            } else {
                movementData.tweenEasing = ccs.TweenType.linear;
            }
        }

        var movBonesXml = movementXML.querySelectorAll(ccs.CONST_MOVEMENT + " > " + ccs.CONST_BONE);
        var movBoneXml = null;
        for (var i = 0; i < movBonesXml.length; i++) {
            movBoneXml = movBonesXml[i];
            var boneName = movBoneXml.getAttribute(ccs.CONST_A_NAME);

            if (movementData.getMovementBoneData(boneName)) {
                continue;
            }

            var boneData = armatureData.getBoneData(boneName);
            var parentName = boneData.parentName;

            var parentXML = null;
            if (parentName != "") {
                for (var j = 0; j < movBonesXml.length; j++) {
                    parentXML = movBonesXml[j];
                    if (parentName == parentXML.getAttribute(ccs.CONST_A_NAME)) {
                        break;
                    }
                }
            }
            var moveBoneData = this.decodeMovementBone(movBoneXml, parentXML, boneData, dataInfo);
            movementData.addMovementBoneData(moveBoneData);
        }
        return movementData;
    },

    decodeMovementFromJson: function (json, dataInfo) {
        var movementData = new ccs.MovementData();

        movementData.loop = json[ccs.CONST_A_LOOP] || false;
        movementData.durationTween = json[ccs.CONST_A_DURATION_TWEEN] || 0;
        movementData.durationTo = json[ccs.CONST_A_DURATION_TO] || 0;
        movementData.duration = json[ccs.CONST_A_DURATION] || 0;

        if(json[ccs.CONST_A_DURATION]){
            movementData.scale = 1;
        }else{
            movementData.scale = json[ccs.CONST_A_MOVEMENT_SCALE] || 1;
        }

        movementData.tweenEasing = json[ccs.CONST_A_TWEEN_EASING] || ccs.TweenType.linear;
        var name = json[ccs.CONST_A_NAME];
        if(name){
            movementData.name = name;
        }

        var movementBoneList = json[ccs.CONST_MOVEMENT_BONE_DATA] || [];
        for (var i = 0; i < movementBoneList.length; i++) {
            var locMovementBoneData = this.decodeMovementBoneFromJson(movementBoneList[i], dataInfo);
            movementData.addMovementBoneData(locMovementBoneData);
        }
        return movementData;
    },

    decodeMovementBone: function (movBoneXml, parentXml, boneData, dataInfo) {
        var movBoneData = new ccs.MovementBoneData();
        movBoneData.init();

        var scale, delay;

        if (movBoneXml) {
            scale = parseFloat(movBoneXml.getAttribute(ccs.CONST_A_MOVEMENT_SCALE)) || 0;
            movBoneData.scale = scale;

            delay = parseFloat(movBoneXml.getAttribute(ccs.CONST_A_MOVEMENT_DELAY)) || 0;
            if (delay > 0) {
                delay -= 1;
            }
            movBoneData.delay = delay;
        }

        var length = 0;
        var parentTotalDuration = 0;
        var currentDuration = 0;
        var parentFrameXML = null;
        var parentXMLList = [];

        /*
         *  get the parent frame xml list, we need get the origin data
         */
        if (parentXml != null) {
            var parentFramesXML = parentXml.querySelectorAll(ccs.CONST_BONE + " > " + ccs.CONST_FRAME);
            for (var i = 0; i < parentFramesXML.length; i++) {
                parentXMLList.push(parentFramesXML[i]);
            }
            length = parentXMLList.length;
        }


        var totalDuration = 0;

        var name = movBoneXml.getAttribute(ccs.CONST_A_NAME);

        movBoneData.name = name;

        var framesXML = movBoneXml.querySelectorAll(ccs.CONST_BONE + " > " + ccs.CONST_FRAME);

        var j = 0;
        for (var ii = 0; ii < framesXML.length; ii++) {
            var frameXML = framesXML[ii];
            if (parentXml) {
                /*
                 *  in this loop we get the corresponding parent frame xml
                 */
                while (j < length && (parentFrameXML ? (totalDuration < parentTotalDuration || totalDuration >= parentTotalDuration + currentDuration) : true)) {
                    parentFrameXML = parentXMLList[j];
                    parentTotalDuration += currentDuration;
                    currentDuration = parseFloat(parentFrameXML.getAttribute(ccs.CONST_A_DURATION));
                    j++;
                }
            }
            var frameData = this.decodeFrame(frameXML, parentFrameXML, boneData, dataInfo);
            movBoneData.addFrameData(frameData);
            frameData.frameID = totalDuration;
            totalDuration += frameData.duration;
            movBoneData.duration = totalDuration;
        }

        //Change rotation range from (-180 -- 180) to (-infinity -- infinity)
        var frames = movBoneData.frameList;
        var pi = Math.PI;
        for (var i = frames.length - 1; i >= 0; i--) {
            if (i > 0) {
                var difSkewX = frames[i].skewX - frames[i - 1].skewX;
                var difSkewY = frames[i].skewY - frames[i - 1].skewY;

                if (difSkewX < -pi || difSkewX > pi) {
                    frames[i - 1].skewX = difSkewX < 0 ? frames[i - 1].skewX - 2 * pi : frames[i - 1].skewX + 2 * pi;
                }

                if (difSkewY < -pi || difSkewY > pi) {
                    frames[i - 1].skewY = difSkewY < 0 ? frames[i - 1].skewY - 2 * pi : frames[i - 1].skewY + 2 * pi;
                }
            }
        }

        var frameData = new ccs.FrameData();
        frameData.copy(movBoneData.frameList[movBoneData.frameList.length - 1]);
        frameData.frameID = movBoneData.duration;
        movBoneData.addFrameData(frameData);
        return movBoneData;
    },

    decodeMovementBoneFromJson: function (json, dataInfo) {
        var movementBoneData = new ccs.MovementBoneData();
        movementBoneData.init();

        movementBoneData.delay = json[ccs.CONST_A_MOVEMENT_DELAY] || 0;

        var name = json[ccs.CONST_A_NAME];
        if(name){
            movementBoneData.name = name;
        }

        var length = json[ccs.CONST_FRAME_DATA] || [];
        for (var i = 0; i < length; i++)
        {
            var dic = json[ccs.CONST_FRAME_DATA][i];
            var frameData = this.decodeFrame(dic, dataInfo);
            movementBoneData.addFrameData(frameData);

            if (dataInfo.cocoStudioVersion < ccs.CONST_VERSION_COMBINED)
            {
                frameData.frameID = movementBoneData.duration;
                movementBoneData.duration += frameData.duration;
            }
        }

        if (dataInfo.cocoStudioVersion < ccs.VERSION_CHANGE_ROTATION_RANGE) {
            //! Change rotation range from (-180 -- 180) to (-infinity -- infinity)
            var frames = movementBoneData.frameList;
            var pi = Math.PI;
            for (var i = frames.length - 1; i >= 0; i--) {
                if (i > 0) {
                    var difSkewX = frames[i].skewX - frames[i - 1].skewX;
                    var difSkewY = frames[i].skewY - frames[i - 1].skewY;

                    if (difSkewX < -pi || difSkewX > pi) {
                        frames[i - 1].skewX = difSkewX < 0 ? frames[i - 1].skewX - 2 * pi : frames[i - 1].skewX + 2 * pi;
                    }

                    if (difSkewY < -pi || difSkewY > pi) {
                        frames[i - 1].skewY = difSkewY < 0 ? frames[i - 1].skewY - 2 * pi : frames[i - 1].skewY + 2 * pi;
                    }
                }
            }
        }

        if (dataInfo.cocoStudioVersion < ccs.CONST_VERSION_COMBINED) {
            if (movementBoneData.frameList.length > 0) {
                var frameData = new ccs.FrameData();
                frameData.copy(movementBoneData.frameList[movementBoneData.frameList.length - 1]);
                movementBoneData.addFrameData(frameData);
                frameData.frameID = movementBoneData.duration;
            }
        }
        return movementBoneData;
    },

    decodeFrame: function (frameXML, parentFrameXml, boneData, dataInfo) {

        var x = 0, y = 0, scale_x = 0, scale_y = 0, skew_x = 0, skew_y = 0, tweenRotate = 0;
        var duration = 0, displayIndex = 0, zOrder = 0, tweenEasing = 0, blendType = 0;

        var frameData = new ccs.FrameData();

        frameData.strMovement = frameXML.getAttribute(ccs.CONST_A_MOVEMENT) || "";
        frameData.movement = frameData.strMovement;
        frameData.strEvent = frameXML.getAttribute(ccs.CONST_A_EVENT) || "";
        frameData.event = frameData.strEvent;
        frameData.strSound = frameXML.getAttribute(ccs.CONST_A_SOUND) || "";
        frameData.sound = frameData.strSound;
        frameData.strSoundEffect = frameXML.getAttribute(ccs.CONST_A_SOUND_EFFECT) || "";
        frameData.soundEffect = frameData.strSoundEffect;

        var tweenFrame = false;
        var isTween = frameXML.getAttribute(ccs.CONST_A_TWEEN_FRAME);

        var x, y;
        if (dataInfo.flashToolVersion >= ccs.CONST_VERSION_2_0)
        {
            x = frameXML.getAttribute(ccs.CONST_A_COCOS2DX_X);
            if(x)
            {
                frameData.x = x;
                frameData.x *= this._positionReadScale;
            }
            y = frameXML.getAttribute(ccs.CONST_A_COCOS2DX_Y);
            if(y)
            {
                frameData.y = -y;
                frameData.y *= this._positionReadScale;
            }
        }
        else
        {
            x = frameXML.getAttribute(ccs.CONST_A_X);
            if(x)
            {
                frameData.x = x;
                frameData.x *= this._positionReadScale;
            }
            y = frameXML.getAttribute(ccs.CONST_A_Y);
            if(y)
            {
                frameData.y = -y;
                frameData.y *= this._positionReadScale;
            }
        }


        scale_x = frameXML.getAttribute(ccs.CONST_A_SCALE_X);
        if( scale_x != null )
        {
            frameData.scaleX = scale_x;
        }
        scale_y = frameXML.getAttribute(ccs.CONST_A_SCALE_Y);
        if( scale_y != null )
        {
            frameData.scaleY = scale_y;
        }
        skew_x = frameXML.getAttribute(ccs.CONST_A_SKEW_X);
        if( skew_x != null )
        {
            frameData.skewX = cc.degreesToRadians(skew_x);
        }
        skew_y = frameXML.getAttribute(ccs.CONST_A_SKEW_Y);
        if( skew_y != null )
        {
            frameData.skewY = cc.degreesToRadians(-skew_y);
        }
        duration = frameXML.getAttribute(ccs.CONST_A_DURATION);
        if( duration != null )
        {
            frameData.duration = duration;
        }
        displayIndex = frameXML.getAttribute(ccs.CONST_A_DISPLAY_INDEX);
        if( displayIndex != null )
        {
            frameData.displayIndex = displayIndex;
        }
        zOrder = frameXML.getAttribute(ccs.CONST_A_Z);
        if( zOrder != null )
        {
            frameData.zOrder = zOrder;
        }
        tweenRotate = frameXML.getAttribute(ccs.CONST_A_TWEEN_ROTATE);
        if( tweenRotate != null )
        {
            frameData.tweenRotate = tweenRotate;
        }

        blendType = frameXML.getAttribute(ccs.CONST_A_BLEND_TYPE);
        if ( blendType != null )
        {
            var blendFunc = frameData.blendFunc;
            switch (blendType)
            {
                case ccs.BLEND_TYPE_NORMAL:
                {
                    blendFunc.src = cc.BLEND_SRC;
                    blendFunc.dst = cc.BLEND_DST;
                }
                    break;
                case ccs.BLEND_TYPE_ADD:
                {
                    blendFunc.src = cc.SRC_ALPHA;
                    blendFunc.dst = cc.ONE;
                }
                    break;
                case ccs.BLEND_TYPE_MULTIPLY:
                {
                    blendFunc.src = cc.DST_COLOR;
                    blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
                }
                    break;
                case ccs.BLEND_TYPE_SCREEN:
                {
                    blendFunc.src = cc.ONE;
                    blendFunc.dst = cc.ONE_MINUS_DST_COLOR;
                }
                    break;
                default:
                {
                    frameData.blendFunc.src = cc.BLEND_SRC;
                    frameData.blendFunc.dst = cc.BLEND_DST;
                }
                    break;
            }
        }

        var colorTransformXML = frameXML.querySelectorAll(ccs.CONST_FRAME + " > " + ccs.CONST_A_COLOR_TRANSFORM);
        if (colorTransformXML)
        {
            colorTransformXML = colorTransformXML[0];
            var alpha, red, green, blue = 100;
            var alphaOffset, redOffset, greenOffset, blueOffset = 0;

            alpha = colorTransformXML.getAttribute(ccs.CONST_A_ALPHA);
            red = colorTransformXML.getAttribute(ccs.CONST_A_RED);
            green = colorTransformXML.getAttribute(ccs.CONST_A_GREEN);
            blue = colorTransformXML.getAttribute(ccs.CONST_A_BLUE);

            alphaOffset = colorTransformXML.getAttribute(ccs.CONST_A_ALPHA_OFFSET);
            redOffset = colorTransformXML.getAttribute(ccs.CONST_A_RED_OFFSET);
            greenOffset = colorTransformXML.getAttribute(ccs.CONST_A_GREEN_OFFSET);
            blueOffset = colorTransformXML.getAttribute(ccs.CONST_A_BLUE_OFFSET);

            frameData.a = 2.55 * alphaOffset + alpha;
            frameData.r = 2.55 * redOffset + red;
            frameData.g = 2.55 * greenOffset + green;
            frameData.b = 2.55 * blueOffset + blue;

            frameData.isUseColorInfo = true;
        }

        var _easing = frameXML.getAttribute(ccs.CONST_A_TWEEN_EASING);
        if(_easing != null)
        {
            var str = _easing;
            if(str != ccs.CONST_FL_NAN)
            {
                tweenEasing = frameXML.getAttribute(ccs.CONST_A_TWEEN_EASING);
                if( tweenEasing )
                {
                    frameData.tweenEasing = tweenEasing == 2 ? ccs.TweenType.sineEaseInOut : tweenEasing;
                }
            }
            else
            {
                frameData.tweenEasing = ccs.TweenType.linear;
            }
        }

        if (parentFrameXml) {
            //*  recalculate frame data from parent frame data, use for translate matrix
            var helpNode = new ccs.BaseData();
            if (dataInfo.flashToolVersion >= ccs.CONST_VERSION_2_0) {
                helpNode.x = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_COCOS2DX_X)) || 0;
                helpNode.y = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_COCOS2DX_Y)) || 0;
            }
            else {
                helpNode.x = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_X)) || 0;
                helpNode.y = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_Y)) || 0;
            }
            helpNode.skewX = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_SKEW_X)) || 0;
            helpNode.skewY = parseFloat(parentFrameXml.getAttribute(ccs.CONST_A_SKEW_Y)) || 0;

            helpNode.y = -helpNode.y;
            helpNode.skewX = cc.degreesToRadians(helpNode.skewX);
            helpNode.skewY = cc.degreesToRadians(-helpNode.skewY);
            ccs.TransformHelp.transformFromParent(frameData, helpNode);
        }
        return frameData;
    },

    decodeFrameFromJson: function (json, dataInfo) {
        var frameData = new ccs.FrameData();

        this.decodeNodeFromJson(frameData, json, dataInfo);

        frameData.tweenEasing = json[ccs.CONST_A_TWEEN_EASING] || ccs.TweenType.linear;
        frameData.displayIndex = json[ccs.CONST_A_DISPLAY_INDEX] || 0;
        var bd_src = json[ccs.CONST_A_BLEND_SRC] || cc.BLEND_SRC;
        var bd_dst = json[ccs.CONST_A_BLEND_DST] || cc.BLEND_DST;
        frameData.blendFunc.src = bd_src;
        frameData.blendFunc.dst = bd_dst;
        frameData.isTween = json[ccs.CONST_A_TWEEN_FRAME] || true;

        var event = json[ccs.CONST_A_EVENT];
        if(event != null){
            frameData.strEvent = event;
            frameData.event = event;
        }

        if (dataInfo.cocoStudioVersion < ccs.CONST_VERSION_COMBINED)
        {
            frameData.duration = json[ccs.CONST_A_DURATION] || 1;
        }
        else
        {
            frameData.frameID = json[ccs.CONST_A_FRAME_INDEX];
        }

        var twEPs = json[ccs.CONST_A_EASING_PARAM] || [];
        for (var i = 0; i < twEPs.length; i++) {
            var twEP = twEPs[i];
            frameData.easingParams[i] = twEP;
        }

        return frameData;
    },

    decodeTexture: function (textureXML, dataInfo) {
        var textureData = new ccs.TextureData();
        textureData.init();

        if (textureXML.getAttribute(ccs.CONST_A_NAME)) {
            textureData.name = textureXML.getAttribute(ccs.CONST_A_NAME);
        }

        var px, py, width, height = 0;

        if (dataInfo.flashToolVersion >= ccs.CONST_VERSION_2_0) {
            px = parseFloat(textureXML.getAttribute(ccs.CONST_A_COCOS2D_PIVOT_X)) || 0;
            py = parseFloat(textureXML.getAttribute(ccs.CONST_A_COCOS2D_PIVOT_Y)) || 0;
        }
        else {
            px = parseFloat(textureXML.getAttribute(ccs.CONST_A_PIVOT_X)) || 0;
            py = parseFloat(textureXML.getAttribute(ccs.CONST_A_PIVOT_Y)) || 0;
        }

        width = parseFloat(textureXML.getAttribute(ccs.CONST_A_WIDTH)) || 0;
        height = parseFloat(textureXML.getAttribute(ccs.CONST_A_HEIGHT)) || 0;

        var anchorPointX = px / width;
        var anchorPointY = (height - py) / height;

        textureData.pivotX = anchorPointX;
        textureData.pivotY = anchorPointY;

        textureData.pivotX = anchorPointX;
        textureData.pivotY = anchorPointY;

        var contoursXML = textureXML.querySelectorAll(ccs.CONST_SUB_TEXTURE + " > " + ccs.CONST_CONTOUR);
        for (var i = 0; i < contoursXML.length; i++) {
            var contourData = this.decodeContour(contoursXML[i], dataInfo);
            textureData.addContourData(contourData);
        }
        return textureData;
    },

    decodeTextureFromJson: function (json) {
        var textureData = new ccs.TextureData();
        textureData.init();

        var name = json[ccs.CONST_A_NAME];
        if(name != null)
            textureData.name = name;

        textureData.width = json[ccs.CONST_A_WIDTH] || 0;
        textureData.height = json[ccs.CONST_A_HEIGHT] || 0;
        textureData.pivotX = json[ccs.CONST_A_PIVOT_X] || 0;
        textureData.pivotY = json[ccs.CONST_A_PIVOT_Y] || 0;

        var contourDataList = json[ccs.CONST_CONTOUR_DATA] || [];
        for (var i = 0; i < contourDataList.length; i++) {
            var locContourData = this.decodeContourFromJson(contourDataList[i]);
            textureData.contourDataList.push(locContourData);
        }
        return textureData;
    },

    decodeContour: function (contourXML, dataInfo) {
        var contourData = new ccs.ContourData();
        contourData.init();

        var vertexDatasXML = contourXML.querySelectorAll(ccs.CONST_CONTOUR + " > " + ccs.CONST_CONTOUR_VERTEX);
        var vertexDataXML;
        for (var i = 0; i < vertexDatasXML.length; i++) {
            vertexDataXML = vertexDatasXML[i];
            var vertex = cc.p(0, 0);
            vertex.x = parseFloat(vertexDataXML.getAttribute(ccs.CONST_A_X)) || 0;
            vertex.y = parseFloat(vertexDataXML.getAttribute(ccs.CONST_A_Y)) || 0;

            vertex.y = - vertex.y;
            contourData.vertexList.push(vertex);
        }
        return contourData;

    },

    decodeContourFromJson: function (json) {
        var contourData = new ccs.ContourData();
        contourData.init();

        var vertexPointList = json[ccs.CONST_VERTEX_POINT] || [];
        for (var i = vertexPointList.length - 1; i >= 0; i--) {
            var dic = vertexPointList[i];
            var vertex = cc.p(0, 0);
            vertex.x = dic[ccs.CONST_A_X] || 0;
            vertex.y = dic[ccs.CONST_A_Y] || 0;
            contourData.vertexList.push(vertex);
        }
        return contourData;
    },

    addDataFromJsonCache: function (dic, dataInfo) {
        dataInfo.contentScale = dic[ccs.CONST_CONTENT_SCALE] || 1;

        // Decode armatures
        var armatureDataArr = dic[ccs.CONST_ARMATURE_DATA] || [];
        var armatureData;
        for (var i = 0; i < armatureDataArr.length; i++) {
            armatureData = this.decodeArmatureFromJSON(armatureDataArr[i], dataInfo);
            ccs.armatureDataManager.addArmatureData(armatureData.name, armatureData, dataInfo.filename);
        }

        // Decode animations
        var animationDataArr = dic[ccs.CONST_ANIMATION_DATA] || [];
        var animationData;
        for (var i = 0; i < animationDataArr.length; i++) {
            animationData = this.decodeAnimationFromJson(animationDataArr[i], dataInfo);
            ccs.armatureDataManager.addAnimationData(animationData.name, animationData, dataInfo.filename);
        }

        // Decode textures
        var textureDataArr = dic[ccs.CONST_TEXTURE_DATA] || [];
        var textureData;
        for (var i = 0; i < textureDataArr.length; i++) {
            textureData = this.decodeTextureFromJson(textureDataArr[i], dataInfo);
            ccs.armatureDataManager.addTextureData(textureData.name, textureData, dataInfo.filename);
        }

        // Auto load sprite file
        var autoLoad = dataInfo.asyncStruct == null ? ccs.armatureDataManager.isAutoLoadSpriteFile() : dataInfo.asyncStruct.autoLoadSpriteFile;
//        if (isLoadSpriteFrame) {
        if (autoLoad) {
            var configFiles = dic[ccs.CONST_CONFIG_FILE_PATH] || [];
            var locFilePath, locPos, locPlistPath, locImagePath;
            for (var i = 0; i < configFiles.length; i++) {
                locFilePath = configFiles[i];
                locPos = locFilePath.lastIndexOf(".");
                locFilePath = locFilePath.substring(0, locPos);
                locPlistPath = dataInfo.basefilePath + locFilePath + ".plist";
                locImagePath = dataInfo.basefilePath + locFilePath + ".png";
                ccs.armatureDataManager.addSpriteFrameFromFile(locPlistPath, locImagePath, dataInfo.filename);
            }
        }

        armatureData = null;
        animationData = null;
    },

    decodeNodeFromJson: function (node, json, dataInfo) {
        node.x = (json[ccs.CONST_A_X] || 0) * this._positionReadScale;
        node.y = (json[ccs.CONST_A_Y] || 0) * this._positionReadScale;

        node.x *= dataInfo.contentScale;
        node.y *= dataInfo.contentScale;

        node.zOrder = json[ccs.CONST_A_Z] || 0;

        node.skewX = json[ccs.CONST_A_SKEW_X] || 0;
        node.skewY = json[ccs.CONST_A_SKEW_Y] || 0;
        node.scaleX = json[ccs.CONST_A_SCALE_X] || 1;
        node.scaleY = json[ccs.CONST_A_SCALE_Y] || 1;

//        var colorDic = json[ccs.CONST_COLOR_INFO] || null;
//        if (colorDic) {
//            //compatible old version
//            if (dataInfo.cocoStudioVersion < ccs.VERSION_COLOR_READING) {
//                colorDic = colorDic[0];
//            }
//            node.a = colorDic[ccs.CONST_A_ALPHA];
//            node.r = colorDic[ccs.CONST_A_RED];
//            node.g = colorDic[ccs.CONST_A_GREEN];
//            node.b = colorDic[ccs.CONST_A_BLUE];
//            node.isUseColorInfo = true;
//            delete colorDic;
//        }
        var colorDic;
        if (dataInfo.cocoStudioVersion < ccs.VERSION_COLOR_READING)
        {
            colorDic = json[0];
            if (colorDic)
            {
                node.a = colorDic[ccs.CONST_A_ALPHA] || 255;
                node.r = colorDic[ccs.CONST_A_RED] || 255;
                node.g = colorDic[ccs.CONST_A_GREEN] || 255;
                node.b = colorDic[ccs.CONST_A_BLUE] || 255;

                node.isUseColorInfo = true;
            }
        }
        else
        {
            colorDic = json[ccs.CONST_COLOR_INFO] || null;
            if (colorDic)
            {
                node.a = colorDic[ccs.CONST_A_ALPHA] || 255;
                node.r = colorDic[ccs.CONST_A_RED] || 255;
                node.g = colorDic[ccs.CONST_A_GREEN] || 255;
                node.b = colorDic[ccs.CONST_A_BLUE] || 255;

                node.isUseColorInfo = true;
            }
        }

    },

    clear: function () {
        this._configFileList = [];
        this._asyncRefCount = 0;
        this._asyncRefTotalCount = 0;
    },

    _asyncCallBack: function (target, selector, percent) {
        if(selector && typeof target === 'function'){
            target.call(selector, percent);
        }
        if(selector && typeof target === 'string'){
            selector[target](percent);
        }
    },
    /**
     * find the base file path
     * @param filePath
     * @returns {String}
     * @private
     */
    _initBaseFilePath: function (filePath) {
        var path = filePath;
        var pos = path.lastIndexOf("/");
        if (pos > -1)
            path = path.substr(0, pos + 1);
        else
            path = "";
        return path;
    },

    addDataFromXML: function (xml, dataInfo) {
        /*
         *  Need to get the full path of the xml file, or the Tiny XML can't find the xml at IOS
         */
        var xmlStr = cc.loader.getRes(xml);
        if (!xmlStr) throw "Please load the resource first : " + xml;
        var skeletonXML = cc.saxParser.parse(xmlStr);
        var skeleton = skeletonXML.documentElement;
        if (skeleton) {
            this.addDataFromCache(skeleton, dataInfo);
        }
    },

    addDataFromJson: function (filePath, dataInfo) {
        var fileContent = cc.loader.getRes(filePath);
        this.addDataFromJsonCache(fileContent, dataInfo);
    }
};