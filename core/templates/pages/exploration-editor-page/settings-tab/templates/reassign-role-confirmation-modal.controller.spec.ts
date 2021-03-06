// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for ReassignRoleConfirmationModalController.
 */
require(
  'components/common-layout-directives/common-elements/' +
  'confirm-or-cancel-modal.controller.ts');

describe('Reassign Role Confirm Or Cancel Modal Controller ', function() {
  var $scope = null;
  var $uibModalInstance = null;
  var testUsername = 'testUsername';
  var testRole = 'testRole';
  var testOldRole = 'testOldRole';

  beforeEach(angular.mock.module('oppia'));
  beforeEach(angular.mock.inject(function($injector, $controller) {
    var $rootScope = $injector.get('$rootScope');

    $scope = $rootScope.$new();
    $controller('ReassignRoleConfirmationModalController', {
      $scope: $scope,
      $uibModalInstance: $uibModalInstance,
      username: testUsername,
      newRole: testRole,
      oldRole: testOldRole,
    });
  }));

  it('should initialize $scope properties after controller is initialized',
    function() {
      expect($scope.username).toBe(testUsername);
      expect($scope.newRole).toBe(testRole);
      expect($scope.oldRole).toBe(testOldRole);
    });
});
