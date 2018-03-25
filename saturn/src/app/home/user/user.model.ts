export class UserModel {
    id: string;
    name: string;
    mobile: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;

    constructor(id, name, mobile, email, password, created_at, updated_at, created_by, updated_by) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}

export class UserPage {
    total: number = 0;
    users: UserModel[] = [];
}
