export interface UsersInterface {
    ID: number,
    
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    RoleID: number;
    Role:RolesInterface;
    
    
}  

export interface RolesInterface {
    ID: number,
    Name: string;
    
    
}  


