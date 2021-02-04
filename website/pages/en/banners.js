/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');


function Banners(props) {

  return (
    <div class="kukun-docs-example">
        <div class="k-header-container k-blur-2" style={{ backgroundImage: `url('https://mykukun.com/img/best-contractors-near-me/images/contractor.jpg')` }}>
            <div class="k-container">
                <div class="k-header-wrapper">
                    <h1 class="k-h1 k-blue k-main-title">Find a contractor</h1>
                    <div class="k-h5 k-blue k-main-description">Right around the corner</div>
                    <div class="k-banner"></div>
                </div>
            </div>
            <div class="k-mobile-layer"></div>
        </div>
    </div>
  );
}

module.exports = Banners;
