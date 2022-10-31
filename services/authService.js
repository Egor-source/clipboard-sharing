const UserModel = require('../models/UserModel');
const RoleModel = require('../models/RoleModel');
const ApiErrors = require('../exeptions/apiError');
const {
    generateTokens
} = require('./tokenService');

class AuthService {
    async adminRegistration ({
                                 username,
                                 password
                             }) {
        let adminCandidate = await UserModel.findOne({
            role: {
                $elemMatch: {
                    roleName: 'ADMIN'
                }
            }
        });
        if (adminCandidate) {
            throw ApiErrors.BadRequest('Администратор уже зарегестрирован');
        }
        adminCandidate = await UserModel.findOne({ username });
        if (adminCandidate) {
            throw ApiErrors.BadRequest('Пользователь с таким именем уже существует');
        }
        let role = await RoleModel.findOne({ roleName: 'ADMIN' });
        if (!role) {
            role = await RoleModel.create({ roleName: 'ADMIN' });
        }
        const user = await UserModel.create({
            username,
            password,
            role: [role]
        });
        const tokens = generateTokens({
            username
        });

        return tokens;
    }
}

module.exports = new AuthService();