import { type FC, useState } from "react";
import {
  CheckSquare,
  Square,
  MapPin,
  BadgeAlert,
  BadgeCheck,
} from "lucide-react";
import { ClearLocalDataBtn } from "./ClearLocalDataBtn";
import type { DayData } from "../data/tripData";

interface NightlyCheckItem {
  id: string;
  text: string;
  priority?: "high" | "medium" | "low";
}

interface NightlyChecklistProps {
  currentDayData: DayData;
  nextDayData?: DayData;
}

const NightlyChecklist: FC<NightlyChecklistProps> = ({
  currentDayData,
  nextDayData,
}) => {
  /** 取得localStorage中的已勾選項目 */
  const getStoredItems = (day: number): { [key: string]: boolean } => {
    try {
      const saved = localStorage.getItem(`checklist-day-${day}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  };

  // Store the current day to detect changes
  const [lastDay, setLastDay] = useState(currentDayData.day);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    () => getStoredItems(currentDayData.day)
  );

  // Reset state when day changes
  if (lastDay !== currentDayData.day) {
    setLastDay(currentDayData.day);
    setCheckedItems(getStoredItems(currentDayData.day));
  }

  const handleCheck = (id: string) => {
    const newItems = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newItems);
    localStorage.setItem(
      `checklist-day-${currentDayData.day}`,
      JSON.stringify(newItems)
    );
  };

  if (!nextDayData || currentDayData.day === 8) {
    return (
      <div className="mt-6 p-4 bg-[#fceff3] rounded-lg border-2 border-dashed border-[var(--peachy)] text-center">
        <h4 className="font-bold text-gray-500 mb-2">旅途結束</h4>
        <p className="text-sm text-[var(--text-brown)]">帶著美好的回憶回家吧！</p>
        <div className="text-2xl mt-2">✨ 🌨️ ♨️ 🍜 🦊 ✨</div>
      </div>
    );
  }

  const { nightlyCheck } = currentDayData;

  // Generate default checklist items
  const defaultItems: NightlyCheckItem[] = [];
  if (nextDayData.reminder) {
    defaultItems.push({
      id: `d${currentDayData.day}-reminder`,
      text: `🍎 重要：${nextDayData.reminder}`,
      priority: "high",
    });
  }

  if (nightlyCheck?.weather) {
    defaultItems.push({
      id: `d${currentDayData.day}-weather`,
      text: `查看明天天氣 ⛅️`,
      priority: "medium",
    });
  }

  if (nightlyCheck?.transport) {
    defaultItems.push({
      id: `d${currentDayData.day}-transport`,
      text: "確認明天 🚙行車路線、🚄交通路線",
      priority: "medium",
    });
  }

  if (nightlyCheck?.reservations) {
    defaultItems.push({
      id: `d${currentDayData.day}-reservations`,
      text: "確認餐廳、景點預約狀況",
      priority: "high",
    });
  }

  if (nightlyCheck?.equipment) {
    defaultItems.push({
      id: `d${currentDayData.day}-equipment`,
      text: "準備明天所需裝備",
      priority: "medium",
    });
  }

  // Add custom items
  const allItems = [...(nightlyCheck?.customItems || []), ...defaultItems];

  // Always include these basic items
  allItems.push(
    {
      id: `d${nextDayData.day}-charge`,
      text: "手機、相機、行動充電器 ⚡️充電🔋",
      priority: "medium",
    },
    {
      id: `d${nextDayData.day}-alarm`,
      text: "設定明天鬧鐘 ⏰",
      priority: "medium",
    }
  );

  const getPriorityIcon = (priority?: string) => {
    switch (priority) {
      case "high":
        return <BadgeAlert className="w-4 h-4 text-red-500" />;
      case "medium":
        return <BadgeCheck className="w-4 h-4 text-yellow-500" />;
      default:
        return <MapPin className="w-4 h-4 text-blue-500" />;
    }
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = allItems.length;

  return (
    <div className="mt-6 pt-4 border-t-2 border-dashed border-stone-300 relative">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fcf9f2] px-3 text-sm font-bold text-stone-500 flex items-center gap-1">
        <CheckSquare className="w-4 h-4" /> 晚間確認 (for Day {nextDayData.day})
      </div>

      <div className="bg-amber-50 rounded-lg p-3 mb-4 border border-amber-200">
        <div className="text-sm font-medium text-amber-900">
          📅 明天：{nextDayData.title}
        </div>
        <div className="text-xs text-amber-700 mt-1">
          {nextDayData.highlight}
        </div>
      </div>

      <div className="space-y-2">
        {allItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border-2
              ${
                checkedItems[item.id]
                  ? "bg-[#c0f0ff70] border-[#85c9e0]"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            onClick={() => handleCheck(item.id)}
          >
            <div className="flex-shrink-0">
              {checkedItems[item.id] ? (
                <CheckSquare className="w-5 h-5 text-[#5dbbda]" />
              ) : (
                <Square className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-shrink-0">
                {getPriorityIcon(item.priority)}
              </div>
              <span
                className={`text-sm ${
                  checkedItems[item.id]
                    ? "text-gray-500 line-through"
                    : "text-gray-700"
                }`}
              >
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <span>
          {completedCount} / {totalCount} 完成
        </span>
        <div className="flex justify-end items-center gap-2">
          {completedCount === totalCount && (
            <span className="text-[#9b7169] font-medium animate-pulse">
              ✨ 完成！今晚好夢
            </span>
          )}
          <ClearLocalDataBtn
            currentDay={currentDayData.day}
            onClearToday={() => setCheckedItems({})}
          />
        </div>
      </div>
    </div>
  );
};

export default NightlyChecklist;
