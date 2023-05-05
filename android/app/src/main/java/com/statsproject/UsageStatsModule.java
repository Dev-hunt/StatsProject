package com.statsproject;

import android.annotation.TargetApi;
import android.app.AppOpsManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.Calendar;
import java.util.TimeZone;
import java.util.List;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Arguments;

import java.util.ArrayList;

public class UsageStatsModule extends ReactContextBaseJavaModule {
    private static final String TAG = "UsageStatsModule";
    private static final String[] APP_USAGE_PERMISSION_PACKAGES = { "com.android.packageinstaller",
            "com.google.android.packageinstaller" };

    public UsageStatsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UsageStatsModule";
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @ReactMethod
    public void getUsageStats(Promise promise) {
        AppOpsManager appOps = (AppOpsManager) getReactApplicationContext().getSystemService(Context.APP_OPS_SERVICE);
        int mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, android.os.Process.myUid(),
                getReactApplicationContext().getPackageName());
        if (mode != AppOpsManager.MODE_ALLOWED) {
            Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(intent);
            promise.reject("Permission denied", "Please grant usage access permission to the app");
            return;
        }
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeZone(TimeZone.getDefault());
        long endTime = calendar.getTimeInMillis();
        calendar.add(Calendar.DAY_OF_MONTH, -1);
        long startTime = calendar.getTimeInMillis();

        UsageStatsHelper usageStatsHelper = new UsageStatsHelper(getReactApplicationContext());
        List<UsageStatsHelper.UsageStatsData> usageStatsDataList = usageStatsHelper.queryUsageStats(startTime, endTime);

        WritableArray usageStatsArray = new WritableNativeArray();
        for (UsageStatsHelper.UsageStatsData usageStatsData : usageStatsDataList) {
            WritableMap usageStatsMap = new WritableNativeMap();
            usageStatsMap.putString("packageName", usageStatsData.packageName);
            usageStatsMap.putDouble("timeInForeground", usageStatsData.timeInForeground / 1000.0);
            usageStatsMap.putDouble("lastTimeUsed", usageStatsData.lastTimeUsed / 1000.0);
            usageStatsArray.pushMap(usageStatsMap);
        }
        promise.resolve(usageStatsArray);
    }

    // @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    // @ReactMethod
    // public void getUsageStats(Promise promise) {
    // AppOpsManager appOps = (AppOpsManager)
    // getReactApplicationContext().getSystemService(Context.APP_OPS_SERVICE);
    // int mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS,
    // android.os.Process.myUid(), getReactApplicationContext().getPackageName());
    // if (mode != AppOpsManager.MODE_ALLOWED) {
    // Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
    // intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    // getReactApplicationContext().startActivity(intent);
    // promise.reject("Permission denied", "Please grant usage access permission to
    // the app");
    // return;
    // }
    // Calendar calendar = Calendar.getInstance();
    // calendar.setTimeZone(TimeZone.getDefault());
    // long endTime = calendar.getTimeInMillis();
    // calendar.add(Calendar.DAY_OF_MONTH, -1);
    // long startTime = calendar.getTimeInMillis();

    // UsageStatsHelper usageStatsHelper = new
    // UsageStatsHelper(getReactApplicationContext());
    // List<UsageStatsData> usageStatsDataList =
    // usageStatsHelper.queryUsageStats(startTime, endTime);

    // WritableArray usageStatsArray = new WritableNativeArray();
    // for (UsageStatsData usageStatsData : usageStatsDataList) {
    // WritableMap usageStatsMap = new WritableNativeMap();
    // try {
    // ApplicationInfo applicationInfo =
    // getReactApplicationContext().getPackageManager().getApplicationInfo(usageStatsData.packageName,
    // PackageManager.GET_META_DATA);
    // usageStatsMap.putString("packageName", applicationInfo.packageName);
    // usageStatsMap.putString("appName",
    // applicationInfo.loadLabel(getReactApplicationContext().getPackageManager()).toString());
    // usageStatsMap.putDouble("timeInForeground", usageStatsData.timeInForeground /
    // 1000.0);
    // usageStatsMap.putLong("lastTimeUsed", usageStatsData.lastTimeUsed);
    // usageStatsArray.pushMap(usageStatsMap);
    // } catch (PackageManager.NameNotFoundException e) {
    // Log.e(TAG, "Application not found: " + usageStatsData.packageName, e);
    // }
    // }
    // promise.resolve(usageStatsArray);
    // }
}
// @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
// @ReactMethod
// public void requestUsagePermission(Promise promise) {
// AppOpsManager appOps
