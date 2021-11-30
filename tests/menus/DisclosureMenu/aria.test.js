/**
 * Test the Bootstrap5DisclosureMenu class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5DisclosureMenu } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap5DisclosureMenu);
