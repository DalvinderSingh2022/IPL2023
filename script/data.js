export var TeamInfo = [];
class NewTeam {
    constructor(id, Matches, Nrr, Logo, ChampionsIn, src, round, qualified = false) {
        this.id = id;
        this.Logo = Logo;
        this.ChampionsIn = ChampionsIn;
        this.Matches = Matches;
        this.Nrr = (Nrr).toFixed(3);
        this.Image = {
            src: src,
            round: {
                src: round,
            }
        };
        this.Qualified = qualified;
    }
    Team() {
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
            case "pbks":
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
    Won() {
        var won = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == 1) {
                won++;
            }
        }
        return won;
    };
    Lose() {
        var lose = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == -1) {
                lose++;
            }
        }
        return lose;
    };
    Draw() {
        var draw = 0;
        for (const index in this.Matches) {
            if (this.Matches[index] == 0) {
                draw++;
            }
        }
        return draw;
    };
    Captain() {
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo && PlayerData[index].IsCaptain()) {
                return (PlayerData[index]);
            };
        };
    };
    Runs() {
        var Runs = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Runs += PlayerData[index].Runs();
            }
        }
        return Runs;
    }
    Wicket() {
        var Wicket = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Wicket += PlayerData[index].Wicket();
            }
        }
        return Wicket;
    }
    Hundreds() {
        var Hundreds = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Hundreds += PlayerData[index].Hundreds();
            }
        }
        return Hundreds;
    }
    Sixes() {
        var Sixes = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Sixes += PlayerData[index].Sixes();
            }
        }
        return Sixes;
    }
    Fifties() {
        var Fifties = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Fifties += PlayerData[index].Fifties()
            }
        }
        return Fifties;
    }
    Maidens() {
        var Maidens = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Maidens += PlayerData[index].Maidens()
            }
        }
        return Maidens;
    }
    Fifers() {
        var Fifers = 0;
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Fifers += PlayerData[index].Fifers()
            }
        }
        return Fifers;
    }
    Played() { return this.Matches.length };
    Points() { return this.Won() * 2 };
}
TeamInfo.push(new NewTeam(28544, [-1, 1], 0.036, "csk", "2010, 2011, 2018, 2021", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png"));
TeamInfo.push(new NewTeam(28572, [-1], -2.5, "dc", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png"));
TeamInfo.push(new NewTeam(28537, [1], 0.514, "gt", "2022", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Medium/GTmedium.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png"));
TeamInfo.push(new NewTeam(28558, [-1], -0.438, "kkr", "2012, 2014", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKR.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png"));
TeamInfo.push(new NewTeam(28565, [1, -1], 0.950, "lsg", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Medium/LSGmedium.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png"));
TeamInfo.push(new NewTeam(28600, [-1], -1.981, "mi", "2013, 2015, 2017, 2019, 2020", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png"));
TeamInfo.push(new NewTeam(28551, [1], 0.438, "pbks", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKS.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png"));
TeamInfo.push(new NewTeam(28586, [1], 3.6, "rr", "2008", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RR.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png"));
TeamInfo.push(new NewTeam(28593, [1], 1.981, "rcb", "", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png"));
TeamInfo.push(new NewTeam(28579, [-1], -3.6, "srh", "2016", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png", "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png"));

var Players = [
    {
        FullName: "MS Dhoni",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        Role: "Wicketkeeper Batter india captain",
        Matches: [
            {
                Runs: 14,
                Ballsfaced: 7,
                Sixes: 1,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Ravindra Jadeja",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 2,
                BallsBowled: 24,
                RunsGiven: 28,
                Wicket: 1
            }
        ]
    },
    {
        FullName: "Deepak Chahar",
        SecondName: "D Chahar",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 29,
            }
        ]
    },
    {
        FullName: "Ambati Rayudu",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/60.png",
        Role: "Wicketkeeper Batter india",
        Matches: [
            {
                Runs: 12,
                Ballsfaced: 12,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Mitchell Santner",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/75.png",
        Role: "Allrounder",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 3,
                Notout: true,
                BallsBowled: 24,
                RunsGiven: 32
            }
        ]
    },
    {
        FullName: "Devon Conway",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
        Role: " Batter",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 6,
            }
        ]
    },
    {
        FullName: "Ruturaj Gaikwad",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 92,
                Ballsfaced: 50,
                Sixes: 9
            }
        ]
    },
    {
        FullName: "Subhranshu Senapati",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/971.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Dwaine Pretorius",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/289.png",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "K Bhagath Varma",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/577.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Rajvardhan Hangargekar",
        SecondName: "RS Hangargekar",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/783.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 36,
                Wicket: 3,
            }
        ]
    },
    {
        FullName: "Moeen Ali",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 23,
                Ballsfaced: 17,
                Sixes: 1
            }
        ]
    },
    {
        FullName: "Shivam Dube",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 19,
                Ballsfaced: 18,
                Sixes: 1
            }
        ]
    },
    {
        FullName: "Maheesh Theekshana",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/629.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Mukesh Choudhary",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/970.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Prashant Solanki",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/972.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Simarjeet Singh",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/622.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ajinkya Rahane",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/44.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Tushar Deshpande",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/539.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 20,
                RunsGiven: 51,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Ben Stokes",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/177.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 7,
                Ballsfaced: 6,
            }
        ]
    },
    {
        FullName: "Matheesha Pathirana",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1014.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Shaik Rasheed",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/778.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Akash Singh",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Sisada Magala",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Nishant Sindhu",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/791.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Kyle Jamieson",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/382.png",
        Role: " Bowler ",
        Matches: []
    },
    {
        FullName: "Ajay Mandal",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1931.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "David Warner",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        Role: " Batter captain",
        Matches: [
            {
                Runs: 56,
                Ballsfaced: 48,
            }
        ]
    },
    {
        FullName: "Prithvi Shaw",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 12,
                Ballsfaced: 9,
            }
        ]
    },
    {
        FullName: "Rovman Powell",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/329.png",
        Role: " Batter ",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 3
            }
        ]
    },
    {
        FullName: "Axar Patel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 16,
                Ballsfaced: 11,
                Sixes: 1,
                BallsBowled: 24,
                RunsGiven: 38,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Kamlesh Nagarkoti",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/146.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Lalit Yadav",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/538.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Mitchell Marsh",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/40.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 0,
                Ballsfaced: 1
            }
        ]
    },
    {
        FullName: "Pravin Dubey",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/548.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ripal Patel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/580.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Sarfaraz Khan",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/139.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 9,
            }
        ]
    },
    {
        FullName: "Vicky Ostwal",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/786.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Yash Dhull",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/777.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Aman Hakim Khan",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/979.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 5
            }
        ]
    },
    {
        FullName: "Anrich Nortje",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/142.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Chetan Sakariya",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/592.png",
        Role: " Bowler india",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 4,
                BallsBowled: 24,
                RunsGiven: 53,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Kuldeep Yadav",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/14.png",
        Role: " Bowler india",
        Matches: [
            {
                Runs: 6,
                Ballsfaced: 10,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 35,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Lungi Ngidi",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/99.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Mustafizur Rahman",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/258.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Khaleel Ahmed",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/8.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 30,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Phil Salt",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1220.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Ishant Sharma",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/50.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Manish Pandey",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/16.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Mukesh Kumar",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1462.png",
        Role: " Bowler india",
        Matches: [
            {
                Runs: 0,
                Ballsfaced: 1,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 34,
            }
        ]
    },
    {
        FullName: "Rilee Rossouw",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1426.png",
        Role: " Batter",
        Matches: [
            {
                Runs: 30,
                Ballsfaced: 20,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Rishabh Pant",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Abishek Porel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Abhinav Manohar",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/974.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "David Miller",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/128.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Shubman Gill",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 63,
                Ballsfaced: 36,
                Sixes: 3,
            }
        ]
    },
    {
        FullName: "Matthew Wade",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/549.png",
        Role: "Wicketkeeper Batter",
        Matches: []
    },
    {
        FullName: "Wriddhiman Saha",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/225.png",
        Role: " Wicketkeeper Batter india",
        Matches: [
            {
                Runs: 25,
                Ballsfaced: 16,
                Sixes: 2
            }
        ]
    },
    {
        FullName: "Sai Sudharsan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/976.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 22,
                Ballsfaced: 17,
            }
        ]
    },
    {
        FullName: "Darshan Nalkande",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/127.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Jayant Yadav",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/165.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Pradeep Sangwan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/977.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Rahul Tewatia",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/120.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 15,
                Ballsfaced: 14,
                Sixes: 1,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Shivam Mavi",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/154.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Vijay Shankar",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/61.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 27,
                Ballsfaced: 21,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Alzarri Joseph",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/229.png",
        Role: " Bowler",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 33,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Mohammed Shami",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 29,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Noor Ahmad",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/975.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Sai Kishore",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/544.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Rashid Khan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png",
        Role: " Bowler",
        Matches: [
            {
                Runs: 10,
                Ballsfaced: 3,
                Sixes: 1,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 26,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Yash Dayal",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/978.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 6,
                RunsGiven: 14,
            }
        ]
    },
    {
        FullName: "Kane Williamson",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/65.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Joshua Little",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/678.png",
        Role: " Bowler",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 41,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Mohit Sharma",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/100.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Odean Smith",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/863.png",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "K.S Bharat",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/365.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Urvil Patel",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1486.png",
        Role: " Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Hardik Pandya",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png",
        Role: "Allrounder india captain",
        Matches: [
            {
                Runs: 8,
                Ballsfaced: 11,
                BallsBowled: 18,
                RunsGiven: 28,
            }
        ]
    },
    {
        FullName: "Rinku Singh",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 4
            }
        ]
    },
    {
        FullName: "Rahmanullah Gurbaz",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/641.png",
        Role: " Batter Wicketkeeper",
        Matches: [
            {
                Runs: 22,
                Ballsfaced: 16,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "David Wiese",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/674.png",
        Role: " Allsrounder",
        Matches: []
    },
    {
        FullName: "Kulwant Khejroliya",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/204.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Suyash Sharma",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1932.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Nitish Rana",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        Role: " Batter india captain",
        Matches: [
            {
                Runs: 24,
                Ballsfaced: 17,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Shakib Al Hasan",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Anukul Roy",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/160.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 5,
            }
        ]
    },
    {
        FullName: "Lockie Ferguson",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/69.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Andre Russell",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 35,
                Ballsfaced: 19,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Mandeep Singh",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/132.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 2,
                Ballsfaced: 4
            }
        ]
    },
    {
        FullName: "Venkatesh Iyer",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 34,
                Ballsfaced: 28,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Umesh Yadav",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/21.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 27,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Harshit Rana",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1013.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Tim Southee",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/77.png",
        Role: " Bowler",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 54,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Shardul Thakur",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png",
        Role: " Bowler india",
        Matches: [
            {
                Runs: 8,
                Ballsfaced: 3,
                Sixes: 1,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 43,
            }
        ]
    },
    {
        FullName: "Litton Das",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: " Wicketkeeper Batter",
        Matches: []
    },
    {
        FullName: "Sunil Narine",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/156.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 7,
                Ballsfaced: 2,
                Sixes: 1,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 40,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Vaibhav Arora",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/583.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Narayan Jagadeesan",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/97.png",
        Role: " Batter Wicketkeeper india",
        Matches: []
    },
    {
        FullName: "Varun Chakaravarthy",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/583.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 26,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Shreyas Iyer",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Manan Vohra",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/185.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Quinton de Kock",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "Ayush Badoni",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/985.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 18,
                Ballsfaced: 7,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Deepak Hooda",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/215.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 17,
                Ballsfaced: 18,
            }
        ]
    },
    {
        FullName: "Krishnappa Gowtham",
        SecondName: "K Gowtham",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/179.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 6,
                Ballsfaced: 1,
                Sixes: 1,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 23
            }
        ]
    },
    {
        FullName: "Karan Sharma",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/986.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Krunal Pandya",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 15,
                Ballsfaced: 13,
                Sixes: 1,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Kyle Mayers",
        SecondName: "K Mayers",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/726.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 73,
                Ballsfaced: 38,
                Sixes: 7,
                BallsBowled: 6,
                RunsGiven: 7
            }
        ]
    },
    {
        FullName: "Marcus Stoinis",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/23.png",
        Role: " Alllrounder",
        Matches: [
            {
                Runs: 12,
                Ballsfaced: 10,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Avesh Khan",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 29,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Mark Wood",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/315.png",

        Role: " Bowler ",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 14,
                Wicket: 5,
            }
        ]
    },
    {
        FullName: "Mayank Yadav",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/987.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Mohsin Khan",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/541.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Ravi Bishnoi",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/520.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 31,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Jaydev Unadkat",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/180.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 39,
            }
        ]
    },
    {
        FullName: "Yash Thakur",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1550.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Romario Shepherd",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/371.png",
        Role: " Allrounder",
        Matches: []
    },
    {
        FullName: "Nicholas Pooran",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png",
        Role: " Batter Wicketkeeper",
        Matches: [
            {
                Runs: 36,
                Ballsfaced: 21,
                Sixes: 3,
            }
        ]
    },
    {
        FullName: "Amit Mishra",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/107.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Daniel Sams",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/546.png",
        Role: "  Allrounder",
        Matches: []
    },
    {
        FullName: "Swapnil Singh",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1483.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Prerak Mankad",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/998.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Naveen Ul Haq",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/639.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Yudhvir Singh",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/587.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "KL Rahul",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        Role: "Wicketkeeper Batter captain india",
        Matches: [
            {
                Runs: 8,
                Ballsfaced: 12,
                Sixes: 1,
            }
        ]
    },
    {
        FullName: "Dewald Brevis",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/797.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Suryakumar Yadav",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 15,
                Ballsfaced: 16
            }
        ]
    },
    {
        FullName: "Ishan Kishan",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        Role: " Batter Wicketkeeper india",
        Matches: [
            {
                Runs: 10,
                Ballsfaced: 13
            }
        ]
    },
    {
        FullName: "Arjun Tendulkar",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/585.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Hrithik Shokeen",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/992.png",
        Role: " Bowler india",
        Matches: [
            {
                Runs: 5,
                Ballsfaced: 3,
                BallsBowled: 6,
                RunsGiven: 17
            }
        ]
    },
    {
        FullName: "Jofra Archer",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png",
        Role: " Bowler ",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 33
            }
        ]
    },
    {
        FullName: "N. Tilak Varma",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 84,
                Ballsfaced: 46,
                Sixes: 4,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Mohd. Arshad Khan",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/988.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 15,
                Ballsfaced: 9,
                Sixes: 1,
                NotOuts: true,
                BallsBowled: 14,
                RunsGiven: 28,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Ramandeep Singh",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/991.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Tim David",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png",
        Role: " Batter",
        Matches: [
            {
                Runs: 4,
                Ballsfaced: 7
            }
        ]
    },
    {
        FullName: "Jasprit Bumrah",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Cameron Green",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 5,
                Ballsfaced: 4,
                BallsBowled: 12,
                RunsGiven: 30,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Jhye Richardson",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/59.png",
        Role: "  Bowler",
        Matches: []
    },
    {
        FullName: "Kumar Kartikeya Singh",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1015.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Tristan Stubbs",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1017.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Piyush Chawla",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 26
            }
        ]
    },
    {
        FullName: "Akash Madhwal",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1045.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Shams Mulani",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/600.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Jason Behrendorff",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/4.png",
        Role: " Bowler",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 37,
            }
        ]
    },
    {
        FullName: "Nehal Wadhera",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1541.png",
        Role: " Allrounder india",
        Matches: [
            {
                Runs: 21,
                Ballsfaced: 13,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Vishnu Vinod",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/581.png",
        Role: " Wicketkeeper Batter india",
        Matches: []
    },
    {
        FullName: "Raghav Goyal",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1933.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Duan Jansen",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1227.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Rohit Sharma",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        Role: "Batter captain india",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 10
            }
        ]
    },
    {
        FullName: "Bhanuka Rajapaksa",
        SecondName: "B Rajapaksa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/372.png",
        Role: "  Batter",
        Matches: [
            {
                Runs: 50,
                Ballsfaced: 32,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Jitesh Sharma",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png",
        Role: " Wicketkeeper Btter india",
        Matches: [
            {
                Runs: 21,
                Ballsfaced: 11,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Jonny Bairstow",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/216.png",
        Role: " Batter Wicketkeeper",
        Matches: []
    },
    {
        FullName: "Matthew William Short",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2032.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Prabhsimran Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/137.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 23,
                Ballsfaced: 12,
                Sixes: 2,
            }
        ]
    },
    {
        FullName: "Atharva Taide",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1001.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Harpreet Brar",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/130.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 6,
                RunsGiven: 7
            }
        ]
    },
    {
        FullName: "Liam Livingstone",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/183.png",
        Role: " Batter",
        Matches: []
    },
    {
        FullName: "Raj Angad Bawa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/781.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Rishi Dhawan",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/996.png",
        Role: " Allrounder india",
        Matches: [
            {
                BallsBowled: 6,
                RunsGiven: 15
            }
        ]
    },
    {
        FullName: "Shahrukh Khan",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/590.png",
        Role: " Batter india",
        Matches: [
            {
                Runs: 11,
                Ballsfaced: 7,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Arshdeep Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/125.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 19,
                Wicket: 3,
            }
        ]
    },
    {
        FullName: "Baltej Dhanda",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/994.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Kagiso Rabada",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/116.png",
        Role: " Bowler",
        Matches: []
    },
    {
        FullName: "Nathan Ellis",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/633.png",
        Role: " Bowler ",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 27,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Rahul Chahar",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/171.png",
        Role: " Bowler india",
        Matches: [
            {
                BallsBowled: 12,
                RunsGiven: 12,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Sam Curran",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 26,
                Ballsfaced: 17,
                Sixes: 2,
                NotOuts: true,
                BallsBowled: 18,
                RunsGiven: 38,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Sikandar Raza",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/820.png",
        Role: " Allrounder",
        Matches: [
            {
                Runs: 16,
                Ballsfaced: 13,
                Sixes: 1,
                BallsBowled: 18,
                RunsGiven: 25,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Harpreet Bhatia",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1934.png",
        Role: " Batter india",
        Matches: []
    },
    {
        FullName: "Vidwath Kaverappa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1564.png",
        Role: " Bowler india",
        Matches: []
    },
    {
        FullName: "Mohit Rathee",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1935.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shivam Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1936.png",
        Role: " Allrounder india",
        Matches: []
    },
    {
        FullName: "Shikhar Dhawan",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png",
        Role: "Batter captain india",
        Matches: [
            {
                Runs: 40,
                Ballsfaced: 29
            }
        ]
    },
    {
        FullName: "Sanju Samson",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png",
        Role: "Wicketkeeper Batter india captain",
        Matches: [
            {
                Runs: 55,
                Ballsfaced: 32,
                Sixes: 4,
            }
        ]
    },
    {
        FullName: "Devdutt Padikkal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 2,
                Ballsfaced: 5,
            }
        ]
    },
    {
        FullName: "Jos Buttler",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png",
        Role: "Batter Wicketkeeper",
        Matches: [
            {
                Runs: 54,
                Ballsfaced: 22,
                Sixes: 3,
            }
        ]
    },
    {
        FullName: "Shimron Hetmyer",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/210.png",
        Role: "Batter",
        Matches: [
            {
                Runs: 22,
                Ballsfaced: 16,
                Sixes: 1,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Yashasvi Jaiswal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 54,
                Ballsfaced: 37,
            }
        ]
    },
    {
        FullName: "Dhruv Jurel",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1004.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Riyan Parag",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/189.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 7,
                Ballsfaced: 6,
            }
        ]
    },
    {
        FullName: "Donovan Ferreira",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Batter",
        Matches: []
    },
    {
        FullName: "Kunal Rathore",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1540.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Joe Root",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/312.png",
        Role: "Batter",
        Matches: []
    },
    {
        FullName: "Ravichandran Ashwin",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/45.png",
        Role: "Allrounder india",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 2,
                NotOuts: true,
                BallsBowled: 24,
                RunsGiven: 27,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Akash Vashisht",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1938.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Jason Holder",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/263.png",
        Role: "Allrounder",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 16,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Abdul P A",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "KC Cariappa",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/227.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Kuldeep Sen",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1005.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Kuldip Yadav",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/593.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Navdeep Saini",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/207.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 12,
                RunsGiven: 34,
            }
        ]
    },
    {
        FullName: "Obed Macoy",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/645.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "KM Asif",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/88.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 15,
            }
        ]
    },
    {
        FullName: "Prashid Krishna",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Sandeep Sharma",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/220.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Trent Boult",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/66.png",
        Role: "Bowler",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 21,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Murugan Ashwin",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/135.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Yuzvendra Chahal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/10.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 17,
                Wicket: 4,
            }
        ]
    },
    {
        FullName: "Adam Zampa",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/24.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Faf du Plessis",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        Role: "Batter captain",
        Matches: [
            {
                Runs: 73,
                Ballsfaced: 43,
                Sixes: 6
            }
        ]
    },
    {
        FullName: "Finn Allen",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/595.png",
        Role: "Batter",
        Matches: []
    },
    {
        FullName: "Rajat Patidar",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Virat Kohli",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 82,
                Ballsfaced: 49,
                Sixes: 5,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Anuj Rawat",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/534.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Dinesh Karthik",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/13.png",
        Role: "Batter india Wicketkeeper",
        Matches: [
            {
                Runs: 0,
                Ballsfaced: 3
            }
        ]
    },
    {
        FullName: "Suyash S Prabhudessai",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/598.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Will Jacks",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Batter",
        Matches: []
    },
    {
        FullName: "David Willey",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/90.png",
        Role: "Allrounder ",
        Matches: []
    },
    {
        FullName: "Glenn Maxwell",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        Role: "Allrounder ",
        Matches: [
            {
                Runs: 12,
                Ballsfaced: 3,
                Sixes: 2,
                BallsBowled: 6,
                RunsGiven: 16
            }
        ]
    },
    {
        FullName: "Mahipal Lamror",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/184.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Wanindu Hasaranga",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Allrounder ",
        Matches: []
    },
    {
        FullName: "Karn Sharma",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/98.png",
        Role: "Allrounder india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 32,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Michael Bracewell",
        SecondName: "M Bracewell",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1465.png",
        Role: "Allrounder india",
        Matches: [
            {
                BallsBowled: 12,
                RunsGiven: 16,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Sonu Yadav",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1940.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Manoj Bhandage",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1485.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Harshal Patel",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/114.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 43,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Shahbaz Ahmed",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/523.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Akash Deep",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1007.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 29,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Josh Hazlewood",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/.png",
        Role: "Bowler ",
        Matches: []
    },
    {
        FullName: "Siddharth Kaul",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/64.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Mohammed Siraj",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 21,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Reece Topley",
        SecondName: "R Topley",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/574.png",
        Role: "Bowler ",
        Matches: [
            {
                BallsBowled: 12,
                RunsGiven: 14,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Himanshu Sharma",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1503.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Rajan Kumar",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1503.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Avinash Singh",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1939.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "Bhuvneshwar Kumar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png",
        Role: "Bowler india",
        Matches: [
            {
                Runs: 6,
                Ballsfaced: 10,
                BallsBowled: 18,
                RunsGiven: 36,
            }
        ]
    },
    {
        FullName: "Abdul Samad",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/525.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 32,
                Ballsfaced: 32,
                Sixes: 1,
                NotOuts: true,
            }
        ]
    },
    {
        FullName: "Aiden Markram",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png",
        Role: "Batter india captain",
        Matches: []
    },
    {
        FullName: "Rahul Tripathi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 0,
                Ballsfaced: 2
            }
        ]
    },
    {
        FullName: "Glenn Phillips",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/635.png",
        Role: "Batter",
        Matches: [
            {
                Runs: 8,
                Ballsfaced: 6,
                Sixes: 1
            }
        ]
    },
    {
        FullName: "Harry Brook",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1218.png",
        Role: "Batter ",
        Matches: [
            {
                Runs: 13,
                Ballsfaced: 21
            }
        ]
    },
    {
        FullName: "Mayank Agarwal",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png",
        Role: "Batter india",
        Matches: [
            {
                Runs: 27,
                Ballsfaced: 23
            }
        ]
    },
    {
        FullName: "Heinrich Klaasen",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/202.png",
        Role: "Batter",
        Matches: []
    },
    {
        FullName: "Anmolpreet Singh",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/159.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Upendra Singh Yadav",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1472.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Nitish Kumar Reddy",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1944.png",
        Role: "Batter india",
        Matches: []
    },
    {
        FullName: "Abhishek Sharma",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png",
        Role: "Allrounder india",
        Matches: [
            {
                Runs: 0,
                Ballsfaced: 3
            }
        ]
    },
    {
        FullName: "Marco Jansen",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/586.png",
        Role: "Allrounder ",
        Matches: []
    },
    {
        FullName: "Washington Sundar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/20.png",
        Role: "Allrounder india",
        Matches: [
            {
                Runs: 1,
                Ballsfaced: 5,
                BallsBowled: 18,
                RunsGiven: 32,
            }
        ]
    },
    {
        FullName: "Vivrant Sharma",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1942.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Mayank dagar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1547.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Samarth Vyas",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1534.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Sanvir Singh",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1943.png",
        Role: "Allrounder india",
        Matches: []
    },
    {
        FullName: "Fazalhaq Farooqi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1011.png",
        Role: "Bowler",
        Matches: [
            {
                BallsBowled: 24,
                RunsGiven: 41,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Kartik Tyagi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/536.png",
        Role: "Bowler india",
        Matches: []
    },
    {
        FullName: "T Natarajan",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png",
        Role: "Bowler india",
        Matches: [
            {
                BallsBowled: 18,
                RunsGiven: 23,
                Wicket: 2,
            }
        ]
    },
    {
        FullName: "Umran Malik",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/637.png",
        Role: "Bowler india",
        Matches: [
            {
                Runs: 19,
                Ballsfaced: 8,
                Sixes: 2,
                NotOuts: true,
                BallsBowled: 18,
                RunsGiven: 32,
                Wicket: 1,
            }
        ]
    },
    {
        FullName: "Akeal Hosein",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/722.png",
        Role: "Bowler",
        Matches: []
    },
    {
        FullName: "Adil Rashid",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/311.png",
        Role: "Bowler",
        Matches: [
            {
                Runs: 18,
                Ballsfaced: 13,
                Sixes: 1,
                BallsBowled: 24,
                RunsGiven: 33,
            }
        ]
    },
    {
        FullName: "Mayank Markande",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/87.png",
        Role: "Bowler india",
        Matches: []
    },
];
export var PlayerData = [];
class NewPlayer {
    constructor({ FullName, SecondName, TeamLogo, Image, Role, Matches }) {
        this.FullName = FullName;
        this.SecondName = SecondName;
        this.TeamLogo = TeamLogo;
        this.Image = Image;
        this.Role = Role;
        this.Matches = [];
    }
    IsKeeper() {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("keeper");
    };
    IsCaptain() {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("captain");
    };
    IsIndian() {
        return this.Role.toLowerCase().replaceAll(" ", "").includes("india");
    };
    getMatches() {
        return this.Matches.length;
    };
    NotOuts() {
        var NotOuts = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].NotOuts) {
                NotOuts++;
            }
        }
        return NotOuts;
    };
    Runs() {
        var Runs = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs) {
                Runs += this.Matches[index].Runs;
            }
        }
        return Runs;
    };
    Ballsfaced() {
        var Ballsfaced = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs) {
                Ballsfaced += this.Matches[index].Ballsfaced;
            }
        }
        return Ballsfaced;
    };
    HighestScore() {
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
    Sixes() {
        var Sixes = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Sixes) {
                Sixes += this.Matches[index].Sixes;
            }
        }
        return Sixes;
    };
    Fours() {
        var Fours = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Fours) {
                Fours += this.Matches[index].Fours;
            }
        }
        return Fours;
    };
    StrikeRate() {
        if (this.Runs()) {
            return ((this.Runs() / this.Ballsfaced()) * 100).toFixed(2);
        }
        return 0;
    };
    BattingAvg() {
        if (this.Runs()) {
            if (!(this.getMatches() - this.NotOuts())) {
                return (this.Runs()).toFixed(2);
            }
            return (this.Runs() / (this.getMatches() - this.NotOuts())).toFixed(2);
        }
        return 0;
    };
    Fifties() {
        var Fifties = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs >= 50) {
                Fifties++;
            }
        }
        return Fifties;
    };
    Hundreds() {
        var Hundreds = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Runs >= 100) {
                Hundreds++;
            }
        }
        return Hundreds;
    };
    Fifers() {
        var Fifers = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket >= 5) {
                Fifers++;
            }
        }
        return Fifers;
    };
    BallsBowled() {
        var BallsBowled = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].BallsBowled) {
                BallsBowled += this.Matches[index].BallsBowled;
            }
        }
        return BallsBowled;
    };
    RunsGiven() {
        var RunsGiven = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].RunsGiven) {
                RunsGiven += this.Matches[index].RunsGiven;
            }
        }
        return RunsGiven;
    };
    Economy() {
        if (this.BallsBowled()) {
            return ((this.RunsGiven() / this.BallsBowled()) * 6).toFixed(2);
        }
        return 0;
    };
    BowlingAvg() {
        if (this.Wicket()) {
            return (this.RunsGiven() / this.Wicket()).toFixed(2);
        }
        return 0;
    };
    BowlingStrike() {
        if (this.Wicket()) {
            return (this.BallsBowled() / this.Wicket()).toFixed(2);
        }
        return 0;
    };
    BBM() {
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
    Wicket() {
        var Wicket = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket) {
                Wicket += this.Matches[index].Wicket;
            }
        }
        return Wicket;
    };
    Maidens() {
        var Maidens = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Maidens) {
                Maidens += this.Matches[index].Maidens;
            }
        }
        return Maidens;
    };
    Team() {
        for (const index in TeamInfo) {
            if (this.TeamLogo == TeamInfo[index].Logo) {
                return TeamInfo[index].Team();
            }
        }
    };
    TeamImage() {
        for (const index in TeamInfo) {
            if (this.TeamLogo == TeamInfo[index].Logo) {
                return TeamInfo[index].Image;
            }
        }
    }
    updateBatStats({ balls, fours, outDesc, runs, sixes, strikeRate }, id) {
        const index = this.matchIndex(id) != undefined ? this.matchIndex(id) : this.Matches.length;
        this.Matches[index] = this.matchIndex(id) != undefined ? this.Matches[index] : {};
        this.Matches[index].Id = id;

        this.Matches[index].Runs = runs;
        this.Matches[index].Ballsfaced = balls;
        this.Matches[index].Sixes = sixes;
        this.Matches[index].NotOuts = outDesc.toLowerCase().replaceAll(" ", "").includes("notout");
        this.Matches[index].StrikeRate = strikeRate;
        this.Matches[index].Fours = fours;
    }
    updateBowlStats({ overs, economy, maidens, runs, wickets }, id) {
        const index = this.matchIndex(id) != undefined ? this.matchIndex(id) : this.Matches.length;
        this.Matches[index] = this.matchIndex(id) != undefined ? this.Matches[index] : {};
        this.Matches[index].Id = id;

        this.Matches[index].BallsBowled = ((parseInt(overs) * 6) + parseInt((overs * 10) % 10));
        this.Matches[index].Economy = economy;
        this.Matches[index].Maidens = maidens;
        this.Matches[index].RunsGiven = runs;
        this.Matches[index].Wicket = wickets;
    }
    matchIndex(id) {
        for (let index = 0; index < this.Matches.length; index++) {
            if (this.Matches[index].Id == id) {
                return index;
            }
        }
    }
}
Players.forEach(player => PlayerData.push(new NewPlayer(player)));

//fetching matches and statsfor each match 
(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '468381f4fcmsh34b3449547a652dp14453cjsna2bb93345db8',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    if (!localStorage.getItem("cricbuzz")) {
        fetch('https://cricbuzz-cricket.p.rapidapi.com/series/v1/5945', options)
            .then(response => response.json())
            .then(response => {
                var matchesId = [];
                response.matchDetails.forEach(async (day) => {
                    if (day.matchDetailsMap) {
                        (day.matchDetailsMap.match).forEach(async (match) => {
                            if (match.matchScore) {
                                matchesId.push(match.matchInfo.matchId);
                            }
                        })
                    }
                });
                localStorage.setItem("cricbuzz", JSON.stringify(response));
                setTimeout(loadMatchesScorecard, 3000, matchesId, 0);
            })
            .catch(err => console.error(err));
    }
    function loadMatchesScorecard(ids, index) {
        if (index < ids.length) {
            fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${ids[index]}/scard`, options)
                .then(response => response.json())
                .then(response => {
                    if (!localStorage.getItem("matches")) {
                        localStorage.setItem("matches", JSON.stringify(response));
                    } else {
                        const matches = Array.from(JSON.parse(localStorage.getItem("matches")));
                        matches.push(response);
                        localStorage.setItem("matches", JSON.stringify(matches));
                    }
                }).catch(err => console.error(err));
            setTimeout(loadMatchesScorecard, 3000, ids, ++index);
        }
    }
})();

//updating players stats from LS
(() => {
    if (localStorage.getItem("matches")) {
        JSON.parse(localStorage.getItem("matches")).forEach(match => {
            match.scoreCard.forEach(innings => {
                findPlayer(innings.batTeamDetails.batsmenData, innings.batTeamDetails.batTeamShortName, innings, "batName")
                findPlayer(innings.bowlTeamDetails.bowlersData, innings.bowlTeamDetails.bowlTeamShortName, innings, "bowlName");
            })
        });
    }
    function findPlayer(players, team, innings, nameType) {
        const playerNameObj = {}
        for (let name in players) {
            const apiPlayerName = players[name][`${nameType}`].toLowerCase().replaceAll(" ", "");
            playerNameObj[name] = players[name];
            for (const index in PlayerData) {
                const PlayerName = PlayerData[index].FullName.toLowerCase().replaceAll(" ", "");
                const PlayerSecondName = PlayerData[index].SecondName ? PlayerData[index].SecondName.toLowerCase().replaceAll(" ", "") : "";

                if ((PlayerName.includes(apiPlayerName) ||
                    (!PlayerName.includes(apiPlayerName) && PlayerSecondName.includes(apiPlayerName)))
                    && team.toLowerCase() == PlayerData[index].TeamLogo) {

                    (nameType == "batName") ?
                        PlayerData[index].updateBatStats(players[name], innings.matchId) :
                        PlayerData[index].updateBowlStats(players[name], innings.matchId);
                    playerNameObj[name] = undefined;
                }
            }
        }
        //print players not found in Playersdata
        for (let Name in playerNameObj) {
            if (playerNameObj[Name]) {
                console.log(playerNameObj[Name]);
            }
        }
    }
    window.addEventListener("load", () => {
        document.querySelector(".loading").classList.add("hide");
        document.querySelector("body").style.overflow = "auto";
    });
})();