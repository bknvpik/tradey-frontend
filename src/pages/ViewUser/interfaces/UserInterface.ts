export default interface UserInterface {
    id?: string | undefined;
    eMail?: string | undefined;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    country?: {id: number, country: string} | undefined;
    image?: {id: string, image: string} | undefined;
    about?: string | undefined;
}