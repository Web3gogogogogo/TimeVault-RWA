# GitHub CI/CD 自动化部署配置指南

本文档说明如何配置 GitHub Actions 实现自动部署到远程服务器。

## 前置要求

1. 服务器已安装并运行 Nginx
2. 服务器可以 SSH 访问
3. GitHub 仓库有推送权限

## 配置步骤

### 1. 生成 SSH 部署密钥（如果还没有）

在服务器上执行以下命令生成 SSH 密钥对：

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy -N ""
```

将公钥添加到服务器的 `authorized_keys`：

```bash
cat ~/.ssh/github_actions_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 2. 获取服务器信息

需要准备以下信息：
- **SERVER_HOST**: 服务器 IP 地址或域名
- **SERVER_USER**: SSH 用户名（通常是 `root`）
- **SERVER_PORT**: SSH 端口（默认 22）
- **SERVER_SSH_KEY**: 私钥内容（`~/.ssh/github_actions_deploy` 的内容）

### 3. 配置 GitHub Secrets

1. 打开 GitHub 仓库页面
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret** 添加以下 secrets：

#### 必需配置：

- **SERVER_HOST**: 服务器 IP 或域名
  - 例如: `123.456.789.0` 或 `your-server.com`

- **SERVER_USER**: SSH 用户名
  - 例如: `root`

- **SERVER_SSH_KEY**: SSH 私钥内容
  - 在服务器上执行: `cat ~/.ssh/github_actions_deploy`
  - 复制完整内容（包括 `-----BEGIN OPENSSH PRIVATE KEY-----` 和 `-----END OPENSSH PRIVATE KEY-----`）

#### 可选配置：

- **SERVER_PORT**: SSH 端口（如果不使用默认 22）
  - 例如: `2222`

### 4. 验证配置

配置完成后，每次推送到 `main` 分支时，GitHub Actions 会自动：

1. ✅ 检出代码
2. ✅ 安装依赖
3. ✅ 构建项目
4. ✅ 通过 SCP 上传文件到服务器
5. ✅ 执行部署脚本（备份、复制、设置权限、重载 Nginx）
6. ✅ 完成部署

### 5. 手动触发部署

如果需要手动触发部署，可以：

1. 进入 GitHub 仓库的 **Actions** 标签页
2. 选择 **Deploy to Production Server** workflow
3. 点击 **Run workflow** 按钮

## 部署流程说明

部署脚本会执行以下操作：

1. **备份当前版本**：将现有文件备份到 `/var/www/chenpirwa.backup.[时间戳]`
2. **清理目标目录**：清空 `/var/www/chenpirwa` 目录
3. **复制新文件**：将构建产物复制到目标目录
4. **设置权限**：设置文件所有者为 `nginx:nginx`，权限为 `755`
5. **重载 Nginx**：验证配置并重新加载 Nginx 服务

## 故障排查

### 部署失败

1. 检查 GitHub Secrets 是否正确配置
2. 检查服务器 SSH 连接是否正常
3. 查看 GitHub Actions 日志获取详细错误信息
4. 检查服务器磁盘空间是否充足
5. 检查 Nginx 配置是否正确

### SSH 连接问题

```bash
# 测试 SSH 连接
ssh -i ~/.ssh/github_actions_deploy -p [PORT] [USER]@[HOST]
```

### 权限问题

确保部署用户有权限：
- 写入 `/var/www/chenpirwa` 目录
- 执行 `systemctl reload nginx` 命令
- 可能需要配置 sudo 权限

## 安全建议

1. ✅ 使用专用的部署密钥，不要使用个人 SSH 密钥
2. ✅ 定期轮换 SSH 密钥
3. ✅ 限制 SSH 密钥的权限范围
4. ✅ 使用防火墙限制 SSH 访问来源
5. ✅ 定期检查 GitHub Actions 日志

## 联系支持

如果遇到问题，请检查：
- GitHub Actions 运行日志
- 服务器系统日志: `journalctl -u nginx`
- Nginx 错误日志: `/var/log/nginx/chenpirwa_error.log`

