'use strict';

module.exports = Ember.Component.extend({

    project: null, // need

    ctx: null, // need

    isExpanded: Ember.computed.alias('project.isExpanded'),

    tagName: 'div',

    classNameBindings: ['isExpanded'],

    classNames: [
        'welcome-screen__demos__thumbnail'
    ],

    isConfirmDelete: false,

    actions: {

        'delete': function(){
            this.set('isConfirmDelete', false);
            this.promiseDelete();
        },

        confirmDelete: function(){
            this.toggleProperty('isConfirmDelete');
        },

        cancelDelete: function(){
            this.set('isConfirmDelete', false);
        }

    }


});