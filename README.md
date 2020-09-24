# Lua Node Resolver

Adds a searcher to allow Lua to import Lua files from relative paths and `node_modules`. Similar to how ES6 imports work.

**How to use**

```lua
-- C:/project/tools/main.lua

require("./foo")  --> C:/project/tools/foo.lua
require("../foo") --> C:/project/foo.lua
require("foo")    --> node_modules/module/foo.lua
                  --> node_modules/module/module.rockspec
```

**How to install**

```lua
require("node-resolver") -- must point to node-resolver.lua at runtime
```
