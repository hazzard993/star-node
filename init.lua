local directory = ...

package.preload["path"] = function()
    return require(directory .. ".node_modules.path.path")
end

package.preload["fs_common"] = function()
    return require(directory .. ".node_modules.fs.fs_common")
end

package.preload["fs"] = function()
    return require(directory .. ".node_modules.fs.fs")
end

package.preload["fs_posix"] = function()
    return require(directory .. ".node_modules.fs.fs_posix")
end

package.preload["fs_win"] = function()
    return require(directory .. ".node_modules.fs.fs_win")
end

require(directory .. ".lnr")
