/* eslint-disable no-unused-vars, no-new, no-undef, func-names, object-shorthand */
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class HighlightSection {
  constructor() {
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
  }

  createPageSectionWaypoints() {
    const that = this;
    this.pageSections.each(function () {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction === 'down') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction === 'up') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default HighlightSection;

