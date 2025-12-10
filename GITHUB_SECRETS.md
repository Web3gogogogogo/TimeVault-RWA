# GitHub Secrets 配置快速参考

## 需要在 GitHub 配置的 Secrets

进入仓库：**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

### 1. SERVER_HOST
```
值: 172.17.1.94
说明: 服务器 IP 地址
```

### 2. SERVER_USER
```
值: root
说明: SSH 用户名
```

### 3. SERVER_SSH_KEY
```
值: [见下方私钥内容]
说明: SSH 私钥（完整内容，包括 BEGIN 和 END 行）
```

### 4. SERVER_PORT (可选)
```
值: 22
说明: SSH 端口，如果使用默认端口可以不配置
```

---

## SSH 私钥内容

**⚠️ 重要：复制完整的私钥内容（包括 BEGIN 和 END 行）**

```
-----BEGIN OPENSSH PRIVATE KEY-----
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
AAAFWdpdGh1Yi1hY3Rpb25zLWRlcGxveQECAwQF
-----END OPENSSH PRIVATE KEY-----
```

---

## 配置步骤

1. 打开 GitHub 仓库：https://github.com/Web3gogogogogo/TimeVault-RWA
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Secrets and variables** → **Actions**
4. 点击 **New repository secret** 按钮
5. 依次添加上述 3 个 secrets（SERVER_HOST, SERVER_USER, SERVER_SSH_KEY）
6. 保存后，推送到 `main` 分支即可自动触发部署

---

## 测试部署

配置完成后，可以：

1. 手动触发：**Actions** → **Deploy to Production Server** → **Run workflow**
2. 或者推送代码到 `main` 分支自动触发

