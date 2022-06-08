/**
 * The landing page has a link to create a new Club Member
 */
interface IClubMember {
    id: string,         // 8 chars, random string
    first: string,
    last: string,
    email: string,
    rating: number,     // 1200 default
    status: boolean     // active, inactive
}

export { IClubMember }