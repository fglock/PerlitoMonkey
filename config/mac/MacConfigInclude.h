/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 *
 * The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "NPL"); you may not use this file except in
 * compliance with the NPL.  You may obtain a copy of the NPL at
 * http://www.mozilla.org/NPL/
 *
 * Software distributed under the NPL is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the NPL
 * for the specific language governing rights and limitations under the
 * NPL.
 *
 * The Initial Developer of this code under the NPL is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation.  All Rights
 * Reserved.
 */

/* 
	This is included as a prefix file in all Mac projects. It ensures that
	the correct #defines are set up for this build.

	Since this is included from C files, comments should be C-style.

	Order below does matter.
*/

#ifndef MacConfigInclude_h_
#define MacConfigInclude_h_

/* Read compiler options */
#ifndef IDE_Options_h_
#include "IDE_Options.h"
#endif

/* Read file of defines global to the Mac build */
#ifndef DefinesMac_h_
#include "DefinesMac.h"
#endif

/* Read build-wide defines (e.g. MOZILLA_CLIENT) */
#ifndef DefinesMozilla_h_
#include "DefinesMozilla.h"
#endif

#endif /* MacConfigInclude_h_ */
