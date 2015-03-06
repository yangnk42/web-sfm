"use strict";

var _ = require('underscore');

var settings = require('../settings.js'),
    ENTRIES = settings.DEMO_ENTRY,
    Project = require('./Project.js');


module.exports = Project.extend({

    // entries in the description

    isDemo: true,

    availableResources: [],

    root: null,

    entries: [],

    hasFeature: function(){
        return this.get('entries').contains(ENTRIES.FEATURE);
    }.property('entries'),

    hasMatch: function(){
        return this.get('entries').contains(ENTRIES.MATCH);
    }.property('entries'),

    hasCalibration: function(){
        return this.get('entries').contains(ENTRIES.CALIBRATION);
    }.property('entries'),

    hasMVS: function(){
        return this.get('entries').contains(ENTRIES.MVS);
    }.property('entries'),

    images: null,


    // Loaded

    loadedEntries: [],

    calibrationLoaded: function(){
        return this.get('loadedEntries').contains(ENTRIES.CALIBRATION);
    }.property('loadedEntries.length'),

    mvsLoaded: function(){
        return this.get('loadedEntries').contains(ENTRIES.MVS);
    }.property('loadedEntries.length'),

    loadedImages: [],

    loadedFeatures: [],

    imagesFinished: function(){
        return this.get('loadedImages.length') === this.get('images.length');
    }.property('loadedImages.length'),

    featuresFinished: function(){
        return this.get('loadedFeatures.length') === this.get('images.length');
    }.property('loadedFeatures.length'),

    updateLoadedEntries: function(){

        var loaded = this.get('loadedEntries');

        if (this.get('imagesFinished')) {
            loaded.addObject(ENTRIES.IMAGE);
        }
        else {
            loaded.removeObject(ENTRIES.IMAGE);
        }

        if (this.get('featuresFinished')) {
            loaded.addObject(ENTRIES.FEATURE);
        }
        else {
            loaded.removeObject(ENTRIES.FEATURE);
        }

    }.observes('imagesFinished', 'featuresFinished'),


    // config of Demo Class

    storedProperties: [

        'name',
        'root',
        'images',
        'entries',

        'loadedEntries',

        'loadedImages',
        'loadedFeatures'

    ]


});