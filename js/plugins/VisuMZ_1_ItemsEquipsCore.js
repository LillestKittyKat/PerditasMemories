//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.25;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.25] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for singul column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"false","CmdIconOptimize:num":"137","CommandAddClear:eval":"false","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x4f62=['sell','drawItemEffectsTpRecovery','Param','categoryNameWindowCenter','format','Scope%1','StatusWindowWidth','EquipParams','drawItemEffects','buttonAssistKey3','drawItemEffectsHpRecovery','buttonAssistText3','TywCu','prepareItemCustomData','remove','mainAreaBottom','getItemHitTypeText','mainFontSize','drawUpdatedAfterParamValue','RRgJC','gaugeBackColor','Speed0','LabelRecoverHP','tradeItemWithParty','name','gainTP','W%1','Text','Game_Actor_forceChangeEquip','isClearCommandAdded','isShiftShortcutKeyForRemove','height','ScopeRandomAllies','HIT\x20TYPE','tuvrg','IbrXD','kvkFL','clearNewLabelFromItem','push','armor-%1','isSceneShop','isEquipChangeOk','fontSizeRatio','flatMP','WhzQa','changeEquip','Scene_Shop_onCategoryCancel','jsjWC','rdStT','nonOptimizeEtypes','kYpOR','Whitelist','itemWindowRectItemsEquipsCore','windowPadding','jGFSm','Scene_Item_createCategoryWindow','isHandled','TdUlc','forceChangeEquip','uhNQm','addState','_goods','params','getItemDamageAmountText','YNwes','fdphB','_itemWindow','RegularItems','statusWindowRectItemsEquipsCore','Scene_Shop_doSell','zyKoJ','Scene_Shop_buyWindowRect','DXHBb','_scene','CmdTextAlign','drawActorParamDifference','MaxHP','calcWindowHeight','Game_Party_gainItem','drawUpdatedParamName','isCommandEnabled','sCCti','ParseWeaponNotetags','onTouchCancel','uiHelpPosition','numberWindowRect','clearNewItem','GQWIy','kTEvo','max','drawEquipData','Zsuyv','QtKYx','XkhMi','KeyItems','drawPossession','isClicked','HP\x20DAMAGE','yWRJP','VisuMZ_1_MainMenuCore','qoCgS','jPTme','RegExp','_newLabelOpacity','YXRGZ','wtypeId','ConvertNumberToString','ARRAYSTRUCT','ZptBF','code','ZvTDL','hbolg','BackRectColor','iconIndex','repeats','%1%','LabelDamageHP','FNoNx','yYDUc','pbUam','parse','_doubleTouch','Window_Selectable_refresh','buttonAssistCategory','_data','JUXTv','getItemRepeatsLabel','createItemWindow','toUpperCase','xsyAV','isPlaytest','commandWindowRect','1186234LpVaYG','IGZVE','ItemQuantityFmt','tpGain','removeBuff','commandName','TP\x20DAMAGE','AGI','itemEnableJS','FadeLimit','process_VisuMZ_ItemsEquipsCore_Notetags','rateMP','onCategoryOk','getItemEffectsTpDamageText','addCancelCommand','PKHnc','LabelRepeats','value1','getItemEffectsSelfTpGainLabel','paintOpacity','jrCkX','center','Window_ShopBuy_refresh','allowCommandWindowCursorUp','ScopeRandomEnemies','onMenuImageLoad','nuMhn','hxZgL','aeOgJ','previousActor','width','elementId','OCCASION','ExtDisplayedParams','categoryWindowRect','IncludeShopItem','drawItemSuccessRate','ODDUd','itemPadding','canConsumeItem','Scene_Equip_slotWindowRect','nalKZ','onTouchSelectModernControls','bestEquipItem','Scene_Item_create','PeUpP','+%1%','RemoveEquipIcon','KgvPp','onBuyCancel','ScopeRandomAny','LabelElement','occasion','versionId','allowCreateStatusWindow','SellPriceJS','move','Parse_Notetags_EquipSlots','AXZRP','buttonAssistSmallIncrement','NonRemoveETypes','zPAYh','Window_ShopCommand_initialize','DamageType%1','nextActor','buy','getItemSuccessRateText','helpWindowRectItemsEquipsCore','TYuiW','drawIcon','isHoverEnabled','PsBLe','elements','innerHeight','EVAL','releaseUnequippableItems','drawTextEx','etypeId','LvftH','Scene_Equip_onSlotOk','mainAreaHeight','bSDIu','speed','translucentOpacity','lmkaC','isUseParamNamesWithIcons','ARRAYJSON','IJolk','VBUNt','YfoNv','_commandWindow','getItemEffectsAddedStatesBuffsLabel','drawText','convertInitEquipsToItems','MAT','_list','drawItemEffectsAddedStatesBuffs','AlwaysUsable','Style','ShiftShortcutKey','cursorPageup','KeyItemProtect','helpAreaTop','Step3Start','create','socoM','rGvel','IconSet','sellPriceRate','MZANn','ElementWeapon','Scene_Item_categoryWindowRect','getItemDamageElementLabel','optimizeEquipments','vOcJl','setItem','Window_EquipItem_isEnabled','commandEquip','xrDsQ','pagedown','weapon-%1','isMainMenuCoreMenuImageOptionAvailable','FieldUsable','forceResetEquipSlots','_newLabelOpacityChange','_newLabelSprites','innerWidth','getItemColor','getItemOccasionText','CmdHideDisabled','effects','optKeyItemsNumber','LabelDamageTP','VNNCM','ShopMenuStatusStandard','mainCommandWidth','QUANTITY','3998aEUcWG','text','LabelRecoverTP','CmdIconBuy','playOkSound','BlXoH','processHandling','ELEMENT','bKgSs','EFFECT_REMOVE_DEBUFF','drawRemoveItem','_newItemsList','buttonAssistItemListRequirement','createBitmap','createCategoryWindow','TPrcn','hide','refresh','prepareNextScene','ConvertParams','isSoleArmorType','GSZuw','makeCommandList','_item','RjHrO','setHandler','itypeId','prepareNewEquipSlotsOnLoad','\x5cb%1\x5cb','zGmlS','item-%1','doBuy','EquipScene','StatusWindow','XYchR','getMatchingInitEquip','setObject','isDualWield','SwitchSell','qRgqp','GqvUu','ayODm','value2','DrawIcons','ZEErP','cursorRight','oXhAs','isEquipCommandEnabled','match','yYBRp','drawItemOccasion','xzxYk','prepareRefreshItemsEquipsCoreLayout','updateCategoryNameWindow','indexOf','OffsetY','isCursorMovable','USER\x20TP\x20GAIN','hoawN','Window_ShopSell_isEnabled','HiddenItemA','getTextColor','LlgeQ','Scene_Load_reloadMapIfUpdated','_forcedSlots','Scene_Shop_commandBuy','isWeapon','goldWindowRect','SmbOf','CmdCancelRename','New','LPIMe','fill','equips','update','bbnVC','currentSymbol','RftVN','LabelSelfGainTP','updateHelp','changePaintOpacity','Scene_Equip_onActorChange','Game_Party_initialize','\x5cI[%1]%2','isRepeated','wgrLw','NeverUsable','Damage\x20Formula\x20Error\x20for\x20%1','HPeZg','isPressed','Window_EquipCommand_initialize','drawItemQuantity','CmdIconClear','_shopStatusMenuMode','pECnF','_buyWindow','cPUmc','statusWindowRect','buttonAssistSlotWindowShift','Game_BattlerBase_meetsItemConditions','damage','sellingPrice','drawParamText','categoryWindowRectItemsEquipsCore','Window_EquipStatus_refresh','_tempActor','playEquip','buttonAssistOffset3','uxwDw','bXWQg','getItemEffectsMpRecoveryLabel','pZqek','index','XSOaI','Speed1000','scrollTo','Window_ItemList_colSpacing','createStatusWindow','goldWindowRectItemsEquipsCore','ParseClassNotetags','blt','eAuTJ','SpeedNeg999','×%1','onSlotOk','getItemsEquipsCoreBackColor2','weaponTypes','Jbeek','plzUC','vHMhN','cursorLeft','drawItemStyleIcon','AtKGU','bind','LabelSuccessRate','drawCurrencyValue','SSkhK','_tempActorA','ShopScene','Scene_Shop_onBuyCancel','Mdlnl','UDKQN','version','Scene_Shop_createSellWindow','kYtit','aORMe','iconWidth','qhziW','hideAdditionalSprites','DrawBackRect','setNewItem','HjMwJ','ActorChangeEquipSlots','_actor','EnableLayout','Window_ShopBuy_price','IeqNa','Scene_Shop_doBuy','item','vsuHq','getItemEffectsMpDamageText','setMp','postCreateCategoryWindowItemsEquipsCore','lOWSE','DrfaK','ARRAYEVAL','shift','Blacklist','contentsBack','Categories','HP\x20RECOVERY','cHEpr','trim','QQfKP','setHp','DEF','setBackgroundType','successRate','Xhikh','selfTP','xrCUT','maxCols','13fUbclj','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','icon','Occasion%1','reloadMapIfUpdated','HhLfY','tnuBO','_commandNameWindow','OlsAo','Scene_Shop_onSellOk','slotWindowRectItemsEquipsCore','zXEaZ','5907297IeGNvk','fSgfO','psOXY','LabelDamageMP','categoryItemTypes','Bvfew','uiInputPosition','isSellCommandEnabled','1971834olOkPq','dBooD','createCategoryNameWindow','_slotId','LabelHitType','aRHMP','Game_Actor_discardEquip','onSlotOkAutoSelect','adjustHiddenShownGoods','getInputMultiButtonStrings','drawItemStyleIconText','maxItemAmount','getItemEffectsTpRecoveryText','Scene_Shop_createCategoryWindow','getNextAvailableEtypeId','AwZGq','equip','Scene_Equip_itemWindowRect','sWfDn','categoryNameWindowDrawBackground','EFFECT_RECOVER_MP','onTouchOk','categoryStyleCheck','BvlUM','_calculatingJSParameters','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','TP\x20RECOVERY','commandSell','ulXzx','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','isOptimizeEquipOk','powerUpColor','VisuMZ_0_CoreEngine','getColor','TDVgk','glxUh','Scene_Shop_commandSell','aYnjg','getItemDamageAmountLabelOriginal','processCursorSpecialCheckModernControls','drawItemNumber','_buyWindowLastIndex','getItemQuantityText','_categoryWindow','_newLabelOpacityUpperLimit','sellWindowRectItemsEquipsCore','KtBoB','buttonAssistText1','money','AaUOV','paramJS','EFFECT_ADD_BUFF','Scene_ItemBase_activateItemWindow','Game_Actor_paramPlus','smallParamFontSize','param','isArmor','iconHeight','removeStateBuffChanges','buttonAssistText2','Scene_Equip_statusWindowRect','Scene_Equip_commandEquip','commandNameWindowDrawBackground','addWindow','BuyPriceJS','CommandAddClear','isRightInputMode','LFlRH','DrawParamJS','drawNewLabelText','OIHUT','commandWindowRectItemsEquipsCore','xqdLn','weapon','_slotWindow','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','ItemMenuStatusRect','getItemDamageAmountLabelBattleCore','isKeyItem','STR','REMOVED\x20EFFECTS','getInputButtonString','pFWiw','WCvCA','oBkND','Consumable','386153IEYVlj','uBsFi','DrawItemData','Window_ItemCategory_initialize','UCvLN','commandSellItemsEquipsCore','statusWidth','rbBQQ','_handlers','_purchaseOnly','isClearCommandEnabled','GSnLQ','FontSize','mmp','cosMp','getItemSpeedLabel','itemTextAlign','STRUCT','Window_ItemList_maxCols','ParseArmorNotetags','DrawPortraitJS','isTriggered','getItemEffectsTpDamageLabel','drawItemName','CBpSr','nrnUE','revertGlobalNamespaceVariables','length','visible','cancel','_shopStatusMenuAlly','createSellWindow','resetShopSwitches','zGsXH','actor','Game_BattlerBase_param','postCreateItemsEquipsCore','drawParamsItemsEquipsCore','itemHasEquipLimit','normalColor','meetsItemConditionsNotetags','equipSlots','SnqJX','determineBaseSellingPrice','prototype','Scene_Equip_commandWindowRect','drawItemCost','addClearCommand','cspQg','wcBsz','getItemEffectsHpDamageLabel','itemDataFontSize','getItemEffectsHpRecoveryLabel','fGJXo','onSellOkItemsEquipsCore','isBattleTest','setHelpWindowItem','loadFaceImages','paramPlusItemsEquipsCoreCustomJS','getItemConsumableLabel','changeBuff','buyWindowRectItemsEquipsCore','isEquipCommandAdded','Scene_Equip_onSlotCancel','ceil','vIAWB','bitmap','\x5cI[%1]','qDurE','fontSize','initialize','getItemEffectsHpRecoveryText','isEquipped','textColor','Scene_Shop_goldWindowRect','lnOWr','NxtgU','resetTextColor','zgNhl','1526479BtKZiu','type','Step1End','CommandAddOptimize','OuXuw','isOptimizeCommandEnabled','vRhnx','ItemSceneAdjustItemList','onTouchSelectModern','drawItemDamage','drawItemConsumable','ARRAYFUNC','active','Step2End','consumable','MfIGN','MANUAL','ItemsEquipsCore','HiddenItemB','onActorChange','KFwVe','makeItemData','atypeId','EeLCd','MaxItems','helpWindowRect','ParseAllNotetags','jygpE','Settings','postCreateSellWindowItemsEquipsCore','dataId','EFFECT_REMOVE_STATE','LabelRecoverMP','xRMjO','fillRect','_categoryNameWindow','RemoveEquipText','isEquipItem','Parse_Notetags_EnableJS','setCategory','CmdIconSell','isEnabled','call','SCOPE','Scene_Shop_statusWindowRect','shouldCommandWindowExist','keyItem','geUpdatedLayoutStatusWidth','GPcjQ','LabelSpeed','getItemEffectsRemovedStatesBuffsText','opacity','ARRAYNUM','FoLcZ','possession','Nonconsumable','ilaBT','_statusWindow','ZjHja','LJplS','PurchaseOnly','ATK','checkShiftRemoveShortcut','drawItemEffectsTpDamage','object','_bypassNewLabel','numItems','ListWindowCols','loadPicture','description','%1-%2','EFFECT_GAIN_TP','postCreateItemWindowModernControls','JElGA','JKyBK','newLabelEnabled','getItemEffectsMpRecoveryText','round','Scene_Shop_categoryWindowRect','oIIBU','Lborm','addBuyCommand','isShowNew','NIrVf','Step2Start','ParamChangeFontSize','_dummyWindow','clearEquipments','ajKSC','drawItemDamageElement','(+%1)','right','addLoadListener','auto','Pxtnj','addInnerChild','Slots','nxJYW','lineHeight','hideNewLabelSprites','isUseItemsEquipsCoreUpdatedLayout','equipAdjustHpMp','popScene','defaultItemMax','KWhHf','SUCCESS\x20RATE','MaxWeapons','drawItemEffectsSelfTpGain','getItemDamageElementText','commandNameWindowCenter','_goodsCount','mhp','activate','isOpen','UpbBc','characterName','isClearEquipOk','LayoutStyle','jUodm','Step1Start','members','svAaa','updatedLayoutStyle','contents','split','_category','VtJeG','Parse_Notetags_ParamValues','show','Parse_Notetags_Batch','isOpenAndActive','VisuMZ_1_BattleCore','isOptimizeCommandAdded','wzosr','onSlotCancel','_customItemInfo','qbWKy','addChild','Width','Game_Actor_tradeItemWithParty','paramValueByName','pageup','ZKTDa','getItemDamageAmountLabel','YTeju','discardEquip','drawItemCustomEntryLine','rateHP','Parse_Notetags_Category','commandStyleCheck','FHtsK','lNjTT','doSell','FmTWP','mpRate','IPaYa','CmdIconOptimize','onCategoryCancelItemsEquipsCore','fnOUV','pchJx','setupItemDamageTempActors','flatHP','limitedPageUpDownSceneCheck','wpngv','0000','isBottomHelpMode','eMojN','armor','setItemWindow','JBHSL','commandStyle','Window_Selectable_setHelpWindowItem','processCursorMoveModernControls','Step3End','buttonAssistKey2','AllWeapons','updateMoneyAmount','loadSystem','equip2','yVyWQ','XwAki','FUNC','LfaYn','powerDownColor','NUM','MDF','SellPriceRate','ParseItemNotetags','Scene_Shop_activateSellWindow','DAMAGE\x20MULTIPLIER','JjiqT','parameters','armorTypes','Game_Actor_changeEquip','values','nmdek','isHovered','setStatusWindow','value','sellWindowRect','deactivate','paramValueFontSize','onDatabaseLoaded','replace','BtjIH','JSON','getItemsEquipsCoreBackColor1','PYxLU','Parse_Notetags_ParamJS','exit','onBuyCancelItemsEquipsCore','hideDisabledCommands','SOFuP','RpfIX','ePLJe','drawParamName','drawItemCustomEntries','Enable','drawItemRepeats','systemColor','smoothSelect','NjhFT','rbCkb','FontFace','Scene_Boot_onDatabaseLoaded','floor','drawUpdatedParamValueDiff','OvXfi','zzXEX','addStateBuffChanges','ItemScene','drawUpdatedBeforeParamValue','A%1','initNewItemsList','drawItemEquipType','battleMembers','AllArmors','buffIconIndex','YutsO','NoChangeMarker','textWidth','_numberWindow','resetFontSettings','initNewLabelSprites','ikOnX','equipTypes','activateSellWindow','drawItemEffectsMpDamage','Scene_Equip_createSlotWindow','registerCommand','updateChangedSlots','getItemRepeatsText','note','hWfhh','createNewLabelSprite','hitIndex','FMfrp','slotWindowRect','addOptimizeCommand','ElementNone','getMenuImage','getItemSuccessRateLabel','WujrA','getItemEffectsRemovedStatesBuffsLabel','numberWindowRectItemsEquipsCore','Window_ItemCategory_setItemWindow','itemWindowRect','equipSlotIndex','isCancelled','_sellWindow','getItemConsumableText','nonRemovableEtypes','drawItemDamageAmount','HdBgE','meetsItemConditions','setValue','getItemEffectsMpDamageLabel','ZhyzV','SpeedNeg1999','1OTMuYl','ItemQuantityFontSize','deselect','clamp','cursorPagedown','DKPnA','placeItemNewLabel','removeState','ItemMenuStatusBgType','buttonAssistRemove','FadeSpeed','_equips','FRqkJ','SwitchID','Scene_Item_createItemWindow','drawItemKeyData','processCursorMove','pZnQf','refreshCursor','addCommand','rFlla','textSizeEx','#%1','itemAt','EWjIT','maxItems','Window_ItemList_drawItem','processTouchModernControls','HAYrR','isBuyCommandEnabled','onCategoryCancel','Window_EquipItem_includes','isItem','forceChangeEquipSlots','setShopStatusWindowMode','rUUhD','Scene_Item_itemWindowRect','kIVpI','jymbs','left','getItemEffectsHpDamageText','buttonAssistLargeIncrement','vBzzE','REPEAT','splice','vMiyf','(%1)','gainItem','NonOptimizeETypes','udFCj','maxVisibleItems','process_VisuMZ_ItemsEquipsCore_RegExp','addSellCommand','MultiplierStandard','pufKn','ZTtAY','getDamageStyle','fsrNO','processCursorHomeEndTrigger','_buttonAssistWindow','drawNewLabelIcon','playBuzzerSound','CONSUMABLE','MaxMP','drawItem','ADDED\x20EFFECTS','MowrX','CmdIconCancel','currentExt','canUse','includes','iconText','commandBuy','WYklb','Scene_Shop_onSellCancel','GWJgB','mainAreaTop','changeTextColor','lAFaD','itemLineRect','Window_Selectable_initialize','categoryNameWindowDrawText','drawing','iFMwr','adjustItemWidthByStatus','atk','JXXtO','formula','createSlotWindow','_itemData','wvciu','RCCqg','actorParams','commandBuyItemsEquipsCore','createCommandNameWindow','isUseModernControls','LkoxJ','TRPvn','Icon','callUpdateHelp','Scene_Shop_prepare','setTempActor','?????','process_VisuMZ_ItemsEquipsCore_EquipSlots','optimize','onSellOk','clear','buttonAssistKey1','wTBim','addEquipCommand','pMUan','SpeedNeg2000','paramId','allowShiftScrolling','drawItemActorMenuImage','log','placeNewLabel','iVSuN','drawItemData','cFtne','canEquip','_tempActorB','drawActorCharacter','down','constructor','jHzpA','rPxxe','WOkbo','bLlpP','PGizK','refreshItemsEquipsCoreNoMenuImage','CoreEngine','NotConsumable','removeDebuff','Scene_Shop_commandWindowRect','currentClass','uiMenuStyle','EFFECT_REMOVE_BUFF','zrjHJ','prepare','helpAreaHeight','CmdIconEquip','colSpacing','onTouchSelect','categories','XUiTJ','playCursorSound','drawItemEffectsHpDamage','wgUHg','getItemEffectsAddedStatesBuffsText','Scene_Shop_numberWindowRect','jmehy','Scene_Shop_sellWindowRect','woMrS','CmdStyle','commandNameWindowDrawText','Window_ItemList_updateHelp','+%1','CannotEquipMarker','jaNNZ','isPageChangeRequested','isGoodShown','gvWYD','Speed2000','categoryList','currencyUnit','getItemSpeedText','categoryStyle','price','wYLfa','xSeXr','updateNewLabelOpacity','paramchangeTextColor','getItemEffectsTpRecoveryLabel','getItemHitTypeLabel','SwUPB','_resetFontSize','SoTEH','select','BjNLl','ZBpAV','1779105UhYEvE','LabelConsume','VRhcA','iboqh','eUmIf','MP\x20RECOVERY','updateCommandNameWindow','ARRAYSTR','isShiftRemoveShortcutEnabled','modifiedBuyPriceItemsEquipsCore','Tocmt','OVdIe','buyWindowRect','makeDeepCopy','Scene_Equip_create','map','SwitchBuy','MP\x20DAMAGE','SmZnf','nxPUn','EFFECT_ADD_STATE','ScopeAlliesButUser','_resetFontColor','LUK','nIfyu','activateItemWindow','ZKJGe','Window_Selectable_update','ZhVQG','drawItemDarkRect','scope','cursorDown','paramPlus','postCreateSlotWindowItemsEquipsCore','drawItemEffectsRemovedStatesBuffs','mKxcs','setTopRow','boxWidth','BorderRegExp','BatchShop','damageColor'];const _0x263456=_0x5747;(function(_0x1e2036,_0x5d948b){const _0x32ac72=_0x5747;while(!![]){try{const _0x26ad70=parseInt(_0x32ac72(0x50a))+parseInt(_0x32ac72(0x291))+parseInt(_0x32ac72(0x1ec))+parseInt(_0x32ac72(0x45d))+parseInt(_0x32ac72(0x3a8))*parseInt(_0x32ac72(0x242))+parseInt(_0x32ac72(0x122))*parseInt(_0x32ac72(0x1d8))+-parseInt(_0x32ac72(0x1e4));if(_0x26ad70===_0x5d948b)break;else _0x1e2036['push'](_0x1e2036['shift']());}catch(_0x1c8fbf){_0x1e2036['push'](_0x1e2036['shift']());}}}(_0x4f62,0xf2cb2));var label=_0x263456(0x2a2),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x2a44bf){const _0x42d4e3=_0x263456;return _0x2a44bf['status']&&_0x2a44bf['description'][_0x42d4e3(0x3ee)]('['+label+']');})[0x0];function _0x5747(_0x455048,_0x36dfb5){_0x455048=_0x455048-0xc0;let _0x4f620d=_0x4f62[_0x455048];return _0x4f620d;}VisuMZ[label][_0x263456(0x2ad)]=VisuMZ[label][_0x263456(0x2ad)]||{},VisuMZ[_0x263456(0x135)]=function(_0x2d6e04,_0x333b92){const _0x358c41=_0x263456;for(const _0x5387cf in _0x333b92){if(_0x358c41(0x4fd)!=='MXMrL'){if(_0x5387cf[_0x358c41(0x152)](/(.*):(.*)/i)){const _0x440155=String(RegExp['$1']),_0x4107f1=String(RegExp['$2'])[_0x358c41(0x506)]()['trim']();let _0x54479d,_0x30ff27,_0x3abfe2;switch(_0x4107f1){case _0x358c41(0x349):_0x54479d=_0x333b92[_0x5387cf]!==''?Number(_0x333b92[_0x5387cf]):0x0;break;case _0x358c41(0x2c5):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON['parse'](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27['map'](_0x40ee38=>Number(_0x40ee38));break;case _0x358c41(0xe3):_0x54479d=_0x333b92[_0x5387cf]!==''?eval(_0x333b92[_0x5387cf]):null;break;case _0x358c41(0x1c7):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27[_0x358c41(0x46c)](_0x395fb9=>eval(_0x395fb9));break;case _0x358c41(0x35e):_0x54479d=_0x333b92[_0x5387cf]!==''?JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf]):'';break;case _0x358c41(0xef):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27[_0x358c41(0x46c)](_0x4f611f=>JSON[_0x358c41(0x4fe)](_0x4f611f));break;case _0x358c41(0x346):_0x54479d=_0x333b92[_0x5387cf]!==''?new Function(JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf])):new Function('return\x200');break;case _0x358c41(0x29c):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27[_0x358c41(0x46c)](_0x5f1c1e=>new Function(JSON[_0x358c41(0x4fe)](_0x5f1c1e)));break;case _0x358c41(0x23b):_0x54479d=_0x333b92[_0x5387cf]!==''?String(_0x333b92[_0x5387cf]):'';break;case _0x358c41(0x464):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON['parse'](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27[_0x358c41(0x46c)](_0xd6b67=>String(_0xd6b67));break;case _0x358c41(0x253):_0x3abfe2=_0x333b92[_0x5387cf]!==''?JSON['parse'](_0x333b92[_0x5387cf]):{},_0x2d6e04[_0x440155]={},VisuMZ[_0x358c41(0x135)](_0x2d6e04[_0x440155],_0x3abfe2);continue;case _0x358c41(0x4f1):_0x30ff27=_0x333b92[_0x5387cf]!==''?JSON[_0x358c41(0x4fe)](_0x333b92[_0x5387cf]):[],_0x54479d=_0x30ff27[_0x358c41(0x46c)](_0x4dab76=>VisuMZ[_0x358c41(0x135)]({},JSON[_0x358c41(0x4fe)](_0x4dab76)));break;default:continue;}_0x2d6e04[_0x440155]=_0x54479d;}}else{function _0x20cede(){const _0x535886=_0x358c41;_0x5ea766['ItemsEquipsCore'][_0x535886(0x281)]['call'](this),this['isUseModernControls']()&&(this[_0x535886(0xf3)][_0x535886(0x36d)](0x0),this['_slotWindow'][_0x535886(0x359)]());}}}return _0x2d6e04;},(_0x5ae736=>{const _0x1dc7f7=_0x263456,_0x57019e=_0x5ae736[_0x1dc7f7(0x49e)];for(const _0x3ab94d of dependencies){if(!Imported[_0x3ab94d]){if('wgUHg'===_0x1dc7f7(0x43c)){alert(_0x1dc7f7(0x1d9)['format'](_0x57019e,_0x3ab94d)),SceneManager[_0x1dc7f7(0x362)]();break;}else{function _0x132b3d(){const _0x267a98=_0x1dc7f7;if(!_0x4203cc)return 0x63;else return _0x44a0c0['note'][_0x267a98(0x152)](/<MAX:[ ](\d+)>/i)?_0x43bbcd(_0x3da046['$1']):this[_0x267a98(0x2f8)](_0x325c28);}}}}const _0x4e0924=_0x5ae736[_0x1dc7f7(0x2d6)];if(_0x4e0924[_0x1dc7f7(0x152)](/\[Version[ ](.*?)\]/i)){if(_0x1dc7f7(0x4ea)===_0x1dc7f7(0x4ea)){const _0x326ad6=Number(RegExp['$1']);_0x326ad6!==VisuMZ[label][_0x1dc7f7(0x1b0)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1dc7f7(0x48a)](_0x57019e,_0x326ad6)),SceneManager[_0x1dc7f7(0x362)]());}else{function _0x3f852b(){const _0xf5421b=_0x1dc7f7,_0x37f0ca=this[_0xf5421b(0x183)]();this[_0xf5421b(0x2ca)]=new _0x5d4d58(_0x37f0ca),this[_0xf5421b(0x22b)](this[_0xf5421b(0x2ca)]),this[_0xf5421b(0x4c8)][_0xf5421b(0x356)](this[_0xf5421b(0x2ca)]);const _0x19f878=_0x3186de[_0xf5421b(0x2a2)]['Settings']['ItemScene'][_0xf5421b(0x3b0)];this[_0xf5421b(0x2ca)][_0xf5421b(0x1d2)](_0x19f878||0x0);}}}if(_0x4e0924[_0x1dc7f7(0x152)](/\[Tier[ ](\d+)\]/i)){if(_0x1dc7f7(0x1af)!==_0x1dc7f7(0x16d)){const _0x7a5cf0=Number(RegExp['$1']);_0x7a5cf0<tier?(alert(_0x1dc7f7(0x205)[_0x1dc7f7(0x48a)](_0x57019e,_0x7a5cf0,tier)),SceneManager[_0x1dc7f7(0x362)]()):tier=Math['max'](_0x7a5cf0,tier);}else{function _0x114340(){const _0x57b8c3=_0x1dc7f7;this[_0x57b8c3(0x50f)](_0x387fbe)['match'](/\\I\[(\d+)\]/i);const _0x5500a9=_0x134430(_0x583d95['$1'])||0x0,_0x2ca31d=this['itemLineRect'](_0x21ab31),_0x37a6c5=_0x2ca31d['x']+_0x4bb157[_0x57b8c3(0x372)]((_0x2ca31d[_0x57b8c3(0x528)]-_0x38e806['iconWidth'])/0x2),_0x45bd86=_0x2ca31d['y']+(_0x2ca31d[_0x57b8c3(0x4a5)]-_0x5641ff[_0x57b8c3(0x225)])/0x2;this[_0x57b8c3(0xde)](_0x5500a9,_0x37a6c5,_0x45bd86);}}}VisuMZ['ConvertParams'](VisuMZ[label][_0x1dc7f7(0x2ad)],_0x5ae736[_0x1dc7f7(0x350)]);})(pluginData),PluginManager[_0x263456(0x38a)](pluginData[_0x263456(0x49e)],_0x263456(0x1ba),_0x592a24=>{const _0xa26cbd=_0x263456;VisuMZ[_0xa26cbd(0x135)](_0x592a24,_0x592a24);const _0x471ca9=_0x592a24['Actors'][_0xa26cbd(0x46c)](_0x5a146e=>$gameActors[_0xa26cbd(0x264)](_0x5a146e)),_0x12148f=_0x592a24[_0xa26cbd(0x2f1)]['map'](_0x2bec3b=>$dataSystem[_0xa26cbd(0x386)][_0xa26cbd(0x158)](_0x2bec3b[_0xa26cbd(0x1ce)]()));for(const _0xcd21bb of _0x471ca9){if(!_0xcd21bb)continue;_0xcd21bb[_0xa26cbd(0x3c9)](_0x12148f);}}),PluginManager['registerCommand'](pluginData['name'],'ActorResetEquipSlots',_0x7ea65f=>{const _0x4b30de=_0x263456;VisuMZ[_0x4b30de(0x135)](_0x7ea65f,_0x7ea65f);const _0x448231=_0x7ea65f['Actors']['map'](_0x1b6261=>$gameActors['actor'](_0x1b6261));for(const _0x448734 of _0x448231){if(!_0x448734)continue;_0x448734['forceResetEquipSlots']();}}),PluginManager[_0x263456(0x38a)](pluginData[_0x263456(0x49e)],_0x263456(0x484),_0x4f6359=>{const _0xb711e=_0x263456;VisuMZ['ConvertParams'](_0x4f6359,_0x4f6359);const _0x18ba1f=[],_0x2b64ae=_0x4f6359[_0xb711e(0x1c9)][_0xb711e(0x46c)](_0x23ca02=>_0x23ca02['toUpperCase']()[_0xb711e(0x1ce)]()),_0xfc389e=_0x4f6359[_0xb711e(0x4b9)][_0xb711e(0x46c)](_0x3d3fa0=>_0x3d3fa0[_0xb711e(0x506)]()[_0xb711e(0x1ce)]()),_0x7b863a=_0x4f6359['Step1End']>=_0x4f6359[_0xb711e(0x308)]?_0x4f6359[_0xb711e(0x308)]:_0x4f6359[_0xb711e(0x293)],_0x2081ee=_0x4f6359['Step1End']>=_0x4f6359[_0xb711e(0x308)]?_0x4f6359[_0xb711e(0x293)]:_0x4f6359[_0xb711e(0x308)],_0x41963f=Array(_0x2081ee-_0x7b863a+0x1)[_0xb711e(0x16a)]()[_0xb711e(0x46c)]((_0x172f8a,_0x23a3ec)=>_0x7b863a+_0x23a3ec);for(const _0x1651dd of _0x41963f){const _0x1e4cae=$dataItems[_0x1651dd];if(!_0x1e4cae)continue;if(!VisuMZ[_0xb711e(0x2a2)]['IncludeShopItem'](_0x1e4cae,_0x2b64ae,_0xfc389e))continue;_0x18ba1f[_0xb711e(0x4ac)]([0x0,_0x1651dd,0x0,_0x1e4cae['price']]);}const _0x429824=_0x4f6359[_0xb711e(0x29e)]>=_0x4f6359[_0xb711e(0x2e5)]?_0x4f6359[_0xb711e(0x2e5)]:_0x4f6359[_0xb711e(0x29e)],_0x205724=_0x4f6359[_0xb711e(0x29e)]>=_0x4f6359[_0xb711e(0x2e5)]?_0x4f6359[_0xb711e(0x29e)]:_0x4f6359[_0xb711e(0x2e5)],_0x544765=Array(_0x205724-_0x429824+0x1)[_0xb711e(0x16a)]()['map']((_0x471da5,_0x1fac96)=>_0x429824+_0x1fac96);for(const _0x5e262e of _0x544765){if(_0xb711e(0x3c4)===_0xb711e(0x3c4)){const _0xede408=$dataWeapons[_0x5e262e];if(!_0xede408)continue;if(!VisuMZ['ItemsEquipsCore'][_0xb711e(0x52d)](_0xede408,_0x2b64ae,_0xfc389e))continue;_0x18ba1f[_0xb711e(0x4ac)]([0x1,_0x5e262e,0x0,_0xede408[_0xb711e(0x450)]]);}else{function _0x5196d5(){const _0x3bf8d9=_0xb711e,_0xdf4ad8=_0x3bf8d9(0x3d3);if(this['_customItemInfo'][_0xdf4ad8])return this[_0x3bf8d9(0x318)][_0xdf4ad8];const _0x3313b5='×%1';return _0x3313b5[_0x3bf8d9(0x48a)](this[_0x3bf8d9(0x139)][_0x3bf8d9(0x4f8)]);}}}const _0x5cf4fb=_0x4f6359[_0xb711e(0x33e)]>=_0x4f6359[_0xb711e(0x100)]?_0x4f6359[_0xb711e(0x100)]:_0x4f6359['Step3End'],_0x12df14=_0x4f6359[_0xb711e(0x33e)]>=_0x4f6359[_0xb711e(0x100)]?_0x4f6359[_0xb711e(0x33e)]:_0x4f6359['Step3Start'],_0x5afc14=Array(_0x12df14-_0x5cf4fb+0x1)['fill']()[_0xb711e(0x46c)]((_0xc2d515,_0x43e3d2)=>_0x5cf4fb+_0x43e3d2);for(const _0x45a405 of _0x5afc14){const _0x3360e5=$dataArmors[_0x45a405];if(!_0x3360e5)continue;if(!VisuMZ[_0xb711e(0x2a2)][_0xb711e(0x52d)](_0x3360e5,_0x2b64ae,_0xfc389e))continue;_0x18ba1f[_0xb711e(0x4ac)]([0x2,_0x45a405,0x0,_0x3360e5['price']]);}SceneManager['push'](Scene_Shop),SceneManager[_0xb711e(0x134)](_0x18ba1f,_0x4f6359[_0xb711e(0x2cd)]);}),VisuMZ[_0x263456(0x2a2)][_0x263456(0x52d)]=function(_0x31c590,_0x3193a8,_0x1c0143){const _0x3eb36=_0x263456;if(_0x31c590[_0x3eb36(0x49e)][_0x3eb36(0x1ce)]()==='')return![];if(_0x31c590['name']['match'](/-----/i))return![];const _0x32ab49=_0x31c590['categories'];if(_0x3193a8['length']>0x0){if(_0x3eb36(0x425)!=='jHzpA'){function _0x4576c4(){const _0x2aa7e4=_0x3eb36;return _0x40839e[_0x2aa7e4(0x2a2)]['Scene_Shop_buyWindowRect'][_0x2aa7e4(0x2bb)](this);}}else for(const _0x2da65f of _0x3193a8){if(_0x3eb36(0x3d5)!==_0x3eb36(0x3d5)){function _0x195712(){const _0x43c127=_0x3eb36;this[_0x43c127(0x12d)]=[];}}else{if(!_0x2da65f)continue;if(_0x32ab49[_0x3eb36(0x3ee)](_0x2da65f))return![];}}}if(_0x1c0143[_0x3eb36(0x25d)]>0x0){for(const _0x2cb6d4 of _0x1c0143){if(_0x3eb36(0x295)!==_0x3eb36(0x295)){function _0x5c1131(){const _0x39ebf9=_0x3eb36;_0x30426e===this['index']()&&(this[_0x39ebf9(0x4ff)]=!![]),this[_0x39ebf9(0x301)](),this[_0x39ebf9(0x45a)](_0x9e1d18);}}else{if(!_0x2cb6d4)continue;if(_0x32ab49[_0x3eb36(0x3ee)](_0x2cb6d4))return!![];}}return![];}return!![];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x371)]=Scene_Boot[_0x263456(0x26e)][_0x263456(0x35b)],Scene_Boot[_0x263456(0x26e)]['onDatabaseLoaded']=function(){const _0x2aa634=_0x263456;this['process_VisuMZ_ItemsEquipsCore_RegExp'](),VisuMZ[_0x2aa634(0x2a2)][_0x2aa634(0x371)][_0x2aa634(0x2bb)](this),this[_0x2aa634(0x514)]();},Scene_Boot['prototype'][_0x263456(0x3db)]=function(){const _0x20d74d=_0x263456;VisuMZ['ItemsEquipsCore'][_0x20d74d(0x4ec)]={},VisuMZ[_0x20d74d(0x2a2)]['RegExp']['EquipParams']=[],VisuMZ[_0x20d74d(0x2a2)][_0x20d74d(0x4ec)][_0x20d74d(0x483)]=[];const _0x2a1569=[_0x20d74d(0x4d2),_0x20d74d(0x3e7),_0x20d74d(0x2ce),_0x20d74d(0x1d1),_0x20d74d(0xf7),'MDF',_0x20d74d(0x511),_0x20d74d(0x474)];for(const _0x59574c of _0x2a1569){if('SSkhK'===_0x20d74d(0x1aa)){const _0x20a03b=_0x20d74d(0x209)[_0x20d74d(0x48a)](_0x59574c);VisuMZ[_0x20d74d(0x2a2)][_0x20d74d(0x4ec)][_0x20d74d(0x48d)][_0x20d74d(0x4ac)](new RegExp(_0x20a03b,'i'));const _0x27ed20=_0x20d74d(0x13e)[_0x20d74d(0x48a)](_0x59574c);VisuMZ[_0x20d74d(0x2a2)][_0x20d74d(0x4ec)][_0x20d74d(0x483)]['push'](new RegExp(_0x27ed20,'g'));}else{function _0x33da81(){const _0x4b8f51=_0x20d74d,_0x59b85e=this['getItemSuccessRateLabel']();this[_0x4b8f51(0x3b7)](_0x59b85e,_0x195d92,_0x55995c,_0x50409c,!![]);const _0x31b6e8=this['getItemSuccessRateText']();return this[_0x4b8f51(0x3b7)](_0x31b6e8,_0x3a7c1e,_0x1191dc,_0x335d52,![],_0x4b8f51(0x2ec)),this[_0x4b8f51(0x47a)](_0x5af770,_0x39176f,_0x206ee6),this[_0x4b8f51(0x383)](),!![];}}}},Scene_Boot[_0x263456(0x26e)][_0x263456(0x514)]=function(){const _0x5a7939=_0x263456;if(VisuMZ[_0x5a7939(0x2ab)])return;this[_0x5a7939(0x40f)]();const _0x34a281=[$dataItems,$dataWeapons,$dataArmors];for(const _0x52a1f0 of _0x34a281){if(_0x5a7939(0x4fc)===_0x5a7939(0x432)){function _0x34d920(){const _0x569d8c=_0x5a7939;return _0x39ead3[_0x569d8c(0x4da)];}}else for(const _0x52e44f of _0x52a1f0){if(!_0x52e44f)continue;VisuMZ['ItemsEquipsCore'][_0x5a7939(0x325)](_0x52e44f,_0x52a1f0),VisuMZ[_0x5a7939(0x2a2)]['Parse_Notetags_Prices'](_0x52e44f,_0x52a1f0),VisuMZ[_0x5a7939(0x2a2)][_0x5a7939(0x310)](_0x52e44f,_0x52a1f0),VisuMZ[_0x5a7939(0x2a2)][_0x5a7939(0x361)](_0x52e44f,_0x52a1f0),VisuMZ[_0x5a7939(0x2a2)]['Parse_Notetags_EnableJS'](_0x52e44f,_0x52a1f0);}}},Scene_Boot[_0x263456(0x26e)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x3600cb=_0x263456;for(const _0x1cfa0f of $dataClasses){if(!_0x1cfa0f)continue;VisuMZ[_0x3600cb(0x2a2)][_0x3600cb(0xd2)](_0x1cfa0f);}},VisuMZ[_0x263456(0x2a2)]['ParseClassNotetags']=VisuMZ[_0x263456(0x199)],VisuMZ['ParseClassNotetags']=function(_0x3cdbd6){const _0x584212=_0x263456;VisuMZ['ItemsEquipsCore'][_0x584212(0x199)][_0x584212(0x2bb)](this,_0x3cdbd6),VisuMZ['ItemsEquipsCore'][_0x584212(0xd2)](_0x3cdbd6);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x34c)]=VisuMZ['ParseItemNotetags'],VisuMZ[_0x263456(0x34c)]=function(_0x7afc6f){const _0x24912a=_0x263456;VisuMZ[_0x24912a(0x2a2)][_0x24912a(0x34c)][_0x24912a(0x2bb)](this,_0x7afc6f),VisuMZ[_0x24912a(0x2a2)]['Parse_Notetags_Batch'](_0x7afc6f,$dataItems);},VisuMZ['ItemsEquipsCore'][_0x263456(0x4d8)]=VisuMZ[_0x263456(0x4d8)],VisuMZ[_0x263456(0x4d8)]=function(_0x4f6f54){const _0x547f52=_0x263456;VisuMZ[_0x547f52(0x2a2)][_0x547f52(0x4d8)][_0x547f52(0x2bb)](this,_0x4f6f54),VisuMZ[_0x547f52(0x2a2)]['Parse_Notetags_Batch'](_0x4f6f54,$dataWeapons);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x255)]=VisuMZ[_0x263456(0x255)],VisuMZ['ParseArmorNotetags']=function(_0x588511){const _0x160aaa=_0x263456;VisuMZ[_0x160aaa(0x2a2)][_0x160aaa(0x255)][_0x160aaa(0x2bb)](this,_0x588511),VisuMZ[_0x160aaa(0x2a2)][_0x160aaa(0x312)](_0x588511,$dataArmors);},VisuMZ[_0x263456(0x2a2)][_0x263456(0xd2)]=function(_0x362574){const _0x459117=_0x263456;_0x362574[_0x459117(0x26b)]=[];if(!BattleManager[_0x459117(0x279)]()&&_0x362574[_0x459117(0x38d)][_0x459117(0x152)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x5869fb=String(RegExp['$1'])[_0x459117(0x30d)](/[\r\n]+/);for(const _0x514f1b of _0x5869fb){if(_0x459117(0x330)!=='pchJx'){function _0x329f6a(){return!![];}}else{const _0x3def7f=$dataSystem['equipTypes']['indexOf'](_0x514f1b[_0x459117(0x1ce)]());if(_0x3def7f>0x0)_0x362574[_0x459117(0x26b)]['push'](_0x3def7f);}}}else for(const _0x1235f6 of $dataSystem[_0x459117(0x386)]){const _0x39f94e=$dataSystem[_0x459117(0x386)][_0x459117(0x158)](_0x1235f6[_0x459117(0x1ce)]());if(_0x39f94e>0x0)_0x362574['equipSlots'][_0x459117(0x4ac)](_0x39f94e);}},VisuMZ['ItemsEquipsCore'][_0x263456(0x312)]=function(_0x47d360,_0x193644){const _0x531e70=_0x263456;VisuMZ[_0x531e70(0x2a2)][_0x531e70(0x325)](_0x47d360,_0x193644),VisuMZ[_0x531e70(0x2a2)]['Parse_Notetags_Prices'](_0x47d360,_0x193644),VisuMZ[_0x531e70(0x2a2)][_0x531e70(0x310)](_0x47d360,_0x193644),VisuMZ[_0x531e70(0x2a2)][_0x531e70(0x361)](_0x47d360,_0x193644),VisuMZ[_0x531e70(0x2a2)][_0x531e70(0x2b7)](_0x47d360,_0x193644);},VisuMZ['ItemsEquipsCore']['Parse_Notetags_Category']=function(_0xa29666,_0x8883fd){const _0x5c0e6=_0x263456;_0xa29666[_0x5c0e6(0x438)]=[];const _0x24162f=_0xa29666['note'],_0x540a77=_0x24162f[_0x5c0e6(0x152)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x540a77){if(_0x5c0e6(0x426)===_0x5c0e6(0x426))for(const _0x5835d5 of _0x540a77){_0x5835d5['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x2e0a16=String(RegExp['$1'])[_0x5c0e6(0x506)]()[_0x5c0e6(0x1ce)]()[_0x5c0e6(0x30d)](',');for(const _0x3bfc39 of _0x2e0a16){_0xa29666['categories'][_0x5c0e6(0x4ac)](_0x3bfc39[_0x5c0e6(0x1ce)]());}}else{function _0x4587ba(){const _0xdc9795=_0x5c0e6;_0x4bb92d[_0xdc9795(0x26e)][_0xdc9795(0x40b)][_0xdc9795(0x2bb)](this);if(this['_commandNameWindow'])this['updateCommandNameWindow']();}}}if(_0x24162f[_0x5c0e6(0x152)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x2f41c8=RegExp['$1'][_0x5c0e6(0x30d)](/[\r\n]+/);for(const _0x27cbb8 of _0x2f41c8){_0xa29666['categories']['push'](_0x27cbb8['toUpperCase']()[_0x5c0e6(0x1ce)]());}}},VisuMZ['ItemsEquipsCore']['Parse_Notetags_Prices']=function(_0x2c2519,_0x1ab1be){const _0x152b6f=_0x263456;_0x2c2519[_0x152b6f(0x38d)][_0x152b6f(0x152)](/<PRICE:[ ](\d+)>/i)&&(_0x2c2519[_0x152b6f(0x450)]=Number(RegExp['$1']));},VisuMZ[_0x263456(0x2a2)][_0x263456(0x310)]=function(_0x45a6c8,_0x3f2134){const _0x3e4319=_0x263456;if(_0x3f2134===$dataItems)return;for(let _0x16b902=0x0;_0x16b902<0x8;_0x16b902++){const _0x50da57=VisuMZ[_0x3e4319(0x2a2)][_0x3e4319(0x4ec)]['EquipParams'][_0x16b902];_0x45a6c8['note'][_0x3e4319(0x152)](_0x50da57)&&(_0x45a6c8[_0x3e4319(0x4c4)][_0x16b902]=parseInt(RegExp['$1']));}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x21e)]={},VisuMZ[_0x263456(0x2a2)]['Parse_Notetags_ParamJS']=function(_0x2e572b,_0x59c53e){const _0x51bd47=_0x263456;if(_0x59c53e===$dataItems)return;if(_0x2e572b[_0x51bd47(0x38d)]['match'](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0xf48536=String(RegExp['$1']),_0x564fa4=(_0x59c53e===$dataWeapons?_0x51bd47(0x4a0):_0x51bd47(0x379))[_0x51bd47(0x48a)](_0x2e572b['id']),_0x36e751=_0x51bd47(0x237)[_0x51bd47(0x48a)](_0xf48536);for(let _0x110ea5=0x0;_0x110ea5<0x8;_0x110ea5++){if(_0xf48536[_0x51bd47(0x152)](VisuMZ[_0x51bd47(0x2a2)][_0x51bd47(0x4ec)]['BorderRegExp'][_0x110ea5])){const _0x483962=_0x51bd47(0x2d7)[_0x51bd47(0x48a)](_0x564fa4,_0x110ea5);VisuMZ['ItemsEquipsCore'][_0x51bd47(0x21e)][_0x483962]=new Function(_0x51bd47(0x1c0),_0x51bd47(0x418),_0x36e751);}}}},VisuMZ['ItemsEquipsCore'][_0x263456(0x512)]={},VisuMZ['ItemsEquipsCore']['Parse_Notetags_EnableJS']=function(_0x192f4a,_0x4b2836){const _0x496e41=_0x263456;if(_0x4b2836!==$dataItems)return;if(_0x192f4a[_0x496e41(0x38d)][_0x496e41(0x152)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x5b196c=String(RegExp['$1']),_0x4f3980='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x496e41(0x48a)](_0x5b196c);VisuMZ[_0x496e41(0x2a2)][_0x496e41(0x512)][_0x192f4a['id']]=new Function(_0x496e41(0x1c0),_0x4f3980);}},DataManager[_0x263456(0x23a)]=function(_0x4f2486){const _0x953d5f=_0x263456;return this['isItem'](_0x4f2486)&&_0x4f2486[_0x953d5f(0x13c)]===0x2;},DataManager['maxItemAmount']=function(_0x1d409f){const _0x44c098=_0x263456;if(!_0x1d409f)return 0x63;else{if(_0x1d409f[_0x44c098(0x38d)][_0x44c098(0x152)](/<MAX:[ ](\d+)>/i))return parseInt(RegExp['$1']);else{if(_0x44c098(0x28e)===_0x44c098(0x28e))return this[_0x44c098(0x2f8)](_0x1d409f);else{function _0x172058(){const _0x34d281=_0x44c098;_0x19121b['ItemsEquipsCore']['Settings'][_0x34d281(0x142)][_0x34d281(0x256)][_0x34d281(0x2bb)](this),this['drawParamsItemsEquipsCore']();}}}}},DataManager['defaultItemMax']=function(_0x557f62){const _0x4112d8=_0x263456;if(this[_0x4112d8(0x3c8)](_0x557f62)){if(_0x4112d8(0xf0)===_0x4112d8(0xf0))return VisuMZ[_0x4112d8(0x2a2)][_0x4112d8(0x2ad)][_0x4112d8(0x377)][_0x4112d8(0x2a9)];else{function _0x1512fd(){const _0x18753b=_0x4112d8;_0x50ad14=_0x18753b(0x4ad)['format'](_0x1aa6d1['id']);}}}else{if(this[_0x4112d8(0x164)](_0x557f62))return VisuMZ[_0x4112d8(0x2a2)][_0x4112d8(0x2ad)][_0x4112d8(0x377)][_0x4112d8(0x2fb)];else{if(this[_0x4112d8(0x224)](_0x557f62))return VisuMZ['ItemsEquipsCore']['Settings']['ItemScene']['MaxArmors'];}}},ColorManager[_0x263456(0x118)]=function(_0x23dfe5){const _0x1b6558=_0x263456;if(!_0x23dfe5){if(_0x1b6558(0x166)===_0x1b6558(0x166))return this['normalColor']();else{function _0xa9c40f(){const _0x459183=_0x1b6558;return _0x43ab4f['ItemsEquipsCore']['Settings']['StatusWindow'][_0x459183(0x2e6)];}}}else{if(_0x23dfe5[_0x1b6558(0x38d)][_0x1b6558(0x152)](/<COLOR:[ ](\d+)>/i))return this['textColor'](Number(RegExp['$1'])['clamp'](0x0,0x1f));else{if(_0x23dfe5[_0x1b6558(0x38d)]['match'](/<COLOR:[ ]#(.*)>/i))return'#'+String(RegExp['$1']);else{if(_0x1b6558(0x492)!=='MECOk')return this[_0x1b6558(0x269)]();else{function _0x1a0068(){const _0x1535c6=_0x1b6558;return _0x269194[_0x1535c6(0x2a2)]['Settings'][_0x1535c6(0x142)]['NonOptimizeETypes'];}}}}}},ColorManager[_0x263456(0x20d)]=function(_0xf5ffde){const _0x405807=_0x263456;return _0xf5ffde=String(_0xf5ffde),_0xf5ffde['match'](/#(.*)/i)?'#%1'[_0x405807(0x48a)](String(RegExp['$1'])):this[_0x405807(0x28b)](Number(_0xf5ffde));},SceneManager[_0x263456(0x4ae)]=function(){const _0x327fd7=_0x263456;return this[_0x327fd7(0x4cf)]&&this[_0x327fd7(0x4cf)][_0x327fd7(0x424)]===Scene_Shop;},Game_Temp[_0x263456(0x26e)][_0x263456(0x2dc)]=function(){const _0x51b31a=_0x263456;if(this[_0x51b31a(0x2d2)])return![];return VisuMZ[_0x51b31a(0x2a2)]['Settings'][_0x51b31a(0x168)][_0x51b31a(0x36a)];},VisuMZ[_0x263456(0x11f)]=VisuMZ['ItemsEquipsCore'][_0x263456(0x2ad)][_0x263456(0x143)][_0x263456(0x3dd)],VisuMZ[_0x263456(0x2a2)][_0x263456(0x265)]=Game_BattlerBase[_0x263456(0x26e)][_0x263456(0x223)],Game_BattlerBase['prototype'][_0x263456(0x223)]=function(_0x5d2a40){const _0xe04e63=_0x263456;if(this[_0xe04e63(0x17f)])return this[_0xe04e63(0x260)]?VisuMZ[_0xe04e63(0x11f)]:0x1;else{if(_0xe04e63(0x45f)==='VRhcA')return VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param'][_0xe04e63(0x2bb)](this,_0x5d2a40);else{function _0x667686(){const _0x57e753=_0xe04e63,_0x2a0aff=this[_0x57e753(0x3f7)](_0x19e1ec),_0x5ed88d=this['commandName'](_0x1c64d1),_0x4ecd34=this[_0x57e753(0x3bd)](_0x5ed88d)[_0x57e753(0x528)];this[_0x57e753(0x172)](this[_0x57e753(0x4d6)](_0x310345));const _0x1e0d00=this[_0x57e753(0x252)]();if(_0x1e0d00===_0x57e753(0x2ec))this['drawTextEx'](_0x5ed88d,_0x2a0aff['x']+_0x2a0aff[_0x57e753(0x528)]-_0x4ecd34,_0x2a0aff['y'],_0x4ecd34);else{if(_0x1e0d00===_0x57e753(0x51f)){const _0x1fa899=_0x2a0aff['x']+_0x44a12f['floor']((_0x2a0aff[_0x57e753(0x528)]-_0x4ecd34)/0x2);this['drawTextEx'](_0x5ed88d,_0x1fa899,_0x2a0aff['y'],_0x4ecd34);}else this[_0x57e753(0xe5)](_0x5ed88d,_0x2a0aff['x'],_0x2a0aff['y'],_0x4ecd34);}}}}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x185)]=Game_BattlerBase[_0x263456(0x26e)][_0x263456(0x3a3)],Game_BattlerBase[_0x263456(0x26e)][_0x263456(0x3a3)]=function(_0x1f541b){const _0x3e4906=_0x263456;if(!_0x1f541b)return![];if(!VisuMZ[_0x3e4906(0x2a2)][_0x3e4906(0x185)][_0x3e4906(0x2bb)](this,_0x1f541b))return![];if(!this['meetsItemConditionsNotetags'](_0x1f541b))return![];if(!this['meetsItemConditionsJS'](_0x1f541b))return![];return!![];},Game_BattlerBase[_0x263456(0x26e)]['meetsItemConditionsNotetags']=function(_0x1bd0f3){if(!this['checkItemConditionsSwitchNotetags'](_0x1bd0f3))return![];return!![];},Game_BattlerBase[_0x263456(0x26e)]['checkItemConditionsSwitchNotetags']=function(_0x21f354){const _0x293639=_0x263456,_0x3819c6=_0x21f354[_0x293639(0x38d)];if(_0x3819c6[_0x293639(0x152)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x425da9=JSON[_0x293639(0x4fe)]('['+RegExp['$1'][_0x293639(0x152)](/\d+/g)+']');for(const _0x3f7b65 of _0x425da9){if(!$gameSwitches[_0x293639(0x357)](_0x3f7b65))return![];}return!![];}if(_0x3819c6[_0x293639(0x152)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1b083c=JSON[_0x293639(0x4fe)]('['+RegExp['$1'][_0x293639(0x152)](/\d+/g)+']');for(const _0x227174 of _0x1b083c){if(!$gameSwitches[_0x293639(0x357)](_0x227174))return![];}return!![];}if(_0x3819c6['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x293639(0x1b5)!==_0x293639(0x1b5)){function _0x51dec0(){const _0x42af9e=_0x293639;return _0x7e6b31['ItemsEquipsCore'][_0x42af9e(0x2ad)]['ItemScene'][_0x42af9e(0x1bc)];}}else{const _0x1ed8ca=JSON[_0x293639(0x4fe)]('['+RegExp['$1'][_0x293639(0x152)](/\d+/g)+']');for(const _0x27b259 of _0x1ed8ca){if(_0x293639(0x3ad)===_0x293639(0x2a5)){function _0x3f5623(){const _0x18ebeb=_0x293639,_0x5a1505=_0x2dd222['battleMembers']()[_0x18ebeb(0x158)](_0x4e28a0),_0x4ed9b6=_0x13beb8+_0x142f58+_0x5a1505*_0x45687d;this[_0x18ebeb(0x172)](_0x4e63f9['canEquip'](this[_0x18ebeb(0x139)])),this[_0x18ebeb(0x422)](_0x45a0e6,_0x4ed9b6+_0x352374/0x2,_0x5a20ef);let _0x2ff187=_0x4766e7;for(const _0x105af5 of _0x47134d){const _0x24e31c=_0x2ff187-(_0x6ce2f-_0x17d7e3)/0x2;this[_0x18ebeb(0x4d1)](_0x57b1a2,_0x105af5,_0x4ed9b6,_0x24e31c,_0x1ea2f5),_0x2ff187+=_0x3d7df4;}}}else{if($gameSwitches[_0x293639(0x357)](_0x27b259))return!![];}}return![];}}if(_0x3819c6['match'](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5b1ad0=JSON[_0x293639(0x4fe)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2130fd of _0x5b1ad0){if(_0x293639(0x375)===_0x293639(0x375)){if(!$gameSwitches['value'](_0x2130fd))return!![];}else{function _0x524a79(){const _0x1e3386=_0x293639;_0x5f08a8['prototype'][_0x1e3386(0x133)][_0x1e3386(0x2bb)](this),this[_0x1e3386(0x3ba)]();}}}return![];}if(_0x3819c6['match'](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5ab839=JSON[_0x293639(0x4fe)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x33d9e2 of _0x5ab839){if(!$gameSwitches['value'](_0x33d9e2))return!![];}return![];}if(_0x3819c6[_0x293639(0x152)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x293639(0x155)===_0x293639(0x272)){function _0x21424c(){const _0x5b9f3b=_0x293639,_0x435b85=_0x4763d1(_0x33ed14['$1'])[_0x5b9f3b(0x30d)](/[\r\n]+/);for(const _0x4b0d37 of _0x435b85){if(_0x4b0d37[_0x5b9f3b(0x152)](/(.*):[ ](.*)/i)){const _0x7f4bce=_0xea3e8d(_0x3a1b38['$1'])[_0x5b9f3b(0x506)]()[_0x5b9f3b(0x1ce)](),_0x34881e=_0x8d3fde(_0x34fdfb['$2'])[_0x5b9f3b(0x1ce)]();this[_0x5b9f3b(0x318)][_0x7f4bce]=_0x34881e;}}}}else{const _0x51e172=JSON[_0x293639(0x4fe)]('['+RegExp['$1'][_0x293639(0x152)](/\d+/g)+']');for(const _0x337a33 of _0x51e172){if($gameSwitches[_0x293639(0x357)](_0x337a33))return![];}return!![];}}return!![];},Game_BattlerBase[_0x263456(0x26e)]['meetsItemConditionsJS']=function(_0x48f959){const _0x520609=_0x263456,_0x176e85=_0x48f959[_0x520609(0x38d)],_0x437829=VisuMZ[_0x520609(0x2a2)][_0x520609(0x512)];if(_0x437829[_0x48f959['id']])return _0x437829[_0x48f959['id']]['call'](this,_0x48f959);else{if('aYnjg'===_0x520609(0x211))return!![];else{function _0x14cf0c(){const _0xcb7a31=_0x520609;this[_0xcb7a31(0x384)](),_0x35b2b9[_0xcb7a31(0x2a2)][_0xcb7a31(0x3f8)][_0xcb7a31(0x2bb)](this,_0x3f6567);}}}},Game_Actor['prototype']['initEquips']=function(_0x38f3b9){const _0x30d047=_0x263456;_0x38f3b9=this['convertInitEquipsToItems'](_0x38f3b9);const _0x1b84e4=this[_0x30d047(0x26b)]();this['_equips']=[];for(let _0x27654d=0x0;_0x27654d<_0x1b84e4['length'];_0x27654d++){this['_equips'][_0x27654d]=new Game_Item();}for(let _0x2dbdde=0x0;_0x2dbdde<_0x1b84e4[_0x30d047(0x25d)];_0x2dbdde++){if(_0x30d047(0x19b)===_0x30d047(0x19b)){const _0x5ed01b=_0x1b84e4[_0x2dbdde],_0x4cbb23=this[_0x30d047(0x145)](_0x38f3b9,_0x5ed01b);if(this[_0x30d047(0x420)](_0x4cbb23))this[_0x30d047(0x3b3)][_0x2dbdde][_0x30d047(0x146)](_0x4cbb23);}else{function _0x20b245(){return _0x5502e3;}}}this[_0x30d047(0xe4)](!![]),this[_0x30d047(0x133)]();},Game_Actor['prototype'][_0x263456(0xf6)]=function(_0x305e2e){const _0x14b051=_0x263456,_0x57437b=[];for(let _0xd951ea=0x0;_0xd951ea<_0x305e2e[_0x14b051(0x25d)];_0xd951ea++){const _0x546d67=_0x305e2e[_0xd951ea];if(_0x546d67<=0x0)continue;const _0x17af96=$dataSystem['equipTypes'][_0xd951ea+0x1];if(_0x17af96===$dataSystem['equipTypes'][0x1]||_0xd951ea===0x1&&this[_0x14b051(0x147)]()){if(_0x14b051(0x2db)!==_0x14b051(0x203))_0x57437b[_0x14b051(0x4ac)]($dataWeapons[_0x546d67]);else{function _0x15261a(){const _0x3278f8=_0x14b051,_0x334184=this[_0x3278f8(0x3f7)](this['index']());let _0x5be68b=this[_0x3278f8(0x50f)](this[_0x3278f8(0x192)]());_0x5be68b=_0x5be68b[_0x3278f8(0x35c)](/\\I\[(\d+)\]/gi,''),_0x1acf5f[_0x3278f8(0x383)](),this[_0x3278f8(0x1ff)](_0x5be68b,_0x334184),this[_0x3278f8(0x3f9)](_0x5be68b,_0x334184),this[_0x3278f8(0x489)](_0x5be68b,_0x334184);}}}else{if(BattleManager[_0x14b051(0x279)]()){const _0x296d94=$dataArmors[_0x546d67];if(_0x296d94['etypeId']===_0xd951ea+0x1){if(_0x14b051(0x1c6)===_0x14b051(0x1c6))_0x57437b[_0x14b051(0x4ac)](_0x296d94);else{function _0x116842(){_0x45ce45=_0x397944;if(!_0x475f18[_0x27fdd8])return _0x5ca9df;}}}}else _0x57437b[_0x14b051(0x4ac)]($dataArmors[_0x546d67]);}}return _0x57437b;},Game_Actor[_0x263456(0x26e)]['getMatchingInitEquip']=function(_0x4d816a,_0x3270d7){const _0x2c7325=_0x263456;for(const _0x4121ad of _0x4d816a){if(!_0x4121ad)continue;if(_0x4121ad[_0x2c7325(0xe6)]===_0x3270d7)return _0x4d816a['splice'](_0x4d816a[_0x2c7325(0x158)](_0x4121ad),0x1),_0x4121ad;}return null;},Game_Actor['prototype'][_0x263456(0x26b)]=function(){const _0x1bb014=_0x263456,_0x1dd347=JsonEx[_0x1bb014(0x46a)](this[_0x1bb014(0x162)]||this[_0x1bb014(0x42f)]()[_0x1bb014(0x26b)]);if(_0x1dd347[_0x1bb014(0x25d)]>=0x2&&this[_0x1bb014(0x147)]())_0x1dd347[0x1]=0x1;return _0x1dd347;},Game_Actor['prototype'][_0x263456(0x3c9)]=function(_0x5e0293){const _0x248e9a=_0x263456;_0x5e0293[_0x248e9a(0x494)](0x0),_0x5e0293[_0x248e9a(0x494)](-0x1),this[_0x248e9a(0x162)]=_0x5e0293,this[_0x248e9a(0x133)](),this[_0x248e9a(0x38b)]();},Game_Actor[_0x263456(0x26e)][_0x263456(0x114)]=function(){const _0x19f32d=_0x263456;this[_0x19f32d(0x162)]=undefined,this['refresh'](),this[_0x19f32d(0x38b)]();},Game_Actor['prototype'][_0x263456(0x38b)]=function(){const _0x3f85c1=_0x263456;let _0xa6f1e2=this[_0x3f85c1(0x26b)]()[_0x3f85c1(0x25d)];while(this[_0x3f85c1(0x3b3)][_0x3f85c1(0x25d)]>_0xa6f1e2){const _0x755edb=this[_0x3f85c1(0x3b3)][this[_0x3f85c1(0x3b3)][_0x3f85c1(0x25d)]-0x1];_0x755edb&&_0x755edb['object']()&&$gameParty[_0x3f85c1(0x3d7)](_0x755edb[_0x3f85c1(0x2d1)](),0x1),this[_0x3f85c1(0x3b3)]['pop']();}while(_0xa6f1e2>this['_equips']['length']){if('wvciu'!==_0x3f85c1(0x402)){function _0x33efeb(){const _0x3b6ef7=_0x3f85c1;_0x5e1947[_0x3b6ef7(0x41b)](_0x3b6ef7(0x179)['format'](this[_0x3b6ef7(0x139)]['name'])),_0x12b08f['log'](_0x190a3b);}}else this[_0x3f85c1(0x3b3)][_0x3f85c1(0x4ac)](new Game_Item());}},Game_Actor['prototype']['prepareNewEquipSlotsOnLoad']=function(){const _0x23e6d1=_0x263456,_0x49af9e=this[_0x23e6d1(0x26b)]();for(let _0x3691a7=0x0;_0x3691a7<_0x49af9e[_0x23e6d1(0x25d)];_0x3691a7++){if(!this[_0x23e6d1(0x3b3)][_0x3691a7])this[_0x23e6d1(0x3b3)][_0x3691a7]=new Game_Item();}this[_0x23e6d1(0xe4)](![]),this[_0x23e6d1(0x133)]();},VisuMZ['ItemsEquipsCore']['Game_Actor_changeEquip']=Game_Actor['prototype'][_0x263456(0x4b3)],Game_Actor[_0x263456(0x26e)][_0x263456(0x4b3)]=function(_0x16029c,_0x7d7380){const _0x2df747=_0x263456;if(!this[_0x2df747(0x18b)]){if(_0x2df747(0x2ac)===_0x2df747(0x3c0)){function _0x18d6fa(){const _0x5f49e7=_0x2df747;return _0x174961[_0x5f49e7(0x20c)]&&_0xf39da5[_0x5f49e7(0x26e)][_0x5f49e7(0x407)][_0x5f49e7(0x2bb)](this);}}else{const _0x1fc5f6=JsonEx['makeDeepCopy'](this);_0x1fc5f6[_0x2df747(0x18b)]=!![],VisuMZ[_0x2df747(0x2a2)]['Game_Actor_changeEquip']['call'](this,_0x16029c,_0x7d7380),this[_0x2df747(0x2f6)](_0x1fc5f6);}}else{if(_0x2df747(0x12a)!==_0x2df747(0x408))VisuMZ[_0x2df747(0x2a2)][_0x2df747(0x352)][_0x2df747(0x2bb)](this,_0x16029c,_0x7d7380);else{function _0xe97d(){const _0x1f4b22=_0x2df747;return _0x4aeec9[_0x1f4b22(0x2a2)][_0x1f4b22(0x228)][_0x1f4b22(0x2bb)](this);}}}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x4a2)]=Game_Actor[_0x263456(0x26e)][_0x263456(0x4c0)],Game_Actor[_0x263456(0x26e)][_0x263456(0x4c0)]=function(_0x2c37ec,_0x5e81be){const _0xeff495=_0x263456;if(!this['_tempActor']){const _0x18eac4=JsonEx['makeDeepCopy'](this);_0x18eac4[_0xeff495(0x18b)]=!![],VisuMZ[_0xeff495(0x2a2)][_0xeff495(0x4a2)][_0xeff495(0x2bb)](this,_0x2c37ec,_0x5e81be),this[_0xeff495(0x2f6)](_0x18eac4);}else VisuMZ[_0xeff495(0x2a2)][_0xeff495(0x4a2)]['call'](this,_0x2c37ec,_0x5e81be);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x1f2)]=Game_Actor[_0x263456(0x26e)][_0x263456(0x322)],Game_Actor[_0x263456(0x26e)][_0x263456(0x322)]=function(_0x220ace){const _0x40810c=_0x263456;if(!this[_0x40810c(0x18b)]){const _0x5ef59a=JsonEx[_0x40810c(0x46a)](this);_0x5ef59a['_tempActor']=!![],VisuMZ['ItemsEquipsCore'][_0x40810c(0x1f2)][_0x40810c(0x2bb)](this,_0x220ace),this[_0x40810c(0x2f6)](_0x5ef59a);}else VisuMZ[_0x40810c(0x2a2)][_0x40810c(0x1f2)]['call'](this,_0x220ace);},Game_Actor['prototype']['releaseUnequippableItems']=function(_0x4a7a1a){const _0x13dbd4=_0x263456;for(;;){if(_0x13dbd4(0x2f9)!==_0x13dbd4(0x2c1)){const _0x353651=this[_0x13dbd4(0x26b)](),_0x4f5983=this[_0x13dbd4(0x16b)](),_0x4838f0=_0x4f5983[_0x13dbd4(0x25d)];let _0x566126=![];for(let _0x24a2b7=0x0;_0x24a2b7<_0x4838f0;_0x24a2b7++){const _0x355a8d=_0x4f5983[_0x24a2b7];if(_0x355a8d&&(!this[_0x13dbd4(0x420)](_0x355a8d)||_0x355a8d[_0x13dbd4(0xe6)]!==_0x353651[_0x24a2b7])){if(_0x13dbd4(0x2e1)==='SRpUY'){function _0x19ee18(){const _0x44da=_0x13dbd4;return this[_0x44da(0x399)]();}}else{!_0x4a7a1a&&this[_0x13dbd4(0x49d)](null,_0x355a8d);if(!this[_0x13dbd4(0x18b)]){if('wdYQf'!=='wdYQf'){function _0x76a52d(){const _0x40520b=_0x13dbd4;return this[_0x40520b(0x239)]();}}else{const _0x21c2d9=JsonEx[_0x13dbd4(0x46a)](this);_0x21c2d9[_0x13dbd4(0x18b)]=!![],this['_equips'][_0x24a2b7][_0x13dbd4(0x146)](null),this[_0x13dbd4(0x2f6)](_0x21c2d9);}}else{if(_0x13dbd4(0x182)===_0x13dbd4(0x2cc)){function _0xbe7318(){const _0x3f4ca1=_0x13dbd4,_0x3cda2c=_0x2f4440[_0x3f4ca1(0x2a2)][_0x3f4ca1(0x2ad)]['StatusWindow'][_0x3f4ca1(0x2b1)];return _0x3cda2c[_0x3f4ca1(0x48a)](_0x83e130['mp']);}}else this[_0x13dbd4(0x3b3)][_0x24a2b7][_0x13dbd4(0x146)](null);}_0x566126=!![];}}}if(!_0x566126){if('Vhtkc'==='tBymY'){function _0x2bb410(){const _0x2ad654=_0x13dbd4,_0x3213cd=_0x2ad654(0x510);if(this[_0x2ad654(0x401)][_0x2ad654(0x49f)]>=0x0&&!this[_0x2ad654(0x318)][_0x3213cd])return![];const _0x55f85b=this['getItemEffectsTpDamageLabel']();this['drawItemKeyData'](_0x55f85b,_0x3eafb7,_0x4b0b75,_0x24facd,!![]);const _0x1125b4=this[_0x2ad654(0x517)]();return this[_0x2ad654(0x3f5)](_0x23a21c[_0x2ad654(0x348)]()),this[_0x2ad654(0x3b7)](_0x1125b4,_0x3e0088,_0x4a8194,_0x4d5e3a,![],_0x2ad654(0x2ec)),this[_0x2ad654(0x47a)](_0x3d9c73,_0x18c47c,_0x5d3583),this['resetFontSettings'](),!![];}}else break;}}else{function _0xf0d9ed(){this['onCategoryCancel']();}}}},Game_Actor[_0x263456(0x26e)][_0x263456(0x2f6)]=function(_0x240cd9){const _0x1409b3=_0x263456;if(this['_tempActor'])return;if(!VisuMZ[_0x1409b3(0x2a2)][_0x1409b3(0x2ad)][_0x1409b3(0x142)]['EquipAdjustHpMp'])return;const _0x419e9d=Math[_0x1409b3(0x2de)](_0x240cd9['hpRate']()*this['mhp']),_0x1122c0=Math[_0x1409b3(0x2de)](_0x240cd9[_0x1409b3(0x32b)]()*this[_0x1409b3(0x24f)]);if(this['hp']>0x0)this[_0x1409b3(0x1d0)](_0x419e9d);if(this['mp']>0x0)this[_0x1409b3(0x1c3)](_0x1122c0);},Game_Actor[_0x263456(0x26e)][_0x263456(0x2e8)]=function(){const _0x18889c=_0x263456,_0x14c575=this[_0x18889c(0x26b)]()[_0x18889c(0x25d)];for(let _0x1ede78=0x0;_0x1ede78<_0x14c575;_0x1ede78++){if(this[_0x18889c(0x305)](_0x1ede78))this[_0x18889c(0x4b3)](_0x1ede78,null);}},Game_Actor[_0x263456(0x26e)]['isClearEquipOk']=function(_0x39f6cf){const _0x264218=_0x263456;return this[_0x264218(0x3a0)]()[_0x264218(0x3ee)](this[_0x264218(0x26b)]()[_0x39f6cf])?![]:this[_0x264218(0x4af)](_0x39f6cf);},Game_Actor[_0x263456(0x26e)]['nonRemovableEtypes']=function(){const _0x32d175=_0x263456;return VisuMZ[_0x32d175(0x2a2)][_0x32d175(0x2ad)]['EquipScene'][_0x32d175(0xd5)];},Game_Actor[_0x263456(0x26e)][_0x263456(0x10a)]=function(){const _0x485702=_0x263456,_0x3654d8=this['equipSlots']()[_0x485702(0x25d)];for(let _0x3fe1ae=0x0;_0x3fe1ae<_0x3654d8;_0x3fe1ae++){if(_0x485702(0x11e)===_0x485702(0x11e)){if(this[_0x485702(0x20a)](_0x3fe1ae))this[_0x485702(0x4b3)](_0x3fe1ae,null);}else{function _0xb4121e(){const _0x456de2=_0x485702;_0x144912['ItemsEquipsCore'][_0x456de2(0x220)]['call'](this),this['_itemWindow'][_0x456de2(0x40b)]();}}}for(let _0x2907b0=0x0;_0x2907b0<_0x3654d8;_0x2907b0++){if(_0x485702(0x1a6)===_0x485702(0x1a6)){if(this[_0x485702(0x20a)](_0x2907b0))this[_0x485702(0x4b3)](_0x2907b0,this[_0x485702(0xc4)](_0x2907b0));}else{function _0x38b02a(){const _0x4715e9=_0x485702,_0x1ada17=_0x35517c[_0x4715e9(0x4fe)]('['+_0x11e808['$1']['match'](/\d+/g)+']');for(const _0x561ea4 of _0x1ada17){if(_0x35c069[_0x4715e9(0x357)](_0x561ea4))return![];}return!![];}}}},Game_Actor[_0x263456(0x26e)][_0x263456(0x20a)]=function(_0x2cebf8){const _0x5e3c44=_0x263456;if(this['nonOptimizeEtypes']()[_0x5e3c44(0x3ee)](this['equipSlots']()[_0x2cebf8])){if(_0x5e3c44(0x1a2)===_0x5e3c44(0x403)){function _0xc4a664(){const _0x8327a3=_0x5e3c44;_0x56ff1b[_0x8327a3(0x2a2)]['Scene_Equip_createSlotWindow'][_0x8327a3(0x2bb)](this),this[_0x8327a3(0x407)]()&&this[_0x8327a3(0x47e)]();}}else return![];}else{if(_0x5e3c44(0x3a2)===_0x5e3c44(0x4aa)){function _0x375bae(){const _0x3d8774=_0x5e3c44;this['resetFontSettings'](),this['contents']['fontSize']=this[_0x3d8774(0x222)]();let _0x2e973c=this[_0x3d8774(0x381)](_0x345eda['param'](_0xa8982c))+0x4+_0x37b956;return _0x1a29cc[_0x3d8774(0x20c)]?(this[_0x3d8774(0x188)](_0x9672db,_0x49113f,_0x5de545,_0x180a70,!![]),_0x548214[_0x3d8774(0x42b)]['Settings'][_0x3d8774(0x488)][_0x3d8774(0x14d)]&&(_0x2e973c+=_0x26b51f[_0x3d8774(0x1b4)]+0x4)):(this[_0x3d8774(0x3f5)](_0x3bb464[_0x3d8774(0x36c)]()),this['drawText'](_0x529311['param'](_0x423f30),_0x5e2783,_0x2adf69,_0x1f75f6)),this[_0x3d8774(0x383)](),_0x2e973c;}}else return this[_0x5e3c44(0x4af)](_0x2cebf8);}},Game_Actor[_0x263456(0x26e)][_0x263456(0x4b7)]=function(){const _0x25926f=_0x263456;return VisuMZ['ItemsEquipsCore']['Settings'][_0x25926f(0x142)][_0x25926f(0x3d8)];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x31c)]=Game_Actor[_0x263456(0x26e)][_0x263456(0x49d)],Game_Actor[_0x263456(0x26e)][_0x263456(0x49d)]=function(_0x3d2e97,_0x565ff5){const _0xfccdd5=_0x263456;if(this[_0xfccdd5(0x18b)])return![];$gameTemp[_0xfccdd5(0x2d2)]=!![];const _0x4c5d6d=VisuMZ[_0xfccdd5(0x2a2)][_0xfccdd5(0x31c)][_0xfccdd5(0x2bb)](this,_0x3d2e97,_0x565ff5);return $gameTemp['_bypassNewLabel']=![],_0x4c5d6d;},Game_Actor[_0x263456(0x26e)]['changeEquipById']=function(_0x582952,_0x1db8f0){const _0x1e0eed=_0x263456,_0x1de51d=this[_0x1e0eed(0x1fa)](_0x582952);if(_0x1de51d<0x0)return;const _0x253e7b=_0x582952===0x1?$dataWeapons[_0x1db8f0]:$dataArmors[_0x1db8f0];this[_0x1e0eed(0x4b3)](_0x1de51d,_0x253e7b);},Game_Actor['prototype'][_0x263456(0x1fa)]=function(_0x31f3ae){const _0x4f2174=_0x263456;let _0x41405b=0x0;const _0x82d6d4=this['equipSlots'](),_0x3cbdf2=this[_0x4f2174(0x16b)]();for(let _0x3da487=0x0;_0x3da487<_0x82d6d4['length'];_0x3da487++){if(_0x82d6d4[_0x3da487]===_0x31f3ae){if(_0x4f2174(0x477)===_0x4f2174(0x50b)){function _0x5a9ec5(){const _0x1b37fa=_0x4f2174;_0x57aad7[_0x1b37fa(0x20c)]?(_0x238050=this[_0x1b37fa(0x1bb)][_0x1b37fa(0x31d)](_0x32cc3d,![]),_0x42bde7=this[_0x1b37fa(0x18b)]['paramValueByName'](_0x4e7bd6,![]),_0xe478ee=this[_0x1b37fa(0x18b)][_0x1b37fa(0x31d)](_0x2a1a9c,!![])):(_0xa07804=this[_0x1b37fa(0x1bb)][_0x1b37fa(0x223)](_0x267d0c),_0x59c918=this['_tempActor'][_0x1b37fa(0x223)](_0x210eee),_0x5389f3=this[_0x1b37fa(0x18b)][_0x1b37fa(0x223)](_0x1cbe24));const _0x158253=_0xc41589,_0x1b8aa9=_0x219503;_0x23556b=_0x1b8aa9-_0x158253,this[_0x1b37fa(0x3f5)](_0x5e8087[_0x1b37fa(0x454)](_0x510a30)),this[_0x1b37fa(0xf5)](_0x4b7264,_0x4e98d5,_0x5159dc,_0x3a756e-_0x4ed211,_0x1b37fa(0x2ec));}}else{_0x41405b=_0x3da487;if(!_0x3cbdf2[_0x3da487])return _0x41405b;}}}return _0x41405b;},VisuMZ['ItemsEquipsCore']['Game_Actor_paramPlus']=Game_Actor[_0x263456(0x26e)][_0x263456(0x47d)],Game_Actor[_0x263456(0x26e)][_0x263456(0x47d)]=function(_0x54c227){const _0x11e07a=_0x263456;let _0x33bb58=VisuMZ[_0x11e07a(0x2a2)][_0x11e07a(0x221)][_0x11e07a(0x2bb)](this,_0x54c227);for(const _0x57d6a7 of this[_0x11e07a(0x16b)]()){if(_0x57d6a7)_0x33bb58+=this[_0x11e07a(0x27c)](_0x57d6a7,_0x54c227);}return _0x33bb58;},Game_Actor[_0x263456(0x26e)]['paramPlusItemsEquipsCoreCustomJS']=function(_0x9850e3,_0x4f6c7e){const _0x5d9c38=_0x263456;if(this[_0x5d9c38(0x204)])return 0x0;const _0x10758f=(DataManager[_0x5d9c38(0x164)](_0x9850e3)?_0x5d9c38(0x4a0):'A%1')[_0x5d9c38(0x48a)](_0x9850e3['id']),_0x218f75=_0x5d9c38(0x2d7)[_0x5d9c38(0x48a)](_0x10758f,_0x4f6c7e);if(VisuMZ[_0x5d9c38(0x2a2)]['paramJS'][_0x218f75]){this['_calculatingJSParameters']=!![];const _0x57a250=VisuMZ[_0x5d9c38(0x2a2)]['paramJS'][_0x218f75][_0x5d9c38(0x2bb)](this,_0x9850e3,_0x4f6c7e);return this[_0x5d9c38(0x204)]=![],_0x57a250;}else{if(_0x5d9c38(0x35d)!=='ybBTp')return 0x0;else{function _0x48f568(){const _0x114d77=_0x5d9c38,_0x2eae9c=0x0,_0x4e402e=this[_0x114d77(0xff)](),_0x3ef7d8=_0x2b2297[_0x114d77(0x482)],_0x33310e=this[_0x114d77(0x434)]();return new _0x3c513f(_0x2eae9c,_0x4e402e,_0x3ef7d8,_0x33310e);}}}},Game_Actor['prototype'][_0x263456(0x3ca)]=function(_0x262125){const _0x244f74=_0x263456;this[_0x244f74(0x17f)]=!![],this['_shopStatusMenuAlly']=_0x262125;},VisuMZ['ItemsEquipsCore'][_0x263456(0x174)]=Game_Party[_0x263456(0x26e)][_0x263456(0x288)],Game_Party['prototype'][_0x263456(0x288)]=function(){const _0x2ee0a5=_0x263456;VisuMZ[_0x2ee0a5(0x2a2)][_0x2ee0a5(0x174)][_0x2ee0a5(0x2bb)](this),this[_0x2ee0a5(0x37a)]();},Game_Party[_0x263456(0x26e)][_0x263456(0x37a)]=function(){const _0x54faf1=_0x263456;this[_0x54faf1(0x12d)]=[];},Game_Party[_0x263456(0x26e)]['isNewItem']=function(_0xb29d00){const _0x22b778=_0x263456;if(!$gameTemp[_0x22b778(0x2dc)]())return![];if(this[_0x22b778(0x12d)]===undefined)this['initNewItemsList']();let _0x1bb52b='';if(DataManager[_0x22b778(0x3c8)](_0xb29d00)){if(_0x22b778(0x28d)===_0x22b778(0x28d))_0x1bb52b=_0x22b778(0x140)[_0x22b778(0x48a)](_0xb29d00['id']);else{function _0x31e6ec(){const _0x1c2937=_0x22b778,_0x38260e=_0x3fa88c[_0x1c2937(0x2a2)][_0x1c2937(0x2ad)][_0x1c2937(0x143)][_0x1c2937(0x4fa)];return _0x38260e[_0x1c2937(0x48a)](_0x455960['hp']);}}}else{if(DataManager[_0x22b778(0x164)](_0xb29d00))_0x1bb52b=_0x22b778(0x111)[_0x22b778(0x48a)](_0xb29d00['id']);else{if(DataManager[_0x22b778(0x224)](_0xb29d00)){if('MxDxX'===_0x22b778(0x3d9)){function _0xf9ab4b(){const _0x4e5d6b=_0x22b778;_0x5271d8[_0x4e5d6b(0x2a2)][_0x4e5d6b(0x4b4)][_0x4e5d6b(0x2bb)](this),this[_0x4e5d6b(0x2f5)]()&&this[_0x4e5d6b(0x32e)]();}}else _0x1bb52b='armor-%1'[_0x22b778(0x48a)](_0xb29d00['id']);}else{if(_0x22b778(0x2c6)!==_0x22b778(0x2c6)){function _0x341b8f(){const _0x5cba10=_0x22b778;_0x31f549=_0x5cba10(0x175)[_0x5cba10(0x48a)](_0x19e05e,_0x707a41);}}else return;}}}return this['_newItemsList'][_0x22b778(0x3ee)](_0x1bb52b);},Game_Party[_0x263456(0x26e)][_0x263456(0x1b8)]=function(_0x459220){const _0x285f43=_0x263456;if(!$gameTemp[_0x285f43(0x2dc)]())return;if(this[_0x285f43(0x12d)]===undefined)this[_0x285f43(0x37a)]();let _0x5cf3ab='';if(DataManager[_0x285f43(0x3c8)](_0x459220))_0x5cf3ab=_0x285f43(0x140)[_0x285f43(0x48a)](_0x459220['id']);else{if(DataManager['isWeapon'](_0x459220))_0x5cf3ab=_0x285f43(0x111)[_0x285f43(0x48a)](_0x459220['id']);else{if(DataManager[_0x285f43(0x224)](_0x459220)){if(_0x285f43(0x32a)!==_0x285f43(0x32a)){function _0x4679c7(){const _0x55fd22=_0x285f43;_0x4dbba6[_0x55fd22(0x26e)]['deactivate'][_0x55fd22(0x2bb)](this),this['_categoryWindow']&&this[_0x55fd22(0x217)][_0x55fd22(0x407)]()&&this[_0x55fd22(0x217)]['deactivate']();}}else _0x5cf3ab=_0x285f43(0x4ad)[_0x285f43(0x48a)](_0x459220['id']);}else{if(_0x285f43(0x3f3)==='vJDpu'){function _0x11cd82(){return this['getItemDamageAmountLabelOriginal']();}}else return;}}}if(!this['_newItemsList'][_0x285f43(0x3ee)](_0x5cf3ab))this[_0x285f43(0x12d)][_0x285f43(0x4ac)](_0x5cf3ab);},Game_Party[_0x263456(0x26e)][_0x263456(0x4dc)]=function(_0x74b458){const _0xc182a7=_0x263456;if(!$gameTemp['newLabelEnabled']())return;if(this[_0xc182a7(0x12d)]===undefined)this[_0xc182a7(0x37a)]();let _0x492833='';if(DataManager['isItem'](_0x74b458))_0x492833='item-%1'[_0xc182a7(0x48a)](_0x74b458['id']);else{if(DataManager[_0xc182a7(0x164)](_0x74b458)){if(_0xc182a7(0x144)===_0xc182a7(0x3f1)){function _0x554776(){const _0x55e0c7=_0xc182a7;return this[_0x55e0c7(0x2f5)]()?this['statusWindowRectItemsEquipsCore']():_0x4b3359['ItemsEquipsCore']['Scene_Shop_statusWindowRect'][_0x55e0c7(0x2bb)](this);}}else _0x492833=_0xc182a7(0x111)[_0xc182a7(0x48a)](_0x74b458['id']);}else{if(DataManager['isArmor'](_0x74b458)){if(_0xc182a7(0x414)!=='wTBim'){function _0x32e134(){const _0xc8c1ff=_0xc182a7;_0x4f20a6=_0x5b9d05[_0xc8c1ff(0x4df)](_0x102416||0x1,0x1);while(_0x30beec--){_0x1e7990=_0x3b5ebf||this[_0xc8c1ff(0x2f3)](),this[_0xc8c1ff(0x1ca)][_0xc8c1ff(0x51d)]=0xa0;const _0x3e9293=_0x45d751[_0xc8c1ff(0x49a)]();this[_0xc8c1ff(0x1ca)]['fillRect'](_0x1c7cb0+0x1,_0x779531+0x1,_0xecdfb7-0x2,_0x44f311-0x2,_0x3e9293),this['contentsBack'][_0xc8c1ff(0x51d)]=0xff;}}}else _0x492833=_0xc182a7(0x4ad)[_0xc182a7(0x48a)](_0x74b458['id']);}else return;}}if(this[_0xc182a7(0x12d)]['includes'](_0x492833)){if(_0xc182a7(0x191)===_0xc182a7(0x191))this[_0xc182a7(0x12d)][_0xc182a7(0x3d4)](this['_newItemsList'][_0xc182a7(0x158)](_0x492833),0x1);else{function _0x2a2c40(){const _0x2b712e=_0xc182a7,_0x2c2a7b=_0x5a5632['equipTypes']['indexOf'](_0x4bd7b9['trim']());if(_0x2c2a7b>0x0)_0x277a36[_0x2b712e(0x26b)][_0x2b712e(0x4ac)](_0x2c2a7b);}}}},VisuMZ['ItemsEquipsCore'][_0x263456(0x4d4)]=Game_Party[_0x263456(0x26e)][_0x263456(0x3d7)],Game_Party[_0x263456(0x26e)][_0x263456(0x3d7)]=function(_0xe1a3d3,_0x2cd64c,_0x39602f){const _0x756845=_0x263456,_0x375305=this[_0x756845(0x2d3)](_0xe1a3d3);VisuMZ[_0x756845(0x2a2)][_0x756845(0x4d4)][_0x756845(0x2bb)](this,_0xe1a3d3,_0x2cd64c,_0x39602f);if(this[_0x756845(0x2d3)](_0xe1a3d3)>_0x375305)this[_0x756845(0x1b8)](_0xe1a3d3);},Game_Party[_0x263456(0x26e)][_0x263456(0x3c1)]=function(_0x191a95){const _0xbf0366=_0x263456;return DataManager[_0xbf0366(0x1f7)](_0x191a95);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x220)]=Scene_ItemBase[_0x263456(0x26e)][_0x263456(0x476)],Scene_ItemBase[_0x263456(0x26e)]['activateItemWindow']=function(){const _0x587527=_0x263456;VisuMZ[_0x587527(0x2a2)][_0x587527(0x220)][_0x587527(0x2bb)](this),this[_0x587527(0x4c8)][_0x587527(0x40b)]();},Scene_Item[_0x263456(0x26e)][_0x263456(0x336)]=function(){const _0x331249=_0x263456;if(ConfigManager[_0x331249(0x430)]&&ConfigManager[_0x331249(0x4da)]!==undefined)return ConfigManager[_0x331249(0x4da)];else{if(this[_0x331249(0x2f5)]())return this[_0x331249(0x30b)]()[_0x331249(0x152)](/LOWER/i);else Scene_ItemBase[_0x331249(0x26e)][_0x331249(0x22e)][_0x331249(0x2bb)](this);}},Scene_Item[_0x263456(0x26e)][_0x263456(0x22e)]=function(){const _0x1da2d7=_0x263456;if(ConfigManager[_0x1da2d7(0x430)]&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0x1da2d7(0x1ea)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x1da2d7(0x30b)]()[_0x1da2d7(0x152)](/RIGHT/i);else Scene_ItemBase['prototype'][_0x1da2d7(0x22e)][_0x1da2d7(0x2bb)](this);}},Scene_Item[_0x263456(0x26e)][_0x263456(0x30b)]=function(){const _0x4c624b=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x4c624b(0x2ad)]['ItemScene'][_0x4c624b(0x306)];},Scene_Item[_0x263456(0x26e)]['isUseModernControls']=function(){const _0x3c686c=_0x263456;return this['_categoryWindow']&&this[_0x3c686c(0x217)][_0x3c686c(0x407)]();},Scene_Item[_0x263456(0x26e)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x29b116=_0x263456;return VisuMZ[_0x29b116(0x2a2)][_0x29b116(0x2ad)][_0x29b116(0x377)]['EnableLayout'];},VisuMZ[_0x263456(0x2a2)][_0x263456(0xc5)]=Scene_Item[_0x263456(0x26e)][_0x263456(0x101)],Scene_Item['prototype'][_0x263456(0x101)]=function(){const _0x134234=_0x263456;VisuMZ[_0x134234(0x2a2)][_0x134234(0xc5)]['call'](this),this['isUseModernControls']()&&this['onCategoryOk']();},Scene_Item[_0x263456(0x26e)]['helpWindowRect']=function(){const _0x8eee39=_0x263456;return this[_0x8eee39(0x2f5)]()?this[_0x8eee39(0xdc)]():Scene_ItemBase[_0x8eee39(0x26e)][_0x8eee39(0x2aa)][_0x8eee39(0x2bb)](this);},Scene_Item[_0x263456(0x26e)][_0x263456(0xdc)]=function(){const _0x5c964c=_0x263456,_0x2807e5=0x0,_0x24126a=this[_0x5c964c(0xff)](),_0x5e241d=Graphics[_0x5c964c(0x482)],_0x57fbfc=this[_0x5c964c(0x434)]();return new Rectangle(_0x2807e5,_0x24126a,_0x5e241d,_0x57fbfc);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x4bd)]=Scene_Item['prototype'][_0x263456(0x130)],Scene_Item[_0x263456(0x26e)]['createCategoryWindow']=function(){const _0x461d84=_0x263456;VisuMZ['ItemsEquipsCore'][_0x461d84(0x4bd)][_0x461d84(0x2bb)](this),this['isUseModernControls']()&&this[_0x461d84(0x1c4)]();},Scene_Item[_0x263456(0x26e)][_0x263456(0x1c4)]=function(){const _0x499bf3=_0x263456;delete this[_0x499bf3(0x217)][_0x499bf3(0x24a)]['ok'],delete this[_0x499bf3(0x217)][_0x499bf3(0x24a)][_0x499bf3(0x25f)];},VisuMZ[_0x263456(0x2a2)]['Scene_Item_categoryWindowRect']=Scene_Item[_0x263456(0x26e)][_0x263456(0x52c)],Scene_Item[_0x263456(0x26e)]['categoryWindowRect']=function(){const _0x3f4c69=_0x263456;if(this[_0x3f4c69(0x2f5)]()){if(_0x3f4c69(0x180)===_0x3f4c69(0x137)){function _0x79b127(){const _0x598221=_0x3f4c69;this[_0x598221(0x341)](),_0x4cf6b8['ItemsEquipsCore']['Window_ShopBuy_refresh'][_0x598221(0x2bb)](this);}}else return this[_0x3f4c69(0x189)]();}else return VisuMZ[_0x3f4c69(0x2a2)][_0x3f4c69(0x108)][_0x3f4c69(0x2bb)](this);},Scene_Item[_0x263456(0x26e)][_0x263456(0x189)]=function(){const _0x5e87c4=_0x263456,_0x540048=0x0,_0x44a24c=this['mainAreaTop'](),_0x97ccc2=Graphics[_0x5e87c4(0x482)],_0x31da46=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x540048,_0x44a24c,_0x97ccc2,_0x31da46);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x3b6)]=Scene_Item[_0x263456(0x26e)][_0x263456(0x505)],Scene_Item[_0x263456(0x26e)][_0x263456(0x505)]=function(){const _0x39cc49=_0x263456;VisuMZ[_0x39cc49(0x2a2)]['Scene_Item_createItemWindow']['call'](this);this[_0x39cc49(0x407)]()&&this[_0x39cc49(0x2d9)]();if(this[_0x39cc49(0xcf)]()){if('kzBkL'===_0x39cc49(0x1fe)){function _0x5dee5e(){const _0x37874e=_0x39cc49;_0x34af34[_0x37874e(0x176)](_0x37874e(0x2ec))&&this[_0x37874e(0x14f)](_0x19e494[_0x37874e(0x257)](_0x37874e(0x2ec))),_0x42dbd3['isRepeated'](_0x37874e(0x3cf))&&this[_0x37874e(0x1a4)](_0x910375[_0x37874e(0x257)]('left'));}}else this[_0x39cc49(0x197)]();}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x3cc)]=Scene_Item['prototype'][_0x263456(0x39b)],Scene_Item['prototype']['itemWindowRect']=function(){const _0x42c715=_0x263456;if(this[_0x42c715(0x2f5)]())return this[_0x42c715(0x4ba)]();else{if(_0x42c715(0x3ea)!==_0x42c715(0x3ea)){function _0x4023a9(){const _0x1b747a=_0x42c715;return _0x1b747a(0x4f9)[_0x1b747a(0x48a)](_0x11c3a5(_0x31d850['$1']));}}else{const _0x5202dc=VisuMZ[_0x42c715(0x2a2)][_0x42c715(0x3cc)][_0x42c715(0x2bb)](this);if(this[_0x42c715(0xcf)]()&&this[_0x42c715(0x3fc)]()){if('TMzGZ'!==_0x42c715(0x283))_0x5202dc[_0x42c715(0x528)]-=this[_0x42c715(0x248)]();else{function _0x5d9d93(){const _0x59d2ca=_0x42c715;this[_0x59d2ca(0x318)]={};if(!this[_0x59d2ca(0x139)])return;const _0x38143f=this[_0x59d2ca(0x139)][_0x59d2ca(0x38d)];if(_0x38143f[_0x59d2ca(0x152)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x50be34=_0x31726b(_0x38bc64['$1'])[_0x59d2ca(0x30d)](/[\r\n]+/);for(const _0x34ea6f of _0x50be34){if(_0x34ea6f[_0x59d2ca(0x152)](/(.*):[ ](.*)/i)){const _0x14d230=_0x32d8ec(_0x446007['$1'])[_0x59d2ca(0x506)]()['trim'](),_0x5c4010=_0x5b8319(_0x16e3d1['$2'])[_0x59d2ca(0x1ce)]();this[_0x59d2ca(0x318)][_0x14d230]=_0x5c4010;}}}}}}return _0x5202dc;}}},Scene_Item[_0x263456(0x26e)]['itemWindowRectItemsEquipsCore']=function(){const _0x26d8a3=_0x263456,_0x58dfb3=this[_0x26d8a3(0x22e)]()?this[_0x26d8a3(0x248)]():0x0,_0x14857d=this[_0x26d8a3(0x217)]['y']+this[_0x26d8a3(0x217)][_0x26d8a3(0x4a5)],_0x145626=Graphics[_0x26d8a3(0x482)]-this[_0x26d8a3(0x248)](),_0x16dbaa=this[_0x26d8a3(0x495)]()-_0x14857d;return new Rectangle(_0x58dfb3,_0x14857d,_0x145626,_0x16dbaa);},Scene_Item['prototype'][_0x263456(0x2d9)]=function(){const _0x287656=_0x263456;this[_0x287656(0x4c8)]['setHandler'](_0x287656(0x25f),this[_0x287656(0x2f7)][_0x287656(0x1a7)](this));},Scene_Item[_0x263456(0x26e)]['allowCreateStatusWindow']=function(){const _0x46cb60=_0x263456;if(this['isUseItemsEquipsCoreUpdatedLayout']())return!![];else{if('qqKZZ'==='qqKZZ')return VisuMZ['ItemsEquipsCore']['Settings'][_0x46cb60(0x377)]['ShowShopStatus'];else{function _0x173ca1(){const _0x355a20=_0x46cb60;return _0xd58d75[_0x355a20(0x1f5)]('up','down');}}}},Scene_Item[_0x263456(0x26e)]['adjustItemWidthByStatus']=function(){const _0x1e1cf2=_0x263456;return VisuMZ[_0x1e1cf2(0x2a2)][_0x1e1cf2(0x2ad)][_0x1e1cf2(0x377)][_0x1e1cf2(0x298)];},Scene_Item[_0x263456(0x26e)]['createStatusWindow']=function(){const _0x5dd118=_0x263456,_0x3cf1f6=this['statusWindowRect']();this[_0x5dd118(0x2ca)]=new Window_ShopStatus(_0x3cf1f6),this[_0x5dd118(0x22b)](this[_0x5dd118(0x2ca)]),this['_itemWindow']['setStatusWindow'](this['_statusWindow']);const _0x2c9a00=VisuMZ[_0x5dd118(0x2a2)]['Settings'][_0x5dd118(0x377)][_0x5dd118(0x3b0)];this[_0x5dd118(0x2ca)][_0x5dd118(0x1d2)](_0x2c9a00||0x0);},Scene_Item['prototype']['statusWindowRect']=function(){const _0x81048f=_0x263456;if(this[_0x81048f(0x2f5)]()){if(_0x81048f(0x24d)===_0x81048f(0x24d))return this[_0x81048f(0x4ca)]();else{function _0x325b83(){const _0x417776=_0x81048f;if(this[_0x417776(0x382)]&&this[_0x417776(0x382)][_0x417776(0x29d)])return _0x1924c8[_0x417776(0x2a2)]['Settings'][_0x417776(0x1ac)][_0x417776(0x3d1)];return _0x2aae21[_0x417776(0x26e)][_0x417776(0x227)][_0x417776(0x2bb)](this);}}}else return VisuMZ[_0x81048f(0x2a2)][_0x81048f(0x2ad)]['ItemScene'][_0x81048f(0x238)][_0x81048f(0x2bb)](this);},Scene_Item[_0x263456(0x26e)][_0x263456(0x4ca)]=function(){const _0x7828bb=_0x263456,_0x33babb=this[_0x7828bb(0x248)](),_0x1c0ed8=this[_0x7828bb(0x4c8)]['height'],_0x1766bb=this[_0x7828bb(0x22e)]()?0x0:Graphics['boxWidth']-this[_0x7828bb(0x248)](),_0x3933ad=this[_0x7828bb(0x4c8)]['y'];return new Rectangle(_0x1766bb,_0x3933ad,_0x33babb,_0x1c0ed8);},Scene_Item['prototype'][_0x263456(0x248)]=function(){const _0x4dd9fa=_0x263456;return Scene_Shop[_0x4dd9fa(0x26e)][_0x4dd9fa(0x248)]();},Scene_Item[_0x263456(0x26e)][_0x263456(0x12e)]=function(){const _0x4838a2=_0x263456;if(!this[_0x4838a2(0x30b)]())return![];if(!this[_0x4838a2(0x407)]())return![];if(!this['_itemWindow'])return![];if(!this[_0x4838a2(0x4c8)][_0x4838a2(0x29d)])return![];return this[_0x4838a2(0x30b)]()&&this[_0x4838a2(0x407)]();},Scene_Item['prototype'][_0x263456(0x413)]=function(){const _0x258938=_0x263456;if(this['buttonAssistItemListRequirement']())return this[_0x258938(0x4c8)][_0x258938(0x1d7)]()===0x1?TextManager[_0x258938(0x1f5)](_0x258938(0x3cf),_0x258938(0x2ec)):TextManager[_0x258938(0x1f5)](_0x258938(0x31e),_0x258938(0x110));return Scene_ItemBase[_0x258938(0x26e)]['buttonAssistKey1'][_0x258938(0x2bb)](this);},Scene_Item['prototype'][_0x263456(0x21b)]=function(){const _0x36aeb1=_0x263456;if(this['buttonAssistItemListRequirement']()){if('Guqzx'===_0x36aeb1(0x1b2)){function _0x28a516(){return![];}}else return VisuMZ[_0x36aeb1(0x2a2)][_0x36aeb1(0x2ad)][_0x36aeb1(0x377)]['buttonAssistCategory'];}return Scene_ItemBase[_0x36aeb1(0x26e)][_0x36aeb1(0x21b)][_0x36aeb1(0x2bb)](this);},Scene_Equip[_0x263456(0x26e)]['isBottomHelpMode']=function(){const _0x807313=_0x263456;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiHelpPosition']!==undefined){if(_0x807313(0x319)===_0x807313(0x1b3)){function _0x1f7e4b(){const _0x5edae5=_0x807313;return this[_0x5edae5(0x2f5)]()?this[_0x5edae5(0xdc)]():_0xc8b6a9['prototype'][_0x5edae5(0x2aa)][_0x5edae5(0x2bb)](this);}}else return ConfigManager[_0x807313(0x4da)];}else{if(this[_0x807313(0x2f5)]()){if(_0x807313(0x243)===_0x807313(0x243))return this[_0x807313(0x30b)]()[_0x807313(0x152)](/LOWER/i);else{function _0x1970ce(){return _0x573f63['_scene']['isUseItemsEquipsCoreUpdatedLayout']()?0x1:0x2;}}}else Scene_MenuBase[_0x807313(0x26e)][_0x807313(0x22e)]['call'](this);}},Scene_Equip[_0x263456(0x26e)]['isRightInputMode']=function(){const _0x4b4d0c=_0x263456;if(ConfigManager[_0x4b4d0c(0x430)]&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager['uiInputPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x4b4d0c(0x30b)]()[_0x4b4d0c(0x152)](/RIGHT/i);else{if(_0x4b4d0c(0x150)===_0x4b4d0c(0x499)){function _0x1096b7(){const _0x487a32=_0x4b4d0c;this[_0x487a32(0x215)]=this[_0x487a32(0x215)]||0x0,this[_0x487a32(0x181)][_0x487a32(0x36d)](this[_0x487a32(0x215)]);}}else Scene_MenuBase[_0x4b4d0c(0x26e)][_0x4b4d0c(0x22e)][_0x4b4d0c(0x2bb)](this);}}},Scene_Equip[_0x263456(0x26e)]['updatedLayoutStyle']=function(){const _0x3072f0=_0x263456;return VisuMZ[_0x3072f0(0x2a2)][_0x3072f0(0x2ad)]['EquipScene'][_0x3072f0(0x306)];},Scene_Equip[_0x263456(0x26e)][_0x263456(0x407)]=function(){const _0x4c59cc=_0x263456;return this[_0x4c59cc(0xf3)]&&this[_0x4c59cc(0xf3)][_0x4c59cc(0x407)]();},Scene_Equip[_0x263456(0x26e)][_0x263456(0x2f5)]=function(){const _0x506bd7=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x506bd7(0x2ad)][_0x506bd7(0x142)][_0x506bd7(0x1bc)];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x46b)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x101)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x101)]=function(){const _0x1f2a81=_0x263456;VisuMZ[_0x1f2a81(0x2a2)][_0x1f2a81(0x46b)]['call'](this),this['isUseModernControls']()&&this['commandEquip']();},Scene_Equip[_0x263456(0x26e)][_0x263456(0x2aa)]=function(){const _0x1bb634=_0x263456;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x1bb634(0xdc)]():Scene_MenuBase[_0x1bb634(0x26e)][_0x1bb634(0x2aa)][_0x1bb634(0x2bb)](this);},Scene_Equip[_0x263456(0x26e)][_0x263456(0xdc)]=function(){const _0x2fa6c7=_0x263456,_0x2f6d48=0x0,_0x24fd1a=this[_0x2fa6c7(0xff)](),_0x378739=Graphics[_0x2fa6c7(0x482)],_0x54435b=this[_0x2fa6c7(0x434)]();return new Rectangle(_0x2f6d48,_0x24fd1a,_0x378739,_0x54435b);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x228)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x183)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x183)]=function(){const _0x3c3d67=_0x263456;if(this[_0x3c3d67(0x2f5)]())return this[_0x3c3d67(0x4ca)]();else{if('ueoxn'!=='ueoxn'){function _0x216604(){const _0x14769b=_0x3c3d67,_0x45dd56=_0x14769b(0x129);if(this[_0x14769b(0x318)][_0x45dd56])return this['_customItemInfo'][_0x45dd56];if(this[_0x14769b(0x139)]['damage'][_0x14769b(0x529)]<=-0x1)return _0xdf12ec[_0x14769b(0x2a2)][_0x14769b(0x2ad)]['StatusWindow'][_0x14769b(0x107)];else return this[_0x14769b(0x139)][_0x14769b(0x186)][_0x14769b(0x529)]===0x0?_0x7aba34['ItemsEquipsCore'][_0x14769b(0x2ad)][_0x14769b(0x143)][_0x14769b(0x394)]:_0x5c6fbd[_0x14769b(0xe1)][this[_0x14769b(0x139)][_0x14769b(0x186)][_0x14769b(0x529)]];}}else return VisuMZ['ItemsEquipsCore'][_0x3c3d67(0x228)][_0x3c3d67(0x2bb)](this);}},Scene_Equip[_0x263456(0x26e)][_0x263456(0x4ca)]=function(){const _0x3683b2=_0x263456,_0x133a81=this[_0x3683b2(0x22e)]()?0x0:Graphics[_0x3683b2(0x482)]-this[_0x3683b2(0x248)](),_0x31a59c=this[_0x3683b2(0x3f4)](),_0x8ecfa3=this['statusWidth'](),_0x1db2cc=this[_0x3683b2(0xe9)]();return new Rectangle(_0x133a81,_0x31a59c,_0x8ecfa3,_0x1db2cc);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x26f)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x509)],Scene_Equip['prototype']['commandWindowRect']=function(){const _0xe4d4fa=_0x263456;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0xe4d4fa(0x4eb)===_0xe4d4fa(0x4eb))return this[_0xe4d4fa(0x233)]();else{function _0x39b081(){const _0x2a62b0=_0xe4d4fa;if(this[_0x2a62b0(0x18b)])return;if(!_0x14b2b7['ItemsEquipsCore'][_0x2a62b0(0x2ad)][_0x2a62b0(0x142)]['EquipAdjustHpMp'])return;const _0x35f7b7=_0x1fc736[_0x2a62b0(0x2de)](_0x4dd545['hpRate']()*this[_0x2a62b0(0x300)]),_0x1908da=_0x382994[_0x2a62b0(0x2de)](_0x52ce47[_0x2a62b0(0x32b)]()*this[_0x2a62b0(0x24f)]);if(this['hp']>0x0)this[_0x2a62b0(0x1d0)](_0x35f7b7);if(this['mp']>0x0)this[_0x2a62b0(0x1c3)](_0x1908da);}}}else return VisuMZ[_0xe4d4fa(0x2a2)][_0xe4d4fa(0x26f)][_0xe4d4fa(0x2bb)](this);},Scene_Equip['prototype'][_0x263456(0x2be)]=function(){const _0x2f0398=_0x263456,_0x44f92f=VisuMZ[_0x2f0398(0x2a2)][_0x2f0398(0x2ad)][_0x2f0398(0x142)];return _0x44f92f[_0x2f0398(0x294)]||_0x44f92f[_0x2f0398(0x22d)];},Scene_Equip[_0x263456(0x26e)][_0x263456(0x233)]=function(){const _0x68a0fa=_0x263456,_0x56c0e3=this[_0x68a0fa(0x2be)](),_0x4bfa44=this[_0x68a0fa(0x22e)]()?this[_0x68a0fa(0x248)]():0x0,_0x39b694=this['mainAreaTop'](),_0x214d83=Graphics['boxWidth']-this[_0x68a0fa(0x248)](),_0x382cd8=_0x56c0e3?this[_0x68a0fa(0x4d3)](0x1,!![]):0x0;return new Rectangle(_0x4bfa44,_0x39b694,_0x214d83,_0x382cd8);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x389)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x400)],Scene_Equip[_0x263456(0x26e)]['createSlotWindow']=function(){const _0x272714=_0x263456;VisuMZ['ItemsEquipsCore'][_0x272714(0x389)][_0x272714(0x2bb)](this),this[_0x272714(0x407)]()&&this[_0x272714(0x47e)]();},VisuMZ[_0x263456(0x2a2)][_0x263456(0xc1)]=Scene_Equip['prototype'][_0x263456(0x392)],Scene_Equip['prototype']['slotWindowRect']=function(){const _0x30644b=_0x263456;return this[_0x30644b(0x2f5)]()?this[_0x30644b(0x1e2)]():VisuMZ[_0x30644b(0x2a2)]['Scene_Equip_slotWindowRect'][_0x30644b(0x2bb)](this);},Scene_Equip[_0x263456(0x26e)][_0x263456(0x1e2)]=function(){const _0x86cd3a=_0x263456,_0x15d034=this[_0x86cd3a(0x509)](),_0x186ea3=this[_0x86cd3a(0x22e)]()?this[_0x86cd3a(0x248)]():0x0,_0x43f8b5=_0x15d034['y']+_0x15d034[_0x86cd3a(0x4a5)],_0x166eb5=Graphics[_0x86cd3a(0x482)]-this[_0x86cd3a(0x248)](),_0x20191e=this[_0x86cd3a(0xe9)]()-_0x15d034[_0x86cd3a(0x4a5)];return new Rectangle(_0x186ea3,_0x43f8b5,_0x166eb5,_0x20191e);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x1fd)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x39b)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x39b)]=function(){const _0xbad608=_0x263456;if(this[_0xbad608(0x2f5)]())return this[_0xbad608(0x392)]();else{if('hatdc'==='yBzqw'){function _0x242723(){const _0x1bb820=_0xbad608,_0x12e302=_0x31daa9[_0x1bb820(0x4fe)]('['+_0x40b3ef['$1'][_0x1bb820(0x152)](/\d+/g)+']');for(const _0x4de39b of _0x12e302){if(_0x5038b6['value'](_0x4de39b))return!![];}return![];}}else return VisuMZ[_0xbad608(0x2a2)]['Scene_Equip_itemWindowRect']['call'](this);}},Scene_Equip[_0x263456(0x26e)]['statusWidth']=function(){const _0x54d784=_0x263456;if(this[_0x54d784(0x2f5)]())return this[_0x54d784(0x2c0)]();else{if(_0x54d784(0x1dd)!==_0x54d784(0x1dd)){function _0x31683b(){const _0x41408f=_0x54d784,_0x395704=this[_0x41408f(0x50f)](_0x5530d9);if(_0x395704['match'](/\\I\[(\d+)\]/i)){const _0x4153e8=this[_0x41408f(0x3f7)](_0xf1571c),_0x5348e8=this[_0x41408f(0x3bd)](_0x395704)[_0x41408f(0x528)];return _0x5348e8<=_0x4153e8[_0x41408f(0x528)]?_0x41408f(0x3ef):_0x41408f(0x1da);}}}else return VisuMZ['ItemsEquipsCore']['Settings'][_0x54d784(0x142)][_0x54d784(0x48c)];}},Scene_Equip['prototype']['geUpdatedLayoutStatusWidth']=function(){const _0x29dac8=_0x263456;return Math[_0x29dac8(0x372)](Graphics[_0x29dac8(0x482)]/0x2);},Scene_Equip['prototype']['postCreateSlotWindowItemsEquipsCore']=function(){const _0x11f40d=_0x263456;this[_0x11f40d(0x236)][_0x11f40d(0x13b)](_0x11f40d(0x25f),this['popScene'][_0x11f40d(0x1a7)](this)),this[_0x11f40d(0x236)]['setHandler'](_0x11f40d(0x110),this[_0x11f40d(0xd9)][_0x11f40d(0x1a7)](this)),this[_0x11f40d(0x236)][_0x11f40d(0x13b)](_0x11f40d(0x31e),this[_0x11f40d(0x527)]['bind'](this));},VisuMZ[_0x263456(0x2a2)][_0x263456(0x229)]=Scene_Equip['prototype'][_0x263456(0x10e)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x10e)]=function(){const _0x52c336=_0x263456;if(this[_0x52c336(0x407)]()){if(_0x52c336(0x263)!==_0x52c336(0x3de))this[_0x52c336(0xf3)][_0x52c336(0x3aa)](),this[_0x52c336(0xf3)]['deactivate']();else{function _0x360771(){const _0x3f23ec=_0x52c336;this['canShiftRemoveEquipment'](this[_0x3f23ec(0x192)]())?(this['processShiftRemoveShortcut'](),this[_0x3f23ec(0x171)]()):this[_0x3f23ec(0x3e5)]();}}}VisuMZ[_0x52c336(0x2a2)]['Scene_Equip_commandEquip'][_0x52c336(0x2bb)](this);},VisuMZ[_0x263456(0x2a2)][_0x263456(0xe8)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x19e)],Scene_Equip['prototype'][_0x263456(0x19e)]=function(){const _0x419c16=_0x263456;if(this['_slotWindow'][_0x419c16(0x192)]()>=0x0){if('ZjHja'===_0x419c16(0x2cb))VisuMZ[_0x419c16(0x2a2)][_0x419c16(0xe8)][_0x419c16(0x2bb)](this),this[_0x419c16(0x1f3)]();else{function _0x2fb8ba(){const _0x1b6b15=_0x419c16;_0x123335=_0x3a5feb||this[_0x1b6b15(0x2f3)](),this['contentsBack'][_0x1b6b15(0x51d)]=0xa0;const _0x322c4f=_0x303a55[_0x1b6b15(0x35f)]();this['contentsBack']['fillRect'](_0x24b766+0x1,_0x1a4230+0x1,_0x246bf9-0x2,_0x47ce21-0x2,_0x322c4f),this[_0x1b6b15(0x1ca)][_0x1b6b15(0x51d)]=0xff;}}}else this[_0x419c16(0x236)][_0x419c16(0x36d)](0x0),this[_0x419c16(0x236)]['activate']();},Scene_Equip['prototype']['onSlotOkAutoSelect']=function(){const _0x43e145=_0x263456;this[_0x43e145(0x4c8)][_0x43e145(0x133)]();const _0x121d01=this['_slotWindow'][_0x43e145(0x1c0)](),_0x3e417b=this[_0x43e145(0x4c8)][_0x43e145(0x502)][_0x43e145(0x158)](_0x121d01),_0x24b937=Math[_0x43e145(0x372)](this[_0x43e145(0x4c8)][_0x43e145(0x3da)]()/0x2)-0x1;this[_0x43e145(0x4c8)][_0x43e145(0x36d)](_0x3e417b>=0x0?_0x3e417b:0x0),this[_0x43e145(0x4c8)][_0x43e145(0x481)](this[_0x43e145(0x4c8)]['index']()-_0x24b937);},VisuMZ['ItemsEquipsCore'][_0x263456(0x281)]=Scene_Equip['prototype'][_0x263456(0x317)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x317)]=function(){const _0x2541d4=_0x263456;VisuMZ['ItemsEquipsCore'][_0x2541d4(0x281)]['call'](this);if(this[_0x2541d4(0x407)]()){if(_0x2541d4(0x1e3)!=='vwuIz')this[_0x2541d4(0xf3)][_0x2541d4(0x36d)](0x0),this[_0x2541d4(0x236)]['deactivate']();else{function _0x491965(){const _0x6c17ee=_0x2541d4,_0x7e607e=_0x3e4b1b[_0x6c17ee(0x46a)](this);_0x7e607e[_0x6c17ee(0x18b)]=!![],_0x8b0449[_0x6c17ee(0x2a2)][_0x6c17ee(0x1f2)][_0x6c17ee(0x2bb)](this,_0x1e9738),this['equipAdjustHpMp'](_0x7e607e);}}}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x173)]=Scene_Equip[_0x263456(0x26e)][_0x263456(0x2a4)],Scene_Equip[_0x263456(0x26e)][_0x263456(0x2a4)]=function(){const _0x8fbbe6=_0x263456;VisuMZ[_0x8fbbe6(0x2a2)][_0x8fbbe6(0x173)][_0x8fbbe6(0x2bb)](this);if(this[_0x8fbbe6(0x407)]()){if(_0x8fbbe6(0x526)!==_0x8fbbe6(0x525))this[_0x8fbbe6(0xf3)][_0x8fbbe6(0x359)](),this[_0x8fbbe6(0xf3)][_0x8fbbe6(0x3aa)](),this['_slotWindow'][_0x8fbbe6(0x36d)](0x0),this[_0x8fbbe6(0x236)][_0x8fbbe6(0x301)]();else{function _0x1d5de8(){const _0x3f0a9f=_0x8fbbe6;_0x3afca4=_0x21a462[_0x3f0a9f(0x4df)](this[_0x3f0a9f(0x368)](_0x2e7d1f,_0x4de571+0x4,_0x16db39+0x4,_0x1f12c0),_0x34a6b8),_0x1da75d+=_0x394416;}}}},Scene_Equip[_0x263456(0x26e)]['buttonAssistSlotWindowShift']=function(){const _0x297c70=_0x263456;if(!this['_slotWindow'])return![];if(!this[_0x297c70(0x236)][_0x297c70(0x29d)])return![];return this[_0x297c70(0x236)]['isShiftRemoveShortcutEnabled']();},Scene_Equip['prototype'][_0x263456(0x48f)]=function(){const _0x3e564d=_0x263456;if(this[_0x3e564d(0x184)]())return TextManager[_0x3e564d(0x23d)](_0x3e564d(0x1c8));return Scene_MenuBase[_0x3e564d(0x26e)][_0x3e564d(0x48f)][_0x3e564d(0x2bb)](this);},Scene_Equip['prototype'][_0x263456(0x491)]=function(){const _0x120c85=_0x263456;if(this[_0x120c85(0x184)]()){if(_0x120c85(0x3d2)===_0x120c85(0x3d2))return VisuMZ[_0x120c85(0x2a2)][_0x120c85(0x2ad)][_0x120c85(0x142)][_0x120c85(0x3b1)];else{function _0x1952a(){const _0x8c5f2f=_0x120c85;return _0x1bd343[_0x8c5f2f(0x2a2)][_0x8c5f2f(0x2ad)][_0x8c5f2f(0x143)][_0x8c5f2f(0x31b)];}}}return Scene_MenuBase[_0x120c85(0x26e)][_0x120c85(0x491)][_0x120c85(0x2bb)](this);},Scene_Equip[_0x263456(0x26e)]['buttonAssistOffset3']=function(){const _0x340198=_0x263456;if(this[_0x340198(0x184)]())return this[_0x340198(0x3e3)][_0x340198(0x528)]/0x5/-0x3;return Scene_MenuBase['prototype'][_0x340198(0x18d)]['call'](this);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x161)]=Scene_Load['prototype'][_0x263456(0x1dc)],Scene_Load[_0x263456(0x26e)]['reloadMapIfUpdated']=function(){const _0x1822ea=_0x263456;VisuMZ[_0x1822ea(0x2a2)][_0x1822ea(0x161)][_0x1822ea(0x2bb)](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x263456(0x26e)]['refreshActorEquipSlotsIfUpdated']=function(){const _0x3bef79=_0x263456;if($gameSystem['versionId']()!==$dataSystem[_0x3bef79(0xce)])for(const _0x18c019 of $gameActors[_0x3bef79(0x502)]){if(_0x18c019)_0x18c019[_0x3bef79(0x13d)]();}},Scene_Shop[_0x263456(0x26e)]['isBottomHelpMode']=function(){const _0x1968d2=_0x263456;if(ConfigManager[_0x1968d2(0x430)]&&ConfigManager[_0x1968d2(0x4da)]!==undefined){if(_0x1968d2(0x397)!==_0x1968d2(0x2b2))return ConfigManager[_0x1968d2(0x4da)];else{function _0x2a9433(){const _0x83c953=_0x1968d2;this[_0x83c953(0x2ca)][_0x83c953(0x10c)](this['item']());}}}else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x1968d2(0x30b)]()[_0x1968d2(0x152)](/LOWER/i);else Scene_MenuBase[_0x1968d2(0x26e)][_0x1968d2(0x22e)]['call'](this);}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x22e)]=function(){const _0x3ba36d=_0x263456;if(ConfigManager[_0x3ba36d(0x430)]&&ConfigManager[_0x3ba36d(0x1ea)]!==undefined)return ConfigManager[_0x3ba36d(0x1ea)];else{if(this[_0x3ba36d(0x2f5)]())return this[_0x3ba36d(0x30b)]()[_0x3ba36d(0x152)](/RIGHT/i);else{if('UGeJJ'!==_0x3ba36d(0x297))Scene_MenuBase[_0x3ba36d(0x26e)][_0x3ba36d(0x22e)][_0x3ba36d(0x2bb)](this);else{function _0x434c52(){this['drawEquipData']();}}}}},Scene_Shop['prototype'][_0x263456(0x30b)]=function(){const _0x1d96a8=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x1d96a8(0x2ad)][_0x1d96a8(0x1ac)]['LayoutStyle'];},Scene_Shop[_0x263456(0x26e)][_0x263456(0x407)]=function(){const _0x568e6e=_0x263456;return this[_0x568e6e(0x217)]&&this[_0x568e6e(0x217)]['isUseModernControls']();},Scene_Shop['prototype'][_0x263456(0x2f5)]=function(){const _0x5b333d=_0x263456;return VisuMZ[_0x5b333d(0x2a2)][_0x5b333d(0x2ad)][_0x5b333d(0x1ac)][_0x5b333d(0x1bc)];},VisuMZ['ItemsEquipsCore']['Scene_Shop_prepare']=Scene_Shop[_0x263456(0x26e)][_0x263456(0x433)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x433)]=function(_0x2f1bbb,_0x31b387){const _0x37d016=_0x263456;_0x2f1bbb=JsonEx[_0x37d016(0x46a)](_0x2f1bbb),VisuMZ[_0x37d016(0x2a2)][_0x37d016(0x40c)][_0x37d016(0x2bb)](this,_0x2f1bbb,_0x31b387),this[_0x37d016(0x1f4)]();},Scene_Shop[_0x263456(0x26e)][_0x263456(0x1f4)]=function(){const _0x2782b1=_0x263456;this[_0x2782b1(0x2ff)]=0x0;for(const _0x34e9d8 of this[_0x2782b1(0x4c3)]){if(this['isGoodShown'](_0x34e9d8))this[_0x2782b1(0x2ff)]++;else{if('ZBpAV'===_0x2782b1(0x45c))_0x34e9d8[0x0]=-0x1;else{function _0xc7400f(){const _0xcd8536=_0x2782b1;return _0x315ffd['ItemsEquipsCore'][_0xcd8536(0x2ad)]['ItemScene'][_0xcd8536(0x2a9)];}}}}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x449)]=function(_0x560d3e){const _0x48de8f=_0x263456;if(_0x560d3e[0x0]>0x2||_0x560d3e[0x0]<0x0)return![];const _0x2c33d9=[$dataItems,$dataWeapons,$dataArmors][_0x560d3e[0x0]][_0x560d3e[0x1]];if(!_0x2c33d9)return![];const _0x4d69d3=_0x2c33d9[_0x48de8f(0x38d)]||'';if(_0x4d69d3[_0x48de8f(0x152)](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x24c8cc=JSON[_0x48de8f(0x4fe)]('['+RegExp['$1'][_0x48de8f(0x152)](/\d+/g)+']');for(const _0x35d722 of _0x24c8cc){if(_0x48de8f(0x33a)!==_0x48de8f(0x14a)){if(!$gameSwitches[_0x48de8f(0x357)](_0x35d722))return![];}else{function _0x33b176(){const _0x5081ac=_0x48de8f;return _0x2607ad[_0x5081ac(0x314)]&&_0x2f7b47[_0x5081ac(0x3e0)](this[_0x5081ac(0x139)])!==_0x5081ac(0x2a1)?this['getItemDamageAmountLabelBattleCore']():this[_0x5081ac(0x212)]();}}}return!![];}if(_0x4d69d3[_0x48de8f(0x152)](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('PsBLe'===_0x48de8f(0xe0)){const _0x534833=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x4eea7d of _0x534833){if(!$gameSwitches[_0x48de8f(0x357)](_0x4eea7d))return![];}return!![];}else{function _0x1b6ec4(){const _0x546130=_0x48de8f;return!this[_0x546130(0x407)]();}}}if(_0x4d69d3[_0x48de8f(0x152)](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1c3385=JSON[_0x48de8f(0x4fe)]('['+RegExp['$1'][_0x48de8f(0x152)](/\d+/g)+']');for(const _0x31c90e of _0x1c3385){if($gameSwitches[_0x48de8f(0x357)](_0x31c90e))return!![];}return![];}if(_0x4d69d3['match'](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1200f0=JSON[_0x48de8f(0x4fe)]('['+RegExp['$1'][_0x48de8f(0x152)](/\d+/g)+']');for(const _0x3a3981 of _0x1200f0){if(!$gameSwitches[_0x48de8f(0x357)](_0x3a3981))return!![];}return![];}if(_0x4d69d3[_0x48de8f(0x152)](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x48de8f(0x2f2)==='YKynU'){function _0x539679(){const _0x4301c2=_0x48de8f;_0x464795[_0x4301c2(0x2a2)][_0x4301c2(0x34d)][_0x4301c2(0x2bb)](this),this[_0x4301c2(0x2f5)]()&&this[_0x4301c2(0x2ca)]['show'](),this[_0x4301c2(0x39e)][_0x4301c2(0x171)]();}}else{const _0x31479a=JSON['parse']('['+RegExp['$1'][_0x48de8f(0x152)](/\d+/g)+']');for(const _0x2b99eb of _0x31479a){if(!$gameSwitches[_0x48de8f(0x357)](_0x2b99eb))return!![];}return![];}}if(_0x4d69d3['match'](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3d2418=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x27c28f of _0x3d2418){if(_0x48de8f(0x1fb)!==_0x48de8f(0x106)){if($gameSwitches[_0x48de8f(0x357)](_0x27c28f))return![];}else{function _0x3b16a3(){const _0x4db027=_0x48de8f;this['_categoryWindow'][_0x4db027(0x311)]();}}}return!![];}return!![];},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_create']=Scene_Shop[_0x263456(0x26e)][_0x263456(0x101)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x101)]=function(){const _0x98e7e=_0x263456;VisuMZ[_0x98e7e(0x2a2)]['Scene_Shop_create']['call'](this);if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x98e7e(0x131)===_0x98e7e(0x131))this['postCreateItemsEquipsCore']();else{function _0x13a83e(){return'?????';}}}this['resetShopSwitches']();},Scene_Shop['prototype'][_0x263456(0x266)]=function(){const _0x3f250e=_0x263456;this[_0x3f250e(0x2e7)][_0x3f250e(0x132)](),this[_0x3f250e(0x181)][_0x3f250e(0x311)](),this[_0x3f250e(0x181)][_0x3f250e(0x3aa)](),this[_0x3f250e(0x2ca)]['show']();},Scene_Shop[_0x263456(0x26e)][_0x263456(0x2aa)]=function(){const _0x58e344=_0x263456;if(this[_0x58e344(0x2f5)]()){if(_0x58e344(0x23f)===_0x58e344(0x344)){function _0x2b1415(){return _0x100318['maxItemAmount'](_0xf04aba);}}else return this[_0x58e344(0xdc)]();}else return Scene_MenuBase[_0x58e344(0x26e)][_0x58e344(0x2aa)][_0x58e344(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)]['helpWindowRectItemsEquipsCore']=function(){const _0x4671c3=_0x263456,_0x4fe1b0=0x0,_0x2563f7=this['helpAreaTop'](),_0x12d073=Graphics[_0x4671c3(0x482)],_0x4cabc0=this['helpAreaHeight']();return new Rectangle(_0x4fe1b0,_0x2563f7,_0x12d073,_0x4cabc0);},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_goldWindowRect']=Scene_Shop['prototype'][_0x263456(0x165)],Scene_Shop['prototype'][_0x263456(0x165)]=function(){const _0x45250d=_0x263456;if(this[_0x45250d(0x2f5)]()){if(_0x45250d(0x4bf)!==_0x45250d(0x4bf)){function _0x2e6a56(){const _0x42e278=_0x45250d;_0xebfd8f[_0x42e278(0x4c4)][_0xdd0958]=_0x2fbaf5(_0x38d803['$1']);}}else return this['goldWindowRectItemsEquipsCore']();}else return VisuMZ[_0x45250d(0x2a2)][_0x45250d(0x28c)]['call'](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x198)]=function(){const _0x3d524b=_0x263456,_0x484435=this[_0x3d524b(0x120)](),_0x1a3d77=this[_0x3d524b(0x4d3)](0x1,!![]),_0x265d8b=this[_0x3d524b(0x22e)]()?0x0:Graphics[_0x3d524b(0x482)]-_0x484435,_0x2d4399=this[_0x3d524b(0x3f4)]();return new Rectangle(_0x265d8b,_0x2d4399,_0x484435,_0x1a3d77);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x42e)]=Scene_Shop[_0x263456(0x26e)]['commandWindowRect'],Scene_Shop[_0x263456(0x26e)]['commandWindowRect']=function(){const _0x327916=_0x263456;if(this[_0x327916(0x2f5)]()){if(_0x327916(0x374)==='OvXfi')return this[_0x327916(0x233)]();else{function _0x265388(){const _0x14e47a=_0x327916;_0x464976[_0x14e47a(0x2a2)]['Scene_Equip_onActorChange'][_0x14e47a(0x2bb)](this),this['isUseModernControls']()&&(this[_0x14e47a(0xf3)]['deactivate'](),this[_0x14e47a(0xf3)]['deselect'](),this[_0x14e47a(0x236)][_0x14e47a(0x36d)](0x0),this[_0x14e47a(0x236)][_0x14e47a(0x301)]());}}}else{if('YAnlp'!==_0x327916(0x4e3))return VisuMZ[_0x327916(0x2a2)][_0x327916(0x42e)]['call'](this);else{function _0x57e8b2(){const _0x26f764=_0x327916,_0x63326e=_0x521396[_0x26f764(0x4fe)]('['+_0x18ee3f['$1'][_0x26f764(0x152)](/\d+/g)+']');for(const _0x3da1ef of _0x63326e){if(!_0x1a08ba[_0x26f764(0x357)](_0x3da1ef))return![];}}}}},Scene_Shop['prototype'][_0x263456(0x233)]=function(){const _0x4c5b18=_0x263456,_0x444267=this[_0x4c5b18(0x22e)]()?this[_0x4c5b18(0x120)]():0x0,_0x1fcc58=this[_0x4c5b18(0x3f4)](),_0xc94445=Graphics[_0x4c5b18(0x482)]-this[_0x4c5b18(0x120)](),_0x577974=this[_0x4c5b18(0x4d3)](0x1,!![]);return new Rectangle(_0x444267,_0x1fcc58,_0xc94445,_0x577974);},VisuMZ['ItemsEquipsCore'][_0x263456(0x43e)]=Scene_Shop['prototype']['numberWindowRect'],Scene_Shop[_0x263456(0x26e)][_0x263456(0x4db)]=function(){const _0x621a68=_0x263456;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x621a68(0x4a8)==='tuvrg')return this['numberWindowRectItemsEquipsCore']();else{function _0x3f8da7(){return _0x439f10;}}}else return VisuMZ[_0x621a68(0x2a2)][_0x621a68(0x43e)][_0x621a68(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x399)]=function(){const _0x234375=_0x263456,_0x178530=this['_commandWindow']['y']+this[_0x234375(0xf3)][_0x234375(0x4a5)],_0x24c813=Graphics[_0x234375(0x482)]-this[_0x234375(0x248)](),_0x2eb382=this['isRightInputMode']()?Graphics[_0x234375(0x482)]-_0x24c813:0x0,_0x2254d9=this[_0x234375(0xe9)]()-this[_0x234375(0xf3)][_0x234375(0x4a5)];return new Rectangle(_0x2eb382,_0x178530,_0x24c813,_0x2254d9);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x2bd)]=Scene_Shop[_0x263456(0x26e)]['statusWindowRect'],Scene_Shop[_0x263456(0x26e)][_0x263456(0x183)]=function(){const _0x5d9f4e=_0x263456;if(this[_0x5d9f4e(0x2f5)]()){if('LFlRH'===_0x5d9f4e(0x22f))return this[_0x5d9f4e(0x4ca)]();else{function _0x7d0482(){const _0x1c53bc=_0x5d9f4e;return this[_0x1c53bc(0x219)]();}}}else return VisuMZ['ItemsEquipsCore'][_0x5d9f4e(0x2bd)][_0x5d9f4e(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x4ca)]=function(){const _0x1b6db6=_0x263456,_0x2d752a=this['statusWidth'](),_0x23ce37=this[_0x1b6db6(0xe9)]()-this['_commandWindow'][_0x1b6db6(0x4a5)],_0x3fb0e4=this['isRightInputMode']()?0x0:Graphics[_0x1b6db6(0x482)]-_0x2d752a,_0x51c1f5=this[_0x1b6db6(0xf3)]['y']+this[_0x1b6db6(0xf3)]['height'];return new Rectangle(_0x3fb0e4,_0x51c1f5,_0x2d752a,_0x23ce37);},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_buyWindowRect']=Scene_Shop[_0x263456(0x26e)][_0x263456(0x469)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x469)]=function(){const _0x2939be=_0x263456;if(this[_0x2939be(0x2f5)]())return this[_0x2939be(0x27f)]();else{if(_0x2939be(0xe7)!=='LvftH'){function _0x48972d(){const _0x1fe9b3=_0x2939be;_0x1fe2f6=this[_0x1fe9b3(0x1bb)]['param'](_0x2abed3),_0x293aae=this[_0x1fe9b3(0x18b)][_0x1fe9b3(0x223)](_0x411de3),_0x10deac=this[_0x1fe9b3(0x18b)][_0x1fe9b3(0x223)](_0x251a73);}}else return VisuMZ[_0x2939be(0x2a2)][_0x2939be(0x4cd)]['call'](this);}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x27f)]=function(){const _0xe17d7f=_0x263456,_0x3c6ae2=this['_commandWindow']['y']+this[_0xe17d7f(0xf3)][_0xe17d7f(0x4a5)],_0x247c65=Graphics[_0xe17d7f(0x482)]-this[_0xe17d7f(0x248)](),_0x2d918c=this[_0xe17d7f(0xe9)]()-this[_0xe17d7f(0xf3)]['height'],_0x33736f=this['isRightInputMode']()?Graphics[_0xe17d7f(0x482)]-_0x247c65:0x0;return new Rectangle(_0x33736f,_0x3c6ae2,_0x247c65,_0x2d918c);},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_createCategoryWindow']=Scene_Shop['prototype']['createCategoryWindow'],Scene_Shop[_0x263456(0x26e)][_0x263456(0x130)]=function(){const _0x40f921=_0x263456;VisuMZ[_0x40f921(0x2a2)][_0x40f921(0x1f9)][_0x40f921(0x2bb)](this),this['isUseModernControls']()&&this['postCreateCategoryWindowItemsEquipsCore']();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x2df)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0x52c)],Scene_Shop[_0x263456(0x26e)]['categoryWindowRect']=function(){const _0x4f461f=_0x263456;return this[_0x4f461f(0x2f5)]()?this[_0x4f461f(0x189)]():VisuMZ['ItemsEquipsCore'][_0x4f461f(0x2df)][_0x4f461f(0x2bb)](this);},Scene_Shop['prototype'][_0x263456(0x189)]=function(){const _0x2fd625=_0x263456,_0x5ac0d7=this['_commandWindow']['y'],_0x1d6689=this[_0x2fd625(0xf3)][_0x2fd625(0x528)],_0xeb8f7c=this[_0x2fd625(0x4d3)](0x1,!![]),_0xfab5fb=this[_0x2fd625(0x22e)]()?Graphics['boxWidth']-_0x1d6689:0x0;return new Rectangle(_0xfab5fb,_0x5ac0d7,_0x1d6689,_0xeb8f7c);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x1c4)]=function(){const _0xfd9809=_0x263456;delete this['_categoryWindow'][_0xfd9809(0x24a)]['ok'],delete this[_0xfd9809(0x217)][_0xfd9809(0x24a)][_0xfd9809(0x25f)];},VisuMZ['ItemsEquipsCore'][_0x263456(0x1b1)]=Scene_Shop[_0x263456(0x26e)]['createSellWindow'],Scene_Shop['prototype'][_0x263456(0x261)]=function(){const _0x426e99=_0x263456;VisuMZ['ItemsEquipsCore']['Scene_Shop_createSellWindow'][_0x426e99(0x2bb)](this),this[_0x426e99(0x2f5)]()&&this[_0x426e99(0x2ae)]();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x440)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0x358)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x358)]=function(){const _0x3c4685=_0x263456;if(this[_0x3c4685(0x2f5)]())return this[_0x3c4685(0x219)]();else{if(_0x3c4685(0x4e1)===_0x3c4685(0x4e1))return VisuMZ[_0x3c4685(0x2a2)][_0x3c4685(0x440)][_0x3c4685(0x2bb)](this);else{function _0x300771(){const _0x5a06fb=_0x3c4685;this[_0x5a06fb(0x1a4)](_0xe81a59['isTriggered'](_0x5a06fb(0x31e)));}}}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x219)]=function(){const _0x4688f9=_0x263456,_0x49a346=this[_0x4688f9(0x217)]['y']+this[_0x4688f9(0x217)]['height'],_0x4a745d=Graphics[_0x4688f9(0x482)]-this[_0x4688f9(0x248)](),_0x442a42=this[_0x4688f9(0xe9)]()-this[_0x4688f9(0x217)][_0x4688f9(0x4a5)],_0x1eae4c=this[_0x4688f9(0x22e)]()?Graphics[_0x4688f9(0x482)]-_0x4a745d:0x0;return new Rectangle(_0x1eae4c,_0x49a346,_0x4a745d,_0x442a42);},Scene_Shop['prototype'][_0x263456(0x2ae)]=function(){const _0x3bfef2=_0x263456;this[_0x3bfef2(0x39e)][_0x3bfef2(0x356)](this[_0x3bfef2(0x2ca)]);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x248)]=function(){const _0x3d9299=_0x263456;return VisuMZ[_0x3d9299(0x2a2)][_0x3d9299(0x2ad)][_0x3d9299(0x143)][_0x3d9299(0x31b)];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x34d)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0x387)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x387)]=function(){const _0x4ea173=_0x263456;VisuMZ[_0x4ea173(0x2a2)][_0x4ea173(0x34d)][_0x4ea173(0x2bb)](this);if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x4ea173(0x3bc)!==_0x4ea173(0x41f))this[_0x4ea173(0x2ca)][_0x4ea173(0x311)]();else{function _0x43883d(){const _0x49afa8=_0x4ea173;return _0x354861['CoreEngine'][_0x49afa8(0x2ad)]['Param'][_0x49afa8(0x52b)];}}}this[_0x4ea173(0x39e)]['updateHelp']();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x163)]=Scene_Shop['prototype']['commandBuy'],Scene_Shop[_0x263456(0x26e)][_0x263456(0x3f0)]=function(){const _0x15411c=_0x263456;VisuMZ[_0x15411c(0x2a2)][_0x15411c(0x163)]['call'](this),this[_0x15411c(0x2f5)]()&&this['commandBuyItemsEquipsCore']();},Scene_Shop['prototype'][_0x263456(0x405)]=function(){const _0x5295f8=_0x263456;this[_0x5295f8(0x215)]=this[_0x5295f8(0x215)]||0x0,this[_0x5295f8(0x181)][_0x5295f8(0x36d)](this['_buyWindowLastIndex']);},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_commandSell']=Scene_Shop['prototype'][_0x263456(0x207)],Scene_Shop['prototype'][_0x263456(0x207)]=function(){const _0x27b0cd=_0x263456;VisuMZ[_0x27b0cd(0x2a2)][_0x27b0cd(0x210)][_0x27b0cd(0x2bb)](this);if(this[_0x27b0cd(0x2f5)]()){if('vhtXZ'!=='EIjZF')this[_0x27b0cd(0x247)]();else{function _0x1a002b(){const _0x30ddcd=_0x27b0cd,_0x43de6d=_0x6346e2(_0x45d503['$1'])[_0x30ddcd(0x1ce)](),_0x50ce42=_0x3a59da(_0x51f988['$2'])[_0x30ddcd(0x1ce)]();this['drawItemCustomEntryLine'](_0x43de6d,_0x50ce42,_0x35ba07,_0x50a865,_0x37e9fb),_0xc0c528+=this['lineHeight']();}}}this['isUseModernControls']()&&(this[_0x27b0cd(0x217)][_0x27b0cd(0x36d)](0x0),this[_0x27b0cd(0x516)]());},Scene_Shop[_0x263456(0x26e)][_0x263456(0x247)]=function(){const _0x2bb15d=_0x263456;this[_0x2bb15d(0x181)][_0x2bb15d(0x132)](),this['_commandWindow']['hide']();},VisuMZ['ItemsEquipsCore'][_0x263456(0x1ad)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0xca)],Scene_Shop['prototype'][_0x263456(0xca)]=function(){const _0x19b0ce=_0x263456;VisuMZ[_0x19b0ce(0x2a2)][_0x19b0ce(0x1ad)][_0x19b0ce(0x2bb)](this),this[_0x19b0ce(0x2f5)]()&&this['onBuyCancelItemsEquipsCore']();},Scene_Shop[_0x263456(0x26e)][_0x263456(0x363)]=function(){const _0x3acf19=_0x263456;this[_0x3acf19(0x215)]=this[_0x3acf19(0x181)][_0x3acf19(0x192)](),this['_buyWindow'][_0x3acf19(0x311)](),this[_0x3acf19(0x181)]['deselect'](),this[_0x3acf19(0x181)]['smoothScrollTo'](0x0,0x0),this['_statusWindow']['show'](),this['_dummyWindow']['hide']();},VisuMZ[_0x263456(0x2a2)]['Scene_Shop_onCategoryCancel']=Scene_Shop[_0x263456(0x26e)][_0x263456(0x3c6)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x3c6)]=function(){const _0x3f8077=_0x263456;VisuMZ[_0x3f8077(0x2a2)][_0x3f8077(0x4b4)][_0x3f8077(0x2bb)](this);if(this[_0x3f8077(0x2f5)]()){if(_0x3f8077(0x52f)===_0x3f8077(0x52f))this['onCategoryCancelItemsEquipsCore']();else{function _0x5cfeea(){const _0x4c6e19=_0x3f8077,_0x1c0f4a=_0x150438[_0x4c6e19(0x386)]['indexOf'](_0x5629a8(_0x2d3a7b['$1'])['trim']());return _0x9c904c['isArmor'](_0x106c62)&&_0x247ecd[_0x4c6e19(0xe6)]===_0x1c0f4a;}}}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x32e)]=function(){const _0x210f77=_0x263456;this[_0x210f77(0x181)]['show'](),this['_commandWindow'][_0x210f77(0x311)]();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x1e1)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0x411)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x411)]=function(){const _0xdbe96b=_0x263456;VisuMZ[_0xdbe96b(0x2a2)][_0xdbe96b(0x1e1)][_0xdbe96b(0x2bb)](this),this[_0xdbe96b(0x2f5)]()&&this[_0xdbe96b(0x278)]();},Scene_Shop[_0x263456(0x26e)][_0x263456(0x278)]=function(){const _0x5748c2=_0x263456;this[_0x5748c2(0x217)]['show']();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x3f2)]=Scene_Shop[_0x263456(0x26e)]['onSellCancel'],Scene_Shop[_0x263456(0x26e)]['onSellCancel']=function(){const _0x2596eb=_0x263456;VisuMZ['ItemsEquipsCore'][_0x2596eb(0x3f2)]['call'](this);this['isUseModernControls']()&&this[_0x2596eb(0x3c6)]();if(this[_0x2596eb(0x2f5)]()){if('cHFYM'!==_0x2596eb(0x37f))this[_0x2596eb(0x2e7)]['hide']();else{function _0x41523a(){const _0x415756=_0x2596eb,_0x1729c2=_0x415756(0x52a);if(this['_customItemInfo'][_0x1729c2])return this[_0x415756(0x318)][_0x1729c2];const _0x4d04a1=_0x22aff1['ItemsEquipsCore'][_0x415756(0x2ad)][_0x415756(0x143)],_0xe02495='Occasion%1'[_0x415756(0x48a)](this['_item'][_0x415756(0xcd)]);return _0x4d04a1[_0xe02495];}}}},VisuMZ['ItemsEquipsCore']['Scene_Shop_sellingPrice']=Scene_Shop['prototype'][_0x263456(0x187)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x187)]=function(){const _0x18b63a=_0x263456;let _0x5dc9b1=this[_0x18b63a(0x26d)]();const _0x3a88f4=this[_0x18b63a(0x139)];return _0x5dc9b1=VisuMZ[_0x18b63a(0x2a2)][_0x18b63a(0x2ad)][_0x18b63a(0x1ac)][_0x18b63a(0xd0)][_0x18b63a(0x2bb)](this,_0x3a88f4,_0x5dc9b1),_0x5dc9b1;},Scene_Shop['prototype']['determineBaseSellingPrice']=function(){const _0x4ec0f2=_0x263456;if(!this[_0x4ec0f2(0x139)]){if('oQAfO'===_0x4ec0f2(0xea)){function _0x3db903(){return![];}}else return 0x0;}else{if(this[_0x4ec0f2(0x139)][_0x4ec0f2(0x38d)]['match'](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x2bed08=String(RegExp['$1']);let _0x380c4d=this['_item'],_0x2510db=_0x380c4d['price']*this['sellPriceRate']();try{eval(_0x2bed08);}catch(_0x42760e){if($gameTemp['isPlaytest']())console[_0x4ec0f2(0x41b)](_0x42760e);}if(isNaN(_0x2510db))_0x2510db=0x0;return Math[_0x4ec0f2(0x372)](_0x2510db);}else{if(this[_0x4ec0f2(0x139)][_0x4ec0f2(0x38d)][_0x4ec0f2(0x152)](/<SELL PRICE:[ ](\d+)>/i)){if('ePLJe'===_0x4ec0f2(0x367))return parseInt(RegExp['$1']);else{function _0x971f90(){const _0x159443=_0x4ec0f2,_0x10e77f=_0x1f6da2[_0x159443(0x2a2)][_0x159443(0x4ec)][_0x159443(0x48d)][_0x2f5dbb];_0x44fc7b[_0x159443(0x38d)][_0x159443(0x152)](_0x10e77f)&&(_0x2ffcdd[_0x159443(0x4c4)][_0x372918]=_0x4c06c6(_0x4d6cb3['$1']));}}}else return Math['floor'](this[_0x4ec0f2(0x139)][_0x4ec0f2(0x450)]*this[_0x4ec0f2(0x105)]());}}},Scene_Shop[_0x263456(0x26e)][_0x263456(0x105)]=function(){const _0x380e93=_0x263456;return VisuMZ[_0x380e93(0x2a2)]['Settings'][_0x380e93(0x1ac)][_0x380e93(0x34b)];},Scene_Shop['prototype'][_0x263456(0x12e)]=function(){const _0x4e270d=_0x263456;if(!this[_0x4e270d(0x30b)]())return![];if(!this[_0x4e270d(0x407)]())return![];if(!this[_0x4e270d(0x39e)])return![];if(!this[_0x4e270d(0x39e)][_0x4e270d(0x29d)])return![];return this[_0x4e270d(0x30b)]()&&this[_0x4e270d(0x407)]();},Scene_Shop[_0x263456(0x26e)]['buttonAssistKey1']=function(){const _0x245840=_0x263456;if(this[_0x245840(0x12e)]()){if(_0x245840(0x4c7)!==_0x245840(0x4c7)){function _0x2746f0(){const _0x57fba6=_0x245840;!this[_0x57fba6(0x213)]()&&_0x470d7d[_0x57fba6(0x26e)][_0x57fba6(0x33d)][_0x57fba6(0x2bb)](this);}}else{if(this['_sellWindow']['maxCols']()===0x1)return TextManager[_0x245840(0x1f5)](_0x245840(0x3cf),_0x245840(0x2ec));else{if(_0x245840(0x20e)===_0x245840(0x21d)){function _0x505bb7(){const _0x564fd2=_0x245840;return _0x3d30aa['ItemsEquipsCore'][_0x564fd2(0x2ad)]['ItemScene'][_0x564fd2(0x2fb)];}}else return TextManager[_0x245840(0x1f5)](_0x245840(0x31e),'pagedown');}}}else{if(this[_0x245840(0x382)]&&this['_numberWindow'][_0x245840(0x29d)])return TextManager['getInputMultiButtonStrings'](_0x245840(0x3cf),_0x245840(0x2ec));}return Scene_MenuBase[_0x245840(0x26e)][_0x245840(0x413)][_0x245840(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x33f)]=function(){const _0x1d8061=_0x263456;if(this[_0x1d8061(0x382)]&&this['_numberWindow'][_0x1d8061(0x29d)]){if(_0x1d8061(0x3f6)!==_0x1d8061(0x15c))return TextManager[_0x1d8061(0x1f5)]('up','down');else{function _0x3b4b59(){const _0x4cc5ac=_0x1d8061;return _0x3d2e1f[_0x4cc5ac(0x1f5)]('left','right');}}}return Scene_MenuBase[_0x1d8061(0x26e)]['buttonAssistKey2'][_0x1d8061(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x21b)]=function(){const _0x455f4d=_0x263456;if(this[_0x455f4d(0x12e)]())return VisuMZ[_0x455f4d(0x2a2)]['Settings'][_0x455f4d(0x377)]['buttonAssistCategory'];else{if(this[_0x455f4d(0x382)]&&this[_0x455f4d(0x382)][_0x455f4d(0x29d)]){if(_0x455f4d(0x1e6)!==_0x455f4d(0x1b9))return VisuMZ['ItemsEquipsCore'][_0x455f4d(0x2ad)]['ShopScene'][_0x455f4d(0xd4)];else{function _0x3021a6(){const _0x32318b=_0x3714bf(_0x5400c1['$1'])||0x1;if(_0x5b5108>=_0x32318b)return!![];}}}}return Scene_MenuBase['prototype'][_0x455f4d(0x21b)][_0x455f4d(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x227)]=function(){const _0x106ec9=_0x263456;if(this['_numberWindow']&&this[_0x106ec9(0x382)]['active']){if('zFfmF'!==_0x106ec9(0x337))return VisuMZ['ItemsEquipsCore'][_0x106ec9(0x2ad)]['ShopScene'][_0x106ec9(0x3d1)];else{function _0x4e6e7f(){const _0x32c223=_0x106ec9;return this[_0x32c223(0xf8)]?this['_list'][_0x32c223(0x25d)]:0x3;}}}return Scene_MenuBase['prototype']['buttonAssistText2'][_0x106ec9(0x2bb)](this);},Scene_Shop[_0x263456(0x26e)][_0x263456(0x262)]=function(){const _0x44d542=_0x263456;if(!SceneManager[_0x44d542(0x4ae)]())return;const _0x1fd3ca=VisuMZ['ItemsEquipsCore'][_0x44d542(0x2ad)][_0x44d542(0x1ac)];if(_0x1fd3ca[_0x44d542(0x46d)]){if(_0x44d542(0x18e)===_0x44d542(0x18e))$gameSwitches[_0x44d542(0x3a4)](_0x1fd3ca[_0x44d542(0x46d)],![]);else{function _0x32c1c7(){const _0x50e3a0=_0x44d542;return this['updatedLayoutStyle']()[_0x50e3a0(0x152)](/RIGHT/i);}}}if(_0x1fd3ca[_0x44d542(0x148)]){if(_0x44d542(0x103)!=='rGvel'){function _0x506438(){const _0x2efb7=_0x44d542;this[_0x2efb7(0x3db)](),_0x22e4f7[_0x2efb7(0x2a2)][_0x2efb7(0x371)]['call'](this),this[_0x2efb7(0x514)]();}}else $gameSwitches[_0x44d542(0x3a4)](_0x1fd3ca[_0x44d542(0x148)],![]);}},VisuMZ['ItemsEquipsCore'][_0x263456(0x1bf)]=Scene_Shop[_0x263456(0x26e)][_0x263456(0x141)],Scene_Shop['prototype'][_0x263456(0x141)]=function(_0x35be44){const _0x2a8848=_0x263456;VisuMZ[_0x2a8848(0x2a2)][_0x2a8848(0x1bf)]['call'](this,_0x35be44);if(_0x35be44<=0x0)return;const _0x3fb915=VisuMZ[_0x2a8848(0x2a2)]['Settings']['ShopScene'];if(_0x3fb915[_0x2a8848(0x46d)]){if('Bvfew'===_0x2a8848(0x1e9))$gameSwitches[_0x2a8848(0x3a4)](_0x3fb915[_0x2a8848(0x46d)],!![]);else{function _0x4a8ba8(){const _0x904884=_0x2a8848;return _0x904884(0x4f9)['format'](_0x4e0ac9['round'](_0x13e3e1*0x64));}}}},VisuMZ['ItemsEquipsCore'][_0x263456(0x4cb)]=Scene_Shop['prototype'][_0x263456(0x329)],Scene_Shop[_0x263456(0x26e)][_0x263456(0x329)]=function(_0x312424){const _0x3d018c=_0x263456;VisuMZ[_0x3d018c(0x2a2)][_0x3d018c(0x4cb)][_0x3d018c(0x2bb)](this,_0x312424);if(_0x312424<=0x0)return;const _0x2253c0=VisuMZ[_0x3d018c(0x2a2)][_0x3d018c(0x2ad)][_0x3d018c(0x1ac)];if(_0x2253c0['SwitchBuy']){if('KgvPp'!==_0x3d018c(0xc9)){function _0x20b292(){const _0x350a3b=_0x3d018c,_0x4bb24e=_0x3dd8ae[_0x350a3b(0x4cf)][_0x350a3b(0x1bb)];if(!_0x4bb24e)return;if(!_0x4bb24e[_0x350a3b(0x4af)](this['index']()))return![];const _0x21d13f=_0x4bb24e[_0x350a3b(0x26b)]()[this[_0x350a3b(0x192)]()];if(_0x4bb24e[_0x350a3b(0x3a0)]()[_0x350a3b(0x3ee)](_0x21d13f))return![];return!![];;}}else $gameSwitches[_0x3d018c(0x3a4)](_0x2253c0['SwitchSell'],!![]);}};function Sprite_NewLabel(){const _0x37653f=_0x263456;this[_0x37653f(0x288)](...arguments);}Sprite_NewLabel['prototype']=Object[_0x263456(0x101)](Sprite[_0x263456(0x26e)]),Sprite_NewLabel[_0x263456(0x26e)][_0x263456(0x424)]=Sprite_NewLabel,Sprite_NewLabel[_0x263456(0x26e)][_0x263456(0x288)]=function(){const _0x43b742=_0x263456;Sprite[_0x43b742(0x26e)][_0x43b742(0x288)][_0x43b742(0x2bb)](this),this[_0x43b742(0x12f)]();},Sprite_NewLabel[_0x263456(0x26e)][_0x263456(0x12f)]=function(){const _0x39a426=_0x263456,_0x200fd9=ImageManager[_0x39a426(0x1b4)],_0x27c531=ImageManager[_0x39a426(0x225)];this[_0x39a426(0x284)]=new Bitmap(_0x200fd9,_0x27c531),this[_0x39a426(0x3e4)](),this[_0x39a426(0x231)]();},Sprite_NewLabel[_0x263456(0x26e)][_0x263456(0x3e4)]=function(){const _0x102818=_0x263456,_0x3fb4bc=VisuMZ['ItemsEquipsCore'][_0x102818(0x2ad)][_0x102818(0x168)][_0x102818(0x40a)];if(_0x3fb4bc<=0x0)return;const _0x14a2e5=ImageManager[_0x102818(0x342)](_0x102818(0x104)),_0x54f32d=ImageManager[_0x102818(0x1b4)],_0x739b5d=ImageManager['iconHeight'],_0x13e8af=_0x3fb4bc%0x10*_0x54f32d,_0x4bed4=Math[_0x102818(0x372)](_0x3fb4bc/0x10)*_0x739b5d;this[_0x102818(0x284)]['blt'](_0x14a2e5,_0x13e8af,_0x4bed4,_0x54f32d,_0x739b5d,0x0,0x0);},Sprite_NewLabel[_0x263456(0x26e)]['drawNewLabelText']=function(){const _0x4b6d3a=_0x263456,_0x547316=VisuMZ['ItemsEquipsCore'][_0x4b6d3a(0x2ad)][_0x4b6d3a(0x168)],_0x3c0223=_0x547316[_0x4b6d3a(0x4a1)];if(_0x3c0223==='')return;const _0x5de2d7=ImageManager['iconWidth'],_0x220831=ImageManager[_0x4b6d3a(0x225)];this['bitmap']['fontFace']=_0x547316[_0x4b6d3a(0x370)]||$gameSystem['mainFontFace'](),this[_0x4b6d3a(0x284)][_0x4b6d3a(0x28b)]=this[_0x4b6d3a(0x15f)](),this[_0x4b6d3a(0x284)][_0x4b6d3a(0x287)]=_0x547316[_0x4b6d3a(0x24e)],this[_0x4b6d3a(0x284)][_0x4b6d3a(0xf5)](_0x3c0223,0x0,_0x220831/0x2,_0x5de2d7,_0x220831/0x2,'center');},Sprite_NewLabel[_0x263456(0x26e)][_0x263456(0x15f)]=function(){const _0x52ff1f=_0x263456,_0x2a7bc1=VisuMZ['ItemsEquipsCore']['Settings'][_0x52ff1f(0x168)]['FontColor'];return _0x2a7bc1[_0x52ff1f(0x152)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x52ff1f(0x28b)](_0x2a7bc1);},Window_Base[_0x263456(0x26e)][_0x263456(0x259)]=function(_0x18991a,_0x505d8d,_0x2b90ac,_0x3d168c){const _0x469222=_0x263456;if(_0x18991a){if(_0x469222(0x4b8)==='aQLtn'){function _0x3ca088(){const _0xc464c4=_0x469222,_0x124fee=_0x5a485a['x']+_0x48ceca[_0xc464c4(0x372)]((_0xe4de3b[_0xc464c4(0x528)]-_0x5ca44e)/0x2);this[_0xc464c4(0xe5)](_0x4ca047,_0x124fee,_0x2cf471['y'],_0x5316f0);}}else{const _0xcb67b7=_0x2b90ac+(this[_0x469222(0x2f3)]()-ImageManager[_0x469222(0x225)])/0x2,_0x2f9bfa=ImageManager[_0x469222(0x1b4)]+0x4,_0x9cd0fa=Math[_0x469222(0x4df)](0x0,_0x3d168c-_0x2f9bfa);this[_0x469222(0x3f5)](ColorManager[_0x469222(0x118)](_0x18991a)),this[_0x469222(0xde)](_0x18991a[_0x469222(0x4f7)],_0x505d8d,_0xcb67b7),this[_0x469222(0xf5)](_0x18991a[_0x469222(0x49e)],_0x505d8d+_0x2f9bfa,_0x2b90ac,_0x9cd0fa),this[_0x469222(0x28f)]();}}},Window_Base[_0x263456(0x26e)][_0x263456(0x214)]=function(_0x38c858,_0x42c184,_0x13954a,_0x4f15a3){const _0x1dd7e7=_0x263456;if(this['isDrawItemNumber'](_0x38c858)){if(_0x1dd7e7(0x4ee)===_0x1dd7e7(0x20f)){function _0x47e855(){const _0x2f52dc=_0x1dd7e7;this[_0x2f52dc(0x3f5)](_0x4b5d33['powerDownColor']());}}else{this['resetFontSettings']();const _0x24cee2=VisuMZ[_0x1dd7e7(0x2a2)][_0x1dd7e7(0x2ad)]['ItemScene'],_0x195c69=_0x24cee2[_0x1dd7e7(0x50c)],_0x407814=_0x195c69[_0x1dd7e7(0x48a)]($gameParty[_0x1dd7e7(0x2d3)](_0x38c858));this['contents'][_0x1dd7e7(0x287)]=_0x24cee2[_0x1dd7e7(0x3a9)],this['drawText'](_0x407814,_0x42c184,_0x13954a,_0x4f15a3,_0x1dd7e7(0x2ec)),this[_0x1dd7e7(0x383)]();}}},Window_Base['prototype']['isDrawItemNumber']=function(_0x2a5032){const _0x31bc2a=_0x263456;if(DataManager['isKeyItem'](_0x2a5032))return $dataSystem[_0x31bc2a(0x11c)];return!![];},Window_Base['prototype'][_0x263456(0x47a)]=function(_0x4869dd,_0x4d4a2a,_0x5e781c,_0x23f7c0,_0x3e0569){const _0xd8a53f=_0x263456;_0x3e0569=Math[_0xd8a53f(0x4df)](_0x3e0569||0x1,0x1);while(_0x3e0569--){if(_0xd8a53f(0x31f)!==_0xd8a53f(0xd3)){_0x23f7c0=_0x23f7c0||this['lineHeight'](),this[_0xd8a53f(0x1ca)][_0xd8a53f(0x51d)]=0xa0;const _0x184d9b=ColorManager[_0xd8a53f(0x49a)]();this[_0xd8a53f(0x1ca)][_0xd8a53f(0x2b3)](_0x4869dd+0x1,_0x4d4a2a+0x1,_0x5e781c-0x2,_0x23f7c0-0x2,_0x184d9b),this[_0xd8a53f(0x1ca)]['paintOpacity']=0xff;}else{function _0x32911f(){const _0x35303c=_0xd8a53f;_0x2bbed8[_0x35303c(0x2a2)][_0x35303c(0xd7)][_0x35303c(0x2bb)](this,_0x20e38c),this[_0x35303c(0x406)](_0x36d894);}}}},VisuMZ[_0x263456(0x2a2)]['Window_Selectable_initialize']=Window_Selectable[_0x263456(0x26e)]['initialize'],Window_Selectable[_0x263456(0x26e)][_0x263456(0x288)]=function(_0x4fa265){const _0x43e0e1=_0x263456;this[_0x43e0e1(0x384)](),VisuMZ[_0x43e0e1(0x2a2)]['Window_Selectable_initialize'][_0x43e0e1(0x2bb)](this,_0x4fa265);},Window_Selectable['prototype']['initNewLabelSprites']=function(){const _0x40961b=_0x263456;this[_0x40961b(0x116)]={},this['_newLabelOpacity']=0xff,this['_newLabelOpacityChange']=VisuMZ[_0x40961b(0x2a2)]['Settings']['New'][_0x40961b(0x3b2)],this[_0x40961b(0x218)]=VisuMZ[_0x40961b(0x2a2)][_0x40961b(0x2ad)]['New'][_0x40961b(0x513)];},Window_Selectable[_0x263456(0x26e)][_0x263456(0x2e3)]=function(){return![];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x33c)]=Window_Selectable[_0x263456(0x26e)][_0x263456(0x27a)],Window_Selectable[_0x263456(0x26e)][_0x263456(0x27a)]=function(_0x4b8cc0){const _0x59acfa=_0x263456;VisuMZ[_0x59acfa(0x2a2)][_0x59acfa(0x33c)][_0x59acfa(0x2bb)](this,_0x4b8cc0);if(this[_0x59acfa(0x2e3)]())this['clearNewLabelFromItem'](_0x4b8cc0);},Window_Selectable['prototype'][_0x263456(0x4ab)]=function(_0xfe68c3){const _0x315ff8=_0x263456;if(!_0xfe68c3)return;$gameParty[_0x315ff8(0x4dc)](_0xfe68c3);let _0x179273='';if(DataManager[_0x315ff8(0x3c8)](_0xfe68c3))_0x179273=_0x315ff8(0x140)[_0x315ff8(0x48a)](_0xfe68c3['id']);else{if(DataManager[_0x315ff8(0x164)](_0xfe68c3))_0x179273=_0x315ff8(0x111)[_0x315ff8(0x48a)](_0xfe68c3['id']);else{if(DataManager[_0x315ff8(0x224)](_0xfe68c3)){if('jtFhS'===_0x315ff8(0x427)){function _0x1d4026(){const _0x1ac92d=_0x315ff8;this[_0x1ac92d(0x43a)]();}}else _0x179273=_0x315ff8(0x4ad)[_0x315ff8(0x48a)](_0xfe68c3['id']);}else return;}}const _0x29b042=this[_0x315ff8(0x116)][_0x179273];if(_0x29b042)_0x29b042[_0x315ff8(0x132)]();},VisuMZ[_0x263456(0x2a2)]['Window_Selectable_refresh']=Window_Selectable[_0x263456(0x26e)][_0x263456(0x133)],Window_Selectable[_0x263456(0x26e)][_0x263456(0x133)]=function(){const _0x9cc98e=_0x263456;this['hideNewLabelSprites'](),VisuMZ[_0x9cc98e(0x2a2)][_0x9cc98e(0x500)]['call'](this);},Window_Selectable[_0x263456(0x26e)][_0x263456(0x2f4)]=function(){const _0x14ce95=_0x263456;for(const _0x26eb7e of Object[_0x14ce95(0x353)](this[_0x14ce95(0x116)])){_0x26eb7e['hide']();}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x478)]=Window_Selectable[_0x263456(0x26e)][_0x263456(0x16c)],Window_Selectable[_0x263456(0x26e)][_0x263456(0x16c)]=function(){const _0x3958f7=_0x263456;this[_0x3958f7(0x453)](),VisuMZ['ItemsEquipsCore'][_0x3958f7(0x478)][_0x3958f7(0x2bb)](this);},Window_Selectable['prototype']['updateNewLabelOpacity']=function(){const _0x1ce64c=_0x263456;if(!this['isShowNew']())return;const _0x4e7fce=this[_0x1ce64c(0x218)];this[_0x1ce64c(0x4ed)]+=this['_newLabelOpacityChange'];(this['_newLabelOpacity']>=_0x4e7fce||this[_0x1ce64c(0x4ed)]<=0x0)&&(this[_0x1ce64c(0x115)]*=-0x1);this[_0x1ce64c(0x4ed)]=this[_0x1ce64c(0x4ed)][_0x1ce64c(0x3ab)](0x0,_0x4e7fce);for(const _0x4554e4 of Object[_0x1ce64c(0x353)](this[_0x1ce64c(0x116)])){if(_0x1ce64c(0x18f)===_0x1ce64c(0x18f))_0x4554e4[_0x1ce64c(0x2c4)]=this['_newLabelOpacity'];else{function _0x4564a2(){const _0x403286=_0x1ce64c,_0x1fcd60=this['isRightInputMode']()?this['statusWidth']():0x0,_0x2fa9c5=this['_categoryWindow']['y']+this[_0x403286(0x217)][_0x403286(0x4a5)],_0x23cb96=_0x38e95b[_0x403286(0x482)]-this[_0x403286(0x248)](),_0x24abd8=this['mainAreaBottom']()-_0x2fa9c5;return new _0x96c85f(_0x1fcd60,_0x2fa9c5,_0x23cb96,_0x24abd8);}}}},Window_Selectable[_0x263456(0x26e)][_0x263456(0x38f)]=function(_0x4e48f2){const _0x276996=_0x263456,_0x4ed4b7=this[_0x276996(0x116)];if(_0x4ed4b7[_0x4e48f2]){if(_0x276996(0xc2)!=='nalKZ'){function _0x376708(){const _0x7f1fdd=_0x276996;return _0xc88a34[_0x7f1fdd(0x4da)];}}else return _0x4ed4b7[_0x4e48f2];}else{if(_0x276996(0x36e)==='NjhFT'){const _0x3cac62=new Sprite_NewLabel();return _0x4ed4b7[_0x4e48f2]=_0x3cac62,this[_0x276996(0x2f0)](_0x3cac62),_0x3cac62;}else{function _0x35204f(){const _0x2e1466=_0x276996,_0x587397=this[_0x2e1466(0x26b)]();for(let _0x2216f4=0x0;_0x2216f4<_0x587397[_0x2e1466(0x25d)];_0x2216f4++){if(!this[_0x2e1466(0x3b3)][_0x2216f4])this['_equips'][_0x2216f4]=new _0x3116e6();}this['releaseUnequippableItems'](![]),this['refresh']();}}}},Window_Selectable['prototype'][_0x263456(0x41c)]=function(_0xa8c264,_0x399066,_0x1fbb06){const _0x597c74=_0x263456;let _0x2b35a2='';if(DataManager[_0x597c74(0x3c8)](_0xa8c264)){if(_0x597c74(0x32c)!==_0x597c74(0x32c)){function _0x3b29df(){const _0x952867=_0x597c74;this[_0x952867(0x162)]=_0x5ad375,this[_0x952867(0x133)](),this['updateChangedSlots']();}}else _0x2b35a2='item-%1'['format'](_0xa8c264['id']);}else{if(DataManager[_0x597c74(0x164)](_0xa8c264))_0x2b35a2=_0x597c74(0x111)['format'](_0xa8c264['id']);else{if(DataManager[_0x597c74(0x224)](_0xa8c264)){if(_0x597c74(0x16f)==='RftVN')_0x2b35a2=_0x597c74(0x4ad)[_0x597c74(0x48a)](_0xa8c264['id']);else{function _0x4bc8e3(){const _0x5e0b09=_0x597c74;this[_0x5e0b09(0x405)]();}}}else{if('uBxMI'===_0x597c74(0x347)){function _0x581a48(){const _0x433128=_0x597c74,_0x360e6e=this[_0x433128(0x120)](),_0xee8f24=this['calcWindowHeight'](0x1,!![]),_0x5a3bf6=this[_0x433128(0x22e)]()?0x0:_0x300d4f['boxWidth']-_0x360e6e,_0x3a5cbf=this[_0x433128(0x3f4)]();return new _0x39c024(_0x5a3bf6,_0x3a5cbf,_0x360e6e,_0xee8f24);}}else return;}}}const _0x3f1f0b=this[_0x597c74(0x38f)](_0x2b35a2);_0x3f1f0b[_0x597c74(0xd1)](_0x399066,_0x1fbb06),_0x3f1f0b[_0x597c74(0x311)](),_0x3f1f0b[_0x597c74(0x2c4)]=this[_0x597c74(0x4ed)];},Window_ItemCategory[_0x263456(0x44c)]=VisuMZ['ItemsEquipsCore'][_0x263456(0x2ad)][_0x263456(0x1cb)]['List'],Window_ItemCategory[_0x263456(0x1e8)]=[_0x263456(0x15e),_0x263456(0x2a3),_0x263456(0x2c8),_0x263456(0x241),_0x263456(0xfa),'BattleUsable',_0x263456(0x113),_0x263456(0x178)],VisuMZ['ItemsEquipsCore'][_0x263456(0x245)]=Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x288)],Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x288)]=function(_0x3e0c1b){const _0x2c936b=_0x263456;VisuMZ[_0x2c936b(0x2a2)][_0x2c936b(0x245)][_0x2c936b(0x2bb)](this,_0x3e0c1b),this[_0x2c936b(0x1ee)](_0x3e0c1b);},Window_ItemCategory[_0x263456(0x26e)]['createCategoryNameWindow']=function(_0x397854){const _0x35bca4=_0x263456,_0x270d07=new Rectangle(0x0,0x0,_0x397854[_0x35bca4(0x528)],_0x397854[_0x35bca4(0x4a5)]);this[_0x35bca4(0x2b4)]=new Window_Base(_0x270d07),this['_categoryNameWindow'][_0x35bca4(0x2c4)]=0x0,this[_0x35bca4(0x31a)](this[_0x35bca4(0x2b4)]),this[_0x35bca4(0x157)]();},Window_ItemCategory[_0x263456(0x26e)]['isUseModernControls']=function(){const _0xf17adf=_0x263456;return Imported[_0xf17adf(0x20c)]&&Window_HorzCommand[_0xf17adf(0x26e)][_0xf17adf(0x407)][_0xf17adf(0x2bb)](this);},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x3e2)]=function(){},Window_ItemCategory['prototype']['playOkSound']=function(){const _0x1209ca=_0x263456;if(!this[_0x1209ca(0x407)]())Window_HorzCommand[_0x1209ca(0x26e)][_0x1209ca(0x126)][_0x1209ca(0x2bb)](this);},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x1d7)]=function(){const _0x349d28=_0x263456;return this[_0x349d28(0xf8)]?this['maxItems']():0x4;},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x16c)]=function(){const _0x44a056=_0x263456;Window_HorzCommand['prototype']['update']['call'](this),this['_itemWindow']&&this[_0x44a056(0x4c8)]['setCategory'](this[_0x44a056(0x3ec)]());},Window_ItemCategory[_0x263456(0x26e)]['processCursorMoveModernControls']=function(){const _0x28ae4f=_0x263456;if(this[_0x28ae4f(0x15a)]()){const _0x4c4d8e=this[_0x28ae4f(0x192)]();if(this[_0x28ae4f(0x4c8)]&&this[_0x28ae4f(0x4c8)][_0x28ae4f(0x1d7)]()<=0x1){if(Input[_0x28ae4f(0x176)](_0x28ae4f(0x2ec))){if(_0x28ae4f(0x429)===_0x28ae4f(0x2ef)){function _0x11eed9(){const _0x55d436=_0x28ae4f;return this[_0x55d436(0xf3)]&&this['_commandWindow'][_0x55d436(0x407)]();}}else this[_0x28ae4f(0x14f)](Input[_0x28ae4f(0x257)](_0x28ae4f(0x2ec)));}if(Input['isRepeated']('left')){if('nbHlZ'!==_0x28ae4f(0x307))this['cursorLeft'](Input[_0x28ae4f(0x257)](_0x28ae4f(0x3cf)));else{function _0x1a8c4a(){const _0x41a7c4=_0x28ae4f;_0x247155['ItemsEquipsCore']['Scene_Shop_commandSell']['call'](this),this[_0x41a7c4(0x2f5)]()&&this['commandSellItemsEquipsCore'](),this[_0x41a7c4(0x407)]()&&(this['_categoryWindow']['smoothSelect'](0x0),this[_0x41a7c4(0x516)]());}}}}else this[_0x28ae4f(0x4c8)]&&this[_0x28ae4f(0x4c8)][_0x28ae4f(0x1d7)]()>0x1&&(Input[_0x28ae4f(0x176)]('pagedown')&&!Input[_0x28ae4f(0x17b)](_0x28ae4f(0x1c8))&&this[_0x28ae4f(0x14f)](Input[_0x28ae4f(0x257)](_0x28ae4f(0x110))),Input[_0x28ae4f(0x176)](_0x28ae4f(0x31e))&&!Input[_0x28ae4f(0x17b)](_0x28ae4f(0x1c8))&&this['cursorLeft'](Input[_0x28ae4f(0x257)](_0x28ae4f(0x31e))));this['index']()!==_0x4c4d8e&&this[_0x28ae4f(0x43a)]();}},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x128)]=function(){const _0x5459fa=_0x263456;if(this['isUseModernControls']())return;Window_HorzCommand['prototype'][_0x5459fa(0x128)][_0x5459fa(0x2bb)](this);},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0xdf)]=function(){const _0x525b43=_0x263456;return this['isUseModernControls']()?![]:Window_HorzCommand[_0x525b43(0x26e)][_0x525b43(0xdf)][_0x525b43(0x2bb)](this);},Window_ItemCategory[_0x263456(0x26e)]['processTouchModernControls']=function(){const _0x252108=_0x263456;if(this[_0x252108(0x313)]()){if(_0x252108(0x416)!=='pMUan'){function _0x1b18d2(){const _0x24f866=_0x252108,_0x49339e='%1-%2'['format'](_0x232df8,_0x13a68c);_0x57dca5['ItemsEquipsCore']['paramJS'][_0x49339e]=new _0x2df148(_0x24f866(0x1c0),_0x24f866(0x418),_0x3b7b84);}}else{TouchInput[_0x252108(0x257)]()&&this['onTouchSelect'](!![]);if(TouchInput[_0x252108(0x4e6)]()){if('CUbmG'!=='CUbmG'){function _0x2bb4c6(){const _0x58a38f=_0x252108;this[_0x58a38f(0x217)]['deactivate']();}}else this[_0x252108(0x201)]();}else TouchInput['isCancelled']()&&this[_0x252108(0x4d9)]();}}},Window_ItemCategory['prototype'][_0x263456(0x437)]=function(_0xfba415){const _0x3a3bc7=_0x263456;this[_0x3a3bc7(0x407)]()?this['onTouchSelectModern'](!![]):Window_HorzCommand[_0x3a3bc7(0x26e)]['onTouchSelect'][_0x3a3bc7(0x2bb)](this,_0xfba415);},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x299)]=function(_0x4e5e33){const _0x2d2598=_0x263456;this[_0x2d2598(0x4ff)]=![];if(this[_0x2d2598(0x15a)]()){const _0x3b46d1=this[_0x2d2598(0x192)](),_0x500de2=this[_0x2d2598(0x390)]();_0x500de2>=0x0&&_0x500de2!==this[_0x2d2598(0x192)]()&&this[_0x2d2598(0x45a)](_0x500de2);if(_0x4e5e33&&this[_0x2d2598(0x192)]()!==_0x3b46d1){if(_0x2d2598(0x160)===_0x2d2598(0x10f)){function _0x44a703(){const _0x519bf7=_0x2d2598;return _0x206863[_0x519bf7(0x4da)];}}else this['playCursorSound']();}}},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x138)]=function(){const _0x4d9ba6=_0x263456;for(const _0x1f3984 of Window_ItemCategory[_0x4d9ba6(0x44c)]){this['addItemCategory'](_0x1f3984);}this[_0x4d9ba6(0x45a)](this['index']());},Window_ItemCategory['prototype']['addItemCategory']=function(_0x133fe4){const _0x6ad5d5=_0x263456,_0x2cb24a=_0x133fe4['Type'],_0x445cf0=_0x133fe4[_0x6ad5d5(0x40a)],_0x13b4ff=_0x133fe4[_0x6ad5d5(0x3b5)]||0x0;if(_0x13b4ff>0x0&&!$gameSwitches[_0x6ad5d5(0x357)](_0x13b4ff))return;let _0x100ef8='',_0xc2606f='category',_0x2b5d2c=_0x2cb24a;if(_0x2cb24a['match'](/Category:(.*)/i))_0x100ef8=String(RegExp['$1'])['trim']();else{if(Window_ItemCategory[_0x6ad5d5(0x1e8)][_0x6ad5d5(0x3ee)](_0x2cb24a))_0x100ef8=VisuMZ[_0x6ad5d5(0x2a2)][_0x6ad5d5(0x2ad)][_0x6ad5d5(0x1cb)][_0x2cb24a];else{if(['AllItems','RegularItems'][_0x6ad5d5(0x3ee)](_0x2cb24a))_0x100ef8=TextManager[_0x6ad5d5(0x1c0)];else{if(_0x2cb24a===_0x6ad5d5(0x4e4)){if(_0x6ad5d5(0x2e0)==='WXHTf'){function _0x2f7326(){const _0x7c45c6=_0x6ad5d5;return _0x7c45c6(0x3be)[_0x7c45c6(0x48a)](_0x577a9e(_0x15e31c['$1']));}}else _0x100ef8=TextManager[_0x6ad5d5(0x2bf)];}else{if(_0x2cb24a===_0x6ad5d5(0x340))_0x100ef8=TextManager[_0x6ad5d5(0x235)];else{if(_0x2cb24a==='AllArmors'){if(_0x6ad5d5(0x232)==='ijTLM'){function _0x34ed3e(){const _0x4fd2fa=_0x6ad5d5;_0x41233b[_0x4fd2fa(0x2a2)][_0x4fd2fa(0x46b)]['call'](this),this['isUseModernControls']()&&this[_0x4fd2fa(0x10e)]();}}else _0x100ef8=TextManager[_0x6ad5d5(0x338)];}else{if(_0x2cb24a[_0x6ad5d5(0x152)](/WTYPE:(\d+)/i)){if('hQUOM'!=='hQUOM'){function _0x556b91(){const _0x345112=_0x6ad5d5,_0x2bafc7=_0x345112(0x462);if(this[_0x345112(0x318)][_0x2bafc7])return this[_0x345112(0x318)][_0x2bafc7];let _0x4d1c6c='';if(this[_0x345112(0x401)][_0x345112(0x515)]>0x0)_0x4d1c6c+=_0x345112(0xc7)[_0x345112(0x48a)](_0x32b81c[_0x345112(0x372)](this['_itemData'][_0x345112(0x515)]*0x64));if(this[_0x345112(0x401)][_0x345112(0x515)]>0x0&&this[_0x345112(0x401)][_0x345112(0x4b1)]>0x0)_0x4d1c6c+='\x20';if(this[_0x345112(0x401)][_0x345112(0x4b1)]>0x0)_0x4d1c6c+=_0x345112(0x445)['format'](this[_0x345112(0x401)][_0x345112(0x4b1)]);return _0x4d1c6c;}}else _0x100ef8=$dataSystem[_0x6ad5d5(0x1a0)][Number(RegExp['$1'])]||'';}else{if(_0x2cb24a[_0x6ad5d5(0x152)](/ATYPE:(\d+)/i)){if(_0x6ad5d5(0x1ae)!==_0x6ad5d5(0x327))_0x100ef8=$dataSystem['armorTypes'][Number(RegExp['$1'])]||'';else{function _0x586e99(){const _0x6cc9b5=_0x6ad5d5;_0x472b2e[_0x6cc9b5(0x2a2)][_0x6cc9b5(0x4ec)]={},_0x5a5ed0[_0x6cc9b5(0x2a2)][_0x6cc9b5(0x4ec)][_0x6cc9b5(0x48d)]=[],_0x5e5c40[_0x6cc9b5(0x2a2)][_0x6cc9b5(0x4ec)][_0x6cc9b5(0x483)]=[];const _0x3e22c8=[_0x6cc9b5(0x4d2),_0x6cc9b5(0x3e7),'ATK',_0x6cc9b5(0x1d1),'MAT',_0x6cc9b5(0x34a),_0x6cc9b5(0x511),_0x6cc9b5(0x474)];for(const _0x391999 of _0x3e22c8){const _0x4e922e=_0x6cc9b5(0x209)[_0x6cc9b5(0x48a)](_0x391999);_0x511715[_0x6cc9b5(0x2a2)]['RegExp'][_0x6cc9b5(0x48d)][_0x6cc9b5(0x4ac)](new _0x122c08(_0x4e922e,'i'));const _0x4773e6=_0x6cc9b5(0x13e)[_0x6cc9b5(0x48a)](_0x391999);_0x109888[_0x6cc9b5(0x2a2)]['RegExp'][_0x6cc9b5(0x483)][_0x6cc9b5(0x4ac)](new _0x39c304(_0x4773e6,'g'));}}}}else _0x2cb24a['match'](/ETYPE:(\d+)/i)&&(_0x100ef8=$dataSystem['equipTypes'][Number(RegExp['$1'])]||'');}}}}}}}if(_0x445cf0>0x0&&this[_0x6ad5d5(0x44f)]()!==_0x6ad5d5(0x123)){if(_0x6ad5d5(0x460)==='iboqh')_0x100ef8=_0x6ad5d5(0x175)['format'](_0x445cf0,_0x100ef8);else{function _0x4c153a(){const _0xc1d5dc=_0x6ad5d5;_0x40cecf[_0xc1d5dc(0x26e)][_0xc1d5dc(0x22e)][_0xc1d5dc(0x2bb)](this);}}}this[_0x6ad5d5(0x3bb)](_0x100ef8,_0xc2606f,!![],_0x2b5d2c);},Window_ItemCategory[_0x263456(0x26e)]['itemTextAlign']=function(){const _0x40822f=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x40822f(0x2ad)][_0x40822f(0x1cb)]['TextAlign'];},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x3e8)]=function(_0x2b6a13){const _0x35475f=_0x263456,_0x18a6ae=this[_0x35475f(0x202)](_0x2b6a13);if(_0x18a6ae===_0x35475f(0x3ef)){if(_0x35475f(0x102)===_0x35475f(0x102))this[_0x35475f(0x1f6)](_0x2b6a13);else{function _0x496cca(){const _0xff7e00=_0x35475f,_0x1f4ad8=_0x15c6ee(_0x1fc669['$1']);let _0x148bdd=this[_0xff7e00(0x139)],_0x2954f2=_0x148bdd['price']*this['sellPriceRate']();try{_0x4a9c0a(_0x1f4ad8);}catch(_0x3c4550){if(_0x31f727['isPlaytest']())_0x5992a0['log'](_0x3c4550);}if(_0xcedf41(_0x2954f2))_0x2954f2=0x0;return _0x40bd4e[_0xff7e00(0x372)](_0x2954f2);}}}else{if(_0x18a6ae===_0x35475f(0x1da))this[_0x35475f(0x1a5)](_0x2b6a13);else{if(_0x35475f(0xf1)===_0x35475f(0xf1))Window_HorzCommand['prototype'][_0x35475f(0x3e8)]['call'](this,_0x2b6a13);else{function _0x1cc5db(){const _0x21ca57=_0x35475f;_0x34b9a4=_0x1f5f80(_0x3a3d34['$1'])[_0x21ca57(0x1ce)]();}}}}},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x44f)]=function(){const _0x2c984a=_0x263456;return VisuMZ[_0x2c984a(0x2a2)]['Settings'][_0x2c984a(0x1cb)][_0x2c984a(0xfb)];},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x202)]=function(_0x24f946){const _0x44149a=_0x263456;if(_0x24f946<0x0)return'text';const _0x3b29e1=this[_0x44149a(0x44f)]();if(_0x3b29e1!==_0x44149a(0x2ee))return _0x3b29e1;else{const _0x29fb9b=this['commandName'](_0x24f946);if(_0x29fb9b['match'](/\\I\[(\d+)\]/i)){const _0x859f73=this[_0x44149a(0x3f7)](_0x24f946),_0x157d87=this[_0x44149a(0x3bd)](_0x29fb9b)[_0x44149a(0x528)];return _0x157d87<=_0x859f73[_0x44149a(0x528)]?_0x44149a(0x3ef):_0x44149a(0x1da);}else return _0x44149a(0x123);}},Window_ItemCategory[_0x263456(0x26e)]['drawItemStyleIconText']=function(_0x4f74d0){const _0x398edb=_0x263456,_0x28a6f1=this[_0x398edb(0x3f7)](_0x4f74d0),_0xce73fa=this[_0x398edb(0x50f)](_0x4f74d0),_0x4d396d=this[_0x398edb(0x3bd)](_0xce73fa)['width'];this[_0x398edb(0x172)](this['isCommandEnabled'](_0x4f74d0));const _0x42bdf6=this[_0x398edb(0x252)]();if(_0x42bdf6===_0x398edb(0x2ec))this[_0x398edb(0xe5)](_0xce73fa,_0x28a6f1['x']+_0x28a6f1[_0x398edb(0x528)]-_0x4d396d,_0x28a6f1['y'],_0x4d396d);else{if(_0x42bdf6===_0x398edb(0x51f)){const _0x539e7e=_0x28a6f1['x']+Math[_0x398edb(0x372)]((_0x28a6f1['width']-_0x4d396d)/0x2);this[_0x398edb(0xe5)](_0xce73fa,_0x539e7e,_0x28a6f1['y'],_0x4d396d);}else this[_0x398edb(0xe5)](_0xce73fa,_0x28a6f1['x'],_0x28a6f1['y'],_0x4d396d);}},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x1a5)]=function(_0x507832){const _0x327ba8=_0x263456,_0x1a9b47=this['commandName'](_0x507832);if(_0x1a9b47[_0x327ba8(0x152)](/\\I\[(\d+)\]/i)){const _0x2b84e3=Number(RegExp['$1'])||0x0,_0x2b61ac=this[_0x327ba8(0x3f7)](_0x507832),_0x35a7b2=_0x2b61ac['x']+Math[_0x327ba8(0x372)]((_0x2b61ac[_0x327ba8(0x528)]-ImageManager['iconWidth'])/0x2),_0x1cd79a=_0x2b61ac['y']+(_0x2b61ac[_0x327ba8(0x4a5)]-ImageManager[_0x327ba8(0x225)])/0x2;this[_0x327ba8(0xde)](_0x2b84e3,_0x35a7b2,_0x1cd79a);}},VisuMZ[_0x263456(0x2a2)]['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x339)],Window_ItemCategory['prototype'][_0x263456(0x339)]=function(_0x40d5cd){const _0x5cd36a=_0x263456;VisuMZ[_0x5cd36a(0x2a2)][_0x5cd36a(0x39a)][_0x5cd36a(0x2bb)](this,_0x40d5cd),_0x40d5cd['_categoryWindow']=this;},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x40b)]=function(){const _0x15c511=_0x263456;Window_HorzCommand['prototype']['callUpdateHelp'][_0x15c511(0x2bb)](this);if(this[_0x15c511(0x2b4)])this[_0x15c511(0x157)]();},Window_ItemCategory['prototype'][_0x263456(0x157)]=function(){const _0x3c3b9d=_0x263456,_0x1f3992=this['_categoryNameWindow'];_0x1f3992[_0x3c3b9d(0x30c)][_0x3c3b9d(0x412)]();const _0x4cd687=this['categoryStyleCheck'](this['index']());if(_0x4cd687===_0x3c3b9d(0x1da)){const _0x41acc8=this[_0x3c3b9d(0x3f7)](this['index']());let _0x51db4a=this[_0x3c3b9d(0x50f)](this[_0x3c3b9d(0x192)]());_0x51db4a=_0x51db4a[_0x3c3b9d(0x35c)](/\\I\[(\d+)\]/gi,''),_0x1f3992[_0x3c3b9d(0x383)](),this[_0x3c3b9d(0x1ff)](_0x51db4a,_0x41acc8),this['categoryNameWindowDrawText'](_0x51db4a,_0x41acc8),this[_0x3c3b9d(0x489)](_0x51db4a,_0x41acc8);}},Window_ItemCategory['prototype'][_0x263456(0x1ff)]=function(_0x32a0b4,_0x175451){},Window_ItemCategory[_0x263456(0x26e)][_0x263456(0x3f9)]=function(_0x587953,_0x5d1be6){const _0xad69ca=_0x263456,_0x50cb7c=this['_categoryNameWindow'];_0x50cb7c[_0xad69ca(0xf5)](_0x587953,0x0,_0x5d1be6['y'],_0x50cb7c['innerWidth'],_0xad69ca(0x51f));},Window_ItemCategory[_0x263456(0x26e)]['categoryNameWindowCenter']=function(_0x53fd44,_0x1a5795){const _0x5ea70e=_0x263456,_0x2730c6=this[_0x5ea70e(0x2b4)],_0x2a7274=$gameSystem[_0x5ea70e(0x4bb)](),_0x14b444=_0x1a5795['x']+Math[_0x5ea70e(0x372)](_0x1a5795['width']/0x2)+_0x2a7274;_0x2730c6['x']=_0x2730c6[_0x5ea70e(0x528)]/-0x2+_0x14b444,_0x2730c6['y']=Math['floor'](_0x1a5795[_0x5ea70e(0x4a5)]/0x2);},Window_ItemList['prototype'][_0x263456(0x33d)]=function(){const _0x2b1816=_0x263456;if(this[_0x2b1816(0x15a)]()){const _0x3e800a=this[_0x2b1816(0x192)]();if(this[_0x2b1816(0x1d7)]()<=0x1){if(_0x2b1816(0x385)===_0x2b1816(0x457)){function _0x4285be(){const _0x21324d=_0x2b1816;_0x197938+=_0x460573[_0x21324d(0x1b4)]+0x4;}}else{if(!this[_0x2b1816(0x4be)](_0x2b1816(0x110))&&Input[_0x2b1816(0x257)](_0x2b1816(0x110))){if(_0x2b1816(0x1d6)!==_0x2b1816(0x1d6)){function _0xfade23(){const _0x49f808=_0x2b1816;_0x523283=_0x18f660[_0x49f808(0x1c0)];}}else this['cursorPagedown']();}if(!this[_0x2b1816(0x4be)]('pageup')&&Input[_0x2b1816(0x257)](_0x2b1816(0x31e))){if('ZhVQG'===_0x2b1816(0x479))this['cursorPageup']();else{function _0x5c67c5(){const _0x4601c3=_0x2b1816,_0x18170d=this[_0x4601c3(0x119)]();return this[_0x4601c3(0x3b7)](_0x18170d,_0x46af32,_0x5dabb8,_0x2bd982,![],_0x4601c3(0x51f)),this['drawItemDarkRect'](_0x4b5d31,_0xc29d6,_0x5bf502),this[_0x4601c3(0x383)](),!![];}}}}}else{if(this['maxCols']()>0x1){Input['isRepeated'](_0x2b1816(0x2ec))&&this[_0x2b1816(0x14f)](Input[_0x2b1816(0x257)](_0x2b1816(0x2ec)));Input[_0x2b1816(0x176)](_0x2b1816(0x3cf))&&this[_0x2b1816(0x1a4)](Input[_0x2b1816(0x257)](_0x2b1816(0x3cf)));if(this[_0x2b1816(0x333)]()){if(_0x2b1816(0x1a3)!==_0x2b1816(0x4dd)){if(Input[_0x2b1816(0x257)](_0x2b1816(0x110))&&Input[_0x2b1816(0x17b)](_0x2b1816(0x1c8))){if(_0x2b1816(0x3a6)===_0x2b1816(0x503)){function _0x4f3b74(){const _0xc3b580=_0x2b1816,_0x4f97ac=this['getItemSpeedLabel']();this[_0xc3b580(0x3b7)](_0x4f97ac,_0x37da82,_0x5ce946,_0x43b753,!![]);const _0x1cf903=this[_0xc3b580(0x44e)]();return this[_0xc3b580(0x3b7)](_0x1cf903,_0x23c4b8,_0x34e214,_0x336c18,![],_0xc3b580(0x2ec)),this[_0xc3b580(0x47a)](_0x1cacb5,_0x12a0dc,_0x44086b),this[_0xc3b580(0x383)](),!![];}}else this[_0x2b1816(0x3ac)]();}if(Input[_0x2b1816(0x257)](_0x2b1816(0x31e))&&Input['isPressed']('shift')){if('kTEvo'===_0x2b1816(0x4de))this[_0x2b1816(0xfd)]();else{function _0x2eb7d0(){const _0x1d59a6=_0x2b1816;_0x27731a[_0x1d59a6(0x20c)]?(_0x14387c=this['_actor'][_0x1d59a6(0x31d)](_0x184bf2,![]),_0x50ff02=this[_0x1d59a6(0x18b)][_0x1d59a6(0x31d)](_0x1c3c8a,![]),_0x2c95b1=_0x24ca93(this['_actor'][_0x1d59a6(0x31d)](_0x501af3,!![]))[_0x1d59a6(0x152)](/([%％])/i)):(_0x463b7f=this['_actor'][_0x1d59a6(0x223)](_0x7c99fe),_0x158932=this[_0x1d59a6(0x18b)][_0x1d59a6(0x223)](_0x46004a),_0xe312da=_0x56269a%0x1!==0x0||_0x9b3119%0x1!==0x0);const _0x5bc464=_0x418178,_0x552ee6=_0x140f1d,_0x464373=_0x552ee6-_0x5bc464;let _0x2c452c=_0x464373;if(_0x35d854)_0x2c452c=_0x43073b[_0x1d59a6(0x2de)](_0x464373*0x64)+'%';_0x464373!==0x0&&(this[_0x1d59a6(0x3f5)](_0x519228[_0x1d59a6(0x454)](_0x464373)),_0x2c452c=(_0x464373>0x0?_0x1d59a6(0x2eb):'(%1)')[_0x1d59a6(0x48a)](_0x2c452c),this['drawText'](_0x2c452c,_0x30bdcf+_0x142d67,_0xd0ada0,_0x20fe33,_0x1d59a6(0x3cf)));}}}}else{function _0x81d034(){const _0x52b026=_0x2b1816,_0x4d1751=this[_0x52b026(0x33b)](),_0x116039=_0x2cd9aa[_0x52b026(0x2a2)][_0x52b026(0x2ad)][_0x52b026(0x1ac)][_0x52b026(0x125)],_0x501c36=_0x4d1751===_0x52b026(0x123)?_0x2e8592['buy']:_0x52b026(0x175)[_0x52b026(0x48a)](_0x116039,_0x35b55a[_0x52b026(0xda)]),_0x37b18d=this[_0x52b026(0x3c5)]();if(this[_0x52b026(0x364)]()&&!_0x37b18d)return;this['addCommand'](_0x501c36,_0x52b026(0xda),_0x37b18d);}}}else Input[_0x2b1816(0x257)](_0x2b1816(0x110))&&this[_0x2b1816(0x3ac)](),Input[_0x2b1816(0x257)]('pageup')&&this['cursorPageup']();}}if(Input[_0x2b1816(0x176)]('down')){if(Input[_0x2b1816(0x17b)](_0x2b1816(0x1c8))&&this[_0x2b1816(0x419)]())this[_0x2b1816(0x3ac)]();else{if('Qgszi'!=='Qgszi'){function _0x351403(){const _0x1f33c6=_0x2b1816;return this[_0x1f33c6(0x30c)][_0x1f33c6(0x287)]/_0x291d25[_0x1f33c6(0x497)]();}}else this[_0x2b1816(0x47c)](Input[_0x2b1816(0x257)](_0x2b1816(0x423)));}}Input['isRepeated']('up')&&(Input[_0x2b1816(0x17b)](_0x2b1816(0x1c8))&&this['allowShiftScrolling']()?this[_0x2b1816(0xfd)]():this['cursorUp'](Input[_0x2b1816(0x257)]('up'))),Imported[_0x2b1816(0x20c)]&&this[_0x2b1816(0x3e2)](),this[_0x2b1816(0x192)]()!==_0x3e800a&&this[_0x2b1816(0x43a)]();}},Window_ItemList[_0x263456(0x26e)][_0x263456(0x333)]=function(){const _0x5d9cde=_0x263456,_0x5dece0=SceneManager[_0x5d9cde(0x4cf)],_0x33084a=[Scene_Item,Scene_Shop];return _0x33084a[_0x5d9cde(0x3ee)](_0x5dece0['constructor']);},Window_ItemList[_0x263456(0x26e)][_0x263456(0x301)]=function(){const _0x330a09=_0x263456;Window_Selectable['prototype'][_0x330a09(0x301)][_0x330a09(0x2bb)](this),this['_categoryWindow']&&this[_0x330a09(0x217)]['isUseModernControls']()&&this['_categoryWindow'][_0x330a09(0x301)]();},Window_ItemList[_0x263456(0x26e)][_0x263456(0x359)]=function(){const _0x4c4dbe=_0x263456;Window_Selectable[_0x4c4dbe(0x26e)][_0x4c4dbe(0x359)]['call'](this),this[_0x4c4dbe(0x217)]&&this['_categoryWindow'][_0x4c4dbe(0x407)]()&&this['_categoryWindow'][_0x4c4dbe(0x359)]();},Window_ItemList['prototype'][_0x263456(0x2b8)]=function(_0x4a87e3){const _0x1ebc62=_0x263456;if(this[_0x1ebc62(0x30e)]!==_0x4a87e3){this['_category']=_0x4a87e3,this[_0x1ebc62(0x133)]();if(this[_0x1ebc62(0x217)]&&this[_0x1ebc62(0x217)]['isUseModernControls']()){if(_0x1ebc62(0x3cb)!==_0x1ebc62(0xed))this[_0x1ebc62(0x36d)](0x0);else{function _0x5e487b(){return![];}}}else this[_0x1ebc62(0x195)](0x0,0x0);}},VisuMZ[_0x263456(0x2a2)]['Window_ItemList_maxCols']=Window_ItemList['prototype'][_0x263456(0x1d7)],Window_ItemList['prototype'][_0x263456(0x1d7)]=function(){const _0x2bad74=_0x263456;if(SceneManager[_0x2bad74(0x4cf)][_0x2bad74(0x424)]===Scene_Battle)return VisuMZ['ItemsEquipsCore'][_0x2bad74(0x254)]['call'](this);else{if(SceneManager[_0x2bad74(0x4cf)][_0x2bad74(0x424)]===Scene_Map){if(_0x2bad74(0x149)===_0x2bad74(0x3cd)){function _0x188ce3(){const _0x220938=_0x2bad74;return _0x220938(0x123);}}else return VisuMZ['ItemsEquipsCore'][_0x2bad74(0x254)][_0x2bad74(0x2bb)](this);}else return VisuMZ[_0x2bad74(0x2a2)][_0x2bad74(0x2ad)][_0x2bad74(0x377)][_0x2bad74(0x2d4)];}},VisuMZ[_0x263456(0x2a2)][_0x263456(0x196)]=Window_ItemList[_0x263456(0x26e)][_0x263456(0x436)],Window_ItemList['prototype'][_0x263456(0x436)]=function(){const _0x9eadaa=_0x263456;if(this[_0x9eadaa(0x1d7)]()<=0x1){if(_0x9eadaa(0x328)===_0x9eadaa(0x328))return Window_Selectable[_0x9eadaa(0x26e)]['colSpacing']['call'](this);else{function _0x519de7(){const _0x342f20=_0x9eadaa;_0x3a8c50[_0x342f20(0x257)]()&&this[_0x342f20(0x437)](!![]);if(_0x493459[_0x342f20(0x4e6)]())this[_0x342f20(0x201)]();else _0x11f61c[_0x342f20(0x39d)]()&&this[_0x342f20(0x4d9)]();}}}else{if('iEsnc'===_0x9eadaa(0x1c1)){function _0x5d1039(){this['_itemWindow']['setHandler']('cancel',this['popScene']['bind'](this));}}else return VisuMZ[_0x9eadaa(0x2a2)][_0x9eadaa(0x196)][_0x9eadaa(0x2bb)](this);}},Window_ItemList[_0x263456(0x26e)][_0x263456(0x3ee)]=function(_0x2b36c0){const _0x8bd602=_0x263456;switch(this[_0x8bd602(0x30e)]){case'AllItems':return DataManager[_0x8bd602(0x3c8)](_0x2b36c0);case _0x8bd602(0x4c9):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&_0x2b36c0['itypeId']===0x1;case'KeyItems':return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0x13c)]===0x2;case _0x8bd602(0x15e):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&_0x2b36c0['itypeId']===0x3;case _0x8bd602(0x2a3):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0x13c)]===0x4;case _0x8bd602(0x241):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0x29f)];case _0x8bd602(0x2c8):return DataManager['isItem'](_0x2b36c0)&&!_0x2b36c0['consumable'];case _0x8bd602(0xfa):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&[0x0][_0x8bd602(0x3ee)](_0x2b36c0['occasion']);case'BattleUsable':return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&[0x0,0x1][_0x8bd602(0x3ee)](_0x2b36c0['occasion']);case _0x8bd602(0x113):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&[0x0,0x2][_0x8bd602(0x3ee)](_0x2b36c0[_0x8bd602(0xcd)]);case _0x8bd602(0x178):return DataManager[_0x8bd602(0x3c8)](_0x2b36c0)&&[0x3][_0x8bd602(0x3ee)](_0x2b36c0['occasion']);case _0x8bd602(0x340):return DataManager[_0x8bd602(0x164)](_0x2b36c0);case _0x8bd602(0x37d):return DataManager[_0x8bd602(0x224)](_0x2b36c0);default:if(this[_0x8bd602(0x30e)]['match'](/WTYPE:(\d+)/i))return DataManager[_0x8bd602(0x164)](_0x2b36c0)&&_0x2b36c0['wtypeId']===Number(RegExp['$1']);else{if(this[_0x8bd602(0x30e)][_0x8bd602(0x152)](/WTYPE:(.*)/i)){const _0x5eebdc=$dataSystem[_0x8bd602(0x1a0)][_0x8bd602(0x158)](String(RegExp['$1'])[_0x8bd602(0x1ce)]());return DataManager[_0x8bd602(0x164)](_0x2b36c0)&&_0x2b36c0['wtypeId']===_0x5eebdc;}else{if(this['_category'][_0x8bd602(0x152)](/ATYPE:(\d+)/i))return DataManager[_0x8bd602(0x224)](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0x2a7)]===Number(RegExp['$1']);else{if(this[_0x8bd602(0x30e)][_0x8bd602(0x152)](/ATYPE:(.*)/i)){const _0x3053ef=$dataSystem[_0x8bd602(0x351)][_0x8bd602(0x158)](String(RegExp['$1'])[_0x8bd602(0x1ce)]());return DataManager[_0x8bd602(0x224)](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0x2a7)]===_0x3053ef;}else{if(this[_0x8bd602(0x30e)]['match'](/ETYPE:(\d+)/i)){if(_0x8bd602(0x4e2)!==_0x8bd602(0x4fb))return!!_0x2b36c0&&_0x2b36c0['etypeId']===Number(RegExp['$1']);else{function _0x427d10(){const _0x3418f1=_0x8bd602;if(!_0x5f3f3f)return![];if(!_0x170f54['ItemsEquipsCore'][_0x3418f1(0x185)][_0x3418f1(0x2bb)](this,_0x29aa9f))return![];if(!this[_0x3418f1(0x26a)](_0x38f1fe))return![];if(!this['meetsItemConditionsJS'](_0x552b4a))return![];return!![];}}}else{if(this[_0x8bd602(0x30e)]['match'](/ETYPE:(.*)/i)){const _0x37e43c=$dataSystem['equipTypes'][_0x8bd602(0x158)](String(RegExp['$1'])[_0x8bd602(0x1ce)]());return DataManager['isArmor'](_0x2b36c0)&&_0x2b36c0[_0x8bd602(0xe6)]===_0x37e43c;}else{if(this[_0x8bd602(0x30e)]['match'](/Category:(.*)/i))return!!_0x2b36c0&&_0x2b36c0['categories'][_0x8bd602(0x3ee)](String(RegExp['$1'])['toUpperCase']()['trim']());}}}}}}}return![];},Window_ItemList['prototype']['isShowNew']=function(){return!![];},VisuMZ[_0x263456(0x2a2)][_0x263456(0x3c2)]=Window_ItemList['prototype'][_0x263456(0x3e8)],Window_ItemList[_0x263456(0x26e)]['drawItem']=function(_0x375e94){const _0x1879db=_0x263456;VisuMZ[_0x1879db(0x2a2)][_0x1879db(0x3c2)][_0x1879db(0x2bb)](this,_0x375e94),this[_0x1879db(0x3ae)](_0x375e94);},Window_ItemList[_0x263456(0x26e)][_0x263456(0x214)]=function(_0x5ab588,_0x40aacb,_0x468d8f,_0x546f82){const _0xac18f=_0x263456;Window_Selectable[_0xac18f(0x26e)][_0xac18f(0x214)][_0xac18f(0x2bb)](this,_0x5ab588,_0x40aacb,_0x468d8f,_0x546f82);},Window_ItemList[_0x263456(0x26e)][_0x263456(0x3ae)]=function(_0x486039){const _0x22964f=_0x263456,_0x87b9dc=this['itemAt'](_0x486039);if(!_0x87b9dc||!this[_0x22964f(0x2e3)]())return;if(!$gameParty['isNewItem'](_0x87b9dc))return;const _0xd85c61=this[_0x22964f(0x3f7)](_0x486039),_0x5e7cff=_0xd85c61['x'],_0x386d6e=_0xd85c61['y']+(this['lineHeight']()-ImageManager['iconHeight'])/0x2,_0x248a52=VisuMZ['ItemsEquipsCore'][_0x22964f(0x2ad)][_0x22964f(0x168)]['OffsetX'],_0xc6207f=VisuMZ[_0x22964f(0x2a2)]['Settings']['New'][_0x22964f(0x159)];this[_0x22964f(0x41c)](_0x87b9dc,_0x5e7cff+_0x248a52,_0x386d6e+_0xc6207f);},Window_ItemList[_0x263456(0x26e)][_0x263456(0x356)]=function(_0x47c171){const _0x1a89aa=_0x263456;this[_0x1a89aa(0x2ca)]=_0x47c171,this[_0x1a89aa(0x40b)]();},VisuMZ[_0x263456(0x2a2)]['Window_ItemList_updateHelp']=Window_ItemList[_0x263456(0x26e)][_0x263456(0x171)],Window_ItemList[_0x263456(0x26e)][_0x263456(0x171)]=function(){const _0x5727c5=_0x263456;VisuMZ['ItemsEquipsCore'][_0x5727c5(0x444)][_0x5727c5(0x2bb)](this),this['_statusWindow']&&this['_statusWindow'][_0x5727c5(0x424)]===Window_ShopStatus&&this['_statusWindow'][_0x5727c5(0x10c)](this[_0x5727c5(0x1c0)]());},Window_BattleItem[_0x263456(0x26e)]['isEnabled']=function(_0x185f39){const _0x37d421=_0x263456;if(BattleManager[_0x37d421(0x264)]()){if(_0x37d421(0x1e0)==='OlsAo')return BattleManager[_0x37d421(0x264)]()[_0x37d421(0x3ed)](_0x185f39);else{function _0x5a9b5c(){const _0x36ad09=_0x37d421;_0x290ab3['prototype']['activate'][_0x36ad09(0x2bb)](this),this['_categoryWindow']&&this['_categoryWindow'][_0x36ad09(0x407)]()&&this[_0x36ad09(0x217)][_0x36ad09(0x301)]();}}}else{if(_0x37d421(0x447)==='jaNNZ')return Window_ItemList[_0x37d421(0x26e)][_0x37d421(0x2ba)][_0x37d421(0x2bb)](this,_0x185f39);else{function _0xe80c5e(){const _0x490a83=_0x37d421,_0x41499e=_0x30959c[_0x490a83(0x4fe)]('['+_0x4f3c76['$1'][_0x490a83(0x152)](/\d+/g)+']');for(const _0x157ac6 of _0x41499e){if(_0xa3cb7[_0x490a83(0x357)](_0x157ac6))return![];}return!![];}}}},Window_EventItem['prototype'][_0x263456(0x2e3)]=function(){return![];},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x2f5)]=function(){const _0x314ace=_0x263456;return VisuMZ['ItemsEquipsCore']['Settings'][_0x314ace(0x142)]['EnableLayout'];},VisuMZ['ItemsEquipsCore'][_0x263456(0x18a)]=Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x133)],Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x133)]=function(){const _0x2f4733=_0x263456;this[_0x2f4733(0x1b6)](),this['resetFontSettings']();if(this[_0x2f4733(0x1bb)])this[_0x2f4733(0x1bb)][_0x2f4733(0x133)]();this[_0x2f4733(0x2f5)]()?this[_0x2f4733(0x156)]():VisuMZ['ItemsEquipsCore'][_0x2f4733(0x18a)][_0x2f4733(0x2bb)](this);},Window_EquipStatus['prototype'][_0x263456(0x156)]=function(){const _0x860acc=_0x263456;this['contents']['clear']();if(!this[_0x860acc(0x1bb)])return;if(this[_0x860acc(0x112)]()){if(_0x860acc(0x4e8)!==_0x860acc(0x240)){const _0x537d72=ImageManager[_0x860acc(0x2d5)](this['_actor'][_0x860acc(0x395)]());_0x537d72[_0x860acc(0x2ed)](this[_0x860acc(0x523)][_0x860acc(0x1a7)](this));}else{function _0x504598(){const _0x4645b3=_0x860acc;_0x11c7e5[_0x4645b3(0x2a2)][_0x4645b3(0x3f2)][_0x4645b3(0x2bb)](this),this[_0x4645b3(0x407)]()&&this[_0x4645b3(0x3c6)](),this[_0x4645b3(0x2f5)]()&&this[_0x4645b3(0x2e7)][_0x4645b3(0x132)]();}}}else{if(_0x860acc(0x234)==='nbYRd'){function _0x32ff0e(){const _0x2ee2b3=_0x860acc;this[_0x2ee2b3(0x1a4)](_0x56adc2[_0x2ee2b3(0x257)](_0x2ee2b3(0x3cf)));}}else this['refreshItemsEquipsCoreNoMenuImage']();}},Window_EquipStatus['prototype'][_0x263456(0x112)]=function(){const _0x4cbb21=_0x263456;return Imported[_0x4cbb21(0x4e9)]&&this[_0x4cbb21(0x1bb)][_0x4cbb21(0x395)]()!==''&&VisuMZ[_0x4cbb21(0x2a2)][_0x4cbb21(0x2ad)]['EquipScene']['MenuPortraits'];},Window_EquipStatus['prototype'][_0x263456(0x523)]=function(){const _0x775d0b=_0x263456;VisuMZ[_0x775d0b(0x2a2)][_0x775d0b(0x2ad)]['EquipScene'][_0x775d0b(0x256)][_0x775d0b(0x2bb)](this),this['drawParamsItemsEquipsCore']();},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x42a)]=function(){const _0x26fe72=_0x263456;VisuMZ[_0x26fe72(0x2a2)][_0x26fe72(0x2ad)]['EquipScene']['DrawFaceJS'][_0x26fe72(0x2bb)](this),this[_0x26fe72(0x267)]();},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x267)]=function(){const _0x4a46dc=_0x263456;this['resetFontSettings'](),VisuMZ[_0x4a46dc(0x2a2)]['Settings'][_0x4a46dc(0x142)][_0x4a46dc(0x230)][_0x4a46dc(0x2bb)](this);},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x41a)]=function(_0x3f9fda,_0x1803ff,_0x18431c,_0xb6e99c,_0x856e68){const _0x1956da=_0x263456,_0x28d534=ImageManager['loadPicture'](_0x3f9fda['getMenuImage']()),_0x34850c=this[_0x1956da(0x117)]-_0x28d534[_0x1956da(0x528)];_0x1803ff+=_0x34850c/0x2;if(_0x34850c<0x0)_0xb6e99c-=_0x34850c;Window_StatusBase[_0x1956da(0x26e)][_0x1956da(0x41a)]['call'](this,_0x3f9fda,_0x1803ff,_0x18431c,_0xb6e99c,_0x856e68);},Window_EquipStatus[_0x263456(0x26e)]['actorParams']=function(){const _0x1c50f7=_0x263456;if(Imported[_0x1c50f7(0x20c)]){if(_0x1c50f7(0x46f)===_0x1c50f7(0x2c9)){function _0x2c7634(){const _0x1b5438=_0x1c50f7;return _0x3a74d5[_0x1b5438(0x2a2)][_0x1b5438(0x2ad)][_0x1b5438(0x143)][_0x1b5438(0x1f0)];}}else return VisuMZ[_0x1c50f7(0x42b)][_0x1c50f7(0x2ad)][_0x1c50f7(0x488)][_0x1c50f7(0x52b)];}else{if(_0x1c50f7(0x13a)!==_0x1c50f7(0x13a)){function _0x5b92fc(){const _0x416467=_0x1c50f7;for(const _0x580245 of _0xa266e7[_0x416467(0x502)]){if(_0x580245)_0x580245[_0x416467(0x13d)]();}}}else return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];}},Window_EquipStatus['prototype'][_0x263456(0x35a)]=function(){const _0xb8146f=_0x263456;return VisuMZ[_0xb8146f(0x2a2)][_0xb8146f(0x2ad)][_0xb8146f(0x142)]['ParamValueFontSize'];},Window_EquipStatus['prototype'][_0x263456(0xee)]=function(){const _0x1f1dee=_0x263456;return Imported['VisuMZ_0_CoreEngine']&&VisuMZ['CoreEngine'][_0x1f1dee(0x2ad)][_0x1f1dee(0x488)][_0x1f1dee(0x14d)];},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x4d5)]=function(_0x158ce2,_0x3f8ef8,_0x5d4bfb,_0x4efea8){const _0x2a217d=_0x263456,_0x4fec9c=this[_0x2a217d(0x530)]();if(Imported[_0x2a217d(0x20c)]){if('UCvLN'===_0x2a217d(0x246))this[_0x2a217d(0x188)](_0x3f8ef8+_0x4fec9c,_0x5d4bfb,_0x4efea8,_0x158ce2,![]);else{function _0x3d36cd(){const _0x1293ca=_0x2a217d,_0x3a7969=_0xca9f05[_0x1293ca(0x2a2)][_0x1293ca(0x2ad)]['EquipScene'];let _0x1a0aac=_0x3a7969[_0x1293ca(0x4f6)]!==_0x58a713?_0x3a7969['BackRectColor']:0x13;return _0xb77de5[_0x1293ca(0x20d)](_0x1a0aac);}}}else{if(_0x2a217d(0x43f)===_0x2a217d(0x169)){function _0x38dfa5(){const _0x4e0687=_0x2a217d;this[_0x4e0687(0x4ff)]=!![];}}else this['drawText'](TextManager[_0x2a217d(0x223)](_0x158ce2),_0x3f8ef8+_0x4fec9c,_0x5d4bfb,_0x4efea8);}},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x378)]=function(_0xec6a0f,_0xf639a2,_0x15df28,_0xae5721){const _0x5a72a1=_0x263456,_0x7bde2c=this[_0x5a72a1(0x530)]();let _0x23925f=0x0;if(Imported[_0x5a72a1(0x20c)])_0x23925f=this[_0x5a72a1(0x1bb)][_0x5a72a1(0x31d)](_0xec6a0f,!![]);else{if(_0x5a72a1(0x51e)===_0x5a72a1(0x4c1)){function _0x617e6e(){this['drawItemStyleIconText'](_0x4e1e6a);}}else _0x23925f=this['_actor'][_0x5a72a1(0x223)](_0xec6a0f);}const _0x5b1f82=_0x23925f;this[_0x5a72a1(0xf5)](_0x23925f,_0xf639a2,_0x15df28,_0xae5721-_0x7bde2c,_0x5a72a1(0x2ec));},Window_EquipStatus['prototype'][_0x263456(0x498)]=function(_0x368309,_0x1461bd,_0x4a98dc,_0x411459){const _0x1ef146=_0x263456,_0x4b4a69=this[_0x1ef146(0x530)]();let _0x546e44=0x0,_0x4da340=0x0,_0x2f2447='';if(this[_0x1ef146(0x18b)]){if(Imported[_0x1ef146(0x20c)]){if(_0x1ef146(0x1de)===_0x1ef146(0x25b)){function _0x73d370(){const _0x4fe13a=_0x1ef146;this[_0x4fe13a(0x3ac)]();}}else _0x546e44=this[_0x1ef146(0x1bb)][_0x1ef146(0x31d)](_0x368309,![]),_0x4da340=this[_0x1ef146(0x18b)]['paramValueByName'](_0x368309,![]),_0x2f2447=this[_0x1ef146(0x18b)][_0x1ef146(0x31d)](_0x368309,!![]);}else{if(_0x1ef146(0x4b6)!==_0x1ef146(0x4b6)){function _0xb98787(){const _0x544cec=_0x1ef146,_0x3ffb64=this[_0x544cec(0x3f7)](_0x1b6de1),_0x15b1bd=this['commandName'](_0x4716ef),_0x4bd169=this[_0x544cec(0x3bd)](_0x15b1bd)['width'];this['changePaintOpacity'](this['isCommandEnabled'](_0x18c79a));const _0x35babd=this[_0x544cec(0x252)]();if(_0x35babd===_0x544cec(0x2ec))this[_0x544cec(0xe5)](_0x15b1bd,_0x3ffb64['x']+_0x3ffb64[_0x544cec(0x528)]-_0x4bd169,_0x3ffb64['y'],_0x4bd169);else{if(_0x35babd==='center'){const _0xc7ca13=_0x3ffb64['x']+_0x196249[_0x544cec(0x372)]((_0x3ffb64[_0x544cec(0x528)]-_0x4bd169)/0x2);this[_0x544cec(0xe5)](_0x15b1bd,_0xc7ca13,_0x3ffb64['y'],_0x4bd169);}else this[_0x544cec(0xe5)](_0x15b1bd,_0x3ffb64['x'],_0x3ffb64['y'],_0x4bd169);}}}else _0x546e44=this[_0x1ef146(0x1bb)]['param'](_0x368309),_0x4da340=this[_0x1ef146(0x18b)][_0x1ef146(0x223)](_0x368309),_0x2f2447=this[_0x1ef146(0x18b)]['param'](_0x368309);}const _0x35ae26=_0x546e44,_0x2307cc=_0x4da340;diffValue=_0x2307cc-_0x35ae26,this[_0x1ef146(0x3f5)](ColorManager['paramchangeTextColor'](diffValue)),this['drawText'](_0x2f2447,_0x1461bd,_0x4a98dc,_0x411459-_0x4b4a69,_0x1ef146(0x2ec));}},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x373)]=function(_0x43d471,_0x3812ef,_0x41780d,_0x416abb){const _0x51e59b=_0x263456,_0x4d8e55=this['itemPadding']();let _0x506f3a=0x0,_0x477e6c=0x0,_0x15f306=![];if(this[_0x51e59b(0x18b)]){Imported[_0x51e59b(0x20c)]?(_0x506f3a=this[_0x51e59b(0x1bb)][_0x51e59b(0x31d)](_0x43d471,![]),_0x477e6c=this[_0x51e59b(0x18b)][_0x51e59b(0x31d)](_0x43d471,![]),_0x15f306=String(this[_0x51e59b(0x1bb)]['paramValueByName'](_0x43d471,!![]))['match'](/([%％])/i)):(_0x506f3a=this[_0x51e59b(0x1bb)][_0x51e59b(0x223)](_0x43d471),_0x477e6c=this[_0x51e59b(0x18b)][_0x51e59b(0x223)](_0x43d471),_0x15f306=_0x506f3a%0x1!==0x0||_0x477e6c%0x1!==0x0);const _0x4c4bea=_0x506f3a,_0x99053f=_0x477e6c,_0x477002=_0x99053f-_0x4c4bea;let _0xebb333=_0x477002;if(_0x15f306)_0xebb333=Math['round'](_0x477002*0x64)+'%';if(_0x477002!==0x0){if(_0x51e59b(0x507)!==_0x51e59b(0x208))this[_0x51e59b(0x3f5)](ColorManager[_0x51e59b(0x454)](_0x477002)),_0xebb333=(_0x477002>0x0?_0x51e59b(0x2eb):_0x51e59b(0x3d6))['format'](_0xebb333),this[_0x51e59b(0xf5)](_0xebb333,_0x3812ef+_0x4d8e55,_0x41780d,_0x416abb,'left');else{function _0x5029d7(){const _0x2df149=_0x51e59b;_0x305ec3=_0x2df149(0x4ad)[_0x2df149(0x48a)](_0x5c8b5b['id']);}}}}},Window_EquipStatus[_0x263456(0x26e)][_0x263456(0x47a)]=function(_0x36a587,_0x561233,_0x502e67,_0x3b7e79,_0x2f5c0c){const _0x1d5278=_0x263456;if(VisuMZ[_0x1d5278(0x2a2)]['Settings']['EquipScene'][_0x1d5278(0x1b7)]===![])return;_0x2f5c0c=Math[_0x1d5278(0x4df)](_0x2f5c0c||0x1,0x1);while(_0x2f5c0c--){_0x3b7e79=_0x3b7e79||this[_0x1d5278(0x2f3)](),this[_0x1d5278(0x30c)][_0x1d5278(0x51d)]=0xa0;const _0x34af0c=ColorManager['getItemsEquipsCoreBackColor2']();this['contents']['fillRect'](_0x36a587+0x1,_0x561233+0x1,_0x502e67-0x2,_0x3b7e79-0x2,_0x34af0c),this[_0x1d5278(0x30c)][_0x1d5278(0x51d)]=0xff;}},ColorManager[_0x263456(0x19f)]=function(){const _0x2fcaa8=_0x263456,_0x599cda=VisuMZ['ItemsEquipsCore'][_0x2fcaa8(0x2ad)][_0x2fcaa8(0x142)];let _0x5b3520=_0x599cda[_0x2fcaa8(0x4f6)]!==undefined?_0x599cda['BackRectColor']:0x13;return ColorManager[_0x2fcaa8(0x20d)](_0x5b3520);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x17c)]=Window_EquipCommand['prototype'][_0x263456(0x288)],Window_EquipCommand[_0x263456(0x26e)]['initialize']=function(_0x5526f7){const _0x24648a=_0x263456;VisuMZ[_0x24648a(0x2a2)]['Window_EquipCommand_initialize'][_0x24648a(0x2bb)](this,_0x5526f7),this['createCommandNameWindow'](_0x5526f7);},Window_EquipCommand[_0x263456(0x26e)]['createCommandNameWindow']=function(_0x2ce1c1){const _0x275f1a=_0x263456,_0x168163=new Rectangle(0x0,0x0,_0x2ce1c1[_0x275f1a(0x528)],_0x2ce1c1[_0x275f1a(0x4a5)]);this['_commandNameWindow']=new Window_Base(_0x168163),this[_0x275f1a(0x1df)][_0x275f1a(0x2c4)]=0x0,this[_0x275f1a(0x31a)](this[_0x275f1a(0x1df)]),this[_0x275f1a(0x463)]();},Window_EquipCommand['prototype'][_0x263456(0x40b)]=function(){const _0x24c45d=_0x263456;Window_HorzCommand[_0x24c45d(0x26e)][_0x24c45d(0x40b)][_0x24c45d(0x2bb)](this);if(this['_commandNameWindow'])this[_0x24c45d(0x463)]();},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x463)]=function(){const _0x4e028b=_0x263456,_0x52bf88=this[_0x4e028b(0x1df)];_0x52bf88[_0x4e028b(0x30c)]['clear']();const _0x5df8ae=this[_0x4e028b(0x326)](this['index']());if(_0x5df8ae==='icon'){const _0x27f4f2=this['itemLineRect'](this[_0x4e028b(0x192)]());let _0x29ac0d=this[_0x4e028b(0x50f)](this[_0x4e028b(0x192)]());_0x29ac0d=_0x29ac0d[_0x4e028b(0x35c)](/\\I\[(\d+)\]/gi,''),_0x52bf88[_0x4e028b(0x383)](),this[_0x4e028b(0x22a)](_0x29ac0d,_0x27f4f2),this['commandNameWindowDrawText'](_0x29ac0d,_0x27f4f2),this[_0x4e028b(0x2fe)](_0x29ac0d,_0x27f4f2);}},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x22a)]=function(_0x728124,_0x4281bf){},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x443)]=function(_0x272389,_0x4a3c75){const _0x20fe0c=_0x263456,_0x375234=this[_0x20fe0c(0x1df)];_0x375234['drawText'](_0x272389,0x0,_0x4a3c75['y'],_0x375234[_0x20fe0c(0x117)],_0x20fe0c(0x51f));},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x2fe)]=function(_0x38912e,_0x232f43){const _0x41a6e5=_0x263456,_0x366acf=this[_0x41a6e5(0x1df)],_0x5c9751=$gameSystem['windowPadding'](),_0x5661c5=_0x232f43['x']+Math[_0x41a6e5(0x372)](_0x232f43[_0x41a6e5(0x528)]/0x2)+_0x5c9751;_0x366acf['x']=_0x366acf[_0x41a6e5(0x528)]/-0x2+_0x5661c5,_0x366acf['y']=Math['floor'](_0x232f43[_0x41a6e5(0x4a5)]/0x2);},Window_EquipCommand['prototype']['isUseModernControls']=function(){const _0x2b7283=_0x263456;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand['prototype'][_0x2b7283(0x407)][_0x2b7283(0x2bb)](this);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x126)]=function(){const _0x30907c=_0x263456;if(this[_0x30907c(0x16e)]()===_0x30907c(0x1fc))Window_HorzCommand[_0x30907c(0x26e)]['playOkSound']['call'](this);},Window_EquipCommand['prototype'][_0x263456(0x33d)]=function(){const _0x1c56d1=_0x263456;!this[_0x1c56d1(0x213)]()&&Window_HorzCommand[_0x1c56d1(0x26e)][_0x1c56d1(0x33d)]['call'](this);},Window_EquipCommand[_0x263456(0x26e)]['processCursorSpecialCheckModernControls']=function(){const _0x4c390a=_0x263456;if(!this[_0x4c390a(0x15a)]())return![];if(SceneManager[_0x4c390a(0x4cf)][_0x4c390a(0x424)]!==Scene_Equip)return![];return Input[_0x4c390a(0x257)](_0x4c390a(0x423))&&(this[_0x4c390a(0x43a)](),SceneManager['_scene']['commandEquip'](),SceneManager[_0x4c390a(0x4cf)]['_slotWindow'][_0x4c390a(0x36d)](-0x1)),![];},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x1d7)]=function(){const _0x6353e0=_0x263456;return this[_0x6353e0(0xf8)]?this['_list'][_0x6353e0(0x25d)]:0x3;},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x3c3)]=function(){const _0x52997d=_0x263456;if(this[_0x52997d(0x302)]()&&this['visible']&&SceneManager['_scene'][_0x52997d(0x424)]===Scene_Equip){if(this[_0x52997d(0xdf)]()&&TouchInput[_0x52997d(0x355)]())this[_0x52997d(0xc3)](![]);else{if(TouchInput[_0x52997d(0x257)]()){if('OXsST'==='JkkUv'){function _0x390eab(){const _0x4673d7=_0x52997d,_0x338f1c=_0x81f620[_0x4673d7(0x342)](_0x4673d7(0x104)),_0x114211=_0x892d8d[_0x4673d7(0x1b4)],_0x55723a=_0x4a2ed9[_0x4673d7(0x225)],_0x12c726=_0x2bd02e%0x10*_0x114211,_0x179f18=_0x15c80a[_0x4673d7(0x372)](_0x3c225b/0x10)*_0x55723a,_0x2cbed7=_0x6f0d8a['ceil'](_0x114211*this[_0x4673d7(0x4b0)]()),_0x20b4e5=_0x4f4749[_0x4673d7(0x282)](_0x55723a*this['fontSizeRatio']());this[_0x4673d7(0x30c)][_0x4673d7(0x19a)](_0x338f1c,_0x12c726,_0x179f18,_0x114211,_0x55723a,_0x40f4e6,_0xc99e88,_0x2cbed7,_0x20b4e5);}}else this[_0x52997d(0xc3)](!![]);}}if(TouchInput[_0x52997d(0x4e6)]())this[_0x52997d(0x201)]();else TouchInput[_0x52997d(0x39d)]()&&this['onTouchCancel']();}},Window_EquipCommand['prototype'][_0x263456(0xc3)]=function(_0x35fc6c){const _0x133306=_0x263456;this[_0x133306(0x4ff)]=![];const _0x1e9945=this[_0x133306(0x192)](),_0x4251db=this[_0x133306(0x390)](),_0x145ee1=SceneManager[_0x133306(0x4cf)][_0x133306(0x236)];if(_0x145ee1[_0x133306(0x302)]()&&_0x145ee1['visible']){if(_0x4251db>=0x0){if(_0x133306(0x249)!==_0x133306(0x45b))_0x4251db===this[_0x133306(0x192)]()&&(this[_0x133306(0x4ff)]=!![]),this[_0x133306(0x301)](),this[_0x133306(0x45a)](_0x4251db);else{function _0x21794d(){const _0x3bc4b9=_0x133306;return _0x2d46b2[_0x3bc4b9(0x2a2)][_0x3bc4b9(0x2ad)][_0x3bc4b9(0x1ac)][_0x3bc4b9(0x11a)];}}}else{if(_0x145ee1[_0x133306(0x390)]()>=0x0){if(_0x133306(0x13f)!==_0x133306(0x13f)){function _0x460757(){const _0x3c1372=_0x133306;_0x8c8b47[_0x3c1372(0x3a4)](_0x33ee6d[_0x3c1372(0x46d)],![]);}}else this[_0x133306(0x359)](),this[_0x133306(0x3aa)]();}}}_0x35fc6c&&this[_0x133306(0x192)]()!==_0x1e9945&&this[_0x133306(0x43a)]();},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x138)]=function(){const _0x470eeb=_0x263456;this[_0x470eeb(0x415)](),this[_0x470eeb(0x393)](),this[_0x470eeb(0x271)]();},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x133)]=function(){const _0x18bbf0=_0x263456;Window_HorzCommand['prototype'][_0x18bbf0(0x133)]['call'](this),this[_0x18bbf0(0x3ba)]();},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x415)]=function(){const _0xb9a349=_0x263456;if(!this[_0xb9a349(0x280)]())return;const _0x24f6f5=this[_0xb9a349(0x33b)](),_0x12ba11=VisuMZ[_0xb9a349(0x2a2)][_0xb9a349(0x2ad)][_0xb9a349(0x142)][_0xb9a349(0x435)],_0x4974df=_0x24f6f5===_0xb9a349(0x123)?TextManager[_0xb9a349(0x343)]:_0xb9a349(0x175)[_0xb9a349(0x48a)](_0x12ba11,TextManager['equip2']),_0x35b2ec=this['isEquipCommandEnabled']();this[_0xb9a349(0x3bb)](_0x4974df,_0xb9a349(0x1fc),_0x35b2ec);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x280)]=function(){const _0x123c57=_0x263456;return!this[_0x123c57(0x407)]();},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x151)]=function(){return!![];},Window_EquipCommand['prototype'][_0x263456(0x393)]=function(){const _0x152a15=_0x263456;if(!this[_0x152a15(0x315)]())return;const _0x55eacd=this[_0x152a15(0x33b)](),_0x439dc9=VisuMZ[_0x152a15(0x2a2)][_0x152a15(0x2ad)][_0x152a15(0x142)][_0x152a15(0x32d)],_0x2be9ce=_0x55eacd===_0x152a15(0x123)?TextManager['optimize']:'\x5cI[%1]%2'[_0x152a15(0x48a)](_0x439dc9,TextManager[_0x152a15(0x410)]),_0xd8b2a4=this[_0x152a15(0x296)]();this[_0x152a15(0x3bb)](_0x2be9ce,_0x152a15(0x410),_0xd8b2a4);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x315)]=function(){const _0x4015cd=_0x263456;return VisuMZ[_0x4015cd(0x2a2)]['Settings']['EquipScene']['CommandAddOptimize'];},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x296)]=function(){return!![];},Window_EquipCommand['prototype']['addClearCommand']=function(){const _0x7abefc=_0x263456;if(!this[_0x7abefc(0x4a3)]())return;const _0x238269=this['commandStyle'](),_0xc74f4f=VisuMZ['ItemsEquipsCore'][_0x7abefc(0x2ad)][_0x7abefc(0x142)][_0x7abefc(0x17e)],_0x205d1c=_0x238269==='text'?TextManager['clear']:_0x7abefc(0x175)['format'](_0xc74f4f,TextManager[_0x7abefc(0x412)]),_0x4e4050=this[_0x7abefc(0x24c)]();this['addCommand'](_0x205d1c,_0x7abefc(0x412),_0x4e4050);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x4a3)]=function(){const _0x4adcf9=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x4adcf9(0x2ad)][_0x4adcf9(0x142)][_0x4adcf9(0x22d)];},Window_EquipCommand['prototype'][_0x263456(0x24c)]=function(){return!![];},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x252)]=function(){const _0x55e920=_0x263456;return VisuMZ[_0x55e920(0x2a2)][_0x55e920(0x2ad)][_0x55e920(0x142)][_0x55e920(0x4d0)];},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x3e8)]=function(_0x4720a6){const _0x4284b2=_0x263456,_0x2eba02=this[_0x4284b2(0x326)](_0x4720a6);if(_0x2eba02==='iconText')this['drawItemStyleIconText'](_0x4720a6);else _0x2eba02==='icon'?this[_0x4284b2(0x1a5)](_0x4720a6):Window_HorzCommand['prototype'][_0x4284b2(0x3e8)][_0x4284b2(0x2bb)](this,_0x4720a6);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x33b)]=function(){const _0x126d18=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x126d18(0x2ad)]['EquipScene'][_0x126d18(0x442)];},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x326)]=function(_0x13488c){const _0x5dfcca=_0x263456;if(_0x13488c<0x0)return _0x5dfcca(0x123);const _0x4666cc=this[_0x5dfcca(0x33b)]();if(_0x4666cc!==_0x5dfcca(0x2ee))return _0x4666cc;else{if(this[_0x5dfcca(0x3c1)]()>0x0){const _0x34d4be=this['commandName'](_0x13488c);if(_0x34d4be[_0x5dfcca(0x152)](/\\I\[(\d+)\]/i)){const _0xfee46e=this[_0x5dfcca(0x3f7)](_0x13488c),_0x56bd55=this[_0x5dfcca(0x3bd)](_0x34d4be)[_0x5dfcca(0x528)];if(_0x56bd55<=_0xfee46e[_0x5dfcca(0x528)])return _0x5dfcca(0x3ef);else{if('ofMWq'===_0x5dfcca(0x177)){function _0x1bf750(){const _0x52a783=_0x5dfcca;return this[_0x52a783(0x2f5)]()?this[_0x52a783(0x219)]():_0x7cdbf6['ItemsEquipsCore']['Scene_Shop_sellWindowRect'][_0x52a783(0x2bb)](this);}}else return _0x5dfcca(0x1da);}}}}return _0x5dfcca(0x123);},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x1f6)]=function(_0x31927b){const _0x30a575=_0x263456,_0x51d563=this[_0x30a575(0x3f7)](_0x31927b),_0x2c3b4f=this['commandName'](_0x31927b),_0x41b56e=this[_0x30a575(0x3bd)](_0x2c3b4f)[_0x30a575(0x528)];this['changePaintOpacity'](this[_0x30a575(0x4d6)](_0x31927b));const _0x53b45d=this[_0x30a575(0x252)]();if(_0x53b45d==='right'){if(_0x30a575(0x41d)!==_0x30a575(0x36f))this[_0x30a575(0xe5)](_0x2c3b4f,_0x51d563['x']+_0x51d563[_0x30a575(0x528)]-_0x41b56e,_0x51d563['y'],_0x41b56e);else{function _0x5baa64(){const _0x417c36=_0x30a575;if(!this[_0x417c36(0x30b)]())return![];if(!this[_0x417c36(0x407)]())return![];if(!this[_0x417c36(0x4c8)])return![];if(!this['_itemWindow']['active'])return![];return this[_0x417c36(0x30b)]()&&this['isUseModernControls']();}}}else{if(_0x53b45d===_0x30a575(0x51f)){if(_0x30a575(0x3fe)!==_0x30a575(0x3fe)){function _0x5b6b64(){const _0x27f6f1=this['_newLabelSprites'];if(_0x27f6f1[_0x4d115b])return _0x27f6f1[_0x5590ca];else{const _0x54670e=new _0x56ffb0();return _0x27f6f1[_0x2c26cf]=_0x54670e,this['addInnerChild'](_0x54670e),_0x54670e;}}}else{const _0x404492=_0x51d563['x']+Math[_0x30a575(0x372)]((_0x51d563[_0x30a575(0x528)]-_0x41b56e)/0x2);this[_0x30a575(0xe5)](_0x2c3b4f,_0x404492,_0x51d563['y'],_0x41b56e);}}else{if('NIrVf'===_0x30a575(0x2e4))this['drawTextEx'](_0x2c3b4f,_0x51d563['x'],_0x51d563['y'],_0x41b56e);else{function _0x200c9d(){const _0x19971b=_0x30a575;return _0xfb01d3[_0x19971b(0x2a2)][_0x19971b(0x2ad)][_0x19971b(0x1ac)][_0x19971b(0x4d0)];}}}}},Window_EquipCommand[_0x263456(0x26e)][_0x263456(0x1a5)]=function(_0x5b9863){const _0x564d86=_0x263456;this[_0x564d86(0x50f)](_0x5b9863)[_0x564d86(0x152)](/\\I\[(\d+)\]/i);const _0x2e0ee6=Number(RegExp['$1'])||0x0,_0x3d6497=this['itemLineRect'](_0x5b9863),_0x5e7bc9=_0x3d6497['x']+Math[_0x564d86(0x372)]((_0x3d6497[_0x564d86(0x528)]-ImageManager[_0x564d86(0x1b4)])/0x2),_0x3b559c=_0x3d6497['y']+(_0x3d6497[_0x564d86(0x4a5)]-ImageManager[_0x564d86(0x225)])/0x2;this['drawIcon'](_0x2e0ee6,_0x5e7bc9,_0x3b559c);},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0x407)]=function(){const _0x181fa2=_0x263456;return Imported[_0x181fa2(0x20c)]&&Window_HorzCommand['prototype'][_0x181fa2(0x407)]['call'](this);},Window_EquipSlot[_0x263456(0x26e)]['activate']=function(){const _0x532beb=_0x263456;Window_StatusBase[_0x532beb(0x26e)][_0x532beb(0x301)][_0x532beb(0x2bb)](this),this[_0x532beb(0x40b)]();},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0x3b8)]=function(){const _0x7e732e=_0x263456;Window_StatusBase[_0x7e732e(0x26e)][_0x7e732e(0x3b8)][_0x7e732e(0x2bb)](this),this[_0x7e732e(0x2cf)]();},Window_EquipSlot[_0x263456(0x26e)]['checkShiftRemoveShortcut']=function(){const _0x4052e7=_0x263456;if(!this[_0x4052e7(0x465)]())return;if(Input[_0x4052e7(0x257)](_0x4052e7(0x1c8))&&this['item']()){const _0x4213c5=SceneManager[_0x4052e7(0x4cf)][_0x4052e7(0x1bb)];if(_0x4213c5){if(this['canShiftRemoveEquipment'](this[_0x4052e7(0x192)]())){if(_0x4052e7(0x428)==='bLlpP')this['processShiftRemoveShortcut'](),this[_0x4052e7(0x171)]();else{function _0x3aba2a(){const _0x1488d5=_0x4052e7;return this[_0x1488d5(0x2f5)]()?this['statusWindowRectItemsEquipsCore']():_0x3a03fb[_0x1488d5(0x2a2)][_0x1488d5(0x2ad)]['ItemScene'][_0x1488d5(0x238)][_0x1488d5(0x2bb)](this);}}}else this[_0x4052e7(0x3e5)]();}}},Window_EquipSlot[_0x263456(0x26e)]['canShiftRemoveEquipment']=function(_0x11c2b6){const _0x3f5f67=_0x263456,_0x483f2b=SceneManager['_scene'][_0x3f5f67(0x1bb)];if(!_0x483f2b)return;if(!_0x483f2b[_0x3f5f67(0x4af)](this[_0x3f5f67(0x192)]()))return![];const _0x167549=_0x483f2b[_0x3f5f67(0x26b)]()[this[_0x3f5f67(0x192)]()];if(_0x483f2b[_0x3f5f67(0x3a0)]()[_0x3f5f67(0x3ee)](_0x167549))return![];return!![];;},Window_EquipSlot[_0x263456(0x26e)]['processShiftRemoveShortcut']=function(){const _0x179818=_0x263456;SoundManager[_0x179818(0x18c)]();const _0x21f8a9=SceneManager['_scene'][_0x179818(0x1bb)];_0x21f8a9['changeEquip'](this[_0x179818(0x192)](),null),this[_0x179818(0x133)](),this[_0x179818(0x4c8)][_0x179818(0x133)](),this[_0x179818(0x40b)]();const _0x42c97a=SceneManager[_0x179818(0x4cf)]['_statusWindow'];if(_0x42c97a)_0x42c97a[_0x179818(0x133)]();},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0x465)]=function(){const _0x4ec012=_0x263456;if(!this[_0x4ec012(0x29d)])return![];if(!VisuMZ['ItemsEquipsCore'][_0x4ec012(0x2ad)][_0x4ec012(0x142)][_0x4ec012(0xfc)])return![];return!![];},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0x33d)]=function(){const _0x34a74f=_0x263456;if(!this[_0x34a74f(0x213)]()){if(_0x34a74f(0x366)==='RpfIX')Window_StatusBase['prototype'][_0x34a74f(0x33d)][_0x34a74f(0x2bb)](this);else{function _0x81e052(){const _0x585a88=_0x34a74f;return _0x3374cb['ItemsEquipsCore'][_0x585a88(0x2ad)]['ShopScene'][_0x585a88(0x3d1)];}}}},Window_EquipSlot['prototype']['processCursorSpecialCheckModernControls']=function(){const _0x486acb=_0x263456;if(!this['isCursorMovable']())return![];if(SceneManager[_0x486acb(0x4cf)][_0x486acb(0x424)]!==Scene_Equip)return![];if(this[_0x486acb(0x521)]())return this[_0x486acb(0x43a)](),Input[_0x486acb(0x412)](),SceneManager[_0x486acb(0x4cf)][_0x486acb(0x317)](),![];else{if(Input['isRepeated']('down')){const _0x1abcdc=this[_0x486acb(0x192)]();if(Input[_0x486acb(0x17b)]('shift')){if(_0x486acb(0x14b)===_0x486acb(0x286)){function _0x44e189(){const _0x1e8ca2=_0x486acb;this[_0x1e8ca2(0x181)][_0x1e8ca2(0x132)](),this[_0x1e8ca2(0xf3)][_0x1e8ca2(0x132)]();}}else this[_0x486acb(0x3ac)]();}else this[_0x486acb(0x47c)](Input[_0x486acb(0x257)](_0x486acb(0x423)));return this['index']()!==_0x1abcdc&&this[_0x486acb(0x43a)](),!![];}else{if(this[_0x486acb(0x4a4)]()&&Input['isTriggered'](_0x486acb(0x1c8))){if(_0x486acb(0x4bc)!==_0x486acb(0x4ce))return!![];else{function _0x1b595f(){const _0x2377a9=_0x486acb,_0x3334b8=this[_0x2377a9(0x530)]();_0x5c25f6['VisuMZ_0_CoreEngine']?this[_0x2377a9(0x188)](_0x48e22e+_0x3334b8,_0xa437dd,_0x10b65a,_0x3be4bf,![]):this['drawText'](_0x4a5839[_0x2377a9(0x223)](_0xa6834a),_0x28c602+_0x3334b8,_0x3719e9,_0x3ffb94);}}}}}return![];},Window_EquipSlot[_0x263456(0x26e)]['allowCommandWindowCursorUp']=function(){const _0x5b1a84=_0x263456;if(this[_0x5b1a84(0x192)]()!==0x0)return![];const _0x46300e=VisuMZ[_0x5b1a84(0x2a2)][_0x5b1a84(0x2ad)]['EquipScene'];if(!_0x46300e[_0x5b1a84(0x294)]&&!_0x46300e['CommandAddClear'])return![];return Input[_0x5b1a84(0x257)]('up');},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0x4a4)]=function(){const _0x5a8bd5=_0x263456;return VisuMZ[_0x5a8bd5(0x2a2)][_0x5a8bd5(0x2ad)]['EquipScene']['ShiftShortcutKey'];},Window_EquipSlot['prototype'][_0x263456(0x3c3)]=function(){const _0x55cf9f=_0x263456;if(this['isOpen']()&&this[_0x55cf9f(0x25e)]&&SceneManager['_scene'][_0x55cf9f(0x424)]===Scene_Equip){if(_0x55cf9f(0x30a)===_0x55cf9f(0x4b2)){function _0x1c8866(){const _0x3e071b=_0x55cf9f,_0x34e14a=this['_categoryNameWindow'];_0x34e14a[_0x3e071b(0x30c)][_0x3e071b(0x412)]();const _0x50f57e=this['categoryStyleCheck'](this[_0x3e071b(0x192)]());if(_0x50f57e===_0x3e071b(0x1da)){const _0x24f7b1=this[_0x3e071b(0x3f7)](this['index']());let _0x265ba4=this[_0x3e071b(0x50f)](this[_0x3e071b(0x192)]());_0x265ba4=_0x265ba4[_0x3e071b(0x35c)](/\\I\[(\d+)\]/gi,''),_0x34e14a['resetFontSettings'](),this[_0x3e071b(0x1ff)](_0x265ba4,_0x24f7b1),this['categoryNameWindowDrawText'](_0x265ba4,_0x24f7b1),this['categoryNameWindowCenter'](_0x265ba4,_0x24f7b1);}}}else{if(this['isHoverEnabled']()&&TouchInput[_0x55cf9f(0x355)]()){if(_0x55cf9f(0x1f1)===_0x55cf9f(0x1cd)){function _0x1d1d2a(){_0x403722+='\x5cI[%1]'['format'](_0x10f980),_0x436a77++;if(_0x2e903d>=_0x6f5d6d)return _0x133e7d;}}else this['onTouchSelectModernControls'](![]);}else{if(TouchInput[_0x55cf9f(0x257)]()){if(_0x55cf9f(0x2e9)===_0x55cf9f(0x468)){function _0x27ef99(){const _0x44906e=_0x55cf9f;if(_0x5d6294[_0x44906e(0x357)](_0x244e68))return![];}}else this[_0x55cf9f(0xc3)](!![]);}}if(TouchInput[_0x55cf9f(0x4e6)]()){if(_0x55cf9f(0x34f)!==_0x55cf9f(0x34f)){function _0x36091f(){return 0x0;}}else this[_0x55cf9f(0x201)]();}else TouchInput['isCancelled']()&&this[_0x55cf9f(0x4d9)]();}}},Window_EquipSlot[_0x263456(0x26e)][_0x263456(0xc3)]=function(_0x2b1c1f){const _0x53193b=_0x263456;this['_doubleTouch']=![];const _0xcea40=this[_0x53193b(0x192)](),_0x14db02=this[_0x53193b(0x390)](),_0xd30fbe=SceneManager[_0x53193b(0x4cf)]['_commandWindow'];if(_0xd30fbe['isOpen']()&&_0xd30fbe['visible']){if(_0x14db02>=0x0){if(_0x53193b(0x3e1)===_0x53193b(0x3df)){function _0x57cf03(){const _0x520d2e=_0x53193b,_0x13cf55=this[_0x520d2e(0x248)](),_0xcd00dc=this[_0x520d2e(0xe9)]()-this['_commandWindow'][_0x520d2e(0x4a5)],_0x37987b=this[_0x520d2e(0x22e)]()?0x0:_0x1438d2['boxWidth']-_0x13cf55,_0x4a5c1c=this[_0x520d2e(0xf3)]['y']+this[_0x520d2e(0xf3)]['height'];return new _0x5bd123(_0x37987b,_0x4a5c1c,_0x13cf55,_0xcd00dc);}}else{if(_0x14db02===this[_0x53193b(0x192)]()){if(_0x53193b(0x354)!=='JqSka')this['_doubleTouch']=!![];else{function _0x5ae8c6(){const _0x2c4deb=_0x53193b,_0x4beb87=this[_0x2c4deb(0x192)]();return _0x5b3571[_0x2c4deb(0x17b)](_0x2c4deb(0x1c8))?this[_0x2c4deb(0x3ac)]():this[_0x2c4deb(0x47c)](_0x19b946['isTriggered'](_0x2c4deb(0x423))),this[_0x2c4deb(0x192)]()!==_0x4beb87&&this['playCursorSound'](),!![];}}}this['activate'](),this['select'](_0x14db02);}}else _0xd30fbe[_0x53193b(0x390)]()>=0x0&&(this[_0x53193b(0x359)](),this[_0x53193b(0x3aa)]());}if(_0x2b1c1f&&this[_0x53193b(0x192)]()!==_0xcea40){if(_0x53193b(0x21a)===_0x53193b(0x21a))this[_0x53193b(0x43a)]();else{function _0xb76307(){const _0x262a9b=_0x53193b;return _0x576377[_0x262a9b(0x264)]()[_0x262a9b(0x3ed)](_0x4314de);}}}},Window_EquipSlot[_0x263456(0x26e)]['equipSlotIndex']=function(){const _0x3d167a=_0x263456;return this[_0x3d167a(0x192)]();},VisuMZ[_0x263456(0x2a2)][_0x263456(0x3c7)]=Window_EquipItem['prototype'][_0x263456(0x3ee)],Window_EquipItem['prototype']['includes']=function(_0x53b028){const _0x226ccd=_0x263456;if(_0x53b028===null&&this[_0x226ccd(0x3a0)]()[_0x226ccd(0x3ee)](this[_0x226ccd(0xe6)]())){if('mxqQN'===_0x226ccd(0x4f2)){function _0x311dff(){const _0x229408=_0x226ccd;if(_0x5c413a===_0x1ce2d8)return;if(_0x24b140[_0x229408(0x38d)][_0x229408(0x152)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x8ac56a=_0x1125c6(_0x33c21c['$1']),_0x2ddcda=(_0x17922e===_0x4b66bd?_0x229408(0x4a0):_0x229408(0x379))[_0x229408(0x48a)](_0x65aab0['id']),_0xdb979c=_0x229408(0x237)['format'](_0x8ac56a);for(let _0x2e107f=0x0;_0x2e107f<0x8;_0x2e107f++){if(_0x8ac56a[_0x229408(0x152)](_0x16b3aa[_0x229408(0x2a2)][_0x229408(0x4ec)]['BorderRegExp'][_0x2e107f])){const _0x2be36d=_0x229408(0x2d7)['format'](_0x2ddcda,_0x2e107f);_0x3d262e[_0x229408(0x2a2)][_0x229408(0x21e)][_0x2be36d]=new _0x220238('item',_0x229408(0x418),_0xdb979c);}}}}}else return![];}else return VisuMZ[_0x226ccd(0x2a2)]['Window_EquipItem_includes'][_0x226ccd(0x2bb)](this,_0x53b028);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x10d)]=Window_EquipItem[_0x263456(0x26e)][_0x263456(0x2ba)],Window_EquipItem[_0x263456(0x26e)][_0x263456(0x2ba)]=function(_0x35be2d){const _0x259994=_0x263456;if(_0x35be2d&&this[_0x259994(0x1bb)]){if(_0x259994(0x409)!==_0x259994(0xdd)){if(this[_0x259994(0x3a0)]()['includes'](this[_0x259994(0xe6)]()))return![];if(this[_0x259994(0x268)](_0x35be2d))return![];if(this['isSoleWeaponType'](_0x35be2d))return![];if(this[_0x259994(0x136)](_0x35be2d))return![];}else{function _0x529f03(){return![];}}}if(!_0x35be2d){if('wzosr'===_0x259994(0x316))return!this['nonRemovableEtypes']()[_0x259994(0x3ee)](this['etypeId']());else{function _0xfeb990(){const _0x45b0e1=_0x259994;return _0x3090b3[_0x45b0e1(0x2a2)]['Settings'][_0x45b0e1(0x142)][_0x45b0e1(0x294)];}}}return VisuMZ[_0x259994(0x2a2)][_0x259994(0x10d)][_0x259994(0x2bb)](this,_0x35be2d);},Window_EquipItem['prototype'][_0x263456(0x268)]=function(_0xfccb7e){const _0x4581f6=_0x263456,_0x3b2732=_0xfccb7e[_0x4581f6(0x38d)];if(_0x3b2732[_0x4581f6(0x152)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x39ced4=Number(RegExp['$1'])||0x1;let _0x301c2e=0x0;const _0xa5d3d6=this[_0x4581f6(0x1bb)][_0x4581f6(0x16b)](),_0x439c79=SceneManager['_scene'][_0x4581f6(0x236)][_0x4581f6(0x39c)]();_0xa5d3d6[_0x439c79]=null;for(const _0x31f133 of _0xa5d3d6){if(!_0x31f133)continue;if(DataManager[_0x4581f6(0x164)](_0xfccb7e)===DataManager[_0x4581f6(0x164)](_0x31f133)){if(_0xfccb7e['id']===_0x31f133['id'])_0x301c2e+=0x1;}}return _0x301c2e>=_0x39ced4;}else{if(_0x4581f6(0x2da)===_0x4581f6(0x4c6)){function _0x1e745d(){const _0x535cc0=_0x4581f6;_0x4d49de='armor-%1'[_0x535cc0(0x48a)](_0x263391['id']);}}else return![];}},Window_EquipItem['prototype']['isSoleWeaponType']=function(_0x3fddab){const _0x3c3acd=_0x263456;if(!DataManager[_0x3c3acd(0x164)](_0x3fddab))return![];const _0x415ead=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x93ca06=0x0;const _0x2f0eed=this[_0x3c3acd(0x1bb)]['equips'](),_0x3f9230=SceneManager[_0x3c3acd(0x4cf)]['_slotWindow']['equipSlotIndex']();_0x2f0eed[_0x3f9230]=null;for(const _0x408d42 of _0x2f0eed){if(_0x3c3acd(0x250)!=='cosMp'){function _0x3b923b(){const _0x300da9=_0x3c3acd;if(!this['isEquipItem']())return![];const _0x328c81=_0xb83d1f[_0x300da9(0x386)][this[_0x300da9(0x139)]['etypeId']];return this[_0x300da9(0x3b7)](_0x328c81,_0x1c9185,_0xd8349c,_0x29b50c,!![]),this[_0x300da9(0x47a)](_0x1c3e2a,_0x58a1db,_0xdc359e),this[_0x300da9(0x383)](),!![];}}else{if(!_0x408d42)continue;if(!DataManager[_0x3c3acd(0x164)](_0x408d42))continue;if(_0x3fddab[_0x3c3acd(0x4ef)]===_0x408d42[_0x3c3acd(0x4ef)]){_0x93ca06+=0x1;if(_0x3fddab[_0x3c3acd(0x38d)][_0x3c3acd(0x152)](_0x415ead)){const _0xf06851=Number(RegExp['$1'])||0x1;if(_0x93ca06>=_0xf06851)return!![];}if(_0x408d42['note'][_0x3c3acd(0x152)](_0x415ead)){if('AUGqf'!=='lcnpk'){const _0x19a664=Number(RegExp['$1'])||0x1;if(_0x93ca06>=_0x19a664)return!![];}else{function _0x2867b9(){const _0x1c01d6=_0x3c3acd;if(_0x31af52['match'](/(.*):[ ](.*)/i)){const _0x339126=_0x3f80a1(_0x41f946['$1'])[_0x1c01d6(0x1ce)](),_0x32d658=_0x23a0e6(_0x443396['$2'])[_0x1c01d6(0x1ce)]();this[_0x1c01d6(0x323)](_0x339126,_0x32d658,_0x3768ed,_0x45e7bc,_0x1e9d06),_0x674a61+=this[_0x1c01d6(0x2f3)]();}}}}}}}return![];},Window_EquipItem[_0x263456(0x26e)]['isSoleArmorType']=function(_0x53d92d){const _0x199ce8=_0x263456;if(!DataManager[_0x199ce8(0x224)](_0x53d92d))return![];const _0x3e60b7=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x3a97a9=0x0;const _0x3f514b=this[_0x199ce8(0x1bb)][_0x199ce8(0x16b)](),_0x28956c=SceneManager['_scene'][_0x199ce8(0x236)]['equipSlotIndex']();_0x3f514b[_0x28956c]=null;for(const _0x5ed717 of _0x3f514b){if(!_0x5ed717)continue;if(!DataManager[_0x199ce8(0x224)](_0x5ed717))continue;if(_0x53d92d[_0x199ce8(0x2a7)]===_0x5ed717[_0x199ce8(0x2a7)]){_0x3a97a9+=0x1;if(_0x53d92d[_0x199ce8(0x38d)][_0x199ce8(0x152)](_0x3e60b7)){const _0x8cdd4e=Number(RegExp['$1'])||0x1;if(_0x3a97a9>=_0x8cdd4e)return!![];}if(_0x5ed717[_0x199ce8(0x38d)][_0x199ce8(0x152)](_0x3e60b7)){if('Fyqep'==='Fyqep'){const _0x663b1c=Number(RegExp['$1'])||0x1;if(_0x3a97a9>=_0x663b1c)return!![];}else{function _0x36a3d2(){const _0x28e38c=_0x199ce8;_0x5094a8=_0x410c0b[_0x28e38c(0x1a0)][_0x13dc6c(_0x135a08['$1'])]||'';}}}}}return![];},Window_EquipItem[_0x263456(0x26e)]['nonRemovableEtypes']=function(){const _0x4b6100=_0x263456;return VisuMZ[_0x4b6100(0x2a2)][_0x4b6100(0x2ad)][_0x4b6100(0x142)]['NonRemoveETypes'];},Window_EquipItem[_0x263456(0x26e)][_0x263456(0x3e8)]=function(_0x2144ca){const _0x381627=_0x263456,_0x3d3e3c=this[_0x381627(0x3bf)](_0x2144ca);if(_0x3d3e3c){if(_0x381627(0x519)!==_0x381627(0x519)){function _0x454f4c(){const _0x40b624=_0x381627;!_0x58a9cd&&this[_0x40b624(0x49d)](null,_0x26f65f);if(!this['_tempActor']){const _0x25c1a9=_0x26ff29[_0x40b624(0x46a)](this);_0x25c1a9[_0x40b624(0x18b)]=!![],this['_equips'][_0x19ae88][_0x40b624(0x146)](null),this[_0x40b624(0x2f6)](_0x25c1a9);}else this[_0x40b624(0x3b3)][_0x4f4227][_0x40b624(0x146)](null);_0x31f820=!![];}}else Window_ItemList[_0x381627(0x26e)][_0x381627(0x3e8)][_0x381627(0x2bb)](this,_0x2144ca);}else{if(_0x381627(0x3fb)===_0x381627(0x25a)){function _0x246f3f(){const _0x1a8542=_0x381627;if(!this[_0x1a8542(0x2b6)]()&&!_0x4960bf[_0x1a8542(0x3c8)](this[_0x1a8542(0x139)]))return;const _0x399e68=this[_0x1a8542(0x117)]-this[_0x1a8542(0x530)]()-_0x18ace8,_0x270669=this[_0x1a8542(0x381)](_0x1a8542(0x335));this['changeTextColor'](_0xb1044c[_0x1a8542(0x36c)]()),this[_0x1a8542(0xf5)](_0x29960e[_0x1a8542(0x2c7)],_0x3fb19c+this[_0x1a8542(0x530)](),_0x4a8e07,_0x399e68-_0x270669),this['resetTextColor'](),this[_0x1a8542(0x214)](this[_0x1a8542(0x139)],_0x364696,_0xa6707e,_0x399e68);}}else this[_0x381627(0x12c)](_0x2144ca);}},Window_EquipItem['prototype'][_0x263456(0x12c)]=function(_0x205c43){const _0x2945c8=_0x263456;this[_0x2945c8(0x172)](this[_0x2945c8(0x2ba)](null));const _0x2bd61d=VisuMZ[_0x2945c8(0x2a2)][_0x2945c8(0x2ad)][_0x2945c8(0x142)],_0x25aaa3=this[_0x2945c8(0x3f7)](_0x205c43),_0x29a7f7=_0x25aaa3['y']+(this[_0x2945c8(0x2f3)]()-ImageManager[_0x2945c8(0x225)])/0x2,_0x1e3c67=ImageManager[_0x2945c8(0x1b4)]+0x4,_0x2948cd=Math[_0x2945c8(0x4df)](0x0,_0x25aaa3[_0x2945c8(0x528)]-_0x1e3c67);this[_0x2945c8(0x28f)](),this[_0x2945c8(0xde)](_0x2bd61d[_0x2945c8(0xc8)],_0x25aaa3['x'],_0x29a7f7),this['drawText'](_0x2bd61d[_0x2945c8(0x2b5)],_0x25aaa3['x']+_0x1e3c67,_0x25aaa3['y'],_0x2948cd),this[_0x2945c8(0x172)](!![]);},Window_EquipItem['prototype'][_0x263456(0x171)]=function(){const _0x2b3c45=_0x263456;Window_ItemList['prototype'][_0x2b3c45(0x171)][_0x2b3c45(0x2bb)](this);if(this[_0x2b3c45(0x1bb)]&&this[_0x2b3c45(0x2ca)]&&this['_slotId']>=0x0){if(_0x2b3c45(0x391)==='IjTtZ'){function _0x2853c5(){const _0x4cc9bd=_0x2b3c45;return _0x533793[_0x4cc9bd(0x20c)]&&_0xbd69dc['prototype']['isUseModernControls'][_0x4cc9bd(0x2bb)](this);}}else{const _0x2cab70=JsonEx[_0x2b3c45(0x46a)](this[_0x2b3c45(0x1bb)]);_0x2cab70[_0x2b3c45(0x18b)]=!![],_0x2cab70['forceChangeEquip'](this[_0x2b3c45(0x1ef)],this[_0x2b3c45(0x1c0)]()),this[_0x2b3c45(0x2ca)]['setTempActor'](_0x2cab70);}}},VisuMZ[_0x263456(0x2a2)][_0x263456(0xd7)]=Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x288)],Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x288)]=function(_0x3658ed){const _0x36e7ce=_0x263456;VisuMZ[_0x36e7ce(0x2a2)][_0x36e7ce(0xd7)][_0x36e7ce(0x2bb)](this,_0x3658ed),this[_0x36e7ce(0x406)](_0x3658ed);},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x406)]=function(_0x17eaa8){const _0x5a3926=_0x263456,_0x21f05b=new Rectangle(0x0,0x0,_0x17eaa8['width'],_0x17eaa8[_0x5a3926(0x4a5)]);this[_0x5a3926(0x1df)]=new Window_Base(_0x21f05b),this[_0x5a3926(0x1df)]['opacity']=0x0,this[_0x5a3926(0x31a)](this[_0x5a3926(0x1df)]),this[_0x5a3926(0x463)]();},Window_ShopCommand[_0x263456(0x26e)]['callUpdateHelp']=function(){const _0x39070e=_0x263456;Window_HorzCommand[_0x39070e(0x26e)][_0x39070e(0x40b)]['call'](this);if(this[_0x39070e(0x1df)])this[_0x39070e(0x463)]();},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x463)]=function(){const _0x8d903a=_0x263456,_0x1ff378=this[_0x8d903a(0x1df)];_0x1ff378[_0x8d903a(0x30c)]['clear']();const _0x38e3ff=this[_0x8d903a(0x326)](this['index']());if(_0x38e3ff===_0x8d903a(0x1da)){if(_0x8d903a(0x439)!=='XUiTJ'){function _0xf88255(){return!![];}}else{const _0xd591a=this[_0x8d903a(0x3f7)](this[_0x8d903a(0x192)]());let _0x456431=this['commandName'](this[_0x8d903a(0x192)]());_0x456431=_0x456431[_0x8d903a(0x35c)](/\\I\[(\d+)\]/gi,''),_0x1ff378[_0x8d903a(0x383)](),this[_0x8d903a(0x22a)](_0x456431,_0xd591a),this[_0x8d903a(0x443)](_0x456431,_0xd591a),this['commandNameWindowCenter'](_0x456431,_0xd591a);}}},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x22a)]=function(_0xd34b5e,_0x3379a9){},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x443)]=function(_0x4c33ad,_0x4de91b){const _0x15d935=_0x263456,_0x4a0b92=this[_0x15d935(0x1df)];_0x4a0b92['drawText'](_0x4c33ad,0x0,_0x4de91b['y'],_0x4a0b92['innerWidth'],_0x15d935(0x51f));},Window_ShopCommand[_0x263456(0x26e)]['commandNameWindowCenter']=function(_0x42d6be,_0x3b2c63){const _0x4e5bdb=_0x263456,_0x40b8bd=this['_commandNameWindow'],_0x173c04=$gameSystem['windowPadding'](),_0x3de9a4=_0x3b2c63['x']+Math[_0x4e5bdb(0x372)](_0x3b2c63[_0x4e5bdb(0x528)]/0x2)+_0x173c04;_0x40b8bd['x']=_0x40b8bd[_0x4e5bdb(0x528)]/-0x2+_0x3de9a4,_0x40b8bd['y']=Math[_0x4e5bdb(0x372)](_0x3b2c63['height']/0x2);},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x1d7)]=function(){return this['_list']?this['_list']['length']:0x3;},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x364)]=function(){const _0x2aa843=_0x263456;return VisuMZ[_0x2aa843(0x2a2)][_0x2aa843(0x2ad)]['ShopScene'][_0x2aa843(0x11a)];},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x138)]=function(){const _0x26f474=_0x263456;this['addBuyCommand'](),this[_0x26f474(0x3dc)](),this[_0x26f474(0x518)]();},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x133)]=function(){const _0x55efbb=_0x263456;Window_HorzCommand[_0x55efbb(0x26e)][_0x55efbb(0x133)][_0x55efbb(0x2bb)](this),this[_0x55efbb(0x3ba)]();},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x2e2)]=function(){const _0x5a3585=_0x263456,_0x276ee3=this[_0x5a3585(0x33b)](),_0x4ddfcf=VisuMZ['ItemsEquipsCore']['Settings'][_0x5a3585(0x1ac)][_0x5a3585(0x125)],_0x15c12f=_0x276ee3===_0x5a3585(0x123)?TextManager[_0x5a3585(0xda)]:_0x5a3585(0x175)[_0x5a3585(0x48a)](_0x4ddfcf,TextManager[_0x5a3585(0xda)]),_0xb6712a=this['isBuyCommandEnabled']();if(this[_0x5a3585(0x364)]()&&!_0xb6712a)return;this['addCommand'](_0x15c12f,'buy',_0xb6712a);},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x3c5)]=function(){const _0x5a211a=_0x263456;return SceneManager[_0x5a211a(0x4cf)]['constructor']===Scene_Shop?SceneManager[_0x5a211a(0x4cf)]['_goodsCount']>0x0:!![];},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x3dc)]=function(){const _0x395fb3=_0x263456,_0x2f45d3=this[_0x395fb3(0x33b)](),_0x4cea96=VisuMZ[_0x395fb3(0x2a2)][_0x395fb3(0x2ad)][_0x395fb3(0x1ac)][_0x395fb3(0x2b9)],_0x47287f=_0x2f45d3===_0x395fb3(0x123)?TextManager[_0x395fb3(0x486)]:_0x395fb3(0x175)['format'](_0x4cea96,TextManager['sell']),_0x19f97a=this['isSellCommandEnabled']();if(this['hideDisabledCommands']()&&!_0x19f97a)return;this['addCommand'](_0x47287f,_0x395fb3(0x486),_0x19f97a);},Window_ShopCommand['prototype'][_0x263456(0x1eb)]=function(){const _0x34a451=_0x263456;return!this[_0x34a451(0x24b)];},Window_ShopCommand['prototype']['addCancelCommand']=function(){const _0x34a969=_0x263456,_0x460070=this[_0x34a969(0x33b)](),_0x55a2da=VisuMZ[_0x34a969(0x2a2)][_0x34a969(0x2ad)][_0x34a969(0x1ac)][_0x34a969(0x3eb)],_0x197376=VisuMZ[_0x34a969(0x2a2)][_0x34a969(0x2ad)][_0x34a969(0x1ac)][_0x34a969(0x167)],_0x59be09=_0x460070===_0x34a969(0x123)?_0x197376:'\x5cI[%1]%2'['format'](_0x55a2da,_0x197376);this[_0x34a969(0x3bb)](_0x59be09,_0x34a969(0x25f));},Window_ShopCommand['prototype'][_0x263456(0x252)]=function(){const _0x46dc8d=_0x263456;return VisuMZ[_0x46dc8d(0x2a2)][_0x46dc8d(0x2ad)][_0x46dc8d(0x1ac)][_0x46dc8d(0x4d0)];},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x3e8)]=function(_0x8cf854){const _0x14f7a4=_0x263456,_0xce0690=this['commandStyleCheck'](_0x8cf854);if(_0xce0690===_0x14f7a4(0x3ef))this[_0x14f7a4(0x1f6)](_0x8cf854);else _0xce0690==='icon'?this[_0x14f7a4(0x1a5)](_0x8cf854):Window_HorzCommand['prototype'][_0x14f7a4(0x3e8)][_0x14f7a4(0x2bb)](this,_0x8cf854);},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x33b)]=function(){const _0x2011d6=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x2011d6(0x2ad)]['ShopScene'][_0x2011d6(0x442)];},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x326)]=function(_0x49ef5a){const _0x478f75=_0x263456;if(_0x49ef5a<0x0)return _0x478f75(0x123);const _0x2fc285=this[_0x478f75(0x33b)]();if(_0x2fc285!=='auto'){if(_0x478f75(0x461)!==_0x478f75(0x38e))return _0x2fc285;else{function _0x3618c2(){const _0x71683d=_0x478f75;_0xde8c36=_0x1f8b19[_0x71683d(0x2a2)][_0x71683d(0x2ad)]['Categories'][_0x2f2798];}}}else{if(this[_0x478f75(0x3c1)]()>0x0){const _0x988a7d=this[_0x478f75(0x50f)](_0x49ef5a);if(_0x988a7d['match'](/\\I\[(\d+)\]/i)){const _0x242798=this[_0x478f75(0x3f7)](_0x49ef5a),_0x35b3e9=this[_0x478f75(0x3bd)](_0x988a7d)['width'];return _0x35b3e9<=_0x242798['width']?_0x478f75(0x3ef):_0x478f75(0x1da);}}}return _0x478f75(0x123);},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x1f6)]=function(_0x3d2cb5){const _0x25abde=_0x263456,_0x4e3c4c=this[_0x25abde(0x3f7)](_0x3d2cb5),_0x31f71b=this['commandName'](_0x3d2cb5),_0x295f6c=this[_0x25abde(0x3bd)](_0x31f71b)[_0x25abde(0x528)];this[_0x25abde(0x172)](this[_0x25abde(0x4d6)](_0x3d2cb5));const _0x34b2db=this[_0x25abde(0x252)]();if(_0x34b2db===_0x25abde(0x2ec)){if(_0x25abde(0x3b4)===_0x25abde(0x3b4))this['drawTextEx'](_0x31f71b,_0x4e3c4c['x']+_0x4e3c4c[_0x25abde(0x528)]-_0x295f6c,_0x4e3c4c['y'],_0x295f6c);else{function _0x523e4d(){const _0x4389ac=_0x25abde;if(!_0x17e293[_0x4389ac(0x357)](_0x53beff))return!![];}}}else{if(_0x34b2db==='center'){if(_0x25abde(0x4b5)===_0x25abde(0x10b)){function _0x22b281(){const _0x24bb52=_0x25abde;if(_0x1d2308[_0x24bb52(0x152)](/(.*):[ ](.*)/i)){const _0x299cf4=_0x4a0eaf(_0x46edda['$1'])[_0x24bb52(0x506)]()[_0x24bb52(0x1ce)](),_0x419e30=_0x13203a(_0x5b7e26['$2'])[_0x24bb52(0x1ce)]();this[_0x24bb52(0x318)][_0x299cf4]=_0x419e30;}}}else{const _0x26aafa=_0x4e3c4c['x']+Math['floor']((_0x4e3c4c['width']-_0x295f6c)/0x2);this[_0x25abde(0xe5)](_0x31f71b,_0x26aafa,_0x4e3c4c['y'],_0x295f6c);}}else{if(_0x25abde(0x480)!==_0x25abde(0x480)){function _0x536242(){const _0x1fc544=_0x25abde;this['_equips'][_0x57fd0d][_0x1fc544(0x146)](null);}}else this[_0x25abde(0xe5)](_0x31f71b,_0x4e3c4c['x'],_0x4e3c4c['y'],_0x295f6c);}}},Window_ShopCommand[_0x263456(0x26e)][_0x263456(0x1a5)]=function(_0x535355){const _0x5c851c=_0x263456;this[_0x5c851c(0x50f)](_0x535355)[_0x5c851c(0x152)](/\\I\[(\d+)\]/i);const _0x241edd=Number(RegExp['$1'])||0x0,_0x23d898=this[_0x5c851c(0x3f7)](_0x535355),_0x368855=_0x23d898['x']+Math['floor']((_0x23d898[_0x5c851c(0x528)]-ImageManager[_0x5c851c(0x1b4)])/0x2),_0x10bc5f=_0x23d898['y']+(_0x23d898[_0x5c851c(0x4a5)]-ImageManager[_0x5c851c(0x225)])/0x2;this[_0x5c851c(0xde)](_0x241edd,_0x368855,_0x10bc5f);},VisuMZ[_0x263456(0x2a2)][_0x263456(0x520)]=Window_ShopBuy[_0x263456(0x26e)][_0x263456(0x133)],Window_ShopBuy[_0x263456(0x26e)][_0x263456(0x133)]=function(){const _0x3d8a6a=_0x263456;this[_0x3d8a6a(0x341)](),VisuMZ[_0x3d8a6a(0x2a2)]['Window_ShopBuy_refresh'][_0x3d8a6a(0x2bb)](this);},Window_ShopBuy['prototype'][_0x263456(0x341)]=function(){const _0x5d85d1=_0x263456;SceneManager['_scene'][_0x5d85d1(0x424)]===Scene_Shop&&(this['_money']=SceneManager[_0x5d85d1(0x4cf)][_0x5d85d1(0x21c)]());},VisuMZ[_0x263456(0x2a2)][_0x263456(0x1bd)]=Window_ShopBuy['prototype'][_0x263456(0x450)],Window_ShopBuy[_0x263456(0x26e)][_0x263456(0x450)]=function(_0x52d647){const _0x3f5292=_0x263456;if(!_0x52d647)return 0x0;const _0x48ae4a=VisuMZ[_0x3f5292(0x2a2)][_0x3f5292(0x1bd)]['call'](this,_0x52d647);return this[_0x3f5292(0x466)](_0x52d647,_0x48ae4a);},Window_ShopBuy[_0x263456(0x26e)]['modifiedBuyPriceItemsEquipsCore']=function(_0xd1ad4f,_0x21503f){const _0x24d734=_0x263456,_0x1ada3c=_0xd1ad4f[_0x24d734(0x38d)];if(_0x1ada3c[_0x24d734(0x152)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x29bd8b=String(RegExp['$1']);try{eval(_0x29bd8b);}catch(_0x3755a2){if($gameTemp[_0x24d734(0x508)]())console[_0x24d734(0x41b)](_0x3755a2);}}_0x21503f=VisuMZ[_0x24d734(0x2a2)][_0x24d734(0x2ad)][_0x24d734(0x1ac)][_0x24d734(0x22c)][_0x24d734(0x2bb)](this,_0xd1ad4f,_0x21503f);if(isNaN(_0x21503f))_0x21503f=0x0;return Math[_0x24d734(0x372)](_0x21503f);},Window_ShopBuy[_0x263456(0x26e)]['drawItem']=function(_0x2f7844){const _0x17cf89=_0x263456;this[_0x17cf89(0x383)]();const _0xf6bf94=this[_0x17cf89(0x3bf)](_0x2f7844),_0x3bb882=this[_0x17cf89(0x3f7)](_0x2f7844),_0x9cebd6=_0x3bb882['width'];this[_0x17cf89(0x172)](this[_0x17cf89(0x2ba)](_0xf6bf94)),this['drawItemName'](_0xf6bf94,_0x3bb882['x'],_0x3bb882['y'],_0x9cebd6),this[_0x17cf89(0x270)](_0xf6bf94,_0x3bb882),this[_0x17cf89(0x172)](!![]);},Window_ShopBuy['prototype'][_0x263456(0x270)]=function(_0x320c9a,_0x24583f){const _0x571b19=_0x263456,_0x57a4bf=this[_0x571b19(0x450)](_0x320c9a);this[_0x571b19(0x1a9)](_0x57a4bf,TextManager[_0x571b19(0x44d)],_0x24583f['x'],_0x24583f['y'],_0x24583f['width']);},Window_ShopSell[_0x263456(0x26e)][_0x263456(0x1d7)]=function(){const _0x32ceb7=_0x263456;return SceneManager[_0x32ceb7(0x4cf)][_0x32ceb7(0x2f5)]()?0x1:0x2;},VisuMZ[_0x263456(0x2a2)][_0x263456(0x15d)]=Window_ShopSell[_0x263456(0x26e)][_0x263456(0x2ba)],Window_ShopSell[_0x263456(0x26e)][_0x263456(0x2ba)]=function(_0x441fef){const _0xd4c9e4=_0x263456;if(!_0x441fef)return![];const _0x104b00=_0x441fef[_0xd4c9e4(0x38d)];if(_0x104b00[_0xd4c9e4(0x152)](/<CANNOT SELL>/i))return![];if(_0x104b00['match'](/<CAN SELL>/i))return!![];if(_0x104b00['match'](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x27fe1d=JSON[_0xd4c9e4(0x4fe)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3d5251 of _0x27fe1d){if(_0xd4c9e4(0x44a)!==_0xd4c9e4(0x44a)){function _0x1bb872(){const _0x355bd6=_0xd4c9e4;_0x2377b7[_0x355bd6(0x26e)][_0x355bd6(0x40b)][_0x355bd6(0x2bb)](this);if(this[_0x355bd6(0x2b4)])this[_0x355bd6(0x157)]();}}else{if(!$gameSwitches[_0xd4c9e4(0x357)](_0x3d5251))return![];}}}if(_0x104b00[_0xd4c9e4(0x152)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4dfb17=JSON[_0xd4c9e4(0x4fe)]('['+RegExp['$1'][_0xd4c9e4(0x152)](/\d+/g)+']');for(const _0x527511 of _0x4dfb17){if(!$gameSwitches['value'](_0x527511))return![];}}if(_0x104b00[_0xd4c9e4(0x152)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xba7e2e=JSON[_0xd4c9e4(0x4fe)]('['+RegExp['$1'][_0xd4c9e4(0x152)](/\d+/g)+']');for(const _0x5b3e88 of _0xba7e2e){if($gameSwitches[_0xd4c9e4(0x357)](_0x5b3e88))return![];}}return VisuMZ[_0xd4c9e4(0x2a2)][_0xd4c9e4(0x15d)]['call'](this,_0x441fef);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x448)]=function(){return![];},Window_ShopStatus[_0x263456(0x26e)]['loadFaceImages']=function(){const _0x67b1d9=_0x263456;Window_StatusBase[_0x67b1d9(0x26e)][_0x67b1d9(0x27b)][_0x67b1d9(0x2bb)](this);for(const _0x56acce of $gameParty[_0x67b1d9(0x309)]()){ImageManager['loadCharacter'](_0x56acce[_0x67b1d9(0x304)]());}},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0xec)]=function(){const _0x5aa1db=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x5aa1db(0x2ad)][_0x5aa1db(0x143)]['Translucent'];},Window_ShopStatus['prototype'][_0x263456(0x133)]=function(){const _0x5e7bc0=_0x263456;this['contents']['clear'](),this['contentsBack']['clear']();if(this['_item']){if(_0x5e7bc0(0xc6)===_0x5e7bc0(0xc6)){this['resetFontSettings'](),this['changePaintOpacity'](!![]),this[_0x5e7bc0(0x493)]();if(this['isEquipItem']()){if(_0x5e7bc0(0x1a1)!==_0x5e7bc0(0x1a1)){function _0x19cf54(){const _0x2f4803=_0x5e7bc0;_0x318798['ItemsEquipsCore'][_0x2f4803(0x3c2)]['call'](this,_0x25a286),this[_0x2f4803(0x3ae)](_0x2ef37c);}}else this[_0x5e7bc0(0x4e0)]();}else this[_0x5e7bc0(0x41e)]();}else{function _0x2ded76(){const _0x327478=_0x5e7bc0;return this[_0x327478(0x2f5)]()?this[_0x327478(0x4ca)]():_0x1f1847[_0x327478(0x2a2)]['Scene_Equip_statusWindowRect'][_0x327478(0x2bb)](this);}}}},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x4e5)]=function(_0x5a0dd2,_0x35fa57){const _0x31d2d8=_0x263456;if(!this[_0x31d2d8(0x2b6)]()&&!DataManager[_0x31d2d8(0x3c8)](this['_item']))return;const _0x69ff5=this[_0x31d2d8(0x117)]-this[_0x31d2d8(0x530)]()-_0x5a0dd2,_0x1c24c7=this[_0x31d2d8(0x381)](_0x31d2d8(0x335));this['changeTextColor'](ColorManager[_0x31d2d8(0x36c)]()),this['drawText'](TextManager['possession'],_0x5a0dd2+this[_0x31d2d8(0x530)](),_0x35fa57,_0x69ff5-_0x1c24c7),this[_0x31d2d8(0x28f)](),this[_0x31d2d8(0x214)](this['_item'],_0x5a0dd2,_0x35fa57,_0x69ff5);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x47a)]=function(_0x154716,_0x232e00,_0x289048,_0x4f3293,_0x556e88){const _0x4fa740=_0x263456;if(VisuMZ[_0x4fa740(0x2a2)][_0x4fa740(0x2ad)][_0x4fa740(0x143)][_0x4fa740(0x1b7)]===![])return;_0x556e88=Math[_0x4fa740(0x4df)](_0x556e88||0x1,0x1);while(_0x556e88--){_0x4f3293=_0x4f3293||this['lineHeight'](),this['contentsBack'][_0x4fa740(0x51d)]=0xa0;const _0x4200de=ColorManager[_0x4fa740(0x35f)]();this[_0x4fa740(0x1ca)]['fillRect'](_0x154716+0x1,_0x232e00+0x1,_0x289048-0x2,_0x4f3293-0x2,_0x4200de),this['contentsBack']['paintOpacity']=0xff;}},ColorManager[_0x263456(0x35f)]=function(){const _0x114ca6=_0x263456,_0x51117f=VisuMZ[_0x114ca6(0x2a2)]['Settings'][_0x114ca6(0x143)];let _0x89f254=_0x51117f[_0x114ca6(0x4f6)]!==undefined?_0x51117f[_0x114ca6(0x4f6)]:0x13;return ColorManager[_0x114ca6(0x20d)](_0x89f254);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x4e0)]=function(){const _0x353cb6=_0x263456;if(VisuMZ['ItemsEquipsCore'][_0x353cb6(0x2ad)][_0x353cb6(0x143)]['DrawEquipData']){VisuMZ[_0x353cb6(0x2a2)]['Settings'][_0x353cb6(0x143)]['DrawEquipData'][_0x353cb6(0x2bb)](this);return;}const _0x5999ab=this[_0x353cb6(0x2f3)](),_0x19ca5c=this['gaugeLineHeight']()+0x8;let _0x4c59a7=0x0,_0x40648d=0x0,_0xf458f7=this[_0x353cb6(0x117)],_0x47db0f=this[_0x353cb6(0xe2)],_0x125125=Math[_0x353cb6(0x372)](_0xf458f7/0x2),_0x456f14=_0x4c59a7+_0xf458f7-_0x125125;this[_0x353cb6(0x259)](this[_0x353cb6(0x139)],_0x4c59a7+this[_0x353cb6(0x530)](),_0x40648d,_0xf458f7-this['itemPadding']()*0x2),this['drawItemDarkRect'](_0x4c59a7,_0x40648d,_0xf458f7),_0x40648d+=_0x5999ab;if(this[_0x353cb6(0x37b)](_0x4c59a7,_0x40648d,_0x125125))_0x40648d+=0x0;if(this['drawItemQuantity'](_0x456f14,_0x40648d,_0x125125))_0x40648d+=_0x5999ab;const _0x654ad2=this[_0x353cb6(0x404)](),_0x448427=_0x40648d;_0x40648d=_0x47db0f-_0x654ad2[_0x353cb6(0x25d)]*_0x19ca5c-0x4;let _0x155fdb=_0x4c59a7,_0x56f196=0x0,_0x3da65b=_0x40648d;for(const _0xb59d35 of _0x654ad2){if('DBXRy'!==_0x353cb6(0x290))_0x56f196=Math['max'](this[_0x353cb6(0x368)](_0xb59d35,_0x4c59a7+0x4,_0x40648d+0x4,_0xf458f7),_0x56f196),_0x40648d+=_0x19ca5c;else{function _0x3c3f70(){const _0x5b8ce5=_0x353cb6;delete this['_categoryWindow'][_0x5b8ce5(0x24a)]['ok'],delete this[_0x5b8ce5(0x217)][_0x5b8ce5(0x24a)]['cancel'];}}}const _0x33dbb1=$gameParty['maxBattleMembers'](),_0x1fb25f=Math['floor']((_0xf458f7-_0x56f196)/_0x33dbb1);_0x56f196=_0xf458f7-_0x1fb25f*_0x33dbb1;for(const _0x5ef2bd of $gameParty['battleMembers']()){const _0x1c26b6=$gameParty[_0x353cb6(0x37c)]()[_0x353cb6(0x158)](_0x5ef2bd),_0x15ac8f=_0x155fdb+_0x56f196+_0x1c26b6*_0x1fb25f;this['changePaintOpacity'](_0x5ef2bd[_0x353cb6(0x420)](this[_0x353cb6(0x139)])),this[_0x353cb6(0x422)](_0x5ef2bd,_0x15ac8f+_0x1fb25f/0x2,_0x3da65b);let _0x564113=_0x3da65b;for(const _0x5d64e6 of _0x654ad2){const _0xba4bf9=_0x564113-(_0x5999ab-_0x19ca5c)/0x2;this[_0x353cb6(0x4d1)](_0x5ef2bd,_0x5d64e6,_0x15ac8f,_0xba4bf9,_0x1fb25f),_0x564113+=_0x19ca5c;}}this[_0x353cb6(0x47a)](_0x155fdb,_0x448427,_0x56f196,_0x3da65b-_0x448427);for(let _0x4de13f=0x0;_0x4de13f<_0x33dbb1;_0x4de13f++){if(_0x353cb6(0x2a8)!==_0x353cb6(0x2a8)){function _0x4867f8(){const _0x561576=_0x353cb6;return _0x328f08['ItemsEquipsCore'][_0x561576(0x2ad)][_0x561576(0x377)][_0x561576(0x501)];}}else{const _0x2672bf=_0x155fdb+_0x56f196+_0x4de13f*_0x1fb25f;this['drawItemDarkRect'](_0x2672bf,_0x448427,_0x1fb25f,_0x3da65b-_0x448427);}}for(const _0x4d2e3e of _0x654ad2){this[_0x353cb6(0x47a)](_0x155fdb,_0x3da65b,_0x56f196,_0x19ca5c);for(let _0x4b42f3=0x0;_0x4b42f3<_0x33dbb1;_0x4b42f3++){const _0x1b65b8=_0x155fdb+_0x56f196+_0x4b42f3*_0x1fb25f;this[_0x353cb6(0x47a)](_0x1b65b8,_0x3da65b,_0x1fb25f,_0x19ca5c);}_0x3da65b+=_0x19ca5c;}},Window_ShopStatus['prototype'][_0x263456(0x37b)]=function(_0x2a38f2,_0x5c3f45,_0x3ac510){const _0x34da55=_0x263456;if(!this[_0x34da55(0x2b6)]())return![];const _0x17cca6=$dataSystem['equipTypes'][this[_0x34da55(0x139)][_0x34da55(0xe6)]];return this[_0x34da55(0x3b7)](_0x17cca6,_0x2a38f2,_0x5c3f45,_0x3ac510,!![]),this[_0x34da55(0x47a)](_0x2a38f2,_0x5c3f45,_0x3ac510),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x216)]=function(){const _0x24ce08=_0x263456,_0x2fe261=VisuMZ[_0x24ce08(0x2a2)][_0x24ce08(0x2ad)][_0x24ce08(0x377)][_0x24ce08(0x50c)];return _0x2fe261[_0x24ce08(0x48a)]($gameParty[_0x24ce08(0x2d3)](this[_0x24ce08(0x139)]));},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x404)]=function(){const _0x32bb58=_0x263456;if(Imported[_0x32bb58(0x20c)]){if(_0x32bb58(0x4d7)!=='sCCti'){function _0x42db5d(){const _0x114510=_0x32bb58,_0x3fc8e1=this[_0x114510(0x33b)](),_0x2e8c63=_0x25a0ef[_0x114510(0x2a2)]['Settings']['ShopScene'][_0x114510(0x2b9)],_0x3d5f70=_0x3fc8e1===_0x114510(0x123)?_0x7c4ba8[_0x114510(0x486)]:_0x114510(0x175)[_0x114510(0x48a)](_0x2e8c63,_0x578c27['sell']),_0x53af9f=this[_0x114510(0x1eb)]();if(this[_0x114510(0x364)]()&&!_0x53af9f)return;this[_0x114510(0x3bb)](_0x3d5f70,_0x114510(0x486),_0x53af9f);}}else return VisuMZ['CoreEngine'][_0x32bb58(0x2ad)]['Param']['ExtDisplayedParams'];}else{if(_0x32bb58(0x3ce)===_0x32bb58(0x3ce))return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else{function _0x47f05f(){const _0x4b9dcd=_0x32bb58,_0x39453f=new _0x5ea94a(0x0,0x0,_0x32b286[_0x4b9dcd(0x528)],_0x179e6b[_0x4b9dcd(0x4a5)]);this[_0x4b9dcd(0x1df)]=new _0x322983(_0x39453f),this[_0x4b9dcd(0x1df)][_0x4b9dcd(0x2c4)]=0x0,this[_0x4b9dcd(0x31a)](this[_0x4b9dcd(0x1df)]),this[_0x4b9dcd(0x463)]();}}}},Window_ShopStatus['prototype'][_0x263456(0x222)]=function(){const _0x299013=_0x263456;return VisuMZ[_0x299013(0x2a2)]['Settings'][_0x299013(0x143)][_0x299013(0x2e6)];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x368)]=function(_0x10be3b,_0x336637,_0x24d7cb,_0x27a903){const _0x2957ad=_0x263456;this[_0x2957ad(0x383)](),this[_0x2957ad(0x30c)][_0x2957ad(0x287)]=this[_0x2957ad(0x222)]();let _0x2eb355=this[_0x2957ad(0x381)](TextManager[_0x2957ad(0x223)](_0x10be3b))+0x4+_0x336637;if(Imported[_0x2957ad(0x20c)]){if('HPeZg'!==_0x2957ad(0x17a)){function _0x24a8ff(){const _0x25e3bc=_0x2957ad,_0xda3886=_0x46a531['iconWidth'],_0x2a642a=_0x13c183['iconHeight'];this[_0x25e3bc(0x284)]=new _0x15ea5d(_0xda3886,_0x2a642a),this[_0x25e3bc(0x3e4)](),this[_0x25e3bc(0x231)]();}}else this['drawParamText'](_0x336637,_0x24d7cb,_0x27a903,_0x10be3b,!![]),VisuMZ[_0x2957ad(0x42b)]['Settings'][_0x2957ad(0x488)][_0x2957ad(0x14d)]&&(_0x2eb355+=ImageManager['iconWidth']+0x4);}else{if('HDzax'==='FnRpj'){function _0x1ad846(){const _0x295e22=_0x2957ad,_0x235368=this[_0x295e22(0x26b)]()['length'];for(let _0x37effb=0x0;_0x37effb<_0x235368;_0x37effb++){if(this['isOptimizeEquipOk'](_0x37effb))this[_0x295e22(0x4b3)](_0x37effb,null);}for(let _0xb6825d=0x0;_0xb6825d<_0x235368;_0xb6825d++){if(this[_0x295e22(0x20a)](_0xb6825d))this[_0x295e22(0x4b3)](_0xb6825d,this['bestEquipItem'](_0xb6825d));}}}else this[_0x2957ad(0x3f5)](ColorManager['systemColor']()),this[_0x2957ad(0xf5)](TextManager['param'](_0x10be3b),_0x336637,_0x24d7cb,_0x27a903);}return this[_0x2957ad(0x383)](),_0x2eb355;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x4d1)]=function(_0x52b893,_0x8d25aa,_0x27f7a0,_0x443faf,_0x2cc94c){const _0x48e747=_0x263456;_0x27f7a0+=this[_0x48e747(0x530)](),_0x2cc94c-=this[_0x48e747(0x530)]()*0x2;const _0x1e5ad6=VisuMZ[_0x48e747(0x2a2)][_0x48e747(0x2ad)][_0x48e747(0x143)];this[_0x48e747(0x30c)][_0x48e747(0x287)]=_0x1e5ad6[_0x48e747(0x2e6)],this[_0x48e747(0x172)](_0x52b893[_0x48e747(0x420)](this[_0x48e747(0x139)]));if(_0x52b893[_0x48e747(0x28a)](this[_0x48e747(0x139)])){const _0x381d77=_0x1e5ad6['AlreadyEquipMarker'];this['drawText'](_0x381d77,_0x27f7a0,_0x443faf,_0x2cc94c,_0x48e747(0x51f));}else{if(_0x52b893[_0x48e747(0x420)](this[_0x48e747(0x139)])){if(_0x48e747(0x32f)!==_0x48e747(0xd6)){const _0x29bd0d=JsonEx[_0x48e747(0x46a)](_0x52b893);_0x29bd0d[_0x48e747(0x18b)]=!![];const _0x24087b=_0x29bd0d[_0x48e747(0x26b)]()[_0x48e747(0x158)](this['_item'][_0x48e747(0xe6)]);if(_0x24087b>=0x0)_0x29bd0d[_0x48e747(0x4c0)](_0x24087b,this[_0x48e747(0x139)]);let _0xf6671=0x0,_0x5f26f5=0x0,_0x5c0c50=0x0;Imported[_0x48e747(0x20c)]?(_0xf6671=_0x29bd0d[_0x48e747(0x31d)](_0x8d25aa),_0x5f26f5=_0xf6671-_0x52b893['paramValueByName'](_0x8d25aa),this[_0x48e747(0x3f5)](ColorManager[_0x48e747(0x454)](_0x5f26f5)),_0x5c0c50=(_0x5f26f5>=0x0?'+':'')+VisuMZ[_0x48e747(0x4f0)](_0x5f26f5,0x0,_0x8d25aa)):(_0xf6671=_0x29bd0d[_0x48e747(0x223)](_0x8d25aa),_0x5f26f5=_0xf6671-_0x52b893['param'](_0x8d25aa),this['changeTextColor'](ColorManager['paramchangeTextColor'](_0x5f26f5)),_0x5c0c50=(_0x5f26f5>=0x0?'+':'')+_0x5f26f5);if(_0x5c0c50==='+0')_0x5c0c50=_0x1e5ad6[_0x48e747(0x380)];this[_0x48e747(0xf5)](_0x5c0c50,_0x27f7a0,_0x443faf,_0x2cc94c,_0x48e747(0x51f));}else{function _0x532bb4(){const _0x5e5340=_0x48e747;this[_0x5e5340(0x201)]();}}}else{if(_0x48e747(0x360)!==_0x48e747(0x1cf)){const _0x178bc7=_0x1e5ad6[_0x48e747(0x446)];this[_0x48e747(0xf5)](_0x178bc7,_0x27f7a0,_0x443faf,_0x2cc94c,_0x48e747(0x51f));}else{function _0x5d1a30(){const _0x52729b=_0x48e747;return _0x4e8a65['ItemsEquipsCore'][_0x52729b(0x2ad)]['EquipScene'][_0x52729b(0x1bc)];}}}}this['resetFontSettings'](),this[_0x48e747(0x172)](!![]);},Window_ShopStatus['prototype'][_0x263456(0x41e)]=function(){const _0x55104f=_0x263456;VisuMZ[_0x55104f(0x2a2)][_0x55104f(0x2ad)][_0x55104f(0x143)][_0x55104f(0x244)][_0x55104f(0x2bb)](this);},Window_ShopStatus['prototype'][_0x263456(0x493)]=function(){const _0x3074d5=_0x263456;this['_customItemInfo']={};if(!this['_item'])return;const _0x8993ab=this[_0x3074d5(0x139)][_0x3074d5(0x38d)];if(_0x8993ab[_0x3074d5(0x152)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x2a722c=String(RegExp['$1'])[_0x3074d5(0x30d)](/[\r\n]+/);for(const _0x337a8e of _0x2a722c){if(_0x337a8e[_0x3074d5(0x152)](/(.*):[ ](.*)/i)){const _0x54ff00=String(RegExp['$1'])[_0x3074d5(0x506)]()[_0x3074d5(0x1ce)](),_0x24fb91=String(RegExp['$2'])[_0x3074d5(0x1ce)]();this[_0x3074d5(0x318)][_0x54ff00]=_0x24fb91;}}}},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x275)]=function(){const _0x126929=_0x263456;return Math[_0x126929(0x4df)](0x1,$gameSystem[_0x126929(0x497)]()-0x4);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x383)]=function(){const _0xe5b4d6=_0x263456;Window_StatusBase[_0xe5b4d6(0x26e)][_0xe5b4d6(0x383)][_0xe5b4d6(0x2bb)](this),this[_0xe5b4d6(0x30c)]['fontSize']=this[_0xe5b4d6(0x458)]||this[_0xe5b4d6(0x30c)][_0xe5b4d6(0x287)],this[_0xe5b4d6(0x30c)][_0xe5b4d6(0x28b)]=this[_0xe5b4d6(0x473)]||this[_0xe5b4d6(0x30c)][_0xe5b4d6(0x28b)];},Window_ShopStatus[_0x263456(0x26e)]['fontSizeRatio']=function(){const _0x44c49d=_0x263456;return this[_0x44c49d(0x30c)]['fontSize']/$gameSystem[_0x44c49d(0x497)]();},Window_ShopStatus['prototype'][_0x263456(0xde)]=function(_0x1d3ffc,_0x1b25e6,_0x2464e6){const _0x3cdbc1=_0x263456,_0x4090df=ImageManager[_0x3cdbc1(0x342)](_0x3cdbc1(0x104)),_0x4f205c=ImageManager[_0x3cdbc1(0x1b4)],_0x4b1404=ImageManager[_0x3cdbc1(0x225)],_0x538606=_0x1d3ffc%0x10*_0x4f205c,_0x275e5c=Math[_0x3cdbc1(0x372)](_0x1d3ffc/0x10)*_0x4b1404,_0x2b78dd=Math[_0x3cdbc1(0x282)](_0x4f205c*this['fontSizeRatio']()),_0x3ef4b5=Math['ceil'](_0x4b1404*this[_0x3cdbc1(0x4b0)]());this[_0x3cdbc1(0x30c)][_0x3cdbc1(0x19a)](_0x4090df,_0x538606,_0x275e5c,_0x4f205c,_0x4b1404,_0x1b25e6,_0x2464e6,_0x2b78dd,_0x3ef4b5);},Window_ShopStatus[_0x263456(0x26e)]['processDrawIcon']=function(_0xe43878,_0x10e0eb){const _0x5aedc7=_0x263456;_0x10e0eb[_0x5aedc7(0x3fa)]&&this[_0x5aedc7(0xde)](_0xe43878,_0x10e0eb['x'],_0x10e0eb['y']+0x2);_0x10e0eb['x']+=Math[_0x5aedc7(0x282)](ImageManager[_0x5aedc7(0x1b4)]*this[_0x5aedc7(0x4b0)]());if(this[_0x5aedc7(0x4b0)]()===0x1)_0x10e0eb['x']+=0x4;},Window_ShopStatus['prototype'][_0x263456(0x3b7)]=function(_0x3d3007,_0x5d4c9c,_0x35331c,_0x2c93be,_0x21051f,_0xe9009c){const _0x3e534d=_0x263456;_0x3d3007=_0x3d3007||'',_0xe9009c=_0xe9009c||_0x3e534d(0x3cf),this[_0x3e534d(0x458)]=this[_0x3e534d(0x275)](),this[_0x3e534d(0x473)]=_0x21051f?ColorManager['systemColor']():this[_0x3e534d(0x30c)][_0x3e534d(0x28b)],_0x5d4c9c+=this[_0x3e534d(0x530)](),_0x2c93be-=this['itemPadding']()*0x2;const _0x15c6e7=this[_0x3e534d(0x3bd)](_0x3d3007);if(_0xe9009c===_0x3e534d(0x51f))_0x5d4c9c=_0x5d4c9c+Math[_0x3e534d(0x372)]((_0x2c93be-_0x15c6e7['width'])/0x2);else{if(_0xe9009c===_0x3e534d(0x2ec)){if(_0x3e534d(0x1be)===_0x3e534d(0x475)){function _0xb90bf0(){const _0x365041=_0x3e534d;delete this[_0x365041(0x217)][_0x365041(0x24a)]['ok'],delete this[_0x365041(0x217)][_0x365041(0x24a)][_0x365041(0x25f)];}}else _0x5d4c9c=_0x5d4c9c+_0x2c93be-_0x15c6e7[_0x3e534d(0x528)];}}_0x35331c+=(this[_0x3e534d(0x2f3)]()-_0x15c6e7[_0x3e534d(0x4a5)])/0x2,this['drawTextEx'](_0x3d3007,_0x5d4c9c,_0x35331c,_0x2c93be),this[_0x3e534d(0x458)]=undefined,this['_resetFontColor']=undefined,this[_0x3e534d(0x383)]();},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x29b)]=function(_0x3f6cc0,_0x42e523,_0x27b4e4){const _0x3e25ef=_0x263456;if(!DataManager['isItem'](this['_item']))return![];const _0x425764=this[_0x3e25ef(0x27d)]();this[_0x3e25ef(0x3b7)](_0x425764,_0x3f6cc0,_0x42e523,_0x27b4e4,!![]);const _0x2ecc6e=this['getItemConsumableText']();return this[_0x3e25ef(0x3b7)](_0x2ecc6e,_0x3f6cc0,_0x42e523,_0x27b4e4,![],_0x3e25ef(0x2ec)),this[_0x3e25ef(0x47a)](_0x3f6cc0,_0x42e523,_0x27b4e4),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x27d)]=function(){const _0x5400e0=_0x263456;return VisuMZ[_0x5400e0(0x2a2)][_0x5400e0(0x2ad)][_0x5400e0(0x143)][_0x5400e0(0x45e)];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x39f)]=function(){const _0x2277b6=_0x263456,_0x1a5474=_0x2277b6(0x3e6);if(this[_0x2277b6(0x318)][_0x1a5474])return this[_0x2277b6(0x318)][_0x1a5474];return this[_0x2277b6(0xc0)]()?VisuMZ[_0x2277b6(0x2a2)][_0x2277b6(0x2ad)][_0x2277b6(0x143)][_0x2277b6(0x241)]:VisuMZ[_0x2277b6(0x2a2)][_0x2277b6(0x2ad)][_0x2277b6(0x143)][_0x2277b6(0x42c)];},Window_ShopStatus[_0x263456(0x26e)]['canConsumeItem']=function(){const _0x4ac84b=_0x263456;if(VisuMZ[_0x4ac84b(0x42b)]&&VisuMZ[_0x4ac84b(0x42b)][_0x4ac84b(0x2ad)]['QoL'][_0x4ac84b(0xfe)]&&DataManager[_0x4ac84b(0x23a)](this[_0x4ac84b(0x139)]))return![];else{if('nxPUn'===_0x4ac84b(0x470))return this[_0x4ac84b(0x139)][_0x4ac84b(0x29f)];else{function _0xd42ffa(){return;}}}},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x17d)]=function(_0x25458e,_0x4de781,_0x404109){const _0x34459c=_0x263456;if(!this[_0x34459c(0x2b6)]()&&!DataManager[_0x34459c(0x3c8)](this[_0x34459c(0x139)]))return![];if(DataManager[_0x34459c(0x23a)](this[_0x34459c(0x139)])&&!$dataSystem[_0x34459c(0x11c)]){const _0x1abd9b=TextManager['keyItem'];this[_0x34459c(0x3b7)](_0x1abd9b,_0x25458e,_0x4de781,_0x404109,!![],_0x34459c(0x51f));}else{if(_0x34459c(0x441)!=='woMrS'){function _0x14f615(){const _0x231d5e=_0x34459c,_0x379333=this[_0x231d5e(0x326)](_0x1c2412);if(_0x379333==='iconText')this['drawItemStyleIconText'](_0x22d4c5);else _0x379333===_0x231d5e(0x1da)?this[_0x231d5e(0x1a5)](_0x5b910c):_0x55326b[_0x231d5e(0x26e)][_0x231d5e(0x3e8)][_0x231d5e(0x2bb)](this,_0x5ce815);}}else{const _0x19ec0c=TextManager[_0x34459c(0x2c7)];this[_0x34459c(0x3b7)](_0x19ec0c,_0x25458e,_0x4de781,_0x404109,!![]);const _0x4491ca=this['getItemQuantityText']();this[_0x34459c(0x3b7)](_0x4491ca,_0x25458e,_0x4de781,_0x404109,![],_0x34459c(0x2ec));}}return this[_0x34459c(0x47a)](_0x25458e,_0x4de781,_0x404109),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x216)]=function(){const _0x2d1c8d=_0x263456,_0x24c3a1=_0x2d1c8d(0x121);if(this['_customItemInfo'][_0x24c3a1])return this[_0x2d1c8d(0x318)][_0x24c3a1];const _0x55f69c=VisuMZ[_0x2d1c8d(0x2a2)][_0x2d1c8d(0x2ad)][_0x2d1c8d(0x377)]['ItemQuantityFmt'];return _0x55f69c[_0x2d1c8d(0x48a)]($gameParty[_0x2d1c8d(0x2d3)](this[_0x2d1c8d(0x139)]));},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x154)]=function(_0x4584ee,_0x533f33,_0x2a0f46){const _0xbee806=_0x263456,_0x5b1a7d=this[_0xbee806(0x119)]();return this[_0xbee806(0x3b7)](_0x5b1a7d,_0x4584ee,_0x533f33,_0x2a0f46,![],_0xbee806(0x51f)),this[_0xbee806(0x47a)](_0x4584ee,_0x533f33,_0x2a0f46),this[_0xbee806(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)]['getItemOccasionText']=function(){const _0x40dfec=_0x263456,_0x46c811=_0x40dfec(0x52a);if(this[_0x40dfec(0x318)][_0x46c811])return this[_0x40dfec(0x318)][_0x46c811];const _0x15916c=VisuMZ[_0x40dfec(0x2a2)]['Settings'][_0x40dfec(0x143)],_0x39e887=_0x40dfec(0x1db)[_0x40dfec(0x48a)](this[_0x40dfec(0x139)][_0x40dfec(0xcd)]);return _0x15916c[_0x39e887];},Window_ShopStatus['prototype']['drawItemScope']=function(_0x47b1a7,_0x1c353a,_0x5ddca6){const _0x4cf532=_0x263456,_0xb93804=this['getItemScopeText']();return this['drawItemKeyData'](_0xb93804,_0x47b1a7,_0x1c353a,_0x5ddca6,![],'center'),this[_0x4cf532(0x47a)](_0x47b1a7,_0x1c353a,_0x5ddca6),this[_0x4cf532(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)]['getItemScopeText']=function(){const _0x22237f=_0x263456,_0x43aa82=_0x22237f(0x2bc);if(this['_customItemInfo'][_0x43aa82])return this[_0x22237f(0x318)][_0x43aa82];const _0x31a7fd=VisuMZ[_0x22237f(0x2a2)][_0x22237f(0x2ad)]['StatusWindow'];if(Imported['VisuMZ_1_BattleCore']){const _0x2e0ec1=this[_0x22237f(0x139)][_0x22237f(0x38d)];if(_0x2e0ec1[_0x22237f(0x152)](/<TARGET:[ ](.*)>/i)){const _0x18a015=String(RegExp['$1']);if(_0x18a015[_0x22237f(0x152)](/(\d+) RANDOM ANY/i)){if('DpbRh'!==_0x22237f(0x4a9))return _0x31a7fd[_0x22237f(0xcb)][_0x22237f(0x48a)](Number(RegExp['$1']));else{function _0x4319bf(){const _0xec04a5=_0x22237f,_0x266b65=_0x52a52f['AlreadyEquipMarker'];this[_0xec04a5(0xf5)](_0x266b65,_0x17a468,_0x9b0c9b,_0x22f958,'center');}}}else{if(_0x18a015['match'](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i)){if(_0x22237f(0x321)!==_0x22237f(0x524))return _0x31a7fd[_0x22237f(0x522)][_0x22237f(0x48a)](Number(RegExp['$1']));else{function _0x23dd39(){const _0x27e19c=_0x22237f;_0x14e70f=this[_0x27e19c(0x1bb)]['param'](_0x163b9e),_0x268695=this[_0x27e19c(0x18b)][_0x27e19c(0x223)](_0x2b77bb),_0x35fbd6=_0x134f60%0x1!==0x0||_0x45ebbf%0x1!==0x0;}}}else{if(_0x18a015['match'](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i)){if('SnqJX'!==_0x22237f(0x26c)){function _0x4177ae(){const _0x2ff75b=_0x22237f;_0x43e921[_0x2ff75b(0x2a2)][_0x2ff75b(0x3b6)][_0x2ff75b(0x2bb)](this),this[_0x2ff75b(0x407)]()&&this[_0x2ff75b(0x2d9)](),this['allowCreateStatusWindow']()&&this[_0x2ff75b(0x197)]();}}else return _0x31a7fd[_0x22237f(0x4a6)]['format'](Number(RegExp['$1']));}else{if(_0x18a015[_0x22237f(0x152)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i)){if('kVcDI'!==_0x22237f(0x1c5))return _0x31a7fd[_0x22237f(0x472)];else{function _0x6bbc43(){const _0x586901=_0x22237f;_0x46371a['ItemsEquipsCore'][_0x586901(0x4a2)][_0x586901(0x2bb)](this,_0x51acc9,_0x5f1487);}}}}}}}}const _0x53aecc=_0x22237f(0x48b)[_0x22237f(0x48a)](this[_0x22237f(0x139)][_0x22237f(0x47b)]);return _0x31a7fd[_0x53aecc];},Window_ShopStatus['prototype']['drawItemSpeed']=function(_0x163138,_0x5b6fa4,_0x4f2c03){const _0x1d6493=_0x263456,_0xfedb48=this[_0x1d6493(0x251)]();this[_0x1d6493(0x3b7)](_0xfedb48,_0x163138,_0x5b6fa4,_0x4f2c03,!![]);const _0x32a24f=this[_0x1d6493(0x44e)]();return this[_0x1d6493(0x3b7)](_0x32a24f,_0x163138,_0x5b6fa4,_0x4f2c03,![],_0x1d6493(0x2ec)),this['drawItemDarkRect'](_0x163138,_0x5b6fa4,_0x4f2c03),this[_0x1d6493(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x251)]=function(){const _0x26735a=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x26735a(0x2ad)][_0x26735a(0x143)][_0x26735a(0x2c2)];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x44e)]=function(){const _0x20de3b=_0x263456,_0x201d0d='SPEED';if(this[_0x20de3b(0x318)][_0x201d0d])return this['_customItemInfo'][_0x201d0d];const _0x36965d=this['_item'][_0x20de3b(0xeb)];if(_0x36965d>=0x7d0)return VisuMZ[_0x20de3b(0x2a2)][_0x20de3b(0x2ad)][_0x20de3b(0x143)][_0x20de3b(0x44b)];else{if(_0x36965d>=0x3e8)return VisuMZ[_0x20de3b(0x2a2)][_0x20de3b(0x2ad)][_0x20de3b(0x143)][_0x20de3b(0x194)];else{if(_0x36965d>0x0){if(_0x20de3b(0x4f4)===_0x20de3b(0x4f4))return VisuMZ[_0x20de3b(0x2a2)]['Settings'][_0x20de3b(0x143)]['Speed1'];else{function _0xcddc4d(){const _0xa1e674=_0x20de3b,_0x5d91f9=_0x2f05fd[_0xa1e674(0x2d5)](this['_actor'][_0xa1e674(0x395)]());_0x5d91f9[_0xa1e674(0x2ed)](this[_0xa1e674(0x523)][_0xa1e674(0x1a7)](this));}}}else{if(_0x36965d===0x0){if(_0x20de3b(0x1d4)===_0x20de3b(0x1d4))return VisuMZ['ItemsEquipsCore'][_0x20de3b(0x2ad)][_0x20de3b(0x143)][_0x20de3b(0x49b)];else{function _0x3d45a6(){const _0x11a8b0=_0x20de3b;_0xa39a2c[_0x11a8b0(0x2a2)][_0x11a8b0(0x34c)][_0x11a8b0(0x2bb)](this,_0x2668f9),_0x3326a6[_0x11a8b0(0x2a2)][_0x11a8b0(0x312)](_0x1c7f6e,_0xe2835c);}}}else{if(_0x36965d>-0x3e8)return VisuMZ[_0x20de3b(0x2a2)][_0x20de3b(0x2ad)][_0x20de3b(0x143)]['SpeedNeg999'];else{if(_0x36965d>-0x7d0){if('pFWiw'===_0x20de3b(0x23e))return VisuMZ['ItemsEquipsCore'][_0x20de3b(0x2ad)][_0x20de3b(0x143)][_0x20de3b(0x3a7)];else{function _0x244140(){return this['index']();}}}else{if(_0x36965d<=-0x7d0){if(_0x20de3b(0x303)===_0x20de3b(0x127)){function _0x46e007(){const _0x574342=_0x20de3b;_0x599659=_0x574342(0x140)[_0x574342(0x48a)](_0x2a9c5a['id']);}}else return VisuMZ['ItemsEquipsCore'][_0x20de3b(0x2ad)][_0x20de3b(0x143)][_0x20de3b(0x417)];}else{if(_0x20de3b(0x277)===_0x20de3b(0x1e5)){function _0x43dc88(){const _0x4c7469=_0x20de3b;_0x427213=_0x1368ea[_0x4c7469(0x31d)](_0x417f06),_0x44a7a4=_0x5ecc34-_0x41628b['paramValueByName'](_0x3dcd33),this[_0x4c7469(0x3f5)](_0x2e4179['paramchangeTextColor'](_0x4a6ef0)),_0x8d4ba1=(_0x533893>=0x0?'+':'')+_0x3a5abb[_0x4c7469(0x4f0)](_0x3ce142,0x0,_0x4a43a3);}}else return'?????';}}}}}}}},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x52e)]=function(_0x299b82,_0x28ac63,_0x20d204){const _0x5c94e4=_0x263456,_0x4b2f11=this[_0x5c94e4(0x396)]();this['drawItemKeyData'](_0x4b2f11,_0x299b82,_0x28ac63,_0x20d204,!![]);const _0x214e37=this['getItemSuccessRateText']();return this[_0x5c94e4(0x3b7)](_0x214e37,_0x299b82,_0x28ac63,_0x20d204,![],_0x5c94e4(0x2ec)),this[_0x5c94e4(0x47a)](_0x299b82,_0x28ac63,_0x20d204),this[_0x5c94e4(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x396)]=function(){const _0x21b58d=_0x263456;return VisuMZ[_0x21b58d(0x2a2)]['Settings'][_0x21b58d(0x143)][_0x21b58d(0x1a8)];},Window_ShopStatus['prototype'][_0x263456(0xdb)]=function(){const _0x2b740e=_0x263456,_0x53a73d=_0x2b740e(0x2fa);if(this['_customItemInfo'][_0x53a73d])return this['_customItemInfo'][_0x53a73d];if(Imported[_0x2b740e(0x314)]){if(_0x2b740e(0x3b9)!==_0x2b740e(0x3b9)){function _0x68995(){const _0x56f4ad=_0x2b740e;this[_0x56f4ad(0x30c)][_0x56f4ad(0x412)](),this[_0x56f4ad(0x1ca)][_0x56f4ad(0x412)](),this[_0x56f4ad(0x139)]&&(this[_0x56f4ad(0x383)](),this[_0x56f4ad(0x172)](!![]),this[_0x56f4ad(0x493)](),this['isEquipItem']()?this[_0x56f4ad(0x4e0)]():this[_0x56f4ad(0x41e)]());}}else{const _0x413209=this[_0x2b740e(0x139)][_0x2b740e(0x38d)];if(_0x413209[_0x2b740e(0x152)](/<ALWAYS HIT>/i))return'100%';else{if(_0x413209[_0x2b740e(0x152)](/<ALWAYS HIT RATE: (\d+)([%％])>/i)){if(_0x2b740e(0x30f)!==_0x2b740e(0x30f)){function _0x2687b8(){const _0x293e82=_0x2b740e;_0x4829f3['prototype'][_0x293e82(0x171)]['call'](this);if(this['_actor']&&this[_0x293e82(0x2ca)]&&this[_0x293e82(0x1ef)]>=0x0){const _0x57ba92=_0x5010bf[_0x293e82(0x46a)](this[_0x293e82(0x1bb)]);_0x57ba92['_tempActor']=!![],_0x57ba92['forceChangeEquip'](this[_0x293e82(0x1ef)],this['item']()),this[_0x293e82(0x2ca)][_0x293e82(0x40d)](_0x57ba92);}}}else return'%1%'[_0x2b740e(0x48a)](Number(RegExp['$1']));}}}}return _0x2b740e(0x4f9)[_0x2b740e(0x48a)](this[_0x2b740e(0x139)][_0x2b740e(0x1d3)]);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x36b)]=function(_0x355c98,_0x2ba9f7,_0x2493cb){const _0x32ed35=_0x263456,_0x1c7109=this[_0x32ed35(0x504)]();this[_0x32ed35(0x3b7)](_0x1c7109,_0x355c98,_0x2ba9f7,_0x2493cb,!![]);const _0x239f00=this[_0x32ed35(0x38c)]();return this[_0x32ed35(0x3b7)](_0x239f00,_0x355c98,_0x2ba9f7,_0x2493cb,![],_0x32ed35(0x2ec)),this[_0x32ed35(0x47a)](_0x355c98,_0x2ba9f7,_0x2493cb),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemRepeatsLabel']=function(){const _0x291459=_0x263456;return VisuMZ[_0x291459(0x2a2)][_0x291459(0x2ad)][_0x291459(0x143)][_0x291459(0x51a)];},Window_ShopStatus[_0x263456(0x26e)]['getItemRepeatsText']=function(){const _0x2a1342=_0x263456,_0x1476dc=_0x2a1342(0x3d3);if(this[_0x2a1342(0x318)][_0x1476dc])return this[_0x2a1342(0x318)][_0x1476dc];const _0x27e11f=_0x2a1342(0x19d);return _0x27e11f['format'](this['_item'][_0x2a1342(0x4f8)]);},Window_ShopStatus[_0x263456(0x26e)]['drawItemHitType']=function(_0x22313f,_0xb473f3,_0x243ef1){const _0x11934b=_0x263456,_0x5e1c4d=this[_0x11934b(0x456)]();this[_0x11934b(0x3b7)](_0x5e1c4d,_0x22313f,_0xb473f3,_0x243ef1,!![]);const _0x4744b5=this[_0x11934b(0x496)]();return this[_0x11934b(0x3b7)](_0x4744b5,_0x22313f,_0xb473f3,_0x243ef1,![],'right'),this['drawItemDarkRect'](_0x22313f,_0xb473f3,_0x243ef1),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x263456(0x456)]=function(){const _0x121ff9=_0x263456;return VisuMZ[_0x121ff9(0x2a2)][_0x121ff9(0x2ad)]['StatusWindow'][_0x121ff9(0x1f0)];},Window_ShopStatus['prototype'][_0x263456(0x496)]=function(){const _0x534ba2=_0x263456,_0x3a9734=_0x534ba2(0x4a7);if(this[_0x534ba2(0x318)][_0x3a9734])return this[_0x534ba2(0x318)][_0x3a9734];const _0x423fa1=VisuMZ[_0x534ba2(0x2a2)]['Settings'][_0x534ba2(0x143)],_0xb92eb3='HitType%1'['format'](this[_0x534ba2(0x139)]['hitType']);return _0x423fa1[_0xb92eb3];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x29a)]=function(_0x190c9f,_0x2d09e1,_0x572dde){const _0x3d39a2=_0x263456;if(this[_0x3d39a2(0x139)]['damage'][_0x3d39a2(0x292)]<=0x0)return _0x2d09e1;if(this[_0x3d39a2(0x2ea)](_0x190c9f,_0x2d09e1,_0x572dde))_0x2d09e1+=this[_0x3d39a2(0x2f3)]();if(this[_0x3d39a2(0x3a1)](_0x190c9f,_0x2d09e1,_0x572dde))_0x2d09e1+=this[_0x3d39a2(0x2f3)]();return this[_0x3d39a2(0x383)](),_0x2d09e1;},Window_ShopStatus[_0x263456(0x26e)]['drawItemDamageElement']=function(_0x3413aa,_0xaf5cd,_0x5f573c){const _0x52d60b=_0x263456,_0x110a2a=this[_0x52d60b(0x109)]();this[_0x52d60b(0x3b7)](_0x110a2a,_0x3413aa,_0xaf5cd,_0x5f573c,!![]);const _0x34e689=this[_0x52d60b(0x2fd)]();return this[_0x52d60b(0x3b7)](_0x34e689,_0x3413aa,_0xaf5cd,_0x5f573c,![],_0x52d60b(0x2ec)),this['drawItemDarkRect'](_0x3413aa,_0xaf5cd,_0x5f573c),this[_0x52d60b(0x383)](),!![];},Window_ShopStatus['prototype'][_0x263456(0x109)]=function(){const _0x55de77=_0x263456;return VisuMZ[_0x55de77(0x2a2)]['Settings'][_0x55de77(0x143)][_0x55de77(0xcc)];},Window_ShopStatus['prototype'][_0x263456(0x2fd)]=function(){const _0x155645=_0x263456,_0x473360=_0x155645(0x129);if(this[_0x155645(0x318)][_0x473360])return this[_0x155645(0x318)][_0x473360];if(this[_0x155645(0x139)]['damage'][_0x155645(0x529)]<=-0x1){if('VtsQo'!=='VtsQo'){function _0xb9bf04(){const _0x4b94aa=_0x155645;_0x112ba7[_0x4b94aa(0x2a2)][_0x4b94aa(0x2ad)][_0x4b94aa(0x143)]['DrawEquipData'][_0x4b94aa(0x2bb)](this);return;}}else return VisuMZ[_0x155645(0x2a2)][_0x155645(0x2ad)][_0x155645(0x143)]['ElementWeapon'];}else return this[_0x155645(0x139)][_0x155645(0x186)][_0x155645(0x529)]===0x0?VisuMZ['ItemsEquipsCore'][_0x155645(0x2ad)][_0x155645(0x143)]['ElementNone']:$dataSystem[_0x155645(0xe1)][this[_0x155645(0x139)]['damage'][_0x155645(0x529)]];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x3a1)]=function(_0x49b211,_0x1518cb,_0x27fee5){const _0x1f393e=_0x263456,_0x1ef537=this[_0x1f393e(0x320)]();this[_0x1f393e(0x3b7)](_0x1ef537,_0x49b211,_0x1518cb,_0x27fee5,!![]),this[_0x1f393e(0x331)]();const _0x2c277d=this[_0x1f393e(0x4c5)](),_0x7e19df=ColorManager[_0x1f393e(0x485)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x1f393e(0x139)][_0x1f393e(0x186)][_0x1f393e(0x292)]]);return this[_0x1f393e(0x3f5)](_0x7e19df),this[_0x1f393e(0x3b7)](_0x2c277d,_0x49b211,_0x1518cb,_0x27fee5,![],_0x1f393e(0x2ec)),this[_0x1f393e(0x47a)](_0x49b211,_0x1518cb,_0x27fee5),this[_0x1f393e(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x320)]=function(){const _0x5c118b=_0x263456;return Imported[_0x5c118b(0x314)]&&DataManager[_0x5c118b(0x3e0)](this[_0x5c118b(0x139)])!==_0x5c118b(0x2a1)?this[_0x5c118b(0x239)]():this[_0x5c118b(0x212)]();},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x212)]=function(){const _0x169a30=_0x263456,_0x1e5594=VisuMZ['ItemsEquipsCore'][_0x169a30(0x2ad)]['StatusWindow'],_0x49d1fb=_0x169a30(0xd8)[_0x169a30(0x48a)](this[_0x169a30(0x139)][_0x169a30(0x186)]['type']),_0x49ace1=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0x169a30(0x139)][_0x169a30(0x186)][_0x169a30(0x292)]];return _0x1e5594[_0x49d1fb][_0x169a30(0x48a)](_0x49ace1);},Window_ShopStatus[_0x263456(0x26e)]['setupItemDamageTempActors']=function(){const _0x2d8b88=_0x263456,_0x29a4b2=$gameActors[_0x2d8b88(0x264)](0x1);this['_tempActorA']=JsonEx[_0x2d8b88(0x46a)](_0x29a4b2),this['_tempActorB']=JsonEx['makeDeepCopy'](_0x29a4b2);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x4c5)]=function(){const _0xbc79af=_0x263456,_0x2dc610=_0xbc79af(0x34e);if(this[_0xbc79af(0x318)][_0x2dc610])return this['_customItemInfo'][_0x2dc610];if(Imported['VisuMZ_1_BattleCore']&&DataManager[_0xbc79af(0x3e0)](this[_0xbc79af(0x139)])!==_0xbc79af(0x2a1))return this['getItemDamageAmountTextBattleCore']();else{if(_0xbc79af(0x193)!=='BDQEh')return this['getItemDamageAmountTextOriginal']();else{function _0x3639a6(){const _0x84dc25=_0xbc79af;return _0x56651f['ItemsEquipsCore'][_0x84dc25(0x2ad)][_0x84dc25(0x143)][_0x84dc25(0x19c)];}}}},Window_ShopStatus[_0x263456(0x26e)]['getItemDamageAmountTextOriginal']=function(){const _0x59440b=_0x263456;window['a']=this[_0x59440b(0x1ab)],window['b']=this[_0x59440b(0x421)],this[_0x59440b(0x1ab)]['setShopStatusWindowMode'](!![]),this[_0x59440b(0x421)]['setShopStatusWindowMode']([0x3,0x4][_0x59440b(0x3ee)](this[_0x59440b(0x139)]['damage']['type']));let _0x4410c7=this[_0x59440b(0x139)][_0x59440b(0x186)][_0x59440b(0x3ff)];try{const _0x1cb06e=Math[_0x59440b(0x4df)](eval(_0x4410c7),0x0)/window['a'][_0x59440b(0x3fd)];return this[_0x59440b(0x25c)](),isNaN(_0x1cb06e)?'?????':_0x59440b(0x4f9)[_0x59440b(0x48a)](Math[_0x59440b(0x2de)](_0x1cb06e*0x64));}catch(_0x1d1222){if($gameTemp[_0x59440b(0x508)]()){if(_0x59440b(0x334)!==_0x59440b(0x334)){function _0x51bbb6(){const _0x27e258=_0x59440b;if(_0x59c8d5[_0x27e258(0x430)]&&_0x1d2c10[_0x27e258(0x4da)]!==_0xfd65ba)return _0x180883['uiHelpPosition'];else{if(this[_0x27e258(0x2f5)]())return this[_0x27e258(0x30b)]()[_0x27e258(0x152)](/LOWER/i);else _0x467a46[_0x27e258(0x26e)][_0x27e258(0x22e)][_0x27e258(0x2bb)](this);}}}else console[_0x59440b(0x41b)](_0x59440b(0x179)[_0x59440b(0x48a)](this[_0x59440b(0x139)][_0x59440b(0x49e)])),console[_0x59440b(0x41b)](_0x1d1222);}return this[_0x59440b(0x25c)](),_0x59440b(0x40e);}},Window_ShopStatus[_0x263456(0x26e)]['revertGlobalNamespaceVariables']=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x48e)]=function(_0x5e1dc2,_0x34c52d,_0x116880){const _0xdebeef=_0x263456;if(!this[_0xdebeef(0x2a6)]())return _0x34c52d;if(this[_0xdebeef(0x490)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this['lineHeight']();if(this['drawItemEffectsMpRecovery'](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0x487)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0x43b)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0x388)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0x2d0)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0x2fc)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();if(this[_0xdebeef(0xf9)](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this['lineHeight']();if(this['drawItemEffectsRemovedStatesBuffs'](_0x5e1dc2,_0x34c52d,_0x116880))_0x34c52d+=this[_0xdebeef(0x2f3)]();return this['resetFontSettings'](),_0x34c52d;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x2a6)]=function(){const _0xddb836=_0x263456;let _0x5a800f=![];this[_0xddb836(0x401)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};for(const _0x20aae8 of this[_0xddb836(0x139)][_0xddb836(0x11b)]){if(_0xddb836(0x452)!=='qrxXM')switch(_0x20aae8[_0xddb836(0x4f3)]){case Game_Action['EFFECT_RECOVER_HP']:this['_itemData'][_0xddb836(0x324)]+=_0x20aae8[_0xddb836(0x51b)],this[_0xddb836(0x401)][_0xddb836(0x332)]+=_0x20aae8[_0xddb836(0x14c)],_0x5a800f=!![];break;case Game_Action[_0xddb836(0x200)]:this['_itemData']['rateMP']+=_0x20aae8['value1'],this['_itemData'][_0xddb836(0x4b1)]+=_0x20aae8[_0xddb836(0x14c)],_0x5a800f=!![];break;case Game_Action[_0xddb836(0x2d8)]:this[_0xddb836(0x401)][_0xddb836(0x49f)]+=_0x20aae8[_0xddb836(0x51b)],_0x5a800f=!![];break;case Game_Action[_0xddb836(0x471)]:this[_0xddb836(0x401)][_0xddb836(0x4c2)][_0xddb836(0x4ac)](_0x20aae8[_0xddb836(0x2af)]),_0x5a800f=!![];break;case Game_Action[_0xddb836(0x2b0)]:this[_0xddb836(0x401)][_0xddb836(0x3af)][_0xddb836(0x4ac)](_0x20aae8[_0xddb836(0x2af)]),this['_itemData'][_0xddb836(0x226)]=!![],_0x5a800f=!![];break;case Game_Action[_0xddb836(0x21f)]:this['_itemData']['changeBuff'][_0x20aae8[_0xddb836(0x2af)]]+=0x1,_0x5a800f=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this[_0xddb836(0x401)][_0xddb836(0x27e)][_0x20aae8['dataId']]-=0x1,_0x5a800f=!![];break;case Game_Action[_0xddb836(0x431)]:this[_0xddb836(0x401)][_0xddb836(0x50e)]['push'](_0x20aae8['dataId']),this[_0xddb836(0x401)][_0xddb836(0x226)]=!![],_0x5a800f=!![];break;case Game_Action[_0xddb836(0x12b)]:this['_itemData'][_0xddb836(0x42d)]['push'](_0x20aae8['dataId']),this[_0xddb836(0x401)]['removeStateBuffChanges']=!![],_0x5a800f=!![];break;}else{function _0x54351a(){const _0x13cc71=_0xddb836;return _0x2aa7c7[_0x13cc71(0x2a2)]['Settings'][_0x13cc71(0x143)][_0x13cc71(0x51a)];}}}if(this['_itemData'][_0xddb836(0x4c2)][_0xddb836(0x25d)]>0x0)this[_0xddb836(0x401)][_0xddb836(0x376)]=!![];for(let _0x4f6c40=0x0;_0x4f6c40<this[_0xddb836(0x401)][_0xddb836(0x27e)]['length'];_0x4f6c40++){if(this[_0xddb836(0x401)][_0xddb836(0x27e)][_0x4f6c40]!==0x0)this[_0xddb836(0x401)][_0xddb836(0x376)]=!![];}if(this[_0xddb836(0x139)]['tpGain']!==0x0){if(_0xddb836(0x467)!==_0xddb836(0x467)){function _0x3c4f86(){const _0x2437d1=_0xddb836,_0x1eb68f=this['itemLineRect'](_0x325de2),_0x296102=this['textSizeEx'](_0xdf64f1)[_0x2437d1(0x528)];return _0x296102<=_0x1eb68f[_0x2437d1(0x528)]?_0x2437d1(0x3ef):_0x2437d1(0x1da);}}else this[_0xddb836(0x401)]['selfTP']=this[_0xddb836(0x139)][_0xddb836(0x50d)],_0x5a800f=!![];}const _0x312882=[_0xddb836(0x1cc),_0xddb836(0x462),_0xddb836(0x206),_0xddb836(0x4e7),_0xddb836(0x46e),_0xddb836(0x510),'USER\x20TP\x20GAIN','ADDED\x20EFFECTS',_0xddb836(0x23c)];for(const _0x4d1734 of _0x312882){if('TkeIy'===_0xddb836(0xf2)){function _0x2d33f4(){const _0x380509=_0xddb836;this[_0x380509(0x12d)][_0x380509(0x3d4)](this[_0x380509(0x12d)][_0x380509(0x158)](_0xe08e01),0x1);}}else{if(this[_0xddb836(0x318)][_0x4d1734]){if(_0xddb836(0x459)===_0xddb836(0x365)){function _0x5d8f21(){const _0x2c4898=_0xddb836;return _0xf56ed6['ItemsEquipsCore']['Settings']['EquipScene'][_0x2c4898(0x442)];}}else{_0x5a800f=!![];break;}}}}return _0x5a800f;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x490)]=function(_0x52dd78,_0xe57778,_0x297a5f){const _0x364355=_0x263456,_0x504f5e=_0x364355(0x1cc);if(this[_0x364355(0x401)][_0x364355(0x324)]<=0x0&&this[_0x364355(0x401)][_0x364355(0x332)]<=0x0&&!this[_0x364355(0x318)][_0x504f5e])return![];const _0x2509f3=this['getItemEffectsHpRecoveryLabel']();this[_0x364355(0x3b7)](_0x2509f3,_0x52dd78,_0xe57778,_0x297a5f,!![]);const _0xef1dc7=this[_0x364355(0x289)]();return this['changeTextColor'](ColorManager[_0x364355(0x485)](0x1)),this['drawItemKeyData'](_0xef1dc7,_0x52dd78,_0xe57778,_0x297a5f,![],_0x364355(0x2ec)),this[_0x364355(0x47a)](_0x52dd78,_0xe57778,_0x297a5f),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x263456(0x276)]=function(){const _0xf084a3=_0x263456,_0x560dbd=VisuMZ[_0xf084a3(0x2a2)][_0xf084a3(0x2ad)][_0xf084a3(0x143)][_0xf084a3(0x49c)];return _0x560dbd[_0xf084a3(0x48a)](TextManager['hp']);},Window_ShopStatus[_0x263456(0x26e)]['getItemEffectsHpRecoveryText']=function(){const _0x280546=_0x263456,_0x3751c9=_0x280546(0x1cc);if(this[_0x280546(0x318)][_0x3751c9])return this[_0x280546(0x318)][_0x3751c9];let _0x2791aa='';if(this[_0x280546(0x401)][_0x280546(0x324)]>0x0)_0x2791aa+=_0x280546(0xc7)['format'](Math[_0x280546(0x372)](this['_itemData'][_0x280546(0x324)]*0x64));if(this[_0x280546(0x401)][_0x280546(0x324)]>0x0&&this[_0x280546(0x401)][_0x280546(0x332)]>0x0)_0x2791aa+='\x20';if(this['_itemData'][_0x280546(0x332)]>0x0)_0x2791aa+='+%1'[_0x280546(0x48a)](this['_itemData'][_0x280546(0x332)]);return _0x2791aa;},Window_ShopStatus[_0x263456(0x26e)]['drawItemEffectsMpRecovery']=function(_0x507aa9,_0x18352e,_0x40a708){const _0x553503=_0x263456,_0x44f816='MP\x20RECOVERY';if(this['_itemData'][_0x553503(0x515)]<=0x0&&this[_0x553503(0x401)][_0x553503(0x4b1)]<=0x0&&!this[_0x553503(0x318)][_0x44f816])return![];const _0x321273=this[_0x553503(0x190)]();this[_0x553503(0x3b7)](_0x321273,_0x507aa9,_0x18352e,_0x40a708,!![]);const _0x170218=this[_0x553503(0x2dd)]();return this[_0x553503(0x3f5)](ColorManager[_0x553503(0x485)](0x3)),this[_0x553503(0x3b7)](_0x170218,_0x507aa9,_0x18352e,_0x40a708,![],'right'),this['drawItemDarkRect'](_0x507aa9,_0x18352e,_0x40a708),this[_0x553503(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x190)]=function(){const _0x328788=_0x263456,_0x3ce4ba=VisuMZ[_0x328788(0x2a2)][_0x328788(0x2ad)][_0x328788(0x143)]['LabelRecoverMP'];return _0x3ce4ba[_0x328788(0x48a)](TextManager['mp']);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x2dd)]=function(){const _0x1eabbf=_0x263456,_0x27d4dc=_0x1eabbf(0x462);if(this[_0x1eabbf(0x318)][_0x27d4dc])return this[_0x1eabbf(0x318)][_0x27d4dc];let _0x242750='';if(this[_0x1eabbf(0x401)][_0x1eabbf(0x515)]>0x0)_0x242750+=_0x1eabbf(0xc7)['format'](Math[_0x1eabbf(0x372)](this['_itemData'][_0x1eabbf(0x515)]*0x64));if(this[_0x1eabbf(0x401)][_0x1eabbf(0x515)]>0x0&&this[_0x1eabbf(0x401)][_0x1eabbf(0x4b1)]>0x0)_0x242750+='\x20';if(this[_0x1eabbf(0x401)][_0x1eabbf(0x4b1)]>0x0)_0x242750+=_0x1eabbf(0x445)['format'](this['_itemData'][_0x1eabbf(0x4b1)]);return _0x242750;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x487)]=function(_0x1ebe89,_0x163ad6,_0x49acc6){const _0x3a968d=_0x263456,_0x2ed6a1='TP\x20RECOVERY';if(this[_0x3a968d(0x401)][_0x3a968d(0x49f)]<=0x0&&!this[_0x3a968d(0x318)][_0x2ed6a1])return![];const _0x48de4a=this[_0x3a968d(0x455)]();this[_0x3a968d(0x3b7)](_0x48de4a,_0x1ebe89,_0x163ad6,_0x49acc6,!![]);const _0x1cde8d=this['getItemEffectsTpRecoveryText']();return this[_0x3a968d(0x3f5)](ColorManager[_0x3a968d(0x20b)]()),this[_0x3a968d(0x3b7)](_0x1cde8d,_0x1ebe89,_0x163ad6,_0x49acc6,![],_0x3a968d(0x2ec)),this[_0x3a968d(0x47a)](_0x1ebe89,_0x163ad6,_0x49acc6),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x455)]=function(){const _0x44e985=_0x263456,_0x5c12b1=VisuMZ[_0x44e985(0x2a2)]['Settings'][_0x44e985(0x143)][_0x44e985(0x124)];return _0x5c12b1[_0x44e985(0x48a)](TextManager['tp']);},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x1f8)]=function(){const _0x755299=_0x263456,_0x886e05=_0x755299(0x206);if(this['_customItemInfo'][_0x886e05])return this[_0x755299(0x318)][_0x886e05];let _0x4e22cc='';return _0x4e22cc+=_0x755299(0x445)[_0x755299(0x48a)](this[_0x755299(0x401)]['gainTP']),_0x4e22cc;},Window_ShopStatus['prototype'][_0x263456(0x2fc)]=function(_0x44fdd3,_0x5d7107,_0x42ce3f){const _0x4c0d39=_0x263456,_0x188513=_0x4c0d39(0x15b);if(this['_itemData'][_0x4c0d39(0x1d5)]===0x0&&!this['_customItemInfo'][_0x188513])return![];const _0x55aeee=this[_0x4c0d39(0x51c)]();this[_0x4c0d39(0x3b7)](_0x55aeee,_0x44fdd3,_0x5d7107,_0x42ce3f,!![]);const _0xe5c9a1=this['getItemEffectsSelfTpGainText']();return this[_0x4c0d39(0x401)][_0x4c0d39(0x1d5)]>0x0?this['changeTextColor'](ColorManager[_0x4c0d39(0x20b)]()):this['changeTextColor'](ColorManager[_0x4c0d39(0x348)]()),this['drawItemKeyData'](_0xe5c9a1,_0x44fdd3,_0x5d7107,_0x42ce3f,![],_0x4c0d39(0x2ec)),this['drawItemDarkRect'](_0x44fdd3,_0x5d7107,_0x42ce3f),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x263456(0x51c)]=function(){const _0x292142=_0x263456,_0x98fba7=VisuMZ[_0x292142(0x2a2)]['Settings']['StatusWindow'][_0x292142(0x170)];return _0x98fba7['format'](TextManager['tp']);},Window_ShopStatus[_0x263456(0x26e)]['getItemEffectsSelfTpGainText']=function(){const _0x22ea94=_0x263456,_0x380158=_0x22ea94(0x15b);if(this[_0x22ea94(0x318)][_0x380158])return this['_customItemInfo'][_0x380158];let _0x406880='';if(this[_0x22ea94(0x401)][_0x22ea94(0x1d5)]>0x0)_0x406880+=_0x22ea94(0x445)[_0x22ea94(0x48a)](this['_itemData'][_0x22ea94(0x1d5)]);else{if(_0x22ea94(0x1ed)!==_0x22ea94(0x1ed)){function _0x1fcfff(){const _0x1cba99=_0x22ea94,_0x275463=_0x40f2aa['parse']('['+_0x4683f9['$1'][_0x1cba99(0x152)](/\d+/g)+']');for(const _0x3ebb6c of _0x275463){if(!_0x34d76c[_0x1cba99(0x357)](_0x3ebb6c))return![];}return!![];}}else _0x406880+='%1'['format'](this[_0x22ea94(0x401)][_0x22ea94(0x1d5)]);}return _0x406880;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x43b)]=function(_0x301009,_0x3ad67c,_0x562291){const _0x592ea7=_0x263456,_0xde448e=_0x592ea7(0x4e7);if(this[_0x592ea7(0x401)][_0x592ea7(0x324)]>=0x0&&this[_0x592ea7(0x401)][_0x592ea7(0x332)]>=0x0&&!this['_customItemInfo'][_0xde448e])return![];const _0x162298=this['getItemEffectsHpDamageLabel']();this[_0x592ea7(0x3b7)](_0x162298,_0x301009,_0x3ad67c,_0x562291,!![]);const _0x2f2d89=this['getItemEffectsHpDamageText']();return this['changeTextColor'](ColorManager[_0x592ea7(0x485)](0x0)),this['drawItemKeyData'](_0x2f2d89,_0x301009,_0x3ad67c,_0x562291,![],_0x592ea7(0x2ec)),this[_0x592ea7(0x47a)](_0x301009,_0x3ad67c,_0x562291),this[_0x592ea7(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x274)]=function(){const _0x38f4e6=_0x263456,_0xe81ef3=VisuMZ['ItemsEquipsCore']['Settings'][_0x38f4e6(0x143)][_0x38f4e6(0x4fa)];return _0xe81ef3[_0x38f4e6(0x48a)](TextManager['hp']);},Window_ShopStatus['prototype'][_0x263456(0x3d0)]=function(){const _0x295ed9=_0x263456,_0x4e7633=_0x295ed9(0x4e7);if(this[_0x295ed9(0x318)][_0x4e7633])return this['_customItemInfo'][_0x4e7633];let _0x301d3b='';if(this[_0x295ed9(0x401)][_0x295ed9(0x324)]<0x0)_0x301d3b+=_0x295ed9(0x4f9)['format'](Math[_0x295ed9(0x372)](this[_0x295ed9(0x401)][_0x295ed9(0x324)]*0x64));if(this[_0x295ed9(0x401)]['rateHP']<0x0&&this[_0x295ed9(0x401)]['flatHP']<0x0)_0x301d3b+='\x20';if(this[_0x295ed9(0x401)]['flatHP']<0x0)_0x301d3b+='%1'[_0x295ed9(0x48a)](this[_0x295ed9(0x401)][_0x295ed9(0x332)]);return _0x301d3b;},Window_ShopStatus[_0x263456(0x26e)]['drawItemEffectsMpDamage']=function(_0x1e3c64,_0x2a3d04,_0x9463e6){const _0xba2653=_0x263456,_0x2432c6=_0xba2653(0x46e);if(this[_0xba2653(0x401)][_0xba2653(0x515)]>=0x0&&this[_0xba2653(0x401)][_0xba2653(0x4b1)]>=0x0&&!this[_0xba2653(0x318)][_0x2432c6])return![];const _0x48b3d7=this[_0xba2653(0x3a5)]();this['drawItemKeyData'](_0x48b3d7,_0x1e3c64,_0x2a3d04,_0x9463e6,!![]);const _0x4e96d3=this[_0xba2653(0x1c2)]();return this[_0xba2653(0x3f5)](ColorManager['damageColor'](0x2)),this[_0xba2653(0x3b7)](_0x4e96d3,_0x1e3c64,_0x2a3d04,_0x9463e6,![],'right'),this[_0xba2653(0x47a)](_0x1e3c64,_0x2a3d04,_0x9463e6),this[_0xba2653(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x3a5)]=function(){const _0x5aacda=_0x263456,_0x1e07e4=VisuMZ[_0x5aacda(0x2a2)][_0x5aacda(0x2ad)][_0x5aacda(0x143)][_0x5aacda(0x1e7)];return _0x1e07e4[_0x5aacda(0x48a)](TextManager['mp']);},Window_ShopStatus[_0x263456(0x26e)]['getItemEffectsMpDamageText']=function(){const _0x1d3097=_0x263456,_0x452a02='MP\x20DAMAGE';if(this['_customItemInfo'][_0x452a02])return this[_0x1d3097(0x318)][_0x452a02];let _0x321fe3='';if(this[_0x1d3097(0x401)]['rateMP']<0x0)_0x321fe3+=_0x1d3097(0x4f9)['format'](Math[_0x1d3097(0x372)](this[_0x1d3097(0x401)][_0x1d3097(0x515)]*0x64));if(this[_0x1d3097(0x401)][_0x1d3097(0x515)]<0x0&&this[_0x1d3097(0x401)][_0x1d3097(0x4b1)]<0x0)_0x321fe3+='\x20';if(this[_0x1d3097(0x401)][_0x1d3097(0x4b1)]<0x0)_0x321fe3+='%1'[_0x1d3097(0x48a)](this['_itemData'][_0x1d3097(0x4b1)]);return _0x321fe3;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x2d0)]=function(_0x4b4832,_0x5a68b5,_0x283b36){const _0x5ac2a1=_0x263456,_0x2e05e9=_0x5ac2a1(0x510);if(this[_0x5ac2a1(0x401)]['gainTP']>=0x0&&!this[_0x5ac2a1(0x318)][_0x2e05e9])return![];const _0x3e0685=this[_0x5ac2a1(0x258)]();this[_0x5ac2a1(0x3b7)](_0x3e0685,_0x4b4832,_0x5a68b5,_0x283b36,!![]);const _0x3a08c1=this['getItemEffectsTpDamageText']();return this[_0x5ac2a1(0x3f5)](ColorManager[_0x5ac2a1(0x348)]()),this['drawItemKeyData'](_0x3a08c1,_0x4b4832,_0x5a68b5,_0x283b36,![],_0x5ac2a1(0x2ec)),this[_0x5ac2a1(0x47a)](_0x4b4832,_0x5a68b5,_0x283b36),this[_0x5ac2a1(0x383)](),!![];},Window_ShopStatus['prototype'][_0x263456(0x258)]=function(){const _0x5bde37=_0x263456,_0x59ad7f=VisuMZ['ItemsEquipsCore'][_0x5bde37(0x2ad)][_0x5bde37(0x143)][_0x5bde37(0x11d)];return _0x59ad7f[_0x5bde37(0x48a)](TextManager['tp']);},Window_ShopStatus[_0x263456(0x26e)]['getItemEffectsTpDamageText']=function(){const _0x586210=_0x263456,_0x42adcf=_0x586210(0x510);if(this['_customItemInfo'][_0x42adcf])return this[_0x586210(0x318)][_0x42adcf];let _0xb453c3='';return _0xb453c3+='%1'[_0x586210(0x48a)](this[_0x586210(0x401)][_0x586210(0x49f)]),_0xb453c3;},Window_ShopStatus[_0x263456(0x26e)]['drawItemEffectsAddedStatesBuffs']=function(_0x569272,_0x1c13a9,_0x5590e1){const _0x146966=_0x263456,_0x4f79c7=_0x146966(0x3e9);if(!this['_itemData'][_0x146966(0x376)]&&!this[_0x146966(0x318)][_0x4f79c7])return![];const _0x77383d=this[_0x146966(0xf4)]();this['drawItemKeyData'](_0x77383d,_0x569272,_0x1c13a9,_0x5590e1,!![]);const _0x428b2e=this['getItemEffectsAddedStatesBuffsText']();return this[_0x146966(0x3b7)](_0x428b2e,_0x569272,_0x1c13a9,_0x5590e1,![],_0x146966(0x2ec)),this[_0x146966(0x47a)](_0x569272,_0x1c13a9,_0x5590e1),this[_0x146966(0x383)](),!![];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0xf4)]=function(){const _0x30efe4=_0x263456;return VisuMZ[_0x30efe4(0x2a2)]['Settings'][_0x30efe4(0x143)]['LabelApply'];},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x43d)]=function(){const _0xbbecdd=_0x263456,_0x13d285='ADDED\x20EFFECTS';if(this[_0xbbecdd(0x318)][_0x13d285])return this[_0xbbecdd(0x318)][_0x13d285];let _0x2d9d0a='',_0x19d991=0x0;const _0x3f2e4c=0x8;for(const _0x3edc60 of this[_0xbbecdd(0x401)][_0xbbecdd(0x4c2)]){const _0x5f1659=$dataStates[_0x3edc60];if(_0x5f1659&&_0x5f1659[_0xbbecdd(0x4f7)]>0x0){_0x2d9d0a+=_0xbbecdd(0x285)[_0xbbecdd(0x48a)](_0x5f1659[_0xbbecdd(0x4f7)]),_0x19d991++;if(_0x19d991>=_0x3f2e4c)return _0x2d9d0a;}}for(let _0x19beb5=0x0;_0x19beb5<this[_0xbbecdd(0x401)]['changeBuff'][_0xbbecdd(0x25d)];_0x19beb5++){if(_0xbbecdd(0x2a0)===_0xbbecdd(0x273)){function _0xe2baa6(){const _0xe67807=_0xbbecdd,_0x2b1097=_0x5e046b['x']+_0x4fe0b1[_0xe67807(0x372)]((_0x7c051d[_0xe67807(0x528)]-_0xba203a)/0x2);this[_0xe67807(0xe5)](_0x3a9a60,_0x2b1097,_0xcaf341['y'],_0x513827);}}else{const _0x4df870=this[_0xbbecdd(0x401)]['changeBuff'][_0x19beb5],_0x50b664=Game_BattlerBase[_0xbbecdd(0x26e)][_0xbbecdd(0x37e)](_0x4df870,_0x19beb5);if(_0x50b664>0x0){_0x2d9d0a+=_0xbbecdd(0x285)[_0xbbecdd(0x48a)](_0x50b664),_0x19d991++;if(_0x19d991>=_0x3f2e4c)return _0x2d9d0a;}}}return _0x2d9d0a;},Window_ShopStatus['prototype'][_0x263456(0x47f)]=function(_0x4dd22e,_0x4840d2,_0x2b9388){const _0x1274cd=_0x263456,_0x2deb51='REMOVED\x20EFFECTS';if(!this['_itemData'][_0x1274cd(0x226)]&&!this['_customItemInfo'][_0x2deb51])return![];const _0x1c1caa=this[_0x1274cd(0x398)]();this[_0x1274cd(0x3b7)](_0x1c1caa,_0x4dd22e,_0x4840d2,_0x2b9388,!![]);const _0x548522=this['getItemEffectsRemovedStatesBuffsText']();return this['drawItemKeyData'](_0x548522,_0x4dd22e,_0x4840d2,_0x2b9388,![],_0x1274cd(0x2ec)),this[_0x1274cd(0x47a)](_0x4dd22e,_0x4840d2,_0x2b9388),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x263456(0x26e)]['getItemEffectsRemovedStatesBuffsLabel']=function(){const _0x56b2b0=_0x263456;return VisuMZ['ItemsEquipsCore'][_0x56b2b0(0x2ad)][_0x56b2b0(0x143)]['LabelRemove'];},Window_ShopStatus['prototype'][_0x263456(0x2c3)]=function(){const _0x4a2334=_0x263456,_0x496eb6=_0x4a2334(0x23c);if(this[_0x4a2334(0x318)][_0x496eb6])return this[_0x4a2334(0x318)][_0x496eb6];let _0x3b19a5='',_0x3edcef=0x0;const _0x250661=VisuMZ[_0x4a2334(0x2a2)][_0x4a2334(0x2ad)][_0x4a2334(0x143)]['MaxIcons'];for(const _0x36fffd of this[_0x4a2334(0x401)][_0x4a2334(0x3af)]){const _0x263537=$dataStates[_0x36fffd];if(_0x263537&&_0x263537[_0x4a2334(0x4f7)]>0x0){if(_0x4a2334(0x153)===_0x4a2334(0x153)){_0x3b19a5+=_0x4a2334(0x285)[_0x4a2334(0x48a)](_0x263537['iconIndex']),_0x3edcef++;if(_0x3edcef>=_0x250661)return _0x3b19a5;}else{function _0x959d65(){const _0x692fe6=_0x4a2334;_0x25551b[_0x692fe6(0x176)](_0x692fe6(0x110))&&!_0x2ec187[_0x692fe6(0x17b)](_0x692fe6(0x1c8))&&this[_0x692fe6(0x14f)](_0x22f6d0['isTriggered'](_0x692fe6(0x110))),_0x3afe3a['isRepeated'](_0x692fe6(0x31e))&&!_0x26cd47[_0x692fe6(0x17b)](_0x692fe6(0x1c8))&&this['cursorLeft'](_0x99c001[_0x692fe6(0x257)](_0x692fe6(0x31e)));}}}}for(let _0x193345=0x0;_0x193345<this[_0x4a2334(0x401)][_0x4a2334(0x50e)][_0x4a2334(0x25d)];_0x193345++){if('kohYe'!==_0x4a2334(0x345)){const _0x1edf8b=Game_BattlerBase[_0x4a2334(0x26e)][_0x4a2334(0x37e)](0x1,_0x193345);if(_0x1edf8b>0x0){_0x3b19a5+=_0x4a2334(0x285)['format'](_0x1edf8b),_0x3edcef++;if(_0x3edcef>=_0x250661)return _0x3b19a5;}}else{function _0x27f96a(){return this['helpWindowRectItemsEquipsCore']();}}}for(let _0x3a5c10=0x0;_0x3a5c10<this[_0x4a2334(0x401)]['removeDebuff'][_0x4a2334(0x25d)];_0x3a5c10++){if(_0x4a2334(0x14e)!==_0x4a2334(0x14e)){function _0x145a32(){const _0x565a75=_0x4a2334;this[_0x565a75(0x42a)]();}}else{const _0x10b258=Game_BattlerBase[_0x4a2334(0x26e)][_0x4a2334(0x37e)](-0x1,_0x3a5c10);if(_0x10b258>0x0){_0x3b19a5+=_0x4a2334(0x285)['format'](_0x10b258),_0x3edcef++;if(_0x3edcef>=_0x250661)return _0x3b19a5;}}}return _0x3b19a5;},Window_ShopStatus[_0x263456(0x26e)][_0x263456(0x369)]=function(_0x50561d,_0x2b3225,_0x312931){const _0x1b5743=_0x263456;if(this[_0x1b5743(0x139)][_0x1b5743(0x38d)][_0x1b5743(0x152)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){if(_0x1b5743(0x4f5)!==_0x1b5743(0x4cc)){const _0x3e83b9=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x52bc1c of _0x3e83b9){if('ZkdXQ'===_0x1b5743(0x451)){function _0x1a9cee(){const _0x356f26=_0x1b5743;return _0xe4b0db[_0x356f26(0x4cf)][_0x356f26(0x424)]===_0x5233c5?_0x53b740[_0x356f26(0x4cf)][_0x356f26(0x2ff)]>0x0:!![];}}else{if(_0x52bc1c[_0x1b5743(0x152)](/(.*):[ ](.*)/i)){const _0x191b5f=String(RegExp['$1'])[_0x1b5743(0x1ce)](),_0x395241=String(RegExp['$2'])[_0x1b5743(0x1ce)]();this[_0x1b5743(0x323)](_0x191b5f,_0x395241,_0x50561d,_0x2b3225,_0x312931),_0x2b3225+=this[_0x1b5743(0x2f3)]();}}}}else{function _0xf1b37a(){const _0x10ecc8=_0x1b5743;_0x4fe769=_0x10ecc8(0x111)[_0x10ecc8(0x48a)](_0x4d2e6b['id']);}}}return this[_0x1b5743(0x383)](),_0x2b3225;},Window_ShopStatus['prototype'][_0x263456(0x323)]=function(_0x3efa45,_0x101fb9,_0x25d2f5,_0x156fbc,_0x46f045){const _0x35a486=_0x263456;this['drawItemKeyData'](_0x3efa45,_0x25d2f5,_0x156fbc,_0x46f045,!![]),this[_0x35a486(0x3b7)](_0x101fb9,_0x25d2f5,_0x156fbc,_0x46f045,![],_0x35a486(0x2ec)),this[_0x35a486(0x47a)](_0x25d2f5,_0x156fbc,_0x46f045),this[_0x35a486(0x383)]();};