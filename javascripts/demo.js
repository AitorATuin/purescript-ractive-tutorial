var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = {
        create: function (value) {
            return value;
        }
    };
    function LT() {

    };
    LT.value = new LT();
    function GT() {

    };
    GT.value = new GT();
    function EQ() {

    };
    EQ.value = new EQ();
    function Semigroupoid($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    function Show(show) {
        this.show = show;
    };
    function Functor($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    function Applicative(__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    function Alternative($less$bar$greater, empty) {
        this["<|>"] = $less$bar$greater;
        this.empty = empty;
    };
    function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    function Num($percent, $times, $plus, $minus, $div, negate) {
        this["%"] = $percent;
        this["*"] = $times;
        this["+"] = $plus;
        this["-"] = $minus;
        this["/"] = $div;
        this.negate = negate;
    };
    function Eq($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    function Ord(__superclass_Prelude$dotEq_0, compare) {
        this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
        this.compare = compare;
    };
    function Bits($amp, $up, complement, shl, shr, zshr, $bar) {
        this["&"] = $amp;
        this["^"] = $up;
        this.complement = complement;
        this.shl = shl;
        this.shr = shr;
        this.zshr = zshr;
        this["|"] = $bar;
    };
    function BoolLike($amp$amp, not, $bar$bar) {
        this["&&"] = $amp$amp;
        this.not = not;
        this["||"] = $bar$bar;
    };
    function Semigroup($less$greater) {
        this["<>"] = $less$greater;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
    function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $bar = function (dict) {
        return dict["|"];
    };
    var $up = function (dict) {
        return dict["^"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $amp = function (dict) {
        return dict["&"];
    };
    var $percent = function (dict) {
        return dict["%"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
    var unit = {};
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = function (_) {
        return new Show(function (_96) {
            return "Unit {}";
        });
    };
    var showString = function (_) {
        return new Show(showStringImpl);
    };
    var showOrdering = function (_) {
        return new Show(function (_104) {
            if (_104 instanceof LT) {
                return "LT";
            };
            if (_104 instanceof GT) {
                return "GT";
            };
            if (_104 instanceof EQ) {
                return "EQ";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showNumber = function (_) {
        return new Show(showNumberImpl);
    };
    var showBoolean = function (_) {
        return new Show(function (_97) {
            if (_97) {
                return "true";
            };
            if (!_97) {
                return "false";
            };
            throw new Error("Failed pattern match");
        });
    };
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_2) {
        return new Show(showArrayImpl(show(__dict_Show_2)));
    };
    var shl = function (dict) {
        return dict.shl;
    };
    var semigroupoidArr = function (_) {
        return new Semigroupoid(function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        });
    };
    var semigroupUnit = function (_) {
        return new Semigroup(function (_111) {
            return function (_112) {
                return {};
            };
        });
    };
    var semigroupString = function (_) {
        return new Semigroup(concatString);
    };
    var semigroupArr = function (__dict_Semigroup_3) {
        return new Semigroup(function (f) {
            return function (g) {
                return function (x) {
                    return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
                };
            };
        });
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
    };
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (dict) {
        return dict.negate;
    };
    var liftM1 = function (__dict_Monad_5) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_5["__superclass_Prelude.Bind_1"]({}))(a)(function (_0) {
                    return $$return(__dict_Monad_5)(f(_0));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var functorArr = function (_) {
        return new Functor($less$less$less(semigroupoidArr({})));
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = function (_) {
        return new Eq(function (_100) {
            return function (_101) {
                return false;
            };
        }, function (_98) {
            return function (_99) {
                return true;
            };
        });
    };
    var ordUnit = function (_) {
        return new Ord(function (__1) {
            return eqUnit({});
        }, function (_105) {
            return function (_106) {
                return EQ.value;
            };
        });
    };
    var eqString = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordString = function (_) {
        return new Ord(function (__1) {
            return eqString({});
        }, unsafeCompare);
    };
    var eqNumber = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordNumber = function (_) {
        return new Ord(function (__1) {
            return eqNumber({});
        }, unsafeCompare);
    };
    var eqBoolean = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordBoolean = function (_) {
        return new Ord(function (__1) {
            return eqBoolean({});
        }, function (_107) {
            return function (_108) {
                if (!_107 && !_108) {
                    return EQ.value;
                };
                if (!_107 && _108) {
                    return LT.value;
                };
                if (_107 && _108) {
                    return EQ.value;
                };
                if (_107 && !_108) {
                    return GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var empty = function (dict) {
        return dict.empty;
    };
    var $$const = function (_92) {
        return function (_93) {
            return _92;
        };
    };
    var $$void = function (__dict_Functor_8) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                return (function (_486) {
                    if (_486 instanceof LT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_10)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                return (function (_487) {
                    if (_487 instanceof GT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_11)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                return (function (_488) {
                    if (_488 instanceof GT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_12)(a1)(a2));
            };
        };
    };
    var $greater$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                return (function (_489) {
                    if (_489 instanceof LT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_13)(a1)(a2));
            };
        };
    };
    var categoryArr = function (_) {
        return new Category(function (__1) {
            return semigroupoidArr({});
        }, function (x) {
            return x;
        });
    };
    var boolLikeBoolean = function (_) {
        return new BoolLike(boolAnd, boolNot, boolOr);
    };
    var eqArray = function (__dict_Eq_7) {
        return new Eq(function (xs) {
            return function (ys) {
                return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
            };
        }, function (xs) {
            return function (ys) {
                return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
            };
        });
    };
    var ordArray = function (__dict_Ord_9) {
        return new Ord(function (_) {
            return eqArray(__dict_Ord_9["__superclass_Prelude.Eq_0"]({}));
        }, function (_109) {
            return function (_110) {
                if (_109.length === 0 && _110.length === 0) {
                    return EQ.value;
                };
                if (_109.length === 0) {
                    return LT.value;
                };
                if (_110.length === 0) {
                    return GT.value;
                };
                if (_109.length > 0) {
                    var _496 = _109.slice(1);
                    if (_110.length > 0) {
                        var _494 = _110.slice(1);
                        return (function (_492) {
                            if (_492 instanceof EQ) {
                                return compare(ordArray(__dict_Ord_9))(_496)(_494);
                            };
                            return _492;
                        })(compare(__dict_Ord_9)(_109[0])(_110[0]));
                    };
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqOrdering = function (_) {
        return new Eq(function (x) {
            return function (y) {
                return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
            };
        }, function (_102) {
            return function (_103) {
                if (_102 instanceof LT && _103 instanceof LT) {
                    return true;
                };
                if (_102 instanceof GT && _103 instanceof GT) {
                    return true;
                };
                if (_102 instanceof EQ && _103 instanceof EQ) {
                    return true;
                };
                return false;
            };
        });
    };
    var bitsNumber = function (_) {
        return new Bits(numAnd, numXor, numComplement, numShl, numShr, numZshr, numOr);
    };
    var asTypeOf = function (_94) {
        return function (_95) {
            return _94;
        };
    };
    var applyArr = function (_) {
        return new Apply(function (f) {
            return function (g) {
                return function (x) {
                    return f(x)(g(x));
                };
            };
        }, function (__1) {
            return functorArr({});
        });
    };
    var bindArr = function (_) {
        return new Bind(function (m) {
            return function (f) {
                return function (x) {
                    return f(m(x))(x);
                };
            };
        }, function (__1) {
            return applyArr({});
        });
    };
    var applicativeArr = function (_) {
        return new Applicative(function (__1) {
            return applyArr({});
        }, $$const);
    };
    var monadArr = function (_) {
        return new Monad(function (__1) {
            return applicativeArr({});
        }, function (__1) {
            return bindArr({});
        });
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        Semigroup: Semigroup, 
        BoolLike: BoolLike, 
        Bits: Bits, 
        Ord: Ord, 
        Eq: Eq, 
        Num: Num, 
        Monad: Monad, 
        Bind: Bind, 
        Alternative: Alternative, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        "<|>": $less$bar$greater, 
        empty: empty, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "void": $$void, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var abs = Math.abs;;
    var acos = Math.acos;;
    var asin = Math.asin;;
    var atan = Math.atan;;
    function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
    var ceil = Math.ceil;;
    var cos = Math.cos;;
    var exp = Math.exp;;
    var floor = Math.floor;;
    var log = Math.log;;
    function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
    function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
    function pow(n){  return function(p) {    return Math.pow(n, p);  }};
    var round = Math.round;;
    var sin = Math.sin;;
    var sqrt = Math.sqrt;;
    var tan = Math.tan;;
    var e       = Math.E;;
    var ln2     = Math.LN2;;
    var ln10    = Math.LN10;;
    var log2e   = Math.LOG2E;;
    var log10e  = Math.LOG10E;;
    var pi      = Math.PI;;
    var sqrt1_2 = Math.SQRT1_2;;
    var sqrt2   = Math.SQRT2;;
    return {
        sqrt2: sqrt2, 
        sqrt1_2: sqrt1_2, 
        pi: pi, 
        log10e: log10e, 
        log2e: log2e, 
        ln10: ln10, 
        ln2: ln2, 
        e: e, 
        tan: tan, 
        sqrt: sqrt, 
        sin: sin, 
        round: round, 
        pow: pow, 
        min: min, 
        max: max, 
        log: log, 
        floor: floor, 
        exp: exp, 
        cos: cos, 
        ceil: ceil, 
        atan2: atan2, 
        atan: atan, 
        asin: asin, 
        acos: acos, 
        abs: abs
    };
})();
var PS = PS || {};
PS.Global = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var nan = NaN;;
    var infinity = Infinity;;
    function readInt(radix) {  return function(n) {    return parseInt(n, radix);  };};
    var readFloat = parseFloat;;
    function showErrorImpl(err) {  return err.stack ? err.stack : err.toString();};
    function error(msg) {  return new Error(msg);};;
    var showError = function (_) {
        return new Prelude.Show(showErrorImpl);
    };
    return {
        error: error, 
        readFloat: readFloat, 
        readInt: readInt, 
        isFinite: isFinite, 
        infinity: infinity, 
        isNaN: isNaN, 
        nan: nan, 
        showError: showError
    };
})();
var PS = PS || {};
PS.Data_String = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function charAt(i) {  return function(s) {    return s.charAt(i);   };};
    function charCodeAt(i) {  return function(s) {    return s.charCodeAt(i);   };};
    function fromCharCode(n) {  return String.fromCharCode(n);};
    function indexOf(x) {  return function(s) {    return s.indexOf(x);  }; };
    function indexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.indexOf(x, startAt);    };   }; };
    function lastIndexOf(x) {  return function(s) {    return s.lastIndexOf(x);  };};
    function lastIndexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.lastIndexOf(x, startAt);    };   }; };
    function length(s) {  return s.length;};
    function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
    function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
    function take(n) {  return function(s) {    return s.substr(0, n);  };};
    function drop(n) {  return function(s) {    return s.substr(n);  };};
    function split(sep) {  return function(s) {    return s.split(sep);  };};
    function toLower(s) {  return s.toLowerCase();};
    function toUpper(s) {  return s.toUpperCase();};
    function trim(s) {  return s.trim();};
    function joinWith (s) {  return function (xs) {    return xs.join(s);  };};
    return {
        joinWith: joinWith, 
        trim: trim, 
        toUpper: toUpper, 
        toLower: toLower, 
        split: split, 
        drop: drop, 
        take: take, 
        replace: replace, 
        localeCompare: localeCompare, 
        length: length, 
        "lastIndexOf'": lastIndexOf$prime, 
        lastIndexOf: lastIndexOf, 
        "indexOf'": indexOf$prime, 
        indexOf: indexOf, 
        fromCharCode: fromCharCode, 
        charCodeAt: charCodeAt, 
        charAt: charAt
    };
})();
var PS = PS || {};
PS.Data_String_Regex = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_String = PS.Data_String;
    function showRegex$prime(r){  return '' + r;};
    function regex$prime(s1) {  return function(s2) {    return new RegExp(s1, s2);  };};
    function source(r) {  return r.source;};
    function flags(r) {  return {    multiline: r.multiline,    ignoreCase: r.ignoreCase,    global: r.global,    sticky: !!r.sticky,    unicode: !!r.unicode  };};
    function test(r) {  return function (s) {    return r.test(s);  };};
    function match(r) {  return function (s) {    return s.match(r);   };};
    function replace(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
    function replace$prime(r) {  return function(f) {    return function(s2) {      return s2.replace(r, function (match) {        return f(match)(Array.prototype.splice.call(arguments, 1, arguments.length - 3));      });    };  };};
    function search(r) {  return function (s) {    return s.search(r);  };};
    var showRegex = function (_) {
        return new Prelude.Show(showRegex$prime);
    };
    var renderFlags = function (flags_1) {
        return (flags_1.global ? "g" : "") + (flags_1.ignoreCase ? "i" : "") + (flags_1.multiline ? "m" : "") + (flags_1.sticky ? "y" : "") + (flags_1.unicode ? "u" : "");
    };
    var regex = function (source_1) {
        return function (flags_1) {
            return regex$prime(source_1)(renderFlags(flags_1));
        };
    };
    var parseFlags = function (s) {
        return {
            global: Data_String.indexOf("g")(s) >= 0, 
            ignoreCase: Data_String.indexOf("i")(s) >= 0, 
            multiline: Data_String.indexOf("m")(s) >= 0, 
            sticky: Data_String.indexOf("y")(s) >= 0, 
            unicode: Data_String.indexOf("u")(s) >= 0
        };
    };
    return {
        search: search, 
        "replace'": replace$prime, 
        replace: replace, 
        match: match, 
        test: test, 
        parseFlags: parseFlags, 
        renderFlags: renderFlags, 
        flags: flags, 
        source: source, 
        regex: regex, 
        showRegex: showRegex
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Nothing() {

    };
    Nothing.value = new Nothing();
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    var showMaybe = function (__dict_Show_15) {
        return new Prelude.Show(function (_124) {
            if (_124 instanceof Just) {
                return "Just (" + Prelude.show(__dict_Show_15)(_124.value0) + ")";
            };
            if (_124 instanceof Nothing) {
                return "Nothing";
            };
            throw new Error("Failed pattern match");
        });
    };
    var maybe = function (_113) {
        return function (_114) {
            return function (_115) {
                if (_115 instanceof Nothing) {
                    return _113;
                };
                if (_115 instanceof Just) {
                    return _114(_115.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isNothing = maybe(true)(Prelude["const"](false));
    var isJust = maybe(false)(Prelude["const"](true));
    var functorMaybe = function (_) {
        return new Prelude.Functor(function (_116) {
            return function (_117) {
                if (_117 instanceof Just) {
                    return new Just(_116(_117.value0));
                };
                return Nothing.value;
            };
        });
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var eqMaybe = function (__dict_Eq_17) {
        return new Prelude.Eq(function (a) {
            return function (b) {
                return !Prelude["=="](eqMaybe(__dict_Eq_17))(a)(b);
            };
        }, function (_125) {
            return function (_126) {
                if (_125 instanceof Nothing && _126 instanceof Nothing) {
                    return true;
                };
                if (_125 instanceof Just && _126 instanceof Just) {
                    return Prelude["=="](__dict_Eq_17)(_125.value0)(_126.value0);
                };
                return false;
            };
        });
    };
    var ordMaybe = function (__dict_Ord_16) {
        return new Prelude.Ord(function (_) {
            return eqMaybe(__dict_Ord_16["__superclass_Prelude.Eq_0"]({}));
        }, function (_127) {
            return function (_128) {
                if (_127 instanceof Just && _128 instanceof Just) {
                    return Prelude.compare(__dict_Ord_16)(_127.value0)(_128.value0);
                };
                if (_127 instanceof Nothing && _128 instanceof Nothing) {
                    return Prelude.EQ.value;
                };
                if (_127 instanceof Nothing) {
                    return Prelude.LT.value;
                };
                if (_128 instanceof Nothing) {
                    return Prelude.GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var applyMaybe = function (_) {
        return new Prelude.Apply(function (_118) {
            return function (_119) {
                if (_118 instanceof Just) {
                    return Prelude["<$>"](functorMaybe({}))(_118.value0)(_119);
                };
                if (_118 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorMaybe({});
        });
    };
    var bindMaybe = function (_) {
        return new Prelude.Bind(function (_122) {
            return function (_123) {
                if (_122 instanceof Just) {
                    return _123(_122.value0);
                };
                if (_122 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return applyMaybe({});
        });
    };
    var applicativeMaybe = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyMaybe({});
        }, Just.create);
    };
    var monadMaybe = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeMaybe({});
        }, function (__1) {
            return bindMaybe({});
        });
    };
    var alternativeMaybe = function (_) {
        return new Prelude.Alternative(function (_120) {
            return function (_121) {
                if (_120 instanceof Nothing) {
                    return _121;
                };
                return _120;
            };
        }, Nothing.value);
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        isNothing: isNothing, 
        isJust: isJust, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        alternativeMaybe: alternativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe, 
        showMaybe: showMaybe, 
        eqMaybe: eqMaybe, 
        ordMaybe: ordMaybe
    };
})();
var PS = PS || {};
PS.Data_Maybe_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var fromJust = function (_129) {
        if (_129 instanceof Data_Maybe.Just) {
            return _129.value0;
        };
        throw new Error("Failed pattern match");
    };
    return {
        fromJust: fromJust
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function mkFn0(fn) {  return function() {    return fn({});  };};
    function mkFn1(fn) {  return function(a) {    return fn(a);  };};
    function mkFn2(fn) {  return function(a, b) {    return fn(a)(b);  };};
    function mkFn3(fn) {  return function(a, b, c) {    return fn(a)(b)(c);  };};
    function mkFn4(fn) {  return function(a, b, c, d) {    return fn(a)(b)(c)(d);  };};
    function mkFn5(fn) {  return function(a, b, c, d, e) {    return fn(a)(b)(c)(d)(e);  };};
    function mkFn6(fn) {  return function(a, b, c, d, e, f) {    return fn(a)(b)(c)(d)(e)(f);  };};
    function mkFn7(fn) {  return function(a, b, c, d, e, f, g) {    return fn(a)(b)(c)(d)(e)(f)(g);  };};
    function mkFn8(fn) {  return function(a, b, c, d, e, f, g, h) {    return fn(a)(b)(c)(d)(e)(f)(g)(h);  };};
    function mkFn9(fn) {  return function(a, b, c, d, e, f, g, h, i) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i);  };};
    function mkFn10(fn) {  return function(a, b, c, d, e, f, g, h, i, j) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j);  };};
    function runFn0(fn) {  return fn();};
    function runFn1(fn) {  return function(a) {    return fn(a);  };};
    function runFn2(fn) {  return function(a) {    return function(b) {      return fn(a, b);    };  };};
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    function runFn4(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return fn(a, b, c, d);        };      };    };  };};
    function runFn5(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return fn(a, b, c, d, e);          };        };      };    };  };};
    function runFn6(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return fn(a, b, c, d, e, f);            };          };        };      };    };  };};
    function runFn7(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return fn(a, b, c, d, e, f, g);              };            };          };        };      };    };  };};
    function runFn8(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return fn(a, b, c, d, e, f, g, h);                };              };            };          };        };      };    };  };};
    function runFn9(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return fn(a, b, c, d, e, f, g, h, i);                  };                };              };            };          };        };      };    };  };};
    function runFn10(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return function(j) {                      return fn(a, b, c, d, e, f, g, h, i, j);                    };                  };                };              };            };          };        };      };    };  };};
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn10: runFn10, 
        runFn9: runFn9, 
        runFn8: runFn8, 
        runFn7: runFn7, 
        runFn6: runFn6, 
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn10: mkFn10, 
        mkFn9: mkFn9, 
        mkFn8: mkFn8, 
        mkFn7: mkFn7, 
        mkFn6: mkFn6, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Data_Foreign_EasyFFI = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeForeignProcedure(args) {  return function (stmt) {    return Function(wrap(args.slice()))();    function wrap() {      return !args.length ? stmt : 'return function (' + args.shift() + ') { ' + wrap() + ' };';    }  };};
    var unsafeForeignFunction = function (args) {
        return function (expr) {
            return unsafeForeignProcedure(args)("return " + expr + ";");
        };
    };
    return {
        unsafeForeignProcedure: unsafeForeignProcedure, 
        unsafeForeignFunction: unsafeForeignFunction
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = {
        create: function (value) {
            return value;
        }
    };
    var liftRef = function (_130) {
        return function (_131) {
            return function (_132) {
                return _130(_131)(_132);
            };
        };
    };
    var functorRef = function (_) {
        return new Prelude.Functor(function (_133) {
            return function (_134) {
                return _133(_134);
            };
        });
    };
    var eqRef = function (_) {
        return new Prelude.Eq(liftRef(Prelude.refIneq), liftRef(Prelude.refEq));
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef, 
        functorRef: functorRef
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    var showEither = function (__dict_Show_18) {
        return function (__dict_Show_19) {
            return new Prelude.Show(function (_142) {
                if (_142 instanceof Left) {
                    return "Left (" + Prelude.show(__dict_Show_18)(_142.value0) + ")";
                };
                if (_142 instanceof Right) {
                    return "Right (" + Prelude.show(__dict_Show_19)(_142.value0) + ")";
                };
                throw new Error("Failed pattern match");
            });
        };
    };
    var functorEither = function (_) {
        return new Prelude.Functor(function (_138) {
            return function (_139) {
                if (_139 instanceof Left) {
                    return new Left(_139.value0);
                };
                if (_139 instanceof Right) {
                    return new Right(_138(_139.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqEither = function (__dict_Eq_22) {
        return function (__dict_Eq_23) {
            return new Prelude.Eq(function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_22)(__dict_Eq_23))(a)(b);
                };
            }, function (_143) {
                return function (_144) {
                    if (_143 instanceof Left && _144 instanceof Left) {
                        return Prelude["=="](__dict_Eq_22)(_143.value0)(_144.value0);
                    };
                    if (_143 instanceof Right && _144 instanceof Right) {
                        return Prelude["=="](__dict_Eq_23)(_143.value0)(_144.value0);
                    };
                    return false;
                };
            });
        };
    };
    var ordEither = function (__dict_Ord_20) {
        return function (__dict_Ord_21) {
            return new Prelude.Ord(function (_) {
                return eqEither(__dict_Ord_20["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_21["__superclass_Prelude.Eq_0"]({}));
            }, function (_145) {
                return function (_146) {
                    if (_145 instanceof Left && _146 instanceof Left) {
                        return Prelude.compare(__dict_Ord_20)(_145.value0)(_146.value0);
                    };
                    if (_145 instanceof Right && _146 instanceof Right) {
                        return Prelude.compare(__dict_Ord_21)(_145.value0)(_146.value0);
                    };
                    if (_145 instanceof Left) {
                        return Prelude.LT.value;
                    };
                    if (_146 instanceof Left) {
                        return Prelude.GT.value;
                    };
                    throw new Error("Failed pattern match");
                };
            });
        };
    };
    var either = function (_135) {
        return function (_136) {
            return function (_137) {
                if (_137 instanceof Left) {
                    return _135(_137.value0);
                };
                if (_137 instanceof Right) {
                    return _136(_137.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
    var isRight = either(Prelude["const"](false))(Prelude["const"](true));
    var applyEither = function (_) {
        return new Prelude.Apply(function (_140) {
            return function (_141) {
                if (_140 instanceof Left) {
                    return new Left(_140.value0);
                };
                if (_140 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_140.value0)(_141);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorEither({});
        });
    };
    var bindEither = function (_) {
        return new Prelude.Bind(either(function (e) {
            return function (__1) {
                return new Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        }), function (__1) {
            return applyEither({});
        });
    };
    var applicativeEither = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEither({});
        }, Right.create);
    };
    var monadEither = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEither({});
        }, function (__1) {
            return bindEither({});
        });
    };
    return {
        Left: Left, 
        Right: Right, 
        isRight: isRight, 
        isLeft: isLeft, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither, 
        monadEither: monadEither, 
        showEither: showEither, 
        eqEither: eqEither, 
        ordEither: ordEither
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
    function length (xs) {  return xs.length;};
    function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function reverse (l) {  return l.slice().reverse();};
    function drop (n) {  return function (l) {    return l.slice(n);  };};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
    function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
    function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
    var $bang$bang = function (xs) {
        return function (n) {
            var isInt = function (n_1) {
                return n_1 !== ~~n_1;
            };
            return n < 0 || n >= length(xs) || isInt(n) ? Data_Maybe.Nothing.value : new Data_Maybe.Just(xs[n]);
        };
    };
    var take = function (n) {
        return slice(0)(n);
    };
    var tail = function (_149) {
        if (_149.length > 0) {
            var _567 = _149.slice(1);
            return new Data_Maybe.Just(_567);
        };
        return Data_Maybe.Nothing.value;
    };
    var span = (function () {
        var go = function (__copy__165) {
            return function (__copy__166) {
                return function (__copy__167) {
                    var _165 = __copy__165;
                    var _166 = __copy__166;
                    var _167 = __copy__167;
                    tco: while (true) {
                        if (_167.length > 0) {
                            var _572 = _167.slice(1);
                            if (_166(_167[0])) {
                                var __tco__165 = Prelude[":"](_167[0])(_165);
                                var __tco__166 = _166;
                                _165 = __tco__165;
                                _166 = __tco__166;
                                _167 = _572;
                                continue tco;
                            };
                        };
                        return {
                            init: reverse(_165), 
                            rest: _167
                        };
                    };
                };
            };
        };
        return go([  ]);
    })();
    var sortBy = function (comp) {
        return function (xs) {
            var comp$prime = function (x) {
                return function (y) {
                    return (function (_573) {
                        if (_573 instanceof Prelude.GT) {
                            return 1;
                        };
                        if (_573 instanceof Prelude.EQ) {
                            return 0;
                        };
                        if (_573 instanceof Prelude.LT) {
                            return -1;
                        };
                        throw new Error("Failed pattern match");
                    })(comp(x)(y));
                };
            };
            return sortJS(comp$prime)(xs);
        };
    };
    var sort = function (__dict_Ord_24) {
        return function (xs) {
            return sortBy(Prelude.compare(__dict_Ord_24))(xs);
        };
    };
    var singleton = function (a) {
        return [ a ];
    };
    var semigroupArray = function (_) {
        return new Prelude.Semigroup(append);
    };
    var $$null = function (_151) {
        if (_151.length === 0) {
            return true;
        };
        return false;
    };
    var nubBy = function (_158) {
        return function (_159) {
            if (_159.length === 0) {
                return [  ];
            };
            if (_159.length > 0) {
                var _578 = _159.slice(1);
                return Prelude[":"](_159[0])(nubBy(_158)(filter(function (y) {
                    return !_158(_159[0])(y);
                })(_578)));
            };
            throw new Error("Failed pattern match");
        };
    };
    var nub = function (__dict_Eq_25) {
        return nubBy(Prelude["=="](__dict_Eq_25));
    };
    var mapMaybe = function (f) {
        return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
    };
    var last = function (__copy__148) {
        var _148 = __copy__148;
        tco: while (true) {
            if (_148.length > 0) {
                var _581 = _148.slice(1);
                if (_581.length === 0) {
                    return new Data_Maybe.Just(_148[0]);
                };
            };
            if (_148.length > 0) {
                var _583 = _148.slice(1);
                _148 = _583;
                continue tco;
            };
            return Data_Maybe.Nothing.value;
        };
    };
    var intersectBy = function (_155) {
        return function (_156) {
            return function (_157) {
                if (_156.length === 0) {
                    return [  ];
                };
                if (_157.length === 0) {
                    return [  ];
                };
                var el = function (x) {
                    return findIndex(_155(x))(_157) >= 0;
                };
                return filter(el)(_156);
            };
        };
    };
    var intersect = function (__dict_Eq_26) {
        return intersectBy(Prelude["=="](__dict_Eq_26));
    };
    var init = function (_150) {
        if (_150.length === 0) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(slice(0)(length(_150) - 1)(_150));
    };
    var head = function (_147) {
        if (_147.length > 0) {
            var _590 = _147.slice(1);
            return new Data_Maybe.Just(_147[0]);
        };
        return Data_Maybe.Nothing.value;
    };
    var groupBy = (function () {
        var go = function (__copy__162) {
            return function (__copy__163) {
                return function (__copy__164) {
                    var _162 = __copy__162;
                    var _163 = __copy__163;
                    var _164 = __copy__164;
                    tco: while (true) {
                        if (_164.length === 0) {
                            return reverse(_162);
                        };
                        if (_164.length > 0) {
                            var _595 = _164.slice(1);
                            var sp = span(_163(_164[0]))(_595);
                            var __tco__162 = Prelude[":"](Prelude[":"](_164[0])(sp.init))(_162);
                            var __tco__163 = _163;
                            _162 = __tco__162;
                            _163 = __tco__163;
                            _164 = sp.rest;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        return go([  ]);
    })();
    var group = function (__dict_Eq_27) {
        return function (xs) {
            return groupBy(Prelude["=="](__dict_Eq_27))(xs);
        };
    };
    var group$prime = function (__dict_Ord_28) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(group(__dict_Ord_28["__superclass_Prelude.Eq_0"]({})))(sort(__dict_Ord_28));
    };
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    var elemLastIndex = function (__dict_Eq_29) {
        return function (x) {
            return findLastIndex(Prelude["=="](__dict_Eq_29)(x));
        };
    };
    var elemIndex = function (__dict_Eq_30) {
        return function (x) {
            return findIndex(Prelude["=="](__dict_Eq_30)(x));
        };
    };
    var deleteBy = function (_152) {
        return function (_153) {
            return function (_154) {
                if (_154.length === 0) {
                    return [  ];
                };
                return (function (_599) {
                    if (_599 < 0) {
                        return _154;
                    };
                    return deleteAt(_599)(1)(_154);
                })(findIndex(_152(_153))(_154));
            };
        };
    };
    var $$delete = function (__dict_Eq_31) {
        return deleteBy(Prelude["=="](__dict_Eq_31));
    };
    var $bslash$bslash = function (__dict_Eq_32) {
        return function (xs) {
            return function (ys) {
                var go = function (__copy__160) {
                    return function (__copy__161) {
                        var _160 = __copy__160;
                        var _161 = __copy__161;
                        tco: while (true) {
                            if (_161.length === 0) {
                                return _160;
                            };
                            if (_160.length === 0) {
                                return [  ];
                            };
                            if (_161.length > 0) {
                                var _603 = _161.slice(1);
                                var __tco__160 = $$delete(__dict_Eq_32)(_161[0])(_160);
                                _160 = __tco__160;
                                _161 = _603;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
                return go(xs)(ys);
            };
        };
    };
    var catMaybes = concatMap(Data_Maybe.maybe([  ])(singleton));
    var applicativeArray = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyArray({});
        }, singleton);
    };
    var applyArray = function (_) {
        return new Prelude.Apply(Prelude.ap(monadArray({})), function (__1) {
            return functorArray({});
        });
    };
    var monadArray = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeArray({});
        }, function (__1) {
            return bindArray({});
        });
    };
    var bindArray = function (_) {
        return new Prelude.Bind(Prelude.flip(concatMap), function (__1) {
            return applyArray({});
        });
    };
    var alternativeArray = function (_) {
        return new Prelude.Alternative(append, [  ]);
    };
    return {
        span: span, 
        groupBy: groupBy, 
        "group'": group$prime, 
        group: group, 
        sortBy: sortBy, 
        sort: sort, 
        nubBy: nubBy, 
        nub: nub, 
        zipWith: zipWith, 
        range: range, 
        filter: filter, 
        concatMap: concatMap, 
        intersect: intersect, 
        intersectBy: intersectBy, 
        "\\\\": $bslash$bslash, 
        "delete": $$delete, 
        deleteBy: deleteBy, 
        updateAt: updateAt, 
        deleteAt: deleteAt, 
        insertAt: insertAt, 
        take: take, 
        drop: drop, 
        reverse: reverse, 
        concat: concat, 
        append: append, 
        elemLastIndex: elemLastIndex, 
        elemIndex: elemIndex, 
        findLastIndex: findLastIndex, 
        findIndex: findIndex, 
        length: length, 
        catMaybes: catMaybes, 
        mapMaybe: mapMaybe, 
        map: map, 
        "null": $$null, 
        init: init, 
        tail: tail, 
        last: last, 
        head: head, 
        singleton: singleton, 
        snoc: snoc, 
        "!!": $bang$bang, 
        functorArray: functorArray, 
        applyArray: applyArray, 
        applicativeArray: applicativeArray, 
        bindArray: bindArray, 
        monadArray: monadArray, 
        semigroupArray: semigroupArray, 
        alternativeArray: alternativeArray
    };
})();
var PS = PS || {};
PS.Data_Array_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    var Data_Array = PS.Data_Array;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var tail = function (_169) {
        if (_169.length > 0) {
            var _606 = _169.slice(1);
            return _606;
        };
        throw new Error("Failed pattern match");
    };
    var last = function (xs) {
        return xs[Data_Array.length(xs) - 1];
    };
    var init = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Data_Array.init);
    var head = function (_168) {
        if (_168.length > 0) {
            var _609 = _168.slice(1);
            return _168[0];
        };
        throw new Error("Failed pattern match");
    };
    return {
        init: init, 
        last: last, 
        tail: tail, 
        head: head
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    function Monoid(__superclass_Prelude$dotSemigroup_0, mempty) {
        this["__superclass_Prelude.Semigroup_0"] = __superclass_Prelude$dotSemigroup_0;
        this.mempty = mempty;
    };
    var monoidUnit = function (_) {
        return new Monoid(function (__1) {
            return Prelude.semigroupUnit({});
        }, Prelude.unit);
    };
    var monoidString = function (_) {
        return new Monoid(function (__1) {
            return Prelude.semigroupString({});
        }, "");
    };
    var monoidArray = function (_) {
        return new Monoid(function (__1) {
            return Data_Array.semigroupArray({});
        }, [  ]);
    };
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        Monoid: Monoid, 
        mempty: mempty, 
        monoidString: monoidString, 
        monoidArray: monoidArray, 
        monoidUnit: monoidUnit
    };
})();
var PS = PS || {};
PS.Data_Monoid_All = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function All(value0) {
        this.value0 = value0;
    };
    All.create = function (value0) {
        return new All(value0);
    };
    var showAll = function (_) {
        return new Prelude.Show(function (_175) {
            return "All (" + Prelude.show(Prelude.showBoolean({}))(_175.value0) + ")";
        });
    };
    var semigroupAll = function (_) {
        return new Prelude.Semigroup(function (_176) {
            return function (_177) {
                return new All(_176.value0 && _177.value0);
            };
        });
    };
    var runAll = function (_170) {
        return _170.value0;
    };
    var monoidAll = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAll({});
        }, new All(true));
    };
    var eqAll = function (_) {
        return new Prelude.Eq(function (_173) {
            return function (_174) {
                return _173.value0 !== _174.value0;
            };
        }, function (_171) {
            return function (_172) {
                return _171.value0 === _172.value0;
            };
        });
    };
    return {
        All: All, 
        runAll: runAll, 
        eqAll: eqAll, 
        showAll: showAll, 
        semigroupAll: semigroupAll, 
        monoidAll: monoidAll
    };
})();
var PS = PS || {};
PS.Data_Monoid_Any = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Any(value0) {
        this.value0 = value0;
    };
    Any.create = function (value0) {
        return new Any(value0);
    };
    var showAny = function (_) {
        return new Prelude.Show(function (_183) {
            return "Any (" + Prelude.show(Prelude.showBoolean({}))(_183.value0) + ")";
        });
    };
    var semigroupAny = function (_) {
        return new Prelude.Semigroup(function (_184) {
            return function (_185) {
                return new Any(_184.value0 || _185.value0);
            };
        });
    };
    var runAny = function (_178) {
        return _178.value0;
    };
    var monoidAny = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAny({});
        }, new Any(false));
    };
    var eqAny = function (_) {
        return new Prelude.Eq(function (_181) {
            return function (_182) {
                return _181.value0 !== _182.value0;
            };
        }, function (_179) {
            return function (_180) {
                return _179.value0 === _180.value0;
            };
        });
    };
    return {
        Any: Any, 
        runAny: runAny, 
        eqAny: eqAny, 
        showAny: showAny, 
        semigroupAny: semigroupAny, 
        monoidAny: monoidAny
    };
})();
var PS = PS || {};
PS.Data_Monoid_Dual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Dual(value0) {
        this.value0 = value0;
    };
    Dual.create = function (value0) {
        return new Dual(value0);
    };
    var showDual = function (__dict_Show_33) {
        return new Prelude.Show(function (_193) {
            return "Dual (" + Prelude.show(__dict_Show_33)(_193.value0) + ")";
        });
    };
    var semigroupDual = function (__dict_Semigroup_34) {
        return new Prelude.Semigroup(function (_194) {
            return function (_195) {
                return new Dual(Prelude["<>"](__dict_Semigroup_34)(_195.value0)(_194.value0));
            };
        });
    };
    var runDual = function (_186) {
        return _186.value0;
    };
    var monoidDual = function (__dict_Monoid_36) {
        return new Data_Monoid.Monoid(function (_) {
            return semigroupDual(__dict_Monoid_36["__superclass_Prelude.Semigroup_0"]({}));
        }, new Dual(Data_Monoid.mempty(__dict_Monoid_36)));
    };
    var eqDual = function (__dict_Eq_37) {
        return new Prelude.Eq(function (_189) {
            return function (_190) {
                return Prelude["/="](__dict_Eq_37)(_189.value0)(_190.value0);
            };
        }, function (_187) {
            return function (_188) {
                return Prelude["=="](__dict_Eq_37)(_187.value0)(_188.value0);
            };
        });
    };
    var ordDual = function (__dict_Ord_35) {
        return new Prelude.Ord(function (_) {
            return eqDual(__dict_Ord_35["__superclass_Prelude.Eq_0"]({}));
        }, function (_191) {
            return function (_192) {
                return Prelude.compare(__dict_Ord_35)(_191.value0)(_192.value0);
            };
        });
    };
    return {
        Dual: Dual, 
        runDual: runDual, 
        eqDual: eqDual, 
        ordDual: ordDual, 
        showDual: showDual, 
        semigroupDual: semigroupDual, 
        monoidDual: monoidDual
    };
})();
var PS = PS || {};
PS.Data_Monoid_Endo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Endo(value0) {
        this.value0 = value0;
    };
    Endo.create = function (value0) {
        return new Endo(value0);
    };
    var semigroupEndo = function (_) {
        return new Prelude.Semigroup(function (_197) {
            return function (_198) {
                return new Endo(Prelude["<<<"](Prelude.semigroupoidArr({}))(_197.value0)(_198.value0));
            };
        });
    };
    var runEndo = function (_196) {
        return _196.value0;
    };
    var monoidEndo = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupEndo({});
        }, new Endo(Prelude.id(Prelude.categoryArr({}))));
    };
    return {
        Endo: Endo, 
        runEndo: runEndo, 
        semigroupEndo: semigroupEndo, 
        monoidEndo: monoidEndo
    };
})();
var PS = PS || {};
PS.Data_Monoid_First = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    function First(value0) {
        this.value0 = value0;
    };
    First.create = function (value0) {
        return new First(value0);
    };
    var showFirst = function (__dict_Show_38) {
        return new Prelude.Show(function (_206) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_38))(_206.value0) + ")";
        });
    };
    var semigroupFirst = function (_) {
        return new Prelude.Semigroup(function (_207) {
            return function (_208) {
                if (_207.value0 instanceof Data_Maybe.Just) {
                    return _207;
                };
                return _208;
            };
        });
    };
    var runFirst = function (_199) {
        return _199.value0;
    };
    var monoidFirst = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupFirst({});
        }, new First(Data_Maybe.Nothing.value));
    };
    var eqFirst = function (__dict_Eq_40) {
        return new Prelude.Eq(function (_202) {
            return function (_203) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_40))(_202.value0)(_203.value0);
            };
        }, function (_200) {
            return function (_201) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_40))(_200.value0)(_201.value0);
            };
        });
    };
    var ordFirst = function (__dict_Ord_39) {
        return new Prelude.Ord(function (_) {
            return eqFirst(__dict_Ord_39["__superclass_Prelude.Eq_0"]({}));
        }, function (_204) {
            return function (_205) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_39))(_204.value0)(_205.value0);
            };
        });
    };
    return {
        First: First, 
        runFirst: runFirst, 
        eqFirst: eqFirst, 
        ordFirst: ordFirst, 
        showFirst: showFirst, 
        semigroupFirst: semigroupFirst, 
        monoidFirst: monoidFirst
    };
})();
var PS = PS || {};
PS.Data_Monoid_Last = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    function Last(value0) {
        this.value0 = value0;
    };
    Last.create = function (value0) {
        return new Last(value0);
    };
    var showLast = function (__dict_Show_41) {
        return new Prelude.Show(function (_216) {
            return "Last (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_41))(_216.value0) + ")";
        });
    };
    var semigroupLast = function (_) {
        return new Prelude.Semigroup(function (_217) {
            return function (_218) {
                if (_218.value0 instanceof Data_Maybe.Just) {
                    return _218;
                };
                if (_218.value0 instanceof Data_Maybe.Nothing) {
                    return _217;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var runLast = function (_209) {
        return _209.value0;
    };
    var monoidLast = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupLast({});
        }, new Last(Data_Maybe.Nothing.value));
    };
    var eqLast = function (__dict_Eq_43) {
        return new Prelude.Eq(function (_212) {
            return function (_213) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_43))(_212.value0)(_213.value0);
            };
        }, function (_210) {
            return function (_211) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_43))(_210.value0)(_211.value0);
            };
        });
    };
    var ordLast = function (__dict_Ord_42) {
        return new Prelude.Ord(function (_) {
            return eqLast(__dict_Ord_42["__superclass_Prelude.Eq_0"]({}));
        }, function (_214) {
            return function (_215) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_42))(_214.value0)(_215.value0);
            };
        });
    };
    return {
        Last: Last, 
        runLast: runLast, 
        eqLast: eqLast, 
        ordLast: ordLast, 
        showLast: showLast, 
        semigroupLast: semigroupLast, 
        monoidLast: monoidLast
    };
})();
var PS = PS || {};
PS.Data_Monoid_Product = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Product(value0) {
        this.value0 = value0;
    };
    Product.create = function (value0) {
        return new Product(value0);
    };
    var showProduct = function (_) {
        return new Prelude.Show(function (_226) {
            return "Product (" + Prelude.show(Prelude.showNumber({}))(_226.value0) + ")";
        });
    };
    var semigroupProduct = function (_) {
        return new Prelude.Semigroup(function (_227) {
            return function (_228) {
                return new Product(_227.value0 * _228.value0);
            };
        });
    };
    var runProduct = function (_219) {
        return _219.value0;
    };
    var monoidProduct = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupProduct({});
        }, new Product(1));
    };
    var eqProduct = function (_) {
        return new Prelude.Eq(function (_222) {
            return function (_223) {
                return _222.value0 !== _223.value0;
            };
        }, function (_220) {
            return function (_221) {
                return _220.value0 === _221.value0;
            };
        });
    };
    var ordProduct = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqProduct({});
        }, function (_224) {
            return function (_225) {
                return Prelude.compare(Prelude.ordNumber({}))(_224.value0)(_225.value0);
            };
        });
    };
    return {
        Product: Product, 
        runProduct: runProduct, 
        eqProduct: eqProduct, 
        ordProduct: ordProduct, 
        showProduct: showProduct, 
        semigroupProduct: semigroupProduct, 
        monoidProduct: monoidProduct
    };
})();
var PS = PS || {};
PS.Data_Monoid_Sum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Sum(value0) {
        this.value0 = value0;
    };
    Sum.create = function (value0) {
        return new Sum(value0);
    };
    var showSum = function (_) {
        return new Prelude.Show(function (_236) {
            return "Sum (" + Prelude.show(Prelude.showNumber({}))(_236.value0) + ")";
        });
    };
    var semigroupSum = function (_) {
        return new Prelude.Semigroup(function (_237) {
            return function (_238) {
                return new Sum(_237.value0 + _238.value0);
            };
        });
    };
    var runSum = function (_229) {
        return _229.value0;
    };
    var monoidSum = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupSum({});
        }, new Sum(0));
    };
    var eqSum = function (_) {
        return new Prelude.Eq(function (_232) {
            return function (_233) {
                return _232.value0 !== _233.value0;
            };
        }, function (_230) {
            return function (_231) {
                return _230.value0 === _231.value0;
            };
        });
    };
    var ordSum = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqSum({});
        }, function (_234) {
            return function (_235) {
                return Prelude.compare(Prelude.ordNumber({}))(_234.value0)(_235.value0);
            };
        });
    };
    return {
        Sum: Sum, 
        runSum: runSum, 
        eqSum: eqSum, 
        ordSum: ordSum, 
        showSum: showSum, 
        semigroupSum: semigroupSum, 
        monoidSum: monoidSum
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Monoid = PS.Data_Monoid;
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    var zip = Data_Array.zipWith(Tuple.create);
    var unzip = function (_243) {
        if (_243.length > 0) {
            var _754 = _243.slice(1);
            return (function (_750) {
                return new Tuple(Prelude[":"]((_243[0]).value0)(_750.value0), Prelude[":"]((_243[0]).value1)(_750.value1));
            })(unzip(_754));
        };
        if (_243.length === 0) {
            return new Tuple([  ], [  ]);
        };
        throw new Error("Failed pattern match");
    };
    var uncurry = function (_241) {
        return function (_242) {
            return _241(_242.value0)(_242.value1);
        };
    };
    var swap = function (_244) {
        return new Tuple(_244.value1, _244.value0);
    };
    var snd = function (_240) {
        return _240.value1;
    };
    var showTuple = function (__dict_Show_44) {
        return function (__dict_Show_45) {
            return new Prelude.Show(function (_245) {
                return "Tuple (" + Prelude.show(__dict_Show_44)(_245.value0) + ") (" + Prelude.show(__dict_Show_45)(_245.value1) + ")";
            });
        };
    };
    var functorTuple = function (_) {
        return new Prelude.Functor(function (_250) {
            return function (_251) {
                return new Tuple(_251.value0, _250(_251.value1));
            };
        });
    };
    var fst = function (_239) {
        return _239.value0;
    };
    var eqTuple = function (__dict_Eq_49) {
        return function (__dict_Eq_50) {
            return new Prelude.Eq(function (t1) {
                return function (t2) {
                    return !Prelude["=="](eqTuple(__dict_Eq_49)(__dict_Eq_50))(t1)(t2);
                };
            }, function (_246) {
                return function (_247) {
                    return Prelude["=="](__dict_Eq_49)(_246.value0)(_247.value0) && Prelude["=="](__dict_Eq_50)(_246.value1)(_247.value1);
                };
            });
        };
    };
    var ordTuple = function (__dict_Ord_46) {
        return function (__dict_Ord_47) {
            return new Prelude.Ord(function (_) {
                return eqTuple(__dict_Ord_46["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_47["__superclass_Prelude.Eq_0"]({}));
            }, function (_248) {
                return function (_249) {
                    return (function (_785) {
                        if (_785 instanceof Prelude.EQ) {
                            return Prelude.compare(__dict_Ord_47)(_248.value1)(_249.value1);
                        };
                        return _785;
                    })(Prelude.compare(__dict_Ord_46)(_248.value0)(_249.value0));
                };
            });
        };
    };
    var curry = function (f) {
        return function (a) {
            return function (b) {
                return f(new Tuple(a, b));
            };
        };
    };
    var applyTuple = function (__dict_Semigroup_52) {
        return new Prelude.Apply(function (_252) {
            return function (_253) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_52)(_252.value0)(_253.value0), _252.value1(_253.value1));
            };
        }, functorTuple);
    };
    var bindTuple = function (__dict_Semigroup_51) {
        return new Prelude.Bind(function (_254) {
            return function (_255) {
                return (function (_798) {
                    return new Tuple(Prelude["<>"](__dict_Semigroup_51)(_254.value0)(_798.value0), _798.value1);
                })(_255(_254.value1));
            };
        }, function (_) {
            return applyTuple(__dict_Semigroup_51);
        });
    };
    var applicativeTuple = function (__dict_Monoid_53) {
        return new Prelude.Applicative(function (_) {
            return applyTuple(__dict_Monoid_53["__superclass_Prelude.Semigroup_0"]({}));
        }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_53)));
    };
    var monadTuple = function (__dict_Monoid_48) {
        return new Prelude.Monad(function (_) {
            return applicativeTuple(__dict_Monoid_48);
        }, function (_) {
            return bindTuple(__dict_Monoid_48["__superclass_Prelude.Semigroup_0"]({}));
        });
    };
    return {
        Tuple: Tuple, 
        swap: swap, 
        unzip: unzip, 
        zip: zip, 
        uncurry: uncurry, 
        curry: curry, 
        snd: snd, 
        fst: fst, 
        showTuple: showTuple, 
        eqTuple: eqTuple, 
        ordTuple: ordTuple, 
        functorTuple: functorTuple, 
        applyTuple: applyTuple, 
        applicativeTuple: applicativeTuple, 
        bindTuple: bindTuple, 
        monadTuple: monadTuple
    };
})();
var PS = PS || {};
PS.Control_Monad_Trans = (function () {
    "use strict";
    function MonadTrans(lift) {
        this.lift = lift;
    };
    var lift = function (dict) {
        return dict.lift;
    };
    return {
        MonadTrans: MonadTrans, 
        lift: lift
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Monoid = PS.Data_Monoid;
    var WriterT = {
        create: function (value) {
            return value;
        }
    };
    var runWriterT = function (_257) {
        return _257;
    };
    var monadTransWriterT = function (__dict_Monoid_56) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_57) {
            return function (m) {
                return WriterT.create(Prelude[">>="](__dict_Monad_57["__superclass_Prelude.Bind_1"]({}))(m)(function (_5) {
                    return Prelude["return"](__dict_Monad_57)(new Data_Tuple.Tuple(_5, Data_Monoid.mempty(__dict_Monoid_56)));
                }));
            };
        });
    };
    var mapWriterT = function (f) {
        return function (m) {
            return WriterT.create(f(runWriterT(m)));
        };
    };
    var liftCatchWriter = function ($$catch) {
        return function (m) {
            return function (h) {
                return WriterT.create($$catch(runWriterT(m))(function (e) {
                    return runWriterT(h(e));
                }));
            };
        };
    };
    var liftCallCCWriter = function (__dict_Monoid_58) {
        return function (callCC) {
            return function (f) {
                return WriterT.create(callCC(function (c) {
                    return runWriterT(f(function (a) {
                        return WriterT.create(c(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_58))));
                    }));
                }));
            };
        };
    };
    var functorWriterT = function (__dict_Functor_59) {
        return new Prelude.Functor(function (f) {
            return mapWriterT(Prelude["<$>"](__dict_Functor_59)(function (_256) {
                return new Data_Tuple.Tuple(f(_256.value0), _256.value1);
            }));
        });
    };
    var applyWriterT = function (__dict_Monoid_62) {
        return function (__dict_Functor_63) {
            return function (__dict_Applicative_64) {
                return new Prelude.Apply(function (f) {
                    return function (v) {
                        return WriterT.create((function () {
                            var k = function (_258) {
                                return function (_259) {
                                    return new Data_Tuple.Tuple(_258.value0(_259.value0), Prelude["<>"](__dict_Monoid_62["__superclass_Prelude.Semigroup_0"]({}))(_258.value1)(_259.value1));
                                };
                            };
                            return Prelude["<*>"](__dict_Applicative_64["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_63)(k)(runWriterT(f)))(runWriterT(v));
                        })());
                    };
                }, function (_) {
                    return functorWriterT(__dict_Functor_63);
                });
            };
        };
    };
    var bindWriterT = function (__dict_Monoid_60) {
        return function (__dict_Monad_61) {
            return new Prelude.Bind(function (m) {
                return function (k) {
                    return WriterT.create(Prelude[">>="](__dict_Monad_61["__superclass_Prelude.Bind_1"]({}))(runWriterT(m))(function (_4) {
                        return Prelude[">>="](__dict_Monad_61["__superclass_Prelude.Bind_1"]({}))(runWriterT(k(_4.value0)))(function (_3) {
                            return Prelude["return"](__dict_Monad_61)(new Data_Tuple.Tuple(_3.value0, Prelude["<>"](__dict_Monoid_60["__superclass_Prelude.Semigroup_0"]({}))(_4.value1)(_3.value1)));
                        });
                    }));
                };
            }, function (_) {
                return applyWriterT(__dict_Monoid_60)(((__dict_Monad_61["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_61["__superclass_Prelude.Applicative_0"]({}));
            });
        };
    };
    var applicativeWriterT = function (__dict_Monoid_65) {
        return function (__dict_Functor_66) {
            return function (__dict_Applicative_67) {
                return new Prelude.Applicative(function (_) {
                    return applyWriterT(__dict_Monoid_65)(__dict_Functor_66)(__dict_Applicative_67);
                }, function (a) {
                    return WriterT.create(Prelude.pure(__dict_Applicative_67)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_65))));
                });
            };
        };
    };
    var monadWriterT = function (__dict_Monoid_54) {
        return function (__dict_Monad_55) {
            return new Prelude.Monad(function (_) {
                return applicativeWriterT(__dict_Monoid_54)(((__dict_Monad_55["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_55["__superclass_Prelude.Applicative_0"]({}));
            }, function (_) {
                return bindWriterT(__dict_Monoid_54)(__dict_Monad_55);
            });
        };
    };
    var alternativeWriterT = function (__dict_Monoid_68) {
        return function (__dict_Alternative_69) {
            return new Prelude.Alternative(function (m) {
                return function (n) {
                    return WriterT.create(Prelude["<|>"](__dict_Alternative_69)(runWriterT(m))(runWriterT(n)));
                };
            }, Prelude.empty(__dict_Alternative_69));
        };
    };
    return {
        WriterT: WriterT, 
        liftCallCCWriter: liftCallCCWriter, 
        liftCatchWriter: liftCatchWriter, 
        mapWriterT: mapWriterT, 
        runWriterT: runWriterT, 
        functorWriterT: functorWriterT, 
        applyWriterT: applyWriterT, 
        applicativeWriterT: applicativeWriterT, 
        alternativeWriterT: alternativeWriterT, 
        bindWriterT: bindWriterT, 
        monadWriterT: monadWriterT, 
        monadTransWriterT: monadTransWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Tuple = PS.Data_Tuple;
    var StateT = {
        create: function (value) {
            return value;
        }
    };
    var runStateT = function (_262) {
        return _262;
    };
    var withStateT = function (f) {
        return function (s) {
            return StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(runStateT(s))(f));
        };
    };
    var monadTransStateT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_70) {
            return function (m) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_70["__superclass_Prelude.Bind_1"]({}))(m)(function (_7) {
                        return Prelude["return"](__dict_Monad_70)(new Data_Tuple.Tuple(_7, s));
                    });
                };
            };
        });
    };
    var mapStateT = function (f) {
        return function (m) {
            return StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runStateT(m)));
        };
    };
    var liftPassState = function (__dict_Monad_72) {
        return function (pass) {
            return function (m) {
                return StateT.create(function (s) {
                    return pass(Prelude[">>="](__dict_Monad_72["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_9) {
                        return Prelude["return"](__dict_Monad_72)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_9.value0.value0, _9.value1), _9.value0.value1));
                    }));
                });
            };
        };
    };
    var liftListenState = function (__dict_Monad_73) {
        return function (listen) {
            return function (m) {
                return StateT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_73["__superclass_Prelude.Bind_1"]({}))(listen(runStateT(m)(s)))(function (_8) {
                        return Prelude["return"](__dict_Monad_73)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_8.value0.value0, _8.value1), _8.value0.value1));
                    });
                });
            };
        };
    };
    var liftCatchState = function ($$catch) {
        return function (m) {
            return function (h) {
                return StateT.create(function (s) {
                    return $$catch(runStateT(m)(s))(function (e) {
                        return runStateT(h(e))(s);
                    });
                });
            };
        };
    };
    var liftCallCCState$prime = function (callCC) {
        return function (f) {
            return StateT.create(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT.create(function (s$prime) {
                            return c(new Data_Tuple.Tuple(a, s$prime));
                        });
                    }))(s);
                });
            });
        };
    };
    var liftCallCCState = function (callCC) {
        return function (f) {
            return StateT.create(function (s) {
                return callCC(function (c) {
                    return runStateT(f(function (a) {
                        return StateT.create(function (_) {
                            return c(new Data_Tuple.Tuple(a, s));
                        });
                    }))(s);
                });
            });
        };
    };
    var execStateT = function (__dict_Monad_75) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_75["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_261) {
                    return Prelude["return"](__dict_Monad_75)(_261.value1);
                });
            };
        };
    };
    var evalStateT = function (__dict_Monad_76) {
        return function (m) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_76["__superclass_Prelude.Bind_1"]({}))(runStateT(m)(s))(function (_260) {
                    return Prelude["return"](__dict_Monad_76)(_260.value0);
                });
            };
        };
    };
    var applicativeStateT = function (__dict_Monad_79) {
        return new Prelude.Applicative(function (_) {
            return applyStateT(__dict_Monad_79);
        }, function (a) {
            return StateT.create(function (s) {
                return Prelude["return"](__dict_Monad_79)(new Data_Tuple.Tuple(a, s));
            });
        });
    };
    var applyStateT = function (__dict_Monad_78) {
        return new Prelude.Apply(Prelude.ap(monadStateT(__dict_Monad_78)), function (_) {
            return functorStateT(__dict_Monad_78);
        });
    };
    var monadStateT = function (__dict_Monad_71) {
        return new Prelude.Monad(function (_) {
            return applicativeStateT(__dict_Monad_71);
        }, function (_) {
            return bindStateT(__dict_Monad_71);
        });
    };
    var bindStateT = function (__dict_Monad_77) {
        return new Prelude.Bind(function (_263) {
            return function (_264) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_77["__superclass_Prelude.Bind_1"]({}))(_263(s))(function (_6) {
                        return runStateT(_264(_6.value0))(_6.value1);
                    });
                };
            };
        }, function (_) {
            return applyStateT(__dict_Monad_77);
        });
    };
    var functorStateT = function (__dict_Monad_74) {
        return new Prelude.Functor(Prelude.liftM1(monadStateT(__dict_Monad_74)));
    };
    var alternativeStateT = function (__dict_Alternative_80) {
        return new Prelude.Alternative(function (x) {
            return function (y) {
                return StateT.create(function (s) {
                    return Prelude["<|>"](__dict_Alternative_80)(runStateT(x)(s))(runStateT(y)(s));
                });
            };
        }, StateT.create(function (_) {
            return Prelude.empty(__dict_Alternative_80);
        }));
    };
    return {
        StateT: StateT, 
        "liftCallCCState'": liftCallCCState$prime, 
        liftCallCCState: liftCallCCState, 
        liftPassState: liftPassState, 
        liftListenState: liftListenState, 
        liftCatchState: liftCatchState, 
        withStateT: withStateT, 
        mapStateT: mapStateT, 
        execStateT: execStateT, 
        evalStateT: evalStateT, 
        runStateT: runStateT, 
        functorStateT: functorStateT, 
        applyStateT: applyStateT, 
        applicativeStateT: applicativeStateT, 
        alternativeStateT: alternativeStateT, 
        bindStateT: bindStateT, 
        monadStateT: monadStateT, 
        monadTransStateT: monadTransStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var ReaderT = {
        create: function (value) {
            return value;
        }
    };
    var runReaderT = function (_265) {
        return _265;
    };
    var withReaderT = function (f) {
        return function (m) {
            return ReaderT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(runReaderT(m))(f));
        };
    };
    var mapReaderT = function (f) {
        return function (m) {
            return ReaderT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runReaderT(m)));
        };
    };
    var liftReaderT = function (m) {
        return Prelude["const"](m);
    };
    var monadTransReaderT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_82) {
            return liftReaderT;
        });
    };
    var liftCatchReader = function ($$catch) {
        return function (m) {
            return function (h) {
                return ReaderT.create(function (r) {
                    return $$catch(runReaderT(m)(r))(function (e) {
                        return runReaderT(h(e))(r);
                    });
                });
            };
        };
    };
    var liftCallCCReader = function (callCC) {
        return function (f) {
            return ReaderT.create(function (r) {
                return callCC(function (c) {
                    return runReaderT(f(function (a) {
                        return ReaderT.create(Prelude["const"](c(a)));
                    }))(r);
                });
            });
        };
    };
    var functorReaderT = function (__dict_Functor_83) {
        return new Prelude.Functor(function (f) {
            return mapReaderT(Prelude["<$>"](__dict_Functor_83)(f));
        });
    };
    var applyReaderT = function (__dict_Applicative_85) {
        return new Prelude.Apply(function (f) {
            return function (v) {
                return function (r) {
                    return Prelude["<*>"](__dict_Applicative_85["__superclass_Prelude.Apply_0"]({}))(runReaderT(f)(r))(runReaderT(v)(r));
                };
            };
        }, function (_) {
            return functorReaderT((__dict_Applicative_85["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}));
        });
    };
    var bindReaderT = function (__dict_Monad_84) {
        return new Prelude.Bind(function (m) {
            return function (k) {
                return function (r) {
                    return Prelude[">>="](__dict_Monad_84["__superclass_Prelude.Bind_1"]({}))(runReaderT(m)(r))(function (_10) {
                        return runReaderT(k(_10))(r);
                    });
                };
            };
        }, function (_) {
            return applyReaderT(__dict_Monad_84["__superclass_Prelude.Applicative_0"]({}));
        });
    };
    var applicativeReaderT = function (__dict_Applicative_86) {
        return new Prelude.Applicative(function (_) {
            return applyReaderT(__dict_Applicative_86);
        }, Prelude["<<<"](Prelude.semigroupoidArr({}))(liftReaderT)(Prelude.pure(__dict_Applicative_86)));
    };
    var monadReaderT = function (__dict_Monad_81) {
        return new Prelude.Monad(function (_) {
            return applicativeReaderT(__dict_Monad_81["__superclass_Prelude.Applicative_0"]({}));
        }, function (_) {
            return bindReaderT(__dict_Monad_81);
        });
    };
    var alternativeReaderT = function (__dict_Alternative_87) {
        return new Prelude.Alternative(function (m) {
            return function (n) {
                return function (r) {
                    return Prelude["<|>"](__dict_Alternative_87)(runReaderT(m)(r))(runReaderT(n)(r));
                };
            };
        }, liftReaderT(Prelude.empty(__dict_Alternative_87)));
    };
    return {
        ReaderT: ReaderT, 
        liftCallCCReader: liftCallCCReader, 
        liftCatchReader: liftCatchReader, 
        liftReaderT: liftReaderT, 
        mapReaderT: mapReaderT, 
        withReaderT: withReaderT, 
        runReaderT: runReaderT, 
        functorReaderT: functorReaderT, 
        applyReaderT: applyReaderT, 
        applicativeReaderT: applicativeReaderT, 
        alternativeReaderT: alternativeReaderT, 
        bindReaderT: bindReaderT, 
        monadReaderT: monadReaderT, 
        monadTransReaderT: monadTransReaderT
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Trans = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Monoid = PS.Data_Monoid;
    var RWST = {
        create: function (value) {
            return value;
        }
    };
    var runRWST = function (_268) {
        return _268;
    };
    var withRWST = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Data_Tuple.uncurry(runRWST(m))(f(r)(s));
                };
            };
        };
    };
    var mkSee = function (__dict_Monoid_90) {
        return function (s) {
            return function (a) {
                return function (w) {
                    return {
                        state: s, 
                        result: a, 
                        log: w
                    };
                };
            };
        };
    };
    var monadTransRWST = function (__dict_Monoid_91) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_92) {
            return function (m) {
                return function (_) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_92["__superclass_Prelude.Bind_1"]({}))(m)(function (a) {
                            return Prelude["return"](__dict_Monad_92)(mkSee(__dict_Monoid_91)(s)(a)(Data_Monoid.mempty(__dict_Monoid_91)));
                        });
                    };
                };
            };
        });
    };
    var mapRWST = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return f(runRWST(m)(r)(s));
                };
            };
        };
    };
    var functorRWST = function (__dict_Functor_93) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude["<$>"](__dict_Functor_93)(function (see) {
                            var _846 = {};
                            for (var _847 in see) {
                                if (see.hasOwnProperty(_847)) {
                                    _846[_847] = see[_847];
                                };
                            };
                            _846.result = f(see.result);
                            return _846;
                        })(runRWST(m)(r)(s));
                    };
                };
            };
        });
    };
    var execRWST = function (__dict_Monad_94) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_94["__superclass_Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_94)(new Data_Tuple.Tuple(see.state, see.log));
                    });
                };
            };
        };
    };
    var evalRWST = function (__dict_Monad_95) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_95["__superclass_Prelude.Bind_1"]({}))(runRWST(m)(r)(s))(function (see) {
                        return Prelude["return"](__dict_Monad_95)(new Data_Tuple.Tuple(see.result, see.log));
                    });
                };
            };
        };
    };
    var applyRWST = function (__dict_Apply_98) {
        return function (__dict_Semigroup_99) {
            return new Prelude.Apply(function (f) {
                return function (m) {
                    return function (r) {
                        return function (s) {
                            return Prelude["<*>"](__dict_Apply_98)(Prelude["<$>"](__dict_Apply_98["__superclass_Prelude.Functor_0"]({}))(function (_266) {
                                return function (see) {
                                    var _849 = {};
                                    for (var _850 in see) {
                                        if (see.hasOwnProperty(_850)) {
                                            _849[_850] = see[_850];
                                        };
                                    };
                                    _849.result = _266.result(see.result);
                                    _849.log = Prelude["<>"](__dict_Semigroup_99)(_266.log)(see.log);
                                    return _849;
                                };
                            })(runRWST(f)(r)(s)))(runRWST(m)(r)(s));
                        };
                    };
                };
            }, function (_) {
                return functorRWST(__dict_Apply_98["__superclass_Prelude.Functor_0"]({}));
            });
        };
    };
    var bindRWST = function (__dict_Bind_96) {
        return function (__dict_Semigroup_97) {
            return new Prelude.Bind(function (m) {
                return function (f) {
                    return function (r) {
                        return function (s) {
                            return Prelude[">>="](__dict_Bind_96)(runRWST(m)(r)(s))(function (_267) {
                                return Prelude["<$>"]((__dict_Bind_96["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (see$prime) {
                                    var _854 = {};
                                    for (var _855 in see$prime) {
                                        if (see$prime.hasOwnProperty(_855)) {
                                            _854[_855] = see$prime[_855];
                                        };
                                    };
                                    _854.log = Prelude["<>"](__dict_Semigroup_97)(_267.log)(see$prime.log);
                                    return _854;
                                })(runRWST(f(_267.result))(r)(_267.state));
                            });
                        };
                    };
                };
            }, function (_) {
                return applyRWST(__dict_Bind_96["__superclass_Prelude.Apply_0"]({}))(__dict_Semigroup_97);
            });
        };
    };
    var applicativeRWST = function (__dict_Applicative_100) {
        return function (__dict_Monoid_101) {
            return new Prelude.Applicative(function (_) {
                return applyRWST(__dict_Applicative_100["__superclass_Prelude.Apply_0"]({}))(__dict_Monoid_101["__superclass_Prelude.Semigroup_0"]({}));
            }, function (a) {
                return function (_) {
                    return function (s) {
                        return Prelude.pure(__dict_Applicative_100)(mkSee(__dict_Monoid_101)(s)(a)(Data_Monoid.mempty(__dict_Monoid_101)));
                    };
                };
            });
        };
    };
    var monadRWST = function (__dict_Monad_88) {
        return function (__dict_Monoid_89) {
            return new Prelude.Monad(function (_) {
                return applicativeRWST(__dict_Monad_88["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_89);
            }, function (_) {
                return bindRWST(__dict_Monad_88["__superclass_Prelude.Bind_1"]({}))(__dict_Monoid_89["__superclass_Prelude.Semigroup_0"]({}));
            });
        };
    };
    return {
        RWST: RWST, 
        withRWST: withRWST, 
        mapRWST: mapRWST, 
        execRWST: execRWST, 
        evalRWST: evalRWST, 
        runRWST: runRWST, 
        mkSee: mkSee, 
        functorRWST: functorRWST, 
        applyRWST: applyRWST, 
        bindRWST: bindRWST, 
        applicativeRWST: applicativeRWST, 
        monadRWST: monadRWST, 
        monadTransRWST: monadTransRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Identity = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Identity = {
        create: function (value) {
            return value;
        }
    };
    var runIdentity = function (_269) {
        return _269;
    };
    var functorIdentity = function (_) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return Identity.create(f(runIdentity(m)));
            };
        });
    };
    var applyIdentity = function (_) {
        return new Prelude.Apply(function (_270) {
            return function (_271) {
                return Identity.create(_270(_271));
            };
        }, function (__1) {
            return functorIdentity({});
        });
    };
    var bindIdentity = function (_) {
        return new Prelude.Bind(function (m) {
            return function (f) {
                return f(runIdentity(m));
            };
        }, function (__1) {
            return applyIdentity({});
        });
    };
    var applicativeIdentity = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyIdentity({});
        }, Identity.create);
    };
    var monadIdentity = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeIdentity({});
        }, function (__1) {
            return bindIdentity({});
        });
    };
    return {
        Identity: Identity, 
        runIdentity: runIdentity, 
        functorIdentity: functorIdentity, 
        applyIdentity: applyIdentity, 
        applicativeIdentity: applicativeIdentity, 
        bindIdentity: bindIdentity, 
        monadIdentity: monadIdentity
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Data_Monoid = PS.Data_Monoid;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var writer = function (__dict_Applicative_102) {
        return function (_275) {
            return function (_) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_102)({
                        state: s, 
                        result: _275.value0, 
                        log: _275.value1
                    });
                };
            };
        };
    };
    var withRWS = Control_Monad_RWS_Trans.withRWST;
    var tell = function (__dict_Applicative_103) {
        return function (w) {
            return writer(__dict_Applicative_103)(new Data_Tuple.Tuple(Prelude.unit, w));
        };
    };
    var state = function (__dict_Applicative_104) {
        return function (__dict_Monoid_105) {
            return function (f) {
                return function (_) {
                    return function (s) {
                        return (function (_865) {
                            return Prelude.pure(__dict_Applicative_104)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_105)(_865.value1)(_865.value0)(Data_Monoid.mempty(__dict_Monoid_105)));
                        })(f(s));
                    };
                };
            };
        };
    };
    var rws = function (f) {
        return function (r) {
            return function (s) {
                return Prelude["return"](Control_Monad_Identity.monadIdentity({}))(f(r)(s));
            };
        };
    };
    var runRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.runRWST(m)(r)(s));
            };
        };
    };
    var reader = function (__dict_Applicative_106) {
        return function (__dict_Monoid_107) {
            return function (f) {
                return function (r) {
                    return function (s) {
                        return Prelude.pure(__dict_Applicative_106)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_107)(s)(f(r))(Data_Monoid.mempty(__dict_Monoid_107)));
                    };
                };
            };
        };
    };
    var put = function (__dict_Applicative_108) {
        return function (__dict_Monoid_109) {
            return function (s) {
                return state(__dict_Applicative_108)(__dict_Monoid_109)(function (_) {
                    return new Data_Tuple.Tuple(Prelude.unit, s);
                });
            };
        };
    };
    var pass = function (__dict_Monad_110) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_110["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_273) {
                        return Prelude.pure(__dict_Monad_110["__superclass_Prelude.Applicative_0"]({}))({
                            state: _273.state, 
                            result: _273.result.value0, 
                            log: _273.result.value1(_273.log)
                        });
                    });
                };
            };
        };
    };
    var modify = function (__dict_Applicative_111) {
        return function (__dict_Monoid_112) {
            return function (f) {
                return state(__dict_Applicative_111)(__dict_Monoid_112)(function (s) {
                    return new Data_Tuple.Tuple(Prelude.unit, f(s));
                });
            };
        };
    };
    var mapRWS = function (f) {
        return Control_Monad_RWS_Trans.mapRWST(Prelude[">>>"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Prelude[">>>"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.Identity.create)));
    };
    var local = function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Control_Monad_RWS_Trans.runRWST(m)(f(r))(s);
                };
            };
        };
    };
    var listens = function (__dict_Monad_113) {
        return function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_113["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_274) {
                            return Prelude.pure(__dict_Monad_113["__superclass_Prelude.Applicative_0"]({}))({
                                state: _274.state, 
                                result: new Data_Tuple.Tuple(_274.result, f(_274.log)), 
                                log: _274.log
                            });
                        });
                    };
                };
            };
        };
    };
    var listen = function (__dict_Monad_114) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_114["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (_272) {
                        return Prelude.pure(__dict_Monad_114["__superclass_Prelude.Applicative_0"]({}))({
                            state: _272.state, 
                            result: new Data_Tuple.Tuple(_272.result, _272.log), 
                            log: _272.log
                        });
                    });
                };
            };
        };
    };
    var gets = function (__dict_Applicative_115) {
        return function (__dict_Monoid_116) {
            return function (f) {
                return state(__dict_Applicative_115)(__dict_Monoid_116)(function (s) {
                    return new Data_Tuple.Tuple(f(s), s);
                });
            };
        };
    };
    var get = function (__dict_Applicative_117) {
        return function (__dict_Monoid_118) {
            return state(__dict_Applicative_117)(__dict_Monoid_118)(function (s) {
                return new Data_Tuple.Tuple(s, s);
            });
        };
    };
    var execRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.execRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var evalRWS = function (m) {
        return function (r) {
            return function (s) {
                return Control_Monad_Identity.runIdentity(Control_Monad_RWS_Trans.evalRWST(Control_Monad_Identity.monadIdentity({}))(m)(r)(s));
            };
        };
    };
    var censor = function (__dict_Monad_119) {
        return function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Monad_119["__superclass_Prelude.Bind_1"]({}))(Control_Monad_RWS_Trans.runRWST(m)(r)(s))(function (see) {
                            return Prelude.pure(__dict_Monad_119["__superclass_Prelude.Applicative_0"]({}))((function () {
                                var _882 = {};
                                for (var _883 in see) {
                                    if (see.hasOwnProperty(_883)) {
                                        _882[_883] = see[_883];
                                    };
                                };
                                _882.log = f(see.log);
                                return _882;
                            })());
                        });
                    };
                };
            };
        };
    };
    var ask = function (__dict_Applicative_120) {
        return function (__dict_Monoid_121) {
            return function (r) {
                return function (s) {
                    return Prelude.pure(__dict_Applicative_120)(Control_Monad_RWS_Trans.mkSee(__dict_Monoid_121)(s)(r)(Data_Monoid.mempty(__dict_Monoid_121)));
                };
            };
        };
    };
    return {
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        reader: reader, 
        local: local, 
        ask: ask, 
        withRWS: withRWS, 
        mapRWS: mapRWS, 
        execRWS: execRWS, 
        evalRWS: evalRWS, 
        runRWS: runRWS, 
        rws: rws
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var withReader = Control_Monad_Reader_Trans.withReaderT;
    var runReader = function (m) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Reader_Trans.runReaderT(m));
    };
    var mapReader = function (f) {
        return Control_Monad_Reader_Trans.mapReaderT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    return {
        mapReader: mapReader, 
        withReader: withReader, 
        runReader: runReader
    };
})();
var PS = PS || {};
PS.Control_Monad_State = (function () {
    "use strict";
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Data_Tuple = PS.Data_Tuple;
    var withState = Control_Monad_State_Trans.withStateT;
    var runState = function (s) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_State_Trans.runStateT(s));
    };
    var mapState = function (f) {
        return Control_Monad_State_Trans.mapStateT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execState = function (m) {
        return function (s) {
            return Data_Tuple.snd(runState(m)(s));
        };
    };
    var evalState = function (m) {
        return function (s) {
            return Data_Tuple.fst(runState(m)(s));
        };
    };
    return {
        withState: withState, 
        mapState: mapState, 
        execState: execState, 
        evalState: evalState, 
        runState: runState
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Data_Tuple = PS.Data_Tuple;
    var runWriter = Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(Control_Monad_Writer_Trans.runWriterT);
    var mapWriter = function (f) {
        return Control_Monad_Writer_Trans.mapWriterT(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(Control_Monad_Identity.runIdentity)));
    };
    var execWriter = function (m) {
        return Data_Tuple.snd(runWriter(m));
    };
    return {
        mapWriter: mapWriter, 
        execWriter: execWriter, 
        runWriter: runWriter
    };
})();
var PS = PS || {};
PS.Control_Monad_Error = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    function Error(noMsg, strMsg) {
        this.noMsg = noMsg;
        this.strMsg = strMsg;
    };
    var strMsg = function (dict) {
        return dict.strMsg;
    };
    var noMsg = function (dict) {
        return dict.noMsg;
    };
    var errorString = function (_) {
        return new Error("", Prelude.id(Prelude.categoryArr({})));
    };
    var errorEitherAlternative = function (__dict_Error_122) {
        return new Prelude.Alternative(function (_276) {
            return function (_277) {
                if (_276 instanceof Data_Either.Left) {
                    return _277;
                };
                return _276;
            };
        }, new Data_Either.Left(noMsg(__dict_Error_122)));
    };
    return {
        Error: Error, 
        strMsg: strMsg, 
        noMsg: noMsg, 
        errorString: errorString, 
        errorEitherAlternative: errorEitherAlternative
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var ErrorT = {
        create: function (value) {
            return value;
        }
    };
    var runErrorT = function (_278) {
        return _278;
    };
    var monadTransErrorT = function (__dict_Error_123) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_124) {
            return function (m) {
                return ErrorT.create(Prelude[">>="](__dict_Monad_124["__superclass_Prelude.Bind_1"]({}))(m)(function (_14) {
                    return Prelude["return"](__dict_Monad_124)(new Data_Either.Right(_14));
                }));
            };
        });
    };
    var mapErrorT = function (f) {
        return function (m) {
            return ErrorT.create(f(runErrorT(m)));
        };
    };
    var liftPassError = function (__dict_Monad_127) {
        return function (pass) {
            return mapErrorT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_127["__superclass_Prelude.Bind_1"]({}))(m)(function (_16) {
                    return Prelude["return"](__dict_Monad_127)((function (_890) {
                        if (_890 instanceof Data_Either.Left) {
                            return new Data_Tuple.Tuple(new Data_Either.Left(_890.value0), Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_890 instanceof Data_Either.Right) {
                            return new Data_Tuple.Tuple(new Data_Either.Right(_890.value0.value0), _890.value0.value1);
                        };
                        throw new Error("Failed pattern match");
                    })(_16));
                }));
            });
        };
    };
    var liftListenError = function (__dict_Monad_128) {
        return function (listen) {
            return mapErrorT(function (m) {
                return Prelude[">>="](__dict_Monad_128["__superclass_Prelude.Bind_1"]({}))(listen(m))(function (_15) {
                    return Prelude["return"](__dict_Monad_128)(Prelude["<$>"](Data_Either.functorEither({}))(function (r) {
                        return new Data_Tuple.Tuple(r, _15.value1);
                    })(_15.value0));
                });
            });
        };
    };
    var liftCallCCError = function (callCC) {
        return function (f) {
            return ErrorT.create(callCC(function (c) {
                return runErrorT(f(function (a) {
                    return ErrorT.create(c(new Data_Either.Right(a)));
                }));
            }));
        };
    };
    var functorErrorT = function (__dict_Functor_129) {
        return new Prelude.Functor(function (f) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(ErrorT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["<$>"](__dict_Functor_129)(Prelude["<$>"](Data_Either.functorEither({}))(f)))(runErrorT));
        });
    };
    var applyErrorT = function (__dict_Functor_132) {
        return function (__dict_Monad_133) {
            return new Prelude.Apply(function (f) {
                return function (v) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_133["__superclass_Prelude.Bind_1"]({}))(runErrorT(f))(function (_12) {
                        if (_12 instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_133)(new Data_Either.Left(_12.value0));
                        };
                        if (_12 instanceof Data_Either.Right) {
                            return Prelude[">>="](__dict_Monad_133["__superclass_Prelude.Bind_1"]({}))(runErrorT(v))(function (_11) {
                                return Prelude["return"](__dict_Monad_133)((function (_902) {
                                    if (_902 instanceof Data_Either.Left) {
                                        return new Data_Either.Left(_902.value0);
                                    };
                                    if (_902 instanceof Data_Either.Right) {
                                        return new Data_Either.Right(_12.value0(_902.value0));
                                    };
                                    throw new Error("Failed pattern match");
                                })(_11));
                            });
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (_) {
                return functorErrorT(__dict_Functor_132);
            });
        };
    };
    var bindErrorT = function (__dict_Monad_130) {
        return function (__dict_Error_131) {
            return new Prelude.Bind(function (m) {
                return function (f) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_130["__superclass_Prelude.Bind_1"]({}))(runErrorT(m))(function (_13) {
                        if (_13 instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_130)(new Data_Either.Left(_13.value0));
                        };
                        if (_13 instanceof Data_Either.Right) {
                            return runErrorT(f(_13.value0));
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (_) {
                return applyErrorT(((__dict_Monad_130["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_130);
            });
        };
    };
    var applicativeErrorT = function (__dict_Functor_134) {
        return function (__dict_Monad_135) {
            return new Prelude.Applicative(function (_) {
                return applyErrorT(__dict_Functor_134)(__dict_Monad_135);
            }, function (a) {
                return ErrorT.create(Prelude.pure(__dict_Monad_135["__superclass_Prelude.Applicative_0"]({}))(new Data_Either.Right(a)));
            });
        };
    };
    var monadErrorT = function (__dict_Monad_125) {
        return function (__dict_Error_126) {
            return new Prelude.Monad(function (_) {
                return applicativeErrorT(((__dict_Monad_125["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_125);
            }, function (_) {
                return bindErrorT(__dict_Monad_125)(__dict_Error_126);
            });
        };
    };
    var alternativeErrorT = function (__dict_Monad_136) {
        return function (__dict_Error_137) {
            return new Prelude.Alternative(function (x) {
                return function (y) {
                    return ErrorT.create(Prelude[">>="](__dict_Monad_136["__superclass_Prelude.Bind_1"]({}))(runErrorT(x))(function (e) {
                        if (e instanceof Data_Either.Left) {
                            return runErrorT(y);
                        };
                        return Prelude["return"](__dict_Monad_136)(e);
                    }));
                };
            }, Prelude["return"](__dict_Monad_136)(Data_Either.Left.create(Control_Monad_Error.strMsg(__dict_Error_137)("No alternative"))));
        };
    };
    return {
        ErrorT: ErrorT, 
        liftCallCCError: liftCallCCError, 
        liftPassError: liftPassError, 
        liftListenError: liftListenError, 
        mapErrorT: mapErrorT, 
        runErrorT: runErrorT, 
        functorErrorT: functorErrorT, 
        applyErrorT: applyErrorT, 
        applicativeErrorT: applicativeErrorT, 
        alternativeErrorT: alternativeErrorT, 
        bindErrorT: bindErrorT, 
        monadErrorT: monadErrorT, 
        monadTransErrorT: monadTransErrorT
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
    var applicativeEff = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEff({});
        }, returnE);
    };
    var applyEff = function (_) {
        return new Prelude.Apply(Prelude.ap(monadEff({})), function (__1) {
            return functorEff({});
        });
    };
    var monadEff = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEff({});
        }, function (__1) {
            return bindEff({});
        });
    };
    var bindEff = function (_) {
        return new Prelude.Bind(bindE, function (__1) {
            return applyEff({});
        });
    };
    var functorEff = function (_) {
        return new Prelude.Functor(Prelude.liftA1(applicativeEff({})));
    };
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Exception = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function throwException(e) {  return function() {    throw e;  };};
    function catchException(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        return c(e)();      }    };  };};
    return {
        catchException: catchException, 
        throwException: throwException
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Ractive = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foreign_EasyFFI = PS.Data_Foreign_EasyFFI;
    function RQString(value0) {
        this.value0 = value0;
    };
    RQString.create = function (value0) {
        return new RQString(value0);
    };
    function RQNode(value0) {
        this.value0 = value0;
    };
    RQNode.create = function (value0) {
        return new RQNode(value0);
    };
    function set(selector) { return function(value) {   return function(ractive) {      return function () {     ractive.set(selector, value);    }  }}};
    function setPartial(selector) {  return function (value) {    return function (ractive) {      return function () {        ractive.partials[selector] = value; }}}};
    function getPartial(selector) { return function(ractive) {   return function () {     return ractive.partials[selector];    }   } };
    function on(event) {  return function(handler) {     return function(ractive) {       return function() {         ractive.on(event, function(ev) {           return handler(this)(ev)();         });         return ractive;       }     }   } };
    function updateModel(ractive) { return function() {   return ractive.updateModel(); }};
    function renderById(id) {  return function (ractive) {    return function () {      ractive.render(id);     }   }};
    var ffiP = Data_Foreign_EasyFFI.unsafeForeignProcedure;
    var ffiF = Data_Foreign_EasyFFI.unsafeForeignFunction;
    var get = ffiF([ "field", "ractive", "" ])("ractive.get(field)")("function () { ractive.set(selector, value); return ractive}()");
    var ractive = ffiF([ "template", "document", "data", "" ])("new Ractive({template:template, el: document, data:data})");
    var ractiveFromData = ffiF([ "data", "" ])("new Ractive(data);");
    return {
        RQString: RQString, 
        RQNode: RQNode, 
        renderById: renderById, 
        updateModel: updateModel, 
        on: on, 
        getPartial: getPartial, 
        setPartial: setPartial, 
        set: set, 
        get: get, 
        ractiveFromData: ractiveFromData, 
        ractive: ractive, 
        ffiP: ffiP, 
        ffiF: ffiF
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Random = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function random() {  return Math.random();};
    return {
        random: random
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Free = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Function = PS.Data_Function;
    function Pure(value0) {
        this.value0 = value0;
    };
    Pure.create = function (value0) {
        return new Pure(value0);
    };
    function Free(value0) {
        this.value0 = value0;
    };
    Free.create = function (value0) {
        return new Free(value0);
    };
    function Gosub(value0) {
        this.value0 = value0;
    };
    Gosub.create = function (value0) {
        return new Gosub(value0);
    };
    function MonadFree(wrap) {
        this.wrap = wrap;
    };
    function resumeImpl(isGosub, isLeft, toEither, fromRight, resumeGosub, value) {  while (true) {    if (!isGosub(value)) return toEither(value);    var x = resumeGosub(value);    if (isLeft(x)) return x;    else value = fromRight(x);  }};
    function goImpl(resume, isRight, fromLeft, fromRight, fn, value) {  while (true) {    var r = resume(value);    if (isRight(r)) return fromRight(r);    value = fn(fromLeft(r));  }};
    function goEffImpl(resume, isRight, fromLeft, fromRight, fn, value) {  return function(){    while (true) {      var r = resume(value);      if (isRight(r)) {        var x = fromRight(r);        return function() { return x; };      }      value = fn(fromLeft(r))();    }  };};
    var wrap = function (dict) {
        return dict.wrap;
    };
    var unsafeRight = function (_285) {
        if (_285 instanceof Data_Either.Right) {
            return _285.value0;
        };
        throw new Error("Failed pattern match");
    };
    var unsafeLeft = function (_284) {
        if (_284 instanceof Data_Either.Left) {
            return _284.value0;
        };
        throw new Error("Failed pattern match");
    };
    var unsafeFreeToEither = function (_283) {
        if (_283 instanceof Pure) {
            return new Data_Either.Right(_283.value0);
        };
        if (_283 instanceof Free) {
            return new Data_Either.Left(_283.value0);
        };
        throw new Error("Failed pattern match");
    };
    var pureF = function (__dict_Applicative_139) {
        return function (a) {
            return new Free(Prelude.pure(__dict_Applicative_139)(new Pure(a)));
        };
    };
    var monadTransFree = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_140) {
            return function (f) {
                return Free.create(Prelude[">>="](__dict_Monad_140["__superclass_Prelude.Bind_1"]({}))(f)(function (_17) {
                    return Prelude["return"](__dict_Monad_140)(new Pure(_17));
                }));
            };
        });
    };
    var monadFreeFree = function (__dict_Functor_141) {
        return new MonadFree(Free.create);
    };
    var liftF = function (__dict_Functor_143) {
        return function (__dict_Monad_144) {
            return function (__dict_MonadFree_145) {
                return function (fa) {
                    return wrap(__dict_MonadFree_145)(Prelude["<$>"](__dict_Functor_143)(Prelude["return"](__dict_Monad_144))(fa));
                };
            };
        };
    };
    var iterM = function (__dict_Functor_146) {
        return function (__dict_Monad_147) {
            return function (_279) {
                return function (_280) {
                    if (_280 instanceof Pure) {
                        return Prelude["return"](__dict_Monad_147)(_280.value0);
                    };
                    if (_280 instanceof Free) {
                        return _279(Prelude["<$>"](__dict_Functor_146)(iterM(__dict_Functor_146)(__dict_Monad_147)(_279))(_280.value0));
                    };
                    if (_280 instanceof Gosub) {
                        return _280.value0(function (req) {
                            return function (recv) {
                                return Prelude[">>="](__dict_Monad_147["__superclass_Prelude.Bind_1"]({}))(iterM(__dict_Functor_146)(__dict_Monad_147)(_279)(req(Prelude.unit)))(Prelude["<<<"](Prelude.semigroupoidArr({}))(iterM(__dict_Functor_146)(__dict_Monad_147)(_279))(recv));
                            };
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var isGosub = function (_282) {
        if (_282 instanceof Gosub) {
            return true;
        };
        return false;
    };
    var applicativeFree = function (__dict_Functor_156) {
        return new Prelude.Applicative(function (_) {
            return applyFree(__dict_Functor_156);
        }, Pure.create);
    };
    var applyFree = function (__dict_Functor_155) {
        return new Prelude.Apply(Prelude.ap(monadFree(__dict_Functor_155)), function (_) {
            return functorFree(__dict_Functor_155);
        });
    };
    var monadFree = function (__dict_Functor_142) {
        return new Prelude.Monad(function (_) {
            return applicativeFree(__dict_Functor_142);
        }, function (_) {
            return bindFree(__dict_Functor_142);
        });
    };
    var bindFree = function (__dict_Functor_154) {
        return new Prelude.Bind(function (_288) {
            return function (_289) {
                if (_288 instanceof Gosub) {
                    return new Gosub(function (h) {
                        return _288.value0(function (a) {
                            return function (i) {
                                return h(a)(function (x) {
                                    return new Gosub(function (j) {
                                        return j(Prelude["const"](i(x)))(_289);
                                    });
                                });
                            };
                        });
                    });
                };
                return new Gosub(function (h) {
                    return h(Prelude["const"](_288))(_289);
                });
            };
        }, function (_) {
            return applyFree(__dict_Functor_154);
        });
    };
    var functorFree = function (__dict_Functor_153) {
        return new Prelude.Functor(function (_286) {
            return function (_287) {
                if (_287 instanceof Pure) {
                    return new Pure(_286(_287.value0));
                };
                return Prelude.liftA1(applicativeFree(__dict_Functor_153))(_286)(_287);
            };
        });
    };
    var resumeGosub = function (__dict_Functor_138) {
        return function (_281) {
            if (_281 instanceof Gosub) {
                return _281.value0(function (a) {
                    return function (g) {
                        return (function (_934) {
                            if (_934 instanceof Pure) {
                                return new Data_Either.Right(g(_934.value0));
                            };
                            if (_934 instanceof Free) {
                                return new Data_Either.Left(Prelude["<$>"](__dict_Functor_138)(function (h) {
                                    return Prelude[">>="](bindFree(__dict_Functor_138))(h)(g);
                                })(_934.value0));
                            };
                            if (_934 instanceof Gosub) {
                                return new Data_Either.Right(_934.value0(function (b) {
                                    return function (i) {
                                        return Prelude[">>="](bindFree(__dict_Functor_138))(b(Prelude.unit))(function (x) {
                                            return Prelude[">>="](bindFree(__dict_Functor_138))(i(x))(g);
                                        });
                                    };
                                }));
                            };
                            throw new Error("Failed pattern match");
                        })(a(Prelude.unit));
                    };
                });
            };
            throw new Error("Failed pattern match");
        };
    };
    var resume = function (__dict_Functor_148) {
        return function (f) {
            return resumeImpl(isGosub, Data_Either.isLeft, unsafeFreeToEither, unsafeRight, resumeGosub(__dict_Functor_148), f);
        };
    };
    var go = function (__dict_Functor_152) {
        return function (fn) {
            return function (f) {
                return goImpl(resume(__dict_Functor_152), Data_Either.isRight, unsafeLeft, unsafeRight, fn, f);
            };
        };
    };
    var goEff = function (__dict_Functor_151) {
        return function (fn) {
            return function (f) {
                return goEffImpl(resume(__dict_Functor_151), Data_Either.isRight, unsafeLeft, unsafeRight, fn, f);
            };
        };
    };
    var goM = function (__dict_Functor_149) {
        return function (__dict_Monad_150) {
            return function (k) {
                return function (f) {
                    return (function (_939) {
                        if (_939 instanceof Data_Either.Left) {
                            return Prelude[">>="](__dict_Monad_150["__superclass_Prelude.Bind_1"]({}))(k(_939.value0))(goM(__dict_Functor_149)(__dict_Monad_150)(k));
                        };
                        if (_939 instanceof Data_Either.Right) {
                            return Prelude["return"](__dict_Monad_150)(_939.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(resume(__dict_Functor_149)(f));
                };
            };
        };
    };
    return {
        Pure: Pure, 
        Free: Free, 
        Gosub: Gosub, 
        MonadFree: MonadFree, 
        goEff: goEff, 
        go: go, 
        goM: goM, 
        iterM: iterM, 
        pureF: pureF, 
        liftF: liftF, 
        wrap: wrap, 
        functorFree: functorFree, 
        applyFree: applyFree, 
        applicativeFree: applicativeFree, 
        bindFree: bindFree, 
        monadFree: monadFree, 
        monadTransFree: monadTransFree, 
        monadFreeFree: monadFreeFree
    };
})();
var PS = PS || {};
PS.Control_Monad_Trampoline = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Free = PS.Control_Monad_Free;
    var Delay = {
        create: function (value) {
            return value;
        }
    };
    var suspend = function (a) {
        return new Control_Monad_Free.Free(Prelude["const"](a));
    };
    var done = Control_Monad_Free.Pure.create;
    var delayFunctor = function (_) {
        return new Prelude.Functor(function (_291) {
            return function (_292) {
                return Prelude["const"](_291(_292(Prelude.unit)));
            };
        });
    };
    var runTrampoline = Control_Monad_Free.go(delayFunctor({}))(function (_290) {
        return _290(Prelude.unit);
    });
    var delayApply = function (_) {
        return new Prelude.Apply(function (_293) {
            return function (_294) {
                return function (__1) {
                    return _293(Prelude.unit)(_294(Prelude.unit));
                };
            };
        }, function (__1) {
            return delayFunctor({});
        });
    };
    var delayApplicative = function (_) {
        return new Prelude.Applicative(function (__1) {
            return delayApply({});
        }, function (a) {
            return Prelude["const"](a);
        });
    };
    var delay = function (a) {
        return new Control_Monad_Free.Free(Prelude["<$>"](delayFunctor({}))(done)(a));
    };
    return {
        Delay: Delay, 
        runTrampoline: runTrampoline, 
        delay: delay, 
        suspend: suspend, 
        done: done, 
        delayFunctor: delayFunctor, 
        delayApply: delayApply, 
        delayApplicative: delayApplicative
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_157) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_157)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Network_XHR = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    function QueryParam() {

    };
    QueryParam.value = new QueryParam();
    function UrlEncoded() {

    };
    UrlEncoded.value = new UrlEncoded();
    function Multipart() {

    };
    Multipart.value = new Multipart();
    function UNSENT() {

    };
    UNSENT.value = new UNSENT();
    function OPENED() {

    };
    OPENED.value = new OPENED();
    function HEADERSRECEIVED() {

    };
    HEADERSRECEIVED.value = new HEADERSRECEIVED();
    function LOADING() {

    };
    LOADING.value = new LOADING();
    function DONE() {

    };
    DONE.value = new DONE();
    function UNKNOWN(value0) {
        this.value0 = value0;
    };
    UNKNOWN.create = function (value0) {
        return new UNKNOWN(value0);
    };
    function newXMLHttpRequest () {   return new XMLHttpRequest();};
    function assignCallback (field) {   return function (xhr) {       return function (callback) {           return function () {               if (callback) {                   xhr[field] = function(){callback(xhr)()}}}}}};
    function open (method) {   return function(uri) {       return function(xhr) {           return function() {               xhr.open(method, uri);}}}};
    function send (body) {   return function (xhr) {       return function () {           return xhr.send(body);}}};
    function abort (xhr) {   return function () {       xhr.abort();}};
    var jsNull = null;;
    function unsafeGetter (key) {   return function (obj) {       return obj[key];}};
    function unsafeSetter (key) {   return function(value) {       return function(obj) {           return function() {               obj[key] = value;}}}};
    function getResponseHeader (header) {   return function (xhr) {       return function () {           return xhr.getResponseHeader(header);}}};
    function setRequestHeaders (obj) {       return function (xhr) {           return function() {               for(var key in obj) {                   xhr.setRequestHeader(key, obj[key]);}}}};
    function objectToString (obj) {   var str = '';   for (var key in obj) {       str += key + '=' + encodeURIComponent(obj[key]) + '&'   }   return str.slice(0,-1);};
    function newFormData () {   return new FormData();};
    function appendForm (obj) {       return function (form) {           return function () {               for (var key in obj) {                   form.append(key, obj[key]);}}}};
    var statusText = function (o) {
        return unsafeGetter("statusText")(o);
    };
    var status = function (o) {
        return unsafeGetter("status")(o);
    };
    var showReadyState = function (_) {
        return new Prelude.Show(function (_295) {
            if (_295 instanceof UNSENT) {
                return "UNSENT";
            };
            if (_295 instanceof OPENED) {
                return "OPENED";
            };
            if (_295 instanceof HEADERSRECEIVED) {
                return "HEADERS_RECEIVED";
            };
            if (_295 instanceof LOADING) {
                return "LOADING";
            };
            if (_295 instanceof DONE) {
                return "DONE";
            };
            if (_295 instanceof UNKNOWN) {
                return "UNKNOWN " + Prelude.show(Prelude.showNumber({}))(_295.value0);
            };
            throw new Error("Failed pattern match");
        });
    };
    var responseXML = function (o) {
        return unsafeGetter("responseXML")(o);
    };
    var responseText = function (o) {
        return unsafeGetter("responseText")(o);
    };
    var preProcess = function (method) {
        return function (uri) {
            return function (cfg) {
                return function __do() {
                    var _18 = newXMLHttpRequest();
                    assignCallback("onreadystatechange")(_18)(cfg.onReadyStateChange)();
                    var __1 = assignCallback("onloadstart")(_18)(cfg.onLoadStart)();
                    var __2 = assignCallback("onprogress")(_18)(cfg.onProgress)();
                    var __3 = assignCallback("onabort")(_18)(cfg.onAbort)();
                    var __4 = assignCallback("onerror")(_18)(cfg.onError)();
                    var __5 = assignCallback("onload")(_18)(cfg.onLoad)();
                    var __6 = assignCallback("ontimeout")(_18)(cfg.onTimeout)();
                    var __7 = assignCallback("onloadend")(_18)(cfg.onLoadEnd)();
                    var __8 = unsafeSetter("timeout")(cfg.requestTimeout)(_18)();
                    var __9 = unsafeSetter("withCredentials")(cfg.withCredentials)(_18)();
                    var __10 = open(method)(uri)(_18)();
                    return _18;
                };
            };
        };
    };
    var request = function (method) {
        return function (typ) {
            return function (h) {
                return function (cfg) {
                    return function (uri) {
                        return function (prm) {
                            if (typ instanceof QueryParam) {
                                var p = objectToString(prm);
                                var p$prime = p === "" ? "" : "?" + p;
                                return function __do() {
                                    var _19 = preProcess(method)(uri + p$prime)(cfg)();
                                    setRequestHeaders(h)(_19)();
                                    return send(jsNull)(_19)();
                                };
                            };
                            if (typ instanceof UrlEncoded) {
                                var b = objectToString(prm);
                                return function __do() {
                                    var _20 = preProcess(method)(uri)(cfg)();
                                    setRequestHeaders(h)(_20)();
                                    var __1 = setRequestHeaders({
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    })(_20)();
                                    return send(b)(_20)();
                                };
                            };
                            if (typ instanceof Multipart) {
                                return function __do() {
                                    var _22 = newFormData();
                                    appendForm(prm)(_22)();
                                    var _21 = preProcess(method)(uri)(cfg)();
                                    var __1 = setRequestHeaders(h)(_21)();
                                    return send(_22)(_21)();
                                };
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
    };
    var put = request("PUT")(UrlEncoded.value)({});
    var post = request("POST")(UrlEncoded.value)({});
    var numberToReadyState = function (i) {
        if (i === 0) {
            return UNSENT.value;
        };
        if (i === 1) {
            return OPENED.value;
        };
        if (i === 2) {
            return HEADERSRECEIVED.value;
        };
        if (i === 3) {
            return LOADING.value;
        };
        if (i === 4) {
            return DONE.value;
        };
        return new UNKNOWN(i);
    };
    var readyState = function (o) {
        return numberToReadyState(unsafeGetter("readyState")(o));
    };
    var get = request("GET")(QueryParam.value)({});
    var eqReadyState = function (_) {
        return new Prelude.Eq(function (a) {
            return function (b) {
                return !Prelude["=="](eqReadyState({}))(a)(b);
            };
        }, function (_296) {
            return function (_297) {
                if (_296 instanceof UNSENT && _297 instanceof UNSENT) {
                    return true;
                };
                if (_296 instanceof OPENED && _297 instanceof OPENED) {
                    return true;
                };
                if (_296 instanceof HEADERSRECEIVED && _297 instanceof HEADERSRECEIVED) {
                    return true;
                };
                if (_296 instanceof LOADING && _297 instanceof LOADING) {
                    return true;
                };
                if (_296 instanceof DONE && _297 instanceof DONE) {
                    return true;
                };
                if (_296 instanceof UNKNOWN && _297 instanceof UNKNOWN) {
                    return _296.value0 === _297.value0;
                };
                return false;
            };
        });
    };
    var $$delete = request("DELETE")(QueryParam.value)({});
    var defaultConfig = {
        onReadyStateChange: jsNull, 
        onLoadStart: jsNull, 
        onProgress: jsNull, 
        onAbort: jsNull, 
        onError: jsNull, 
        onLoad: jsNull, 
        onTimeout: jsNull, 
        onLoadEnd: jsNull, 
        requestTimeout: 0, 
        withCredentials: false
    };
    return {
        QueryParam: QueryParam, 
        UrlEncoded: UrlEncoded, 
        Multipart: Multipart, 
        UNSENT: UNSENT, 
        OPENED: OPENED, 
        HEADERSRECEIVED: HEADERSRECEIVED, 
        LOADING: LOADING, 
        DONE: DONE, 
        UNKNOWN: UNKNOWN, 
        put: put, 
        "delete": $$delete, 
        post: post, 
        get: get, 
        request: request, 
        abort: abort, 
        responseXML: responseXML, 
        responseText: responseText, 
        readyState: readyState, 
        statusText: statusText, 
        status: status, 
        defaultConfig: defaultConfig, 
        showReadyState: showReadyState, 
        eqReadyState: eqReadyState
    };
})();
var PS = PS || {};
PS.Test_QuickCheck_LCG = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Gen(value0) {
        this.value0 = value0;
    };
    Gen.create = function (value0) {
        return new Gen(value0);
    };
    function randomSeed() {  return Math.floor(Math.random() * (1 << 30));};
    function float32ToInt32(n) {  var arr = new ArrayBuffer(4);  var fv = new Float32Array(arr);  var iv = new Int32Array(arr);  fv[0] = n;  return iv[0];};
    var runGen = function (_298) {
        return _298.value0;
    };
    var lcgN = 1 << 30;
    var lcgM = 1103515245;
    var lcgC = 12345;
    var lcgNext = function (n) {
        return (lcgM * n + lcgC) % lcgN;
    };
    var lcgStep = new Gen(function (l) {
        return {
            value: l, 
            newSeed: lcgNext(l)
        };
    });
    var perturbGen = function (_299) {
        return function (_300) {
            return Gen.create(function (l) {
                return _300.value0(lcgNext(float32ToInt32(_299)) + l);
            });
        };
    };
    var functorGen = function (_) {
        return new Prelude.Functor(function (_301) {
            return function (_302) {
                return Gen.create(function (l) {
                    return (function (_967) {
                        return {
                            value: _301(_967.value), 
                            newSeed: _967.newSeed
                        };
                    })(_302.value0(l));
                });
            };
        });
    };
    var uniform = Prelude["<$>"](functorGen({}))(function (n) {
        return n / (1 << 30);
    })(lcgStep);
    var evalGen = function (gen) {
        return function (seed) {
            return (runGen(gen)(seed)).value;
        };
    };
    var applyGen = function (_) {
        return new Prelude.Apply(function (_303) {
            return function (_304) {
                return Gen.create(function (l) {
                    return (function (_973) {
                        return (function (_974) {
                            return {
                                value: _973.value(_974.value), 
                                newSeed: _974.newSeed
                            };
                        })(_304.value0(_973.newSeed));
                    })(_303.value0(l));
                });
            };
        }, function (__1) {
            return functorGen({});
        });
    };
    var bindGen = function (_) {
        return new Prelude.Bind(function (_305) {
            return function (_306) {
                return Gen.create(function (l) {
                    return (function (_983) {
                        return runGen(_306(_983.value))(_983.newSeed);
                    })(_305.value0(l));
                });
            };
        }, function (__1) {
            return applyGen({});
        });
    };
    var applicativeGen = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyGen({});
        }, function (a) {
            return new Gen(function (l) {
                return {
                    value: a, 
                    newSeed: l
                };
            });
        });
    };
    var monadGen = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeGen({});
        }, function (__1) {
            return bindGen({});
        });
    };
    return {
        Gen: Gen, 
        perturbGen: perturbGen, 
        float32ToInt32: float32ToInt32, 
        uniform: uniform, 
        lcgStep: lcgStep, 
        lcgNext: lcgNext, 
        lcgN: lcgN, 
        lcgC: lcgC, 
        lcgM: lcgM, 
        randomSeed: randomSeed, 
        evalGen: evalGen, 
        runGen: runGen, 
        functorGen: functorGen, 
        applyGen: applyGen, 
        applicativeGen: applicativeGen, 
        bindGen: bindGen, 
        monadGen: monadGen
    };
})();
var PS = PS || {};
PS.Test_QuickCheck = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Test_QuickCheck_LCG = PS.Test_QuickCheck_LCG;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Debug_Trace = PS.Debug_Trace;
    function Success() {

    };
    Success.value = new Success();
    function Failed(value0) {
        this.value0 = value0;
    };
    Failed.create = function (value0) {
        return new Failed(value0);
    };
    function Arbitrary(arbitrary) {
        this.arbitrary = arbitrary;
    };
    function CoArbitrary(coarbitrary) {
        this.coarbitrary = coarbitrary;
    };
    function Testable(test) {
        this.test = test;
    };
    var $less$qmark$greater = function (_307) {
        return function (_308) {
            if (_307) {
                return Success.value;
            };
            if (!_307) {
                return new Failed(_308);
            };
            throw new Error("Failed pattern match");
        };
    };
    var testableResult = function (_) {
        return new Testable(Prelude["return"](Test_QuickCheck_LCG.monadGen({})));
    };
    var testableBoolean = function (_) {
        return new Testable(function (_315) {
            if (_315) {
                return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Success.value);
            };
            if (!_315) {
                return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(new Failed("Test returned false"));
            };
            throw new Error("Failed pattern match");
        });
    };
    var test = function (dict) {
        return dict.test;
    };
    var showResult = function (_) {
        return new Prelude.Show(function (_309) {
            if (_309 instanceof Success) {
                return "Success";
            };
            if (_309 instanceof Failed) {
                return "Failed: " + _309.value0;
            };
            throw new Error("Failed pattern match");
        });
    };
    var repeatable = function (f) {
        return Test_QuickCheck_LCG.Gen.create(function (l) {
            return {
                value: function (a) {
                    return (Test_QuickCheck_LCG.runGen(f(a))(l)).value;
                }, 
                newSeed: l
            };
        });
    };
    var quickCheckPure = function (__dict_Testable_158) {
        return function (seed) {
            return function (n) {
                return function (prop) {
                    var go = function (_316) {
                        if (_316 <= 0) {
                            return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))([  ]);
                        };
                        return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(test(__dict_Testable_158)(prop))(function (_30) {
                            return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(go(_316 - 1))(function (_29) {
                                return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Prelude[":"](_30)(_29));
                            });
                        });
                    };
                    return Test_QuickCheck_LCG.evalGen(go(n))(seed);
                };
            };
        };
    };
    var quickCheck$prime = function (__dict_Testable_159) {
        return function (n) {
            return function (prop) {
                var throwOnFirstFailure = function (__copy__317) {
                    return function (__copy__318) {
                        var _317 = __copy__317;
                        var _318 = __copy__318;
                        tco: while (true) {
                            if (_318.length === 0) {
                                return Prelude["return"](Control_Monad_Eff.monadEff({}))(Prelude.unit);
                            };
                            if (_318.length > 0) {
                                var _998 = _318.slice(1);
                                if (_318[0] instanceof Failed) {
                                    return Control_Monad_Eff_Exception.throwException("Test " + Prelude.show(Prelude.showNumber({}))(_317) + " failed: \n" + (_318[0]).value0);
                                };
                            };
                            if (_318.length > 0) {
                                var _1001 = _318.slice(1);
                                var __tco__317 = _317 + 1;
                                _317 = __tco__317;
                                _318 = _1001;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
                var countSuccesses = function (_319) {
                    if (_319.length === 0) {
                        return 0;
                    };
                    if (_319.length > 0) {
                        var _1004 = _319.slice(1);
                        if (_319[0] instanceof Success) {
                            return 1 + countSuccesses(_1004);
                        };
                    };
                    if (_319.length > 0) {
                        var _1006 = _319.slice(1);
                        return countSuccesses(_1006);
                    };
                    throw new Error("Failed pattern match");
                };
                return function __do() {
                    var _31 = Test_QuickCheck_LCG.randomSeed();
                    return (function () {
                        var results = quickCheckPure(__dict_Testable_159)(_31)(n)(prop);
                        var successes = countSuccesses(results);
                        return function __do() {
                            Debug_Trace.trace(Prelude.show(Prelude.showNumber({}))(successes) + "/" + Prelude.show(Prelude.showNumber({}))(n) + " test(s) passed.")();
                            return throwOnFirstFailure(1)(results)();
                        };
                    })()();
                };
            };
        };
    };
    var quickCheck = function (__dict_Testable_160) {
        return function (prop) {
            return quickCheck$prime(__dict_Testable_160)(100)(prop);
        };
    };
    var coarbitrary = function (dict) {
        return dict.coarbitrary;
    };
    var coarbNumber = function (_) {
        return new CoArbitrary(Test_QuickCheck_LCG.perturbGen);
    };
    var coarbBoolean = function (_) {
        return new CoArbitrary(function (_310) {
            return function (_311) {
                if (_310) {
                    return Test_QuickCheck_LCG.Gen.create(function (l) {
                        return _311.value0(l + 1);
                    });
                };
                if (!_310) {
                    return Test_QuickCheck_LCG.Gen.create(function (l) {
                        return _311.value0(l + 2);
                    });
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var coarbArray = function (__dict_CoArbitrary_161) {
        return new CoArbitrary(function (_314) {
            if (_314.length === 0) {
                return Prelude.id(Prelude.categoryArr({}));
            };
            if (_314.length > 0) {
                var _1014 = _314.slice(1);
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(coarbitrary(coarbArray(__dict_CoArbitrary_161))(_1014))(coarbitrary(__dict_CoArbitrary_161)(_314[0]));
            };
            throw new Error("Failed pattern match");
        });
    };
    var arbitrary = function (dict) {
        return dict.arbitrary;
    };
    var testableFunction = function (__dict_Arbitrary_164) {
        return function (__dict_Testable_165) {
            return new Testable(function (f) {
                return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(__dict_Arbitrary_164))(function (_28) {
                    return test(__dict_Testable_165)(f(_28));
                });
            });
        };
    };
    var arbNumber = function (_) {
        return new Arbitrary(Test_QuickCheck_LCG.uniform);
    };
    var arbFunction = function (__dict_CoArbitrary_166) {
        return function (__dict_Arbitrary_167) {
            return new Arbitrary(repeatable(function (a) {
                return coarbitrary(__dict_CoArbitrary_166)(a)(arbitrary(__dict_Arbitrary_167));
            }));
        };
    };
    var arbBoolean = function (_) {
        return new Arbitrary(Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(Test_QuickCheck_LCG.uniform)(function (_23) {
            return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))((_23 * 2) < 1);
        }));
    };
    var arbArray = function (__dict_Arbitrary_168) {
        return new Arbitrary(Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbBoolean({})))(function (_27) {
            return _27 ? Prelude["return"](Test_QuickCheck_LCG.monadGen({}))([  ]) : Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(__dict_Arbitrary_168))(function (_26) {
    return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbArray(__dict_Arbitrary_168)))(function (_25) {
        return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Prelude[":"](_26)(_25));
    });
});
        }));
    };
    var coarbFunction = function (__dict_Arbitrary_162) {
        return function (__dict_CoArbitrary_163) {
            return new CoArbitrary(function (f) {
                return function (gen) {
                    var map = function (_312) {
                        return function (_313) {
                            if (_313.length === 0) {
                                return [  ];
                            };
                            if (_313.length > 0) {
                                var _1023 = _313.slice(1);
                                return Prelude[":"](_312(_313[0]))(map(_312)(_1023));
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                    return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbArray(__dict_Arbitrary_162)))(function (_24) {
                        return coarbitrary(coarbArray(__dict_CoArbitrary_163))(map(f)(_24))(gen);
                    });
                };
            });
        };
    };
    return {
        Success: Success, 
        Failed: Failed, 
        Testable: Testable, 
        CoArbitrary: CoArbitrary, 
        Arbitrary: Arbitrary, 
        quickCheck: quickCheck, 
        "quickCheck'": quickCheck$prime, 
        quickCheckPure: quickCheckPure, 
        test: test, 
        repeatable: repeatable, 
        "<?>": $less$qmark$greater, 
        coarbitrary: coarbitrary, 
        arbitrary: arbitrary, 
        showResult: showResult, 
        arbNumber: arbNumber, 
        coarbNumber: coarbNumber, 
        arbBoolean: arbBoolean, 
        coarbBoolean: coarbBoolean, 
        arbFunction: arbFunction, 
        coarbFunction: coarbFunction, 
        arbArray: arbArray, 
        coarbArray: coarbArray, 
        testableResult: testableResult, 
        testableBoolean: testableBoolean, 
        testableFunction: testableFunction
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var ContT = {
        create: function (value) {
            return value;
        }
    };
    var runContT = function (_320) {
        return function (_321) {
            return _320(_321);
        };
    };
    var withContT = function (f) {
        return function (m) {
            return function (k) {
                return runContT(m)(f(k));
            };
        };
    };
    var monadTransContT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_169) {
            return function (m) {
                return function (k) {
                    return Prelude[">>="](__dict_Monad_169["__superclass_Prelude.Bind_1"]({}))(m)(k);
                };
            };
        });
    };
    var mapContT = function (f) {
        return function (m) {
            return function (k) {
                return f(runContT(m)(k));
            };
        };
    };
    var functorContT = function (__dict_Monad_171) {
        return new Prelude.Functor(function (f) {
            return function (m) {
                return function (k) {
                    return runContT(m)(function (a) {
                        return k(f(a));
                    });
                };
            };
        });
    };
    var callCC = function (f) {
        return function (k) {
            return runContT(f(function (a) {
                return function (_) {
                    return k(a);
                };
            }))(k);
        };
    };
    var appluContT = function (__dict_Functor_173) {
        return function (__dict_Monad_174) {
            return new Prelude.Apply(function (f) {
                return function (v) {
                    return function (k) {
                        return runContT(f)(function (g) {
                            return runContT(v)(function (a) {
                                return k(g(a));
                            });
                        });
                    };
                };
            }, function (_) {
                return functorContT(__dict_Monad_174);
            });
        };
    };
    var bindContT = function (__dict_Monad_172) {
        return new Prelude.Bind(function (m) {
            return function (k) {
                return function (k$prime) {
                    return runContT(m)(function (a) {
                        return runContT(k(a))(k$prime);
                    });
                };
            };
        }, function (_) {
            return appluContT(((__dict_Monad_172["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_172);
        });
    };
    var applicativeContT = function (__dict_Functor_175) {
        return function (__dict_Monad_176) {
            return new Prelude.Applicative(function (_) {
                return appluContT(__dict_Functor_175)(__dict_Monad_176);
            }, function (a) {
                return function (k) {
                    return k(a);
                };
            });
        };
    };
    var monadContT = function (__dict_Monad_170) {
        return new Prelude.Monad(function (_) {
            return applicativeContT(((__dict_Monad_170["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(__dict_Monad_170);
        }, function (_) {
            return bindContT(__dict_Monad_170);
        });
    };
    return {
        ContT: ContT, 
        callCC: callCC, 
        withContT: withContT, 
        mapContT: mapContT, 
        runContT: runContT, 
        functorContT: functorContT, 
        appluContT: appluContT, 
        applicativeContT: applicativeContT, 
        bindContT: bindContT, 
        monadContT: monadContT, 
        monadTransContT: monadTransContT
    };
})();
var PS = PS || {};
PS.Control_Monad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var when = function (__dict_Monad_177) {
        return function (_327) {
            return function (_328) {
                if (_327) {
                    return _328;
                };
                if (!_327) {
                    return Prelude["return"](__dict_Monad_177)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var unless = function (__dict_Monad_178) {
        return function (_329) {
            return function (_330) {
                if (!_329) {
                    return _330;
                };
                if (_329) {
                    return Prelude["return"](__dict_Monad_178)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var replicateM = function (__dict_Monad_179) {
        return function (_322) {
            return function (_323) {
                if (_322 === 0) {
                    return Prelude["return"](__dict_Monad_179)([  ]);
                };
                return Prelude[">>="](__dict_Monad_179["__superclass_Prelude.Bind_1"]({}))(_323)(function (_33) {
                    return Prelude[">>="](__dict_Monad_179["__superclass_Prelude.Bind_1"]({}))(replicateM(__dict_Monad_179)(_322 - 1)(_323))(function (_32) {
                        return Prelude["return"](__dict_Monad_179)(Prelude[":"](_33)(_32));
                    });
                });
            };
        };
    };
    var foldM = function (__dict_Monad_180) {
        return function (_324) {
            return function (_325) {
                return function (_326) {
                    if (_326.length === 0) {
                        return Prelude["return"](__dict_Monad_180)(_325);
                    };
                    if (_326.length > 0) {
                        var _1039 = _326.slice(1);
                        return Prelude[">>="](__dict_Monad_180["__superclass_Prelude.Bind_1"]({}))(_324(_325)(_326[0]))(function (a$prime) {
                            return foldM(__dict_Monad_180)(_324)(a$prime)(_1039);
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    return {
        unless: unless, 
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
    };
})();
var PS = PS || {};
PS.Control_Monad_Maybe_Trans = (function () {
    "use strict";
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var MaybeT = {
        create: function (value) {
            return value;
        }
    };
    var runMaybeT = function (_331) {
        return _331;
    };
    var monadTransMaybeT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_181) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude.liftM1(__dict_Monad_181)(Data_Maybe.Just.create));
        });
    };
    var mapMaybeT = function (f) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(f)(runMaybeT));
    };
    var liftPassMaybe = function (__dict_Monad_183) {
        return function (pass) {
            return mapMaybeT(function (m) {
                return pass(Prelude[">>="](__dict_Monad_183["__superclass_Prelude.Bind_1"]({}))(m)(function (_36) {
                    return Prelude["return"](__dict_Monad_183)((function (_1042) {
                        if (_1042 instanceof Data_Maybe.Nothing) {
                            return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Prelude.id(Prelude.categoryArr({})));
                        };
                        if (_1042 instanceof Data_Maybe.Just) {
                            return new Data_Tuple.Tuple(new Data_Maybe.Just(_1042.value0.value0), _1042.value0.value1);
                        };
                        throw new Error("Failed pattern match");
                    })(_36));
                }));
            });
        };
    };
    var liftListenMaybe = function (__dict_Monad_184) {
        return function (listen) {
            return mapMaybeT(function (m) {
                return Prelude[">>="](__dict_Monad_184["__superclass_Prelude.Bind_1"]({}))(listen(m))(function (_35) {
                    return Prelude["return"](__dict_Monad_184)(Prelude["<$>"](Data_Maybe.functorMaybe({}))(function (r) {
                        return new Data_Tuple.Tuple(r, _35.value1);
                    })(_35.value0));
                });
            });
        };
    };
    var liftCatchMaybe = function ($$catch) {
        return function (m) {
            return function (h) {
                return MaybeT.create($$catch(runMaybeT(m))(Prelude["<<<"](Prelude.semigroupoidArr({}))(runMaybeT)(h)));
            };
        };
    };
    var liftCallCCMaybe = function (callCC) {
        return function (f) {
            return MaybeT.create(callCC(function (c) {
                return runMaybeT(f(function (a) {
                    return MaybeT.create(c(new Data_Maybe.Just(a)));
                }));
            }));
        };
    };
    var applicativeMaybeT = function (__dict_Monad_188) {
        return new Prelude.Applicative(function (_) {
            return applyMaybeT(__dict_Monad_188);
        }, Prelude["<<<"](Prelude.semigroupoidArr({}))(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.pure(__dict_Monad_188["__superclass_Prelude.Applicative_0"]({})))(Data_Maybe.Just.create)));
    };
    var applyMaybeT = function (__dict_Monad_187) {
        return new Prelude.Apply(Prelude.ap(monadMaybeT(__dict_Monad_187)), function (_) {
            return functorMaybeT(__dict_Monad_187);
        });
    };
    var monadMaybeT = function (__dict_Monad_182) {
        return new Prelude.Monad(function (_) {
            return applicativeMaybeT(__dict_Monad_182);
        }, function (_) {
            return bindMaybeT(__dict_Monad_182);
        });
    };
    var bindMaybeT = function (__dict_Monad_186) {
        return new Prelude.Bind(function (x) {
            return function (f) {
                return MaybeT.create(Prelude[">>="](__dict_Monad_186["__superclass_Prelude.Bind_1"]({}))(runMaybeT(x))(function (_34) {
                    if (_34 instanceof Data_Maybe.Nothing) {
                        return Prelude["return"](__dict_Monad_186)(Data_Maybe.Nothing.value);
                    };
                    if (_34 instanceof Data_Maybe.Just) {
                        return runMaybeT(f(_34.value0));
                    };
                    throw new Error("Failed pattern match");
                }));
            };
        }, function (_) {
            return applyMaybeT(__dict_Monad_186);
        });
    };
    var functorMaybeT = function (__dict_Monad_185) {
        return new Prelude.Functor(Prelude.liftA1(applicativeMaybeT(__dict_Monad_185)));
    };
    return {
        MaybeT: MaybeT, 
        liftCallCCMaybe: liftCallCCMaybe, 
        liftPassMaybe: liftPassMaybe, 
        liftListenMaybe: liftListenMaybe, 
        liftCatchMaybe: liftCatchMaybe, 
        mapMaybeT: mapMaybeT, 
        runMaybeT: runMaybeT, 
        functorMaybeT: functorMaybeT, 
        applyMaybeT: applyMaybeT, 
        applicativeMaybeT: applicativeMaybeT, 
        bindMaybeT: bindMaybeT, 
        monadMaybeT: monadMaybeT, 
        monadTransMaybeT: monadTransMaybeT
    };
})();
var PS = PS || {};
PS.Control_Monad_Cont_Class = (function () {
    "use strict";
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadCont(callCC) {
        this.callCC = callCC;
    };
    var monadContContT = function (__dict_Monad_189) {
        return new MonadCont(Control_Monad_Cont_Trans.callCC);
    };
    var callCC = function (dict) {
        return dict.callCC;
    };
    var monadContErrorT = function (__dict_Error_190) {
        return function (__dict_MonadCont_191) {
            return new MonadCont(Control_Monad_Error_Trans.liftCallCCError(callCC(__dict_MonadCont_191)));
        };
    };
    var monadContMaybeT = function (__dict_MonadCont_192) {
        return new MonadCont(Control_Monad_Maybe_Trans.liftCallCCMaybe(callCC(__dict_MonadCont_192)));
    };
    var monadContReaderT = function (__dict_MonadCont_193) {
        return new MonadCont(Control_Monad_Reader_Trans.liftCallCCReader(callCC(__dict_MonadCont_193)));
    };
    var monadContStateT = function (__dict_MonadCont_194) {
        return new MonadCont(Control_Monad_State_Trans["liftCallCCState'"](callCC(__dict_MonadCont_194)));
    };
    var monadWriterT = function (__dict_Monoid_195) {
        return function (__dict_MonadCont_196) {
            return new MonadCont(Control_Monad_Writer_Trans.liftCallCCWriter(__dict_Monoid_195)(callCC(__dict_MonadCont_196)));
        };
    };
    return {
        MonadCont: MonadCont, 
        callCC: callCC, 
        monadContContT: monadContContT, 
        monadContErrorT: monadContErrorT, 
        monadContMaybeT: monadContMaybeT, 
        monadContReaderT: monadContReaderT, 
        monadContStateT: monadContStateT, 
        monadWriterT: monadWriterT
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadError(catchError, throwError) {
        this.catchError = catchError;
        this.throwError = throwError;
    };
    var throwError = function (dict) {
        return dict.throwError;
    };
    var monadErrorErrorT = function (__dict_Monad_197) {
        return function (__dict_Error_198) {
            return new MonadError(function (m) {
                return function (h) {
                    return Control_Monad_Error_Trans.ErrorT.create(Prelude[">>="](__dict_Monad_197["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Error_Trans.runErrorT(m))(function (_37) {
                        if (_37 instanceof Data_Either.Left) {
                            return Control_Monad_Error_Trans.runErrorT(h(_37.value0));
                        };
                        if (_37 instanceof Data_Either.Right) {
                            return Prelude["return"](__dict_Monad_197)(new Data_Either.Right(_37.value0));
                        };
                        throw new Error("Failed pattern match");
                    }));
                };
            }, function (e) {
                return Control_Monad_Error_Trans.ErrorT.create(Prelude["return"](__dict_Monad_197)(new Data_Either.Left(e)));
            });
        };
    };
    var monadErrorError = function (__dict_Error_199) {
        return new MonadError(function (_332) {
            return function (_333) {
                if (_332 instanceof Data_Either.Left) {
                    return _333(_332.value0);
                };
                if (_332 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_332.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, Data_Either.Left.create);
    };
    var catchError = function (dict) {
        return dict.catchError;
    };
    var monadErrorMaybeT = function (__dict_Monad_200) {
        return function (__dict_MonadError_201) {
            return new MonadError(Control_Monad_Maybe_Trans.liftCatchMaybe(catchError(__dict_MonadError_201)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_200)(throwError(__dict_MonadError_201)(e));
            });
        };
    };
    var monadErrorReaderT = function (__dict_Monad_202) {
        return function (__dict_MonadError_203) {
            return new MonadError(Control_Monad_Reader_Trans.liftCatchReader(catchError(__dict_MonadError_203)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_202)(throwError(__dict_MonadError_203)(e));
            });
        };
    };
    var monadErrorStateT = function (__dict_Monad_204) {
        return function (__dict_MonadError_205) {
            return new MonadError(Control_Monad_State_Trans.liftCatchState(catchError(__dict_MonadError_205)), function (e) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_204)(throwError(__dict_MonadError_205)(e));
            });
        };
    };
    var monadErrorWriterT = function (__dict_Monad_206) {
        return function (__dict_Monoid_207) {
            return function (__dict_MonadError_208) {
                return new MonadError(Control_Monad_Writer_Trans.liftCatchWriter(catchError(__dict_MonadError_208)), function (e) {
                    return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_207))(__dict_Monad_206)(throwError(__dict_MonadError_208)(e));
                });
            };
        };
    };
    return {
        MonadError: MonadError, 
        catchError: catchError, 
        throwError: throwError, 
        monadErrorError: monadErrorError, 
        monadErrorErrorT: monadErrorErrorT, 
        monadErrorMaybeT: monadErrorMaybeT, 
        monadErrorReaderT: monadErrorReaderT, 
        monadErrorWriterT: monadErrorWriterT, 
        monadErrorStateT: monadErrorStateT
    };
})();
var PS = PS || {};
PS.Control_Monad_Reader_Class = (function () {
    "use strict";
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Prelude = PS.Prelude;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    function MonadReader(ask, local) {
        this.ask = ask;
        this.local = local;
    };
    var monadReaderReaderT = function (__dict_Monad_209) {
        return new MonadReader(Prelude["return"](__dict_Monad_209), Control_Monad_Reader_Trans.withReaderT);
    };
    var monadReaderRWST = function (__dict_Monad_210) {
        return function (__dict_Monoid_211) {
            return new MonadReader(Control_Monad_RWS.ask(__dict_Monad_210["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_211), Control_Monad_RWS.local);
        };
    };
    var monadReaderFun = function (_) {
        return new MonadReader(Prelude.id(Prelude.categoryArr({})), Prelude[">>>"](Prelude.semigroupoidArr({})));
    };
    var local = function (dict) {
        return dict.local;
    };
    var ask = function (dict) {
        return dict.ask;
    };
    var monadReaderErrorT = function (__dict_Monad_212) {
        return function (__dict_Error_213) {
            return function (__dict_MonadReader_214) {
                return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_213))(__dict_Monad_212)(ask(__dict_MonadReader_214)), function (f) {
                    return Control_Monad_Error_Trans.mapErrorT(local(__dict_MonadReader_214)(f));
                });
            };
        };
    };
    var monadReaderMaybeT = function (__dict_Monad_215) {
        return function (__dict_MonadReader_216) {
            return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_215)(ask(__dict_MonadReader_216)), function (f) {
                return Control_Monad_Maybe_Trans.mapMaybeT(local(__dict_MonadReader_216)(f));
            });
        };
    };
    var monadReaderStateT = function (__dict_Monad_217) {
        return function (__dict_MonadReader_218) {
            return new MonadReader(Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_217)(ask(__dict_MonadReader_218)), function (f) {
                return Control_Monad_State_Trans.mapStateT(local(__dict_MonadReader_218)(f));
            });
        };
    };
    var monadReaderWriterT = function (__dict_Monad_219) {
        return function (__dict_Monoid_220) {
            return function (__dict_MonadReader_221) {
                return new MonadReader(Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_220))(__dict_Monad_219)(ask(__dict_MonadReader_221)), function (f) {
                    return Control_Monad_Writer_Trans.mapWriterT(local(__dict_MonadReader_221)(f));
                });
            };
        };
    };
    var reader = function (__dict_Monad_222) {
        return function (__dict_MonadReader_223) {
            return function (f) {
                return Prelude[">>="](__dict_Monad_222["__superclass_Prelude.Bind_1"]({}))(ask(__dict_MonadReader_223))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_222))(f));
            };
        };
    };
    return {
        MonadReader: MonadReader, 
        reader: reader, 
        local: local, 
        ask: ask, 
        monadReaderFun: monadReaderFun, 
        monadReaderReaderT: monadReaderReaderT, 
        monadReaderErrorT: monadReaderErrorT, 
        monadReaderMaybeT: monadReaderMaybeT, 
        monadReaderWriterT: monadReaderWriterT, 
        monadReaderStateT: monadReaderStateT, 
        monadReaderRWST: monadReaderRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_State_Class = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    function MonadState(state) {
        this.state = state;
    };
    var state = function (dict) {
        return dict.state;
    };
    var put = function (__dict_Monad_224) {
        return function (__dict_MonadState_225) {
            return function (s) {
                return state(__dict_MonadState_225)(function (_) {
                    return new Data_Tuple.Tuple(Prelude.unit, s);
                });
            };
        };
    };
    var monadStateWriterT = function (__dict_Monad_226) {
        return function (__dict_Monoid_227) {
            return function (__dict_MonadState_228) {
                return new MonadState(function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_227))(__dict_Monad_226)(state(__dict_MonadState_228)(f));
                });
            };
        };
    };
    var monadStateStateT1 = function (__dict_Monad_229) {
        return function (__dict_MonadState_230) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_229)(state(__dict_MonadState_230)(f));
            });
        };
    };
    var monadStateStateT = function (__dict_Monad_231) {
        return new MonadState(function (f) {
            return Control_Monad_State_Trans.StateT.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](__dict_Monad_231))(f));
        });
    };
    var monadStateReaderT = function (__dict_Monad_232) {
        return function (__dict_MonadState_233) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_232)(state(__dict_MonadState_233)(f));
            });
        };
    };
    var monadStateRWST = function (__dict_Monad_234) {
        return function (__dict_Monoid_235) {
            return new MonadState(Control_Monad_RWS.state(__dict_Monad_234["__superclass_Prelude.Applicative_0"]({}))(__dict_Monoid_235));
        };
    };
    var monadStateMaybeT = function (__dict_Monad_236) {
        return function (__dict_MonadState_237) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_236)(state(__dict_MonadState_237)(f));
            });
        };
    };
    var monadStateErrorT = function (__dict_Monad_238) {
        return function (__dict_Error_239) {
            return function (__dict_MonadState_240) {
                return new MonadState(function (f) {
                    return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_239))(__dict_Monad_238)(state(__dict_MonadState_240)(f));
                });
            };
        };
    };
    var modify = function (__dict_Monad_241) {
        return function (__dict_MonadState_242) {
            return function (f) {
                return state(__dict_MonadState_242)(function (s) {
                    return new Data_Tuple.Tuple(Prelude.unit, f(s));
                });
            };
        };
    };
    var gets = function (__dict_Monad_243) {
        return function (__dict_MonadState_244) {
            return function (f) {
                return state(__dict_MonadState_244)(function (s) {
                    return new Data_Tuple.Tuple(f(s), s);
                });
            };
        };
    };
    var get = function (__dict_Monad_245) {
        return function (__dict_MonadState_246) {
            return state(__dict_MonadState_246)(function (s) {
                return new Data_Tuple.Tuple(s, s);
            });
        };
    };
    return {
        MonadState: MonadState, 
        modify: modify, 
        put: put, 
        gets: gets, 
        get: get, 
        state: state, 
        monadStateStateT: monadStateStateT, 
        monadStateStateT1: monadStateStateT1, 
        monadStateErrorT: monadStateErrorT, 
        monadStateMaybeT: monadStateMaybeT, 
        monadStateReaderT: monadStateReaderT, 
        monadStateWriterT: monadStateWriterT, 
        monadStateRWST: monadStateRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_Writer_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_RWS = PS.Control_Monad_RWS;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    function MonadWriter(listen, pass, writer) {
        this.listen = listen;
        this.pass = pass;
        this.writer = writer;
    };
    var writer = function (dict) {
        return dict.writer;
    };
    var tell = function (__dict_Monoid_247) {
        return function (__dict_Monad_248) {
            return function (__dict_MonadWriter_249) {
                return function (w) {
                    return writer(__dict_MonadWriter_249)(new Data_Tuple.Tuple(Prelude.unit, w));
                };
            };
        };
    };
    var pass = function (dict) {
        return dict.pass;
    };
    var monadWriterWriterT = function (__dict_Monoid_250) {
        return function (__dict_Monad_251) {
            return new MonadWriter(function (m) {
                return Control_Monad_Writer_Trans.WriterT.create(Prelude[">>="](__dict_Monad_251["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_40) {
                    return Prelude["return"](__dict_Monad_251)(new Data_Tuple.Tuple(new Data_Tuple.Tuple(_40.value0, _40.value1), _40.value1));
                }));
            }, function (m) {
                return Control_Monad_Writer_Trans.WriterT.create(Prelude[">>="](__dict_Monad_251["__superclass_Prelude.Bind_1"]({}))(Control_Monad_Writer_Trans.runWriterT(m))(function (_41) {
                    return Prelude["return"](__dict_Monad_251)(new Data_Tuple.Tuple(_41.value0.value0, _41.value0.value1(_41.value1)));
                }));
            }, Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Writer_Trans.WriterT.create)(Prelude["return"](__dict_Monad_251)));
        };
    };
    var monadWriterRWST = function (__dict_Monad_252) {
        return function (__dict_Monoid_253) {
            return new MonadWriter(Control_Monad_RWS.listen(__dict_Monad_252), Control_Monad_RWS.pass(__dict_Monad_252), Control_Monad_RWS.writer(__dict_Monad_252["__superclass_Prelude.Applicative_0"]({})));
        };
    };
    var listen = function (dict) {
        return dict.listen;
    };
    var listens = function (__dict_Monoid_254) {
        return function (__dict_Monad_255) {
            return function (__dict_MonadWriter_256) {
                return function (f) {
                    return function (m) {
                        return Prelude[">>="](__dict_Monad_255["__superclass_Prelude.Bind_1"]({}))(listen(__dict_MonadWriter_256)(m))(function (_38) {
                            return Prelude["return"](__dict_Monad_255)(new Data_Tuple.Tuple(_38.value0, f(_38.value1)));
                        });
                    };
                };
            };
        };
    };
    var monadWriterErrorT = function (__dict_Monad_257) {
        return function (__dict_Error_258) {
            return function (__dict_MonadWriter_259) {
                return new MonadWriter(Control_Monad_Error_Trans.liftListenError(__dict_Monad_257)(listen(__dict_MonadWriter_259)), Control_Monad_Error_Trans.liftPassError(__dict_Monad_257)(pass(__dict_MonadWriter_259)), function (wd) {
                    return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_258))(__dict_Monad_257)(writer(__dict_MonadWriter_259)(wd));
                });
            };
        };
    };
    var monadWriterMaybeT = function (__dict_Monad_260) {
        return function (__dict_MonadWriter_261) {
            return new MonadWriter(Control_Monad_Maybe_Trans.liftListenMaybe(__dict_Monad_260)(listen(__dict_MonadWriter_261)), Control_Monad_Maybe_Trans.liftPassMaybe(__dict_Monad_260)(pass(__dict_MonadWriter_261)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_260)(writer(__dict_MonadWriter_261)(wd));
            });
        };
    };
    var monadWriterReaderT = function (__dict_Monad_262) {
        return function (__dict_MonadWriter_263) {
            return new MonadWriter(Control_Monad_Reader_Trans.mapReaderT(listen(__dict_MonadWriter_263)), Control_Monad_Reader_Trans.mapReaderT(pass(__dict_MonadWriter_263)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_262)(writer(__dict_MonadWriter_263)(wd));
            });
        };
    };
    var monadWriterStateT = function (__dict_Monad_264) {
        return function (__dict_MonadWriter_265) {
            return new MonadWriter(Control_Monad_State_Trans.liftListenState(__dict_Monad_264)(listen(__dict_MonadWriter_265)), Control_Monad_State_Trans.liftPassState(__dict_Monad_264)(pass(__dict_MonadWriter_265)), function (wd) {
                return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_264)(writer(__dict_MonadWriter_265)(wd));
            });
        };
    };
    var censor = function (__dict_Monoid_266) {
        return function (__dict_Monad_267) {
            return function (__dict_MonadWriter_268) {
                return function (f) {
                    return function (m) {
                        return pass(__dict_MonadWriter_268)(Prelude[">>="](__dict_Monad_267["__superclass_Prelude.Bind_1"]({}))(m)(function (_39) {
                            return Prelude["return"](__dict_Monad_267)(new Data_Tuple.Tuple(_39, f));
                        }));
                    };
                };
            };
        };
    };
    return {
        MonadWriter: MonadWriter, 
        censor: censor, 
        listens: listens, 
        tell: tell, 
        pass: pass, 
        listen: listen, 
        writer: writer, 
        monadWriterWriterT: monadWriterWriterT, 
        monadWriterErrorT: monadWriterErrorT, 
        monadWriterMaybeT: monadWriterMaybeT, 
        monadWriterStateT: monadWriterStateT, 
        monadWriterReaderT: monadWriterReaderT, 
        monadWriterRWST: monadWriterRWST
    };
})();
var PS = PS || {};
PS.Control_Monad_RWS_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    var Control_Monad_Reader_Class = PS.Control_Monad_Reader_Class;
    var Control_Monad_Writer_Class = PS.Control_Monad_Writer_Class;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    function MonadRWS(__superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2, __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4, __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3, __superclass_Data$dotMonoid$dotMonoid_1, __superclass_Prelude$dotMonad_0) {
        this["__superclass_Control.Monad.Reader.Class.MonadReader_2"] = __superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2;
        this["__superclass_Control.Monad.State.Class.MonadState_4"] = __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4;
        this["__superclass_Control.Monad.Writer.Class.MonadWriter_3"] = __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3;
        this["__superclass_Data.Monoid.Monoid_1"] = __superclass_Data$dotMonoid$dotMonoid_1;
        this["__superclass_Prelude.Monad_0"] = __superclass_Prelude$dotMonad_0;
    };
    var monadRWSRWST = function (__dict_Monad_269) {
        return function (__dict_Monoid_270) {
            return new MonadRWS(function (_) {
                return Control_Monad_Reader_Class.monadReaderRWST(__dict_Monad_269)(__dict_Monoid_270);
            }, function (_) {
                return Control_Monad_State_Class.monadStateRWST(__dict_Monad_269)(__dict_Monoid_270);
            }, function (_) {
                return Control_Monad_Writer_Class.monadWriterRWST(__dict_Monad_269)(__dict_Monoid_270);
            }, function (_) {
                return __dict_Monoid_270;
            }, function (_) {
                return Control_Monad_RWS_Trans.monadRWST(__dict_Monad_269)(__dict_Monoid_270);
            });
        };
    };
    var monadRWSMaybeT = function (__dict_Monad_271) {
        return function (__dict_Monoid_272) {
            return function (__dict_MonadRWS_273) {
                return function (__dict_MonadReader_274) {
                    return function (__dict_MonadWriter_275) {
                        return function (__dict_MonadState_276) {
                            return new MonadRWS(function (_) {
                                return Control_Monad_Reader_Class.monadReaderMaybeT(__dict_Monad_271)(__dict_MonadReader_274);
                            }, function (_) {
                                return Control_Monad_State_Class.monadStateMaybeT(__dict_Monad_271)(__dict_MonadState_276);
                            }, function (_) {
                                return Control_Monad_Writer_Class.monadWriterMaybeT(__dict_Monad_271)(__dict_MonadWriter_275);
                            }, function (_) {
                                return __dict_Monoid_272;
                            }, function (_) {
                                return Control_Monad_Maybe_Trans.monadMaybeT(__dict_Monad_271);
                            });
                        };
                    };
                };
            };
        };
    };
    var monadRWSErrorT = function (__dict_Monad_277) {
        return function (__dict_Monoid_278) {
            return function (__dict_MonadRWS_279) {
                return function (__dict_MonadReader_280) {
                    return function (__dict_MonadWriter_281) {
                        return function (__dict_MonadState_282) {
                            return function (__dict_Error_283) {
                                return new MonadRWS(function (_) {
                                    return Control_Monad_Reader_Class.monadReaderErrorT(__dict_Monad_277)(__dict_Error_283)(__dict_MonadReader_280);
                                }, function (_) {
                                    return Control_Monad_State_Class.monadStateErrorT(__dict_Monad_277)(__dict_Error_283)(__dict_MonadState_282);
                                }, function (_) {
                                    return Control_Monad_Writer_Class.monadWriterErrorT(__dict_Monad_277)(__dict_Error_283)(__dict_MonadWriter_281);
                                }, function (_) {
                                    return __dict_Monoid_278;
                                }, function (_) {
                                    return Control_Monad_Error_Trans.monadErrorT(__dict_Monad_277)(__dict_Error_283);
                                });
                            };
                        };
                    };
                };
            };
        };
    };
    return {
        MonadRWS: MonadRWS, 
        monadRWSRWST: monadRWSRWST, 
        monadRWSErrorT: monadRWSErrorT, 
        monadRWSMaybeT: monadRWSMaybeT
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Identity = PS.Control_Monad_Identity;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Either = PS.Data_Either;
    var Control_Monad_State_Class = PS.Control_Monad_State_Class;
    var Data_Tuple = PS.Data_Tuple;
    var Control_Monad_Error = PS.Control_Monad_Error;
    function ParseError(value0) {
        this.value0 = value0;
    };
    ParseError.create = function (value0) {
        return new ParseError(value0);
    };
    function ParserT(value0) {
        this.value0 = value0;
    };
    ParserT.create = function (value0) {
        return new ParserT(value0);
    };
    var unParserT = function (_334) {
        return _334.value0;
    };
    var runParserT = function (__dict_Monad_284) {
        return function (s) {
            return function (p) {
                return Prelude[">>="](__dict_Monad_284["__superclass_Prelude.Bind_1"]({}))(unParserT(p)(s))(function (_42) {
                    return Prelude["return"](__dict_Monad_284)(_42.result);
                });
            };
        };
    };
    var runParser = function (s) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Monad_Identity.runIdentity)(runParserT(Control_Monad_Identity.monadIdentity({}))(s));
    };
    var monadTransParserT = function (_) {
        return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_285) {
            return function (m) {
                return ParserT.create(function (s) {
                    return Prelude["<$>"](((__dict_Monad_285["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(function (a) {
                        return {
                            input: s, 
                            consumed: false, 
                            result: new Data_Either.Right(a)
                        };
                    })(m);
                });
            };
        });
    };
    var monadStateParserT = function (__dict_Monad_286) {
        return new Control_Monad_State_Class.MonadState(function (f) {
            return ParserT.create(function (s) {
                return Prelude["return"](__dict_Monad_286)((function (_1075) {
                    return {
                        input: _1075.value1, 
                        consumed: false, 
                        result: new Data_Either.Right(_1075.value0)
                    };
                })(f(s)));
            });
        });
    };
    var functorParserT = function (__dict_Functor_288) {
        return new Prelude.Functor(function (f) {
            return function (p) {
                var f$prime = function (o) {
                    return {
                        input: o.input, 
                        result: Prelude["<$>"](Data_Either.functorEither({}))(f)(o.result), 
                        consumed: o.consumed
                    };
                };
                return ParserT.create(function (s) {
                    return Prelude["<$>"](__dict_Functor_288)(f$prime)(unParserT(p)(s));
                });
            };
        });
    };
    var fail = function (__dict_Monad_289) {
        return function (message) {
            return ParserT.create(function (s) {
                return Prelude["return"](__dict_Monad_289)({
                    input: s, 
                    consumed: false, 
                    result: new Data_Either.Left(new ParseError({
                        message: message
                    }))
                });
            });
        };
    };
    var errorParseError = function (_) {
        return new Control_Monad_Error.Error(new ParseError({
            message: ""
        }), function (msg) {
            return new ParseError({
                message: msg
            });
        });
    };
    var consume = function (__dict_Monad_290) {
        return ParserT.create(function (s) {
            return Prelude["return"](__dict_Monad_290)({
                consumed: true, 
                input: s, 
                result: new Data_Either.Right({})
            });
        });
    };
    var applicativeParserT = function (__dict_Monad_293) {
        return new Prelude.Applicative(function (_) {
            return applyParserT(__dict_Monad_293);
        }, function (a) {
            return ParserT.create(function (s) {
                return Prelude.pure(__dict_Monad_293["__superclass_Prelude.Applicative_0"]({}))({
                    input: s, 
                    result: new Data_Either.Right(a), 
                    consumed: false
                });
            });
        });
    };
    var applyParserT = function (__dict_Monad_292) {
        return new Prelude.Apply(Prelude.ap(monadParserT(__dict_Monad_292)), function (_) {
            return functorParserT(((__dict_Monad_292["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}));
        });
    };
    var monadParserT = function (__dict_Monad_287) {
        return new Prelude.Monad(function (_) {
            return applicativeParserT(__dict_Monad_287);
        }, function (_) {
            return bindParserT(__dict_Monad_287);
        });
    };
    var bindParserT = function (__dict_Monad_291) {
        return new Prelude.Bind(function (p) {
            return function (f) {
                var updateConsumedFlag = function (c) {
                    return function (o) {
                        return {
                            input: o.input, 
                            consumed: c || o.consumed, 
                            result: o.result
                        };
                    };
                };
                return ParserT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_291["__superclass_Prelude.Bind_1"]({}))(unParserT(p)(s))(function (o) {
                        if (o.result instanceof Data_Either.Left) {
                            return Prelude["return"](__dict_Monad_291)({
                                input: o.input, 
                                result: new Data_Either.Left(o.result.value0), 
                                consumed: o.consumed
                            });
                        };
                        if (o.result instanceof Data_Either.Right) {
                            return Prelude["<$>"](((__dict_Monad_291["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(updateConsumedFlag(o.consumed))(unParserT(f(o.result.value0))(o.input));
                        };
                        throw new Error("Failed pattern match");
                    });
                });
            };
        }, function (_) {
            return applyParserT(__dict_Monad_291);
        });
    };
    var alternativeParserT = function (__dict_Monad_294) {
        return new Prelude.Alternative(function (p1) {
            return function (p2) {
                return ParserT.create(function (s) {
                    return Prelude[">>="](__dict_Monad_294["__superclass_Prelude.Bind_1"]({}))(unParserT(p1)(s))(function (o) {
                        if (o.result instanceof Data_Either.Left && !o.consumed) {
                            return unParserT(p2)(s);
                        };
                        return Prelude["return"](__dict_Monad_294)(o);
                    });
                });
            };
        }, fail(__dict_Monad_294)("No alternative"));
    };
    return {
        ParserT: ParserT, 
        ParseError: ParseError, 
        fail: fail, 
        consume: consume, 
        runParser: runParser, 
        runParserT: runParserT, 
        unParserT: unParserT, 
        errorParseError: errorParseError, 
        functorParserT: functorParserT, 
        applyParserT: applyParserT, 
        applicativeParserT: applicativeParserT, 
        alternativeParserT: alternativeParserT, 
        bindParserT: bindParserT, 
        monadParserT: monadParserT, 
        monadTransParserT: monadTransParserT, 
        monadStateParserT: monadStateParserT
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_Combinators = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var $less$qmark$greater = function (__dict_Monad_295) {
        return function (p) {
            return function (msg) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_295))(p)(Text_Parsing_Parser.fail(__dict_Monad_295)("Expected " + msg));
            };
        };
    };
    var $$try = function (__dict_Functor_296) {
        return function (p) {
            var try$prime = function (_336) {
                return function (_337) {
                    if (_337.result instanceof Data_Either.Left) {
                        return {
                            input: _336, 
                            result: _337.result, 
                            consumed: false
                        };
                    };
                    return _337;
                };
            };
            return Text_Parsing_Parser.ParserT.create(function (s) {
                return Prelude["<$>"](__dict_Functor_296)(try$prime(s))(Text_Parsing_Parser.unParserT(p)(s));
            });
        };
    };
    var sepEndBy = function (__dict_Monad_297) {
        return function (p) {
            return function (sep) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_297))(sepEndBy1(__dict_Monad_297)(p)(sep))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_297))([  ]));
            };
        };
    };
    var sepEndBy1 = function (__dict_Monad_298) {
        return function (p) {
            return function (sep) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_298))(p)(function (_49) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_298))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_298))(sep)(function (_) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_298))(sepEndBy(__dict_Monad_298)(p)(sep))(function (_48) {
                            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_298))(Prelude[":"](_49)(_48));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_298))([ _49 ]));
                });
            };
        };
    };
    var optional = function (__dict_Monad_299) {
        return function (p) {
            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_299))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_299))(p)(function (_) {
                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_299))({});
            }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_299))({}));
        };
    };
    var option = function (__dict_Monad_300) {
        return function (a) {
            return function (p) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_300))(p)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_300))(a));
            };
        };
    };
    var optionMaybe = function (__dict_Functor_301) {
        return function (__dict_Monad_302) {
            return function (p) {
                return option(__dict_Monad_302)(Data_Maybe.Nothing.value)(Prelude["<$>"](Text_Parsing_Parser.functorParserT(__dict_Functor_301))(Data_Maybe.Just.create)(p));
            };
        };
    };
    var many = function (__dict_Monad_303) {
        return function (p) {
            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_303))(many1(__dict_Monad_303)(p))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_303))([  ]));
        };
    };
    var many1 = function (__dict_Monad_304) {
        return function (p) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_304))(p)(function (_44) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_304))(many(__dict_Monad_304)(p))(function (_43) {
                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_304))(Prelude[":"](_44)(_43));
                });
            });
        };
    };
    var sepBy1 = function (__dict_Monad_305) {
        return function (p) {
            return function (sep) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_305))(p)(function (_47) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_305))(many(__dict_Monad_305)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_305))(sep)(function (_) {
                        return p;
                    })))(function (_46) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_305))(Prelude[":"](_47)(_46));
                    });
                });
            };
        };
    };
    var sepBy = function (__dict_Monad_306) {
        return function (p) {
            return function (sep) {
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_306))(sepBy1(__dict_Monad_306)(p)(sep))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_306))([  ]));
            };
        };
    };
    var fix2 = function (f) {
        return new Data_Tuple.Tuple(Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(Data_Tuple.fst(f(fix2(f))))(s);
        }), Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(Data_Tuple.snd(f(fix2(f))))(s);
        }));
    };
    var fix = function (f) {
        return Text_Parsing_Parser.ParserT.create(function (s) {
            return Text_Parsing_Parser.unParserT(f(fix(f)))(s);
        });
    };
    var endBy1 = function (__dict_Monad_307) {
        return function (p) {
            return function (sep) {
                return many1(__dict_Monad_307)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_307))(p)(function (_50) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_307))(sep)(function (_) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_307))(_50);
                    });
                }));
            };
        };
    };
    var endBy = function (__dict_Monad_308) {
        return function (p) {
            return function (sep) {
                return many(__dict_Monad_308)(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_308))(p)(function (_51) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_308))(sep)(function (_) {
                        return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_308))(_51);
                    });
                }));
            };
        };
    };
    var choice = function (__dict_Monad_309) {
        return function (_335) {
            if (_335.length === 0) {
                return Text_Parsing_Parser.fail(__dict_Monad_309)("Nothing to parse");
            };
            if (_335.length === 1) {
                return _335[0];
            };
            if (_335.length > 0) {
                var _1098 = _335.slice(1);
                return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_309))(_335[0])(choice(__dict_Monad_309)(_1098));
            };
            throw new Error("Failed pattern match");
        };
    };
    var chainr1 = function (__dict_Monad_310) {
        return function (p) {
            return function (f) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_310))(p)(function (_55) {
                    return chainr1$prime(__dict_Monad_310)(p)(f)(_55);
                });
            };
        };
    };
    var chainr1$prime = function (__dict_Monad_311) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_311))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_311))(f)(function (_57) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_311))(chainr1(__dict_Monad_311)(p)(f))(function (_56) {
                            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_311))(_57(a)(_56));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_311))(a));
                };
            };
        };
    };
    var chainr = function (__dict_Monad_312) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_312))(chainr1(__dict_Monad_312)(p)(f))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_312))(a));
                };
            };
        };
    };
    var chainl1$prime = function (__dict_Monad_313) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_313))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_313))(f)(function (_54) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_313))(p)(function (_53) {
                            return chainl1$prime(__dict_Monad_313)(p)(f)(_54(a)(_53));
                        });
                    }))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_313))(a));
                };
            };
        };
    };
    var chainl1 = function (__dict_Monad_314) {
        return function (p) {
            return function (f) {
                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_314))(p)(function (_52) {
                    return chainl1$prime(__dict_Monad_314)(p)(f)(_52);
                });
            };
        };
    };
    var chainl = function (__dict_Monad_315) {
        return function (p) {
            return function (f) {
                return function (a) {
                    return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_315))(chainl1(__dict_Monad_315)(p)(f))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_315))(a));
                };
            };
        };
    };
    var between = function (__dict_Monad_316) {
        return function (open) {
            return function (close) {
                return function (p) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(open)(function (_) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(p)(function (_45) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_316))(close)(function (__1) {
                                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_316))(_45);
                            });
                        });
                    });
                };
            };
        };
    };
    return {
        choice: choice, 
        "chainr1'": chainr1$prime, 
        chainr1: chainr1, 
        "chainl1'": chainl1$prime, 
        chainl1: chainl1, 
        chainl: chainl, 
        chainr: chainr, 
        endBy: endBy, 
        endBy1: endBy1, 
        sepEndBy1: sepEndBy1, 
        sepEndBy: sepEndBy, 
        sepBy1: sepBy1, 
        sepBy: sepBy, 
        "try": $$try, 
        optionMaybe: optionMaybe, 
        optional: optional, 
        option: option, 
        between: between, 
        "<?>": $less$qmark$greater, 
        many1: many1, 
        many: many, 
        fix2: fix2, 
        fix: fix
    };
})();
var PS = PS || {};
PS.Control_Bind = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $greater$eq$greater = function (__dict_Bind_317) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return Prelude[">>="](__dict_Bind_317)(f(a))(g);
                };
            };
        };
    };
    var $eq$less$less = function (__dict_Bind_318) {
        return function (f) {
            return function (m) {
                return Prelude[">>="](__dict_Bind_318)(m)(f);
            };
        };
    };
    var $less$eq$less = function (__dict_Bind_319) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return $eq$less$less(__dict_Bind_319)(f)(g(a));
                };
            };
        };
    };
    var join = function (__dict_Bind_320) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_320)(m)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var ifM = function (__dict_Bind_321) {
        return function (cond) {
            return function (t) {
                return function (f) {
                    return Prelude[">>="](__dict_Bind_321)(cond)(function (cond$prime) {
                        return cond$prime ? t : f;
                    });
                };
            };
        };
    };
    return {
        ifM: ifM, 
        join: join, 
        "<=<": $less$eq$less, 
        ">=>": $greater$eq$greater, 
        "=<<": $eq$less$less
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $less$times = function (__dict_Apply_322) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_322)(Prelude["<$>"](__dict_Apply_322["__superclass_Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
            };
        };
    };
    var $times$greater = function (__dict_Apply_323) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_323)(Prelude["<$>"](__dict_Apply_323["__superclass_Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    var lift5 = function (__dict_Apply_324) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Prelude["<*>"](__dict_Apply_324)(Prelude["<*>"](__dict_Apply_324)(Prelude["<*>"](__dict_Apply_324)(Prelude["<*>"](__dict_Apply_324)(Prelude["<$>"](__dict_Apply_324["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                            };
                        };
                    };
                };
            };
        };
    };
    var lift4 = function (__dict_Apply_325) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Prelude["<*>"](__dict_Apply_325)(Prelude["<*>"](__dict_Apply_325)(Prelude["<*>"](__dict_Apply_325)(Prelude["<$>"](__dict_Apply_325["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                        };
                    };
                };
            };
        };
    };
    var lift3 = function (__dict_Apply_326) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return Prelude["<*>"](__dict_Apply_326)(Prelude["<*>"](__dict_Apply_326)(Prelude["<$>"](__dict_Apply_326["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c);
                    };
                };
            };
        };
    };
    var lift2 = function (__dict_Apply_327) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return Prelude["<*>"](__dict_Apply_327)(Prelude["<$>"](__dict_Apply_327["__superclass_Prelude.Functor_0"]({}))(f)(a))(b);
                };
            };
        };
    };
    var forever = function (__dict_Apply_328) {
        return function (a) {
            return $times$greater(__dict_Apply_328)(a)(forever(__dict_Apply_328)(a));
        };
    };
    return {
        forever: forever, 
        lift5: lift5, 
        lift4: lift4, 
        lift3: lift3, 
        lift2: lift2, 
        "*>": $times$greater, 
        "<*": $less$times
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Data_Monoid = PS.Data_Monoid;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Monoid_First = PS.Data_Monoid_First;
    function Foldable(foldMap, foldl, foldr) {
        this.foldMap = foldMap;
        this.foldl = foldl;
        this.foldr = foldr;
    };
    function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
    function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
    var foldr = function (dict) {
        return dict.foldr;
    };
    var traverse_ = function (__dict_Applicative_329) {
        return function (__dict_Foldable_330) {
            return function (f) {
                return foldr(__dict_Foldable_330)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Apply["*>"](__dict_Applicative_329["__superclass_Prelude.Apply_0"]({})))(f))(Prelude.pure(__dict_Applicative_329)(Prelude.unit));
            };
        };
    };
    var for_ = function (__dict_Applicative_331) {
        return function (__dict_Foldable_332) {
            return Prelude.flip(traverse_(__dict_Applicative_331)(__dict_Foldable_332));
        };
    };
    var sequence_ = function (__dict_Applicative_333) {
        return function (__dict_Foldable_334) {
            return traverse_(__dict_Applicative_333)(__dict_Foldable_334)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var mconcat = function (__dict_Foldable_335) {
        return function (__dict_Monoid_336) {
            return foldl(__dict_Foldable_335)(Prelude["<>"](__dict_Monoid_336["__superclass_Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_336));
        };
    };
    var or = function (__dict_Foldable_337) {
        return foldl(__dict_Foldable_337)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
    };
    var product = function (__dict_Foldable_338) {
        return foldl(__dict_Foldable_338)(Prelude["*"](Prelude.numNumber({})))(1);
    };
    var sum = function (__dict_Foldable_339) {
        return foldl(__dict_Foldable_339)(Prelude["+"](Prelude.numNumber({})))(0);
    };
    var foldableTuple = function (_) {
        return new Foldable(function (__dict_Monoid_340) {
            return function (_369) {
                return function (_370) {
                    return _369(_370.value1);
                };
            };
        }, function (_366) {
            return function (_367) {
                return function (_368) {
                    return _366(_367)(_368.value1);
                };
            };
        }, function (_363) {
            return function (_364) {
                return function (_365) {
                    return _363(_365.value1)(_364);
                };
            };
        });
    };
    var foldableRef = function (_) {
        return new Foldable(function (__dict_Monoid_341) {
            return function (_361) {
                return function (_362) {
                    return _361(_362);
                };
            };
        }, function (_358) {
            return function (_359) {
                return function (_360) {
                    return _358(_359)(_360);
                };
            };
        }, function (_355) {
            return function (_356) {
                return function (_357) {
                    return _355(_357)(_356);
                };
            };
        });
    };
    var foldableMaybe = function (_) {
        return new Foldable(function (__dict_Monoid_342) {
            return function (_353) {
                return function (_354) {
                    if (_354 instanceof Data_Maybe.Nothing) {
                        return Data_Monoid.mempty(__dict_Monoid_342);
                    };
                    if (_354 instanceof Data_Maybe.Just) {
                        return _353(_354.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_350) {
            return function (_351) {
                return function (_352) {
                    if (_352 instanceof Data_Maybe.Nothing) {
                        return _351;
                    };
                    if (_352 instanceof Data_Maybe.Just) {
                        return _350(_351)(_352.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_347) {
            return function (_348) {
                return function (_349) {
                    if (_349 instanceof Data_Maybe.Nothing) {
                        return _348;
                    };
                    if (_349 instanceof Data_Maybe.Just) {
                        return _347(_349.value0)(_348);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var foldableEither = function (_) {
        return new Foldable(function (__dict_Monoid_343) {
            return function (_345) {
                return function (_346) {
                    if (_346 instanceof Data_Either.Left) {
                        return Data_Monoid.mempty(__dict_Monoid_343);
                    };
                    if (_346 instanceof Data_Either.Right) {
                        return _345(_346.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_342) {
            return function (_343) {
                return function (_344) {
                    if (_344 instanceof Data_Either.Left) {
                        return _343;
                    };
                    if (_344 instanceof Data_Either.Right) {
                        return _342(_343)(_344.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_339) {
            return function (_340) {
                return function (_341) {
                    if (_341 instanceof Data_Either.Left) {
                        return _340;
                    };
                    if (_341 instanceof Data_Either.Right) {
                        return _339(_341.value0)(_340);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var foldableArray = function (_) {
        return new Foldable(function (__dict_Monoid_344) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_344["__superclass_Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_344))(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        });
    };
    var foldMap = function (dict) {
        return dict.foldMap;
    };
    var lookup = function (__dict_Eq_345) {
        return function (__dict_Foldable_346) {
            return function (a) {
                return function (f) {
                    return Data_Monoid_First.runFirst(foldMap(__dict_Foldable_346)(Data_Monoid_First.monoidFirst({}))(function (_338) {
                        return new Data_Monoid_First.First(Prelude["=="](__dict_Eq_345)(a)(_338.value0) ? new Data_Maybe.Just(_338.value1) : Data_Maybe.Nothing.value);
                    })(f));
                };
            };
        };
    };
    var fold = function (__dict_Foldable_347) {
        return function (__dict_Monoid_348) {
            return foldMap(__dict_Foldable_347)(__dict_Monoid_348)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var find = function (__dict_Foldable_349) {
        return function (p) {
            return function (f) {
                return (function (_1156) {
                    if (_1156.length > 0) {
                        var _1158 = _1156.slice(1);
                        return new Data_Maybe.Just(_1156[0]);
                    };
                    if (_1156.length === 0) {
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match");
                })(foldMap(__dict_Foldable_349)(Data_Monoid.monoidArray({}))(function (x) {
                    return p(x) ? [ x ] : [  ];
                })(f));
            };
        };
    };
    var any = function (__dict_Foldable_350) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_350)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    var elem = function (__dict_Eq_351) {
        return function (__dict_Foldable_352) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_352))(Prelude["=="](__dict_Eq_351));
        };
    };
    var notElem = function (__dict_Eq_353) {
        return function (__dict_Foldable_354) {
            return function (x) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_353)(__dict_Foldable_354)(x));
            };
        };
    };
    var and = function (__dict_Foldable_355) {
        return foldl(__dict_Foldable_355)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
    };
    var all = function (__dict_Foldable_356) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_356)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    return {
        Foldable: Foldable, 
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        lookup: lookup, 
        find: find, 
        notElem: notElem, 
        elem: elem, 
        product: product, 
        sum: sum, 
        all: all, 
        any: any, 
        or: or, 
        and: and, 
        mconcat: mconcat, 
        sequence_: sequence_, 
        for_: for_, 
        traverse_: traverse_, 
        fold: fold, 
        foldMap: foldMap, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray, 
        foldableEither: foldableEither, 
        foldableMaybe: foldableMaybe, 
        foldableRef: foldableRef, 
        foldableTuple: foldableTuple
    };
})();
var PS = PS || {};
PS.Data_Map = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Foldable = PS.Data_Foldable;
    function Leaf() {

    };
    Leaf.value = new Leaf();
    function Two(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Two.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Two(value0, value1, value2, value3);
                };
            };
        };
    };
    function Three(value0, value1, value2, value3, value4, value5, value6) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
        this.value6 = value6;
    };
    Three.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return function (value6) {
                                return new Three(value0, value1, value2, value3, value4, value5, value6);
                            };
                        };
                    };
                };
            };
        };
    };
    function TwoLeft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoLeft(value0, value1, value2);
            };
        };
    };
    function TwoRight(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoRight(value0, value1, value2);
            };
        };
    };
    function ThreeLeft(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeLeft(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeMiddle(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeMiddle.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeMiddle(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeRight(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeRight(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function KickUp(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    KickUp.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new KickUp(value0, value1, value2, value3);
                };
            };
        };
    };
    var values = function (_381) {
        if (_381 instanceof Leaf) {
            return [  ];
        };
        if (_381 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(values(_381.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _381.value2 ])(values(_381.value3)));
        };
        if (_381 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(values(_381.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _381.value2 ])(Prelude["++"](Data_Array.semigroupArray({}))(values(_381.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ _381.value5 ])(values(_381.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var toList = function (_379) {
        if (_379 instanceof Leaf) {
            return [  ];
        };
        if (_379 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_379.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_379.value1, _379.value2) ])(toList(_379.value3)));
        };
        if (_379 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_379.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_379.value1, _379.value2) ])(Prelude["++"](Data_Array.semigroupArray({}))(toList(_379.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_379.value4, _379.value5) ])(toList(_379.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var singleton = function (k) {
        return function (v) {
            return new Two(Leaf.value, k, v, Leaf.value);
        };
    };
    var showTree = function (__dict_Show_357) {
        return function (__dict_Show_358) {
            return function (_373) {
                if (_373 instanceof Leaf) {
                    return "Leaf";
                };
                if (_373 instanceof Two) {
                    return "Two (" + showTree(__dict_Show_357)(__dict_Show_358)(_373.value0) + ") (" + Prelude.show(__dict_Show_357)(_373.value1) + ") (" + Prelude.show(__dict_Show_358)(_373.value2) + ") (" + showTree(__dict_Show_357)(__dict_Show_358)(_373.value3) + ")";
                };
                if (_373 instanceof Three) {
                    return "Three (" + showTree(__dict_Show_357)(__dict_Show_358)(_373.value0) + ") (" + Prelude.show(__dict_Show_357)(_373.value1) + ") (" + Prelude.show(__dict_Show_358)(_373.value2) + ") (" + showTree(__dict_Show_357)(__dict_Show_358)(_373.value3) + ") (" + Prelude.show(__dict_Show_357)(_373.value4) + ") (" + Prelude.show(__dict_Show_358)(_373.value5) + ") (" + showTree(__dict_Show_357)(__dict_Show_358)(_373.value6) + ")";
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var showMap = function (__dict_Show_359) {
        return function (__dict_Show_360) {
            return new Prelude.Show(function (m) {
                return "fromList " + Prelude.show(Prelude.showArray(Data_Tuple.showTuple(__dict_Show_359)(__dict_Show_360)))(toList(m));
            });
        };
    };
    var lookup = function (__copy___dict_Ord_361) {
        return function (__copy__375) {
            return function (__copy__376) {
                var __dict_Ord_361 = __copy___dict_Ord_361;
                var _375 = __copy__375;
                var _376 = __copy__376;
                tco: while (true) {
                    if (_376 instanceof Leaf) {
                        return Data_Maybe.Nothing.value;
                    };
                    if (_376 instanceof Two && Prelude["=="](__dict_Ord_361["__superclass_Prelude.Eq_0"]({}))(_375)(_376.value1)) {
                        return new Data_Maybe.Just(_376.value2);
                    };
                    if (_376 instanceof Two && Prelude["<"](__dict_Ord_361)(_375)(_376.value1)) {
                        var __tco___dict_Ord_361 = __dict_Ord_361;
                        var __tco__375 = _375;
                        var __tco__376 = _376.value0;
                        __dict_Ord_361 = __tco___dict_Ord_361;
                        _375 = __tco__375;
                        _376 = __tco__376;
                        continue tco;
                    };
                    if (_376 instanceof Two) {
                        var __tco___dict_Ord_361 = __dict_Ord_361;
                        var __tco__375 = _375;
                        var __tco__376 = _376.value3;
                        __dict_Ord_361 = __tco___dict_Ord_361;
                        _375 = __tco__375;
                        _376 = __tco__376;
                        continue tco;
                    };
                    if (_376 instanceof Three && Prelude["=="](__dict_Ord_361["__superclass_Prelude.Eq_0"]({}))(_375)(_376.value1)) {
                        return new Data_Maybe.Just(_376.value2);
                    };
                    if (_376 instanceof Three && Prelude["=="](__dict_Ord_361["__superclass_Prelude.Eq_0"]({}))(_375)(_376.value4)) {
                        return new Data_Maybe.Just(_376.value5);
                    };
                    if (_376 instanceof Three && Prelude["<"](__dict_Ord_361)(_375)(_376.value1)) {
                        var __tco___dict_Ord_361 = __dict_Ord_361;
                        var __tco__375 = _375;
                        var __tco__376 = _376.value0;
                        __dict_Ord_361 = __tco___dict_Ord_361;
                        _375 = __tco__375;
                        _376 = __tco__376;
                        continue tco;
                    };
                    if (_376 instanceof Three && Prelude["<"](__dict_Ord_361)(_376.value1)(_375) && Prelude["<="](__dict_Ord_361)(_375)(_376.value4)) {
                        var __tco___dict_Ord_361 = __dict_Ord_361;
                        var __tco__375 = _375;
                        var __tco__376 = _376.value3;
                        __dict_Ord_361 = __tco___dict_Ord_361;
                        _375 = __tco__375;
                        _376 = __tco__376;
                        continue tco;
                    };
                    if (_376 instanceof Three) {
                        var __tco___dict_Ord_361 = __dict_Ord_361;
                        var __tco__375 = _375;
                        var __tco__376 = _376.value6;
                        __dict_Ord_361 = __tco___dict_Ord_361;
                        _375 = __tco__375;
                        _376 = __tco__376;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var member = function (__dict_Ord_362) {
        return function (k) {
            return function (m) {
                return Data_Maybe.isJust(lookup(__dict_Ord_362)(k)(m));
            };
        };
    };
    var keys = function (_380) {
        if (_380 instanceof Leaf) {
            return [  ];
        };
        if (_380 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(keys(_380.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _380.value1 ])(keys(_380.value3)));
        };
        if (_380 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(keys(_380.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ _380.value1 ])(Prelude["++"](Data_Array.semigroupArray({}))(keys(_380.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ _380.value4 ])(keys(_380.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var isEmpty = function (_374) {
        if (_374 instanceof Leaf) {
            return true;
        };
        return false;
    };
    var functorMap = function (_) {
        return new Prelude.Functor(function (_382) {
            return function (_383) {
                if (_383 instanceof Leaf) {
                    return Leaf.value;
                };
                if (_383 instanceof Two) {
                    return new Two(Prelude["<$>"](functorMap({}))(_382)(_383.value0), _383.value1, _382(_383.value2), Prelude["<$>"](functorMap({}))(_382)(_383.value3));
                };
                if (_383 instanceof Three) {
                    return new Three(Prelude["<$>"](functorMap({}))(_382)(_383.value0), _383.value1, _382(_383.value2), Prelude["<$>"](functorMap({}))(_382)(_383.value3), _383.value4, _382(_383.value5), Prelude["<$>"](functorMap({}))(_382)(_383.value6));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var map = Prelude["<$>"](functorMap({}));
    var fromZipper = function (__copy___dict_Ord_363) {
        return function (__copy__377) {
            return function (__copy__378) {
                var __dict_Ord_363 = __copy___dict_Ord_363;
                var _377 = __copy__377;
                var _378 = __copy__378;
                tco: while (true) {
                    if (_377.length === 0) {
                        return _378;
                    };
                    if (_377.length > 0) {
                        var _1273 = _377.slice(1);
                        if (_377[0] instanceof TwoLeft) {
                            var __tco___dict_Ord_363 = __dict_Ord_363;
                            var __tco__378 = new Two(_378, (_377[0]).value0, (_377[0]).value1, (_377[0]).value2);
                            __dict_Ord_363 = __tco___dict_Ord_363;
                            _377 = _1273;
                            _378 = __tco__378;
                            continue tco;
                        };
                    };
                    if (_377.length > 0) {
                        var _1278 = _377.slice(1);
                        if (_377[0] instanceof TwoRight) {
                            var __tco___dict_Ord_363 = __dict_Ord_363;
                            var __tco__378 = new Two((_377[0]).value0, (_377[0]).value1, (_377[0]).value2, _378);
                            __dict_Ord_363 = __tco___dict_Ord_363;
                            _377 = _1278;
                            _378 = __tco__378;
                            continue tco;
                        };
                    };
                    if (_377.length > 0) {
                        var _1283 = _377.slice(1);
                        if (_377[0] instanceof ThreeLeft) {
                            var __tco___dict_Ord_363 = __dict_Ord_363;
                            var __tco__378 = new Three(_378, (_377[0]).value0, (_377[0]).value1, (_377[0]).value2, (_377[0]).value3, (_377[0]).value4, (_377[0]).value5);
                            __dict_Ord_363 = __tco___dict_Ord_363;
                            _377 = _1283;
                            _378 = __tco__378;
                            continue tco;
                        };
                    };
                    if (_377.length > 0) {
                        var _1291 = _377.slice(1);
                        if (_377[0] instanceof ThreeMiddle) {
                            var __tco___dict_Ord_363 = __dict_Ord_363;
                            var __tco__378 = new Three((_377[0]).value0, (_377[0]).value1, (_377[0]).value2, _378, (_377[0]).value3, (_377[0]).value4, (_377[0]).value5);
                            __dict_Ord_363 = __tco___dict_Ord_363;
                            _377 = _1291;
                            _378 = __tco__378;
                            continue tco;
                        };
                    };
                    if (_377.length > 0) {
                        var _1299 = _377.slice(1);
                        if (_377[0] instanceof ThreeRight) {
                            var __tco___dict_Ord_363 = __dict_Ord_363;
                            var __tco__378 = new Three((_377[0]).value0, (_377[0]).value1, (_377[0]).value2, (_377[0]).value3, (_377[0]).value4, (_377[0]).value5, _378);
                            __dict_Ord_363 = __tco___dict_Ord_363;
                            _377 = _1299;
                            _378 = __tco__378;
                            continue tco;
                        };
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var insert = function (__dict_Ord_364) {
        var up = function (__copy___dict_Ord_365) {
            return function (__copy__389) {
                return function (__copy__390) {
                    var __dict_Ord_365 = __copy___dict_Ord_365;
                    var _389 = __copy__389;
                    var _390 = __copy__390;
                    tco: while (true) {
                        if (_389.length === 0) {
                            return new Two(_390.value0, _390.value1, _390.value2, _390.value3);
                        };
                        if (_389.length > 0) {
                            var _1317 = _389.slice(1);
                            if (_389[0] instanceof TwoLeft) {
                                return fromZipper(__dict_Ord_365)(_1317)(new Three(_390.value0, _390.value1, _390.value2, _390.value3, (_389[0]).value0, (_389[0]).value1, (_389[0]).value2));
                            };
                        };
                        if (_389.length > 0) {
                            var _1326 = _389.slice(1);
                            if (_389[0] instanceof TwoRight) {
                                return fromZipper(__dict_Ord_365)(_1326)(new Three((_389[0]).value0, (_389[0]).value1, (_389[0]).value2, _390.value0, _390.value1, _390.value2, _390.value3));
                            };
                        };
                        if (_389.length > 0) {
                            var _1335 = _389.slice(1);
                            if (_389[0] instanceof ThreeLeft) {
                                var __tco___dict_Ord_365 = __dict_Ord_365;
                                var __tco__390 = new KickUp(new Two(_390.value0, _390.value1, _390.value2, _390.value3), (_389[0]).value0, (_389[0]).value1, new Two((_389[0]).value2, (_389[0]).value3, (_389[0]).value4, (_389[0]).value5));
                                __dict_Ord_365 = __tco___dict_Ord_365;
                                _389 = _1335;
                                _390 = __tco__390;
                                continue tco;
                            };
                        };
                        if (_389.length > 0) {
                            var _1347 = _389.slice(1);
                            if (_389[0] instanceof ThreeMiddle) {
                                var __tco___dict_Ord_365 = __dict_Ord_365;
                                var __tco__390 = new KickUp(new Two((_389[0]).value0, (_389[0]).value1, (_389[0]).value2, _390.value0), _390.value1, _390.value2, new Two(_390.value3, (_389[0]).value3, (_389[0]).value4, (_389[0]).value5));
                                __dict_Ord_365 = __tco___dict_Ord_365;
                                _389 = _1347;
                                _390 = __tco__390;
                                continue tco;
                            };
                        };
                        if (_389.length > 0) {
                            var _1359 = _389.slice(1);
                            if (_389[0] instanceof ThreeRight) {
                                var __tco___dict_Ord_365 = __dict_Ord_365;
                                var __tco__390 = new KickUp(new Two((_389[0]).value0, (_389[0]).value1, (_389[0]).value2, (_389[0]).value3), (_389[0]).value4, (_389[0]).value5, new Two(_390.value0, _390.value1, _390.value2, _390.value3));
                                __dict_Ord_365 = __tco___dict_Ord_365;
                                _389 = _1359;
                                _390 = __tco__390;
                                continue tco;
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var down = function (__copy___dict_Ord_366) {
            return function (__copy__385) {
                return function (__copy__386) {
                    return function (__copy__387) {
                        return function (__copy__388) {
                            var __dict_Ord_366 = __copy___dict_Ord_366;
                            var _385 = __copy__385;
                            var _386 = __copy__386;
                            var _387 = __copy__387;
                            var _388 = __copy__388;
                            tco: while (true) {
                                if (_388 instanceof Leaf) {
                                    return up(__dict_Ord_366)(_385)(new KickUp(Leaf.value, _386, _387, Leaf.value));
                                };
                                if (_388 instanceof Two && Prelude["=="](__dict_Ord_366["__superclass_Prelude.Eq_0"]({}))(_386)(_388.value1)) {
                                    return fromZipper(__dict_Ord_366)(_385)(new Two(_388.value0, _386, _387, _388.value3));
                                };
                                if (_388 instanceof Two && Prelude["<"](__dict_Ord_366)(_386)(_388.value1)) {
                                    var __tco___dict_Ord_366 = __dict_Ord_366;
                                    var __tco__385 = Prelude[":"](new TwoLeft(_388.value1, _388.value2, _388.value3))(_385);
                                    var __tco__386 = _386;
                                    var __tco__387 = _387;
                                    var __tco__388 = _388.value0;
                                    __dict_Ord_366 = __tco___dict_Ord_366;
                                    _385 = __tco__385;
                                    _386 = __tco__386;
                                    _387 = __tco__387;
                                    _388 = __tco__388;
                                    continue tco;
                                };
                                if (_388 instanceof Two) {
                                    var __tco___dict_Ord_366 = __dict_Ord_366;
                                    var __tco__385 = Prelude[":"](new TwoRight(_388.value0, _388.value1, _388.value2))(_385);
                                    var __tco__386 = _386;
                                    var __tco__387 = _387;
                                    var __tco__388 = _388.value3;
                                    __dict_Ord_366 = __tco___dict_Ord_366;
                                    _385 = __tco__385;
                                    _386 = __tco__386;
                                    _387 = __tco__387;
                                    _388 = __tco__388;
                                    continue tco;
                                };
                                if (_388 instanceof Three && Prelude["=="](__dict_Ord_366["__superclass_Prelude.Eq_0"]({}))(_386)(_388.value1)) {
                                    return fromZipper(__dict_Ord_366)(_385)(new Three(_388.value0, _386, _387, _388.value3, _388.value4, _388.value5, _388.value6));
                                };
                                if (_388 instanceof Three && Prelude["=="](__dict_Ord_366["__superclass_Prelude.Eq_0"]({}))(_386)(_388.value4)) {
                                    return fromZipper(__dict_Ord_366)(_385)(new Three(_388.value0, _388.value1, _388.value2, _388.value3, _386, _387, _388.value6));
                                };
                                if (_388 instanceof Three && Prelude["<"](__dict_Ord_366)(_386)(_388.value1)) {
                                    var __tco___dict_Ord_366 = __dict_Ord_366;
                                    var __tco__385 = Prelude[":"](new ThreeLeft(_388.value1, _388.value2, _388.value3, _388.value4, _388.value5, _388.value6))(_385);
                                    var __tco__386 = _386;
                                    var __tco__387 = _387;
                                    var __tco__388 = _388.value0;
                                    __dict_Ord_366 = __tco___dict_Ord_366;
                                    _385 = __tco__385;
                                    _386 = __tco__386;
                                    _387 = __tco__387;
                                    _388 = __tco__388;
                                    continue tco;
                                };
                                if (_388 instanceof Three && Prelude["<"](__dict_Ord_366)(_388.value1)(_386) && Prelude["<="](__dict_Ord_366)(_386)(_388.value4)) {
                                    var __tco___dict_Ord_366 = __dict_Ord_366;
                                    var __tco__385 = Prelude[":"](new ThreeMiddle(_388.value0, _388.value1, _388.value2, _388.value4, _388.value5, _388.value6))(_385);
                                    var __tco__386 = _386;
                                    var __tco__387 = _387;
                                    var __tco__388 = _388.value3;
                                    __dict_Ord_366 = __tco___dict_Ord_366;
                                    _385 = __tco__385;
                                    _386 = __tco__386;
                                    _387 = __tco__387;
                                    _388 = __tco__388;
                                    continue tco;
                                };
                                if (_388 instanceof Three) {
                                    var __tco___dict_Ord_366 = __dict_Ord_366;
                                    var __tco__385 = Prelude[":"](new ThreeRight(_388.value0, _388.value1, _388.value2, _388.value3, _388.value4, _388.value5))(_385);
                                    var __tco__386 = _386;
                                    var __tco__387 = _387;
                                    var __tco__388 = _388.value6;
                                    __dict_Ord_366 = __tco___dict_Ord_366;
                                    _385 = __tco__385;
                                    _386 = __tco__386;
                                    _387 = __tco__387;
                                    _388 = __tco__388;
                                    continue tco;
                                };
                                throw new Error("Failed pattern match");
                            };
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_364)([  ]);
    };
    var union = function (__dict_Ord_367) {
        return function (m1) {
            return function (m2) {
                return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
                    return function (_372) {
                        return insert(__dict_Ord_367)(_372.value0)(_372.value1)(m);
                    };
                })(m2)(toList(m1));
            };
        };
    };
    var eqMap = function (__dict_Eq_368) {
        return function (__dict_Eq_369) {
            return new Prelude.Eq(function (m1) {
                return function (m2) {
                    return !Prelude["=="](eqMap(__dict_Eq_368)(__dict_Eq_369))(m1)(m2);
                };
            }, function (m1) {
                return function (m2) {
                    return Prelude["=="](Prelude.eqArray(Data_Tuple.eqTuple(__dict_Eq_368)(__dict_Eq_369)))(toList(m1))(toList(m2));
                };
            });
        };
    };
    var empty = Leaf.value;
    var fromList = function (__dict_Ord_370) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
            return function (_371) {
                return insert(__dict_Ord_370)(_371.value0)(_371.value1)(m);
            };
        })(empty);
    };
    var unions = function (__dict_Ord_371) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_371))(empty);
    };
    var $$delete = function (__dict_Ord_372) {
        var up = function (__copy___dict_Ord_373) {
            return function (__copy__394) {
                return function (__copy__395) {
                    var __dict_Ord_373 = __copy___dict_Ord_373;
                    var _394 = __copy__394;
                    var _395 = __copy__395;
                    tco: while (true) {
                        if (_394.length === 0) {
                            return _395;
                        };
                        if (_394.length > 0) {
                            var _1426 = _394.slice(1);
                            if (_394[0] instanceof TwoLeft && (_394[0]).value2 instanceof Leaf && _395 instanceof Leaf) {
                                return fromZipper(__dict_Ord_373)(_1426)(new Two(Leaf.value, (_394[0]).value0, (_394[0]).value1, Leaf.value));
                            };
                        };
                        if (_394.length > 0) {
                            var _1431 = _394.slice(1);
                            if (_394[0] instanceof TwoRight && (_394[0]).value0 instanceof Leaf && _395 instanceof Leaf) {
                                return fromZipper(__dict_Ord_373)(_1431)(new Two(Leaf.value, (_394[0]).value1, (_394[0]).value2, Leaf.value));
                            };
                        };
                        if (_394.length > 0) {
                            var _1436 = _394.slice(1);
                            if (_394[0] instanceof TwoLeft && (_394[0]).value2 instanceof Two) {
                                var __tco___dict_Ord_373 = __dict_Ord_373;
                                var __tco__395 = new Three(_395, (_394[0]).value0, (_394[0]).value1, (_394[0]).value2.value0, (_394[0]).value2.value1, (_394[0]).value2.value2, (_394[0]).value2.value3);
                                __dict_Ord_373 = __tco___dict_Ord_373;
                                _394 = _1436;
                                _395 = __tco__395;
                                continue tco;
                            };
                        };
                        if (_394.length > 0) {
                            var _1445 = _394.slice(1);
                            if (_394[0] instanceof TwoRight && (_394[0]).value0 instanceof Two) {
                                var __tco___dict_Ord_373 = __dict_Ord_373;
                                var __tco__395 = new Three((_394[0]).value0.value0, (_394[0]).value0.value1, (_394[0]).value0.value2, (_394[0]).value0.value3, (_394[0]).value1, (_394[0]).value2, _395);
                                __dict_Ord_373 = __tco___dict_Ord_373;
                                _394 = _1445;
                                _395 = __tco__395;
                                continue tco;
                            };
                        };
                        if (_394.length > 0) {
                            var _1454 = _394.slice(1);
                            if (_394[0] instanceof TwoLeft && (_394[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1454)(new Two(new Two(_395, (_394[0]).value0, (_394[0]).value1, (_394[0]).value2.value0), (_394[0]).value2.value1, (_394[0]).value2.value2, new Two((_394[0]).value2.value3, (_394[0]).value2.value4, (_394[0]).value2.value5, (_394[0]).value2.value6)));
                            };
                        };
                        if (_394.length > 0) {
                            var _1466 = _394.slice(1);
                            if (_394[0] instanceof TwoRight && (_394[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1466)(new Two(new Two((_394[0]).value0.value0, (_394[0]).value0.value1, (_394[0]).value0.value2, (_394[0]).value0.value3), (_394[0]).value0.value4, (_394[0]).value0.value5, new Two((_394[0]).value0.value6, (_394[0]).value1, (_394[0]).value2, _395)));
                            };
                        };
                        if (_394.length > 0) {
                            var _1478 = _394.slice(1);
                            if (_394[0] instanceof ThreeLeft && (_394[0]).value2 instanceof Leaf && (_394[0]).value5 instanceof Leaf && _395 instanceof Leaf) {
                                return fromZipper(__dict_Ord_373)(_1478)(new Three(Leaf.value, (_394[0]).value0, (_394[0]).value1, Leaf.value, (_394[0]).value3, (_394[0]).value4, Leaf.value));
                            };
                        };
                        if (_394.length > 0) {
                            var _1486 = _394.slice(1);
                            if (_394[0] instanceof ThreeMiddle && (_394[0]).value0 instanceof Leaf && (_394[0]).value5 instanceof Leaf && _395 instanceof Leaf) {
                                return fromZipper(__dict_Ord_373)(_1486)(new Three(Leaf.value, (_394[0]).value1, (_394[0]).value2, Leaf.value, (_394[0]).value3, (_394[0]).value4, Leaf.value));
                            };
                        };
                        if (_394.length > 0) {
                            var _1494 = _394.slice(1);
                            if (_394[0] instanceof ThreeRight && (_394[0]).value0 instanceof Leaf && (_394[0]).value3 instanceof Leaf && _395 instanceof Leaf) {
                                return fromZipper(__dict_Ord_373)(_1494)(new Three(Leaf.value, (_394[0]).value1, (_394[0]).value2, Leaf.value, (_394[0]).value4, (_394[0]).value5, Leaf.value));
                            };
                        };
                        if (_394.length > 0) {
                            var _1502 = _394.slice(1);
                            if (_394[0] instanceof ThreeLeft && (_394[0]).value2 instanceof Two) {
                                return fromZipper(__dict_Ord_373)(_1502)(new Two(new Three(_395, (_394[0]).value0, (_394[0]).value1, (_394[0]).value2.value0, (_394[0]).value2.value1, (_394[0]).value2.value2, (_394[0]).value2.value3), (_394[0]).value3, (_394[0]).value4, (_394[0]).value5));
                            };
                        };
                        if (_394.length > 0) {
                            var _1514 = _394.slice(1);
                            if (_394[0] instanceof ThreeMiddle && (_394[0]).value0 instanceof Two) {
                                return fromZipper(__dict_Ord_373)(_1514)(new Two(new Three((_394[0]).value0.value0, (_394[0]).value0.value1, (_394[0]).value0.value2, (_394[0]).value0.value3, (_394[0]).value1, (_394[0]).value2, _395), (_394[0]).value3, (_394[0]).value4, (_394[0]).value5));
                            };
                        };
                        if (_394.length > 0) {
                            var _1526 = _394.slice(1);
                            if (_394[0] instanceof ThreeMiddle && (_394[0]).value5 instanceof Two) {
                                return fromZipper(__dict_Ord_373)(_1526)(new Two((_394[0]).value0, (_394[0]).value1, (_394[0]).value2, new Three(_395, (_394[0]).value3, (_394[0]).value4, (_394[0]).value5.value0, (_394[0]).value5.value1, (_394[0]).value5.value2, (_394[0]).value5.value3)));
                            };
                        };
                        if (_394.length > 0) {
                            var _1538 = _394.slice(1);
                            if (_394[0] instanceof ThreeRight && (_394[0]).value3 instanceof Two) {
                                return fromZipper(__dict_Ord_373)(_1538)(new Two((_394[0]).value0, (_394[0]).value1, (_394[0]).value2, new Three((_394[0]).value3.value0, (_394[0]).value3.value1, (_394[0]).value3.value2, (_394[0]).value3.value3, (_394[0]).value4, (_394[0]).value5, _395)));
                            };
                        };
                        if (_394.length > 0) {
                            var _1550 = _394.slice(1);
                            if (_394[0] instanceof ThreeLeft && (_394[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1550)(new Three(new Two(_395, (_394[0]).value0, (_394[0]).value1, (_394[0]).value2.value0), (_394[0]).value2.value1, (_394[0]).value2.value2, new Two((_394[0]).value2.value3, (_394[0]).value2.value4, (_394[0]).value2.value5, (_394[0]).value2.value6), (_394[0]).value3, (_394[0]).value4, (_394[0]).value5));
                            };
                        };
                        if (_394.length > 0) {
                            var _1565 = _394.slice(1);
                            if (_394[0] instanceof ThreeMiddle && (_394[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1565)(new Three(new Two((_394[0]).value0.value0, (_394[0]).value0.value1, (_394[0]).value0.value2, (_394[0]).value0.value3), (_394[0]).value0.value4, (_394[0]).value0.value5, new Two((_394[0]).value0.value6, (_394[0]).value1, (_394[0]).value2, _395), (_394[0]).value3, (_394[0]).value4, (_394[0]).value5));
                            };
                        };
                        if (_394.length > 0) {
                            var _1580 = _394.slice(1);
                            if (_394[0] instanceof ThreeMiddle && (_394[0]).value5 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1580)(new Three((_394[0]).value0, (_394[0]).value1, (_394[0]).value2, new Two(_395, (_394[0]).value3, (_394[0]).value4, (_394[0]).value5.value0), (_394[0]).value5.value1, (_394[0]).value5.value2, new Two((_394[0]).value5.value3, (_394[0]).value5.value4, (_394[0]).value5.value5, (_394[0]).value5.value6)));
                            };
                        };
                        if (_394.length > 0) {
                            var _1595 = _394.slice(1);
                            if (_394[0] instanceof ThreeRight && (_394[0]).value3 instanceof Three) {
                                return fromZipper(__dict_Ord_373)(_1595)(new Three((_394[0]).value0, (_394[0]).value1, (_394[0]).value2, new Two((_394[0]).value3.value0, (_394[0]).value3.value1, (_394[0]).value3.value2, (_394[0]).value3.value3), (_394[0]).value3.value4, (_394[0]).value3.value5, new Two((_394[0]).value3.value6, (_394[0]).value4, (_394[0]).value5, _395)));
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var removeMaxNode = function (__copy___dict_Ord_374) {
            return function (__copy__397) {
                return function (__copy__398) {
                    var __dict_Ord_374 = __copy___dict_Ord_374;
                    var _397 = __copy__397;
                    var _398 = __copy__398;
                    tco: while (true) {
                        if (_398 instanceof Two && _398.value0 instanceof Leaf && _398.value3 instanceof Leaf) {
                            return up(__dict_Ord_374)(_397)(Leaf.value);
                        };
                        if (_398 instanceof Two) {
                            var __tco___dict_Ord_374 = __dict_Ord_374;
                            var __tco__397 = Prelude[":"](new TwoRight(_398.value0, _398.value1, _398.value2))(_397);
                            var __tco__398 = _398.value3;
                            __dict_Ord_374 = __tco___dict_Ord_374;
                            _397 = __tco__397;
                            _398 = __tco__398;
                            continue tco;
                        };
                        if (_398 instanceof Three && _398.value0 instanceof Leaf && _398.value3 instanceof Leaf && _398.value6 instanceof Leaf) {
                            return up(__dict_Ord_374)(Prelude[":"](new TwoRight(Leaf.value, _398.value1, _398.value2))(_397))(Leaf.value);
                        };
                        if (_398 instanceof Three) {
                            var __tco___dict_Ord_374 = __dict_Ord_374;
                            var __tco__397 = Prelude[":"](new ThreeRight(_398.value0, _398.value1, _398.value2, _398.value3, _398.value4, _398.value5))(_397);
                            var __tco__398 = _398.value6;
                            __dict_Ord_374 = __tco___dict_Ord_374;
                            _397 = __tco__397;
                            _398 = __tco__398;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var maxNode = function (__copy___dict_Ord_375) {
            return function (__copy__396) {
                var __dict_Ord_375 = __copy___dict_Ord_375;
                var _396 = __copy__396;
                tco: while (true) {
                    if (_396 instanceof Two && _396.value3 instanceof Leaf) {
                        return {
                            key: _396.value1, 
                            value: _396.value2
                        };
                    };
                    if (_396 instanceof Two) {
                        var __tco___dict_Ord_375 = __dict_Ord_375;
                        var __tco__396 = _396.value3;
                        __dict_Ord_375 = __tco___dict_Ord_375;
                        _396 = __tco__396;
                        continue tco;
                    };
                    if (_396 instanceof Three && _396.value6 instanceof Leaf) {
                        return {
                            key: _396.value4, 
                            value: _396.value5
                        };
                    };
                    if (_396 instanceof Three) {
                        var __tco___dict_Ord_375 = __dict_Ord_375;
                        var __tco__396 = _396.value6;
                        __dict_Ord_375 = __tco___dict_Ord_375;
                        _396 = __tco__396;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
        var down = function (__copy___dict_Ord_376) {
            return function (__copy__391) {
                return function (__copy__392) {
                    return function (__copy__393) {
                        var __dict_Ord_376 = __copy___dict_Ord_376;
                        var _391 = __copy__391;
                        var _392 = __copy__392;
                        var _393 = __copy__393;
                        tco: while (true) {
                            if (_393 instanceof Leaf) {
                                return fromZipper(__dict_Ord_376)(_391)(Leaf.value);
                            };
                            if (_393 instanceof Two && _393.value0 instanceof Leaf && _393.value3 instanceof Leaf && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value1)) {
                                return up(__dict_Ord_376)(_391)(Leaf.value);
                            };
                            if (_393 instanceof Two && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value1)) {
                                var max = maxNode(__dict_Ord_376)(_393.value0);
                                return removeMaxNode(__dict_Ord_376)(Prelude[":"](new TwoLeft(max.key, max.value, _393.value3))(_391))(_393.value0);
                            };
                            if (_393 instanceof Two && Prelude["<"](__dict_Ord_376)(_392)(_393.value1)) {
                                var __tco___dict_Ord_376 = __dict_Ord_376;
                                var __tco__391 = Prelude[":"](new TwoLeft(_393.value1, _393.value2, _393.value3))(_391);
                                var __tco__392 = _392;
                                var __tco__393 = _393.value0;
                                __dict_Ord_376 = __tco___dict_Ord_376;
                                _391 = __tco__391;
                                _392 = __tco__392;
                                _393 = __tco__393;
                                continue tco;
                            };
                            if (_393 instanceof Two) {
                                var __tco___dict_Ord_376 = __dict_Ord_376;
                                var __tco__391 = Prelude[":"](new TwoRight(_393.value0, _393.value1, _393.value2))(_391);
                                var __tco__392 = _392;
                                var __tco__393 = _393.value3;
                                __dict_Ord_376 = __tco___dict_Ord_376;
                                _391 = __tco__391;
                                _392 = __tco__392;
                                _393 = __tco__393;
                                continue tco;
                            };
                            if (_393 instanceof Three && _393.value0 instanceof Leaf && _393.value3 instanceof Leaf && _393.value6 instanceof Leaf && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value1)) {
                                return fromZipper(__dict_Ord_376)(_391)(new Two(Leaf.value, _393.value4, _393.value5, Leaf.value));
                            };
                            if (_393 instanceof Three && _393.value0 instanceof Leaf && _393.value3 instanceof Leaf && _393.value6 instanceof Leaf && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value4)) {
                                return fromZipper(__dict_Ord_376)(_391)(new Two(Leaf.value, _393.value1, _393.value2, Leaf.value));
                            };
                            if (_393 instanceof Three && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value1)) {
                                var max = maxNode(__dict_Ord_376)(_393.value0);
                                return removeMaxNode(__dict_Ord_376)(Prelude[":"](new ThreeLeft(max.key, max.value, _393.value3, _393.value4, _393.value5, _393.value6))(_391))(_393.value0);
                            };
                            if (_393 instanceof Three && Prelude["=="](__dict_Ord_376["__superclass_Prelude.Eq_0"]({}))(_392)(_393.value4)) {
                                var max = maxNode(__dict_Ord_376)(_393.value3);
                                return removeMaxNode(__dict_Ord_376)(Prelude[":"](new ThreeMiddle(_393.value0, _393.value1, _393.value2, max.key, max.value, _393.value6))(_391))(_393.value3);
                            };
                            if (_393 instanceof Three && Prelude["<"](__dict_Ord_376)(_392)(_393.value1)) {
                                var __tco___dict_Ord_376 = __dict_Ord_376;
                                var __tco__391 = Prelude[":"](new ThreeLeft(_393.value1, _393.value2, _393.value3, _393.value4, _393.value5, _393.value6))(_391);
                                var __tco__392 = _392;
                                var __tco__393 = _393.value0;
                                __dict_Ord_376 = __tco___dict_Ord_376;
                                _391 = __tco__391;
                                _392 = __tco__392;
                                _393 = __tco__393;
                                continue tco;
                            };
                            if (_393 instanceof Three && Prelude["<"](__dict_Ord_376)(_393.value1)(_392) && Prelude["<"](__dict_Ord_376)(_392)(_393.value4)) {
                                var __tco___dict_Ord_376 = __dict_Ord_376;
                                var __tco__391 = Prelude[":"](new ThreeMiddle(_393.value0, _393.value1, _393.value2, _393.value4, _393.value5, _393.value6))(_391);
                                var __tco__392 = _392;
                                var __tco__393 = _393.value3;
                                __dict_Ord_376 = __tco___dict_Ord_376;
                                _391 = __tco__391;
                                _392 = __tco__392;
                                _393 = __tco__393;
                                continue tco;
                            };
                            if (_393 instanceof Three) {
                                var __tco___dict_Ord_376 = __dict_Ord_376;
                                var __tco__391 = Prelude[":"](new ThreeRight(_393.value0, _393.value1, _393.value2, _393.value3, _393.value4, _393.value5))(_391);
                                var __tco__392 = _392;
                                var __tco__393 = _393.value6;
                                __dict_Ord_376 = __tco___dict_Ord_376;
                                _391 = __tco__391;
                                _392 = __tco__392;
                                _393 = __tco__393;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_372)([  ]);
    };
    var checkValid = function (tree) {
        var allHeights = function (_384) {
            if (_384 instanceof Leaf) {
                return [ 0 ];
            };
            if (_384 instanceof Two) {
                return Data_Array.map(function (n) {
                    return n + 1;
                })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_384.value0))(allHeights(_384.value3)));
            };
            if (_384 instanceof Three) {
                return Data_Array.map(function (n) {
                    return n + 1;
                })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_384.value0))(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_384.value3))(allHeights(_384.value6))));
            };
            throw new Error("Failed pattern match");
        };
        return Data_Array.length(Data_Array.nub(Prelude.eqNumber({}))(allHeights(tree))) === 1;
    };
    var alter = function (__dict_Ord_377) {
        return function (f) {
            return function (k) {
                return function (m) {
                    return (function (_1736) {
                        if (_1736 instanceof Data_Maybe.Nothing) {
                            return $$delete(__dict_Ord_377)(k)(m);
                        };
                        if (_1736 instanceof Data_Maybe.Just) {
                            return insert(__dict_Ord_377)(k)(_1736.value0)(m);
                        };
                        throw new Error("Failed pattern match");
                    })(f(lookup(__dict_Ord_377)(k)(m)));
                };
            };
        };
    };
    var update = function (__dict_Ord_378) {
        return function (f) {
            return function (k) {
                return function (m) {
                    return alter(__dict_Ord_378)(Data_Maybe.maybe(Data_Maybe.Nothing.value)(f))(k)(m);
                };
            };
        };
    };
    return {
        map: map, 
        unions: unions, 
        union: union, 
        values: values, 
        keys: keys, 
        update: update, 
        alter: alter, 
        member: member, 
        "delete": $$delete, 
        fromList: fromList, 
        toList: toList, 
        lookup: lookup, 
        insert: insert, 
        checkValid: checkValid, 
        singleton: singleton, 
        isEmpty: isEmpty, 
        empty: empty, 
        showTree: showTree, 
        eqMap: eqMap, 
        showMap: showMap, 
        functorMap: functorMap
    };
})();
var PS = PS || {};
PS.Tutorial_Ractive = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Ractive = PS.Control_Monad_Eff_Ractive;
    var Data_String = PS.Data_String;
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Debug_Trace = PS.Debug_Trace;
    var Data_Map = PS.Data_Map;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Array = PS.Data_Array;
    function Tutorial(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tutorial.create = function (value0) {
        return function (value1) {
            return new Tutorial(value0, value1);
        };
    };
    var tutorialName = function (_399) {
        return _399.value0;
    };
    var tutorialFn = function (_400) {
        return _400.value1;
    };
    var tutorial2Run2 = function (r) {
        return function (ev) {
            return function __do() {
                Control_Monad_Eff_Ractive.set("name")("Mundo")(r)();
                return Control_Monad_Eff_Ractive.set("greetings")("Hola")(r)();
            };
        };
    };
    var tutorial2Run1 = function (partials) {
        return function (r) {
            return function (event) {
                return function __do() {
                    Control_Monad_Eff_Ractive.set("showOutput")(false)(r)();
                    var __1 = Control_Monad_Eff_Ractive.setPartial("outputP")(partials.outputP)(r)();
                    return Control_Monad_Eff_Ractive.set("showOutput")(true)(r)();
                };
            };
        };
    };
    var tutorial1Run1 = function (partials) {
        return function (r) {
            return function (event) {
                return function __do() {
                    Control_Monad_Eff_Ractive.set("showOutput")(false)(r)();
                    var __1 = Control_Monad_Eff_Ractive.setPartial("outputP")(partials.outputP)(r)();
                    return Control_Monad_Eff_Ractive.set("showOutput")(true)(r)();
                };
            };
        };
    };
    var toChars = function (str) {
        var _toChars = function (__copy__401) {
            return function (__copy__402) {
                return function (__copy__403) {
                    var _401 = __copy__401;
                    var _402 = __copy__402;
                    var _403 = __copy__403;
                    tco: while (true) {
                        if (_401 === 0) {
                            return _403;
                        };
                        var __tco__401 = _401 - 1;
                        var __tco__402 = _402;
                        var __tco__403 = Prelude[":"](Data_String.charCodeAt(_401 - 1)(_402))(_403);
                        _401 = __tco__401;
                        _402 = __tco__402;
                        _403 = __tco__403;
                        continue tco;
                    };
                };
            };
        };
        return _toChars(Data_String.length(str))(str)([  ]);
    };
    var ractiveTemplate = "#ractive-template";
    var ractiveElement = "ractive-element";
    var createRactive = function (partials) {
        return function (d) {
            return Control_Monad_Eff_Ractive.ractiveFromData({
                template: ractiveTemplate, 
                el: ractiveElement, 
                partials: partials, 
                data: d
            });
        };
    };
    var tutorial1Fn = function (partials) {
        return function (_) {
            return function __do() {
                var __1 = Debug_Trace.trace("Tutorial 1 starting")();
                var _58 = createRactive({
                    outputP: "", 
                    contentP: partials.contentP
                })({})();
                var __2 = Control_Monad_Eff_Ractive.on("run1")(tutorial1Run1(partials))(_58)();
                return Debug_Trace.trace("Tutorial 1 Done")();
            };
        };
    };
    var tutorial1 = new Tutorial("tut1", tutorial1Fn);
    var tutorial2Fn = function (partials) {
        return function (_) {
            return function __do() {
                var __1 = Debug_Trace.trace("Tutorial 2 Starting")();
                var _59 = createRactive(partials)({
                    name: "Värld", 
                    greetings: "Hej, hej"
                })();
                var __2 = Control_Monad_Eff_Ractive.on("run1")(tutorial2Run1(partials))(_59)();
                var __3 = Control_Monad_Eff_Ractive.on("run2")(tutorial2Run2)(_59)();
                return Debug_Trace.trace("Tutorial 2 Done")();
            };
        };
    };
    var tutorial2 = new Tutorial("tut2", tutorial2Fn);
    var listOfTutorials = [ tutorial1, tutorial2 ];
    var mapOfTutorials = (function () {
        var tutName = function (_404) {
            return _404.value0;
        };
        return Data_Map.fromList(Prelude.ordString({}))(Prelude.flip(Data_Tuple.zip)(listOfTutorials)(Prelude["<$>"](Data_Array.functorArray({}))(tutName)(listOfTutorials)));
    })();
    return {
        Tutorial: Tutorial, 
        listOfTutorials: listOfTutorials, 
        tutorial2: tutorial2, 
        tutorial2Fn: tutorial2Fn, 
        tutorial2Run2: tutorial2Run2, 
        tutorial2Run1: tutorial2Run1, 
        tutorial1Fn: tutorial1Fn, 
        tutorial1Run1: tutorial1Run1, 
        tutorial1: tutorial1, 
        mapOfTutorials: mapOfTutorials, 
        createRactive: createRactive, 
        ractiveElement: ractiveElement, 
        ractiveTemplate: ractiveTemplate, 
        tutorialFn: tutorialFn, 
        tutorialName: tutorialName, 
        toChars: toChars
    };
})();
var PS = PS || {};
PS.Data_Set = (function () {
    "use strict";
    var Data_Map = PS.Data_Map;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    function Set(value0) {
        this.value0 = value0;
    };
    Set.create = function (value0) {
        return new Set(value0);
    };
    var union = function (__dict_Ord_379) {
        return function (_414) {
            return function (_415) {
                return new Set(Data_Map.union(__dict_Ord_379)(_414.value0)(_415.value0));
            };
        };
    };
    var toList = function (_413) {
        return Data_Array.map(Data_Tuple.fst)(Data_Map.toList(_413.value0));
    };
    var singleton = function (a) {
        return new Set(Data_Map.singleton(a)(Prelude.unit));
    };
    var showSet = function (__dict_Show_380) {
        return new Prelude.Show(function (s) {
            return "fromList " + Prelude.show(Prelude.showArray(__dict_Show_380))(toList(s));
        });
    };
    var member = function (__dict_Ord_381) {
        return function (_407) {
            return function (_408) {
                return Data_Map.member(__dict_Ord_381)(_407)(_408.value0);
            };
        };
    };
    var isEmpty = function (_405) {
        return Data_Map.isEmpty(_405.value0);
    };
    var insert = function (__dict_Ord_382) {
        return function (_409) {
            return function (_410) {
                return new Set(Data_Map.insert(__dict_Ord_382)(_409)(Prelude.unit)(_410.value0));
            };
        };
    };
    var eqSet = function (__dict_Eq_383) {
        return new Prelude.Eq(function (_418) {
            return function (_419) {
                return Prelude["/="](Data_Map.eqMap(__dict_Eq_383)(Prelude.eqUnit({})))(_418.value0)(_419.value0);
            };
        }, function (_416) {
            return function (_417) {
                return Prelude["=="](Data_Map.eqMap(__dict_Eq_383)(Prelude.eqUnit({})))(_416.value0)(_417.value0);
            };
        });
    };
    var empty = new Set(Data_Map.empty);
    var fromList = function (__dict_Ord_384) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
            return function (a) {
                return insert(__dict_Ord_384)(a)(m);
            };
        })(empty);
    };
    var unions = function (__dict_Ord_385) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_385))(empty);
    };
    var $$delete = function (__dict_Ord_386) {
        return function (_411) {
            return function (_412) {
                return new Set(Data_Map["delete"](__dict_Ord_386)(_411)(_412.value0));
            };
        };
    };
    var checkValid = function (_406) {
        return Data_Map.checkValid(_406.value0);
    };
    return {
        unions: unions, 
        union: union, 
        fromList: fromList, 
        toList: toList, 
        "delete": $$delete, 
        member: member, 
        insert: insert, 
        checkValid: checkValid, 
        singleton: singleton, 
        isEmpty: isEmpty, 
        empty: empty, 
        eqSet: eqSet, 
        showSet: showSet
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Array = PS.Data_Array;
    function Traversable(__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
        this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var traversableTuple = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableTuple({});
        }, function (__1) {
            return Data_Tuple.functorTuple({});
        }, function (__dict_Applicative_388) {
            return function (_434) {
                return Prelude["<$>"]((__dict_Applicative_388["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_434.value0))(_434.value1);
            };
        }, function (__dict_Applicative_387) {
            return function (_432) {
                return function (_433) {
                    return Prelude["<$>"]((__dict_Applicative_387["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_433.value0))(_432(_433.value1));
                };
            };
        });
    };
    var traversableRef = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableRef({});
        }, function (__1) {
            return Data_Eq.functorRef({});
        }, function (__dict_Applicative_390) {
            return function (_428) {
                return Prelude["<$>"]((__dict_Applicative_390["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_428);
            };
        }, function (__dict_Applicative_389) {
            return function (_426) {
                return function (_427) {
                    return Prelude["<$>"]((__dict_Applicative_389["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_426(_427));
                };
            };
        });
    };
    var traversableMaybe = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableMaybe({});
        }, function (__1) {
            return Data_Maybe.functorMaybe({});
        }, function (__dict_Applicative_392) {
            return function (_431) {
                if (_431 instanceof Data_Maybe.Nothing) {
                    return Prelude.pure(__dict_Applicative_392)(Data_Maybe.Nothing.value);
                };
                if (_431 instanceof Data_Maybe.Just) {
                    return Prelude["<$>"]((__dict_Applicative_392["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_431.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_391) {
            return function (_429) {
                return function (_430) {
                    if (_430 instanceof Data_Maybe.Nothing) {
                        return Prelude.pure(__dict_Applicative_391)(Data_Maybe.Nothing.value);
                    };
                    if (_430 instanceof Data_Maybe.Just) {
                        return Prelude["<$>"]((__dict_Applicative_391["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_429(_430.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var traversableEither = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableEither({});
        }, function (__1) {
            return Data_Either.functorEither({});
        }, function (__dict_Applicative_394) {
            return function (_425) {
                if (_425 instanceof Data_Either.Left) {
                    return Prelude.pure(__dict_Applicative_394)(new Data_Either.Left(_425.value0));
                };
                if (_425 instanceof Data_Either.Right) {
                    return Prelude["<$>"]((__dict_Applicative_394["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_425.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_393) {
            return function (_423) {
                return function (_424) {
                    if (_424 instanceof Data_Either.Left) {
                        return Prelude.pure(__dict_Applicative_393)(new Data_Either.Left(_424.value0));
                    };
                    if (_424 instanceof Data_Either.Right) {
                        return Prelude["<$>"]((__dict_Applicative_393["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_423(_424.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var sequence = function (dict) {
        return dict.sequence;
    };
    var traversableArray = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableArray({});
        }, function (__1) {
            return Data_Array.functorArray({});
        }, function (__dict_Applicative_396) {
            return function (_422) {
                if (_422.length === 0) {
                    return Prelude.pure(__dict_Applicative_396)([  ]);
                };
                if (_422.length > 0) {
                    var _1803 = _422.slice(1);
                    return Prelude["<*>"](__dict_Applicative_396["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_396["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_422[0]))(sequence(traversableArray({}))(__dict_Applicative_396)(_1803));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_395) {
            return function (_420) {
                return function (_421) {
                    if (_421.length === 0) {
                        return Prelude.pure(__dict_Applicative_395)([  ]);
                    };
                    if (_421.length > 0) {
                        var _1807 = _421.slice(1);
                        return Prelude["<*>"](__dict_Applicative_395["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_395["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_420(_421[0])))(traverse(traversableArray({}))(__dict_Applicative_395)(_420)(_1807));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var zipWithA = function (__dict_Applicative_397) {
        return function (f) {
            return function (xs) {
                return function (ys) {
                    return sequence(traversableArray({}))(__dict_Applicative_397)(Data_Array.zipWith(f)(xs)(ys));
                };
            };
        };
    };
    var $$for = function (__dict_Applicative_398) {
        return function (__dict_Traversable_399) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_399)(__dict_Applicative_398)(f)(x);
                };
            };
        };
    };
    return {
        Traversable: Traversable, 
        zipWithA: zipWithA, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray, 
        traversableEither: traversableEither, 
        traversableRef: traversableRef, 
        traversableMaybe: traversableMaybe, 
        traversableTuple: traversableTuple
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Array = PS.Data_Array;
    function ForeignParser(value0) {
        this.value0 = value0;
    };
    ForeignParser.create = function (value0) {
        return new ForeignParser(value0);
    };
    function ReadForeign(read) {
        this.read = read;
    };
    function fromStringImpl(left, right, str) {   try {     return right(JSON.parse(str));   } catch (e) {     return left(e.toString());   } };
    function readPrimTypeImpl(left, right, typeName, value) {   if (toString.call(value) == '[object ' + typeName + ']') {     return right(value);  }   return left('Value is not a ' + typeName + ''); };
    function readMaybeImpl(nothing, just, value) {   return value === undefined || value === null ? nothing : just(value); };
    function readPropImpl(k, obj) {     return obj == undefined ? undefined : obj[k];};
    function readKeysImpl(left, right, k, obj) {   if (obj == undefined) {     return left('cannot get a key from an undefined or null value');   } else if (obj[k] == undefined) {     return left('value is undefined or null');   } else if (Array.isArray(obj[k])) {     return left('value is an array');   } else if (typeof obj[k] !== 'object') {     return left('value is not an object');   }   return right(Object.keys(obj[k])); };
    var showForeignImpl = JSON.stringify;;
    var showForeign = function (_) {
        return new Prelude.Show(showForeignImpl);
    };
    var readPrimType = function (ty) {
        return function (x) {
            return readPrimTypeImpl(Data_Either.Left.create, Data_Either.Right.create, ty, x);
        };
    };
    var readString = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("String")));
    };
    var readNumber = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Number")));
    };
    var readMaybeImpl$prime = function (x) {
        return readMaybeImpl(Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
    };
    var readError = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Error")));
    };
    var readBoolean = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Boolean")));
    };
    var read = function (dict) {
        return dict.read;
    };
    var parseForeign = function (_435) {
        return function (_436) {
            return _435.value0(_436);
        };
    };
    var functorForeignParser = function (_) {
        return new Prelude.Functor(function (_437) {
            return function (_438) {
                return new ForeignParser(function (x) {
                    return Prelude["<$>"](Data_Either.functorEither({}))(_437)(_438.value0(x));
                });
            };
        });
    };
    var fromString = function (s) {
        return fromStringImpl(Data_Either.Left.create, Data_Either.Right.create, s);
    };
    var parseJSON = function (__dict_ReadForeign_404) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_404)));
        };
    };
    var applyForeignParser = function (_) {
        return new Prelude.Apply(function (_441) {
            return function (_442) {
                return new ForeignParser(function (x) {
                    return (function (_1816) {
                        if (_1816 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_1816.value0);
                        };
                        if (_1816 instanceof Data_Either.Right) {
                            return Prelude["<$>"](Data_Either.functorEither({}))(_1816.value0)(_442.value0(x));
                        };
                        throw new Error("Failed pattern match");
                    })(_441.value0(x));
                });
            };
        }, function (__1) {
            return functorForeignParser({});
        });
    };
    var bindForeignParser = function (_) {
        return new Prelude.Bind(function (_439) {
            return function (_440) {
                return new ForeignParser(function (x) {
                    return (function (_1823) {
                        if (_1823 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_1823.value0);
                        };
                        if (_1823 instanceof Data_Either.Right) {
                            return parseForeign(_440(_1823.value0))(x);
                        };
                        throw new Error("Failed pattern match");
                    })(_439.value0(x));
                });
            };
        }, function (__1) {
            return applyForeignParser({});
        });
    };
    var index = function (__dict_ReadForeign_403) {
        return function (i) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readIndexImpl$prime(i)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_1827) {
                        if (_1827 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_1827.value0);
                        };
                        if (_1827 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading index '" + Prelude.show(Prelude.showNumber({}))(i) + "':\n" + _1827.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_403))(x));
                });
            });
        };
    };
    var readIndexImpl$prime = function (index_1) {
        return function (x) {
            return readPropImpl(index_1, x);
        };
    };
    var prop = function (__dict_ReadForeign_400) {
        return function (p) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readPropImpl$prime(p)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_1830) {
                        if (_1830 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_1830.value0);
                        };
                        if (_1830 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading property '" + p + "':\n" + _1830.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_400))(x));
                });
            });
        };
    };
    var readPropImpl$prime = function (prop_1) {
        return function (x) {
            return readPropImpl(prop_1, x);
        };
    };
    var readKeysImpl$prime = function (prop_1) {
        return function (x) {
            return readKeysImpl(Data_Either.Left.create, Data_Either.Right.create, prop_1, x);
        };
    };
    var keys = function (p) {
        return new ForeignParser(function (x) {
            return (function (_1833) {
                if (_1833 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_1833.value0);
                };
                if (_1833 instanceof Data_Either.Left) {
                    return Data_Either.Left.create("Error reading object keys of '" + p + "':\n" + _1833.value0);
                };
                throw new Error("Failed pattern match");
            })(readKeysImpl$prime(p)(x));
        });
    };
    var readArray = function (__dict_ReadForeign_401) {
        return new ReadForeign((function () {
            var arrayItem = function (_443) {
                return (function (_1837) {
                    if (_1837 instanceof Data_Either.Right) {
                        return new Data_Either.Right(_1837.value0);
                    };
                    if (_1837 instanceof Data_Either.Left) {
                        return Data_Either.Left.create("Error reading item at index " + Prelude.show(Prelude.showNumber({}))(_443.value0) + ":\n" + _1837.value0);
                    };
                    throw new Error("Failed pattern match");
                })(parseForeign(read(__dict_ReadForeign_401))(_443.value1));
            };
            return Prelude[">>="](bindForeignParser({}))(ForeignParser.create(readPrimType("Array")))(function (xs) {
                return new ForeignParser(function (_) {
                    return Data_Traversable.traverse(Data_Traversable.traversableArray({}))(Data_Either.applicativeEither({}))(arrayItem)(Data_Tuple.zip(Data_Array.range(0)(Data_Array.length(xs)))(xs));
                });
            });
        })());
    };
    var readMaybe = function (__dict_ReadForeign_402) {
        return new ReadForeign(Prelude[">>="](bindForeignParser({}))(ForeignParser.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Right.create)(readMaybeImpl$prime)))(function (x) {
            return new ForeignParser(function (_) {
                if (x instanceof Data_Maybe.Just) {
                    return Prelude[">>="](Data_Either.bindEither({}))(parseForeign(read(__dict_ReadForeign_402))(x.value0))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](Data_Either.monadEither({})))(Data_Maybe.Just.create));
                };
                if (x instanceof Data_Maybe.Nothing) {
                    return Prelude["return"](Data_Either.monadEither({}))(Data_Maybe.Nothing.value);
                };
                throw new Error("Failed pattern match");
            });
        }));
    };
    var applicativeForeignParser = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyForeignParser({});
        }, function (x) {
            return new ForeignParser(function (__1) {
                return new Data_Either.Right(x);
            });
        });
    };
    var monadForeignParser = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeForeignParser({});
        }, function (__1) {
            return bindForeignParser({});
        });
    };
    return {
        ForeignParser: ForeignParser, 
        ReadForeign: ReadForeign, 
        keys: keys, 
        index: index, 
        prop: prop, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        showForeign: showForeign, 
        functorForeignParser: functorForeignParser, 
        bindForeignParser: bindForeignParser, 
        applyForeignParser: applyForeignParser, 
        applicativeForeignParser: applicativeForeignParser, 
        monadForeignParser: monadForeignParser, 
        readString: readString, 
        readNumber: readNumber, 
        readBoolean: readBoolean, 
        readError: readError, 
        readArray: readArray, 
        readMaybe: readMaybe
    };
})();
var PS = PS || {};
PS.Data_Graph = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Math = PS.Math;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_ST = PS.Control_Monad_ST;
    var Data_Map = PS.Data_Map;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Traversable = PS.Data_Traversable;
    var Control_Monad = PS.Control_Monad;
    var Data_Array = PS.Data_Array;
    function AcyclicSCC(value0) {
        this.value0 = value0;
    };
    AcyclicSCC.create = function (value0) {
        return new AcyclicSCC(value0);
    };
    function CyclicSCC(value0) {
        this.value0 = value0;
    };
    CyclicSCC.create = function (value0) {
        return new CyclicSCC(value0);
    };
    function Edge(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Edge.create = function (value0) {
        return function (value1) {
            return new Edge(value0, value1);
        };
    };
    function Graph(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Graph.create = function (value0) {
        return function (value1) {
            return new Graph(value0, value1);
        };
    };
    var vertices = function (_446) {
        if (_446 instanceof AcyclicSCC) {
            return [ _446.value0 ];
        };
        if (_446 instanceof CyclicSCC) {
            return _446.value0;
        };
        throw new Error("Failed pattern match");
    };
    var showSCC = function (__dict_Show_405) {
        return new Prelude.Show(function (_456) {
            if (_456 instanceof AcyclicSCC) {
                return "AcyclicSCC (" + Prelude.show(__dict_Show_405)(_456.value0) + ")";
            };
            if (_456 instanceof CyclicSCC) {
                return "CyclicSCC " + Prelude.show(Prelude.showArray(__dict_Show_405))(_456.value0);
            };
            throw new Error("Failed pattern match");
        });
    };
    var popUntil = function (__copy___dict_Eq_406) {
        return function (__copy__450) {
            return function (__copy__451) {
                return function (__copy__452) {
                    return function (__copy__453) {
                        var __dict_Eq_406 = __copy___dict_Eq_406;
                        var _450 = __copy__450;
                        var _451 = __copy__451;
                        var _452 = __copy__452;
                        var _453 = __copy__453;
                        tco: while (true) {
                            if (_452.length === 0) {
                                return {
                                    path: [  ], 
                                    component: _453
                                };
                            };
                            if (_452.length > 0) {
                                var _1855 = _452.slice(1);
                                if (Prelude["=="](__dict_Eq_406)(_450(_451))(_450(_452[0]))) {
                                    return {
                                        path: _1855, 
                                        component: Prelude[":"](_452[0])(_453)
                                    };
                                };
                            };
                            if (_452.length > 0) {
                                var _1857 = _452.slice(1);
                                var __tco___dict_Eq_406 = __dict_Eq_406;
                                var __tco__450 = _450;
                                var __tco__451 = _451;
                                var __tco__453 = Prelude[":"](_452[0])(_453);
                                __dict_Eq_406 = __tco___dict_Eq_406;
                                _450 = __tco__450;
                                _451 = __tco__451;
                                _452 = _1857;
                                _453 = __tco__453;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
    };
    var maybeMin = function (_454) {
        return function (_455) {
            if (_455 instanceof Data_Maybe.Nothing) {
                return new Data_Maybe.Just(_454);
            };
            if (_455 instanceof Data_Maybe.Just) {
                return Data_Maybe.Just.create(Math.min(_454)(_455.value0));
            };
            throw new Error("Failed pattern match");
        };
    };
    var scc$prime = function (__dict_Eq_407) {
        return function (__dict_Ord_408) {
            return function (_447) {
                return function (_448) {
                    return function (_449) {
                        return Control_Monad_Eff.runPure(function __do() {
                            var _75 = {
                                value: 0
                            };
                            var _74 = {
                                value: [  ]
                            };
                            var _73 = {
                                value: Data_Map.empty
                            };
                            var _72 = {
                                value: Data_Map.empty
                            };
                            var _71 = {
                                value: [  ]
                            };
                            return (function () {
                                var lowlinkOfKey = function (k) {
                                    return function __do() {
                                        return Data_Map.lookup(__dict_Ord_408)(k)(_72.value);
                                    };
                                };
                                var lowlinkOf = function (v) {
                                    return lowlinkOfKey(_447(v));
                                };
                                var isCycle = function (k) {
                                    return Data_Foldable.any(Data_Foldable.foldableArray({}))(function (_445) {
                                        return Prelude["=="](__dict_Eq_407)(_445.value0)(k) && Prelude["=="](__dict_Eq_407)(_445.value1)(k);
                                    })(_449.value1);
                                };
                                var makeComponent = function (_460) {
                                    if (_460.length === 1 && !isCycle(_447(_460[0]))) {
                                        return new AcyclicSCC(_460[0]);
                                    };
                                    return new CyclicSCC(_460);
                                };
                                var indexOfKey = function (k) {
                                    return function __do() {
                                        return Data_Map.lookup(__dict_Ord_408)(k)(_73.value);
                                    };
                                };
                                var strongConnect = function (k) {
                                    var v = _448(k);
                                    return function __do() {
                                        var _70 = _75.value;
                                        _73.value = Data_Map.insert(__dict_Ord_408)(k)(_70)(_73.value);
                                        var __1 = _72.value = Data_Map.insert(__dict_Ord_408)(k)(_70)(_72.value);
                                        var __2 = _75.value = _70 + 1;
                                        var __3 = _74.value = Prelude[":"](v)(_74.value);
                                        var __4 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_449.value1)(function (_444) {
                                            return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](__dict_Eq_407)(k)(_444.value0))(function __do() {
                                                var _66 = indexOfKey(_444.value1)();
                                                return (function (_1880) {
                                                    if (_1880 instanceof Data_Maybe.Nothing) {
                                                        var w = _448(_444.value1);
                                                        return function __do() {
                                                            var __4 = strongConnect(_444.value1)();
                                                            var _63 = lowlinkOfKey(_444.value1)();
                                                            return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_63)(function (lowlink) {
                                                                return Control_Monad_ST.modifySTRef(_72)(Data_Map.alter(__dict_Ord_408)(maybeMin(lowlink))(k));
                                                            })();
                                                        };
                                                    };
                                                    return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Foldable.elem(__dict_Eq_407)(Data_Foldable.foldableArray({}))(_444.value1)(Data_Array.map(_447)(_74.value)))(function __do() {
                                                        var _64 = indexOfKey(_444.value1)();
                                                        return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_64)(function (index_1) {
                                                            return Control_Monad_ST.modifySTRef(_72)(Data_Map.alter(__dict_Ord_408)(maybeMin(index_1))(k));
                                                        })();
                                                    });
                                                })(_66)();
                                            });
                                        })();
                                        var _69 = indexOfKey(k)();
                                        var _68 = lowlinkOfKey(k)();
                                        return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](Data_Maybe.eqMaybe(Prelude.eqNumber({})))(_69)(_68))(function __do() {
                                            var _67 = _74.value;
                                            return (function () {
                                                var newPath = popUntil(__dict_Eq_407)(_447)(v)(_67)([  ]);
                                                return function __do() {
                                                    var __5 = _71.value = Prelude.flip(Prelude["++"](Data_Array.semigroupArray({})))([ makeComponent(newPath.component) ])(_71.value);
                                                    var __6 = _74.value = newPath.path;
                                                    return Prelude.unit;
                                                };
                                            })()();
                                        })();
                                    };
                                };
                                var indexOf = function (v) {
                                    return indexOfKey(_447(v));
                                };
                                var go = function (_459) {
                                    if (_459.length === 0) {
                                        return Control_Monad_ST.readSTRef(_71);
                                    };
                                    if (_459.length > 0) {
                                        var _1891 = _459.slice(1);
                                        return function __do() {
                                            var _62 = indexOf(_459[0])();
                                            Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Maybe.isNothing(_62))(strongConnect(_447(_459[0])))();
                                            return go(_1891)();
                                        };
                                    };
                                    throw new Error("Failed pattern match");
                                };
                                return go(_449.value0);
                            })()();
                        });
                    };
                };
            };
        };
    };
    var scc = function (__dict_Eq_409) {
        return function (__dict_Ord_410) {
            return scc$prime(__dict_Eq_409)(__dict_Ord_410)(Prelude.id(Prelude.categoryArr({})))(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var topSort$prime = function (__dict_Eq_411) {
        return function (__dict_Ord_412) {
            return function (makeKey) {
                return function (makeVert) {
                    return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.reverse)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.concatMap(vertices))(scc$prime(__dict_Eq_411)(__dict_Ord_412)(makeKey)(makeVert)));
                };
            };
        };
    };
    var topSort = function (__dict_Eq_413) {
        return function (__dict_Ord_414) {
            return topSort$prime(__dict_Eq_413)(__dict_Ord_414)(Prelude.id(Prelude.categoryArr({})))(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var eqSCC = function (__dict_Eq_415) {
        return new Prelude.Eq(function (scc1) {
            return function (scc2) {
                return !Prelude["=="](eqSCC(__dict_Eq_415))(scc1)(scc2);
            };
        }, function (_457) {
            return function (_458) {
                if (_457 instanceof AcyclicSCC && _458 instanceof AcyclicSCC) {
                    return Prelude["=="](__dict_Eq_415)(_457.value0)(_458.value0);
                };
                if (_457 instanceof CyclicSCC && _458 instanceof CyclicSCC) {
                    return Prelude["=="](Prelude.eqArray(__dict_Eq_415))(_457.value0)(_458.value0);
                };
                return false;
            };
        });
    };
    return {
        AcyclicSCC: AcyclicSCC, 
        CyclicSCC: CyclicSCC, 
        Graph: Graph, 
        Edge: Edge, 
        "topSort'": topSort$prime, 
        topSort: topSort, 
        "scc'": scc$prime, 
        scc: scc, 
        vertices: vertices, 
        showSCC: showSCC, 
        eqSCC: eqSCC
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_Expr = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Foldable = PS.Data_Foldable;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    function AssocNone() {

    };
    AssocNone.value = new AssocNone();
    function AssocLeft() {

    };
    AssocLeft.value = new AssocLeft();
    function AssocRight() {

    };
    AssocRight.value = new AssocRight();
    function Infix(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Infix.create = function (value0) {
        return function (value1) {
            return new Infix(value0, value1);
        };
    };
    function Prefix(value0) {
        this.value0 = value0;
    };
    Prefix.create = function (value0) {
        return new Prefix(value0);
    };
    function Postfix(value0) {
        this.value0 = value0;
    };
    Postfix.create = function (value0) {
        return new Postfix(value0);
    };
    var termP = function (__dict_Monad_416) {
        return function (prefixP) {
            return function (term) {
                return function (postfixP) {
                    return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_416))(prefixP)(function (_85) {
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_416))(term)(function (_84) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_416))(postfixP)(function (_83) {
                                return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_416))(_83(_85(_84)));
                            });
                        });
                    });
                };
            };
        };
    };
    var splitOp = function (_461) {
        return function (_462) {
            if (_461 instanceof Infix && _461.value1 instanceof AssocNone) {
                var _1905 = {};
                for (var _1906 in _462) {
                    if (_462.hasOwnProperty(_1906)) {
                        _1905[_1906] = _462[_1906];
                    };
                };
                _1905.nassoc = Prelude[":"](_461.value0)(_462.nassoc);
                return _1905;
            };
            if (_461 instanceof Infix && _461.value1 instanceof AssocLeft) {
                var _1909 = {};
                for (var _1910 in _462) {
                    if (_462.hasOwnProperty(_1910)) {
                        _1909[_1910] = _462[_1910];
                    };
                };
                _1909.lassoc = Prelude[":"](_461.value0)(_462.lassoc);
                return _1909;
            };
            if (_461 instanceof Infix && _461.value1 instanceof AssocRight) {
                var _1913 = {};
                for (var _1914 in _462) {
                    if (_462.hasOwnProperty(_1914)) {
                        _1913[_1914] = _462[_1914];
                    };
                };
                _1913.rassoc = Prelude[":"](_461.value0)(_462.rassoc);
                return _1913;
            };
            if (_461 instanceof Prefix) {
                var _1917 = {};
                for (var _1918 in _462) {
                    if (_462.hasOwnProperty(_1918)) {
                        _1917[_1918] = _462[_1918];
                    };
                };
                _1917.prefix = Prelude[":"](_461.value0)(_462.prefix);
                return _1917;
            };
            if (_461 instanceof Postfix) {
                var _1920 = {};
                for (var _1921 in _462) {
                    if (_462.hasOwnProperty(_1921)) {
                        _1920[_1921] = _462[_1921];
                    };
                };
                _1920.postfix = Prelude[":"](_461.value0)(_462.postfix);
                return _1920;
            };
            throw new Error("Failed pattern match");
        };
    };
    var rassocP = function (__dict_Monad_417) {
        return function (x) {
            return function (rassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_417))(rassocOp)(function (_78) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_417))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_417))(termP(__dict_Monad_417)(prefixP)(term)(postfixP))(function (_76) {
                                    return rassocP1(__dict_Monad_417)(_76)(rassocOp)(prefixP)(term)(postfixP);
                                }))(function (_77) {
                                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_417))(_78(x)(_77));
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var rassocP1 = function (__dict_Monad_418) {
        return function (x) {
            return function (rassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_418))(rassocP(__dict_Monad_418)(x)(rassocOp)(prefixP)(term)(postfixP))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_418))(x));
                        };
                    };
                };
            };
        };
    };
    var nassocP = function (__dict_Monad_419) {
        return function (x) {
            return function (nassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_419))(nassocOp)(function (_82) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_419))(termP(__dict_Monad_419)(prefixP)(term)(postfixP))(function (_81) {
                                    return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_419))(_82(x)(_81));
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var lassocP = function (__dict_Monad_420) {
        return function (x) {
            return function (lassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_420))(lassocOp)(function (_80) {
                                return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_420))(termP(__dict_Monad_420)(prefixP)(term)(postfixP))(function (_79) {
                                    return lassocP1(__dict_Monad_420)(_80(x)(_79))(lassocOp)(prefixP)(term)(postfixP);
                                });
                            });
                        };
                    };
                };
            };
        };
    };
    var lassocP1 = function (__dict_Monad_421) {
        return function (x) {
            return function (lassocOp) {
                return function (prefixP) {
                    return function (term) {
                        return function (postfixP) {
                            return Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_421))(lassocP(__dict_Monad_421)(x)(lassocOp)(prefixP)(term)(postfixP))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_421))(x));
                        };
                    };
                };
            };
        };
    };
    var buildExprParser = function (__dict_Monad_422) {
        return function (operators) {
            return function (simpleExpr) {
                var makeParser = function (term) {
                    return function (ops) {
                        var accum = Data_Foldable.foldr(Data_Foldable.foldableArray({}))(splitOp)({
                            rassoc: [  ], 
                            lassoc: [  ], 
                            nassoc: [  ], 
                            prefix: [  ], 
                            postfix: [  ]
                        })(ops);
                        var rassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_422)(accum.rassoc);
                        var lassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_422)(accum.lassoc);
                        var nassocOp = Text_Parsing_Parser_Combinators.choice(__dict_Monad_422)(accum.nassoc);
                        var prefixOp = Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_422)(Text_Parsing_Parser_Combinators.choice(__dict_Monad_422)(accum.prefix))("");
                        var postfixOp = Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_422)(Text_Parsing_Parser_Combinators.choice(__dict_Monad_422)(accum.postfix))("");
                        var postfixP = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_422))(postfixOp)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_422))(Prelude.id(Prelude.categoryArr({}))));
                        var prefixP = Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_422))(prefixOp)(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_422))(Prelude.id(Prelude.categoryArr({}))));
                        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_422))(termP(__dict_Monad_422)(prefixP)(term)(postfixP))(function (_86) {
                            return Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_422)(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_422))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_422))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_422))(rassocP(__dict_Monad_422)(_86)(rassocOp)(prefixP)(term)(postfixP))(lassocP(__dict_Monad_422)(_86)(lassocOp)(prefixP)(term)(postfixP)))(nassocP(__dict_Monad_422)(_86)(nassocOp)(prefixP)(term)(postfixP)))(Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_422))(_86)))("operator");
                        });
                    };
                };
                return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(makeParser)(simpleExpr)(operators);
            };
        };
    };
    return {
        Infix: Infix, 
        Prefix: Prefix, 
        Postfix: Postfix, 
        AssocNone: AssocNone, 
        AssocLeft: AssocLeft, 
        AssocRight: AssocRight, 
        buildExprParser: buildExprParser, 
        termP: termP, 
        nassocP: nassocP, 
        lassocP1: lassocP1, 
        lassocP: lassocP, 
        rassocP1: rassocP1, 
        rassocP: rassocP, 
        splitOp: splitOp
    };
})();
var PS = PS || {};
PS.Text_Parsing_Parser_String = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_String = PS.Data_String;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Monoid = PS.Data_Monoid;
    var string = function (__dict_Monad_423) {
        return function (s) {
            return Text_Parsing_Parser.ParserT.create(function (s$prime) {
                return Prelude["return"](__dict_Monad_423)((function (_1931) {
                    if (_1931 === 0) {
                        return {
                            consumed: true, 
                            input: Data_String.drop(Data_String.length(s))(s$prime), 
                            result: new Data_Either.Right(s)
                        };
                    };
                    return {
                        consumed: false, 
                        input: s$prime, 
                        result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Expected " + Prelude.show(Prelude.showString({}))(s)))
                    };
                })(Data_String.indexOf(s)(s$prime)));
            });
        };
    };
    var whiteSpace = function (__dict_Monad_424) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_424))(Text_Parsing_Parser_Combinators.many(__dict_Monad_424)(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_424))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_424))(Prelude["<|>"](Text_Parsing_Parser.alternativeParserT(__dict_Monad_424))(string(__dict_Monad_424)("\n"))(string(__dict_Monad_424)("\r")))(string(__dict_Monad_424)(" ")))(string(__dict_Monad_424)("\t"))))(function (_88) {
            return Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_424))(Data_Foldable.foldMap(Data_Foldable.foldableArray({}))(Data_Monoid.monoidString({}))(Prelude.id(Prelude.categoryArr({})))(_88));
        });
    };
    var eof = function (__dict_Monad_425) {
        return Text_Parsing_Parser.ParserT.create(function (s) {
            return Prelude["return"](__dict_Monad_425)((function (_1933) {
                if (_1933 === "") {
                    return {
                        consumed: false, 
                        input: s, 
                        result: new Data_Either.Right({})
                    };
                };
                return {
                    consumed: false, 
                    input: s, 
                    result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Expected EOF"))
                };
            })(s));
        });
    };
    var $$char = function (__dict_Monad_426) {
        return Text_Parsing_Parser.ParserT.create(function (s$prime) {
            return Prelude["return"](__dict_Monad_426)((function (_1934) {
                if (_1934 === "") {
                    return {
                        consumed: false, 
                        input: s$prime, 
                        result: new Data_Either.Left(Control_Monad_Error.strMsg(Text_Parsing_Parser.errorParseError({}))("Unexpected EOF"))
                    };
                };
                return {
                    consumed: true, 
                    input: Data_String.drop(1)(s$prime), 
                    result: new Data_Either.Right(Data_String.charAt(0)(s$prime))
                };
            })(s$prime));
        });
    };
    var satisfy = function (__dict_Monad_427) {
        return function (f) {
            return Text_Parsing_Parser_Combinators["try"](((__dict_Monad_427["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_427))($$char(__dict_Monad_427))(function (_87) {
                return f(_87) ? Prelude["return"](Text_Parsing_Parser.monadParserT(__dict_Monad_427))(_87) : Text_Parsing_Parser.fail(__dict_Monad_427)("Character did not satisfy predicate");
            }));
        };
    };
    return {
        whiteSpace: whiteSpace, 
        satisfy: satisfy, 
        "char": $$char, 
        string: string, 
        eof: eof
    };
})();
var PS = PS || {};
PS.Network_HTTP = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Text_Parsing_Parser_Combinators = PS.Text_Parsing_Parser_Combinators;
    var Text_Parsing_Parser_String = PS.Text_Parsing_Parser_String;
    var Control_Apply = PS.Control_Apply;
    var Text_Parsing_Parser = PS.Text_Parsing_Parser;
    var Data_Maybe = PS.Data_Maybe;
    var Data_String = PS.Data_String;
    function DELETE() {

    };
    DELETE.value = new DELETE();
    function GET() {

    };
    GET.value = new GET();
    function HEAD() {

    };
    HEAD.value = new HEAD();
    function OPTIONS() {

    };
    OPTIONS.value = new OPTIONS();
    function PATCH() {

    };
    PATCH.value = new PATCH();
    function POST() {

    };
    POST.value = new POST();
    function PUT() {

    };
    PUT.value = new PUT();
    function NoStatus() {

    };
    NoStatus.value = new NoStatus();
    function Accepted() {

    };
    Accepted.value = new Accepted();
    function BadGateway() {

    };
    BadGateway.value = new BadGateway();
    function BadRequest() {

    };
    BadRequest.value = new BadRequest();
    function Continue() {

    };
    Continue.value = new Continue();
    function Created() {

    };
    Created.value = new Created();
    function ExpectationFailed() {

    };
    ExpectationFailed.value = new ExpectationFailed();
    function Forbidden() {

    };
    Forbidden.value = new Forbidden();
    function Found() {

    };
    Found.value = new Found();
    function GatewayTimeout() {

    };
    GatewayTimeout.value = new GatewayTimeout();
    function Gone() {

    };
    Gone.value = new Gone();
    function HTTPVersionNotSupported() {

    };
    HTTPVersionNotSupported.value = new HTTPVersionNotSupported();
    function InternalServerError() {

    };
    InternalServerError.value = new InternalServerError();
    function LengthRequired() {

    };
    LengthRequired.value = new LengthRequired();
    function MethodNotAllowed() {

    };
    MethodNotAllowed.value = new MethodNotAllowed();
    function MovedPermanently() {

    };
    MovedPermanently.value = new MovedPermanently();
    function MultipleChoices() {

    };
    MultipleChoices.value = new MultipleChoices();
    function NoContent() {

    };
    NoContent.value = new NoContent();
    function NonAuthoritativeInformation() {

    };
    NonAuthoritativeInformation.value = new NonAuthoritativeInformation();
    function NotAcceptable() {

    };
    NotAcceptable.value = new NotAcceptable();
    function NotFound() {

    };
    NotFound.value = new NotFound();
    function NotImplemented() {

    };
    NotImplemented.value = new NotImplemented();
    function NotModified() {

    };
    NotModified.value = new NotModified();
    function Ok() {

    };
    Ok.value = new Ok();
    function PartialContent() {

    };
    PartialContent.value = new PartialContent();
    function PaymentRequired() {

    };
    PaymentRequired.value = new PaymentRequired();
    function PreconditionFailed() {

    };
    PreconditionFailed.value = new PreconditionFailed();
    function ProxyAuthenticationRequired() {

    };
    ProxyAuthenticationRequired.value = new ProxyAuthenticationRequired();
    function RequestedRangeNotSatisfiable() {

    };
    RequestedRangeNotSatisfiable.value = new RequestedRangeNotSatisfiable();
    function RequestEntityTooLarge() {

    };
    RequestEntityTooLarge.value = new RequestEntityTooLarge();
    function RequestTimeout() {

    };
    RequestTimeout.value = new RequestTimeout();
    function RequestURITooLong() {

    };
    RequestURITooLong.value = new RequestURITooLong();
    function ResetContent() {

    };
    ResetContent.value = new ResetContent();
    function SeeOther() {

    };
    SeeOther.value = new SeeOther();
    function ServiceUnavailable() {

    };
    ServiceUnavailable.value = new ServiceUnavailable();
    function SwitchingProtocols() {

    };
    SwitchingProtocols.value = new SwitchingProtocols();
    function TemporaryRedirect() {

    };
    TemporaryRedirect.value = new TemporaryRedirect();
    function Unauthorized() {

    };
    Unauthorized.value = new Unauthorized();
    function UnsupportedMediaType() {

    };
    UnsupportedMediaType.value = new UnsupportedMediaType();
    function UseProxy() {

    };
    UseProxy.value = new UseProxy();
    function Accept() {

    };
    Accept.value = new Accept();
    function AcceptCharset() {

    };
    AcceptCharset.value = new AcceptCharset();
    function AcceptEncoding() {

    };
    AcceptEncoding.value = new AcceptEncoding();
    function AcceptLanguage() {

    };
    AcceptLanguage.value = new AcceptLanguage();
    function Allow() {

    };
    Allow.value = new Allow();
    function Authorization() {

    };
    Authorization.value = new Authorization();
    function CacheControl() {

    };
    CacheControl.value = new CacheControl();
    function Connection() {

    };
    Connection.value = new Connection();
    function ContentEncoding() {

    };
    ContentEncoding.value = new ContentEncoding();
    function ContentLanguage() {

    };
    ContentLanguage.value = new ContentLanguage();
    function ContentLength() {

    };
    ContentLength.value = new ContentLength();
    function ContentLocation() {

    };
    ContentLocation.value = new ContentLocation();
    function ContentMD5() {

    };
    ContentMD5.value = new ContentMD5();
    function ContentRange() {

    };
    ContentRange.value = new ContentRange();
    function ContentType() {

    };
    ContentType.value = new ContentType();
    function Date() {

    };
    Date.value = new Date();
    function Expect() {

    };
    Expect.value = new Expect();
    function Expires() {

    };
    Expires.value = new Expires();
    function From() {

    };
    From.value = new From();
    function Host() {

    };
    Host.value = new Host();
    function IfMatch() {

    };
    IfMatch.value = new IfMatch();
    function IfModifiedSince() {

    };
    IfModifiedSince.value = new IfModifiedSince();
    function IfNoneMatch() {

    };
    IfNoneMatch.value = new IfNoneMatch();
    function IfRange() {

    };
    IfRange.value = new IfRange();
    function IfUnmodifiedSince() {

    };
    IfUnmodifiedSince.value = new IfUnmodifiedSince();
    function LastModified() {

    };
    LastModified.value = new LastModified();
    function MaxForwards() {

    };
    MaxForwards.value = new MaxForwards();
    function Pragma() {

    };
    Pragma.value = new Pragma();
    function ProxyAuthorization() {

    };
    ProxyAuthorization.value = new ProxyAuthorization();
    function Range() {

    };
    Range.value = new Range();
    function Referer() {

    };
    Referer.value = new Referer();
    function TE() {

    };
    TE.value = new TE();
    function Trailer() {

    };
    Trailer.value = new Trailer();
    function TransferEncoding() {

    };
    TransferEncoding.value = new TransferEncoding();
    function Upgrade() {

    };
    Upgrade.value = new Upgrade();
    function UserAgent() {

    };
    UserAgent.value = new UserAgent();
    function Via() {

    };
    Via.value = new Via();
    function Warning() {

    };
    Warning.value = new Warning();
    function Custom(value0) {
        this.value0 = value0;
    };
    Custom.create = function (value0) {
        return new Custom(value0);
    };
    function Header(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Header.create = function (value0) {
        return function (value1) {
            return new Header(value0, value1);
        };
    };
    var string2Head = function (_463) {
        if (_463 === "Accept") {
            return Accept.value;
        };
        if (_463 === "Accept-Charset") {
            return AcceptCharset.value;
        };
        if (_463 === "Accept-Encoding") {
            return AcceptEncoding.value;
        };
        if (_463 === "Accept-Language") {
            return AcceptLanguage.value;
        };
        if (_463 === "Allow") {
            return Allow.value;
        };
        if (_463 === "Authorization") {
            return Authorization.value;
        };
        if (_463 === "Cache-Control") {
            return CacheControl.value;
        };
        if (_463 === "Connection") {
            return Connection.value;
        };
        if (_463 === "Content-Encoding") {
            return ContentEncoding.value;
        };
        if (_463 === "Content-Language") {
            return ContentLanguage.value;
        };
        if (_463 === "Content-Length") {
            return ContentLength.value;
        };
        if (_463 === "Content-Location") {
            return ContentLocation.value;
        };
        if (_463 === "Content-MD5") {
            return ContentMD5.value;
        };
        if (_463 === "Content-Range") {
            return ContentRange.value;
        };
        if (_463 === "Content-Type") {
            return ContentType.value;
        };
        if (_463 === "Date") {
            return Date.value;
        };
        if (_463 === "Expect") {
            return Expect.value;
        };
        if (_463 === "Expires") {
            return Expires.value;
        };
        if (_463 === "From") {
            return From.value;
        };
        if (_463 === "Host") {
            return Host.value;
        };
        if (_463 === "If-Match") {
            return IfMatch.value;
        };
        if (_463 === "If-Modified-Since") {
            return IfModifiedSince.value;
        };
        if (_463 === "If-None-Match") {
            return IfNoneMatch.value;
        };
        if (_463 === "If-Range") {
            return IfRange.value;
        };
        if (_463 === "If-Unmodified-Since") {
            return IfUnmodifiedSince.value;
        };
        if (_463 === "Last-Modified") {
            return LastModified.value;
        };
        if (_463 === "Max-Forwards") {
            return MaxForwards.value;
        };
        if (_463 === "Pragma") {
            return Pragma.value;
        };
        if (_463 === "Proxy-Authorization") {
            return ProxyAuthorization.value;
        };
        if (_463 === "Range") {
            return Range.value;
        };
        if (_463 === "Referer") {
            return Referer.value;
        };
        if (_463 === "Te") {
            return TE.value;
        };
        if (_463 === "Trailer") {
            return Trailer.value;
        };
        if (_463 === "Transfer-Encoding") {
            return TransferEncoding.value;
        };
        if (_463 === "Upgrade") {
            return Upgrade.value;
        };
        if (_463 === "User-Agent") {
            return UserAgent.value;
        };
        if (_463 === "Via") {
            return Via.value;
        };
        if (_463 === "Warning") {
            return Warning.value;
        };
        return new Custom(_463);
    };
    var status2Number = function (_464) {
        if (_464 instanceof NoStatus) {
            return 0;
        };
        if (_464 instanceof Continue) {
            return 100;
        };
        if (_464 instanceof SwitchingProtocols) {
            return 101;
        };
        if (_464 instanceof Ok) {
            return 200;
        };
        if (_464 instanceof Created) {
            return 201;
        };
        if (_464 instanceof Accepted) {
            return 202;
        };
        if (_464 instanceof NonAuthoritativeInformation) {
            return 203;
        };
        if (_464 instanceof NoContent) {
            return 204;
        };
        if (_464 instanceof ResetContent) {
            return 205;
        };
        if (_464 instanceof PartialContent) {
            return 206;
        };
        if (_464 instanceof MultipleChoices) {
            return 300;
        };
        if (_464 instanceof MovedPermanently) {
            return 301;
        };
        if (_464 instanceof Found) {
            return 302;
        };
        if (_464 instanceof SeeOther) {
            return 303;
        };
        if (_464 instanceof NotModified) {
            return 304;
        };
        if (_464 instanceof UseProxy) {
            return 305;
        };
        if (_464 instanceof TemporaryRedirect) {
            return 307;
        };
        if (_464 instanceof BadRequest) {
            return 400;
        };
        if (_464 instanceof Unauthorized) {
            return 401;
        };
        if (_464 instanceof PaymentRequired) {
            return 402;
        };
        if (_464 instanceof Forbidden) {
            return 403;
        };
        if (_464 instanceof NotFound) {
            return 404;
        };
        if (_464 instanceof MethodNotAllowed) {
            return 405;
        };
        if (_464 instanceof NotAcceptable) {
            return 406;
        };
        if (_464 instanceof ProxyAuthenticationRequired) {
            return 407;
        };
        if (_464 instanceof RequestTimeout) {
            return 408;
        };
        if (_464 instanceof Gone) {
            return 410;
        };
        if (_464 instanceof LengthRequired) {
            return 411;
        };
        if (_464 instanceof PreconditionFailed) {
            return 412;
        };
        if (_464 instanceof RequestEntityTooLarge) {
            return 413;
        };
        if (_464 instanceof RequestURITooLong) {
            return 414;
        };
        if (_464 instanceof UnsupportedMediaType) {
            return 415;
        };
        if (_464 instanceof RequestedRangeNotSatisfiable) {
            return 416;
        };
        if (_464 instanceof ExpectationFailed) {
            return 417;
        };
        if (_464 instanceof InternalServerError) {
            return 500;
        };
        if (_464 instanceof NotImplemented) {
            return 501;
        };
        if (_464 instanceof BadGateway) {
            return 502;
        };
        if (_464 instanceof ServiceUnavailable) {
            return 503;
        };
        if (_464 instanceof GatewayTimeout) {
            return 504;
        };
        if (_464 instanceof HTTPVersionNotSupported) {
            return 505;
        };
        throw new Error("Failed pattern match");
    };
    var space = function (__dict_Monad_428) {
        return Text_Parsing_Parser_Combinators.choice(__dict_Monad_428)([ Text_Parsing_Parser_String.string(__dict_Monad_428)(" "), Text_Parsing_Parser_String.string(__dict_Monad_428)("\t") ]);
    };
    var skipMany = function (__dict_Monad_429) {
        return function (s) {
            return Control_Apply["*>"](Text_Parsing_Parser.applyParserT(__dict_Monad_429))(Text_Parsing_Parser_Combinators.many(__dict_Monad_429)(s))(Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_429))({}));
        };
    };
    var skipSpaces = function (__dict_Monad_430) {
        return skipMany(__dict_Monad_430)(space(__dict_Monad_430));
    };
    var showHeaderHead = function (_) {
        return new Prelude.Show(function (_468) {
            if (_468 instanceof Accept) {
                return "Accept";
            };
            if (_468 instanceof AcceptCharset) {
                return "Accept-Charset";
            };
            if (_468 instanceof AcceptEncoding) {
                return "Accept-Encoding";
            };
            if (_468 instanceof AcceptLanguage) {
                return "Accept-Language";
            };
            if (_468 instanceof Allow) {
                return "Allow";
            };
            if (_468 instanceof Authorization) {
                return "Authorization";
            };
            if (_468 instanceof CacheControl) {
                return "Cache-Control";
            };
            if (_468 instanceof Connection) {
                return "Connection";
            };
            if (_468 instanceof ContentEncoding) {
                return "Content-Encoding";
            };
            if (_468 instanceof ContentLanguage) {
                return "Content-Language";
            };
            if (_468 instanceof ContentLength) {
                return "Content-Length";
            };
            if (_468 instanceof ContentLocation) {
                return "Content-Location";
            };
            if (_468 instanceof ContentMD5) {
                return "Content-MD5";
            };
            if (_468 instanceof ContentRange) {
                return "Content-Range";
            };
            if (_468 instanceof ContentType) {
                return "Content-Type";
            };
            if (_468 instanceof Date) {
                return "Date";
            };
            if (_468 instanceof Expect) {
                return "Expect";
            };
            if (_468 instanceof Expires) {
                return "Expires";
            };
            if (_468 instanceof From) {
                return "From";
            };
            if (_468 instanceof Host) {
                return "Host";
            };
            if (_468 instanceof IfMatch) {
                return "If-Match";
            };
            if (_468 instanceof IfModifiedSince) {
                return "If-Modified-Since";
            };
            if (_468 instanceof IfNoneMatch) {
                return "If-None-Match";
            };
            if (_468 instanceof IfRange) {
                return "If-Range";
            };
            if (_468 instanceof IfUnmodifiedSince) {
                return "If-Unmodified-Since";
            };
            if (_468 instanceof LastModified) {
                return "Last-Modified";
            };
            if (_468 instanceof MaxForwards) {
                return "Max-Forwards";
            };
            if (_468 instanceof Pragma) {
                return "Pragma";
            };
            if (_468 instanceof ProxyAuthorization) {
                return "Proxy-Authorization";
            };
            if (_468 instanceof Range) {
                return "Range";
            };
            if (_468 instanceof Referer) {
                return "Referer";
            };
            if (_468 instanceof TE) {
                return "Te";
            };
            if (_468 instanceof Trailer) {
                return "Trailer";
            };
            if (_468 instanceof TransferEncoding) {
                return "Transfer-Encoding";
            };
            if (_468 instanceof Upgrade) {
                return "Upgrade";
            };
            if (_468 instanceof UserAgent) {
                return "User-Agent";
            };
            if (_468 instanceof Via) {
                return "Via";
            };
            if (_468 instanceof Warning) {
                return "Warning";
            };
            if (_468 instanceof Custom) {
                return _468.value0;
            };
            throw new Error("Failed pattern match");
        });
    };
    var showHeader = function (_) {
        return new Prelude.Show(function (_467) {
            return Prelude.show(showHeaderHead({}))(_467.value0) + ": " + _467.value1;
        });
    };
    var showHTTPVerb = function (_) {
        return new Prelude.Show(function (_466) {
            if (_466 instanceof DELETE) {
                return "DELETE";
            };
            if (_466 instanceof GET) {
                return "GET";
            };
            if (_466 instanceof HEAD) {
                return "HEAD";
            };
            if (_466 instanceof OPTIONS) {
                return "OPTIONS";
            };
            if (_466 instanceof PATCH) {
                return "PATCH";
            };
            if (_466 instanceof POST) {
                return "POST";
            };
            if (_466 instanceof PUT) {
                return "PUT";
            };
            throw new Error("Failed pattern match");
        });
    };
    var number2Status = function (_465) {
        if (_465 === 0) {
            return new Data_Maybe.Just(NoStatus.value);
        };
        if (_465 === 100) {
            return new Data_Maybe.Just(Continue.value);
        };
        if (_465 === 101) {
            return new Data_Maybe.Just(SwitchingProtocols.value);
        };
        if (_465 === 200) {
            return new Data_Maybe.Just(Ok.value);
        };
        if (_465 === 201) {
            return new Data_Maybe.Just(Created.value);
        };
        if (_465 === 202) {
            return new Data_Maybe.Just(Accepted.value);
        };
        if (_465 === 203) {
            return new Data_Maybe.Just(NonAuthoritativeInformation.value);
        };
        if (_465 === 204) {
            return new Data_Maybe.Just(NoContent.value);
        };
        if (_465 === 205) {
            return new Data_Maybe.Just(ResetContent.value);
        };
        if (_465 === 206) {
            return new Data_Maybe.Just(PartialContent.value);
        };
        if (_465 === 300) {
            return new Data_Maybe.Just(MultipleChoices.value);
        };
        if (_465 === 301) {
            return new Data_Maybe.Just(MovedPermanently.value);
        };
        if (_465 === 302) {
            return new Data_Maybe.Just(Found.value);
        };
        if (_465 === 303) {
            return new Data_Maybe.Just(SeeOther.value);
        };
        if (_465 === 304) {
            return new Data_Maybe.Just(NotModified.value);
        };
        if (_465 === 305) {
            return new Data_Maybe.Just(UseProxy.value);
        };
        if (_465 === 307) {
            return new Data_Maybe.Just(TemporaryRedirect.value);
        };
        if (_465 === 400) {
            return new Data_Maybe.Just(BadRequest.value);
        };
        if (_465 === 401) {
            return new Data_Maybe.Just(Unauthorized.value);
        };
        if (_465 === 402) {
            return new Data_Maybe.Just(PaymentRequired.value);
        };
        if (_465 === 403) {
            return new Data_Maybe.Just(Forbidden.value);
        };
        if (_465 === 404) {
            return new Data_Maybe.Just(NotFound.value);
        };
        if (_465 === 405) {
            return new Data_Maybe.Just(MethodNotAllowed.value);
        };
        if (_465 === 406) {
            return new Data_Maybe.Just(NotAcceptable.value);
        };
        if (_465 === 407) {
            return new Data_Maybe.Just(ProxyAuthenticationRequired.value);
        };
        if (_465 === 408) {
            return new Data_Maybe.Just(RequestTimeout.value);
        };
        if (_465 === 410) {
            return new Data_Maybe.Just(Gone.value);
        };
        if (_465 === 411) {
            return new Data_Maybe.Just(LengthRequired.value);
        };
        if (_465 === 412) {
            return new Data_Maybe.Just(PreconditionFailed.value);
        };
        if (_465 === 413) {
            return new Data_Maybe.Just(RequestEntityTooLarge.value);
        };
        if (_465 === 414) {
            return new Data_Maybe.Just(RequestURITooLong.value);
        };
        if (_465 === 415) {
            return new Data_Maybe.Just(UnsupportedMediaType.value);
        };
        if (_465 === 416) {
            return new Data_Maybe.Just(RequestedRangeNotSatisfiable.value);
        };
        if (_465 === 417) {
            return new Data_Maybe.Just(ExpectationFailed.value);
        };
        if (_465 === 500) {
            return new Data_Maybe.Just(InternalServerError.value);
        };
        if (_465 === 501) {
            return new Data_Maybe.Just(NotImplemented.value);
        };
        if (_465 === 502) {
            return new Data_Maybe.Just(BadGateway.value);
        };
        if (_465 === 503) {
            return new Data_Maybe.Just(ServiceUnavailable.value);
        };
        if (_465 === 504) {
            return new Data_Maybe.Just(GatewayTimeout.value);
        };
        if (_465 === 505) {
            return new Data_Maybe.Just(HTTPVersionNotSupported.value);
        };
        return Data_Maybe.Nothing.value;
    };
    var eol = function (__dict_Monad_431) {
        return Text_Parsing_Parser_String.string(__dict_Monad_431)("\n");
    };
    var parseHeader = function (__dict_Monad_432) {
        return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_432))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_432))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_432))(Text_Parsing_Parser_Combinators.many1(__dict_Monad_432)(Text_Parsing_Parser_String["char"](__dict_Monad_432)))(Text_Parsing_Parser_String.string(__dict_Monad_432)(":")))(skipSpaces(__dict_Monad_432)))(function (_90) {
            return Prelude[">>="](Text_Parsing_Parser.bindParserT(__dict_Monad_432))(Control_Apply["<*"](Text_Parsing_Parser.applyParserT(__dict_Monad_432))(Text_Parsing_Parser_Combinators.many1(__dict_Monad_432)(Text_Parsing_Parser_String["char"](__dict_Monad_432)))(eol(__dict_Monad_432)))(function (_89) {
                var head$prime = string2Head(Data_String.joinWith("")(_90));
                var values$prime = Data_String.joinWith("")(_89);
                return Prelude.pure(Text_Parsing_Parser.applicativeParserT(__dict_Monad_432))(new Header(head$prime, values$prime));
            });
        });
    };
    return {
        Accept: Accept, 
        AcceptCharset: AcceptCharset, 
        AcceptEncoding: AcceptEncoding, 
        AcceptLanguage: AcceptLanguage, 
        Allow: Allow, 
        Authorization: Authorization, 
        CacheControl: CacheControl, 
        Connection: Connection, 
        ContentEncoding: ContentEncoding, 
        ContentLanguage: ContentLanguage, 
        ContentLength: ContentLength, 
        ContentLocation: ContentLocation, 
        ContentMD5: ContentMD5, 
        ContentRange: ContentRange, 
        ContentType: ContentType, 
        Date: Date, 
        Expect: Expect, 
        Expires: Expires, 
        From: From, 
        Host: Host, 
        IfMatch: IfMatch, 
        IfModifiedSince: IfModifiedSince, 
        IfNoneMatch: IfNoneMatch, 
        IfRange: IfRange, 
        IfUnmodifiedSince: IfUnmodifiedSince, 
        LastModified: LastModified, 
        MaxForwards: MaxForwards, 
        Pragma: Pragma, 
        ProxyAuthorization: ProxyAuthorization, 
        Range: Range, 
        Referer: Referer, 
        TE: TE, 
        Trailer: Trailer, 
        TransferEncoding: TransferEncoding, 
        Upgrade: Upgrade, 
        UserAgent: UserAgent, 
        Via: Via, 
        Warning: Warning, 
        Custom: Custom, 
        Header: Header, 
        NoStatus: NoStatus, 
        Accepted: Accepted, 
        BadGateway: BadGateway, 
        BadRequest: BadRequest, 
        Continue: Continue, 
        Created: Created, 
        ExpectationFailed: ExpectationFailed, 
        Forbidden: Forbidden, 
        Found: Found, 
        GatewayTimeout: GatewayTimeout, 
        Gone: Gone, 
        HTTPVersionNotSupported: HTTPVersionNotSupported, 
        InternalServerError: InternalServerError, 
        LengthRequired: LengthRequired, 
        MethodNotAllowed: MethodNotAllowed, 
        MovedPermanently: MovedPermanently, 
        MultipleChoices: MultipleChoices, 
        NoContent: NoContent, 
        NonAuthoritativeInformation: NonAuthoritativeInformation, 
        NotAcceptable: NotAcceptable, 
        NotFound: NotFound, 
        NotImplemented: NotImplemented, 
        NotModified: NotModified, 
        Ok: Ok, 
        PartialContent: PartialContent, 
        PaymentRequired: PaymentRequired, 
        PreconditionFailed: PreconditionFailed, 
        ProxyAuthenticationRequired: ProxyAuthenticationRequired, 
        RequestedRangeNotSatisfiable: RequestedRangeNotSatisfiable, 
        RequestEntityTooLarge: RequestEntityTooLarge, 
        RequestTimeout: RequestTimeout, 
        RequestURITooLong: RequestURITooLong, 
        ResetContent: ResetContent, 
        SeeOther: SeeOther, 
        ServiceUnavailable: ServiceUnavailable, 
        SwitchingProtocols: SwitchingProtocols, 
        TemporaryRedirect: TemporaryRedirect, 
        Unauthorized: Unauthorized, 
        UnsupportedMediaType: UnsupportedMediaType, 
        UseProxy: UseProxy, 
        DELETE: DELETE, 
        GET: GET, 
        HEAD: HEAD, 
        OPTIONS: OPTIONS, 
        PATCH: PATCH, 
        POST: POST, 
        PUT: PUT, 
        parseHeader: parseHeader, 
        skipSpaces: skipSpaces, 
        space: space, 
        skipMany: skipMany, 
        eol: eol, 
        number2Status: number2Status, 
        status2Number: status2Number, 
        string2Head: string2Head, 
        showHTTPVerb: showHTTPVerb, 
        showHeader: showHeader, 
        showHeaderHead: showHeaderHead
    };
})();
var PS = PS || {};
PS.Tutorial_Ractive_Demo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Tutorial_Ractive = PS.Tutorial_Ractive;
    var Network_XHR = PS.Network_XHR;
    var Control_Monad_Cont_Trans = PS.Control_Monad_Cont_Trans;
    var Control_Bind = PS.Control_Bind;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Debug_Trace = PS.Debug_Trace;
    var Control_Monad_Eff_Ractive = PS.Control_Monad_Eff_Ractive;
    var Data_Array = PS.Data_Array;
    var Data_String = PS.Data_String;
    var Data_Map = PS.Data_Map;
    var Data_Maybe = PS.Data_Maybe;
    var tutorialPartials = function (output) {
        return function (content) {
            return {
                outputP: output, 
                contentP: content
            };
        };
    };
    var template = function (element) {
        return function (template_1) {
            return function (baseUri) {
                return function (dir) {
                    var output = baseUri + "/" + dir + "/" + "output.html";
                    var content = baseUri + "/" + dir + "/" + "content.html";
                    return {
                        contentTemplate: content, 
                        outputTemplate: output, 
                        element: element, 
                        template: template_1
                    };
                };
            };
        };
    };
    var templateTuto = template(Tutorial_Ractive.ractiveElement)(Tutorial_Ractive.ractiveTemplate)("http://localhost/templates");
    var templateTuto1 = templateTuto("tut1");
    var getFrom = function (url) {
        return Prelude.flip(Prelude.flip(Network_XHR.get)(url))({});
    };
    var getTemplate = function (fun) {
        return function (uri) {
            return function (v) {
                return function (next) {
                    return getFrom(uri)((function () {
                        var _1947 = {};
                        for (var _1948 in Network_XHR.defaultConfig) {
                            if (Network_XHR.defaultConfig.hasOwnProperty(_1948)) {
                                _1947[_1948] = Network_XHR.defaultConfig[_1948];
                            };
                        };
                        _1947.onLoadEnd = function (response) {
                            return next(fun(Network_XHR.responseText(response))(v));
                        };
                        return _1947;
                    })());
                };
            };
        };
    };
    var outputPartialTut = getTemplate(function (tmpl) {
        return function (_) {
            return tutorialPartials(tmpl);
        };
    });
    var contentPartialTut = getTemplate(function (tmpl) {
        return function (fun) {
            return fun(tmpl);
        };
    });
    var loadTutorial = function (config) {
        return Control_Bind[">=>"](Control_Monad_Cont_Trans.bindContT(Control_Monad_Eff.monadEff({})))(outputPartialTut(config.outputTemplate))(contentPartialTut(config.contentTemplate));
    };
    var launch = function (_469) {
        var executeTutorial = Control_Bind[">=>"](Control_Monad_Cont_Trans.bindContT(Control_Monad_Eff.monadEff({})))(loadTutorial(templateTuto(_469.value0)))(_469.value1);
        return Control_Monad_Cont_Trans.runContT(executeTutorial(Prelude.unit))(function (r) {
            return Debug_Trace.trace("DONE");
        });
    };
    var init = function (tutorials) {
        var onlyNums = function (n) {
            return n >= 48 && n <= 57 ? true : false;
        };
        var errorTutorial = new Tutorial_Ractive.Tutorial("error", function (_) {
            return function (__1) {
                return Debug_Trace.trace("ERROR loading tutorial");
            };
        });
        return function __do() {
            var _91 = Control_Monad_Eff_Ractive.ractive("#ractive-nav-template")("ractive-nav")({
                tutorials: Prelude["<$>"](Data_Array.functorArray({}))(function (x) {
                    return {
                        name: Prelude["<$>"](Data_Array.functorArray({}))(Data_String.fromCharCode)(Data_Array.filter(onlyNums)(Tutorial_Ractive.toChars(x)))
                    };
                })(Data_Map.keys(tutorials))
            })();
            Prelude.flip(Control_Monad_Eff_Ractive.on("loadtutorial"))(_91)(function (r_1) {
                return function (ev) {
                    return function __do() {
                        launch(Data_Maybe.fromMaybe(errorTutorial)(Prelude.flip(Data_Map.lookup(Prelude.ordString({})))(tutorials)("tut" + ev.context.name)))();
                        return Debug_Trace.trace("onLoadTutorial!")();
                    };
                };
            })();
            return Debug_Trace.trace("Initialization done")();
        };
    };
    var main = init(Tutorial_Ractive.mapOfTutorials);
    return {
        main: main, 
        init: init, 
        launch: launch, 
        loadTutorial: loadTutorial, 
        contentPartialTut: contentPartialTut, 
        outputPartialTut: outputPartialTut, 
        getTemplate: getTemplate, 
        getFrom: getFrom, 
        templateTuto1: templateTuto1, 
        templateTuto: templateTuto, 
        template: template, 
        tutorialPartials: tutorialPartials
    };
})();