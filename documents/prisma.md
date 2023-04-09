# prismaの簡易説明

# Setup方法
1. インストール
  ```
   npm install prisma --save-dev
  ```
  - これにより.envファイルと,prisma/schema.prismaが生成される
2. .envの編集
  - 以下を編集する
  ```
  DATABASE_URL="使うDB":"ユーザー名"//:"パスワード"@localhost:使用するローカルサーバーのポート番号/"データベース名"?schema=public"
  ```
  - 具体例
  ```
  DATABASE_URL="postgresql://user:pass@localhost:5432/graphqldb?schema=public"
  ```
3. schema.prismaに記載していく

# schema
- ここから属性の定義方法を記載していく

## 1. string
| types       | type attribute  |
|-------------|----------------|
| VARCHAR     | @db.VarChar(X)  |
| TEXT        | @db.Text        |
| VARCHAR     | @db.VarChar(X)  |
| CHAR        | @db.Char(X)     |
| TINYTEXT    | @db.TinyText    |
| MEDIUMTEXT  | @db.MediumText  |
| LONGTEXT    | @db.LongText    | 

## 2. boolean
| types       | type attribute |
|-------------|----------------|
| TINYINT(1)  | @db.TinyInt(1) |

## 3. Int
| types         | type attribute     |
|---------------|--------------------|
| INT           | @db. Int           |
| INT UNSIGNED  | @db. UnsignedInt   |
| YEAR          | @db. Year          |

## 4. Float
| types   | type attribute |
|---------|----------------|
| FLOAT   | @db. Float     |
| DOUBLE  | @db. Double    |

## 5. DateTime
| types          | type attribute       |
|----------------|----------------------|
| DATETIME(x)    | @db. DateTime(x)     |
| DATE(x)        | @db. Date(x)         |
| TIME(x)        | @db. Time(x)         |
| TIMESTAMP(x)   | @db. Timestamp(x)    |

## 6. フィールド演算子
- @id
  - フィールドを主キーとして設定するための修飾子
- @unique
  - フィールドに一意性制約を付けるための修飾子
- @default(value)
  - フィールドのデフォルト値を指定するための修飾子
- @updatedAt
  - 更新時刻を自動的に管理するための修飾子
- @relation
  - フィールドに対するリレーションを定義するための修飾子
- @map
  - フィールドをデータベース内の別の名前で定義するための修飾子
- @ignore
  - Prismaのスキーマから特定のフィールドを除外するための修飾子
- 参考文献
  - [https://zenn.dev/ikekyo/scraps/f6c87fbfd3bf9d](https://zenn.dev/ikekyo/scraps/f6c87fbfd3bf9d)
