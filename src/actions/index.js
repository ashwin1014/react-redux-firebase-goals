import { SIGNED_IN, SET_GOALS } from '../types';

export function logUser(signedInUser) {
    const action = {
        type: SIGNED_IN,
        signedInUser
    }
    return action
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action
}