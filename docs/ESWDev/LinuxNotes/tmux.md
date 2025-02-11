# tmux

`tmux` 是一个强大的终端复用器，允许在单个终端会话中管理多个终端窗口和会话。

## 1. **基础命令**

### 启动和管理会话

- **启动 tmux**：

  ```bash
  tmux
  ```

  这会启动一个新的 `tmux` 会话。

- **启动并命名会话**：

  ```bash
  tmux new -s my_session
  ```

  创建一个名为 `my_session` 的会话。

- **查看现有会话**：

  ```bash
  tmux list-sessions
  ```

  显示所有 `tmux` 会话。

- **重新连接到会话**：

  ```bash
  tmux attach -t my_session
  ```

  重新连接到名为 `my_session` 的会话。

- **分离会话**（保持会话后台运行）：
   按下快捷键 `Ctrl+b` 然后按 `d`，或直接运行命令：

  ```bash
  tmux detach
  ```

- **终止会话**：
   在会话内输入 `exit` 或直接关闭窗口。

------

### 窗口管理

- **创建新窗口**：
   按下 `Ctrl+b`，然后按 `c`。
- **列出所有窗口**：
   按下 `Ctrl+b`，然后按 `w`。
- **切换窗口**：
  - 按 `Ctrl+b` 然后按数字键（例如，`0` 切换到第一个窗口）。
  - 按 `Ctrl+b` 然后按 `n` 或 `p` 切换到下一个或上一个窗口。
- **重命名窗口**：
   按 `Ctrl+b`，然后按 `,`，输入新的窗口名称。

------

### 窗口分屏

- **水平分屏**：
   按 `Ctrl+b` 然后按 `%`。
- **垂直分屏**：
   按 `Ctrl+b` 然后按 `"`。
- **切换分屏**：
   按 `Ctrl+b` 然后按箭头键（←、→、↑、↓）。
- **调整分屏大小**：
   按 `Ctrl+b`，然后按 `Ctrl+箭头键`。
- **关闭分屏**：
   使用 `exit` 退出当前分屏，或按 `Ctrl+d`。

------

## 2. **会话共享**

### 共享会话

`tmux` 可以让多个用户共享同一个会话，适用于协作环境。

1. **启动 tmux 并允许共享**：
    确保你的用户和目标用户属于同一个用户组，并设置共享权限：

   ```bash
   tmux new-session -s shared_session
   chmod 777 /tmp/tmux-$(id -u)/
   ```

2. **让其他用户连接**：
    目标用户运行以下命令连接到会话：

   ```bash
   tmux attach-session -t shared_session
   ```

------

## 3. **配置与自定义**

### 修改配置文件

可以通过编辑 `~/.tmux.conf` 文件自定义 `tmux`。

#### 常用配置示例

```bash
# 设置快捷键前缀为 Ctrl+a（默认是 Ctrl+b）
unbind C-b
set -g prefix C-a
bind C-a send-prefix

# 启用鼠标支持
set -g mouse on

# 状态栏美化
set -g status-bg black
set -g status-fg white
set -g status-left "Session: #S "
set -g status-right "Time: %H:%M | Date: %Y-%m-%d"

# 分屏边框样式
set -g pane-border-fg green
set -g pane-active-border-fg yellow
```

保存文件后，重新加载配置：

```bash
tmux source-file ~/.tmux.conf
```

------

## 4. **常用快捷键**

### 通用快捷键

| 动作             | 快捷键                 |
| ---------------- | ---------------------- |
| 显示快捷键帮助   | `Ctrl+b ?`             |
| 创建新窗口       | `Ctrl+b c`             |
| 切换到下一个窗口 | `Ctrl+b n`             |
| 切换到上一个窗口 | `Ctrl+b p`             |
| 分离当前会话     | `Ctrl+b d`             |
| 重命名当前窗口   | `Ctrl+b ,`             |
| 水平分屏         | `Ctrl+b %`             |
| 垂直分屏         | `Ctrl+b "`             |
| 切换分屏         | `Ctrl+b + 箭头键`      |
| 调整分屏大小     | `Ctrl+b + Ctrl+箭头键` |

------
