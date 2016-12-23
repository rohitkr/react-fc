require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFc = require('react-fc');

var _reactFc2 = _interopRequireDefault(_reactFc);

var _fusioncharts = require('fusioncharts');

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusionchartsFusionchartsCharts = require('fusioncharts/fusioncharts.charts');

var _fusionchartsFusionchartsCharts2 = _interopRequireDefault(_fusionchartsFusionchartsCharts);

var _fusionchartsThemesFusionchartsThemeOcean = require('fusioncharts/themes/fusioncharts.theme.ocean');

var _fusionchartsThemesFusionchartsThemeOcean2 = _interopRequireDefault(_fusionchartsThemesFusionchartsThemeOcean);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var GTDDashboard = function GTDDashboard(options) {

    /***
    ** Function to convert data in CSV to JSON
    ***/
    var csvToJson = function csvToJson(csvData) {

        var rows = csvData.split("\n"),
            jsonData = [],
            headers = rows[0].split(","),
            rowsLength = rows.length;

        for (var i = 1; i < rowsLength; i++) {
            var obj = {},
                currentline = rows[i].split(","),
                headersLength = headers.length;

            for (var j = 0; j < headersLength; j++) {
                obj[headers[j]] = currentline[j];
            }
            jsonData.push(obj);
        }

        /** CSV data converted to JSON format **/
        return jsonData;
    };

    /**
    ** Function to count the number of rows having
    ** a certain key with certain value.
    ***/
    var countBy = function countBy() {
        var group = function group(behavior) {
            return function (obj, iteratee, context) {
                var result = {};
                iteratee = iteratee;
                _each(obj, function (value, index) {
                    var key = iteratee(value, index, obj);
                    behavior(result, value, key);
                });
                return result;
            };
        };
        _countBy = group(function (result, value, key) {
            if (_has(result, key)) result[key]++;else result[key] = 1;
        });
        _has = function (obj, key) {
            return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
        };
        _each = function (obj, iteratee, context) {
            iteratee = iteratee;
            var i, length;
            var keys = Object.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
            return obj;
        };
    };

    /***
    ** Function to look through each value in the list,
    ** returning an array of all the values that contain
    ** all of the key-value pairs listed in properties.
    ***/
    _where = function (list, key_value_pairs_to_be_searched) {
        var list_length = list.length,
            data_result = [];
        if (typeof list === "object") {
            for (var z in list) {
                var flag = 0,
                    no_of_keys = 0;
                for (var key in key_value_pairs_to_be_searched) {
                    if (list[z].hasOwnProperty(key) && list[z][key] === key_value_pairs_to_be_searched[key]) {
                        flag += 1;
                    } else {
                        flag = 0;
                    }
                    no_of_keys += 1;
                }
                if (flag === no_of_keys) {
                    data_result.push(list[z]);
                }
            }
        } else {
            for (var z = 0; z < list_length; z++) {
                var flag = 0,
                    no_of_keys = 0;
                for (var key in key_value_pairs_to_be_searched) {
                    if (list[z].hasOwnProperty(key) && list[z][key] === key_value_pairs_to_be_searched[key]) {
                        flag += 1;
                    } else {
                        flag = 0;
                    }
                    no_of_keys += 1;
                }
                if (flag === no_of_keys) {
                    data_result.push(list[z]);
                }
            }
        }
        return data_result;
    };

    /***
    ** Function to get the sum of a certain key where rows
    ** are having similar values.
    ***/
    var sumOf = function sumOf() {
        var getLength = function getLength(key) {
            return function (obj) {
                return obj == null ? void 0 : obj[key];
            };
        };
        var isArrayLike = function isArrayLike(collection) {
            var length = getLength(collection);
            return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
        };

        /***
        ** Function to reduce down the data to a set of these rows
        ** where values of a certain key are similar.
        ***/
        function createReduce(dir) {
            function iterator(obj, iteratee, memo, keys, index, length) {
                for (; index >= 0 && index < length; index += dir) {
                    var currentKey = keys ? keys[index] : index;
                    memo = iteratee(memo, obj[currentKey], currentKey, obj);
                }
                return memo;
            }
            return function (obj, iteratee, memo, context) {
                var keys = !isArrayLike(obj) && Object.keys(obj),
                    length = (keys || obj).length,
                    index = dir > 0 ? 0 : length - 1;
                if (arguments.length < 3) {
                    memo = obj[keys ? keys[index] : index];
                    index += dir;
                }
                return iterator(obj, iteratee, memo, keys, index, length);
            };
        };
        _reduce = createReduce(1);
    };

    /***
    ** Function to get a list of of terrorist organizations
    ** and make a table with this data.
    ***/
    var gangNameList = function gangNameList(data) {
        var gang_priority_data = [],
            gang_data = _countBy(data, function (d) {
            return d["gname"];
        });

        for (var gang in gang_data) {
            gang_priority_data.push({
                "name": gang,
                "count": gang_data[gang]
            });
        }

        // Creates the table for "Terrorist Organizations"
        gang_priority_data.sort(function (a, b) {
            return b.count - a.count;
        });
        var cnt = 1,
            i = 0;
        var html = '<table><tr class="tr_style"><th class="table_gang_name">Terrorist Organization</th><th class="table_no_of_attacks">No. of attacks</th></tr>';
        if (gang_priority_data.length > 5) {
            while (cnt < 6) {
                if (gang_priority_data[i].name !== "Unknown") {
                    html += "<tr><td>" + gang_priority_data[i].name + "</td><td class='table_right'>" + gang_priority_data[i].count + "</td></tr>";
                    cnt++;
                }
                i++;
            }
        } else {
            while (i < gang_priority_data.length) {
                html += "<tr><td>" + gang_priority_data[i].name + "</td><td class='table_right'>" + gang_priority_data[i].count + "</td></tr>";
                i++;
            }
        }
        (0, _jquery2['default'])('#gangname').html(html + "</table>");
        (0, _jquery2['default'])('.gangnames_header').show();
    };

    /***
    ** Function to execute the GTD Dashboard and
    ** fetch data and then call the render method
    ***/
    this.execute = function () {
        countBy();
        sumOf();

        /** Fetch CSV data **/
        _jquery2['default'].ajax({
            url: '../data/globalterrorism.csv',
            type: 'get',
            dataType: 'text',
            success: function success(data) {
                var new_data = csvToJson(data);
                render(new_data);
            }
        });
    };

    /***
    ** Function to render the GTD Dashboard's elements
    ***/
    var render = function render(new_data) {
        var map_data = [],
            attack_data = [],
            map,
            gang_priority_data = [],
            attack,
            numberOfAttacksByCountryConfigs,
            numberOfAttacksConfigs,
            numberOfAttacksByCountryDataSource,
            numberOfAttacksDataSource,
            numberOfCasualtiesDataSource,
            new_data_length = new_data.length,
            numberOfCasualtiesConfigs,
            chartHoverColor = "#81270C";

        /** Data and DataSource --- Pie Chart for "Number of Casualties" **/
        var num_killed = _reduce(new_data, function (memo, num) {
            return memo + parseInt(num.nkill);
        }, 0);
        var num_wounded = _reduce(new_data, function (memo, num) {
            return memo + parseInt(num.nwound);
        }, 0);
        numberOfCasualtiesDataSource = {
            chart: {
                caption: "NUMBER OF CASUALTIES",
                captionFontSize: "12",
                captionFont: '"AvenirLTStd-Heavy",sans-serif',
                captionAlignment: "center",
                theme: "zune",
                bgColor: "f6f6f6,f6f6f6",
                bgAlpha: "100,100",
                enableRotation: '0',
                enablemultislicing: "0",
                formatNumberScale: '0',
                paletteColors: "#D73200,#F6BD0F",
                plotFillHoverColor: chartHoverColor,
                plotFillHoverAlpha: "100"
            },
            data: [{
                "label": "Killed",
                "value": num_killed
            }, {
                "label": "Wounded",
                "value": num_wounded
            }]
        };

        /** Data and DataSource --- Map for "Number of Attacks by Country" **/
        map = _countBy(new_data, function (d) {
            return d["country_code"];
        });
        for (d in map) {
            map_data.push({
                "id": d,
                "value": map[d]
            });
        }
        numberOfAttacksByCountryDataSource = {
            chart: {
                caption: "NUMBER OF ATTACKS BY COUNTRY",
                captionFontSize: "12",
                captionFontFamily: '"AvenirLTStd-Heavy",sans-serif',
                captionPosition: "top-left",
                subCaption: "Click on a region to filter by that country",
                subCaptionFontSize: '10',
                theme: "zune",
                bgColor: "f6f6f6,f6f6f6",
                bgAlpha: "100,100",
                fillColor: "#CED8D7",
                entityFillHoverColor: chartHoverColor,
                entityFillHoverAlpha: "100",
                entityBorderHoverThickness: "2",
                hoverOnEmpty: '0',
                showLegend: '0'
            },
            colorrange: {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "code": "#F6BD0F"
                }, {
                    "minvalue": "100",
                    "maxvalue": "1000",
                    "code": "#FB6725"
                }, {
                    "minvalue": "1000",
                    "maxvalue": "10000",
                    "code": "#D73200"
                }]
            },
            data: map_data
        };

        /** Data and DataSource --- Column Chart for "Number of Attacks by Year" **/
        attack = _countBy(new_data, function (d) {
            return d["iyear"];
        });
        for (d in attack) {
            attack_data.push({
                "label": d,
                "value": attack[d]
            });
        }
        numberOfAttacksDataSource = {
            chart: {
                caption: "NUMBER  OF ATTACKS BY YEAR (2008-2013)",
                captionFontSize: "12",
                captionFont: '"AvenirLTStd-Heavy",sans-serif',
                captionAlignment: "left",
                subCaption: "Click on a column to filter by that year",
                theme: "zune",
                bgColor: "f6f6f6,f6f6f6",
                bgAlpha: "100,100",
                canvasBgAlpha: "0",
                paletteColors: "#F6BD0F",
                plotFillHoverColor: chartHoverColor,
                plotFillHoverAlpha: "100",
                placeValuesInside: '0',
                rotateValues: "0",
                valueFontColor: "#333333",
                subCaptionFontSize: '11',
                xAxisName: "Year",
                yAxisName: "Aggregated Number of Attacks",
                formatNumberScale: '0'
            },
            data: attack_data
        };

        /** React Parent Component --- GTDParent **/
        var GTDParent = _react2['default'].createClass({
            displayName: 'GTDParent',

            getInitialState: function getInitialState() {
                return {
                    countrySelected: '',
                    yearSelected: '',
                    filterSource: ''
                };
            },
            filterCountry: function filterCountry(selected_value, sender_id) {
                this.setState({
                    countrySelected: selected_value,
                    filterSource: sender_id
                });
            },
            filterYear: function filterYear(selected_value, sender_id) {
                this.setState({
                    yearSelected: selected_value,
                    filterSource: sender_id
                });
            },
            render: function render() {
                var that = this,
                    updated_attack_data = [],
                    updated_data = [],
                    updated_attack = [],
                    numberOfAttacksAnnotations,
                    numberOfAttacksByCountryAnnotations;

                /** Configuration options --- Column Chart for "Number of Attacks by Year" **/
                numberOfAttacksConfigs = {
                    id: "attacks-column-chart",
                    renderAt: "attacks-column-chart-container",
                    type: "column2d",
                    width: 725,
                    height: 250,
                    dataSource: numberOfAttacksDataSource,
                    eventSource: this.state.filterSource,
                    className: "attacks_years block",
                    impactedBy: ['attacks-map'],
                    events: {
                        dataplotclick: function dataplotclick(event, args) {
                            var chartRef = event.sender,
                                createGroupItems = function createGroupItems() {
                                if (numberOfAttacksAnnotations !== undefined && numberOfAttacksAnnotations.group && numberOfAttacksAnnotations.group.length > 0) {
                                    numberOfAttacksAnnotations.destroy('yearWiseTotalAttack');
                                }
                                numberOfAttacksAnnotations = chartRef.annotations;

                                // Adding a group, "totalFootfall"
                                numberOfAttacksAnnotations.addGroup({
                                    'id': 'yearWiseTotalAttack'
                                });

                                //Adding rectangle annotation item to the annotation group
                                numberOfAttacksAnnotations.addItem('yearWiseTotalAttack', {
                                    "id": "dyn-labelBG",
                                    "type": "rectangle",
                                    "radius": "3",
                                    "x": "$canvasEndX-245",
                                    "y": "$canvasStartY-40",
                                    "tox": "$canvasEndX",
                                    "toy": "$canvasStartY-10",
                                    "color": "#E46A3A",
                                    "alpha": "100"
                                }, true);

                                // Adding text annotation item to the annotation group
                                numberOfAttacksAnnotations.addItem('yearWiseTotalAttack', {
                                    "id": "dyn-label",
                                    "type": "text",
                                    "text": args.categoryLabel + ": " + args.value + (parseInt(args.value) == 1 ? " attack" : " attacks"),
                                    "fillcolor": "#ffffff",
                                    "x": "$canvasEndX-120",
                                    "font": '"AvenirLTStd-Light",sans-serif',
                                    "fontsize": "14",
                                    "y": "$canvasStartY - 25"
                                }, true);
                            };
                            that.filterYear(args.categoryLabel, event.sender.id);
                            createGroupItems();
                            // $('#selected-year').show().html(args.categoryLabel + ": " + args.value + " attacks");
                        }
                    }
                };

                /** Configuration options --- Pie Chart for "Number of Casualties" **/
                numberOfCasualtiesConfigs = {
                    id: "casulty-pie-chart",
                    renderAt: "casulty-pie-chart-container",
                    type: "pie2d",
                    width: 475,
                    height: 500,
                    dataSource: numberOfCasualtiesDataSource,
                    eventSource: this.state.filterSource,
                    impactedBy: ['attacks-map', 'attacks-column-chart'],
                    className: "casulty"
                };

                /** Configuration options --- Map for "Number of Attacks by Country" **/
                numberOfAttacksByCountryConfigs = {
                    id: "attacks-map",
                    renderAt: "attacks-map-container",
                    type: "Worldwithcountries",
                    width: 725,
                    height: 500,
                    dataSource: numberOfAttacksByCountryDataSource,
                    eventSource: this.state.filterSource,
                    className: "attack_world",
                    events: {
                        entityClick: function entityClick(event, args) {
                            var chartRef = event.sender,
                                createGroupItems = function createGroupItems() {
                                if (numberOfAttacksAnnotations !== undefined && numberOfAttacksAnnotations.groups.length > 0) {
                                    numberOfAttacksAnnotations.destroy('yearWiseTotalAttack');
                                }
                                if (numberOfAttacksByCountryAnnotations !== undefined) {
                                    numberOfAttacksByCountryAnnotations.destroy('countryWiseTotalAttack');
                                }
                                numberOfAttacksByCountryAnnotations = chartRef.annotations;

                                // Adding a group, "totalFootfall"
                                numberOfAttacksByCountryAnnotations.addGroup({
                                    'id': 'countryWiseTotalAttack'
                                });

                                //Adding rectangle annotation item to the annotation group
                                numberOfAttacksByCountryAnnotations.addItem('countryWiseTotalAttack', {
                                    "id": "dyn-labelBG",
                                    "type": "rectangle",
                                    "radius": "3",
                                    "x": "$canvasEndX+465",
                                    "y": "$canvasStartY+10",
                                    "tox": "$canvasEndX+710",
                                    "toy": "$canvasStartY + 40",
                                    "color": "#E46A3A",
                                    "alpha": "100"
                                }, true);

                                // Adding text annotation item to the annotation group
                                numberOfAttacksByCountryAnnotations.addItem('countryWiseTotalAttack', {
                                    "id": "dyn-label",
                                    "type": "text",
                                    "text": args.label + ": " + args.value + (parseInt(args.value) == 1 ? " attack" : " attacks"),
                                    "fillcolor": "#ffffff",
                                    "x": "$canvasEndX+590",
                                    "font": '"AvenirLTStd-Light",sans-serif',
                                    "fontsize": "14",
                                    "y": "$canvasStartY + 25"
                                }, true);
                            };
                            if (args.value !== undefined) {
                                that.state.yearSelected = "";
                                that.filterCountry(args.id, event.sender.id);
                                createGroupItems();
                            }
                        }
                    }
                };

                /** Filter data --- Column Chart for "Number of Attacks by Year" **/
                if (that.state.countrySelected && that.state.countrySelected.length !== 0 && !that.state.yearSelected) {
                    updated_data = _where(new_data, { "country_code": that.state.countrySelected });
                    updated_attack = _countBy(updated_data, function (d) {
                        return d["iyear"];
                    });

                    for (d in updated_attack) {
                        updated_attack_data.push({
                            "label": d,
                            "value": updated_attack[d]
                        });
                    }

                    numberOfAttacksConfigs.dataSource.data = updated_attack_data;

                    var new_num_killed = _reduce(updated_data, function (memo, num) {
                        return memo + parseInt(num.nkill);
                    }, 0);
                    var new_num_wounded = _reduce(updated_data, function (memo, num) {
                        return memo + parseInt(num.nwound);
                    }, 0);
                    casulty_data = [{
                        "label": "Killed",
                        "value": new_num_killed
                    }, {
                        "label": "Wounded",
                        "value": new_num_wounded
                    }];
                    gangNameList(updated_data);
                    if (new_num_wounded !== 0 && new_num_killed !== 0) {
                        numberOfCasualtiesConfigs.dataSource.data = casulty_data;
                    } else {
                        numberOfCasualtiesConfigs.dataSource.data = [];
                    }
                } else if (that.state.countrySelected && that.state.countrySelected.length !== 0 && that.state.yearSelected && that.state.yearSelected.length !== 0) {
                    updated_data_year = _where(new_data, { "iyear": that.state.yearSelected, "country_code": that.state.countrySelected });
                    var new_num_killed = _reduce(updated_data_year, function (memo, num) {
                        return memo + parseInt(num.nkill);
                    }, 0);
                    var new_num_wounded = _reduce(updated_data_year, function (memo, num) {
                        return memo + parseInt(num.nwound);
                    }, 0);
                    casulty_data = [{
                        "label": "Killed",
                        "value": new_num_killed
                    }, {
                        "label": "Wounded",
                        "value": new_num_wounded
                    }];
                    gangNameList(updated_data_year);
                    if (new_num_wounded !== 0 && new_num_killed !== 0) {
                        numberOfCasualtiesConfigs.dataSource.data = casulty_data;
                    } else {
                        numberOfCasualtiesConfigs.dataSource.data = [];
                    }
                } else if (that.state.yearSelected && that.state.yearSelected.length !== 0) {
                    updated_data_year = _where(new_data, { "iyear": that.state.yearSelected });
                    var new_num_killed = _reduce(updated_data_year, function (memo, num) {
                        return memo + parseInt(num.nkill);
                    }, 0);
                    var new_num_wounded = _reduce(updated_data_year, function (memo, num) {
                        return memo + parseInt(num.nwound);
                    }, 0);
                    casulty_data = [{
                        "label": "Killed",
                        "value": new_num_killed
                    }, {
                        "label": "Wounded",
                        "value": new_num_wounded
                    }];
                    gangNameList(updated_data_year);
                    if (new_num_wounded !== 0 && new_num_killed !== 0) {
                        numberOfCasualtiesConfigs.dataSource.data = casulty_data;
                    } else {
                        numberOfCasualtiesConfigs.dataSource.data = [];
                    }
                }

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'block' },
                        _react2['default'].createElement(_reactFc2['default'].FusionCharts, numberOfAttacksByCountryConfigs)
                    ),
                    _react2['default'].createElement(
                        'div',
                        { id: 'casulty-data', className: 'block' },
                        _react2['default'].createElement(_reactFc2['default'].FusionCharts, numberOfCasualtiesConfigs)
                    ),
                    _react2['default'].createElement('div', { style: { clear: "both" } }),
                    _react2['default'].createElement('hr', { className: 'hr-class' }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'block' },
                        _react2['default'].createElement(_reactFc2['default'].FusionCharts, numberOfAttacksConfigs)
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'block' },
                        _react2['default'].createElement(
                            'p',
                            { className: 'gangnames_header' },
                            'ATTACKS BY TOP 5 TERRORIST ORGANIZATIONS'
                        ),
                        _react2['default'].createElement('div', { className: 'table_block', id: 'gangname' })
                    )
                );
            }
        });

        _reactDom2['default'].render(_react2['default'].createElement(GTDParent, null), document.getElementById('gtd-dashboard-container'));

        gangNameList(new_data);
    };
};

var k = new GTDDashboard();
k.execute();

},{"fusioncharts":undefined,"fusioncharts/fusioncharts.charts":2,"fusioncharts/themes/fusioncharts.theme.ocean":3,"jquery":4,"react":undefined,"react-dom":undefined,"react-fc":undefined}],2:[function(require,module,exports){
/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
(function(na,Ha){"object"===typeof module&&module.exports?module.exports=na.document?Ha(na):function(ua){if(!ua.document)throw Error("Window with document not present");return Ha(ua,!0)}:na.FusionCharts=Ha(na,!0)})("undefined"!==typeof window?window:this,function(na,Ha){FusionCharts.register("module",["private","modules.renderer.js-charts",function(){function ua(d,L){for(var g=[],a=0,l=d.length;a<l;a++)g[a]=L.call(d[a],d[a],a,d);return g}function fa(d,L){var g=L?360:q;d=(d||0)%g;return 0>d?g+d:d}
function na(d,L,g,a,l){return La((L-g[1]-a.top)/l,d-g[0]-a.left)}function la(d){this.config={};this.linkedItems={chart:d}}var ha=this,U=ha.hcLib,Ha=U.hasTouch,Da=ha.window,ma=Da.document,oa=U.Raphael,Ma=U.getPosition,sa=U.BLANKSTRING,G=U.preDefStr,Qa=G.HUNDREDSTRING,G=G.NINETYSTRING,za=U.pluck,ia=U.pluckNumber,Ya=U.getFirstValue,Ua=U.extend2,R=U.toRaphaelColor,ra=U.hasSVG,Na=U.hashify,Za="createTouch"in ma,eb=Za&&!(Da.navigator.maxTouchPoints||Da.navigator.msMaxTouchPoints),Ia=U.each,Ga=U.plotEventHandler,
wa=U.componentDispose,Ea=8===Da.document.documentMode?"visible":"",xa=Math,va=xa.sin,pa=xa.cos,La=xa.atan2,qa=xa.round,Aa=xa.min,Ba=xa.max,Fa=xa.abs,ta=xa.PI,a=xa.ceil,b=xa.floor,c=ta/180,h=180/ta,m=Math.PI,f=m/2,q=2*m,v=m+f,A=U.getFirstColor,n=U.getFirstAlpha,C=U.graphics.getDarkColor,p=U.graphics.getLightColor,I=U.graphics.convertColor,K=U.POSITION_BOTTOM,B=U.POSITION_RIGHT,k=U.chartAPI,x=U.COMMASTRING,aa=U.ZEROSTRING,N=U.ONESTRING,D=!/fusioncharts\.com$/i.test(Da.location.hostname),Z={},X={};k("column2d",
{standaloneInit:!0,friendlyName:"Column Chart",creditLabel:D,defaultDatasetType:"column",applicableDSList:{column:!0},singleseries:!0},k.sscartesian);k("column3d",{friendlyName:"3D Column Chart",defaultDatasetType:"column3d",applicableDSList:{column3d:!0},defaultPlotShadow:1,creditLabel:D,is3D:!0,standaloneInit:!0,hasLegend:!1,singleseries:!0,fireGroupEvent:!0,defaultZeroPlaneHighlighted:!1},k.sscartesian3d,{showplotborder:0});k("bar2d",{friendlyName:"Bar Chart",isBar:!0,standaloneInit:!0,defaultDatasetType:"bar2d",
creditLabel:D,applicableDSList:{bar2d:!0},singleseries:!0,spaceManager:k.barbase},k.ssbarcartesian);k("bar3d",{friendlyName:"3D Bar Chart",defaultDatasetType:"bar3d",applicableDSList:{bar3d:!0},defaultPlotShadow:1,fireGroupEvent:!0,standaloneInit:!0,creditLabel:D,is3D:!0,isBar:!0,singleseries:!0,defaultZeroPlaneHighlighted:!1},k.ssbarcartesian3d,{showplotborder:0});k("area2d",{friendlyName:"Area Chart",standaloneInit:!0,creditLabel:D,defaultDatasetType:"area",singleseries:!0,defaultPlotShadow:0},
k.sscartesian,{},k.areabase);k("line",{friendlyName:"Line Chart",standaloneInit:!0,creditLabel:D,defaultPlotShadow:1,singleseries:!0,axisPaddingLeft:0,axisPaddingRight:0,defaultDatasetType:"line"},k.sscartesian,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},k.areabase);k("pareto2d",{defaultDatasetType:"column2d",singleseries:!0,creditLabel:D,_createDatasets:function(){var d=this.components,L=this.jsonData,g=this.is3D,a=d.numberFormatter,l=L.data||L.dataset&&L.dataset[0]&&L.dataset[0].data,
e=l&&l.length,b=L.chart,c=this.defaultDatasetType,L=new (FusionCharts.get("component",["dataset","Pareto"])),r=ia(b.showcumulativeline,1),w=[],u,F;if(l){for(b=0;b<e;b++)u=l[b],F=a.getCleanValue(u.value),null!==F&&"true"!==u.vline&&!0!==u.vline&&1!==u.vline&&"1"!==u.vline&&w.push(u);this.config.categories=w;a=d.dataset||(d.dataset=[]);(l=za(c))&&l.toLowerCase();l=FusionCharts.register("component",["datasetGroup","column"]);l=d[void 0]=new l;l.chart=this;l.init();if(e=g?FusionCharts.get("component",
["dataset","Column3d"]):FusionCharts.get("component",["dataset","Column"]))(g=a[0])?(c=w.length,l=g.components.data.length,c<l&&g.removeData(c,l-c),g.JSONData={data:w},L.configure.call(g)):(g=new e,a.push(g),g.chart=this,g.index=b,l&&l.addDataSet(g,0,0),L.init(g,w,c));d=d.yAxis[1];if(r)d&&d.setAxisConfig({drawLabels:!0,drawPlotLines:!0,drawAxisName:!0,drawAxisLine:!0,drawPlotBands:!0,drawTrendLines:!0,drawTrendLabels:!0}),d.show(),e=FusionCharts.get("component",["dataset","line"]),(g=a[1])?(c=w.length,
l=g.components.data.length,c<l&&g.removeData(c,l-c),g.JSONData={data:w},L.configure.call(g)):(g=new e,a.push(g),g.chart=this,g.index=b,L.init(g,w,"line"));else{if(g=a[1])wa.call(g),a.pop();d&&(d.setAxisConfig({drawLabels:!1,drawPlotLines:!1,drawAxisName:!1,drawAxisLine:!1,drawPlotBands:!1,drawTrendLines:!1,drawTrendLabels:!1}),d.hide())}}else this.setChartMessage()},_setCategories:function(){var d=this.components,L=this.jsonData,g=L.dataset,a=d.numberFormatter,d=d.xAxis,L=L.data||g&&g[0].data||[],
g=[],l,e=L.length,b,c={},r=0,w;for(b=0;b<e;b++){l=L[b];w=a.getCleanValue(l.value,!0);if("true"===l.vline||"1"===l.vline||1===l.vline||!0===l.vline)c[r]=l;else if(null===w)continue;else l.value=w,g.push(l);r++}g.sort(function(d,g){return g.value-d.value});for(b in c)g.splice(b,0,c[b]);d[0].setCategory(g)},standaloneInit:!0,hasLegend:!1,isPercentage:!0},k.msdybasecartesian,{plotfillalpha:G});k("pareto3d",{standaloneInit:!0,is3D:!0,friendlyName:"3D Pareto Chart",creditLabel:D,fireGroupEvent:!0,defaultPlotShadow:1,
singleseries:!0,hasLegend:!1,defaultDatasetType:"column3d",_createDatasets:k.pareto2d,_setCategories:k.pareto2d,isPercentage:!0},k.msdybasecartesian3d,{plotfillalpha:G,use3dlineshift:1});k("pie2d",{friendlyName:"Pie Chart",standaloneInit:!0,defaultSeriesType:"pie",defaultPlotShadow:1,reverseLegend:1,alignCaptionWithCanvas:0,sliceOnLegendClick:!0,isSingleSeries:!0,dontShowLegendByDefault:!0,defaultDatasetType:"Pie2D",applicableDSList:{Pie2D:!0},defaultZeroPlaneHighlighted:!1,creditLabel:D,_plotDragMove:function(d,
L,g,a,l){var e=this.data("plotItem"),b=e.chart,e=e.seriesData,c=b.components.dataset[0].config;isNaN(d)||isNaN(L)||!c.enableRotation||e.singletonCase||e.isRightClicked||(d=na.call(l,g,a,e.pieCenter,e.chartPosition,1),e.isRotating||(e.dragStartAngle!==d&&(e.isRotating=!0),ha.raiseEvent("RotationStart",{startingAngle:e._rotationalStartAngle=b._startingAngle()},b.chartInstance)),c.startAngle+=d-e.dragStartAngle,e.dragStartAngle=d,e.moveDuration=0,c.updateInited||(c.updateInited=!0,setTimeout(b._batchRotate||
(b._batchRotate=function(){b._rotate();c.updateInited=!1}),50)))},_plotDragStart:function(d,L,g){var a=this.data("plotItem"),l=a.chart,a=a.seriesData,e=l.components.dataset[0].config,b=-e.startAngle;a.isRightClicked=Ha||0===g.button||1===g.button?!1:!0;if(e.enableRotation&&!a.isRightClicked){a.isRotating=!1;e=l.linkedItems.container;l={left:0,top:0};if(e.getBoundingClientRect)e=e.getBoundingClientRect(),l.top=e.top+(Da.pageYOffset||ma.scrollTop||0)-(ma.clientTop||0),l.left=e.left+(Da.pageXOffset||
ma.scrollLeft||0)-(ma.clientLeft||0);else for(;e;)l.left+=e.offsetLeft||0,l.top+=e.offsetTop||0,e!==ma.body&&e!==ma.documentElement&&(l.left-=e.scrollLeft||0,l.top-=e.scrollTop||0),e=e.offsetParent;a.chartPosition=l;d=na.call(g,d,L,a.pieCenter,a.chartPosition,1);a.dragStartAngle=d;a.startingAngleOnDragStart=b}},_plotDragEnd:function(d){var L,g=this.data("plotItem"),a=g.chart,l=a.config,e=g.seriesData;e.isRightClicked||(l.clicked=!0,a.disposed||a._rotate(),!e.isRotating&&a._plotGraphicClick.call(g.graphic,
d),delete l.clicked,e.isRotating&&(setTimeout(function(){e.isRotating=!1},0),ha.raiseEvent("RotationEnd",{startingAngle:L=a._startingAngle(),changeInAngle:L-e._rotationalStartAngle},a.chartInstance)))},_plotRollOver:function(d){var L=this.plotItem||this.data("plotItem"),g=L.chart,a=g.components.dataset[0].config,l,e;a.isRotating||(Ga.call(this,g,d,"DataPlotRollOver"),g.onPlotHover(this,!0));a.isHovered=!0;(d=L.innerDiameter)&&(l=L.centerLabelConfig)&&(e=l.label)&&g.drawDoughnutCenterLabel(e,L.center[0],
L.center[1],d,d,l,!1)},onPlotHover:function(d,L){var g=d.data("plotItem"),a=g.center,l=g.rolloverProperties||{},e=L?l.color:g.color,b=L?l.borderWidth:g.borderWidth,c=L?l.borderColor:g.borderColor;e&&(L&&(e.cx=a[0],e.cy=a[1],e.r=g.radius),l.enabled&&g.graphic.attr({fill:R(e),"stroke-width":b,stroke:c}))},_plotRollOut:function(d){var L=this.plotItem||this.data("plotItem"),g=L.chart,a=g.components.dataset[0].config,l,e;a.isRotating||(Ga.call(this,g,d,"DataPlotRollOut"),g.onPlotHover(this,!1));a.isHovered=
!1;(d=L.innerDiameter)&&(l=a.centerLabelConfig)&&((e=l.label)||!e)&&g.drawDoughnutCenterLabel(e,L.center[0],L.center[1],d,d,l,!1)},_rotate:function(){var d,L,g=this.components.dataset[0],a=g.config,l=g.components.data,e=this.config,b=a.slicingDistance,g=g.config,c=q/g.valueTotal,r=e.canvasLeft+.5*e.canvasWidth,e=e.canvasTop+.5*e.canvasHeight,w=a.pieMinRadius,u=.5*(a.piePlotOptions.innerSize||0),F,t,f,h,m;F=(a.startAngle||0)%q;for(m=0;m<l.length;m+=1)f=l[m].config,h=l[m].graphics,d=f.y,null!==d&&void 0!==
d&&(t=F,F-=g.singletonCase?q:d*c,d=.5*(F+t),f.angle=d,f.transX=pa(d)*b,f.transY=va(d)*b,f.slicedTranslation="t"+pa(d)*b+x+va(d)*b,(L=f._rotateAttrs)||(L=f._rotateAttrs={ringpath:[],transform:sa}),d=L.ringpath,d[0]=r,d[1]=e,d[2]=w,d[3]=u,d[4]=F,d[5]=t,L.transform=f.sliced?f.slicedTranslation:sa,h.element.attr(L));this.placeDataLabels(!0,l,a)},getPlotData:function(d,L){var g=this.components.dataset[0],a=g.components.data[d].config,g=g.config.userData||(g.config.userData=[]),l,e;if(g[d])g=g[d];else{g=
g[d]={};for(e in a)"object"!==typeof(l=a[e])&&"function"!==typeof l&&0!==e.indexOf("_")&&(g[e]=l);g.value=g.y;g.categoryLabel=g.label=g.seriesName;delete g.y;delete g.total;delete g.doNotSlice;delete g.name;delete g.seriesName;delete g.centerAngle;delete g.showInLegend;delete g.angle;delete g.endAngle;delete g.isVisible;delete g.setColor;delete g.slicedTranslation;delete g.startAngle;delete g.transX;delete g.transY;delete g.pValue}g.sliced=L;return g},_plotGraphicClick:function(d){var L,g=this.element||
this,a=g.plotItem||g.data("plotItem"),l=g.data("eventArgs")||{},e=a.chart,b=a.index,c=e.components.dataset[0],r=c.config,w=r.enableMultiSlicing,c=c.components.data[b],u=c.graphics,c=c.config,f=c.doNotSlice,t;L=c.slicedTranslation;var m=e.get("config","animationObj"),h=m.duration||200,k=m.dummyObj,q=m.animObj,m=m.animType;!r.isRotating&&Ga.call(g,e,d);if(!(r.isRotating||r.singletonCase||f||(d=!w&&e.sliceInOtherPies(b),(t=c.sliced)&&d))){if(Za&&!eb){d=(new Date).getTime();if(a.lastSliceTimeStamp&&400>
d-a.lastSliceTimeStamp)return;a.lastSliceTimeStamp=d}r=u.element;a=u.connector;w=u.label||u.dataLabel;L="object"===typeof L?"t"+L:L;f=c.connectorPath;u=(t?-1:1)*c.transX;d=(t?-1:1)*c.transY;g=r.data("eventArgs")||r.data("eventArgs",{});ha.raiseEvent("slicingStart",{slicedState:t,dataIndex:"index"in l&&l.index,data:e.getPlotData(b,t)},e.chartInstance);r.animateWith(k,q,{transform:t?"t0,0":L},h,m,function(){ha.raiseEvent("slicingEnd",{slicedState:t,dataIndex:"index"in l&&l.index,data:e.getPlotData(b,
t)},e.chartInstance)});w&&w.x&&((L=w.data("textPos"))||(L=w.data("textPos",{x:w.x,y:w.y})),w.animateWith(k,q,{x:w.x+(t?0:u)},h,m),L.x=w.x+(t?0:u));f&&(L=f.slice(0),L[1]+=u,L[2]+=d,L[4]+=u,L[6]+=u,a.animateWith(k,q,{path:L},h,m),c.connectorPath=L);return g.isSliced=t=c.sliced=!t}},sliceInOtherPies:function(d){var L=this.components.dataset[0],g=L.components.data,a=g.length,l=0,e;for(L.enableMultiSlicing=!0;a--;)a!==d&&(e=g[a]).config.sliced&&++l&&this._plotGraphicClick.call(e.graphics);L.enableMultiSlicing=
!1;return!!l},placeDataLabels:function(){var d=function(d,g){return d.point.value-g.point.value},L=function(d,g){return d.angle-g.angle},g=["start","start","end","end"],c=[-1,1,1,-1],l=[1,1,-1,-1];return function(e,ba,h,r){var w=this.config,u=this.components,F=u.dataset[0],t=F.graphics,k=F.config,p=w.canvasLeft,C=w.canvasTop,F=w.canvasWidth,n=p+.5*w.canvasWidth,A=C+.5*w.canvasHeight,Ka=this.linkedItems.smartLabel,B=k.dataLabelOptions,$a=B.style,P=ia(a(parseFloat($a.lineHeight)),12),D=1===ba.length?
w.singletonPlaceValue:!1,x=B.skipOverlapLabels,I=B.manageLabelOverflow,K=B.connectorPadding,J;J=r&&r.metrics||[n,A,2*k.pieMinRadius,k.innerSize||0];var y=J[1],z=J[0];r=.5*J[2];var k=[[],[],[],[]],n=h.labelsRadius=r+B.distance,H=A=parseInt($a.fontSize,10),S=H/2,K=[K,K,-K,-K];h=h.labelsMaxInQuadrant=b(n/H);var B=B.isSmartLineSlanted,O=J[3]/2,W,E,T,Q,Ra,Ja,ga,aa,G,ja,M,ea,V,ka,X;J=Number.POSITIVE_INFINITY;var da,Z;E=[];T=[];E=this.get("config","animationObj");var N=e?0:E.duration||0,R=E.dummyObj,fa=
E.animObj,U=E.animType,ha=this._plotDragMove,ma=this._plotDragStart,sa=this._plotDragEnd,ra=this._plotRollOver,ya=this._plotRollOut,la=u.paper,Y=t.dataLabelContainer,ca,oa;Ka.useEllipsesOnOverflow(w.useEllipsesWhenOverflow);e||Ka.setStyle($a);if(1==ba.length&&!O&&D)E=ba[0],(ca=E.config._textAttrs).text&&(Z=E.graphics,da=E.config,M=Z.label,E.slicedTranslation=[p,C],ca["text-anchor"]="middle",ca.x=0,ca.y=0,ca.transform=["t",z,y],M?M.animateWith(R,fa,ca,N,U):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,
ya),M.x=z,M.data("textPos",{x:z,y:y}).data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),null!==da.y&&void 0!==da.y&&M.show(),Z.connector&&Z.connector.attr({path:[]}));else if(D)X=O+(r-O)/2,Ia(ba,function(d){da=d.config;(ca=da._textAttrs).text&&(Z=d.graphics,M=Z.label,null!==da.y&&void 0!==da.y&&((ja=Z.connector)&&ja.show(),M&&M.show()),ca.transform="t0,0",G=da.angle,aa=y+X*va(G),Q=z+X*pa(G),ca._x=Q,ca._y=aa,d.sliced&&(ka=d.slicedTranslation,ea=ka[0]-p,V=ka[1]-C,Q+=ea,aa+=V),ca["text-anchor"]=
"middle",ca.x=0,ca.y=0,ca.transform=["t",Q,aa],M?M.animateWith(R,fa,ca,N,U):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,ya),M.x=ca._x,M.x=ca._x,M.y=ca._y,M.data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),ca.visibility===Ea&&M.show())});else{for(e=ba.length-1;0<=e;e--)if(E=ba[e],da=E.config,ca=da._textAttrs,ca.text=da.displayValue)Z=E.graphics,null!==da.y&&void 0!==da.y&&(M=Z.label,(ja=Z.connector)&&ja.show(),M&&M.show()),ca.text=da.displayValue,ca.transform="t0,0",G=da.angle%q,
0>G&&(G=q+G),u=0<=G&&G<f?1:G<m?2:G<v?3:0,k[u].push({point:E,angle:G});for(e=ba=4;e--;){if(x&&(u=k[e].length-h,0<u))for(k[e].sort(d),t=k[e].splice(0,u),u=0,D=t.length;u<D;u+=1)E=t[u].point,ca=E.config._textAttrs,Z=E.graphics,Z.label&&Z.label.attr("visibility","hidden"),Z.connector&&Z.connector.attr({visibility:"hidden"});k[e].sort(L)}e=Ba(k[0].length,k[1].length,k[2].length,k[3].length);u=Ba(Aa(e,h)*H,n+H);T=k[0].concat(k[1]);E=k[2].concat(k[3]);for(e=T.length-1;0<=e;e--)t=T[e].point.config,delete t.clearance,
delete t.clearanceShift,O=Fa(u*va(t.angle)),Math.abs(J-O)<2*P&&(t.clearance=0,T[e+1].point.clearanceShift=P/2),J=O;J=Number.POSITIVE_INFINITY;e=0;for(D=E.length;e<D;e++)t=E[e].point.config,delete t.clearance,delete t.clearanceShift,O=Fa(u*va(t.angle)),Math.abs(J-O)<2*P&&(t.clearance=0,E[e-1].point.clearanceShift=P/2),J=O;k[1].reverse();for(k[3].reverse();ba--;){t=k[ba];D=t.length;x||(H=D>h?u/D:A,S=H/2);P=D*H;J=u;for(e=0;e<D;e+=1,P-=H)O=Fa(u*va(t[e].angle)),J<O?O=J:O<P&&(O=P),J=(t[e].oriY=O)-H;$a=
g[ba];D=u-(D-1)*H;J=0;for(e=t.length-1;0<=e;--e,D+=H)if(E=t[e].point,G=t[e].angle,da=E.config,ca=da._textAttrs,ca.text&&(oa=da._textCss,Z=E.graphics,E=da.sliced,M=Z.label,O=Fa(u*va(G)),O<J?O=J:O>D&&(O=D),J=O+H,P=void 0===da.clearance?2*a(ia(parseFloat(da.style.border),12),12):2*a(ia(parseFloat(da.style.border),da.clearance)),Ja=(O+t[e].oriY)/2,O=z+l[ba]*n*pa(xa.asin(Ja/u)),Ja*=c[ba],Ja+=y,ga=y+r*va(G),T=z+r*pa(G),(2>ba&&O<T||1<ba&&O>T)&&(O=T),Q=O+K[ba],aa=Ja-S-2,Ra=Q+K[ba],ca._x=Ra,I&&(W=1<ba?Ra-
w.canvasLeft:w.canvasLeft+F-Ra,Ka.setStyle(da.style),P=ia(a(parseFloat(da.style.lineHeight)),12)+P,P=Ka.getSmartText(da.displayValue,W,P),void 0===da.clearance&&P.height>H&&(Ja+=H),ca.text=P.text,ca.tooltip=P.tooltext),ca._y=aa,E&&(ea=da.transX,V=da.transY,Q+=ea,O+=ea,T+=ea,ga+=V,Ra+=ea),ca["text-anchor"]=$a,ca.vAlign="middle",ca.x=Ra,ca.y=Ja,(P=M&&M.data("textPos"))?M.attr({x:P.x,y:P.y}).animateWith(R,fa,ca,N):M=Z.label=la.text(ca,oa,Y).drag(ha,ma,sa).hover(ra,ya),M.x=ca._x,M._x=ca._x,M.y=ca._y,
ca.tooltip&&(M.tooltip(ca.tooltip),delete ca.tooltip),ca.visibility===Ea&&M.show(),M.data("textPos",{x:Ra,y:Ja}).data("plotItem",ca.plotItem).data("eventArgs",ca.eventArgs),ja=Z.connector))da.connectorPath=P=["M",T,ga,"L",B?O:T,Ja,Q,Ja],(E=ja.data("connectorPath"))?w.clicked||ja.attr({path:E.path}).animateWith(R,fa,{path:P},N):ja.attr({path:P}),ja.data("connectorPath",{path:P})}}}}(),_spaceManager:function(){var d=this.config,a=this.components,g=a.dataset[0],b=g.components.data,l=g.config,e=a.legend,
c=a.colorManager,f=this.linkedItems.smartLabel,r=l.dataLabelCounter,w=0,u=this.jsonData.chart,a=ia(u.managelabeloverflow,0),F=ia(u.slicingdistance),t=l.preSliced||d.allPlotSliceEnabled!==aa||u.showlegend===N&&u.interactivelegend!==aa?Fa(ia(F,20)):0,k=ia(u.pieradius,0),m=(F=ia(u.enablesmartlabels,u.enablesmartlabel,1))?ia(u.skipoverlaplabels,u.skipoverlaplabel,1):0,h=ia(u.issmartlineslanted,1),q=r?ia(u.labeldistance,u.nametbdistance,5):t,p=ia(u.smartlabelclearance,5),v=d.width,C=d.height,D=(this._manageActionBarSpace(.225*
C)||{}).bottom,v=v-(d.marginRight+d.marginLeft),C=C-(d.marginTop+d.marginBottom)-(D?D+d.marginBottom:0),D=Aa(C,v),P=za(u.smartlinecolor,c.getColor("plotFillColor")),n=ia(u.smartlinealpha,100),A=ia(u.smartlinethickness,.7),g=l.dataLabelOptions=g._parseDataLabelOptions(),c=g.style,c=r?ia(parseInt(c.lineHeight,10),12):0,x=0===k?.15*D:k,G=2*x,J={bottom:0,right:0},y=l.pieYScale,D=l.pieSliceDepth;g.connectorWidth=A;g.connectorPadding=ia(u.connectorpadding,5);g.connectorColor=I(P,n);r&&(F&&(q=p),q+=t);p=
G+2*(c+q);p=this._manageChartMenuBar(p<C?C-p:C/2);C-=(p.top||0)+(p.bottom||0);l.showLegend&&(this.hasLegend=!0,za(u.legendposition,K).toLowerCase()!==B?(J=e._manageLegendPosition(C/2),C-=J.bottom):(J=e._manageLegendPosition(C/2),v-=J.right));this._allocateSpace(J);f.useEllipsesOnOverflow(d.useEllipsesWhenOverflow);if(1!==r)for(;r--;)f.setStyle(b[r].config.style||d.dataLabelStyle),e=f.getOriSize(b[r].config.displayValue),w=Ba(w,e.width);0===k?x=this._stubRadius(v,w,C,q,t,c,x):(l.slicingDistance=t,
l.pieMinRadius=x,g.distance=q);d=C-2*(x*y+c);l.managedPieSliceDepth=D>d?D-d:l.pieSliceDepth;g.isSmartLineSlanted=h;g.enableSmartLabels=F;g.skipOverlapLabels=m;g.manageLabelOverflow=a},_stubRadius:function(d,a,g,b,l,e,c){var f=this.components.dataset[0],r=f.config,w=ia(this.jsonData.chart.slicingdistance),f=r.dataLabelOptions||(r.dataLabelOptions=f._parseDataLabelOptions()),u=0,u=Aa(d/2-a-l,g/2-e)-b;u>=c?c=u:w||(l=b=Ba(Aa(b-(c-u),l),10));r.slicingDistance=l;r.pieMinRadius=c;f.distance=b;return c},
getDataSet:function(d){return this.components.dataset[d]},_startingAngle:function(d,a){var g,b=this.components.dataset[0].config,l=(g=b.startAngle)*-h+(0>-1*g?360:0);isNaN(d)||(b.singletonCase||b.isRotating?l=b.startAngle:(d+=a?l:0,b.startAngle=-d*c,this._rotate(d),l=d));return qa(100*((l%=360)+(0>l?360:0)))/100},eiMethods:{isPlotItemSliced:function(d){var a,g,b,l=this.apiInstance;return l&&l.components.dataset&&(b=l.components.dataset[0])&&(a=b.components.data)&&a.length&&a[d]&&(g=a[d].config)&&
g.sliced},addData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.addData.apply(d,arguments)},removeData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.removeData.apply(d,arguments)},updateData:function(){var d,a=this.apiInstance;return a&&a.components.dataset&&(d=a.components.dataset[0])&&d.updateData.apply(d,arguments)},slicePlotItem:function(d,a){var g,b,l,e,c=this.apiInstance;return c&&c.components.dataset&&
(g=c.components.dataset[0])&&(b=g.components.data)&&(e=b.length)&&b[d=g.config.reversePlotOrder?e-d-1:d]&&(l=b[d].config)&&((!!a!==l.sliced||void 0===a)&&c._plotGraphicClick.call(b[d].graphics.element)||l.sliced)},centerLabel:function(d,a){var g=this.apiInstance,b=g.components.dataset[0],l=b.config,e=l.piePlotOptions.innerSize,c=l.pieCenter,f=c[0],c=c[1],l=l.centerLabelConfig,r;if("object"!==typeof a)a=l;else for(r in l)void 0===a[r]&&(a[r]=l[r]);a.label=d;b.centerLabelConfig=a;e&&g.drawDoughnutCenterLabel(d||
"",f,c,e,e,a,!0)},startingAngle:function(d,a){return this.apiInstance._startingAngle(d,a)}}},k.guageBase,{plotborderthickness:1,alphaanimation:0,singletonPlaceValue:!0,usedataplotcolorforlabels:0,enableslicing:N});k("pie3d",{defaultDatasetType:"Pie3D",applicableDSList:{Pie3D:!0},is3D:!0,friendlyName:"3D Pie Chart",fireGroupEvent:!0,creditLabel:D,getPointColor:function(d){return d},_configureManager:function(){var d=this.components.dataset[0],a=d.config,g=d.components,d=g.Pie3DManager,g=g.data;d&&
d.configure(a.pieSliceDepth,1===g.length,a.use3DLighting,!1)},defaultPlotShadow:0,_preDrawCalculate:function(){var d,a,g=this.config,c=0,l=this.components.dataset[0],e=l.config;d=l.components;a=e.dataLabelOptions;var f=e.pie3DOptions=l._parsePie3DOptions(),k=za(e.startAngle,0)%q,r=e.managedPieSliceDepth,w=e.slicedOffset=f.slicedOffset,u=g.canvasWidth,F=g.canvasHeight,t=[g.canvasLeft+.5*u,g.canvasTop+.5*F-.5*r],m,h,g=d.data,p,v=Aa(u,F),C,Ka=a.distance;m=e.pieYScale;var D=e.slicedOffsetY||(e.slicedOffsetY=
w*e.pieYScale);p=d.Pie3DManager;t.push(2*e.pieMinRadius,f.innerSize||0);t=ua(t,function(d,a){return(C=/%$/.test(d))?[u,F-r,v,v][a]*parseInt(d,10)/100:d});t[2]/=2;t[3]/=2;t.push(t[2]*m);t.push((t[2]+t[3])/2);t.push(t[5]*m);l.getX=function(d,a){h=xa.asin((d-t[1])/(t[2]+Ka));return t[0]+(a?-1:1)*pa(h)*(t[2]+Ka)};e.center=t;Ia(g,function(d){c+=d.config.y});e.labelsRadius=t[2]+Ka;e.labelsRadiusY=e.labelsRadius*m;e.quadrantHeight=(F-r)/2;e.quadrantWidth=u/2;l=qa(1E3*k)/1E3;f=l+q;k=ia(parseInt(a.style.fontSize,
10),10)+4;e.maxLabels=b(e.quadrantHeight/k);e.labelFontSize=k;e.connectorPadding=ia(a.connectorPadding,5);e.isSmartLineSlanted=za(a.isSmartLineSlanted,!0);e.connectorWidth=ia(a.connectorWidth,1);e.enableSmartLabels=a.enableSmartLabels;p||(p=d.Pie3DManager=new la(this),this.get("graphics","datasetGroup").trackTooltip(!0));this._configureManager();for(d=g.length-1;0<=d;--d)a=g[d],a=a.config,k=l,p=c?a.y/c:0,l=qa(1E3*(l+p*q))/1E3,l>f&&(l=f),m=l,a.shapeArgs={start:qa(1E3*k)/1E3,end:qa(1E3*m)/1E3},a.centerAngle=
h=(m+k)/2%q,a.slicedTranslation=[qa(pa(h)*w),qa(va(h)*D)],k=pa(h)*t[2],e.radiusY=m=va(h)*t[4],a.tooltipPos=[t[0]+.7*k,t[1]+m],a.percentage=100*p,a.total=c},placeDataLabels:function(){var d=function(d,a){return d.point.value-a.point.value},b=function(d,a){return d.angle-a.angle},g=["start","start","end","end"],c=[-1,1,1,-1],l=[1,1,-1,-1];return function(e){var ba,k,r=this.config,w=this.components,u=w.dataset[0],F=u.config,t=u.components.data,h=F.piePlotOptions,p=r.canvasLeft,C=r.canvasTop,D=r.canvasWidth,
n=p+.5*r.canvasWidth,Ka=C+.5*r.canvasHeight,B=this.linkedItems.smartLabel,A=F.dataLabelOptions,P=A.style;ba=ia(a(parseFloat(P.lineHeight)),12);ba=Ya(A.placeInside,!1);var x=A.skipOverlapLabels,I=A.manageLabelOverflow,K=A.connectorPadding,G=A.distance,J=A.connectorWidth,y=[[],[],[],[]],z=parseInt(P.fontSize,10),H=z,S=H/2,K=[K,K,-K,-K],O=A.isSmartLineSlanted,W,E,T,Q,Z,aa,ga,X,N,ja,M,ea,V,ka,R,G=0<G,da=F.center||(F.center=[n,Ka,h.size,h.innerSize||0]),fa=da[1],U=da[0],h=da[2],n=da[4],Ka=F.labelsRadius,
ha=qa(100*F.labelsRadiusY)/100,ma=F.maxLabels,sa=F.enableSmartLabels,ra=F.pieSliceDepth/2;E=this.get("config","animationObj");var la=e?0:E.duration,oa=E.dummyObj,ta=E.animObj,ya=E.animType,ua,Y,ca=this._plotDragMove,wa=this._plotDragStart,za=this._plotDragEnd,na=this._plotRollOver,Ga=this._plotRollOut,Ca=w.paper,Da=u.graphics.dataLabelContainer;B.useEllipsesOnOverflow(r.useEllipsesWhenOverflow);if(F.dataLabelCounter)if(e||B.setStyle(P),1==t.length)E=t[0],ka=E.graphics,V=E.config,Y=V._textAttrs,ua=
V._textCss,M=ka.label,R=ka.connector,V.slicedTranslation=[p,C],null!==V.y&&void 0!==V.y&&(Y.visibility=Ea,Y["text-anchor"]="middle",Y.x=U,Y.y=fa+S-2,Y._x=U),M?M.animateWith(oa,ta,Y,la,ya):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,Ga),Y._x&&(M.x=Y._x,delete Y.x),M.data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs),Y.visibility===Ea&&M.show(),R&&R.hide();else if(ba)Ia(t,function(d){ka=d.graphics;V=d.config;Y=V._textAttrs;M=ka.label;if(null!==V.y&&void 0!==V.y){ja=V.angle;N=fa+da[6]*
va(ja)+S-2;Z=U+da[5]*pa(ja);Y._x=Z;Y._y=N;if(V.sliced){d=d.slicedTranslation;var a=d[1]-C;Z+=d[0]-p;N+=a}Y.visibility=Ea;Y.align="middle";Y.x=Z;Y.y=N}M?M.animateWith(oa,ta,Y,la,ya):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,Ga);M.data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs);Y.visibility===Ea&&M.show();M.x=Y._x;M._x=Y._x;M._y=Y._y});else{Ia(t,function(d){ka=d.graphics;V=d.config;ua=V._textCss;Y=V._textAttrs;if(Y.text=V.displayValue)ka=d.graphics,null!==V.y&&void 0!==V.y&&(M=ka.label,
(R=ka.connector)&&R.show(),M&&M.show()),M=ka.label,ja=V.angle,0>ja&&(ja=q+ja),ea=0<=ja&&ja<f?1:ja<m?2:ja<v?3:0,y[ea].push({point:d,angle:ja})});for(w=r=4;w--;){if(x&&(u=y[w].length-ma,0<u))for(y[w].sort(d),F=y[w].splice(0,u),u=0,ba=F.length;u<ba;u+=1)E=F[u].point,ka=E.graphics,ka.label&&ka.label.attr("visibility","hidden"),ka.connector&&ka.connector.attr({visibility:"hidden"});y[w].sort(b)}w=Ba(y[0].length,y[1].length,y[2].length,y[3].length);ha=Ba(Aa(w,ma)*H,ha+H);y[1].reverse();y[3].reverse();for(B.setStyle(P);r--;){u=
y[r];ba=u.length;x||(H=ba>ma?ha/ba:z,S=H/2);F=ba*H;P=ha;for(w=0;w<ba;w+=1,F-=H)E=Fa(ha*va(u[w].angle)),P<E?E=P:E<F&&(E=F),P=(u[w].oriY=E)-H;F=g[r];t=ha-(ba-1)*H;P=0;for(w=u.length-1;0<=w;--w,t+=H)E=u[w].point,ka=E.graphics,V=E.config,Y=V._textAttrs,ua=V._textCss,null!==V.y&&Y.text&&(ja=u[w].angle,T=V.sliced,M=ka.label,E=Fa(ha*va(ja)),E<P?E=P:E>t&&(E=t),P=E+H,ga=(E+u[w].oriY)/2,E=U+l[r]*Ka*pa(xa.asin(ga/ha)),ga*=c[r],ga+=fa,X=fa+n*va(ja),Q=U+h*pa(ja),(2>r&&E<Q||1<r&&E>Q)&&(E=Q),Z=E+K[r],N=ga+S-2,aa=
Z+K[r],Y._x=aa,I&&(W=1<r?aa-p:p+D-aa,B.setStyle(V.style),ba=ia(a(parseFloat(V.style.lineHeight)),12)+(2*a(parseFloat(V.style.border),12)||0),ba=B.getSmartText(V.displayValue,W,ba),Y.text=ba.text,Y.tooltip=ba.tooltext),ja<m&&(ga+=ra,X+=ra,N+=ra),Y._y=N,T&&(ba=V.transX,T=V.transY,Z+=ba,E+=ba,Q+=ba,X+=T,aa+=ba),Y.visibility=Ea,Y["text-anchor"]=F,(ba=M&&M.data("textPos"))&&M.attr({x:ba.x,y:ba.y}),Y.x=aa,Y.y=ga,!e&&ba?M.animateWith(oa,ta,Y,la,ya):M?Y&&M.attr(Y):M=ka.label=Ca.text(Y,ua,Da).drag(ca,wa,za).hover(na,
Ga),M.data("textPos",{x:aa,y:ga}).data("plotItem",Y.plotItem).data("eventArgs",Y.eventArgs),M.x=Y._x,M._x=Y._x,M.y=Y._y,Y.tooltip&&(M.tooltip(Y.tooltip),delete Y.tooltip),G&&J&&sa&&(R=ka.connector,V.connectorPath||(k=!0),V.connectorPath=ba=["M",Q,X,"L",O?E:Q,ga,Z,ga],ba={path:ba,"stroke-width":J,stroke:A.connectorColor||"#606060",visibility:Ea},R&&(e||k?R.attr(ba):R.animateWith(oa,ta,ba,la,ya))))}}}}(),animate:function(){var d,a,g,b,l=this,e=l.components.dataset[0],c=e.components.data;d=l.graphics.datasetGroup;
var f=c.length;a=e.config.alphaAnimation;g=function(){l.disposed||l.disposing||l.placeDataLabels(!1)};var r=l.get("config","animationObj"),e=r.duration||0,w=r.dummyObj,u=r.animObj,r=r.animType;if(a)d.attr({opacity:0}),d.animateWith(w,u,{opacity:1},e,r,g);else for(d=0;d<f;d++)if(a=c[d],g=a.graphics,a=a.config,b=a.shapeArgs,a=2*ta,g=g.element)g.attr({start:a,end:a}),g=b.start,b=b.end,(void 0).animateWith(w,u,{cx:g-a,cy:b-a},e,r)},_rotate:function(d){var a=this.components.dataset[0],g=a.config,a=a.components,
b=a.data,l=g.slicedOffset,e=g.slicedOffsetY,c=g.startAngle,f;d=isNaN(d)?-g._lastAngle:d;f=(d-c)%360;g.startAngle=ia(d,g.startAngle)%360;f=-(f*ta)/180;a.Pie3DManager&&a.Pie3DManager.rotate(f);Ia(b,function(d){var a=[],g=d.config;d=d.graphics.element;var a=g.shapeArgs,b=a.start+=f,a=a.end+=f,c=g.angle=fa((b+a)/2),b=g.sliced,a=pa(c),c=va(c),a=g.slicedTranslation=[qa(a*l),qa(c*e)];g.transX=a[0];g.transY=a[1];g.slicedX=b?pa(f)*l:0;g.slicedY=b?va(f)*e:0;d&&b&&d.attr({transform:"t"+a[0]+","+a[1]})});this.placeDataLabels(!0,
b)},_plotRollOver:function(d){var a=this.data("plotItem"),g=a.chart,b=g.config,l=g.components.dataset[0],e=l.components.data[a.index],a=e.graphics.element,e=e.config.hoverEffects;l.config.isRotating||(Ga.call(a,g,d,"DataPlotRollOver"),e.enabled&&a.attr(e));b.isHovered=!0},_plotRollOut:function(d){var a=this.data("plotItem"),g=a.chart,b=g.config,l=g.components.dataset[0],e=l.components.data[a.index],a=e.config,e=e.graphics.element;l.config.isRotating||(Ga.call(e,g,d,"DataPlotRollOut"),e.attr({color:a.color.color.split(",")[0],
alpha:a._3dAlpha,borderWidth:a.borderWidth,borderColor:a.borderColor}));b.isHovered=!1},_plotDragStart:function(d,a,g){var b=this.data("plotItem").chart,l=b.components.dataset[0].config;l.isRightClicked=Ha||0===g.button||1===g.button?!1:!0;l.enableRotation&&!l.isRightClicked&&(l.isRotating=!1,d=na.call(g,d,a,l.center,l.chartPosition=Ma(b.linkedItems.container),l.pieYScale),l.dragStartAngle=d,l._lastAngle=-l.startAngle,l.startingAngleOnDragStart=l.startAngle)},_plotDragEnd:function(d){var a=this.data("plotItem"),
g=a.index,a=a.chart,b=a.config,l=a.components.dataset[0],e=l.config,l=l.components.Pie3DManager,c=e.startAngle;e.isRightClicked||(e.isRotating?(setTimeout(function(){e.isRotating=!1},0),ha.raiseEvent("rotationEnd",{startingAngle:fa(c,!0),changeInAngle:c-e.startingAngleOnDragStart},a.chartInstance),!b.isHovered&&l.colorObjs[g]&&l.onPlotHover(g,!1)):a._plotGraphicClick.call(this,d))},_plotDragMove:function(d,a,g,b,l){var e=this.data("plotItem").chart,c=e.components.dataset[0].config;isNaN(d)||isNaN(a)||
!c.enableRotation||c.singletonCase||c.isRightClicked||(d=na.call(l,g,b,c.center,c.chartPosition,c.pieYScale),c.isRotating||(c.dragStartAngle!==d&&(c.isRotating=!0),ha.raiseEvent("rotationStart",{startingAngle:fa(c.startAngle,!0)},e.chartInstance)),a=d-c.dragStartAngle,c.dragStartAngle=d,c.moveDuration=0,c._lastAngle+=180*a/ta,d=(new Date).getTime(),c._lastTime&&!(c._lastTime+c.timerThreshold<d))||(c._lastTime||e._rotate(),c.timerId=setTimeout(function(){e.disposed&&e.disposing||e._rotate()},c.timerThreshold),
c._lastTime=d)},_stubRadius:function(d,a,g,b,l,e,c){var f=this.components.dataset[0],r=f.config,w=ia(f.config.slicingdistance),f=r.dataLabelOptions||(r.dataLabelOptions=f._parseDataLabelOptions()),u=0,u=r.pieYScale;g-=r.pieSliceDepth;u=Aa(d/2-a-l,(g/2-e)/u)-b;u>=c?c=u:w||(l=b=Ba(Aa(b-(c-u),l),10));r.slicingDistance=l;r.pieMinRadius=c;f.distance=b;return c},_startingAngle:function(d,a){var g,b=this.components.dataset[0].config,l=(g=b.startAngle)+(0>g?360:0);isNaN(d)||b.singletonCase||b.isRotating||
(d+=a?l:0,this._rotate(d),l=d);return qa(100*((l%=360)+(0>l?360:0)))/100}},k.pie2d,{plotborderthickness:.1,alphaanimation:1});k("doughnut2d",{friendlyName:"Doughnut Chart",defaultDatasetType:"Doughnut2D",creditLabel:D,applicableDSList:{Doughnut2D:!0},getPointColor:function(d,a,g){var c;d=A(d);a=n(a);100>g&&ra?(c=C(d,b(100*(85-.2*(100-g)))/100),d=p(d,b(100*(100-.5*g))/100),a={FCcolor:{color:c+","+d+","+d+","+c,alpha:a+","+a+","+a+","+a,radialGradient:!0,gradientUnits:"userSpaceOnUse",r:g}}):a={FCcolor:{color:d+
","+d,alpha:a+","+a,ratio:"0,100"}};return a},drawDoughnutCenterLabel:function(d,a,g,b,c,e,f){var k=this.components,r=k.dataset[0].config;e=e||r.lastCenterLabelConfig;var k=k.paper,w=this.linkedItems.smartLabel,u=this.graphics,F=u.datasetGroup,t=e.padding,h=2*e.textPadding,m={fontFamily:e.font,fontSize:e.fontSize+"px",lineHeight:1.2*e.fontSize+"px",fontWeight:e.bold?"bold":"",fontStyle:e.italic?"italic":""},p=1.414*(.5*b-t)-h;c=1.414*(.5*c-t)-h;var q;w.setStyle(m);w.useEllipsesOnOverflow(this.config.useEllipsesWhenOverflow);
w=w.getSmartText(d,p,c);(c=u.doughnutCenterLabel)?(c.attr("text")!==d&&this.centerLabelChange(d),q=u.centerLabelOvalBg):(e.bgOval&&(u.centerLabelOvalBg=q=k.circle(a,g,.5*b-t,F)),c=u.doughnutCenterLabel=k.text(F).hover(this.centerLabelRollover,this.centerLabelRollout).click(this.centerLabelClick),c.chart=this);d?(c.css(m).attr({x:a,y:g,text:w.text,visibility:Ea,direction:r.textDirection,fill:R({FCcolor:{color:e.color,alpha:e.alpha}}),"text-bound":e.bgOval?"none":[R({FCcolor:{color:e.bgColor,alpha:e.bgAlpha}}),
R({FCcolor:{color:e.borderColor,alpha:e.borderAlpha}}),e.borderThickness,e.textPadding,e.borderRadius]}).tooltip(e.toolText||w.tooltext),e.bgOval&&q&&q.attr({visibility:Ea,fill:Na(e.bgColor),"fill-opacity":e.bgAlpha/100,stroke:Na(e.borderColor),"stroke-width":e.borderThickness,"stroke-opacity":e.borderAlpha/100})):(c.attr("visibility","hidden"),q&&q.attr("visibility","hidden"));f&&(r.lastCenterLabelConfig=e,r.centerLabelConfig=e)},centerLabelRollover:function(){var d=this.chart,a=d.config,g=d.chartInstance,
b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,a={height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelRollover",a,g,this,d.hoverOnCenterLabel)},centerLabelRollout:function(){var d=this.chart,a=d.config,g=d.chartInstance,b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,a={height:a.height,width:a.width,
pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelRollout",a,g,this,d.hoverOffCenterLabel)},centerLabelClick:function(){var d=this.chart,a=d.config,g=d.chartInstance,b=g.ref,c=d.components.dataset[0].config.lastCenterLabelConfig,d={height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:d.linkedItems.container,
centerLabelText:c&&c.label};this.attr("text")&&ha.raiseEvent("centerLabelClick",d,g)},centerLabelChange:function(d){var a=this.config,g=this.chartInstance,b=g.ref;ha.raiseEvent("centerLabelChanged",{height:a.height,width:a.width,pixelHeight:b.offsetHeight,pixelWidth:b.offsetWidth,id:g.id,renderer:g.args.renderer,container:this.linkedItems.container,centerLabelText:d},g)},hoverOnCenterLabel:function(){var d=this.chart.components.dataset[0].config.lastCenterLabelConfig;(d.hoverColor||d.hoverAlpha)&&
this.attr({fill:R({FCcolor:{color:d.hoverColor||d.color,alpha:d.hoverAlpha||d.alpha}})})},hoverOffCenterLabel:function(){var d=this.chart.components.dataset[0].config.lastCenterLabelConfig;(d.hoverColor||d.hoverAlpha)&&this.attr({fill:R({FCcolor:{color:d.color,alpha:d.alpha}})})}},k.pie2d,{singletonPlaceValue:!1});k("doughnut3d",{friendlyName:"3D Doughnut Chart",defaultDatasetType:"Doughnut3D",creditLabel:D,applicableDSList:{Doughnut3D:!0},_configureManager:function(){var d=this.components.dataset[0],
a=d.config,g=d.components,d=g.Pie3DManager,g=g.data;d&&d.configure(a.pieSliceDepth,1===g.length,a.use3DLighting,!0)}},k.pie3d);k("mscolumn2d",{standaloneInit:!0,friendlyName:"Multi-series Column Chart",creditLabel:D,defaultDatasetType:"column",applicableDSList:{column:!0},eiMethods:{}},k.mscartesian);k("mscolumn3d",{standaloneInit:!0,defaultDatasetType:"column3d",friendlyName:"Multi-series 3D Column Chart",applicableDSList:{column3d:!0},defaultPlotShadow:1,fireGroupEvent:!0,is3D:!0,creditLabel:D,
defaultZeroPlaneHighlighted:!1},k.mscartesian3d,{showplotborder:0});k("msbar2d",{standaloneInit:!0,friendlyName:"Multi-series Bar Chart",isBar:!0,hasLegend:!0,creditLabel:D,defaultDatasetType:"bar2d",applicableDSList:{bar2d:!0}},k.msbarcartesian);k("msbar3d",{standaloneInit:!0,defaultSeriesType:"bar3d",friendlyName:"Multi-series 3D Bar Chart",fireGroupEvent:!0,defaultPlotShadow:1,is3D:!0,isBar:!0,hasLegend:!0,creditLabel:D,defaultZeroPlaneHighlighted:!1,defaultDatasetType:"bar3d",applicableDSList:{bar3d:!0}},
k.msbarcartesian3d,{showplotborder:0});k("msarea",{standaloneInit:!0,friendlyName:"Multi-series Area Chart",creditLabel:D,defaultDatasetType:"area",defaultPlotShadow:0,applicableDSList:{area:!0}},k.areabase);k("msline",{standaloneInit:!0,friendlyName:"Multi-series Line Chart",creditLabel:D,defaultDatasetType:"line",defaultPlotShadow:1,axisPaddingLeft:0,axisPaddingRight:0,applicableDSList:{line:!0}},k.areabase,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0});k("stackedarea2d",{friendlyName:"Stacked Area Chart",
showsum:0,creditLabel:D},k.msarea,{plotfillalpha:Qa,isstacked:1});k("stackedcolumn2d",{friendlyName:"Stacked Column Chart",creditLabel:D},k.mscolumn2d,{isstacked:!0});k("stackedcolumn3d",{friendlyName:"3D Stacked Column Chart",creditLabel:D},k.mscolumn3d,{showplotborder:0},k.stackedcolumn2d);k("stackedbar2d",{friendlyName:"Stacked Bar Chart",creditLabel:D},k.msbar2d,{maxbarheight:50},k.stackedcolumn2d);k("stackedbar3d",{friendlyName:"3D Stacked Bar Chart",creditLabel:D},k.msbar3d,{showplotborder:0},
k.stackedcolumn2d);k("marimekko",{standaloneInit:!0,friendlyName:"Marimekko Chart",isValueAbs:!0,distributedColumns:!0,stack100percent:!0,defaultDatasetType:"marimekko",applicableDSList:{marimekko:!0},isStacked:!0,showsum:1,creditLabel:D,_setAxisLimits:function(){var d=this.components,a=d.dataset,g=d.yAxis,d=d.xAxis,b,c=a.length,e,f=-Infinity,k=Infinity,r=Infinity,w=-Infinity,u,F,t={};u=this.config.categories;var h=[],m=function(d){f=Ba(f,d.max);k=Aa(k,d.min);w=Ba(w,d.xMax||-Infinity);r=Aa(r,d.xMin||
Infinity)};for(e=0;e<c;e++)b=a[e],(F=b.groupManager)?t[b.type]=F:h.push(b);for(F in t)a=t[F].getDataLimits(),m(a);c=h.length;for(e=0;e<c;e++)a=h[e].getDataLimits(),m(a);-Infinity===f&&(f=0);Infinity===k&&(k=0);g[0].setAxisConfig({isPercent:this.config.isstacked?this.config.stack100percent:0});g[0].setDataLimit(f,k);if(-Infinity!==w||Infinity!==r)d[0].config.xaxisrange={max:w,min:r},d[0].setDataLimit(w,r);g=t[F].getStackSumPercent();e=g.length;F=d[0].getCategoryLen();F>e&&u.splice(e,F-e);this._setCategories();
e=d[0].getLimit();r=e.min;w=e.max;u=r;F=w-r;for(e=0;e<g.length;e++)a=g[e],c=F*a/100,a=u+c/2,d[0].updateCategory(e,{x:a}),u+=c}},k.mscartesian,{isstacked:!0,showpercentvalues:0,usepercentdistribution:1,showsum:1});k("msstackedcolumn2d",{standaloneInit:!0,defaultDatasetType:"column",applicableDSList:{column:!0},friendlyName:"Multi-series Stacked Column Chart",_createDatasets:function(){var d=this.components,a=this.jsonData,g=a.dataset,b=g&&g.length||0,c,e,f,k=this.defaultDatasetType,r=this.applicableDSList,
w,u,F,t,h,m,p=a.lineset||[],q=this.config,v=q.dataSetMap,C=q.lineSetMap,D=v&&v.length,A=d.legend,n=[],B=[],x=0;F=0;var I,K=-1,J,y=this.config.catLen,z=d.xAxis[0],H,S,O=d.dataset;if(g||0!==p.length){this.config.categories=a.categories&&a.categories[0].category;e=d.dataset=[];for(a=0;a<b;a++){h=g[a];K++;if(h.dataset)for(S=!0,m=h.dataset&&h.dataset.length||0,n[a]=[],c=0;c<m;c++){if(F=h.dataset[c],w=(w=za(F.renderas,k))&&w.toLowerCase(),r[w]||(w=k),f=FusionCharts.get("component",["dataset",w]))t="datasetGroup_"+
w,u=FusionCharts.register("component",["datasetGroup",w]),w=d[t],u&&!w?(w=d[t]=new u,w.chart=this,w.init()):w&&v&&0!==v.length&&!I&&(w.init(),I=!0),v&&v[a]&&v[a][c]?(f=v[a][c],f.index=x,t=f.JSONData,u=t.data.length,t=F.data&&F.data.length||0,J=z.getCategoryLen(),H=y-J,u-=t,u=this._getDiff(u,t,H,J),t=u.diff,u=u.startIndex,0<t&&f.removeData(u,t,!1),f.JSONData=F,f.configure()):(f=new f,f.chart=this,f.index=x,f.init(F)),x++,n[a].push(f),e.push(f),w&&w.addDataSet(f,K,c)}else m=c=0,K--;h=v&&v[a]&&v[a].length;
if(h>m)for(F=c,h=h-m+c;F<h;F++)w=v[a][F],A.removeItem(w.legendItemId),wa.call(w)}if(D>b)for(F=a,h=D-b+a;F<h;F++)for(m=v[F].length,c=0;c<m;c++)w=v[F][c],A.removeItem(w.legendItemId),wa.call(w);q.dataSetMap=n;if(this.lineset){a=0;for(b=p.length;a<b;a++)g=p[a],f=FusionCharts.get("component",["dataset","line"]),f=new f,C&&C[a]?(f=C[a],f.index=x,t=f.JSONData,u=t.data.length,t=g.data&&g.data.length||0,u>t&&f.removeData(t,u-t,!1),f.JSONData=g,f.configure()):(f.chart=this,f.index=x,f.init(g)),B.push(f),e.push(f),
x++;p=C&&C.length;if(p>b)for(F=a,h=p-b+a;F<h;F++)w=C[F],A.removeItem(w.legendItemId),wa.call(w);q.lineSetMap=B}S?this.config.catLen=z.getCategoryLen():(d.dataset=O,this.setChartMessage())}else this.setChartMessage()},creditLabel:D},k.mscartesian,{isstacked:!0});k("mscombi2d",{friendlyName:"Multi-series Combination Chart",standaloneInit:!0,creditLabel:D,defaultDatasetType:"column",applicableDSList:{line:!0,area:!0,column:!0},_createDatasets:function(){var d=this.components,a=this.jsonData,g=a.dataset,
b=g&&g.length,c,e,f=this.defaultDatasetType,k=this.applicableDSList;c=this.components.legend;var r=d.xAxis[0],w,u,h,t,m,p=this.config.isstacked,q,v,C=[],D={},A=this.config,n=this.config.catLen,B=A.datasetMap||(A.datasetMap={line:[],area:[],column:[],column3d:[],scrollcolumn2d:[]}),x={line:[],area:[],column:[],column3d:[],scrollcolumn2d:[]};g||this.setChartMessage();this.config.categories=a.categories&&a.categories[0].category;a=d.dataset=[];c&&c.emptyItems();for(c=0;c<b;c++)if(m=g[c],t=m.parentyaxis||
"",u=(u=this.config.isdual&&"s"===t.toLowerCase()?"line"===this.defaultSecondaryDataset?this.sDefaultDatasetType:za(m.renderas,this.sDefaultDatasetType):za(m.renderas,f))&&u.toLowerCase(),k[u]||(u=f),h=FusionCharts.get("component",["dataset",u]))void 0===D[u]?D[u]=0:D[u]++,e="datasetGroup_"+u,t=FusionCharts.register("component",["datasetGroup",u]),(w=d[e])&&C.push(w),t&&!w&&(w=d[e]=new t,w.chart=this,w.init()),t=B[u],(e=t[0])?(delete e.legendItemId,w=r.getCategoryLen(),h=n-w,v=e.JSONData,q=v.data&&
v.data.length,v=m.data&&m.data.length||0,q-=v,h=this._getDiff(q,v,h,w),w=h.diff,h=h.startIndex,0<w&&e.removeData(h,w,!1),e.index=c,e.JSONData=m,e.configure(),t.splice(0,1)):(e=new h,e.chart=this,e.index=c,w&&(p?w.addDataSet(e,0,D[u]):w.addDataSet(e,D[u],0)),e.init(m)),x[u].push(e),a.push(e);for(g in B)if(t=B[g],f=t[0]&&t[0].groupManager,b=t.length,k=void 0===D[g]?0:D[g]+1,b)for(p&&f&&f.removeDataSet(0,k,b),d=0;d<b;d++)f&&!p&&f.removeDataSet(k,0,1),"column"===t[d].type&&!0===this.is3D?(t[d].visible=
!1,t[d].draw()):wa.call(t[d]);A.datasetMap=x;this.config.catLen=r.getCategoryLen()}},k.areabase);k("mscombi3d",{standaloneInit:!0,friendlyName:"Multi-series 3D Combination Chart",defaultDatasetType:"column3d",is3D:!0,creditLabel:D,defaultPlotShadow:1,applicableDSList:{column3d:!0,line:!0,area:!0},_createDatasets:k.mscombi2d},k.mscartesian3d,{showplotborder:0},k.areabase);k("mscolumnline3d",{friendlyName:"Multi-series Column and Line Chart",is3D:!0,creditLabel:D,defaultPlotShadow:1,applicableDSList:{column3d:!0,
line:!0}},k.mscombi3d,{use3dlineshift:1,showplotborder:0},k.msarea);k("stackedcolumn2dline",{friendlyName:"Stacked Column and Line Chart",defaultDatasetType:"column",creditLabel:D,applicableDSList:{line:!0,column:!0}},k.mscombi2d,{isstacked:!0,stack100percent:0},k.msarea);k("stackedcolumn3dline",{friendlyName:"Stacked 3D Column and Line Chart",is3D:!0,creditLabel:D,applicableDSList:{column3d:!0,line:!0}},k.mscombi3d,{use3dlineshift:1,isstacked:!0,stack100percent:0,showplotborder:0},k.msarea);k("mscombidy2d",
{standaloneInit:!0,friendlyName:"Multi-series Dual Y-Axis Combination Chart",defaultDatasetType:"column",sDefaultDatasetType:"line",_createDatasets:k.mscombi2d,creditLabel:D,applicableDSList:{column:!0,line:!0,area:!0}},k.msdybasecartesian,{isdual:1},k.msarea);k("mscolumn3dlinedy",{standaloneInit:!0,friendlyName:"Multi-series 3D Column and Line Chart",defaultDatasetType:"column3d",sDefaultDatasetType:"line",is3D:!0,creditLabel:D,_createDatasets:k.mscombi2d,defaultPlotShadow:1,applicableDSList:{column3d:!0,
line:!0}},k.msdybasecartesian3d,{use3dlineshift:1,isdual:!0,showplotborder:0},k.msarea);k("stackedcolumn3dlinedy",{standaloneInit:!0,friendlyName:"Stacked 3D Column and Line Chart",is3D:!0,defaultDatasetType:"column3d",creditLabel:D,sDefaultDatasetType:"line",defaultSecondaryDataset:"line",_createDatasets:k.mscombi2d,applicableDSList:{column3d:!0,line:!0}},k.msdybasecartesian3d,{use3dlineshift:1,isdual:!0,isstacked:!0,showplotborder:0},k.msarea);k("msstackedcolumn2dlinedy",{standaloneInit:!0,friendlyName:"Multi-series Dual Y-Axis Stacked Column and Line Chart",
stack100percent:0,defaultDatasetType:"column",sDefaultDatasetType:"line",hasLineSet:!0,creditLabel:D,applicableDSList:{column:!0},lineset:!0,_createDatasets:k.msstackedcolumn2d},k.msdybasecartesian,{isdual:!0,haslineset:!0,isstacked:!0},k.msarea);k("scrollcolumn2d",{standaloneInit:!0,friendlyName:"Scrollable Multi-series Column Chart",tooltipConstraint:"plot",canvasborderthickness:1,creditLabel:D,defaultDatasetType:"scrollcolumn2d",applicableDSList:{scrollcolumn2d:!0},avgScrollPointWidth:40,hasScroll:!0,
defaultPlotShadow:1,_manageScrollerPosition:function(){var d=this.config,a;a=this._scrollBar.get;var g=this.components.scrollBar,b;a=a()[0];g.setConfiguaration(a.conf);a=d.scrollEnabled;b=g.getLogicalSpace();this._allocateSpace({bottom:d.shift=!1===a?0:b.height+g.conf.padding})},_resetViewPortConfig:function(){this.config.viewPortConfig={scaleX:1,scaleY:1,x:0,y:0}},updateManager:function(d){var a=this.config,g=this.config.viewPortConfig,b=g.scaleX,c=this.graphics.datasetGroup,e=this.graphics.datalabelsGroup,
f=this.graphics.trackerGroup,h=a.canvasWidth*(b-1)*d,r=this.components.xAxis[0],w=this.graphics.sumLabelsLayer;g.x=h/b;g="t"+-qa(h)+",0";a.lastScrollPosition=d;c.attr({transform:g});e.attr({transform:g});f.attr({transform:g});w&&w.attr({transform:g});d=r.getAxisConfig("animateAxis");a=r.getAxisConfig("drawAxisName");r.setAxisConfig({animateAxis:!1,drawAxisName:!1});r.draw();r.setAxisConfig({animateAxis:d,drawAxisName:a})},_createToolBox:function(){var d=this.components,a=this._scrollBar,g=a.get,b=
a.add,c,e,f=d.scrollBar;k.mscartesian._createToolBox.call(this);c=d.tb;e=(d.toolBoxAPI||c.getAPIInstances(c.ALIGNMENT_HORIZONTAL)).Scroller;a.clear();b({isHorizontal:!0},{scroll:function(d){return function(){d.updateManager.apply(d,arguments)}}(this)});a=g()[0];f||(d.scrollBar=(new e(a.conf,c.idCount,c.pId)).attachEventHandlers(a.handler))},_setAxisScale:function(){var d=this.config,a=this.components.xAxis[0].getCategoryLen(),g=this.jsonData,c=d.scrollOptions||(d.scrollOptions={}),f=this.components.dataset,
e=f.length,h,k,r=0,w;w=d.canvasWidth;var u=d.scrollToEnd,m=d.lastScrollPosition,g=ia(g.chart.numvisibleplot,b(d.width/this.avgScrollPointWidth));for(k=0;k<e;k++)h=f[k],"column"===h.type&&r++;this.config.isstacked&&(r=1);a*=r||1;2<=g&&g<a?(d.viewPortConfig.scaleX=a/=g,w=w*(a-1)*(void 0!==m?m:u?1:0),d.viewPortConfig.x=w/a,c.vxLength=g/e,d.scrollEnabled=!0):d.scrollEnabled=!1},drawScrollBar:function(){var d=this,a=d.config,g=a.viewPortConfig,c=d.components,b=d.graphics,e=c.paper,f=c.xAxis[0],h=f.config,
r=f.config.axisRange,k=a.scrollOptions||(a.scrollOptions={}),u=r.max,m=r.min,t=k.vxLength,p=c.scrollBar,r=p.node,q=a.scrollToEnd,v=a.lastScrollPosition,C=g.scaleX,D,A,B,n,x;n=void 0!==v?v:q?1:0;g=a.canvasLeft;q=a.canvasTop;v=a.canvasHeight;D=a.canvasWidth;c=c.canvas.config;A=c.canvasBorderWidth;B=h.showAxisLine?h.axisLineThickness||0:0;x=ia(A,h.lineStartExtension);h=ia(A,h.lineEndExtension);k.viewPortMin=m;k.viewPortMax=u;C=k.scrollRatio=1/C;t=k.windowedCanvasWidth=f.getAxisPosition(t);f=k.fullCanvasWidth=
f.getAxisPosition(u-m)-t;k=b.scrollBarParentGroup;k||(k=b.scrollBarParentGroup=e.group("scrollBarParentGroup",b.parentGroup).insertBefore(b.datalabelsGroup));!1!==a.scrollEnabled?(p.draw(g-x,q+v+A+B-2,{width:D+x+h,scrollRatio:C,roundEdges:c.isRoundEdges,fullCanvasWidth:f,windowedCanvasWidth:t,scrollPosition:n,parentLayer:k}),!r&&function(){var a;oa.eve.on("raphael.scroll.start."+p.node.id,function(g){a=g;ha.raiseEvent("scrollstart",{scrollPosition:g},d.chartInstance)});oa.eve.on("raphael.scroll.end."+
p.node.id,function(g){ha.raiseEvent("scrollend",{prevScrollPosition:a,scrollPosition:g},d.chartInstance)})}()):p&&p.node&&p.node.hide()},_drawDataset:function(){this._setClipping();k.mscartesian._drawDataset.call(this)},_setClipping:function(){var a=this.config,c=this.graphics.datasetGroup,g=this.graphics.datalabelsGroup,b=this.graphics.trackerGroup,f=a.viewPortConfig,e=this.graphics.sumLabelsLayer,k=f.scaleX,h=this.get("config","animationObj"),r=h.duration,m=h.dummyObj,u=h.animObj,h=h.animType,f=
f.x,a=a.height,F=this.components.canvas.config.clip["clip-canvas"],F=F&&F.slice(0)||[];this.config.clipSet?(c.animateWith(m,u,{"clip-rect":F},r,h),g.animateWith(m,u,{"clip-rect":F},r,h),b.attr({"clip-rect":F}),F[3]=a,F[1]=0,e&&e.animateWith(m,u,{"clip-rect":F},r,h)):(c.attr({"clip-rect":F}),g.attr({"clip-rect":F}),b.attr({"clip-rect":F}),F[3]=a,F[1]=0,e&&e.attr({"clip-rect":F}));c.attr({transform:"T"+-(f*k)+",0"});g.attr({transform:"T"+-(f*k)+",0"});b.attr({transform:"T"+-(f*k)+",0"});e&&e.attr({transform:"T"+
-(f*k)+",0"});this.config.clipSet=!0},configure:function(){var a=this.jsonData.chart,c;k.mscolumn2d.configure.call(this);c=this.config;c.scrollToEnd=ia(a.scrolltoend,0);c.lastScrollPosition=void 0}},k.scrollbase);k("scrollarea2d",{friendlyName:"Scrollable Multi-series Area Chart",tooltipConstraint:"plot",canvasborderthickness:1,creditLabel:D,hasScroll:!0,defaultDatasetType:"scrollarea2d",applicableDSList:{scrollarea2d:!0},avgScrollPointWidth:75,defaultPlotShadow:0,_setAxisScale:function(){var a=this.config,
c=this.components.xAxis[0].getCategoryLen(),g=this.jsonData,f=a.scrollOptions||(a.scrollOptions={}),l;l=a.lastScrollPosition;var e=a.scrollToEnd,h=a.canvasWidth,g=ia(g.chart.numvisibleplot,b(a.width/this.avgScrollPointWidth));2<=g&&g<c?(a.viewPortConfig.scaleX=c/=g,l=h*(c-1)*(void 0!==l?l:e?1:0),a.viewPortConfig.x=l/c,f.vxLength=g,a.scrollEnabled=!0):a.scrollEnabled=!1}},k.scrollcolumn2d,{},k.areabase);k("scrollline2d",{friendlyName:"Scrollable Multi-series Line Chart",tooltipConstraint:"plot",canvasborderthickness:1,
defaultDatasetType:"line",creditLabel:D,avgScrollPointWidth:75,defaultPlotShadow:1},k.scrollarea2d,{zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0},k.areabase);k("scrollstackedcolumn2d",{friendlyName:"Scrollable Stacked Column Chart",canvasborderthickness:1,tooltipConstraint:"plot",avgScrollPointWidth:75,creditLabel:D},k.scrollcolumn2d,{},k.stackedcolumn2d);k("scrollcombi2d",{friendlyName:"Scrollable Combination Chart",tooltipConstraint:"plot",hasScroll:!0,canvasborderthickness:1,avgScrollPointWidth:40,
applicableDSList:{area:!0,line:!0,column:!0},creditLabel:D,_createDatasets:k.mscombi2d},k.scrollcolumn2d,{},k.msarea);k("scrollcombidy2d",{friendlyName:"Scrollable Dual Y-Axis Combination Chart",tooltipConstraint:"plot",canvasborderthickness:1,avgScrollPointWidth:40,hasScroll:!0,_drawDataset:k.scrollcolumn2d,updateManager:k.scrollcolumn2d,_setAxisScale:k.scrollcolumn2d,_createToolBox:k.scrollcolumn2d,_scrollBar:k.scrollcolumn2d,_manageScrollerPosition:k.scrollcolumn2d,drawScrollBar:k.scrollcolumn2d,
_setClipping:k.scrollcolumn2d,creditLabel:D,configure:k.scrollcolumn2d},k.mscombidy2d,{isdual:!0},k.areabase);k("scatter",{friendlyName:"Scatter Chart",isXY:!0,standaloneInit:!0,hasLegend:!0,defaultZeroPlaneHighlighted:!1,creditLabel:D,defaultDatasetType:"Scatter",applicableDSList:{Scatter:!0}},k.scatterBase);Ua(U.eventList,{zoomedOut:"FC_ZoomedOut"});k("bubble",{friendlyName:"Bubble Chart",standaloneInit:!0,defaultDatasetType:"bubble",creditLabel:D,applicableDSList:{bubble:!0},getDataLimits:function(){var a=
this.components.dataset,c,g,b,f=-Infinity,e=Infinity;c=0;for(b=a.length;c<b;c++)g=a[c],g=g.getDataLimits(),f=Ba(f,g.zMax||-Infinity),e=Aa(e,g.zMin||Infinity);f=-Infinity===f?0:f;e=Infinity===e?0:e;return{zMax:f,zMin:e}}},k.scatter);oa._availableAnimAttrs&&oa._availableAnimAttrs.cx&&(oa._availableAnimAttrs.innerR=oa._availableAnimAttrs.depth=oa._availableAnimAttrs.radiusYFactor=oa._availableAnimAttrs.start=oa._availableAnimAttrs.end=oa._availableAnimAttrs.cx);la.prototype={configure:function(a,c,g,
b){var f=this.linkedItems.chart,e=f.get("components","paper"),f=f.get("graphics","datasetGroup");"object"===typeof a&&(a=a.depth,c=a.hasOnePoint,g=a.use3DLighting,b=a.isDoughnut);this.renderer||(this.renderer=e);this.hasOnePoint=c;this.use3DLighting=g;this.isDoughnut=b;this.depth=a;!this.bottomBorderGroup&&(this.bottomBorderGroup=e.group("bottom-border",f));this.bottomBorderGroup.attr({transform:"t0,"+a});!this.slicingWallsBackGroup&&(this.slicingWallsBackGroup=e.group("slicingWalls-back-Side",f));
!this.slicingWallsFrontGroup&&(this.slicingWallsFrontGroup=e.group("slicingWalls-front-Side",f));!this.topGroup&&(this.topGroup=e.group("top-Side",f));!this.pointElemStore&&(this.pointElemStore=[]);!this.slicingWallsArr&&(this.slicingWallsArr=[]);this.moveCmdArr=["M"];this.lineCmdArr=["L"];this.closeCmdArr=["Z"];this.colorObjs=[]},getArcPath:function(a,c,b,f,l,e,h,k,r,m){return b==l&&f==e?[]:["A",h,k,0,m,r,l,e]},_parseSliceColor:function(a,c,b){var f,l,e,h,k,r,m,u,F,t,q,v,D,A,B;B=3;var n=(f=this.use3DLighting)?
Z:X,K=b.radiusYFactor,G=b.cx,P=b.cy,aa=b.r,N=aa*K,fa=b.innerR||0,sb=G+aa,J=G-aa,y=G+fa,z=G-fa;c=c||100;b=c/2;n[a]&&n[a][c]?n=n[a][c]:(n[a]||(n[a]={}),n[a][c]||(n[a][c]={}),n=n[a][c],f?(f=C(a,80),l=C(a,75),r=p(a,85),m=p(a,70),u=p(a,40),F=p(a,50),p(a,30),t=p(a,65),C(a,85),e=C(a,69),h=C(a,75),k=C(a,95)):(B=10,f=C(a,90),l=C(a,87),r=p(a,93),m=p(a,87),u=p(a,80),t=F=p(a,85),p(a,80),k=C(a,85),e=C(a,75),h=C(a,80)),q=l+x+r+x+m+x+r+x+l,D=c+x+c+x+c+x+c+x+c,v=l+x+a+x+r+x+a+x+l,A=b+x+b+x+b+x+b+x+b,u=l+x+a+x+u+
x+a+x+l,e=h+x+r+x+F+x+r+x+e,h="FFFFFF"+x+"FFFFFF"+x+"FFFFFF"+x+"FFFFFF"+x+"FFFFFF",B=0+x+b/B+x+c/B+x+b/B+x+0,n.top=ra?{FCcolor:{gradientUnits:"userSpaceOnUse",radialGradient:!0,color:t+x+k,alpha:c+x+c,ratio:"0,100"}}:{FCcolor:{gradientUnits:"objectBoundingBox",color:m+x+m+x+r+x+l,alpha:c+x+c+x+c+x+c,angle:-72,ratio:"0,8,15,77"}},n.frontOuter={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:e,alpha:D,angle:0,ratio:"0,20,15,15,50"}},n.backOuter={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,
y2:0,color:u,alpha:A,angle:0,ratio:"0,62,8,8,22"}},n.frontInner={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:v,alpha:A,angle:0,ratio:"0,25,5,5,65"}},n.backInner={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:q,alpha:D,angle:0,ratio:"0,62,8,8,22"}},n.topBorder={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:h,alpha:B,angle:0,ratio:"0,20,15,15,50"}},n.topInnerBorder={FCcolor:{gradientUnits:"userSpaceOnUse",y1:0,y2:0,color:h,alpha:B,angle:0,ratio:"0,50,15,15,20"}},n.bottom=
R(I(a,b)),n.startSlice=R(I(f,c)),n.endSlice=R(I(f,c)));if(n.cx!==G||n.cy!==P||n.rx!==aa||n.radiusYFactor!==K||n.innerRx!==fa)ra&&(n.top.FCcolor.cx=G,n.top.FCcolor.cy=P,n.top.FCcolor.r=aa,n.top.FCcolor.fx=G-.3*aa,n.top.FCcolor.fy=P+1.2*N),n.topBorder.FCcolor.x1=n.backOuter.FCcolor.x1=n.frontOuter.FCcolor.x1=J,n.topBorder.FCcolor.x2=n.backOuter.FCcolor.x2=n.frontOuter.FCcolor.x2=sb,n.topInnerBorder.FCcolor.x1=n.backInner.FCcolor.x1=n.frontInner.FCcolor.x1=z,n.topInnerBorder.FCcolor.x2=n.backInner.FCcolor.x2=
n.frontInner.FCcolor.x2=y,n.cx=G,n.cy=P,n.rx=aa,n.radiusYFactor=K,n.innerRx=fa;return n},rotate:function(a){var c=this.pointElemStore,b=0,f=c.length,l;if(!this.hasOnePoint){for(;b<f;b+=1)l=c[b],l=l._confObject,l.start+=a,l.end+=a,this._setSliceShape(l);this.refreshDrawing()}},removeSlice:function(a){var c=this.pointElemStore,b=a._confObject.elements,f=this.slicingWallsArr,l;l=c.length;var e;for(--l;0<=l;--l)e=c[l],e===a&&c.splice(l,1);l=f.length;for(--l;0<=l;--l)c=f[l],c!==b.startSlice&&c!==b.frontOuter1&&
c!==b.frontOuter&&c!==b.backInner&&c!==b.endSlice||f.splice(l,1);a.hide&&a.hide();this._slicePool||(this._slicePool=[]);this._slicePool.push(a);this.refreshDrawing()},useSliceFromPool:function(){var a=this._slicePool||(this._slicePool=[]),c=this.slicingWallsArr,b=!1;a.length&&(b=a.shift(),this.pointElemStore.push(b),b.show(),a=b._confObject.elements,c.push(a.startSlice,a.frontOuter1,a.frontOuter),a.backInner&&c.push(a.backInner),c.push(a.endSlice));return b},refreshDrawing:function(){var a=function(a,
d){return a._conf.index-d._conf.index||a._conf.cIndex-d._conf.cIndex||a._conf.isStart-d._conf.isStart||a._conf.si-d._conf.si};return function(){var c=this.slicingWallsArr,b=0,h,l=c.length,e,k,p,r,w=this.slicingWallsFrontGroup,u=this.slicingWallsBackGroup;c.sort(a);a:{var F=c[0]&&c[0]._conf.index,t,q;r=F<=m;e=1;for(h=c.length;e<h;e+=1)if(q=c[e]._conf.index,t=q<=m,t!=r||q<F)break a;e=0}for(;b<l;b+=1,e+=1)e===l&&(e=0),h=c[e],r=h._conf.index,r<f?w.appendChild(h):r<=m?(k?h.insertBefore(k):w.appendChild(h),
k=h):r<=v?(p?h.insertBefore(p):u.appendChild(h),p=h):u.appendChild(h)}}(),_setSliceShape:function(a,c){var b=this.getArcPath,h=a.start,l=a.end,e=fa(h),k=fa(l),p,r,w,u,F,t,n,C,D,A,B,x,K,I,P,G,Z,aa=this.isDoughnut,N=a.radiusYFactor,J=a.cx,y=a.cy,z=a.r,H=z*N,S=z+(ra?-1:2),O=H+(ra?-1:2),W=a.innerR||0,E=W*N,T=this.depth,Q=T+y,X=J+z,R=J-z,ga=J+W,U=J-W,ha=y-H,ja=["M",U,ha,"L",U,Q+H,"Z"],N=a.elements,M,ea,V,ka,ia,da="path",ma=(e+k)/2,la=e>k;r=pa(e);w=va(e);u=pa(k);F=va(k);t=J+z*r;n=y+H*w;C=J+S*r;D=y+O*w;
M=n+T;ea=J+z*u;V=y+H*F;A=J+S*u;B=y+O*F;ka=V+T;aa?(x=J+W*r,K=y+E*w,G=K+T,I=J+W*u,P=y+E*F,Z=P+T,a.startSlice=["M",t,n,"L",t,M,x,G,x,K,"Z"],a.endSlice=["M",ea,V,"L",ea,ka,I,Z,I,P,"Z"]):(a.startSlice=["M",t,n,"L",t,M,J,Q,J,y,"Z"],a.endSlice=["M",ea,V,"L",ea,ka,J,Q,J,y,"Z"]);ra?(p=(e>k?q:0)+k-e,a.clipTopPath=aa?[["M",t,n,"A",z,H,0,p>m?1:0,1,ea,V,"L",I,P,"A",W,E,0,p>m?1:0,0,x,K,"Z"]]:[["M",t,n,"A",z,H,0,p>m?1:0,1,ea,V,"L",J,y,"Z"]],a.clipOuterFrontPath1=[ja],a.clipTopBorderPath=[["M",C,D,"A",S,O,0,p>m?
1:0,1,A,B,"L",ea,V,ea,V+1,"A",z,H,0,p>m?1:0,0,t,n+1,"L",t,n,"Z"]],h!=l?e>k?e<m?(a.clipOuterFrontPath=[["M",X,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,X,y+T,"Z"]],a.clipOuterFrontPath1=[["M",R,y,"A",z,H,0,0,0,t,n,"v",T,"A",z,H,0,0,1,R,y+T,"Z"]],a.clipOuterBackPath=[["M",X,y,"A",z,H,0,1,0,R,y,"v",T,"A",z,H,0,1,1,X,y+T,"Z"]],aa&&(a.clipInnerBackPath=[["M",ga,y,"A",W,E,0,1,0,U,y,"v",T,"A",W,E,0,1,1,ga,y+T,"Z"]],a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,ga,y+T,"Z","M",U,y,"A",
W,E,0,0,0,x,K,"v",T,"A",W,E,0,0,1,U,y+T,"Z"]])):k>m?(a.clipOuterFrontPath=[["M",X,y,"A",z,H,0,1,1,R,y,"v",T,"A",z,H,0,1,0,X,y+T,"Z"]],a.clipOuterBackPath=[["M",R,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,R,y+T,"Z","M",X,y,"A",z,H,0,0,0,t,n,"v",T,"A",z,H,0,0,1,X,y+T,"Z"]],aa&&(a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,1,1,U,y,"v",T,"A",W,E,0,1,0,ga,y+T,"Z"]],a.clipInnerBackPath=[["M",U,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,U,y+T,"Z","M",ga,y,"A",W,E,0,0,0,x,K,"v",T,"A",W,E,0,0,1,ga,y+T,"Z"]])):(a.clipOuterFrontPath=
[["M",X,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,X,y+T,"Z"]],a.clipOuterBackPath=[["M",t,n,"A",z,H,0,0,1,X,y,"v",T,"A",z,H,0,0,0,t,M,"Z"]],aa&&(a.clipInnerFrontPath=[["M",ga,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,ga,y+T,"Z"]],a.clipInnerBackPath=[["M",x,K,"A",W,E,0,0,1,ga,y,"v",T,"A",W,E,0,0,0,x,G,"Z"]])):e<m?k>m?(a.clipOuterFrontPath=[["M",t,n,"A",z,H,0,0,1,R,y,"v",T,"A",z,H,0,0,0,t,M,"Z"]],a.clipOuterBackPath=[["M",R,y,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,R,y+T,"Z"]],aa&&(a.clipInnerFrontPath=
[["M",x,K,"A",W,E,0,0,1,U,y,"v",T,"A",W,E,0,0,0,x,G,"Z"]],a.clipInnerBackPath=[["M",U,y,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,U,y+T,"Z"]])):(a.clipOuterFrontPath=[["M",t,n,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,t,M,"Z"]],a.clipOuterBackPath=[ja],aa&&(a.clipInnerFrontPath=[["M",x,K,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,x,G,"Z"]],a.clipInnerBackPath=[ja])):(a.clipOuterFrontPath=[ja],a.clipOuterBackPath=[["M",t,n,"A",z,H,0,0,1,ea,V,"v",T,"A",z,H,0,0,0,t,M,"Z"]],aa&&(a.clipInnerFrontPath=[ja],a.clipInnerBackPath=
[["M",x,K,"A",W,E,0,0,1,I,P,"v",T,"A",W,E,0,0,0,x,G,"Z"]])):a.clipOuterFrontPath=a.clipOuterBackPath=a.clipInnerBackPath=a.clipInnerFrontPath=[ja],da="litepath",a.clipBottomBorderPath=a.clipTopPath,a.startSlice=[a.startSlice],a.endSlice=[a.endSlice]):(S=this.moveCmdArr,O=this.lineCmdArr,r=this.closeCmdArr,T=[J,y],w=[R,y],ha=[J,ha],u=[X,y],F=[J,y+H],ja=[R,Q],ia=[X,Q],C=[U,y],D=[ga,y],A=[U,Q],B=[ga,Q],a.clipOuterFrontPath1=[],h!=l?(e>k?e<m?(h=b(J,y,t,n,R,y,z,H,1,0),l=b(J,y,R,y,X,y,z,H,1,0),V=b(J,y,
X,y,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat(w,l,O,ia,b(J,Q,X,Q,R,Q,z,H,0,0),r),a.clipOuterFrontPath1=S.concat([t,n],h,O,ja,b(J,Q,R,Q,t,M,z,H,0,0),r),a.clipOuterFrontPath=S.concat(u,V,O,[ea,ka],b(J,Q,ea,ka,X,Q,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l,V),aa?(z=b(J,y,I,P,ga,y,W,E,0,0),H=b(J,y,ga,y,U,y,W,E,0,0),K=b(J,y,U,y,x,K,W,E,0,0),a.clipInnerBackPath=S.concat(D,H,O,A,b(J,Q,U,Q,ga,Q,W,E,1,0),r),a.clipInnerFrontPath=S.concat(C,K,O,[x,G],b(J,Q,x,G,U,Q,W,E,1,0),r,S,[I,P],z,O,B,b(J,Q,ga,
Q,I,Z,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,K,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H,K)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):k>m?(h=b(J,y,t,n,X,y,z,H,1,0),l=b(J,y,X,y,R,y,z,H,1,0),V=b(J,y,R,y,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat(u,l,O,ja,b(J,Q,R,Q,X,Q,z,H,0,0),r),a.clipOuterBackPath=S.concat([t,n],h,O,ia,b(J,Q,X,Q,t,M,z,H,0,0),r,S,w,V,O,[ea,ka],b(J,Q,ea,ka,R,Q,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l,V),aa?(z=b(J,y,I,
P,U,y,W,E,0,0),H=b(J,y,U,y,ga,y,W,E,0,0),K=b(J,y,ga,y,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat(C,H,O,B,b(J,Q,ga,Q,U,Q,W,E,1,0),r),a.clipInnerBackPath=S.concat(D,K,O,[x,G],b(J,Q,x,G,ga,Q,W,E,1,0),r,S,[I,P],z,O,A,b(J,Q,U,Q,I,Z,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,K,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H,K)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,X,y,z,H,1,0),l=b(J,y,X,y,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat(u,l,O,[ea,
ka],b(J,Q,ea,ka,X,Q,z,H,0,0),r),a.clipOuterBackPath=S.concat([t,n],h,O,ia,b(J,Q,X,Q,t,M,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l),aa?(z=b(J,y,I,P,ga,y,W,E,0,0),H=b(J,y,ga,y,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat([I,P],z,O,B,b(J,Q,ga,Q,I,Z,W,E,1,0),r),a.clipInnerBackPath=S.concat(D,H,O,[x,G],b(J,Q,x,G,ga,Q,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z,H)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):e<
m?k>m?(h=b(J,y,t,n,R,y,z,H,1,0),l=b(J,y,R,y,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat(w,l,O,[ea,ka],b(J,Q,ea,ka,R,Q,z,H,0,0),r),a.clipOuterFrontPath=S.concat([t,n],h,O,ja,b(J,Q,R,Q,t,M,z,H,0,0),r),a.clipTopBorderPath=S.concat([t,n],h,l),aa?(z=b(J,y,I,P,U,y,W,E,0,0),H=b(J,y,U,y,x,K,W,E,0,0),a.clipInnerBackPath=S.concat([I,P],z,O,A,b(J,Q,U,Q,I,Z,W,E,1,0),r),a.clipInnerFrontPath=S.concat(C,H,O,[x,G],b(J,Q,x,G,U,Q,W,E,1,0),r),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,H,r),a.clipTopBorderPath=
a.clipTopBorderPath.concat(S,[I,P],z,H)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,ea,V,z,H,1,0),a.clipOuterBackPath=S.concat([t,n]),a.clipTopBorderPath=a.clipOuterBackPath.concat(h),a.clipOuterFrontPath=a.clipTopBorderPath.concat(O,[ea,ka],b(J,Q,ea,ka,t,M,z,H,0,0),r),aa?(z=b(J,y,I,P,x,K,W,E,0,0),a.clipInnerBackPath=S.concat([I,P]),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(S,[I,P],z),a.clipInnerFrontPath=a.clipInnerBackPath.concat(z,
O,[x,G],b(J,Q,x,G,I,Z,W,E,1,0),r)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)):(h=b(J,y,t,n,ea,V,z,H,1,0),a.clipOuterFrontPath=S.concat([t,n]),a.clipTopBorderPath=a.clipOuterFrontPath.concat(h),a.clipOuterBackPath=a.clipTopBorderPath.concat(O,[ea,ka],b(J,Q,ea,ka,t,M,z,H,0,0),r),aa?(z=b(J,y,I,P,x,K,W,E,0,0),a.clipInnerFrontPath=S.concat([I,P]),a.clipTopPath=a.clipTopBorderPath.concat(O,[I,P],z,r),a.clipTopBorderPath=a.clipTopBorderPath.concat(a.clipInnerFrontPath,z),a.clipInnerBackPath=a.clipInnerFrontPath.concat(z,
O,[x,G],b(J,Q,x,G,I,Z,W,E,1,0),r)):a.clipTopPath=a.clipTopBorderPath.concat(O,T,r)),h=S.concat(w,O,u),z=S.concat(ha,O,F),a.clipTopPath=a.clipTopPath.concat(h,z),a.clipOuterFrontPath=a.clipOuterFrontPath.concat(h),a.clipOuterFrontPath1=a.clipOuterFrontPath1.concat(h),a.clipOuterBackPath=a.clipOuterBackPath.concat(h),aa&&(z=S.concat(C,O,D),a.clipInnerFrontPath=a.clipInnerFrontPath.concat(z),a.clipInnerBackPath=a.clipInnerBackPath.concat(z))):(a.clipTopPath=a.clipOuterFrontPath=a.clipOuterBackPath=[],
aa&&(a.clipInnerFrontPath=a.clipInnerBackPath=[])),a.clipBottomBorderPath=a.clipTopBorderPath);c||(N.startSlice._conf.index=e,N.endSlice._conf.index=k,N.backOuter._conf.index=x=la&&(e<=v||k>v)||e<=v&&k>v?v:e>m?e:k,N.frontOuter._conf.index=b=k<=f?k:e>k||e<=f?f:e,N.frontOuter1._conf.index=e,N.frontOuter1._conf.cIndex=m,e>k?(N.backOuter._conf.cIndex=e<v?v:q,N.startSlice._conf.cIndex=e<m?(e+m)/2:(e+q)/2,N.endSlice._conf.cIndex=N.frontOuter._conf.cIndex=0):N.backOuter._conf.cIndex=N.startSlice._conf.cIndex=
N.endSlice._conf.cIndex=N.frontOuter._conf.cIndex=ma,p>m?N.frontOuter1.show().attr(da,a.clipOuterFrontPath1):N.frontOuter1.hide(),a.thisElement._attr(da,a.clipTopPath),N.bottom.attr(da,a.clipTopPath),N.bottomBorder.attr(da,a.clipBottomBorderPath),N.topBorder&&N.topBorder.attr(da,a.clipTopBorderPath),N.frontOuter.attr(da,a.clipOuterFrontPath),N.backOuter.attr(da,a.clipOuterBackPath),aa&&(N.backInner.attr(da,a.clipInnerBackPath),N.frontInner.attr(da,a.clipInnerFrontPath),N.backInner._conf.index=x,N.frontInner._conf.index=
b,e>k?(N.backInner._conf.cIndex=q,N.frontInner._conf.cIndex=0):N.backInner._conf.cIndex=N.frontInner._conf.cIndex=ma),this.hasOnePoint?(N.startSlice.hide(),N.endSlice.hide()):(N.startSlice.attr(da,a.startSlice).show(),N.endSlice.attr(da,a.endSlice).show()))},_setSliceCosmetics:function(a){var b=a.thisElement,c=a.showBorderEffect,f=a.elements,h=I(a.borderColor,ia(a.borderAlpha,a.alpha)),e=a.borderWidth,k;a.color&&(a=this._parseSliceColor(a.color,a.alpha,a),ra?(k={fill:R(a.top),"stroke-width":0},c?
f.topBorder.show().attr({fill:R(a.topBorder),"stroke-width":0}):(f.topBorder.hide(),k.stroke=h,k["stroke-width"]=e),b._attr(k)):(b._attr({fill:R(a.top),"stroke-width":0}),f.topBorder.attr({stroke:h,"stroke-width":e})),f.bottom.attr({fill:R(a.bottom)}),f.bottomBorder.attr({stroke:h,"stroke-width":e}),f.frontOuter.attr({fill:R(a.frontOuter)}),f.frontOuter1.attr({fill:R(a.frontOuter)}),f.backOuter.attr({fill:R(a.backOuter)}),f.startSlice.attr({fill:R(a.startSlice),stroke:h,"stroke-width":e}),f.endSlice.attr({fill:R(a.endSlice),
stroke:h,"stroke-width":e}),this.isDoughnut&&(f.frontInner.attr({fill:R(a.frontInner)}),f.backInner.attr({fill:R(a.backInner)})))},createSlice:function(){var a={stroke:!0,strokeWidth:!0,"stroke-width":!0,dashstyle:!0,"stroke-dasharray":!0,translateX:!0,translateY:!0,"stroke-opacity":!0,fill:!0,opacity:!0,transform:!0,ishot:!0,cursor:!0,start:!0,end:!0,color:!0,alpha:!0,borderColor:!0,borderAlpha:!0,borderWidth:!0,rolloverProps:!0,showBorderEffect:!0,positionIndex:!0,cx:!0,cy:!0,radiusYFactor:!0,r:!0,
innerR:!0},b=function(b,c){var e,f,g=this,h=g._confObject,k={},l=h.elements,r,m,w,n=h.Pie3DManager,p;"string"===typeof b&&void 0!==c&&null!==c&&(e=b,b={},b[e]=c);if(b&&"string"!==typeof b){for(e in b)if(f=b[e],a[e])if(h[e]=f,"ishot"===e||"cursor"===e||"transform"===e)k[e]=f,p=!0;else if("start"===e||"end"===e||"cx"===e||"cy"===e||"radiusYFactor"===e||"r"===e||"innerR"===e)m=!0;else{if("color"===e||"alpha"===e||"borderColor"===e||"borderAlpha"===e||"borderWidth"===e)w=!0}else g._attr(e,f);m&&(n._setSliceShape(h),
n.refreshDrawing());(w||m)&&n._setSliceCosmetics(h);if(p){for(r in l)l[r].attr(k);g._attr(k)}}else g=a[b]?h[b]:g._attr(b);return g},c=function(a,b){var c=this._confObject.elements,e;for(e in c)c[e].on(a,b);return this._on(a,b)},f=function(a,b,c){var e,d=this._confObject.elements,f=-1<Da.navigator.userAgent.toLowerCase().indexOf("android");for(e in d)f?"topBorder"!==e&&"frontOuter"!==e&&"startSlice"!==e&&"endSlice"!==e||d[e].drag(a,b,c):d[e].drag(a,b,c);return this._drag(a,b,c)},h=function(){var a=
this._confObject.elements,b;for(b in a)a[b].hide();return this._hide()},e=function(){var a=this._confObject.elements,b;for(b in a)a[b].show();return this._show()},k=function(){var a=this._confObject,b=a.elements,c;for(c in b)b[c].destroy();ra&&(a.clipTop.destroy(),a.clipOuterFront.destroy(),a.clipOuterBack.destroy(),a.clipOuterFront1&&a.clipOuterFront1.destroy(),a.clipInnerFront&&a.clipInnerFront.destroy(),a.clipInnerBack&&a.clipInnerBack.destroy());return this._destroy()},m=function(a){var b=this._confObject.elements,
c;for(c in b)b[c].tooltip(a);return this._tooltip(a)},r=function(a,b){var c=this._confObject.elements,e;if(void 0===b)return this._data(a);for(e in c)c[e].data(a,b);return this._data(a,b)},w=0;return function(){var a=this.renderer,d,t={elements:{},Pie3DManager:this},n=this.slicingWallsArr,p=t.elements,q=ra?"litepath":"path";d=a[q](this.topGroup);d._confObject=t;t.thisElement=d;d._destroy=d.destroy;d.destroy=k;d._show=d.show;d.show=e;d._hide=d.hide;d.hide=h;d._on=d.on;d.on=c;d._drag=d.drag;d.drag=
f;d._attr=d.attr;d.attr=b;d._tooltip=d.tooltip;d.tooltip=m;d._data=d.data;d.data=r;this.pointElemStore.push(d);p.topBorder=a[q](this.topGroup);p.bottom=a[q](this.bottomBorderGroup).attr({"stroke-width":0});p.bottomBorder=a[q](this.bottomBorderGroup);p.frontOuter=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});p.backOuter=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});p.startSlice=a[q](this.slicingWallsFrontGroup);p.endSlice=a[q](this.slicingWallsFrontGroup);p.frontOuter1=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0});
p.frontOuter._conf={si:w,isStart:.5};p.frontOuter1._conf={si:w,isStart:.5};p.startSlice._conf={si:w,isStart:0};p.endSlice._conf={si:w,isStart:1};p.backOuter._conf={si:w,isStart:.4};n.push(p.startSlice,p.frontOuter1,p.frontOuter,p.backOuter,p.endSlice);this.isDoughnut&&(p.frontInner=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0}),p.backInner=a[q](this.slicingWallsFrontGroup).attr({"stroke-width":0}),p.backInner._conf={si:w,isStart:.5},p.frontInner._conf={si:w,isStart:.4},n.push(p.frontInner,
p.backInner));w+=1;return d}}()};la.prototype.constructor=la},[3,2,2,"sr4"]]);FusionCharts.register("module",["private","modules.renderer.js-zoomline",function(){var ua=this,fa=ua.hcLib,na=fa.hashify,la=ua.window,ha=la.document,U=la.Image,Ha=la.MouseEvent,Da=/msie/i.test(la.navigator.userAgent)&&!la.opera,ma=fa.chartAPI,oa=fa.extend2,Ma=fa.addEvent,sa=fa.pluck,G=fa.pluckNumber,Qa=fa.getFirstColor,za=fa.graphics.convertColor,ia=fa.bindSelectionEvent,Ya=fa.parseUnsafeString,Ua=fa.componentDispose,R=
fa.Raphael,ra=fa.toRaphaelColor,Na=fa.hasTouch,Za=fa.plotEventHandler,eb=fa.getMouseCoordinate,Ia=!/fusioncharts\.com$/i.test(la.location.hostname),Ga="rgba(192,192,192,"+(Da?.002:1E-6)+")",wa=Math,Ea=wa.ceil,xa=wa.floor,va=wa.round,pa=wa.max,La=wa.min,qa=wa.cos,Aa=wa.sin,Ba=la.parseFloat,Fa=la.parseInt,ta;oa(fa.eventList,{zoomed:"FC_Zoomed",pinned:"FC_Pinned",resetzoomchart:"FC_ResetZoomChart"});ma("zoomline",{standaloneInit:!0,canvasborderthickness:1,defaultDatasetType:"zoomline",applicableDSList:{zoomline:!0},
friendlyName:"Zoomable and Panable Multi-series Line Chart",creditLabel:Ia,_drawAxis:function(){var a=this.components.yAxis||[],b,c;b=0;for(c=a.length;b<c;b++)a[b].draw()},_setCategories:function(){var a=this.config,b=this.jsonData,c=this.components.xAxis,h,m,f;m=a.cdmchar;var q=b.categories&&b.categories[0].category||[];if((a.cdm||"string"===typeof q)&&q.split){a=q.split(m);h=[];m=0;for(f=a.length;m<f;m+=1)h.push({label:a[m]});this.config.categories=b.categories[0].category=h}c[0].setAxisPadding(0,
0);c[0].setCategory(h||q)},_createDatasets:function(){var a,b,c,h,m,f,q,v,A;m={};var n=this.config;a=this.components;v=this.jsonData;var C=v.dataset,p=C&&C.length,I=n.cdmchar,K=n.cdm,B=this.defaultDatasetType,k=this.applicableDSList,n=this.components.legend.components.items||[];v=v.categories&&v.categories[0].category;C&&v||this.setChartMessage();this.config.categories=v;v=a.dataset||(a.dataset=[]);A=v.length;for(a=0;a<p;a++){q=C[a];if(K&&q.data&&q.data.split){f=q.data.split(I);h=[];b=0;for(c=f.length;b<
c;b++)h.push({value:f[b]});q.data=h}b=q.parentyaxis||"";b=(b=this.isDual&&"s"===b.toLowerCase()?sa(q.renderas,this.sDefaultDatasetType):sa(q.renderas,B))&&b.toLowerCase();k[b]||(b=B);if(c=FusionCharts.get("component",["dataset",b]))void 0===m[b]?m[b]=0:m[b]++,(b=v[a])?(c=(b.JSONData.data||[]).length,h=(q.data||[]).length,c>h&&b.removeData(h,c-h,!1),v[a].JSONData=q,v[a].configure(),v[a]._deleteGridImages&&v[a]._deleteGridImages()):(b=new c,v.push(b),b.chart=this,b.index=a,b.init(q))}if(A>p){m=A-p;
b=a;for(p=m+a;b<p;b++)Ua.call(v[b]);v.splice(a,m);n.splice(a,m)}},isWithinCanvas:function(a,b){var c=fa.getMouseCoordinate(b.get("linkedItems","container"),a),h=c.chartX,m=c.chartY,f=b.get("config"),q=f.canvasLeft,v=f.canvasTop,A=f.canvasLeft+f.canvasWidth,f=f.canvasHeight+f.canvasTop;c.insideCanvas=!1;c.originalEvent=a;h>q&&h<A&&m>v&&m<f&&(c.insideCanvas=!0);return c},highlightPoint:function(a,b,c,h,m,f){var q=this,v=q.config,A=q.components,n=q.graphics,C=A.paper,p=n.tracker,I=(A=A.dataset[m])&&
A.config;m=A&&I.zoomedRadius||0;var K=A&&I.hoverCosmetics,A=K&&K.fill,I=K&&K.borderColor,K=K&&K.borderThickness,B={},B=function(a){fa.plotEventHandler.call(this,q,a)},k=function(a){fa.plotEventHandler.call(this,q,a,"dataplotRollover")},x=function(a){fa.plotEventHandler.call(this,q,a,"dataplotRollout")};p||(p=n.tracker=C.circle(0,0,0,n.trackerGroup).attr({"clip-rect":v.canvasLeft+","+v.canvasTop+","+v.canvasWidth+","+v.canvasHeight}).click(B).trackTooltip(!0).hover(k,x));h&&p.data("eventArgs",{x:h.x,
y:h.y,tooltip:h.tooltip,link:h.link});v.lastHoveredPoint=h;B=Number(a)?{r:m,fill:A,stroke:I,"stroke-width":K}:{r:m,fill:Ga,stroke:Ga,"stroke-width":0};p.attr(B).tooltip(f).transform("t"+(b+v.canvasLeft)+","+(c+v.canvasTop));h&&q.fireMouseEvent("mouseover",p&&p.node,v.lastMouseEvent)},fireMouseEvent:function(a,b,c){var h;b&&a&&(c||(c={}),c.originalEvent&&(c=c.originalEvent),c.touches&&(c=c.touches[0]),b.dispatchEvent?(Ha?h=new Ha(a,{bubbles:!!c.bubbles,cancelable:!!c.cancelable,clientX:c.clientX||
c.pageX&&c.pageX-ha.body.scrollLeft-ha.documentElement.scrollLeft||0,clientY:c.clientY||c.pageY&&c.pageY-ha.body.scrollTop-ha.documentElement.scrollTop||0,screenX:c.screenX||0,screenY:c.screenY||0,pageX:c.pageX||0,pageY:c.pageY||0}):ha.createEvent&&(h=ha.createEvent("HTMLEvents"),h.initEvent(a,!!c.bubbles,!!c.cancelable)),h.eventName=a,h&&b.dispatchEvent(h)):ha.createEventObject&&b.fireEvent&&(h=ha.createEventObject(),h.eventType=a,h.eventName=a,b.fireEvent("on"+a,h)))},configure:function(){var a,
b=this.jsonData.chart||{},c=this.components.colorManager,h=c.getColor("canvasBorderColor"),m;b.animation=0;b.showvalues=0;ma.msline.configure.call(this);m=this.config;a=m.style;oa(m,{useRoundEdges:G(b.useroundedges,0),animation:!1,zoomType:"x",canvasPadding:G(b.canvaspadding,0),scrollColor:Qa(sa(b.scrollcolor,c.getColor("altHGridColor"))),scrollShowButtons:!!G(b.scrollshowbuttons,1),scrollHeight:G(b.scrollheight,16)||16,scrollBarFlat:G(b.flatscrollbars,0),allowPinMode:G(b.allowpinmode,1),skipOverlapPoints:G(b.skipoverlappoints,
1),showToolBarButtonTooltext:G(b.showtoolbarbuttontooltext,1),btnResetChartTooltext:sa(b.btnresetcharttooltext,"Reset Chart"),btnZoomOutTooltext:sa(b.btnzoomouttooltext,"Zoom out one level"),btnSwitchToZoomModeTooltext:sa(b.btnswitchtozoommodetooltext,"<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"),btnSwitchToPinModeTooltext:sa(b.btnswitchtopinmodetooltext,"<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"),
pinPaneFill:za(sa(b.pinpanebgcolor,h),G(b.pinpanebgalpha,15)),zoomPaneFill:za(sa(b.zoompanebgcolor,"#b9d5f1"),G(b.zoompanebgalpha,30)),zoomPaneStroke:za(sa(b.zoompanebordercolor,"#3399ff"),G(b.zoompaneborderalpha,80)),showPeakData:G(b.showpeakdata,0),maxPeakDataLimit:G(b.maxpeakdatalimit,b.maxpeaklimit,null),minPeakDataLimit:G(b.minpeakdatalimit,b.minpeaklimit,null),crossline:{enabled:G(b.showcrossline,1),line:{"stroke-width":G(b.crosslinethickness,1),stroke:Qa(sa(b.crosslinecolor,"#000000")),"stroke-opacity":G(b.crosslinealpha,
20)/100},labelEnabled:G(b.showcrosslinelabel,b.showcrossline,1),labelstyle:{fontSize:Ba(b.crosslinelabelsize)?Ba(b.crosslinelabelsize)+"px":a.outCanfontSize,fontFamily:sa(b.crosslinelabelfont,a.outCanfontFamily)},valueEnabled:G(b.showcrosslinevalues,b.showcrossline,1),valuestyle:{fontSize:Ba(b.crosslinevaluesize)?Ba(b.crosslinevaluesize)+"px":a.inCanfontSize,fontFamily:sa(b.crosslinevaluefont,a.inCanvasStyle.fontFamily)}},useCrossline:G(b.usecrossline,1),tooltipSepChar:sa(b.tooltipsepchar,", "),showTerminalValidData:G(b.showterminalvaliddata,
0),cdmchar:sa(b.dataseparator,"|"),cdm:G(b.compactdatamode,0)})},getValuePixel:function(a){var b=this.config.viewPortConfig;return b.ddsi+xa(a/b.ppp)},__toolbar:function(){var a,b,c,h,m=this,f=m.components,q=f.tb=new (FusionCharts.register("component",["toolbox","toolbox"])),v=q.getDefaultConfiguration(),A,n;q.init({iAPI:{chart:m},graphics:m.graphics,chart:m,components:f});a=f.toolBoxAPI||q.getAPIInstances(q.ALIGNMENT_HORIZONTAL);b=a.SymbolStore;c=a.ComponentGroup;h=a.Toolbar;A=a.Symbol;n=a.Scroller;
q.graphics={};return{reInit:function(){q.init({iAPI:{chart:m},graphics:m.graphics,chart:m,components:f})},addSymbol:function(a,b,c,f){a=new A(a);c&&f.setConfiguaration({buttons:oa(oa({},v),c)});b.tooltext=c.tooltip;b&&a.attachEventHandlers(b);f.addSymbol(a);return a},addScroll:function(a,b){var c=new n(a);b&&c.attachEventHandlers(b);return c},addComponentGroup:function(a,b){var f;f=new c;f.setConfiguaration({group:{fill:b?b.fill:za("EBEBEB",0),borderThickness:b?G(b.borderThickness,0):0}});return f},
addToolBox:function(a){var b,c=new h;for(b=0;b<a.length;b+=1)c.addComponent(a[b]);return c},setDrawingArea:function(a,b){a.drawingArea=b;return a},draw:function(a){var b,c,f;for(b=0;b<a.length;b+=1)c=a[b],f=c.drawingArea,c.draw(f.x,f.y)},registerSymbol:function(a,c){b.register(a,c)},getLogicalSpace:function(a){return a.getLogicalSpace()},getNode:function(a){return a.node}}},__preDraw:function(){var a,b,c,h,m,f,q,v,A,n,C=this,p=C.components,I=p.paper,K=C.graphics;b=K.imageContainer;var B=C.config,
k=B.canvasLeft,x=B.canvasWidth;a=C.jsonData.chart;var aa=B.cdm;c=p.xAxis[0];var N=B.viewPortConfig,D=C.components.canvas.config,Z=pa(D.canvasPadding,D.canvasPaddingLeft,D.canvasPaddingRight);n=p.yAxis[0];v=K.datasetGroup;var D=B.canvasHeight,X=B.canvasTop,d=C.jsonData.chart,d=B.borderWidth||(B.borderWidth=G(d.showborder,1)?G(d.borderthickness,1):0),L=B.allowPinMode,g=B.crossline,N=c.getCategoryLen(),U=Fa(G(a.displaystartindex,1),10)-1,l=Fa(G(a.displayendindex,N||2),10)-1,e=0,ba=p.dataset,fa=ba.length,
p=K.crossline;B.updateAnimDuration=500;b.transform("t"+k+","+X);b.attr({"clip-rect":k+","+X+","+x+","+D});B.status="zoom";B.maxZoomLimit=G(a.maxzoomlimit,1E3);B.viewPortHistory=[];1>(b=G(a.pixelsperpoint,15))&&(b=1);(c=G(a.pixelsperlabel,a.xaxisminlabelwidth,c.getAxisConfig("labels").rotation?20:60))<b&&(c=b);(0>U||U>=(N-1||1))&&(U=0);(l<=U||l>(N-1||1))&&(l=N-1||1);N=B.viewPortConfig=oa(B.viewPortConfig,{amrd:G(a.anchorminrenderdistance,20),nvl:G(a.numvisiblelabels,0),cdm:aa,oppp:b,oppl:c,dsi:U,dei:l,
vdl:l-U,clen:N,offset:0,step:1,llen:0,alen:0,ddsi:U,ddei:l,ppc:0});if(N.clen){for(;fa--;)a=ba[fa].config,e=pa(e,a.drawanchors&&(a.anchorradius||0)+(Number(a.anchorborderthickness)||0)||0);B.overFlowingMarkerWidth=e;Z=B.canvasPadding=pa(e,Z);B._prezoomed=N.dei-N.dsi<N.clen-1;h=B._visw=B.canvasWidth-2*Z;m=B._visx=B.canvasLeft+Z;B._visout=-(B.height+D+1E3);B._ypvr=n&&n.getPVR()||0;a=B._yminValue=n.getLimit().min;f=B._ymin=n.getPixel(a);n=v.attr("clip-rect",[m-e,X,h+2*e,D]);K.scroll||(K.scroll=I.group("scroll").insertAfter(K.datasetGroup));
L&&(v=R.crispBound(0,X-f,0,D,d),q=B["clip-pinrect"]=[v.x,X,v.width,v.height],A=(K.zoompin=I.group("zoompin")).insertBefore(n).transform(B._pingrouptransform=["T",m,f]).hide(),K.pinrect=I.rect(0,X-f,h,D,A).attr({"stroke-width":0,stroke:"none",fill:B.pinPaneFill,"shape-rendering":"crisp",ishot:!0}),K.pintracker=I.rect(K.trackerGroup).attr({transform:A.transform(),x:0,y:X-f,width:0,height:D,stroke:"none",fill:Ga,ishot:!0,cursor:R.svg&&"ew-resize"||"e-resize"}).hide().drag(function(a){var b=m+a+this.__pindragdelta,
c=this.__pinboundleft,e=this.__pinboundright,d=this.data("cliprect").slice(0);b<c?b=c:b>e&&(b=e);A.transform(["T",b,f]);K.pintracker.transform(A.transform());R.svg||(d[0]=d[0]+b-m-this.__pindragdelta,A.attr("clip-rect",d));this.__pindragoffset=a},function(){this.__pinboundleft=0-q[0]+m+k;this.__pinboundright=this.__pinboundleft+h-q[2];this.data("cliprect",A.attr("clip-rect"));A._.clipispath=!0},function(){A._.clipispath=!1;this.__pindragdelta=this.__pindragoffset;delete this.__pindragoffset;delete this.__pinboundleft;
delete this.__pinboundright}));d++;v=R.crispBound(k-d,X+D+d,x+d+d,B.scrollHeight,d);d--;ia(C,{attr:{stroke:B.zoomPaneStroke,fill:B.zoomPaneFill,strokeWidth:0},selectionStart:function(){},selectionEnd:function(a){var b=a.selectionLeft-k;a=b+a.selectionWidth;K.crossline&&K.crossline.hide();C[B.viewPortConfig.pinned?"pinRangePixels":"zoomRangePixels"](b,a)}});g&&0!==g.enabled&&1===B.useCrossline?(p||(p=K.crossline=new ta),p.configure(C,g)):(g&&(g.enabled=0),p&&p.hide())}},resetZoom:function(){var a=
this.config.viewPortHistory,b=a[0];if(!a.length)return!1;a.length=0;this.zoomTo(b.dsi,b.dei,b)&&ua.raiseEvent("zoomReset",this._zoomargs,this.chartInstance,[this.chartInstance.id]);return!0},eiMethods:{zoomOut:function(){var a;if(a=this.apiInstance)return a.zoomOut&&a.zoomOut()},zoomTo:function(a,b){var c;if(c=this.apiInstance)return c.zoomRange&&c.zoomRange(a,b)},resetChart:function(){var a;if(a=this.apiInstance)a.pinRangePixels&&a.pinRangePixels(),a.resetZoom&&a.resetZoom()},setZoomMode:function(a){var b;
(b=this.apiInstance)&&b.activatePin&&b.activatePin(!a)},getViewStartIndex:function(){var a;if(this.apiInstance&&(a=this.apiInstance.config.viewPortConfig))return a.ddsi},getViewEndIndex:function(){var a,b;if(this.apiInstance&&(a=this.apiInstance.config.viewPortConfig))return b=a.ddei-1,(b>=a.clen?a.clen:b)-1}},zoomOut:function(){var a,b,c=this.config;b=c.viewPortHistory;var h,m,f;a=b.pop();b=b[0]||c.viewPortConfig;a?(h=a.dsi,m=a.dei):c._prezoomed&&(h=0,m=b.clen-1);(f=this.zoomTo(h,m,a))&&ua.raiseEvent("zoomedout",
f,this.chartInstance);return!0},zoomRangePixels:function(a,b){var c=this.config,h=c.viewPortHistory,c=c.viewPortConfig,m=c.ppp,f=c.ddsi,q;h.push(c);(q=this.zoomTo(f+xa(a/m),f+xa(b/m)))?ua.raiseEvent("zoomedin",q,this.chartInstance):h.pop()},zoomRange:function(a,b){var c,h,m=this.config,f=m.viewPortConfig;h=this.components.xAxis[0];var q=m.viewPortHistory,v;q.push(f);c=h.getPixel(a);h=h.getPixel(b);f.x=c;f.scaleX=m.canvasWidth/(c-h);(v=this.zoomTo(+a,+b))?ua.raiseEvent("zoomedin",v,this.chartInstance):
q.pop()},zoomTo:function(a,b,c){var h,m;h=this.config;var f=this.components,q=h.viewPortConfig,v=h.canvasHeight;m=h.canvasLeft;var A=h.canvasTop,n=h.canvasBottom,C=h.viewPortHistory,p=q.clen,I=this.components.xAxis[0];0>a&&(a=0);a>=p-1&&(a=p-1);b<=a&&(b=a+1);b>p-1&&(b=p-1);if(a===b||a===q.dsi&&b===q.dei)return!1;this.pinRangePixels();q=oa({},q);q.dsi=a;q.dei=b;q=h.viewPortConfig=q;c?this.updateVisual(c.x,c.y,c.scaleX,c.scaleY):(c=I.getPixel(a),h=I.getPixel(b),m=this.getOriginalPositions(c-m,A,h-m,
n-A),this.zoomSelection(m[0],0,m[2],v));f.scrollBar.node.attr({"scroll-ratio":q.vdl/(p-!!p),"scroll-position":[q.dsi/(p-q.vdl-1),!0]});f={level:C.length+1,startIndex:a,startLabel:I.getLabel(a).label,endIndex:b,endLabel:I.getLabel(b).label};ua.raiseEvent("zoomed",f,this.chartInstance,[this.chartInstance.id,a,b,f.startLabel,f.endLabel,f.level]);return f},activatePin:function(a){var b=this.config.viewPortConfig,c=this.components.tb.graphics.pinButton;if(b.pinned^(a=!!a))return a||this.pinRangePixels(),
ua.raiseEvent("zoomModeChanged",{pinModeActive:a},this.chartInstance,[]),this.updateButtonVisual(c.node,a?"pressed":"enable"),b.pinned=a},updateButtonVisual:function(a,b){return a.attr({disable:{config:{hover:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3",cursor:"default"},normal:{fill:"#FFFFFF",stroke:"#E3E3E3","stroke-width":1,cursor:"default"},disable:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3","stroke-opacity":1,cursor:"default"},pressed:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3",
cursor:"default"}},"button-disabled":!1,stroke:"#E3E3E3","stroke-opacity":1},enable:{config:{hover:{fill:"#FFFFFF","stroke-width":1,stroke:"#aaaaaa",cursor:"pointer"},normal:{fill:"#FFFFFF",stroke:"#C2C2C2","stroke-width":1,cursor:"pointer"},disable:{fill:"#FFFFFF","stroke-width":1,stroke:"#E3E3E3","stroke-opacity":1,cursor:"pointer"},pressed:{fill:"#EFEFEF","stroke-width":1,stroke:"#C2C2C2",cursor:"pointer"}},"button-disabled":!1,fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0],stroke:"#C2C2C2",
"stroke-opacity":1},pressed:{config:{pressed:{fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0]}},fill:["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF",!0],stroke:"#E3E3E3"}}[b])},pinRangePixels:function(a,b){var c,h=this.components,m=h.paper,f=this.graphics,q=this.config,v=q.canvasLeft,A=q.viewPortConfig,n=f.zoompin;c=f.pinrect;var C=q["clip-pinrect"],p=q._pingrouptransform,h=h.dataset,I=b-a,K,B,k,f=f.pintracker;if(A&&n&&c){if(a===b)return n.hide(),f.hide(),A.pinned=!1;for(k=h.length;k--;)K=h[k],c=K.graphics,
B=c.pinline,B||(B=c.pinline=m.path(n)),B.attr({path:c.lineElement.attrs.path,transform:["T",-q._visx,-q._ymin]}).attr(K.config.pin);C[0]=a+v;C[2]=I;n.attr({"clip-rect":C,transform:p}).show();f.__pindragdelta=0;f.show().attr({transform:p,x:a,width:I});this.getValuePixel(a);this.getValuePixel(b);return A.pinned=!0}},_createLayers:function(){var a,b=this.components.paper;ma.scatter._createLayers.call(this);a=this.graphics;a.imageContainer=b.group("dataset-orphan",a.dataSetGroup);this.__preDraw();this.toogleDragPan(!0)},
getValue:function(a){var b=this.config,c=this.components,h=b.viewPortConfig;a=this.getOriginalPositions(a.x,a.y,a.x,a.y);var m=c.xAxis[0].config.axisRange,c=c.yAxis[0].config.axisRange,f=m.min,q=c.max;return{x:f+(a[0]-b.canvasLeft)/(b.canvasWidth*h.scaleX/(m.max-f)),y:q-(a[1]-b.canvasTop)/(b.canvasHeight*h.scaleY/(q-c.min))}},getOriginalPositions:function(a,b,c,h){var m=this.config,f=m.viewPortConfig,q=f.scaleX,v=f.scaleY,A=f.x,f=f.y,n=La(a,c);a=pa(a,c);c=La(b,h);b=pa(b,h);a=a>m.canvasWidth?m.canvasWidth:
a;b=b>m.canvasHeight?m.canvasHeight:b;n=0>n?0:n;c=0>c?0:c;return[A+n/q,f+c/v,(a-n)/q,(b-c)/v]},zoomSelection:function(a,b,c,h){var m=this.config;c&&h&&(c=Math.abs(m.canvasWidth/c),h=Math.abs(m.canvasHeight/h),this.updateVisual(a,b,c,h))},updateVisual:function(a,b,c,h,m){var f=this.config,q=f.viewPortConfig,v=f.canvasWidth,A=f.canvasHeight,n=f.viewPortHistory.slice(-1)[0]||q,f=f.maxZoomLimit;q.x=isNaN(a)?a=n.x:a;q.y=isNaN(b)?b=n.y:b;q.scaleX=c||(c=n.scaleX);q.scaleY=h||(h=n.scaleY);c>f&&(q.x=La(a,
v-v/f),q.scaleX=f);h>f&&(q.y=La(b,A-A/f),q.scaleY=f);this.updateManager(m)},toogleDragPan:function(a){var b=this.config.viewPortConfig,c=b.status;a&&(b.status="zoom"===c?"pan":"zoom")},resize:function(){var a=this.config,b=this.graphics,c=this.components.canvas,h=c.graphics,m=h.canvasBorderElement,h=h.canvasElement,c=c.config.canvasBorderThickness,f=c/2,q=a.canvasHeight-=c,v=a.canvasWidth-=2*c,A=a.canvasLeft+=c;a.canvasBottom-=c;a.canvasRight-=c;h?h.attr({x:A,y:a.canvasTop,height:q,width:v}):this.drawCanvas();
m&&m.attr({x:A-f,y:a.canvasTop-f,height:q+c,width:v+c,"stroke-width":c});b.imageContainer.attr({"clip-rect":a.canvasLeft+","+a.canvasTop+","+a.canvasWidth+","+a.canvasHeight}).transform("t"+a.canvasLeft+","+a.canvasTop);b.trackerElem.attr({x:a.canvasLeft,y:a.canvasTop,width:a.canvasWidth,height:a.canvasHeight});b.tracker&&b.tracker.attr({"clip-rect":a.canvasLeft+","+a.canvasTop+","+a.canvasWidth+","+a.canvasHeight})},updateManager:function(a){var b,c;c=this.components;var h=c.dataset,m=h.length;b=
this.config;var f=b.viewPortConfig,q=b._ypvr,v=b._visw,A=this.components.xAxis[0],n=function(){return A.getPixel.apply(A,arguments)},C=A.getAxisConfig("labels").style,p,I,K,B,k,x=this.updateButtonVisual,G=c.tb.graphics,N=G.zoomOutButton,G=G.resetButton,D=b.viewPortHistory;if(b.legendClicked)for(a=0;a<m;a+=1)h[a].draw();else{!f&&(f=b.viewPortConfig);p=f.oppp;k=K=f.nvl;I=f.dsi;K=f.dei;I=f.vdl=K-I;K=f.ppl=k?v/k:f.oppl;v=f.step=(B=f.ppp=v/I)<p?Ea(p/B):1;C=f.lskip=Ea(pa(K,Ba(C.lineHeight))/B/v);void 0!==
a?(p=(f.clen-I-1)*a,f.offset=(p-(p=Fa(p)))*B,I=p+I):(p=f.dsi,I=f.dei,f.offset=0);B=f.norm=p%v;f.ddsi=p-=B;f.ddei=I=I+2*v-B;f.pvr=q;f._ymin=b._ymin;f._yminValue=b._yminValue;f.x=(n(p)-n(A.getLimit().min)+f.offset)/f.scaleX;I-p>A.getCategoryLen()?f.scaleX=1:f.scaleX=A.getCategoryLen()/Math.abs(I-p-v-.9);void 0!==a&&c.scrollBar.node&&c.scrollBar.node.attr({"scroll-position":f._pos=a});c=A._getVisibleConfig();c=Math.ceil((c.maxValue-c.minValue+1)/k);b=b.viewPortConfig&&b.viewPortConfig.scaleX;b=Math.max(Math.round(A.getAxisConfig("labelStep")/
b),k?c:C*v);A.setLabelConfig({step:b});b=A.getAxisConfig("animateAxis");k=A.getAxisConfig("drawAxisName");a&&A.setAxisConfig({animateAxis:!1,drawAxisName:!1});A.draw();A.setAxisConfig({animateAxis:b,drawAxisName:k});for(a=0;a<m;a+=1)h[a].draw();x(N.node,f.vdl===f.clen-1?"disable":"enable");x(G.node,0<D.length?"enable":"disable");la.FC_DEV_ENVIRONMENT&&la.jQuery&&(FusionCharts["debugger"].enable()?(this.debug=this.debug||(la.jQuery("#fc-zoominfo").length||la.jQuery("body").append('<pre id="fc-zoominfo">'),
la.jQuery("#fc-zoominfo").css({position:"absolute",left:"10px",top:"0","pointer-events":"none",opacity:.7,width:"250px",zIndex:"999",border:"1px solid #cccccc","box-shadow":"1px 1px 3px #cccccc",background:"#ffffff"})),this.debug.text(JSON.stringify(f,0,2))):(this.debug&&la.jQuery("#fc-zoominfo").remove(),delete this.debug))}},_drawDataset:function(){ma.zoomline.updateManager.call(this)},getParsedLabel:function(a){var b=this.xlabels;return b.parsed[a]||(b.parsed[a]=Ya(b.data[a]||""))},_createToolBox:function(){var a,
b,c,h,m,f,q,v=this,A=v.config;q=A.allowPinMode;h=v.components;var n=A.showToolBarButtonTooltext;a=h.chartMenuBar;b=h.actionBar;a&&a.drawn||b&&b.drawn||(ma.scrollcolumn2d._createToolBox.call(v),a=h.tb,b=a.graphics||(a.graphics={}),c=h.toolBoxAPI||a.getAPIInstances(a.ALIGNMENT_HORIZONTAL),c=c.Symbol,h=(h.chartMenuBar||h.actionBar).componentGroups[0],m=b.zoomOutButton=(new c("zoomOutIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.zoomOut()},tooltext:n&&A.btnZoomOutTooltext||
""}),f=b.resetButton=(new c("resetIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.resetZoom()},tooltext:n&&A.btnResetChartTooltext||""}),q&&(q=b.pinButton=(new c("pinModeIcon",void 0,a.idCount++,a.pId)).attachEventHandlers({click:function(){v.activatePin(!A.viewPortConfig.pinned)},tooltext:n&&A.btnSwitchToPinModeTooltext||""}),h.addSymbol(q,!0)),h.addSymbol(f,!0),h.addSymbol(m,!0))},_scrollBar:ma.scrollcolumn2d,_manageScrollerPosition:ma.scrollcolumn2d,draw:function(){var a,
b,c,h,m,f,q,v,A,n,C=this,p=C.config,I=C.graphics||(C.graphics={});f=C.components;a=C.jsonData;h=a.dataset;var K=a.categories&&a.categories[0].category,B;ma.msline.draw.call(C);q=p.canvasLeft;v=p.canvasTop;A=p.canvasHeight;n=p.canvasWidth;a=p.borderWidth;b=p.useRoundEdges;c=p.viewPortConfig;(B=I.toolboxParentGroup)||(B=I.toolboxParentGroup=f.paper.group("toolbarParentGroup",I.parentGroup));h&&K&&(a++,h=R.crispBound(q-a,v+A+a,n+a+a,p.scrollHeight,a),a--,f=(m=f.scrollBar)&&m.node,m.draw(h.x+(b&&-1||
a%2),h.y-(b&&4||2),{isHorizontal:!0,width:h.width-(!b&&2||0),height:h.height,showButtons:p.scrollShowButtons,scrollRatio:c.vdl/(c.clen-!!c.clen),scrollPosition:[c.dsi/(c.clen-c.vdl-1),!1],r:b&&2||0,parentLayer:B.insertBefore(I.datalabelsGroup)}),!f&&function(){var a;R.eve.on("raphael.scroll.start."+m.node.id,function(b){a=b;C.graphics.crossline&&C.graphics.crossline.disable(!0);ua.raiseEvent("scrollstart",{scrollPosition:b},C.chartInstance)});R.eve.on("raphael.scroll.end."+m.node.id,function(b){C.graphics.crossline&&
C.graphics.crossline.disable(!1);ua.raiseEvent("scrollend",{prevScrollPosition:a,scrollPosition:b},C.chartInstance)})}())}},ma.msline,{showValues:0,zeroplanethickness:1,zeroplanealpha:40,showzeroplaneontop:0});ma("zoomlinedy",{standaloneInit:!0,defaultDatasetType:"zoomline",applicableDSList:{zoomline:!0},creditLabel:Ia,friendlyName:"Zoomable and Panable Multi-series Dual-axis Line Chart",_spaceManager:ma.msdybasecartesian._spaceManager,_setAxisLimits:ma.msdybasecartesian._setAxisLimits,_createAxes:ma.msdybasecartesian._createAxes,
_feedAxesRawData:ma.msdybasecartesian._feedAxesRawData},ma.zoomline,{isdual:!0});FusionCharts.register("component",["dataset","zoomline",{_setConfigure:function(){var a=this.config,b=this.chart.jsonData.chart,c=this.JSONData;a.drawanchors=G(b.drawanchors,b.showanchors,1);a.anchorradius=G(c.anchorradius,b.anchorradius,a.linethickness+2);this.__base__._setConfigure.apply(this,arguments)},configure:function(){var a,b,c={};a=this.chart.jsonData.chart;a.animation=0;a.showvalues=G(a.showvalues,0);this.__base__.configure.call(this);
b=this.config;a=b.linethickness+G(a.pinlinethicknessdelta,1);c["stroke-width"]=0<a&&a||0;c["stroke-dasharray"]=[3,2];c.stroke=fa.hashify(b.linecolor);c["stroke-opacity"]=b.alpha/100;c["stroke-linejoin"]=b["stroke-linejoin"]="round";c["stroke-linecap"]=b["stroke-linecap"]="round";b.pin=c;b.animation=!1;b.transposeanimduration=0},draw:function(){var a,b,c,h=!1,m=!1,f=this,q=f.JSONData,v=f.chart,A=v.components,n=f.config,C=f.index||f.positionIndex,p=v.config,I=v.jsonData.chart,K=f.components,B=K.data,
k=B.length,x,aa=A.paper,N=A.xAxis[0],D=f.yAxis,Z,X,d=v.graphics,L=d.datalabelsGroup,g=fa.parseUnsafeString,R=fa.getValidValue,l,e,ba,ha,r,w,u,F,t,ia,ma=n.linethickness,la=f.graphics.container,oa=f.graphics.trackerContainer,ta=function(a){Za.call(this,v,a)},ua=function(a){var b=this.data("dataObj");b.config.hoverEffects&&b&&b.graphics&&b.graphics.element&&f._hoverPlotAnchor(b,"DataPlotRollOver",I);Za.call(this,v,a,"DataPlotRollOver")},va=function(a){var b=this.data("dataObj");b.config.hoverEffects&&
b&&b.graphics&&b.graphics.element&&f._hoverPlotAnchor(b,"DataPlotRollOut",I);Za.call(this,v,a,"DataPlotRollOut")},wa=p.viewPortConfig,P=p.showtooltip,xa,qa=d.datasetGroup,na,za=n.shadow,J,y=f.graphics.dataLabelContainer,z={},H,S,O=v.is3D,W=n.use3dlineshift,E,T,Q,Aa=D.getAxisBase(),Ba=D.yBasePos=D.getAxisPosition(Aa),ga=N.getAxisPosition(0),Da=N.getAxisPosition(1)-ga,Ea,ja=O?10:0,M=O&&W?10:0,ea=[pa(0,p.canvasLeft-ja),pa(0,p.canvasTop-M),pa(1,p.canvasWidth+2*ja),pa(1,p.canvasHeight+M)],V=[pa(0,p.canvasLeft-
ja),pa(0,p.canvasTop-M),1,pa(1,p.canvasHeight+2*M)],ka={},Ha=v.hasScroll||!1,da,Fa=n.lineDashStyle,Ia={color:n.linecolor,alpha:n.alpha};[ra(Ia),Fa].join(":");var Ma,Na,Qa,Va=f.graphics.lineElement,Wa=f.visible,Ya,Ua,ya=f.pool||(f.pool={element:[]}),jb={},Y={},ca={},kb=n.anchorradius,lb,fb=[],mb,Ca,ab,bb,gb,hb,tb=p.showTerminalValidData,Xa=p.viewPortConfig,ub=p.showPeakData,nb=p.maxPeakDataLimit,ob=p.minPeakDataLimit,pb=G(p.useCrossline,0),Oa=Xa.step,ib=N.getPixel(Xa.step)-ga<Xa.amrd,qb=function(b,
c){var d=b.graphics;S=b.config;r=S.setValue;ha=S.setLink;Ya=S.x||c;T=R(g(sa(S.setLevelTooltext,q.plottooltext,I.plottooltext)));E=S.showValue;z=S.anchorProps;J=z.shadow;u=S.displayValue;Ua=S.dip||0;b||(b=B[c]={graphics:{}});Qa={color:S.color,alpha:S.alpha};Q=S.dashStyle;Z=S.xPos||N.getAxisPosition(Ya)-ja;X=f.visible?D.getAxisPosition(r)+M:Ba;na=S.hoverEffects;z.isAnchorHoverRadius=na.anchorRadius;lb=N.getLabel(c);l=pb?"":S.toolText+(T?"":S.toolTipValue);w={index:c,link:ha,value:r,displayValue:u,categoryLabel:lb,
toolText:l,id:n.userID,datasetIndex:C,datasetName:q.seriesname,visible:Wa};null===S.setValue||ib||(z.imageUrl?(H=new U,H.onload=f._onAnchorImageLoad(f,c,w,Z,X),H.onerror=f._onErrorSetter(Z,X,c,f),H.src=z.imageUrl):(e=d.element,e||(e=ya.element&&ya.element.length?d.element=ya.element.shift():d.element=aa.polypath(la.anchorGroup)),e.attr({polypath:[z.symbol[1]||2,Z,X,z.radius,z.startAngle,Ua],fill:ra({color:z.bgColor,alpha:z.bgAlpha}),stroke:ra({color:z.borderColor,alpha:z.borderAlpha}),"stroke-width":z.borderThickness,
visibility:z.radius?Wa:"hidden"}).shadow(J,la.anchorShadowGroup).data("anchorRadius",z.radius).data("anchorHoverRadius",na.anchorRadius).data("setRolloverAttr",ia).data("setRolloutAttr",t),e[r||0===r?"show":"hide"]()),ia={polypath:[na.anchorSides||2,Z,X,na.anchorRadius,na.startAngle,na.dip],fill:ra({color:na.anchorColor,alpha:na.anchorBgAlpha}),stroke:ra({color:na.anchorBorderColor,alpha:na.anchorBorderAlpha}),"stroke-width":na.anchorBorderThickness},t={polypath:[z.sides,Z,X,z.radius,z.startAngle,
Ua],fill:ra({color:z.bgColor,alpha:z.bgAlpha}),stroke:ra({color:z.borderColor,alpha:z.borderAlpha}),"stroke-width":z.borderThickness},e&&e.data("anchorRadius",z.radius).data("anchorHoverRadius",na.anchorRadius).data("setRolloverAttr",ia).data("setRolloutAttr",t),kb=pa(z.radius,na&&na.anchorRadius||0),xa={cx:Z,cy:X,r:kb,cursor:ha?"pointer":"",stroke:Ga,"stroke-width":z.borderThickness,fill:Ga,ishot:!0,visibility:Wa},z.imageUrl||!ha&&!P||(ba=d.hotElement,ba||(ya.hotElement&&ya.hotElement.length?ba=
d.hotElement=ya.hotElement.shift():(a=!0,ba=d.hotElement=aa.circle(oa))),ba.show().attr(xa),(ba||e).data("eventArgs",w).data("groupId",void 0).data("dataObj",b),a&&(ba||e).click(ta).hover(ua,va),a=!1));b._xPos=Z;b._yPos=X;[ra(Qa||Ia),Q||Fa].join(":");ca=f.getLinePath([b],ca);Ma=ra(Qa||Ia);Na=Q||Fa;sa(S.setColor,S.setAlpha,S.setDashed);[Ma,Na].join(":");E&&!z.imageUrl&&f.drawLabel(c);fb.push(b)},vb=function(a,b){var c=a&&a.length,d=a.slice().sort(function(a,b){return a.config.setValue-b.config.setValue}),
f=d&&d.pop().config.setValue,g=d.length&&d.shift().config.setValue||f,d=0;if(f>nb||g<ob)for(;d<c;){e=a[d];f=e.config.setValue;if(f>nb||f<ob)f=b+d,qb(e,f);d+=1}},cb=function(a,c){--a;c+=1;var d;for(x=a;x<c;x+=1)for(d in b=B[x]&&B[x].graphics||{},B[x]&&(B[x].config.isRemoving=!0),b)ya[d]||(ya[d]=[]),b[d]&&(ya[d].push(b[d].hide()),b[d]=void 0)},db=wa.ddsi||0,Pa=wa.ddei||k,Sa=n._oldStartIndex,Ta=n._oldEndIndex,wb=n._oldStep,rb=K.removeDataArr,xb=rb&&rb.length;qa.line=qa.line||aa.group("line",qa);qa.lineConnector=
qa.lineConnector||aa.group("line-connector",qa);la||(la=f.graphics.container={lineShadowGroup:aa.group("connector-shadow",qa.line),anchorShadowGroup:aa.group("anchor-shadow",qa.lineConnector),lineGroup:aa.group("line",qa.line),anchorGroup:aa.group("anchors",qa.lineConnector)},la.lineGroup.trackTooltip(!0),Wa||(la.lineShadowGroup.hide(),la.anchorShadowGroup.hide(),la.lineGroup.hide(),la.anchorGroup.hide()));oa||(oa=f.graphics.trackerContainer=aa.group("line-hot",d.trackerGroup).toBack(),Wa||oa.hide());
B||(B=f.components.data=[]);y||(y=f.graphics.dataLabelContainer=f.graphics.dataLabelContainer||aa.group("datalabel",L),Wa||y.hide());Ea=Da*k;ib&&!n._oldHideAnchors?cb(Sa,Ta):Oa!==wb?cb(Sa,Ta):(db>Sa&&cb(Sa,db>Ta?Ta:db),Pa<Ta&&cb(Pa<Sa?Sa:Pa,Ta),(db<Sa||Pa>Ta)&&cb(Sa,Ta));n._oldHideAnchors=ib;n._oldEndIndex=Pa;n._oldStep=Oa;f.setVisibility(Wa);for(x=n._oldStartIndex=db;x<=Pa;x+=Oa){F=B[x]||{};S=F.config||{};S.isRemoving=!1;r=S.setValue||null;ab=x;if(tb)if(0===x&&null===r){mb=0;for(Ca=c=x;Ca<k;)if(null!==
B[Ca].config.setValue||h?h=!0:Ca++,null===B[c].config.setValue&&!m&&c<=k?(c+=Oa,mb++):m=!0,h&&m){h=m=!1;break}0!==Ca%Oa&&(S=B[Ca].config,ab=Ca)}else if(x>=k&&null===r){for(Ca=c=x;0<Ca&&(void 0!==B[Ca]||h?h=!0:Ca--,void 0===B[c]&&!m&&0<=c?c-=Oa:m=!0,!h||!m););0!==Ca%Oa&&(S=B[Ca].config,ab=Ca)}if(F=B[ab])qb(F,ab),ub&&1<Oa&&(bb=La(x+1,Pa),hb=La(bb+Oa,Pa),gb=hb===Pa?B.slice(bb):B.slice(bb,hb),gb.length&&vb(gb,bb))}Y=f.getLinePath(fb,{});jb=f.getLinePath(fb,jb);n.lastPath=Y;Va||(Va=ya.lineElement&&ya.lineElement.length?
f.graphics.lineElement=ya.lineElement.shift():f.graphics.lineElement=aa.path(la.lineGroup));pb||Va.tooltipListenerAttached||(Va.tooltipListenerAttached=!0,Va.mousemove(function(a){Xa=p.viewPortConfig;var b=p._visx,c=Xa.step,d=Xa.ppp*c,b=eb(v.linkedItems.container,a).chartX-b,e;a=p.tooltipSepChar;b=(b+=d/2+Xa.offset)-b%d;e=(e=v.getValuePixel(b))+e%c;c=N.getLabel(e).label+a+f.components.data[e].config.formatedVal;c=n.seriesname&&n.seriesname+a+c||c;Va.tooltip(0===p.crossline.enabled?c:!1)}));Va.attr({path:Y.getPathArr(),
"stroke-dasharray":Fa,"stroke-width":ma,stroke:ra(Ia),"stroke-linecap":"round","stroke-linejoin":2<=ma?"round":"miter"}).shadow(za,la.lineShadowGroup);Ha&&(da=ka.startPercent,ea[2]=Ea+V[0],1===da&&(V[0]=ea[2],ea[0]=0));ea[3]+=M;f.drawn=!0;xb&&f.remove()},setVisibility:function(a,b){var c=this.graphics,h=c&&c.container,m=c&&c.trackerContainer,c=c&&c.dataLabelContainer,f=a?"show":"hide";h.lineGroup[f]();h.anchorGroup[f]();h.anchorShadowGroup[f]();h.lineShadowGroup[f]();m[f]();c[f]();b&&this.transposeLimits(a)},
transposeLimits:function(a){var b=this.chart,c=b.config,h=this.yAxis;b._chartAnimation();this.visible=a;this._conatinerHidden=!a;b._setAxisLimits();h.draw();c.legendClicked=!0;b._drawDataset();delete c.legendClicked},hide:function(){this.setVisibility(!1,!0)},show:function(){this.setVisibility(!0,!0)}},"Line"]);ta=function(){};ta.prototype.configure=function(a,b){var c,h,m,f={},q=this,v=a.components,A=v.numberFormatter,n=v.paper,C=a.config;c=a.graphics;h=this.left=C._visx;m=this.top=C.canvasTop;var p=
this.height=C.canvasHeight,I=this._visout=C._visout,K=this.plots=a.components.dataset,B=c.datalabelsGroup,k,x,G=b.labelstyle,N=b.valuestyle,D=v.yAxis[0],Z=D.getLimit(),X=v.yAxis[1],d=X&&X.getLimit();x=this.tracker;var v=this.labels,L=this.positionLabel;k=a.get("linkedItems");var g=k.container,R=k.eventListeners||(k.eventListeners=[]);q.width=C._visw;k=this.group;k||(k=this.group=n.group("crossline-labels",B),this.container=g);k.attr({transform:["T",h,C._ymin]}).css(N);x||(x=q.tracker=g,R.push(Ma(g,
"touchstart mousemove",function(b){var c=q.onMouseMove,d=q.onMouseOut;a.isWithinCanvas(b,a).insideCanvas?c.call(q,b):d.call(q,b)},q)),R.push(Ma(g,"mousedown",function(){q.onMouseDown()},q)),R.push(Ma(g,"mouseup",function(){q.onMouseUp()},q)),R.push(Ma(g,"mouseout",function(){q.onMouseOut()},q)));x=this.line;x||(x=this.line=n.path(B).toBack());x.attr(oa({path:["M",h,m,"l",0,p]},b.line));v||(v=this.labels=b.valueEnabled&&n.set());b.labelEnabled?(f.x=I,f.y=m+p+(C.scrollHeight||0)+2.5,f["vertical-align"]=
"top",f.direction=C.textDirection,f.text="",L?(L.attr(f),L.css(G)):L=this.positionLabel=n.text(f,G,c.datalabelsGroup).insertBefore(c.datasetGroup)):(L&&L.remove(),delete this.positionLabel);this.hide();this.ppixelRatio=-D.getPVR();this.spixelRatio=X&&-X.getPVR();this.yminValue=C._yminValue;this.pyaxisminvalue=Z.min;this.pyaxismaxvalue=Z.max;this.syaxisminvalue=d&&d.min;this.syaxismaxvalue=d&&d.max;this.positionLabels=C.xlabels||{data:[],parsed:[]};this.chart=a;this.getZoomInfo=function(){return C.viewPortConfig};
this.getDataIndexFromPixel=function(b){return Math.round(a.components.xAxis[0].getValue(b))};this.getPositionLabel=function(b){return(b=a.components.xAxis[0].getLabel(b))&&b.label||""};if(b.valueEnabled){c=0;for(h=K.length;c<h;c+=1)m=K[c],m=na(m.config.linecolor),f.x=0,f.y=I,f.fill=m,f.direction=C.textDirection,f.text="",f["text-bound"]=N["text-bound"],f.lineHeight=N.lineHeight,v[c]?v[c].attr(f):v[c]=v.items[c]=n.text(f,void 0,k);for(;c<v.items.length;c+=1)v[c].remove(),delete v[c],v.items.splice(c,
1);this.numberFormatter=A}else if(v.items&&v.items.length){for(c=0;c<v.items.length;c+=1)v[c].remove(),delete v[c];v.length=0}};ta.prototype.disable=function(a){void 0!==a&&(this.disabled=!!a)&&this.visible&&this.hide();return this.disabled};ta.prototype.onMouseOut=function(){this.hide();this.position=void 0};ta.prototype.onMouseDown=function(){!Na&&this.hide();this._mouseIsDown=!0};ta.prototype.onMouseUp=function(){!Na&&this.hide();delete this._mouseIsDown};ta.prototype.onMouseMove=function(a){if(!(this.disabled||
this._mouseIsDown&&!Na)){var b,c=this.getZoomInfo(),h=this.line,m=this.left,c=c.step,f=this.chart,q=f.components.xAxis[0],f=f.get("config"),v=f.canvasLeft,A=q.getAxisConfig("axisDimention");a=eb(this.container,a).chartX-m;var m=q._getVisibleConfig(),A=A.x-v,n;n=(n=this.getDataIndexFromPixel(va(a)))+((b=n%c)>c/2?c-b:-b);a=q.getPixel(n)-A-v;h.transform(["T",va(a),0]);this.hidden&&0!==f.crossline.enabled&&this.show();(n<m.minValue||n>m.maxValue)&&this.hide();if(n!==this.position||this.hidden)this.position=
n,this.lineX=a,this.updateLabels()}};ta.prototype.updateLabels=function(){var a=this,b=a.labels,c=a.plots,h=a.width,m=a.position,f=a.lineX,q=xa(f),v=a.ppixelRatio,A=a.spixelRatio,n=a.yminValue,C=a._visout,p=a.numberFormatter,I=a.pyaxisminvalue,G=a.pyaxismaxvalue,B=a.syaxisminvalue,k=a.syaxismaxvalue,x=function(){function b(){this.y=0;this.lRef=void 0;this.__index=this.__shift=0}function c(a){for(var b=0;b<a;)this.push(b++);return this}function f(a){var b,c,d,g={},h=Number.POSITIVE_INFINITY;for(b=
0;b<this.length;b++)c=this[b]-a,0>c?d=x.NEG:d=x.POS,c=e(c),c<=h&&(h=c,g.absValue=c,g.noScaleSide=d);return g}function h(a){this.holes=c.call([],a)}var k=-1*a.height,d=n*v,m=0,g,p={},l,e=Math.abs,q=Math.floor,x={};"function"!=typeof Object.create&&(Object.create=function(){function a(){}var b=Object.prototype.hasOwnProperty;return function(c){var d,e,f;if("object"!=typeof c)throw new TypeError("Object prototype may only be an Object or null");a.prototype=c;f=new a;a.prototype=null;if(1<arguments.length)for(e in d=
Object(arguments[1]),d)b.call(d,e)&&(f[e]=d[e]);return f}}());Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c,d,e;if(null==this)throw new TypeError('"this" is null or not defined');d=Object(this);e=d.length>>>0;if(0===e)return-1;c=+b||0;Infinity===Math.abs(c)&&(c=0);if(c>=e)return-1;for(c=Math.max(0<=c?c:e-Math.abs(c),0);c<e;){if(c in d&&d[c]===a)return c;c++}return-1});Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d,e,f,g;if(null==this)throw new TypeError(" this is null or not defined");
e=Object(this);f=e.length>>>0;if("function"!==typeof a)throw new TypeError(a+" is not a function");1<arguments.length&&(c=b);for(d=0;d<f;)d in e&&(g=e[d],a.call(c,g,d,e)),d++});b.prototype.constructor=b;b.prototype.applyShift=function(a){this.__shift=a;this.lRef.calcY=this.y+=a*m};b.prototype.applyDirectIndex=function(a){this.__index=a;this.lRef.calcY=this.y=k-a*m*-1};try{Object.defineProperty(x,"POS",{enumerable:!1,configurable:!1,get:function(){return 1}}),Object.defineProperty(x,"NEG",{enumerable:!1,
configurable:!1,get:function(){return-1}})}catch(r){x.POS=1,x.NEG=-1}h.prototype=Object.create(Array.prototype);h.prototype.constructor=h;h.prototype.repositionHoles=function(){var a,b=0,c;for(a=this.holes.length=0;a<this.length;a++)c=this[a],!c&&(this.holes[b++]=a)};h.prototype.attachShift=function(a,c,d){var e,g=this.length;if(a===C)d.calcY=C;else if(g=c>g-1?g-1:c,e=this[g],c=new b,c.y=a,c.lRef=d,e){a=f.call(this.holes,g);d=g+a.absValue*a.noScaleSide;if(a.noScaleSide===x.POS)return c.applyDirectIndex(d),
this.splice(d,1,c),this.holes.splice(this.holes.indexOf(d),1),d;if(a.noScaleSide===x.NEG){a=this.splice(d+1,this.length-1);this.pop();a.forEach(function(a){a&&a.applyShift(-1)});for([].push.apply(this,a);this[d];)d++;this.push(0);this.repositionHoles();a=f.call(this.holes,d);d+=a.absValue*a.noScaleSide;c.applyDirectIndex(d);this.splice(d,1,c);this.repositionHoles();return this.length-1}}else c.applyDirectIndex(g),this.splice(g,1,c),this.holes.splice(this.holes.indexOf(g),1)};try{Object.defineProperty(p,
"top",{enumerable:!1,configurable:!1,get:function(){return k}}),Object.defineProperty(p,"bottom",{enumerable:!1,configurable:!1,get:function(){return d}})}catch(r){p.top=k,p.bottom=d}p.init=function(a,b){var c;m=a+2;k+=m/2;l=q(e(k)/m);g=new h(l);for(c=0;c<l;c++)g.push(0)};p.occupy=function(a,b){var c=q(e(k-a)/m);g&&g.attachShift(a,c,b)};return p}();b&&(b[0]&&b[0].attr({text:p.yAxis("0")}),b[0]&&x.init(b[0].getBBox().height,b.length),b.forEach(function(a,b){var f=c[b],h=f.components.data[m]&&f.components.data[m].config.setValue,
p=f.config.parentYAxis;x.occupy(void 0===h||!f.visible||(p?h>k||h<B:h>G||h<I)?C:p?(h-B)*A:(h-I)*v,a)}));b&&b.forEach(function(a,b){var k=c[b],n,v;(k=p[k.config.parentYAxis?"sYAxis":"yAxis"](k.components.data[m]&&k.components.data[m].config.setValue))?(a.attr({text:k}),k=(k=(k=(k=a.getBBox())&&k.width)&&.5*k)&&k+10,v=a.calcY,n=pa(0,La(q,h)),void 0!==v&&void 0!==n&&a.attr({x:n,y:v,"text-anchor":f<=k&&"start"||f+k>=h&&"end"||"middle","text-bound":["rgba(255,255,255,0.8)","rgba(0,0,0,0.2)",1,2.5]})):
a.attr({x:-h})});a.positionLabel&&a.positionLabel.attr({x:f+a.left,text:a.getPositionLabel(m),"text-bound":["rgba(255,255,255,1)","rgba(0,0,0,1)",1,2.5]})};ta.prototype.show=function(){this.disabled||(this.hidden=!1,this.group.attr("visibility","visible"),this.line.attr("visibility","visible"),this.positionLabel&&this.positionLabel.attr("visibility","visible"))};ta.prototype.hide=function(){this.hidden=!0;this.group.attr("visibility","hidden");this.line.attr("visibility","hidden");this.positionLabel&&
this.positionLabel.attr("visibility","hidden")};ta.prototype.dispose=function(){for(var a in this)this.hasOwnProperty(a)&&delete this[a]};R.addSymbol({pinModeIcon:function(a,b,c){var h=.5*c,m=a-c,f=a+c,q=a-h,v=a+h,A=a+.5,n=A+1,C=A+1.5,p=b-c,I=b+h,G=b-h,h=b+(c-h);return["M",m,p,"L",q,G,q,h,m,I,a-.5,I,a,b+c+.5,A,I,f,I,v,h,v,G,f,p,C,p,C,G,C,h,n,h,n,G,C,G,C,p,"Z"]},zoomOutIcon:function(a,b,c){a-=.2*c;b-=.2*c;var h=.8*c,m=R.rad(43),f=R.rad(48),q=a+h*qa(m),m=b+h*Aa(m),v=a+h*qa(f),f=b+h*Aa(f),A=R.rad(45),
n=q+c*qa(A),C=m+c*Aa(A),p=v+c*qa(A);c=f+c*Aa(A);return["M",q,m,"A",h,h,0,1,0,v,f,"Z","M",q+1,m+1,"L",n,C,p,c,v+1,f+1,"Z","M",a-2,b,"L",a+2,b,"Z"]},resetIcon:function(a,b,c){var h=a-c,m=(wa.PI/2+wa.PI)/2;a+=c*qa(m);var m=b+c*Aa(m),f=2*c/3;return["M",h,b,"A",c,c,0,1,1,a,m,"L",a+f,m-1,a+2,m+f-.5,a,m]}})}]);Ha&&(na.FusionCharts=FusionCharts);return FusionCharts});

},{}],3:[function(require,module,exports){
/*
 Ocean Theme v0.0.3
 FusionCharts JavaScript Library

 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
FusionCharts.register("theme",{name:"ocean",theme:{base:{chart:{paletteColors:"#04476c,#4d998d,#77be99,#a7dca6,#cef19a,#0e948c,#64ad93,#8fcda0,#bbe7a0,#dcefc1",labelDisplay:"auto",baseFontColor:"#333333",baseFont:"Helvetica Neue,Arial",captionFontSize:"14",subcaptionFontSize:"14",subcaptionFontBold:"0",showBorder:"0",bgColor:"#ffffff",showShadow:"0",canvasBgColor:"#ffffff",showCanvasBorder:"0",useplotgradientcolor:"0",useRoundEdges:"0",showPlotBorder:"0",showAlternateHGridColor:"0",showAlternateVGridColor:"0",
toolTipColor:"#ffffff",toolTipBorderThickness:"0",toolTipBgColor:"#000000",toolTipBgAlpha:"80",toolTipBorderRadius:"2",toolTipPadding:"5",legendBgAlpha:"0",legendBorderAlpha:"0",legendShadow:"0",legendItemFontSize:"10",legendItemFontColor:"#666666",legendCaptionFontSize:"9",divlineAlpha:"100",divlineColor:"#999999",divlineThickness:"1",divLineIsDashed:"1",divLineDashLen:"1",divLineGapLen:"1",scrollheight:"10",flatScrollBars:"1",scrollShowButtons:"0",scrollColor:"#cccccc",showHoverEffect:"1",valueFontSize:"10",
showXAxisLine:"1",xAxisLineThickness:"1",xAxisLineColor:"#999999"},dataset:[{}],trendlines:[{}]},geo:{chart:{showLabels:"0",fillColor:"#04476c",showBorder:"1",borderColor:"#eeeeee",borderThickness:"1",borderAlpha:"50",entityFillhoverColor:"#04476c",entityFillhoverAlpha:"80",connectorColor:"#cccccc",connectorThickness:"1.5",markerFillHoverAlpha:"90"}},pie2d:{chart:{placeValuesInside:"0",use3dlighting:"0",valueFontColor:"#333333",captionPadding:"15"},data:function(c,a,b){a=window.Math;return{alpha:100-
(50<b?a.round(100/a.ceil(b/10)):20)*a.floor(c/10)}}},doughnut2d:{chart:{placeValuesInside:"0",use3dlighting:"0",valueFontColor:"#333333",centerLabelFontSize:"12",centerLabelBold:"1",centerLabelFontColor:"#333333",captionPadding:"15"},data:function(c,a,b){a=window.Math;return{alpha:100-(50<b?a.round(100/a.ceil(b/10)):20)*a.floor(c/10)}}},line:{chart:{lineThickness:"2"}},spline:{chart:{lineThickness:"2"}},column2d:{chart:{paletteColors:"#04476c",valueFontColor:"#ffffff",placeValuesInside:"1",rotateValues:"1"}},
bar2d:{chart:{paletteColors:"#04476c",valueFontColor:"#ffffff",placeValuesInside:"1"}},column3d:{chart:{paletteColors:"#04476c",valueFontColor:"#ffffff",placeValuesInside:"1",rotateValues:"1"}},bar3d:{chart:{paletteColors:"#04476c",valueFontColor:"#ffffff",placeValuesInside:"1"}},area2d:{chart:{valueBgColor:"#ffffff",valueBgAlpha:"90",valueBorderPadding:"-2",valueBorderRadius:"2"}},splinearea:{chart:{valueBgColor:"#ffffff",valueBgAlpha:"90",valueBorderPadding:"-2",valueBorderRadius:"2"}},mscolumn2d:{chart:{valueFontColor:"#ffffff",
placeValuesInside:"1",rotateValues:"1"}},mscolumn3d:{chart:{showValues:"0"}},msstackedcolumn2dlinedy:{chart:{showValues:"0"}},stackedcolumn2d:{chart:{showValues:"0"}},stackedarea2d:{chart:{valueBgColor:"#ffffff",valueBgAlpha:"90",valueBorderPadding:"-2",valueBorderRadius:"2"}},stackedbar2d:{chart:{showValues:"0"}},msstackedcolumn2d:{chart:{showValues:"0"}},mscombi3d:{chart:{showValues:"0"}},mscombi2d:{chart:{showValues:"0"}},mscolumn3dlinedy:{chart:{showValues:"0"}},stackedcolumn3dline:{chart:{showValues:"0"}},
stackedcolumn2dline:{chart:{showValues:"0"}},scrollstackedcolumn2d:{chart:{valueFontColor:"#ffffff"}},scrollcombi2d:{chart:{showValues:"0"}},scrollcombidy2d:{chart:{showValues:"0"}},logstackedcolumn2d:{chart:{showValues:"0"}},logmsline:{chart:{showValues:"0"}},logmscolumn2d:{chart:{showValues:"0"}},msstackedcombidy2d:{chart:{showValues:"0"}},scrollcolumn2d:{chart:{valueFontColor:"#ffffff",placeValuesInside:"1",rotateValues:"1"}},pareto2d:{chart:{paletteColors:"#04476c",showValues:"0"}},pareto3d:{chart:{paletteColors:"#04476c",
showValues:"0"}},angulargauge:{chart:{pivotFillColor:"#ffffff",pivotRadius:"4",gaugeFillMix:"{light+0}",showTickValues:"1",majorTMHeight:"12",majorTMThickness:"2",majorTMColor:"#000000",minorTMNumber:"0",tickValueDistance:"10",valueFontSize:"24",valueFontBold:"1",gaugeInnerRadius:"50%",showHoverEffect:"0"},dials:{dial:[{baseWidth:"10",rearExtension:"7",bgColor:"#000000",bgAlpha:"100",borderColor:"#666666",bgHoverAlpha:"20"}]}},hlineargauge:{chart:{pointerFillColor:"#ffffff",gaugeFillMix:"{light+0}",
showTickValues:"1",majorTMHeight:"3",majorTMColor:"#000000",minorTMNumber:"0",valueFontSize:"18",valueFontBold:"1"},pointers:{pointer:[{}]}},bubble:{chart:{use3dlighting:"0",showplotborder:"0",showYAxisLine:"1",yAxisLineThickness:"1",yAxisLineColor:"#999999",showAlternateHGridColor:"0",showAlternateVGridColor:"0"},categories:[{verticalLineDashed:"1",verticalLineDashLen:"1",verticalLineDashGap:"1",verticalLineThickness:"1",verticalLineColor:"#000000",category:[{}]}],vtrendlines:[{line:[{alpha:"0"}]}]},
scatter:{chart:{use3dlighting:"0",showYAxisLine:"1",yAxisLineThickness:"1",yAxisLineColor:"#999999",showAlternateHGridColor:"0",showAlternateVGridColor:"0"},categories:[{verticalLineDashed:"1",verticalLineDashLen:"1",verticalLineDashGap:"1",verticalLineThickness:"1",verticalLineColor:"#000000",category:[{}]}],vtrendlines:[{line:[{alpha:"0"}]}]},boxandwhisker2d:{chart:{valueBgColor:"#ffffff",valueBgAlpha:"90",valueBorderPadding:"-2",valueBorderRadius:"2"}},thermometer:{chart:{gaugeFillColor:"#04476c"}},
cylinder:{chart:{cylFillColor:"#04476c"}},sparkline:{chart:{linecolor:"#04476c"}},sparkcolumn:{chart:{plotFillColor:"#04476c"}},sparkwinloss:{chart:{winColor:"#04476c",lossColor:"#4d998d",drawColor:"#77be99",scoreLessColor:"#a7dca6"}},hbullet:{chart:{plotFillColor:"#04476c",targetColor:"#4d998d"}},vbullet:{chart:{plotFillColor:"#04476c",targetColor:"#4d998d"}}}});

},{}],4:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );

},{}]},{},[1]);
