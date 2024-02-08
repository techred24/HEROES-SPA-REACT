import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Tests on authReducer', () => {
    test('Should return the default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('(login) Should call login and establish the user', () => {
        const user = {
            id: 'ABC',
            name: 'Rafael'
        }
        const action = {
            type: types.login,
            payload: user
        }
        const state = authReducer({ logged: false}, action);
        expect(state.user).toEqual(user);
    });
    test('(logout) Should remove user name and set property logged to false', () => {

    });
});