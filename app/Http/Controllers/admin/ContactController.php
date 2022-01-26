<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactUsModel;
use Carbon\Carbon;

class ContactController extends Controller
{
/*
|-----------------------------------------------------------
|   @
|   function for get contact list
|-----------------------------------------------------------
*/

        public function getContactList()
        {
                $list=ContactUsModel::paginate(20);
                return $list;
        }

}
