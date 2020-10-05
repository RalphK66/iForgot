
let Database = {
    simon: {
        reminders: [{title: "Cook Dinner", datetime: "2020-04-15 18:00", tasks: [], id: 1},
        {title: "Wash the car", datetime: "2020-04-16 09:00", tasks: ["Vacuum trunk"], id: 2},
        {title: "Gardening", datetime: "2020-04-17 13:00", tasks: ["Mow the lawn", "Trim the hedges", "Prune the rose bush"], id: 3},
        {title: "Clean the Garage", datetime: "2020-04-23 08:00", tasks: ["Sort out the tools", "Fix the broken shelf"], id: 4},
        {title: "Call Nan", datetime: "2020-04-18 12:00", tasks: ["It's her BDAY"], id: 5},
        {title: "Prep for interview", datetime: "2020-04-22 09:00", tasks: ["Memorize resume", "Read position outline again"], id: 6},
        {title: "Interview", datetime: "2020-04-24 08:00", tasks: [], id: 7},
        {title: "Ralph's bday", datetime: "2020-05-03 08:00", tasks: ["call him"], id: 8}],
        username: "simon@gmail.com",
        password: 12345
    } 
}

module.exports = Database;