
export interface righteData {
    title: string;
    url: string;
    urlTitle: string;
    type: string;
    elements: elements;

    //public List<details> details { get; set; }

}
export interface elements {
    details: details[];
    map: map;
    links: links;
    id: string;
    lastName: string;
    firstName: string;
    birthYear: string;
    placeOfResidence: string;
    source: string;
    url: string;
    title: string;
    text: string;
    description: string;
    credit: string;
    images: images;


}
export interface images {
    id: string;
    title: string;
    url: string;
    thmbnl: string;
    mapPointers: string[];
    backImage: string;
    type: string;
    vertices: string;
    credit: string;
    relatedLink: string;
    marksPoints: string;


}

export interface map {
    pointers: pointers;
    places: places;

}
export interface pointers {
    icon: string;
    latitude: string;
    longitude: string;
    title: string;


}
export interface places {
    lif: string;
    place: string[];
    point: string;

}
export interface links {
    title: string;
    valuee: valuee;

}
export interface valuee {
    id: string;
    value: string;
    url: string;

}


export interface details {
    title: string;
    valuee: valuee[];

}
