export interface tab3
{
    title:string;  
    url:string; 
    urlTitle:string; 
    type:string; 

    elementsss:elementsss[]
}
export interface elementsss
{
    id:string;
    title:string;
    text:string;
    description:string;
    credit:string;
    source:string;
    url:string;


    imagess: imagess[];
}
export interface imagess
{
    id:string;
    title:string;
    url:string;
    thmbnl:string;
    mapPointers:string[];
    backImage :string;
    type :string;
    vertices :string;
    credit :string;
    relatedLink :string;
    marksPoints :string;

}

