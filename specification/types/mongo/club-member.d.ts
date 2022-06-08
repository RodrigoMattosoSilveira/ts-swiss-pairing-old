/**
 * The landing page has a link to create a new Club Member
 */
interface IClubMember {
    id: string,         // 8 chars, random string
    first: string,
    middle: string,
    last: string,
    cell: string,
    rating: number,     // 1200 default
    active: boolean     // TRUE default
}

export { IClubMember }