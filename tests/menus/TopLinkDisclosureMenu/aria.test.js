/**
 * Test the Bootstrap5TopLinkDisclosureMenu class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap5TopLinkDisclosureMenu } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap5TopLinkDisclosureMenu);
