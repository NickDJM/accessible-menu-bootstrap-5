/**
 * Test the Bootstrap5Menubar class to make sure it can initialize under various scenarios.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Menubar } from "../../../index";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap5Menubar);
controlledMenu(Bootstrap5Menubar);
customizedMenu(Bootstrap5Menubar);
