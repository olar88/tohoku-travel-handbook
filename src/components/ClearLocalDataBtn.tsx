import { RotateCcw } from "lucide-react";
import { useState, useRef } from "react";
import { showToast } from "../lib/showToast";

interface ClearLocalDataBtnProps {
  currentDay: number;
  onClearToday?: () => void;
}

/* 清除晚間確認清單按鈕 */
export function ClearLocalDataBtn({
  currentDay,
  onClearToday,
}: ClearLocalDataBtnProps) {
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<number | null>(null);

  /** 清除當日確認清單 */
  const handleClearToday = () => {
    localStorage.removeItem(`checklist-day-${currentDay}`);
    if (onClearToday) {
      onClearToday();
    }
  };

  /** 清除所有每日確認清單 */
  const handleClearAllChecklists = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("checklist-day-")) {
        localStorage.removeItem(key);
      }
    });
  };

  /** 清除所有 localStorage */
  const handleClearAllStorage = () => {
    localStorage.clear();
  };

  /** 處理按鈕點擊 */
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // 清除之前的 timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // 根據點擊次數執行不同操作
    if (newCount === 1) {
      // 第一次點擊：清除當日
      handleClearToday();
      showToast("✅ 已清除當日確認清單！再按一次清除所有每日確認", "success");
    } else if (newCount === 2) {
      // 第二次點擊：清除所有每日確認
      handleClearAllChecklists();
      showToast("🗑️ 已清除所有每日確認！再按一次清除所有暫存", "warning");
    } else if (newCount === 3) {
      // 第三次點擊：清除所有 localStorage
      handleClearAllStorage();
      showToast("💥 正在清除所有暫存並重新載入...", "danger");
      // 清除後重新載入頁面
      setTimeout(() => {
        window.location.reload();
      }, 500);
      return;
    }

    // 800ms 後重置點擊計數
    clickTimeoutRef.current = window.setTimeout(() => {
      setClickCount(0);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleClick}
        className="w-fit gap-2 p-1 text-sm text-gray-600 bg-[#af9792] hover:bg-[#fff6f8] rounded-full transition-all"
        title="點擊清除資料"
      >
        <RotateCcw className="w-4 h-4 text-[#f7e3de] hover:text-[#af9792]" />
      </button>
    </div>
  );
}
