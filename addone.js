const NormalSdk = require("@normalframework/applications-sdk");

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */
    module.exports = async ({points, sdk, update, args}) => {
        console.log(points.length)  
        for (let i = 0; i < points.length; i++) {
            await points[i].write(points[i].latestValue.value + 1)
        }
};