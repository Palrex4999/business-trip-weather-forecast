# Claude Code - 開発ガイドライン

## PR作成形式

プルリクエストを作成する際は、以下の形式に従ってください：

### テンプレート

```markdown
## What (何を)
- [実装・追加した機能やコンポーネントを箇条書きで記載]
- [構築した環境やツールを記載]
- [分離・リファクタリングした内容を記載]

## Why (なぜ)
- [ビジネス要件やユーザーストーリーを記載]
- [達成したい目的や効果を記載]

## How (どのように)
### [コンポーネント名や機能名]
- **機能**:
  - [提供する機能を箇条書き]
  - [対応する操作やイベント]
  - [サポートする状態や設定]
- **実装**:
  - `ファイル名`: 説明
  - `ファイル名`: 説明
  - 具体的な実装内容（ストーリー数、パターン数など）

## Test plan
- [ ] [確認すべきテスト項目1]
- [ ] [確認すべきテスト項目2]
- [ ] [確認すべきテスト項目3]
- [ ] [確認すべきテスト項目4]
- [ ] [確認すべきテスト項目5]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### 重要な注意点

1. **Why (なぜ)**
   - ビジネス要件やユーザー視点の理由のみを記載
   - 技術的な理由は含めない

2. **How (どのように)**
   - 機能の説明と実装の詳細を明確に分ける
   - ファイル名は`バッククォート`で囲む
   - 具体的な数値や例を含める

3. **Test plan**
   - チェックボックス形式で記載
   - レビュワーが確認しやすいように具体的に記載

4. **署名**
   - 必ずClaude Codeの署名を含める

### 実例

```markdown
## What (何を)
- SearchBox UIコンポーネントを新規作成
- Storybook 10.0.8によるコンポーネント開発環境を構築
- Vitestによるテスト環境を構築
- スタイルを別ファイル（SearchBox.styles.ts）に分離

## Why (なぜ)
- 都市検索機能のUIコンポーネントが必要
- コンポーネントの開発・レビュー・テストを効率化したい

## How (どのように)
### SearchBoxコンポーネント
- **機能**:
  - テキスト入力フィールドと検索ボタン
  - Enterキーでの検索実行
  - 入力値の制御（Controlled Component）
  - 無効化状態のサポート
- **実装**:
  - `SearchBox.tsx`: コンポーネントロジック
  - `SearchBox.styles.ts`: Tailwind CSSクラスの定数定義
  - `SearchBox.stories.tsx`: 6つのストーリー（Default, WithValue, Disabled, DisabledWithValue, CustomPlaceholder, Interactive）

## Test plan
- [ ] Storybookで全てのストーリーが正常に表示されることを確認
- [ ] Interactiveストーリーで入力・検索動作を確認
- [ ] 無効化状態が正しく動作することを確認
- [ ] Enterキーでの検索実行を確認
- [ ] レスポンシブデザインを確認

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```
