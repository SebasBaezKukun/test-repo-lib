/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

class Index extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>Loading...</h4>
        <script src="js/redirect-to-docs.js"></script>
      </div>
    );
  }
}

module.exports = Index;
