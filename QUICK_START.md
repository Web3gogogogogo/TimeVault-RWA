# 🚀 CI/CD 快速开始指南

## ✅ 已完成的工作

1. ✅ 创建了 GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. ✅ 生成了 SSH 部署密钥
3. ✅ 配置了部署脚本
4. ✅ 创建了详细的配置文档

## 📋 接下来需要做的（只需 5 分钟）

### 步骤 1: 配置 GitHub Secrets

1. 打开 GitHub 仓库：https://github.com/Web3gogogogogo/TimeVault-RWA
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**，添加以下 3 个 secrets：

#### Secret 1: SERVER_HOST
- Name: `SERVER_HOST`
- Value: `172.17.1.94`

#### Secret 2: SERVER_USER
- Name: `SERVER_USER`
- Value: `root`

#### Secret 3: SERVER_SSH_KEY
- Name: `SERVER_SSH_KEY`
- Value: 复制 `GITHUB_SECRETS.md` 文件中的完整私钥内容

> 💡 **提示**: 私钥内容在 `GITHUB_SECRETS.md` 文件中，包括 `-----BEGIN OPENSSH PRIVATE KEY-----` 和 `-----END OPENSSH PRIVATE KEY-----` 行

### 步骤 2: 测试部署

配置完成后，有两种方式触发部署：

#### 方式 1: 自动触发（推荐）
```bash
# 推送任何更改到 main 分支即可自动部署
git push origin main
```

#### 方式 2: 手动触发
1. 进入 GitHub 仓库的 **Actions** 标签页
2. 选择 **Deploy to Production Server** workflow
3. 点击 **Run workflow** 按钮

## 🎯 部署流程

每次部署会自动执行：

1. ✅ 检出最新代码
2. ✅ 安装依赖 (`npm ci`)
3. ✅ 构建项目 (`npm run build`)
4. ✅ 上传文件到服务器
5. ✅ 备份旧版本
6. ✅ 部署新文件
7. ✅ 设置权限
8. ✅ 重新加载 Nginx

## 📚 详细文档

- **GITHUB_SECRETS.md** - GitHub Secrets 配置详细说明
- **DEPLOY.md** - 完整的部署配置指南和故障排查

## 🔍 验证部署

部署成功后，访问：
- https://chenpigenesis.io
- https://www.chenpigenesis.io

## ⚠️ 注意事项

1. **首次部署**: 配置完 Secrets 后，建议先手动触发一次测试
2. **查看日志**: 如果部署失败，在 GitHub Actions 中查看详细日志
3. **备份**: 每次部署会自动备份旧版本到 `/var/www/chenpirwa.backup.[时间戳]`

## 🆘 遇到问题？

1. 检查 GitHub Secrets 是否正确配置
2. 查看 GitHub Actions 运行日志
3. 参考 `DEPLOY.md` 中的故障排查章节
4. 检查服务器 SSH 连接：`ssh root@172.17.1.94`

---

**配置完成后，每次推送代码到 main 分支都会自动部署！** 🎉

