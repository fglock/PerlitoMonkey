/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The origin of this IDL file is
 * http://dev.w3.org/2011/webrtc/editor/getusermedia.html
 *
 * Copyright © 2012 W3C® (MIT, ERCIM, Keio), All Rights Reserved. W3C
 * liability, trademark and document use rules apply.
 */

[Func="Navigator::HasUserMediaSupport"]
interface MediaDevices : EventTarget {
//    attribute EventHandler ondevicechange;
//
//    void enumerateDevices (MediaDeviceInfoCallback resultCallback);
//
//  static Dictionary getSupportedConstraints (DOMString kind);

  [Throws, Func="Navigator::HasUserMediaSupport"]
  Promise<MediaStream> getUserMedia(optional MediaStreamConstraints constraints);
};
