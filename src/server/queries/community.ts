"use server";

import prisma from "../db/client";






export async function getCommunities(){
  const communities = await prisma.community.findMany({
    include:{
      moderator: true,
      _count:{
        select:{
          Posts: true
        }
      }
    }
  });
  return communities

}


export async function getCommunityNames(){
const communities = await prisma.community.findMany({
  select:{
    name: true
  }
});

return communities

}

