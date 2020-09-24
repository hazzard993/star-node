local directory = ...

package.preload["path"] = function()
    return require(directory .. ".lib.path")
end

package.preload["fs_common"] = function()
    return require(directory .. ".lib.fs_common")
end

package.preload["fs"] = function()
    return require(directory .. ".lib.fs")
end

package.preload["fs_posix"] = function()
    return require(directory .. ".lib.fs_posix")
end

package.preload["fs_win"] = function()
    return require(directory .. ".lib.fs_win")
end

require(directory .. ".lnr")
