/*** models/user.js ***/

// 이전에 MariaDB에 users 테이블과 comments 테이블을 만들었으니 
// 시퀄라이즈에 User 모델과 Comment 모델 생성 및 연결

// VARCHAR -> STRING
// INT -> INTEGER
// TINYINT -> BOOLEAN
// DATETIME -> DATE
// UNSIGNED가 적용된 INT -> INTEGER.UNSIGNED
// ZEROFILL -> INTEGER.UNSIGNED.ZEROFILL

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    /* 첫번째 인자: 테이블 이름 */
    'mis_auth', 

    /* 두번째 인자: 컬럼 모델 */
    {
    // 시퀄라이즈는 기본적으로 id를 기본키로 연결하므로 id 컬럼은 적을 필요가 없음
    ma_provider: {
      type: DataTypes.STRING(20), // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      // unique: true, // UNIQUE -> unique
    },
		ma_username: {
      type: DataTypes.STRING(100), // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      unique: true, // UNIQUE -> unique
    },
		ma_uid: {
      type: DataTypes.INTEGER, // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      unique: true, // UNIQUE -> unique
    },
		ma_sess_id: {
      type: DataTypes.STRING(64), // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      // unique: true, // UNIQUE -> unique
    },
		ma_mb_no: {
      type: DataTypes.INTEGER, // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      unique: true, // UNIQUE -> unique
    },
    ma_created_at: {
      type: DataTypes.DATE, // DATETIME -> DATE
      allowNull: false,
      defaultValue: sequelize.literal('now()'),
    },
  }, 

  /* 세번째 인자: 테이블 옵션 */
  {
    timestamps: false, // true 시 시퀄라이즈는 자동으로 createdAt과 updateAt 컬럼 추가
  });
};