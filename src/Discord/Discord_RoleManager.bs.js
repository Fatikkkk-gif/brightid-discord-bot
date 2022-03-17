// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");

var CreateRoleError = /* @__PURE__ */Caml_exceptions.create("Discord_RoleManager.CreateRoleError");

function validateRoleName(name) {
  return name._0;
}

function validateColor(color) {
  return color._0;
}

function validateReason(reason) {
  return reason._0;
}

function makeGuildRole(roleManager, options) {
  var name = options.data.name._0;
  var color = options.data.color._0;
  var reason = options.reason._0;
  var data = {
    name: name,
    color: color
  };
  return roleManager.create({
              data: data,
              reason: reason
            });
}

exports.CreateRoleError = CreateRoleError;
exports.validateRoleName = validateRoleName;
exports.validateColor = validateColor;
exports.validateReason = validateReason;
exports.makeGuildRole = makeGuildRole;
/* No side effect */