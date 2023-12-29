var capacitorCapacitorHealthkit = (function (exports, core) {
    'use strict';

    /**
     * These Sample names define the possible query options.
     */
    exports.SampleNames = void 0;
    (function (SampleNames) {
        SampleNames["STEP_COUNT"] = "stepCount";
        SampleNames["FLIGHTS_CLIMBED"] = "flightsClimbed";
        SampleNames["APPLE_EXERCISE_TIME"] = "appleExerciseTime";
        SampleNames["ACTIVE_ENERGY_BURNED"] = "activeEnergyBurned";
        SampleNames["BASAL_ENERGY_BURNED"] = "basalEnergyBurned";
        SampleNames["DISTANCE_WALKING_RUNNING"] = "distanceWalkingRunning";
        SampleNames["DISTANCE_CYCLING"] = "distanceCycling";
        SampleNames["BLOOD_GLUCOSE"] = "bloodGlucose";
        SampleNames["SLEEP_ANALYSIS"] = "sleepAnalysis";
        SampleNames["WORKOUT_TYPE"] = "workoutType";
        SampleNames["WEIGHT"] = "weight";
        SampleNames["HEART_RATE"] = "heartRate";
    })(exports.SampleNames || (exports.SampleNames = {}));

    const CapacitorHealthkit = core.registerPlugin('CapacitorHealthkit', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorHealthkitWeb()),
    });

    /* eslint-disable @typescript-eslint/no-unused-vars */
    class CapacitorHealthkitWeb extends core.WebPlugin {
        async requestAuthorization(_authOptions) {
            throw this.unimplemented('Not implemented on web.');
        }
        async queryHKitSampleType(_queryOptions) {
            throw this.unimplemented('Not implemented on web.');
        }
        async isAvailable() {
            throw this.unimplemented('Not implemented on web.');
        }
        async multipleQueryHKitSampleType(_queryOptions) {
            throw this.unimplemented('Not implemented on web.');
        }
        async isEditionAuthorized(_queryOptions) {
            throw this.unimplemented('Not implemented on web.');
        }
        async multipleIsEditionAuthorized() {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorHealthkitWeb: CapacitorHealthkitWeb
    });

    exports.CapacitorHealthkit = CapacitorHealthkit;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
