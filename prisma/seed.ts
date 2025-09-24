import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();




const users = [
    "qi2cOvRykCJUSDhLmChGbtv1JevqIVmd",
    "EwWNpwBC4XW6hSxHZLdkWRm5kgETpIix",
    "bXBY6DQBy6jyrDRx4qNSoAcqT2UNd8Xs",
    "mgXvZ7tFanCnEWDia02dfPC8HbyIBzIo",
    "nh4HRm4CP7AFET3nFe3dB3CdcwTYKiZJ",
    "2dd2CcWbGiaI5QQK1WrjsIwC671mD0lW",
    "c7uo45uzx4yvYJf4MQ6BR5Q7h5hwjXu5",
    "qkW2Tvx6xmEwSPaOvAvA5QZmKQ0GwfHo",
    "LRCq2xod1u9cT4BRakjomV5mENxdT2jB",
    "Cbh1ecpxFS4y71HAJ3daSkSlH5X5TZ2d",
    "t345dfMedeeE1T654bkqwMRHHChEKank",
    "k6UTaxpP8FvUd3mTH1Lqn1vohTJHwghJ",
    "2E7tp2TBiWrCFvlk0FkQhDIyjJAMwVUP",
    "bsaa6zfB2Q0THC5nzF0JZkeG4HPhEjdh",
    "Sv8QPrUm8S4SHiy7V9n9uAzpPAHWhULY",
    "GCAT3zkEf2CDt9VA2pnZLRYezIuqCQW1",
    "Aj6YzCKnWWaI2TGrs4BdFDkj4fKsDGro"
]

const posts = [
    "e0bd60f0-43fb-46be-8de7-4bfd26a3aab7",
    "ef48e497-f2b3-423d-87ee-558074a5e603",
    "150a1340-013c-4093-af35-ba1070f2fa34",
    "664e1703-2b90-4b76-829d-77a12d0a1edb",
    "5ae401dd-2ad5-4439-937c-8f76ea9061f1",
    "108b35c5-e7b7-49cf-8aac-feecdb8c34bb",
    "ce119bf3-60f6-484d-9cda-2764cde17e99",
    "41238b4f-52c1-478a-907c-cddc605f4209",
    "6877100d-bca6-4530-a82c-3cb81ea7c9ac",
    "f2f59e16-594d-4cde-83bd-37337e3c7247",
    "c764e149-9d94-4861-84e3-0ef8b7075e32",
    "61105fcf-1cc8-4774-a47a-0260f1d76b9c",
    "b44b16ce-c539-4e05-977b-9bd0a940fe60",
    "de85955e-aadd-40d0-bf33-64fe7a0ad401",
    "0d34a4d4-3ad7-42f3-bcbe-aca1d3324681",
    "fbc625b9-6f6a-46c5-b93a-00be7dcf8023",
    "e184d0a8-e9ee-443d-81c5-829e77130996",
    "549ab93b-d414-489a-a1fc-7617b73f0d56",
    "26aade19-b82f-47e3-a2a6-c9a6603e35a4",
    "782bc6ff-01af-477f-913c-55df9a1bb316",
    "100ea959-f9b5-455b-ae79-098d113e3852",
    "a5b19f9f-f2cc-4abc-8d95-861e4c670860",
    "eeaa51d8-06a9-4a05-8935-fe4583e5484f",
    "c908e16c-f6ab-495d-a0ec-ae2e49139f64",
    "0462e4e6-b84c-473f-b6d0-db66ea16b4a2",
    "3e466975-2b20-45e0-9db9-b21051559eba",
    "c2d01505-1063-4561-9285-51876f501b9c",
    "79a04c78-7e88-42b7-bf31-4408d6af61e0",
    "653274e9-6596-4647-8225-f3ba3a03123f",
    "49ca6c13-8bc5-4bb9-9aab-e8323eb34a38",
    "8e935e1f-dfac-4a11-8068-0a909830f936",
    "6a49264c-0a51-4720-8915-210d40f74548",
    "ecca93b6-bc47-4821-8ed6-4b8a4ab7a948",
    "2b99b184-ad18-4faf-858f-61973570bafb",
    "abf5cb97-e589-4aef-8be4-232fe3f64a07",
    "7c61164b-9523-4134-9206-a90a29318920",
    "7df86311-405b-43dd-a5d4-e7bde607210b",
    "442bfba5-b50f-4a3c-924d-0af035b7dc53",
    "9e5f4b78-c44f-47a9-afaf-1c5471cf7be0",
    "ab0b4f84-0771-45df-a869-77ee36a914de",
    "7583a0ac-fc30-4ba4-9422-bcd115e621b9",
    "34528f95-378e-4a54-a2ec-3f020b9994e7",
    "b7981a2d-0004-4e8a-a427-aba01804fd2e",
    "d4f5b63b-0c82-409b-8628-b618194b33cf",
    "de5f26ea-7368-4d79-9c3a-4d0f42833369",
    "e72be034-7b08-4988-88c3-93166dbd2ebd"
]





function shuffleArray<T>(arr: T[]) {
  return arr.sort(() => Math.random() - 0.5);
}

async function seedRandomLikes(maxLikesPerPost = 5) {
  for (const postId of posts) {
    // Shuffle users so likes are random
    const shuffledUsers = shuffleArray([...users]);

    // Pick a random number of likes for this post
    const likesCount = Math.floor(Math.random() * maxLikesPerPost) + 1;

    const likesData = shuffledUsers.slice(0, likesCount).map(userId => ({
      postId,
      userId,
    }));

    try {
      await prisma.like.createMany({
        data: likesData,
        skipDuplicates: true, // avoids @@unique conflicts
      });
      console.log(`Inserted ${likesData.length} likes for post ${postId}`);
    } catch (error) {
      console.error("Error inserting likes:", error);
    }
  }
}

// Run the seeder
(async () => {
  await seedRandomLikes(10); // max 10 likes per post
  await prisma.$disconnect();
})();