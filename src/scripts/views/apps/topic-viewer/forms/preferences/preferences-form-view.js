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
import GeneralPrefsFormView from '../../../../../views/apps/topic-viewer/forms/preferences/general-prefs-form-view.js';
import DisplayPrefsFormView from '../../../../../views/apps/topic-viewer/forms/preferences/display-prefs-form-view.js';
import WindowPrefsFormView from '../../../../../views/apps/topic-viewer/forms/preferences/window-prefs-form-view.js';
import LanguagePrefsFormView from '../../../../../views/apps/topic-viewer/forms/preferences/language-prefs-form-view.js';
import StoragePrefsFormView from '../../../../../views/apps/topic-viewer/forms/preferences/storage-prefs-form-view.js';

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
			"name": "Language",
			"icon": "fa fa-language"
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
				this.showAppIcon('topic_viewer');
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
			case 'language':
				this.showLanguagePrefs();
				break;
			case 'storage':
				this.showStoragePrefs();
				break;
		}
	},

	showGeneralPrefs: function() {
		this.showChildView('general', new GeneralPrefsFormView({
			model: this.model,
			collection: this.collection,

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

	showLanguagePrefs: function() {
		this.showChildView('language', new LanguagePrefsFormView({
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