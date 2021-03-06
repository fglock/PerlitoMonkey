/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

/**
 * Tests that properties are not updated when modifying the VariablesView.
 */

add_task(function*() {
  let { target, panel } = yield initWebAudioEditor(COMPLEX_CONTEXT_URL);
  let { panelWin } = panel;
  let { gFront, $, $$, EVENTS, InspectorView } = panelWin;
  let gVars = InspectorView._propsView;

  let started = once(gFront, "start-context");

  reload(target);

  let [actors] = yield Promise.all([
    getN(gFront, "create-node", 8),
    waitForGraphRendered(panelWin, 8, 8)
  ]);
  let nodeIds = actors.map(actor => actor.actorID);

  click(panelWin, findGraphNode(panelWin, nodeIds[3]));
  // Wait for the node to be set as well as the inspector to come fully into the view
  yield Promise.all([
    once(panelWin, EVENTS.UI_INSPECTOR_NODE_SET),
    once(panelWin, EVENTS.UI_INSPECTOR_TOGGLED),
  ]);

  let errorEvent = once(panelWin, EVENTS.UI_SET_PARAM_ERROR);

  try {
    yield modifyVariableView(panelWin, gVars, 0, "bufferSize", 2048);
  } catch(e) {
    // we except modifyVariableView to fail here, because bufferSize is not writable
  }

  yield errorEvent;

  checkVariableView(gVars, 0, {bufferSize: 4096}, "check that unwritable variable is not updated");

  yield teardown(target);
});
