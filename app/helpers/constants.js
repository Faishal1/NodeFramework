export default {
  // Series Model
  seriesFormatTypes: ["international", "domestic", "leagues", "womens"],
  seriesLiveStatusTypes: ["upcoming", "ongoing", "completed"],
  seriesFilterTypes: ["featured", "popular", "archive", "recent"],
  seriesTags: ["international", "leagues", "domestic", "womens", "t20", "odi", "test"],
  // Match model
  matchFormatTypes: ["odi", "t20", "test"],
  matchLiveStatusTypes: ["upcoming", "ongoing", "completed"],
  matchFilterTypes: ["featured", "popular", "archive", "recent"],
  matchTags: ["international", "domestic", "leagues", "womens", "t20", "odi", "test"],
  // Team model
  teamTags: ["international", "international-test", "international-associate", "domestic", "leagues", "womens"],
  // Player model
  playerRoleTypes: ["Batsman", "Bowler", "All Rounder", "Wicket Keeper"],
  battingStyleTypes: ["Right handed bat", "Left handed bat"],
  bowlingStyleTypes: [
    "Right arm fast",
    "Right arm fast medium",
    "Right arm medium fast",
    "Right arm medium",
    "Right arm offbreak",
    "Left arm fast",
    "Left arm fast medium",
    "Left arm medium fast",
    "Left arm medium",
    "Off break",
    "Leg break",
    "Slow left arm orthodox",
    "Slow left arm chinaman",
    "Leg break googly",
  ],
  // Squad model
  squadFormatTypes: ["odi", "t20", "test"],
  // ScoreCard model
  cardType: ["Micro", "Summary", "Full"],
  scoreCardFilterTypes: ["featured", "popular", "archive", "recent"],
  // BallByBall model
  highlightTypes: ["normal", "wicket", "four", "six", "milestone"],
  // common
  statusTypes: ["active", "deleted"],
  sourceTypes: ["cricketapi", "opta", "cricviz"],
  feedSourceTypes: ["cricketapi", "opta"],
  predictionSourceTypes: ["cricviz"],
  approvalStatusTypes: ["pending", "approved", "rejected", "duplicate"],
  minShortStr: 1,
  maxShortStr: 30,
  minStr: 1,
  maxStr: 50,
  minLongStr: 1,
  maxLongStr: 100,
  minVeryLongStr: 1,
  maxVeryLongStr: 200,
  sortByKeys: ["createdAt", "-createdAt", "updatedAt", "-updatedAt"],
  defaultDocLimit: 50,
};
