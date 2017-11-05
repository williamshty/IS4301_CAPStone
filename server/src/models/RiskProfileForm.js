module.exports = (sequelize, DataTypes) => {
    const RiskProfileForm = sequelize.define('RiskProfileForm', {
        Q01: DataTypes.STRING,
        Q02: DataTypes.STRING,
        Q03: DataTypes.STRING,
        Q04: DataTypes.STRING,
        Q05: DataTypes.STRING,
        Q06: DataTypes.STRING,
        Q07: DataTypes.STRING,
        Q08: DataTypes.STRING,
        Q09: DataTypes.STRING,
        Q10: DataTypes.STRING,
        Q11: DataTypes.STRING,
        Q12: DataTypes.STRING,
        Q13: DataTypes.STRING,
        Q14: DataTypes.STRING,
        Q15: DataTypes.STRING,
        Q16: DataTypes.STRING,
        Q17: DataTypes.STRING
    })
    return RiskProfileForm
}
