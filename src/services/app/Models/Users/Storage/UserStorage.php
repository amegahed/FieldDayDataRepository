<?php
/******************************************************************************\
|                                                                              |
|                               UserStorage.php                                |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This defines a model of a user's storage information.                  |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.txt', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

namespace App\Models\Users\Storage;

use App\Models\TimeStamps\TimeStamped;
use App\Models\Users\UserOwned;

class UserStorage extends TimeStamped
{
	/**
	 * The traits that are inherited.
	 *
	 */
	use UserOwned;

	//
	// attributes
	//

	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'user_storage';

	/**
	 * Indicates if the IDs are auto-incrementing.
	 *
	 * @var bool
	 */
	public $incrementing = false;

	/**
	 * The "type" of the primary key ID.
	 *
	 * @var string
	 */
	protected $keyType = 'string';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'id',
		'user_id',

		// storage values
		//
		'host',
		'key',
		'secret',
		'region',
		'bucket',

		// timestamps
		//
		'created_at',
		'updated_at'
	];

	/**
	 * The attributes that should be visible in serialization.
	 *
	 * @var array
	 */
	protected $visible = [
		'id',
		'user_id',

		// storage values
		//
		'host',
		'key',
		'secret',
		'region',
		'bucket',

		// timestamps
		//
		'created_at',
		'updated_at'
	];
}