import React from 'react';
import ReactDOM from 'react-dom';
import ReactFc from 'react-fc';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FC from 'fusioncharts/fusioncharts.powercharts';
import $ from 'jquery';
import Prism from 'prismjs';
// import bootstrap from 'bootstrap';

window.jQuery = $;

// import bootstrap from 'bootstrap';
window.bootstrap = require('bootstrap');

var code = {
    "ex1": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript" : 'var myDataSource = {\n'+
            '   chart: {\n'+
                '       caption: "Harry\'s SuperMart",\n'+
                '       subCaption: "Top 5 stores in last month by revenue",\n'+
                '       numberPrefix: "$",\n'+
            '   },\n'+
            '   data:[\n'+
                '       {\n'+
                    '       label: "Bakersfield Central",\n'+
                    '       value: "880000"\n'+
                '       },\n'+
                '       {\n'+
                    '       label: "Garden Groove harbour",\n'+
                    '       value: "730000"\n'+
                '       },\n'+
                '       {\n'+
                    '       label: "Los Angeles Topanga",\n'+
                    '       value: "590000"\n'+
                '       },\n'+
                '       {\n'+
                    '       label: "Compton-Rancho Dom",\n'+
                    '       value: "520000"\n'+
                '       },\n'+
                '       {\n'+
                    '       label: "Daly City Serramonte",\n'+
                    '       value: "330000"\n'+
                '       }\n'+
            '   ]\n'+
        '};\n'+
        'var chartConfigs = {\n'+
            '   id: "revenue-chart",\n'+
            '   renderAt: "revenue-chart-container",\n'+
            '   type: "column2d",\n'+
            '   width:600,\n'+
            '   height: 400,\n'+
            '   dataFormat: "json",\n'+
            '   dataSource: myDataSource\n'+
        '};\n'+
        'React.render(\n'+
            '   &lt;react_fc.FusionCharts {...chartConfigs} />,\n'+
            '   document.getElementById("chart-container")\n'+
        ');',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/f0b2e0ms/'
    },
    "ex2": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript" :'var myDataSource = {\n    chart: {\n        caption: \"Age profile of website visitors\",\n        subcaption: \"Last Year\",\n        startingangle: \"120\",\n        showlabels: \"0\",\n        showlegend: \"1\",\n        enablemultislicing: \"0\",\n        slicingdistance: \"15\",\n        showpercentvalues: \"1\",\n        showpercentintooltip: \"0\",\n        plottooltext: \"Age group : $label Total visit : $datavalue\",\n    },\n    data: [\n        {\n            label: \"Teenage\",\n            value: \"1250400\"\n        },\n        {\n            label: \"Adult\",\n            value: \"1463300\"\n        },\n        {\n            label: \"Mid-age\",\n            value: \"1050700\"\n        },\n        {\n            label: \"Senior\",\n            value: \"491000\"\n        }\n    ]\n}\nvar chartConfigs = {\n    id: "age-profile-chart",\n    renderAt: "age-profile-chart-container",\n    type: "pie3d",\n    width:600,\n    height: 400,\n    dataFormat: "json",\n    dataSource: myDataSource\n};\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/3r627e9h/'
    },
    "ex3": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript" : 'var myDataSource = {\n    \"chart\": {\n        \"caption\": \"Actual Revenues, Targeted Revenues & Profits\",\n        \"subcaption\": \"Last year\",\n        \"xaxisname\": \"Month\",\n        \"yaxisname\": \"Amount (In USD)\",\n        \"numberprefix\": \"$\",\n    },\n    \"categories\": [\n        {\n            \"category\": [\n                {\n                    \"label\": \"Jan\"\n                },\n                {\n                    \"label\": \"Feb\"\n                },\n                {\n                    \"label\": \"Mar\"\n                },\n                {\n                    \"label\": \"Apr\"\n                },\n                {\n                    \"label\": \"May\"\n                },\n                {\n                    \"label\": \"Jun\"\n                },\n                {\n                    \"label\": \"Jul\"\n                },\n                {\n                    \"label\": \"Aug\"\n                },\n                {\n                    \"label\": \"Sep\"\n                },\n                {\n                    \"label\": \"Oct\"\n                },\n                {\n                    \"label\": \"Nov\"\n                },\n                {\n                    \"label\": \"Dec\"\n                }\n            ]\n        }\n    ],\n    \"dataset\": [\n        {\n            \"seriesname\": \"Actual Revenue\",\n            \"data\": [\n                {\n                    \"value\": \"16000\"\n                },\n                {\n                    \"value\": \"20000\"\n                },\n                {\n                    \"value\": \"18000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"15000\"\n                },\n                {\n                    \"value\": \"21000\"\n                },\n                {\n                    \"value\": \"16000\"\n                },\n                {\n                    \"value\": \"20000\"\n                },\n                {\n                    \"value\": \"17000\"\n                },\n                {\n                    \"value\": \"25000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"23000\"\n                }\n            ]\n        },\n        {\n            \"seriesname\": \"Projected Revenue\",\n            \"renderas\": \"line\",\n            \"showvalues\": \"0\",\n            \"data\": [\n                {\n                    \"value\": \"15000\"\n                },\n                {\n                    \"value\": \"16000\"\n                },\n                {\n                    \"value\": \"17000\"\n                },\n                {\n                    \"value\": \"18000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"19000\"\n                },\n                {\n                    \"value\": \"20000\"\n                },\n                {\n                    \"value\": \"21000\"\n                },\n                {\n                    \"value\": \"22000\"\n                },\n                {\n                    \"value\": \"23000\"\n                }\n            ]\n        },\n        {\n            \"seriesname\": \"Profit\",\n            \"renderas\": \"area\",\n            \"showvalues\": \"0\",\n            \"data\": [\n                {\n                    \"value\": \"4000\"\n                },\n                {\n                    \"value\": \"5000\"\n                },\n                {\n                    \"value\": \"3000\"\n                },\n                {\n                    \"value\": \"4000\"\n                },\n                {\n                    \"value\": \"1000\"\n                },\n                {\n                    \"value\": \"7000\"\n                },\n                {\n                    \"value\": \"1000\"\n                },\n                {\n                    \"value\": \"4000\"\n                },\n                {\n                    \"value\": \"1000\"\n                },\n                {\n                    \"value\": \"8000\"\n                },\n                {\n                    \"value\": \"2000\"\n                },\n                {\n                    \"value\": \"7000\"\n                }\n            ]\n        }\n    ]\n}\nvar chartConfigs = {\n    id: "revenue-profits-chart",\n    renderAt: "revenue-profits-chart-container",\n    type: "mscombi2d",\n    width:600,\n    height: 400,\n    dataFormat: "json",\n    dataSource: myDataSource\n};\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/m18qaekm/'
    },
    "ex4": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript" : 'var chartConfigs = {\n    id: "monthly-revenue-chart",\n    renderAt: "monthly-revenue-chart-container",\n    type: "column2d",\n    width:600,\n    height: 400,\n    dataFormat: "jsonurl",\n    dataSource: "data/data.json"\n};\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': ''
    },
    "ex4a": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript" : 'var chartConfigs = {\n    id: "most-popular-sports-chart",\n    renderAt: "most-popular-sports-chart-container",\n    type: "column2d",\n    width:600,\n    height: 400,\n    dataFormat: "xmlurl",\n    dataSource: "data/data.xml"\n};\n\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': ''
    },
    "ex5": {
        "html" :'&lt;div id="chart-container">&lt;/div>',
        "javascript": "var myDataSource = {\n    chart: {\n        caption: \"Harry's SuperMart\",\n        subCaption: 'Top 5 stores in last month by revenue',\n        numberPrefix: '$',\n    },\n    data: [\n        {\n            label: 'Bakersfield Central',\n            value: '880000'\n        },\n        {\n            label: 'Garden Groove harbour',\n            value: '730000'\n        },\n        {\n            label: 'Los Angeles Topanga',\n            value: '590000'\n        },\n        {\n            label: 'Compton-Rancho Dom',\n            value: '520000'\n        },\n        {\n            label: 'Daly City Serramonte',\n            value: '330000'\n        }\n    ]\n};\n\nvar MyApp = React.createClass({\n    getInitialState:  function () {\n        return {\n            filterSource: ''\n        };\n    },\n    handleCLick: function () {\n        this.setState({\n            filterSource: 'btn-update-data'\n        });\n    },\n    render: function () {\n        var revenueChartConfigs = {\n            id: 'monthly-revenue-chart',\n            renderAt: 'monthly-revenue-chart-container',\n            type: 'column2d',\n            width:600,\n            height: 400,\n            dataFormat: 'json',\n            dataSource: myDataSource,\n            eventSource: this.state.filterSource\n            impactedBy: ['btn-update-data']\n        };\n\n        if (this.state.filterSource && this.state.filterSource.length != 0) {\n            revenueChartConfigs.dataSource.data[2].label = 'Art Supply Store';\n            revenueChartConfigs.dataSource.data[2].value = '420000';\n            revenueChartConfigs.dataSource.data[3].label = 'P.C. Richard & Son';\n            revenueChartConfigs.dataSource.data[3].value = '210000';\n        }\n        else {\n            revenueChartConfigs.dataSource = myDataSource;\n        }\n\n        return (\n            &lt;div>\n                &lt;react_fc.FusionCharts {...revenueChartConfigs} />\n                &lt;a  id='btn-update-data'\n                    onClick={this.handleCLick}\n                    className='btn btn-default'\n                    href='#'>{'Click me to change data'}&lt;/a>\n            &lt;/div>\n        );\n    }\n});\n\nReact.render(\n    &lt;MyApp />,\n    document.getElementById('chart-container')\n);",
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/bj0snLsg/'
    },
    "ex6": {
        "html" : '&lt;div id="chart-container">&lt;/div>\n&lt;p>The value that you have selected is: &lt;span id="value">nothing&lt;/span>&lt;/p>',
        'javascript': 'var myDataSource = {\n    chart: {\n        caption: \"Harry\'s SuperMart\",\n        subCaption: \"Top 5 stores in last month by revenue\",\n        numberPrefix: \"$\",\n    },\n    data:[{\n        label: \"Bakersfield Central\",\n        value: \"880000\"\n    },\n    {\n        label: \"Garden Groove harbour\",\n        value: \"730000\"\n    },\n    {\n        label: \"Los Angeles Topanga\",\n        value: \"590000\"\n    },\n    {\n        label: \"Compton-Rancho Dom\",\n        value: \"520000\"\n    },\n    {\n        label: \"Daly City Serramonte\",\n        value: \"330000\"\n    }]\n};\n\nvar chartConfigs = {\n    id: "revenue-chart",\n    renderAt: "revenue-chart-container",\n    type: "column2d",\n    width:600,\n    height: 400,\n    dataFormat: "json",\n    dataSource: myDataSource,\n    events : {\n        dataplotclick: function (ev, props) {\n            document.getElementById("value").innerHTML = props.displayValue;\n        }\n    }\n};\n\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/9ora4yc5/'
    },
    "ex7": {
        "html" : '&lt;div id="chart-container">&lt;/div>',
        'javascript': 'var myDataSource = {\n    chart: {\n        caption: "Harry&#39;s SuperMart",\n        subCaption: "Top 5 stores in last month by revenue",\n        numberPrefix: "$",\n    },\n    data:[{\n        label: "Bakersfield Central",\n        value: "880000"\n    },\n    {\n        label: "Garden Groove harbour",\n        value: "730000"\n    },\n    {\n        label: "Los Angeles Topanga",\n        value: "590000"\n    },\n    {\n        label: "Compton-Rancho Dom",\n        value: "520000"\n    },\n    {\n        label: "Daly City Serramonte",\n        value: "330000"\n    }]\n};\n\nvar MyApp = React.createClass({\n    getInitialState: function () {\n        return {\n            filterSource: ""\n        };\n    },\n    changeBackgroundColor: function () {\n        this.setState({\n            filterSource: "btn-change-bg-color"\n        });\n    },\n    changeCaptionTextAlignment: function () {\n        this.setState({\n            filterSource: "btn-change-text-align"\n        });\n    },\n    render: function () {\n        var revenueChartConfigs = {\n            id: "column_chart",\n            renderAt: "column_chart_container",\n            type: "column2d",\n            width:600,\n            height: 400,\n            dataFormat: "json",\n            dataSource: myDataSource,\n            eventSource: this.state.filterSource,\n            impactedBy: ["btn-change-bg-color","btn-change-text-align"]\n        };\n\n        // Change the column chart&#39;s attribute values\n        if (this.state.filterSource && this.state.filterSource.length > 0) {\n            switch (this.state.filterSource) {\n                case "btn-change-bg-color":     revenueChartConfigs.dataSource.chart.bgColor = "#efefef";\n                                                break;\n                case "btn-change-text-align":   revenueChartConfigs.dataSource.chart.captionAlignment = "left";\n                                                break;\n            }\n        }\n\n\n        return (\n            &lt;div>\n                &lt;react_fc.FusionCharts {...revenueChartConfigs} />\n                &lt;a  id="btn-change-bg-color"\n                    onClick={this.changeBackgroundColor}\n                    className="btn btn-default"\n                    href="#">{"Change chart background color"}&lt;/a>\n                &lt;a  id="btn-change-text-align"\n                    onClick={this.changeCaptionTextAlignment}\n                    className="btn btn-default"\n                    href="#">{"Make Caption text left-aligned"}&lt;/a>\n            &lt;/div>\n        );\n    }\n});\n\nReact.render(\n    &lt;MyApp />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/mqhk1nud/'
    },
    "ex8": {
        "html" : '&lt;p>Click on the slice of pie&lt;/p>\n&lt;div id="chart-container">&lt;/div>',
        "javascript" : 'var completeData = [\n    {\n        label: "Bakersfield Central",\n        category: "Retail",\n        value: "880000",\n        city: "NYC"\n    },\n    {\n        label: "Garden Groove harbour",\n        category: "General",\n        value: "730000",\n        city: "London"\n    },\n    {\n        label: "Los Angeles Topanga",\n        value: "590000",\n        category: "Retail",\n        city: "NYC"\n    },\n    {\n        label: "Compton-Rancho Dom",\n        value: "520000",\n        category: "Retail",\n        city: "NYC"\n    },\n    {\n        label: "Daly City Serramonte",\n        value: "330000",\n        category: "General",\n        city: "Mumbai"\n    }\n];\n\nvar revenueChartDataSource = {\n    chart: {\n        caption: "Harry\'s SuperMart",\n        subCaption: "Top 5 stores in last month by revenue",\n    },\n    data: completeData\n};\n\nvar categoryChartDataSource = {\n    chart: {\n        caption: "Categories of Harry\'s SuperMart",\n        enablemultislicing: "0"\n    },\n    data: [\n        {\n            label: "General",\n            value: 0\n        },\n        {\n            label: "Retail",\n            value: 0\n        }\n    ]\n};\n\nfor (var i=0,len=completeData.length ; i&lt;len ; i++) {\n    if (completeData[i].category == "General") {\n        categoryChartDataSource.data[0].value += 1;\n    }\n    else {\n        categoryChartDataSource.data[1].value += 1;\n    }\n}\n\nvar MyApp = React.createClass({\n    getInitialState: function () {\n        return {\n            filterValue: "",\n            filterSource: ""\n        };\n    },\n    handleUserInput: function (categoryMart, source) {\n        this.setState(function () {\n            return {\n                filterValue: categoryMart,\n                filterSource: source\n            }\n        });\n    },\n    render: function() {\n        var that = this\n            , rows = [];\n\n        var revenueChartConfigs = {\n            id: "revenue-chart",\n            renderAt: "revenue-chart-container",\n            type: "column2d",\n            dataFormat: "json",\n            dataSource: revenueChartDataSource,\n            impactedBy: ["category-chart"],\n            eventSource: this.state.filterSource,\n            width:300,\n            heigth:150\n        };\n\n        var categoryChartConfigs = {\n            type: "pie2D",\n            id: "category-chart",\n            renderAt: "category-chart-container",\n            dataFormat: "json",\n            defaultCenterLabel: "Total revenue: $64.08K",\n            eventSource: this.state.filterSource,\n            dataSource: categoryChartDataSource,\n            width:400,\n            heigth:300,\n            events: {\n                slicingStart: function (evt, props) {\n                    if (props.slicedState == false) {\n                        that.handleUserInput(props.data.categoryLabel, evt.sender.id);\n                    }\n                    else {\n                        that.handleUserInput("",evt.sender.id);\n                    }\n                }\n            }\n        };\n\n        if (that.state.filterValue && that.state.filterValue.length != 0) {\n            completeData.forEach(function(mart) {\n                if (mart.category == that.state.filterValue) {\n                    rows.push(mart);\n                }\n            });\n            revenueChartConfigs.dataSource.data = rows;\n        }\n        else {\n            revenueChartConfigs.dataSource.data = completeData;\n        }\n\n        return (\n            &lt;div id="interactive-dashbaord">\n                &lt;react_fc.FusionCharts {...categoryChartConfigs} />\n                &lt;react_fc.FusionCharts {...revenueChartConfigs} />\n            &lt;/div>\n        );\n    }\n});\n\nReact.render(\n    &lt;MyApp />,\n    document.getElementById("chart-container")\n);',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/97s74d1q/'
    },
    "ex9": {
    	'javascript': 'var myDataSource = {\n    "chart": {\n        "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",\n        "subCaption": "Harry\'s SuperMart",\n        "xAxisName": "Brand",\n        "yAxisName": "Amount (In USD)",\n        "yAxisMaxValue": "120000",\n        "numberPrefix": "$",\n        "chartBottomMargin": "70",\n        "PlotfillAlpha": "0",\n        "placeValuesInside": "0",\n        "rotateValues": "0",\n        "valueFontColor": "#333333"\n    },\n    "annotations": {\n        "width": "500",\n        "height": "300",\n        "autoScale": "1",\n        "groups": [{\n            "id": "user-images",\n            "items": [{\n                "id": "butterFinger-icon",\n                "type": "image",\n                "url": "../images/butterFinger.png",\n                "x": "$xaxis.label.0.x - 30",\n                "y": "$canvasEndY - 169",\n                "xScale": "50",\n                "yScale": "45"\n            }, {\n                "id": "tom-user-icon",\n                "type": "image",\n                "url": "../images/snickrs.png",\n                "x": "$xaxis.label.1.x - 26",\n                "y": "$canvasEndY - 160",\n                "xScale": "48",\n                "yScale": "43"\n            }, {\n                "id": "Milton-user-icon",\n                "type": "image",\n                "url": "../images/coffee_crisp.png",\n                "x": "$xaxis.label.2.x - 22",\n                "y": "$canvasEndY - 154",\n                "xScale": "43",\n                "yScale": "41"\n            }, {\n                "id": "Brian-user-icon",\n                "type": "image",\n                "url": "../images/100grand.png",\n                "x": "$xaxis.label.3.x - 22",\n                "y": "$canvasEndY - 150",\n                "xScale": "43",\n                "yScale": "40"\n            }, {\n                "id": "dyn-label-bg",\n                "type": "rectangle",\n                "showBorder": "1",\n                "borderColor": "12345d",\n                "fillcolor": "ffffff",\n                "x": "$canvasEndY-245",\n                "y": "$canvasEndY+45",\n                "tox": "$canvasEndX+10",\n                "toy": "$canvasEndY + 80"\n            }, {\n                "id": "dyn-label",\n                "type": "text",\n                "fillcolor": "#000000",\n                "fontsize": "11",\n                "text": "Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years",\n                "bold": "1",\n                "wrap": "1",\n                "wrapWidth": "350",\n                "x": "$canvasEndY-72",\n                "y": "$canvasEndY + 60"\n            }]\n        }]\n    },\n    "data": [{\n        "label": "Butterfinger",\n        "value": "92000"\n    }, {\n        "label": "Snickers",\n        "value": "87000"\n    }, {\n        "label": "Coffee Crisp",\n        "value": "83000"\n    }, {\n        "label": "100 Grand",\n        "value": "80000"\n    }]\n};\n\nvar chartConfigs = {\n    type: "column2d",\n    renderAt: "chart-container",\n    width: "400",\n    height: "400",\n    dataFormat: "json",\n    dataSource: myDataSource\n};\n\nReact.render(\n    &lt;react_fc.FusionCharts {...chartConfigs} />,\n    document.getElementById("chart-container")\n);',
    	'html': '&lt;div id="chart-container">&lt;/div>',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/asg7eqb0/'
    },
    "ex10": {
    	'html': '&lt;div id="map-container">&lt;/div>',
    	'javascript': 'var myDataSource = {\n    "chart": {\n        "caption": "Shipping Volume and Costs",\n        "subcaption": "Harry\'s SuperMart Distribution Network - Last Month",\n        "showMarkerLabels":"0",\n        "numberSuffix": "%",\n        //Changing connector hover color\n        "connectorHoverColor": "#f8bd19",\n        //Changing connector hover thickness\n        "connectorHoverThickness": "3",\n        //Enabling entity hover effect\n        //Enabling marker hover effect\n        "showMarkerHoverEffect": "1",\n        //Changing marker fill color on hover\n        "markerFillHoverColor": "#cccccc",\n        "showLabels": "1"\n    },\n    "markers": {\n        "shapes": [\n            {\n                "id": "myCustomShape",\n                "type": "circle",\n                "fillcolor": "#f8bd19",\n                "showborder": "0"\n            }\n        ],\n        "items": [\n            {\n                "shapeid": "myCustomShape",\n                "id": "WA",\n                "x": "54.5",\n                "y": "44.8",\n                "label": "Washington",\n                "radius" : "1"\n                },\n            {\n                "shapeid": "myCustomShape",\n                "id": "OR",\n                "x": "58.3",\n                "y": "101.7",\n                "radius": "1"\n                },\n            {\n                "shapeid": "myCustomShape",\n                "id": "ID",\n                "x": "132.8",\n                "y": "110.7",\n                "radius": "1"\n            },\n            {\n                "shapeid": "myCustomShape",\n                "id": "MT",\n                "x": "188.8",\n                "y": "45.1",\n                "radius": "1"\n            },\n            {\n                "shapeid": "myCustomShape",\n                "id": "WY",\n                "x": "220",\n                "y": "121",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "AZ",\n                "x": "165",\n                "y": "261",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "UT",\n                "x": "170",\n                "y": "178",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "NV",\n                "x": "101",\n                "y": "193",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "LA",\n                "x": "406",\n                "y": "300",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "OK",\n                "x": "347",\n                "y": "245",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "NM",\n                "x": "238",\n                "y": "263",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "CO",\n                "x": "246.72",\n                "y": "179.01",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "KS",\n                "x": "335",\n                "y": "195",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "MO",\n                "x": "408",\n                "y": "197",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "AR",\n                "x": "413",\n                "y": "253",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "MS",\n                "x": "442",\n                "y": "277",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "NE",\n            "x": "318",\n                "y": "146",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "SD",\n                "x": "311",\n                "y": "99",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "ND",\n                "x": "310",\n                "y": "42",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "MN",\n                "x": "382",\n                "y": "61",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "WI",\n                "x": "439",\n                "y": "91",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "IA",\n                "x": "396",\n                "y": "139",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "IL",\n                "x": "445",\n                "y": "174",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                    "id": "MI",\n                "x": "502",\n                "y": "114",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "IN",\n                "x": "483",\n                "y": "174",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "OH",\n                "x": "530",\n                "y": "168",\n                "radius": "1"\n            }, {\n                "shapeid": "myCustomShape",\n                "id": "KY",\n                "x": "501",\n                "y": "210",\n                "radius": "1"\n '+
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "WV",\n' +
'                "x": "544",\n' +
'                "y": "199",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "PA",\n' +
'                "x": "593",\n' +
'                "y": "155",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "VA",\n' +
'                "x": "580",\n' +
'                "y": "210",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "NY",\n' +
'                "x": "620",\n' +
'                "y": "120",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "VT",\n' +
'                "x": "654",\n' +
'                "y": "95",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "ME",\n' +
'                "x": "700",\n' +
'                "y": "82",\n' +
'                "radius": "1",\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "NH",\n' +
'                "x": "666",\n' +
'                "y": "114",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "MA",\n' +
'                "x": "655",\n' +
'                "y": "132",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "CT",\n' +
'                "x": "654",\n' +
'                "y": "146",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "TN",\n' +
'                "x": "490",\n' +
'                "y": "237",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "GA",\n' +
'                "x": "522",\n' +
'                "y": "283",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "AL",\n' +
'                "x": "489",\n' +
'                "y": "279",\n' +
'                "radius": "1"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "FL",\n' +
'                "x": "539",\n' +
'                "y": "350",\n' +
'                "radius": "1"' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "TX",\n' +
'                "x": "333",\n' +
'                "y": "304",\n' +
'                "label": "Texas",\n' +
'                "value": "75",\n' +
'                "tooltext": "Capacity utilization:$value% {br}Packages shipped/day : 253240 Units(avg) {br}Packages received/day: 253400 Units(avg){br}Daily operational cost: $4000(avg)"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "NC",\n' +
'                "x": "576",\n' +
'                "y": "240",\n' +
'                "label": "North Carolina",\n' +
'                "value": "65",\n' +
'                "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 311120 Units(avg){br}Packages received/day: 311320 Units(avg){br}Daily operational cost: $2000(avg)"\n' +
'            }, {\n' +
'                "shapeid": "myCustomShape",\n' +
'                "id": "CA",\n' +
'                "x": "65.57",\n' +
'                "y": "227.21",\n' +
'                "label": "California",\n' +
'                //Adding value to marker and making it data enabled\n' +
'                "value": "80",\n' +
'                "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 126140 Units(avg) {br}Packages received/day: 129500 Units(avg){br}Daily operational cost: $6000(avg)"\n' +
'            },\n' +
'        ],\n' +
'        "connectors": [\n' +
'            {\n' +
'                "from": "CA",\n' +
'                "to": "WA",\n' +
'                "label": "20540",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "ID",\n' +
'                "label": "17400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "MT",\n' +
'                "label": "15600",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "WY",\n' +
'                "label": "18400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "NV",\n' +
'                "label": "19300",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "UT",\n' +
'                "label": "16500",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"\n' +
'            }, {\n' +
'                "from": "CA",\n' +
'                "to": "AZ",\n' +
'                "label": "18400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "NM",\n' +
'                "label": "21300",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "LA",\n' +
'                "label": "15440",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "OK",\n' +
'                "label": "16800",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "CO",\n' +
'                "label": "17200",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "KS",\n' +
'                "label": "13670",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "MO",\n' +
'                "label": "12560",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "AR",\n' +
'                "label": "19200",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "MS",\n' +
'                "label": "18760",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "NE",\n' +
'                "label": "16870",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "SD",\n' +
'                "label": "17300",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "ND",\n' +
'                "label": "19900",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "MN",\n' +
'                "label": "16100",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "WI",\n' +
'                "label": "14890",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "IA",]n' +
'                "label": "15600",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: 1.3"\n' +
'            }, {\n' +
'                "from": "TX",\n' +
'                "to": "IL",\n' +
'                "label": "17650",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "IN",\n' +
'                "label": "14700",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "MI",\n' +
'                "label": "18200",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "OH",\n' +
'                "label": "16540",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "KY",\n' +
'                "label": "15850",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "WV",\n' +
'                "label": "16430",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "PA",\n' +
'                "label": "15600",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "VT",\n' +
'                "label": "18400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "NH",\n' +
'                "label": "16900",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "MA",\n' +
'                "label": "16590",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "CT",\n' +
'                "label": "18340",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "ME",\n' +
'                "label": "14680",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "NY",\n' +
'                "label": "23600",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "TN",\n' +
'                "label": "19800",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "AL",\n' +
'                "label": "13400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "VA",\n' +
'                "label": "17260",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "GA",\n' +
'                "label": "17400",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "SC",\n' +
'                "label": "16230",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"\n' +
'            }, {\n' +
'                "from": "NC",\n' +
'                "to": "FL",\n' +
'                "label": "21200",\n' +
'                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"\n' +
'            }\n' +
'        ]\n' +
'    }\n' +
'};\n\n' +
'var mapConfigs = {\n' +
'    type: "usa",\n' +
'    renderAt: "map-container",\n' +
'    width: "600",\n' +
'    height: "400",\n' +
'    dataFormat: "json",\n' +
'    dataSource: myDataSource\n' +
'};\n\n' +
'React.render(\n' +
'    &lt;react_fc.FusionCharts {...mapConfigs} />,\n' +
'    document.getElementById("map-container")\n' +
');',
        'jsfiddle': 'http://jsfiddle.net/fusioncharts/o0uze2Lv/'
    }
}
var previous = "";

var placementOfFiddleLinkey = function (exampleId) {
    if (code[exampleId].jsfiddle.length != 0) {
        $('#jsfiddle').html('Click <a id="jsfiddle_link" href="" target="_blank">here</a> for the JSFiddle');
        $('#jsfiddle #jsfiddle_link').attr('href',code[exampleId].jsfiddle);
    } else {
        $('#jsfiddle').html('');
    }
};

/*** Onload ***/
$('.navigation-tab').on('click', function() {
    var url = window.location.href
        , index = url.indexOf('/#')
        , id = $(this)[0].id;
    url = url.substr(index,url.length-index);
    if(id === 'home-navigate') {
        window.location.href = window.location.href.replace(url,'/#/home');
    } else if(id === 'getting-started-navigate') {
        window.location.href = window.location.href.replace(url,'/#/getting-started');
    } else if(id === 'dashboard-navigate') {
        window.location.href = window.location.href.replace(url,'/#/dashboard');
        document.getElementById("dashboard-container").innerHTML='<object type="text/html" data="views/gtd-dashbaord-index.html" ></object>';
    } else if(id === 'demos-navigate') {
        window.location.href = window.location.href.replace(url,'/#/demos/ex1');
        $('.examples#ex1').trigger('click');
    }
});


$('.examples').on('click',function() {
    var url = window.location.href
        , index = url.indexOf('demos/')
        , example = url.substr(index+6,(url.length - (index+6)))
        , exampleId = this.id;
    if(exampleId !== previous) {
        document.getElementById("charts-example").innerHTML='<object class="chart-space" type="text/html" data="views/'+exampleId+'.html" ></object>';
    }

    placementOfFiddleLinkey(exampleId);

    $('#html_code code.language-markup').html(code[exampleId].html);
    $('#javascript_code code.language-javascript').html(code[exampleId].javascript);

    previous = this.id;
    Prism.highlightAll();
});

if(window.location.href.indexOf('#') === -1) {
    window.location.href += '#/home';
} else {
    var url = window.location.href
        , index = url.indexOf('demos/')
        , example;
    if(url.indexOf('home/') !== -1) {
        $('.navigation-tab a[href="#home"]').tab('show')
    } else if(url.indexOf('/dashboard') !== -1) {
        $('.navigation-tab a[href="#dashboard"]').tab('show');
        document.getElementById("dashboard-container").innerHTML='<object type="text/html" data="views/gtd-dashbaord-index.html" ></object>';
    } else if(url.indexOf('/getting-started') !== -1) {
        $('.navigation-tab a[href="#getting-started"]').tab('show');
    } else if(index !== -1) {
        $('.navigation-tab a[href="#demos"]').tab('show')
        example = url.substr(index+6,(url.length - (index+6)));
        $('.examples#'+example).trigger('click');
    }
}
Prism.highlightAll();

