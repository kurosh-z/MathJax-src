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
 * @fileoverview  Implements the CHTMLmfenced wrapper for the MmlMfenced object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {CHTMLWrapper, CHTMLConstructor} from '../Wrapper.js';
import {CommonMfencedMixin} from '../../common/Wrappers/mfenced.js';
import {MmlMfenced} from '../../../core/MmlTree/MmlNodes/mfenced.js';
import {CHTMLinferredMrow} from './mrow.js';

/*****************************************************************/
/**
 * The CHTMLmfenced wrapper for the MmlMfenced object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export class CHTMLmfenced<N, T, D> extends CommonMfencedMixin<CHTMLConstructor<any, any, any>>(CHTMLWrapper) {

  /**
   * The mfenced wrapper
   */
  public static kind = MmlMfenced.prototype.kind;

  /**
   * @override
   */
  public toCHTML(parent: N) {
    const chtml = this.standardCHTMLnode(parent);
    (this.mrow as CHTMLinferredMrow<N, T, D>).toCHTML(chtml);
  }

}
