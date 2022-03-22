import { ExtensionModel } from "./extension-model";

export interface UserModel {
    firstName : string;
    lastName : string;
    clientName : string;
    userName : string;
    password : string;
    description : string;
    extensionList : ExtensionModel[];

}