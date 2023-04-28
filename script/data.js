export var TeamInfo = [];
class NewTeam {
    constructor({ teamName, matchesPlayed, matchesWon, matchesLost, points, nrr, teamFullName, form, teamMatches }) {
        this.Logo = teamName.toLowerCase();
        this.Played = matchesPlayed || 0;
        this.Won = matchesWon || 0;
        this.Lose = matchesLost || 0;
        this.Draw = (this.Played - (this.Won + this.Lose));
        this.Points = points || 0;
        this.Nrr = nrr;
        this.Team = teamFullName;
        this.Form = form;
        this.Matches = teamMatches;
    }
    Image() {
        switch (this.Logo) {
            case "csk":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png"
                    }
                };
            case "srh":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png"
                    }
                };
            case "kkr":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKR.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png"
                    }
                };
            case "rr":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RR.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png"
                    }
                };
            case "mi":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png"
                    }
                };
            case "pbks":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKS.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png"
                    }
                };
            case "rcb":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png"
                    }
                };
            case "dc":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png"
                    }
                };
            case "gt":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Medium/GTmedium.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png"
                    }
                };
            case "lsg":
                return {
                    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Medium/LSGmedium.png",
                    round: {
                        src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png"
                    }
                };
        }
    }
    ChampionsIn() {
        switch (this.Logo) {
            case "rr":
                return "2008";
            case "csk":
                return "2010 2011 2018 2021";
            case "kkr":
                return "2012 2014";
            case "mi":
                return "2013 2015 2017 2019 2020";
            case "srh":
                return "2016";
            case "gt":
                return "2022";
            default:
                return "";
        }
    }
    Squad() {
        var Squad = [];
        for (const index in PlayerData) {
            if (PlayerData[index].TeamLogo == this.Logo) {
                Squad.push(PlayerData[index]);
            };
        };
        return Squad;
    }
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
}

var Players = [
    {
        FullName: "MS Dhoni",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        Role: "Wicketkeeper Batter india captain",
    },
    {
        FullName: "Ravindra Jadeja",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Deepak Chahar",
        SecondName: "D Chahar",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png",
        Role: "Bowler india",
    },
    {
        FullName: "Ambati Rayudu",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/60.png",
        Role: "Wicketkeeper Batter india",
    },
    {
        FullName: "Mitchell Santner",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/75.png",
        Role: "Allrounder",
    },
    {
        FullName: "Devon Conway",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
        Role: " Batter",
    },
    {
        FullName: "Ruturaj Gaikwad",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png",
        Role: " Batter india",
    },
    {
        FullName: "Subhranshu Senapati",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/971.png",
        Role: " Batter india",
    },
    {
        FullName: "Dwaine Pretorius",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/289.png",
        Role: " Allrounder",
    },
    {
        FullName: "K Bhagath Varma",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/577.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Rajvardhan Hangargekar",
        SecondName: "RS Hangargekar",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/783.png",
        Role: " Bowler india",
    },
    {
        FullName: "Moeen Ali",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
        Role: " Allrounder",
    },
    {
        FullName: "Shivam Dube",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Maheesh Theekshana",
        SecondName: "M Theekshana",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/629.png",
        Role: "Bowler",
    },
    {
        FullName: "Mukesh Choudhary",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/970.png",
        Role: " Bowler india",
    },
    {
        FullName: "Prashant Solanki",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/972.png",
        Role: " Bowler india",
    },
    {
        FullName: "Simarjeet Singh",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/622.png",
        Role: " Bowler india",
    },
    {
        FullName: "Ajinkya Rahane",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/44.png",
        Role: " Batter india",
    },
    {
        FullName: "Tushar Deshpande",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/539.png",
        Role: " Bowler india",
    },
    {
        FullName: "Ben Stokes",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/177.png",
        Role: " Allrounder",
    },
    {
        FullName: "Matheesha Pathirana",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1014.png",
        Role: "Bowler",
    },
    {
        FullName: "Shaik Rasheed",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/778.png",
        Role: " Batter india",
    },
    {
        FullName: "Akash Singh",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/535.png",
        Role: "Bowler india",
    },
    {
        FullName: "Sisanda Magala",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/745.png",
        Role: "Bowler",
    },
    {
        FullName: "Nishant Sindhu",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/791.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Kyle Jamieson",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/382.png",
        Role: " Bowler ",
    },
    {
        FullName: "Ajay Mandal",
        TeamLogo: "csk",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1931.png",
        Role: " Allrounder india",
    },
    {
        FullName: "David Warner",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        Role: " Batter captain",
    },
    {
        FullName: "Prithvi Shaw",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png",
        Role: " Batter india",
    },
    {
        FullName: "Rovman Powell",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/329.png",
        Role: " Batter ",
    },
    {
        FullName: "Axar Patel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Kamlesh Nagarkoti",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/146.png",
        Role: " Bowler india",
    },
    {
        FullName: "Lalit Yadav",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/538.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Mitchell Marsh",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/40.png",
        Role: " Allrounder",
    },
    {
        FullName: "Pravin Dubey",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/548.png",
        Role: " Bowler india",
    },
    {
        FullName: "Ripal Patel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/580.png",
        Role: " Batter india",
    },
    {
        FullName: "Sarfaraz Khan",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/139.png",
        Role: "Batter india",
    },
    {
        FullName: "Vicky Ostwal",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/786.png",
        Role: " Bowler india",
    },
    {
        FullName: "Yash Dhull",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/777.png",
        Role: " Bowler india",
    },
    {
        FullName: "Aman Hakim Khan",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/979.png",
        Role: " Batter india",
    },
    {
        FullName: "Anrich Nortje",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/142.png",
        Role: " Bowler",
    },
    {
        FullName: "Chetan Sakariya",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/592.png",
        Role: " Bowler india",
    },
    {
        FullName: "Kuldeep Yadav",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/14.png",
        Role: " Bowler india",
    },
    {
        FullName: "Lungi Ngidi",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/99.png",
        Role: " Bowler",
    },
    {
        FullName: "Mustafizur Rahman",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/258.png",
        Role: " Bowler",
    },
    {
        FullName: "Khaleel Ahmed",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/8.png",
        Role: " Bowler india",
    },
    {
        FullName: "Philip Salt",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1220.png",
        Role: " Batter",
    },
    {
        FullName: "Ishant Sharma",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/50.png",
        Role: " Bowler india",
    },
    {
        FullName: "Manish Pandey",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/16.png",
        Role: " Batter india",
    },
    {
        FullName: "Mukesh Kumar",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1462.png",
        Role: " Bowler india",
    },
    {
        FullName: "Rilee Rossouw",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1426.png",
        Role: " Batter",
    },
    {
        FullName: "Rishabh Pant",
        TeamLogo: "dc",
        Image: "",
        Role: "Wicketkeeper Batter india",
    },
    {
        FullName: "Abishek Porel",
        TeamLogo: "dc",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1580.png",
        Role: "Wicketkeeper Batter india",
    },
    {
        FullName: "Abhinav Manohar",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/974.png",
        Role: " Batter india",
    },
    {
        FullName: "David Miller",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/128.png",
        Role: " Batter",
    },
    {
        FullName: "Shubman Gill",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png",
        Role: " Batter india",
    },
    {
        FullName: "Matthew Wade",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/549.png",
        Role: "Wicketkeeper Batter",
    },
    {
        FullName: "Wriddhiman Saha",
        SecondName: "W Saha",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/225.png",
        Role: " Wicketkeeper Batter india",
    },
    {
        FullName: "Sai Sudharsan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/976.png",
        Role: " Batter india",
    },
    {
        FullName: "Darshan Nalkande",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/127.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Jayant Yadav",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/165.png",
        Role: " Bowler india",
    },
    {
        FullName: "Pradeep Sangwan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/977.png",
        Role: " Bowler india",
    },
    {
        FullName: "Rahul Tewatia",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/120.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Shivam Mavi",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/154.png",
        Role: " Bowler india",
    },
    {
        FullName: "Vijay Shankar",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/61.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Alzarri Joseph",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/229.png",
        Role: " Bowler",
    },
    {
        FullName: "Mohammed Shami",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png",
        Role: " Bowler india",
    },
    {
        FullName: "Noor Ahmad",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/975.png",
        Role: " Bowler",
    },
    {
        FullName: "Sai Kishore",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/544.png",
        Role: " Bowler india",
    },
    {
        FullName: "Rashid Khan",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png",
        Role: " Bowler",
    },
    {
        FullName: "Yash Dayal",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/978.png",
        Role: " Bowler india",
    },
    {
        FullName: "Kane Williamson",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/65.png",
        Role: " Batter",
    },
    {
        FullName: "Joshua Little",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/678.png",
        Role: " Bowler",
    },
    {
        FullName: "Mohit Sharma",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/100.png",
        Role: " Bowler india",
    },
    {
        FullName: "Odean Smith",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/863.png",
        Role: " Allrounder",
    },
    {
        FullName: "K.S Bharat",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/365.png",
        Role: " Batter india",
    },
    {
        FullName: "Urvil Patel",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1486.png",
        Role: " Wicketkeeper Batter india",
    },
    {
        FullName: "Hardik Pandya",
        TeamLogo: "gt",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png",
        Role: "Allrounder india captain",
    },
    {
        FullName: "Rinku Singh",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
        Role: " Batter india",
    },
    {
        FullName: "Rahmanullah Gurbaz",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/641.png",
        Role: " Batter Wicketkeeper",
    },
    {
        FullName: "Jason Roy",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/313.png",
        Role: " Batter",
    },
    {
        FullName: "David Wiese",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/674.png",
        Role: " Allsrounder",
    },
    {
        FullName: "Kulwant Khejroliya",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/204.png",
        Role: " Bowler india",
    },
    {
        FullName: "Suyash Sharma",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1932.png",
        Role: " Bowler india",
    },
    {
        FullName: "Nitish Rana",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        Role: " Batter india captain",
    },
    {
        FullName: "Shakib Al Hasan",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/222.png",
        Role: " Allrounder",
    },
    {
        FullName: "Anukul Roy",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/160.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Lockie Ferguson",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/69.png",
        Role: " Bowler",
    },
    {
        FullName: "Andre Russell",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
        Role: " Allrounder",
    },
    {
        FullName: "Mandeep Singh",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/132.png",
        Role: " Batter india",
    },
    {
        FullName: "Aarya Desai",
        TeamLogo: "kkr",
        Image: "",
        Role: " Batter india",
    },
    {
        FullName: "Venkatesh Iyer",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Umesh Yadav",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/21.png",
        Role: " Bowler india",
    },
    {
        FullName: "Harshit Rana",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1013.png",
        Role: " Bowler india",
    },
    {
        FullName: "Tim Southee",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/77.png",
        Role: " Bowler",
    },
    {
        FullName: "Shardul Thakur",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png",
        Role: " Bowler india",
    },
    {
        FullName: "Litton Das",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/251.png",
        Role: " Wicketkeeper Batter",
    },
    {
        FullName: "Sunil Narine",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/156.png",
        Role: " Allrounder",
    },
    {
        FullName: "Vaibhav Arora",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/583.png",
        Role: " Bowler india",
    },
    {
        FullName: "Narayan Jagadeesan",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/97.png",
        Role: " Batter Wicketkeeper india",
    },
    {
        FullName: "Varun Chakaravarthy",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/140.png",
        Role: " Bowler india",
    },
    {
        FullName: "Shreyas Iyer",
        TeamLogo: "kkr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/12.png",
        Role: "Batter india",
    },
    {
        FullName: "Manan Vohra",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/185.png",
        Role: " Batter india",
    },
    {
        FullName: "Quinton de Kock",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png",
        Role: " Batter Wicketkeeper",
    },
    {
        FullName: "Ayush Badoni",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/985.png",
        Role: " Batter india",
    },
    {
        FullName: "Deepak Hooda",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/215.png",
        Role: " Batter india",
    },
    {
        FullName: "Krishnappa Gowtham",
        SecondName: "K Gowtham",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/179.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Karan Sharma",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/986.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Krunal Pandya",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Kyle Mayers",
        SecondName: "K Mayers",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/726.png",
        Role: " Allrounder",
    },
    {
        FullName: "Marcus Stoinis",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/23.png",
        Role: " Alllrounder",
    },
    {
        FullName: "Avesh Khan",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png",
        Role: " Bowler india",
    },
    {
        FullName: "Mark Wood",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/315.png",
        Role: " Bowler ",
    },
    {
        FullName: "Mayank Yadav",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/987.png",
        Role: " Bowler india",
    },
    {
        FullName: "Mohsin Khan",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/541.png",
        Role: " Bowler india",
    },
    {
        FullName: "Ravi Bishnoi",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/520.png",
        Role: " Bowler india",
    },
    {
        FullName: "Jaydev Unadkat",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/180.png",
        Role: " Bowler india",
    },
    {
        FullName: "Yash Thakur",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1550.png",
        Role: " Bowler india",
    },
    {
        FullName: "Romario Shepherd",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/371.png",
        Role: " Allrounder",
    },
    {
        FullName: "Nicholas Pooran",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png",
        Role: " Batter Wicketkeeper",
    },
    {
        FullName: "Amit Mishra",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/107.png",
        Role: " Bowler india",
    },
    {
        FullName: "Daniel Sams",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/546.png",
        Role: "  Allrounder",
    },
    {
        FullName: "Swapnil Singh",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1483.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Prerak Mankad",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/998.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Naveen-Ul-Haq",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/639.png",
        Role: " Bowler",
    },
    {
        FullName: "Yudhvir Singh",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/587.png",
        Role: " Allrounder india",
    },
    {
        FullName: "KL Rahul",
        TeamLogo: "lsg",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        Role: "Wicketkeeper Batter captain india",
    },
    {
        FullName: "Dewald Brevis",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/797.png",
        Role: " Batter",
    },
    {
        FullName: "Suryakumar Yadav",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png",
        Role: " Batter india",
    },
    {
        FullName: "Ishan Kishan",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        Role: " Batter Wicketkeeper india",
    },
    {
        FullName: "Arjun Tendulkar",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/585.png",
        Role: " Bowler india",
    },
    {
        FullName: "Hrithik Shokeen",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/992.png",
        Role: " Bowler india",
    },
    {
        FullName: "Jofra Archer",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png",
        Role: " Bowler ",
    },
    {
        FullName: "N. Tilak Varma",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png",
        Role: " Batter india",
    },
    {
        FullName: "Mohd. Arshad Khan",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/988.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Ramandeep Singh",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/991.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Tim David",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png",
        Role: " Batter",
    },
    {
        FullName: "Jasprit Bumrah",
        TeamLogo: "mi",
        Image: "",
        Role: " Bowler india",
    },
    {
        FullName: "Cameron Green",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png",
        Role: " Allrounder",
    },
    {
        FullName: "Jhye Richardson",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/59.png",
        Role: "  Bowler",
    },
    {
        FullName: "Kumar Kartikeya Singh",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1015.png",
        Role: " Bowler india",
    },
    {
        FullName: "Tristan Stubbs",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1017.png",
        Role: " Batter",
    },
    {
        FullName: "Piyush Chawla",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        Role: " Bowler india",
    },
    {
        FullName: "Akash Madhwal",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1045.png",
        Role: " Bowler india",
    },
    {
        FullName: "Shams Mulani",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/600.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Jason Behrendorff",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/4.png",
        Role: " Bowler",
    },
    {
        FullName: "Riley Meredith",
        TeamLogo: "mi",
        Image: "",
        Role: " Bowler",
    },
    {
        FullName: "Nehal Wadhera",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1541.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Vishnu Vinod",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/581.png",
        Role: " Wicketkeeper Batter india",
    },
    {
        FullName: "Raghav Goyal",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1933.png",
        Role: " Bowler india",
    },
    {
        FullName: "Duan Jansen",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1227.png",
        Role: " Bowler",
    },
    {
        FullName: "Rohit Sharma",
        TeamLogo: "mi",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        Role: "Batter captain india",
    },
    {
        FullName: "Bhanuka Rajapaksa",
        SecondName: "B Rajapaksa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/372.png",
        Role: "  Batter",
    },
    {
        FullName: "Jitesh Sharma",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png",
        Role: " Wicketkeeper Btter india",
    },
    {
        FullName: "Jonny Bairstow",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/216.png",
        Role: " Batter Wicketkeeper",
    },
    {
        FullName: "Matthew Short",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2032.png",
        Role: " Batter",
    },
    {
        FullName: "Prabhsimran Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/137.png",
        Role: " Batter india",
    },
    {
        FullName: "Atharva Taide",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1001.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Harpreet Brar",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/130.png",
        Role: " Bowler india",
    },
    {
        FullName: "Gurnoor Singh Brar",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1231.png",
        Role: " Bowler india",
    },
    {
        FullName: "Liam Livingstone",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/183.png",
        Role: " Batter",
    },
    {
        FullName: "Raj Angad Bawa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/781.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Rishi",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/996.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Shahrukh Khan",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/590.png",
        Role: " Batter india",
    },
    {
        FullName: "Arshdeep Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/125.png",
        Role: " Bowler india",
    },
    {
        FullName: "Baltej Dhanda",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/994.png",
        Role: " Bowler india",
    },
    {
        FullName: "Kagiso Rabada",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/116.png",
        Role: " Bowler",
    },
    {
        FullName: "Nathan Ellis",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/633.png",
        Role: " Bowler ",
    },
    {
        FullName: "Rahul Chahar",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/171.png",
        Role: " Bowler india",
    },
    {
        FullName: "Sam Curran",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png",
        Role: " Allrounder",
    },
    {
        FullName: "Sikandar Raza",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/820.png",
        Role: " Allrounder",
    },
    {
        FullName: "Harpreet Singh Bhatia",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1934.png",
        Role: " Batter india",
    },
    {
        FullName: "Vidwath Kaverappa",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1564.png",
        Role: " Bowler india",
    },
    {
        FullName: "Mohit Rathee",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1935.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Shivam Singh",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1936.png",
        Role: " Allrounder india",
    },
    {
        FullName: "Shikhar Dhawan",
        TeamLogo: "pbks",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png",
        Role: "Batter captain india",
    },
    {
        FullName: "Sanju Samson",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png",
        Role: "Wicketkeeper Batter india captain",
    },
    {
        FullName: "Devdutt Padikkal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png",
        Role: "Batter india",
    },
    {
        FullName: "Jos Buttler",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png",
        Role: "Batter Wicketkeeper",
    },
    {
        FullName: "Shimron Hetmyer",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/210.png",
        Role: "Batter",
    },
    {
        FullName: "Yashasvi Jaiswal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png",
        Role: "Batter india",
    },
    {
        FullName: "Dhruv Jurel",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1004.png",
        Role: "Batter india",
    },
    {
        FullName: "Riyan Parag",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/189.png",
        Role: "Batter india",
    },
    {
        FullName: "Donovan Ferreira",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2033.png",
        Role: "Batter",
    },
    {
        FullName: "Kunal Rathore",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1540.png",
        Role: "Batter india",
    },
    {
        FullName: "Joe Root",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/312.png",
        Role: "Batter",
    },
    {
        FullName: "Ravichandran Ashwin",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/45.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Akash Vashisht",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1938.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Jason Holder",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/263.png",
        Role: "Allrounder",
    },
    {
        FullName: "Abdul Basith",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1542.png",
        Role: "Allrounder india",
    },
    {
        FullName: "KC Cariappa",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/227.png",
        Role: "Bowler india",
    },
    {
        FullName: "Kuldeep Sen",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1005.png",
        Role: "Bowler india",
    },
    {
        FullName: "Kuldip Yadav",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/593.png",
        Role: "Bowler india",
    },
    {
        FullName: "Navdeep Saini",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/207.png",
        Role: "Bowler india",
    },
    {
        FullName: "Obed Macoy",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/645.png",
        Role: "Bowler",
    },
    {
        FullName: "KM Asif",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/88.png",
        Role: "Bowler india",
    },
    {
        FullName: "Prashid Krishna",
        TeamLogo: "rr",
        Image: "",
        Role: "Bowler india",
    },
    {
        FullName: "Sandeep Sharma",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/220.png",
        Role: "Bowler india",
    },
    {
        FullName: "Trent Boult",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/66.png",
        Role: "Bowler",
    },
    {
        FullName: "Murugan Ashwin",
        SecondName: "M Ashwin",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/135.png",
        Role: "Bowler india",
    },
    {
        FullName: "Yuzvendra Chahal",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/10.png",
        Role: "Bowler india",
    },
    {
        FullName: "Adam Zampa",
        TeamLogo: "rr",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/24.png",
        Role: "Bowler",
    },
    {
        FullName: "Faf du Plessis",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        Role: "Batter captain",
    },
    {
        FullName: "Finn Allen",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/595.png",
        Role: "Batter",
    },
    {
        FullName: "Rajat Patidar",
        TeamLogo: "rcb",
        Image: "",
        Role: "Batter india",
    },
    {
        FullName: "Virat Kohli",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
        Role: "Batter india",
    },
    {
        FullName: "Anuj Rawat",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/534.png",
        Role: "Batter india",
    },
    {
        FullName: "Dinesh Karthik",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/13.png",
        Role: "Batter india Wicketkeeper",
    },
    {
        FullName: "Suyash Prabhudessai",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/598.png",
        Role: "Batter india",
    },
    {
        FullName: "Will Jacks",
        TeamLogo: "rcb",
        Image: "",
        Role: "Batter",
    },
    {
        FullName: "David Willey",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/90.png",
        Role: "Allrounder ",
    },
    {
        FullName: "Wayne Parnell",
        TeamLogo: "rcb",
        Image: "",
        Role: "Allrounder",
    },
    {
        FullName: "Glenn Maxwell",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        Role: "Allrounder ",
    },
    {
        FullName: "Mahipal Lomror",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/184.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Wanindu Hasaranga",
        SecondName: "W Hasaranga",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/377.png",
        Role: "Allrounder ",
    },
    {
        FullName: "Karn Sharma",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/98.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Vijaykumar Vyshak",
        TeamLogo: "rcb",
        Image: "",
        Role: "Bowler india",
    },
    {
        FullName: "Michael Bracewell",
        SecondName: "M Bracewell",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1465.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Sonu Yadav",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1940.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Manoj Bhandage",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1485.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Harshal Patel",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/114.png",
        Role: "Bowler india",
    },
    {
        FullName: "Shahbaz Ahmed",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/523.png",
        Role: "Bowler india",
    },
    {
        FullName: "Akash Deep",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1007.png",
        Role: "Bowler india",
    },
    {
        FullName: "Josh Hazlewood",
        TeamLogo: "rcb",
        Image: "",
        Role: "Bowler ",
    },
    {
        FullName: "Siddharth Kaul",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/64.png",
        Role: "Bowler india",
    },
    {
        FullName: "Mohammed Siraj",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png",
        Role: "Bowler india",
    },
    {
        FullName: "Reece Topley",
        SecondName: "R Topley",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/574.png",
        Role: "Bowler ",
    },
    {
        FullName: "Himanshu Sharma",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1503.png",
        Role: "Bowler india",
    },
    {
        FullName: "Rajan Kumar",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1503.png",
        Role: "Bowler india",
    },
    {
        FullName: "Avinash Singh",
        TeamLogo: "rcb",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1939.png",
        Role: "Bowler india",
    },
    {
        FullName: "Bhuvneshwar Kumar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png",
        Role: "Bowler india",
    },
    {
        FullName: "Abdul Samad",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/525.png",
        Role: "Batter india",
    },
    {
        FullName: "Aiden Markram",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png",
        Role: "Batter india captain",
    },
    {
        FullName: "Rahul Tripathi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png",
        Role: "Batter india",
    },
    {
        FullName: "Glenn Phillips",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/635.png",
        Role: "Batter",
    },
    {
        FullName: "Harry Brook",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1218.png",
        Role: "Batter ",
    },
    {
        FullName: "Mayank Agarwal",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png",
        Role: "Batter india",
    },
    {
        FullName: "Heinrich Klaasen",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/202.png",
        Role: "Batter",
    },
    {
        FullName: "Anmolpreet Singh",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/159.png",
        Role: "Batter india",
    },
    {
        FullName: "Upendra Singh Yadav",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1472.png",
        Role: "Batter india",
    },
    {
        FullName: "Nitish Kumar Reddy",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1944.png",
        Role: "Batter india",
    },
    {
        FullName: "Abhishek Sharma",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Marco Jansen",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/586.png",
        Role: "Allrounder ",
    },
    {
        FullName: "Washington Sundar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/20.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Vivrant Sharma",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1942.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Mayank dagar",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1547.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Samarth Vyas",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1534.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Sanvir Singh",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1943.png",
        Role: "Allrounder india",
    },
    {
        FullName: "Fazalhaq Farooqi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1011.png",
        Role: "Bowler",
    },
    {
        FullName: "Kartik Tyagi",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/536.png",
        Role: "Bowler india",
    },
    {
        FullName: "T Natarajan",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png",
        Role: "Bowler india",
    },
    {
        FullName: "Umran Malik",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/637.png",
        Role: "Bowler india",
    },
    {
        FullName: "Akeal Hosein",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/722.png",
        Role: "Bowler",
    },
    {
        FullName: "Adil Rashid",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/311.png",
        Role: "Bowler",
    },
    {
        FullName: "Mayank Markande",
        TeamLogo: "srh",
        Image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/87.png",
        Role: "Bowler india",
    },
];
class NewPlayer {
    constructor({ FullName, SecondName, TeamLogo, Image, Role }) {
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
        var MostWicket = 0;
        var RunConcede = 0;
        for (const index in this.Matches) {
            if (this.Matches[index].Wicket > MostWicket) {
                MostWicket = this.Matches[index].Wicket;
                RunConcede = this.Matches[index].RunsGiven;
            }
        }
        return MostWicket + "/" + RunConcede;
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
                return TeamInfo[index].Team;
            }
        }
    };
    TeamImage() {
        for (const index in TeamInfo) {
            if (this.TeamLogo == TeamInfo[index].Logo) {
                return TeamInfo[index].Image();
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
export var PlayerData = [];
Players.forEach(player => PlayerData.push(new NewPlayer(player)));

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '468381f4fcmsh34b3449547a652dp14453cjsna2bb93345db8',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

function loadDataToLS() {
    var matchesId = [];
    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/5945/points-table', options)
        .then(response => response.json())
        .then(response => {
            response.pointsTable[0].pointsTableInfo.forEach(team => {
                team.teamMatches.forEach(match => {
                    if (match.result) {
                        matchesId.push(match.matchId)
                    }
                });
            });
            localStorage.setItem("ipl2023pt", JSON.stringify(response));
            setTimeout(loadMatchesScorecard, 3000, matchesId.filter(a => !matchesIdLS().includes(a)), 0);
        }).catch(err => console.error(err));
}

function matchesIdLS() {
    var matchesIdLS = [];
    if (localStorage.getItem("ipl2023matches")) {
        JSON.parse(localStorage.getItem("ipl2023matches")).forEach(match => {
            matchesIdLS.push(match.matchHeader.matchId);
        });
    }
    return matchesIdLS;
}

function loadMatchesScorecard(ids, index) {
    if (index < ids.length) {
        fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${ids[index]}/scard`, options)
            .then(response => response.json())
            .then(response => {
                const matches = localStorage.getItem("ipl2023matches") ? JSON.parse(localStorage.getItem("ipl2023matches")) : [];
                matches.push(response);
                localStorage.setItem("ipl2023matches", JSON.stringify(matches));
            }).catch(err => console.error(err));
        setTimeout(loadMatchesScorecard, 3000, ids.filter(a => !matchesIdLS().includes(a)), ++index);
    }
    if (index == ids.length - 1 || !ids.length) {
        loadTeamsStats();
        loadPlayersStats();
    }
}

function loadPlayersStats() {
    if (localStorage.getItem("ipl2023matches")) {
        JSON.parse(localStorage.getItem("ipl2023matches"))
            .sort((a, b) => { return a.matchHeader.matchStartTimestamp - b.matchHeader.matchStartTimestamp })
            .forEach(match => {
                match.scoreCard.forEach(innings => {
                    findPlayer(innings, "batName");
                    findPlayer(innings, "bowlName");
                });
            });
        window.addEventListener("load", () => {
            document.querySelector(".loading").classList.add("hide");
            document.querySelector("body").style.overflow = "auto";
        })
    }
}

function findPlayer(innings, nameType) {
    const players = (nameType == "batName") ? innings.batTeamDetails.batsmenData : innings.bowlTeamDetails.bowlersData;
    const team = (nameType == "batName") ? innings.batTeamDetails.batTeamShortName : innings.bowlTeamDetails.bowlTeamShortName;
    const playerNameObj = {}

    for (let name in players) {
        const apiPlayerName = players[name][`${nameType}`].toLowerCase().replaceAll(" ", "");
        playerNameObj[name] = players[name];

        if (playerByName(apiPlayerName, team)) {
            (nameType == "batName") ?
                playerByName(apiPlayerName, team).updateBatStats(players[name], innings.matchId) :
                playerByName(apiPlayerName, team).updateBowlStats(players[name], innings.matchId);
            playerNameObj[name] = undefined;
        }
    }
    //print players not found in Playersdata
    for (let Name in playerNameObj) {
        if (playerNameObj[Name]) {
            console.log(playerNameObj[Name]);
        }
    }
}

function playerByName(apiPlayer, team) {
    for (const index in PlayerData) {
        const PlayerName = PlayerData[index].FullName.toLowerCase().replaceAll(" ", "");
        const PlayerSecondName = PlayerData[index].SecondName ? PlayerData[index].SecondName.toLowerCase().replaceAll(" ", "") : "";
        const apiPlayerName = apiPlayer.toLowerCase().replaceAll(" ", "");

        if ((PlayerName.includes(apiPlayerName) || apiPlayerName.includes(PlayerName) ||
            (!PlayerName.includes(apiPlayerName) && PlayerSecondName.includes(apiPlayerName)))
            && team.toLowerCase() == PlayerData[index].TeamLogo) {
            return PlayerData[index];
        }
    }
}

function loadTeamsStats() {
    JSON.parse(localStorage.getItem("ipl2023pt")).pointsTable[0].pointsTableInfo.forEach(team => {
        TeamInfo.push(new NewTeam(team));
    });
}

function nextMatch() {
    const matchesLS = [];
    var nextmatch;
    var lastMatch;
    if (localStorage.getItem("ipl2023pt")) {
        JSON.parse(localStorage.getItem("ipl2023pt")).pointsTable[0].pointsTableInfo.forEach(team => {
            team.teamMatches.forEach(match => {
                if (match.result) {
                    matchesLS.push(match)
                }
            });
        });
        matchesLS.forEach(match => { match.matchNumber = (match.matchName.replaceAll(" ", "").split("").map(a => Number(a)).filter(a => { return a || a === 0 })).join(""); })
        matchesLS.sort((a, b) => { return a.matchNumber - b.matchNumber });
        lastMatch = matchesLS[matchesLS.length - 1];

        JSON.parse(localStorage.getItem("ipl2023pt")).pointsTable[0].pointsTableInfo.forEach(team => {
            team.teamMatches.forEach(match => { match.matchNumber = (match.matchName.replaceAll(" ", "").split("").map(a => Number(a)).filter(a => { return a || a === 0 })).join(""); })
            team.teamMatches.sort((a, b) => { return a.matchNumber - b.matchNumber })
                .map(a => a.matchNumber == (Number(lastMatch.matchNumber) + 1) ? nextmatch = a : "");
        });
    }
    return nextmatch;
}

export function loadData() {
    var nextMatchdate = 0;
    var todaydate = 0;
    if (localStorage.getItem("ipl2023pt")) {
        nextMatchdate = new Date(Number(nextMatch().startdt)).getDate();
        todaydate = new Date().getDate();
    }

    if (!localStorage.getItem("ipl2023pt") || nextMatchdate < todaydate) {
        loadDataToLS();
    } else {
        loadTeamsStats();
        loadPlayersStats();
    }
}