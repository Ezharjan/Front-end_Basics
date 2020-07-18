// threejs.org/license
'use strict';
var THREE = {REVISION: "78"};
"function" === typeof define && define.amd ? define("three", THREE) : "undefined" !== typeof exports && "undefined" !== typeof module && (module.exports = THREE);
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
void 0 === Math.sign && (Math.sign = function (a) {
    return 0 > a ? -1 : 0 < a ? 1 : +a
});
void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
    get: function () {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
});
void 0 === Object.assign && function () {
    Object.assign = function (a) {
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (void 0 !== d && null !== d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e])
        }
        return b
    }
}();
Object.assign(THREE, {
    MOUSE: {LEFT: 0, MIDDLE: 1, RIGHT: 2},
    CullFaceNone: 0,
    CullFaceBack: 1,
    CullFaceFront: 2,
    CullFaceFrontBack: 3,
    FrontFaceDirectionCW: 0,
    FrontFaceDirectionCCW: 1,
    BasicShadowMap: 0,
    PCFShadowMap: 1,
    PCFSoftShadowMap: 2,
    FrontSide: 0,
    BackSide: 1,
    DoubleSide: 2,
    FlatShading: 1,
    SmoothShading: 2,
    NoColors: 0,
    FaceColors: 1,
    VertexColors: 2,
    NoBlending: 0,
    NormalBlending: 1,
    AdditiveBlending: 2,
    SubtractiveBlending: 3,
    MultiplyBlending: 4,
    CustomBlending: 5,
    AddEquation: 100,
    SubtractEquation: 101,
    ReverseSubtractEquation: 102,
    MinEquation: 103,
    MaxEquation: 104,
    ZeroFactor: 200,
    OneFactor: 201,
    SrcColorFactor: 202,
    OneMinusSrcColorFactor: 203,
    SrcAlphaFactor: 204,
    OneMinusSrcAlphaFactor: 205,
    DstAlphaFactor: 206,
    OneMinusDstAlphaFactor: 207,
    DstColorFactor: 208,
    OneMinusDstColorFactor: 209,
    SrcAlphaSaturateFactor: 210,
    NeverDepth: 0,
    AlwaysDepth: 1,
    LessDepth: 2,
    LessEqualDepth: 3,
    EqualDepth: 4,
    GreaterEqualDepth: 5,
    GreaterDepth: 6,
    NotEqualDepth: 7,
    MultiplyOperation: 0,
    MixOperation: 1,
    AddOperation: 2,
    NoToneMapping: 0,
    LinearToneMapping: 1,
    ReinhardToneMapping: 2,
    Uncharted2ToneMapping: 3,
    CineonToneMapping: 4,
    UVMapping: 300,
    CubeReflectionMapping: 301,
    CubeRefractionMapping: 302,
    EquirectangularReflectionMapping: 303,
    EquirectangularRefractionMapping: 304,
    SphericalReflectionMapping: 305,
    CubeUVReflectionMapping: 306,
    CubeUVRefractionMapping: 307,
    RepeatWrapping: 1E3,
    ClampToEdgeWrapping: 1001,
    MirroredRepeatWrapping: 1002,
    NearestFilter: 1003,
    NearestMipMapNearestFilter: 1004,
    NearestMipMapLinearFilter: 1005,
    LinearFilter: 1006,
    LinearMipMapNearestFilter: 1007,
    LinearMipMapLinearFilter: 1008,
    UnsignedByteType: 1009,
    ByteType: 1010,
    ShortType: 1011,
    UnsignedShortType: 1012,
    IntType: 1013,
    UnsignedIntType: 1014,
    FloatType: 1015,
    HalfFloatType: 1025,
    UnsignedShort4444Type: 1016,
    UnsignedShort5551Type: 1017,
    UnsignedShort565Type: 1018,
    AlphaFormat: 1019,
    RGBFormat: 1020,
    RGBAFormat: 1021,
    LuminanceFormat: 1022,
    LuminanceAlphaFormat: 1023,
    RGBEFormat: THREE.RGBAFormat,
    DepthFormat: 1026,
    RGB_S3TC_DXT1_Format: 2001,
    RGBA_S3TC_DXT1_Format: 2002,
    RGBA_S3TC_DXT3_Format: 2003,
    RGBA_S3TC_DXT5_Format: 2004,
    RGB_PVRTC_4BPPV1_Format: 2100,
    RGB_PVRTC_2BPPV1_Format: 2101,
    RGBA_PVRTC_4BPPV1_Format: 2102,
    RGBA_PVRTC_2BPPV1_Format: 2103,
    RGB_ETC1_Format: 2151,
    LoopOnce: 2200,
    LoopRepeat: 2201,
    LoopPingPong: 2202,
    InterpolateDiscrete: 2300,
    InterpolateLinear: 2301,
    InterpolateSmooth: 2302,
    ZeroCurvatureEnding: 2400,
    ZeroSlopeEnding: 2401,
    WrapAroundEnding: 2402,
    TrianglesDrawMode: 0,
    TriangleStripDrawMode: 1,
    TriangleFanDrawMode: 2,
    LinearEncoding: 3E3,
    sRGBEncoding: 3001,
    GammaEncoding: 3007,
    RGBEEncoding: 3002,
    LogLuvEncoding: 3003,
    RGBM7Encoding: 3004,
    RGBM16Encoding: 3005,
    RGBDEncoding: 3006,
    BasicDepthPacking: 3200,
    RGBADepthPacking: 3201
});
THREE.Color = function (a, b, c) {
    return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c)
};
THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (a) {
        a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
        return this
    }, setScalar: function (a) {
        this.b = this.g = this.r = a
    }, setHex: function (a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    }, setRGB: function (a, b, c) {
        this.r = a;
        this.g = b;
        this.b = c;
        return this
    }, setHSL: function () {
        function a(a, c, d) {
            0 > d && (d += 1);
            1 < d && (d -= 1);
            return d < 1 / 6 ? a + 6 * (c - a) *
                d : .5 > d ? c : d < 2 / 3 ? a + 6 * (c - a) * (2 / 3 - d) : a
        }

        return function (b, c, d) {
            b = THREE.Math.euclideanModulo(b, 1);
            c = THREE.Math.clamp(c, 0, 1);
            d = THREE.Math.clamp(d, 0, 1);
            0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c, d = 2 * d - c, this.r = a(d, c, b + 1 / 3), this.g = a(d, c, b), this.b = a(d, c, b - 1 / 3));
            return this
        }
    }(), setStyle: function (a) {
        function b(b) {
            void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
        }

        var c;
        if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
            var d = c[2];
            switch (c[1]) {
                case "rgb":
                case "rgba":
                    if (c =
                        /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
                    if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                        var d =
                            parseFloat(c[1]) / 360, e = parseInt(c[2], 10) / 100, f = parseInt(c[3], 10) / 100;
                        b(c[5]);
                        return this.setHSL(d, e, f)
                    }
            }
        } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
            c = c[1];
            d = c.length;
            if (3 === d) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
            if (6 === d) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
        }
        a && 0 < a.length &&
        (c = THREE.ColorKeywords[a], void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a));
        return this
    }, clone: function () {
        return new this.constructor(this.r, this.g, this.b)
    }, copy: function (a) {
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        return this
    }, copyGammaToLinear: function (a, b) {
        void 0 === b && (b = 2);
        this.r = Math.pow(a.r, b);
        this.g = Math.pow(a.g, b);
        this.b = Math.pow(a.b, b);
        return this
    }, copyLinearToGamma: function (a, b) {
        void 0 === b && (b = 2);
        var c = 0 < b ? 1 / b : 1;
        this.r = Math.pow(a.r, c);
        this.g = Math.pow(a.g, c);
        this.b = Math.pow(a.b,
            c);
        return this
    }, convertGammaToLinear: function () {
        var a = this.r, b = this.g, c = this.b;
        this.r = a * a;
        this.g = b * b;
        this.b = c * c;
        return this
    }, convertLinearToGamma: function () {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this
    }, getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }, getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }, getHSL: function (a) {
        a = a || {h: 0, s: 0, l: 0};
        var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), f = Math.min(b, c, d), g, h =
            (f + e) / 2;
        if (f === e) f = g = 0; else {
            var k = e - f, f = .5 >= h ? k / (e + f) : k / (2 - e - f);
            switch (e) {
                case b:
                    g = (c - d) / k + (c < d ? 6 : 0);
                    break;
                case c:
                    g = (d - b) / k + 2;
                    break;
                case d:
                    g = (b - c) / k + 4
            }
            g /= 6
        }
        a.h = g;
        a.s = f;
        a.l = h;
        return a
    }, getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }, offsetHSL: function (a, b, c) {
        var d = this.getHSL();
        d.h += a;
        d.s += b;
        d.l += c;
        this.setHSL(d.h, d.s, d.l);
        return this
    }, add: function (a) {
        this.r += a.r;
        this.g += a.g;
        this.b += a.b;
        return this
    }, addColors: function (a, b) {
        this.r = a.r + b.r;
        this.g = a.g + b.g;
        this.b =
            a.b + b.b;
        return this
    }, addScalar: function (a) {
        this.r += a;
        this.g += a;
        this.b += a;
        return this
    }, multiply: function (a) {
        this.r *= a.r;
        this.g *= a.g;
        this.b *= a.b;
        return this
    }, multiplyScalar: function (a) {
        this.r *= a;
        this.g *= a;
        this.b *= a;
        return this
    }, lerp: function (a, b) {
        this.r += (a.r - this.r) * b;
        this.g += (a.g - this.g) * b;
        this.b += (a.b - this.b) * b;
        return this
    }, equals: function (a) {
        return a.r === this.r && a.g === this.g && a.b === this.b
    }, fromArray: function (a, b) {
        void 0 === b && (b = 0);
        this.r = a[b];
        this.g = a[b + 1];
        this.b = a[b + 2];
        return this
    }, toArray: function (a,
                          b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.r;
        a[b + 1] = this.g;
        a[b + 2] = this.b;
        return a
    }
};
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
THREE.Quaternion = function (a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion, get x() {
        return this._x
    }, set x(a) {
        this._x = a;
        this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(a) {
        this._y = a;
        this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(a) {
        this._z = a;
        this.onChangeCallback()
    }, get w() {
        return this._w
    }, set w(a) {
        this._w = a;
        this.onChangeCallback()
    }, set: function (a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._w = d;
        this.onChangeCallback();
        return this
    }, clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function (a) {
        this._x = a.x;
        this._y = a.y;
        this._z = a.z;
        this._w = a.w;
        this.onChangeCallback();
        return this
    }, setFromEuler: function (a, b) {
        if (!1 === a instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var c = Math.cos(a._x / 2), d = Math.cos(a._y / 2), e = Math.cos(a._z / 2), f = Math.sin(a._x / 2),
            g = Math.sin(a._y / 2), h = Math.sin(a._z / 2), k = a.order;
        "XYZ" === k ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" ===
        k ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === k ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === k ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === k ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === k && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h);
        if (!1 !== b) this.onChangeCallback();
        return this
    }, setFromAxisAngle: function (a,
                                   b) {
        var c = b / 2, d = Math.sin(c);
        this._x = a.x * d;
        this._y = a.y * d;
        this._z = a.z * d;
        this._w = Math.cos(c);
        this.onChangeCallback();
        return this
    }, setFromRotationMatrix: function (a) {
        var b = a.elements, c = b[0];
        a = b[4];
        var d = b[8], e = b[1], f = b[5], g = b[9], h = b[2], k = b[6], b = b[10], l = c + f + b;
        0 < l ? (c = .5 / Math.sqrt(l + 1), this._w = .25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y =
            .25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = .25 * c);
        this.onChangeCallback();
        return this
    }, setFromUnitVectors: function () {
        var a, b;
        return function (c, d) {
            void 0 === a && (a = new THREE.Vector3);
            b = c.dot(d) + 1;
            1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = b;
            return this.normalize()
        }
    }(), inverse: function () {
        return this.conjugate().normalize()
    }, conjugate: function () {
        this._x *=
            -1;
        this._y *= -1;
        this._z *= -1;
        this.onChangeCallback();
        return this
    }, dot: function (a) {
        return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
    }, lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }, length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }, normalize: function () {
        var a = this.length();
        0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
        this.onChangeCallback();
        return this
    },
    multiply: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    }, premultiply: function (a) {
        return this.multiplyQuaternions(a, this)
    }, multiplyQuaternions: function (a, b) {
        var c = a._x, d = a._y, e = a._z, f = a._w, g = b._x, h = b._y, k = b._z, l = b._w;
        this._x = c * l + f * g + d * k - e * h;
        this._y = d * l + f * h + e * g - c * k;
        this._z = e * l + f * k + c * h - d * g;
        this._w = f * l - c * g - d * h - e * k;
        this.onChangeCallback();
        return this
    }, slerp: function (a, b) {
        if (0 === b) return this;
        if (1 === b) return this.copy(a);
        var c = this._x, d = this._y, e = this._z, f = this._w, g = f * a._w + c * a._x + d * a._y + e * a._z;
        0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
        if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
        var h = Math.sqrt(1 - g * g);
        if (.001 > Math.abs(h)) return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
        var k = Math.atan2(h, g), g = Math.sin((1 - b) * k) / h, h = Math.sin(b *
            k) / h;
        this._w = f * g + this._w * h;
        this._x = c * g + this._x * h;
        this._y = d * g + this._y * h;
        this._z = e * g + this._z * h;
        this.onChangeCallback();
        return this
    }, equals: function (a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
    }, fromArray: function (a, b) {
        void 0 === b && (b = 0);
        this._x = a[b];
        this._y = a[b + 1];
        this._z = a[b + 2];
        this._w = a[b + 3];
        this.onChangeCallback();
        return this
    }, toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this._x;
        a[b + 1] = this._y;
        a[b + 2] = this._z;
        a[b + 3] = this._w;
        return a
    }, onChange: function (a) {
        this.onChangeCallback =
            a;
        return this
    }, onChangeCallback: function () {
    }
};
Object.assign(THREE.Quaternion, {
    slerp: function (a, b, c, d) {
        return c.copy(a).slerp(b, d)
    }, slerpFlat: function (a, b, c, d, e, f, g) {
        var h = c[d + 0], k = c[d + 1], l = c[d + 2];
        c = c[d + 3];
        d = e[f + 0];
        var n = e[f + 1], p = e[f + 2];
        e = e[f + 3];
        if (c !== e || h !== d || k !== n || l !== p) {
            f = 1 - g;
            var m = h * d + k * n + l * p + c * e, q = 0 <= m ? 1 : -1, r = 1 - m * m;
            r > Number.EPSILON && (r = Math.sqrt(r), m = Math.atan2(r, m * q), f = Math.sin(f * m) / r, g = Math.sin(g * m) / r);
            q *= g;
            h = h * f + d * q;
            k = k * f + n * q;
            l = l * f + p * q;
            c = c * f + e * q;
            f === 1 - g && (g = 1 / Math.sqrt(h * h + k * k + l * l + c * c), h *= g, k *= g, l *= g, c *= g)
        }
        a[b] = h;
        a[b + 1] = k;
        a[b + 2] = l;
        a[b + 3] = c
    }
});
THREE.Vector2 = function (a, b) {
    this.x = a || 0;
    this.y = b || 0
};
THREE.Vector2.prototype = {
    constructor: THREE.Vector2, get width() {
        return this.x
    }, set width(a) {
        this.x = a
    }, get height() {
        return this.y
    }, set height(a) {
        this.y = a
    }, set: function (a, b) {
        this.x = a;
        this.y = b;
        return this
    }, setScalar: function (a) {
        this.y = this.x = a;
        return this
    }, setX: function (a) {
        this.x = a;
        return this
    }, setY: function (a) {
        this.y = a;
        return this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a);
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y)
    }, copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        return this
    }, add: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        return this
    }, addScalar: function (a) {
        this.x += a;
        this.y += a;
        return this
    }, addVectors: function (a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this
    },
    addScaledVector: function (a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        return this
    }, sub: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        return this
    }, subScalar: function (a) {
        this.x -= a;
        this.y -= a;
        return this
    }, subVectors: function (a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this
    }, multiply: function (a) {
        this.x *= a.x;
        this.y *= a.y;
        return this
    }, multiplyScalar: function (a) {
        isFinite(a) ? (this.x *= a,
            this.y *= a) : this.y = this.x = 0;
        return this
    }, divide: function (a) {
        this.x /= a.x;
        this.y /= a.y;
        return this
    }, divideScalar: function (a) {
        return this.multiplyScalar(1 / a)
    }, min: function (a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        return this
    }, max: function (a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        return this
    }, clamp: function (a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        return this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            void 0 ===
            a && (a = new THREE.Vector2, b = new THREE.Vector2);
            a.set(c, c);
            b.set(d, d);
            return this.clamp(a, b)
        }
    }(), clampLength: function (a, b) {
        var c = this.length();
        return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c)
    }, floor: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }, ceil: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }, round: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }, roundToZero: function () {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        return this
    }, negate: function () {
        this.x = -this.x;
        this.y = -this.y;
        return this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, angle: function () {
        var a = Math.atan2(this.y, this.x);
        0 > a && (a += 2 * Math.PI);
        return a
    },
    distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    }, distanceToSquared: function (a) {
        var b = this.x - a.x;
        a = this.y - a.y;
        return b * b + a * a
    }, setLength: function (a) {
        return this.multiplyScalar(a / this.length())
    }, lerp: function (a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        return this
    }, lerpVectors: function (a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a)
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y
    }, fromArray: function (a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        return this
    },
    toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        return a
    }, fromAttribute: function (a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize + c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        return this
    }, rotateAround: function (a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = this.x - a.x, f = this.y - a.y;
        this.x = e * c - f * d + a.x;
        this.y = e * d + f * c + a.y;
        return this
    }
};
THREE.Vector3 = function (a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        return this
    }, setScalar: function (a) {
        this.z = this.y = this.x = a;
        return this
    }, setX: function (a) {
        this.x = a;
        return this
    }, setY: function (a) {
        this.y = a;
        return this
    }, setZ: function (a) {
        this.z = a;
        return this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + a);
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y, this.z)
    }, copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    }, add: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    }, addScalar: function (a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    }, addVectors: function (a,
                             b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    }, addScaledVector: function (a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        this.z += a.z * b;
        return this
    }, sub: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    }, subScalar: function (a) {
        this.x -= a;
        this.y -= a;
        this.z -= a;
        return this
    }, subVectors: function (a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },
    multiply: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    }, multiplyScalar: function (a) {
        isFinite(a) ? (this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
        return this
    }, multiplyVectors: function (a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this
    }, applyEuler: function () {
        var a;
        return function (b) {
            !1 === b instanceof THREE.Euler &&
            console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
            void 0 === a && (a = new THREE.Quaternion);
            return this.applyQuaternion(a.setFromEuler(b))
        }
    }(), applyAxisAngle: function () {
        var a;
        return function (b, c) {
            void 0 === a && (a = new THREE.Quaternion);
            return this.applyQuaternion(a.setFromAxisAngle(b, c))
        }
    }(), applyMatrix3: function (a) {
        var b = this.x, c = this.y, d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[3] * c + a[6] * d;
        this.y = a[1] * b + a[4] * c + a[7] * d;
        this.z = a[2] * b + a[5] * c + a[8] * d;
        return this
    },
    applyMatrix4: function (a) {
        var b = this.x, c = this.y, d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
        return this
    }, applyProjection: function (a) {
        var b = this.x, c = this.y, d = this.z;
        a = a.elements;
        var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
        this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
        this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
        this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
        return this
    }, applyQuaternion: function (a) {
        var b = this.x, c = this.y, d = this.z, e = a.x, f = a.y, g = a.z;
        a =
            a.w;
        var h = a * b + f * d - g * c, k = a * c + g * b - e * d, l = a * d + e * c - f * b, b = -e * b - f * c - g * d;
        this.x = h * a + b * -e + k * -g - l * -f;
        this.y = k * a + b * -f + l * -e - h * -g;
        this.z = l * a + b * -g + h * -f - k * -e;
        return this
    }, project: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
            return this.applyProjection(a)
        }
    }(), unproject: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix));
            return this.applyProjection(a)
        }
    }(),
    transformDirection: function (a) {
        var b = this.x, c = this.y, d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d;
        this.y = a[1] * b + a[5] * c + a[9] * d;
        this.z = a[2] * b + a[6] * c + a[10] * d;
        return this.normalize()
    }, divide: function (a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    }, divideScalar: function (a) {
        return this.multiplyScalar(1 / a)
    }, min: function (a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        this.z = Math.min(this.z, a.z);
        return this
    }, max: function (a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        this.z =
            Math.max(this.z, a.z);
        return this
    }, clamp: function (a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        this.z = Math.max(a.z, Math.min(b.z, this.z));
        return this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3);
            a.set(c, c, c);
            b.set(d, d, d);
            return this.clamp(a, b)
        }
    }(), clampLength: function (a, b) {
        var c = this.length();
        return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c)
    }, floor: function () {
        this.x = Math.floor(this.x);
        this.y =
            Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this
    }, ceil: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this
    }, round: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this
    }, roundToZero: function () {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        return this
    }, negate: function () {
        this.x = -this.x;
        this.y =
            -this.y;
        this.z = -this.z;
        return this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (a) {
        return this.multiplyScalar(a / this.length())
    }, lerp: function (a, b) {
        this.x += (a.x - this.x) * b;
        this.y +=
            (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        return this
    }, lerpVectors: function (a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a)
    }, cross: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
        var c = this.x, d = this.y, e = this.z;
        this.x = d * a.z - e * a.y;
        this.y = e * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    }, crossVectors: function (a, b) {
        var c = a.x, d = a.y, e = a.z, f = b.x, g = b.y, h = b.z;
        this.x = d * h - e * g;
        this.y = e * f - c * h;
        this.z = c * g - d * f;
        return this
    }, projectOnVector: function (a) {
        var b = a.dot(this) / a.lengthSq();
        return this.copy(a).multiplyScalar(b)
    }, projectOnPlane: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Vector3);
            a.copy(this).projectOnVector(b);
            return this.sub(a)
        }
    }(), reflect: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Vector3);
            return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
        }
    }(), angleTo: function (a) {
        a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());
        return Math.acos(THREE.Math.clamp(a,
            -1, 1))
    }, distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    }, distanceToSquared: function (a) {
        var b = this.x - a.x, c = this.y - a.y;
        a = this.z - a.z;
        return b * b + c * c + a * a
    }, setFromSpherical: function (a) {
        var b = Math.sin(a.phi) * a.radius;
        this.x = b * Math.sin(a.theta);
        this.y = Math.cos(a.phi) * a.radius;
        this.z = b * Math.cos(a.theta);
        return this
    }, setFromMatrixPosition: function (a) {
        return this.setFromMatrixColumn(a, 3)
    }, setFromMatrixScale: function (a) {
        var b = this.setFromMatrixColumn(a, 0).length(), c = this.setFromMatrixColumn(a,
            1).length();
        a = this.setFromMatrixColumn(a, 2).length();
        this.x = b;
        this.y = c;
        this.z = a;
        return this
    }, setFromMatrixColumn: function (a, b) {
        if ("number" === typeof a) {
            console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
            var c = a;
            a = b;
            b = c
        }
        return this.fromArray(a.elements, 4 * b)
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    }, fromArray: function (a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        this.z = a[b + 2];
        return this
    }, toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 ===
        b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        a[b + 2] = this.z;
        return a
    }, fromAttribute: function (a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize + c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        this.z = a.array[b + 2];
        return this
    }
};
THREE.Vector4 = function (a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    }, setScalar: function (a) {
        this.w = this.z = this.y = this.x = a;
        return this
    }, setX: function (a) {
        this.x = a;
        return this
    }, setY: function (a) {
        this.y = a;
        return this
    }, setZ: function (a) {
        this.z = a;
        return this
    }, setW: function (a) {
        this.w = a;
        return this
    }, setComponent: function (a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " +
                    a);
        }
    }, getComponent: function (a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a);
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }, copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = void 0 !== a.w ? a.w : 1;
        return this
    }, add: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    }, addScalar: function (a) {
        this.x += a;
        this.y += a;
        this.z += a;
        this.w += a;
        return this
    }, addVectors: function (a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this
    }, addScaledVector: function (a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        this.z += a.z * b;
        this.w += a.w * b;
        return this
    }, sub: function (a, b) {
        if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -=
            a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    }, subScalar: function (a) {
        this.x -= a;
        this.y -= a;
        this.z -= a;
        this.w -= a;
        return this
    }, subVectors: function (a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this
    }, multiplyScalar: function (a) {
        isFinite(a) ? (this.x *= a, this.y *= a, this.z *= a, this.w *= a) : this.w = this.z = this.y = this.x = 0;
        return this
    }, applyMatrix4: function (a) {
        var b = this.x, c = this.y, d = this.z, e = this.w;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
        this.z =
            a[2] * b + a[6] * c + a[10] * d + a[14] * e;
        this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
        return this
    }, divideScalar: function (a) {
        return this.multiplyScalar(1 / a)
    }, setAxisAngleFromQuaternion: function (a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
        return this
    }, setAxisAngleFromRotationMatrix: function (a) {
        var b, c, d;
        a = a.elements;
        var e = a[0];
        d = a[4];
        var f = a[8], g = a[1], h = a[5], k = a[9];
        c = a[2];
        b = a[6];
        var l = a[10];
        if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 >
            Math.abs(k - b)) {
            if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + l - 3)) return this.set(1, 0, 0, 0), this;
            a = Math.PI;
            e = (e + 1) / 2;
            h = (h + 1) / 2;
            l = (l + 1) / 2;
            d = (d + g) / 4;
            f = (f + c) / 4;
            k = (k + b) / 4;
            e > h && e > l ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > l ? .01 > h ? (b = .707106781, c = 0, d = .707106781) : (c = Math.sqrt(h), b = d / c, d = k / c) : .01 > l ? (c = b = .707106781, d = 0) : (d = Math.sqrt(l), b = f / d, c = k / d);
            this.set(b, c, d, a);
            return this
        }
        a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
        .001 > Math.abs(a) && (a = 1);
        this.x = (b - k) /
            a;
        this.y = (f - c) / a;
        this.z = (g - d) / a;
        this.w = Math.acos((e + h + l - 1) / 2);
        return this
    }, min: function (a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        this.z = Math.min(this.z, a.z);
        this.w = Math.min(this.w, a.w);
        return this
    }, max: function (a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        this.z = Math.max(this.z, a.z);
        this.w = Math.max(this.w, a.w);
        return this
    }, clamp: function (a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        this.z = Math.max(a.z, Math.min(b.z, this.z));
        this.w = Math.max(a.w, Math.min(b.w, this.w));
        return this
    }, clampScalar: function () {
        var a, b;
        return function (c, d) {
            void 0 === a && (a = new THREE.Vector4, b = new THREE.Vector4);
            a.set(c, c, c, c);
            b.set(d, d, d, d);
            return this.clamp(a, b)
        }
    }(), floor: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this
    }, ceil: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this
    }, round: function () {
        this.x =
            Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this
    }, roundToZero: function () {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
        return this
    }, negate: function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;
        return this
    }, dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z *
            a.z + this.w * a.w
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (a) {
        return this.multiplyScalar(a / this.length())
    }, lerp: function (a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z -
            this.z) * b;
        this.w += (a.w - this.w) * b;
        return this
    }, lerpVectors: function (a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a)
    }, equals: function (a) {
        return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
    }, fromArray: function (a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        this.z = a[b + 2];
        this.w = a[b + 3];
        return this
    }, toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        a[b + 2] = this.z;
        a[b + 3] = this.w;
        return a
    }, fromAttribute: function (a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize +
            c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        this.z = a.array[b + 2];
        this.w = a.array[b + 3];
        return this
    }
};
THREE.Euler = function (a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || THREE.Euler.DefaultOrder
};
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
    constructor: THREE.Euler, get x() {
        return this._x
    }, set x(a) {
        this._x = a;
        this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(a) {
        this._y = a;
        this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(a) {
        this._z = a;
        this.onChangeCallback()
    }, get order() {
        return this._order
    }, set order(a) {
        this._order = a;
        this.onChangeCallback()
    }, set: function (a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._order = d || this._order;
        this.onChangeCallback();
        return this
    }, clone: function () {
        return new this.constructor(this._x,
            this._y, this._z, this._order)
    }, copy: function (a) {
        this._x = a._x;
        this._y = a._y;
        this._z = a._z;
        this._order = a._order;
        this.onChangeCallback();
        return this
    }, setFromRotationMatrix: function (a, b, c) {
        var d = THREE.Math.clamp, e = a.elements;
        a = e[0];
        var f = e[4], g = e[8], h = e[1], k = e[5], l = e[9], n = e[2], p = e[6], e = e[10];
        b = b || this._order;
        "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(-l, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(p, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(l, -1, 1)), .99999 > Math.abs(l) ?
            (this._y = Math.atan2(g, e), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-n, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(p, -1, 1)), .99999 > Math.abs(p) ? (this._y = Math.atan2(-n, e), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(n, -1, 1)), .99999 > Math.abs(n) ? (this._x = Math.atan2(p, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k), this._y = Math.atan2(-n, a)) : (this._x =
            0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(p, k), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-l, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
        this._order = b;
        if (!1 !== c) this.onChangeCallback();
        return this
    }, setFromQuaternion: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationFromQuaternion(b);
            return this.setFromRotationMatrix(a, c, d)
        }
    }(), setFromVector3: function (a,
                                   b) {
        return this.set(a.x, a.y, a.z, b || this._order)
    }, reorder: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            a.setFromEuler(this);
            return this.setFromQuaternion(a, b)
        }
    }(), equals: function (a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
    }, fromArray: function (a) {
        this._x = a[0];
        this._y = a[1];
        this._z = a[2];
        void 0 !== a[3] && (this._order = a[3]);
        this.onChangeCallback();
        return this
    }, toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this._x;
        a[b + 1] = this._y;
        a[b + 2] = this._z;
        a[b + 3] = this._order;
        return a
    }, toVector3: function (a) {
        return a ? a.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
    }, onChange: function (a) {
        this.onChangeCallback = a;
        return this
    }, onChangeCallback: function () {
    }
};
THREE.Line3 = function (a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3;
    this.end = void 0 !== b ? b : new THREE.Vector3
};
THREE.Line3.prototype = {
    constructor: THREE.Line3, set: function (a, b) {
        this.start.copy(a);
        this.end.copy(b);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.start.copy(a.start);
        this.end.copy(a.end);
        return this
    }, center: function (a) {
        return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    }, delta: function (a) {
        return (a || new THREE.Vector3).subVectors(this.end, this.start)
    }, distanceSq: function () {
        return this.start.distanceToSquared(this.end)
    }, distance: function () {
        return this.start.distanceTo(this.end)
    },
    at: function (a, b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    }, closestPointToPointParameter: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c, d) {
            a.subVectors(c, this.start);
            b.subVectors(this.end, this.start);
            var e = b.dot(b), e = b.dot(a) / e;
            d && (e = THREE.Math.clamp(e, 0, 1));
            return e
        }
    }(), closestPointToPoint: function (a, b, c) {
        a = this.closestPointToPointParameter(a, b);
        c = c || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    }, applyMatrix4: function (a) {
        this.start.applyMatrix4(a);
        this.end.applyMatrix4(a);
        return this
    }, equals: function (a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    }
};
THREE.Box2 = function (a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity)
};
THREE.Box2.prototype = {
    constructor: THREE.Box2, set: function (a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    }, setFromPoints: function (a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
        return this
    }, setFromCenterAndSize: function () {
        var a = new THREE.Vector2;
        return function (b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    }, makeEmpty: function () {
        this.min.x = this.min.y = Infinity;
        this.max.x = this.max.y = -Infinity;
        return this
    }, isEmpty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }, center: function (a) {
        return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (a) {
        return (a || new THREE.Vector2).subVectors(this.max, this.min)
    }, expandByPoint: function (a) {
        this.min.min(a);
        this.max.max(a);
        return this
    }, expandByVector: function (a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    }, expandByScalar: function (a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    }, containsPoint: function (a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    }, containsBox: function (a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    }, getParameter: function (a, b) {
        return (b || new THREE.Vector2).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
    }, intersectsBox: function (a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y >
        this.max.y ? !1 : !0
    }, clampPoint: function (a, b) {
        return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var a = new THREE.Vector2;
        return function (b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(), intersect: function (a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    }, union: function (a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    }, translate: function (a) {
        this.min.add(a);
        this.max.add(a);
        return this
    }, equals: function (a) {
        return a.min.equals(this.min) &&
            a.max.equals(this.max)
    }
};
THREE.Box3 = function (a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
};
THREE.Box3.prototype = {
    constructor: THREE.Box3, set: function (a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    }, setFromArray: function (a) {
        for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.length; h < k; h += 3) {
            var l = a[h], n = a[h + 1], p = a[h + 2];
            l < b && (b = l);
            n < c && (c = n);
            p < d && (d = p);
            l > e && (e = l);
            n > f && (f = n);
            p > g && (g = p)
        }
        this.min.set(b, c, d);
        this.max.set(e, f, g)
    }, setFromPoints: function (a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
        return this
    }, setFromCenterAndSize: function () {
        var a =
            new THREE.Vector3;
        return function (b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(), setFromObject: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = this;
            b.updateMatrixWorld(!0);
            this.makeEmpty();
            b.traverse(function (b) {
                var e = b.geometry;
                if (void 0 !== e) if (e instanceof THREE.Geometry) for (var f = e.vertices, e = 0, g = f.length; e < g; e++) a.copy(f[e]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a); else if (e instanceof THREE.BufferGeometry && void 0 !==
                    e.attributes.position) for (f = e.attributes.position.array, e = 0, g = f.length; e < g; e += 3) a.fromArray(f, e), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
            });
            return this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    }, makeEmpty: function () {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this
    }, isEmpty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function (a) {
        return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (a) {
        return (a || new THREE.Vector3).subVectors(this.max, this.min)
    }, expandByPoint: function (a) {
        this.min.min(a);
        this.max.max(a);
        return this
    }, expandByVector: function (a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    }, expandByScalar: function (a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    }, containsPoint: function (a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z <
        this.min.z || a.z > this.max.z ? !1 : !0
    }, containsBox: function (a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    }, getParameter: function (a, b) {
        return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    }, intersectsBox: function (a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z <
        this.min.z || a.min.z > this.max.z ? !1 : !0
    }, intersectsSphere: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Vector3);
            this.clampPoint(b.center, a);
            return a.distanceToSquared(b.center) <= b.radius * b.radius
        }
    }(), intersectsPlane: function (a) {
        var b, c;
        0 < a.normal.x ? (b = a.normal.x * this.min.x, c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x, c = a.normal.x * this.min.x);
        0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
        0 < a.normal.z ? (b += a.normal.z *
            this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
        return b <= a.constant && c >= a.constant
    }, clampPoint: function (a, b) {
        return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var a = new THREE.Vector3;
        return function (b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(), getBoundingSphere: function () {
        var a = new THREE.Vector3;
        return function (b) {
            b = b || new THREE.Sphere;
            b.center = this.center();
            b.radius = .5 * this.size(a).length();
            return b
        }
    }(),
    intersect: function (a) {
        this.min.max(a.min);
        this.max.min(a.max);
        this.isEmpty() && this.makeEmpty();
        return this
    }, union: function (a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    }, applyMatrix4: function () {
        var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function (b) {
            if (this.isEmpty()) return this;
            a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
            a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
            a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
            a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
            a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
            a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
            a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
            a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
            this.setFromPoints(a);
            return this
        }
    }(), translate: function (a) {
        this.min.add(a);
        this.max.add(a);
        return this
    }, equals: function (a) {
        return a.min.equals(this.min) &&
            a.max.equals(this.max)
    }
};
THREE.Matrix3 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
};
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, set: function (a, b, c, d, e, f, g, h, k) {
        var l = this.elements;
        l[0] = a;
        l[1] = d;
        l[2] = g;
        l[3] = b;
        l[4] = e;
        l[5] = h;
        l[6] = c;
        l[7] = f;
        l[8] = k;
        return this
    }, identity: function () {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this
    }, clone: function () {
        return (new this.constructor).fromArray(this.elements)
    }, copy: function (a) {
        a = a.elements;
        this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
        return this
    }, setFromMatrix4: function (a) {
        a = a.elements;
        this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
        return this
    }, applyToVector3Array: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for (var e = 0; e < d; e += 3, c += 3) a.fromArray(b, c), a.applyMatrix3(this), a.toArray(b, c);
            return b
        }
    }(), applyToBuffer: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; e < d; e++, c++) a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix3(this), b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(),
    multiplyScalar: function (a) {
        var b = this.elements;
        b[0] *= a;
        b[3] *= a;
        b[6] *= a;
        b[1] *= a;
        b[4] *= a;
        b[7] *= a;
        b[2] *= a;
        b[5] *= a;
        b[8] *= a;
        return this
    }, determinant: function () {
        var a = this.elements, b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], k = a[7], a = a[8];
        return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
    }, getInverse: function (a, b) {
        a instanceof THREE.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
        var c = a.elements, d = this.elements, e = c[0], f = c[1], g = c[2], h = c[3], k = c[4], l = c[5], n = c[6],
            p = c[7],
            c = c[8], m = c * k - l * p, q = l * n - c * h, r = p * h - k * n, s = e * m + f * q + g * r;
        if (0 === s) {
            if (b) throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
            return this.identity()
        }
        s = 1 / s;
        d[0] = m * s;
        d[1] = (g * p - c * f) * s;
        d[2] = (l * f - g * k) * s;
        d[3] = q * s;
        d[4] = (c * e - g * n) * s;
        d[5] = (g * h - l * e) * s;
        d[6] = r * s;
        d[7] = (f * n - p * e) * s;
        d[8] = (k * e - f * h) * s;
        return this
    }, transpose: function () {
        var a, b = this.elements;
        a = b[1];
        b[1] = b[3];
        b[3] = a;
        a = b[2];
        b[2] = b[6];
        b[6] = a;
        a = b[5];
        b[5] =
            b[7];
        b[7] = a;
        return this
    }, flattenToArrayOffset: function (a, b) {
        console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");
        return this.toArray(a, b)
    }, getNormalMatrix: function (a) {
        return this.setFromMatrix4(a).getInverse(this).transpose()
    }, transposeIntoArray: function (a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[3];
        a[2] = b[6];
        a[3] = b[1];
        a[4] = b[4];
        a[5] = b[7];
        a[6] = b[2];
        a[7] = b[5];
        a[8] = b[8];
        return this
    }, fromArray: function (a) {
        this.elements.set(a);
        return this
    }, toArray: function (a, b) {
        void 0 ===
        a && (a = []);
        void 0 === b && (b = 0);
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        return a
    }
};
THREE.Matrix4 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
};
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4, set: function (a, b, c, d, e, f, g, h, k, l, n, p, m, q, r, s) {
        var t = this.elements;
        t[0] = a;
        t[4] = b;
        t[8] = c;
        t[12] = d;
        t[1] = e;
        t[5] = f;
        t[9] = g;
        t[13] = h;
        t[2] = k;
        t[6] = l;
        t[10] = n;
        t[14] = p;
        t[3] = m;
        t[7] = q;
        t[11] = r;
        t[15] = s;
        return this
    }, identity: function () {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    }, clone: function () {
        return (new THREE.Matrix4).fromArray(this.elements)
    }, copy: function (a) {
        this.elements.set(a.elements);
        return this
    }, copyPosition: function (a) {
        var b = this.elements;
        a = a.elements;
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        return this
    }, extractBasis: function (a, b, c) {
        a.setFromMatrixColumn(this, 0);
        b.setFromMatrixColumn(this, 1);
        c.setFromMatrixColumn(this, 2);
        return this
    }, makeBasis: function (a, b, c) {
        this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
        return this
    }, extractRotation: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Vector3);
            var c = this.elements, d = b.elements, e = 1 / a.setFromMatrixColumn(b, 0).length(),
                f = 1 / a.setFromMatrixColumn(b, 1).length();
            b = 1 / a.setFromMatrixColumn(b,
                2).length();
            c[0] = d[0] * e;
            c[1] = d[1] * e;
            c[2] = d[2] * e;
            c[4] = d[4] * f;
            c[5] = d[5] * f;
            c[6] = d[6] * f;
            c[8] = d[8] * b;
            c[9] = d[9] * b;
            c[10] = d[10] * b;
            return this
        }
    }(), makeRotationFromEuler: function (a) {
        !1 === a instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = Math.cos(c), c = Math.sin(c), g = Math.cos(d),
            d = Math.sin(d), h = Math.cos(e), e = Math.sin(e);
        if ("XYZ" === a.order) {
            a = f * h;
            var k = f * e, l = c * h, n = c * e;
            b[0] = g * h;
            b[4] =
                -g * e;
            b[8] = d;
            b[1] = k + l * d;
            b[5] = a - n * d;
            b[9] = -c * g;
            b[2] = n - a * d;
            b[6] = l + k * d;
            b[10] = f * g
        } else "YXZ" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a + n * c, b[4] = l * c - k, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - l, b[6] = n + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a - n * c, b[4] = -f * e, b[8] = l + k * c, b[1] = k + l * c, b[5] = f * h, b[9] = n - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, l = c * h, n = c * e, b[0] = g * h, b[4] = l * d - k, b[8] = a * d + n, b[1] = g * e, b[5] = n * d + a, b[9] = k * d - l, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f *
            d, l = c * g, n = c * d, b[0] = g * h, b[4] = n - a * e, b[8] = l * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + l, b[10] = a - n * e) : "XZY" === a.order && (a = f * g, k = f * d, l = c * g, n = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + n, b[5] = f * h, b[9] = k * e - l, b[2] = l * e - k, b[6] = c * h, b[10] = n * e + a);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    }, makeRotationFromQuaternion: function (a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w, g = c + c, h = d + d, k = e + e;
        a = c * g;
        var l = c * h, c = c * k, n = d * h, d = d * k, e = e * k, g = f * g, h = f * h, f = f * k;
        b[0] = 1 - (n + e);
        b[4] = l - f;
        b[8] = c + h;
        b[1] = l +
            f;
        b[5] = 1 - (a + e);
        b[9] = d - g;
        b[2] = c - h;
        b[6] = d + g;
        b[10] = 1 - (a + n);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    }, lookAt: function () {
        var a, b, c;
        return function (d, e, f) {
            void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3);
            var g = this.elements;
            c.subVectors(d, e).normalize();
            0 === c.lengthSq() && (c.z = 1);
            a.crossVectors(f, c).normalize();
            0 === a.lengthSq() && (c.z += 1E-4, a.crossVectors(f, c).normalize());
            b.crossVectors(c, a);
            g[0] = a.x;
            g[4] = b.x;
            g[8] = c.x;
            g[1] = a.y;
            g[5] = b.y;
            g[9] = c.y;
            g[2] = a.z;
            g[6] = b.z;
            g[10] = c.z;
            return this
        }
    }(), multiply: function (a, b) {
        return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    }, premultiply: function (a) {
        return this.multiplyMatrices(a, this)
    }, multiplyMatrices: function (a, b) {
        var c = a.elements, d = b.elements, e = this.elements, f = c[0], g = c[4], h = c[8], k = c[12], l = c[1],
            n = c[5], p = c[9], m = c[13], q = c[2], r = c[6], s = c[10], t = c[14], u = c[3], v = c[7], C = c[11],
            c = c[15],
            w = d[0], E = d[4], z = d[8], y = d[12], A = d[1], I = d[5], B = d[9], F = d[13], K = d[2], P = d[6],
            M = d[10], H = d[14], L = d[3], O = d[7], N = d[11], d = d[15];
        e[0] = f * w + g * A + h * K + k * L;
        e[4] = f * E + g * I + h * P + k * O;
        e[8] = f * z + g * B + h * M + k * N;
        e[12] = f * y + g * F + h * H + k * d;
        e[1] = l * w + n * A + p * K + m * L;
        e[5] = l * E + n * I + p * P + m * O;
        e[9] = l * z + n * B + p * M + m * N;
        e[13] = l * y + n * F + p * H + m * d;
        e[2] = q * w + r * A + s * K + t * L;
        e[6] = q * E + r * I + s * P + t * O;
        e[10] = q * z + r * B + s * M + t * N;
        e[14] = q * y + r * F + s * H + t * d;
        e[3] = u * w + v * A + C * K + c * L;
        e[7] = u * E + v * I + C * P + c * O;
        e[11] = u * z + v * B + C * M + c * N;
        e[15] = u * y + v * F + C * H + c * d;
        return this
    }, multiplyToArray: function (a, b,
                                  c) {
        var d = this.elements;
        this.multiplyMatrices(a, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this
    }, multiplyScalar: function (a) {
        var b = this.elements;
        b[0] *= a;
        b[4] *= a;
        b[8] *= a;
        b[12] *= a;
        b[1] *= a;
        b[5] *= a;
        b[9] *= a;
        b[13] *= a;
        b[2] *= a;
        b[6] *= a;
        b[10] *= a;
        b[14] *= a;
        b[3] *= a;
        b[7] *= a;
        b[11] *= a;
        b[15] *= a;
        return this
    }, applyToVector3Array: function () {
        var a;
        return function (b, c, d) {
            void 0 === a &&
            (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for (var e = 0; e < d; e += 3, c += 3) a.fromArray(b, c), a.applyMatrix4(this), a.toArray(b, c);
            return b
        }
    }(), applyToBuffer: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; e < d; e++, c++) a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix4(this), b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(), determinant: function () {
        var a = this.elements, b = a[0], c = a[4], d = a[8], e = a[12], f = a[1], g =
            a[5], h = a[9], k = a[13], l = a[2], n = a[6], p = a[10], m = a[14];
        return a[3] * (+e * h * n - d * k * n - e * g * p + c * k * p + d * g * m - c * h * m) + a[7] * (+b * h * m - b * k * p + e * f * p - d * f * m + d * k * l - e * h * l) + a[11] * (+b * k * n - b * g * m - e * f * n + c * f * m + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * n + b * g * p + d * f * n - c * f * p + c * h * l)
    }, transpose: function () {
        var a = this.elements, b;
        b = a[1];
        a[1] = a[4];
        a[4] = b;
        b = a[2];
        a[2] = a[8];
        a[8] = b;
        b = a[6];
        a[6] = a[9];
        a[9] = b;
        b = a[3];
        a[3] = a[12];
        a[12] = b;
        b = a[7];
        a[7] = a[13];
        a[13] = b;
        b = a[11];
        a[11] = a[14];
        a[14] = b;
        return this
    }, flattenToArrayOffset: function (a, b) {
        console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");
        return this.toArray(a, b)
    }, getPosition: function () {
        var a;
        return function () {
            void 0 === a && (a = new THREE.Vector3);
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            return a.setFromMatrixColumn(this, 3)
        }
    }(), setPosition: function (a) {
        var b = this.elements;
        b[12] = a.x;
        b[13] = a.y;
        b[14] = a.z;
        return this
    }, getInverse: function (a, b) {
        var c = this.elements, d = a.elements, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], n = d[6],
            p = d[7], m = d[8], q = d[9], r = d[10], s = d[11], t = d[12],
            u = d[13], v = d[14], d = d[15], C = q * v * p - u * r * p + u * n * s - l * v * s - q * n * d + l * r * d,
            w = t * r * p - m * v * p - t * n * s + k * v * s + m * n * d - k * r * d,
            E = m * u * p - t * q * p + t * l * s - k * u * s - m * l * d + k * q * d,
            z = t * q * n - m * u * n - t * l * r + k * u * r + m * l * v - k * q * v,
            y = e * C + f * w + g * E + h * z;
        if (0 === y) {
            if (b) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            return this.identity()
        }
        y = 1 / y;
        c[0] = C * y;
        c[1] = (u * r * h - q * v * h - u * g * s + f * v * s + q * g * d - f * r * d) * y;
        c[2] = (l * v * h - u * n * h + u * g * p - f * v * p - l * g * d + f * n * d) * y;
        c[3] =
            (q * n * h - l * r * h - q * g * p + f * r * p + l * g * s - f * n * s) * y;
        c[4] = w * y;
        c[5] = (m * v * h - t * r * h + t * g * s - e * v * s - m * g * d + e * r * d) * y;
        c[6] = (t * n * h - k * v * h - t * g * p + e * v * p + k * g * d - e * n * d) * y;
        c[7] = (k * r * h - m * n * h + m * g * p - e * r * p - k * g * s + e * n * s) * y;
        c[8] = E * y;
        c[9] = (t * q * h - m * u * h - t * f * s + e * u * s + m * f * d - e * q * d) * y;
        c[10] = (k * u * h - t * l * h + t * f * p - e * u * p - k * f * d + e * l * d) * y;
        c[11] = (m * l * h - k * q * h - m * f * p + e * q * p + k * f * s - e * l * s) * y;
        c[12] = z * y;
        c[13] = (m * u * g - t * q * g + t * f * r - e * u * r - m * f * v + e * q * v) * y;
        c[14] = (t * l * g - k * u * g - t * f * n + e * u * n + k * f * v - e * l * v) * y;
        c[15] = (k * q * g - m * l * g + m * f * n - e * q * n - k * f * r + e * l * r) * y;
        return this
    }, scale: function (a) {
        var b =
            this.elements, c = a.x, d = a.y;
        a = a.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a;
        return this
    }, getMaxScaleOnAxis: function () {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
    }, makeTranslation: function (a, b, c) {
        this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this
    }, makeRotationX: function (a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
        return this
    }, makeRotationY: function (a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
        return this
    }, makeRotationZ: function (a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    }, makeRotationAxis: function (a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = 1 - c, f = a.x, g = a.y, h = a.z, k = e * f, l = e * g;
        this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
        return this
    }, makeScale: function (a, b, c) {
        this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c,
            0, 0, 0, 0, 1);
        return this
    }, compose: function (a, b, c) {
        this.makeRotationFromQuaternion(b);
        this.scale(c);
        this.setPosition(a);
        return this
    }, decompose: function () {
        var a, b;
        return function (c, d, e) {
            void 0 === a && (a = new THREE.Vector3, b = new THREE.Matrix4);
            var f = this.elements, g = a.set(f[0], f[1], f[2]).length(), h = a.set(f[4], f[5], f[6]).length(),
                k = a.set(f[8], f[9], f[10]).length();
            0 > this.determinant() && (g = -g);
            c.x = f[12];
            c.y = f[13];
            c.z = f[14];
            b.elements.set(this.elements);
            c = 1 / g;
            var f = 1 / h, l = 1 / k;
            b.elements[0] *= c;
            b.elements[1] *= c;
            b.elements[2] *= c;
            b.elements[4] *= f;
            b.elements[5] *= f;
            b.elements[6] *= f;
            b.elements[8] *= l;
            b.elements[9] *= l;
            b.elements[10] *= l;
            d.setFromRotationMatrix(b);
            e.x = g;
            e.y = h;
            e.z = k;
            return this
        }
    }(), makeFrustum: function (a, b, c, d, e, f) {
        var g = this.elements;
        g[0] = 2 * e / (b - a);
        g[4] = 0;
        g[8] = (b + a) / (b - a);
        g[12] = 0;
        g[1] = 0;
        g[5] = 2 * e / (d - c);
        g[9] = (d + c) / (d - c);
        g[13] = 0;
        g[2] = 0;
        g[6] = 0;
        g[10] = -(f + e) / (f - e);
        g[14] = -2 * f * e / (f - e);
        g[3] = 0;
        g[7] = 0;
        g[11] = -1;
        g[15] = 0;
        return this
    }, makePerspective: function (a, b, c, d) {
        a = c * Math.tan(THREE.Math.DEG2RAD * a * .5);
        var e =
            -a;
        return this.makeFrustum(e * b, a * b, e, a, c, d)
    }, makeOrthographic: function (a, b, c, d, e, f) {
        var g = this.elements, h = 1 / (b - a), k = 1 / (c - d), l = 1 / (f - e);
        g[0] = 2 * h;
        g[4] = 0;
        g[8] = 0;
        g[12] = -((b + a) * h);
        g[1] = 0;
        g[5] = 2 * k;
        g[9] = 0;
        g[13] = -((c + d) * k);
        g[2] = 0;
        g[6] = 0;
        g[10] = -2 * l;
        g[14] = -((f + e) * l);
        g[3] = 0;
        g[7] = 0;
        g[11] = 0;
        g[15] = 1;
        return this
    }, equals: function (a) {
        var b = this.elements;
        a = a.elements;
        for (var c = 0; 16 > c; c++) if (b[c] !== a[c]) return !1;
        return !0
    }, fromArray: function (a) {
        this.elements.set(a);
        return this
    }, toArray: function (a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        a[b + 9] = c[9];
        a[b + 10] = c[10];
        a[b + 11] = c[11];
        a[b + 12] = c[12];
        a[b + 13] = c[13];
        a[b + 14] = c[14];
        a[b + 15] = c[15];
        return a
    }
};
THREE.Ray = function (a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3;
    this.direction = void 0 !== b ? b : new THREE.Vector3
};
THREE.Ray.prototype = {
    constructor: THREE.Ray, set: function (a, b) {
        this.origin.copy(a);
        this.direction.copy(b);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.origin.copy(a.origin);
        this.direction.copy(a.direction);
        return this
    }, at: function (a, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
    }, lookAt: function (a) {
        this.direction.copy(a).sub(this.origin).normalize();
        return this
    }, recast: function () {
        var a = new THREE.Vector3;
        return function (b) {
            this.origin.copy(this.at(b,
                a));
            return this
        }
    }(), closestPointToPoint: function (a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
    }, distanceToPoint: function (a) {
        return Math.sqrt(this.distanceSqToPoint(a))
    }, distanceSqToPoint: function () {
        var a = new THREE.Vector3;
        return function (b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            if (0 > c) return this.origin.distanceToSquared(b);
            a.copy(this.direction).multiplyScalar(c).add(this.origin);
            return a.distanceToSquared(b)
        }
    }(), distanceSqToSegment: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
        return function (d, e, f, g) {
            a.copy(d).add(e).multiplyScalar(.5);
            b.copy(e).sub(d).normalize();
            c.copy(this.origin).sub(a);
            var h = .5 * d.distanceTo(e), k = -this.direction.dot(b), l = c.dot(this.direction), n = -c.dot(b),
                p = c.lengthSq(), m = Math.abs(1 - k * k), q;
            0 < m ? (d = k * n - l, e = k * l - n, q = h * m, 0 <= d ? e >= -q ? e <= q ? (h = 1 / m, d *= h, e *= h, k = d * (d + k * e + 2 * l) + e * (k * d + e + 2 * n) + p) : (e = h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 *
                n) + p) : (e = -h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * n) + p) : e <= -q ? (d = Math.max(0, -(-k * h + l)), e = 0 < d ? -h : Math.min(Math.max(-h, -n), h), k = -d * d + e * (e + 2 * n) + p) : e <= q ? (d = 0, e = Math.min(Math.max(-h, -n), h), k = e * (e + 2 * n) + p) : (d = Math.max(0, -(k * h + l)), e = 0 < d ? h : Math.min(Math.max(-h, -n), h), k = -d * d + e * (e + 2 * n) + p)) : (e = 0 < k ? -h : h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * n) + p);
            f && f.copy(this.direction).multiplyScalar(d).add(this.origin);
            g && g.copy(b).multiplyScalar(e).add(a);
            return k
        }
    }(), intersectSphere: function () {
        var a = new THREE.Vector3;
        return function (b,
                         c) {
            a.subVectors(b.center, this.origin);
            var d = a.dot(this.direction), e = a.dot(a) - d * d, f = b.radius * b.radius;
            if (e > f) return null;
            f = Math.sqrt(f - e);
            e = d - f;
            d += f;
            return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
        }
    }(), intersectsSphere: function (a) {
        return this.distanceToPoint(a.center) <= a.radius
    }, distanceToPlane: function (a) {
        var b = a.normal.dot(this.direction);
        if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
        a = -(this.origin.dot(a.normal) + a.constant) / b;
        return 0 <= a ? a : null
    }, intersectPlane: function (a, b) {
        var c =
            this.distanceToPlane(a);
        return null === c ? null : this.at(c, b)
    }, intersectsPlane: function (a) {
        var b = a.distanceToPoint(this.origin);
        return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
    }, intersectBox: function (a, b) {
        var c, d, e, f, g;
        d = 1 / this.direction.x;
        f = 1 / this.direction.y;
        g = 1 / this.direction.z;
        var h = this.origin;
        0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
        0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
        if (c > f || e > d) return null;
        if (e > c || c !== c) c = e;
        if (f < d || d !==
            d) d = f;
        0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
        if (c > g || e > d) return null;
        if (e > c || c !== c) c = e;
        if (g < d || d !== d) d = g;
        return 0 > d ? null : this.at(0 <= c ? c : d, b)
    }, intersectsBox: function () {
        var a = new THREE.Vector3;
        return function (b) {
            return null !== this.intersectBox(b, a)
        }
    }(), intersectTriangle: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Vector3;
        return function (e, f, g, h, k) {
            b.subVectors(f, e);
            c.subVectors(g, e);
            d.crossVectors(b, c);
            f = this.direction.dot(d);
            if (0 < f) {
                if (h) return null;
                h = 1
            } else if (0 > f) h = -1, f = -f; else return null;
            a.subVectors(this.origin, e);
            e = h * this.direction.dot(c.crossVectors(a, c));
            if (0 > e) return null;
            g = h * this.direction.dot(b.cross(a));
            if (0 > g || e + g > f) return null;
            e = -h * a.dot(d);
            return 0 > e ? null : this.at(e / f, k)
        }
    }(), applyMatrix4: function (a) {
        this.direction.add(this.origin).applyMatrix4(a);
        this.origin.applyMatrix4(a);
        this.direction.sub(this.origin);
        this.direction.normalize();
        return this
    }, equals: function (a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    }
};
THREE.Sphere = function (a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3;
    this.radius = void 0 !== b ? b : 0
};
THREE.Sphere.prototype = {
    constructor: THREE.Sphere, set: function (a, b) {
        this.center.copy(a);
        this.radius = b;
        return this
    }, setFromPoints: function () {
        var a = new THREE.Box3;
        return function (b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
            for (var e = 0, f = 0, g = b.length; f < g; f++) e = Math.max(e, d.distanceToSquared(b[f]));
            this.radius = Math.sqrt(e);
            return this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.center.copy(a.center);
        this.radius = a.radius;
        return this
    },
    empty: function () {
        return 0 >= this.radius
    }, containsPoint: function (a) {
        return a.distanceToSquared(this.center) <= this.radius * this.radius
    }, distanceToPoint: function (a) {
        return a.distanceTo(this.center) - this.radius
    }, intersectsSphere: function (a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    }, intersectsBox: function (a) {
        return a.intersectsSphere(this)
    }, intersectsPlane: function (a) {
        return Math.abs(this.center.dot(a.normal) - a.constant) <= this.radius
    }, clampPoint: function (a, b) {
        var c =
            this.center.distanceToSquared(a), d = b || new THREE.Vector3;
        d.copy(a);
        c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
        return d
    }, getBoundingBox: function (a) {
        a = a || new THREE.Box3;
        a.set(this.center, this.center);
        a.expandByScalar(this.radius);
        return a
    }, applyMatrix4: function (a) {
        this.center.applyMatrix4(a);
        this.radius *= a.getMaxScaleOnAxis();
        return this
    }, translate: function (a) {
        this.center.add(a);
        return this
    }, equals: function (a) {
        return a.center.equals(this.center) &&
            a.radius === this.radius
    }
};
THREE.Frustum = function (a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
};
THREE.Frustum.prototype = {
    constructor: THREE.Frustum, set: function (a, b, c, d, e, f) {
        var g = this.planes;
        g[0].copy(a);
        g[1].copy(b);
        g[2].copy(c);
        g[3].copy(d);
        g[4].copy(e);
        g[5].copy(f);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
        return this
    }, setFromMatrix: function (a) {
        var b = this.planes, c = a.elements;
        a = c[0];
        var d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], k = c[6], l = c[7], n = c[8], p = c[9], m = c[10],
            q = c[11], r = c[12], s = c[13], t = c[14],
            c = c[15];
        b[0].setComponents(f - a, l - g, q - n, c - r).normalize();
        b[1].setComponents(f + a, l + g, q + n, c + r).normalize();
        b[2].setComponents(f + d, l + h, q + p, c + s).normalize();
        b[3].setComponents(f - d, l - h, q - p, c - s).normalize();
        b[4].setComponents(f - e, l - k, q - m, c - t).normalize();
        b[5].setComponents(f + e, l + k, q + m, c + t).normalize();
        return this
    }, intersectsObject: function () {
        var a = new THREE.Sphere;
        return function (b) {
            var c = b.geometry;
            null === c.boundingSphere && c.computeBoundingSphere();
            a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);
            return this.intersectsSphere(a)
        }
    }(),
    intersectsSprite: function () {
        var a = new THREE.Sphere;
        return function (b) {
            a.center.set(0, 0, 0);
            a.radius = .7071067811865476;
            a.applyMatrix4(b.matrixWorld);
            return this.intersectsSphere(a)
        }
    }(), intersectsSphere: function (a) {
        var b = this.planes, c = a.center;
        a = -a.radius;
        for (var d = 0; 6 > d; d++) if (b[d].distanceToPoint(c) < a) return !1;
        return !0
    }, intersectsBox: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c) {
            for (var d = this.planes, e = 0; 6 > e; e++) {
                var f = d[e];
                a.x = 0 < f.normal.x ? c.min.x : c.max.x;
                b.x = 0 < f.normal.x ?
                    c.max.x : c.min.x;
                a.y = 0 < f.normal.y ? c.min.y : c.max.y;
                b.y = 0 < f.normal.y ? c.max.y : c.min.y;
                a.z = 0 < f.normal.z ? c.min.z : c.max.z;
                b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                var g = f.distanceToPoint(a), f = f.distanceToPoint(b);
                if (0 > g && 0 > f) return !1
            }
            return !0
        }
    }(), containsPoint: function (a) {
        for (var b = this.planes, c = 0; 6 > c; c++) if (0 > b[c].distanceToPoint(a)) return !1;
        return !0
    }
};
THREE.Plane = function (a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
    this.constant = void 0 !== b ? b : 0
};
THREE.Plane.prototype = {
    constructor: THREE.Plane, set: function (a, b) {
        this.normal.copy(a);
        this.constant = b;
        return this
    }, setComponents: function (a, b, c, d) {
        this.normal.set(a, b, c);
        this.constant = d;
        return this
    }, setFromNormalAndCoplanarPoint: function (a, b) {
        this.normal.copy(a);
        this.constant = -b.dot(this.normal);
        return this
    }, setFromCoplanarPoints: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c, d, e) {
            d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            this.setFromNormalAndCoplanarPoint(d,
                c);
            return this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.normal.copy(a.normal);
        this.constant = a.constant;
        return this
    }, normalize: function () {
        var a = 1 / this.normal.length();
        this.normal.multiplyScalar(a);
        this.constant *= a;
        return this
    }, negate: function () {
        this.constant *= -1;
        this.normal.negate();
        return this
    }, distanceToPoint: function (a) {
        return this.normal.dot(a) + this.constant
    }, distanceToSphere: function (a) {
        return this.distanceToPoint(a.center) - a.radius
    }, projectPoint: function (a,
                               b) {
        return this.orthoPoint(a, b).sub(a).negate()
    }, orthoPoint: function (a, b) {
        var c = this.distanceToPoint(a);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
    }, intersectLine: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            var d = c || new THREE.Vector3, e = b.delta(a), f = this.normal.dot(e);
            if (0 === f) {
                if (0 === this.distanceToPoint(b.start)) return d.copy(b.start)
            } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
        }
    }(), intersectsLine: function (a) {
        var b =
            this.distanceToPoint(a.start);
        a = this.distanceToPoint(a.end);
        return 0 > b && 0 < a || 0 > a && 0 < b
    }, intersectsBox: function (a) {
        return a.intersectsPlane(this)
    }, intersectsSphere: function (a) {
        return a.intersectsPlane(this)
    }, coplanarPoint: function (a) {
        return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    }, applyMatrix4: function () {
        var a = new THREE.Vector3, b = new THREE.Matrix3;
        return function (c, d) {
            var e = this.coplanarPoint(a).applyMatrix4(c), f = d || b.getNormalMatrix(c),
                f = this.normal.applyMatrix3(f).normalize();
            this.constant = -e.dot(f);
            return this
        }
    }(), translate: function (a) {
        this.constant -= a.dot(this.normal);
        return this
    }, equals: function (a) {
        return a.normal.equals(this.normal) && a.constant === this.constant
    }
};
THREE.Spherical = function (a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.phi = void 0 !== b ? b : 0;
    this.theta = void 0 !== c ? c : 0;
    return this
};
THREE.Spherical.prototype = {
    constructor: THREE.Spherical, set: function (a, b, c) {
        this.radius = a;
        this.phi = b;
        this.theta = c;
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.radius.copy(a.radius);
        this.phi.copy(a.phi);
        this.theta.copy(a.theta);
        return this
    }, makeSafe: function () {
        this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi));
        return this
    }, setFromVector3: function (a) {
        this.radius = a.length();
        0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a.x, a.z), this.phi =
            Math.acos(THREE.Math.clamp(a.y / this.radius, -1, 1)));
        return this
    }
};
THREE.Math = {
    DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () {
        var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d;
        return function () {
            for (var e = 0; 36 > e; e++) 8 === e || 13 === e || 18 === e || 23 === e ? b[e] = "-" : 14 === e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 === e ? d & 3 | 8 : d]);
            return b.join("")
        }
    }(), clamp: function (a, b, c) {
        return Math.max(b, Math.min(c, a))
    }, euclideanModulo: function (a, b) {
        return (a % b + b) % b
    }, mapLinear: function (a, b, c,
                            d, e) {
        return d + (a - b) * (e - d) / (c - b)
    }, smoothstep: function (a, b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * (3 - 2 * a)
    }, smootherstep: function (a, b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * a * (a * (6 * a - 15) + 10)
    }, random16: function () {
        console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");
        return Math.random()
    }, randInt: function (a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    }, randFloat: function (a, b) {
        return a + Math.random() * (b - a)
    }, randFloatSpread: function (a) {
        return a *
            (.5 - Math.random())
    }, degToRad: function (a) {
        return a * THREE.Math.DEG2RAD
    }, radToDeg: function (a) {
        return a * THREE.Math.RAD2DEG
    }, isPowerOfTwo: function (a) {
        return 0 === (a & a - 1) && 0 !== a
    }, nearestPowerOfTwo: function (a) {
        return Math.pow(2, Math.round(Math.log(a) / Math.LN2))
    }, nextPowerOfTwo: function (a) {
        a--;
        a |= a >> 1;
        a |= a >> 2;
        a |= a >> 4;
        a |= a >> 8;
        a |= a >> 16;
        a++;
        return a
    }
};
THREE.Spline = function (a) {
    function b(a, b, c, d, e, f, g) {
        a = .5 * (c - a);
        d = .5 * (d - b);
        return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }

    this.points = a;
    var c = [], d = {x: 0, y: 0, z: 0}, e, f, g, h, k, l, n, p, m;
    this.initFromArray = function (a) {
        this.points = [];
        for (var b = 0; b < a.length; b++) this.points[b] = {x: a[b][0], y: a[b][1], z: a[b][2]}
    };
    this.getPoint = function (a) {
        e = (this.points.length - 1) * a;
        f = Math.floor(e);
        g = e - f;
        c[0] = 0 === f ? f : f - 1;
        c[1] = f;
        c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
        c[3] = f > this.points.length - 3 ? this.points.length - 1 : f +
            2;
        l = this.points[c[0]];
        n = this.points[c[1]];
        p = this.points[c[2]];
        m = this.points[c[3]];
        h = g * g;
        k = g * h;
        d.x = b(l.x, n.x, p.x, m.x, g, h, k);
        d.y = b(l.y, n.y, p.y, m.y, g, h, k);
        d.z = b(l.z, n.z, p.z, m.z, g, h, k);
        return d
    };
    this.getControlPointsArray = function () {
        var a, b, c = this.points.length, d = [];
        for (a = 0; a < c; a++) b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    };
    this.getLength = function (a) {
        var b, c, d, e = b = b = 0, f = new THREE.Vector3, g = new THREE.Vector3, h = [], k = 0;
        h[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        f.copy(this.points[0]);
        for (a = 1; a < c; a++) b =
            a / c, d = this.getPoint(b), g.copy(d), k += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b !== e && (h[b] = k, e = b);
        h[h.length] = k;
        return {chunks: h, total: k}
    };
    this.reparametrizeByArcLength = function (a) {
        var b, c, d, e, f, g, h = [], k = new THREE.Vector3, m = this.getLength();
        h.push(k.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = m.chunks[b] - m.chunks[b - 1];
            g = Math.ceil(a * c / m.total);
            e = (b - 1) / (this.points.length - 1);
            f = b / (this.points.length - 1);
            for (c = 1; c < g - 1; c++) d = e + 1 / g * c * (f - e), d = this.getPoint(d),
                h.push(k.copy(d).clone());
            h.push(k.copy(this.points[b]).clone())
        }
        this.points = h
    }
};
THREE.Triangle = function (a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3;
    this.b = void 0 !== b ? b : new THREE.Vector3;
    this.c = void 0 !== c ? c : new THREE.Vector3
};
THREE.Triangle.normal = function () {
    var a = new THREE.Vector3;
    return function (b, c, d, e) {
        e = e || new THREE.Vector3;
        e.subVectors(d, c);
        a.subVectors(b, c);
        e.cross(a);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
    }
}();
THREE.Triangle.barycoordFromPoint = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function (d, e, f, g, h) {
        a.subVectors(g, e);
        b.subVectors(f, e);
        c.subVectors(d, e);
        d = a.dot(a);
        e = a.dot(b);
        f = a.dot(c);
        var k = b.dot(b);
        g = b.dot(c);
        var l = d * k - e * e;
        h = h || new THREE.Vector3;
        if (0 === l) return h.set(-2, -1, -1);
        l = 1 / l;
        k = (k * f - e * g) * l;
        d = (d * g - e * f) * l;
        return h.set(1 - k - d, d, k)
    }
}();
THREE.Triangle.containsPoint = function () {
    var a = new THREE.Vector3;
    return function (b, c, d, e) {
        b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
        return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
    }
}();
THREE.Triangle.prototype = {
    constructor: THREE.Triangle, set: function (a, b, c) {
        this.a.copy(a);
        this.b.copy(b);
        this.c.copy(c);
        return this
    }, setFromPointsAndIndices: function (a, b, c, d) {
        this.a.copy(a[b]);
        this.b.copy(a[c]);
        this.c.copy(a[d]);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.a.copy(a.a);
        this.b.copy(a.b);
        this.c.copy(a.c);
        return this
    }, area: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function () {
            a.subVectors(this.c, this.b);
            b.subVectors(this.a,
                this.b);
            return .5 * a.cross(b).length()
        }
    }(), midpoint: function (a) {
        return (a || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }, normal: function (a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    }, plane: function (a) {
        return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    }, barycoordFromPoint: function (a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    }, containsPoint: function (a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    },
    closestPointToPoint: function () {
        var a, b, c, d;
        return function (e, f) {
            void 0 === a && (a = new THREE.Plane, b = [new THREE.Line3, new THREE.Line3, new THREE.Line3], c = new THREE.Vector3, d = new THREE.Vector3);
            var g = f || new THREE.Vector3, h = Infinity;
            a.setFromCoplanarPoints(this.a, this.b, this.c);
            a.projectPoint(e, c);
            if (!0 === this.containsPoint(c)) g.copy(c); else {
                b[0].set(this.a, this.b);
                b[1].set(this.b, this.c);
                b[2].set(this.c, this.a);
                for (var k = 0; k < b.length; k++) {
                    b[k].closestPointToPoint(c, !0, d);
                    var l = c.distanceToSquared(d);
                    l <
                    h && (h = l, g.copy(d))
                }
            }
            return g
        }
    }(), equals: function (a) {
        return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
    }
};
THREE.Interpolant = function (a, b, c, d) {
    this.parameterPositions = a;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
    this.sampleValues = b;
    this.valueSize = c
};
THREE.Interpolant.prototype = {
    constructor: THREE.Interpolant, evaluate: function (a) {
        var b = this.parameterPositions, c = this._cachedIndex, d = b[c], e = b[c - 1];
        a:{
            b:{
                c:{
                    d:if (!(a < d)) {
                        for (var f = c + 2; ;) {
                            if (void 0 === d) {
                                if (a < e) break d;
                                this._cachedIndex = c = b.length;
                                return this.afterEnd_(c - 1, a, e)
                            }
                            if (c === f) break;
                            e = d;
                            d = b[++c];
                            if (a < d) break b
                        }
                        d = b.length;
                        break c
                    }
                    if (a >= e) break a; else {
                        f = b[1];
                        a < f && (c = 2, e = f);
                        for (f = c - 2; ;) {
                            if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                            if (c === f) break;
                            d = e;
                            e = b[--c - 1];
                            if (a >= e) break b
                        }
                        d =
                            c;
                        c = 0
                    }
                }
                for (; c < d;) e = c + d >>> 1, a < b[e] ? d = e : c = e + 1;
                d = b[c];
                e = b[c - 1];
                if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                if (void 0 === d) return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a)
            }
            this._cachedIndex = c;
            this.intervalChanged_(c, e, d)
        }
        return this.interpolate_(c, e, a, d)
    }, settings: null, DefaultSettings_: {}, getSettings_: function () {
        return this.settings || this.DefaultSettings_
    }, copySampleValue_: function (a) {
        var b = this.resultBuffer, c = this.sampleValues, d = this.valueSize;
        a *= d;
        for (var e = 0; e !== d; ++e) b[e] =
            c[a + e];
        return b
    }, interpolate_: function (a, b, c, d) {
        throw Error("call to abstract method");
    }, intervalChanged_: function (a, b, c) {
    }
};
Object.assign(THREE.Interpolant.prototype, {
    beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
    afterEnd_: THREE.Interpolant.prototype.copySampleValue_
});
THREE.CubicInterpolant = function (a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d);
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
};
THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.CubicInterpolant,
    DefaultSettings_: {endingStart: THREE.ZeroCurvatureEnding, endingEnd: THREE.ZeroCurvatureEnding},
    intervalChanged_: function (a, b, c) {
        var d = this.parameterPositions, e = a - 2, f = a + 1, g = d[e], h = d[f];
        if (void 0 === g) switch (this.getSettings_().endingStart) {
            case THREE.ZeroSlopeEnding:
                e = a;
                g = 2 * b - c;
                break;
            case THREE.WrapAroundEnding:
                e = d.length - 2;
                g = b + d[e] - d[e + 1];
                break;
            default:
                e = a, g = c
        }
        if (void 0 === h) switch (this.getSettings_().endingEnd) {
            case THREE.ZeroSlopeEnding:
                f =
                    a;
                h = 2 * c - b;
                break;
            case THREE.WrapAroundEnding:
                f = 1;
                h = c + d[1] - d[0];
                break;
            default:
                f = a - 1, h = b
        }
        a = .5 * (c - b);
        d = this.valueSize;
        this._weightPrev = a / (b - g);
        this._weightNext = a / (h - c);
        this._offsetPrev = e * d;
        this._offsetNext = f * d
    },
    interpolate_: function (a, b, c, d) {
        var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
        a *= g;
        var h = a - g, k = this._offsetPrev, l = this._offsetNext, n = this._weightPrev, p = this._weightNext,
            m = (c - b) / (d - b);
        c = m * m;
        d = c * m;
        b = -n * d + 2 * n * c - n * m;
        n = (1 + n) * d + (-1.5 - 2 * n) * c + (-.5 + n) * m + 1;
        m = (-1 - p) * d + (1.5 + p) * c + .5 * m;
        p = p * d - p *
            c;
        for (c = 0; c !== g; ++c) e[c] = b * f[k + c] + n * f[h + c] + m * f[a + c] + p * f[l + c];
        return e
    }
});
THREE.DiscreteInterpolant = function (a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
};
THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.DiscreteInterpolant,
    interpolate_: function (a, b, c, d) {
        return this.copySampleValue_(a - 1)
    }
});
THREE.LinearInterpolant = function (a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
};
THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.LinearInterpolant,
    interpolate_: function (a, b, c, d) {
        var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
        a *= g;
        var h = a - g;
        b = (c - b) / (d - b);
        c = 1 - b;
        for (d = 0; d !== g; ++d) e[d] = f[h + d] * c + f[a + d] * b;
        return e
    }
});
THREE.QuaternionLinearInterpolant = function (a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
};
THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.QuaternionLinearInterpolant,
    interpolate_: function (a, b, c, d) {
        var e = this.resultBuffer, f = this.sampleValues, g = this.valueSize;
        a *= g;
        b = (c - b) / (d - b);
        for (c = a + g; a !== c; a += 4) THREE.Quaternion.slerpFlat(e, 0, f, a - g, f, a, b);
        return e
    }
});
THREE.Clock = function (a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
};
THREE.Clock.prototype = {
    constructor: THREE.Clock, start: function () {
        this.oldTime = this.startTime = (performance || Date).now();
        this.running = !0
    }, stop: function () {
        this.getElapsedTime();
        this.running = !1
    }, getElapsedTime: function () {
        this.getDelta();
        return this.elapsedTime
    }, getDelta: function () {
        var a = 0;
        this.autoStart && !this.running && this.start();
        if (this.running) {
            var b = (performance || Date).now(), a = (b - this.oldTime) / 1E3;
            this.oldTime = b;
            this.elapsedTime += a
        }
        return a
    }
};
THREE.EventDispatcher = function () {
};
Object.assign(THREE.EventDispatcher.prototype, {
    addEventListener: function (a, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a] && (c[a] = []);
        -1 === c[a].indexOf(b) && c[a].push(b)
    }, hasEventListener: function (a, b) {
        if (void 0 === this._listeners) return !1;
        var c = this._listeners;
        return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
    }, removeEventListener: function (a, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners[a];
            if (void 0 !== c) {
                var d = c.indexOf(b);
                -1 !== d && c.splice(d, 1)
            }
        }
    }, dispatchEvent: function (a) {
        if (void 0 !==
            this._listeners) {
            var b = this._listeners[a.type];
            if (void 0 !== b) {
                a.target = this;
                for (var c = [], d = 0, e = b.length, d = 0; d < e; d++) c[d] = b[d];
                for (d = 0; d < e; d++) c[d].call(this, a)
            }
        }
    }
});
THREE.Layers = function () {
    this.mask = 1
};
THREE.Layers.prototype = {
    constructor: THREE.Layers, set: function (a) {
        this.mask = 1 << a
    }, enable: function (a) {
        this.mask |= 1 << a
    }, toggle: function (a) {
        this.mask ^= 1 << a
    }, disable: function (a) {
        this.mask &= ~(1 << a)
    }, test: function (a) {
        return 0 !== (this.mask & a.mask)
    }
};
(function (a) {
    function b(a, b) {
        return a.distance - b.distance
    }

    function c(a, b, f, g) {
        if (!1 !== a.visible && (a.raycast(b, f), !0 === g)) {
            a = a.children;
            g = 0;
            for (var h = a.length; g < h; g++) c(a[g], b, f, !0)
        }
    }

    a.Raycaster = function (b, c, f, g) {
        this.ray = new a.Ray(b, c);
        this.near = f || 0;
        this.far = g || Infinity;
        this.params = {Mesh: {}, Line: {}, LOD: {}, Points: {threshold: 1}, Sprite: {}};
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function () {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points
                }
            }
        })
    };
    a.Raycaster.prototype = {
        constructor: a.Raycaster, linePrecision: 1, set: function (a, b) {
            this.ray.set(a, b)
        }, setFromCamera: function (b, c) {
            c instanceof a.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(c.matrixWorld), this.ray.direction.set(b.x, b.y, .5).unproject(c).sub(this.ray.origin).normalize()) : c instanceof a.OrthographicCamera ? (this.ray.origin.set(b.x, b.y, (c.near + c.far) / (c.near - c.far)).unproject(c), this.ray.direction.set(0, 0, -1).transformDirection(c.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function (a, e) {
            var f = [];
            c(a, this, f, e);
            f.sort(b);
            return f
        }, intersectObjects: function (a, e) {
            var f = [];
            if (!1 === Array.isArray(a)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), f;
            for (var g = 0, h = a.length; g < h; g++) c(a[g], this, f, e);
            f.sort(b);
            return f
        }
    }
})(THREE);
THREE.Object3D = function () {
    Object.defineProperty(this, "id", {value: THREE.Object3DIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = THREE.Object3D.DefaultUp.clone();
    var a = new THREE.Vector3, b = new THREE.Euler, c = new THREE.Quaternion, d = new THREE.Vector3(1, 1, 1);
    b.onChange(function () {
        c.setFromEuler(b, !1)
    });
    c.onChange(function () {
        b.setFromQuaternion(c, void 0, !1)
    });
    Object.defineProperties(this, {
        position: {enumerable: !0, value: a},
        rotation: {
            enumerable: !0,
            value: b
        },
        quaternion: {enumerable: !0, value: c},
        scale: {enumerable: !0, value: d},
        modelViewMatrix: {value: new THREE.Matrix4},
        normalMatrix: {value: new THREE.Matrix3}
    });
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new THREE.Layers;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {}
};
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.DefaultMatrixAutoUpdate = !0;
Object.assign(THREE.Object3D.prototype, THREE.EventDispatcher.prototype, {
    applyMatrix: function (a) {
        this.matrix.multiplyMatrices(a, this.matrix);
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }, setRotationFromAxisAngle: function (a, b) {
        this.quaternion.setFromAxisAngle(a, b)
    }, setRotationFromEuler: function (a) {
        this.quaternion.setFromEuler(a, !0)
    }, setRotationFromMatrix: function (a) {
        this.quaternion.setFromRotationMatrix(a)
    }, setRotationFromQuaternion: function (a) {
        this.quaternion.copy(a)
    }, rotateOnAxis: function () {
        var a =
            new THREE.Quaternion;
        return function (b, c) {
            a.setFromAxisAngle(b, c);
            this.quaternion.multiply(a);
            return this
        }
    }(), rotateX: function () {
        var a = new THREE.Vector3(1, 0, 0);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(), rotateY: function () {
        var a = new THREE.Vector3(0, 1, 0);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(), rotateZ: function () {
        var a = new THREE.Vector3(0, 0, 1);
        return function (b) {
            return this.rotateOnAxis(a, b)
        }
    }(), translateOnAxis: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            a.copy(b).applyQuaternion(this.quaternion);
            this.position.add(a.multiplyScalar(c));
            return this
        }
    }(), translateX: function () {
        var a = new THREE.Vector3(1, 0, 0);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(), translateY: function () {
        var a = new THREE.Vector3(0, 1, 0);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(), translateZ: function () {
        var a = new THREE.Vector3(0, 0, 1);
        return function (b) {
            return this.translateOnAxis(a, b)
        }
    }(), localToWorld: function (a) {
        return a.applyMatrix4(this.matrixWorld)
    }, worldToLocal: function () {
        var a = new THREE.Matrix4;
        return function (b) {
            return b.applyMatrix4(a.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function () {
        var a = new THREE.Matrix4;
        return function (b) {
            a.lookAt(b, this.position, this.up);
            this.quaternion.setFromRotationMatrix(a)
        }
    }(), add: function (a) {
        if (1 < arguments.length) {
            for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
            return this
        }
        if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
        a instanceof THREE.Object3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({type: "added"}), this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",
            a);
        return this
    }, remove: function (a) {
        if (1 < arguments.length) for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
        b = this.children.indexOf(a);
        -1 !== b && (a.parent = null, a.dispatchEvent({type: "removed"}), this.children.splice(b, 1))
    }, getObjectById: function (a) {
        return this.getObjectByProperty("id", a)
    }, getObjectByName: function (a) {
        return this.getObjectByProperty("name", a)
    }, getObjectByProperty: function (a, b) {
        if (this[a] === b) return this;
        for (var c = 0, d = this.children.length; c < d; c++) {
            var e = this.children[c].getObjectByProperty(a,
                b);
            if (void 0 !== e) return e
        }
    }, getWorldPosition: function (a) {
        a = a || new THREE.Vector3;
        this.updateMatrixWorld(!0);
        return a.setFromMatrixPosition(this.matrixWorld)
    }, getWorldQuaternion: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c) {
            c = c || new THREE.Quaternion;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a, c, b);
            return c
        }
    }(), getWorldRotation: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            b = b || new THREE.Euler;
            this.getWorldQuaternion(a);
            return b.setFromQuaternion(a,
                this.rotation.order, !1)
        }
    }(), getWorldScale: function () {
        var a = new THREE.Vector3, b = new THREE.Quaternion;
        return function (c) {
            c = c || new THREE.Vector3;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a, b, c);
            return c
        }
    }(), getWorldDirection: function () {
        var a = new THREE.Quaternion;
        return function (b) {
            b = b || new THREE.Vector3;
            this.getWorldQuaternion(a);
            return b.set(0, 0, 1).applyQuaternion(a)
        }
    }(), raycast: function () {
    }, traverse: function (a) {
        a(this);
        for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverse(a)
    }, traverseVisible: function (a) {
        if (!1 !==
            this.visible) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverseVisible(a)
        }
    }, traverseAncestors: function (a) {
        var b = this.parent;
        null !== b && (a(b), b.traverseAncestors(a))
    }, updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = !0
    }, updateMatrixWorld: function (a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
            this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
    }, toJSON: function (a) {
        function b(a) {
            var b = [], c;
            for (c in a) {
                var d = a[c];
                delete d.metadata;
                b.push(d)
            }
            return b
        }

        var c = void 0 === a || "" === a, d = {};
        c && (a = {geometries: {}, materials: {}, textures: {}, images: {}}, d.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var e = {};
        e.uuid = this.uuid;
        e.type = this.type;
        "" !== this.name && (e.name = this.name);
        "{}" !== JSON.stringify(this.userData) &&
        (e.userData = this.userData);
        !0 === this.castShadow && (e.castShadow = !0);
        !0 === this.receiveShadow && (e.receiveShadow = !0);
        !1 === this.visible && (e.visible = !1);
        e.matrix = this.matrix.toArray();
        void 0 !== this.geometry && (void 0 === a.geometries[this.geometry.uuid] && (a.geometries[this.geometry.uuid] = this.geometry.toJSON(a)), e.geometry = this.geometry.uuid);
        void 0 !== this.material && (void 0 === a.materials[this.material.uuid] && (a.materials[this.material.uuid] = this.material.toJSON(a)), e.material = this.material.uuid);
        if (0 < this.children.length) {
            e.children =
                [];
            for (var f = 0; f < this.children.length; f++) e.children.push(this.children[f].toJSON(a).object)
        }
        if (c) {
            var c = b(a.geometries), f = b(a.materials), g = b(a.textures);
            a = b(a.images);
            0 < c.length && (d.geometries = c);
            0 < f.length && (d.materials = f);
            0 < g.length && (d.textures = g);
            0 < a.length && (d.images = a)
        }
        d.object = e;
        return d
    }, clone: function (a) {
        return (new this.constructor).copy(this, a)
    }, copy: function (a, b) {
        void 0 === b && (b = !0);
        this.name = a.name;
        this.up.copy(a.up);
        this.position.copy(a.position);
        this.quaternion.copy(a.quaternion);
        this.scale.copy(a.scale);
        this.matrix.copy(a.matrix);
        this.matrixWorld.copy(a.matrixWorld);
        this.matrixAutoUpdate = a.matrixAutoUpdate;
        this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
        this.visible = a.visible;
        this.castShadow = a.castShadow;
        this.receiveShadow = a.receiveShadow;
        this.frustumCulled = a.frustumCulled;
        this.renderOrder = a.renderOrder;
        this.userData = JSON.parse(JSON.stringify(a.userData));
        if (!0 === b) for (var c = 0; c < a.children.length; c++) this.add(a.children[c].clone());
        return this
    }
});
THREE.Object3DIdCount = 0;
THREE.Face3 = function (a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = Array.isArray(d) ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = Array.isArray(e) ? e : [];
    this.materialIndex = void 0 !== f ? f : 0
};
THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.a = a.a;
        this.b = a.b;
        this.c = a.c;
        this.normal.copy(a.normal);
        this.color.copy(a.color);
        this.materialIndex = a.materialIndex;
        for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone();
        b = 0;
        for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] = a.vertexColors[b].clone();
        return this
    }
};
THREE.BufferAttribute = function (a, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a;
    this.itemSize = b;
    this.dynamic = !1;
    this.updateRange = {offset: 0, count: -1};
    this.version = 0;
    this.normalized = !0 === c
};
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute, get count() {
        return this.array.length / this.itemSize
    }, set needsUpdate(a) {
        !0 === a && this.version++
    }, setDynamic: function (a) {
        this.dynamic = a;
        return this
    }, copy: function (a) {
        this.array = new a.array.constructor(a.array);
        this.itemSize = a.itemSize;
        this.dynamic = a.dynamic;
        return this
    }, copyAt: function (a, b, c) {
        a *= this.itemSize;
        c *= b.itemSize;
        for (var d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d];
        return this
    }, copyArray: function (a) {
        this.array.set(a);
        return this
    }, copyColorsArray: function (a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new THREE.Color);
            b[c++] = f.r;
            b[c++] = f.g;
            b[c++] = f.b
        }
        return this
    }, copyIndicesArray: function (a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            b[c++] = f.a;
            b[c++] = f.b;
            b[c++] = f.c
        }
        return this
    }, copyVector2sArray: function (a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
                d), f = new THREE.Vector2);
            b[c++] = f.x;
            b[c++] = f.y
        }
        return this
    }, copyVector3sArray: function (a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new THREE.Vector3);
            b[c++] = f.x;
            b[c++] = f.y;
            b[c++] = f.z
        }
        return this
    }, copyVector4sArray: function (a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new THREE.Vector4);
            b[c++] = f.x;
            b[c++] = f.y;
            b[c++] = f.z;
            b[c++] = f.w
        }
        return this
    }, set: function (a, b) {
        void 0 === b && (b = 0);
        this.array.set(a, b);
        return this
    }, getX: function (a) {
        return this.array[a * this.itemSize]
    }, setX: function (a, b) {
        this.array[a * this.itemSize] = b;
        return this
    }, getY: function (a) {
        return this.array[a * this.itemSize + 1]
    }, setY: function (a, b) {
        this.array[a * this.itemSize + 1] = b;
        return this
    }, getZ: function (a) {
        return this.array[a * this.itemSize + 2]
    }, setZ: function (a, b) {
        this.array[a * this.itemSize + 2] = b;
        return this
    }, getW: function (a) {
        return this.array[a *
        this.itemSize + 3]
    }, setW: function (a, b) {
        this.array[a * this.itemSize + 3] = b;
        return this
    }, setXY: function (a, b, c) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        return this
    }, setXYZ: function (a, b, c, d) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        this.array[a + 2] = d;
        return this
    }, setXYZW: function (a, b, c, d, e) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        this.array[a + 2] = d;
        this.array[a + 3] = e;
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
};
THREE.Int8Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Int8Array(a), b)
};
THREE.Uint8Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Uint8Array(a), b)
};
THREE.Uint8ClampedAttribute = function (a, b) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(a), b)
};
THREE.Int16Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Int16Array(a), b)
};
THREE.Uint16Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Uint16Array(a), b)
};
THREE.Int32Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Int32Array(a), b)
};
THREE.Uint32Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Uint32Array(a), b)
};
THREE.Float32Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Float32Array(a), b)
};
THREE.Float64Attribute = function (a, b) {
    return new THREE.BufferAttribute(new Float64Array(a), b)
};
THREE.DynamicBufferAttribute = function (a, b) {
    console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
    return (new THREE.BufferAttribute(a, b)).setDynamic(!0)
};
THREE.InstancedBufferAttribute = function (a, b, c) {
    THREE.BufferAttribute.call(this, a, b);
    this.meshPerAttribute = c || 1
};
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute;
THREE.InstancedBufferAttribute.prototype.copy = function (a) {
    THREE.BufferAttribute.prototype.copy.call(this, a);
    this.meshPerAttribute = a.meshPerAttribute;
    return this
};
THREE.InterleavedBuffer = function (a, b) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a;
    this.stride = b;
    this.dynamic = !1;
    this.updateRange = {offset: 0, count: -1};
    this.version = 0
};
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer, get length() {
        return this.array.length
    }, get count() {
        return this.array.length / this.stride
    }, set needsUpdate(a) {
        !0 === a && this.version++
    }, setDynamic: function (a) {
        this.dynamic = a;
        return this
    }, copy: function (a) {
        this.array = new a.array.constructor(a.array);
        this.stride = a.stride;
        this.dynamic = a.dynamic;
        return this
    }, copyAt: function (a, b, c) {
        a *= this.stride;
        c *= b.stride;
        for (var d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d];
        return this
    }, set: function (a,
                      b) {
        void 0 === b && (b = 0);
        this.array.set(a, b);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
};
THREE.InstancedInterleavedBuffer = function (a, b, c) {
    THREE.InterleavedBuffer.call(this, a, b);
    this.meshPerAttribute = c || 1
};
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype);
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy = function (a) {
    THREE.InterleavedBuffer.prototype.copy.call(this, a);
    this.meshPerAttribute = a.meshPerAttribute;
    return this
};
THREE.InterleavedBufferAttribute = function (a, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.data = a;
    this.itemSize = b;
    this.offset = c
};
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute, get length() {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
        return this.array.length
    }, get count() {
        return this.data.count
    }, setX: function (a, b) {
        this.data.array[a * this.data.stride + this.offset] = b;
        return this
    }, setY: function (a, b) {
        this.data.array[a * this.data.stride + this.offset + 1] = b;
        return this
    }, setZ: function (a, b) {
        this.data.array[a * this.data.stride + this.offset + 2] = b;
        return this
    },
    setW: function (a, b) {
        this.data.array[a * this.data.stride + this.offset + 3] = b;
        return this
    }, getX: function (a) {
        return this.data.array[a * this.data.stride + this.offset]
    }, getY: function (a) {
        return this.data.array[a * this.data.stride + this.offset + 1]
    }, getZ: function (a) {
        return this.data.array[a * this.data.stride + this.offset + 2]
    }, getW: function (a) {
        return this.data.array[a * this.data.stride + this.offset + 3]
    }, setXY: function (a, b, c) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        return this
    }, setXYZ: function (a,
                         b, c, d) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        this.data.array[a + 2] = d;
        return this
    }, setXYZW: function (a, b, c, d, e) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        this.data.array[a + 2] = d;
        this.data.array[a + 3] = e;
        return this
    }
};
THREE.Geometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate =
        this.verticesNeedUpdate = !1
};
Object.assign(THREE.Geometry.prototype, THREE.EventDispatcher.prototype, {
    applyMatrix: function (a) {
        for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            a = this.faces[c];
            a.normal.applyMatrix3(b).normalize();
            for (var e = 0, f = a.vertexNormals.length; e < f; e++) a.vertexNormals[e].applyMatrix3(b).normalize()
        }
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
        this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
        return this
    }, rotateX: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationX(b);
            this.applyMatrix(a);
            return this
        }
    }(), rotateY: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationY(b);
            this.applyMatrix(a);
            return this
        }
    }(), rotateZ: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationZ(b);
            this.applyMatrix(a);
            return this
        }
    }(), translate: function () {
        var a;
        return function (b,
                         c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeTranslation(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(), scale: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeScale(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(), lookAt: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Object3D);
            a.lookAt(b);
            a.updateMatrix();
            this.applyMatrix(a.matrix)
        }
    }(), fromBufferGeometry: function (a) {
        function b(a, b, d, e) {
            var f = void 0 !== g ? [n[a].clone(), n[b].clone(), n[d].clone()] : [],
                q = void 0 !== h ? [c.colors[a].clone(),
                    c.colors[b].clone(), c.colors[d].clone()] : [];
            e = new THREE.Face3(a, b, d, f, q, e);
            c.faces.push(e);
            void 0 !== k && c.faceVertexUvs[0].push([p[a].clone(), p[b].clone(), p[d].clone()]);
            void 0 !== l && c.faceVertexUvs[1].push([m[a].clone(), m[b].clone(), m[d].clone()])
        }

        var c = this, d = null !== a.index ? a.index.array : void 0, e = a.attributes, f = e.position.array,
            g = void 0 !== e.normal ? e.normal.array : void 0, h = void 0 !== e.color ? e.color.array : void 0,
            k = void 0 !== e.uv ? e.uv.array : void 0, l = void 0 !== e.uv2 ? e.uv2.array : void 0;
        void 0 !== l && (this.faceVertexUvs[1] =
            []);
        for (var n = [], p = [], m = [], q = e = 0; e < f.length; e += 3, q += 2) c.vertices.push(new THREE.Vector3(f[e], f[e + 1], f[e + 2])), void 0 !== g && n.push(new THREE.Vector3(g[e], g[e + 1], g[e + 2])), void 0 !== h && c.colors.push(new THREE.Color(h[e], h[e + 1], h[e + 2])), void 0 !== k && p.push(new THREE.Vector2(k[q], k[q + 1])), void 0 !== l && m.push(new THREE.Vector2(l[q], l[q + 1]));
        if (void 0 !== d) if (f = a.groups, 0 < f.length) for (e = 0; e < f.length; e++) for (var r = f[e], s = r.start, t = r.count, q = s, s = s + t; q < s; q += 3) b(d[q], d[q + 1], d[q + 2], r.materialIndex); else for (e = 0; e <
        d.length; e += 3) b(d[e], d[e + 1], d[e + 2]); else for (e = 0; e < f.length / 3; e += 3) b(e, e + 1, e + 2);
        this.computeFaceNormals();
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
        return this
    }, center: function () {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        this.translate(a.x, a.y, a.z);
        return a
    }, normalize: function () {
        this.computeBoundingSphere();
        var a = this.boundingSphere.center, b = this.boundingSphere.radius, b = 0 === b ? 1 : 1 /
            b, c = new THREE.Matrix4;
        c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
        this.applyMatrix(c);
        return this
    }, computeFaceNormals: function () {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
            var e = this.faces[c], f = this.vertices[e.a], g = this.vertices[e.b];
            a.subVectors(this.vertices[e.c], g);
            b.subVectors(f, g);
            a.cross(b);
            a.normalize();
            e.normal.copy(a)
        }
    }, computeVertexNormals: function (a) {
        void 0 === a && (a = !0);
        var b, c, d;
        d = Array(this.vertices.length);
        b = 0;
        for (c = this.vertices.length; b <
        c; b++) d[b] = new THREE.Vector3;
        if (a) {
            var e, f, g, h = new THREE.Vector3, k = new THREE.Vector3;
            a = 0;
            for (b = this.faces.length; a < b; a++) c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h)
        } else for (a = 0, b = this.faces.length; a < b; a++) c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
        b = 0;
        for (c = this.vertices.length; b < c; b++) d[b].normalize();
        a = 0;
        for (b = this.faces.length; a < b; a++) c =
            this.faces[a], e = c.vertexNormals, 3 === e.length ? (e[0].copy(d[c.a]), e[1].copy(d[c.b]), e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(), e[1] = d[c.b].clone(), e[2] = d[c.c].clone());
        0 < this.faces.length && (this.normalsNeedUpdate = !0)
    }, computeMorphNormals: function () {
        var a, b, c, d, e;
        c = 0;
        for (d = this.faces.length; c < d; c++) for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a <
        b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
        var f = new THREE.Geometry;
        f.faces = this.faces;
        a = 0;
        for (b = this.morphTargets.length; a < b; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {};
                this.morphNormals[a].faceNormals = [];
                this.morphNormals[a].vertexNormals = [];
                e = this.morphNormals[a].faceNormals;
                var g = this.morphNormals[a].vertexNormals, h, k;
                c = 0;
                for (d = this.faces.length; c < d; c++) h = new THREE.Vector3, k = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3, c: new THREE.Vector3
                }, e.push(h), g.push(k)
            }
            g = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices;
            f.computeFaceNormals();
            f.computeVertexNormals();
            c = 0;
            for (d = this.faces.length; c < d; c++) e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])
        }
        c = 0;
        for (d = this.faces.length; c < d; c++) e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
    }, computeTangents: function () {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function () {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        this.boundingBox.setFromPoints(this.vertices)
    }, computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
        this.boundingSphere.setFromPoints(this.vertices)
    }, merge: function (a, b, c) {
        if (!1 === a instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
            a); else {
            var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, k = a.faces,
                l = this.faceVertexUvs[0];
            a = a.faceVertexUvs[0];
            void 0 === c && (c = 0);
            void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
            for (var n = 0, p = g.length; n < p; n++) {
                var m = g[n].clone();
                void 0 !== b && m.applyMatrix4(b);
                f.push(m)
            }
            n = 0;
            for (p = k.length; n < p; n++) {
                var g = k[n], q, r = g.vertexNormals, s = g.vertexColors,
                    m = new THREE.Face3(g.a + e, g.b + e, g.c + e);
                m.normal.copy(g.normal);
                void 0 !== d && m.normal.applyMatrix3(d).normalize();
                b = 0;
                for (f = r.length; b <
                f; b++) q = r[b].clone(), void 0 !== d && q.applyMatrix3(d).normalize(), m.vertexNormals.push(q);
                m.color.copy(g.color);
                b = 0;
                for (f = s.length; b < f; b++) q = s[b], m.vertexColors.push(q.clone());
                m.materialIndex = g.materialIndex + c;
                h.push(m)
            }
            n = 0;
            for (p = a.length; n < p; n++) if (c = a[n], d = [], void 0 !== c) {
                b = 0;
                for (f = c.length; b < f; b++) d.push(c[b].clone());
                l.push(d)
            }
        }
    }, mergeMesh: function (a) {
        !1 === a instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a) : (a.matrixAutoUpdate && a.updateMatrix(),
            this.merge(a.geometry, a.matrix))
    }, mergeVertices: function () {
        var a = {}, b = [], c = [], d, e = Math.pow(10, 4), f, g;
        f = 0;
        for (g = this.vertices.length; f < g; f++) d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
        a = [];
        f = 0;
        for (g = this.faces.length; f < g; f++) for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++) if (e[d] === e[(d + 1) % 3]) {
            a.push(f);
            break
        }
        for (f = a.length - 1; 0 <= f; f--) for (e = a[f], this.faces.splice(e,
            1), c = 0, g = this.faceVertexUvs.length; c < g; c++) this.faceVertexUvs[c].splice(e, 1);
        f = this.vertices.length - b.length;
        this.vertices = b;
        return f
    }, sortFacesByMaterialIndex: function () {
        for (var a = this.faces, b = a.length, c = 0; c < b; c++) a[c]._id = c;
        a.sort(function (a, b) {
            return a.materialIndex - b.materialIndex
        });
        var d = this.faceVertexUvs[0], e = this.faceVertexUvs[1], f, g;
        d && d.length === b && (f = []);
        e && e.length === b && (g = []);
        for (c = 0; c < b; c++) {
            var h = a[c]._id;
            f && f.push(d[h]);
            g && g.push(e[h])
        }
        f && (this.faceVertexUvs[0] = f);
        g && (this.faceVertexUvs[1] =
            g)
    }, toJSON: function () {
        function a(a, b, c) {
            return c ? a | 1 << b : a & ~(1 << b)
        }

        function b(a) {
            var b = a.x.toString() + a.y.toString() + a.z.toString();
            if (void 0 !== l[b]) return l[b];
            l[b] = k.length / 3;
            k.push(a.x, a.y, a.z);
            return l[b]
        }

        function c(a) {
            var b = a.r.toString() + a.g.toString() + a.b.toString();
            if (void 0 !== p[b]) return p[b];
            p[b] = n.length;
            n.push(a.getHex());
            return p[b]
        }

        function d(a) {
            var b = a.x.toString() + a.y.toString();
            if (void 0 !== q[b]) return q[b];
            q[b] = m.length / 2;
            m.push(a.x, a.y);
            return q[b]
        }

        var e = {
            metadata: {
                version: 4.4, type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        e.uuid = this.uuid;
        e.type = this.type;
        "" !== this.name && (e.name = this.name);
        if (void 0 !== this.parameters) {
            var f = this.parameters, g;
            for (g in f) void 0 !== f[g] && (e[g] = f[g]);
            return e
        }
        f = [];
        for (g = 0; g < this.vertices.length; g++) {
            var h = this.vertices[g];
            f.push(h.x, h.y, h.z)
        }
        var h = [], k = [], l = {}, n = [], p = {}, m = [], q = {};
        for (g = 0; g < this.faces.length; g++) {
            var r = this.faces[g], s = void 0 !== this.faceVertexUvs[0][g], t = 0 < r.normal.length(),
                u = 0 < r.vertexNormals.length, v = 1 !== r.color.r || 1 !== r.color.g || 1 !== r.color.b,
                C = 0 < r.vertexColors.length, w = 0, w = a(w, 0, 0), w = a(w, 1, !0), w = a(w, 2, !1), w = a(w, 3, s),
                w = a(w, 4, t), w = a(w, 5, u), w = a(w, 6, v), w = a(w, 7, C);
            h.push(w);
            h.push(r.a, r.b, r.c);
            h.push(r.materialIndex);
            s && (s = this.faceVertexUvs[0][g], h.push(d(s[0]), d(s[1]), d(s[2])));
            t && h.push(b(r.normal));
            u && (t = r.vertexNormals, h.push(b(t[0]), b(t[1]), b(t[2])));
            v && h.push(c(r.color));
            C && (r = r.vertexColors, h.push(c(r[0]), c(r[1]), c(r[2])))
        }
        e.data = {};
        e.data.vertices = f;
        e.data.normals = k;
        0 < n.length && (e.data.colors = n);
        0 < m.length && (e.data.uvs = [m]);
        e.data.faces =
            h;
        return e
    }, clone: function () {
        return (new THREE.Geometry).copy(this)
    }, copy: function (a) {
        this.vertices = [];
        this.faces = [];
        this.faceVertexUvs = [[]];
        for (var b = a.vertices, c = 0, d = b.length; c < d; c++) this.vertices.push(b[c].clone());
        b = a.faces;
        c = 0;
        for (d = b.length; c < d; c++) this.faces.push(b[c].clone());
        c = 0;
        for (d = a.faceVertexUvs.length; c < d; c++) {
            b = a.faceVertexUvs[c];
            void 0 === this.faceVertexUvs[c] && (this.faceVertexUvs[c] = []);
            for (var e = 0, f = b.length; e < f; e++) {
                for (var g = b[e], h = [], k = 0, l = g.length; k < l; k++) h.push(g[k].clone());
                this.faceVertexUvs[c].push(h)
            }
        }
        return this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
});
THREE.GeometryIdCount = 0;
THREE.DirectGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "DirectGeometry";
    this.indices = [];
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
};
Object.assign(THREE.DirectGeometry.prototype, THREE.EventDispatcher.prototype, {
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function () {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function () {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function (a) {
        var b,
            c = [], d;
        a = a.faces;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            f.materialIndex !== d && (d = f.materialIndex, void 0 !== b && (b.count = 3 * e - b.start, c.push(b)), b = {
                start: 3 * e,
                materialIndex: d
            })
        }
        void 0 !== b && (b.count = 3 * e - b.start, c.push(b));
        this.groups = c
    },
    fromGeometry: function (a) {
        var b = a.faces, c = a.vertices, d = a.faceVertexUvs, e = d[0] && 0 < d[0].length, f = d[1] && 0 < d[1].length,
            g = a.morphTargets, h = g.length, k;
        if (0 < h) {
            k = [];
            for (var l = 0; l < h; l++) k[l] = [];
            this.morphTargets.position = k
        }
        var n = a.morphNormals, p = n.length, m;
        if (0 < p) {
            m = [];
            for (l = 0; l <
            p; l++) m[l] = [];
            this.morphTargets.normal = m
        }
        for (var q = a.skinIndices, r = a.skinWeights, s = q.length === c.length, t = r.length === c.length, l = 0; l < b.length; l++) {
            var u = b[l];
            this.vertices.push(c[u.a], c[u.b], c[u.c]);
            var v = u.vertexNormals;
            3 === v.length ? this.normals.push(v[0], v[1], v[2]) : (v = u.normal, this.normals.push(v, v, v));
            v = u.vertexColors;
            3 === v.length ? this.colors.push(v[0], v[1], v[2]) : (v = u.color, this.colors.push(v, v, v));
            !0 === e && (v = d[0][l], void 0 !== v ? this.uvs.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
                l), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            !0 === f && (v = d[1][l], void 0 !== v ? this.uvs2.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            for (v = 0; v < h; v++) {
                var C = g[v].vertices;
                k[v].push(C[u.a], C[u.b], C[u.c])
            }
            for (v = 0; v < p; v++) C = n[v].vertexNormals[l], m[v].push(C.a, C.b, C.c);
            s && this.skinIndices.push(q[u.a], q[u.b], q[u.c]);
            t && this.skinWeights.push(r[u.a], r[u.b],
                r[u.c])
        }
        this.computeGroups(a);
        this.verticesNeedUpdate = a.verticesNeedUpdate;
        this.normalsNeedUpdate = a.normalsNeedUpdate;
        this.colorsNeedUpdate = a.colorsNeedUpdate;
        this.uvsNeedUpdate = a.uvsNeedUpdate;
        this.groupsNeedUpdate = a.groupsNeedUpdate;
        return this
    },
    dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
});
THREE.BufferGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = {start: 0, count: Infinity}
};
Object.assign(THREE.BufferGeometry.prototype, THREE.EventDispatcher.prototype, {
    getIndex: function () {
        return this.index
    }, setIndex: function (a) {
        this.index = a
    }, addAttribute: function (a, b, c) {
        if (!1 === b instanceof THREE.BufferAttribute && !1 === b instanceof THREE.InterleavedBufferAttribute) console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(a, new THREE.BufferAttribute(b, c)); else if ("index" === a) console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(b); else return this.attributes[a] = b, this
    }, getAttribute: function (a) {
        return this.attributes[a]
    }, removeAttribute: function (a) {
        delete this.attributes[a];
        return this
    }, addGroup: function (a, b, c) {
        this.groups.push({start: a, count: b, materialIndex: void 0 !== c ? c : 0})
    }, clearGroups: function () {
        this.groups = []
    }, setDrawRange: function (a, b) {
        this.drawRange.start = a;
        this.drawRange.count = b
    }, applyMatrix: function (a) {
        var b = this.attributes.position;
        void 0 !== b && (a.applyToVector3Array(b.array), b.needsUpdate = !0);
        b = this.attributes.normal;
        void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array), b.needsUpdate = !0);
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
        return this
    }, rotateX: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationX(b);
            this.applyMatrix(a);
            return this
        }
    }(), rotateY: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationY(b);
            this.applyMatrix(a);
            return this
        }
    }(), rotateZ: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationZ(b);
            this.applyMatrix(a);
            return this
        }
    }(), translate: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeTranslation(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(), scale: function () {
        var a;
        return function (b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeScale(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(), lookAt: function () {
        var a;
        return function (b) {
            void 0 === a && (a = new THREE.Object3D);
            a.lookAt(b);
            a.updateMatrix();
            this.applyMatrix(a.matrix)
        }
    }(),
    center: function () {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        this.translate(a.x, a.y, a.z);
        return a
    }, setFromObject: function (a) {
        var b = a.geometry;
        if (a instanceof THREE.Points || a instanceof THREE.Line) {
            a = new THREE.Float32Attribute(3 * b.vertices.length, 3);
            var c = new THREE.Float32Attribute(3 * b.colors.length, 3);
            this.addAttribute("position", a.copyVector3sArray(b.vertices));
            this.addAttribute("color", c.copyColorsArray(b.colors));
            b.lineDistances && b.lineDistances.length === b.vertices.length &&
            (a = new THREE.Float32Attribute(b.lineDistances.length, 1), this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
            null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
            null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
        } else a instanceof THREE.Mesh && b instanceof THREE.Geometry && this.fromGeometry(b);
        return this
    }, updateFromObject: function (a) {
        var b = a.geometry;
        if (a instanceof THREE.Mesh) {
            var c = b.__directGeometry;
            if (void 0 === c) return this.fromGeometry(b);
            c.verticesNeedUpdate =
                b.verticesNeedUpdate;
            c.normalsNeedUpdate = b.normalsNeedUpdate;
            c.colorsNeedUpdate = b.colorsNeedUpdate;
            c.uvsNeedUpdate = b.uvsNeedUpdate;
            c.groupsNeedUpdate = b.groupsNeedUpdate;
            b.verticesNeedUpdate = !1;
            b.normalsNeedUpdate = !1;
            b.colorsNeedUpdate = !1;
            b.uvsNeedUpdate = !1;
            b.groupsNeedUpdate = !1;
            b = c
        }
        !0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
        !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals),
            c.needsUpdate = !0), b.normalsNeedUpdate = !1);
        !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
        b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
        b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
        b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups =
            b.groups, b.groupsNeedUpdate = !1);
        return this
    }, fromGeometry: function (a) {
        a.__directGeometry = (new THREE.DirectGeometry).fromGeometry(a);
        return this.fromDirectGeometry(a.__directGeometry)
    }, fromDirectGeometry: function (a) {
        var b = new Float32Array(3 * a.vertices.length);
        this.addAttribute("position", (new THREE.BufferAttribute(b, 3)).copyVector3sArray(a.vertices));
        0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.addAttribute("normal", (new THREE.BufferAttribute(b, 3)).copyVector3sArray(a.normals)));
        0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.addAttribute("color", (new THREE.BufferAttribute(b, 3)).copyColorsArray(a.colors)));
        0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.addAttribute("uv", (new THREE.BufferAttribute(b, 2)).copyVector2sArray(a.uvs)));
        0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length), this.addAttribute("uv2", (new THREE.BufferAttribute(b, 2)).copyVector2sArray(a.uvs2)));
        0 < a.indices.length && (b = new (65535 < a.vertices.length ? Uint32Array : Uint16Array)(3 * a.indices.length),
            this.setIndex((new THREE.BufferAttribute(b, 1)).copyIndicesArray(a.indices)));
        this.groups = a.groups;
        for (var c in a.morphTargets) {
            for (var b = [], d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
                var g = d[e], h = new THREE.Float32Attribute(3 * g.length, 3);
                b.push(h.copyVector3sArray(g))
            }
            this.morphAttributes[c] = b
        }
        0 < a.skinIndices.length && (c = new THREE.Float32Attribute(4 * a.skinIndices.length, 4), this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
        0 < a.skinWeights.length && (c = new THREE.Float32Attribute(4 * a.skinWeights.length,
            4), this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
        return this
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        var a = this.attributes.position.array;
        void 0 !== a ? this.boundingBox.setFromArray(a) : this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
        console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }, computeBoundingSphere: function () {
        var a = new THREE.Box3, b = new THREE.Vector3;
        return function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position;
            if (c) {
                var c = c.array, d = this.boundingSphere.center;
                a.setFromArray(c);
                a.center(d);
                for (var e = 0, f = 0, g = c.length; f < g; f += 3) b.fromArray(c, f), e = Math.max(e, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(e);
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(), computeFaceNormals: function () {
    }, computeVertexNormals: function () {
        var a = this.index, b = this.attributes, c = this.groups;
        if (b.position) {
            var d = b.position.array;
            if (void 0 === b.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(d.length), 3)); else for (var e = b.normal.array,
                                                                                                                                          f = 0, g = e.length; f < g; f++) e[f] = 0;
            var e = b.normal.array, h, k, l, n = new THREE.Vector3, p = new THREE.Vector3, m = new THREE.Vector3,
                q = new THREE.Vector3, r = new THREE.Vector3;
            if (a) {
                a = a.array;
                0 === c.length && this.addGroup(0, a.length);
                for (var s = 0, t = c.length; s < t; ++s) for (f = c[s], g = f.start, h = f.count, f = g, g += h; f < g; f += 3) h = 3 * a[f + 0], k = 3 * a[f + 1], l = 3 * a[f + 2], n.fromArray(d, h), p.fromArray(d, k), m.fromArray(d, l), q.subVectors(m, p), r.subVectors(n, p), q.cross(r), e[h] += q.x, e[h + 1] += q.y, e[h + 2] += q.z, e[k] += q.x, e[k + 1] += q.y, e[k + 2] += q.z, e[l] += q.x,
                    e[l + 1] += q.y, e[l + 2] += q.z
            } else for (f = 0, g = d.length; f < g; f += 9) n.fromArray(d, f), p.fromArray(d, f + 3), m.fromArray(d, f + 6), q.subVectors(m, p), r.subVectors(n, p), q.cross(r), e[f] = q.x, e[f + 1] = q.y, e[f + 2] = q.z, e[f + 3] = q.x, e[f + 4] = q.y, e[f + 5] = q.z, e[f + 6] = q.x, e[f + 7] = q.y, e[f + 8] = q.z;
            this.normalizeNormals();
            b.normal.needsUpdate = !0
        }
    }, merge: function (a, b) {
        if (!1 === a instanceof THREE.BufferGeometry) console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a); else {
            void 0 === b && (b = 0);
            var c = this.attributes,
                d;
            for (d in c) if (void 0 !== a.attributes[d]) for (var e = c[d].array, f = a.attributes[d], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++, f++) e[f] = g[h];
            return this
        }
    }, normalizeNormals: function () {
        for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b
    }, toNonIndexed: function () {
        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
        var a = new THREE.BufferGeometry,
            b = this.index.array, c = this.attributes, d;
        for (d in c) {
            for (var e = c[d], f = e.array, e = e.itemSize, g = new f.constructor(b.length * e), h = 0, k = 0, l = 0, n = b.length; l < n; l++) for (var h = b[l] * e, p = 0; p < e; p++) g[k++] = f[h++];
            a.addAttribute(d, new THREE.BufferAttribute(g, e))
        }
        return a
    }, toJSON: function () {
        var a = {metadata: {version: 4.4, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
        a.uuid = this.uuid;
        a.type = this.type;
        "" !== this.name && (a.name = this.name);
        if (void 0 !== this.parameters) {
            var b = this.parameters, c;
            for (c in b) void 0 !==
            b[c] && (a[c] = b[c]);
            return a
        }
        a.data = {attributes: {}};
        var d = this.index;
        null !== d && (b = Array.prototype.slice.call(d.array), a.data.index = {
            type: d.array.constructor.name,
            array: b
        });
        d = this.attributes;
        for (c in d) {
            var e = d[c], b = Array.prototype.slice.call(e.array);
            a.data.attributes[c] = {
                itemSize: e.itemSize,
                type: e.array.constructor.name,
                array: b,
                normalized: e.normalized
            }
        }
        c = this.groups;
        0 < c.length && (a.data.groups = JSON.parse(JSON.stringify(c)));
        c = this.boundingSphere;
        null !== c && (a.data.boundingSphere = {
            center: c.center.toArray(),
            radius: c.radius
        });
        return a
    }, clone: function () {
        return (new THREE.BufferGeometry).copy(this)
    }, copy: function (a) {
        var b = a.index;
        null !== b && this.setIndex(b.clone());
        var b = a.attributes, c;
        for (c in b) this.addAttribute(c, b[c].clone());
        a = a.groups;
        c = 0;
        for (b = a.length; c < b; c++) {
            var d = a[c];
            this.addGroup(d.start, d.count, d.materialIndex)
        }
        return this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
});
THREE.BufferGeometry.MaxIndex = 65535;
THREE.InstancedBufferGeometry = function () {
    THREE.BufferGeometry.call(this);
    this.type = "InstancedBufferGeometry";
    this.maxInstancedCount = void 0
};
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry;
THREE.InstancedBufferGeometry.prototype.addGroup = function (a, b, c) {
    this.groups.push({start: a, count: b, instances: c})
};
THREE.InstancedBufferGeometry.prototype.copy = function (a) {
    var b = a.index;
    null !== b && this.setIndex(b.clone());
    var b = a.attributes, c;
    for (c in b) this.addAttribute(c, b[c].clone());
    a = a.groups;
    c = 0;
    for (b = a.length; c < b; c++) {
        var d = a[c];
        this.addGroup(d.start, d.count, d.instances)
    }
    return this
};
THREE.Uniform = function (a, b) {
    "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
    this.value = a;
    this.dynamic = !1
};
THREE.Uniform.prototype = {
    constructor: THREE.Uniform, onUpdate: function (a) {
        this.dynamic = !0;
        this.onUpdateCallback = a;
        return this
    }
};
THREE.AnimationAction = function () {
    throw Error("THREE.AnimationAction: Use mixer.clipAction for construction.");
};
THREE.AnimationAction._new = function (a, b, c) {
    this._mixer = a;
    this._clip = b;
    this._localRoot = c || null;
    a = b.tracks;
    b = a.length;
    c = Array(b);
    for (var d = {endingStart: THREE.ZeroCurvatureEnding, endingEnd: THREE.ZeroCurvatureEnding}, e = 0; e !== b; ++e) {
        var f = a[e].createInterpolant(null);
        c[e] = f;
        f.settings = d
    }
    this._interpolantSettings = d;
    this._interpolants = c;
    this._propertyBindings = Array(b);
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
    this.loop = THREE.LoopRepeat;
    this._loopCount =
        -1;
    this._startTime = null;
    this.time = 0;
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
    this.repetitions = Infinity;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
};
THREE.AnimationAction._new.prototype = {
    constructor: THREE.AnimationAction._new, play: function () {
        this._mixer._activateAction(this);
        return this
    }, stop: function () {
        this._mixer._deactivateAction(this);
        return this.reset()
    }, reset: function () {
        this.paused = !1;
        this.enabled = !0;
        this.time = 0;
        this._loopCount = -1;
        this._startTime = null;
        return this.stopFading().stopWarping()
    }, isRunning: function () {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    }, isScheduled: function () {
        return this._mixer._isActiveAction(this)
    },
    startAt: function (a) {
        this._startTime = a;
        return this
    }, setLoop: function (a, b) {
        this.loop = a;
        this.repetitions = b;
        return this
    }, setEffectiveWeight: function (a) {
        this.weight = a;
        this._effectiveWeight = this.enabled ? a : 0;
        return this.stopFading()
    }, getEffectiveWeight: function () {
        return this._effectiveWeight
    }, fadeIn: function (a) {
        return this._scheduleFading(a, 0, 1)
    }, fadeOut: function (a) {
        return this._scheduleFading(a, 1, 0)
    }, crossFadeFrom: function (a, b, c) {
        a.fadeOut(b);
        this.fadeIn(b);
        if (c) {
            c = this._clip.duration;
            var d = a._clip.duration,
                e = c / d;
            a.warp(1, d / c, b);
            this.warp(e, 1, b)
        }
        return this
    }, crossFadeTo: function (a, b, c) {
        return a.crossFadeFrom(this, b, c)
    }, stopFading: function () {
        var a = this._weightInterpolant;
        null !== a && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(a));
        return this
    }, setEffectiveTimeScale: function (a) {
        this.timeScale = a;
        this._effectiveTimeScale = this.paused ? 0 : a;
        return this.stopWarping()
    }, getEffectiveTimeScale: function () {
        return this._effectiveTimeScale
    }, setDuration: function (a) {
        this.timeScale = this._clip.duration /
            a;
        return this.stopWarping()
    }, syncWith: function (a) {
        this.time = a.time;
        this.timeScale = a.timeScale;
        return this.stopWarping()
    }, halt: function (a) {
        return this.warp(this._effectiveTimeScale, 0, a)
    }, warp: function (a, b, c) {
        var d = this._mixer, e = d.time, f = this._timeScaleInterpolant, g = this.timeScale;
        null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
        d = f.parameterPositions;
        f = f.sampleValues;
        d[0] = e;
        d[1] = e + c;
        f[0] = a / g;
        f[1] = b / g;
        return this
    }, stopWarping: function () {
        var a = this._timeScaleInterpolant;
        null !== a &&
        (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a));
        return this
    }, getMixer: function () {
        return this._mixer
    }, getClip: function () {
        return this._clip
    }, getRoot: function () {
        return this._localRoot || this._mixer._root
    }, _update: function (a, b, c, d) {
        var e = this._startTime;
        if (null !== e) {
            b = (a - e) * c;
            if (0 > b || 0 === c) return;
            this._startTime = null;
            b *= c
        }
        b *= this._updateTimeScale(a);
        c = this._updateTime(b);
        a = this._updateWeight(a);
        if (0 < a) {
            b = this._interpolants;
            for (var e = this._propertyBindings, f = 0, g = b.length; f !==
            g; ++f) b[f].evaluate(c), e[f].accumulate(d, a)
        }
    }, _updateWeight: function (a) {
        var b = 0;
        if (this.enabled) {
            var b = this.weight, c = this._weightInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0], b = b * d;
                a > c.parameterPositions[1] && (this.stopFading(), 0 === d && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = b
    }, _updateTimeScale: function (a) {
        var b = 0;
        if (!this.paused) {
            var b = this.timeScale, c = this._timeScaleInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0], b = b * d;
                a > c.parameterPositions[1] && (this.stopWarping(), 0 === b ? this.paused = !0 :
                    this.timeScale = b)
            }
        }
        return this._effectiveTimeScale = b
    }, _updateTime: function (a) {
        var b = this.time + a;
        if (0 === a) return b;
        var c = this._clip.duration, d = this.loop, e = this._loopCount;
        if (d === THREE.LoopOnce) a:{
            if (-1 === e && (this.loopCount = 0, this._setEndings(!0, !0, !1)), b >= c) b = c; else if (0 > b) b = 0; else break a;
            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
            this._mixer.dispatchEvent({type: "finished", action: this, direction: 0 > a ? -1 : 1})
        } else {
            d = d === THREE.LoopPingPong;
            -1 === e && (0 <= a ? (e = 0, this._setEndings(!0, 0 === this.repetitions,
                d)) : this._setEndings(0 === this.repetitions, !0, d));
            if (b >= c || 0 > b) {
                var f = Math.floor(b / c), b = b - c * f, e = e + Math.abs(f), g = this.repetitions - e;
                0 > g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, b = 0 < a ? c : 0, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 < a ? 1 : -1
                })) : (0 === g ? (a = 0 > a, this._setEndings(a, !a, d)) : this._setEndings(!1, !1, d), this._loopCount = e, this._mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: f
                }))
            }
            if (d && 1 === (e & 1)) return this.time = b, c - b
        }
        return this.time = b
    }, _setEndings: function (a,
                              b, c) {
        var d = this._interpolantSettings;
        c ? (d.endingStart = THREE.ZeroSlopeEnding, d.endingEnd = THREE.ZeroSlopeEnding) : (d.endingStart = a ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding, d.endingEnd = b ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
    }, _scheduleFading: function (a, b, c) {
        var d = this._mixer, e = d.time, f = this._weightInterpolant;
        null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
        d = f.parameterPositions;
        f = f.sampleValues;
        d[0] = e;
        f[0] = b;
        d[1] = e + a;
        f[1] = c;
        return this
    }
};
THREE.AnimationClip = function (a, b, c) {
    this.name = a;
    this.tracks = c;
    this.duration = void 0 !== b ? b : -1;
    this.uuid = THREE.Math.generateUUID();
    0 > this.duration && this.resetDuration();
    this.trim();
    this.optimize()
};
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip, resetDuration: function () {
        for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) var d = this.tracks[b], a = Math.max(a, d.times[d.times.length - 1]);
        this.duration = a
    }, trim: function () {
        for (var a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration);
        return this
    }, optimize: function () {
        for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();
        return this
    }
};
Object.assign(THREE.AnimationClip, {
    parse: function (a) {
        for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e) b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));
        return new THREE.AnimationClip(a.name, a.duration, b)
    }, toJSON: function (a) {
        var b = [], c = a.tracks;
        a = {name: a.name, duration: a.duration, tracks: b};
        for (var d = 0, e = c.length; d !== e; ++d) b.push(THREE.KeyframeTrack.toJSON(c[d]));
        return a
    }, CreateFromMorphTargetSequence: function (a, b, c, d) {
        for (var e = b.length, f = [], g = 0; g < e; g++) {
            var h = [], k = [];
            h.push((g + e - 1) %
                e, g, (g + 1) % e);
            k.push(0, 1, 0);
            var l = THREE.AnimationUtils.getKeyframeOrder(h), h = THREE.AnimationUtils.sortedArray(h, 1, l),
                k = THREE.AnimationUtils.sortedArray(k, 1, l);
            d || 0 !== h[0] || (h.push(e), k.push(k[0]));
            f.push((new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + b[g].name + "]", h, k)).scale(1 / c))
        }
        return new THREE.AnimationClip(a, -1, f)
    }, findByName: function (a, b) {
        var c = a;
        Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
        for (var d = 0; d < c.length; d++) if (c[d].name === b) return c[d];
        return null
    },
    CreateClipsFromMorphTargetSequences: function (a, b, c) {
        for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) {
            var h = a[f], k = h.name.match(e);
            if (k && 1 < k.length) {
                var l = k[1];
                (k = d[l]) || (d[l] = k = []);
                k.push(h)
            }
        }
        a = [];
        for (l in d) a.push(THREE.AnimationClip.CreateFromMorphTargetSequence(l, d[l], b, c));
        return a
    }, parseAnimation: function (a, b, c) {
        if (!a) return console.error("  no animation in JSONLoader data"), null;
        c = function (a, b, c, d, e) {
            if (0 !== c.length) {
                var f = [], g = [];
                THREE.AnimationUtils.flattenJSON(c, f, g, d);
                0 !== f.length &&
                e.push(new a(b, f, g))
            }
        };
        var d = [], e = a.name || "default", f = a.length || -1, g = a.fps || 30;
        a = a.hierarchy || [];
        for (var h = 0; h < a.length; h++) {
            var k = a[h].keys;
            if (k && 0 !== k.length) if (k[0].morphTargets) {
                for (var f = {}, l = 0; l < k.length; l++) if (k[l].morphTargets) for (var n = 0; n < k[l].morphTargets.length; n++) f[k[l].morphTargets[n]] = -1;
                for (var p in f) {
                    for (var m = [], q = [], n = 0; n !== k[l].morphTargets.length; ++n) {
                        var r = k[l];
                        m.push(r.time);
                        q.push(r.morphTarget === p ? 1 : 0)
                    }
                    d.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + p + "]",
                        m, q))
                }
                f = f.length * (g || 1)
            } else l = ".bones[" + b[h].name + "]", c(THREE.VectorKeyframeTrack, l + ".position", k, "pos", d), c(THREE.QuaternionKeyframeTrack, l + ".quaternion", k, "rot", d), c(THREE.VectorKeyframeTrack, l + ".scale", k, "scl", d)
        }
        return 0 === d.length ? null : new THREE.AnimationClip(e, f, d)
    }
});
THREE.AnimationMixer = function (a) {
    this._root = a;
    this._initMemoryManager();
    this.time = this._accuIndex = 0;
    this.timeScale = 1
};
Object.assign(THREE.AnimationMixer.prototype, THREE.EventDispatcher.prototype, {
    clipAction: function (a, b) {
        var c = b || this._root, d = c.uuid, e = "string" === typeof a ? THREE.AnimationClip.findByName(c, a) : a,
            c = null !== e ? e.uuid : a, f = this._actionsByClip[c], g = null;
        if (void 0 !== f) {
            g = f.actionByRoot[d];
            if (void 0 !== g) return g;
            g = f.knownActions[0];
            null === e && (e = g._clip)
        }
        if (null === e) return null;
        e = new THREE.AnimationMixer._Action(this, e, b);
        this._bindAction(e, g);
        this._addInactiveAction(e, c, d);
        return e
    }, existingAction: function (a,
                                 b) {
        var c = b || this._root, d = c.uuid, c = "string" === typeof a ? THREE.AnimationClip.findByName(c, a) : a,
            c = this._actionsByClip[c ? c.uuid : a];
        return void 0 !== c ? c.actionByRoot[d] || null : null
    }, stopAllAction: function () {
        for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e) a[e].reset();
        for (e = 0; e !== d; ++e) c[e].useCount = 0;
        return this
    }, update: function (a) {
        a *= this.timeScale;
        for (var b = this._actions, c = this._nActiveActions, d = this.time +=
            a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g) {
            var h = b[g];
            h.enabled && h._update(d, a, e, f)
        }
        a = this._bindings;
        b = this._nActiveBindings;
        for (g = 0; g !== b; ++g) a[g].apply(f);
        return this
    }, getRoot: function () {
        return this._root
    }, uncacheClip: function (a) {
        var b = this._actions;
        a = a.uuid;
        var c = this._actionsByClip, d = c[a];
        if (void 0 !== d) {
            for (var d = d.knownActions, e = 0, f = d.length; e !== f; ++e) {
                var g = d[e];
                this._deactivateAction(g);
                var h = g._cacheIndex, k = b[b.length - 1];
                g._cacheIndex = null;
                g._byClipCacheIndex = null;
                k._cacheIndex =
                    h;
                b[h] = k;
                b.pop();
                this._removeInactiveBindingsForAction(g)
            }
            delete c[a]
        }
    }, uncacheRoot: function (a) {
        a = a.uuid;
        var b = this._actionsByClip, c;
        for (c in b) {
            var d = b[c].actionByRoot[a];
            void 0 !== d && (this._deactivateAction(d), this._removeInactiveAction(d))
        }
        c = this._bindingsByRootAndName[a];
        if (void 0 !== c) for (var e in c) a = c[e], a.restoreOriginalState(), this._removeInactiveBinding(a)
    }, uncacheAction: function (a, b) {
        var c = this.existingAction(a, b);
        null !== c && (this._deactivateAction(c), this._removeInactiveAction(c))
    }
});
THREE.AnimationMixer._Action = THREE.AnimationAction._new;
Object.assign(THREE.AnimationMixer.prototype, {
    _bindAction: function (a, b) {
        var c = a._localRoot || this._root, d = a._clip.tracks, e = d.length, f = a._propertyBindings,
            g = a._interpolants, h = c.uuid, k = this._bindingsByRootAndName, l = k[h];
        void 0 === l && (l = {}, k[h] = l);
        for (k = 0; k !== e; ++k) {
            var n = d[k], p = n.name, m = l[p];
            if (void 0 === m) {
                m = f[k];
                if (void 0 !== m) {
                    null === m._cacheIndex && (++m.referenceCount, this._addInactiveBinding(m, h, p));
                    continue
                }
                m = new THREE.PropertyMixer(THREE.PropertyBinding.create(c, p, b && b._propertyBindings[k].binding.parsedPath),
                    n.ValueTypeName, n.getValueSize());
                ++m.referenceCount;
                this._addInactiveBinding(m, h, p)
            }
            f[k] = m;
            g[k].resultBuffer = m.buffer
        }
    }, _activateAction: function (a) {
        if (!this._isActiveAction(a)) {
            if (null === a._cacheIndex) {
                var b = (a._localRoot || this._root).uuid, c = a._clip.uuid, d = this._actionsByClip[c];
                this._bindAction(a, d && d.knownActions[0]);
                this._addInactiveAction(a, c, b)
            }
            b = a._propertyBindings;
            c = 0;
            for (d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState())
            }
            this._lendAction(a)
        }
    },
    _deactivateAction: function (a) {
        if (this._isActiveAction(a)) {
            for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === --e.useCount && (e.restoreOriginalState(), this._takeBackBinding(e))
            }
            this._takeBackAction(a)
        }
    }, _initMemoryManager: function () {
        this._actions = [];
        this._nActiveActions = 0;
        this._actionsByClip = {};
        this._bindings = [];
        this._nActiveBindings = 0;
        this._bindingsByRootAndName = {};
        this._controlInterpolants = [];
        this._nActiveControlInterpolants = 0;
        var a = this;
        this.stats = {
            actions: {
                get total() {
                    return a._actions.length
                },
                get inUse() {
                    return a._nActiveActions
                }
            }, bindings: {
                get total() {
                    return a._bindings.length
                }, get inUse() {
                    return a._nActiveBindings
                }
            }, controlInterpolants: {
                get total() {
                    return a._controlInterpolants.length
                }, get inUse() {
                    return a._nActiveControlInterpolants
                }
            }
        }
    }, _isActiveAction: function (a) {
        a = a._cacheIndex;
        return null !== a && a < this._nActiveActions
    }, _addInactiveAction: function (a, b, c) {
        var d = this._actions, e = this._actionsByClip, f = e[b];
        void 0 === f ? (f = {knownActions: [a], actionByRoot: {}}, a._byClipCacheIndex = 0, e[b] = f) : (b =
            f.knownActions, a._byClipCacheIndex = b.length, b.push(a));
        a._cacheIndex = d.length;
        d.push(a);
        f.actionByRoot[c] = a
    }, _removeInactiveAction: function (a) {
        var b = this._actions, c = b[b.length - 1], d = a._cacheIndex;
        c._cacheIndex = d;
        b[d] = c;
        b.pop();
        a._cacheIndex = null;
        var c = a._clip.uuid, d = this._actionsByClip, e = d[c], f = e.knownActions, g = f[f.length - 1],
            h = a._byClipCacheIndex;
        g._byClipCacheIndex = h;
        f[h] = g;
        f.pop();
        a._byClipCacheIndex = null;
        delete e.actionByRoot[(b._localRoot || this._root).uuid];
        0 === f.length && delete d[c];
        this._removeInactiveBindingsForAction(a)
    },
    _removeInactiveBindingsForAction: function (a) {
        a = a._propertyBindings;
        for (var b = 0, c = a.length; b !== c; ++b) {
            var d = a[b];
            0 === --d.referenceCount && this._removeInactiveBinding(d)
        }
    }, _lendAction: function (a) {
        var b = this._actions, c = a._cacheIndex, d = this._nActiveActions++, e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    }, _takeBackAction: function (a) {
        var b = this._actions, c = a._cacheIndex, d = --this._nActiveActions, e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    }, _addInactiveBinding: function (a, b, c) {
        var d = this._bindingsByRootAndName,
            e = d[b], f = this._bindings;
        void 0 === e && (e = {}, d[b] = e);
        e[c] = a;
        a._cacheIndex = f.length;
        f.push(a)
    }, _removeInactiveBinding: function (a) {
        var b = this._bindings, c = a.binding, d = c.rootNode.uuid, c = c.path, e = this._bindingsByRootAndName,
            f = e[d], g = b[b.length - 1];
        a = a._cacheIndex;
        g._cacheIndex = a;
        b[a] = g;
        b.pop();
        delete f[c];
        a:{
            for (var h in f) break a;
            delete e[d]
        }
    }, _lendBinding: function (a) {
        var b = this._bindings, c = a._cacheIndex, d = this._nActiveBindings++, e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    }, _takeBackBinding: function (a) {
        var b =
            this._bindings, c = a._cacheIndex, d = --this._nActiveBindings, e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    }, _lendControlInterpolant: function () {
        var a = this._controlInterpolants, b = this._nActiveControlInterpolants++, c = a[b];
        void 0 === c && (c = new THREE.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), c.__cacheIndex = b, a[b] = c);
        return c
    }, _takeBackControlInterpolant: function (a) {
        var b = this._controlInterpolants, c = a.__cacheIndex, d = --this._nActiveControlInterpolants,
            e = b[d];
        a.__cacheIndex = d;
        b[d] = a;
        e.__cacheIndex = c;
        b[c] = e
    }, _controlInterpolantsResultBuffer: new Float32Array(1)
});
THREE.AnimationObjectGroup = function (a) {
    this.uuid = THREE.Math.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var b = {};
    this._indicesByUUID = b;
    for (var c = 0, d = arguments.length; c !== d; ++c) b[arguments[c].uuid] = c;
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var e = this;
    this.stats = {
        objects: {
            get total() {
                return e._objects.length
            }, get inUse() {
                return this.total - e.nCachedObjects_
            }
        }, get bindingsPerObject() {
            return e._bindings.length
        }
    }
};
THREE.AnimationObjectGroup.prototype = {
    constructor: THREE.AnimationObjectGroup, add: function (a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._paths, g = this._parsedPaths, h = this._bindings, k = h.length, l = 0, n = arguments.length; l !== n; ++l) {
            var p = arguments[l], m = p.uuid, q = e[m];
            if (void 0 === q) {
                q = c++;
                e[m] = q;
                b.push(p);
                for (var m = 0, r = k; m !== r; ++m) h[m].push(new THREE.PropertyBinding(p, f[m], g[m]))
            } else if (q < d) {
                var s = b[q], t = --d, r = b[t];
                e[r.uuid] = q;
                b[q] = r;
                e[m] = t;
                b[t] = p;
                m = 0;
                for (r = k; m !==
                r; ++m) {
                    var u = h[m], v = u[q];
                    u[q] = u[t];
                    void 0 === v && (v = new THREE.PropertyBinding(p, f[m], g[m]));
                    u[t] = v
                }
            } else b[q] !== s && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
        }
        this.nCachedObjects_ = d
    }, remove: function (a) {
        for (var b = this._objects, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
            var k = arguments[g], l = k.uuid, n = d[l];
            if (void 0 !== n && n >= c) {
                var p = c++, m = b[p];
                d[m.uuid] =
                    n;
                b[n] = m;
                d[l] = p;
                b[p] = k;
                k = 0;
                for (l = f; k !== l; ++k) {
                    var m = e[k], q = m[n];
                    m[n] = m[p];
                    m[p] = q
                }
            }
        }
        this.nCachedObjects_ = c
    }, uncache: function (a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._bindings, g = f.length, h = 0, k = arguments.length; h !== k; ++h) {
            var l = arguments[h].uuid, n = e[l];
            if (void 0 !== n) if (delete e[l], n < d) {
                var l = --d, p = b[l], m = --c, q = b[m];
                e[p.uuid] = n;
                b[n] = p;
                e[q.uuid] = l;
                b[l] = q;
                b.pop();
                p = 0;
                for (q = g; p !== q; ++p) {
                    var r = f[p], s = r[m];
                    r[n] = r[l];
                    r[l] = s;
                    r.pop()
                }
            } else for (m = --c, q = b[m], e[q.uuid] =
                n, b[n] = q, b.pop(), p = 0, q = g; p !== q; ++p) r = f[p], r[n] = r[m], r.pop()
        }
        this.nCachedObjects_ = d
    }, subscribe_: function (a, b) {
        var c = this._bindingsIndicesByPath, d = c[a], e = this._bindings;
        if (void 0 !== d) return e[d];
        var f = this._paths, g = this._parsedPaths, h = this._objects, k = this.nCachedObjects_, l = Array(h.length),
            d = e.length;
        c[a] = d;
        f.push(a);
        g.push(b);
        e.push(l);
        c = k;
        for (d = h.length; c !== d; ++c) l[c] = new THREE.PropertyBinding(h[c], a, b);
        return l
    }, unsubscribe_: function (a) {
        var b = this._bindingsIndicesByPath, c = b[a];
        if (void 0 !== c) {
            var d =
                this._paths, e = this._parsedPaths, f = this._bindings, g = f.length - 1, h = f[g];
            b[a[g]] = c;
            f[c] = h;
            f.pop();
            e[c] = e[g];
            e.pop();
            d[c] = d[g];
            d.pop()
        }
    }
};
THREE.AnimationUtils = {
    arraySlice: function (a, b, c) {
        return THREE.AnimationUtils.isTypedArray(a) ? new a.constructor(a.subarray(b, c)) : a.slice(b, c)
    }, convertArray: function (a, b, c) {
        return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
    }, isTypedArray: function (a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView)
    }, getKeyframeOrder: function (a) {
        for (var b = a.length, c = Array(b), d = 0; d !== b; ++d) c[d] = d;
        c.sort(function (b, c) {
            return a[b] - a[c]
        });
        return c
    }, sortedArray: function (a,
                              b, c) {
        for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f) for (var h = c[f] * b, k = 0; k !== b; ++k) e[g++] = a[h + k];
        return e
    }, flattenJSON: function (a, b, c, d) {
        for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];) f = a[e++];
        if (void 0 !== f) {
            var g = f[d];
            if (void 0 !== g) if (Array.isArray(g)) {
                do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++]; while (void 0 !== f)
            } else if (void 0 !== g.toArray) {
                do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f)
            } else {
                do g = f[d], void 0 !== g && (b.push(f.time),
                    c.push(g)), f = a[e++]; while (void 0 !== f)
            }
        }
    }
};
THREE.KeyframeTrack = function (a, b, c, d) {
    if (void 0 === a) throw Error("track name is undefined");
    if (void 0 === b || 0 === b.length) throw Error("no keyframes in track named " + a);
    this.name = a;
    this.times = THREE.AnimationUtils.convertArray(b, this.TimeBufferType);
    this.values = THREE.AnimationUtils.convertArray(c, this.ValueBufferType);
    this.setInterpolation(d || this.DefaultInterpolation);
    this.validate();
    this.optimize()
};
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodDiscrete: function (a) {
        return new THREE.DiscreteInterpolant(this.times, this.values, this.getValueSize(), a)
    },
    InterpolantFactoryMethodLinear: function (a) {
        return new THREE.LinearInterpolant(this.times, this.values, this.getValueSize(), a)
    },
    InterpolantFactoryMethodSmooth: function (a) {
        return new THREE.CubicInterpolant(this.times,
            this.values, this.getValueSize(), a)
    },
    setInterpolation: function (a) {
        var b;
        switch (a) {
            case THREE.InterpolateDiscrete:
                b = this.InterpolantFactoryMethodDiscrete;
                break;
            case THREE.InterpolateLinear:
                b = this.InterpolantFactoryMethodLinear;
                break;
            case THREE.InterpolateSmooth:
                b = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === b) {
            b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
            else throw Error(b);
            console.warn(b)
        } else this.createInterpolant = b
    },
    getInterpolation: function () {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return THREE.InterpolateDiscrete;
            case this.InterpolantFactoryMethodLinear:
                return THREE.InterpolateLinear;
            case this.InterpolantFactoryMethodSmooth:
                return THREE.InterpolateSmooth
        }
    },
    getValueSize: function () {
        return this.values.length / this.times.length
    },
    shift: function (a) {
        if (0 !== a) for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] += a;
        return this
    },
    scale: function (a) {
        if (1 !== a) for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] *= a;
        return this
    },
    trim: function (a, b) {
        for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;) ++e;
        for (; -1 !== f && c[f] > b;) --f;
        ++f;
        if (0 !== e || f !== d) e >= f && (f = Math.max(f, 1), e = f - 1), d = this.getValueSize(), this.times = THREE.AnimationUtils.arraySlice(c, e, f), this.values = THREE.AnimationUtils.arraySlice(this.values, e * d, f * d);
        return this
    },
    validate: function () {
        var a = !0, b = this.getValueSize();
        0 !== b - Math.floor(b) && (console.error("invalid value size in track",
            this), a = !1);
        var c = this.times, b = this.values, d = c.length;
        0 === d && (console.error("track is empty", this), a = !1);
        for (var e = null, f = 0; f !== d; f++) {
            var g = c[f];
            if ("number" === typeof g && isNaN(g)) {
                console.error("time is not a valid number", this, f, g);
                a = !1;
                break
            }
            if (null !== e && e > g) {
                console.error("out of order keys", this, f, g, e);
                a = !1;
                break
            }
            e = g
        }
        if (void 0 !== b && THREE.AnimationUtils.isTypedArray(b)) for (f = 0, c = b.length; f !== c; ++f) if (d = b[f], isNaN(d)) {
            console.error("value is not a valid number", this, f, d);
            a = !1;
            break
        }
        return a
    },
    optimize: function () {
        for (var a =
            this.times, b = this.values, c = this.getValueSize(), d = 1, e = 1, f = a.length - 1; e <= f; ++e) {
            var g = !1, h = a[e];
            if (h !== a[e + 1] && (1 !== e || h !== h[0])) for (var k = e * c, l = k - c, n = k + c, h = 0; h !== c; ++h) {
                var p = b[k + h];
                if (p !== b[l + h] || p !== b[n + h]) {
                    g = !0;
                    break
                }
            }
            if (g) {
                if (e !== d) for (a[d] = a[e], g = e * c, k = d * c, h = 0; h !== c; ++h) b[k + h] = b[g + h];
                ++d
            }
        }
        d !== a.length && (this.times = THREE.AnimationUtils.arraySlice(a, 0, d), this.values = THREE.AnimationUtils.arraySlice(b, 0, d * c));
        return this
    }
};
Object.assign(THREE.KeyframeTrack, {
    parse: function (a) {
        if (void 0 === a.type) throw Error("track type undefined, can not parse");
        var b = THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);
        if (void 0 === a.times) {
            var c = [], d = [];
            THREE.AnimationUtils.flattenJSON(a.keys, c, d, "value");
            a.times = c;
            a.values = d
        }
        return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation)
    }, toJSON: function (a) {
        var b = a.constructor;
        if (void 0 !== b.toJSON) b = b.toJSON(a); else {
            var b = {
                name: a.name, times: THREE.AnimationUtils.convertArray(a.times,
                    Array), values: THREE.AnimationUtils.convertArray(a.values, Array)
            }, c = a.getInterpolation();
            c !== a.DefaultInterpolation && (b.interpolation = c)
        }
        b.type = a.ValueTypeName;
        return b
    }, _getTrackTypeForValueTypeName: function (a) {
        switch (a.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return THREE.NumberKeyframeTrack;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return THREE.VectorKeyframeTrack;
            case "color":
                return THREE.ColorKeyframeTrack;
            case "quaternion":
                return THREE.QuaternionKeyframeTrack;
            case "bool":
            case "boolean":
                return THREE.BooleanKeyframeTrack;
            case "string":
                return THREE.StringKeyframeTrack
        }
        throw Error("Unsupported typeName: " + a);
    }
});
THREE.PropertyBinding = function (a, b, c) {
    this.path = b;
    this.parsedPath = c || THREE.PropertyBinding.parseTrackName(b);
    this.node = THREE.PropertyBinding.findNode(a, this.parsedPath.nodeName) || a;
    this.rootNode = a
};
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding, getValue: function (a, b) {
        this.bind();
        this.getValue(a, b)
    }, setValue: function (a, b) {
        this.bind();
        this.setValue(a, b)
    }, bind: function () {
        var a = this.node, b = this.parsedPath, c = b.objectName, d = b.propertyName, e = b.propertyIndex;
        a || (this.node = a = THREE.PropertyBinding.findNode(this.rootNode, b.nodeName) || this.rootNode);
        this.getValue = this._getValue_unavailable;
        this.setValue = this._setValue_unavailable;
        if (a) {
            if (c) {
                var f = b.objectIndex;
                switch (c) {
                    case "materials":
                        if (!a.material) {
                            console.error("  can not bind to material as node does not have a material",
                                this);
                            return
                        }
                        if (!a.material.materials) {
                            console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                            return
                        }
                        a = a.material.materials;
                        break;
                    case "bones":
                        if (!a.skeleton) {
                            console.error("  can not bind to bones as node does not have a skeleton", this);
                            return
                        }
                        a = a.skeleton.bones;
                        for (c = 0; c < a.length; c++) if (a[c].name === f) {
                            f = c;
                            break
                        }
                        break;
                    default:
                        if (void 0 === a[c]) {
                            console.error("  can not bind to objectName of node, undefined", this);
                            return
                        }
                        a = a[c]
                }
                if (void 0 !== f) {
                    if (void 0 ===
                        a[f]) {
                        console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, a);
                        return
                    }
                    a = a[f]
                }
            }
            f = a[d];
            if (void 0 === f) console.error("  trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a); else {
                b = this.Versioning.None;
                void 0 !== a.needsUpdate ? (b = this.Versioning.NeedsUpdate, this.targetObject = a) : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = a);
                c = this.BindingType.Direct;
                if (void 0 !== e) {
                    if ("morphTargetInfluences" ===
                        d) {
                        if (!a.geometry) {
                            console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                            return
                        }
                        if (!a.geometry.morphTargets) {
                            console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                            return
                        }
                        for (c = 0; c < this.node.geometry.morphTargets.length; c++) if (a.geometry.morphTargets[c].name === e) {
                            e = c;
                            break
                        }
                    }
                    c = this.BindingType.ArrayElement;
                    this.resolvedProperty = f;
                    this.propertyIndex = e
                } else void 0 !== f.fromArray && void 0 !== f.toArray ?
                    (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : void 0 !== f.length ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d;
                this.getValue = this.GetterByBindingType[c];
                this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
            }
        } else console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
    }, unbind: function () {
        this.node = null;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound
    }
};
Object.assign(THREE.PropertyBinding.prototype, {
    _getValue_unavailable: function () {
    },
    _setValue_unavailable: function () {
    },
    _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
    _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
    BindingType: {Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3},
    Versioning: {None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2},
    GetterByBindingType: [function (a, b) {
        a[b] = this.node[this.propertyName]
    }, function (a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) a[b++] =
            c[d]
    }, function (a, b) {
        a[b] = this.resolvedProperty[this.propertyIndex]
    }, function (a, b) {
        this.resolvedProperty.toArray(a, b)
    }],
    SetterByBindingTypeAndVersioning: [[function (a, b) {
        this.node[this.propertyName] = a[b]
    }, function (a, b) {
        this.node[this.propertyName] = a[b];
        this.targetObject.needsUpdate = !0
    }, function (a, b) {
        this.node[this.propertyName] = a[b];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }], [function (a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++]
    }, function (a, b) {
        for (var c = this.resolvedProperty,
                 d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];
        this.targetObject.needsUpdate = !0
    }, function (a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }], [function (a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b]
    }, function (a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b];
        this.targetObject.needsUpdate = !0
    }, function (a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }], [function (a, b) {
        this.resolvedProperty.fromArray(a,
            b)
    }, function (a, b) {
        this.resolvedProperty.fromArray(a, b);
        this.targetObject.needsUpdate = !0
    }, function (a, b) {
        this.resolvedProperty.fromArray(a, b);
        this.targetObject.matrixWorldNeedsUpdate = !0
    }]]
});
THREE.PropertyBinding.Composite = function (a, b, c) {
    c = c || THREE.PropertyBinding.parseTrackName(b);
    this._targetGroup = a;
    this._bindings = a.subscribe_(b, c)
};
THREE.PropertyBinding.Composite.prototype = {
    constructor: THREE.PropertyBinding.Composite, getValue: function (a, b) {
        this.bind();
        var c = this._bindings[this._targetGroup.nCachedObjects_];
        void 0 !== c && c.getValue(a, b)
    }, setValue: function (a, b) {
        for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d) c[d].setValue(a, b)
    }, bind: function () {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b) a[b].bind()
    }, unbind: function () {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_,
                 c = a.length; b !== c; ++b) a[b].unbind()
    }
};
THREE.PropertyBinding.create = function (a, b, c) {
    return a instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(a, b, c) : new THREE.PropertyBinding(a, b, c)
};
THREE.PropertyBinding.parseTrackName = function (a) {
    var b = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
        c = b.exec(a);
    if (!c) throw Error("cannot parse trackName at all: " + a);
    c.index === b.lastIndex && b.lastIndex++;
    b = {nodeName: c[3], objectName: c[5], objectIndex: c[7], propertyName: c[9], propertyIndex: c[11]};
    if (null === b.propertyName || 0 === b.propertyName.length) throw Error("can not parse propertyName from trackName: " + a);
    return b
};
THREE.PropertyBinding.findNode = function (a, b) {
    if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid) return a;
    if (a.skeleton) {
        var c = function (a) {
            for (var c = 0; c < a.bones.length; c++) {
                var d = a.bones[c];
                if (d.name === b) return d
            }
            return null
        }(a.skeleton);
        if (c) return c
    }
    if (a.children) {
        var d = function (a) {
            for (var c = 0; c < a.length; c++) {
                var g = a[c];
                if (g.name === b || g.uuid === b || (g = d(g.children))) return g
            }
            return null
        };
        if (c = d(a.children)) return c
    }
    return null
};
THREE.PropertyMixer = function (a, b, c) {
    this.binding = a;
    this.valueSize = c;
    a = Float64Array;
    switch (b) {
        case "quaternion":
            b = this._slerp;
            break;
        case "string":
        case "bool":
            a = Array;
            b = this._select;
            break;
        default:
            b = this._lerp
    }
    this.buffer = new a(4 * c);
    this._mixBufferRegion = b;
    this.referenceCount = this.useCount = this.cumulativeWeight = 0
};
THREE.PropertyMixer.prototype = {
    constructor: THREE.PropertyMixer, accumulate: function (a, b) {
        var c = this.buffer, d = this.valueSize, e = a * d + d, f = this.cumulativeWeight;
        if (0 === f) {
            for (f = 0; f !== d; ++f) c[e + f] = c[f];
            f = b
        } else f += b, this._mixBufferRegion(c, e, 0, b / f, d);
        this.cumulativeWeight = f
    }, apply: function (a) {
        var b = this.valueSize, c = this.buffer;
        a = a * b + b;
        var d = this.cumulativeWeight, e = this.binding;
        this.cumulativeWeight = 0;
        1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
        for (var d = b, f = b + b; d !== f; ++d) if (c[d] !== c[d + b]) {
            e.setValue(c, a);
            break
        }
    }, saveOriginalState: function () {
        var a = this.buffer, b = this.valueSize, c = 3 * b;
        this.binding.getValue(a, c);
        for (var d = b; d !== c; ++d) a[d] = a[c + d % b];
        this.cumulativeWeight = 0
    }, restoreOriginalState: function () {
        this.binding.setValue(this.buffer, 3 * this.valueSize)
    }, _select: function (a, b, c, d, e) {
        if (.5 <= d) for (d = 0; d !== e; ++d) a[b + d] = a[c + d]
    }, _slerp: function (a, b, c, d, e) {
        THREE.Quaternion.slerpFlat(a, b, a, b, a, c, d)
    }, _lerp: function (a, b, c, d, e) {
        for (var f = 1 - d, g = 0; g !== e; ++g) {
            var h = b + g;
            a[h] = a[h] * f + a[c + g] * d
        }
    }
};
THREE.BooleanKeyframeTrack = function (a, b, c) {
    THREE.KeyframeTrack.call(this, a, b, c)
};
THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.BooleanKeyframeTrack,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
});
THREE.ColorKeyframeTrack = function (a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
};
THREE.ColorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.ColorKeyframeTrack,
    ValueTypeName: "color"
});
THREE.NumberKeyframeTrack = function (a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
};
THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.NumberKeyframeTrack,
    ValueTypeName: "number"
});
THREE.QuaternionKeyframeTrack = function (a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
};
THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.QuaternionKeyframeTrack,
    ValueTypeName: "quaternion",
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodLinear: function (a) {
        return new THREE.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), a)
    },
    InterpolantFactoryMethodSmooth: void 0
});
THREE.StringKeyframeTrack = function (a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
};
THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.StringKeyframeTrack,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
});
THREE.VectorKeyframeTrack = function (a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
};
THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.VectorKeyframeTrack,
    ValueTypeName: "vector"
});
THREE.Audio = function (a) {
    THREE.Object3D.call(this);
    this.type = "Audio";
    this.context = a.context;
    this.source = this.context.createBufferSource();
    this.source.onended = this.onEnded.bind(this);
    this.gain = this.context.createGain();
    this.gain.connect(a.getInput());
    this.autoplay = !1;
    this.startTime = 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
    this.hasPlaybackControl = !0;
    this.sourceType = "empty";
    this.filters = []
};
THREE.Audio.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Audio, getOutput: function () {
        return this.gain
    }, setNodeSource: function (a) {
        this.hasPlaybackControl = !1;
        this.sourceType = "audioNode";
        this.source = a;
        this.connect();
        return this
    }, setBuffer: function (a) {
        this.source.buffer = a;
        this.sourceType = "buffer";
        this.autoplay && this.play();
        return this
    }, play: function () {
        if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing."); else if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
        else {
            var a = this.context.createBufferSource();
            a.buffer = this.source.buffer;
            a.loop = this.source.loop;
            a.onended = this.source.onended;
            a.start(0, this.startTime);
            a.playbackRate.value = this.playbackRate;
            this.isPlaying = !0;
            this.source = a;
            return this.connect()
        }
    }, pause: function () {
        if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control."); else return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this
    }, stop: function () {
        if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
        else return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this
    }, connect: function () {
        if (0 < this.filters.length) {
            this.source.connect(this.filters[0]);
            for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].connect(this.filters[a]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this
    }, disconnect: function () {
        if (0 < this.filters.length) {
            this.source.disconnect(this.filters[0]);
            for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a -
            1].disconnect(this.filters[a]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this
    }, getFilters: function () {
        return this.filters
    }, setFilters: function (a) {
        a || (a = []);
        !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a;
        return this
    }, getFilter: function () {
        return this.getFilters()[0]
    }, setFilter: function (a) {
        return this.setFilters(a ? [a] : [])
    }, setPlaybackRate: function (a) {
        if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
        else return this.playbackRate = a, !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate), this
    }, getPlaybackRate: function () {
        return this.playbackRate
    }, onEnded: function () {
        this.isPlaying = !1
    }, getLoop: function () {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
    }, setLoop: function (a) {
        !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : this.source.loop = a
    }, getVolume: function () {
        return this.gain.gain.value
    },
    setVolume: function (a) {
        this.gain.gain.value = a;
        return this
    }
});
THREE.AudioAnalyser = function (a, b) {
    this.analyser = a.context.createAnalyser();
    this.analyser.fftSize = void 0 !== b ? b : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    a.getOutput().connect(this.analyser)
};
Object.assign(THREE.AudioAnalyser.prototype, {
    getFrequencyData: function () {
        this.analyser.getByteFrequencyData(this.data);
        return this.data
    }, getAverageFrequency: function () {
        for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++) a += b[c];
        return a / b.length
    }
});
Object.defineProperty(THREE, "AudioContext", {
    get: function () {
        var a;
        return function () {
            void 0 === a && (a = new (window.AudioContext || window.webkitAudioContext));
            return a
        }
    }()
});
THREE.PositionalAudio = function (a) {
    THREE.Audio.call(this, a);
    this.panner = this.context.createPanner();
    this.panner.connect(this.gain)
};
THREE.PositionalAudio.prototype = Object.assign(Object.create(THREE.Audio.prototype), {
    constructor: THREE.PositionalAudio, getOutput: function () {
        return this.panner
    }, getRefDistance: function () {
        return this.panner.refDistance
    }, setRefDistance: function (a) {
        this.panner.refDistance = a
    }, getRolloffFactor: function () {
        return this.panner.rolloffFactor
    }, setRolloffFactor: function (a) {
        this.panner.rolloffFactor = a
    }, getDistanceModel: function () {
        return this.panner.distanceModel
    }, setDistanceModel: function (a) {
        this.panner.distanceModel =
            a
    }, getMaxDistance: function () {
        return this.panner.maxDistance
    }, setMaxDistance: function (a) {
        this.panner.maxDistance = a
    }, updateMatrixWorld: function () {
        var a = new THREE.Vector3;
        return function (b) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, b);
            a.setFromMatrixPosition(this.matrixWorld);
            this.panner.setPosition(a.x, a.y, a.z)
        }
    }()
});
THREE.AudioListener = function () {
    THREE.Object3D.call(this);
    this.type = "AudioListener";
    this.context = THREE.AudioContext;
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.filter = null
};
THREE.AudioListener.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.AudioListener, getInput: function () {
        return this.gain
    }, removeFilter: function () {
        null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
    }, getFilter: function () {
        return this.filter
    }, setFilter: function (a) {
        null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) :
            this.gain.disconnect(this.context.destination);
        this.filter = a;
        this.gain.connect(this.filter);
        this.filter.connect(this.context.destination)
    }, getMasterVolume: function () {
        return this.gain.gain.value
    }, setMasterVolume: function (a) {
        this.gain.gain.value = a
    }, updateMatrixWorld: function () {
        var a = new THREE.Vector3, b = new THREE.Quaternion, c = new THREE.Vector3, d = new THREE.Vector3;
        return function (e) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, e);
            e = this.context.listener;
            var f = this.up;
            this.matrixWorld.decompose(a,
                b, c);
            d.set(0, 0, -1).applyQuaternion(b);
            e.setPosition(a.x, a.y, a.z);
            e.setOrientation(d.x, d.y, d.z, f.x, f.y, f.z)
        }
    }()
});
THREE.Camera = function () {
    THREE.Object3D.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.getWorldDirection = function () {
    var a = new THREE.Quaternion;
    return function (b) {
        b = b || new THREE.Vector3;
        this.getWorldQuaternion(a);
        return b.set(0, 0, -1).applyQuaternion(a)
    }
}();
THREE.Camera.prototype.lookAt = function () {
    var a = new THREE.Matrix4;
    return function (b) {
        a.lookAt(this.position, b, this.up);
        this.quaternion.setFromRotationMatrix(a)
    }
}();
THREE.Camera.prototype.clone = function () {
    return (new this.constructor).copy(this)
};
THREE.Camera.prototype.copy = function (a) {
    THREE.Object3D.prototype.copy.call(this, a);
    this.matrixWorldInverse.copy(a.matrixWorldInverse);
    this.projectionMatrix.copy(a.projectionMatrix);
    return this
};
THREE.CubeCamera = function (a, b, c) {
    THREE.Object3D.call(this);
    this.type = "CubeCamera";
    var d = new THREE.PerspectiveCamera(90, 1, a, b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1, 0, 0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1, 0, 0));
    this.add(e);
    var f = new THREE.PerspectiveCamera(90, 1, a, b);
    f.up.set(0, 0, 1);
    f.lookAt(new THREE.Vector3(0, 1, 0));
    this.add(f);
    var g = new THREE.PerspectiveCamera(90, 1, a, b);
    g.up.set(0, 0, -1);
    g.lookAt(new THREE.Vector3(0, -1, 0));
    this.add(g);
    var h = new THREE.PerspectiveCamera(90, 1, a, b);
    h.up.set(0, -1, 0);
    h.lookAt(new THREE.Vector3(0, 0, 1));
    this.add(h);
    var k = new THREE.PerspectiveCamera(90, 1, a, b);
    k.up.set(0, -1, 0);
    k.lookAt(new THREE.Vector3(0, 0, -1));
    this.add(k);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updateCubeMap = function (a, b) {
        null === this.parent && this.updateMatrixWorld();
        var c = this.renderTarget, m = c.texture.generateMipmaps;
        c.texture.generateMipmaps =
            !1;
        c.activeCubeFace = 0;
        a.render(b, d, c);
        c.activeCubeFace = 1;
        a.render(b, e, c);
        c.activeCubeFace = 2;
        a.render(b, f, c);
        c.activeCubeFace = 3;
        a.render(b, g, c);
        c.activeCubeFace = 4;
        a.render(b, h, c);
        c.texture.generateMipmaps = m;
        c.activeCubeFace = 5;
        a.render(b, k, c);
        a.setRenderTarget(null)
    }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera;
THREE.OrthographicCamera = function (a, b, c, d, e, f) {
    THREE.Camera.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = a;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : .1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
    constructor: THREE.OrthographicCamera, copy: function (a) {
        THREE.Camera.prototype.copy.call(this, a);
        this.left = a.left;
        this.right = a.right;
        this.top = a.top;
        this.bottom = a.bottom;
        this.near = a.near;
        this.far = a.far;
        this.zoom = a.zoom;
        this.view = null === a.view ? null : Object.assign({}, a.view);
        return this
    }, setViewOffset: function (a, b, c, d, e, f) {
        this.view = {fullWidth: a, fullHeight: b, offsetX: c, offsetY: d, width: e, height: f};
        this.updateProjectionMatrix()
    },
    clearViewOffset: function () {
        this.view = null;
        this.updateProjectionMatrix()
    }, updateProjectionMatrix: function () {
        var a = (this.right - this.left) / (2 * this.zoom), b = (this.top - this.bottom) / (2 * this.zoom),
            c = (this.right + this.left) / 2, d = (this.top + this.bottom) / 2, e = c - a, c = c + a, a = d + b,
            b = d - b;
        if (null !== this.view) var c = this.zoom / (this.view.width / this.view.fullWidth),
            b = this.zoom / (this.view.height / this.view.fullHeight), f = (this.right - this.left) / this.view.width,
            d = (this.top - this.bottom) / this.view.height, e = e + this.view.offsetX / c * f,
            c = e + this.view.width / c * f, a = a - this.view.offsetY / b * d, b = a - this.view.height / b * d;
        this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far)
    }, toJSON: function (a) {
        a = THREE.Object3D.prototype.toJSON.call(this, a);
        a.object.zoom = this.zoom;
        a.object.left = this.left;
        a.object.right = this.right;
        a.object.top = this.top;
        a.object.bottom = this.bottom;
        a.object.near = this.near;
        a.object.far = this.far;
        null !== this.view && (a.object.view = Object.assign({}, this.view));
        return a
    }
});
THREE.PerspectiveCamera = function (a, b, c, d) {
    THREE.Camera.call(this);
    this.type = "PerspectiveCamera";
    this.fov = void 0 !== a ? a : 50;
    this.zoom = 1;
    this.near = void 0 !== c ? c : .1;
    this.far = void 0 !== d ? d : 2E3;
    this.focus = 10;
    this.aspect = void 0 !== b ? b : 1;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
    constructor: THREE.PerspectiveCamera, copy: function (a) {
        THREE.Camera.prototype.copy.call(this, a);
        this.fov = a.fov;
        this.zoom = a.zoom;
        this.near = a.near;
        this.far = a.far;
        this.focus = a.focus;
        this.aspect = a.aspect;
        this.view = null === a.view ? null : Object.assign({}, a.view);
        this.filmGauge = a.filmGauge;
        this.filmOffset = a.filmOffset;
        return this
    }, setFocalLength: function (a) {
        a = .5 * this.getFilmHeight() / a;
        this.fov = 2 * THREE.Math.RAD2DEG * Math.atan(a);
        this.updateProjectionMatrix()
    }, getFocalLength: function () {
        var a = Math.tan(.5 * THREE.Math.DEG2RAD * this.fov);
        return .5 * this.getFilmHeight() / a
    }, getEffectiveFOV: function () {
        return 2 * THREE.Math.RAD2DEG * Math.atan(Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom)
    }, getFilmWidth: function () {
        return this.filmGauge * Math.min(this.aspect, 1)
    }, getFilmHeight: function () {
        return this.filmGauge / Math.max(this.aspect, 1)
    }, setViewOffset: function (a, b, c, d, e, f) {
        this.aspect = a / b;
        this.view = {
            fullWidth: a, fullHeight: b, offsetX: c, offsetY: d,
            width: e, height: f
        };
        this.updateProjectionMatrix()
    }, clearViewOffset: function () {
        this.view = null;
        this.updateProjectionMatrix()
    }, updateProjectionMatrix: function () {
        var a = this.near, b = a * Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom, c = 2 * b,
            d = this.aspect * c, e = -.5 * d, f = this.view;
        if (null !== f) var g = f.fullWidth, h = f.fullHeight, e = e + f.offsetX * d / g, b = b - f.offsetY * c / h,
            d = f.width / g * d, c = f.height / h * c;
        f = this.filmOffset;
        0 !== f && (e += a * f / this.getFilmWidth());
        this.projectionMatrix.makeFrustum(e, e + d, b - c, b, a, this.far)
    }, toJSON: function (a) {
        a =
            THREE.Object3D.prototype.toJSON.call(this, a);
        a.object.fov = this.fov;
        a.object.zoom = this.zoom;
        a.object.near = this.near;
        a.object.far = this.far;
        a.object.focus = this.focus;
        a.object.aspect = this.aspect;
        null !== this.view && (a.object.view = Object.assign({}, this.view));
        a.object.filmGauge = this.filmGauge;
        a.object.filmOffset = this.filmOffset;
        return a
    }
});
THREE.StereoCamera = function () {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.cameraL = new THREE.PerspectiveCamera;
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new THREE.PerspectiveCamera;
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1
};
Object.assign(THREE.StereoCamera.prototype, {
    update: function () {
        var a, b, c, d, e, f = new THREE.Matrix4, g = new THREE.Matrix4;
        return function (h) {
            if (a !== h.focus || b !== h.fov || c !== h.aspect * this.aspect || d !== h.near || e !== h.far) {
                a = h.focus;
                b = h.fov;
                c = h.aspect * this.aspect;
                d = h.near;
                e = h.far;
                var k = h.projectionMatrix.clone(), l = .032 * d / a, n = d * Math.tan(THREE.Math.DEG2RAD * b * .5), p,
                    m;
                g.elements[12] = -.032;
                f.elements[12] = .032;
                p = -n * c + l;
                m = n * c + l;
                k.elements[0] = 2 * d / (m - p);
                k.elements[8] = (m + p) / (m - p);
                this.cameraL.projectionMatrix.copy(k);
                p = -n * c - l;
                m = n * c - l;
                k.elements[0] = 2 * d / (m - p);
                k.elements[8] = (m + p) / (m - p);
                this.cameraR.projectionMatrix.copy(k)
            }
            this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g);
            this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f)
        }
    }()
});
THREE.Light = function (a, b) {
    THREE.Object3D.call(this);
    this.type = "Light";
    this.color = new THREE.Color(a);
    this.intensity = void 0 !== b ? b : 1;
    this.receiveShadow = void 0
};
THREE.Light.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Light, copy: function (a) {
        THREE.Object3D.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.intensity = a.intensity;
        return this
    }, toJSON: function (a) {
        a = THREE.Object3D.prototype.toJSON.call(this, a);
        a.object.color = this.color.getHex();
        a.object.intensity = this.intensity;
        void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
        void 0 !== this.distance && (a.object.distance = this.distance);
        void 0 !==
        this.angle && (a.object.angle = this.angle);
        void 0 !== this.decay && (a.object.decay = this.decay);
        void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
        return a
    }
});
THREE.LightShadow = function (a) {
    this.camera = a;
    this.bias = 0;
    this.radius = 1;
    this.mapSize = new THREE.Vector2(512, 512);
    this.map = null;
    this.matrix = new THREE.Matrix4
};
Object.assign(THREE.LightShadow.prototype, {
    copy: function (a) {
        this.camera = a.camera.clone();
        this.bias = a.bias;
        this.radius = a.radius;
        this.mapSize.copy(a.mapSize);
        return this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
});
THREE.AmbientLight = function (a, b) {
    THREE.Light.call(this, a, b);
    this.type = "AmbientLight";
    this.castShadow = void 0
};
THREE.AmbientLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {constructor: THREE.AmbientLight});
THREE.DirectionalLight = function (a, b) {
    THREE.Light.call(this, a, b);
    this.type = "DirectionalLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    this.shadow = new THREE.DirectionalLightShadow
};
THREE.DirectionalLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.DirectionalLight,
    copy: function (a) {
        THREE.Light.prototype.copy.call(this, a);
        this.target = a.target.clone();
        this.shadow = a.shadow.clone();
        return this
    }
});
THREE.DirectionalLightShadow = function (a) {
    THREE.LightShadow.call(this, new THREE.OrthographicCamera(-5, 5, 5, -5, .5, 500))
};
THREE.DirectionalLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {constructor: THREE.DirectionalLightShadow});
THREE.HemisphereLight = function (a, b, c) {
    THREE.Light.call(this, a, c);
    this.type = "HemisphereLight";
    this.castShadow = void 0;
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.groundColor = new THREE.Color(b)
};
THREE.HemisphereLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.HemisphereLight,
    copy: function (a) {
        THREE.Light.prototype.copy.call(this, a);
        this.groundColor.copy(a.groundColor);
        return this
    }
});
THREE.PointLight = function (a, b, c, d) {
    THREE.Light.call(this, a, b);
    this.type = "PointLight";
    Object.defineProperty(this, "power", {
        get: function () {
            return 4 * this.intensity * Math.PI
        }, set: function (a) {
            this.intensity = a / (4 * Math.PI)
        }
    });
    this.distance = void 0 !== c ? c : 0;
    this.decay = void 0 !== d ? d : 1;
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90, 1, .5, 500))
};
THREE.PointLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.PointLight,
    copy: function (a) {
        THREE.Light.prototype.copy.call(this, a);
        this.distance = a.distance;
        this.decay = a.decay;
        this.shadow = a.shadow.clone();
        return this
    }
});
THREE.SpotLight = function (a, b, c, d, e, f) {
    THREE.Light.call(this, a, b);
    this.type = "SpotLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    Object.defineProperty(this, "power", {
        get: function () {
            return this.intensity * Math.PI
        }, set: function (a) {
            this.intensity = a / Math.PI
        }
    });
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.penumbra = void 0 !== e ? e : 0;
    this.decay = void 0 !== f ? f : 1;
    this.shadow = new THREE.SpotLightShadow
};
THREE.SpotLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.SpotLight,
    copy: function (a) {
        THREE.Light.prototype.copy.call(this, a);
        this.distance = a.distance;
        this.angle = a.angle;
        this.penumbra = a.penumbra;
        this.decay = a.decay;
        this.target = a.target.clone();
        this.shadow = a.shadow.clone();
        return this
    }
});
THREE.SpotLightShadow = function () {
    THREE.LightShadow.call(this, new THREE.PerspectiveCamera(50, 1, .5, 500))
};
THREE.SpotLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
    constructor: THREE.SpotLightShadow,
    update: function (a) {
        var b = 2 * THREE.Math.RAD2DEG * a.angle, c = this.mapSize.width / this.mapSize.height;
        a = a.distance || 500;
        var d = this.camera;
        if (b !== d.fov || c !== d.aspect || a !== d.far) d.fov = b, d.aspect = c, d.far = a, d.updateProjectionMatrix()
    }
});
THREE.AudioLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.AudioLoader.prototype, {
    load: function (a, b, c, d) {
        var e = new THREE.XHRLoader(this.manager);
        e.setResponseType("arraybuffer");
        e.load(a, function (a) {
            THREE.AudioContext.decodeAudioData(a, function (a) {
                b(a)
            })
        }, c, d)
    }
});
THREE.Cache = {
    enabled: !1, files: {}, add: function (a, b) {
        !1 !== this.enabled && (this.files[a] = b)
    }, get: function (a) {
        if (!1 !== this.enabled) return this.files[a]
    }, remove: function (a) {
        delete this.files[a]
    }, clear: function () {
        this.files = {}
    }
};
THREE.Loader = function () {
    this.onLoadStart = function () {
    };
    this.onLoadProgress = function () {
    };
    this.onLoadComplete = function () {
    }
};
THREE.Loader.prototype = {
    constructor: THREE.Loader, crossOrigin: void 0, extractUrlBase: function (a) {
        a = a.split("/");
        if (1 === a.length) return "./";
        a.pop();
        return a.join("/") + "/"
    }, initMaterials: function (a, b, c) {
        for (var d = [], e = 0; e < a.length; ++e) d[e] = this.createMaterial(a[e], b, c);
        return d
    }, createMaterial: function () {
        var a, b, c;
        return function (d, e, f) {
            function g(a, c, d, g, k) {
                a = e + a;
                var l = THREE.Loader.Handlers.get(a);
                null !== l ? a = l.load(a) : (b.setCrossOrigin(f), a = b.load(a));
                void 0 !== c && (a.repeat.fromArray(c), 1 !== c[0] && (a.wrapS =
                    THREE.RepeatWrapping), 1 !== c[1] && (a.wrapT = THREE.RepeatWrapping));
                void 0 !== d && a.offset.fromArray(d);
                void 0 !== g && ("repeat" === g[0] && (a.wrapS = THREE.RepeatWrapping), "mirror" === g[0] && (a.wrapS = THREE.MirroredRepeatWrapping), "repeat" === g[1] && (a.wrapT = THREE.RepeatWrapping), "mirror" === g[1] && (a.wrapT = THREE.MirroredRepeatWrapping));
                void 0 !== k && (a.anisotropy = k);
                c = THREE.Math.generateUUID();
                h[c] = a;
                return c
            }

            void 0 === a && (a = new THREE.Color);
            void 0 === b && (b = new THREE.TextureLoader);
            void 0 === c && (c = new THREE.MaterialLoader);
            var h = {}, k = {uuid: THREE.Math.generateUUID(), type: "MeshLambertMaterial"}, l;
            for (l in d) {
                var n = d[l];
                switch (l) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        k.name = n;
                        break;
                    case "blending":
                        k.blending = THREE[n];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        k.color = a.fromArray(n).getHex();
                        break;
                    case "colorSpecular":
                        k.specular = a.fromArray(n).getHex();
                        break;
                    case "colorEmissive":
                        k.emissive =
                            a.fromArray(n).getHex();
                        break;
                    case "specularCoef":
                        k.shininess = n;
                        break;
                    case "shading":
                        "basic" === n.toLowerCase() && (k.type = "MeshBasicMaterial");
                        "phong" === n.toLowerCase() && (k.type = "MeshPhongMaterial");
                        "standard" === n.toLowerCase() && (k.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        k.map = g(n, d.mapDiffuseRepeat, d.mapDiffuseOffset, d.mapDiffuseWrap, d.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        k.emissiveMap =
                            g(n, d.mapEmissiveRepeat, d.mapEmissiveOffset, d.mapEmissiveWrap, d.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        k.lightMap = g(n, d.mapLightRepeat, d.mapLightOffset, d.mapLightWrap, d.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        k.aoMap = g(n, d.mapAORepeat, d.mapAOOffset, d.mapAOWrap, d.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        k.bumpMap = g(n, d.mapBumpRepeat, d.mapBumpOffset, d.mapBumpWrap, d.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        k.bumpScale = n;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        k.normalMap = g(n, d.mapNormalRepeat, d.mapNormalOffset, d.mapNormalWrap, d.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        k.normalScale = [n, n];
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        k.specularMap =
                            g(n, d.mapSpecularRepeat, d.mapSpecularOffset, d.mapSpecularWrap, d.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        k.metalnessMap = g(n, d.mapMetalnessRepeat, d.mapMetalnessOffset, d.mapMetalnessWrap, d.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        k.roughnessMap = g(n, d.mapRoughnessRepeat,
                            d.mapRoughnessOffset, d.mapRoughnessWrap, d.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        k.alphaMap = g(n, d.mapAlphaRepeat, d.mapAlphaOffset, d.mapAlphaWrap, d.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        k.side = THREE.BackSide;
                        break;
                    case "doubleSided":
                        k.side = THREE.DoubleSide;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
                        k.opacity = n;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        k[l] = n;
                        break;
                    case "vertexColors":
                        !0 === n && (k.vertexColors = THREE.VertexColors);
                        "face" === n && (k.vertexColors = THREE.FaceColors);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", l, n)
                }
            }
            "MeshBasicMaterial" === k.type && delete k.emissive;
            "MeshPhongMaterial" !== k.type && delete k.specular;
            1 > k.opacity && (k.transparent = !0);
            c.setTextures(h);
            return c.parse(k)
        }
    }()
};
THREE.Loader.Handlers = {
    handlers: [], add: function (a, b) {
        this.handlers.push(a, b)
    }, get: function (a) {
        for (var b = this.handlers, c = 0, d = b.length; c < d; c += 2) {
            var e = b[c + 1];
            if (b[c].test(a)) return e
        }
        return null
    }
};
THREE.XHRLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.XHRLoader.prototype, {
    load: function (a, b, c, d) {
        void 0 !== this.path && (a = this.path + a);
        var e = this, f = THREE.Cache.get(a);
        if (void 0 !== f) return b && setTimeout(function () {
            b(f)
        }, 0), f;
        var g = new XMLHttpRequest;
        g.overrideMimeType("text/plain");
        g.open("GET", a, !0);
        g.addEventListener("load", function (c) {
            var f = c.target.response;
            THREE.Cache.add(a, f);
            200 === this.status ? (b && b(f), e.manager.itemEnd(a)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), b && b(f), e.manager.itemEnd(a)) :
                (d && d(c), e.manager.itemError(a))
        }, !1);
        void 0 !== c && g.addEventListener("progress", function (a) {
            c(a)
        }, !1);
        g.addEventListener("error", function (b) {
            d && d(b);
            e.manager.itemError(a)
        }, !1);
        void 0 !== this.responseType && (g.responseType = this.responseType);
        void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials);
        g.send(null);
        e.manager.itemStart(a);
        return g
    }, setPath: function (a) {
        this.path = a;
        return this
    }, setResponseType: function (a) {
        this.responseType = a;
        return this
    }, setWithCredentials: function (a) {
        this.withCredentials =
            a;
        return this
    }
});
THREE.FontLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.FontLoader.prototype, {
    load: function (a, b, c, d) {
        var e = this;
        (new THREE.XHRLoader(this.manager)).load(a, function (a) {
            var c;
            try {
                c = JSON.parse(a)
            } catch (d) {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2))
            }
            a = e.parse(c);
            b && b(a)
        }, c, d)
    }, parse: function (a) {
        return new THREE.Font(a)
    }
});
THREE.ImageLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.ImageLoader.prototype, {
    load: function (a, b, c, d) {
        var e = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        e.onload = function () {
            URL.revokeObjectURL(e.src);
            b && b(e)
        };
        if (0 === a.indexOf("data:")) e.src = a; else {
            var f = new THREE.XHRLoader(this.manager);
            f.setPath(this.path);
            f.setResponseType("blob");
            f.load(a, function (a) {
                e.src = URL.createObjectURL(a)
            }, c, d)
        }
        return e
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a;
        return this
    }, setPath: function (a) {
        this.path = a;
        return this
    }
});
THREE.JSONLoader = function (a) {
    "boolean" === typeof a && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), a = void 0);
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.withCredentials = !1
};
Object.assign(THREE.JSONLoader.prototype, {
    load: function (a, b, c, d) {
        var e = this,
            f = this.texturePath && "string" === typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(a),
            g = new THREE.XHRLoader(this.manager);
        g.setWithCredentials(this.withCredentials);
        g.load(a, function (c) {
            c = JSON.parse(c);
            var d = c.metadata;
            if (void 0 !== d && (d = d.type, void 0 !== d)) {
                if ("object" === d.toLowerCase()) {
                    console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.");
                    return
                }
                if ("scene" ===
                    d.toLowerCase()) {
                    console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.SceneLoader instead.");
                    return
                }
            }
            c = e.parse(c, f);
            b(c.geometry, c.materials)
        }, c, d)
    }, setTexturePath: function (a) {
        this.texturePath = a
    }, parse: function (a, b) {
        var c = new THREE.Geometry, d = void 0 !== a.scale ? 1 / a.scale : 1;
        (function (b) {
            var d, g, h, k, l, n, p, m, q, r, s, t, u, v = a.faces;
            n = a.vertices;
            var C = a.normals, w = a.colors, E = 0;
            if (void 0 !== a.uvs) {
                for (d = 0; d < a.uvs.length; d++) a.uvs[d].length && E++;
                for (d = 0; d < E; d++) c.faceVertexUvs[d] = []
            }
            k = 0;
            for (l = n.length; k <
            l;) d = new THREE.Vector3, d.x = n[k++] * b, d.y = n[k++] * b, d.z = n[k++] * b, c.vertices.push(d);
            k = 0;
            for (l = v.length; k < l;) if (b = v[k++], q = b & 1, h = b & 2, d = b & 8, p = b & 16, r = b & 32, n = b & 64, b &= 128, q) {
                q = new THREE.Face3;
                q.a = v[k];
                q.b = v[k + 1];
                q.c = v[k + 3];
                s = new THREE.Face3;
                s.a = v[k + 1];
                s.b = v[k + 2];
                s.c = v[k + 3];
                k += 4;
                h && (h = v[k++], q.materialIndex = h, s.materialIndex = h);
                h = c.faces.length;
                if (d) for (d = 0; d < E; d++) for (t = a.uvs[d], c.faceVertexUvs[d][h] = [], c.faceVertexUvs[d][h + 1] = [], g = 0; 4 > g; g++) m = v[k++], u = t[2 * m], m = t[2 * m + 1], u = new THREE.Vector2(u, m), 2 !== g && c.faceVertexUvs[d][h].push(u),
                0 !== g && c.faceVertexUvs[d][h + 1].push(u);
                p && (p = 3 * v[k++], q.normal.set(C[p++], C[p++], C[p]), s.normal.copy(q.normal));
                if (r) for (d = 0; 4 > d; d++) p = 3 * v[k++], r = new THREE.Vector3(C[p++], C[p++], C[p]), 2 !== d && q.vertexNormals.push(r), 0 !== d && s.vertexNormals.push(r);
                n && (n = v[k++], n = w[n], q.color.setHex(n), s.color.setHex(n));
                if (b) for (d = 0; 4 > d; d++) n = v[k++], n = w[n], 2 !== d && q.vertexColors.push(new THREE.Color(n)), 0 !== d && s.vertexColors.push(new THREE.Color(n));
                c.faces.push(q);
                c.faces.push(s)
            } else {
                q = new THREE.Face3;
                q.a = v[k++];
                q.b =
                    v[k++];
                q.c = v[k++];
                h && (h = v[k++], q.materialIndex = h);
                h = c.faces.length;
                if (d) for (d = 0; d < E; d++) for (t = a.uvs[d], c.faceVertexUvs[d][h] = [], g = 0; 3 > g; g++) m = v[k++], u = t[2 * m], m = t[2 * m + 1], u = new THREE.Vector2(u, m), c.faceVertexUvs[d][h].push(u);
                p && (p = 3 * v[k++], q.normal.set(C[p++], C[p++], C[p]));
                if (r) for (d = 0; 3 > d; d++) p = 3 * v[k++], r = new THREE.Vector3(C[p++], C[p++], C[p]), q.vertexNormals.push(r);
                n && (n = v[k++], q.color.setHex(w[n]));
                if (b) for (d = 0; 3 > d; d++) n = v[k++], q.vertexColors.push(new THREE.Color(w[n]));
                c.faces.push(q)
            }
        })(d);
        (function () {
            var b =
                void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
            if (a.skinWeights) for (var d = 0, g = a.skinWeights.length; d < g; d += b) c.skinWeights.push(new THREE.Vector4(a.skinWeights[d], 1 < b ? a.skinWeights[d + 1] : 0, 2 < b ? a.skinWeights[d + 2] : 0, 3 < b ? a.skinWeights[d + 3] : 0));
            if (a.skinIndices) for (d = 0, g = a.skinIndices.length; d < g; d += b) c.skinIndices.push(new THREE.Vector4(a.skinIndices[d], 1 < b ? a.skinIndices[d + 1] : 0, 2 < b ? a.skinIndices[d + 2] : 0, 3 < b ? a.skinIndices[d + 3] : 0));
            c.bones = a.bones;
            c.bones && 0 < c.bones.length && (c.skinWeights.length !==
                c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.")
        })();
        (function (b) {
            if (void 0 !== a.morphTargets) for (var d = 0, g = a.morphTargets.length; d < g; d++) {
                c.morphTargets[d] = {};
                c.morphTargets[d].name = a.morphTargets[d].name;
                c.morphTargets[d].vertices = [];
                for (var h = c.morphTargets[d].vertices, k = a.morphTargets[d].vertices, l = 0, n = k.length; l <
                n; l += 3) {
                    var p = new THREE.Vector3;
                    p.x = k[l] * b;
                    p.y = k[l + 1] * b;
                    p.z = k[l + 2] * b;
                    h.push(p)
                }
            }
            if (void 0 !== a.morphColors && 0 < a.morphColors.length) for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), b = c.faces, h = a.morphColors[0].colors, d = 0, g = b.length; d < g; d++) b[d].color.fromArray(h, 3 * d)
        })(d);
        (function () {
            var b = [], d = [];
            void 0 !== a.animation && d.push(a.animation);
            void 0 !== a.animations && (a.animations.length ? d = d.concat(a.animations) : d.push(a.animations));
            for (var g = 0; g < d.length; g++) {
                var h =
                    THREE.AnimationClip.parseAnimation(d[g], c.bones);
                h && b.push(h)
            }
            c.morphTargets && (d = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(c.morphTargets, 10), b = b.concat(d));
            0 < b.length && (c.animations = b)
        })();
        c.computeFaceNormals();
        c.computeBoundingSphere();
        if (void 0 === a.materials || 0 === a.materials.length) return {geometry: c};
        d = THREE.Loader.prototype.initMaterials(a.materials, b, this.crossOrigin);
        return {geometry: c, materials: d}
    }
});
THREE.LoadingManager = function (a, b, c) {
    var d = this, e = !1, f = 0, g = 0;
    this.onStart = void 0;
    this.onLoad = a;
    this.onProgress = b;
    this.onError = c;
    this.itemStart = function (a) {
        g++;
        if (!1 === e && void 0 !== d.onStart) d.onStart(a, f, g);
        e = !0
    };
    this.itemEnd = function (a) {
        f++;
        if (void 0 !== d.onProgress) d.onProgress(a, f, g);
        if (f === g && (e = !1, void 0 !== d.onLoad)) d.onLoad()
    };
    this.itemError = function (a) {
        if (void 0 !== d.onError) d.onError(a)
    }
};
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.BufferGeometryLoader.prototype, {
    load: function (a, b, c, d) {
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function (a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    }, parse: function (a) {
        var b = new THREE.BufferGeometry, c = a.data.index, d = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: Uint8ClampedArray,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };
        void 0 !== c && (c = new d[c.type](c.array), b.setIndex(new THREE.BufferAttribute(c,
            1)));
        var e = a.data.attributes, f;
        for (f in e) {
            var g = e[f], c = new d[g.type](g.array);
            b.addAttribute(f, new THREE.BufferAttribute(c, g.itemSize, g.normalized))
        }
        d = a.data.groups || a.data.drawcalls || a.data.offsets;
        if (void 0 !== d) for (f = 0, c = d.length; f !== c; ++f) e = d[f], b.addGroup(e.start, e.count, e.materialIndex);
        a = a.data.boundingSphere;
        void 0 !== a && (d = new THREE.Vector3, void 0 !== a.center && d.fromArray(a.center), b.boundingSphere = new THREE.Sphere(d, a.radius));
        return b
    }
});
THREE.MaterialLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.textures = {}
};
Object.assign(THREE.MaterialLoader.prototype, {
    load: function (a, b, c, d) {
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function (a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    }, setTextures: function (a) {
        this.textures = a
    }, getTexture: function (a) {
        var b = this.textures;
        void 0 === b[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
        return b[a]
    }, parse: function (a) {
        var b = new THREE[a.type];
        void 0 !== a.uuid && (b.uuid = a.uuid);
        void 0 !== a.name && (b.name = a.name);
        void 0 !== a.color && b.color.setHex(a.color);
        void 0 !== a.roughness &&
        (b.roughness = a.roughness);
        void 0 !== a.metalness && (b.metalness = a.metalness);
        void 0 !== a.emissive && b.emissive.setHex(a.emissive);
        void 0 !== a.specular && b.specular.setHex(a.specular);
        void 0 !== a.shininess && (b.shininess = a.shininess);
        void 0 !== a.uniforms && (b.uniforms = a.uniforms);
        void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader);
        void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader);
        void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
        void 0 !== a.shading && (b.shading = a.shading);
        void 0 !== a.blending &&
        (b.blending = a.blending);
        void 0 !== a.side && (b.side = a.side);
        void 0 !== a.opacity && (b.opacity = a.opacity);
        void 0 !== a.transparent && (b.transparent = a.transparent);
        void 0 !== a.alphaTest && (b.alphaTest = a.alphaTest);
        void 0 !== a.depthTest && (b.depthTest = a.depthTest);
        void 0 !== a.depthWrite && (b.depthWrite = a.depthWrite);
        void 0 !== a.colorWrite && (b.colorWrite = a.colorWrite);
        void 0 !== a.wireframe && (b.wireframe = a.wireframe);
        void 0 !== a.wireframeLinewidth && (b.wireframeLinewidth = a.wireframeLinewidth);
        void 0 !== a.size && (b.size = a.size);
        void 0 !== a.sizeAttenuation && (b.sizeAttenuation = a.sizeAttenuation);
        void 0 !== a.map && (b.map = this.getTexture(a.map));
        void 0 !== a.alphaMap && (b.alphaMap = this.getTexture(a.alphaMap), b.transparent = !0);
        void 0 !== a.bumpMap && (b.bumpMap = this.getTexture(a.bumpMap));
        void 0 !== a.bumpScale && (b.bumpScale = a.bumpScale);
        void 0 !== a.normalMap && (b.normalMap = this.getTexture(a.normalMap));
        if (void 0 !== a.normalScale) {
            var c = a.normalScale;
            !1 === Array.isArray(c) && (c = [c, c]);
            b.normalScale = (new THREE.Vector2).fromArray(c)
        }
        void 0 !== a.displacementMap &&
        (b.displacementMap = this.getTexture(a.displacementMap));
        void 0 !== a.displacementScale && (b.displacementScale = a.displacementScale);
        void 0 !== a.displacementBias && (b.displacementBias = a.displacementBias);
        void 0 !== a.roughnessMap && (b.roughnessMap = this.getTexture(a.roughnessMap));
        void 0 !== a.metalnessMap && (b.metalnessMap = this.getTexture(a.metalnessMap));
        void 0 !== a.emissiveMap && (b.emissiveMap = this.getTexture(a.emissiveMap));
        void 0 !== a.emissiveIntensity && (b.emissiveIntensity = a.emissiveIntensity);
        void 0 !== a.specularMap &&
        (b.specularMap = this.getTexture(a.specularMap));
        void 0 !== a.envMap && (b.envMap = this.getTexture(a.envMap), b.combine = THREE.MultiplyOperation);
        void 0 !== a.reflectivity && (b.reflectivity = a.reflectivity);
        void 0 !== a.lightMap && (b.lightMap = this.getTexture(a.lightMap));
        void 0 !== a.lightMapIntensity && (b.lightMapIntensity = a.lightMapIntensity);
        void 0 !== a.aoMap && (b.aoMap = this.getTexture(a.aoMap));
        void 0 !== a.aoMapIntensity && (b.aoMapIntensity = a.aoMapIntensity);
        if (void 0 !== a.materials) for (var c = 0, d = a.materials.length; c <
        d; c++) b.materials.push(this.parse(a.materials[c]));
        return b
    }
});
THREE.ObjectLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.texturePath = ""
};
Object.assign(THREE.ObjectLoader.prototype, {
    load: function (a, b, c, d) {
        "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function (a) {
            e.parse(JSON.parse(a), b)
        }, c, d)
    }, setTexturePath: function (a) {
        this.texturePath = a
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a
    }, parse: function (a, b) {
        var c = this.parseGeometries(a.geometries), d = this.parseImages(a.images, function () {
            void 0 !== b && b(e)
        }), d = this.parseTextures(a.textures, d), d = this.parseMaterials(a.materials,
            d), e = this.parseObject(a.object, c, d);
        a.animations && (e.animations = this.parseAnimations(a.animations));
        void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
        return e
    }, parseGeometries: function (a) {
        var b = {};
        if (void 0 !== a) for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader, e = 0, f = a.length; e < f; e++) {
            var g, h = a[e];
            switch (h.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    g = new THREE[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    g =
                        new THREE[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    g = new THREE[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    g = new THREE[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                    break;
                case "ConeGeometry":
                case "ConeBufferGeometry":
                    g = new THREE[h.type](h.radius, h.height, h.radialSegments,
                        h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    g = new THREE[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                    break;
                case "DodecahedronGeometry":
                case "IcosahedronGeometry":
                case "OctahedronGeometry":
                case "TetrahedronGeometry":
                    g = new THREE[h.type](h.radius, h.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    g = new THREE[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments,
                        h.thetaStart, h.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    g = new THREE[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    g = new THREE[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
                    break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                    g = new THREE[h.type](h.points, h.segments, h.phiStart, h.phiLength);
                    break;
                case "BufferGeometry":
                    g = d.parse(h);
                    break;
                case "Geometry":
                    g = c.parse(h.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                    continue
            }
            g.uuid = h.uuid;
            void 0 !== h.name && (g.name = h.name);
            b[h.uuid] = g
        }
        return b
    }, parseMaterials: function (a, b) {
        var c = {};
        if (void 0 !== a) {
            var d = new THREE.MaterialLoader;
            d.setTextures(b);
            for (var e = 0, f = a.length; e < f; e++) {
                var g = d.parse(a[e]);
                c[g.uuid] = g
            }
        }
        return c
    }, parseAnimations: function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = THREE.AnimationClip.parse(a[c]);
            b.push(d)
        }
        return b
    }, parseImages: function (a, b) {
        function c(a) {
            d.manager.itemStart(a);
            return g.load(a, function () {
                d.manager.itemEnd(a)
            })
        }

        var d = this, e = {};
        if (void 0 !== a && 0 < a.length) {
            var f = new THREE.LoadingManager(b), g = new THREE.ImageLoader(f);
            g.setCrossOrigin(this.crossOrigin);
            for (var f = 0, h = a.length; f < h; f++) {
                var k = a[f], l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : d.texturePath + k.url;
                e[k.uuid] = c(l)
            }
        }
        return e
    }, parseTextures: function (a, b) {
        function c(a) {
            if ("number" === typeof a) return a;
            console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
            return THREE[a]
        }

        var d = {};
        if (void 0 !== a) for (var e = 0, f = a.length; e < f; e++) {
            var g = a[e];
            void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
            void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
            var h = new THREE.Texture(b[g.image]);
            h.needsUpdate = !0;
            h.uuid = g.uuid;
            void 0 !== g.name && (h.name = g.name);
            void 0 !== g.mapping && (h.mapping = c(g.mapping));
            void 0 !== g.offset && (h.offset = new THREE.Vector2(g.offset[0], g.offset[1]));
            void 0 !== g.repeat && (h.repeat = new THREE.Vector2(g.repeat[0],
                g.repeat[1]));
            void 0 !== g.minFilter && (h.minFilter = c(g.minFilter));
            void 0 !== g.magFilter && (h.magFilter = c(g.magFilter));
            void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
            Array.isArray(g.wrap) && (h.wrapS = c(g.wrap[0]), h.wrapT = c(g.wrap[1]));
            d[g.uuid] = h
        }
        return d
    }, parseObject: function () {
        var a = new THREE.Matrix4;
        return function (b, c, d) {
            function e(a) {
                void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                return c[a]
            }

            function f(a) {
                if (void 0 !== a) return void 0 === d[a] && console.warn("THREE.ObjectLoader: Undefined material",
                    a), d[a]
            }

            var g;
            switch (b.type) {
                case "Scene":
                    g = new THREE.Scene;
                    break;
                case "PerspectiveCamera":
                    g = new THREE.PerspectiveCamera(b.fov, b.aspect, b.near, b.far);
                    void 0 !== b.focus && (g.focus = b.focus);
                    void 0 !== b.zoom && (g.zoom = b.zoom);
                    void 0 !== b.filmGauge && (g.filmGauge = b.filmGauge);
                    void 0 !== b.filmOffset && (g.filmOffset = b.filmOffset);
                    void 0 !== b.view && (g.view = Object.assign({}, b.view));
                    break;
                case "OrthographicCamera":
                    g = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
                    break;
                case "AmbientLight":
                    g =
                        new THREE.AmbientLight(b.color, b.intensity);
                    break;
                case "DirectionalLight":
                    g = new THREE.DirectionalLight(b.color, b.intensity);
                    break;
                case "PointLight":
                    g = new THREE.PointLight(b.color, b.intensity, b.distance, b.decay);
                    break;
                case "SpotLight":
                    g = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.penumbra, b.decay);
                    break;
                case "HemisphereLight":
                    g = new THREE.HemisphereLight(b.color, b.groundColor, b.intensity);
                    break;
                case "Mesh":
                    g = e(b.geometry);
                    var h = f(b.material);
                    g = g.bones && 0 < g.bones.length ? new THREE.SkinnedMesh(g,
                        h) : new THREE.Mesh(g, h);
                    break;
                case "LOD":
                    g = new THREE.LOD;
                    break;
                case "Line":
                    g = new THREE.Line(e(b.geometry), f(b.material), b.mode);
                    break;
                case "PointCloud":
                case "Points":
                    g = new THREE.Points(e(b.geometry), f(b.material));
                    break;
                case "Sprite":
                    g = new THREE.Sprite(f(b.material));
                    break;
                case "Group":
                    g = new THREE.Group;
                    break;
                default:
                    g = new THREE.Object3D
            }
            g.uuid = b.uuid;
            void 0 !== b.name && (g.name = b.name);
            void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(g.position, g.quaternion, g.scale)) : (void 0 !== b.position && g.position.fromArray(b.position),
            void 0 !== b.rotation && g.rotation.fromArray(b.rotation), void 0 !== b.scale && g.scale.fromArray(b.scale));
            void 0 !== b.castShadow && (g.castShadow = b.castShadow);
            void 0 !== b.receiveShadow && (g.receiveShadow = b.receiveShadow);
            void 0 !== b.visible && (g.visible = b.visible);
            void 0 !== b.userData && (g.userData = b.userData);
            if (void 0 !== b.children) for (var k in b.children) g.add(this.parseObject(b.children[k], c, d));
            if ("LOD" === b.type) for (b = b.levels, h = 0; h < b.length; h++) {
                var l = b[h];
                k = g.getObjectByProperty("uuid", l.object);
                void 0 !==
                k && g.addLevel(k, l.distance)
            }
            return g
        }
    }()
});
THREE.TextureLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.TextureLoader.prototype, {
    load: function (a, b, c, d) {
        var e = new THREE.Texture, f = new THREE.ImageLoader(this.manager);
        f.setCrossOrigin(this.crossOrigin);
        f.setPath(this.path);
        f.load(a, function (a) {
            e.image = a;
            e.needsUpdate = !0;
            void 0 !== b && b(e)
        }, c, d);
        return e
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a;
        return this
    }, setPath: function (a) {
        this.path = a;
        return this
    }
});
THREE.CubeTextureLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
Object.assign(THREE.CubeTextureLoader.prototype, {
    load: function (a, b, c, d) {
        function e(c) {
            g.load(a[c], function (a) {
                f.images[c] = a;
                h++;
                6 === h && (f.needsUpdate = !0, b && b(f))
            }, void 0, d)
        }

        var f = new THREE.CubeTexture, g = new THREE.ImageLoader(this.manager);
        g.setCrossOrigin(this.crossOrigin);
        g.setPath(this.path);
        var h = 0;
        for (c = 0; c < a.length; ++c) e(c);
        return f
    }, setCrossOrigin: function (a) {
        this.crossOrigin = a;
        return this
    }, setPath: function (a) {
        this.path = a;
        return this
    }
});
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this._parser = null
};
Object.assign(THREE.BinaryTextureLoader.prototype, {
    load: function (a, b, c, d) {
        var e = this, f = new THREE.DataTexture, g = new THREE.XHRLoader(this.manager);
        g.setResponseType("arraybuffer");
        g.load(a, function (a) {
            if (a = e._parser(a)) void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : THREE.ClampToEdgeWrapping, f.wrapT = void 0 !== a.wrapT ? a.wrapT : THREE.ClampToEdgeWrapping, f.magFilter = void 0 !== a.magFilter ? a.magFilter : THREE.LinearFilter,
                f.minFilter = void 0 !== a.minFilter ? a.minFilter : THREE.LinearMipMapLinearFilter, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), 1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter), f.needsUpdate = !0, b && b(f, a)
        }, c, d);
        return f
    }
});
THREE.CompressedTextureLoader = function (a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this._parser = null
};
Object.assign(THREE.CompressedTextureLoader.prototype, {
    load: function (a, b, c, d) {
        function e(e) {
            k.load(a[e], function (a) {
                a = f._parser(a, !0);
                g[e] = {width: a.width, height: a.height, format: a.format, mipmaps: a.mipmaps};
                l += 1;
                6 === l && (1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter), h.format = a.format, h.needsUpdate = !0, b && b(h))
            }, c, d)
        }

        var f = this, g = [], h = new THREE.CompressedTexture;
        h.image = g;
        var k = new THREE.XHRLoader(this.manager);
        k.setPath(this.path);
        k.setResponseType("arraybuffer");
        if (Array.isArray(a)) for (var l = 0,
                                       n = 0, p = a.length; n < p; ++n) e(n); else k.load(a, function (a) {
            a = f._parser(a, !0);
            if (a.isCubemap) for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
                g[d] = {mipmaps: []};
                for (var e = 0; e < a.mipmapCount; e++) g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height
            } else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
            1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter);
            h.format = a.format;
            h.needsUpdate = !0;
            b && b(h)
        }, c, d);
        return h
    }, setPath: function (a) {
        this.path =
            a;
        return this
    }
});
THREE.Material = function () {
    Object.defineProperty(this, "id", {value: THREE.MaterialIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Material";
    this.lights = this.fog = !0;
    this.blending = THREE.NormalBlending;
    this.side = THREE.FrontSide;
    this.shading = THREE.SmoothShading;
    this.vertexColors = THREE.NoColors;
    this.opacity = 1;
    this.transparent = !1;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.blendEquationAlpha = this.blendDstAlpha =
        this.blendSrcAlpha = null;
    this.depthFunc = THREE.LessEqualDepth;
    this.depthWrite = this.depthTest = !0;
    this.clippingPlanes = null;
    this.clipShadows = !1;
    this.colorWrite = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.premultipliedAlpha = !1;
    this.overdraw = 0;
    this._needsUpdate = this.visible = !0
};
THREE.Material.prototype = {
    constructor: THREE.Material, get needsUpdate() {
        return this._needsUpdate
    }, set needsUpdate(a) {
        !0 === a && this.update();
        this._needsUpdate = a
    }, setValues: function (a) {
        if (void 0 !== a) for (var b in a) {
            var c = a[b];
            if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined."); else {
                var d = this[b];
                void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) :
                    this[b] = "overdraw" === b ? Number(c) : c
            }
        }
    }, toJSON: function (a) {
        function b(a) {
            var b = [], c;
            for (c in a) {
                var d = a[c];
                delete d.metadata;
                b.push(d)
            }
            return b
        }

        var c = void 0 === a;
        c && (a = {textures: {}, images: {}});
        var d = {metadata: {version: 4.4, type: "Material", generator: "Material.toJSON"}};
        d.uuid = this.uuid;
        d.type = this.type;
        "" !== this.name && (d.name = this.name);
        this.color instanceof THREE.Color && (d.color = this.color.getHex());
        void 0 !== this.roughness && (d.roughness = this.roughness);
        void 0 !== this.metalness && (d.metalness = this.metalness);
        this.emissive instanceof THREE.Color && (d.emissive = this.emissive.getHex());
        this.specular instanceof THREE.Color && (d.specular = this.specular.getHex());
        void 0 !== this.shininess && (d.shininess = this.shininess);
        this.map instanceof THREE.Texture && (d.map = this.map.toJSON(a).uuid);
        this.alphaMap instanceof THREE.Texture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
        this.lightMap instanceof THREE.Texture && (d.lightMap = this.lightMap.toJSON(a).uuid);
        this.bumpMap instanceof THREE.Texture && (d.bumpMap = this.bumpMap.toJSON(a).uuid,
            d.bumpScale = this.bumpScale);
        this.normalMap instanceof THREE.Texture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalScale = this.normalScale.toArray());
        this.displacementMap instanceof THREE.Texture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias);
        this.roughnessMap instanceof THREE.Texture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
        this.metalnessMap instanceof THREE.Texture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
        this.emissiveMap instanceof THREE.Texture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
        this.specularMap instanceof THREE.Texture && (d.specularMap = this.specularMap.toJSON(a).uuid);
        this.envMap instanceof THREE.Texture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity);
        void 0 !== this.size && (d.size = this.size);
        void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
        this.blending !== THREE.NormalBlending && (d.blending = this.blending);
        this.shading !== THREE.SmoothShading &&
        (d.shading = this.shading);
        this.side !== THREE.FrontSide && (d.side = this.side);
        this.vertexColors !== THREE.NoColors && (d.vertexColors = this.vertexColors);
        1 > this.opacity && (d.opacity = this.opacity);
        !0 === this.transparent && (d.transparent = this.transparent);
        0 < this.alphaTest && (d.alphaTest = this.alphaTest);
        !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
        !0 === this.wireframe && (d.wireframe = this.wireframe);
        1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
        c && (c = b(a.textures),
            a = b(a.images), 0 < c.length && (d.textures = c), 0 < a.length && (d.images = a));
        return d
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.name = a.name;
        this.fog = a.fog;
        this.lights = a.lights;
        this.blending = a.blending;
        this.side = a.side;
        this.shading = a.shading;
        this.vertexColors = a.vertexColors;
        this.opacity = a.opacity;
        this.transparent = a.transparent;
        this.blendSrc = a.blendSrc;
        this.blendDst = a.blendDst;
        this.blendEquation = a.blendEquation;
        this.blendSrcAlpha = a.blendSrcAlpha;
        this.blendDstAlpha = a.blendDstAlpha;
        this.blendEquationAlpha = a.blendEquationAlpha;
        this.depthFunc = a.depthFunc;
        this.depthTest = a.depthTest;
        this.depthWrite = a.depthWrite;
        this.colorWrite = a.colorWrite;
        this.precision = a.precision;
        this.polygonOffset = a.polygonOffset;
        this.polygonOffsetFactor = a.polygonOffsetFactor;
        this.polygonOffsetUnits = a.polygonOffsetUnits;
        this.alphaTest = a.alphaTest;
        this.premultipliedAlpha = a.premultipliedAlpha;
        this.overdraw = a.overdraw;
        this.visible = a.visible;
        this.clipShadows = a.clipShadows;
        a = a.clippingPlanes;
        var b = null;
        if (null !==
            a) for (var c = a.length, b = Array(c), d = 0; d !== c; ++d) b[d] = a[d].clone();
        this.clippingPlanes = b;
        return this
    }, update: function () {
        this.dispatchEvent({type: "update"})
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
};
Object.assign(THREE.Material.prototype, THREE.EventDispatcher.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "LineBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.lights = !1;
    this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.linecap = a.linecap;
    this.linejoin = a.linejoin;
    return this
};
THREE.LineDashedMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "LineDashedMaterial";
    this.color = new THREE.Color(16777215);
    this.scale = this.linewidth = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.lights = !1;
    this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.scale = a.scale;
    this.dashSize = a.dashSize;
    this.gapSize = a.gapSize;
    return this
};
THREE.MeshBasicMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.aoMap = this.map = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.lights = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    return this
};
THREE.MeshDepthMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "MeshDepthMaterial";
    this.depthPacking = THREE.BasicDepthPacking;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.depthPacking = a.depthPacking;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this
};
THREE.MeshLambertMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new THREE.Color(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap =
        "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio =
        a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
};
THREE.MeshNormalMaterial = function (a) {
    THREE.Material.call(this, a);
    this.type = "MeshNormalMaterial";
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphTargets = this.lights = this.fog = !1;
    this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this
};
THREE.MeshPhongMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new THREE.Color(16777215);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias =
        0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.specular.copy(a.specular);
    this.shininess = a.shininess;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
};
THREE.MeshStandardMaterial = function (a) {
    THREE.Material.call(this);
    this.defines = {STANDARD: ""};
    this.type = "MeshStandardMaterial";
    this.color = new THREE.Color(16777215);
    this.metalness = this.roughness = .5;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale =
        1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial;
THREE.MeshStandardMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.defines = {STANDARD: ""};
    this.color.copy(a.color);
    this.roughness = a.roughness;
    this.metalness = a.metalness;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap =
        a.normalMap;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.roughnessMap = a.roughnessMap;
    this.metalnessMap = a.metalnessMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.envMapIntensity = a.envMapIntensity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
};
THREE.MeshPhysicalMaterial = function (a) {
    THREE.MeshStandardMaterial.call(this);
    this.defines = {PHYSICAL: ""};
    this.type = "MeshPhysicalMaterial";
    this.reflectivity = .5;
    this.clearCoatRoughness = this.clearCoat = 0;
    this.setValues(a)
};
THREE.MeshPhysicalMaterial.prototype = Object.create(THREE.MeshStandardMaterial.prototype);
THREE.MeshPhysicalMaterial.prototype.constructor = THREE.MeshPhysicalMaterial;
THREE.MeshPhysicalMaterial.prototype.copy = function (a) {
    THREE.MeshStandardMaterial.prototype.copy.call(this, a);
    this.defines = {PHYSICAL: ""};
    this.reflectivity = a.reflectivity;
    this.clearCoat = a.clearCoat;
    this.clearCoatRoughness = a.clearCoatRoughness;
    return this
};
THREE.MultiMaterial = function (a) {
    this.uuid = THREE.Math.generateUUID();
    this.type = "MultiMaterial";
    this.materials = a instanceof Array ? a : [];
    this.visible = !0
};
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial, toJSON: function (a) {
        for (var b = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, c = this.materials, d = 0, e = c.length; d < e; d++) {
            var f = c[d].toJSON(a);
            delete f.metadata;
            b.materials.push(f)
        }
        b.visible = this.visible;
        return b
    }, clone: function () {
        for (var a = new this.constructor, b = 0; b < this.materials.length; b++) a.materials.push(this.materials[b].clone());
        a.visible = this.visible;
        return a
    }
};
THREE.PointsMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "PointsMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.lights = !1;
    this.setValues(a)
};
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.size = a.size;
    this.sizeAttenuation = a.sizeAttenuation;
    return this
};
THREE.ShaderMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
    this.extensions = {
        derivatives: !1, fragDepth: !1,
        drawBuffers: !1, shaderTextureLOD: !1
    };
    this.defaultAttributeValues = {color: [1, 1, 1], uv: [0, 0], uv2: [0, 0]};
    this.index0AttributeName = void 0;
    void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a))
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.fragmentShader = a.fragmentShader;
    this.vertexShader = a.vertexShader;
    this.uniforms = THREE.UniformsUtils.clone(a.uniforms);
    this.defines = a.defines;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.lights = a.lights;
    this.clipping = a.clipping;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.extensions = a.extensions;
    return this
};
THREE.ShaderMaterial.prototype.toJSON = function (a) {
    a = THREE.Material.prototype.toJSON.call(this, a);
    a.uniforms = this.uniforms;
    a.vertexShader = this.vertexShader;
    a.fragmentShader = this.fragmentShader;
    return a
};
THREE.RawShaderMaterial = function (a) {
    THREE.ShaderMaterial.call(this, a);
    this.type = "RawShaderMaterial"
};
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial;
THREE.SpriteMaterial = function (a) {
    THREE.Material.call(this);
    this.type = "SpriteMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.rotation = 0;
    this.lights = this.fog = !1;
    this.setValues(a)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.copy = function (a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.rotation = a.rotation;
    return this
};
THREE.ShadowMaterial = function () {
    THREE.ShaderMaterial.call(this, {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.lights, {opacity: {value: 1}}]),
        vertexShader: THREE.ShaderChunk.shadow_vert,
        fragmentShader: THREE.ShaderChunk.shadow_frag
    });
    this.transparent = this.lights = !0;
    Object.defineProperties(this, {
        opacity: {
            enumerable: !0, get: function () {
                return this.uniforms.opacity.value
            }, set: function (a) {
                this.uniforms.opacity.value = a
            }
        }
    })
};
THREE.ShadowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.ShadowMaterial.prototype.constructor = THREE.ShadowMaterial;
THREE.Texture = function (a, b, c, d, e, f, g, h, k, l) {
    Object.defineProperty(this, "id", {value: THREE.TextureIdCount++});
    this.uuid = THREE.Math.generateUUID();
    this.sourceFile = this.name = "";
    this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== k ? k : 1;
    this.format = void 0 !== g ? g : THREE.RGBAFormat;
    this.type = void 0 !== h ? h : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = void 0 !== l ? l : THREE.LinearEncoding;
    this.version = 0;
    this.onUpdate = null
};
THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;
THREE.Texture.prototype = {
    constructor: THREE.Texture, set needsUpdate(a) {
        !0 === a && this.version++
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.image = a.image;
        this.mipmaps = a.mipmaps.slice(0);
        this.mapping = a.mapping;
        this.wrapS = a.wrapS;
        this.wrapT = a.wrapT;
        this.magFilter = a.magFilter;
        this.minFilter = a.minFilter;
        this.anisotropy = a.anisotropy;
        this.format = a.format;
        this.type = a.type;
        this.offset.copy(a.offset);
        this.repeat.copy(a.repeat);
        this.generateMipmaps = a.generateMipmaps;
        this.premultiplyAlpha =
            a.premultiplyAlpha;
        this.flipY = a.flipY;
        this.unpackAlignment = a.unpackAlignment;
        this.encoding = a.encoding;
        return this
    }, toJSON: function (a) {
        if (void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
        var b = {
            metadata: {version: 4.4, type: "Texture", generator: "Texture.toJSON"},
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var c = this.image;
            void 0 === c.uuid && (c.uuid = THREE.Math.generateUUID());
            if (void 0 === a.images[c.uuid]) {
                var d = a.images, e = c.uuid, f = c.uuid, g;
                void 0 !== c.toDataURL ? g = c : (g = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), g.width = c.width, g.height = c.height, g.getContext("2d").drawImage(c, 0, 0, c.width, c.height));
                g = 2048 < g.width || 2048 < g.height ? g.toDataURL("image/jpeg", .6) : g.toDataURL("image/png");
                d[e] = {uuid: f, url: g}
            }
            b.image = c.uuid
        }
        return a.textures[this.uuid] = b
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    },
    transformUv: function (a) {
        if (this.mapping === THREE.UVMapping) {
            a.multiply(this.repeat);
            a.add(this.offset);
            if (0 > a.x || 1 < a.x) switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    a.x -= Math.floor(a.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.x = 0 > a.x ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a.x) % 2) ? a.x = Math.ceil(a.x) - a.x : a.x -= Math.floor(a.x)
            }
            if (0 > a.y || 1 < a.y) switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    a.y -= Math.floor(a.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.y = 0 > a.y ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 ===
                    Math.abs(Math.floor(a.y) % 2) ? a.y = Math.ceil(a.y) - a.y : a.y -= Math.floor(a.y)
            }
            this.flipY && (a.y = 1 - a.y)
        }
    }
};
Object.assign(THREE.Texture.prototype, THREE.EventDispatcher.prototype);
THREE.TextureIdCount = 0;
THREE.DepthTexture = function (a, b, c, d, e, f, g, h, k) {
    THREE.Texture.call(this, null, d, e, f, g, h, THREE.DepthFormat, c, k);
    this.image = {width: a, height: b};
    this.type = void 0 !== c ? c : THREE.UnsignedShortType;
    this.magFilter = void 0 !== g ? g : THREE.NearestFilter;
    this.minFilter = void 0 !== h ? h : THREE.NearestFilter;
    this.generateMipmaps = this.flipY = !1
};
THREE.DepthTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DepthTexture.prototype.constructor = THREE.DepthTexture;
THREE.CanvasTexture = function (a, b, c, d, e, f, g, h, k) {
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
    this.needsUpdate = !0
};
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture;
THREE.CubeTexture = function (a, b, c, d, e, f, g, h, k, l) {
    a = void 0 !== a ? a : [];
    b = void 0 !== b ? b : THREE.CubeReflectionMapping;
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k, l);
    this.flipY = !1
};
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture;
Object.defineProperty(THREE.CubeTexture.prototype, "images", {
    get: function () {
        return this.image
    }, set: function (a) {
        this.image = a
    }
});
THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, k, l, n, p) {
    THREE.Texture.call(this, null, f, g, h, k, l, d, e, n, p);
    this.image = {width: b, height: c};
    this.mipmaps = a;
    this.generateMipmaps = this.flipY = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture;
THREE.DataTexture = function (a, b, c, d, e, f, g, h, k, l, n, p) {
    THREE.Texture.call(this, null, f, g, h, k, l, d, e, n, p);
    this.image = {data: a, width: b, height: c};
    this.magFilter = void 0 !== k ? k : THREE.NearestFilter;
    this.minFilter = void 0 !== l ? l : THREE.NearestFilter;
    this.generateMipmaps = this.flipY = !1
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.VideoTexture = function (a, b, c, d, e, f, g, h, k) {
    function l() {
        requestAnimationFrame(l);
        a.readyState >= a.HAVE_CURRENT_DATA && (n.needsUpdate = !0)
    }

    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
    this.generateMipmaps = !1;
    var n = this;
    l()
};
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture;
THREE.Group = function () {
    THREE.Object3D.call(this);
    this.type = "Group"
};
THREE.Group.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {constructor: THREE.Group});
THREE.Points = function (a, b) {
    THREE.Object3D.call(this);
    this.type = "Points";
    this.geometry = void 0 !== a ? a : new THREE.BufferGeometry;
    this.material = void 0 !== b ? b : new THREE.PointsMaterial({color: 16777215 * Math.random()})
};
THREE.Points.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Points, raycast: function () {
        var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere;
        return function (d, e) {
            function f(a, c) {
                var f = b.distanceSqToPoint(a);
                if (f < n) {
                    var h = b.closestPointToPoint(a);
                    h.applyMatrix4(k);
                    var m = d.ray.origin.distanceTo(h);
                    m < d.near || m > d.far || e.push({
                        distance: m,
                        distanceToRay: Math.sqrt(f),
                        point: h.clone(),
                        index: c,
                        face: null,
                        object: g
                    })
                }
            }

            var g = this, h = this.geometry, k = this.matrixWorld, l = d.params.Points.threshold;
            null === h.boundingSphere && h.computeBoundingSphere();
            c.copy(h.boundingSphere);
            c.applyMatrix4(k);
            if (!1 !== d.ray.intersectsSphere(c)) {
                a.getInverse(k);
                b.copy(d.ray).applyMatrix4(a);
                var l = l / ((this.scale.x + this.scale.y + this.scale.z) / 3), n = l * l, l = new THREE.Vector3;
                if (h instanceof THREE.BufferGeometry) {
                    var p = h.index, h = h.attributes.position.array;
                    if (null !== p) for (var m = p.array, p = 0, q = m.length; p < q; p++) {
                        var r = m[p];
                        l.fromArray(h, 3 * r);
                        f(l, r)
                    } else for (p = 0, m = h.length / 3; p < m; p++) l.fromArray(h, 3 * p), f(l, p)
                } else for (l = h.vertices,
                                p = 0, m = l.length; p < m; p++) f(l[p], p)
            }
        }
    }(), clone: function () {
        return (new this.constructor(this.geometry, this.material)).copy(this)
    }
});
THREE.Line = function (a, b, c) {
    if (1 === c) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(a, b);
    THREE.Object3D.call(this);
    this.type = "Line";
    this.geometry = void 0 !== a ? a : new THREE.BufferGeometry;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({color: 16777215 * Math.random()})
};
THREE.Line.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Line, raycast: function () {
        var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere;
        return function (d, e) {
            var f = d.linePrecision, f = f * f, g = this.geometry, h = this.matrixWorld;
            null === g.boundingSphere && g.computeBoundingSphere();
            c.copy(g.boundingSphere);
            c.applyMatrix4(h);
            if (!1 !== d.ray.intersectsSphere(c)) {
                a.getInverse(h);
                b.copy(d.ray).applyMatrix4(a);
                var k = new THREE.Vector3, l = new THREE.Vector3, h = new THREE.Vector3, n =
                    new THREE.Vector3, p = this instanceof THREE.LineSegments ? 2 : 1;
                if (g instanceof THREE.BufferGeometry) {
                    var m = g.index, q = g.attributes.position.array;
                    if (null !== m) for (var m = m.array, g = 0, r = m.length - 1; g < r; g += p) {
                        var s = m[g + 1];
                        k.fromArray(q, 3 * m[g]);
                        l.fromArray(q, 3 * s);
                        s = b.distanceSqToSegment(k, l, n, h);
                        s > f || (n.applyMatrix4(this.matrixWorld), s = d.ray.origin.distanceTo(n), s < d.near || s > d.far || e.push({
                            distance: s,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                    } else for (g = 0, r =
                        q.length / 3 - 1; g < r; g += p) k.fromArray(q, 3 * g), l.fromArray(q, 3 * g + 3), s = b.distanceSqToSegment(k, l, n, h), s > f || (n.applyMatrix4(this.matrixWorld), s = d.ray.origin.distanceTo(n), s < d.near || s > d.far || e.push({
                        distance: s,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
                } else if (g instanceof THREE.Geometry) for (k = g.vertices, l = k.length, g = 0; g < l - 1; g += p) s = b.distanceSqToSegment(k[g], k[g + 1], n, h), s > f || (n.applyMatrix4(this.matrixWorld), s = d.ray.origin.distanceTo(n), s < d.near || s > d.far ||
                e.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: g,
                    face: null,
                    faceIndex: null,
                    object: this
                }))
            }
        }
    }(), clone: function () {
        return (new this.constructor(this.geometry, this.material)).copy(this)
    }
});
THREE.LineSegments = function (a, b) {
    THREE.Line.call(this, a, b);
    this.type = "LineSegments"
};
THREE.LineSegments.prototype = Object.assign(Object.create(THREE.Line.prototype), {constructor: THREE.LineSegments});
THREE.Mesh = function (a, b) {
    THREE.Object3D.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== a ? a : new THREE.BufferGeometry;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()});
    this.drawMode = THREE.TrianglesDrawMode;
    this.updateMorphTargets()
};
THREE.Mesh.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Mesh, setDrawMode: function (a) {
        this.drawMode = a
    }, copy: function (a) {
        THREE.Object3D.prototype.copy.call(this, a);
        this.drawMode = a.drawMode;
        return this
    }, updateMorphTargets: function () {
        if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
            this.morphTargetBase = -1;
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++) this.morphTargetInfluences.push(0),
                this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
        }
    }, getMorphTargetIndexByName: function (a) {
        if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
        console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
        return 0
    }, raycast: function () {
        function a(a, b, c, d, e, g, f) {
            THREE.Triangle.barycoordFromPoint(a, b, c, d, s);
            e.multiplyScalar(s.x);
            g.multiplyScalar(s.y);
            f.multiplyScalar(s.z);
            e.add(g).add(f);
            return e.clone()
        }

        function b(a, b, c,
                   d, e, g, f) {
            var h = a.material;
            if (null === (h.side === THREE.BackSide ? c.intersectTriangle(g, e, d, !0, f) : c.intersectTriangle(d, e, g, h.side !== THREE.DoubleSide, f))) return null;
            u.copy(f);
            u.applyMatrix4(a.matrixWorld);
            c = b.ray.origin.distanceTo(u);
            return c < b.near || c > b.far ? null : {distance: c, point: u.clone(), object: a}
        }

        function c(c, d, e, f, l, p, n, s) {
            g.fromArray(f, 3 * p);
            h.fromArray(f, 3 * n);
            k.fromArray(f, 3 * s);
            if (c = b(c, d, e, g, h, k, t)) l && (m.fromArray(l, 2 * p), q.fromArray(l, 2 * n), r.fromArray(l, 2 * s), c.uv = a(t, g, h, k, m, q, r)), c.face = new THREE.Face3(p,
                n, s, THREE.Triangle.normal(g, h, k)), c.faceIndex = p;
            return c
        }

        var d = new THREE.Matrix4, e = new THREE.Ray, f = new THREE.Sphere, g = new THREE.Vector3,
            h = new THREE.Vector3, k = new THREE.Vector3, l = new THREE.Vector3, n = new THREE.Vector3,
            p = new THREE.Vector3, m = new THREE.Vector2, q = new THREE.Vector2, r = new THREE.Vector2,
            s = new THREE.Vector3, t = new THREE.Vector3, u = new THREE.Vector3;
        return function (v, s) {
            var w = this.geometry, u = this.material, z = this.matrixWorld;
            if (void 0 !== u && (null === w.boundingSphere && w.computeBoundingSphere(), f.copy(w.boundingSphere),
                f.applyMatrix4(z), !1 !== v.ray.intersectsSphere(f) && (d.getInverse(z), e.copy(v.ray).applyMatrix4(d), null === w.boundingBox || !1 !== e.intersectsBox(w.boundingBox)))) {
                var y, A;
                if (w instanceof THREE.BufferGeometry) {
                    var I, B, u = w.index, z = w.attributes, w = z.position.array;
                    void 0 !== z.uv && (y = z.uv.array);
                    if (null !== u) for (var z = u.array, F = 0, K = z.length; F < K; F += 3) {
                        if (u = z[F], I = z[F + 1], B = z[F + 2], A = c(this, v, e, w, y, u, I, B)) A.faceIndex = Math.floor(F / 3), s.push(A)
                    } else for (F = 0, K = w.length; F < K; F += 9) if (u = F / 3, I = u + 1, B = u + 2, A = c(this, v, e, w, y,
                        u, I, B)) A.index = u, s.push(A)
                } else if (w instanceof THREE.Geometry) {
                    var P, M, z = u instanceof THREE.MultiMaterial, F = !0 === z ? u.materials : null, K = w.vertices;
                    I = w.faces;
                    B = w.faceVertexUvs[0];
                    0 < B.length && (y = B);
                    for (var H = 0, L = I.length; H < L; H++) {
                        var O = I[H];
                        A = !0 === z ? F[O.materialIndex] : u;
                        if (void 0 !== A) {
                            B = K[O.a];
                            P = K[O.b];
                            M = K[O.c];
                            if (!0 === A.morphTargets) {
                                A = w.morphTargets;
                                var N = this.morphTargetInfluences;
                                g.set(0, 0, 0);
                                h.set(0, 0, 0);
                                k.set(0, 0, 0);
                                for (var Q = 0, J = A.length; Q < J; Q++) {
                                    var D = N[Q];
                                    if (0 !== D) {
                                        var G = A[Q].vertices;
                                        g.addScaledVector(l.subVectors(G[O.a],
                                            B), D);
                                        h.addScaledVector(n.subVectors(G[O.b], P), D);
                                        k.addScaledVector(p.subVectors(G[O.c], M), D)
                                    }
                                }
                                g.add(B);
                                h.add(P);
                                k.add(M);
                                B = g;
                                P = h;
                                M = k
                            }
                            if (A = b(this, v, e, B, P, M, t)) y && (N = y[H], m.copy(N[0]), q.copy(N[1]), r.copy(N[2]), A.uv = a(t, B, P, M, m, q, r)), A.face = O, A.faceIndex = H, s.push(A)
                        }
                    }
                }
            }
        }
    }(), clone: function () {
        return (new this.constructor(this.geometry, this.material)).copy(this)
    }
});
THREE.Bone = function (a) {
    THREE.Object3D.call(this);
    this.type = "Bone";
    this.skin = a
};
THREE.Bone.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Bone,
    copy: function (a) {
        THREE.Object3D.prototype.copy.call(this, a);
        this.skin = a.skin;
        return this
    }
});
THREE.Skeleton = function (a, b, c) {
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    a = a || [];
    this.bones = a.slice(0);
    this.useVertexTexture ? (a = Math.sqrt(4 * this.bones.length), a = THREE.Math.nextPowerOfTwo(Math.ceil(a)), this.boneTextureHeight = this.boneTextureWidth = a = Math.max(a, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)) :
        this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === b) this.calculateInverses(); else if (this.bones.length === b.length) this.boneInverses = b.slice(0); else for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], b = 0, a = this.bones.length; b < a; b++) this.boneInverses.push(new THREE.Matrix4)
};
Object.assign(THREE.Skeleton.prototype, {
    calculateInverses: function () {
        this.boneInverses = [];
        for (var a = 0, b = this.bones.length; a < b; a++) {
            var c = new THREE.Matrix4;
            this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
            this.boneInverses.push(c)
        }
    }, pose: function () {
        for (var a, b = 0, c = this.bones.length; b < c; b++) (a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
        b = 0;
        for (c = this.bones.length; b < c; b++) if (a = this.bones[b]) a.parent instanceof THREE.Bone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) :
            a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
    }, update: function () {
        var a = new THREE.Matrix4;
        return function () {
            for (var b = 0, c = this.bones.length; b < c; b++) a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]), a.toArray(this.boneMatrices, 16 * b);
            this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
        }
    }(), clone: function () {
        return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
    }
});
THREE.SkinnedMesh = function (a, b, c) {
    THREE.Mesh.call(this, a, b);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new THREE.Matrix4;
    this.bindMatrixInverse = new THREE.Matrix4;
    a = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var d, e = 0, f = this.geometry.bones.length; e < f; ++e) d = this.geometry.bones[e], b = new THREE.Bone(this), a.push(b), b.name = d.name, b.position.fromArray(d.pos), b.quaternion.fromArray(d.rotq), void 0 !== d.scl && b.scale.fromArray(d.scl);
        e = 0;
        for (f = this.geometry.bones.length; e < f; ++e) d =
            this.geometry.bones[e], -1 !== d.parent && null !== d.parent && void 0 !== a[d.parent] ? a[d.parent].add(a[e]) : this.add(a[e])
    }
    this.normalizeSkinWeights();
    this.updateMatrixWorld(!0);
    this.bind(new THREE.Skeleton(a, void 0, c), this.matrixWorld)
};
THREE.SkinnedMesh.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {
    constructor: THREE.SkinnedMesh, bind: function (a, b) {
        this.skeleton = a;
        void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
        this.bindMatrix.copy(b);
        this.bindMatrixInverse.getInverse(b)
    }, pose: function () {
        this.skeleton.pose()
    }, normalizeSkinWeights: function () {
        if (this.geometry instanceof THREE.Geometry) for (var a = 0; a < this.geometry.skinWeights.length; a++) {
            var b = this.geometry.skinWeights[a], c =
                1 / b.lengthManhattan();
            Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0)
        } else if (this.geometry instanceof THREE.BufferGeometry) for (var b = new THREE.Vector4, d = this.geometry.attributes.skinWeight, a = 0; a < d.count; a++) b.x = d.getX(a), b.y = d.getY(a), b.z = d.getZ(a), b.w = d.getW(a), c = 1 / b.lengthManhattan(), Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0), d.setXYZW(a, b.x, b.y, b.z, b.w)
    }, updateMatrixWorld: function (a) {
        THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
        "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) :
            "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
    }, clone: function () {
        return (new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture)).copy(this)
    }
});
THREE.LOD = function () {
    THREE.Object3D.call(this);
    this.type = "LOD";
    Object.defineProperties(this, {levels: {enumerable: !0, value: []}})
};
THREE.LOD.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.LOD, copy: function (a) {
        THREE.Object3D.prototype.copy.call(this, a, !1);
        a = a.levels;
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            this.addLevel(d.object.clone(), d.distance)
        }
        return this
    }, addLevel: function (a, b) {
        void 0 === b && (b = 0);
        b = Math.abs(b);
        for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++) ;
        c.splice(d, 0, {distance: b, object: a});
        this.add(a)
    }, getObjectForDistance: function (a) {
        for (var b = this.levels, c = 1, d = b.length; c <
        d && !(a < b[c].distance); c++) ;
        return b[c - 1].object
    }, raycast: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            a.setFromMatrixPosition(this.matrixWorld);
            var d = b.ray.origin.distanceTo(a);
            this.getObjectForDistance(d).raycast(b, c)
        }
    }(), update: function () {
        var a = new THREE.Vector3, b = new THREE.Vector3;
        return function (c) {
            var d = this.levels;
            if (1 < d.length) {
                a.setFromMatrixPosition(c.matrixWorld);
                b.setFromMatrixPosition(this.matrixWorld);
                c = a.distanceTo(b);
                d[0].object.visible = !0;
                for (var e = 1, f = d.length; e < f; e++) if (c >=
                    d[e].distance) d[e - 1].object.visible = !1, d[e].object.visible = !0; else break;
                for (; e < f; e++) d[e].object.visible = !1
            }
        }
    }(), toJSON: function (a) {
        a = THREE.Object3D.prototype.toJSON.call(this, a);
        a.object.levels = [];
        for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
            var e = b[c];
            a.object.levels.push({object: e.object.uuid, distance: e.distance})
        }
        return a
    }
});
THREE.Sprite = function (a) {
    THREE.Object3D.call(this);
    this.type = "Sprite";
    this.material = void 0 !== a ? a : new THREE.SpriteMaterial
};
THREE.Sprite.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Sprite,
    raycast: function () {
        var a = new THREE.Vector3;
        return function (b, c) {
            a.setFromMatrixPosition(this.matrixWorld);
            var d = b.ray.distanceSqToPoint(a);
            d > this.scale.x * this.scale.y / 4 || c.push({
                distance: Math.sqrt(d),
                point: this.position,
                face: null,
                object: this
            })
        }
    }(),
    clone: function () {
        return (new this.constructor(this.material)).copy(this)
    }
});
THREE.LensFlare = function (a, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.LensFlare, copy: function (a) {
        THREE.Object3D.prototype.copy.call(this, a);
        this.positionScreen.copy(a.positionScreen);
        this.customUpdateCallback = a.customUpdateCallback;
        for (var b = 0, c = a.lensFlares.length; b < c; b++) this.lensFlares.push(a.lensFlares[b]);
        return this
    }, add: function (a, b, c, d, e, f) {
        void 0 === b && (b = -1);
        void 0 === c && (c = 0);
        void 0 === f && (f = 1);
        void 0 === e && (e = new THREE.Color(16777215));
        void 0 === d && (d = THREE.NormalBlending);
        c = Math.min(c, Math.max(0, c));
        this.lensFlares.push({
            texture: a,
            size: b,
            distance: c,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotation: 0,
            opacity: f,
            color: e,
            blending: d
        })
    }, updateLensFlares: function () {
        var a, b = this.lensFlares.length, c, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
        for (a = 0; a < b; a++) c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation)
    }
});
THREE.Scene = function () {
    THREE.Object3D.call(this);
    this.type = "Scene";
    this.overrideMaterial = this.fog = this.background = null;
    this.autoUpdate = !0
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.copy = function (a, b) {
    THREE.Object3D.prototype.copy.call(this, a, b);
    null !== a.background && (this.background = a.background.clone());
    null !== a.fog && (this.fog = a.fog.clone());
    null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
    this.autoUpdate = a.autoUpdate;
    this.matrixAutoUpdate = a.matrixAutoUpdate;
    return this
};
THREE.Fog = function (a, b, c) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3
};
THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function (a, b) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.density = void 0 !== b ? b : 2.5E-4
};
THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.ShaderChunk = {};
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n";
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n";
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n";
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n";
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n";
THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";
THREE.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n";
THREE.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n";
THREE.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n";
THREE.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif";
THREE.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n";
THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n";
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n";
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n";
THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n";
THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";
THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n";
THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";
THREE.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n";
THREE.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n";
THREE.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n";
THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n";
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n";
THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n";
THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n";
THREE.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n";
THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n";
THREE.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n";
THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n";
THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";
THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n";
THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n";
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif";
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif";
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif";
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif";
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n";
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n";
THREE.UniformsUtils = {
    merge: function (a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = this.clone(a[c]), e;
            for (e in d) b[e] = d[e]
        }
        return b
    }, clone: function (a) {
        var b = {}, c;
        for (c in a) {
            b[c] = {};
            for (var d in a[c]) {
                var e = a[c][d];
                e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix3 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
            }
        }
        return b
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {value: new THREE.Color(15658734)},
        opacity: {value: 1},
        map: {value: null},
        offsetRepeat: {value: new THREE.Vector4(0, 0, 1, 1)},
        specularMap: {value: null},
        alphaMap: {value: null},
        envMap: {value: null},
        flipEnvMap: {value: -1},
        reflectivity: {value: 1},
        refractionRatio: {value: .98}
    },
    aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
    lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
    emissivemap: {emissiveMap: {value: null}},
    bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
    normalmap: {
        normalMap: {value: null},
        normalScale: {value: new THREE.Vector2(1, 1)}
    },
    displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
    roughnessmap: {roughnessMap: {value: null}},
    metalnessmap: {metalnessMap: {value: null}},
    fog: {
        fogDensity: {value: 2.5E-4},
        fogNear: {value: 1},
        fogFar: {value: 2E3},
        fogColor: {value: new THREE.Color(16777215)}
    },
    lights: {
        ambientLightColor: {value: []},
        directionalLights: {
            value: [],
            properties: {direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}}
        },
        directionalShadowMap: {value: []},
        directionalShadowMatrix: {value: []},
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {value: []},
        spotShadowMatrix: {value: []},
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        pointShadowMap: {value: []},
        pointShadowMatrix: {value: []},
        hemisphereLights: {
            value: [], properties: {
                direction: {},
                skyColor: {}, groundColor: {}
            }
        }
    },
    points: {
        diffuse: {value: new THREE.Color(15658734)},
        opacity: {value: 1},
        size: {value: 1},
        scale: {value: 1},
        map: {value: null},
        offsetRepeat: {value: new THREE.Vector4(0, 0, 1, 1)}
    }
};
THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";
THREE.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n";
THREE.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";
THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n";
THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n";
THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";
THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";
THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n";
THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";
THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n";
THREE.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.meshbasic_vert,
        fragmentShader: THREE.ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {emissive: {value: new THREE.Color(0)}}]),
        vertexShader: THREE.ShaderChunk.meshlambert_vert,
        fragmentShader: THREE.ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {value: new THREE.Color(0)},
            specular: {value: new THREE.Color(1118481)},
            shininess: {value: 30}
        }]), vertexShader: THREE.ShaderChunk.meshphong_vert, fragmentShader: THREE.ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {value: new THREE.Color(0)},
            roughness: {value: .5},
            metalness: {value: 0},
            envMapIntensity: {value: 1}
        }]), vertexShader: THREE.ShaderChunk.meshphysical_vert,
        fragmentShader: THREE.ShaderChunk.meshphysical_frag
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.points_vert,
        fragmentShader: THREE.ShaderChunk.points_frag
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {value: 1},
            dashSize: {value: 1},
            totalSize: {value: 2}
        }]), vertexShader: THREE.ShaderChunk.linedashed_vert, fragmentShader: THREE.ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
            THREE.UniformsLib.displacementmap]),
        vertexShader: THREE.ShaderChunk.depth_vert,
        fragmentShader: THREE.ShaderChunk.depth_frag
    },
    normal: {
        uniforms: {opacity: {value: 1}},
        vertexShader: THREE.ShaderChunk.normal_vert,
        fragmentShader: THREE.ShaderChunk.normal_frag
    },
    cube: {
        uniforms: {tCube: {value: null}, tFlip: {value: -1}},
        vertexShader: THREE.ShaderChunk.cube_vert,
        fragmentShader: THREE.ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {tEquirect: {value: null}, tFlip: {value: -1}},
        vertexShader: THREE.ShaderChunk.equirect_vert,
        fragmentShader: THREE.ShaderChunk.equirect_frag
    },
    distanceRGBA: {
        uniforms: {lightPos: {value: new THREE.Vector3}},
        vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
        fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
    }
};
THREE.ShaderLib.physical = {
    uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms, {
        clearCoat: {value: 0},
        clearCoatRoughness: {value: 0}
    }]), vertexShader: THREE.ShaderChunk.meshphysical_vert, fragmentShader: THREE.ShaderChunk.meshphysical_frag
};
THREE.WebGLRenderer = function (a) {
    function b(a, b, c, d) {
        !0 === A && (a *= d, b *= d, c *= d);
        R.clearColor(a, b, c, d)
    }

    function c() {
        R.init();
        R.scissor(X.copy(ua).multiplyScalar($));
        R.viewport(ba.copy(ma).multiplyScalar($));
        b(V.r, V.g, V.b, Y)
    }

    function d() {
        T = Q = null;
        aa = "";
        G = -1;
        R.reset()
    }

    function e(a) {
        a.preventDefault();
        d();
        c();
        Z.clear()
    }

    function f(a) {
        a = a.target;
        a.removeEventListener("dispose", f);
        g(a);
        Z.delete(a)
    }

    function g(a) {
        var b = Z.get(a).program;
        a.program = void 0;
        void 0 !== b && na.releaseProgram(b)
    }

    function h(a, b) {
        return Math.abs(b[0]) -
            Math.abs(a[0])
    }

    function k(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }

    function l(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }

    function n(a, b, c, d, e) {
        var f;
        c.transparent ? (d = P, f = ++M) : (d = F, f = ++K);
        f = d[f];
        void 0 !== f ? (f.id = a.id, f.object = a, f.geometry = b, f.material = c, f.z = W.z, f.group = e) : (f =
            {id: a.id, object: a, geometry: b, material: c, z: W.z, group: e}, d.push(f))
    }

    function p(a) {
        if (!wa.intersectsSphere(a)) return !1;
        var b = ca.numPlanes;
        if (0 === b) return !0;
        var c = N.clippingPlanes, d = a.center;
        a = -a.radius;
        var e = 0;
        do if (c[e].distanceToPoint(d) < a) return !1; while (++e !== b);
        return !0
    }

    function m(a, b) {
        if (!1 !== a.visible) {
            if (a.layers.test(b.layers)) if (a instanceof THREE.Light) B.push(a); else if (a instanceof THREE.Sprite) {
                var c;
                (c = !1 === a.frustumCulled) || (ha.center.set(0, 0, 0), ha.radius = .7071067811865476, ha.applyMatrix4(a.matrixWorld),
                    c = !0 === p(ha));
                c && L.push(a)
            } else if (a instanceof THREE.LensFlare) O.push(a); else if (a instanceof THREE.ImmediateRenderObject) !0 === N.sortObjects && (W.setFromMatrixPosition(a.matrixWorld), W.applyProjection(pa)), n(a, null, a.material, W.z, null); else if (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Points) if (a instanceof THREE.SkinnedMesh && a.skeleton.update(), (c = !1 === a.frustumCulled) || (c = a.geometry, null === c.boundingSphere && c.computeBoundingSphere(), ha.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),
                c = !0 === p(ha)), c) {
                var d = a.material;
                if (!0 === d.visible) if (!0 === N.sortObjects && (W.setFromMatrixPosition(a.matrixWorld), W.applyProjection(pa)), c = ea.update(a), d instanceof THREE.MultiMaterial) for (var e = c.groups, f = d.materials, d = 0, g = e.length; d < g; d++) {
                    var h = e[d], k = f[h.materialIndex];
                    !0 === k.visible && n(a, c, k, W.z, h)
                } else n(a, c, d, W.z, null)
            }
            c = a.children;
            d = 0;
            for (g = c.length; d < g; d++) m(c[d], b)
        }
    }

    function q(a, b, c, d) {
        for (var e = 0, f = a.length; e < f; e++) {
            var g = a[e], h = g.object, k = g.geometry, m = void 0 === d ? g.material : d, g = g.group;
            h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, h.matrixWorld);
            h.normalMatrix.getNormalMatrix(h.modelViewMatrix);
            if (h instanceof THREE.ImmediateRenderObject) {
                r(m);
                var l = s(b, c, m, h);
                aa = "";
                h.render(function (a) {
                    N.renderBufferImmediate(a, l, m)
                })
            } else N.renderBufferDirect(b, c, k, m, h, g)
        }
    }

    function r(a) {
        a.side !== THREE.DoubleSide ? R.enable(x.CULL_FACE) : R.disable(x.CULL_FACE);
        R.setFlipSided(a.side === THREE.BackSide);
        !0 === a.transparent ? R.setBlending(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha,
            a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha) : R.setBlending(THREE.NoBlending);
        R.setDepthFunc(a.depthFunc);
        R.setDepthTest(a.depthTest);
        R.setDepthWrite(a.depthWrite);
        R.setColorWrite(a.colorWrite);
        R.setPolygonOffset(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits)
    }

    function s(a, b, c, d) {
        ia = 0;
        var e = Z.get(c);
        qa && ((va || a !== T) && ca.setState(c.clippingPlanes, c.clipShadows, a, e, a === T && c.id === G), void 0 !== e.numClippingPlanes && e.numClippingPlanes !== ca.numPlanes && (c.needsUpdate = !0));
        void 0 === e.program &&
        (c.needsUpdate = !0);
        void 0 !== e.lightsHash && e.lightsHash !== S.hash && (c.needsUpdate = !0);
        if (c.needsUpdate) {
            a:{
                var h = Z.get(c), k = na.getParameters(c, S, b, ca.numPlanes, d), m = na.getProgramCode(c, k),
                    l = h.program, p = !0;
                if (void 0 === l) c.addEventListener("dispose", f); else if (l.code !== m) g(c); else if (void 0 !== k.shaderID) break a; else p = !1;
                p && (k.shaderID ? (l = THREE.ShaderLib[k.shaderID], h.__webglShader = {
                        name: c.type,
                        uniforms: THREE.UniformsUtils.clone(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }) :
                    h.__webglShader = {
                        name: c.type,
                        uniforms: c.uniforms,
                        vertexShader: c.vertexShader,
                        fragmentShader: c.fragmentShader
                    }, c.__webglShader = h.__webglShader, l = na.acquireProgram(c, k, m), h.program = l, c.program = l);
                k = l.getAttributes();
                if (c.morphTargets) for (m = c.numSupportedMorphTargets = 0; m < N.maxMorphTargets; m++) 0 <= k["morphTarget" + m] && c.numSupportedMorphTargets++;
                if (c.morphNormals) for (m = c.numSupportedMorphNormals = 0; m < N.maxMorphNormals; m++) 0 <= k["morphNormal" + m] && c.numSupportedMorphNormals++;
                k = h.__webglShader.uniforms;
                (c instanceof
                    THREE.ShaderMaterial || c instanceof THREE.RawShaderMaterial) && !0 !== c.clipping || (h.numClippingPlanes = ca.numPlanes, k.clippingPlanes = ca.uniform);
                c.lights && (h.lightsHash = S.hash, k.ambientLightColor.value = S.ambient, k.directionalLights.value = S.directional, k.spotLights.value = S.spot, k.pointLights.value = S.point, k.hemisphereLights.value = S.hemi, k.directionalShadowMap.value = S.directionalShadowMap, k.directionalShadowMatrix.value = S.directionalShadowMatrix, k.spotShadowMap.value = S.spotShadowMap, k.spotShadowMatrix.value =
                    S.spotShadowMatrix, k.pointShadowMap.value = S.pointShadowMap, k.pointShadowMatrix.value = S.pointShadowMatrix);
                m = h.program.getUniforms();
                m = THREE.WebGLUniforms.seqWithValue(m.seq, k);
                h.uniformsList = m;
                h.dynamicUniforms = THREE.WebGLUniforms.splitDynamic(m, k)
            }
            c.needsUpdate = !1
        }
        var n = !1, p = l = !1, h = e.program, m = h.getUniforms(), k = e.__webglShader.uniforms;
        h.id !== Q && (x.useProgram(h.program), Q = h.id, p = l = n = !0);
        c.id !== G && (G = c.id, l = !0);
        if (n || a !== T) {
            m.set(x, a, "projectionMatrix");
            da.logarithmicDepthBuffer && m.setValue(x, "logDepthBufFC",
                2 / (Math.log(a.far + 1) / Math.LN2));
            a !== T && (T = a, p = l = !0);
            if (c instanceof THREE.ShaderMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial || c.envMap) n = m.map.cameraPosition, void 0 !== n && n.setValue(x, W.setFromMatrixPosition(a.matrixWorld));
            (c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshStandardMaterial || c instanceof THREE.ShaderMaterial || c.skinning) && m.setValue(x, "viewMatrix", a.matrixWorldInverse);
            m.set(x, N, "toneMappingExposure");
            m.set(x, N, "toneMappingWhitePoint")
        }
        c.skinning && (m.setOptional(x, d, "bindMatrix"), m.setOptional(x, d, "bindMatrixInverse"), n = d.skeleton) && (da.floatVertexTextures && n.useVertexTexture ? (m.set(x, n, "boneTexture"), m.set(x, n, "boneTextureWidth"), m.set(x, n, "boneTextureHeight")) : m.setOptional(x, n, "boneMatrices"));
        if (l) {
            c.lights && (l = p, k.ambientLightColor.needsUpdate = l, k.directionalLights.needsUpdate = l, k.pointLights.needsUpdate = l, k.spotLights.needsUpdate = l, k.hemisphereLights.needsUpdate =
                l);
            b && c.fog && (k.fogColor.value = b.color, b instanceof THREE.Fog ? (k.fogNear.value = b.near, k.fogFar.value = b.far) : b instanceof THREE.FogExp2 && (k.fogDensity.value = b.density));
            if (c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial || c instanceof THREE.MeshDepthMaterial) {
                k.opacity.value = c.opacity;
                k.diffuse.value = c.color;
                c.emissive && k.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
                k.map.value =
                    c.map;
                k.specularMap.value = c.specularMap;
                k.alphaMap.value = c.alphaMap;
                c.aoMap && (k.aoMap.value = c.aoMap, k.aoMapIntensity.value = c.aoMapIntensity);
                var q;
                c.map ? q = c.map : c.specularMap ? q = c.specularMap : c.displacementMap ? q = c.displacementMap : c.normalMap ? q = c.normalMap : c.bumpMap ? q = c.bumpMap : c.roughnessMap ? q = c.roughnessMap : c.metalnessMap ? q = c.metalnessMap : c.alphaMap ? q = c.alphaMap : c.emissiveMap && (q = c.emissiveMap);
                void 0 !== q && (q instanceof THREE.WebGLRenderTarget && (q = q.texture), b = q.offset, q = q.repeat, k.offsetRepeat.value.set(b.x,
                    b.y, q.x, q.y));
                k.envMap.value = c.envMap;
                k.flipEnvMap.value = c.envMap instanceof THREE.CubeTexture ? -1 : 1;
                k.reflectivity.value = c.reflectivity;
                k.refractionRatio.value = c.refractionRatio
            }
            c instanceof THREE.LineBasicMaterial ? (k.diffuse.value = c.color, k.opacity.value = c.opacity) : c instanceof THREE.LineDashedMaterial ? (k.diffuse.value = c.color, k.opacity.value = c.opacity, k.dashSize.value = c.dashSize, k.totalSize.value = c.dashSize + c.gapSize, k.scale.value = c.scale) : c instanceof THREE.PointsMaterial ? (k.diffuse.value = c.color,
                k.opacity.value = c.opacity, k.size.value = c.size * $, k.scale.value = .5 * v.clientHeight, k.map.value = c.map, null !== c.map && (q = c.map.offset, c = c.map.repeat, k.offsetRepeat.value.set(q.x, q.y, c.x, c.y))) : c instanceof THREE.MeshLambertMaterial ? (c.lightMap && (k.lightMap.value = c.lightMap, k.lightMapIntensity.value = c.lightMapIntensity), c.emissiveMap && (k.emissiveMap.value = c.emissiveMap)) : c instanceof THREE.MeshPhongMaterial ? (k.specular.value = c.specular, k.shininess.value = Math.max(c.shininess, 1E-4), c.lightMap && (k.lightMap.value =
                c.lightMap, k.lightMapIntensity.value = c.lightMapIntensity), c.emissiveMap && (k.emissiveMap.value = c.emissiveMap), c.bumpMap && (k.bumpMap.value = c.bumpMap, k.bumpScale.value = c.bumpScale), c.normalMap && (k.normalMap.value = c.normalMap, k.normalScale.value.copy(c.normalScale)), c.displacementMap && (k.displacementMap.value = c.displacementMap, k.displacementScale.value = c.displacementScale, k.displacementBias.value = c.displacementBias)) : c instanceof THREE.MeshPhysicalMaterial ? (k.clearCoat.value = c.clearCoat, k.clearCoatRoughness.value =
                c.clearCoatRoughness, t(k, c)) : c instanceof THREE.MeshStandardMaterial ? t(k, c) : c instanceof THREE.MeshDepthMaterial ? c.displacementMap && (k.displacementMap.value = c.displacementMap, k.displacementScale.value = c.displacementScale, k.displacementBias.value = c.displacementBias) : c instanceof THREE.MeshNormalMaterial && (k.opacity.value = c.opacity);
            THREE.WebGLUniforms.upload(x, e.uniformsList, k, N)
        }
        m.set(x, d, "modelViewMatrix");
        m.set(x, d, "normalMatrix");
        m.setValue(x, "modelMatrix", d.matrixWorld);
        e = e.dynamicUniforms;
        null !==
        e && (THREE.WebGLUniforms.evalDynamic(e, k, d, a), THREE.WebGLUniforms.upload(x, e, k, N));
        return h
    }

    function t(a, b) {
        a.roughness.value = b.roughness;
        a.metalness.value = b.metalness;
        b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
        b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
        b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity);
        b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
        b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale);
        b.normalMap && (a.normalMap.value =
            b.normalMap, a.normalScale.value.copy(b.normalScale));
        b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
        b.envMap && (a.envMapIntensity.value = b.envMapIntensity)
    }

    function u(a) {
        var b;
        if (a === THREE.RepeatWrapping) return x.REPEAT;
        if (a === THREE.ClampToEdgeWrapping) return x.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping) return x.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter) return x.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter) return x.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter) return x.NEAREST_MIPMAP_LINEAR;
        if (a === THREE.LinearFilter) return x.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter) return x.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter) return x.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType) return x.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type) return x.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type) return x.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type) return x.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType) return x.BYTE;
        if (a === THREE.ShortType) return x.SHORT;
        if (a === THREE.UnsignedShortType) return x.UNSIGNED_SHORT;
        if (a === THREE.IntType) return x.INT;
        if (a === THREE.UnsignedIntType) return x.UNSIGNED_INT;
        if (a === THREE.FloatType) return x.FLOAT;
        b = U.get("OES_texture_half_float");
        if (null !== b && a === THREE.HalfFloatType) return b.HALF_FLOAT_OES;
        if (a === THREE.AlphaFormat) return x.ALPHA;
        if (a === THREE.RGBFormat) return x.RGB;
        if (a === THREE.RGBAFormat) return x.RGBA;
        if (a === THREE.LuminanceFormat) return x.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat) return x.LUMINANCE_ALPHA;
        if (a === THREE.DepthFormat) return x.DEPTH_COMPONENT;
        if (a === THREE.AddEquation) return x.FUNC_ADD;
        if (a === THREE.SubtractEquation) return x.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation) return x.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor) return x.ZERO;
        if (a === THREE.OneFactor) return x.ONE;
        if (a === THREE.SrcColorFactor) return x.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor) return x.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor) return x.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor) return x.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor) return x.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor) return x.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor) return x.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor) return x.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor) return x.SRC_ALPHA_SATURATE;
        b = U.get("WEBGL_compressed_texture_s3tc");
        if (null !== b) {
            if (a === THREE.RGB_S3TC_DXT1_Format) return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format) return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format) return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format) return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        b = U.get("WEBGL_compressed_texture_pvrtc");
        if (null !== b) {
            if (a === THREE.RGB_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGB_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        b =
            U.get("WEBGL_compressed_texture_etc1");
        if (null !== b && a === THREE.RGB_ETC1_Format) return b.COMPRESSED_RGB_ETC1_WEBGL;
        b = U.get("EXT_blend_minmax");
        if (null !== b) {
            if (a === THREE.MinEquation) return b.MIN_EXT;
            if (a === THREE.MaxEquation) return b.MAX_EXT
        }
        return 0
    }

    console.log("THREE.WebGLRenderer", THREE.REVISION);
    a = a || {};
    var v = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        C = void 0 !== a.context ? a.context : null, w = void 0 !== a.alpha ? a.alpha : !1,
        E = void 0 !== a.depth ? a.depth : !0, z =
            void 0 !== a.stencil ? a.stencil : !0, y = void 0 !== a.antialias ? a.antialias : !1,
        A = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
        I = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1, B = [], F = [], K = -1, P = [], M = -1,
        H = new Float32Array(8), L = [], O = [];
    this.domElement = v;
    this.context = null;
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.clippingPlanes = [];
    this.localClippingEnabled = !1;
    this.gammaFactor = 2;
    this.physicallyCorrectLights = this.gammaOutput = this.gammaInput =
        !1;
    this.toneMapping = THREE.LinearToneMapping;
    this.toneMappingWhitePoint = this.toneMappingExposure = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    var N = this, Q = null, J = null, D = null, G = -1, aa = "", T = null, X = new THREE.Vector4, ja = null,
        ba = new THREE.Vector4, ia = 0, V = new THREE.Color(0), Y = 0, ra = v.width, sa = v.height, $ = 1,
        ua = new THREE.Vector4(0, 0, ra, sa), xa = !1, ma = new THREE.Vector4(0, 0, ra, sa), wa = new THREE.Frustum,
        ca = new THREE.WebGLClipping, qa = !1, va = !1, ha = new THREE.Sphere, pa = new THREE.Matrix4,
        W = new THREE.Vector3, S = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }, fa = {calls: 0, vertices: 0, faces: 0, points: 0};
    this.info = {render: fa, memory: {geometries: 0, textures: 0}, programs: null};
    var x;
    try {
        w = {alpha: w, depth: E, stencil: z, antialias: y, premultipliedAlpha: A, preserveDrawingBuffer: I};
        x = C || v.getContext("webgl", w) || v.getContext("experimental-webgl", w);
        if (null === x) {
            if (null !== v.getContext("webgl")) throw"Error creating WebGL context with your selected attributes.";
            throw"Error creating WebGL context.";
        }
        void 0 === x.getShaderPrecisionFormat && (x.getShaderPrecisionFormat = function () {
            return {rangeMin: 1, rangeMax: 1, precision: 1}
        });
        v.addEventListener("webglcontextlost", e, !1)
    } catch (za) {
        console.error("THREE.WebGLRenderer: " + za)
    }
    var U = new THREE.WebGLExtensions(x);
    U.get("WEBGL_depth_texture");
    U.get("OES_texture_float");
    U.get("OES_texture_float_linear");
    U.get("OES_texture_half_float");
    U.get("OES_texture_half_float_linear");
    U.get("OES_standard_derivatives");
    U.get("ANGLE_instanced_arrays");
    U.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var da = new THREE.WebGLCapabilities(x, U, a), R = new THREE.WebGLState(x, U, u), Z = new THREE.WebGLProperties,
        ka = new THREE.WebGLTextures(x, U, R, Z, da, u, this.info), ea = new THREE.WebGLObjects(x, Z, this.info),
        na = new THREE.WebGLPrograms(this, da), ta = new THREE.WebGLLights;
    this.info.programs = na.programs;
    var Aa = new THREE.WebGLBufferRenderer(x, U, fa), Ba = new THREE.WebGLIndexedBufferRenderer(x, U, fa),
        Ca = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), la =
            new THREE.PerspectiveCamera,
        oa = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.MeshBasicMaterial({
            depthTest: !1,
            depthWrite: !1
        }));
    a = THREE.ShaderLib.cube;
    var ga = new THREE.Mesh(new THREE.BoxBufferGeometry(5, 5, 5), new THREE.ShaderMaterial({
        uniforms: a.uniforms,
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader,
        depthTest: !1,
        depthWrite: !1,
        side: THREE.BackSide
    }));
    ea.update(oa);
    ea.update(ga);
    c();
    this.context = x;
    this.capabilities = da;
    this.extensions = U;
    this.properties = Z;
    this.state = R;
    var ya = new THREE.WebGLShadowMap(this,
        S, ea);
    this.shadowMap = ya;
    var Da = new THREE.SpritePlugin(this, L), Ea = new THREE.LensFlarePlugin(this, O);
    this.getContext = function () {
        return x
    };
    this.getContextAttributes = function () {
        return x.getContextAttributes()
    };
    this.forceContextLoss = function () {
        U.get("WEBGL_lose_context").loseContext()
    };
    this.getMaxAnisotropy = function () {
        return da.getMaxAnisotropy()
    };
    this.getPrecision = function () {
        return da.precision
    };
    this.getPixelRatio = function () {
        return $
    };
    this.setPixelRatio = function (a) {
        void 0 !== a && ($ = a, this.setSize(ma.z,
            ma.w, !1))
    };
    this.getSize = function () {
        return {width: ra, height: sa}
    };
    this.setSize = function (a, b, c) {
        ra = a;
        sa = b;
        v.width = a * $;
        v.height = b * $;
        !1 !== c && (v.style.width = a + "px", v.style.height = b + "px");
        this.setViewport(0, 0, a, b)
    };
    this.setViewport = function (a, b, c, d) {
        R.viewport(ma.set(a, b, c, d))
    };
    this.setScissor = function (a, b, c, d) {
        R.scissor(ua.set(a, b, c, d))
    };
    this.setScissorTest = function (a) {
        R.setScissorTest(xa = a)
    };
    this.getClearColor = function () {
        return V
    };
    this.setClearColor = function (a, c) {
        V.set(a);
        Y = void 0 !== c ? c : 1;
        b(V.r, V.g, V.b,
            Y)
    };
    this.getClearAlpha = function () {
        return Y
    };
    this.setClearAlpha = function (a) {
        Y = a;
        b(V.r, V.g, V.b, Y)
    };
    this.clear = function (a, b, c) {
        var d = 0;
        if (void 0 === a || a) d |= x.COLOR_BUFFER_BIT;
        if (void 0 === b || b) d |= x.DEPTH_BUFFER_BIT;
        if (void 0 === c || c) d |= x.STENCIL_BUFFER_BIT;
        x.clear(d)
    };
    this.clearColor = function () {
        this.clear(!0, !1, !1)
    };
    this.clearDepth = function () {
        this.clear(!1, !0, !1)
    };
    this.clearStencil = function () {
        this.clear(!1, !1, !0)
    };
    this.clearTarget = function (a, b, c, d) {
        this.setRenderTarget(a);
        this.clear(b, c, d)
    };
    this.resetGLState =
        d;
    this.dispose = function () {
        P = [];
        M = -1;
        F = [];
        K = -1;
        v.removeEventListener("webglcontextlost", e, !1)
    };
    this.renderBufferImmediate = function (a, b, c) {
        R.initAttributes();
        var d = Z.get(a);
        a.hasPositions && !d.position && (d.position = x.createBuffer());
        a.hasNormals && !d.normal && (d.normal = x.createBuffer());
        a.hasUvs && !d.uv && (d.uv = x.createBuffer());
        a.hasColors && !d.color && (d.color = x.createBuffer());
        b = b.getAttributes();
        a.hasPositions && (x.bindBuffer(x.ARRAY_BUFFER, d.position), x.bufferData(x.ARRAY_BUFFER, a.positionArray, x.DYNAMIC_DRAW),
            R.enableAttribute(b.position), x.vertexAttribPointer(b.position, 3, x.FLOAT, !1, 0, 0));
        if (a.hasNormals) {
            x.bindBuffer(x.ARRAY_BUFFER, d.normal);
            if ("MeshPhongMaterial" !== c.type && "MeshStandardMaterial" !== c.type && "MeshPhysicalMaterial" !== c.type && c.shading === THREE.FlatShading) for (var e = 0, f = 3 * a.count; e < f; e += 9) {
                var g = a.normalArray, h = (g[e + 0] + g[e + 3] + g[e + 6]) / 3,
                    k = (g[e + 1] + g[e + 4] + g[e + 7]) / 3, m = (g[e + 2] + g[e + 5] + g[e + 8]) / 3;
                g[e + 0] = h;
                g[e + 1] = k;
                g[e + 2] = m;
                g[e + 3] = h;
                g[e + 4] = k;
                g[e + 5] = m;
                g[e + 6] = h;
                g[e + 7] = k;
                g[e + 8] = m
            }
            x.bufferData(x.ARRAY_BUFFER,
                a.normalArray, x.DYNAMIC_DRAW);
            R.enableAttribute(b.normal);
            x.vertexAttribPointer(b.normal, 3, x.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (x.bindBuffer(x.ARRAY_BUFFER, d.uv), x.bufferData(x.ARRAY_BUFFER, a.uvArray, x.DYNAMIC_DRAW), R.enableAttribute(b.uv), x.vertexAttribPointer(b.uv, 2, x.FLOAT, !1, 0, 0));
        a.hasColors && c.vertexColors !== THREE.NoColors && (x.bindBuffer(x.ARRAY_BUFFER, d.color), x.bufferData(x.ARRAY_BUFFER, a.colorArray, x.DYNAMIC_DRAW), R.enableAttribute(b.color), x.vertexAttribPointer(b.color, 3, x.FLOAT, !1, 0, 0));
        R.disableUnusedAttributes();
        x.drawArrays(x.TRIANGLES, 0, a.count);
        a.count = 0
    };
    this.renderBufferDirect = function (a, b, c, d, e, g) {
        r(d);
        var f = s(a, b, d, e), k = !1;
        a = c.id + "_" + f.id + "_" + d.wireframe;
        a !== aa && (aa = a, k = !0);
        b = e.morphTargetInfluences;
        if (void 0 !== b) {
            a = [];
            for (var m = 0, k = b.length; m < k; m++) {
                var l = b[m];
                a.push([l, m])
            }
            a.sort(h);
            8 < a.length && (a.length = 8);
            for (var n = c.morphAttributes, m = 0, k = a.length; m < k; m++) l = a[m], H[m] = l[0], 0 !== l[0] ? (b = l[1], !0 === d.morphTargets && n.position && c.addAttribute("morphTarget" + m, n.position[b]), !0 === d.morphNormals && n.normal &&
            c.addAttribute("morphNormal" + m, n.normal[b])) : (!0 === d.morphTargets && c.removeAttribute("morphTarget" + m), !0 === d.morphNormals && c.removeAttribute("morphNormal" + m));
            f.getUniforms().setValue(x, "morphTargetInfluences", H);
            k = !0
        }
        b = c.index;
        m = c.attributes.position;
        !0 === d.wireframe && (b = ea.getWireframeAttribute(c));
        null !== b ? (a = Ba, a.setIndex(b)) : a = Aa;
        if (k) {
            a:{
                var k = void 0, p;
                if (c instanceof THREE.InstancedBufferGeometry && (p = U.get("ANGLE_instanced_arrays"), null === p)) {
                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    break a
                }
                void 0 === k && (k = 0);
                R.initAttributes();
                var l = c.attributes, f = f.getAttributes(), n = d.defaultAttributeValues, q;
                for (q in f) {
                    var v = f[q];
                    if (0 <= v) {
                        var u = l[q];
                        if (void 0 !== u) {
                            var w = x.FLOAT, C = u.array, t = u.normalized;
                            C instanceof Float32Array ? w = x.FLOAT : C instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : C instanceof Uint16Array ? w = x.UNSIGNED_SHORT : C instanceof Int16Array ? w = x.SHORT : C instanceof Uint32Array ? w = x.UNSIGNED_INT : C instanceof Int32Array ? w = x.INT : C instanceof Int8Array ?
                                w = x.BYTE : C instanceof Uint8Array && (w = x.UNSIGNED_BYTE);
                            var C = u.itemSize, y = ea.getAttributeBuffer(u);
                            if (u instanceof THREE.InterleavedBufferAttribute) {
                                var z = u.data, A = z.stride, u = u.offset;
                                z instanceof THREE.InstancedInterleavedBuffer ? (R.enableAttributeAndDivisor(v, z.meshPerAttribute, p), void 0 === c.maxInstancedCount && (c.maxInstancedCount = z.meshPerAttribute * z.count)) : R.enableAttribute(v);
                                x.bindBuffer(x.ARRAY_BUFFER, y);
                                x.vertexAttribPointer(v, C, w, t, A * z.array.BYTES_PER_ELEMENT, (k * A + u) * z.array.BYTES_PER_ELEMENT)
                            } else u instanceof
                            THREE.InstancedBufferAttribute ? (R.enableAttributeAndDivisor(v, u.meshPerAttribute, p), void 0 === c.maxInstancedCount && (c.maxInstancedCount = u.meshPerAttribute * u.count)) : R.enableAttribute(v), x.bindBuffer(x.ARRAY_BUFFER, y), x.vertexAttribPointer(v, C, w, t, 0, k * C * u.array.BYTES_PER_ELEMENT)
                        } else if (void 0 !== n && (w = n[q], void 0 !== w)) switch (w.length) {
                            case 2:
                                x.vertexAttrib2fv(v, w);
                                break;
                            case 3:
                                x.vertexAttrib3fv(v, w);
                                break;
                            case 4:
                                x.vertexAttrib4fv(v, w);
                                break;
                            default:
                                x.vertexAttrib1fv(v, w)
                        }
                    }
                }
                R.disableUnusedAttributes()
            }
            null !==
            b && x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, ea.getAttributeBuffer(b))
        }
        p = Infinity;
        null !== b ? p = b.count : void 0 !== m && (p = m.count);
        q = c.drawRange.start;
        b = c.drawRange.count;
        m = null !== g ? g.start : 0;
        k = null !== g ? g.count : Infinity;
        g = Math.max(0, q, m);
        p = Math.min(0 + p, q + b, m + k) - 1;
        p = Math.max(0, p - g + 1);
        if (e instanceof THREE.Mesh) if (!0 === d.wireframe) R.setLineWidth(d.wireframeLinewidth * (null === J ? $ : 1)), a.setMode(x.LINES); else switch (e.drawMode) {
            case THREE.TrianglesDrawMode:
                a.setMode(x.TRIANGLES);
                break;
            case THREE.TriangleStripDrawMode:
                a.setMode(x.TRIANGLE_STRIP);
                break;
            case THREE.TriangleFanDrawMode:
                a.setMode(x.TRIANGLE_FAN)
        } else e instanceof THREE.Line ? (d = d.linewidth, void 0 === d && (d = 1), R.setLineWidth(d * (null === J ? $ : 1)), e instanceof THREE.LineSegments ? a.setMode(x.LINES) : a.setMode(x.LINE_STRIP)) : e instanceof THREE.Points && a.setMode(x.POINTS);
        c instanceof THREE.InstancedBufferGeometry ? 0 < c.maxInstancedCount && a.renderInstances(c, g, p) : a.render(g, p)
    };
    this.render = function (a, c, d, e) {
        if (!1 === c instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var g = a.fog;
            aa = "";
            G = -1;
            T = null;
            !0 === a.autoUpdate && a.updateMatrixWorld();
            null === c.parent && c.updateMatrixWorld();
            c.matrixWorldInverse.getInverse(c.matrixWorld);
            pa.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse);
            wa.setFromMatrix(pa);
            B.length = 0;
            M = K = -1;
            L.length = 0;
            O.length = 0;
            va = this.localClippingEnabled;
            qa = ca.init(this.clippingPlanes, va, c);
            m(a, c);
            F.length = K + 1;
            P.length = M + 1;
            !0 === N.sortObjects && (F.sort(k), P.sort(l));
            qa && ca.beginShadows();
            for (var f = B, h = 0, p = 0, n = f.length; p < n; p++) {
                var v = f[p];
                v.castShadow &&
                (S.shadows[h++] = v)
            }
            S.shadows.length = h;
            ya.render(a, c);
            for (var f = B, r = v = 0, s = 0, u, w, C, t, H = c.matrixWorldInverse, y = 0, z = 0, J = 0, A = 0, h = 0, p = f.length; h < p; h++) if (n = f[h], u = n.color, w = n.intensity, C = n.distance, t = n.shadow && n.shadow.map ? n.shadow.map.texture : null, n instanceof THREE.AmbientLight) v += u.r * w, r += u.g * w, s += u.b * w; else if (n instanceof THREE.DirectionalLight) {
                var D = ta.get(n);
                D.color.copy(n.color).multiplyScalar(n.intensity);
                D.direction.setFromMatrixPosition(n.matrixWorld);
                W.setFromMatrixPosition(n.target.matrixWorld);
                D.direction.sub(W);
                D.direction.transformDirection(H);
                if (D.shadow = n.castShadow) D.shadowBias = n.shadow.bias, D.shadowRadius = n.shadow.radius, D.shadowMapSize = n.shadow.mapSize;
                S.directionalShadowMap[y] = t;
                S.directionalShadowMatrix[y] = n.shadow.matrix;
                S.directional[y++] = D
            } else if (n instanceof THREE.SpotLight) {
                D = ta.get(n);
                D.position.setFromMatrixPosition(n.matrixWorld);
                D.position.applyMatrix4(H);
                D.color.copy(u).multiplyScalar(w);
                D.distance = C;
                D.direction.setFromMatrixPosition(n.matrixWorld);
                W.setFromMatrixPosition(n.target.matrixWorld);
                D.direction.sub(W);
                D.direction.transformDirection(H);
                D.coneCos = Math.cos(n.angle);
                D.penumbraCos = Math.cos(n.angle * (1 - n.penumbra));
                D.decay = 0 === n.distance ? 0 : n.decay;
                if (D.shadow = n.castShadow) D.shadowBias = n.shadow.bias, D.shadowRadius = n.shadow.radius, D.shadowMapSize = n.shadow.mapSize;
                S.spotShadowMap[J] = t;
                S.spotShadowMatrix[J] = n.shadow.matrix;
                S.spot[J++] = D
            } else if (n instanceof THREE.PointLight) {
                D = ta.get(n);
                D.position.setFromMatrixPosition(n.matrixWorld);
                D.position.applyMatrix4(H);
                D.color.copy(n.color).multiplyScalar(n.intensity);
                D.distance = n.distance;
                D.decay = 0 === n.distance ? 0 : n.decay;
                if (D.shadow = n.castShadow) D.shadowBias = n.shadow.bias, D.shadowRadius = n.shadow.radius, D.shadowMapSize = n.shadow.mapSize;
                S.pointShadowMap[z] = t;
                void 0 === S.pointShadowMatrix[z] && (S.pointShadowMatrix[z] = new THREE.Matrix4);
                W.setFromMatrixPosition(n.matrixWorld).negate();
                S.pointShadowMatrix[z].identity().setPosition(W);
                S.point[z++] = D
            } else n instanceof THREE.HemisphereLight && (D = ta.get(n), D.direction.setFromMatrixPosition(n.matrixWorld), D.direction.transformDirection(H),
                D.direction.normalize(), D.skyColor.copy(n.color).multiplyScalar(w), D.groundColor.copy(n.groundColor).multiplyScalar(w), S.hemi[A++] = D);
            S.ambient[0] = v;
            S.ambient[1] = r;
            S.ambient[2] = s;
            S.directional.length = y;
            S.spot.length = J;
            S.point.length = z;
            S.hemi.length = A;
            S.hash = y + "," + z + "," + J + "," + A + "," + S.shadows.length;
            qa && ca.endShadows();
            fa.calls = 0;
            fa.vertices = 0;
            fa.faces = 0;
            fa.points = 0;
            void 0 === d && (d = null);
            this.setRenderTarget(d);
            f = a.background;
            null === f ? b(V.r, V.g, V.b, Y) : f instanceof THREE.Color && b(f.r, f.g, f.b, 1);
            (this.autoClear ||
                e) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            f instanceof THREE.CubeTexture ? (la.projectionMatrix.copy(c.projectionMatrix), la.matrixWorld.extractRotation(c.matrixWorld), la.matrixWorldInverse.getInverse(la.matrixWorld), ga.material.uniforms.tCube.value = f, ga.modelViewMatrix.multiplyMatrices(la.matrixWorldInverse, ga.matrixWorld), N.renderBufferDirect(la, null, ga.geometry, ga.material, ga, null)) : f instanceof THREE.Texture && (oa.material.map = f, N.renderBufferDirect(Ca, null, oa.geometry,
                oa.material, oa, null));
            a.overrideMaterial ? (e = a.overrideMaterial, q(F, c, g, e), q(P, c, g, e)) : (R.setBlending(THREE.NoBlending), q(F, c, g), q(P, c, g));
            Da.render(a, c);
            Ea.render(a, c, ba);
            d && ka.updateRenderTargetMipmap(d);
            R.setDepthTest(!0);
            R.setDepthWrite(!0);
            R.setColorWrite(!0)
        }
    };
    this.setFaceCulling = function (a, b) {
        R.setCullFace(a);
        R.setFlipSided(b === THREE.FrontFaceDirectionCW)
    };
    this.allocTextureUnit = function () {
        var a = ia;
        a >= da.maxTextures && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " +
            da.maxTextures);
        ia += 1;
        return a
    };
    this.setTexture2D = function () {
        var a = !1;
        return function (b, c) {
            b instanceof THREE.WebGLRenderTarget && (a || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), a = !0), b = b.texture);
            ka.setTexture2D(b, c)
        }
    }();
    this.setTexture = function () {
        var a = !1;
        return function (b, c) {
            a || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), a = !0);
            ka.setTexture2D(b, c)
        }
    }();
    this.setTextureCube =
        function () {
            var a = !1;
            return function (b, c) {
                b instanceof THREE.WebGLRenderTargetCube && (a || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), a = !0), b = b.texture);
                b instanceof THREE.CubeTexture || Array.isArray(b.image) && 6 === b.image.length ? ka.setTextureCube(b, c) : ka.setTextureCubeDynamic(b, c)
            }
        }();
    this.getCurrentRenderTarget = function () {
        return J
    };
    this.setRenderTarget = function (a) {
        (J = a) && void 0 === Z.get(a).__webglFramebuffer && ka.setupRenderTarget(a);
        var b = a instanceof THREE.WebGLRenderTargetCube, c;
        a ? (c = Z.get(a), c = b ? c.__webglFramebuffer[a.activeCubeFace] : c.__webglFramebuffer, X.copy(a.scissor), ja = a.scissorTest, ba.copy(a.viewport)) : (c = null, X.copy(ua).multiplyScalar($), ja = xa, ba.copy(ma).multiplyScalar($));
        D !== c && (x.bindFramebuffer(x.FRAMEBUFFER, c), D = c);
        R.scissor(X);
        R.setScissorTest(ja);
        R.viewport(ba);
        b && (b = Z.get(a.texture), x.framebufferTexture2D(x.FRAMEBUFFER, x.COLOR_ATTACHMENT0, x.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, b.__webglTexture, a.activeMipMapLevel))
    };
    this.readRenderTargetPixels = function (a, b, c, d, e, f) {
        if (!1 === a instanceof THREE.WebGLRenderTarget) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); else {
            var g = Z.get(a).__webglFramebuffer;
            if (g) {
                var h = !1;
                g !== D && (x.bindFramebuffer(x.FRAMEBUFFER, g), h = !0);
                try {
                    var k = a.texture;
                    k.format !== THREE.RGBAFormat && u(k.format) !== x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") :
                        k.type === THREE.UnsignedByteType || u(k.type) === x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE) || k.type === THREE.FloatType && U.get("WEBGL_color_buffer_float") || k.type === THREE.HalfFloatType && U.get("EXT_color_buffer_half_float") ? x.checkFramebufferStatus(x.FRAMEBUFFER) === x.FRAMEBUFFER_COMPLETE ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && x.readPixels(b, c, d, e, u(k.format), u(k.type), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                } finally {
                    h &&
                    x.bindFramebuffer(x.FRAMEBUFFER, D)
                }
            }
        }
    }
};
THREE.WebGLRenderTarget = function (a, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.width = a;
    this.height = b;
    this.scissor = new THREE.Vector4(0, 0, a, b);
    this.scissorTest = !1;
    this.viewport = new THREE.Vector4(0, 0, a, b);
    c = c || {};
    void 0 === c.minFilter && (c.minFilter = THREE.LinearFilter);
    this.texture = new THREE.Texture(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer :
        !0;
    this.depthTexture = null
};
Object.assign(THREE.WebGLRenderTarget.prototype, THREE.EventDispatcher.prototype, {
    setSize: function (a, b) {
        if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.dispose();
        this.viewport.set(0, 0, a, b);
        this.scissor.set(0, 0, a, b)
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (a) {
        this.width = a.width;
        this.height = a.height;
        this.viewport.copy(a.viewport);
        this.texture = a.texture.clone();
        this.depthBuffer = a.depthBuffer;
        this.stencilBuffer = a.stencilBuffer;
        this.depthTexture = a.depthTexture;
        return this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
});
THREE.WebGLRenderTargetCube = function (a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c);
    this.activeMipMapLevel = this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer = function (a, b, c) {
    var d;
    this.setMode = function (a) {
        d = a
    };
    this.render = function (b, f) {
        a.drawArrays(d, b, f);
        c.calls++;
        c.vertices += f;
        d === a.TRIANGLES && (c.faces += f / 3)
    };
    this.renderInstances = function (e) {
        var f = b.get("ANGLE_instanced_arrays");
        if (null === f) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); else {
            var g = e.attributes.position, h = 0, h = g instanceof THREE.InterleavedBufferAttribute ? g.data.count :
                g.count;
            f.drawArraysInstancedANGLE(d, 0, h, e.maxInstancedCount);
            c.calls++;
            c.vertices += h * e.maxInstancedCount;
            d === a.TRIANGLES && (c.faces += e.maxInstancedCount * h / 3)
        }
    }
};
THREE.WebGLClipping = function () {
    function a() {
        l.value !== d && (l.value = d, l.needsUpdate = 0 < e);
        c.numPlanes = e
    }

    function b(a, b, d, e) {
        var f = null !== a ? a.length : 0, g = null;
        if (0 !== f) {
            g = l.value;
            if (!0 !== e || null === g) {
                e = d + 4 * f;
                b = b.matrixWorldInverse;
                k.getNormalMatrix(b);
                if (null === g || g.length < e) g = new Float32Array(e);
                for (e = 0; e !== f; ++e, d += 4) h.copy(a[e]).applyMatrix4(b, k), h.normal.toArray(g, d), g[d + 3] = h.constant
            }
            l.value = g;
            l.needsUpdate = !0
        }
        c.numPlanes = f;
        return g
    }

    var c = this, d = null, e = 0, f = !1, g = !1, h = new THREE.Plane, k = new THREE.Matrix3,
        l = {value: null, needsUpdate: !1};
    this.uniform = l;
    this.numPlanes = 0;
    this.init = function (a, c, g) {
        var h = 0 !== a.length || c || 0 !== e || f;
        f = c;
        d = b(a, g, 0);
        e = a.length;
        return h
    };
    this.beginShadows = function () {
        g = !0;
        b(null)
    };
    this.endShadows = function () {
        g = !1;
        a()
    };
    this.setState = function (c, h, k, q, r) {
        if (!f || null === c || 0 === c.length || g && !h) g ? b(null) : a(); else {
            h = g ? 0 : e;
            var s = 4 * h, t = q.clippingState || null;
            l.value = t;
            t = b(c, k, s, r);
            for (c = 0; c !== s; ++c) t[c] = d[c];
            q.clippingState = t;
            this.numPlanes += h
        }
    }
};
THREE.WebGLIndexedBufferRenderer = function (a, b, c) {
    var d, e, f;
    this.setMode = function (a) {
        d = a
    };
    this.setIndex = function (c) {
        c.array instanceof Uint32Array && b.get("OES_element_index_uint") ? (e = a.UNSIGNED_INT, f = 4) : (e = a.UNSIGNED_SHORT, f = 2)
    };
    this.render = function (b, h) {
        a.drawElements(d, h, e, b * f);
        c.calls++;
        c.vertices += h;
        d === a.TRIANGLES && (c.faces += h / 3)
    };
    this.renderInstances = function (g, h, k) {
        var l = b.get("ANGLE_instanced_arrays");
        null === l ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") :
            (l.drawElementsInstancedANGLE(d, k, e, h * f, g.maxInstancedCount), c.calls++, c.vertices += k * g.maxInstancedCount, d === a.TRIANGLES && (c.faces += g.maxInstancedCount * k / 3))
    }
};
THREE.WebGLExtensions = function (a) {
    var b = {};
    this.get = function (c) {
        if (void 0 !== b[c]) return b[c];
        var d;
        switch (c) {
            case "WEBGL_depth_texture":
                d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                d =
                    a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            case "WEBGL_compressed_texture_etc1":
                d = a.getExtension("WEBGL_compressed_texture_etc1");
                break;
            default:
                d = a.getExtension(c)
        }
        null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
        return b[c] = d
    }
};
THREE.WebGLCapabilities = function (a, b, c) {
    function d(b) {
        if ("highp" === b) {
            if (0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision) return "highp";
            b = "mediump"
        }
        return "mediump" === b && 0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
    }

    var e;
    this.getMaxAnisotropy = function () {
        if (void 0 !== e) return e;
        var c = b.get("EXT_texture_filter_anisotropic");
        return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    };
    this.getMaxPrecision = d;
    this.precision = void 0 !== c.precision ? c.precision : "highp";
    this.logarithmicDepthBuffer = void 0 !== c.logarithmicDepthBuffer ? c.logarithmicDepthBuffer : !1;
    this.maxTextures = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);
    this.maxVertexTextures = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    this.maxTextureSize = a.getParameter(a.MAX_TEXTURE_SIZE);
    this.maxCubemapSize = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);
    this.maxAttributes =
        a.getParameter(a.MAX_VERTEX_ATTRIBS);
    this.maxVertexUniforms = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);
    this.maxVaryings = a.getParameter(a.MAX_VARYING_VECTORS);
    this.maxFragmentUniforms = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);
    this.vertexTextures = 0 < this.maxVertexTextures;
    this.floatFragmentTextures = !!b.get("OES_texture_float");
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
    c = d(this.precision);
    c !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using",
        c, "instead."), this.precision = c);
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!b.get("EXT_frag_depth"))
};
THREE.WebGLGeometries = function (a, b, c) {
    function d(a) {
        var h = a.target;
        a = f[h.id];
        null !== a.index && e(a.index);
        var k = a.attributes, l;
        for (l in k) e(k[l]);
        h.removeEventListener("dispose", d);
        delete f[h.id];
        l = b.get(h);
        l.wireframe && e(l.wireframe);
        b.delete(h);
        h = b.get(a);
        h.wireframe && e(h.wireframe);
        b.delete(a);
        c.memory.geometries--
    }

    function e(c) {
        var d;
        d = c instanceof THREE.InterleavedBufferAttribute ? b.get(c.data).__webglBuffer : b.get(c).__webglBuffer;
        void 0 !== d && (a.deleteBuffer(d), c instanceof THREE.InterleavedBufferAttribute ?
            b.delete(c.data) : b.delete(c))
    }

    var f = {};
    this.get = function (a) {
        var b = a.geometry;
        if (void 0 !== f[b.id]) return f[b.id];
        b.addEventListener("dispose", d);
        var e;
        b instanceof THREE.BufferGeometry ? e = b : b instanceof THREE.Geometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new THREE.BufferGeometry).setFromObject(a)), e = b._bufferGeometry);
        f[b.id] = e;
        c.memory.geometries++;
        return e
    }
};
THREE.WebGLLights = function () {
    var a = {};
    this.get = function (b) {
        if (void 0 !== a[b.id]) return a[b.id];
        var c;
        switch (b.type) {
            case "DirectionalLight":
                c = {
                    direction: new THREE.Vector3,
                    color: new THREE.Color,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new THREE.Vector2
                };
                break;
            case "SpotLight":
                c = {
                    position: new THREE.Vector3,
                    direction: new THREE.Vector3,
                    color: new THREE.Color,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new THREE.Vector2
                };
                break;
            case "PointLight":
                c =
                    {
                        position: new THREE.Vector3,
                        color: new THREE.Color,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new THREE.Vector2
                    };
                break;
            case "HemisphereLight":
                c = {direction: new THREE.Vector3, skyColor: new THREE.Color, groundColor: new THREE.Color}
        }
        return a[b.id] = c
    }
};
THREE.WebGLObjects = function (a, b, c) {
    function d(c, d) {
        var e = c instanceof THREE.InterleavedBufferAttribute ? c.data : c, f = b.get(e);
        void 0 === f.__webglBuffer ? (f.__webglBuffer = a.createBuffer(), a.bindBuffer(d, f.__webglBuffer), a.bufferData(d, e.array, e.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW), f.version = e.version) : f.version !== e.version && (a.bindBuffer(d, f.__webglBuffer), !1 === e.dynamic || -1 === e.updateRange.count ? a.bufferSubData(d, 0, e.array) : 0 === e.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") :
            (a.bufferSubData(d, e.updateRange.offset * e.array.BYTES_PER_ELEMENT, e.array.subarray(e.updateRange.offset, e.updateRange.offset + e.updateRange.count)), e.updateRange.count = 0), f.version = e.version)
    }

    function e(a, b, c) {
        if (b > c) {
            var d = b;
            b = c;
            c = d
        }
        d = a[b];
        return void 0 === d ? (a[b] = [c], !0) : -1 === d.indexOf(c) ? (d.push(c), !0) : !1
    }

    var f = new THREE.WebGLGeometries(a, b, c);
    this.getAttributeBuffer = function (a) {
        return a instanceof THREE.InterleavedBufferAttribute ? b.get(a.data).__webglBuffer : b.get(a).__webglBuffer
    };
    this.getWireframeAttribute =
        function (c) {
            var f = b.get(c);
            if (void 0 !== f.wireframe) return f.wireframe;
            var k = [], l = c.index, n = c.attributes;
            c = n.position;
            if (null !== l) for (var n = {}, l = l.array, p = 0, m = l.length; p < m; p += 3) {
                var q = l[p + 0], r = l[p + 1], s = l[p + 2];
                e(n, q, r) && k.push(q, r);
                e(n, r, s) && k.push(r, s);
                e(n, s, q) && k.push(s, q)
            } else for (l = n.position.array, p = 0, m = l.length / 3 - 1; p < m; p += 3) q = p + 0, r = p + 1, s = p + 2, k.push(q, r, r, s, s, q);
            k = new THREE.BufferAttribute(new (65535 < c.count ? Uint32Array : Uint16Array)(k), 1);
            d(k, a.ELEMENT_ARRAY_BUFFER);
            return f.wireframe = k
        };
    this.update =
        function (b) {
            var c = f.get(b);
            b.geometry instanceof THREE.Geometry && c.updateFromObject(b);
            b = c.index;
            var e = c.attributes;
            null !== b && d(b, a.ELEMENT_ARRAY_BUFFER);
            for (var l in e) d(e[l], a.ARRAY_BUFFER);
            b = c.morphAttributes;
            for (l in b) for (var e = b[l], n = 0, p = e.length; n < p; n++) d(e[n], a.ARRAY_BUFFER);
            return c
        }
};
THREE.WebGLProgram = function () {
    function a(a) {
        switch (a) {
            case THREE.LinearEncoding:
                return ["Linear", "( value )"];
            case THREE.sRGBEncoding:
                return ["sRGB", "( value )"];
            case THREE.RGBEEncoding:
                return ["RGBE", "( value )"];
            case THREE.RGBM7Encoding:
                return ["RGBM", "( value, 7.0 )"];
            case THREE.RGBM16Encoding:
                return ["RGBM", "( value, 16.0 )"];
            case THREE.RGBDEncoding:
                return ["RGBD", "( value, 256.0 )"];
            case THREE.GammaEncoding:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw Error("unsupported encoding: " +
                    a);
        }
    }

    function b(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return " + d[0] + "ToLinear" + d[1] + "; }"
    }

    function c(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }"
    }

    function d(a, b) {
        var c;
        switch (b) {
            case THREE.LinearToneMapping:
                c = "Linear";
                break;
            case THREE.ReinhardToneMapping:
                c = "Reinhard";
                break;
            case THREE.Uncharted2ToneMapping:
                c = "Uncharted2";
                break;
            case THREE.CineonToneMapping:
                c = "OptimizedCineon";
                break;
            default:
                throw Error("unsupported toneMapping: " + b);
        }
        return "vec3 " + a +
            "( vec3 color ) { return " + c + "ToneMapping( color ); }"
    }

    function e(a, b, c) {
        a = a || {};
        return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" :
            ""].filter(g).join("\n")
    }

    function f(a) {
        var b = [], c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d)
        }
        return b.join("\n")
    }

    function g(a) {
        return "" !== a
    }

    function h(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
    }

    function k(a) {
        return a.replace(/#include +<([\w\d.]+)>/g, function (a, b) {
            var c = THREE.ShaderChunk[b];
            if (void 0 === c) throw Error("Can not resolve #include <" +
                b + ">");
            return k(c)
        })
    }

    function l(a) {
        return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (a, b, c, d) {
            a = "";
            for (b = parseInt(b); b < parseInt(c); b++) a += d.replace(/\[ i \]/g, "[ " + b + " ]");
            return a
        })
    }

    var n = 0;
    return function (a, m, q, r) {
        var s = a.context, t = q.extensions, u = q.defines, v = q.__webglShader.vertexShader,
            C = q.__webglShader.fragmentShader, w = "SHADOWMAP_TYPE_BASIC";
        r.shadowMapType === THREE.PCFShadowMap ? w = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === THREE.PCFSoftShadowMap && (w = "SHADOWMAP_TYPE_PCF_SOFT");
        var E = "ENVMAP_TYPE_CUBE", z = "ENVMAP_MODE_REFLECTION", y = "ENVMAP_BLENDING_MULTIPLY";
        if (r.envMap) {
            switch (q.envMap.mapping) {
                case THREE.CubeReflectionMapping:
                case THREE.CubeRefractionMapping:
                    E = "ENVMAP_TYPE_CUBE";
                    break;
                case THREE.CubeUVReflectionMapping:
                case THREE.CubeUVRefractionMapping:
                    E = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case THREE.EquirectangularReflectionMapping:
                case THREE.EquirectangularRefractionMapping:
                    E = "ENVMAP_TYPE_EQUIREC";
                    break;
                case THREE.SphericalReflectionMapping:
                    E = "ENVMAP_TYPE_SPHERE"
            }
            switch (q.envMap.mapping) {
                case THREE.CubeRefractionMapping:
                case THREE.EquirectangularRefractionMapping:
                    z =
                        "ENVMAP_MODE_REFRACTION"
            }
            switch (q.combine) {
                case THREE.MultiplyOperation:
                    y = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case THREE.MixOperation:
                    y = "ENVMAP_BLENDING_MIX";
                    break;
                case THREE.AddOperation:
                    y = "ENVMAP_BLENDING_ADD"
            }
        }
        var A = 0 < a.gammaFactor ? a.gammaFactor : 1, t = e(t, r, a.extensions), I = f(u), B = s.createProgram();
        q instanceof THREE.RawShaderMaterial ? (u = [I].filter(g).join("\n"), w = [I].filter(g).join("\n")) : (u = ["precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + q.__webglShader.name,
            I, r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + A, "#define MAX_BONES " + r.maxBones, r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + z : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.displacementMap && r.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" :
                "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.skinning ? "#define USE_SKINNING" : "", r.useVertexTexture ? "#define BONE_TEXTURE" : "", r.morphTargets ? "#define USE_MORPHTARGETS" : "", r.morphNormals && !1 === r.flatShading ? "#define USE_MORPHNORMALS" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " +
            r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + w : "", r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;",
            "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;",
            "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(g).join("\n"), w = [t, "precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + q.__webglShader.name, I, r.alphaTest ? "#define ALPHATEST " + r.alphaTest : "", "#define GAMMA_FACTOR " + A, r.useFog && r.fog ? "#define USE_FOG" : "", r.useFog && r.fogExp ? "#define FOG_EXP2" : "", r.map ? "#define USE_MAP" :
            "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + E : "", r.envMap ? "#define " + z : "", r.envMap ? "#define " + y : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" :
            "", r.flatShading ? "#define FLAT_SHADED" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + w : "", r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" :
            "", r.envMap && a.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", r.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", r.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", r.toneMapping !== THREE.NoToneMapping ? d("toneMapping", r.toneMapping) : "", r.outputEncoding || r.mapEncoding || r.envMapEncoding || r.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", r.mapEncoding ? b("mapTexelToLinear",
            r.mapEncoding) : "", r.envMapEncoding ? b("envMapTexelToLinear", r.envMapEncoding) : "", r.emissiveMapEncoding ? b("emissiveMapTexelToLinear", r.emissiveMapEncoding) : "", r.outputEncoding ? c("linearToOutputTexel", r.outputEncoding) : "", r.depthPacking ? "#define DEPTH_PACKING " + q.depthPacking : "", "\n"].filter(g).join("\n"));
        v = k(v, r);
        v = h(v, r);
        C = k(C, r);
        C = h(C, r);
        !1 === q instanceof THREE.ShaderMaterial && (v = l(v), C = l(C));
        C = w + C;
        v = THREE.WebGLShader(s, s.VERTEX_SHADER, u + v);
        C = THREE.WebGLShader(s, s.FRAGMENT_SHADER, C);
        s.attachShader(B,
            v);
        s.attachShader(B, C);
        void 0 !== q.index0AttributeName ? s.bindAttribLocation(B, 0, q.index0AttributeName) : !0 === r.morphTargets && s.bindAttribLocation(B, 0, "position");
        s.linkProgram(B);
        r = s.getProgramInfoLog(B);
        E = s.getShaderInfoLog(v);
        z = s.getShaderInfoLog(C);
        A = y = !0;
        if (!1 === s.getProgramParameter(B, s.LINK_STATUS)) y = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(B, s.VALIDATE_STATUS), "gl.getProgramInfoLog", r, E, z); else if ("" !== r) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",
            r); else if ("" === E || "" === z) A = !1;
        A && (this.diagnostics = {
            runnable: y,
            material: q,
            programLog: r,
            vertexShader: {log: E, prefix: u},
            fragmentShader: {log: z, prefix: w}
        });
        s.deleteShader(v);
        s.deleteShader(C);
        var F;
        this.getUniforms = function () {
            void 0 === F && (F = new THREE.WebGLUniforms(s, B, a));
            return F
        };
        var K;
        this.getAttributes = function () {
            if (void 0 === K) {
                for (var a = {}, b = s.getProgramParameter(B, s.ACTIVE_ATTRIBUTES), c = 0; c < b; c++) {
                    var d = s.getActiveAttrib(B, c).name;
                    a[d] = s.getAttribLocation(B, d)
                }
                K = a
            }
            return K
        };
        this.destroy = function () {
            s.deleteProgram(B);
            this.program = void 0
        };
        Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
                    return this.getUniforms()
                }
            }, attributes: {
                get: function () {
                    console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
                    return this.getAttributes()
                }
            }
        });
        this.id = n++;
        this.code = m;
        this.usedTimes = 1;
        this.program = B;
        this.vertexShader = v;
        this.fragmentShader = C;
        return this
    }
}();
THREE.WebGLPrograms = function (a, b) {
    function c(a, b) {
        var c;
        a ? a instanceof THREE.Texture ? c = a.encoding : a instanceof THREE.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding) : c = THREE.LinearEncoding;
        c === THREE.LinearEncoding && b && (c = THREE.GammaEncoding);
        return c
    }

    var d = [], e = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        },
        f = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes depthPacking".split(" ");
    this.getParameters = function (d, f, k, l, n) {
        var p = e[d.type], m;
        b.floatVertexTextures && n && n.skeleton && n.skeleton.useVertexTexture ? m = 1024 : (m = Math.floor((b.maxVertexUniforms - 20) / 4), void 0 !== n && n instanceof THREE.SkinnedMesh && (m = Math.min(n.skeleton.bones.length, m), m < n.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + n.skeleton.bones.length + ", this GPU supports just " + m + " (try OpenGL instead of ANGLE)")));
        var q = a.getPrecision();
        null !== d.precision && (q = b.getMaxPrecision(d.precision), q !==
        d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", q, "instead."));
        var r = a.getCurrentRenderTarget();
        return {
            shaderID: p,
            precision: q,
            supportsVertexTextures: b.vertexTextures,
            outputEncoding: c(r ? r.texture : null, a.gammaOutput),
            map: !!d.map,
            mapEncoding: c(d.map, a.gammaInput),
            envMap: !!d.envMap,
            envMapMode: d.envMap && d.envMap.mapping,
            envMapEncoding: c(d.envMap, a.gammaInput),
            envMapCubeUV: !!d.envMap && (d.envMap.mapping === THREE.CubeUVReflectionMapping || d.envMap.mapping ===
                THREE.CubeUVRefractionMapping),
            lightMap: !!d.lightMap,
            aoMap: !!d.aoMap,
            emissiveMap: !!d.emissiveMap,
            emissiveMapEncoding: c(d.emissiveMap, a.gammaInput),
            bumpMap: !!d.bumpMap,
            normalMap: !!d.normalMap,
            displacementMap: !!d.displacementMap,
            roughnessMap: !!d.roughnessMap,
            metalnessMap: !!d.metalnessMap,
            specularMap: !!d.specularMap,
            alphaMap: !!d.alphaMap,
            combine: d.combine,
            vertexColors: d.vertexColors,
            fog: k,
            useFog: d.fog,
            fogExp: k instanceof THREE.FogExp2,
            flatShading: d.shading === THREE.FlatShading,
            sizeAttenuation: d.sizeAttenuation,
            logarithmicDepthBuffer: b.logarithmicDepthBuffer,
            skinning: d.skinning,
            maxBones: m,
            useVertexTexture: b.floatVertexTextures && n && n.skeleton && n.skeleton.useVertexTexture,
            morphTargets: d.morphTargets,
            morphNormals: d.morphNormals,
            maxMorphTargets: a.maxMorphTargets,
            maxMorphNormals: a.maxMorphNormals,
            numDirLights: f.directional.length,
            numPointLights: f.point.length,
            numSpotLights: f.spot.length,
            numHemiLights: f.hemi.length,
            numClippingPlanes: l,
            shadowMapEnabled: a.shadowMap.enabled && n.receiveShadow && 0 < f.shadows.length,
            shadowMapType: a.shadowMap.type,
            toneMapping: a.toneMapping,
            physicallyCorrectLights: a.physicallyCorrectLights,
            premultipliedAlpha: d.premultipliedAlpha,
            alphaTest: d.alphaTest,
            doubleSided: d.side === THREE.DoubleSide,
            flipSided: d.side === THREE.BackSide,
            depthPacking: void 0 !== d.depthPacking ? d.depthPacking : !1
        }
    };
    this.getProgramCode = function (a, b) {
        var c = [];
        b.shaderID ? c.push(b.shaderID) : (c.push(a.fragmentShader), c.push(a.vertexShader));
        if (void 0 !== a.defines) for (var d in a.defines) c.push(d), c.push(a.defines[d]);
        for (d = 0; d < f.length; d++) c.push(b[f[d]]);
        return c.join()
    };
    this.acquireProgram = function (b, c, e) {
        for (var f, n = 0, p = d.length; n < p; n++) {
            var m = d[n];
            if (m.code === e) {
                f = m;
                ++f.usedTimes;
                break
            }
        }
        void 0 === f && (f = new THREE.WebGLProgram(a, e, b, c), d.push(f));
        return f
    };
    this.releaseProgram = function (a) {
        if (0 === --a.usedTimes) {
            var b = d.indexOf(a);
            d[b] = d[d.length - 1];
            d.pop();
            a.destroy()
        }
    };
    this.programs = d
};
THREE.WebGLProperties = function () {
    var a = {};
    this.get = function (b) {
        b = b.uuid;
        var c = a[b];
        void 0 === c && (c = {}, a[b] = c);
        return c
    };
    this.delete = function (b) {
        delete a[b.uuid]
    };
    this.clear = function () {
        a = {}
    }
};
THREE.WebGLShader = function () {
    function a(a) {
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) a[c] = c + 1 + ": " + a[c];
        return a.join("\n")
    }

    return function (b, c, d) {
        var e = b.createShader(c);
        b.shaderSource(e, d);
        b.compileShader(e);
        !1 === b.getShaderParameter(e, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
        "" !== b.getShaderInfoLog(e) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", c === b.VERTEX_SHADER ? "vertex" : "fragment", b.getShaderInfoLog(e), a(d));
        return e
    }
}();
THREE.WebGLShadowMap = function (a, b, c) {
    function d(b, c, d, e) {
        var f = b.geometry, g = null, g = r, h = b.customDepthMaterial;
        d && (g = s, h = b.customDistanceMaterial);
        h ? g = h : (b = b instanceof THREE.SkinnedMesh && c.skinning, h = 0, void 0 !== f.morphTargets && 0 < f.morphTargets.length && c.morphTargets && (h |= 1), b && (h |= 2), g = g[h]);
        a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length && (h = g.uuid, f = c.uuid, b = t[h], void 0 === b && (b = {}, t[h] = b), h = b[f], void 0 === h && (h = g.clone(), b[f] = h), g = h);
        g.visible = c.visible;
        g.wireframe = c.wireframe;
        f = c.side;
        B.renderSingleSided && f == THREE.DoubleSide && (f = THREE.FrontSide);
        B.renderReverseSided && (f === THREE.FrontSide ? f = THREE.BackSide : f === THREE.BackSide && (f = THREE.FrontSide));
        g.side = f;
        g.clipShadows = c.clipShadows;
        g.clippingPlanes = c.clippingPlanes;
        g.wireframeLinewidth = c.wireframeLinewidth;
        g.linewidth = c.linewidth;
        d && void 0 !== g.uniforms.lightPos && g.uniforms.lightPos.value.copy(e);
        return g
    }

    function e(a, b, c) {
        if (!1 !== a.visible) {
            a.layers.test(b.layers) && (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof
                THREE.Points) && a.castShadow && (!1 === a.frustumCulled || !0 === h.intersectsObject(a)) && !0 === a.material.visible && (a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld), q.push(a));
            a = a.children;
            for (var d = 0, f = a.length; d < f; d++) e(a[d], b, c)
        }
    }

    var f = a.context, g = a.state, h = new THREE.Frustum, k = new THREE.Matrix4, l = b.shadows, n = new THREE.Vector2,
        p = new THREE.Vector3, m = new THREE.Vector3, q = [], r = Array(4), s = Array(4), t = {},
        u = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0,
            0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)],
        v = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)],
        C = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4];
    b = new THREE.MeshDepthMaterial;
    b.depthPacking = THREE.RGBADepthPacking;
    b.clipping = !0;
    for (var w = THREE.ShaderLib.distanceRGBA, E = THREE.UniformsUtils.clone(w.uniforms), z = 0; 4 !== z; ++z) {
        var y =
            0 !== (z & 1), A = 0 !== (z & 2), I = b.clone();
        I.morphTargets = y;
        I.skinning = A;
        r[z] = I;
        y = new THREE.ShaderMaterial({
            defines: {USE_SHADOWMAP: ""},
            uniforms: E,
            vertexShader: w.vertexShader,
            fragmentShader: w.fragmentShader,
            morphTargets: y,
            skinning: A,
            clipping: !0
        });
        s[z] = y
    }
    var B = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = THREE.PCFShadowMap;
    this.renderSingleSided = this.renderReverseSided = !0;
    this.render = function (b, r) {
        if (!1 !== B.enabled && (!1 !== B.autoUpdate || !1 !== B.needsUpdate) && 0 !== l.length) {
            g.clearColor(1,
                1, 1, 1);
            g.disable(f.BLEND);
            g.setDepthTest(!0);
            g.setScissorTest(!1);
            for (var w, s, t = 0, y = l.length; t < y; t++) {
                var z = l[t], A = z.shadow;
                if (void 0 === A) console.warn("THREE.WebGLShadowMap:", z, "has no shadow."); else {
                    var E = A.camera;
                    n.copy(A.mapSize);
                    if (z instanceof THREE.PointLight) {
                        w = 6;
                        s = !0;
                        var J = n.x, D = n.y;
                        C[0].set(2 * J, D, J, D);
                        C[1].set(0, D, J, D);
                        C[2].set(3 * J, D, J, D);
                        C[3].set(J, D, J, D);
                        C[4].set(3 * J, 0, J, D);
                        C[5].set(J, 0, J, D);
                        n.x *= 4;
                        n.y *= 2
                    } else w = 1, s = !1;
                    null === A.map && (A.map = new THREE.WebGLRenderTarget(n.x, n.y, {
                        minFilter: THREE.NearestFilter,
                        magFilter: THREE.NearestFilter, format: THREE.RGBAFormat
                    }), E.updateProjectionMatrix());
                    A instanceof THREE.SpotLightShadow && A.update(z);
                    J = A.map;
                    A = A.matrix;
                    m.setFromMatrixPosition(z.matrixWorld);
                    E.position.copy(m);
                    a.setRenderTarget(J);
                    a.clear();
                    for (J = 0; J < w; J++) {
                        s ? (p.copy(E.position), p.add(u[J]), E.up.copy(v[J]), E.lookAt(p), g.viewport(C[J])) : (p.setFromMatrixPosition(z.target.matrixWorld), E.lookAt(p));
                        E.updateMatrixWorld();
                        E.matrixWorldInverse.getInverse(E.matrixWorld);
                        A.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5,
                            0, 0, 0, 1);
                        A.multiply(E.projectionMatrix);
                        A.multiply(E.matrixWorldInverse);
                        k.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse);
                        h.setFromMatrix(k);
                        q.length = 0;
                        e(b, r, E);
                        for (var D = 0, G = q.length; D < G; D++) {
                            var I = q[D], T = c.update(I), X = I.material;
                            if (X instanceof THREE.MultiMaterial) for (var ja = T.groups, X = X.materials, ba = 0, ia = ja.length; ba < ia; ba++) {
                                var V = ja[ba], Y = X[V.materialIndex];
                                !0 === Y.visible && (Y = d(I, Y, s, m), a.renderBufferDirect(E, null, T, Y, I, V))
                            } else Y = d(I, X, s, m), a.renderBufferDirect(E, null, T, Y, I, null)
                        }
                    }
                }
            }
            w =
                a.getClearColor();
            s = a.getClearAlpha();
            a.setClearColor(w, s);
            B.needsUpdate = !1
        }
    }
};
THREE.WebGLState = function (a, b, c) {
    function d(b, c, d) {
        var e = new Uint8Array(4), f = a.createTexture();
        a.bindTexture(b, f);
        a.texParameteri(b, a.TEXTURE_MIN_FILTER, a.NEAREST);
        a.texParameteri(b, a.TEXTURE_MAG_FILTER, a.NEAREST);
        for (b = 0; b < d; b++) a.texImage2D(c + b, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, e);
        return f
    }

    var e = this;
    this.buffers = {
        color: new THREE.WebGLColorBuffer(a, this),
        depth: new THREE.WebGLDepthBuffer(a, this),
        stencil: new THREE.WebGLStencilBuffer(a, this)
    };
    var f = a.getParameter(a.MAX_VERTEX_ATTRIBS), g = new Uint8Array(f),
        h = new Uint8Array(f), k = new Uint8Array(f), l = {}, n = null, p = null, m = null, q = null, r = null,
        s = null, t = null, u = null, v = !1, C = null, w = null, E = null, z = null, y = null, A = null,
        I = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS), B = null, F = {}, K = new THREE.Vector4, P = new THREE.Vector4,
        M = {};
    M[a.TEXTURE_2D] = d(a.TEXTURE_2D, a.TEXTURE_2D, 1);
    M[a.TEXTURE_CUBE_MAP] = d(a.TEXTURE_CUBE_MAP, a.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
    this.init = function () {
        this.clearColor(0, 0, 0, 1);
        this.clearDepth(1);
        this.clearStencil(0);
        this.enable(a.DEPTH_TEST);
        this.setDepthFunc(THREE.LessEqualDepth);
        this.setFlipSided(!1);
        this.setCullFace(THREE.CullFaceBack);
        this.enable(a.CULL_FACE);
        this.enable(a.BLEND);
        this.setBlending(THREE.NormalBlending)
    };
    this.initAttributes = function () {
        for (var a = 0, b = g.length; a < b; a++) g[a] = 0
    };
    this.enableAttribute = function (c) {
        g[c] = 1;
        0 === h[c] && (a.enableVertexAttribArray(c), h[c] = 1);
        0 !== k[c] && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0), k[c] = 0)
    };
    this.enableAttributeAndDivisor = function (b, c, d) {
        g[b] = 1;
        0 === h[b] && (a.enableVertexAttribArray(b), h[b] = 1);
        k[b] !== c && (d.vertexAttribDivisorANGLE(b,
            c), k[b] = c)
    };
    this.disableUnusedAttributes = function () {
        for (var b = 0, c = h.length; b !== c; ++b) h[b] !== g[b] && (a.disableVertexAttribArray(b), h[b] = 0)
    };
    this.enable = function (b) {
        !0 !== l[b] && (a.enable(b), l[b] = !0)
    };
    this.disable = function (b) {
        !1 !== l[b] && (a.disable(b), l[b] = !1)
    };
    this.getCompressedTextureFormats = function () {
        if (null === n && (n = [], b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1"))) for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d <
        c.length; d++) n.push(c[d]);
        return n
    };
    this.setBlending = function (b, d, e, f, g, h, k, l) {
        if (b !== THREE.NoBlending) {
            this.enable(a.BLEND);
            if (b !== p || l !== v) b === THREE.AdditiveBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.SRC_ALPHA, a.ONE)) : b === THREE.SubtractiveBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD),
                a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : b === THREE.MultiplyBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.SRC_COLOR, a.ZERO, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.SRC_COLOR)) : l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)),
                p = b, v = l;
            if (b === THREE.CustomBlending) {
                g = g || d;
                h = h || e;
                k = k || f;
                if (d !== m || g !== s) a.blendEquationSeparate(c(d), c(g)), m = d, s = g;
                if (e !== q || f !== r || h !== t || k !== u) a.blendFuncSeparate(c(e), c(f), c(h), c(k)), q = e, r = f, t = h, u = k
            } else u = t = s = r = q = m = null
        } else this.disable(a.BLEND), p = b
    };
    this.setColorWrite = function (a) {
        this.buffers.color.setMask(a)
    };
    this.setDepthTest = function (a) {
        this.buffers.depth.setTest(a)
    };
    this.setDepthWrite = function (a) {
        this.buffers.depth.setMask(a)
    };
    this.setDepthFunc = function (a) {
        this.buffers.depth.setFunc(a)
    };
    this.setStencilTest = function (a) {
        this.buffers.stencil.setTest(a)
    };
    this.setStencilWrite = function (a) {
        this.buffers.stencil.setMask(a)
    };
    this.setStencilFunc = function (a, b, c) {
        this.buffers.stencil.setFunc(a, b, c)
    };
    this.setStencilOp = function (a, b, c) {
        this.buffers.stencil.setOp(a, b, c)
    };
    this.setFlipSided = function (b) {
        C !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW), C = b)
    };
    this.setCullFace = function (b) {
        b !== THREE.CullFaceNone ? (this.enable(a.CULL_FACE), b !== w && (b === THREE.CullFaceBack ? a.cullFace(a.BACK) : b === THREE.CullFaceFront ?
            a.cullFace(a.FRONT) : a.cullFace(a.FRONT_AND_BACK))) : this.disable(a.CULL_FACE);
        w = b
    };
    this.setLineWidth = function (b) {
        b !== E && (a.lineWidth(b), E = b)
    };
    this.setPolygonOffset = function (b, c, d) {
        if (b) {
            if (this.enable(a.POLYGON_OFFSET_FILL), z !== c || y !== d) a.polygonOffset(c, d), z = c, y = d
        } else this.disable(a.POLYGON_OFFSET_FILL)
    };
    this.getScissorTest = function () {
        return A
    };
    this.setScissorTest = function (b) {
        (A = b) ? this.enable(a.SCISSOR_TEST) : this.disable(a.SCISSOR_TEST)
    };
    this.activeTexture = function (b) {
        void 0 === b && (b = a.TEXTURE0 +
            I - 1);
        B !== b && (a.activeTexture(b), B = b)
    };
    this.bindTexture = function (b, c) {
        null === B && e.activeTexture();
        var d = F[B];
        void 0 === d && (d = {type: void 0, texture: void 0}, F[B] = d);
        if (d.type !== b || d.texture !== c) a.bindTexture(b, c || M[b]), d.type = b, d.texture = c
    };
    this.compressedTexImage2D = function () {
        try {
            a.compressedTexImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    };
    this.texImage2D = function () {
        try {
            a.texImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    };
    this.clearColor = function (a, b, c, d) {
        this.buffers.color.setClear(a,
            b, c, d)
    };
    this.clearDepth = function (a) {
        this.buffers.depth.setClear(a)
    };
    this.clearStencil = function (a) {
        this.buffers.stencil.setClear(a)
    };
    this.scissor = function (b) {
        !1 === K.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), K.copy(b))
    };
    this.viewport = function (b) {
        !1 === P.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), P.copy(b))
    };
    this.reset = function () {
        for (var b = 0; b < h.length; b++) 1 === h[b] && (a.disableVertexAttribArray(b), h[b] = 0);
        l = {};
        B = n = null;
        F = {};
        w = C = p = null;
        this.buffers.color.reset();
        this.buffers.depth.reset();
        this.buffers.stencil.reset()
    }
};
THREE.WebGLColorBuffer = function (a, b) {
    var c = !1, d = new THREE.Vector4, e = null, f = new THREE.Vector4;
    this.setMask = function (b) {
        e === b || c || (a.colorMask(b, b, b, b), e = b)
    };
    this.setLocked = function (a) {
        c = a
    };
    this.setClear = function (b, c, e, l) {
        d.set(b, c, e, l);
        !1 === f.equals(d) && (a.clearColor(b, c, e, l), f.copy(d))
    };
    this.reset = function () {
        c = !1;
        e = null;
        f = new THREE.Vector4
    }
};
THREE.WebGLDepthBuffer = function (a, b) {
    var c = !1, d = null, e = null, f = null;
    this.setTest = function (c) {
        c ? b.enable(a.DEPTH_TEST) : b.disable(a.DEPTH_TEST)
    };
    this.setMask = function (b) {
        d === b || c || (a.depthMask(b), d = b)
    };
    this.setFunc = function (b) {
        if (e !== b) {
            if (b) switch (b) {
                case THREE.NeverDepth:
                    a.depthFunc(a.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    a.depthFunc(a.ALWAYS);
                    break;
                case THREE.LessDepth:
                    a.depthFunc(a.LESS);
                    break;
                case THREE.LessEqualDepth:
                    a.depthFunc(a.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    a.depthFunc(a.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    a.depthFunc(a.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    a.depthFunc(a.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    a.depthFunc(a.NOTEQUAL);
                    break;
                default:
                    a.depthFunc(a.LEQUAL)
            } else a.depthFunc(a.LEQUAL);
            e = b
        }
    };
    this.setLocked = function (a) {
        c = a
    };
    this.setClear = function (b) {
        f !== b && (a.clearDepth(b), f = b)
    };
    this.reset = function () {
        c = !1;
        f = e = d = null
    }
};
THREE.WebGLStencilBuffer = function (a, b) {
    var c = !1, d = null, e = null, f = null, g = null, h = null, k = null, l = null, n = null;
    this.setTest = function (c) {
        c ? b.enable(a.STENCIL_TEST) : b.disable(a.STENCIL_TEST)
    };
    this.setMask = function (b) {
        d === b || c || (a.stencilMask(b), d = b)
    };
    this.setFunc = function (b, c, d) {
        if (e !== b || f !== c || g !== d) a.stencilFunc(b, c, d), e = b, f = c, g = d
    };
    this.setOp = function (b, c, d) {
        if (h !== b || k !== c || l !== d) a.stencilOp(b, c, d), h = b, k = c, l = d
    };
    this.setLocked = function (a) {
        c = a
    };
    this.setClear = function (b) {
        n !== b && (a.clearStencil(b), n = b)
    };
    this.reset =
        function () {
            c = !1;
            n = l = k = h = g = f = e = d = null
        }
};
THREE.WebGLTextures = function (a, b, c, d, e, f, g) {
    function h(a, b) {
        if (a.width > b || a.height > b) {
            var c = b / Math.max(a.width, a.height),
                d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            d.width = Math.floor(a.width * c);
            d.height = Math.floor(a.height * c);
            d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
            console.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a);
            return d
        }
        return a
    }

    function k(a) {
        return THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height)
    }

    function l(b) {
        return b === THREE.NearestFilter || b === THREE.NearestMipMapNearestFilter || b === THREE.NearestMipMapLinearFilter ? a.NEAREST : a.LINEAR
    }

    function n(b) {
        b = b.target;
        b.removeEventListener("dispose", n);
        a:{
            var c = d.get(b);
            if (b.image && c.__image__webglTextureCube) a.deleteTexture(c.__image__webglTextureCube); else {
                if (void 0 === c.__webglInit) break a;
                a.deleteTexture(c.__webglTexture)
            }
            d.delete(b)
        }
        t.textures--
    }

    function p(b) {
        b = b.target;
        b.removeEventListener("dispose", p);
        var c = d.get(b), e = d.get(b.texture);
        if (b) {
            void 0 !==
            e.__webglTexture && a.deleteTexture(e.__webglTexture);
            b.depthTexture && b.depthTexture.dispose();
            if (b instanceof THREE.WebGLRenderTargetCube) for (e = 0; 6 > e; e++) a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]); else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);
            d.delete(b.texture);
            d.delete(b)
        }
        t.textures--
    }

    function m(b, g) {
        var m = d.get(b);
        if (0 < b.version && m.__version !== b.version) {
            var l =
                b.image;
            if (void 0 === l) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", b); else if (!1 === l.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", b); else {
                void 0 === m.__webglInit && (m.__webglInit = !0, b.addEventListener("dispose", n), m.__webglTexture = a.createTexture(), t.textures++);
                c.activeTexture(a.TEXTURE0 + g);
                c.bindTexture(a.TEXTURE_2D, m.__webglTexture);
                a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);
                a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    b.premultiplyAlpha);
                a.pixelStorei(a.UNPACK_ALIGNMENT, b.unpackAlignment);
                var p = h(b.image, e.maxTextureSize);
                if ((b.wrapS !== THREE.ClampToEdgeWrapping || b.wrapT !== THREE.ClampToEdgeWrapping || b.minFilter !== THREE.NearestFilter && b.minFilter !== THREE.LinearFilter) && !1 === k(p)) if (l = p, l instanceof HTMLImageElement || l instanceof HTMLCanvasElement) {
                    var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    r.width = THREE.Math.nearestPowerOfTwo(l.width);
                    r.height = THREE.Math.nearestPowerOfTwo(l.height);
                    r.getContext("2d").drawImage(l,
                        0, 0, r.width, r.height);
                    console.warn("THREE.WebGLRenderer: image is not power of two (" + l.width + "x" + l.height + "). Resized to " + r.width + "x" + r.height, l);
                    p = r
                } else p = l;
                var l = k(p), r = f(b.format), s = f(b.type);
                q(a.TEXTURE_2D, b, l);
                var I = b.mipmaps;
                if (b instanceof THREE.DepthTexture) {
                    I = a.DEPTH_COMPONENT;
                    if (b.type === THREE.FloatType) {
                        if (!u) throw Error("Float Depth Texture only supported in WebGL2.0");
                        I = a.DEPTH_COMPONENT32F
                    } else u && (I = a.DEPTH_COMPONENT16);
                    c.texImage2D(a.TEXTURE_2D, 0, I, p.width, p.height, 0, r, s, null)
                } else if (b instanceof
                    THREE.DataTexture) if (0 < I.length && l) {
                    for (var B = 0, F = I.length; B < F; B++) p = I[B], c.texImage2D(a.TEXTURE_2D, B, r, p.width, p.height, 0, r, s, p.data);
                    b.generateMipmaps = !1
                } else c.texImage2D(a.TEXTURE_2D, 0, r, p.width, p.height, 0, r, s, p.data); else if (b instanceof THREE.CompressedTexture) for (B = 0, F = I.length; B < F; B++) p = I[B], b.format !== THREE.RGBAFormat && b.format !== THREE.RGBFormat ? -1 < c.getCompressedTextureFormats().indexOf(r) ? c.compressedTexImage2D(a.TEXTURE_2D, B, r, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") :
                    c.texImage2D(a.TEXTURE_2D, B, r, p.width, p.height, 0, r, s, p.data); else if (0 < I.length && l) {
                    B = 0;
                    for (F = I.length; B < F; B++) p = I[B], c.texImage2D(a.TEXTURE_2D, B, r, r, s, p);
                    b.generateMipmaps = !1
                } else c.texImage2D(a.TEXTURE_2D, 0, r, r, s, p);
                b.generateMipmaps && l && a.generateMipmap(a.TEXTURE_2D);
                m.__version = b.version;
                if (b.onUpdate) b.onUpdate(b);
                return
            }
        }
        c.activeTexture(a.TEXTURE0 + g);
        c.bindTexture(a.TEXTURE_2D, m.__webglTexture)
    }

    function q(c, g, h) {
        h ? (a.texParameteri(c, a.TEXTURE_WRAP_S, f(g.wrapS)), a.texParameteri(c, a.TEXTURE_WRAP_T,
            f(g.wrapT)), a.texParameteri(c, a.TEXTURE_MAG_FILTER, f(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, f(g.minFilter))) : (a.texParameteri(c, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(c, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), g.wrapS === THREE.ClampToEdgeWrapping && g.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", g), a.texParameteri(c, a.TEXTURE_MAG_FILTER, l(g.magFilter)),
            a.texParameteri(c, a.TEXTURE_MIN_FILTER, l(g.minFilter)), g.minFilter !== THREE.NearestFilter && g.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", g));
        !(h = b.get("EXT_texture_filter_anisotropic")) || g.type === THREE.FloatType && null === b.get("OES_texture_float_linear") || g.type === THREE.HalfFloatType && null === b.get("OES_texture_half_float_linear") || !(1 < g.anisotropy || d.get(g).__currentAnisotropy) ||
        (a.texParameterf(c, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, e.getMaxAnisotropy())), d.get(g).__currentAnisotropy = g.anisotropy)
    }

    function r(b, e, g, h) {
        var k = f(e.texture.format), l = f(e.texture.type);
        c.texImage2D(h, 0, k, e.width, e.height, 0, k, l, null);
        a.bindFramebuffer(a.FRAMEBUFFER, b);
        a.framebufferTexture2D(a.FRAMEBUFFER, g, h, d.get(e.texture).__webglTexture, 0);
        a.bindFramebuffer(a.FRAMEBUFFER, null)
    }

    function s(b, c) {
        a.bindRenderbuffer(a.RENDERBUFFER, b);
        c.depthBuffer && !c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER,
            a.DEPTH_COMPONENT16, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b)) : c.depthBuffer && c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, b)) : a.renderbufferStorage(a.RENDERBUFFER, a.RGBA4, c.width, c.height);
        a.bindRenderbuffer(a.RENDERBUFFER, null)
    }

    var t = g.memory, u = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext;
    this.setTexture2D = m;
    this.setTextureCube = function (b, g) {
        var l = d.get(b);
        if (6 === b.image.length) if (0 < b.version && l.__version !== b.version) {
            l.__image__webglTextureCube || (b.addEventListener("dispose", n), l.__image__webglTextureCube = a.createTexture(), t.textures++);
            c.activeTexture(a.TEXTURE0 + g);
            c.bindTexture(a.TEXTURE_CUBE_MAP, l.__image__webglTextureCube);
            a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);
            for (var m = b instanceof THREE.CompressedTexture, p = b.image[0] instanceof THREE.DataTexture, r = [], s = 0; 6 > s; s++) r[s] =
                m || p ? p ? b.image[s].image : b.image[s] : h(b.image[s], e.maxCubemapSize);
            var u = k(r[0]), B = f(b.format), F = f(b.type);
            q(a.TEXTURE_CUBE_MAP, b, u);
            for (s = 0; 6 > s; s++) if (m) for (var K, P = r[s].mipmaps, M = 0, H = P.length; M < H; M++) K = P[M], b.format !== THREE.RGBAFormat && b.format !== THREE.RGBFormat ? -1 < c.getCompressedTextureFormats().indexOf(B) ? c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + s, M, B, K.width, K.height, 0, K.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") :
                c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + s, M, B, K.width, K.height, 0, B, F, K.data); else p ? c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, B, r[s].width, r[s].height, 0, B, F, r[s].data) : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, B, B, F, r[s]);
            b.generateMipmaps && u && a.generateMipmap(a.TEXTURE_CUBE_MAP);
            l.__version = b.version;
            if (b.onUpdate) b.onUpdate(b)
        } else c.activeTexture(a.TEXTURE0 + g), c.bindTexture(a.TEXTURE_CUBE_MAP, l.__image__webglTextureCube)
    };
    this.setTextureCubeDynamic = function (b, e) {
        c.activeTexture(a.TEXTURE0 +
            e);
        c.bindTexture(a.TEXTURE_CUBE_MAP, d.get(b).__webglTexture)
    };
    this.setupRenderTarget = function (b) {
        var e = d.get(b), f = d.get(b.texture);
        b.addEventListener("dispose", p);
        f.__webglTexture = a.createTexture();
        t.textures++;
        var g = b instanceof THREE.WebGLRenderTargetCube, h = k(b);
        if (g) {
            e.__webglFramebuffer = [];
            for (var l = 0; 6 > l; l++) e.__webglFramebuffer[l] = a.createFramebuffer()
        } else e.__webglFramebuffer = a.createFramebuffer();
        if (g) {
            c.bindTexture(a.TEXTURE_CUBE_MAP, f.__webglTexture);
            q(a.TEXTURE_CUBE_MAP, b.texture, h);
            for (l =
                     0; 6 > l; l++) r(e.__webglFramebuffer[l], b, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + l);
            b.texture.generateMipmaps && h && a.generateMipmap(a.TEXTURE_CUBE_MAP);
            c.bindTexture(a.TEXTURE_CUBE_MAP, null)
        } else c.bindTexture(a.TEXTURE_2D, f.__webglTexture), q(a.TEXTURE_2D, b.texture, h), r(e.__webglFramebuffer, b, a.COLOR_ATTACHMENT0, a.TEXTURE_2D), b.texture.generateMipmaps && h && a.generateMipmap(a.TEXTURE_2D), c.bindTexture(a.TEXTURE_2D, null);
        if (b.depthBuffer) {
            e = d.get(b);
            f = b instanceof THREE.WebGLRenderTargetCube;
            if (b.depthTexture) {
                if (f) throw Error("target.depthTexture not supported in Cube render targets");
                if (b instanceof THREE.WebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported!");
                a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer);
                if (!(b.depthTexture instanceof THREE.DepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                d.get(b.depthTexture).__webglTexture && b.depthTexture.image.width === b.width && b.depthTexture.image.height === b.height || (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate =
                    !0);
                m(b.depthTexture, 0);
                b = d.get(b.depthTexture).__webglTexture;
                a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, b, 0)
            } else if (f) for (e.__webglDepthbuffer = [], f = 0; 6 > f; f++) a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer[f]), e.__webglDepthbuffer[f] = a.createRenderbuffer(), s(e.__webglDepthbuffer[f], b); else a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = a.createRenderbuffer(), s(e.__webglDepthbuffer, b);
            a.bindFramebuffer(a.FRAMEBUFFER, null)
        }
    };
    this.updateRenderTargetMipmap =
        function (b) {
            var e = b.texture;
            e.generateMipmaps && k(b) && e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter && (b = b instanceof THREE.WebGLRenderTargetCube ? a.TEXTURE_CUBE_MAP : a.TEXTURE_2D, e = d.get(e).__webglTexture, c.bindTexture(b, e), a.generateMipmap(b), c.bindTexture(b, null))
        }
};
THREE.WebGLUniforms = function () {
    var a = new THREE.Texture, b = new THREE.CubeTexture, c = [], d = [], e = function (a, b, d) {
        var e = a[0];
        if (0 >= e || 0 < e) return a;
        var f = b * d, g = c[f];
        void 0 === g && (g = new Float32Array(f), c[f] = g);
        if (0 !== b) for (e.toArray(g, 0), e = 1, f = 0; e !== b; ++e) f += d, a[e].toArray(g, f);
        return g
    }, f = function (a, b) {
        var c = d[b];
        void 0 === c && (c = new Int32Array(b), d[b] = c);
        for (var e = 0; e !== b; ++e) c[e] = a.allocTextureUnit();
        return c
    }, g = function (a, b) {
        a.uniform1f(this.addr, b)
    }, h = function (a, b) {
        a.uniform1i(this.addr, b)
    }, k = function (a,
                     b) {
        void 0 === b.x ? a.uniform2fv(this.addr, b) : a.uniform2f(this.addr, b.x, b.y)
    }, l = function (a, b) {
        void 0 !== b.x ? a.uniform3f(this.addr, b.x, b.y, b.z) : void 0 !== b.r ? a.uniform3f(this.addr, b.r, b.g, b.b) : a.uniform3fv(this.addr, b)
    }, n = function (a, b) {
        void 0 === b.x ? a.uniform4fv(this.addr, b) : a.uniform4f(this.addr, b.x, b.y, b.z, b.w)
    }, p = function (a, b) {
        a.uniformMatrix2fv(this.addr, !1, b.elements || b)
    }, m = function (a, b) {
        a.uniformMatrix3fv(this.addr, !1, b.elements || b)
    }, q = function (a, b) {
        a.uniformMatrix4fv(this.addr, !1, b.elements || b)
    }, r =
        function (b, c, d) {
            var e = d.allocTextureUnit();
            b.uniform1i(this.addr, e);
            d.setTexture2D(c || a, e)
        }, s = function (a, c, d) {
        var e = d.allocTextureUnit();
        a.uniform1i(this.addr, e);
        d.setTextureCube(c || b, e)
    }, t = function (a, b) {
        a.uniform2iv(this.addr, b)
    }, u = function (a, b) {
        a.uniform3iv(this.addr, b)
    }, v = function (a, b) {
        a.uniform4iv(this.addr, b)
    }, C = function (a) {
        switch (a) {
            case 5126:
                return g;
            case 35664:
                return k;
            case 35665:
                return l;
            case 35666:
                return n;
            case 35674:
                return p;
            case 35675:
                return m;
            case 35676:
                return q;
            case 35678:
                return r;
            case 35680:
                return s;
            case 5124:
            case 35670:
                return h;
            case 35667:
            case 35671:
                return t;
            case 35668:
            case 35672:
                return u;
            case 35669:
            case 35673:
                return v
        }
    }, w = function (a, b) {
        a.uniform1fv(this.addr, b)
    }, E = function (a, b) {
        a.uniform1iv(this.addr, b)
    }, z = function (a, b) {
        a.uniform2fv(this.addr, e(b, this.size, 2))
    }, y = function (a, b) {
        a.uniform3fv(this.addr, e(b, this.size, 3))
    }, A = function (a, b) {
        a.uniform4fv(this.addr, e(b, this.size, 4))
    }, I = function (a, b) {
        a.uniformMatrix2fv(this.addr, !1, e(b, this.size, 4))
    }, B = function (a, b) {
        a.uniformMatrix3fv(this.addr, !1, e(b,
            this.size, 9))
    }, F = function (a, b) {
        a.uniformMatrix4fv(this.addr, !1, e(b, this.size, 16))
    }, K = function (b, c, d) {
        var e = c.length, g = f(d, e);
        b.uniform1iv(this.addr, g);
        for (b = 0; b !== e; ++b) d.setTexture2D(c[b] || a, g[b])
    }, P = function (a, c, d) {
        var e = c.length, g = f(d, e);
        a.uniform1iv(this.addr, g);
        for (a = 0; a !== e; ++a) d.setTextureCube(c[a] || b, g[a])
    }, M = function (a) {
        switch (a) {
            case 5126:
                return w;
            case 35664:
                return z;
            case 35665:
                return y;
            case 35666:
                return A;
            case 35674:
                return I;
            case 35675:
                return B;
            case 35676:
                return F;
            case 35678:
                return K;
            case 35680:
                return P;
            case 5124:
            case 35670:
                return E;
            case 35667:
            case 35671:
                return t;
            case 35668:
            case 35672:
                return u;
            case 35669:
            case 35673:
                return v
        }
    }, H = function (a, b, c) {
        this.id = a;
        this.addr = c;
        this.setValue = C(b.type)
    }, L = function (a, b, c) {
        this.id = a;
        this.addr = c;
        this.size = b.size;
        this.setValue = M(b.type)
    }, O = function (a) {
        this.id = a;
        this.seq = [];
        this.map = {}
    };
    O.prototype.setValue = function (a, b) {
        for (var c = this.seq, d = 0, e = c.length; d !== e; ++d) {
            var f = c[d];
            f.setValue(a, b[f.id])
        }
    };
    var N = /([\w\d_]+)(\])?(\[|\.)?/g, Q = function (a, b, c) {
        this.seq = [];
        this.map =
            {};
        this.renderer = c;
        c = a.getProgramParameter(b, a.ACTIVE_UNIFORMS);
        for (var d = 0; d !== c; ++d) {
            var e = a.getActiveUniform(b, d), f = a.getUniformLocation(b, e.name), g = this, h = e.name, k = h.length;
            for (N.lastIndex = 0; ;) {
                var l = N.exec(h), m = N.lastIndex, n = l[1], p = l[3];
                "]" === l[2] && (n |= 0);
                if (void 0 === p || "[" === p && m + 2 === k) {
                    h = g;
                    e = void 0 === p ? new H(n, e, f) : new L(n, e, f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break
                } else p = g.map[n], void 0 === p && (p = new O(n), n = g, g = p, n.seq.push(g), n.map[g.id] = g), g = p
            }
        }
    };
    Q.prototype.setValue = function (a, b, c) {
        b = this.map[b];
        void 0 !== b && b.setValue(a, c, this.renderer)
    };
    Q.prototype.set = function (a, b, c) {
        var d = this.map[c];
        void 0 !== d && d.setValue(a, b[c], this.renderer)
    };
    Q.prototype.setOptional = function (a, b, c) {
        b = b[c];
        void 0 !== b && this.setValue(a, c, b)
    };
    Q.upload = function (a, b, c, d) {
        for (var e = 0, f = b.length; e !== f; ++e) {
            var g = b[e], h = c[g.id];
            !1 !== h.needsUpdate && g.setValue(a, h.value, d)
        }
    };
    Q.seqWithValue = function (a, b) {
        for (var c = [], d = 0, e = a.length; d !== e; ++d) {
            var f = a[d];
            f.id in b && c.push(f)
        }
        return c
    };
    Q.splitDynamic = function (a, b) {
        for (var c = null,
                 d = a.length, e = 0, f = 0; f !== d; ++f) {
            var g = a[f], h = b[g.id];
            h && !0 === h.dynamic ? (null === c && (c = []), c.push(g)) : (e < f && (a[e] = g), ++e)
        }
        e < d && (a.length = e);
        return c
    };
    Q.evalDynamic = function (a, b, c, d) {
        for (var e = 0, f = a.length; e !== f; ++e) {
            var g = b[a[e].id], h = g.onUpdateCallback;
            void 0 !== h && h.call(g, c, d)
        }
    };
    return Q
}();
THREE.LensFlarePlugin = function (a, b) {
    var c, d, e, f, g, h, k, l, n, p, m = a.context, q = a.state, r, s, t, u, v, C;
    this.render = function (w, E, z) {
        if (0 !== b.length) {
            w = new THREE.Vector3;
            var y = z.w / z.z, A = .5 * z.z, I = .5 * z.w, B = 16 / z.w, F = new THREE.Vector2(B * y, B),
                K = new THREE.Vector3(1, 1, 0), P = new THREE.Vector2(1, 1), M = new THREE.Box2;
            M.min.set(0, 0);
            M.max.set(z.z - 16, z.w - 16);
            if (void 0 === u) {
                var B = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                    H = new Uint16Array([0, 1, 2, 0, 2, 3]);
                r = m.createBuffer();
                s = m.createBuffer();
                m.bindBuffer(m.ARRAY_BUFFER,
                    r);
                m.bufferData(m.ARRAY_BUFFER, B, m.STATIC_DRAW);
                m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, s);
                m.bufferData(m.ELEMENT_ARRAY_BUFFER, H, m.STATIC_DRAW);
                v = m.createTexture();
                C = m.createTexture();
                q.bindTexture(m.TEXTURE_2D, v);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGB, 16, 16, 0, m.RGB, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER,
                    m.NEAREST);
                q.bindTexture(m.TEXTURE_2D, C);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, 16, 16, 0, m.RGBA, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
                var B = t = {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    }, H = m.createProgram(), L = m.createShader(m.FRAGMENT_SHADER),
                    O = m.createShader(m.VERTEX_SHADER), N = "precision " + a.getPrecision() + " float;\n";
                m.shaderSource(L, N + B.fragmentShader);
                m.shaderSource(O, N + B.vertexShader);
                m.compileShader(L);
                m.compileShader(O);
                m.attachShader(H, L);
                m.attachShader(H, O);
                m.linkProgram(H);
                u = H;
                n = m.getAttribLocation(u, "position");
                p = m.getAttribLocation(u, "uv");
                c = m.getUniformLocation(u, "renderType");
                d = m.getUniformLocation(u, "map");
                e = m.getUniformLocation(u, "occlusionMap");
                f = m.getUniformLocation(u, "opacity");
                g = m.getUniformLocation(u, "color");
                h = m.getUniformLocation(u,
                    "scale");
                k = m.getUniformLocation(u, "rotation");
                l = m.getUniformLocation(u, "screenPosition")
            }
            m.useProgram(u);
            q.initAttributes();
            q.enableAttribute(n);
            q.enableAttribute(p);
            q.disableUnusedAttributes();
            m.uniform1i(e, 0);
            m.uniform1i(d, 1);
            m.bindBuffer(m.ARRAY_BUFFER, r);
            m.vertexAttribPointer(n, 2, m.FLOAT, !1, 16, 0);
            m.vertexAttribPointer(p, 2, m.FLOAT, !1, 16, 8);
            m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, s);
            q.disable(m.CULL_FACE);
            q.setDepthWrite(!1);
            H = 0;
            for (L = b.length; H < L; H++) if (B = 16 / z.w, F.set(B * y, B), O = b[H], w.set(O.matrixWorld.elements[12],
                O.matrixWorld.elements[13], O.matrixWorld.elements[14]), w.applyMatrix4(E.matrixWorldInverse), w.applyProjection(E.projectionMatrix), K.copy(w), P.x = z.x + K.x * A + A - 8, P.y = z.y + K.y * I + I - 8, !0 === M.containsPoint(P)) {
                q.activeTexture(m.TEXTURE0);
                q.bindTexture(m.TEXTURE_2D, null);
                q.activeTexture(m.TEXTURE1);
                q.bindTexture(m.TEXTURE_2D, v);
                m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGB, P.x, P.y, 16, 16, 0);
                m.uniform1i(c, 0);
                m.uniform2f(h, F.x, F.y);
                m.uniform3f(l, K.x, K.y, K.z);
                q.disable(m.BLEND);
                q.enable(m.DEPTH_TEST);
                m.drawElements(m.TRIANGLES,
                    6, m.UNSIGNED_SHORT, 0);
                q.activeTexture(m.TEXTURE0);
                q.bindTexture(m.TEXTURE_2D, C);
                m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGBA, P.x, P.y, 16, 16, 0);
                m.uniform1i(c, 1);
                q.disable(m.DEPTH_TEST);
                q.activeTexture(m.TEXTURE1);
                q.bindTexture(m.TEXTURE_2D, v);
                m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
                O.positionScreen.copy(K);
                O.customUpdateCallback ? O.customUpdateCallback(O) : O.updateLensFlares();
                m.uniform1i(c, 2);
                q.enable(m.BLEND);
                for (var N = 0, Q = O.lensFlares.length; N < Q; N++) {
                    var J = O.lensFlares[N];
                    .001 < J.opacity && .001 < J.scale &&
                    (K.x = J.x, K.y = J.y, K.z = J.z, B = J.size * J.scale / z.w, F.x = B * y, F.y = B, m.uniform3f(l, K.x, K.y, K.z), m.uniform2f(h, F.x, F.y), m.uniform1f(k, J.rotation), m.uniform1f(f, J.opacity), m.uniform3f(g, J.color.r, J.color.g, J.color.b), q.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst), a.setTexture2D(J.texture, 1), m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0))
                }
            }
            q.enable(m.CULL_FACE);
            q.enable(m.DEPTH_TEST);
            q.setDepthWrite(!0);
            a.resetGLState()
        }
    }
};
THREE.SpritePlugin = function (a, b) {
    var c, d, e, f, g, h, k, l, n, p, m, q, r, s, t, u, v;

    function C(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id
    }

    var w = a.context, E = a.state, z, y, A, I, B = new THREE.Vector3, F = new THREE.Quaternion, K = new THREE.Vector3;
    this.render = function (P, M) {
        if (0 !== b.length) {
            if (void 0 === A) {
                var H = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                    L = new Uint16Array([0, 1, 2, 0, 2, 3]);
                z = w.createBuffer();
                y = w.createBuffer();
                w.bindBuffer(w.ARRAY_BUFFER,
                    z);
                w.bufferData(w.ARRAY_BUFFER, H, w.STATIC_DRAW);
                w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, y);
                w.bufferData(w.ELEMENT_ARRAY_BUFFER, L, w.STATIC_DRAW);
                var H = w.createProgram(), L = w.createShader(w.VERTEX_SHADER), O = w.createShader(w.FRAGMENT_SHADER);
                w.shaderSource(L, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
                w.shaderSource(O, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
                w.compileShader(L);
                w.compileShader(O);
                w.attachShader(H, L);
                w.attachShader(H, O);
                w.linkProgram(H);
                A = H;
                u = w.getAttribLocation(A, "position");
                v = w.getAttribLocation(A, "uv");
                c = w.getUniformLocation(A, "uvOffset");
                d = w.getUniformLocation(A, "uvScale");
                e = w.getUniformLocation(A, "rotation");
                f = w.getUniformLocation(A, "scale");
                g = w.getUniformLocation(A, "color");
                h = w.getUniformLocation(A, "map");
                k = w.getUniformLocation(A, "opacity");
                l = w.getUniformLocation(A, "modelViewMatrix");
                n = w.getUniformLocation(A, "projectionMatrix");
                p =
                    w.getUniformLocation(A, "fogType");
                m = w.getUniformLocation(A, "fogDensity");
                q = w.getUniformLocation(A, "fogNear");
                r = w.getUniformLocation(A, "fogFar");
                s = w.getUniformLocation(A, "fogColor");
                t = w.getUniformLocation(A, "alphaTest");
                H = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                H.width = 8;
                H.height = 8;
                L = H.getContext("2d");
                L.fillStyle = "white";
                L.fillRect(0, 0, 8, 8);
                I = new THREE.Texture(H);
                I.needsUpdate = !0
            }
            w.useProgram(A);
            E.initAttributes();
            E.enableAttribute(u);
            E.enableAttribute(v);
            E.disableUnusedAttributes();
            E.disable(w.CULL_FACE);
            E.enable(w.BLEND);
            w.bindBuffer(w.ARRAY_BUFFER, z);
            w.vertexAttribPointer(u, 2, w.FLOAT, !1, 16, 0);
            w.vertexAttribPointer(v, 2, w.FLOAT, !1, 16, 8);
            w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, y);
            w.uniformMatrix4fv(n, !1, M.projectionMatrix.elements);
            E.activeTexture(w.TEXTURE0);
            w.uniform1i(h, 0);
            L = H = 0;
            (O = P.fog) ? (w.uniform3f(s, O.color.r, O.color.g, O.color.b), O instanceof THREE.Fog ? (w.uniform1f(q, O.near), w.uniform1f(r, O.far), w.uniform1i(p, 1), L = H = 1) : O instanceof THREE.FogExp2 && (w.uniform1f(m, O.density),
                w.uniform1i(p, 2), L = H = 2)) : (w.uniform1i(p, 0), L = H = 0);
            for (var O = 0, N = b.length; O < N; O++) {
                var Q = b[O];
                Q.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse, Q.matrixWorld);
                Q.z = -Q.modelViewMatrix.elements[14]
            }
            b.sort(C);
            for (var J = [], O = 0, N = b.length; O < N; O++) {
                var Q = b[O], D = Q.material;
                w.uniform1f(t, D.alphaTest);
                w.uniformMatrix4fv(l, !1, Q.modelViewMatrix.elements);
                Q.matrixWorld.decompose(B, F, K);
                J[0] = K.x;
                J[1] = K.y;
                Q = 0;
                P.fog && D.fog && (Q = L);
                H !== Q && (w.uniform1i(p, Q), H = Q);
                null !== D.map ? (w.uniform2f(c, D.map.offset.x, D.map.offset.y),
                    w.uniform2f(d, D.map.repeat.x, D.map.repeat.y)) : (w.uniform2f(c, 0, 0), w.uniform2f(d, 1, 1));
                w.uniform1f(k, D.opacity);
                w.uniform3f(g, D.color.r, D.color.g, D.color.b);
                w.uniform1f(e, D.rotation);
                w.uniform2fv(f, J);
                E.setBlending(D.blending, D.blendEquation, D.blendSrc, D.blendDst);
                E.setDepthTest(D.depthTest);
                E.setDepthWrite(D.depthWrite);
                D.map ? a.setTexture2D(D.map, 0) : a.setTexture2D(I, 0);
                w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0)
            }
            E.enable(w.CULL_FACE);
            a.resetGLState()
        }
    }
};
Object.assign(THREE, {
    Face4: function (a, b, c, d, e, f, g) {
        console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
        return new THREE.Face3(a, b, c, e, f, g)
    }, LineStrip: 0, LinePieces: 1, MeshFaceMaterial: THREE.MultiMaterial, PointCloud: function (a, b) {
        console.warn("THREE.PointCloud has been renamed to THREE.Points.");
        return new THREE.Points(a, b)
    }, Particle: THREE.Sprite, ParticleSystem: function (a, b) {
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
        return new THREE.Points(a,
            b)
    }, PointCloudMaterial: function (a) {
        console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
        return new THREE.PointsMaterial(a)
    }, ParticleBasicMaterial: function (a) {
        console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
        return new THREE.PointsMaterial(a)
    }, ParticleSystemMaterial: function (a) {
        console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new THREE.PointsMaterial(a)
    }, Vertex: function (a, b, c) {
        console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
        return new THREE.Vector3(a, b, c)
    }
});
Object.assign(THREE.Box2.prototype, {
    empty: function () {
        console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
        return this.isEmpty()
    }, isIntersectionBox: function (a) {
        console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
        return this.intersectsBox(a)
    }
});
Object.assign(THREE.Box3.prototype, {
    empty: function () {
        console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
        return this.isEmpty()
    }, isIntersectionBox: function (a) {
        console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
        return this.intersectsBox(a)
    }, isIntersectionSphere: function (a) {
        console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
        return this.intersectsSphere(a)
    }
});
Object.assign(THREE.Matrix3.prototype, {
    multiplyVector3: function (a) {
        console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
        return a.applyMatrix3(this)
    }, multiplyVector3Array: function (a) {
        console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
        return this.applyToVector3Array(a)
    }
});
Object.assign(THREE.Matrix4.prototype, {
    extractPosition: function (a) {
        console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
        return this.copyPosition(a)
    }, setRotationFromQuaternion: function (a) {
        console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
        return this.makeRotationFromQuaternion(a)
    }, multiplyVector3: function (a) {
        console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
        return a.applyProjection(this)
    }, multiplyVector4: function (a) {
        console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)
    }, multiplyVector3Array: function (a) {
        console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
        return this.applyToVector3Array(a)
    }, rotateAxis: function (a) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
        a.transformDirection(this)
    }, crossVector: function (a) {
        console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)
    }, translate: function (a) {
        console.error("THREE.Matrix4: .translate() has been removed.")
    }, rotateX: function (a) {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    }, rotateY: function (a) {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    }, rotateZ: function (a) {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function (a, b) {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    }
});
Object.assign(THREE.Plane.prototype, {
    isIntersectionLine: function (a) {
        console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
        return this.intersectsLine(a)
    }
});
Object.assign(THREE.Quaternion.prototype, {
    multiplyVector3: function (a) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    }
});
Object.assign(THREE.Ray.prototype, {
    isIntersectionBox: function (a) {
        console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
        return this.intersectsBox(a)
    }, isIntersectionPlane: function (a) {
        console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
        return this.intersectsPlane(a)
    }, isIntersectionSphere: function (a) {
        console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
        return this.intersectsSphere(a)
    }
});
Object.assign(THREE.Vector3.prototype, {
    setEulerFromRotationMatrix: function () {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    }, setEulerFromQuaternion: function () {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    }, getPositionFromMatrix: function (a) {
        console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
        return this.setFromMatrixPosition(a)
    },
    getScaleFromMatrix: function (a) {
        console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
        return this.setFromMatrixScale(a)
    }, getColumnFromMatrix: function (a, b) {
        console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
        return this.setFromMatrixColumn(b, a)
    }
});
Object.assign(THREE.Object3D.prototype, {
    getChildByName: function (a) {
        console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
        return this.getObjectByName(a)
    }, renderDepth: function (a) {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    }, translate: function (a, b) {
        console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
        return this.translateOnAxis(b, a)
    }
});
Object.defineProperties(THREE.Object3D.prototype, {
    eulerOrder: {
        get: function () {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
            return this.rotation.order
        }, set: function (a) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
            this.rotation.order = a
        }
    }, useQuaternion: {
        get: function () {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }, set: function (a) {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
});
Object.defineProperties(THREE.LOD.prototype, {
    objects: {
        get: function () {
            console.warn("THREE.LOD: .objects has been renamed to .levels.");
            return this.levels
        }
    }
});
THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
    void 0 !== b && (this.filmGauge = b);
    this.setFocalLength(a)
};
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function (a) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    }, shadowCameraFov: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
            this.shadow.camera.fov = a
        }
    }, shadowCameraLeft: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
            this.shadow.camera.left = a
        }
    }, shadowCameraRight: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
            this.shadow.camera.right = a
        }
    }, shadowCameraTop: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
            this.shadow.camera.top = a
        }
    }, shadowCameraBottom: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
            this.shadow.camera.bottom = a
        }
    }, shadowCameraNear: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
            this.shadow.camera.near = a
        }
    }, shadowCameraFar: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
            this.shadow.camera.far = a
        }
    }, shadowCameraVisible: {
        set: function (a) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    }, shadowBias: {
        set: function (a) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
            this.shadow.bias = a
        }
    }, shadowDarkness: {
        set: function (a) {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    }, shadowMapWidth: {
        set: function (a) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
            this.shadow.mapSize.width = a
        }
    }, shadowMapHeight: {
        set: function (a) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
            this.shadow.mapSize.height = a
        }
    }
});
Object.defineProperties(THREE.BufferAttribute.prototype, {
    length: {
        get: function () {
            console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
            return this.array.length
        }
    }
});
Object.assign(THREE.BufferGeometry.prototype, {
    addIndex: function (a) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
        this.setIndex(a)
    }, addDrawCall: function (a, b, c) {
        void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
        console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
        this.addGroup(a, b)
    }, clearDrawCalls: function () {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
        this.clearGroups()
    },
    computeTangents: function () {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    }, computeOffsets: function () {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    }
});
Object.defineProperties(THREE.BufferGeometry.prototype, {
    drawcalls: {
        get: function () {
            console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
            return this.groups
        }
    }, offsets: {
        get: function () {
            console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
            return this.groups
        }
    }
});
Object.defineProperties(THREE.Material.prototype, {
    wrapAround: {
        get: function () {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }, set: function (a) {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }
    }, wrapRGB: {
        get: function () {
            console.warn("THREE." + this.type + ": .wrapRGB has been removed.");
            return new THREE.Color
        }
    }
});
Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
    metal: {
        get: function () {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
            return !1
        }, set: function (a) {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
});
Object.defineProperties(THREE.ShaderMaterial.prototype, {
    derivatives: {
        get: function () {
            console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
            return this.extensions.derivatives
        }, set: function (a) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
            this.extensions.derivatives = a
        }
    }
});
THREE.EventDispatcher.prototype = Object.assign(Object.create({
    constructor: THREE.EventDispatcher, apply: function (a) {
        console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in.");
        Object.assign(a, this)
    }
}), THREE.EventDispatcher.prototype);
Object.assign(THREE.WebGLRenderer.prototype, {
    supportsFloatTextures: function () {
        console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
        return this.extensions.get("OES_texture_float")
    }, supportsHalfFloatTextures: function () {
        console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
        return this.extensions.get("OES_texture_half_float")
    }, supportsStandardDerivatives: function () {
        console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
        return this.extensions.get("OES_standard_derivatives")
    }, supportsCompressedTextureS3TC: function () {
        console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
        return this.extensions.get("WEBGL_compressed_texture_s3tc")
    }, supportsCompressedTexturePVRTC: function () {
        console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
        return this.extensions.get("WEBGL_compressed_texture_pvrtc")
    },
    supportsBlendMinMax: function () {
        console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
        return this.extensions.get("EXT_blend_minmax")
    }, supportsVertexTextures: function () {
        return this.capabilities.vertexTextures
    }, supportsInstancedArrays: function () {
        console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
        return this.extensions.get("ANGLE_instanced_arrays")
    }, enableScissorTest: function (a) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
        this.setScissorTest(a)
    }, initMaterial: function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    }, addPrePlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    }, addPostPlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    }, updateShadowMap: function () {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }
});
Object.defineProperties(THREE.WebGLRenderer.prototype, {
    shadowMapEnabled: {
        get: function () {
            return this.shadowMap.enabled
        }, set: function (a) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
            this.shadowMap.enabled = a
        }
    }, shadowMapType: {
        get: function () {
            return this.shadowMap.type
        }, set: function (a) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
            this.shadowMap.type = a
        }
    }, shadowMapCullFace: {
        get: function () {
            return this.shadowMap.cullFace
        }, set: function (a) {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
            this.shadowMap.cullFace = a
        }
    }
});
Object.defineProperties(THREE.WebGLShadowMap.prototype, {
    cullFace: {
        get: function () {
            return this.renderReverseSided ? THREE.CullFaceFront : THREE.CullFaceBack
        }, set: function (a) {
            a = a !== THREE.CullFaceBack;
            console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + a + ".");
            this.renderReverseSided = a
        }
    }
});
Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
    wrapS: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
            return this.texture.wrapS
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
            this.texture.wrapS = a
        }
    }, wrapT: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
            return this.texture.wrapT
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
            this.texture.wrapT =
                a
        }
    }, magFilter: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
            return this.texture.magFilter
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
            this.texture.magFilter = a
        }
    }, minFilter: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
            return this.texture.minFilter
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
            this.texture.minFilter =
                a
        }
    }, anisotropy: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
            return this.texture.anisotropy
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
            this.texture.anisotropy = a
        }
    }, offset: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
            return this.texture.offset
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
            this.texture.offset =
                a
        }
    }, repeat: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
            return this.texture.repeat
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
            this.texture.repeat = a
        }
    }, format: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
            return this.texture.format
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
            this.texture.format = a
        }
    }, type: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
            return this.texture.type
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
            this.texture.type = a
        }
    }, generateMipmaps: {
        get: function () {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
            return this.texture.generateMipmaps
        }, set: function (a) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
            this.texture.generateMipmaps = a
        }
    }
});
Object.assign(THREE.Audio.prototype, {
    load: function (a) {
        console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
        var b = this;
        (new THREE.AudioLoader).load(a, function (a) {
            b.setBuffer(a)
        });
        return this
    }
});
Object.assign(THREE.AudioAnalyser.prototype, {
    getData: function (a) {
        console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
        return this.getFrequencyData()
    }
});
THREE.GeometryUtils = {
    merge: function (a, b, c) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var d;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
        a.merge(b, d, c)
    }, center: function (a) {
        console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
        return a.center()
    }
};
THREE.ImageUtils = {
    crossOrigin: void 0, loadTexture: function (a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e = new THREE.TextureLoader;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a
    }, loadTextureCube: function (a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var e = new THREE.CubeTextureLoader;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a,
            c, void 0, d);
        b && (a.mapping = b);
        return a
    }, loadCompressedTexture: function () {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, loadCompressedTextureCube: function () {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
};
THREE.Projector = function () {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
    this.projectVector = function (a, b) {
        console.warn("THREE.Projector: .projectVector() is now vector.project().");
        a.project(b)
    };
    this.unprojectVector = function (a, b) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
        a.unproject(b)
    };
    this.pickingRay = function (a, b) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
};
THREE.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
    this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    this.clear = function () {
    };
    this.render = function () {
    };
    this.setClearColor = function () {
    };
    this.setSize = function () {
    }
};
THREE.CurveUtils = {
    tangentQuadraticBezier: function (a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    }, tangentCubicBezier: function (a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    }, tangentSpline: function (a, b, c, d, e) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    }, interpolate: function (a, b, c, d, e) {
        a = .5 * (c - a);
        d = .5 * (d - b);
        var f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }
};
THREE.SceneUtils = {
    createMultiMaterialObject: function (a, b) {
        for (var c = new THREE.Group, d = 0, e = b.length; d < e; d++) c.add(new THREE.Mesh(a, b[d]));
        return c
    }, detach: function (a, b, c) {
        a.applyMatrix(b.matrixWorld);
        b.remove(a);
        c.add(a)
    }, attach: function (a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a.applyMatrix(d);
        b.remove(a);
        c.add(a)
    }
};
THREE.ShapeUtils = {
    area: function (a) {
        for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++) c += a[d].x * a[e].y - a[e].x * a[d].y;
        return .5 * c
    }, triangulate: function () {
        return function (a, b) {
            var c = a.length;
            if (3 > c) return null;
            var d = [], e = [], f = [], g, h, k;
            if (0 < THREE.ShapeUtils.area(a)) for (h = 0; h < c; h++) e[h] = h; else for (h = 0; h < c; h++) e[h] = c - 1 - h;
            var l = 2 * c;
            for (h = c - 1; 2 < c;) {
                if (0 >= l--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                g = h;
                c <= g && (g = 0);
                h = g + 1;
                c <= h && (h = 0);
                k = h + 1;
                c <= k && (k = 0);
                var n;
                a:{
                    var p =
                            n = void 0, m = void 0, q = void 0, r = void 0, s = void 0, t = void 0, u = void 0, v = void 0,
                        p = a[e[g]].x, m = a[e[g]].y, q = a[e[h]].x, r = a[e[h]].y, s = a[e[k]].x, t = a[e[k]].y;
                    if (Number.EPSILON > (q - p) * (t - m) - (r - m) * (s - p)) n = !1; else {
                        var C = void 0, w = void 0, E = void 0, z = void 0, y = void 0, A = void 0, I = void 0,
                            B = void 0, F = void 0, K = void 0, F = B = I = v = u = void 0, C = s - q, w = t - r,
                            E = p - s, z = m - t, y = q - p, A = r - m;
                        for (n = 0; n < c; n++) if (u = a[e[n]].x, v = a[e[n]].y, !(u === p && v === m || u === q && v === r || u === s && v === t) && (I = u - p, B = v - m, F = u - q, K = v - r, u -= s, v -= t, F = C * K - w * F, I = y * B - A * I, B = E * v - z * u, F >= -Number.EPSILON &&
                        B >= -Number.EPSILON && I >= -Number.EPSILON)) {
                            n = !1;
                            break a
                        }
                        n = !0
                    }
                }
                if (n) {
                    d.push([a[e[g]], a[e[h]], a[e[k]]]);
                    f.push([e[g], e[h], e[k]]);
                    g = h;
                    for (k = h + 1; k < c; g++, k++) e[g] = e[k];
                    c--;
                    l = 2 * c
                }
            }
            return b ? f : d
        }
    }(), triangulateShape: function (a, b) {
        function c(a, b, c) {
            return a.x !== b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
        }

        function d(a, b, d, e, f) {
            var g = b.x - a.x, h = b.y - a.y, k = e.x - d.x, l = e.y - d.y, n = a.x - d.x, p = a.y - d.y,
                y = h * k - g * l, A = h * n - g * p;
            if (Math.abs(y) > Number.EPSILON) {
                if (0 < y) {
                    if (0 > A || A >
                        y) return [];
                    k = l * n - k * p;
                    if (0 > k || k > y) return []
                } else {
                    if (0 < A || A < y) return [];
                    k = l * n - k * p;
                    if (0 < k || k < y) return []
                }
                if (0 === k) return !f || 0 !== A && A !== y ? [a] : [];
                if (k === y) return !f || 0 !== A && A !== y ? [b] : [];
                if (0 === A) return [d];
                if (A === y) return [e];
                f = k / y;
                return [{x: a.x + f * g, y: a.y + f * h}]
            }
            if (0 !== A || l * n !== k * p) return [];
            h = 0 === g && 0 === h;
            k = 0 === k && 0 === l;
            if (h && k) return a.x !== d.x || a.y !== d.y ? [] : [a];
            if (h) return c(d, e, a) ? [a] : [];
            if (k) return c(a, b, d) ? [d] : [];
            0 !== g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), d.x < e.x ? (b = d, y = d.x, l = e, d = e.x) : (b =
                e, y = e.x, l = d, d = d.x)) : (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), d.y < e.y ? (b = d, y = d.y, l = e, d = e.y) : (b = e, y = e.y, l = d, d = d.y));
            return k <= y ? a < y ? [] : a === y ? f ? [] : [b] : a <= d ? [b, h] : [b, l] : k > d ? [] : k === d ? f ? [] : [g] : a <= d ? [g, h] : [g, l]
        }

        function e(a, b, c, d) {
            var e = b.x - a.x, f = b.y - a.y;
            b = c.x - a.x;
            c = c.y - a.y;
            var g = d.x - a.x;
            d = d.y - a.y;
            a = e * c - f * b;
            e = e * d - f * g;
            return Math.abs(a) > Number.EPSILON ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
        }

        var f, g, h, k, l, n = {};
        h = a.concat();
        f = 0;
        for (g = b.length; f < g; f++) Array.prototype.push.apply(h, b[f]);
        f = 0;
        for (g =
                 h.length; f < g; f++) l = h[f].x + ":" + h[f].y, void 0 !== n[l] && console.warn("THREE.Shape: Duplicate point", l), n[l] = f;
        f = function (a, b) {
            function c(a, b) {
                var d = h.length - 1, f = a - 1;
                0 > f && (f = d);
                var g = a + 1;
                g > d && (g = 0);
                d = e(h[a], h[f], h[g], k[b]);
                if (!d) return !1;
                d = k.length - 1;
                f = b - 1;
                0 > f && (f = d);
                g = b + 1;
                g > d && (g = 0);
                return (d = e(k[b], k[f], k[g], h[a])) ? !0 : !1
            }

            function f(a, b) {
                var c, e;
                for (c = 0; c < h.length; c++) if (e = c + 1, e %= h.length, e = d(a, b, h[c], h[e], !0), 0 < e.length) return !0;
                return !1
            }

            function g(a, c) {
                var e, f, h, k;
                for (e = 0; e < l.length; e++) for (f = b[l[e]],
                                                        h = 0; h < f.length; h++) if (k = h + 1, k %= f.length, k = d(a, c, f[h], f[k], !0), 0 < k.length) return !0;
                return !1
            }

            var h = a.concat(), k, l = [], n, p, z, y, A, I = [], B, F, K, P = 0;
            for (n = b.length; P < n; P++) l.push(P);
            B = 0;
            for (var M = 2 * l.length; 0 < l.length;) {
                M--;
                if (0 > M) {
                    console.log("Infinite Loop! Holes left:" + l.length + ", Probably Hole outside Shape!");
                    break
                }
                for (p = B; p < h.length; p++) {
                    z = h[p];
                    n = -1;
                    for (P = 0; P < l.length; P++) if (y = l[P], A = z.x + ":" + z.y + ":" + y, void 0 === I[A]) {
                        k = b[y];
                        for (F = 0; F < k.length; F++) if (y = k[F], c(p, F) && !f(z, y) && !g(z, y)) {
                            n = F;
                            l.splice(P, 1);
                            B = h.slice(0, p + 1);
                            y = h.slice(p);
                            F = k.slice(n);
                            K = k.slice(0, n + 1);
                            h = B.concat(F).concat(K).concat(y);
                            B = p;
                            break
                        }
                        if (0 <= n) break;
                        I[A] = !0
                    }
                    if (0 <= n) break
                }
            }
            return h
        }(a, b);
        var p = THREE.ShapeUtils.triangulate(f, !1);
        f = 0;
        for (g = p.length; f < g; f++) for (k = p[f], h = 0; 3 > h; h++) l = k[h].x + ":" + k[h].y, l = n[l], void 0 !== l && (k[h] = l);
        return p.concat()
    }, isClockWise: function (a) {
        return 0 > THREE.ShapeUtils.area(a)
    }, b2: function () {
        return function (a, b, c, d) {
            var e = 1 - a;
            return e * e * b + 2 * (1 - a) * a * c + a * a * d
        }
    }(), b3: function () {
        return function (a, b, c, d, e) {
            var f =
                1 - a, g = 1 - a;
            return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
        }
    }()
};
THREE.Curve = function () {
};
THREE.Curve.prototype = {
    constructor: THREE.Curve, getPoint: function (a) {
        console.warn("THREE.Curve: Warning, getPoint() not implemented!");
        return null
    }, getPointAt: function (a) {
        a = this.getUtoTmapping(a);
        return this.getPoint(a)
    }, getPoints: function (a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; b <= a; b++) c.push(this.getPoint(b / a));
        return c
    }, getSpacedPoints: function (a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; b <= a; b++) c.push(this.getPointAt(b / a));
        return c
    }, getLength: function () {
        var a = this.getLengths();
        return a[a.length - 1]
    }, getLengths: function (a) {
        a ||
        (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
        if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var b = [], c, d = this.getPoint(0), e, f = 0;
        b.push(0);
        for (e = 1; e <= a; e++) c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
        return this.cacheArcLengths = b
    }, updateArcLengths: function () {
        this.needsUpdate = !0;
        this.getLengths()
    }, getUtoTmapping: function (a, b) {
        var c = this.getLengths(), d = 0, e = c.length, f;
        f = b ? b : a * c[e - 1];
        for (var g = 0, h = e -
            1, k; g <= h;) if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k) g = d + 1; else if (0 < k) h = d - 1; else {
            h = d;
            break
        }
        d = h;
        if (c[d] === f) return d / (e - 1);
        g = c[d];
        return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
    }, getTangent: function (a) {
        var b = a - 1E-4;
        a += 1E-4;
        0 > b && (b = 0);
        1 < a && (a = 1);
        b = this.getPoint(b);
        return this.getPoint(a).clone().sub(b).normalize()
    }, getTangentAt: function (a) {
        a = this.getUtoTmapping(a);
        return this.getTangent(a)
    }
};
THREE.Curve.create = function (a, b) {
    a.prototype = Object.create(THREE.Curve.prototype);
    a.prototype.constructor = a;
    a.prototype.getPoint = b;
    return a
};
THREE.CurvePath = function () {
    this.curves = [];
    this.autoClose = !1
};
THREE.CurvePath.prototype = Object.assign(Object.create(THREE.Curve.prototype), {
    constructor: THREE.CurvePath, add: function (a) {
        this.curves.push(a)
    }, closePath: function () {
        var a = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
        a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
    }, getPoint: function (a) {
        for (var b = a * this.getLength(), c = this.getCurveLengths(), d = 0; d < c.length;) {
            if (c[d] >= b) return a = this.curves[d], b = 1 - (c[d] - b) / a.getLength(), a.getPointAt(b);
            d++
        }
        return null
    }, getLength: function () {
        var a =
            this.getCurveLengths();
        return a[a.length - 1]
    }, updateArcLengths: function () {
        this.needsUpdate = !0;
        this.cacheLengths = null;
        this.getLengths()
    }, getCurveLengths: function () {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++) b += this.curves[c].getLength(), a.push(b);
        return this.cacheLengths = a
    }, createPointsGeometry: function (a) {
        a = this.getPoints(a);
        return this.createGeometry(a)
    }, createSpacedPointsGeometry: function (a) {
        a = this.getSpacedPoints(a);
        return this.createGeometry(a)
    }, createGeometry: function (a) {
        for (var b = new THREE.Geometry, c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            b.vertices.push(new THREE.Vector3(e.x, e.y, e.z || 0))
        }
        return b
    }
});
THREE.Font = function (a) {
    this.data = a
};
Object.assign(THREE.Font.prototype, {
    generateShapes: function (a, b, c) {
        void 0 === b && (b = 100);
        void 0 === c && (c = 4);
        var d = this.data;
        a = String(a).split("");
        var e = b / d.resolution, f = 0;
        b = [];
        for (var g = 0; g < a.length; g++) {
            var h;
            h = e;
            var k = f, l = d.glyphs[a[g]] || d.glyphs["?"];
            if (l) {
                var n = new THREE.Path, p = [], m = THREE.ShapeUtils.b2, q = THREE.ShapeUtils.b3, r = void 0,
                    s = void 0, t = s = r = void 0, u = void 0, v = void 0, C = void 0, w = void 0, E = void 0,
                    u = void 0;
                if (l.o) for (var z = l._cachedOutline || (l._cachedOutline = l.o.split(" ")), y = 0, A = z.length; y < A;) switch (z[y++]) {
                    case "m":
                        r =
                            z[y++] * h + k;
                        s = z[y++] * h;
                        n.moveTo(r, s);
                        break;
                    case "l":
                        r = z[y++] * h + k;
                        s = z[y++] * h;
                        n.lineTo(r, s);
                        break;
                    case "q":
                        r = z[y++] * h + k;
                        s = z[y++] * h;
                        v = z[y++] * h + k;
                        C = z[y++] * h;
                        n.quadraticCurveTo(v, C, r, s);
                        if (u = p[p.length - 1]) for (var t = u.x, u = u.y, I = 1; I <= c; I++) {
                            var B = I / c;
                            m(B, t, v, r);
                            m(B, u, C, s)
                        }
                        break;
                    case "b":
                        if (r = z[y++] * h + k, s = z[y++] * h, v = z[y++] * h + k, C = z[y++] * h, w = z[y++] * h + k, E = z[y++] * h, n.bezierCurveTo(v, C, w, E, r, s), u = p[p.length - 1]) for (t = u.x, u = u.y, I = 1; I <= c; I++) B = I / c, q(B, t, v, w, r), q(B, u, C, E, s)
                }
                h = {offset: l.ha * h, path: n}
            } else h = void 0;
            f +=
                h.offset;
            b.push(h.path)
        }
        c = [];
        d = 0;
        for (a = b.length; d < a; d++) Array.prototype.push.apply(c, b[d].toShapes());
        return c
    }
});
THREE.Path = function (a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
};
THREE.Path.prototype = Object.assign(Object.create(THREE.CurvePath.prototype), {
    constructor: THREE.Path, fromPoints: function (a) {
        this.moveTo(a[0].x, a[0].y);
        for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
    }, moveTo: function (a, b) {
        this.actions.push({action: "moveTo", args: [a, b]})
    }, lineTo: function (a, b) {
        var c = this.actions[this.actions.length - 1].args,
            c = new THREE.LineCurve(new THREE.Vector2(c[c.length - 2], c[c.length - 1]), new THREE.Vector2(a, b));
        this.curves.push(c);
        this.actions.push({
            action: "lineTo", args: [a,
                b]
        })
    }, quadraticCurveTo: function (a, b, c, d) {
        var e = this.actions[this.actions.length - 1].args,
            e = new THREE.QuadraticBezierCurve(new THREE.Vector2(e[e.length - 2], e[e.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
        this.curves.push(e);
        this.actions.push({action: "quadraticCurveTo", args: [a, b, c, d]})
    }, bezierCurveTo: function (a, b, c, d, e, f) {
        var g = this.actions[this.actions.length - 1].args,
            g = new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length - 2], g[g.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d),
                new THREE.Vector2(e, f));
        this.curves.push(g);
        this.actions.push({action: "bezierCurveTo", args: [a, b, c, d, e, f]})
    }, splineThru: function (a) {
        var b = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args,
            c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
        Array.prototype.push.apply(c, a);
        c = new THREE.SplineCurve(c);
        this.curves.push(c);
        c = a[a.length - 1];
        b.push(c.x);
        b.push(c.y);
        this.actions.push({action: "splineThru", args: b})
    }, arc: function (a, b, c, d, e, f) {
        var g = this.actions[this.actions.length -
        1].args;
        this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
    }, absarc: function (a, b, c, d, e, f) {
        this.absellipse(a, b, c, c, d, e, f)
    }, ellipse: function (a, b, c, d, e, f, g, h) {
        var k = this.actions[this.actions.length - 1].args;
        this.absellipse(a + k[k.length - 2], b + k[k.length - 1], c, d, e, f, g, h)
    }, absellipse: function (a, b, c, d, e, f, g, h) {
        var k = [a, b, c, d, e, f, g, h || 0];
        a = new THREE.EllipseCurve(a, b, c, d, e, f, g, h);
        this.curves.push(a);
        a = a.getPoint(1);
        k.push(a.x);
        k.push(a.y);
        this.actions.push({action: "ellipse", args: k})
    }, getSpacedPoints: function (a) {
        a ||
        (a = 40);
        for (var b = [], c = 0; c < a; c++) b.push(this.getPoint(c / a));
        this.autoClose && b.push(b[0]);
        return b
    }, getPoints: function (a) {
        a = a || 12;
        for (var b = THREE.ShapeUtils.b2, c = THREE.ShapeUtils.b3, d = [], e, f, g, h, k, l, n, p, m, q, r = 0, s = this.actions.length; r < s; r++) {
            m = this.actions[r];
            var t = m.args;
            switch (m.action) {
                case "moveTo":
                    d.push(new THREE.Vector2(t[0], t[1]));
                    break;
                case "lineTo":
                    d.push(new THREE.Vector2(t[0], t[1]));
                    break;
                case "quadraticCurveTo":
                    e = t[2];
                    f = t[3];
                    k = t[0];
                    l = t[1];
                    0 < d.length ? (m = d[d.length - 1], n = m.x, p = m.y) : (m = this.actions[r -
                    1].args, n = m[m.length - 2], p = m[m.length - 1]);
                    for (t = 1; t <= a; t++) q = t / a, m = b(q, n, k, e), q = b(q, p, l, f), d.push(new THREE.Vector2(m, q));
                    break;
                case "bezierCurveTo":
                    e = t[4];
                    f = t[5];
                    k = t[0];
                    l = t[1];
                    g = t[2];
                    h = t[3];
                    0 < d.length ? (m = d[d.length - 1], n = m.x, p = m.y) : (m = this.actions[r - 1].args, n = m[m.length - 2], p = m[m.length - 1]);
                    for (t = 1; t <= a; t++) q = t / a, m = c(q, n, k, g, e), q = c(q, p, l, h, f), d.push(new THREE.Vector2(m, q));
                    break;
                case "splineThru":
                    m = this.actions[r - 1].args;
                    q = [new THREE.Vector2(m[m.length - 2], m[m.length - 1])];
                    m = a * t[0].length;
                    q = q.concat(t[0]);
                    q = new THREE.SplineCurve(q);
                    for (t = 1; t <= m; t++) d.push(q.getPointAt(t / m));
                    break;
                case "arc":
                    e = t[0];
                    f = t[1];
                    l = t[2];
                    g = t[3];
                    m = t[4];
                    k = !!t[5];
                    n = m - g;
                    p = 2 * a;
                    for (t = 1; t <= p; t++) q = t / p, k || (q = 1 - q), q = g + q * n, m = e + l * Math.cos(q), q = f + l * Math.sin(q), d.push(new THREE.Vector2(m, q));
                    break;
                case "ellipse":
                    e = t[0];
                    f = t[1];
                    l = t[2];
                    h = t[3];
                    g = t[4];
                    m = t[5];
                    k = !!t[6];
                    var u = t[7];
                    n = m - g;
                    p = 2 * a;
                    var v, C;
                    0 !== u && (v = Math.cos(u), C = Math.sin(u));
                    for (t = 1; t <= p; t++) {
                        q = t / p;
                        k || (q = 1 - q);
                        q = g + q * n;
                        m = e + l * Math.cos(q);
                        q = f + h * Math.sin(q);
                        if (0 !== u) {
                            var w = m;
                            m = (w - e) * v - (q -
                                f) * C + e;
                            q = (w - e) * C + (q - f) * v + f
                        }
                        d.push(new THREE.Vector2(m, q))
                    }
            }
        }
        a = d[d.length - 1];
        Math.abs(a.x - d[0].x) < Number.EPSILON && Math.abs(a.y - d[0].y) < Number.EPSILON && d.splice(d.length - 1, 1);
        this.autoClose && d.push(d[0]);
        return d
    }, toShapes: function (a, b) {
        function c(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c], f = new THREE.Shape;
                f.actions = e.actions;
                f.curves = e.curves;
                b.push(f)
            }
            return b
        }

        function d(a, b) {
            for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
                var g = b[e], h = b[f], k = h.x - g.x, l = h.y - g.y;
                if (Math.abs(l) > Number.EPSILON) {
                    if (0 >
                    l && (g = b[f], k = -k, h = b[e], l = -l), !(a.y < g.y || a.y > h.y)) if (a.y === g.y) {
                        if (a.x === g.x) return !0
                    } else {
                        e = l * (a.x - g.x) - k * (a.y - g.y);
                        if (0 === e) return !0;
                        0 > e || (d = !d)
                    }
                } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0
            }
            return d
        }

        var e = THREE.ShapeUtils.isClockWise, f = function (a) {
            for (var b = [], c = new THREE.Path, d = 0, e = a.length; d < e; d++) {
                var f = a[d], g = f.args, f = f.action;
                "moveTo" === f && 0 !== c.actions.length && (b.push(c), c = new THREE.Path);
                c[f].apply(c, g)
            }
            0 !== c.actions.length && b.push(c);
            return b
        }(this.actions);
        if (0 ===
            f.length) return [];
        if (!0 === b) return c(f);
        var g, h, k, l = [];
        if (1 === f.length) return h = f[0], k = new THREE.Shape, k.actions = h.actions, k.curves = h.curves, l.push(k), l;
        var n = !e(f[0].getPoints()), n = a ? !n : n;
        k = [];
        var p = [], m = [], q = 0, r;
        p[q] = void 0;
        m[q] = [];
        for (var s = 0, t = f.length; s < t; s++) h = f[s], r = h.getPoints(), g = e(r), (g = a ? !g : g) ? (!n && p[q] && q++, p[q] = {
            s: new THREE.Shape,
            p: r
        }, p[q].s.actions = h.actions, p[q].s.curves = h.curves, n && q++, m[q] = []) : m[q].push({h: h, p: r[0]});
        if (!p[0]) return c(f);
        if (1 < p.length) {
            s = !1;
            h = [];
            e = 0;
            for (f = p.length; e <
            f; e++) k[e] = [];
            e = 0;
            for (f = p.length; e < f; e++) for (g = m[e], n = 0; n < g.length; n++) {
                q = g[n];
                r = !0;
                for (t = 0; t < p.length; t++) d(q.p, p[t].p) && (e !== t && h.push({
                    froms: e,
                    tos: t,
                    hole: n
                }), r ? (r = !1, k[t].push(q)) : s = !0);
                r && k[e].push(q)
            }
            0 < h.length && (s || (m = k))
        }
        s = 0;
        for (e = p.length; s < e; s++) for (k = p[s].s, l.push(k), h = m[s], f = 0, g = h.length; f < g; f++) k.holes.push(h[f].h);
        return l
    }
});
THREE.Shape = function () {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = Object.assign(Object.create(THREE.Path.prototype), {
    constructor: THREE.Shape,
    extrude: function (a) {
        return new THREE.ExtrudeGeometry(this, a)
    },
    makeGeometry: function (a) {
        return new THREE.ShapeGeometry(this, a)
    },
    getPointsHoles: function (a) {
        for (var b = [], c = 0, d = this.holes.length; c < d; c++) b[c] = this.holes[c].getPoints(a);
        return b
    },
    extractAllPoints: function (a) {
        return {shape: this.getPoints(a), holes: this.getPointsHoles(a)}
    },
    extractPoints: function (a) {
        return this.extractAllPoints(a)
    }
});
THREE.LineCurve = function (a, b) {
    this.v1 = a;
    this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function (a) {
    var b = this.v2.clone().sub(this.v1);
    b.multiplyScalar(a).add(this.v1);
    return b
};
THREE.LineCurve.prototype.getPointAt = function (a) {
    return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function (a) {
    return this.v2.clone().sub(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function (a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x), b(a, this.v0.y, this.v1.y, this.v2.y))
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
    var b = THREE.CurveUtils.tangentQuadraticBezier;
    return (new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x), b(a, this.v0.y, this.v1.y, this.v2.y))).normalize()
};
THREE.CubicBezierCurve = function (a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function (a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
};
THREE.CubicBezierCurve.prototype.getTangent = function (a) {
    var b = THREE.CurveUtils.tangentCubicBezier;
    return (new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y))).normalize()
};
THREE.SplineCurve = function (a) {
    this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function (a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 === c ? c : c - 1], e = b[c], f = b[c > b.length - 2 ? b.length - 1 : c + 1],
        b = b[c > b.length - 3 ? b.length - 1 : c + 2], c = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(c(d.x, e.x, f.x, b.x, a), c(d.y, e.y, f.y, b.y, a))
};
THREE.EllipseCurve = function (a, b, c, d, e, f, g, h) {
    this.aX = a;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = f;
    this.aClockwise = g;
    this.aRotation = h || 0
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint = function (a) {
    var b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI);
    b > 2 * Math.PI && (b -= 2 * Math.PI);
    b = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
    a = this.aX + this.xRadius * Math.cos(b);
    var c = this.aY + this.yRadius * Math.sin(b);
    if (0 !== this.aRotation) {
        var b = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a;
        a = (e - this.aX) * b - (c - this.aY) * d + this.aX;
        c = (e - this.aX) * d + (c - this.aY) * b + this.aY
    }
    return new THREE.Vector2(a, c)
};
THREE.ArcCurve = function (a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
    this.v1 = a;
    this.v2 = b
}, function (a) {
    var b = new THREE.Vector3;
    b.subVectors(this.v2, this.v1);
    b.multiplyScalar(a);
    b.add(this.v1);
    return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}, function (a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x), b(a, this.v0.y, this.v1.y, this.v2.y), b(a, this.v0.z, this.v1.z, this.v2.z))
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}, function (a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x), b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y), b(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");
    this.points = void 0 == a ? [] : a
}, function (a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 == c ? c : c - 1], e = b[c], f = b[c > b.length - 2 ? b.length - 1 : c + 1],
        b = b[c > b.length - 3 ? b.length - 1 : c + 2], c = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(c(d.x, e.x, f.x, b.x, a), c(d.y, e.y, f.y, b.y, a), c(d.z, e.z, f.z, b.z, a))
});
THREE.CatmullRomCurve3 = function () {
    function a() {
    }

    var b = new THREE.Vector3, c = new a, d = new a, e = new a;
    a.prototype.init = function (a, b, c, d) {
        this.c0 = a;
        this.c1 = c;
        this.c2 = -3 * a + 3 * b - 2 * c - d;
        this.c3 = 2 * a - 2 * b + c + d
    };
    a.prototype.initNonuniformCatmullRom = function (a, b, c, d, e, n, p) {
        a = ((b - a) / e - (c - a) / (e + n) + (c - b) / n) * n;
        d = ((c - b) / n - (d - b) / (n + p) + (d - c) / p) * n;
        this.init(b, c, a, d)
    };
    a.prototype.initCatmullRom = function (a, b, c, d, e) {
        this.init(b, c, e * (c - a), e * (d - b))
    };
    a.prototype.calc = function (a) {
        var b = a * a;
        return this.c0 + this.c1 * a + this.c2 * b + this.c3 *
            b * a
    };
    return THREE.Curve.create(function (a) {
        this.points = a || [];
        this.closed = !1
    }, function (a) {
        var g = this.points, h, k;
        k = g.length;
        2 > k && console.log("duh, you need at least 2 points");
        a *= k - (this.closed ? 0 : 1);
        h = Math.floor(a);
        a -= h;
        this.closed ? h += 0 < h ? 0 : (Math.floor(Math.abs(h) / g.length) + 1) * g.length : 0 === a && h === k - 1 && (h = k - 2, a = 1);
        var l, n, p;
        this.closed || 0 < h ? l = g[(h - 1) % k] : (b.subVectors(g[0], g[1]).add(g[0]), l = b);
        n = g[h % k];
        p = g[(h + 1) % k];
        this.closed || h + 2 < k ? g = g[(h + 2) % k] : (b.subVectors(g[k - 1], g[k - 2]).add(g[k - 1]), g = b);
        if (void 0 ===
            this.type || "centripetal" === this.type || "chordal" === this.type) {
            var m = "chordal" === this.type ? .5 : .25;
            k = Math.pow(l.distanceToSquared(n), m);
            h = Math.pow(n.distanceToSquared(p), m);
            m = Math.pow(p.distanceToSquared(g), m);
            1E-4 > h && (h = 1);
            1E-4 > k && (k = h);
            1E-4 > m && (m = h);
            c.initNonuniformCatmullRom(l.x, n.x, p.x, g.x, k, h, m);
            d.initNonuniformCatmullRom(l.y, n.y, p.y, g.y, k, h, m);
            e.initNonuniformCatmullRom(l.z, n.z, p.z, g.z, k, h, m)
        } else "catmullrom" === this.type && (k = void 0 !== this.tension ? this.tension : .5, c.initCatmullRom(l.x, n.x, p.x, g.x,
            k), d.initCatmullRom(l.y, n.y, p.y, g.y, k), e.initCatmullRom(l.z, n.z, p.z, g.z, k));
        return new THREE.Vector3(c.calc(a), d.calc(a), e.calc(a))
    })
}();
THREE.ClosedSplineCurve3 = function (a) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3.");
    THREE.CatmullRomCurve3.call(this, a);
    this.type = "catmullrom";
    this.closed = !0
};
THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype);
THREE.BoxGeometry = function (a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "BoxGeometry";
    this.parameters = {width: a, height: b, depth: c, widthSegments: d, heightSegments: e, depthSegments: f};
    this.fromBufferGeometry(new THREE.BoxBufferGeometry(a, b, c, d, e, f));
    this.mergeVertices()
};
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry;
THREE.CubeGeometry = THREE.BoxGeometry;
THREE.BoxBufferGeometry = function (a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, k, l, K, P) {
        var M = f / l, H = g / K, L = f / 2, O = g / 2, N = k / 2;
        g = l + 1;
        for (var Q = K + 1, J = f = 0, D = new THREE.Vector3, G = 0; G < Q; G++) for (var aa = G * H - O, T = 0; T < g; T++) D[a] = (T * M - L) * d, D[b] = aa * e, D[c] = N, p[r] = D.x, p[r + 1] = D.y, p[r + 2] = D.z, D[a] = 0, D[b] = 0, D[c] = 0 < k ? 1 : -1, m[r] = D.x, m[r + 1] = D.y, m[r + 2] = D.z, q[s] = T / l, q[s + 1] = 1 - G / K, r += 3, s += 2, f += 1;
        for (G = 0; G < K; G++) for (T = 0; T < l; T++) a = u + T + g * (G + 1), b = u + (T + 1) + g * (G + 1), c = u + (T + 1) + g * G, n[t] = u + T + g * G, n[t + 1] = a, n[t + 2] = c, n[t + 3] = a, n[t + 4] = b, n[t + 5] = c, t += 6,
            J += 6;
        h.addGroup(v, J, P);
        v += J;
        u += f
    }

    THREE.BufferGeometry.call(this);
    this.type = "BoxBufferGeometry";
    this.parameters = {width: a, height: b, depth: c, widthSegments: d, heightSegments: e, depthSegments: f};
    var h = this;
    d = Math.floor(d) || 1;
    e = Math.floor(e) || 1;
    f = Math.floor(f) || 1;
    var k = function (a, b, c) {
            a = 0 + (a + 1) * (b + 1) * 2 + (a + 1) * (c + 1) * 2;
            return a += (c + 1) * (b + 1) * 2
        }(d, e, f), l = function (a, b, c) {
            a = 0 + a * b * 2 + a * c * 2;
            a += c * b * 2;
            return 6 * a
        }(d, e, f), n = new (65535 < l ? Uint32Array : Uint16Array)(l), p = new Float32Array(3 * k),
        m = new Float32Array(3 * k), q = new Float32Array(2 *
        k), r = 0, s = 0, t = 0, u = 0, v = 0;
    g("z", "y", "x", -1, -1, c, b, a, f, e, 0);
    g("z", "y", "x", 1, -1, c, b, -a, f, e, 1);
    g("x", "z", "y", 1, 1, a, c, b, d, f, 2);
    g("x", "z", "y", 1, -1, a, c, -b, d, f, 3);
    g("x", "y", "z", 1, -1, a, b, c, d, e, 4);
    g("x", "y", "z", -1, -1, a, b, -c, d, e, 5);
    this.setIndex(new THREE.BufferAttribute(n, 1));
    this.addAttribute("position", new THREE.BufferAttribute(p, 3));
    this.addAttribute("normal", new THREE.BufferAttribute(m, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(q, 2))
};
THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry;
THREE.CircleGeometry = function (a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "CircleGeometry";
    this.parameters = {radius: a, segments: b, thetaStart: c, thetaLength: d};
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(a, b, c, d))
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry;
THREE.CircleBufferGeometry = function (a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = {radius: a, segments: b, thetaStart: c, thetaLength: d};
    a = a || 50;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = b + 2, f = new Float32Array(3 * e), g = new Float32Array(3 * e), e = new Float32Array(2 * e);
    g[2] = 1;
    e[0] = .5;
    e[1] = .5;
    for (var h = 0, k = 3, l = 2; h <= b; h++, k += 3, l += 2) {
        var n = c + h / b * d;
        f[k] = a * Math.cos(n);
        f[k + 1] = a * Math.sin(n);
        g[k + 2] = 1;
        e[l] = (f[k] / a + 1) / 2;
        e[l + 1] = (f[k + 1] / a + 1) / 2
    }
    c =
        [];
    for (k = 1; k <= b; k++) c.push(k, k + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(c), 1));
    this.addAttribute("position", new THREE.BufferAttribute(f, 3));
    this.addAttribute("normal", new THREE.BufferAttribute(g, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(e, 2));
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry;
THREE.CylinderBufferGeometry = function (a, b, c, d, e, f, g, h) {
    function k(c) {
        var e, f, k, m = new THREE.Vector2, n = new THREE.Vector3, p = 0, C = !0 === c ? a : b, M = !0 === c ? 1 : -1;
        f = u;
        for (e = 1; e <= d; e++) r.setXYZ(u, 0, w * M, 0), s.setXYZ(u, 0, M, 0), m.x = .5, m.y = .5, t.setXY(u, m.x, m.y), u++;
        k = u;
        for (e = 0; e <= d; e++) {
            var H = e / d * h + g, L = Math.cos(H), H = Math.sin(H);
            n.x = C * H;
            n.y = w * M;
            n.z = C * L;
            r.setXYZ(u, n.x, n.y, n.z);
            s.setXYZ(u, 0, M, 0);
            m.x = .5 * L + .5;
            m.y = .5 * H * M + .5;
            t.setXY(u, m.x, m.y);
            u++
        }
        for (e = 0; e < d; e++) m = f + e, n = k + e, !0 === c ? (q.setX(v, n), v++, q.setX(v, n + 1)) : (q.setX(v,
            n + 1), v++, q.setX(v, n)), v++, q.setX(v, m), v++, p += 3;
        l.addGroup(E, p, !0 === c ? 1 : 2);
        E += p
    }

    THREE.BufferGeometry.call(this);
    this.type = "CylinderBufferGeometry";
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    };
    var l = this;
    a = void 0 !== a ? a : 20;
    b = void 0 !== b ? b : 20;
    c = void 0 !== c ? c : 100;
    d = Math.floor(d) || 8;
    e = Math.floor(e) || 1;
    f = void 0 !== f ? f : !1;
    g = void 0 !== g ? g : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var n = 0;
    !1 === f && (0 < a && n++, 0 < b && n++);
    var p = function () {
            var a = (d + 1) *
                (e + 1);
            !1 === f && (a += (d + 1) * n + d * n);
            return a
        }(), m = function () {
            var a = d * e * 6;
            !1 === f && (a += d * n * 3);
            return a
        }(), q = new THREE.BufferAttribute(new (65535 < m ? Uint32Array : Uint16Array)(m), 1),
        r = new THREE.BufferAttribute(new Float32Array(3 * p), 3),
        s = new THREE.BufferAttribute(new Float32Array(3 * p), 3),
        t = new THREE.BufferAttribute(new Float32Array(2 * p), 2), u = 0, v = 0, C = [], w = c / 2, E = 0;
    (function () {
        var f, k, m = new THREE.Vector3, n = new THREE.Vector3, p = 0, F = (b - a) / c;
        for (k = 0; k <= e; k++) {
            var K = [], P = k / e, M = P * (b - a) + a;
            for (f = 0; f <= d; f++) {
                var H = f / d;
                n.x =
                    M * Math.sin(H * h + g);
                n.y = -P * c + w;
                n.z = M * Math.cos(H * h + g);
                r.setXYZ(u, n.x, n.y, n.z);
                m.copy(n);
                if (0 === a && 0 === k || 0 === b && k === e) m.x = Math.sin(H * h + g), m.z = Math.cos(H * h + g);
                m.setY(Math.sqrt(m.x * m.x + m.z * m.z) * F).normalize();
                s.setXYZ(u, m.x, m.y, m.z);
                t.setXY(u, H, 1 - P);
                K.push(u);
                u++
            }
            C.push(K)
        }
        for (f = 0; f < d; f++) for (k = 0; k < e; k++) m = C[k + 1][f], n = C[k + 1][f + 1], F = C[k][f + 1], q.setX(v, C[k][f]), v++, q.setX(v, m), v++, q.setX(v, F), v++, q.setX(v, m), v++, q.setX(v, n), v++, q.setX(v, F), v++, p += 6;
        l.addGroup(E, p, 0);
        E += p
    })();
    !1 === f && (0 < a && k(!0), 0 < b && k(!1));
    this.setIndex(q);
    this.addAttribute("position", r);
    this.addAttribute("normal", s);
    this.addAttribute("uv", t)
};
THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry;
THREE.CylinderGeometry = function (a, b, c, d, e, f, g, h) {
    THREE.Geometry.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    };
    this.fromBufferGeometry(new THREE.CylinderBufferGeometry(a, b, c, d, e, f, g, h));
    this.mergeVertices()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.ConeBufferGeometry = function (a, b, c, d, e, f, g) {
    THREE.CylinderBufferGeometry.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeBufferGeometry";
    this.parameters = {radius: a, height: b, radialSegments: c, heightSegments: d, thetaStart: f, thetaLength: g}
};
THREE.ConeBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.ConeBufferGeometry.prototype.constructor = THREE.ConeBufferGeometry;
THREE.ConeGeometry = function (a, b, c, d, e, f, g) {
    THREE.CylinderGeometry.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeGeometry";
    this.parameters = {
        radius: a,
        height: b,
        radialSegments: c,
        heightSegments: d,
        openEnded: e,
        thetaStart: f,
        thetaLength: g
    }
};
THREE.ConeGeometry.prototype = Object.create(THREE.CylinderGeometry.prototype);
THREE.ConeGeometry.prototype.constructor = THREE.ConeGeometry;
THREE.EdgesGeometry = function (a, b) {
    function c(a, b) {
        return a - b
    }

    THREE.BufferGeometry.call(this);
    var d = Math.cos(THREE.Math.DEG2RAD * (void 0 !== b ? b : 1)), e = [0, 0], f = {}, g = ["a", "b", "c"], h;
    a instanceof THREE.BufferGeometry ? (h = new THREE.Geometry, h.fromBufferGeometry(a)) : h = a.clone();
    h.mergeVertices();
    h.computeFaceNormals();
    var k = h.vertices;
    h = h.faces;
    for (var l = 0, n = h.length; l < n; l++) for (var p = h[l], m = 0; 3 > m; m++) {
        e[0] = p[g[m]];
        e[1] = p[g[(m + 1) % 3]];
        e.sort(c);
        var q = e.toString();
        void 0 === f[q] ? f[q] = {
            vert1: e[0], vert2: e[1], face1: l,
            face2: void 0
        } : f[q].face2 = l
    }
    e = [];
    for (q in f) if (g = f[q], void 0 === g.face2 || h[g.face1].normal.dot(h[g.face2].normal) <= d) l = k[g.vert1], e.push(l.x), e.push(l.y), e.push(l.z), l = k[g.vert2], e.push(l.x), e.push(l.y), e.push(l.z);
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(e), 3))
};
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry;
THREE.ExtrudeGeometry = function (a, b) {
    "undefined" !== typeof a && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", a = Array.isArray(a) ? a : [a], this.addShapeList(a, b), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
    for (var c = a.length, d = 0; d < c; d++) this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
    function c(a, b, c) {
        b || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return b.clone().multiplyScalar(c).add(a)
    }

    function d(a, b, c) {
        var d = 1, d = a.x - b.x, e = a.y - b.y, f = c.x - a.x, g = c.y - a.y, h = d * d + e * e;
        if (Math.abs(d * g - e * f) > Number.EPSILON) {
            var k = Math.sqrt(h), l = Math.sqrt(f * f + g * g), h = b.x - e / k;
            b = b.y + d / k;
            f = ((c.x - g / l - h) * g - (c.y + f / l - b) * f) / (d * g - e * f);
            c = h + d * f - a.x;
            a = b + e * f - a.y;
            d = c * c + a * a;
            if (2 >= d) return new THREE.Vector2(c, a);
            d = Math.sqrt(d / 2)
        } else a = !1, d > Number.EPSILON ?
            f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (c = -e, a = d, d = Math.sqrt(h)) : (c = d, a = e, d = Math.sqrt(h / 2));
        return new THREE.Vector2(c / d, a / d)
    }

    function e(a, b) {
        var c, d;
        for (G = a.length; 0 <= --G;) {
            c = G;
            d = G - 1;
            0 > d && (d = a.length - 1);
            for (var e = 0, f = q + 2 * n, e = 0; e < f; e++) {
                var g = Q * e, h = Q * (e + 1), k = b + c + g, g = b + d + g, l = b + d + h, h = b + c + h, k = k + B,
                    g = g + B, l = l + B, h = h + B;
                I.faces.push(new THREE.Face3(k, g, h, null, null, 1));
                I.faces.push(new THREE.Face3(g, l, h, null, null, 1));
                k = u.generateSideWallUV(I,
                    k, g, l, h);
                I.faceVertexUvs[0].push([k[0], k[1], k[3]]);
                I.faceVertexUvs[0].push([k[1], k[2], k[3]])
            }
        }
    }

    function f(a, b, c) {
        I.vertices.push(new THREE.Vector3(a, b, c))
    }

    function g(a, b, c) {
        a += B;
        b += B;
        c += B;
        I.faces.push(new THREE.Face3(a, b, c, null, null, 0));
        a = u.generateTopUV(I, a, b, c);
        I.faceVertexUvs[0].push(a)
    }

    var h = void 0 !== b.amount ? b.amount : 100, k = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
        l = void 0 !== b.bevelSize ? b.bevelSize : k - 2, n = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
        p = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
        m = void 0 !== b.curveSegments ? b.curveSegments : 12, q = void 0 !== b.steps ? b.steps : 1, r = b.extrudePath,
        s, t = !1, u = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator, v, C, w, E;
    r && (s = r.getSpacedPoints(q), t = !0, p = !1, v = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(r, q, !1), C = new THREE.Vector3, w = new THREE.Vector3, E = new THREE.Vector3);
    p || (l = k = n = 0);
    var z, y, A, I = this, B = this.vertices.length, r = a.extractPoints(m), m = r.shape, F = r.holes;
    if (r = !THREE.ShapeUtils.isClockWise(m)) {
        m = m.reverse();
        y = 0;
        for (A = F.length; y < A; y++) z = F[y], THREE.ShapeUtils.isClockWise(z) && (F[y] = z.reverse());
        r = !1
    }
    var K = THREE.ShapeUtils.triangulateShape(m, F), P = m;
    y = 0;
    for (A = F.length; y < A; y++) z = F[y], m = m.concat(z);
    var M, H, L, O, N, Q = m.length, J, D = K.length, r = [], G = 0;
    L = P.length;
    M = L - 1;
    for (H = G + 1; G < L; G++, M++, H++) M === L && (M = 0), H === L && (H = 0), r[G] = d(P[G], P[M], P[H]);
    var aa = [], T, X = r.concat();
    y = 0;
    for (A = F.length; y < A; y++) {
        z = F[y];
        T = [];
        G = 0;
        L = z.length;
        M = L - 1;
        for (H = G + 1; G < L; G++, M++, H++) M === L && (M = 0), H === L && (H = 0), T[G] = d(z[G], z[M], z[H]);
        aa.push(T);
        X =
            X.concat(T)
    }
    for (M = 0; M < n; M++) {
        L = M / n;
        O = k * (1 - L);
        H = l * Math.sin(L * Math.PI / 2);
        G = 0;
        for (L = P.length; G < L; G++) N = c(P[G], r[G], H), f(N.x, N.y, -O);
        y = 0;
        for (A = F.length; y < A; y++) for (z = F[y], T = aa[y], G = 0, L = z.length; G < L; G++) N = c(z[G], T[G], H), f(N.x, N.y, -O)
    }
    H = l;
    for (G = 0; G < Q; G++) N = p ? c(m[G], X[G], H) : m[G], t ? (w.copy(v.normals[0]).multiplyScalar(N.x), C.copy(v.binormals[0]).multiplyScalar(N.y), E.copy(s[0]).add(w).add(C), f(E.x, E.y, E.z)) : f(N.x, N.y, 0);
    for (L = 1; L <= q; L++) for (G = 0; G < Q; G++) N = p ? c(m[G], X[G], H) : m[G], t ? (w.copy(v.normals[L]).multiplyScalar(N.x),
        C.copy(v.binormals[L]).multiplyScalar(N.y), E.copy(s[L]).add(w).add(C), f(E.x, E.y, E.z)) : f(N.x, N.y, h / q * L);
    for (M = n - 1; 0 <= M; M--) {
        L = M / n;
        O = k * (1 - L);
        H = l * Math.sin(L * Math.PI / 2);
        G = 0;
        for (L = P.length; G < L; G++) N = c(P[G], r[G], H), f(N.x, N.y, h + O);
        y = 0;
        for (A = F.length; y < A; y++) for (z = F[y], T = aa[y], G = 0, L = z.length; G < L; G++) N = c(z[G], T[G], H), t ? f(N.x, N.y + s[q - 1].y, s[q - 1].x + O) : f(N.x, N.y, h + O)
    }
    (function () {
        if (p) {
            var a;
            a = 0 * Q;
            for (G = 0; G < D; G++) J = K[G], g(J[2] + a, J[1] + a, J[0] + a);
            a = q + 2 * n;
            a *= Q;
            for (G = 0; G < D; G++) J = K[G], g(J[0] + a, J[1] + a, J[2] + a)
        } else {
            for (G =
                     0; G < D; G++) J = K[G], g(J[2], J[1], J[0]);
            for (G = 0; G < D; G++) J = K[G], g(J[0] + Q * q, J[1] + Q * q, J[2] + Q * q)
        }
    })();
    (function () {
        var a = 0;
        e(P, a);
        a += P.length;
        y = 0;
        for (A = F.length; y < A; y++) z = F[y], e(z, a), a += z.length
    })()
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (a, b, c, d) {
        a = a.vertices;
        b = a[b];
        c = a[c];
        d = a[d];
        return [new THREE.Vector2(b.x, b.y), new THREE.Vector2(c.x, c.y), new THREE.Vector2(d.x, d.y)]
    }, generateSideWallUV: function (a, b, c, d, e) {
        a = a.vertices;
        b = a[b];
        c = a[c];
        d = a[d];
        e = a[e];
        return .01 > Math.abs(b.y - c.y) ? [new THREE.Vector2(b.x, 1 - b.z), new THREE.Vector2(c.x, 1 - c.z), new THREE.Vector2(d.x, 1 - d.z), new THREE.Vector2(e.x, 1 - e.z)] : [new THREE.Vector2(b.y, 1 - b.z), new THREE.Vector2(c.y, 1 - c.z), new THREE.Vector2(d.y,
            1 - d.z), new THREE.Vector2(e.y, 1 - e.z)]
    }
};
THREE.ShapeGeometry = function (a, b) {
    THREE.Geometry.call(this);
    this.type = "ShapeGeometry";
    !1 === Array.isArray(a) && (a = [a]);
    this.addShapeList(a, b);
    this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry;
THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
    for (var c = 0, d = a.length; c < d; c++) this.addShape(a[c], b);
    return this
};
THREE.ShapeGeometry.prototype.addShape = function (a, b) {
    void 0 === b && (b = {});
    var c = b.material, d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, e, f, g,
        h = this.vertices.length;
    e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var k = e.shape, l = e.holes;
    if (!THREE.ShapeUtils.isClockWise(k)) for (k = k.reverse(), e = 0, f = l.length; e < f; e++) g = l[e], THREE.ShapeUtils.isClockWise(g) && (l[e] = g.reverse());
    var n = THREE.ShapeUtils.triangulateShape(k, l);
    e = 0;
    for (f = l.length; e < f; e++) g = l[e], k = k.concat(g);
    l = k.length;
    f = n.length;
    for (e = 0; e < l; e++) g = k[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
    for (e = 0; e < f; e++) l = n[e], k = l[0] + h, g = l[1] + h, l = l[2] + h, this.faces.push(new THREE.Face3(k, g, l, null, null, c)), this.faceVertexUvs[0].push(d.generateTopUV(this, k, g, l))
};
THREE.LatheBufferGeometry = function (a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "LatheBufferGeometry";
    this.parameters = {points: a, segments: b, phiStart: c, phiLength: d};
    b = Math.floor(b) || 12;
    c = c || 0;
    d = d || 2 * Math.PI;
    d = THREE.Math.clamp(d, 0, 2 * Math.PI);
    for (var e = (b + 1) * a.length, f = b * a.length * 6, g = new THREE.BufferAttribute(new (65535 < f ? Uint32Array : Uint16Array)(f), 1), h = new THREE.BufferAttribute(new Float32Array(3 * e), 3), k = new THREE.BufferAttribute(new Float32Array(2 * e), 2), l = 0, n = 0, p = 1 / b, m = new THREE.Vector3, q = new THREE.Vector2,
             e = 0; e <= b; e++) for (var f = c + e * p * d, r = Math.sin(f), s = Math.cos(f), f = 0; f <= a.length - 1; f++) m.x = a[f].x * r, m.y = a[f].y, m.z = a[f].x * s, h.setXYZ(l, m.x, m.y, m.z), q.x = e / b, q.y = f / (a.length - 1), k.setXY(l, q.x, q.y), l++;
    for (e = 0; e < b; e++) for (f = 0; f < a.length - 1; f++) c = f + e * a.length, l = c + a.length, p = c + a.length + 1, m = c + 1, g.setX(n, c), n++, g.setX(n, l), n++, g.setX(n, m), n++, g.setX(n, l), n++, g.setX(n, p), n++, g.setX(n, m), n++;
    this.setIndex(g);
    this.addAttribute("position", h);
    this.addAttribute("uv", k);
    this.computeVertexNormals();
    if (d === 2 * Math.PI) for (d =
                                    this.attributes.normal.array, g = new THREE.Vector3, h = new THREE.Vector3, k = new THREE.Vector3, c = b * a.length * 3, f = e = 0; e < a.length; e++, f += 3) g.x = d[f + 0], g.y = d[f + 1], g.z = d[f + 2], h.x = d[c + f + 0], h.y = d[c + f + 1], h.z = d[c + f + 2], k.addVectors(g, h).normalize(), d[f + 0] = d[c + f + 0] = k.x, d[f + 1] = d[c + f + 1] = k.y, d[f + 2] = d[c + f + 2] = k.z
};
THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry;
THREE.LatheGeometry = function (a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "LatheGeometry";
    this.parameters = {points: a, segments: b, phiStart: c, phiLength: d};
    this.fromBufferGeometry(new THREE.LatheBufferGeometry(a, b, c, d));
    this.mergeVertices()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.PlaneGeometry = function (a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {width: a, height: b, widthSegments: c, heightSegments: d};
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a, b, c, d))
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.PlaneBufferGeometry = function (a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {width: a, height: b, widthSegments: c, heightSegments: d};
    var e = a / 2, f = b / 2;
    c = Math.floor(c) || 1;
    d = Math.floor(d) || 1;
    var g = c + 1, h = d + 1, k = a / c, l = b / d;
    b = new Float32Array(g * h * 3);
    a = new Float32Array(g * h * 3);
    for (var n = new Float32Array(g * h * 2), p = 0, m = 0, q = 0; q < h; q++) for (var r = q * l - f, s = 0; s < g; s++) b[p] = s * k - e, b[p + 1] = -r, a[p + 2] = 1, n[m] = s / c, n[m + 1] = 1 - q / d, p += 3, m += 2;
    p = 0;
    e = new (65535 < b.length / 3 ? Uint32Array : Uint16Array)(c *
        d * 6);
    for (q = 0; q < d; q++) for (s = 0; s < c; s++) f = s + g * (q + 1), h = s + 1 + g * (q + 1), k = s + 1 + g * q, e[p] = s + g * q, e[p + 1] = f, e[p + 2] = k, e[p + 3] = f, e[p + 4] = h, e[p + 5] = k, p += 6;
    this.setIndex(new THREE.BufferAttribute(e, 1));
    this.addAttribute("position", new THREE.BufferAttribute(b, 3));
    this.addAttribute("normal", new THREE.BufferAttribute(a, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(n, 2))
};
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry;
THREE.RingBufferGeometry = function (a, b, c, d, e, f) {
    THREE.BufferGeometry.call(this);
    this.type = "RingBufferGeometry";
    this.parameters = {innerRadius: a, outerRadius: b, thetaSegments: c, phiSegments: d, thetaStart: e, thetaLength: f};
    a = a || 20;
    b = b || 50;
    e = void 0 !== e ? e : 0;
    f = void 0 !== f ? f : 2 * Math.PI;
    c = void 0 !== c ? Math.max(3, c) : 8;
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g = (c + 1) * (d + 1), h = c * d * 6,
        h = new THREE.BufferAttribute(new (65535 < h ? Uint32Array : Uint16Array)(h), 1),
        k = new THREE.BufferAttribute(new Float32Array(3 * g), 3), l = new THREE.BufferAttribute(new Float32Array(3 *
        g), 3), g = new THREE.BufferAttribute(new Float32Array(2 * g), 2), n = 0, p = 0, m, q = a, r = (b - a) / d,
        s = new THREE.Vector3, t = new THREE.Vector2, u;
    for (a = 0; a <= d; a++) {
        for (u = 0; u <= c; u++) m = e + u / c * f, s.x = q * Math.cos(m), s.y = q * Math.sin(m), k.setXYZ(n, s.x, s.y, s.z), l.setXYZ(n, 0, 0, 1), t.x = (s.x / b + 1) / 2, t.y = (s.y / b + 1) / 2, g.setXY(n, t.x, t.y), n++;
        q += r
    }
    for (a = 0; a < d; a++) for (b = a * (c + 1), u = 0; u < c; u++) e = m = u + b, f = m + c + 1, n = m + c + 2, m += 1, h.setX(p, e), p++, h.setX(p, f), p++, h.setX(p, n), p++, h.setX(p, e), p++, h.setX(p, n), p++, h.setX(p, m), p++;
    this.setIndex(h);
    this.addAttribute("position",
        k);
    this.addAttribute("normal", l);
    this.addAttribute("uv", g)
};
THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry;
THREE.RingGeometry = function (a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "RingGeometry";
    this.parameters = {innerRadius: a, outerRadius: b, thetaSegments: c, phiSegments: d, thetaStart: e, thetaLength: f};
    this.fromBufferGeometry(new THREE.RingBufferGeometry(a, b, c, d, e, f))
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry;
THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    };
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(a, b, c, d, e, f, g))
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.SphereBufferGeometry = function (a, b, c, d, e, f, g) {
    THREE.BufferGeometry.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    };
    a = a || 50;
    b = Math.max(3, Math.floor(b) || 8);
    c = Math.max(2, Math.floor(c) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    f = void 0 !== f ? f : 0;
    g = void 0 !== g ? g : Math.PI;
    for (var h = f + g, k = (b + 1) * (c + 1), l = new THREE.BufferAttribute(new Float32Array(3 * k), 3), n = new THREE.BufferAttribute(new Float32Array(3 *
        k), 3), k = new THREE.BufferAttribute(new Float32Array(2 * k), 2), p = 0, m = [], q = new THREE.Vector3, r = 0; r <= c; r++) {
        for (var s = [], t = r / c, u = 0; u <= b; u++) {
            var v = u / b, C = -a * Math.cos(d + v * e) * Math.sin(f + t * g), w = a * Math.cos(f + t * g),
                E = a * Math.sin(d + v * e) * Math.sin(f + t * g);
            q.set(C, w, E).normalize();
            l.setXYZ(p, C, w, E);
            n.setXYZ(p, q.x, q.y, q.z);
            k.setXY(p, v, 1 - t);
            s.push(p);
            p++
        }
        m.push(s)
    }
    d = [];
    for (r = 0; r < c; r++) for (u = 0; u < b; u++) e = m[r][u + 1], g = m[r][u], p = m[r + 1][u], q = m[r + 1][u + 1], (0 !== r || 0 < f) && d.push(e, g, q), (r !== c - 1 || h < Math.PI) && d.push(g, p, q);
    this.setIndex(new (65535 <
    l.count ? THREE.Uint32Attribute : THREE.Uint16Attribute)(d, 1));
    this.addAttribute("position", l);
    this.addAttribute("normal", n);
    this.addAttribute("uv", k);
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry;
THREE.TextGeometry = function (a, b) {
    b = b || {};
    var c = b.font;
    if (!1 === c instanceof THREE.Font) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new THREE.Geometry;
    c = c.generateShapes(a, b.size, b.curveSegments);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b);
    this.type = "TextGeometry"
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.TorusBufferGeometry = function (a, b, c, d, e) {
    THREE.BufferGeometry.call(this);
    this.type = "TorusBufferGeometry";
    this.parameters = {radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e};
    a = a || 100;
    b = b || 40;
    c = Math.floor(c) || 8;
    d = Math.floor(d) || 6;
    e = e || 2 * Math.PI;
    var f = (c + 1) * (d + 1), g = c * d * 6, g = new (65535 < g ? Uint32Array : Uint16Array)(g),
        h = new Float32Array(3 * f), k = new Float32Array(3 * f), f = new Float32Array(2 * f), l = 0, n = 0, p = 0,
        m = new THREE.Vector3, q = new THREE.Vector3, r = new THREE.Vector3, s, t;
    for (s = 0; s <= c; s++) for (t = 0; t <= d; t++) {
        var u =
            t / d * e, v = s / c * Math.PI * 2;
        q.x = (a + b * Math.cos(v)) * Math.cos(u);
        q.y = (a + b * Math.cos(v)) * Math.sin(u);
        q.z = b * Math.sin(v);
        h[l] = q.x;
        h[l + 1] = q.y;
        h[l + 2] = q.z;
        m.x = a * Math.cos(u);
        m.y = a * Math.sin(u);
        r.subVectors(q, m).normalize();
        k[l] = r.x;
        k[l + 1] = r.y;
        k[l + 2] = r.z;
        f[n] = t / d;
        f[n + 1] = s / c;
        l += 3;
        n += 2
    }
    for (s = 1; s <= c; s++) for (t = 1; t <= d; t++) a = (d + 1) * (s - 1) + t - 1, b = (d + 1) * (s - 1) + t, e = (d + 1) * s + t, g[p] = (d + 1) * s + t - 1, g[p + 1] = a, g[p + 2] = e, g[p + 3] = a, g[p + 4] = b, g[p + 5] = e, p += 6;
    this.setIndex(new THREE.BufferAttribute(g, 1));
    this.addAttribute("position", new THREE.BufferAttribute(h,
        3));
    this.addAttribute("normal", new THREE.BufferAttribute(k, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(f, 2))
};
THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry;
THREE.TorusGeometry = function (a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.type = "TorusGeometry";
    this.parameters = {radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e};
    this.fromBufferGeometry(new THREE.TorusBufferGeometry(a, b, c, d, e))
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusKnotBufferGeometry = function (a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
        var f = Math.cos(a), g = Math.sin(a);
        a *= c / b;
        b = Math.cos(a);
        e.x = d * (2 + b) * .5 * f;
        e.y = d * (2 + b) * g * .5;
        e.z = d * Math.sin(a) * .5
    }

    THREE.BufferGeometry.call(this);
    this.type = "TorusKnotBufferGeometry";
    this.parameters = {radius: a, tube: b, tubularSegments: c, radialSegments: d, p: e, q: f};
    a = a || 100;
    b = b || 40;
    c = Math.floor(c) || 64;
    d = Math.floor(d) || 8;
    e = e || 2;
    f = f || 3;
    var h = (d + 1) * (c + 1), k = d * c * 6,
        k = new THREE.BufferAttribute(new (65535 < k ? Uint32Array : Uint16Array)(k), 1),
        l = new THREE.BufferAttribute(new Float32Array(3 *
            h), 3), n = new THREE.BufferAttribute(new Float32Array(3 * h), 3),
        h = new THREE.BufferAttribute(new Float32Array(2 * h), 2), p, m, q = 0, r = 0, s = new THREE.Vector3,
        t = new THREE.Vector3, u = new THREE.Vector2, v = new THREE.Vector3, C = new THREE.Vector3,
        w = new THREE.Vector3, E = new THREE.Vector3, z = new THREE.Vector3;
    for (p = 0; p <= c; ++p) for (m = p / c * e * Math.PI * 2, g(m, e, f, a, v), g(m + .01, e, f, a, C), E.subVectors(C, v), z.addVectors(C, v), w.crossVectors(E, z), z.crossVectors(w, E), w.normalize(), z.normalize(), m = 0; m <= d; ++m) {
        var y = m / d * Math.PI * 2, A = -b * Math.cos(y),
            y = b * Math.sin(y);
        s.x = v.x + (A * z.x + y * w.x);
        s.y = v.y + (A * z.y + y * w.y);
        s.z = v.z + (A * z.z + y * w.z);
        l.setXYZ(q, s.x, s.y, s.z);
        t.subVectors(s, v).normalize();
        n.setXYZ(q, t.x, t.y, t.z);
        u.x = p / c;
        u.y = m / d;
        h.setXY(q, u.x, u.y);
        q++
    }
    for (m = 1; m <= c; m++) for (p = 1; p <= d; p++) a = (d + 1) * m + (p - 1), b = (d + 1) * m + p, e = (d + 1) * (m - 1) + p, k.setX(r, (d + 1) * (m - 1) + (p - 1)), r++, k.setX(r, a), r++, k.setX(r, e), r++, k.setX(r, a), r++, k.setX(r, b), r++, k.setX(r, e), r++;
    this.setIndex(k);
    this.addAttribute("position", l);
    this.addAttribute("normal", n);
    this.addAttribute("uv", h)
};
THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry;
THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {radius: a, tube: b, tubularSegments: c, radialSegments: d, p: e, q: f};
    void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
    this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(a, b, c, d, e, f));
    this.mergeVertices()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.TubeGeometry = function (a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "TubeGeometry";
    this.parameters = {path: a, segments: b, radius: c, radialSegments: d, closed: e, taper: f};
    b = b || 64;
    c = c || 1;
    d = d || 8;
    e = e || !1;
    f = f || THREE.TubeGeometry.NoTaper;
    var g = [], h, k, l = b + 1, n, p, m, q, r, s = new THREE.Vector3, t, u, v;
    t = new THREE.TubeGeometry.FrenetFrames(a, b, e);
    u = t.normals;
    v = t.binormals;
    this.tangents = t.tangents;
    this.normals = u;
    this.binormals = v;
    for (t = 0; t < l; t++) for (g[t] = [], n = t / (l - 1), r = a.getPointAt(n), h = u[t], k = v[t], m = c * f(n), n = 0; n <
    d; n++) p = n / d * 2 * Math.PI, q = -m * Math.cos(p), p = m * Math.sin(p), s.copy(r), s.x += q * h.x + p * k.x, s.y += q * h.y + p * k.y, s.z += q * h.z + p * k.z, g[t][n] = this.vertices.push(new THREE.Vector3(s.x, s.y, s.z)) - 1;
    for (t = 0; t < b; t++) for (n = 0; n < d; n++) f = e ? (t + 1) % b : t + 1, l = (n + 1) % d, a = g[t][n], c = g[f][n], f = g[f][l], l = g[t][l], s = new THREE.Vector2(t / b, n / d), u = new THREE.Vector2((t + 1) / b, n / d), v = new THREE.Vector2((t + 1) / b, (n + 1) / d), h = new THREE.Vector2(t / b, (n + 1) / d), this.faces.push(new THREE.Face3(a, c, l)), this.faceVertexUvs[0].push([s, u, h]), this.faces.push(new THREE.Face3(c,
        f, l)), this.faceVertexUvs[0].push([u.clone(), v, h.clone()]);
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry;
THREE.TubeGeometry.NoTaper = function (a) {
    return 1
};
THREE.TubeGeometry.SinusoidalTaper = function (a) {
    return Math.sin(Math.PI * a)
};
THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
    var d = new THREE.Vector3, e = [], f = [], g = [], h = new THREE.Vector3, k = new THREE.Matrix4;
    b += 1;
    var l, n, p;
    this.tangents = e;
    this.normals = f;
    this.binormals = g;
    for (l = 0; l < b; l++) n = l / (b - 1), e[l] = a.getTangentAt(n), e[l].normalize();
    f[0] = new THREE.Vector3;
    g[0] = new THREE.Vector3;
    a = Number.MAX_VALUE;
    l = Math.abs(e[0].x);
    n = Math.abs(e[0].y);
    p = Math.abs(e[0].z);
    l <= a && (a = l, d.set(1, 0, 0));
    n <= a && (a = n, d.set(0, 1, 0));
    p <= a && d.set(0, 0, 1);
    h.crossVectors(e[0], d).normalize();
    f[0].crossVectors(e[0],
        h);
    g[0].crossVectors(e[0], f[0]);
    for (l = 1; l < b; l++) f[l] = f[l - 1].clone(), g[l] = g[l - 1].clone(), h.crossVectors(e[l - 1], e[l]), h.length() > Number.EPSILON && (h.normalize(), d = Math.acos(THREE.Math.clamp(e[l - 1].dot(e[l]), -1, 1)), f[l].applyMatrix4(k.makeRotationAxis(h, d))), g[l].crossVectors(e[l], f[l]);
    if (c) for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)), d /= b - 1, 0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d), l = 1; l < b; l++) f[l].applyMatrix4(k.makeRotationAxis(e[l], d * l)), g[l].crossVectors(e[l], f[l])
};
THREE.PolyhedronGeometry = function (a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = k.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + .5;
        a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5;
        b.uv = new THREE.Vector2(c, 1 - a);
        return b
    }

    function f(a, b, c) {
        var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
        k.faces.push(d);
        t.copy(a).add(b).add(c).divideScalar(3);
        d = Math.atan2(t.z, -t.x);
        k.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])
    }

    function g(a,
               b) {
        for (var c = Math.pow(2, b), d = e(k.vertices[a.a]), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), l = [], m = 0; m <= c; m++) {
            l[m] = [];
            for (var n = e(d.clone().lerp(h, m / c)), p = e(g.clone().lerp(h, m / c)), q = c - m, r = 0; r <= q; r++) l[m][r] = 0 === r && m === c ? n : e(n.clone().lerp(p, r / q))
        }
        for (m = 0; m < c; m++) for (r = 0; r < 2 * (c - m) - 1; r++) d = Math.floor(r / 2), 0 === r % 2 ? f(l[m][d + 1], l[m + 1][d], l[m][d]) : f(l[m][d + 1], l[m + 1][d + 1], l[m + 1][d])
    }

    function h(a, b, c) {
        0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
        0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5, a.y));
        return a.clone()
    }

    THREE.Geometry.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = {vertices: a, indices: b, radius: c, detail: d};
    c = c || 1;
    d = d || 0;
    for (var k = this, l = 0, n = a.length; l < n; l += 3) e(new THREE.Vector3(a[l], a[l + 1], a[l + 2]));
    a = this.vertices;
    for (var p = [], m = l = 0, n = b.length; l < n; l += 3, m++) {
        var q = a[b[l]], r = a[b[l + 1]], s = a[b[l + 2]];
        p[m] = new THREE.Face3(q.index, r.index, s.index, [q.clone(), r.clone(), s.clone()])
    }
    for (var t = new THREE.Vector3, l = 0, n = p.length; l < n; l++) g(p[l], d);
    l = 0;
    for (n = this.faceVertexUvs[0].length; l <
    n; l++) b = this.faceVertexUvs[0][l], d = b[0].x, a = b[1].x, p = b[2].x, m = Math.max(d, a, p), q = Math.min(d, a, p), .9 < m && .1 > q && (.2 > d && (b[0].x += 1), .2 > a && (b[1].x += 1), .2 > p && (b[2].x += 1));
    l = 0;
    for (n = this.vertices.length; l < n; l++) this.vertices[l].multiplyScalar(c);
    this.mergeVertices();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry = function (a, b) {
    var c = (1 + Math.sqrt(5)) / 2, d = 1 / c;
    THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1,
        12, 14, 1, 14, 5, 1, 5, 9], a, b);
    this.type = "DodecahedronGeometry";
    this.parameters = {radius: a, detail: b}
};
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry = function (a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
    this.type = "IcosahedronGeometry";
    this.parameters = {radius: a, detail: b}
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.OctahedronGeometry = function (a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
    this.type = "OctahedronGeometry";
    this.parameters = {radius: a, detail: b}
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;
THREE.TetrahedronGeometry = function (a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
    this.type = "TetrahedronGeometry";
    this.parameters = {radius: a, detail: b}
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry;
THREE.ParametricGeometry = function (a, b, c) {
    THREE.Geometry.call(this);
    this.type = "ParametricGeometry";
    this.parameters = {func: a, slices: b, stacks: c};
    var d = this.vertices, e = this.faces, f = this.faceVertexUvs[0], g, h, k, l, n = b + 1;
    for (g = 0; g <= c; g++) for (l = g / c, h = 0; h <= b; h++) k = h / b, k = a(k, l), d.push(k);
    var p, m, q, r;
    for (g = 0; g < c; g++) for (h = 0; h < b; h++) a = g * n + h, d = g * n + h + 1, l = (g + 1) * n + h + 1, k = (g + 1) * n + h, p = new THREE.Vector2(h / b, g / c), m = new THREE.Vector2((h + 1) / b, g / c), q = new THREE.Vector2((h + 1) / b, (g + 1) / c), r = new THREE.Vector2(h / b, (g + 1) / c), e.push(new THREE.Face3(a,
        d, k)), f.push([p, m, r]), e.push(new THREE.Face3(d, l, k)), f.push([m.clone(), q, r.clone()]);
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry;
THREE.WireframeGeometry = function (a) {
    function b(a, b) {
        return a - b
    }

    THREE.BufferGeometry.call(this);
    var c = [0, 0], d = {}, e = ["a", "b", "c"];
    if (a instanceof THREE.Geometry) {
        var f = a.vertices, g = a.faces, h = 0, k = new Uint32Array(6 * g.length);
        a = 0;
        for (var l = g.length; a < l; a++) for (var n = g[a], p = 0; 3 > p; p++) {
            c[0] = n[e[p]];
            c[1] = n[e[(p + 1) % 3]];
            c.sort(b);
            var m = c.toString();
            void 0 === d[m] && (k[2 * h] = c[0], k[2 * h + 1] = c[1], d[m] = !0, h++)
        }
        c = new Float32Array(6 * h);
        a = 0;
        for (l = h; a < l; a++) for (p = 0; 2 > p; p++) d = f[k[2 * a + p]], h = 6 * a + 3 * p, c[h + 0] = d.x, c[h + 1] = d.y,
            c[h + 2] = d.z;
        this.addAttribute("position", new THREE.BufferAttribute(c, 3))
    } else if (a instanceof THREE.BufferGeometry) {
        if (null !== a.index) {
            l = a.index.array;
            f = a.attributes.position;
            e = a.groups;
            h = 0;
            0 === e.length && a.addGroup(0, l.length);
            k = new Uint32Array(2 * l.length);
            g = 0;
            for (n = e.length; g < n; ++g) {
                a = e[g];
                p = a.start;
                m = a.count;
                a = p;
                for (var q = p + m; a < q; a += 3) for (p = 0; 3 > p; p++) c[0] = l[a + p], c[1] = l[a + (p + 1) % 3], c.sort(b), m = c.toString(), void 0 === d[m] && (k[2 * h] = c[0], k[2 * h + 1] = c[1], d[m] = !0, h++)
            }
            c = new Float32Array(6 * h);
            a = 0;
            for (l = h; a <
            l; a++) for (p = 0; 2 > p; p++) h = 6 * a + 3 * p, d = k[2 * a + p], c[h + 0] = f.getX(d), c[h + 1] = f.getY(d), c[h + 2] = f.getZ(d)
        } else for (f = a.attributes.position.array, h = f.length / 3, k = h / 3, c = new Float32Array(6 * h), a = 0, l = k; a < l; a++) for (p = 0; 3 > p; p++) h = 18 * a + 6 * p, k = 9 * a + 3 * p, c[h + 0] = f[k], c[h + 1] = f[k + 1], c[h + 2] = f[k + 2], d = 9 * a + (p + 1) % 3 * 3, c[h + 3] = f[d], c[h + 4] = f[d + 1], c[h + 5] = f[d + 2];
        this.addAttribute("position", new THREE.BufferAttribute(c, 3))
    }
};
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry;
THREE.AxisHelper = function (a) {
    a = a || 1;
    var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]),
        c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
    a = new THREE.BufferGeometry;
    a.addAttribute("position", new THREE.BufferAttribute(b, 3));
    a.addAttribute("color", new THREE.BufferAttribute(c, 3));
    b = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    THREE.LineSegments.call(this, a, b)
};
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper;
THREE.ArrowHelper = function () {
    var a = new THREE.BufferGeometry;
    a.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
    var b = new THREE.CylinderBufferGeometry(0, .5, 1, 5, 1);
    b.translate(0, -.5, 0);
    return function (c, d, e, f, g, h) {
        THREE.Object3D.call(this);
        void 0 === f && (f = 16776960);
        void 0 === e && (e = 1);
        void 0 === g && (g = .2 * e);
        void 0 === h && (h = .2 * g);
        this.position.copy(d);
        this.line = new THREE.Line(a, new THREE.LineBasicMaterial({color: f}));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new THREE.Mesh(b,
            new THREE.MeshBasicMaterial({color: f}));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(c);
        this.setLength(e, g, h)
    }
}();
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection = function () {
    var a = new THREE.Vector3, b;
    return function (c) {
        .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b))
    }
}();
THREE.ArrowHelper.prototype.setLength = function (a, b, c) {
    void 0 === b && (b = .2 * a);
    void 0 === c && (c = .2 * b);
    this.line.scale.set(1, Math.max(0, a - b), 1);
    this.line.updateMatrix();
    this.cone.scale.set(c, b, c);
    this.cone.position.y = a;
    this.cone.updateMatrix()
};
THREE.ArrowHelper.prototype.setColor = function (a) {
    this.line.material.color.copy(a);
    this.cone.material.color.copy(a)
};
THREE.BoxHelper = function (a, b) {
    void 0 === b && (b = 16776960);
    var c = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        d = new Float32Array(24), e = new THREE.BufferGeometry;
    e.setIndex(new THREE.BufferAttribute(c, 1));
    e.addAttribute("position", new THREE.BufferAttribute(d, 3));
    THREE.LineSegments.call(this, e, new THREE.LineBasicMaterial({color: b}));
    void 0 !== a && this.update(a)
};
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper;
THREE.BoxHelper.prototype.update = function () {
    var a = new THREE.Box3;
    return function (b) {
        b instanceof THREE.Box3 ? a.copy(b) : a.setFromObject(b);
        if (!a.isEmpty()) {
            b = a.min;
            var c = a.max, d = this.geometry.attributes.position, e = d.array;
            e[0] = c.x;
            e[1] = c.y;
            e[2] = c.z;
            e[3] = b.x;
            e[4] = c.y;
            e[5] = c.z;
            e[6] = b.x;
            e[7] = b.y;
            e[8] = c.z;
            e[9] = c.x;
            e[10] = b.y;
            e[11] = c.z;
            e[12] = c.x;
            e[13] = c.y;
            e[14] = b.z;
            e[15] = b.x;
            e[16] = c.y;
            e[17] = b.z;
            e[18] = b.x;
            e[19] = b.y;
            e[20] = b.z;
            e[21] = c.x;
            e[22] = b.y;
            e[23] = b.z;
            d.needsUpdate = !0;
            this.geometry.computeBoundingSphere()
        }
    }
}();
THREE.BoundingBoxHelper = function (a, b) {
    var c = void 0 !== b ? b : 8947848;
    this.object = a;
    this.box = new THREE.Box3;
    THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: c, wireframe: !0}))
};
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper;
THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object);
    this.box.size(this.scale);
    this.box.center(this.position)
};
THREE.CameraHelper = function (a) {
    function b(a, b, d) {
        c(a, d);
        c(b, d)
    }

    function c(a, b) {
        d.vertices.push(new THREE.Vector3);
        d.colors.push(new THREE.Color(b));
        void 0 === f[a] && (f[a] = []);
        f[a].push(d.vertices.length - 1)
    }

    var d = new THREE.Geometry, e = new THREE.LineBasicMaterial({color: 16777215, vertexColors: THREE.FaceColors}),
        f = {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1", "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    THREE.LineSegments.call(this, d, e);
    this.camera = a;
    this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate =
        !1;
    this.pointMap = f;
    this.update()
};
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper;
THREE.CameraHelper.prototype.update = function () {
    function a(a, g, h, k) {
        d.set(g, h, k).unproject(e);
        a = c[a];
        if (void 0 !== a) for (g = 0, h = a.length; g < h; g++) b.vertices[a[g]].copy(d)
    }

    var b, c, d = new THREE.Vector3, e = new THREE.Camera;
    return function () {
        b = this.geometry;
        c = this.pointMap;
        e.projectionMatrix.copy(this.camera.projectionMatrix);
        a("c", 0, 0, -1);
        a("t", 0, 0, 1);
        a("n1", -1, -1, -1);
        a("n2", 1, -1, -1);
        a("n3", -1, 1, -1);
        a("n4", 1, 1, -1);
        a("f1", -1, -1, 1);
        a("f2", 1, -1, 1);
        a("f3", -1, 1, 1);
        a("f4", 1, 1, 1);
        a("u1", .7, 1.1, -1);
        a("u2", -.7, 1.1,
            -1);
        a("u3", 0, 2, -1);
        a("cf1", -1, 0, 1);
        a("cf2", 1, 0, 1);
        a("cf3", 0, -1, 1);
        a("cf4", 0, 1, 1);
        a("cn1", -1, 0, -1);
        a("cn2", 1, 0, -1);
        a("cn3", 0, -1, -1);
        a("cn4", 0, 1, -1);
        b.verticesNeedUpdate = !0
    }
}();
THREE.DirectionalLightHelper = function (a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    void 0 === b && (b = 1);
    var c = new THREE.BufferGeometry;
    c.addAttribute("position", new THREE.Float32Attribute([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3));
    var d = new THREE.LineBasicMaterial({fog: !1});
    this.add(new THREE.Line(c, d));
    c = new THREE.BufferGeometry;
    c.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3));
    this.add(new THREE.Line(c,
        d));
    this.update()
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose = function () {
    var a = this.children[0], b = this.children[1];
    a.geometry.dispose();
    a.material.dispose();
    b.geometry.dispose();
    b.material.dispose()
};
THREE.DirectionalLightHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function () {
        a.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        c.subVectors(b, a);
        var d = this.children[0], e = this.children[1];
        d.lookAt(c);
        d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
        e.lookAt(c);
        e.scale.z = c.length()
    }
}();
THREE.EdgesHelper = function (a, b, c) {
    b = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(a.geometry, c), new THREE.LineBasicMaterial({color: b}));
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1
};
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper;
THREE.FaceNormalsHelper = function (a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16776960;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b, 3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({color: a, linewidth: d}));
    this.matrixAutoUpdate =
        !1;
    this.update()
};
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
    return function () {
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        for (var d = this.object.matrixWorld, e = this.geometry.attributes.position, f = this.object.geometry, g = f.vertices, f = f.faces, h = 0, k = 0, l = f.length; k < l; k++) {
            var n = f[k], p = n.normal;
            a.copy(g[n.a]).add(g[n.b]).add(g[n.c]).divideScalar(3).applyMatrix4(d);
            b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
            e.setXYZ(h, a.x, a.y, a.z);
            h += 1;
            e.setXYZ(h, b.x, b.y, b.z);
            h += 1
        }
        e.needsUpdate = !0;
        return this
    }
}();
THREE.GridHelper = function (a, b, c, d) {
    c = new THREE.Color(void 0 !== c ? c : 4473924);
    d = new THREE.Color(void 0 !== d ? d : 8947848);
    for (var e = [], f = [], g = -a, h = 0; g <= a; g += b) {
        e.push(-a, 0, g, a, 0, g);
        e.push(g, 0, -a, g, 0, a);
        var k = 0 === g ? c : d;
        k.toArray(f, h);
        h += 3;
        k.toArray(f, h);
        h += 3;
        k.toArray(f, h);
        h += 3;
        k.toArray(f, h);
        h += 3
    }
    a = new THREE.BufferGeometry;
    a.addAttribute("position", new THREE.Float32Attribute(e, 3));
    a.addAttribute("color", new THREE.Float32Attribute(f, 3));
    e = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    THREE.LineSegments.call(this,
        a, e)
};
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor = THREE.GridHelper;
THREE.GridHelper.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
THREE.HemisphereLightHelper = function (a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.colors = [new THREE.Color, new THREE.Color];
    var c = new THREE.SphereGeometry(b, 4, 2);
    c.rotateX(-Math.PI / 2);
    for (var d = 0; 8 > d; d++) c.faces[d].color = this.colors[4 > d ? 0 : 1];
    d = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, wireframe: !0});
    this.lightSphere = new THREE.Mesh(c, d);
    this.add(this.lightSphere);
    this.update()
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper;
THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose();
    this.lightSphere.material.dispose()
};
THREE.HemisphereLightHelper.prototype.update = function () {
    var a = new THREE.Vector3;
    return function () {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
        this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}();
THREE.PointLightHelper = function (a, b) {
    this.light = a;
    this.light.updateMatrixWorld();
    var c = new THREE.SphereBufferGeometry(b, 4, 2), d = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    THREE.Mesh.call(this, c, d);
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1
};
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose()
};
THREE.PointLightHelper.prototype.update = function () {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.SkeletonHelper = function (a) {
    this.bones = this.getBoneList(a);
    for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++) this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)));
    b.dynamic = !0;
    c = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors, depthTest: !1, depthWrite: !1, transparent: !0});
    THREE.LineSegments.call(this, b, c);
    this.root = a;
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update()
};
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper;
THREE.SkeletonHelper.prototype.getBoneList = function (a) {
    var b = [];
    a instanceof THREE.Bone && b.push(a);
    for (var c = 0; c < a.children.length; c++) b.push.apply(b, this.getBoneList(a.children[c]));
    return b
};
THREE.SkeletonHelper.prototype.update = function () {
    for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
        var f = this.bones[e];
        f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld), a.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, f.parent.matrixWorld), a.vertices[d + 1].setFromMatrixPosition(c), d += 2)
    }
    a.verticesNeedUpdate = !0;
    a.computeBoundingSphere()
};
THREE.SpotLightHelper = function (a) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    a = new THREE.BufferGeometry;
    for (var b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], c = 0, d = 1; 32 > c; c++, d++) {
        var e = c / 32 * Math.PI * 2, f = d / 32 * Math.PI * 2;
        b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1)
    }
    a.addAttribute("position", new THREE.Float32Attribute(b, 3));
    b = new THREE.LineBasicMaterial({fog: !1});
    this.cone = new THREE.LineSegments(a,
        b);
    this.add(this.cone);
    this.update()
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose();
    this.cone.material.dispose()
};
THREE.SpotLightHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3;
    return function () {
        var c = this.light.distance ? this.light.distance : 1E3, d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c);
        a.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        this.cone.lookAt(b.sub(a));
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}();
THREE.VertexNormalsHelper = function (a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16711680;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = 3 * c.faces.length : c instanceof THREE.BufferGeometry && (b = c.attributes.normal.count);
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b, 3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({color: a, linewidth: d}));
    this.matrixAutoUpdate = !1;
    this.update()
};
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update = function () {
    var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
    return function () {
        var d = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld, f = this.geometry.attributes.position, g = this.object.geometry;
        if (g instanceof THREE.Geometry) for (var h = g.vertices, k = g.faces, l = g = 0, n = k.length; l < n; l++) for (var p = k[l], m = 0, q = p.vertexNormals.length; m < q; m++) {
            var r = p.vertexNormals[m];
            a.copy(h[p[d[m]]]).applyMatrix4(e);
            b.copy(r).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
            f.setXYZ(g, a.x, a.y, a.z);
            g += 1;
            f.setXYZ(g, b.x, b.y, b.z);
            g += 1
        } else if (g instanceof THREE.BufferGeometry) for (d = g.attributes.position, h = g.attributes.normal, m = g = 0, q = d.count; m < q; m++) a.set(d.getX(m), d.getY(m), d.getZ(m)).applyMatrix4(e), b.set(h.getX(m), h.getY(m), h.getZ(m)), b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a), f.setXYZ(g, a.x, a.y, a.z), g += 1, f.setXYZ(g, b.x, b.y, b.z), g += 1;
        f.needsUpdate = !0;
        return this
    }
}();
THREE.WireframeHelper = function (a, b) {
    var c = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(a.geometry), new THREE.LineBasicMaterial({color: c}));
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1
};
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper;
THREE.ImmediateRenderObject = function (a) {
    THREE.Object3D.call(this);
    this.material = a;
    this.render = function (a) {
    }
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject;
THREE.MorphBlendMesh = function (a, b) {
    THREE.Mesh.call(this, a, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
    b = {
        start: b,
        end: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a] = b;
    this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
    for (var b = /([a-z]+)_?(\d+)/i, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
        var h = e.morphTargets[f].name.match(b);
        if (h && 1 < h.length) {
            var k = h[1];
            d[k] || (d[k] = {start: Infinity, end: -Infinity});
            h = d[k];
            f < h.start && (h.start = f);
            f > h.end && (h.end = f);
            c || (c = k)
        }
    }
    for (k in d) h = d[k], this.createAnimation(k, h.start, h.end, a);
    this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
    if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
    if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
    var b = 0;
    if (a = this.animationsMap[a]) b = a.time;
    return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
    var b = -1;
    if (a = this.animationsMap[a]) b = a.duration;
    return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0, b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
    if (a = this.animationsMap[a]) a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function (a) {
    for (var b = 0, c = this.animationsList.length; b < c; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
            } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
            var f = d.start + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1), g = d.weight;
            f !== d.currentFrame &&
            (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            d.currentFrame !== d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * g, this.morphTargetInfluences[d.lastFrame] = (1 - e) * g) : this.morphTargetInfluences[d.currentFrame] = g
        }
    }
};
