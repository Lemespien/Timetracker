function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const MOCKDATA = {
    user: 1,

    dates:
        //Use this instead 
        [{
            date: new Date("February 12, 2021 11:24:00"),
            project: "Awesome project",
            title: "Made changes to...",
            duration: 600,
        }, {
            date: new Date("January 26, 2021 13:24:00"),
            project: "Awesome project",
            title: "Additional changes to the flubber.",
            duration: 660,
        }, {
            date: new Date("January 26, 2021 11:33:00"),
            project: "Awesome Project",
            title: "Made changes to the flubber.",
            duration: 1200,
        }, {
            date: new Date("January 25, 2021 11:02:00"),
            project: "default project",
            title: "default title",
            duration: 600,
        }, {
            date: new Date("January 24, 2021 12:14:00"),
            project: "default project",
            title: "default title",
            duration: 600,
        }, {
            date: new Date("January 23, 2021 10:54:00"),
            project: "default project",
            title: "default title",
            duration: 600,
        }, {
            date: new Date("January 22, 2021 15:16:00"),
            project: "default project",
            title: "default title",
            duration: getRandomArbitrary(1000, 16000),
        }, {
            date: new Date("January 21, 2021 12:38:00"),
            project: "default project",
            title: "default title",
            duration: 7266,
        }],

}

export default MOCKDATA;