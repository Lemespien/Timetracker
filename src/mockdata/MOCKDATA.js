
const MOCKDATA = {
    timers: [{
        ID: "abc1",
        workingTitle: "My First Job",
        projectTitle: "My First Project",
        dates: {
            "2021": { // year
                jan: { // month
                    "1": { // week
                        mon: [{ // weekday
                            date: new Date(),
                            project: "default project",
                            title: "default title",
                            duration: 600,
                        }, {
                            date: new Date(),
                            project: "default project 2",
                            title: "default title 2",
                            duration: 1200,
                        }],
                        tue: [{ // weekday
                            date: new Date(),
                            project: "default project",
                            title: "default title",
                            duration: 600,
                        }]
                    }
                },
                feb: {

                }
            },
        },
        times: [{
            duration: 600,
            start: new Date(Date.now() - 3 * 60 * 60 * 1000).getTime(),
        },
        {
            duration: 663,
            start: new Date().getTime(),
        },
        {
            duration: 600,
            start: new Date().getTime(),
        }],
        date: new Date("February 2, 2021 12:00:00"),
    },
        // {
        //     ID: "abc2",
        //     workingTitle: "My Second Job",
        //     projectTitle: "My Second Project",
        //     times: 1200,
        //     date: new Date("February 4, 2021 12:00:00"),
        // },
        // {
        //     ID: "abc3",
        //     workingTitle: "My Third Job",
        //     projectTitle: "Back to First Project",
        //     times: 1800,
        //     date: new Date("February 7, 2021 12:00:00"),
        // },
    ]
}

export default MOCKDATA;