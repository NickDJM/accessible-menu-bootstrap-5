/**
 * Test the Bootstrap5Treeview class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Treeview } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap5Treeview);
