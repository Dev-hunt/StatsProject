package com.statsproject;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;

import androidx.annotation.RequiresApi;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.concurrent.TimeUnit;

@SuppressLint("WrongConstant")
@TargetApi(Build.VERSION_CODES.LOLLIPOP)
@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
public class UsageStatsHelper {
    private final Context context;
    private final UsageStatsManager usageStatsManager;

    public UsageStatsHelper(Context context) {
        this.context = context;
        usageStatsManager = (UsageStatsManager) context.getSystemService(Context.USAGE_STATS_SERVICE);
    }

    public List<UsageStatsData> queryUsageStats(long startTime, long endTime) {
        final List<UsageStatsData> usageStatsDataList = new ArrayList<>();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            UsageEvents.Event currentEvent;
            List<UsageStats> stats = usageStatsManager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, startTime, endTime);
            if (stats == null) {
                return usageStatsDataList;
            }
            Handler handler = new Handler(Looper.getMainLooper());
            for (UsageStats usageStats : stats) {
                long lastTimeUsed = usageStats.getLastTimeUsed();
                if (lastTimeUsed >= startTime && lastTimeUsed <= endTime) {
                    final UsageStatsData usageStatsData = new UsageStatsData();
                    usageStatsData.packageName = usageStats.getPackageName();
                    usageStatsData.timeInForeground = usageStats.getTotalTimeInForeground();
                    usageStatsData.lastTimeUsed = usageStats.getLastTimeUsed();
                    usageStatsDataList.add(usageStatsData);
                }
            }
        }
        return usageStatsDataList;
    }

    public static class UsageStatsData {
        public String packageName;
        public long timeInForeground;
        public long lastTimeUsed;
    }
}
