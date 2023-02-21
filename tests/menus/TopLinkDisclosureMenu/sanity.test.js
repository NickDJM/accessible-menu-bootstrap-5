/**
 * Test the Bootstrap5TopLinkDisclosureMenu class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap5TopLinkDisclosureMenu } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap5TopLinkDisclosureMenu);
twoLevelSanity(Bootstrap5TopLinkDisclosureMenu);
