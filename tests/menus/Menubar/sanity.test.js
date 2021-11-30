/**
 * Test the Bootstrap5Menubar class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Menubar } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap5Menubar);
twoLevelSanity(Bootstrap5Menubar);
