  /** 顯示 Toast 提示 */
  export const showToast = (message: string, type: 'success' | 'warning' | 'danger' = 'success') => {
    // 創建 toast 元素
    const toast = document.createElement('div');
    toast.textContent = message;
    
    // 設置樣式
    const bgColors = {
      success: 'rgba(173, 220, 201, 1)',
      warning: 'rgba(253, 210, 181, 1)',
      danger: 'rgba(244, 139, 148, 1)'
    };
    
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${bgColors[type]};
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      z-index: 9999;
      font-size: 14px;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
      max-width: 320px;
    `;
    
    // 添加動畫
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    // 添加到頁面
    document.body.appendChild(toast);
    
    // 2.5秒後移除
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        document.body.removeChild(toast);
        document.head.removeChild(style);
      }, 300);
    }, 2500);
  };