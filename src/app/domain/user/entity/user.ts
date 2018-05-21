/**
 * Created by joseph on 24/04/17.
 */
export class User {
    public id: string;
    public role: string;
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public image: string;
    public get_hash: boolean;

    createUser() {
        this.id = null;
        this.role = 'user';
        this.name = '';
        this.surname = '';
    }
}
