function renderSections() {
    const container = document.body;
  
    sections.forEach(section => {
      // 创建区块容器
      const bodyDiv = document.createElement('div');
      bodyDiv.className = 'body';
  
      // 创建标题
      const titleDiv = document.createElement('div');
      titleDiv.className = 'title';
      titleDiv.innerHTML = `<p>${section.title}</p>${section.warning ? `<p>${section.warning}</p>` : ''}`;
  
      // 创建内容容器
      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';
  
      // 渲染按钮行
      section.rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
  
        row.forEach(btn => {
          const button = document.createElement('button');
          button.textContent = btn.text;
          button.addEventListener('click', (e) => play(e, btn.param));
          rowDiv.appendChild(button);
        });
  
        contentDiv.appendChild(rowDiv);
      });
  
      // 组装区块
      bodyDiv.appendChild(titleDiv);
      bodyDiv.appendChild(contentDiv);
      container.insertBefore(bodyDiv, container.lastElementChild);
    });
  }
  
  // 初始化渲染
  document.addEventListener('DOMContentLoaded', renderSections);