export interface UsersInterface {
    ID: string,
    
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    RoleID: number;
    Role:RolesInterface;
    
    
}  

export interface RolesInterface {
    ID: string,
    
    Name:   string;
    
    
}  


