/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Base mappings for TeX Parsing.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import *  as sm from './SymbolMap.js';
import {TexConstant} from './TexConstants.js';
import {BaseMethods} from './BaseMethods.js';
import MapHandler from './MapHandler.js';


export namespace BaseMappings {

  // TODO: These parsing methods are currently overwritten in the legacy code.
  sm.RegExpMap.create('letter', BaseMethods.variable, /[a-z]/i);

  sm.RegExpMap.create('digit', BaseMethods.digit, /[0-9.]/);

  sm.RegExpMap.create('command', BaseMethods.controlSequence, /^\\/ );  // )


  sm.MacroMap.create('special', {

    // This is now handled with a RegExp!
    // '\\':  'ControlSequence',

    '{':   'Open',
    '}':   'Close',
    '~':   'Tilde',
    '^':   'Superscript',
    '_':   'Subscript',
    ' ':   'Space',
    '\t':  'Space',
    '\r':  'Space',
    '\n':  'Space',
    '\'':  'Prime',
    '%':   'Comment',
    '&':   'Entry',
    '#':   'Hash',
    '\u00A0': 'Space',
    '\u2019': 'Prime'
  });

  sm.CharacterMap.create('remap', null, {
    '-':   '\u2212',
    '*':   '\u2217',
    '`':   '\u2018'   // map ` to back quote
  });

  sm.CharacterMap.create('mathchar0mi', BaseMethods.mathchar0mi, {
    // Lower-case greek
    alpha:        '\u03B1',
    beta:         '\u03B2',
    gamma:        '\u03B3',
    delta:        '\u03B4',
    epsilon:      '\u03F5',
    zeta:         '\u03B6',
    eta:          '\u03B7',
    theta:        '\u03B8',
    iota:         '\u03B9',
    kappa:        '\u03BA',
    lambda:       '\u03BB',
    mu:           '\u03BC',
    nu:           '\u03BD',
    xi:           '\u03BE',
    omicron:      '\u03BF', // added for completeness
    pi:           '\u03C0',
    rho:          '\u03C1',
    sigma:        '\u03C3',
    tau:          '\u03C4',
    upsilon:      '\u03C5',
    phi:          '\u03D5',
    chi:          '\u03C7',
    psi:          '\u03C8',
    omega:        '\u03C9',
    varepsilon:   '\u03B5',
    vartheta:     '\u03D1',
    varpi:        '\u03D6',
    varrho:       '\u03F1',
    varsigma:     '\u03C2',
    varphi:       '\u03C6',

    // Ord symbols
    S:            ['\u00A7', {mathvariant: TexConstant.Variant.NORMAL}],
    aleph:        ['\u2135', {mathvariant: TexConstant.Variant.NORMAL}],
    hbar:         ['\u210F', {variantForm: true}],
    imath:        '\u0131',
    jmath:        '\u0237',
    ell:          '\u2113',
    wp:           ['\u2118', {mathvariant: TexConstant.Variant.NORMAL}],
    Re:           ['\u211C', {mathvariant: TexConstant.Variant.NORMAL}],
    Im:           ['\u2111', {mathvariant: TexConstant.Variant.NORMAL}],
    partial:      ['\u2202', {mathvariant: TexConstant.Variant.NORMAL}],
    infty:        ['\u221E', {mathvariant: TexConstant.Variant.NORMAL}],
    prime:        ['\u2032', {mathvariant: TexConstant.Variant.NORMAL,
                            variantForm: true}],
    emptyset:     ['\u2205', {mathvariant: TexConstant.Variant.NORMAL}],
    nabla:        ['\u2207', {mathvariant: TexConstant.Variant.NORMAL}],
    top:          ['\u22A4', {mathvariant: TexConstant.Variant.NORMAL}],
    bot:          ['\u22A5', {mathvariant: TexConstant.Variant.NORMAL}],
    angle:        ['\u2220', {mathvariant: TexConstant.Variant.NORMAL}],
    triangle:     ['\u25B3', {mathvariant: TexConstant.Variant.NORMAL}],
    backslash:    ['\u2216', {mathvariant: TexConstant.Variant.NORMAL,
                            variantForm: true}],
    forall:       ['\u2200', {mathvariant: TexConstant.Variant.NORMAL}],
    exists:       ['\u2203', {mathvariant: TexConstant.Variant.NORMAL}],
    neg:          ['\u00AC', {mathvariant: TexConstant.Variant.NORMAL}],
    lnot:         ['\u00AC', {mathvariant: TexConstant.Variant.NORMAL}],
    flat:         ['\u266D', {mathvariant: TexConstant.Variant.NORMAL}],
    natural:      ['\u266E', {mathvariant: TexConstant.Variant.NORMAL}],
    sharp:        ['\u266F', {mathvariant: TexConstant.Variant.NORMAL}],
    clubsuit:     ['\u2663', {mathvariant: TexConstant.Variant.NORMAL}],
    diamondsuit:  ['\u2662', {mathvariant: TexConstant.Variant.NORMAL}],
    heartsuit:    ['\u2661', {mathvariant: TexConstant.Variant.NORMAL}],
    spadesuit:    ['\u2660', {mathvariant: TexConstant.Variant.NORMAL}]
  });

  sm.CharacterMap.create('mathchar0mo', BaseMethods.mathchar0mo, {
    surd:         '\u221A',

    // big ops
    coprod:       ['\u2210', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigvee:       ['\u22C1', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigwedge:     ['\u22C0', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    biguplus:     ['\u2A04', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigcap:       ['\u22C2', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigcup:       ['\u22C3', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    'int':        ['222B', {texClass: TexConstant.TexClass.OP}],
    intop:        ['\u222B', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true, movablelimits: true}],
    iint:         ['\u222C', {texClass: TexConstant.TexClass.OP}],
    iiint:        ['\u222D', {texClass: TexConstant.TexClass.OP}],
    prod:         ['\u220F', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    sum:          ['\u2211', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigotimes:    ['\u2A02', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigoplus:     ['\u2A01', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    bigodot:      ['\u2A00', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    oint:         ['\u222E', {texClass: TexConstant.TexClass.OP}],
    bigsqcup:     ['\u2A06', {texClass: TexConstant.TexClass.OP,
                            movesupsub: true}],
    smallint:     ['\u222B', {largeop: false}],

    // binary operations
    triangleleft:      '\u25C3',
    triangleright:     '\u25B9',
    bigtriangleup:     '\u25B3',
    bigtriangledown:   '\u25BD',
    wedge:        '\u2227',
    land:         '\u2227',
    vee:          '\u2228',
    lor:          '\u2228',
    cap:          '\u2229',
    cup:          '\u222A',
    ddagger:      '\u2021',
    dagger:       '\u2020',
    sqcap:        '\u2293',
    sqcup:        '\u2294',
    uplus:        '\u228E',
    amalg:        '\u2A3F',
    diamond:      '\u22C4',
    bullet:       '\u2219',
    wr:           '\u2240',
    div:          '\u00F7',
    odot:         ['\u2299', {largeop: false}],
    oslash:       ['\u2298', {largeop: false}],
    otimes:       ['\u2297', {largeop: false}],
    ominus:       ['\u2296', {largeop: false}],
    oplus:        ['\u2295', {largeop: false}],
    mp:           '\u2213',
    pm:           '\u00B1',
    circ:         '\u2218',
    bigcirc:      '\u25EF',
    setminus:     ['\u2216', {variantForm: true}],
    cdot:         '\u22C5',
    ast:          '\u2217',
    times:        '\u00D7',
    star:         '\u22C6',

    // Relations
    propto:       '\u221D',
    sqsubseteq:   '\u2291',
    sqsupseteq:   '\u2292',
    parallel:     '\u2225',
    mid:          '\u2223',
    dashv:        '\u22A3',
    vdash:        '\u22A2',
    leq:          '\u2264',
    le:           '\u2264',
    geq:          '\u2265',
    ge:           '\u2265',
    lt:           '\u003C',
    gt:           '\u003E',
    succ:         '\u227B',
    prec:         '\u227A',
    approx:       '\u2248',
    succeq:       '\u2AB0',  // or '227C',
    preceq:       '\u2AAF',  // or '227D',
    supset:       '\u2283',
    subset:       '\u2282',
    supseteq:     '\u2287',
    subseteq:     '\u2286',
    'in':         '\u2208',
    ni:           '\u220B',
    notin:        '\u2209',
    owns:         '\u220B',
    gg:           '\u226B',
    ll:           '\u226A',
    sim:          '\u223C',
    simeq:        '\u2243',
    perp:         '\u22A5',
    equiv:        '\u2261',
    asymp:        '\u224D',
    smile:        '\u2323',
    frown:        '\u2322',
    ne:           '\u2260',
    neq:          '\u2260',
    cong:         '\u2245',
    doteq:        '\u2250',
    bowtie:       '\u22C8',
    models:       '\u22A8',

    notChar:      '\u29F8',


    // Arrows
    Leftrightarrow:     '\u21D4',
    Leftarrow:          '\u21D0',
    Rightarrow:         '\u21D2',
    leftrightarrow:     '\u2194',
    leftarrow:          '\u2190',
    gets:               '\u2190',
    rightarrow:         '\u2192',
    to:                 '\u2192',
    mapsto:             '\u21A6',
    leftharpoonup:      '\u21BC',
    leftharpoondown:    '\u21BD',
    rightharpoonup:     '\u21C0',
    rightharpoondown:   '\u21C1',
    nearrow:            '\u2197',
    searrow:            '\u2198',
    nwarrow:            '\u2196',
    swarrow:            '\u2199',
    rightleftharpoons:  '\u21CC',
    hookrightarrow:     '\u21AA',
    hookleftarrow:      '\u21A9',
    longleftarrow:      '\u27F5',
    Longleftarrow:      '\u27F8',
    longrightarrow:     '\u27F6',
    Longrightarrow:     '\u27F9',
    Longleftrightarrow: '\u27FA',
    longleftrightarrow: '\u27F7',
    longmapsto:         '\u27FC',


    // Misc.
    ldots:            '\u2026',
    cdots:            '\u22EF',
    vdots:            '\u22EE',
    ddots:            '\u22F1',
    dotsc:            '\u2026',  // dots with commas
    dotsb:            '\u22EF',  // dots with binary ops and relations
    dotsm:            '\u22EF',  // dots with multiplication
    dotsi:            '\u22EF',  // dots with integrals
    dotso:            '\u2026',  // other dots

    ldotp:            ['\u002E', {texClass: TexConstant.TexClass.PUNCT}],
    cdotp:            ['\u22C5', {texClass: TexConstant.TexClass.PUNCT}],
    colon:            ['\u003A', {texClass: TexConstant.TexClass.PUNCT}]
  });

  sm.CharacterMap.create('mathchar7', BaseMethods.mathchar7, {
    Gamma:        '\u0393',
    Delta:        '\u0394',
    Theta:        '\u0398',
    Lambda:       '\u039B',
    Xi:           '\u039E',
    Pi:           '\u03A0',
    Sigma:        '\u03A3',
    Upsilon:      '\u03A5',
    Phi:          '\u03A6',
    Psi:          '\u03A8',
    Omega:        '\u03A9',

    '_':          '\u005F',
    '#':          '\u0023',
    '$':          '\u0024',
    '%':          '\u0025',
    '&':          '\u0026',
    And:          '\u0026'
  });

  sm.DelimiterMap.create('delimiter', BaseMethods.delimiter, {
    '(':                '(',
    ')':                ')',
    '[':                '[',
    ']':                ']',
    '<':                '\u27E8',
    '>':                '\u27E9',
    '\\lt':             '\u27E8',
    '\\gt':             '\u27E9',
    '/':                '/',
    '|':                ['|', {texClass: TexConstant.TexClass.ORD}],
    '.':                '',
    '\\\\':             '\\',
    '\\lmoustache':     '\u23B0',  // non-standard
    '\\rmoustache':     '\u23B1',  // non-standard
    '\\lgroup':         '\u27EE',  // non-standard
    '\\rgroup':         '\u27EF',  // non-standard
    '\\arrowvert':      '\u23D0',
    '\\Arrowvert':      '\u2016',
    '\\bracevert':      '\u23AA',  // non-standard
    '\\Vert':           ['\u2225', {texClass: TexConstant.TexClass.ORD}],
    '\\|':              ['\u2225', {texClass: TexConstant.TexClass.ORD}],
    '\\vert':           ['|', {texClass: TexConstant.TexClass.ORD}],
    '\\uparrow':        '\u2191',
    '\\downarrow':      '\u2193',
    '\\updownarrow':    '\u2195',
    '\\Uparrow':        '\u21D1',
    '\\Downarrow':      '\u21D3',
    '\\Updownarrow':    '\u21D5',
    '\\backslash':      '\\',
    '\\rangle':         '\u27E9',
    '\\langle':         '\u27E8',
    '\\rbrace':         '}',
    '\\lbrace':         '{',
    '\\}':              '}',
    '\\{':              '{',
    '\\rceil':          '\u2309',
    '\\lceil':          '\u2308',
    '\\rfloor':         '\u230B',
    '\\lfloor':         '\u230A',
    '\\lbrack':         '[',
    '\\rbrack':         ']'
  });

  sm.CommandMap.create('macros', {
    displaystyle:      ['SetStyle', 'D', true, 0],
    textstyle:         ['SetStyle', 'T', false, 0],
    scriptstyle:       ['SetStyle', 'S', false, 1],
    scriptscriptstyle: ['SetStyle', 'SS', false, 2],

    rm:                ['SetFont', TexConstant.Variant.NORMAL],
    mit:               ['SetFont', TexConstant.Variant.ITALIC],
    oldstyle:          ['SetFont', TexConstant.Variant.OLDSTYLE],
    cal:               ['SetFont', TexConstant.Variant.CALIGRAPHIC],
    it:                ['SetFont', '-tex-mathit'], // needs special handling
    bf:                ['SetFont', TexConstant.Variant.BOLD],
    bbFont:            ['SetFont', TexConstant.Variant.DOUBLESTRUCK],
    scr:               ['SetFont', TexConstant.Variant.SCRIPT],
    frak:              ['SetFont', TexConstant.Variant.FRAKTUR],
    sf:                ['SetFont', TexConstant.Variant.SANSSERIF],
    tt:                ['SetFont', TexConstant.Variant.MONOSPACE],

    //      font:

    tiny:              ['SetSize', 0.5],
    Tiny:              ['SetSize', 0.6],  // non-standard
    scriptsize:        ['SetSize', 0.7],
    small:             ['SetSize', 0.85],
    normalsize:        ['SetSize', 1.0],
    large:             ['SetSize', 1.2],
    Large:             ['SetSize', 1.44],
    LARGE:             ['SetSize', 1.73],
    huge:              ['SetSize', 2.07],
    Huge:              ['SetSize', 2.49],

    arcsin:            ['NamedFn'],
    arccos:            ['NamedFn'],
    arctan:            ['NamedFn'],
    arg:               ['NamedFn'],
    cos:               ['NamedFn'],
    cosh:              ['NamedFn'],
    cot:               ['NamedFn'],
    coth:              ['NamedFn'],
    csc:               ['NamedFn'],
    deg:               ['NamedFn'],
    det:                'NamedOp',
    dim:               ['NamedFn'],
    exp:               ['NamedFn'],
    gcd:                'NamedOp',
    hom:               ['NamedFn'],
    inf:                'NamedOp',
    ker:               ['NamedFn'],
    lg:                ['NamedFn'],
    lim:                'NamedOp',
    liminf:            ['NamedOp', 'lim&thinsp;inf'],
    limsup:            ['NamedOp', 'lim&thinsp;sup'],
    ln:                ['NamedFn'],
    log:               ['NamedFn'],
    max:                'NamedOp',
    min:                'NamedOp',
    Pr:                 'NamedOp',
    sec:               ['NamedFn'],
    sin:               ['NamedFn'],
    sinh:              ['NamedFn'],
    sup:                'NamedOp',
    tan:               ['NamedFn'],
    tanh:              ['NamedFn'],

    limits:            ['Limits', 1],
    nolimits:          ['Limits', 0],

    overline:            ['UnderOver', '00AF', null, 1],
    underline:           ['UnderOver', '005F'],
    overbrace:           ['UnderOver', '23DE', 1],
    underbrace:          ['UnderOver', '23DF', 1],
    overparen:           ['UnderOver', '23DC'],
    underparen:          ['UnderOver', '23DD'],
    overrightarrow:      ['UnderOver', '2192'],
    underrightarrow:     ['UnderOver', '2192'],
    overleftarrow:       ['UnderOver', '2190'],
    underleftarrow:      ['UnderOver', '2190'],
    overleftrightarrow:  ['UnderOver', '2194'],
    underleftrightarrow: ['UnderOver', '2194'],

    overset:            'Overset',
    underset:           'Underset',
    stackrel:           ['Macro', '\\mathrel{\\mathop{#2}\\limits^{#1}}', 2],

    over:               'Over',
    overwithdelims:     'Over',
    atop:               'Over',
    atopwithdelims:     'Over',
    above:              'Over',
    abovewithdelims:    'Over',
    brace:             ['Over', '{', '}'],
    brack:             ['Over', '[', ']'],
    choose:            ['Over', '(', ')'],

    frac:               'Frac',
    sqrt:               'Sqrt',
    root:               'Root',
    uproot:            ['MoveRoot', 'upRoot'],
    leftroot:          ['MoveRoot', 'leftRoot'],

    left:               'LeftRight',
    right:              'LeftRight',
    middle:             'Middle',

    llap:               'Lap',
    rlap:               'Lap',
    raise:              'RaiseLower',
    lower:              'RaiseLower',
    moveleft:           'MoveLeftRight',
    moveright:          'MoveLeftRight',

    // TODO: QUESTION: Why was there a space after ,?
    // ', ':              ['Spacer', TexConstant.Length.THINMATHSPACE],
    ',':               ['Spacer', TexConstant.Length.THINMATHSPACE],
    ':':               ['Spacer', TexConstant.Length.MEDIUMMATHSPACE],
    '>':               ['Spacer', TexConstant.Length.MEDIUMMATHSPACE],
    ';':               ['Spacer', TexConstant.Length.THICKMATHSPACE],
    '!':               ['Spacer', TexConstant.Length.NEGATIVETHINMATHSPACE],
    enspace:           ['Spacer', '.5em'],
    quad:              ['Spacer', '1em'],
    qquad:             ['Spacer', '2em'],
    thinspace:         ['Spacer', TexConstant.Length.THINMATHSPACE],
    negthinspace:      ['Spacer', TexConstant.Length.NEGATIVETHINMATHSPACE],

    hskip:              'Hskip',
    hspace:             'Hskip',
    kern:               'Hskip',
    mskip:              'Hskip',
    mspace:             'Hskip',
    mkern:              'Hskip',
    Rule:              ['Rule'],
    Space:             ['Rule', 'blank'],

    big:               ['MakeBig', TexConstant.TexClass.ORD, 0.85],
    Big:               ['MakeBig', TexConstant.TexClass.ORD, 1.15],
    bigg:              ['MakeBig', TexConstant.TexClass.ORD, 1.45],
    Bigg:              ['MakeBig', TexConstant.TexClass.ORD, 1.75],
    bigl:              ['MakeBig', TexConstant.TexClass.OPEN, 0.85],
    Bigl:              ['MakeBig', TexConstant.TexClass.OPEN, 1.15],
    biggl:             ['MakeBig', TexConstant.TexClass.OPEN, 1.45],
    Biggl:             ['MakeBig', TexConstant.TexClass.OPEN, 1.75],
    bigr:              ['MakeBig', TexConstant.TexClass.CLOSE, 0.85],
    Bigr:              ['MakeBig', TexConstant.TexClass.CLOSE, 1.15],
    biggr:             ['MakeBig', TexConstant.TexClass.CLOSE, 1.45],
    Biggr:             ['MakeBig', TexConstant.TexClass.CLOSE, 1.75],
    bigm:              ['MakeBig', TexConstant.TexClass.REL, 0.85],
    Bigm:              ['MakeBig', TexConstant.TexClass.REL, 1.15],
    biggm:             ['MakeBig', TexConstant.TexClass.REL, 1.45],
    Biggm:             ['MakeBig', TexConstant.TexClass.REL, 1.75],

    mathord:           ['TeXAtom', TexConstant.TexClass.ORD],
    mathop:            ['TeXAtom', TexConstant.TexClass.OP],
    mathopen:          ['TeXAtom', TexConstant.TexClass.OPEN],
    mathclose:         ['TeXAtom', TexConstant.TexClass.CLOSE],
    mathbin:           ['TeXAtom', TexConstant.TexClass.BIN],
    mathrel:           ['TeXAtom', TexConstant.TexClass.REL],
    mathpunct:         ['TeXAtom', TexConstant.TexClass.PUNCT],
    mathinner:         ['TeXAtom', TexConstant.TexClass.INNER],

    vcenter:           ['TeXAtom', TexConstant.TexClass.VCENTER],

    mathchoice:        ['Extension', 'mathchoice'],
    buildrel:           'BuildRel',

    hbox:               ['HBox', 0],
    text:               'HBox',
    mbox:               ['HBox', 0],
    fbox:               'FBox',

    strut:              'Strut',
    mathstrut:         ['Macro', '\\vphantom{(}'],
    phantom:            'Phantom',
    vphantom:          ['Phantom', 1, 0],
    hphantom:          ['Phantom', 0, 1],
    smash:              'Smash',

    acute:             ['Accent', '00B4'],  // or 0301 or 02CA
    grave:             ['Accent', '0060'],  // or 0300 or 02CB
    ddot:              ['Accent', '00A8'],  // or 0308
    tilde:             ['Accent', '007E'],  // or 0303 or 02DC
    bar:               ['Accent', '00AF'],  // or 0304 or 02C9
    breve:             ['Accent', '02D8'],  // or 0306
    check:             ['Accent', '02C7'],  // or 030C
    hat:               ['Accent', '005E'],  // or 0302 or 02C6
    vec:               ['Accent', '2192'],  // or 20D7
    dot:               ['Accent', '02D9'],  // or 0307
    widetilde:         ['Accent', '007E', 1], // or 0303 or 02DC
    widehat:           ['Accent', '005E', 1], // or 0302 or 02C6

    matrix:             'Matrix',
    array:              'Matrix',
    pmatrix:           ['Matrix', '(', ')'],
    cases:             ['Matrix', '{', '', 'left left', null, '.1em', null,
                        true],
    eqalign:           ['Matrix', null, null, 'right left',
                        TexConstant.Length.THICKMATHSPACE, '.5em', 'D'],
    displaylines:      ['Matrix', null, null, 'center', null, '.5em', 'D'],
    cr:                 'Cr',
    '\\':               'CrLaTeX',
    newline:            'Cr',
    hline:             ['HLine', 'solid'],
    hdashline:         ['HLine', 'dashed'],
    //      noalign:            'HandleNoAlign',
    eqalignno:         ['Matrix', null, null, 'right left',
                        TexConstant.Length.THICKMATHSPACE, '.5em', 'D', null,
                        'right'],
    leqalignno:        ['Matrix', null, null, 'right left',
                        TexConstant.Length.THICKMATHSPACE, '.5em', 'D', null,
                        'left'],
    hfill:              'HFill',
    hfil:               'HFill',   // \hfil treated as \hfill for now
    hfilll:             'HFill',   // \hfilll treated as \hfill for now

    //  TeX substitution macros
    bmod:              ['Macro', '\\mmlToken{mo}[lspace="thickmathspace"' +
                        ' rspace="thickmathspace"]{mod}'],
    pmod:              ['Macro', '\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}', 1],
    mod:               ['Macro', '\\mathchoice{\\kern18mu}{\\kern12mu}' +
                        '{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1',
                        1],
    pod:               ['Macro', '\\mathchoice{\\kern18mu}{\\kern8mu}' +
                        '{\\kern8mu}{\\kern8mu}(#1)', 1],
    iff:               ['Macro', '\\;\\Longleftrightarrow\\;'],
    skew:              ['Macro', '{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}', 3],
    mathcal:           ['Macro', '{\\cal #1}', 1],
    mathscr:           ['Macro', '{\\scr #1}', 1],
    mathrm:            ['Macro', '{\\rm #1}', 1],
    mathbf:            ['Macro', '{\\bf #1}', 1],
    mathbb:            ['Macro', '{\\bbFont #1}', 1],
    Bbb:               ['Macro', '{\\bbFont #1}', 1],
    mathit:            ['Macro', '{\\it #1}', 1],
    mathfrak:          ['Macro', '{\\frak #1}', 1],
    mathsf:            ['Macro', '{\\sf #1}', 1],
    mathtt:            ['Macro', '{\\tt #1}', 1],
    textrm:            ['Macro', '\\mathord{\\rm\\text{#1}}', 1],
    textit:            ['Macro', '\\mathord{\\it\\text{#1}}', 1],
    textbf:            ['Macro', '\\mathord{\\bf\\text{#1}}', 1],
    textsf:            ['Macro', '\\mathord{\\sf\\text{#1}}', 1],
    texttt:            ['Macro', '\\mathord{\\tt\\text{#1}}', 1],
    pmb:               ['Macro', '\\rlap{#1}\\kern1px{#1}', 1],
    TeX:               ['Macro', 'T\\kern-.14em\\lower.5ex{E}\\kern-.115em X'],
    LaTeX:             ['Macro', 'L\\kern-.325em\\raise.21em' +
                        '{\\scriptstyle{A}}\\kern-.17em\\TeX'],
    ' ':               ['Macro', '\\text{ }'],

    //  Specially handled
    not:                'Not',
    dots:               'Dots',
    space:              'Tilde',
    '\u00A0':           'Tilde',


    //  LaTeX
    // TODO: These should be in a special structure.
    begin:              'BeginEnd',
    end:                'BeginEnd',

    newcommand:        ['Extension', 'newcommand'],
    renewcommand:      ['Extension', 'newcommand'],
    newenvironment:    ['Extension', 'newcommand'],
    renewenvironment:  ['Extension', 'newcommand'],
    def:               ['Extension', 'newcommand'],
    'let':               ['Extension', 'newcommand'],

    verb:              ['Extension', 'verb'],

    boldsymbol:        ['Extension', 'boldsymbol'],

    // tag:               ['Extension', 'AMSmath'],
    // notag:             ['Extension', 'AMSmath'],
    // label:             ['Extension', 'AMSmath'],
    // ref:               ['Extension', 'AMSmath'],
    // eqref:             ['Extension', 'AMSmath'],
    nonumber:          ['Macro', '\\notag'],

    //  Extensions to TeX
    unicode:           ['Extension', 'unicode'],
    color:              'Color',

    href:              ['Extension', 'HTML'],
    'class':           ['Extension', 'HTML'],
    style:             ['Extension', 'HTML'],
    cssId:             ['Extension', 'HTML'],
    bbox:              ['Extension', 'bbox'],

    mmlToken:           'MmlToken',

    require:            'Require'

  });

  const envs = sm.EnvironmentMap.create('environment', {
    array:        ['AlignedArray'],
    matrix:       ['Array', null, null, null, 'c'],
    pmatrix:      ['Array', null, '(', ')', 'c'],
    bmatrix:      ['Array', null, '[', ']', 'c'],
    Bmatrix:      ['Array', null, '\\{', '\\}', 'c'],
    vmatrix:      ['Array', null, '\\vert', '\\vert', 'c'],
    Vmatrix:      ['Array', null, '\\Vert', '\\Vert', 'c'],
    cases:        ['Array', null, '\\{', '.', 'll', null, '.2em', 'T'],

    // VS Q What are these with function null?
    //      What about the AMSmath argument?
    // equation:     [null, 'Equation'],
    // 'equation*':  [null, 'Equation'],

    // eqnarray:     ['ExtensionEnv', null, 'AMSmath'],
    // 'eqnarray*':  ['ExtensionEnv', null, 'AMSmath'],

    // align:        ['ExtensionEnv', null, 'AMSmath'],
    // 'align*':     ['ExtensionEnv', null, 'AMSmath'],
    // aligned:      ['ExtensionEnv', null, 'AMSmath'],
    // multline:     ['ExtensionEnv', null, 'AMSmath'],
    // 'multline*':  ['ExtensionEnv', null, 'AMSmath'],
    // split:        ['ExtensionEnv', null, 'AMSmath'],
    // gather:       ['ExtensionEnv', null, 'AMSmath'],
    // 'gather*':    ['ExtensionEnv', null, 'AMSmath'],
    // gathered:     ['ExtensionEnv', null, 'AMSmath'],
    // alignat:      ['ExtensionEnv', null, 'AMSmath'],
    // 'alignat*':   ['ExtensionEnv', null, 'AMSmath'],
    // alignedat:    ['ExtensionEnv', null, 'AMSmath']
  });
  envs.parser = BaseMethods.environment;

  sm.CharacterMap.create('not_remap', null, {
    '\u2190': '\u219A',
    '\u2192': '\u219B',
    '\u2194': '\u21AE',
    '\u21D0': '\u21CD',
    '\u21D2': '\u21CF',
    '\u21D4': '\u21CE',
    '\u2208': '\u2209',
    '\u220B': '\u220C',
    '\u2223': '\u2224',
    '\u2225': '\u2226',
    '\u223C': '\u2241',
    '\u007E': '\u2241',
    '\u2243': '\u2244',
    '\u2245': '\u2247',
    '\u2248': '\u2249',
    '\u224D': '\u226D',
    '\u003D': '\u2260',
    '\u2261': '\u2262',
    '\u003C': '\u226E',
    '\u003E': '\u226F',
    '\u2264': '\u2270',
    '\u2265': '\u2271',
    '\u2272': '\u2274',
    '\u2273': '\u2275',
    '\u2276': '\u2278',
    '\u2277': '\u2279',
    '\u227A': '\u2280',
    '\u227B': '\u2281',
    '\u2282': '\u2284',
    '\u2283': '\u2285',
    '\u2286': '\u2288',
    '\u2287': '\u2289',
    '\u22A2': '\u22AC',
    '\u22A8': '\u22AD',
    '\u22A9': '\u22AE',
    '\u22AB': '\u22AF',
    '\u227C': '\u22E0',
    '\u227D': '\u22E1',
    '\u2291': '\u22E2',
    '\u2292': '\u22E3',
    '\u22B2': '\u22EA',
    '\u22B3': '\u22EB',
    '\u22B4': '\u22EC',
    '\u22B5': '\u22ED',
    '\u2203': '\u2204'
  });

  // TODO: This should be merged with configuration options.
  export const CONFIGURATION = {
    character: ['command', 'special', 'letter', 'digit'],
    delimiter: ['delimiter'],
    macro: ['macros', 'mathchar0mi', 'mathchar0mo', 'mathchar7', 'delimiter'],
    environment: ['environment']
  };

}