/**
 * Test the Bootstrap5DisclosureMenu class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap5DisclosureMenu } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap5DisclosureMenu);
twoLevelSanity(Bootstrap5DisclosureMenu);
