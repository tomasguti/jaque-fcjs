export class Schedule {
    constructor(
        public start?: number,
        public end?: number,
        public location?: string,
        public name?: string,
        public who?: string,
        public state?: boolean,
    ) { }
}