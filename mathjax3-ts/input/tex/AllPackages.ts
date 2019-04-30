/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
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
 * @fileoverview  Loads all the TeX extensions
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import './base/BaseConfiguration.js';
import './action/ActionConfiguration.js';
import './ams/AmsConfiguration.js';
import './ams_cd/AmsCdConfiguration.js';
import './bbox/BboxConfiguration.js';
import './boldsymbol/BoldsymbolConfiguration.js';
import './braket/BraketConfiguration.js';
import './cancel/CancelConfiguration.js';
import './color/ColorConfiguration.js';
import './config_macros/ConfigMacrosConfiguration.js';
import './enclose/EncloseConfiguration.js';
import './extpfeil/ExtpfeilConfiguration.js';
import './html/HtmlConfiguration.js';
import './mhchem/MhchemConfiguration.js';
import './newcommand/NewcommandConfiguration.js';
import './noerrors/NoErrorsConfiguration.js';
import './noundefined/NoUndefinedConfiguration.js';
import './physics/PhysicsConfiguration.js';
import './require/RequireConfiguration.js';
import './unicode/UnicodeConfiguration.js';
import './verb/VerbConfiguration.js';

export const AllPackages: string[] = [
    'base',
    'action',
    'ams',
    'amscd',
    'bbox',
    'boldsymbol',
    'braket',
    'cancel',
    'color',
    'configMacros',
    'enclose',
    'extpfeil',
    'html',
    'mhchem',
    'newcommand',
    'noerrors',
    'noundefined',
    'physics',
    'require',
    'unicode',
    'verb'
];