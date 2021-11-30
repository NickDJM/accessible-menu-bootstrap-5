/**
 * Test the Bootstrap5Treeview class to make sure it can initialize under various scenarios.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Treeview } from "../../../index";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap5Treeview);
controlledMenu(Bootstrap5Treeview);
customizedMenu(Bootstrap5Treeview);
