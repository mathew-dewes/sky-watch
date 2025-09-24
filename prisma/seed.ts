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

const postIds = [
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



const commentsDataPart1 = [
  {
    postId: "dc9244ea-7a1c-4613-a70d-cbfc916704d5",
    content: "Thanks for the heads up",
  },
  {
    postId: "dc9244ea-7a1c-4613-a70d-cbfc916704d5",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "dc9244ea-7a1c-4613-a70d-cbfc916704d5",
    content: "Could you share more details?",
  },
  {
    postId: "dd8c35b5-e450-4c8a-8f61-93b98af64c11",
    content: "Are you sure your information is correct?",
  },
  {
    postId: "dd8c35b5-e450-4c8a-8f61-93b98af64c11",
    content: "Good to know, thanks!",
  },
  {
    postId: "dd8c35b5-e450-4c8a-8f61-93b98af64c11",
    content: "This is really useful info",
  },
  {
    postId: "dd8c35b5-e450-4c8a-8f61-93b98af64c11",
    content: "Thanks for clarifying this",
  },
  {
    postId: "de342609-95e4-45b2-8717-3ae57943a76d",
    content: "Thanks for the heads up",
  },
  {
    postId: "de342609-95e4-45b2-8717-3ae57943a76d",
    content: "I appreciate you sharing this",
  },
  {
    postId: "de342609-95e4-45b2-8717-3ae57943a76d",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "de342609-95e4-45b2-8717-3ae57943a76d",
    content: "Good to know, thanks!",
  },
  {
    postId: "de342609-95e4-45b2-8717-3ae57943a76d",
    content: "Could you share more details?",
  },
  {
    postId: "df8500fc-7a38-4938-a41f-1b258f393250",
    content: "Thanks for clarifying this",
  },
  {
    postId: "df8500fc-7a38-4938-a41f-1b258f393250",
    content: "This is really useful info",
  },
  {
    postId: "df8500fc-7a38-4938-a41f-1b258f393250",
    content: "Thanks for the heads up",
  },
  {
    postId: "df8500fc-7a38-4938-a41f-1b258f393250",
    content: "Good to know, thanks!",
  },
  {
    postId: "df8500fc-7a38-4938-a41f-1b258f393250",
    content: "I appreciate you sharing this",
  },
  {
    postId: "e7b6b64f-51f3-4902-80a6-78e54e4234e6",
    content: "Thanks for the heads up",
  },
  {
    postId: "e7b6b64f-51f3-4902-80a6-78e54e4234e6",
    content: "Could you share more details?",
  },
  {
    postId: "e7b6b64f-51f3-4902-80a6-78e54e4234e6",
    content: "Good to know, thanks!",
  },
  {
    postId: "e7b6b64f-51f3-4902-80a6-78e54e4234e6",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  // ... continues until ~60 records
];

const commentsDataPart2 = [
  {
    postId: "e9e63b9d-ffd5-4bff-aa20-d6133359db6f",
    content: "Thanks for clarifying this",
  },
  {
    postId: "e9e63b9d-ffd5-4bff-aa20-d6133359db6f",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "e9e63b9d-ffd5-4bff-aa20-d6133359db6f",
    content: "I appreciate you sharing this",
  },
  {
    postId: "e0bd60f0-43fb-46be-8de7-4bfd26a3aab7",
    content: "Good to know, thanks!",
  },
  {
    postId: "e0bd60f0-43fb-46be-8de7-4bfd26a3aab7",
    content: "Thanks for the heads up",
  },
  {
    postId: "e0bd60f0-43fb-46be-8de7-4bfd26a3aab7",
    content: "Could you share more details?",
  },
  {
    postId: "ef48e497-f2b3-423d-87ee-558074a5e603",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "ef48e497-f2b3-423d-87ee-558074a5e603",
    content: "I appreciate you sharing this",
  },
  {
    postId: "ef48e497-f2b3-423d-87ee-558074a5e603",
    content: "Good to know, thanks!",
  },
  {
    postId: "150a1340-013c-4093-af35-ba1070f2fa34",
    content: "Thanks for clarifying this",
  },
  {
    postId: "150a1340-013c-4093-af35-ba1070f2fa34",
    content: "Could you share more details?",
  },
  {
    postId: "150a1340-013c-4093-af35-ba1070f2fa34",
    content: "Good to know, thanks!",
  },
  {
    postId: "664e1703-2b90-4b76-829d-77a12d0a1edb",
    content: "Thanks for the heads up",
  },
  {
    postId: "664e1703-2b90-4b76-829d-77a12d0a1edb",
    content: "I appreciate you sharing this",
  },
  {
    postId: "664e1703-2b90-4b76-829d-77a12d0a1edb",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "5ae401dd-2ad5-4439-937c-8f76ea9061f1",
    content: "Thanks for clarifying this",
  },
  {
    postId: "5ae401dd-2ad5-4439-937c-8f76ea9061f1",
    content: "Good to know, thanks!",
  },
  {
    postId: "5ae401dd-2ad5-4439-937c-8f76ea9061f1",
    content: "I appreciate you sharing this",
  },
  {
    postId: "108b35c5-e7b7-49cf-8aac-feecdb8c34bb",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "108b35c5-e7b7-49cf-8aac-feecdb8c34bb",
    content: "Thanks for the heads up",
  },
  {
    postId: "108b35c5-e7b7-49cf-8aac-feecdb8c34bb",
    content: "Good to know, thanks!",
  },
  {
    postId: "ce119bf3-60f6-484d-9cda-2764cde17e99",
    content: "Thanks for clarifying this",
  },
  {
    postId: "ce119bf3-60f6-484d-9cda-2764cde17e99",
    content: "I appreciate you sharing this",
  },
  {
    postId: "ce119bf3-60f6-484d-9cda-2764cde17e99",
    content: "Interesting take, I hadn’t thought of it that way",
  },
  {
    postId: "41238b4f-52c1-478a-907c-cddc605f4209",
    content: "Good to know, thanks!",
  },
  {
    postId: "41238b4f-52c1-478a-907c-cddc605f4209",
    content: "Thanks for the heads up",
  },
  {
    postId: "41238b4f-52c1-478a-907c-cddc605f4209",
    content: "Could you share more details?",
  },
  // ...continues until ~60
];

const commentsDataPart3 = [
  {
    postId: "6877100d-bca6-4530-a82c-3cb81ea7c9ac",
    content: "Interesting point, thanks for sharing",
  },
  {
    postId: "6877100d-bca6-4530-a82c-3cb81ea7c9ac",
    content: "Good to know, appreciate it!",
  },
  {
    postId: "6877100d-bca6-4530-a82c-3cb81ea7c9ac",
    content: "Thanks for clarifying this",
  },
  {
    postId: "f2f59e16-594d-4cde-83bd-37337e3c7247",
    content: "Good insight, thanks!",
  },
  {
    postId: "f2f59e16-594d-4cde-83bd-37337e3c7247",
    content: "Interesting take, hadn’t thought of it that way",
  },
  {
    postId: "f2f59e16-594d-4cde-83bd-37337e3c7247",
    content: "Thanks for sharing!",
  },
  {
    postId: "c764e149-9d94-4861-84e3-0ef8b7075e32",
    content: "Good to know, thanks for posting",
  },
  {
    postId: "c764e149-9d94-4861-84e3-0ef8b7075e32",
    content: "Could you explain more?",
  },
  {
    postId: "c764e149-9d94-4861-84e3-0ef8b7075e32",
    content: "Thanks, really helpful",
  },
  {
    postId: "61105fcf-1cc8-4774-a47a-0260f1d76b9c",
    content: "Good point, appreciate it",
  },
  {
    postId: "61105fcf-1cc8-4774-a47a-0260f1d76b9c",
    content: "Thanks for sharing this info",
  },
  {
    postId: "61105fcf-1cc8-4774-a47a-0260f1d76b9c",
    content: "Interesting, hadn’t considered that",
  },
  {
    postId: "b44b16ce-c539-4e05-977b-9bd0a940fe60",
    content: "Good info, thanks for sharing",
  },
  {
    postId: "b44b16ce-c539-4e05-977b-9bd0a940fe60",
    content: "Thanks for the clarification",
  },
  {
    postId: "b44b16ce-c539-4e05-977b-9bd0a940fe60",
    content: "Could you elaborate more?",
  },
  {
    postId: "de85955e-aadd-40d0-bf33-64fe7a0ad401",
    content: "Interesting, thanks!",
  },
  {
    postId: "de85955e-aadd-40d0-bf33-64fe7a0ad401",
    content: "Good to know, appreciate it",
  },
  {
    postId: "de85955e-aadd-40d0-bf33-64fe7a0ad401",
    content: "Thanks for the heads up",
  },
  {
    postId: "0d34a4d4-3ad7-42f3-bcbe-aca1d3324681",
    content: "Really helpful, thanks!",
  },
  {
    postId: "0d34a4d4-3ad7-42f3-bcbe-aca1d3324681",
    content: "Good insight, appreciate it",
  },
  {
    postId: "0d34a4d4-3ad7-42f3-bcbe-aca1d3324681",
    content: "Thanks for sharing this info",
  },
  {
    postId: "fbc625b9-6f6a-46c5-b93a-00be7dcf8023",
    content: "Good to know, thanks for posting",
  },
  {
    postId: "fbc625b9-6f6a-46c5-b93a-00be7dcf8023",
    content: "Interesting take, appreciate it",
  },
  {
    postId: "fbc625b9-6f6a-46c5-b93a-00be7dcf8023",
    content: "Thanks for clarifying!",
  },
  {
    postId: "e184d0a8-e9ee-443d-81c5-829e77130996",
    content: "Really helpful, thanks",
  },
  {
    postId: "e184d0a8-e9ee-443d-81c5-829e77130996",
    content: "Good point, appreciate it",
  },
  {
    postId: "e184d0a8-e9ee-443d-81c5-829e77130996",
    content: "Thanks for the heads up",
  },
  {
    postId: "549ab93b-d414-489a-a1fc-7617b73f0d56",
    content: "Good to know, thanks for sharing",
  },
  {
    postId: "549ab93b-d414-489a-a1fc-7617b73f0d56",
    content: "Interesting insight, appreciate it",
  },
  {
    postId: "549ab93b-d414-489a-a1fc-7617b73f0d56",
    content: "Thanks for clarifying this",
  },
  {
    postId: "26aade19-b82f-47e3-a2a6-c9a6603e35a4",
    content: "Really helpful, thanks!",
  },
  {
    postId: "26aade19-b82f-47e3-a2a6-c9a6603e35a4",
    content: "Good insight, appreciate it",
  },
  {
    postId: "26aade19-b82f-47e3-a2a6-c9a6603e35a4",
    content: "Thanks for sharing this info",
  },
  // ...continues until ~60
];

const commentsDataPart4 = [
  {
    postId: "782bc6ff-01af-477f-913c-55df9a1bb316",
    content: "Thanks for the clarification!",
  },
  {
    postId: "782bc6ff-01af-477f-913c-55df9a1bb316",
    content: "Really useful info, thanks",
  },
  {
    postId: "782bc6ff-01af-477f-913c-55df9a1bb316",
    content: "Good to know, appreciate it",
  },
  {
    postId: "100ea959-f9b5-455b-ae79-098d113e3852",
    content: "Thanks for sharing this!",
  },
  {
    postId: "100ea959-f9b5-455b-ae79-098d113e3852",
    content: "Interesting, hadn’t thought of it that way",
  },
  {
    postId: "100ea959-f9b5-455b-ae79-098d113e3852",
    content: "Good insight, thanks!",
  },
  {
    postId: "a5b19f9f-f2cc-4abc-8d95-861e4c670860",
    content: "Really helpful, appreciate it",
  },
  {
    postId: "a5b19f9f-f2cc-4abc-8d95-861e4c670860",
    content: "Thanks for posting this info",
  },
  {
    postId: "a5b19f9f-f2cc-4abc-8d95-861e4c670860",
    content: "Good point, really helpful",
  },
  {
    postId: "eeaa51d8-06a9-4a05-8935-fe4583e5484f",
    content: "Interesting, thanks for sharing",
  },
  {
    postId: "eeaa51d8-06a9-4a05-8935-fe4583e5484f",
    content: "Good to know, appreciate it",
  },
  {
    postId: "eeaa51d8-06a9-4a05-8935-fe4583e5484f",
    content: "Thanks for the info!",
  },
  {
    postId: "c908e16c-f6ab-495d-a0ec-ae2e49139f64",
    content: "Good point, appreciate it",
  },
  {
    postId: "c908e16c-f6ab-495d-a0ec-ae2e49139f64",
    content: "Really useful info, thanks",
  },
  {
    postId: "c908e16c-f6ab-495d-a0ec-ae2e49139f64",
    content: "Thanks for sharing this!",
  },
  {
    postId: "0462e4e6-b84c-473f-b6d0-db66ea16b4a2",
    content: "Good insight, appreciate it",
  },
  {
    postId: "0462e4e6-b84c-473f-b6d0-db66ea16b4a2",
    content: "Really helpful, thanks!",
  },
  {
    postId: "0462e4e6-b84c-473f-b6d0-db66ea16b4a2",
    content: "Thanks for posting this info",
  },
  {
    postId: "3e466975-2b20-45e0-9db9-b21051559eba",
    content: "Good to know, thanks for sharing",
  },
  {
    postId: "3e466975-2b20-45e0-9db9-b21051559eba",
    content: "Interesting point, appreciate it",
  },
  {
    postId: "3e466975-2b20-45e0-9db9-b21051559eba",
    content: "Thanks for clarifying this",
  },
  {
    postId: "c2d01505-1063-4561-9285-51876f501b9c",
    content: "Good info, thanks!",
  },
  {
    postId: "c2d01505-1063-4561-9285-51876f501b9c",
    content: "Really helpful, appreciate it",
  },
  {
    postId: "c2d01505-1063-4561-9285-51876f501b9c",
    content: "Thanks for sharing!",
  },
  {
    postId: "79a04c78-7e88-42b7-bf31-4408d6af61e0",
    content: "Good insight, thanks for sharing",
  },
  {
    postId: "79a04c78-7e88-42b7-bf31-4408d6af61e0",
    content: "Interesting, really helpful",
  },
  {
    postId: "79a04c78-7e88-42b7-bf31-4408d6af61e0",
    content: "Thanks for clarifying",
  },
  {
    postId: "653274e9-6596-4647-8225-f3ba3a03123f",
    content: "Good to know, appreciate it",
  },
  {
    postId: "653274e9-6596-4647-8225-f3ba3a03123f",
    content: "Thanks for posting this info",
  },
  {
    postId: "653274e9-6596-4647-8225-f3ba3a03123f",
    content: "Really helpful, thanks!",
  },
  // ... continue until all posts have 3 comments
];

// Assuming you have 4 chunks:


const commentContents = commentsDataPart4.map(comment => comment.content);



async function seedCommentsRandomly() {
  for (const postId of postIds) {
    const commentsForPost = Array.from({ length: 3 }).map(() => ({
      postId,
      userId: users[Math.floor(Math.random() * users.length)],
      content: commentContents[Math.floor(Math.random() * commentContents.length)]
    }));

    await prisma.comment.createMany({
      data: commentsForPost,
      skipDuplicates: true
    });

    console.log(`Seeded 3 comments for post ${postId}`);
  }
}

(async () => {
  await seedCommentsRandomly();
  await prisma.$disconnect();
})();