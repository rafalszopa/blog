import User from './User';

export interface ApplicationState {
    user?: User,
    count: number
}