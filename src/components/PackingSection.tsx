import { useState } from "react";
import type { TripFlyTipProps } from "./TripFlyTip";

/** 出發前確認清單 */
export function PackinSection({ data }: TripFlyTipProps) {
  // 初始化勾選狀態
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    () => {
      try {
        const saved = localStorage.getItem("packing-checklist");
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
  );

  // 處理勾選/取消勾選
  const handleToggle = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newCheckedItems = {
      ...checkedItems,
      [key]: !checkedItems[key],
    };
    setCheckedItems(newCheckedItems);
    localStorage.setItem("packing-checklist", JSON.stringify(newCheckedItems));
  };

  // 計算完成進度
  const totalItems = data.packingList.reduce(
    (sum, category) => sum + category.items.length,
    0
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress =
    totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="packing-section">
      <div className="sticky top-0 bg-[var(--color-cream-100)]">
        <div className="flex items-center justify-between mb-4 bg-white">
          <h2 className="section-title">📜出發前確認清單</h2>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-[#5dbbda]">{checkedCount}</span> /{" "}
            {totalItems}
            <span className="ml-2 text-xs text-gray-500">({progress}%)</span>
          </div>
        </div>

        {/* 進度條 */}
        <div className="mb-6 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#5dbbda] to-[#85c9e0] h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="packing-grid">
        {data.packingList.map((category, categoryIndex) => {
          const categoryCheckedCount = category.items.filter(
            (_, itemIndex) => checkedItems[`${categoryIndex}-${itemIndex}`]
          ).length;
          const categoryTotal = category.items.length;
          const categoryComplete =
            categoryCheckedCount === categoryTotal && categoryTotal > 0;

          return (
            <div key={categoryIndex} className="packing-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.category}</h3>
                <span className="text-xs text-gray-500 ml-auto">
                  {categoryCheckedCount}/{categoryTotal}
                  {categoryComplete && (
                    <span className="ml-1 text-green-500">✓</span>
                  )}
                </span>
              </div>

              <ul className="items-list">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isChecked = checkedItems[key];

                  return (
                    <li
                      key={itemIndex}
                      className={`packing-item cursor-pointer transition-all ${
                        isChecked ? "opacity-60" : ""
                      }`}
                      onClick={() => handleToggle(categoryIndex, itemIndex)}
                    >
                      <span
                        className={`checkbox ${isChecked ? "checked" : ""}`}
                      >
                        {isChecked ? (
                          <img
                            src="/checkIcon.png"
                            alt="checked"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                        )}
                      </span>
                      <span
                        className={`item-text ${
                          isChecked ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* 完成提示 */}
      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-pulse">
          <span className="text-green-700 font-medium">
            🎉 太棒了！所有物品都準備好了，可以出發囉！
          </span>
        </div>
      )}
    </div>
  );
}
