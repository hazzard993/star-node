# Lua Node Resolver

Allows Lua to import `relative paths` as well as modules from `node_modules`.

**How to install**

```sh
yarn add lua-star-node   # adds to node_modules/
```

Import `lnr.run` in Lua code before using other `require` calls.

You can use this if Lua's working directory is the same directory containing `node_modules`.

```lua
-- node_modules/
-- main.lua
require("node_modules.lua-star-node.run")
```

or, if your Lua working directory is inside a folder, use the code below adjusting the dots as needed.

```lua
-- node_modules/
-- folder/main.lua
package.path = package.path .. ";../node_modules/?.lua"
require("lua-star-node.run")
```

**How the resolution works**

```lua
-- File Path:     C:/project/tools/main.lua

require("./foo")  --> C:/project/tools/foo.lua
require("../foo") --> C:/project/foo.lua
require("foo")    --> C:/project/node_modules/module/internal/dir/foo.lua (this is discovered in a rockspec file)
```

**Examples**

```sh
yarn init -y
yarn add rxi/lurker Olivine-Labs/luassert lua-star-node
echo "require('node_modules.lua-star-node.run')" > main.lua
echo "print(require('lurker'))" >> main.lua
echo "print(require('luassert'))" >> main.lua
love --console .
```
