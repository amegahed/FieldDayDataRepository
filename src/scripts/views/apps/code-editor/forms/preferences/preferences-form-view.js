/******************************************************************************\
|                                                                              |
|                           preferences-form-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a form used to specify user preferences.                 |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import PreferencesGroupView from '../../../../../views/apps/common/forms/preferences-group-view.js';
import GeneralPrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/general-prefs-form-view.js';
import DisplayPrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/display-prefs-form-view.js';
import WindowPrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/window-prefs-form-view.js';
import TextPrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/text-prefs-form-view.js';
import BehaviorPrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/behavior-prefs-form-view.js';
import StoragePrefsFormView from '../../../../../views/apps/code-editor/forms/preferences/storage-prefs-form-view.js';

export default PreferencesGroupView.extend({

	//
	// attributes
	//

	tabs: [
		{
			"name": "General",
			"icon": "fa fa-check"
		},
		{
			"name": "Display",
			"icon": "fa fa-desktop"
		},
		{
			"name": "Window",
			"icon": "fa fa-window-maximize"
		},
		{
			"name": "Text",
			"icon": "fa fa-font"
		},
		{
			"name": "Behavior",
			"icon": "fa fa-mouse-pointer"
		},
		{
			"name": "Storage",
			"icon": "fa fa-database"
		}
	],

	//
	// rendering methods
	//

	showRegion: function(name) {
		switch (name) {
			case 'item':
				this.showAppIcon('code_editor');
				break;
			case 'general':
				this.showGeneralPrefs();
				break;
			case 'display':
				this.showDisplayPrefs();
				break;
			case 'window':
				this.showWindowPrefs();
				break;
			case 'text':
				this.showTextPrefs();
				break;
			case 'behavior':
				this.showBehaviorPrefs();
				break;
			case 'storage':
				this.showStoragePrefs();
				break;
		}
	},

	showGeneralPrefs: function() {
		this.showChildView('general', new GeneralPrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	},

	showDisplayPrefs: function() {
		this.showChildView('display', new DisplayPrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	},

	showWindowPrefs: function() {
		this.showChildView('window', new WindowPrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	},

	showTextPrefs: function() {
		this.showChildView('text', new TextPrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	},

	showBehaviorPrefs: function() {
		this.showChildView('behavior', new BehaviorPrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	},

	showStoragePrefs: function() {
		this.showChildView('storage', new StoragePrefsFormView({
			model: this.model,

			// callbacks
			//
			onchange: (key, value) => {
				this.setOption(key, value);
			}
		}));
	}
});