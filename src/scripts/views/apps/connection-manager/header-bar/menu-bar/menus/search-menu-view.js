/******************************************************************************\
|                                                                              |
|                              search-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying search dropdown menus.                  |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SearchMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/search-menu-view.js';

export default SearchMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .search-by > a': 'onClickSearchBy'
	},

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;
		let searchKind = preferences.get('search_kind');

		// set initial menu state
		//
		return {
			'search-by-name': searchKind == 'name',
			'search-by-location': searchKind == 'location',
			'search-by-occupation': searchKind == 'occupation',
			'search-by-age': searchKind == 'age',
			'search-by-gender': searchKind == 'gender',
			'search-by-birth-date': searchKind == 'birth-date',
			'search-by-join-date': searchKind == 'join-date',
			'search-by-connect-date': searchKind == 'connect-date'
		};
	}
});