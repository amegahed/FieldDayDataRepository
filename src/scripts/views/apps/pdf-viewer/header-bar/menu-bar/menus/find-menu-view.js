/******************************************************************************\
|                                                                              |
|                               find-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying find dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import FindMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/find-menu-view.js';

export default FindMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .find': 'onClickFind',
	},

	//
	// querying methods
	//

	disabled: function() {
		return {
			'find-next': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickFind: function() {
		this.parent.app.showFindDialog();
	},

	onClickFindNext: function() {
		this.parent.app.findNext();
	}
});