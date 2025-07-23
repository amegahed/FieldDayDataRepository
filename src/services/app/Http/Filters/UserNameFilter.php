<?php
/******************************************************************************\
|                                                                              |
|                              UsernameFilter.php                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This defines a utility for filtering by username (string).             |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.txt', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

namespace App\Http\Filters;

use Illuminate\Http\Request;

class UserNameFilter
{
	/**
	 * Apply name filter to query.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Database\Query\Builder $query - the query to apply filters to
	 * @return Illuminate\Database\Query\Builder
	 */
	static function applyTo(Request $request, $query) {

		// parse parameters
		//
		$name = $request->input('name', null);

		// add username filter to query
		//
		if ($name) {
			$query = $query->where('first_name', 'like', '%' . $name . '%')
				->orWhere('last_name', 'like', '%' . $name . '%');
		}

		return $query;
	}
}