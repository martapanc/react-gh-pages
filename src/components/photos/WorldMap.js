import React from 'react';
import $ from 'jquery';
import '../../assets/css/main.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

function WorldMap() {
    return (
        <section
            className="overview-section p-3 p-lg-3"
            style={{ marginTop: -50 + 'px' }}
        >
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    Countries I've been to
                </h2>
                <div className="row">
                    <div id="chartdiv"></div>
                </div>
            </div>
        </section>
    );
}

$(function() {
    am4core.ready(function() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create map instance
        var chart = am4core.create('chartdiv', am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldHigh;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        var homeButton = new am4core.Button();
        homeButton.events.on('hit', function() {
            chart.goHome();
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path =
            'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);

        // Center on the groups by default
        chart.homeZoomLevel = 1.4;
        chart.homeGeoPoint = { longitude: 10, latitude: 50 };

        var groupData = [
            {
                // "name": "EU member before 2004",
                color: chart.colors.getIndex(0),
                data: [
                    {
                        title: 'Austria',
                        id: 'AT', // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
                    },
                    {
                        title: 'Belgium',
                        id: 'BE',
                    },
                    {
                        title: 'France',
                        id: 'FR',
                    },
                    {
                        title: 'Germany',
                        id: 'DE',
                    },
                    {
                        title: 'Iceland',
                        id: 'IS',
                    },
                    {
                        title: 'Ireland',
                        id: 'IE',
                    },
                    {
                        title: 'Italy',
                        id: 'IT',
                    },
                    {
                        title: 'Monaco',
                        id: 'MC',
                    },
                    {
                        title: 'The Netherlands',
                        id: 'NL',
                    },
                    {
                        title: 'Poland',
                        id: 'PL',
                    },
                    {
                        title: 'Portugal',
                        id: 'PT',
                    },
                    {
                        title: 'Russia',
                        id: 'RU',
                    },
                    {
                        title: 'San Marino',
                        id: 'SM',
                    },
                    {
                        title: 'Slovakia',
                        id: 'SK',
                    },
                    {
                        title: 'Spain',
                        id: 'ES',
                    },
                    {
                        title: 'Switzerland',
                        id: 'CH',
                    },
                    {
                        title: 'United Kingdom',
                        id: 'GB',
                    },
                    {
                        title: 'Switzerland',
                        id: 'CH',
                    },
                    {
                        title: 'Vatican City',
                        id: 'VA',
                    },
                    {
                        title: 'United States',
                        id: 'US',
                    },
                    {
                        title: 'China',
                        id: 'CN',
                    },
                ],
            },
        ];

        var usaGroupData = [
            {
                color: chart.colors.getIndex(0),
                data: [
                    {
                        title: 'New York',
                        id: 'NY',
                    },
                    {
                        title: 'Pennsylvania',
                        id: 'PA',
                    },
                    {
                        title: 'New Jersey',
                        id: 'NJ',
                    },
                    {
                        title: 'Delaware',
                        id: 'DE',
                    },
                    {
                        title: 'Maryland',
                        id: 'MD',
                    },
                    {
                        title: 'Virginia',
                        id: 'VA',
                    },
                    {
                        title: 'Washington DC',
                        id: 'DC',
                    },
                    {
                        title: 'West Virginia',
                        id: 'WV',
                    },
                    {
                        title: 'North Carolina',
                        id: 'NC',
                    },
                    {
                        title: 'South Carolina',
                        id: 'SC',
                    },
                    {
                        title: 'Georgia',
                        id: 'GA',
                    },
                    {
                        title: 'Alabama',
                        id: 'AL',
                    },
                    {
                        title: 'Florida',
                        id: 'FL',
                    },
                    {
                        title: 'Texas',
                        id: 'TX',
                    },
                    {
                        title: 'California',
                        id: 'CA',
                    },
                ],
            },
        ];

        // This array will be populated with country IDs to exclude from the world series
        var excludedCountries = ['AQ'];

        // Create a series for each group, and populate the above array
        groupData.forEach(function(group) {
            var series = chart.series.push(new am4maps.MapPolygonSeries());
            series.name = group.name;
            series.useGeodata = true;
            var includedCountries = [];
            group.data.forEach(function(country) {
                includedCountries.push(country.id);
                excludedCountries.push(country.id);
            });
            series.include = includedCountries;

            series.fill = am4core.color(group.color);

            // By creating a hover state and setting setStateOnChildren to true, when we
            // hover over the series itself, it will trigger the hover SpriteState of all
            // its countries (provided those countries have a hover SpriteState, too!).
            series.setStateOnChildren = true;
            series.calculateVisualCenter = true;

            // Country shape properties & behaviors
            var mapPolygonTemplate = series.mapPolygons.template;
            // Instead of our custom title, we could also use {name} which comes from geodata
            mapPolygonTemplate.fill = am4core.color(group.color);
            mapPolygonTemplate.fillOpacity = 0.8;
            mapPolygonTemplate.nonScalingStroke = true;
            mapPolygonTemplate.tooltipPosition = 'fixed';

            mapPolygonTemplate.events.on('over', function(event) {
                series.mapPolygons.each(function(mapPolygon) {
                    mapPolygon.isHover = true;
                });
                event.target.isHover = false;
                event.target.isHover = true;
            });

            mapPolygonTemplate.events.on('out', function(event) {
                series.mapPolygons.each(function(mapPolygon) {
                    mapPolygon.isHover = false;
                });
            });

            // States
            var hoverState = mapPolygonTemplate.states.create('hover');
            // hoverState.properties.fill = am4core.color("#CC0000");

            // Tooltip
            mapPolygonTemplate.tooltipText = '{title}'; // enables tooltip
            // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
            // series.tooltip.background.fill = am4core.color(group.color);

            // MapPolygonSeries will mutate the data assigned to it,
            // we make and provide a copy of the original data array to leave it untouched.
            // (This method of copying works only for simple objects, e.g. it will not work
            //  as predictably for deep copying custom Classes.)
            series.data = JSON.parse(JSON.stringify(group.data));
        });

        // The rest of the world.
        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        var worldSeriesName = 'world';
        worldSeries.name = worldSeriesName;
        worldSeries.useGeodata = true;
        worldSeries.exclude = excludedCountries;
        worldSeries.fillOpacity = 0.8;
        worldSeries.hiddenInLegend = true;
        worldSeries.mapPolygons.template.nonScalingStroke = true;

        // This auto-generates a legend according to each series' name and fill
        chart.legend = new am4maps.Legend();

        // Legend styles
        chart.legend.paddingLeft = 27;
        chart.legend.paddingRight = 27;
        chart.legend.marginBottom = 15;
        chart.legend.width = am4core.percent(90);
        chart.legend.valign = 'bottom';
        chart.legend.contentAlign = 'left';

        // Legend items
        chart.legend.itemContainers.template.interactionsEnabled = false;
    }); // end am4core.ready()
});

export default WorldMap;
