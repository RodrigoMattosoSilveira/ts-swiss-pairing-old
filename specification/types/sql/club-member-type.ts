interface ClubMemberT {
    id: string,         // 8 chars, random string
    first: string,
    middle: string,
    last: string,
    cell: string,
    rating: number,     // 1200 default
    active: boolean     // TRUE default
}

export { ClubMemberT }