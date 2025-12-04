完全清空並重新開始
如果你想徹底清空所有歷史記錄，讓專案只有一個初始 commit，這個方法會完全抹去過去的所有版本。這個動作非常危險，請謹慎使用。

步驟：

移動到一個新的孤兒分支（orphan branch）：
--orphan 參數會創建一個全新的、沒有任何歷史紀錄的分支。

git checkout --orphan temp_branch

添加所有檔案並提交：
將所有檔案添加進來，並提交為新的初始 commit。

git add -A
git commit -m "Initial commit with a clean history"

刪除舊分支並重新命名：
刪除舊的主分支（例如 master 或 main），並將新的分支重新命名為舊分支的名稱。

git branch -D main
git branch -m main

強制推送（Force Push）：
因為你已經徹底改寫了遠端儲存庫的歷史，需要強制推送才能更新。

git push -u origin main --force