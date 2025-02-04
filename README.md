# mfe-templates
A collection of patterns for micro-frontends based on different tech stacks

All the apps contain below layout:

**For Landing page:**
```markdown
+------------------------------------------------------------------------------+
|                                  HEADER                                      |
| [Home]                                                          [Checkout]   |
+------------------------------------------------------------------------------+
|                              BODY CONTAINER                                  |
| +------------------------------+ +-----------------------------------------+ |
| |                              | |                                         | |
| |         USERS PANEL          | |       RECOMMENDATIONS PANEL             | |
| |                              | |                                         | |
| |  [UserList]  [UserDetails]   | |  • Recommendation List                  | |
| |   List/Details SUB-ROUTES    | |  • Suggested Items                      | |
| |                              | |                                         | |
| +------------------------------+ +-----------------------------------------+ |
+------------------------------------------------------------------------------+
```

**For Checkout page:**
```markdown
+------------------------------------------------------------------------------+
|                                  HEADER                                      |
| [Home]                                                          [Checkout]   |
+------------------------------------------------------------------------------+
|                              BODY CONTAINER                                  |
| +----------------------------------------------------------------------+     |
| |                                                                      |     |
| |                         CHECKOUT PANEL                               |     |
| |                                                                      |     |
| |  1. Cart Items                                                       |     |
| |  2. Shipping Address                                                 |     |
| |  3. Payment Method                                                   |     |
| |  4. Confirm Order                                                    |     |
| |                                                                      |     |
| +----------------------------------------------------------------------+     |
+------------------------------------------------------------------------------+
```

**express-sse** is an express server to simulate server-sent events.