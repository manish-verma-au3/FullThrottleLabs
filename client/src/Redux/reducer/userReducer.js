import { actionTypes } from "../action/action";

let userData = [
    {
        "id": "W012A3CDE",
        "real_name": "Egon Spengler",
        "tz": "America/Los_Angeles",
        "activity_periods": 
        [{
                "start_time": "Feb 1 2020  1:33PM",
                "end_time": "Feb 1 2020 1:54PM"
            },
            {
                "start_time": "Mar 1 2020  11:11AM",
                "end_time": "Mar 1 2020 2:00PM"
            },
            {
                "start_time": "Jul 16 2020  5:33PM",
                "end_time": "Jul 16 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Glinda Southgood",
        "tz": "Asia/Kolkata",
        "activity_periods": 
        [{
                "start_time": "Feb 1 2020  1:33PM",
                "end_time": "Feb 1 2020 1:54PM"
            },
            {
                "start_time": "Mar 1 2020  11:11AM",
                "end_time": "Mar 1 2020 2:00PM"
            },
            {
                "start_time": "Jul 16 2020  5:33PM",
                "end_time": "Jul 16 2020 8:02PM"
            }
        ]
    },
    
    {
        "id": "W07QCRPR9",
        "real_name": "Naruto",
        "tz": "Japan/Tokyo",
        "activity_periods": 
        [{
                "start_time": "Apr 15 2020  1:33PM",
                "end_time": "Apr 15 2020 1:54PM"
            },
            {
                "start_time": "Jul 9 2020  11:11AM",
                "end_time": "Jul 9 2020 2:00PM"
            },
            {
                "start_time": "Jul 16 2020  5:33PM",
                "end_time": "Jul 16 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Jack William",
        "tz": "Australia/Sydney",
        "activity_periods": 
        [{
                "start_time": "Jan 1 2020  1:33PM",
                "end_time": "Jan 1 2020 1:54PM"
            },
            {
                "start_time": "Jun 6 2020  11:11AM",
                "end_time": "Jun 6 2020 2:00PM"
            },
            {
                "start_time": "Jul 2 2020  11:11AM",
                "end_time": "Jul 2 2020 2:00PM"
            },
            {
                "start_time": "Jul 3 2020  5:33PM",
                "end_time": "Jul 3 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Rahul Subramanian",
        "tz": "Asia/Hyderabad",
        "activity_periods": 
        [{
                "start_time": "Feb 1 2020  1:33PM",
                "end_time": "Feb 1 2020 1:54PM"
            },
            {
                "start_time": "Jun 17 2020  11:11AM",
                "end_time": "Jun 17 2020 2:00PM"
            },
            {
                "start_time": "Jul 20 2020  11:11AM",
                "end_time": "Jul 20 2020 2:00PM"
            },
            {
                "start_time": "Jul 24 2020  5:33PM",
                "end_time": "Jul 24 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "David Beackham",
        "tz": "Great Britain/London",
        "activity_periods": 
        [{
                "start_time": "Feb 1 2019  1:33PM",
                "end_time": "Feb 1 2019 1:54PM"
            },
            {
                "start_time": "Apr 17 2020  11:11AM",
                "end_time": "Apr 17 2020 2:00PM"
            },
            {
                "start_time": "Jul 6 2020  11:11AM",
                "end_time": "Jul 6 2020 2:00PM"
            },
            {
                "start_time": "Jul 23 2020  5:33PM",
                "end_time": "Jul 23 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Ronaldo",
        "tz": "Europe/Portugal",
        "activity_periods": 
        [{
                "start_time": "Dec 10 2019  1:33PM",
                "end_time": "Dec 10 2019 1:54PM"
            },
            {
                "start_time": "May 17 2020  11:11AM",
                "end_time": "May 17 2020 2:00PM"
            },
            {
                "start_time": "Jul 20 2020  11:11AM",
                "end_time": "Jul 20 2020 2:00PM"
            },
            {
                "start_time": "Jul 24 2020  5:33PM",
                "end_time": "Jul 24 2020 8:02PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Lionel Messi",
        "tz": "North America/Argentina",
        "activity_periods": 
        [{
                "start_time": "Apr 13 2020  1:33PM",
                "end_time": "Apr 13 2020 1:54PM"
            },
            {
                "start_time": "Jun 4 2020  11:11AM",
                "end_time": "Jun 4 2020 2:00PM"
            },
            {
                "start_time": "Jul 22 2020  11:11AM",
                "end_time": "Jul 22 2020 2:00PM"
            },
            {
                "start_time": "Jul 24 2020  5:33PM",
                "end_time": "Jul 24 2020 8:02PM"
            }
        ]
    }                
];

const userReducer = (state = userData, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USER:
      let allUserArray = JSON.parse(JSON.stringify(state));
      console.log(allUserArray);
      return allUserArray;

    default:
      return state;
  }
};

export default userReducer;;