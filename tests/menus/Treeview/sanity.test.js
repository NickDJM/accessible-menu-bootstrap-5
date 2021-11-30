/**
 * Test the Bootstrap5Treeview class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap5Treeview } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap5Treeview);
twoLevelSanity(Bootstrap5Treeview);
