/**
 * Created by rbaryla on 23.01.2017.
 */

/*
*  This file contains references to the vendor libraries  we're using in this project.
*  This is used by webpack in the production build only.
*
*  A separate bundle for vendor code is usefull since it's unlikely to change as often
*  as the application code. Sa all the libraries we reference here will be written
*  to vendor.js so they they can be cached until one of them change. So basicly, this
*  aviods customers having to dovload a juge JS file anytime a line of code changes.
*  They only have to download vendor.js when a vendor library changes witch shuld be
*  less frequent. Any files that aren't referenced hire will be bundled into majn.js
*  for the production build.
* */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
