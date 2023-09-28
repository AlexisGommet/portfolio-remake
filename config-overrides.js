module.exports = function override(config) {
        config.output = {
            ...config.output, // copy all settings
            assetModuleFilename: 'static/media/[name][ext]',
        };
        return config;
    };