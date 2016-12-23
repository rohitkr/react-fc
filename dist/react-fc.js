(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactFc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var FusionCharts = typeof window !== "undefined" ? window['FusionCharts'] : typeof global !== "undefined" ? global['FusionCharts'] : null;

if (typeof FusionCharts === "undefined") {
    FusionCharts = require('fusioncharts');
}

var react_fc = {};

var R_FC = (function (_React$Component) {
    _inherits(R_FC, _React$Component);

    _createClass(R_FC, [{
        key: 'displayName',
        value: function displayName() {
            return 'FusionCharts';
        }
    }]);

    function R_FC(props) {
        _classCallCheck(this, R_FC);

        _get(Object.getPrototypeOf(R_FC.prototype), 'constructor', this).call(this, props);

        var global = this;
        // Store the chart configuration in fc_configs
        global.fc_configs = props;
        global.state = props;
    }

    _createClass(R_FC, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var global = this;

            global.chartObj = new FusionCharts(this.state);
            global.setState(function (prevState, props) {
                return {
                    renderAt: prevState.renderAt || props.renderAt || global.chartObj.id + '-container'
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var global = this;
            global.chartObj.render(global.state.renderAt);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var global = this;
            global.chartObj && global.chartObj.dispose();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var global = this;
            var arr_impacted_by;

            if (global.fc_configs.type !== global.state.type) {
                global.chartObj.chartType(global.state.type);
            }

            if (global.fc_configs.dataSource !== global.state.dataSource) {
                global.chartObj.setChartData(global.state.dataSource, global.state.dataFormat);
            }

            arr_impacted_by = global.fc_configs.impactedBy;
            if (arr_impacted_by && arr_impacted_by.length > 0 && arr_impacted_by.indexOf(global.props.eventSource) > -1) {
                global.chartObj.setChartAttribute(global.fc_configs);
                global.chartObj.setChartData(global.fc_configs.dataSource);
            }
        }
    }, {
        key: 'render',
        value: function render(props) {
            var global = this;

            return _react2['default'].createElement('div', { className: global.state.className, id: global.state.renderAt });
        }
    }]);

    return R_FC;
})(_react2['default'].Component);

react_fc.FusionCharts = R_FC;

exports['default'] = react_fc;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"fusioncharts":undefined}]},{},[1])(1)
});