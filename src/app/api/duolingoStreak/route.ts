import axios from "axios";

export async function GET() {
  // Call unofficial Duolingo API
  const response = await axios.get<DuolingoResponseData>(
    `https://www.duolingo.com/2017-06-30/users?username=${process.env.DUOLINGO_USERNAME}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
      },
    }
  );
  const data = response.data.users[0].streak;

  const cacheDuration = 600; // Cache for 10 minutes
  const headers = new Headers();
  headers.set(
    "Cache-Control",
    `public, max-age=${cacheDuration}, s-maxage=${cacheDuration}, stale-while-revalidate`
  );

  return new Response(JSON.stringify(data), { status: 200, headers });
}

type DuolingoResponseData = {
  users: [
    {
      joinedClassroomIds: string[];
      streak: number;
      motivation: string;
      acquisitionSurveyReason: string;
      shouldForceConnectPhoneNumber: boolean;
      picture: string;
      learningLanguage: string;
      hasFacebookId: boolean;
      shakeToReportEnabled: boolean | null;
      liveOpsFeatures: [
        {
          startTimestamp: number;
          type: string;
          endTimestamp: number;
        },
      ];
      canUseModerationTools: boolean;
      id: string;
      betaStatus: "INELIGIBLE" | "ELIGIBLE";
      hasGoogleId: boolean;
      privacySettings: unknown[];
      fromLanguage: string;
      hasRecentActivity15: boolean;
      _achievements: unknown[];
      observedClassroomIds: string[];
      username: string;
      bio: string;
      profileCountry: string | null;
      chinaUserModerationRecords: unknown[];
      globalAmbassadorStatus: unknown;
      currentCourseId: string;
      hasPhoneNumber: boolean;
      creationDate: number;
      achievements: unknown[];
      hasPlus: boolean;
      name: string;
      roles: string[];
      classroomLeaderboardsEnabled: boolean;
      emailVerified: boolean;
      courses: Course[];
      totalXp: number;
      streakData: {
        currentStreak: {
          // YYYY-MM-DD
          startDate: string;
          length: number;
          // YYYY-MM-DD
          endDate: string;
        };
      };
    },
  ];
};

type Course = {
  preload: boolean;
  placementTestAvailable: boolean;
  authorId: string;
  title: string;
  learningLanguage: string;
  xp: number;
  healthEnabled: boolean;
  fromLanguage: string;
  crowns: number;
  id: string;
};
