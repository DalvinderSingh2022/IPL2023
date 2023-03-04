export var TeamInfo = [];
class NewTeam {
    constructor(Matches, Logo, ChampionsIn, src, round, qualified = false) {
        this.Logo = Logo;
        this.ChampionsIn = ChampionsIn;
        this.Matches = Matches;
        this.Image = {
            src: src,
            round: {
                src: round,
            }
        };
        this.Qualified = qualified;
    }
    Team = function () {
        switch (this.Logo) {
            case "csk":
                return "Chennai Super Kings";
            case "srh":
                return "Sunrisers Hyderabad";
            case "kkr":
                return "Kolkata Knight Riders";
            case "rr":
                return "Rajasthan Royals";
            case "mi":
                return "Mumbai Indians";
            case "pk":
                return "Punjab Kings";
            case "rcb":
                return "Royal Challengers Bangalore";
            case "dc":
                return "Delhi Capitals";
            case "gt":
                return "Gujrat Titans";
            case "lsg":
                return "Lucknow Super Giants";
        }
    }
    Won = function () {
        var won = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == 1) {
                won++;
            }
        }
        return won;
    };
    Lose = function () {
        var lose = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == -1) {
                lose++;
            }
        }
        return lose;
    };
    Draw = function () {
        var draw = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == 0) {
                draw++;
            }
        }
        return draw;
    };
    Captain = function () {
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo && PlayerData[index].IsCaptain()) {
                return (PlayerData[index]);
            };
        };
    };
    Runs = function () {
        var Runs = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Runs += PlayerData[index].Runs();
            }
        }
        return Runs;
    }
    Wicket = function () {
        var Wicket = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Wicket += PlayerData[index].Wicket();
            }
        }
        return Wicket;
    }
    Hundreds = function () {
        var Hundreds = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Hundreds += PlayerData[index].Hundreds();
            }
        }
        return Hundreds;
    }
    Sixes = function () {
        var Sixes = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Sixes += PlayerData[index].Sixes();
            }
        }
        return Sixes;
    }
    Fifties = function () {
        var Fifties = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Fifties += PlayerData[index].Fifties()
            }
        }
        return Fifties;
    }
    Fifers = function () {
        var Fifers = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Fifers += PlayerData[index].Fifers()
            }
        }
        return Fifers;
    }
    Played = function () { return this.Matches.length };
    Points = function () { return this.Won() * 2 };
}
TeamInfo.push(new NewTeam([], "csk", "2010, 2011, 2018, 2021", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png"));
TeamInfo.push(new NewTeam([], "dc", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png"));
TeamInfo.push(new NewTeam([], "gt", "2022", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Medium/GTmedium.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png"));
TeamInfo.push(new NewTeam([], "kkr", "2012, 2014", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKR.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png"));
TeamInfo.push(new NewTeam([], "lsg", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Medium/LSGmedium.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png"));
TeamInfo.push(new NewTeam([], "mi", "2013, 2015, 2017, 2019, 2020", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png"));
TeamInfo.push(new NewTeam([], "pk", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKS.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png"));
TeamInfo.push(new NewTeam([], "rr", "2008", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RR.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png"));
TeamInfo.push(new NewTeam([], "rcb", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png"));
TeamInfo.push(new NewTeam([], "srh", "2016", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png"));

// {
//     Runs: 50,
//     Ballsfaced: 25,
//     Sixes: 4,
//     NotOuts: true,
//     BallsBowled: 24,
//     RunsGiven: 24,
//     Wicket: 2,
// }

var Players = [
    {
        FullName: "MS Dhoni",
        TeamLogo: "csk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        Role: "Wicketkeeper Batter india captain",
        Matches: []
    },
    {
        FullName: "Ravindra Jadeja",
        TeamLogo: "csk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Deepak Chahar",
        TeamLogo: "csk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Ambati Rayudu",
        TeamLogo: "csk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
        Role: "Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Mitchell Santner",
        TeamLogo: "csk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1903.png",
        Role: "Allrounder",
        Matches: []
    },
    {
        FullName: "Devon Conway",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Ruturaj Gaikwad",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Subhranshu Senapati",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Dwaine Pretorius",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "K Bhagath Varma",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Rajvardhan Hangargekar",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Moeen Ali",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Shivam Dube",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Maheesh Theekshana",
        TeamLogo: "csk",
        Image: "ipli",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Mukesh Choudhary",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Prashant Solanki",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Simarjeet Singh",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ajinkya Rahane",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Tushar Deshpande",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ben Stokes",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Matheesha Pathirana",
        TeamLogo: "csk",
        Image: "ipli",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Shaik Rasheed",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Nishant Sindhu",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Kyle Jamieson",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Bowler ",
        Matches: []
    },
    {
        FullName: "Ajay Mandal",
        TeamLogo: "csk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "David Warner",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Prithvi Shaw",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Rovman Powell",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter ",
        Matches: []
    },
    {
        FullName: "Axar Patel",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Kamlesh Nagarkoti",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Lalit Yadav",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Mitchell Marsh",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Pravin Dubey",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ripal Patel",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Sarfaraz Khan",
        TeamLogo: "dc",
        Image: "ipli",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Vicky Ostwal",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Yash Dhull",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Aman Khan",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Anrich Nortje",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Chetan Sakariya",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Kuldeep Yadav",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Lungi Ngidi",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Mustafizur Rahman",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Khaleel Ahmed",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Phil Salt",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Ishant Sharma",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Manish Pandey",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Mukesh Kumar",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Rilee Rossouw",
        TeamLogo: "dc",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Rishabh Pant",
        TeamLogo: "dc",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        Role: "Wicketkeeper Batter india captain",
        Matches: []
    },
    {
        FullName: "Abhinav Manohar",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "David Miller",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Shubman Gill",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Matthew Wade",
        TeamLogo: "gt",
        Image: "ipli",
        Role: "Wicketkeeper Batter",
        Matches: []
    },
    {
        FullName: "Wriddhiman Saha",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "B. Sai Sudharsan",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Darshan Nalkande",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Jayant Yadav",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Pradeep Sangwan",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Rahul Tewatia",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shivam Mavi",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Vijay Shankar",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Alzarri Joseph",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Mohammad Shami",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Noor Ahmad",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Sai Kishore",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Rashid Khan",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Yash Dayal",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Kane Williamson",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Joshua Little",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Mohit Sharma",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Odean Smith",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "K.S Bharat",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Urvil Patel",
        TeamLogo: "gt",
        Image: "ipli",
        Role: " Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Hardik Pandya",
        TeamLogo: "gt",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
        Role: "Allrounder india captain",
        Matches: []
    },
    {
        FullName: "Rinku Singh",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Rahmanullah Gurbaz",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "David Wiese",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allsrounder",
        Matches: []
    },
    {
        FullName: "Kulwant Khejroliya",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Suyash Sharma",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Nitish Rana",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Shakib Al Hasan",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Anukul Roy",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Lockie Ferguson",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Andre Russell",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Mandeep Singh",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Venkatesh Iyer",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Umesh Yadav",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Harshit Rana",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Tim Southee",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Shardul Thakur",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Litton Das",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Wicketkeeper Batter",
        Matches: []
    },
    {
        FullName: "Sunil Narine",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Vaibhav Arora",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Narayan Jagadeesan",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Batter Wicketkeeper india",
        Matches: []
    },
    {
        FullName: "Varun Chakaravarthy",
        TeamLogo: "kkr",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Shreyas Iyer",
        TeamLogo: "kkr",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        Role: "Batter india captain",
        Matches: []
    },
    {
        FullName: "Manan Vohra",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Quinton de Kock",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "Ayush Badoni",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Deepak Hooda",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Krishnappa Gowtham",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Karan Sharma",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Krunal Pandya",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Kyle Mayers",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Marcus Stoinis",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Alllrounder",
        Matches: []
    },
    {
        FullName: "Avesh Khan",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Mark Wood",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler ",
        Matches: []
    },
    {
        FullName: "Mayank Yadav",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Mohsin Khan",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ravi Bishnoi",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Jaydev Unadkat",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Yash Thakur",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Romario Shepherd",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Nicholas Pooran",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "Amit Mishra",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Daniel Sams",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: "  Allrounder",
        Matches: []
    },
    {
        FullName: "Swapnil Singh",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Prerak Mankad",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Naveen Ul Haq",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Yudhvir Singh",
        TeamLogo: "lsg",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "KL Rahul",
        TeamLogo: "lsg",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
        Role: "Wicketkeeper Batter captain india",
        Matches: []
    },
    {
        FullName: "Dewald Brevis",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Suryakumar Yadav",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Ishan Kishan",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter Wicketkeeper india",
        Matches: []
    },
    {
        FullName: "Arjun Tendulkar",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Hrithik Shokeen",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Jofra Archer",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler ",
        Matches: []
    },
    {
        FullName: "N. Tilak Varma",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Mohd. Arshad Khan",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Ramandeep Singh",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Tim David",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Jasprit Bumrah",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Cameron Green",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Jhye Richardson",
        TeamLogo: "mi",
        Image: "ipli",
        Role: "  Bowler",
        Matches: []
    },
    {
        FullName: "Kumar Kartikeya Singh",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Tristan Stubbs",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Piyush Chawla",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Akash Madhwal",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Shams Mulani",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Jason Behrendorff",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Nehal Wadhera",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Vishnu Vinod",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Raghav Goyal",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Duan Jansen",
        TeamLogo: "mi",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Rohit Sharma",
        TeamLogo: "mi",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        Role: "Batter captain india",
        Matches: []
    },
    {
        FullName: "Bhanuka Rajapaksa",
        TeamLogo: "pk",
        Image: "ipli",
        Role: "  Batter",
        Matches: []
    },
    {
        FullName: "Jitesh Sharma",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Wicketkeeper Btter india",
        Matches: []
    },
    {
        FullName: "Jonny Bairstow",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "Prabhsimran Singh",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Atharva Taide",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Harpreet Brar",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Liam Livingstone",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Raj Angad Bawa",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Rishi Dhawan",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shahrukh Khan",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Arshdeep Singh",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Baltej Dhanda",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Kagiso Rabada",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Nathan Ellis",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler ",
        Matches: []
    },
    {
        FullName: "Rahul Chahar",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Sam Curran",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Sikandar Raza",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Harpreet Bhatia",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Vidwath Kaverappa",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Mohit Rathee",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shivam singh",
        TeamLogo: "pk",
        Image: "ipli",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shikhar Dhawan",
        TeamLogo: "pk",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
        Role: "Batter captain india",
        Matches: []
    },
    {
        FullName: "Varun",
        TeamLogo: "rr",
        Image: "ipli",
        Role: " All india",
        Matches: []
    },
    {
        FullName: "Sanju Samson",
        TeamLogo: "rr",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
        Role: "Wicketkeeper Batter india captain",
        Matches: []
    },
    {
        FullName: "Faf du Plessis",
        TeamLogo: "rcb",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png",
        Role: "Batter captain",
        Matches: []
    },
    {
        FullName: "Bhuvneshwar Kumar",
        TeamLogo: "srh",
        Image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/116.png",
        Role: "Bowler india captain",
        Matches: []
    }
];
export var PlayerData = [];
class NewPlayer {
    constructor(FullName, TeamLogo, Image, Role, Matches) {
        this.FullName = FullName;
        this.TeamLogo = TeamLogo;
        this.Image = Image;
        this.Role = Role;
        this.Matches = [];
        for (let index = 0; index < Matches.length; index++) {
            this.Matches.push(new NewMatch(Matches[index]))
        }
    }
    IsKeeper = function () {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("keeper");
    };
    IsCaptain = function () {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("captain");
    };
    IsIndian = function () {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("india");
    };
    getMatches = function () {
        return this.Matches.length;
    };
    NotOuts = function () {
        var NotOuts = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].NotOuts) {
                NotOuts++;
            }
        }
        return NotOuts;
    };
    Runs = function () {
        var Runs = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs) {
                Runs += this.Matches[index].Runs;
            }
        }
        return Runs;
    };
    Ballsfaced = function () {
        var Ballsfaced = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs) {
                Ballsfaced += this.Matches[index].Ballsfaced;
            }
        }
        return Ballsfaced;
    };
    HighestScore = function () {
        var HighestScore = 0;
        var Notout = "";
        for (const index in this.Matches) {
            if (this.Matches[index].Runs > HighestScore) {
                HighestScore = this.Matches[index].Runs;
                if (this.Matches[index].NotOuts) Notout = "*";
            }
        }
        return Notout ? (HighestScore + Notout) : HighestScore;
    };
    Sixes = function () {
        var Sixes = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Sixes) {
                Sixes += this.Matches[index].Sixes;
            }
        }
        return Sixes;
    };
    StrikeRate = function () {
        if (this.Runs()) {
            return ((this.Runs() / this.Ballsfaced()) * 100).toFixed(2);
        }
        return 0;
    };
    BattingAvg = function () {
        if (this.Runs()) {
            if (!(this.getMatches() - this.NotOuts())) {
                return (this.Runs()).toFixed(2);
            }
            return (this.Runs() / (this.getMatches() - this.NotOuts())).toFixed(2);
        }
        return 0;
    };
    Fifties = function () {
        var Fifties = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs >= 50) {
                Fifties++;
            }
        }
        return Fifties;
    };
    Hundreds = function () {
        var Hundreds = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs >= 100) {
                Hundreds++;
            }
        }
        return Hundreds;
    };
    Fifers = function () {
        var Fifers = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket >= 5) {
                Fifers++;
            }
        }
        return Fifers;
    };
    BallsBowled = function () {
        var BallsBowled = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].BallsBowled) {
                BallsBowled += this.Matches[index].BallsBowled;
            }
        }
        return BallsBowled;
    };
    RunsGiven = function () {
        var RunsGiven = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].RunsGiven) {
                RunsGiven += this.Matches[index].RunsGiven;
            }
        }
        return RunsGiven;
    };
    Economy = function () {
        if (this.BallsBowled()) {
            return ((this.RunsGiven() / this.BallsBowled()) * 6).toFixed(2);
        }
        return 0;
    };
    BowlingAvg = function () {
        if (this.Wicket()) {
            return (this.RunsGiven() / this.Wicket()).toFixed(2);
        }
        return 0;
    };
    BowlingStrike = function () {
        if (this.Wicket()) {
            return (this.BallsBowled() / this.Wicket()).toFixed(2);
        }
        return 0;
    };
    BBM = function () {
        var MostWicket = [];
        var RunConcede;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket || this.Matches[index].Wicket === 0) {
                MostWicket.push(this.Matches[index].Wicket);
            }
        }
        MostWicket.sort();
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket == MostWicket[0]) {
                RunConcede = this.Matches[index].RunsGiven;
            }
        }
        return (MostWicket[0] || MostWicket[0] === 0) ? `${MostWicket[0]}/${RunConcede}` : "0/0";
    };
    Wicket = function () {
        var Wicket = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket) {
                Wicket += this.Matches[index].Wicket;
            }
        }
        return Wicket;
    };
    Team = function () {
        for (const index in TeamInfo) {
            if (this.TeamLogo == TeamInfo[index].Logo) {
                return TeamInfo[index].Team();
            }
        }
    };
    TeamImage = function () {
        for (const index in TeamInfo) {
            if (this.TeamLogo == TeamInfo[index].Logo) {
                return TeamInfo[index].Image;
            }
        }
    }
}
class NewMatch {
    constructor(match) {
        this.match = match;
        this.Runs = match.Runs;
        this.Ballsfaced = match.Ballsfaced;
        this.Sixes = match.Sixes;
        this.NotOuts = match.NotOuts;
        this.BallsBowled = match.BallsBowled;
        this.RunsGiven = match.RunsGiven;
        this.Wicket = match.Wicket;
    }
    StrikeRate = function () {
        if (this.Runs) {
            return ((this.Runs / this.Ballsfaced) * 100).toFixed(2);
        }
        return 0;
    }
    Economy = function () {
        if (this.BallsBowled) {
            return ((this.RunsGiven / this.BallsBowled) * 6).toFixed(2);
        }
        return 0;
    }
}

for (let index = 0; index < Players.length; index++) {
    PlayerData.push(new NewPlayer(Players[index].FullName, Players[index].TeamLogo, Players[index].Image, Players[index].Role, Players[index].Matches));
}