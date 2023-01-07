const followersMock = [
  {
    login: "dwillis",
    id: 2214,
    node_id: "MDQ6VXNlcjIyMTQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/2214?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dwillis",
    html_url: "https://github.com/dwillis",
    followers_url: "https://api.github.com/users/dwillis/followers",
    following_url:
      "https://api.github.com/users/dwillis/following{/other_user}",
    gists_url: "https://api.github.com/users/dwillis/gists{/gist_id}",
    starred_url: "https://api.github.com/users/dwillis/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dwillis/subscriptions",
    organizations_url: "https://api.github.com/users/dwillis/orgs",
    repos_url: "https://api.github.com/users/dwillis/repos",
    events_url: "https://api.github.com/users/dwillis/events{/privacy}",
    received_events_url: "https://api.github.com/users/dwillis/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "zeke",
    id: 2289,
    node_id: "MDQ6VXNlcjIyODk=",
    avatar_url: "https://avatars.githubusercontent.com/u/2289?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/zeke",
    html_url: "https://github.com/zeke",
    followers_url: "https://api.github.com/users/zeke/followers",
    following_url: "https://api.github.com/users/zeke/following{/other_user}",
    gists_url: "https://api.github.com/users/zeke/gists{/gist_id}",
    starred_url: "https://api.github.com/users/zeke/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/zeke/subscriptions",
    organizations_url: "https://api.github.com/users/zeke/orgs",
    repos_url: "https://api.github.com/users/zeke/repos",
    events_url: "https://api.github.com/users/zeke/events{/privacy}",
    received_events_url: "https://api.github.com/users/zeke/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "git4rails",
    id: 6718,
    node_id: "MDQ6VXNlcjY3MTg=",
    avatar_url: "https://avatars.githubusercontent.com/u/6718?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/git4rails",
    html_url: "https://github.com/git4rails",
    followers_url: "https://api.github.com/users/git4rails/followers",
    following_url:
      "https://api.github.com/users/git4rails/following{/other_user}",
    gists_url: "https://api.github.com/users/git4rails/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/git4rails/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/git4rails/subscriptions",
    organizations_url: "https://api.github.com/users/git4rails/orgs",
    repos_url: "https://api.github.com/users/git4rails/repos",
    events_url: "https://api.github.com/users/git4rails/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/git4rails/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mdeiters",
    id: 7330,
    node_id: "MDQ6VXNlcjczMzA=",
    avatar_url: "https://avatars.githubusercontent.com/u/7330?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mdeiters",
    html_url: "https://github.com/mdeiters",
    followers_url: "https://api.github.com/users/mdeiters/followers",
    following_url:
      "https://api.github.com/users/mdeiters/following{/other_user}",
    gists_url: "https://api.github.com/users/mdeiters/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mdeiters/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mdeiters/subscriptions",
    organizations_url: "https://api.github.com/users/mdeiters/orgs",
    repos_url: "https://api.github.com/users/mdeiters/repos",
    events_url: "https://api.github.com/users/mdeiters/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/mdeiters/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "hobbeswalsh",
    id: 14958,
    node_id: "MDQ6VXNlcjE0OTU4",
    avatar_url: "https://avatars.githubusercontent.com/u/14958?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hobbeswalsh",
    html_url: "https://github.com/hobbeswalsh",
    followers_url: "https://api.github.com/users/hobbeswalsh/followers",
    following_url:
      "https://api.github.com/users/hobbeswalsh/following{/other_user}",
    gists_url: "https://api.github.com/users/hobbeswalsh/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hobbeswalsh/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hobbeswalsh/subscriptions",
    organizations_url: "https://api.github.com/users/hobbeswalsh/orgs",
    repos_url: "https://api.github.com/users/hobbeswalsh/repos",
    events_url: "https://api.github.com/users/hobbeswalsh/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hobbeswalsh/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "hamman",
    id: 35853,
    node_id: "MDQ6VXNlcjM1ODUz",
    avatar_url: "https://avatars.githubusercontent.com/u/35853?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hamman",
    html_url: "https://github.com/hamman",
    followers_url: "https://api.github.com/users/hamman/followers",
    following_url: "https://api.github.com/users/hamman/following{/other_user}",
    gists_url: "https://api.github.com/users/hamman/gists{/gist_id}",
    starred_url: "https://api.github.com/users/hamman/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hamman/subscriptions",
    organizations_url: "https://api.github.com/users/hamman/orgs",
    repos_url: "https://api.github.com/users/hamman/repos",
    events_url: "https://api.github.com/users/hamman/events{/privacy}",
    received_events_url: "https://api.github.com/users/hamman/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "sinned",
    id: 56403,
    node_id: "MDQ6VXNlcjU2NDAz",
    avatar_url: "https://avatars.githubusercontent.com/u/56403?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sinned",
    html_url: "https://github.com/sinned",
    followers_url: "https://api.github.com/users/sinned/followers",
    following_url: "https://api.github.com/users/sinned/following{/other_user}",
    gists_url: "https://api.github.com/users/sinned/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sinned/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sinned/subscriptions",
    organizations_url: "https://api.github.com/users/sinned/orgs",
    repos_url: "https://api.github.com/users/sinned/repos",
    events_url: "https://api.github.com/users/sinned/events{/privacy}",
    received_events_url: "https://api.github.com/users/sinned/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "altay",
    id: 82309,
    node_id: "MDQ6VXNlcjgyMzA5",
    avatar_url: "https://avatars.githubusercontent.com/u/82309?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/altay",
    html_url: "https://github.com/altay",
    followers_url: "https://api.github.com/users/altay/followers",
    following_url: "https://api.github.com/users/altay/following{/other_user}",
    gists_url: "https://api.github.com/users/altay/gists{/gist_id}",
    starred_url: "https://api.github.com/users/altay/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/altay/subscriptions",
    organizations_url: "https://api.github.com/users/altay/orgs",
    repos_url: "https://api.github.com/users/altay/repos",
    events_url: "https://api.github.com/users/altay/events{/privacy}",
    received_events_url: "https://api.github.com/users/altay/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ascheink",
    id: 102197,
    node_id: "MDQ6VXNlcjEwMjE5Nw==",
    avatar_url: "https://avatars.githubusercontent.com/u/102197?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ascheink",
    html_url: "https://github.com/ascheink",
    followers_url: "https://api.github.com/users/ascheink/followers",
    following_url:
      "https://api.github.com/users/ascheink/following{/other_user}",
    gists_url: "https://api.github.com/users/ascheink/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ascheink/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ascheink/subscriptions",
    organizations_url: "https://api.github.com/users/ascheink/orgs",
    repos_url: "https://api.github.com/users/ascheink/repos",
    events_url: "https://api.github.com/users/ascheink/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ascheink/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "freq32",
    id: 153156,
    node_id: "MDQ6VXNlcjE1MzE1Ng==",
    avatar_url: "https://avatars.githubusercontent.com/u/153156?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/freq32",
    html_url: "https://github.com/freq32",
    followers_url: "https://api.github.com/users/freq32/followers",
    following_url: "https://api.github.com/users/freq32/following{/other_user}",
    gists_url: "https://api.github.com/users/freq32/gists{/gist_id}",
    starred_url: "https://api.github.com/users/freq32/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/freq32/subscriptions",
    organizations_url: "https://api.github.com/users/freq32/orgs",
    repos_url: "https://api.github.com/users/freq32/repos",
    events_url: "https://api.github.com/users/freq32/events{/privacy}",
    received_events_url: "https://api.github.com/users/freq32/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "tombenner",
    id: 193898,
    node_id: "MDQ6VXNlcjE5Mzg5OA==",
    avatar_url: "https://avatars.githubusercontent.com/u/193898?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/tombenner",
    html_url: "https://github.com/tombenner",
    followers_url: "https://api.github.com/users/tombenner/followers",
    following_url:
      "https://api.github.com/users/tombenner/following{/other_user}",
    gists_url: "https://api.github.com/users/tombenner/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/tombenner/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/tombenner/subscriptions",
    organizations_url: "https://api.github.com/users/tombenner/orgs",
    repos_url: "https://api.github.com/users/tombenner/repos",
    events_url: "https://api.github.com/users/tombenner/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/tombenner/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "Telofy",
    id: 223663,
    node_id: "MDQ6VXNlcjIyMzY2Mw==",
    avatar_url: "https://avatars.githubusercontent.com/u/223663?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Telofy",
    html_url: "https://github.com/Telofy",
    followers_url: "https://api.github.com/users/Telofy/followers",
    following_url: "https://api.github.com/users/Telofy/following{/other_user}",
    gists_url: "https://api.github.com/users/Telofy/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Telofy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Telofy/subscriptions",
    organizations_url: "https://api.github.com/users/Telofy/orgs",
    repos_url: "https://api.github.com/users/Telofy/repos",
    events_url: "https://api.github.com/users/Telofy/events{/privacy}",
    received_events_url: "https://api.github.com/users/Telofy/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "audunfo",
    id: 316324,
    node_id: "MDQ6VXNlcjMxNjMyNA==",
    avatar_url: "https://avatars.githubusercontent.com/u/316324?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/audunfo",
    html_url: "https://github.com/audunfo",
    followers_url: "https://api.github.com/users/audunfo/followers",
    following_url:
      "https://api.github.com/users/audunfo/following{/other_user}",
    gists_url: "https://api.github.com/users/audunfo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/audunfo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/audunfo/subscriptions",
    organizations_url: "https://api.github.com/users/audunfo/orgs",
    repos_url: "https://api.github.com/users/audunfo/repos",
    events_url: "https://api.github.com/users/audunfo/events{/privacy}",
    received_events_url: "https://api.github.com/users/audunfo/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "colinpollock",
    id: 359160,
    node_id: "MDQ6VXNlcjM1OTE2MA==",
    avatar_url: "https://avatars.githubusercontent.com/u/359160?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/colinpollock",
    html_url: "https://github.com/colinpollock",
    followers_url: "https://api.github.com/users/colinpollock/followers",
    following_url:
      "https://api.github.com/users/colinpollock/following{/other_user}",
    gists_url: "https://api.github.com/users/colinpollock/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/colinpollock/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/colinpollock/subscriptions",
    organizations_url: "https://api.github.com/users/colinpollock/orgs",
    repos_url: "https://api.github.com/users/colinpollock/repos",
    events_url: "https://api.github.com/users/colinpollock/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/colinpollock/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "decause",
    id: 427420,
    node_id: "MDQ6VXNlcjQyNzQyMA==",
    avatar_url: "https://avatars.githubusercontent.com/u/427420?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/decause",
    html_url: "https://github.com/decause",
    followers_url: "https://api.github.com/users/decause/followers",
    following_url:
      "https://api.github.com/users/decause/following{/other_user}",
    gists_url: "https://api.github.com/users/decause/gists{/gist_id}",
    starred_url: "https://api.github.com/users/decause/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/decause/subscriptions",
    organizations_url: "https://api.github.com/users/decause/orgs",
    repos_url: "https://api.github.com/users/decause/repos",
    events_url: "https://api.github.com/users/decause/events{/privacy}",
    received_events_url: "https://api.github.com/users/decause/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "keppelen",
    id: 602111,
    node_id: "MDQ6VXNlcjYwMjExMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/602111?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/keppelen",
    html_url: "https://github.com/keppelen",
    followers_url: "https://api.github.com/users/keppelen/followers",
    following_url:
      "https://api.github.com/users/keppelen/following{/other_user}",
    gists_url: "https://api.github.com/users/keppelen/gists{/gist_id}",
    starred_url: "https://api.github.com/users/keppelen/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/keppelen/subscriptions",
    organizations_url: "https://api.github.com/users/keppelen/orgs",
    repos_url: "https://api.github.com/users/keppelen/repos",
    events_url: "https://api.github.com/users/keppelen/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/keppelen/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mattkc7",
    id: 618674,
    node_id: "MDQ6VXNlcjYxODY3NA==",
    avatar_url: "https://avatars.githubusercontent.com/u/618674?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mattkc7",
    html_url: "https://github.com/mattkc7",
    followers_url: "https://api.github.com/users/mattkc7/followers",
    following_url:
      "https://api.github.com/users/mattkc7/following{/other_user}",
    gists_url: "https://api.github.com/users/mattkc7/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mattkc7/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mattkc7/subscriptions",
    organizations_url: "https://api.github.com/users/mattkc7/orgs",
    repos_url: "https://api.github.com/users/mattkc7/repos",
    events_url: "https://api.github.com/users/mattkc7/events{/privacy}",
    received_events_url: "https://api.github.com/users/mattkc7/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "dumbyme",
    id: 626476,
    node_id: "MDQ6VXNlcjYyNjQ3Ng==",
    avatar_url: "https://avatars.githubusercontent.com/u/626476?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dumbyme",
    html_url: "https://github.com/dumbyme",
    followers_url: "https://api.github.com/users/dumbyme/followers",
    following_url:
      "https://api.github.com/users/dumbyme/following{/other_user}",
    gists_url: "https://api.github.com/users/dumbyme/gists{/gist_id}",
    starred_url: "https://api.github.com/users/dumbyme/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dumbyme/subscriptions",
    organizations_url: "https://api.github.com/users/dumbyme/orgs",
    repos_url: "https://api.github.com/users/dumbyme/repos",
    events_url: "https://api.github.com/users/dumbyme/events{/privacy}",
    received_events_url: "https://api.github.com/users/dumbyme/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "MaxSchultz",
    id: 664787,
    node_id: "MDQ6VXNlcjY2NDc4Nw==",
    avatar_url: "https://avatars.githubusercontent.com/u/664787?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/MaxSchultz",
    html_url: "https://github.com/MaxSchultz",
    followers_url: "https://api.github.com/users/MaxSchultz/followers",
    following_url:
      "https://api.github.com/users/MaxSchultz/following{/other_user}",
    gists_url: "https://api.github.com/users/MaxSchultz/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/MaxSchultz/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/MaxSchultz/subscriptions",
    organizations_url: "https://api.github.com/users/MaxSchultz/orgs",
    repos_url: "https://api.github.com/users/MaxSchultz/repos",
    events_url: "https://api.github.com/users/MaxSchultz/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/MaxSchultz/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "alienintheheights",
    id: 682815,
    node_id: "MDQ6VXNlcjY4MjgxNQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/682815?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alienintheheights",
    html_url: "https://github.com/alienintheheights",
    followers_url: "https://api.github.com/users/alienintheheights/followers",
    following_url:
      "https://api.github.com/users/alienintheheights/following{/other_user}",
    gists_url: "https://api.github.com/users/alienintheheights/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/alienintheheights/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/alienintheheights/subscriptions",
    organizations_url: "https://api.github.com/users/alienintheheights/orgs",
    repos_url: "https://api.github.com/users/alienintheheights/repos",
    events_url:
      "https://api.github.com/users/alienintheheights/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/alienintheheights/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "wboykinm",
    id: 735463,
    node_id: "MDQ6VXNlcjczNTQ2Mw==",
    avatar_url: "https://avatars.githubusercontent.com/u/735463?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wboykinm",
    html_url: "https://github.com/wboykinm",
    followers_url: "https://api.github.com/users/wboykinm/followers",
    following_url:
      "https://api.github.com/users/wboykinm/following{/other_user}",
    gists_url: "https://api.github.com/users/wboykinm/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wboykinm/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wboykinm/subscriptions",
    organizations_url: "https://api.github.com/users/wboykinm/orgs",
    repos_url: "https://api.github.com/users/wboykinm/repos",
    events_url: "https://api.github.com/users/wboykinm/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/wboykinm/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jonbischke",
    id: 755039,
    node_id: "MDQ6VXNlcjc1NTAzOQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/755039?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jonbischke",
    html_url: "https://github.com/jonbischke",
    followers_url: "https://api.github.com/users/jonbischke/followers",
    following_url:
      "https://api.github.com/users/jonbischke/following{/other_user}",
    gists_url: "https://api.github.com/users/jonbischke/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jonbischke/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jonbischke/subscriptions",
    organizations_url: "https://api.github.com/users/jonbischke/orgs",
    repos_url: "https://api.github.com/users/jonbischke/repos",
    events_url: "https://api.github.com/users/jonbischke/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jonbischke/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "vpr",
    id: 931710,
    node_id: "MDQ6VXNlcjkzMTcxMA==",
    avatar_url: "https://avatars.githubusercontent.com/u/931710?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vpr",
    html_url: "https://github.com/vpr",
    followers_url: "https://api.github.com/users/vpr/followers",
    following_url: "https://api.github.com/users/vpr/following{/other_user}",
    gists_url: "https://api.github.com/users/vpr/gists{/gist_id}",
    starred_url: "https://api.github.com/users/vpr/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vpr/subscriptions",
    organizations_url: "https://api.github.com/users/vpr/orgs",
    repos_url: "https://api.github.com/users/vpr/repos",
    events_url: "https://api.github.com/users/vpr/events{/privacy}",
    received_events_url: "https://api.github.com/users/vpr/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "UbuntuEvangelist",
    id: 1058663,
    node_id: "MDQ6VXNlcjEwNTg2NjM=",
    avatar_url: "https://avatars.githubusercontent.com/u/1058663?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/UbuntuEvangelist",
    html_url: "https://github.com/UbuntuEvangelist",
    followers_url: "https://api.github.com/users/UbuntuEvangelist/followers",
    following_url:
      "https://api.github.com/users/UbuntuEvangelist/following{/other_user}",
    gists_url: "https://api.github.com/users/UbuntuEvangelist/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/UbuntuEvangelist/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/UbuntuEvangelist/subscriptions",
    organizations_url: "https://api.github.com/users/UbuntuEvangelist/orgs",
    repos_url: "https://api.github.com/users/UbuntuEvangelist/repos",
    events_url:
      "https://api.github.com/users/UbuntuEvangelist/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/UbuntuEvangelist/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "pmontp19",
    id: 1065202,
    node_id: "MDQ6VXNlcjEwNjUyMDI=",
    avatar_url: "https://avatars.githubusercontent.com/u/1065202?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/pmontp19",
    html_url: "https://github.com/pmontp19",
    followers_url: "https://api.github.com/users/pmontp19/followers",
    following_url:
      "https://api.github.com/users/pmontp19/following{/other_user}",
    gists_url: "https://api.github.com/users/pmontp19/gists{/gist_id}",
    starred_url: "https://api.github.com/users/pmontp19/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/pmontp19/subscriptions",
    organizations_url: "https://api.github.com/users/pmontp19/orgs",
    repos_url: "https://api.github.com/users/pmontp19/repos",
    events_url: "https://api.github.com/users/pmontp19/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/pmontp19/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "toxtli",
    id: 1299233,
    node_id: "MDQ6VXNlcjEyOTkyMzM=",
    avatar_url: "https://avatars.githubusercontent.com/u/1299233?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/toxtli",
    html_url: "https://github.com/toxtli",
    followers_url: "https://api.github.com/users/toxtli/followers",
    following_url: "https://api.github.com/users/toxtli/following{/other_user}",
    gists_url: "https://api.github.com/users/toxtli/gists{/gist_id}",
    starred_url: "https://api.github.com/users/toxtli/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/toxtli/subscriptions",
    organizations_url: "https://api.github.com/users/toxtli/orgs",
    repos_url: "https://api.github.com/users/toxtli/repos",
    events_url: "https://api.github.com/users/toxtli/events{/privacy}",
    received_events_url: "https://api.github.com/users/toxtli/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "entelobot",
    id: 1421223,
    node_id: "MDQ6VXNlcjE0MjEyMjM=",
    avatar_url: "https://avatars.githubusercontent.com/u/1421223?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/entelobot",
    html_url: "https://github.com/entelobot",
    followers_url: "https://api.github.com/users/entelobot/followers",
    following_url:
      "https://api.github.com/users/entelobot/following{/other_user}",
    gists_url: "https://api.github.com/users/entelobot/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/entelobot/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/entelobot/subscriptions",
    organizations_url: "https://api.github.com/users/entelobot/orgs",
    repos_url: "https://api.github.com/users/entelobot/repos",
    events_url: "https://api.github.com/users/entelobot/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/entelobot/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "arslnb",
    id: 2177963,
    node_id: "MDQ6VXNlcjIxNzc5NjM=",
    avatar_url: "https://avatars.githubusercontent.com/u/2177963?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/arslnb",
    html_url: "https://github.com/arslnb",
    followers_url: "https://api.github.com/users/arslnb/followers",
    following_url: "https://api.github.com/users/arslnb/following{/other_user}",
    gists_url: "https://api.github.com/users/arslnb/gists{/gist_id}",
    starred_url: "https://api.github.com/users/arslnb/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/arslnb/subscriptions",
    organizations_url: "https://api.github.com/users/arslnb/orgs",
    repos_url: "https://api.github.com/users/arslnb/repos",
    events_url: "https://api.github.com/users/arslnb/events{/privacy}",
    received_events_url: "https://api.github.com/users/arslnb/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ychong",
    id: 2217207,
    node_id: "MDQ6VXNlcjIyMTcyMDc=",
    avatar_url: "https://avatars.githubusercontent.com/u/2217207?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ychong",
    html_url: "https://github.com/ychong",
    followers_url: "https://api.github.com/users/ychong/followers",
    following_url: "https://api.github.com/users/ychong/following{/other_user}",
    gists_url: "https://api.github.com/users/ychong/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ychong/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ychong/subscriptions",
    organizations_url: "https://api.github.com/users/ychong/orgs",
    repos_url: "https://api.github.com/users/ychong/repos",
    events_url: "https://api.github.com/users/ychong/events{/privacy}",
    received_events_url: "https://api.github.com/users/ychong/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "csjaba",
    id: 2398264,
    node_id: "MDQ6VXNlcjIzOTgyNjQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/2398264?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/csjaba",
    html_url: "https://github.com/csjaba",
    followers_url: "https://api.github.com/users/csjaba/followers",
    following_url: "https://api.github.com/users/csjaba/following{/other_user}",
    gists_url: "https://api.github.com/users/csjaba/gists{/gist_id}",
    starred_url: "https://api.github.com/users/csjaba/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/csjaba/subscriptions",
    organizations_url: "https://api.github.com/users/csjaba/orgs",
    repos_url: "https://api.github.com/users/csjaba/repos",
    events_url: "https://api.github.com/users/csjaba/events{/privacy}",
    received_events_url: "https://api.github.com/users/csjaba/received_events",
    type: "User",
    site_admin: false,
  },
];

const mockdata = {
  login: "Meiti-021",
  id: 89641841,
  node_id: "MDQ6VXNlcjg5NjQxODQx",
  avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Meiti-021",
  html_url: "https://github.com/Meiti-021",
  followers_url: "https://api.github.com/users/Meiti-021/followers",
  following_url:
    "https://api.github.com/users/Meiti-021/following{/other_user}",
  gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
  organizations_url: "https://api.github.com/users/Meiti-021/orgs",
  repos_url: "https://api.github.com/users/Meiti-021/repos",
  events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
  received_events_url: "https://api.github.com/users/Meiti-021/received_events",
  type: "User",
  site_admin: false,
  name: "Mahdi dehgani",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "Front-End web developer",
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-08-27T11:44:17Z",
  updated_at: "2023-01-02T12:30:13Z",
};

const followingMock = [
  {
    login: "indirect",
    id: 78,
    node_id: "MDQ6VXNlcjc4",
    avatar_url: "https://avatars.githubusercontent.com/u/78?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/indirect",
    html_url: "https://github.com/indirect",
    followers_url: "https://api.github.com/users/indirect/followers",
    following_url:
      "https://api.github.com/users/indirect/following{/other_user}",
    gists_url: "https://api.github.com/users/indirect/gists{/gist_id}",
    starred_url: "https://api.github.com/users/indirect/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/indirect/subscriptions",
    organizations_url: "https://api.github.com/users/indirect/orgs",
    repos_url: "https://api.github.com/users/indirect/repos",
    events_url: "https://api.github.com/users/indirect/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/indirect/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jnunemaker",
    id: 235,
    node_id: "MDQ6VXNlcjIzNQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/235?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jnunemaker",
    html_url: "https://github.com/jnunemaker",
    followers_url: "https://api.github.com/users/jnunemaker/followers",
    following_url:
      "https://api.github.com/users/jnunemaker/following{/other_user}",
    gists_url: "https://api.github.com/users/jnunemaker/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jnunemaker/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jnunemaker/subscriptions",
    organizations_url: "https://api.github.com/users/jnunemaker/orgs",
    repos_url: "https://api.github.com/users/jnunemaker/repos",
    events_url: "https://api.github.com/users/jnunemaker/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jnunemaker/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "rtomayko",
    id: 404,
    node_id: "MDQ6VXNlcjQwNA==",
    avatar_url: "https://avatars.githubusercontent.com/u/404?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rtomayko",
    html_url: "https://github.com/rtomayko",
    followers_url: "https://api.github.com/users/rtomayko/followers",
    following_url:
      "https://api.github.com/users/rtomayko/following{/other_user}",
    gists_url: "https://api.github.com/users/rtomayko/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rtomayko/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rtomayko/subscriptions",
    organizations_url: "https://api.github.com/users/rtomayko/orgs",
    repos_url: "https://api.github.com/users/rtomayko/repos",
    events_url: "https://api.github.com/users/rtomayko/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rtomayko/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "nakajima",
    id: 483,
    node_id: "MDQ6VXNlcjQ4Mw==",
    avatar_url: "https://avatars.githubusercontent.com/u/483?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/nakajima",
    html_url: "https://github.com/nakajima",
    followers_url: "https://api.github.com/users/nakajima/followers",
    following_url:
      "https://api.github.com/users/nakajima/following{/other_user}",
    gists_url: "https://api.github.com/users/nakajima/gists{/gist_id}",
    starred_url: "https://api.github.com/users/nakajima/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/nakajima/subscriptions",
    organizations_url: "https://api.github.com/users/nakajima/orgs",
    repos_url: "https://api.github.com/users/nakajima/repos",
    events_url: "https://api.github.com/users/nakajima/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/nakajima/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "pilhofer",
    id: 2039,
    node_id: "MDQ6VXNlcjIwMzk=",
    avatar_url: "https://avatars.githubusercontent.com/u/2039?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/pilhofer",
    html_url: "https://github.com/pilhofer",
    followers_url: "https://api.github.com/users/pilhofer/followers",
    following_url:
      "https://api.github.com/users/pilhofer/following{/other_user}",
    gists_url: "https://api.github.com/users/pilhofer/gists{/gist_id}",
    starred_url: "https://api.github.com/users/pilhofer/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/pilhofer/subscriptions",
    organizations_url: "https://api.github.com/users/pilhofer/orgs",
    repos_url: "https://api.github.com/users/pilhofer/repos",
    events_url: "https://api.github.com/users/pilhofer/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/pilhofer/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "dwillis",
    id: 2214,
    node_id: "MDQ6VXNlcjIyMTQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/2214?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dwillis",
    html_url: "https://github.com/dwillis",
    followers_url: "https://api.github.com/users/dwillis/followers",
    following_url:
      "https://api.github.com/users/dwillis/following{/other_user}",
    gists_url: "https://api.github.com/users/dwillis/gists{/gist_id}",
    starred_url: "https://api.github.com/users/dwillis/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dwillis/subscriptions",
    organizations_url: "https://api.github.com/users/dwillis/orgs",
    repos_url: "https://api.github.com/users/dwillis/repos",
    events_url: "https://api.github.com/users/dwillis/events{/privacy}",
    received_events_url: "https://api.github.com/users/dwillis/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "zeke",
    id: 2289,
    node_id: "MDQ6VXNlcjIyODk=",
    avatar_url: "https://avatars.githubusercontent.com/u/2289?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/zeke",
    html_url: "https://github.com/zeke",
    followers_url: "https://api.github.com/users/zeke/followers",
    following_url: "https://api.github.com/users/zeke/following{/other_user}",
    gists_url: "https://api.github.com/users/zeke/gists{/gist_id}",
    starred_url: "https://api.github.com/users/zeke/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/zeke/subscriptions",
    organizations_url: "https://api.github.com/users/zeke/orgs",
    repos_url: "https://api.github.com/users/zeke/repos",
    events_url: "https://api.github.com/users/zeke/events{/privacy}",
    received_events_url: "https://api.github.com/users/zeke/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "tenderlove",
    id: 3124,
    node_id: "MDQ6VXNlcjMxMjQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/3124?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/tenderlove",
    html_url: "https://github.com/tenderlove",
    followers_url: "https://api.github.com/users/tenderlove/followers",
    following_url:
      "https://api.github.com/users/tenderlove/following{/other_user}",
    gists_url: "https://api.github.com/users/tenderlove/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/tenderlove/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/tenderlove/subscriptions",
    organizations_url: "https://api.github.com/users/tenderlove/orgs",
    repos_url: "https://api.github.com/users/tenderlove/repos",
    events_url: "https://api.github.com/users/tenderlove/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/tenderlove/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "smtlaissezfaire",
    id: 3690,
    node_id: "MDQ6VXNlcjM2OTA=",
    avatar_url: "https://avatars.githubusercontent.com/u/3690?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/smtlaissezfaire",
    html_url: "https://github.com/smtlaissezfaire",
    followers_url: "https://api.github.com/users/smtlaissezfaire/followers",
    following_url:
      "https://api.github.com/users/smtlaissezfaire/following{/other_user}",
    gists_url: "https://api.github.com/users/smtlaissezfaire/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/smtlaissezfaire/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/smtlaissezfaire/subscriptions",
    organizations_url: "https://api.github.com/users/smtlaissezfaire/orgs",
    repos_url: "https://api.github.com/users/smtlaissezfaire/repos",
    events_url: "https://api.github.com/users/smtlaissezfaire/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/smtlaissezfaire/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "pauldix",
    id: 4331,
    node_id: "MDQ6VXNlcjQzMzE=",
    avatar_url: "https://avatars.githubusercontent.com/u/4331?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/pauldix",
    html_url: "https://github.com/pauldix",
    followers_url: "https://api.github.com/users/pauldix/followers",
    following_url:
      "https://api.github.com/users/pauldix/following{/other_user}",
    gists_url: "https://api.github.com/users/pauldix/gists{/gist_id}",
    starred_url: "https://api.github.com/users/pauldix/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/pauldix/subscriptions",
    organizations_url: "https://api.github.com/users/pauldix/orgs",
    repos_url: "https://api.github.com/users/pauldix/repos",
    events_url: "https://api.github.com/users/pauldix/events{/privacy}",
    received_events_url: "https://api.github.com/users/pauldix/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jashkenas",
    id: 4732,
    node_id: "MDQ6VXNlcjQ3MzI=",
    avatar_url: "https://avatars.githubusercontent.com/u/4732?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jashkenas",
    html_url: "https://github.com/jashkenas",
    followers_url: "https://api.github.com/users/jashkenas/followers",
    following_url:
      "https://api.github.com/users/jashkenas/following{/other_user}",
    gists_url: "https://api.github.com/users/jashkenas/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jashkenas/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jashkenas/subscriptions",
    organizations_url: "https://api.github.com/users/jashkenas/orgs",
    repos_url: "https://api.github.com/users/jashkenas/repos",
    events_url: "https://api.github.com/users/jashkenas/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jashkenas/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jkriss",
    id: 6276,
    node_id: "MDQ6VXNlcjYyNzY=",
    avatar_url: "https://avatars.githubusercontent.com/u/6276?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jkriss",
    html_url: "https://github.com/jkriss",
    followers_url: "https://api.github.com/users/jkriss/followers",
    following_url: "https://api.github.com/users/jkriss/following{/other_user}",
    gists_url: "https://api.github.com/users/jkriss/gists{/gist_id}",
    starred_url: "https://api.github.com/users/jkriss/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jkriss/subscriptions",
    organizations_url: "https://api.github.com/users/jkriss/orgs",
    repos_url: "https://api.github.com/users/jkriss/repos",
    events_url: "https://api.github.com/users/jkriss/events{/privacy}",
    received_events_url: "https://api.github.com/users/jkriss/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "gaffneyc",
    id: 7095,
    node_id: "MDQ6VXNlcjcwOTU=",
    avatar_url: "https://avatars.githubusercontent.com/u/7095?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gaffneyc",
    html_url: "https://github.com/gaffneyc",
    followers_url: "https://api.github.com/users/gaffneyc/followers",
    following_url:
      "https://api.github.com/users/gaffneyc/following{/other_user}",
    gists_url: "https://api.github.com/users/gaffneyc/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gaffneyc/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gaffneyc/subscriptions",
    organizations_url: "https://api.github.com/users/gaffneyc/orgs",
    repos_url: "https://api.github.com/users/gaffneyc/repos",
    events_url: "https://api.github.com/users/gaffneyc/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/gaffneyc/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "sandro",
    id: 9643,
    node_id: "MDQ6VXNlcjk2NDM=",
    avatar_url: "https://avatars.githubusercontent.com/u/9643?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sandro",
    html_url: "https://github.com/sandro",
    followers_url: "https://api.github.com/users/sandro/followers",
    following_url: "https://api.github.com/users/sandro/following{/other_user}",
    gists_url: "https://api.github.com/users/sandro/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sandro/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sandro/subscriptions",
    organizations_url: "https://api.github.com/users/sandro/orgs",
    repos_url: "https://api.github.com/users/sandro/repos",
    events_url: "https://api.github.com/users/sandro/events{/privacy}",
    received_events_url: "https://api.github.com/users/sandro/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "fhwang",
    id: 10196,
    node_id: "MDQ6VXNlcjEwMTk2",
    avatar_url: "https://avatars.githubusercontent.com/u/10196?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/fhwang",
    html_url: "https://github.com/fhwang",
    followers_url: "https://api.github.com/users/fhwang/followers",
    following_url: "https://api.github.com/users/fhwang/following{/other_user}",
    gists_url: "https://api.github.com/users/fhwang/gists{/gist_id}",
    starred_url: "https://api.github.com/users/fhwang/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/fhwang/subscriptions",
    organizations_url: "https://api.github.com/users/fhwang/orgs",
    repos_url: "https://api.github.com/users/fhwang/repos",
    events_url: "https://api.github.com/users/fhwang/events{/privacy}",
    received_events_url: "https://api.github.com/users/fhwang/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "hobbeswalsh",
    id: 14958,
    node_id: "MDQ6VXNlcjE0OTU4",
    avatar_url: "https://avatars.githubusercontent.com/u/14958?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hobbeswalsh",
    html_url: "https://github.com/hobbeswalsh",
    followers_url: "https://api.github.com/users/hobbeswalsh/followers",
    following_url:
      "https://api.github.com/users/hobbeswalsh/following{/other_user}",
    gists_url: "https://api.github.com/users/hobbeswalsh/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hobbeswalsh/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hobbeswalsh/subscriptions",
    organizations_url: "https://api.github.com/users/hobbeswalsh/orgs",
    repos_url: "https://api.github.com/users/hobbeswalsh/repos",
    events_url: "https://api.github.com/users/hobbeswalsh/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hobbeswalsh/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "phorsfall",
    id: 15164,
    node_id: "MDQ6VXNlcjE1MTY0",
    avatar_url: "https://avatars.githubusercontent.com/u/15164?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/phorsfall",
    html_url: "https://github.com/phorsfall",
    followers_url: "https://api.github.com/users/phorsfall/followers",
    following_url:
      "https://api.github.com/users/phorsfall/following{/other_user}",
    gists_url: "https://api.github.com/users/phorsfall/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/phorsfall/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/phorsfall/subscriptions",
    organizations_url: "https://api.github.com/users/phorsfall/orgs",
    repos_url: "https://api.github.com/users/phorsfall/repos",
    events_url: "https://api.github.com/users/phorsfall/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/phorsfall/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ferblape",
    id: 17616,
    node_id: "MDQ6VXNlcjE3NjE2",
    avatar_url: "https://avatars.githubusercontent.com/u/17616?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ferblape",
    html_url: "https://github.com/ferblape",
    followers_url: "https://api.github.com/users/ferblape/followers",
    following_url:
      "https://api.github.com/users/ferblape/following{/other_user}",
    gists_url: "https://api.github.com/users/ferblape/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ferblape/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ferblape/subscriptions",
    organizations_url: "https://api.github.com/users/ferblape/orgs",
    repos_url: "https://api.github.com/users/ferblape/repos",
    events_url: "https://api.github.com/users/ferblape/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ferblape/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "tlrobinson",
    id: 18193,
    node_id: "MDQ6VXNlcjE4MTkz",
    avatar_url: "https://avatars.githubusercontent.com/u/18193?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/tlrobinson",
    html_url: "https://github.com/tlrobinson",
    followers_url: "https://api.github.com/users/tlrobinson/followers",
    following_url:
      "https://api.github.com/users/tlrobinson/following{/other_user}",
    gists_url: "https://api.github.com/users/tlrobinson/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/tlrobinson/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/tlrobinson/subscriptions",
    organizations_url: "https://api.github.com/users/tlrobinson/orgs",
    repos_url: "https://api.github.com/users/tlrobinson/repos",
    events_url: "https://api.github.com/users/tlrobinson/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/tlrobinson/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ept",
    id: 27544,
    node_id: "MDQ6VXNlcjI3NTQ0",
    avatar_url: "https://avatars.githubusercontent.com/u/27544?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ept",
    html_url: "https://github.com/ept",
    followers_url: "https://api.github.com/users/ept/followers",
    following_url: "https://api.github.com/users/ept/following{/other_user}",
    gists_url: "https://api.github.com/users/ept/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ept/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ept/subscriptions",
    organizations_url: "https://api.github.com/users/ept/orgs",
    repos_url: "https://api.github.com/users/ept/repos",
    events_url: "https://api.github.com/users/ept/events{/privacy}",
    received_events_url: "https://api.github.com/users/ept/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "bkoski",
    id: 35356,
    node_id: "MDQ6VXNlcjM1MzU2",
    avatar_url: "https://avatars.githubusercontent.com/u/35356?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/bkoski",
    html_url: "https://github.com/bkoski",
    followers_url: "https://api.github.com/users/bkoski/followers",
    following_url: "https://api.github.com/users/bkoski/following{/other_user}",
    gists_url: "https://api.github.com/users/bkoski/gists{/gist_id}",
    starred_url: "https://api.github.com/users/bkoski/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/bkoski/subscriptions",
    organizations_url: "https://api.github.com/users/bkoski/orgs",
    repos_url: "https://api.github.com/users/bkoski/repos",
    events_url: "https://api.github.com/users/bkoski/events{/privacy}",
    received_events_url: "https://api.github.com/users/bkoski/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ryankennedy",
    id: 37302,
    node_id: "MDQ6VXNlcjM3MzAy",
    avatar_url: "https://avatars.githubusercontent.com/u/37302?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ryankennedy",
    html_url: "https://github.com/ryankennedy",
    followers_url: "https://api.github.com/users/ryankennedy/followers",
    following_url:
      "https://api.github.com/users/ryankennedy/following{/other_user}",
    gists_url: "https://api.github.com/users/ryankennedy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ryankennedy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ryankennedy/subscriptions",
    organizations_url: "https://api.github.com/users/ryankennedy/orgs",
    repos_url: "https://api.github.com/users/ryankennedy/repos",
    events_url: "https://api.github.com/users/ryankennedy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ryankennedy/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "zeitgeist",
    id: 38831,
    node_id: "MDQ6VXNlcjM4ODMx",
    avatar_url: "https://avatars.githubusercontent.com/u/38831?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/zeitgeist",
    html_url: "https://github.com/zeitgeist",
    followers_url: "https://api.github.com/users/zeitgeist/followers",
    following_url:
      "https://api.github.com/users/zeitgeist/following{/other_user}",
    gists_url: "https://api.github.com/users/zeitgeist/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/zeitgeist/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/zeitgeist/subscriptions",
    organizations_url: "https://api.github.com/users/zeitgeist/orgs",
    repos_url: "https://api.github.com/users/zeitgeist/repos",
    events_url: "https://api.github.com/users/zeitgeist/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/zeitgeist/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "barrettclark",
    id: 41442,
    node_id: "MDQ6VXNlcjQxNDQy",
    avatar_url: "https://avatars.githubusercontent.com/u/41442?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/barrettclark",
    html_url: "https://github.com/barrettclark",
    followers_url: "https://api.github.com/users/barrettclark/followers",
    following_url:
      "https://api.github.com/users/barrettclark/following{/other_user}",
    gists_url: "https://api.github.com/users/barrettclark/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/barrettclark/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/barrettclark/subscriptions",
    organizations_url: "https://api.github.com/users/barrettclark/orgs",
    repos_url: "https://api.github.com/users/barrettclark/repos",
    events_url: "https://api.github.com/users/barrettclark/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/barrettclark/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "djacobs",
    id: 42236,
    node_id: "MDQ6VXNlcjQyMjM2",
    avatar_url: "https://avatars.githubusercontent.com/u/42236?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/djacobs",
    html_url: "https://github.com/djacobs",
    followers_url: "https://api.github.com/users/djacobs/followers",
    following_url:
      "https://api.github.com/users/djacobs/following{/other_user}",
    gists_url: "https://api.github.com/users/djacobs/gists{/gist_id}",
    starred_url: "https://api.github.com/users/djacobs/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/djacobs/subscriptions",
    organizations_url: "https://api.github.com/users/djacobs/orgs",
    repos_url: "https://api.github.com/users/djacobs/repos",
    events_url: "https://api.github.com/users/djacobs/events{/privacy}",
    received_events_url: "https://api.github.com/users/djacobs/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "thenice",
    id: 56284,
    node_id: "MDQ6VXNlcjU2Mjg0",
    avatar_url: "https://avatars.githubusercontent.com/u/56284?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/thenice",
    html_url: "https://github.com/thenice",
    followers_url: "https://api.github.com/users/thenice/followers",
    following_url:
      "https://api.github.com/users/thenice/following{/other_user}",
    gists_url: "https://api.github.com/users/thenice/gists{/gist_id}",
    starred_url: "https://api.github.com/users/thenice/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/thenice/subscriptions",
    organizations_url: "https://api.github.com/users/thenice/orgs",
    repos_url: "https://api.github.com/users/thenice/repos",
    events_url: "https://api.github.com/users/thenice/events{/privacy}",
    received_events_url: "https://api.github.com/users/thenice/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "bradford",
    id: 73360,
    node_id: "MDQ6VXNlcjczMzYw",
    avatar_url: "https://avatars.githubusercontent.com/u/73360?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/bradford",
    html_url: "https://github.com/bradford",
    followers_url: "https://api.github.com/users/bradford/followers",
    following_url:
      "https://api.github.com/users/bradford/following{/other_user}",
    gists_url: "https://api.github.com/users/bradford/gists{/gist_id}",
    starred_url: "https://api.github.com/users/bradford/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/bradford/subscriptions",
    organizations_url: "https://api.github.com/users/bradford/orgs",
    repos_url: "https://api.github.com/users/bradford/repos",
    events_url: "https://api.github.com/users/bradford/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/bradford/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "lucasmazza",
    id: 80978,
    node_id: "MDQ6VXNlcjgwOTc4",
    avatar_url: "https://avatars.githubusercontent.com/u/80978?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lucasmazza",
    html_url: "https://github.com/lucasmazza",
    followers_url: "https://api.github.com/users/lucasmazza/followers",
    following_url:
      "https://api.github.com/users/lucasmazza/following{/other_user}",
    gists_url: "https://api.github.com/users/lucasmazza/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lucasmazza/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lucasmazza/subscriptions",
    organizations_url: "https://api.github.com/users/lucasmazza/orgs",
    repos_url: "https://api.github.com/users/lucasmazza/repos",
    events_url: "https://api.github.com/users/lucasmazza/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lucasmazza/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "altay",
    id: 82309,
    node_id: "MDQ6VXNlcjgyMzA5",
    avatar_url: "https://avatars.githubusercontent.com/u/82309?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/altay",
    html_url: "https://github.com/altay",
    followers_url: "https://api.github.com/users/altay/followers",
    following_url: "https://api.github.com/users/altay/following{/other_user}",
    gists_url: "https://api.github.com/users/altay/gists{/gist_id}",
    starred_url: "https://api.github.com/users/altay/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/altay/subscriptions",
    organizations_url: "https://api.github.com/users/altay/orgs",
    repos_url: "https://api.github.com/users/altay/repos",
    events_url: "https://api.github.com/users/altay/events{/privacy}",
    received_events_url: "https://api.github.com/users/altay/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mads-hartmann",
    id: 83561,
    node_id: "MDQ6VXNlcjgzNTYx",
    avatar_url: "https://avatars.githubusercontent.com/u/83561?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mads-hartmann",
    html_url: "https://github.com/mads-hartmann",
    followers_url: "https://api.github.com/users/mads-hartmann/followers",
    following_url:
      "https://api.github.com/users/mads-hartmann/following{/other_user}",
    gists_url: "https://api.github.com/users/mads-hartmann/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/mads-hartmann/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/mads-hartmann/subscriptions",
    organizations_url: "https://api.github.com/users/mads-hartmann/orgs",
    repos_url: "https://api.github.com/users/mads-hartmann/repos",
    events_url: "https://api.github.com/users/mads-hartmann/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/mads-hartmann/received_events",
    type: "User",
    site_admin: false,
  },
];

const MockRepo = [
  {
    id: 578259688,
    node_id: "R_kgDOIneK6A",
    name: "cocktails-db",
    full_name: "Meiti-021/cocktails-db",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/cocktails-db",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/cocktails-db",
    forks_url: "https://api.github.com/repos/Meiti-021/cocktails-db/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/cocktails-db/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/cocktails-db/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/issues/events{/number}",
    events_url: "https://api.github.com/repos/Meiti-021/cocktails-db/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/cocktails-db/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Meiti-021/cocktails-db/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/cocktails-db/deployments",
    created_at: "2022-12-14T16:23:50Z",
    updated_at: "2022-12-17T19:06:49Z",
    pushed_at: "2022-12-17T11:33:04Z",
    git_url: "git://github.com/Meiti-021/cocktails-db.git",
    ssh_url: "git@github.com:Meiti-021/cocktails-db.git",
    clone_url: "https://github.com/Meiti-021/cocktails-db.git",
    svn_url: "https://github.com/Meiti-021/cocktails-db",
    homepage: null,
    size: 601,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 563574447,
    node_id: "R_kgDOIZd2rw",
    name: "digikala-no-faramwork",
    full_name: "Meiti-021/digikala-no-faramwork",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/digikala-no-faramwork",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/digikala-no-faramwork",
    forks_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-faramwork/deployments",
    created_at: "2022-11-08T22:29:48Z",
    updated_at: "2022-12-17T19:07:01Z",
    pushed_at: "2022-11-08T22:29:49Z",
    git_url: "git://github.com/Meiti-021/digikala-no-faramwork.git",
    ssh_url: "git@github.com:Meiti-021/digikala-no-faramwork.git",
    clone_url: "https://github.com/Meiti-021/digikala-no-faramwork.git",
    svn_url: "https://github.com/Meiti-021/digikala-no-faramwork",
    homepage: null,
    size: 0,
    stargazers_count: 1,
    watchers_count: 1,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 563512157,
    node_id: "R_kgDOIZaDXQ",
    name: "digikala-no-framework-",
    full_name: "Meiti-021/digikala-no-framework-",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/digikala-no-framework-",
    description:
      "digikala landing with pure HTML, Css, Javascript - No frameworks used",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/digikala-no-framework-",
    forks_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/digikala-no-framework-/deployments",
    created_at: "2022-11-08T19:11:29Z",
    updated_at: "2022-12-17T19:07:00Z",
    pushed_at: "2022-11-11T23:20:33Z",
    git_url: "git://github.com/Meiti-021/digikala-no-framework-.git",
    ssh_url: "git@github.com:Meiti-021/digikala-no-framework-.git",
    clone_url: "https://github.com/Meiti-021/digikala-no-framework-.git",
    svn_url: "https://github.com/Meiti-021/digikala-no-framework-",
    homepage: null,
    size: 9128,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 549083373,
    node_id: "R_kgDOILpY7Q",
    name: "first-personal-portfolio",
    full_name: "Meiti-021/first-personal-portfolio",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/first-personal-portfolio",
    description: "This is my first personal portfolio fron-end web project",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/first-personal-portfolio",
    forks_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/first-personal-portfolio/deployments",
    created_at: "2022-10-10T16:41:20Z",
    updated_at: "2022-10-13T12:45:17Z",
    pushed_at: "2022-10-13T12:45:13Z",
    git_url: "git://github.com/Meiti-021/first-personal-portfolio.git",
    ssh_url: "git@github.com:Meiti-021/first-personal-portfolio.git",
    clone_url: "https://github.com/Meiti-021/first-personal-portfolio.git",
    svn_url: "https://github.com/Meiti-021/first-personal-portfolio",
    homepage: null,
    size: 1345,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 584884957,
    node_id: "R_kgDOItyi3Q",
    name: "github-dashboard",
    full_name: "Meiti-021/github-dashboard",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/github-dashboard",
    description:
      "A Github dashboard / web application using React & github REST API in persian language",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/github-dashboard",
    forks_url: "https://api.github.com/repos/Meiti-021/github-dashboard/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/github-dashboard/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/github-dashboard/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/github-dashboard/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/github-dashboard/deployments",
    created_at: "2023-01-03T19:09:42Z",
    updated_at: "2023-01-06T20:31:21Z",
    pushed_at: "2023-01-06T20:31:16Z",
    git_url: "git://github.com/Meiti-021/github-dashboard.git",
    ssh_url: "git@github.com:Meiti-021/github-dashboard.git",
    clone_url: "https://github.com/Meiti-021/github-dashboard.git",
    svn_url: "https://github.com/Meiti-021/github-dashboard",
    homepage: null,
    size: 11846,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 550919469,
    node_id: "R_kgDOINZdLQ",
    name: "javascript-todo-web-app",
    full_name: "Meiti-021/javascript-todo-web-app",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/javascript-todo-web-app",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/javascript-todo-web-app",
    forks_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/javascript-todo-web-app/deployments",
    created_at: "2022-10-13T14:38:46Z",
    updated_at: "2022-12-17T19:07:10Z",
    pushed_at: "2022-10-14T18:24:21Z",
    git_url: "git://github.com/Meiti-021/javascript-todo-web-app.git",
    ssh_url: "git@github.com:Meiti-021/javascript-todo-web-app.git",
    clone_url: "https://github.com/Meiti-021/javascript-todo-web-app.git",
    svn_url: "https://github.com/Meiti-021/javascript-todo-web-app",
    homepage: null,
    size: 295,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 553802078,
    node_id: "R_kgDOIQJZXg",
    name: "login-database",
    full_name: "Meiti-021/login-database",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/login-database",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/login-database",
    forks_url: "https://api.github.com/repos/Meiti-021/login-database/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/login-database/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/login-database/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/login-database/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/login-database/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/login-database/issues/events{/number}",
    events_url: "https://api.github.com/repos/Meiti-021/login-database/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/login-database/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/login-database/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/login-database/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/login-database/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/login-database/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/login-database/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/login-database/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/login-database/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/login-database/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/login-database/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/login-database/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/login-database/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/login-database/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/login-database/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/login-database/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/login-database/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/login-database/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/login-database/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/login-database/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Meiti-021/login-database/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/login-database/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/login-database/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/login-database/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/login-database/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/login-database/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/login-database/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/login-database/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/login-database/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/login-database/deployments",
    created_at: "2022-10-18T19:48:09Z",
    updated_at: "2022-12-17T19:07:06Z",
    pushed_at: "2022-10-22T08:14:29Z",
    git_url: "git://github.com/Meiti-021/login-database.git",
    ssh_url: "git@github.com:Meiti-021/login-database.git",
    clone_url: "https://github.com/Meiti-021/login-database.git",
    svn_url: "https://github.com/Meiti-021/login-database",
    homepage: null,
    size: 334,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 400491412,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDA0OTE0MTI=",
    name: "Meiti-021",
    full_name: "Meiti-021/Meiti-021",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/Meiti-021",
    description: "Config files for my GitHub profile.",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/Meiti-021",
    forks_url: "https://api.github.com/repos/Meiti-021/Meiti-021/forks",
    keys_url: "https://api.github.com/repos/Meiti-021/Meiti-021/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/Meiti-021/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/Meiti-021/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/issues/events{/number}",
    events_url: "https://api.github.com/repos/Meiti-021/Meiti-021/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/Meiti-021/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/statuses/{sha}",
    languages_url: "https://api.github.com/repos/Meiti-021/Meiti-021/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Meiti-021/Meiti-021/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/Meiti-021/Meiti-021/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/Meiti-021/deployments",
    created_at: "2021-08-27T11:49:06Z",
    updated_at: "2021-08-27T11:51:50Z",
    pushed_at: "2021-08-27T11:51:48Z",
    git_url: "git://github.com/Meiti-021/Meiti-021.git",
    ssh_url: "git@github.com:Meiti-021/Meiti-021.git",
    clone_url: "https://github.com/Meiti-021/Meiti-021.git",
    svn_url: "https://github.com/Meiti-021/Meiti-021",
    homepage: "https://github.com/Meiti-021",
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["config", "github-config"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 579644119,
    node_id: "R_kgDOIoyq1w",
    name: "pagination-react",
    full_name: "Meiti-021/pagination-react",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/pagination-react",
    description: "just a simple react pagination for practicing purposes",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/pagination-react",
    forks_url: "https://api.github.com/repos/Meiti-021/pagination-react/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/pagination-react/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/pagination-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/pagination-react/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/pagination-react/deployments",
    created_at: "2022-12-18T11:53:25Z",
    updated_at: "2022-12-18T11:54:06Z",
    pushed_at: "2022-12-18T11:54:02Z",
    git_url: "git://github.com/Meiti-021/pagination-react.git",
    ssh_url: "git@github.com:Meiti-021/pagination-react.git",
    clone_url: "https://github.com/Meiti-021/pagination-react.git",
    svn_url: "https://github.com/Meiti-021/pagination-react",
    homepage: null,
    size: 35,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 576022263,
    node_id: "R_kgDOIlVm9w",
    name: "react-social-media",
    full_name: "Meiti-021/react-social-media",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/react-social-media",
    description: "an exercise for muliti page react app",
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/react-social-media",
    forks_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/react-social-media/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/react-social-media/deployments",
    created_at: "2022-12-08T20:41:01Z",
    updated_at: "2022-12-17T19:06:50Z",
    pushed_at: "2022-12-09T04:59:16Z",
    git_url: "git://github.com/Meiti-021/react-social-media.git",
    ssh_url: "git@github.com:Meiti-021/react-social-media.git",
    clone_url: "https://github.com/Meiti-021/react-social-media.git",
    svn_url: "https://github.com/Meiti-021/react-social-media",
    homepage: null,
    size: 1101,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 558991725,
    node_id: "R_kgDOIVGJbQ",
    name: "responsive-netflix-landing-page",
    full_name: "Meiti-021/responsive-netflix-landing-page",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/responsive-netflix-landing-page",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page",
    forks_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/responsive-netflix-landing-page/deployments",
    created_at: "2022-10-28T19:10:42Z",
    updated_at: "2022-12-17T19:07:02Z",
    pushed_at: "2022-11-02T12:56:10Z",
    git_url: "git://github.com/Meiti-021/responsive-netflix-landing-page.git",
    ssh_url: "git@github.com:Meiti-021/responsive-netflix-landing-page.git",
    clone_url:
      "https://github.com/Meiti-021/responsive-netflix-landing-page.git",
    svn_url: "https://github.com/Meiti-021/responsive-netflix-landing-page",
    homepage: null,
    size: 3005,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 552099053,
    node_id: "R_kgDOIOhc7Q",
    name: "rotatable-navbar",
    full_name: "Meiti-021/rotatable-navbar",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/rotatable-navbar",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/rotatable-navbar",
    forks_url: "https://api.github.com/repos/Meiti-021/rotatable-navbar/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/rotatable-navbar/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/rotatable-navbar/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/rotatable-navbar/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/rotatable-navbar/deployments",
    created_at: "2022-10-15T20:12:37Z",
    updated_at: "2022-12-17T19:07:08Z",
    pushed_at: "2022-10-15T20:14:21Z",
    git_url: "git://github.com/Meiti-021/rotatable-navbar.git",
    ssh_url: "git@github.com:Meiti-021/rotatable-navbar.git",
    clone_url: "https://github.com/Meiti-021/rotatable-navbar.git",
    svn_url: "https://github.com/Meiti-021/rotatable-navbar",
    homepage: null,
    size: 1960,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 560161144,
    node_id: "R_kgDOIWNheA",
    name: "split-landing-page",
    full_name: "Meiti-021/split-landing-page",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/split-landing-page",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/split-landing-page",
    forks_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/split-landing-page/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/split-landing-page/deployments",
    created_at: "2022-10-31T21:37:05Z",
    updated_at: "2022-12-17T19:07:03Z",
    pushed_at: "2022-10-31T21:54:57Z",
    git_url: "git://github.com/Meiti-021/split-landing-page.git",
    ssh_url: "git@github.com:Meiti-021/split-landing-page.git",
    clone_url: "https://github.com/Meiti-021/split-landing-page.git",
    svn_url: "https://github.com/Meiti-021/split-landing-page",
    homepage: null,
    size: 1082,
    stargazers_count: 1,
    watchers_count: 1,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 551710958,
    node_id: "R_kgDOIOJw7g",
    name: "various-photo-sliders",
    full_name: "Meiti-021/various-photo-sliders",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/various-photo-sliders",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/various-photo-sliders",
    forks_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/teams",
    hooks_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/various-photo-sliders/deployments",
    created_at: "2022-10-15T00:00:38Z",
    updated_at: "2022-12-17T19:07:08Z",
    pushed_at: "2022-10-16T16:46:00Z",
    git_url: "git://github.com/Meiti-021/various-photo-sliders.git",
    ssh_url: "git@github.com:Meiti-021/various-photo-sliders.git",
    clone_url: "https://github.com/Meiti-021/various-photo-sliders.git",
    svn_url: "https://github.com/Meiti-021/various-photo-sliders",
    homepage: null,
    size: 9372,
    stargazers_count: 1,
    watchers_count: 1,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 560187003,
    node_id: "R_kgDOIWPGew",
    name: "wavy-input-label",
    full_name: "Meiti-021/wavy-input-label",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/wavy-input-label",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/wavy-input-label",
    forks_url: "https://api.github.com/repos/Meiti-021/wavy-input-label/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/wavy-input-label/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/wavy-input-label/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/wavy-input-label/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/wavy-input-label/deployments",
    created_at: "2022-10-31T23:24:03Z",
    updated_at: "2022-12-17T19:07:03Z",
    pushed_at: "2022-10-31T23:24:58Z",
    git_url: "git://github.com/Meiti-021/wavy-input-label.git",
    ssh_url: "git@github.com:Meiti-021/wavy-input-label.git",
    clone_url: "https://github.com/Meiti-021/wavy-input-label.git",
    svn_url: "https://github.com/Meiti-021/wavy-input-label",
    homepage: null,
    size: 1,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 555962030,
    node_id: "R_kgDOISNOrg",
    name: "weather-widget",
    full_name: "Meiti-021/weather-widget",
    private: false,
    owner: {
      login: "Meiti-021",
      id: 89641841,
      node_id: "MDQ6VXNlcjg5NjQxODQx",
      avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Meiti-021",
      html_url: "https://github.com/Meiti-021",
      followers_url: "https://api.github.com/users/Meiti-021/followers",
      following_url:
        "https://api.github.com/users/Meiti-021/following{/other_user}",
      gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
      organizations_url: "https://api.github.com/users/Meiti-021/orgs",
      repos_url: "https://api.github.com/users/Meiti-021/repos",
      events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Meiti-021/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Meiti-021/weather-widget",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/Meiti-021/weather-widget",
    forks_url: "https://api.github.com/repos/Meiti-021/weather-widget/forks",
    keys_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Meiti-021/weather-widget/teams",
    hooks_url: "https://api.github.com/repos/Meiti-021/weather-widget/hooks",
    issue_events_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/issues/events{/number}",
    events_url: "https://api.github.com/repos/Meiti-021/weather-widget/events",
    assignees_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/branches{/branch}",
    tags_url: "https://api.github.com/repos/Meiti-021/weather-widget/tags",
    blobs_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/languages",
    stargazers_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/stargazers",
    contributors_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/contributors",
    subscribers_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/subscribers",
    subscription_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/subscription",
    commits_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Meiti-021/weather-widget/merges",
    archive_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/downloads",
    issues_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Meiti-021/weather-widget/deployments",
    created_at: "2022-10-22T18:45:47Z",
    updated_at: "2022-12-17T19:07:05Z",
    pushed_at: "2022-10-22T18:46:56Z",
    git_url: "git://github.com/Meiti-021/weather-widget.git",
    ssh_url: "git@github.com:Meiti-021/weather-widget.git",
    clone_url: "https://github.com/Meiti-021/weather-widget.git",
    svn_url: "https://github.com/Meiti-021/weather-widget",
    homepage: null,
    size: 494,
    stargazers_count: 1,
    watchers_count: 1,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
];

export { followersMock, mockdata, followingMock, MockRepo };
