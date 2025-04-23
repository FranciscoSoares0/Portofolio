export interface Project {
    _id?:string;
    name: string;
    description: string;
    gitHubLink: string;
    appLink: string;
    images: Array<string>;
    techs: Array<string>;
}
