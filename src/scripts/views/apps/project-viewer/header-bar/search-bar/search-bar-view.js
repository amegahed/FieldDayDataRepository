/******************************************************************************\
|                                                                              |
|                              search-bar-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used for searching items.                         |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SearchBarView from '../../../../../views/apps/common/header-bar/search-bar/search-bar-view.js';
import SearchByMessageView from '../../../../../views/apps/project-viewer/header-bar/search-bar/searches/search-by-message-view.js';
import SearchByDateView from '../../../../../views/apps/project-viewer/header-bar/search-bar/searches/search-by-date-view.js';
import SearchByNumLikesView from '../../../../../views/apps/project-viewer/header-bar/search-bar/searches/search-by-num-likes-view.js';
import SearchByNumCommentsView from '../../../../../views/apps/project-viewer/header-bar/search-bar/searches/search-by-num-comments-view.js';

export default SearchBarView.extend({

	//
	// getting methods
	//

	getValue: function() {
		return this.getChildView('searches').getValue();
	},

	//
	// setting methods
	//

	setValue: function(value) {
		this.getChildView('searches').setValue(value);
	},

	//
	// rendering methods
	//

	showSearchByMessage: function() {

		// show search
		//
		this.showChildView('searches', new SearchByMessageView({
			model: this.model,

			// options
			//
			value: this.options.value
		}));

		// perform callback
		//
		if (this.options.onshow) {
			this.options.onshow();
		}
	},

	showSearchByDate: function() {

		// show search
		//
		this.showChildView('searches', new SearchByDateView({
			model: this.model,

			// options
			//
			value: this.options.value
		}));

		// perform callback
		//
		if (this.options.onshow) {
			this.options.onshow();
		}
	},

	showSearchByNumLikes: function() {

		// show search
		//
		this.showChildView('searches', new SearchByNumLikesView({
			model: this.model,

			// options
			//
			value: this.options.value
		}));

		// perform callback
		//
		if (this.options.onshow) {
			this.options.onshow();
		}
	},

	showSearchByNumComments: function() {

		// show search
		//
		this.showChildView('searches', new SearchByNumCommentsView({
			model: this.model,

			// options
			//
			value: this.options.value
		}));

		// perform callback
		//
		if (this.options.onshow) {
			this.options.onshow();
		}
	},

	onRender: function() {

		// call superclass method
		//
		SearchBarView.prototype.onRender.call(this);

		// set search kind
		//
		switch (this.options.kind) {

			case 'message':
				this.showSearchByMessage();
				break;

			case 'before':
			case 'date':
			case 'after':
				this.showSearchByDate(this.options.kind);
				break;

			case 'num_likes':
				this.showSearchByNumLikes();
				break;

			case 'num_comments':
				this.showSearchByNumComments();
				break;

			default:
				this.clear();
				break;
		}
	}
});