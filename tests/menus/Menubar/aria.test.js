/**
 * Test the Bootstrap5Menubar class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Menubar } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap5Menubar);
