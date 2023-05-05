package com.statsproject;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.os.Build;
import android.provider.Settings;
import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import com.facebook.react.bridge.*;

import java.util.List;

public class RNAppInfoModule extends ReactContextBaseJavaModule {

    public RNAppInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "RNAppInfo";
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @ReactMethod
    public void getCurrentApp(Promise promise) {
        UsageStatsManager usm = (UsageStatsManager) getCurrentActivity().getSystemService(Context.USAGE_STATS_SERVICE);
        long time = System.currentTimeMillis();

        // Get usage stats for the last 10 seconds
        List<UsageStats> appList = usm.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, time - 1000 * 10, time);

        // Find the most recent usage stats for the current app
        UsageStats mostRecentApp = null;
        if (appList != null) {
            for (UsageStats app : appList) {
                if (mostRecentApp == null || app.getLastTimeUsed() > mostRecentApp.getLastTimeUsed()) {
                    mostRecentApp = app;
                }
            }
        }

        if (mostRecentApp != null) {
            promise.resolve(mostRecentApp.getPackageName());
        } else {
            // If we can't find any usage stats for the current app, fallback to using the current foreground app
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                String packageName = Settings.Secure.getString(getReactApplicationContext().getContentResolver(), "foreground_app");
                promise.resolve(packageName);
            } else {
                promise.reject("Unsupported API level");
            }
        }
    }
}
