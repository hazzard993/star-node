local directory = ...

package.preload["path"] = function()
    return require(directory .. ".path")
end

package.preload["fs_common"] = function()
    return require(directory .. ".fs_common")
end

package.preload["fs"] = function()
    return require(directory .. ".fs")
end

package.preload["fs_posix"] = function()
    return require(directory .. ".fs_posix")
end

package.preload["fs_win"] = function()
    return require(directory .. ".fs_win")
end

require(directory .. ".main")
