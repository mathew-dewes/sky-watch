"use server";

import prisma from "../db/client";






export async function getCommunities(){
  const communities = await prisma.community.findMany({
    include:{
      moderator: true
    }
  });
  return communities

}

