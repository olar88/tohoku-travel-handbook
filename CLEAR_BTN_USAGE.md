# ClearLocalDataBtn 使用說明

## 組件功能

`ClearLocalDataBtn` 是一個智能的三段式清除按鈕，提供漸進式的數據清除功能。

## 使用方式

### 基本引入

```tsx
import { ClearLocalDataBtn } from './components/ClearLocalDataBtn';

// 在 NightlyChecklist 或其他組件中使用
<ClearLocalDataBtn 
  currentDay={currentDay} 
  onClearToday={() => {
    // 可選：當清除當日數據時觸發的回調
    setCheckedItems({});
  }} 
/>
```

### Props 說明

| Prop | 類型 | 必填 | 說明 |
|------|------|------|------|
| `currentDay` | `number` | ✅ | 當前天數（1-8） |
| `onClearToday` | `() => void` | ❌ | 清除當日數據後的回調函數 |

## 三段式清除邏輯

### 🔄 第一次點擊 - 清除當日
- **動作**: 清除當前天的確認清單數據
- **影響**: 只刪除 `localStorage` 中 `checklist-day-{currentDay}` 的數據
- **反饋**: "✅ 已清除當日確認清單！再按一次清除所有每日確認"
- **用途**: 想重新檢查今天的確認事項

### 🗑️ 第二次點擊 - 清除所有每日確認
- **動作**: 清除所有天數的確認清單
- **影響**: 刪除所有 `checklist-day-*` 的數據（共8天）
- **反饋**: "🗑️ 已清除所有每日確認！再按一次清除所有暫存"
- **用途**: 重新開始整個旅程的確認清單

### 💥 第三次點擊 - 清除所有暫存
- **動作**: 清除所有 localStorage 數據並重新載入頁面
- **影響**: `localStorage.clear()` - 清除所有本地存儲
- **反饋**: "💥 正在清除所有暫存並重新載入..."
- **用途**: 完全重置應用狀態

## 時間控制

- 每次點擊後有 **800ms** 的窗口期
- 如果在 800ms 內再次點擊，則觸發下一級清除
- 超過 800ms 後重新計數，從第一級開始

## 視覺反饋

### 初始狀態
```
┌─────────────────────────────┐
│   🔄 重置確認清單            │
└─────────────────────────────┘
點一次清除當日 • 按兩次清除所有每日 • 按三次清除全部
```

### 點擊後反饋
```
╔═════════════════════════════╗
║ ✅ 已清除當日確認清單！      ║
║ 再按一次清除所有每日確認     ║
╚═════════════════════════════╝
```

## 完整使用範例

在 `NightlyChecklist.tsx` 中集成：

```tsx
import { ClearLocalDataBtn } from './ClearLocalDataBtn';

const NightlyChecklist: FC<NightlyChecklistProps> = ({
  currentDay,
  nextDayData,
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    () => getStoredItems(currentDay)
  );

  return (
    <div>
      {/* 你的確認清單內容 */}
      
      {/* 清除按鈕 */}
      <ClearLocalDataBtn 
        currentDay={currentDay}
        onClearToday={() => {
          // 清除當日後，更新組件狀態
          setCheckedItems({});
        }}
      />
    </div>
  );
};
```

## 注意事項

⚠️ **重要提示**:
- 第三次點擊會清除 **所有** localStorage 數據，包括可能的其他應用數據
- 第三次點擊後會 **自動重新載入頁面**
- 操作不可逆，請謹慎使用

## 安全建議

如果只想清除應用相關數據，建議修改第三次點擊的邏輯：

```tsx
// 僅清除應用相關的數據，而非所有 localStorage
const handleClearAllStorage = () => {
  const keysToKeep = ['some-important-key']; // 保留的 key
  Object.keys(localStorage).forEach((key) => {
    if (!keysToKeep.includes(key)) {
      localStorage.removeItem(key);
    }
  });
};
```

---

**最後更新**: 2026年1月2日
